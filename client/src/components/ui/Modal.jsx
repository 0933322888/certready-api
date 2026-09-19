import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'md' 
}) {
  const { t } = useTranslation();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={`relative bg-surface border border-border rounded-t-2xl sm:rounded-2xl ${sizes[size]} w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl`}>
        <div className="sticky top-0 bg-surface/95 backdrop-blur-md border-b border-border px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between z-10">
          <h2 className="text-lg sm:text-xl font-display font-bold text-text-primary pr-2">{title}</h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary transition-colors p-2 -mr-2 rounded-lg hover:bg-surface-2 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label={t('common.ariaLabelClose')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
