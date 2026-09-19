import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Renders SEO-friendly breadcrumb navigation.
 * @param {Array<{ name: string, url: string }>} items - Breadcrumb items (last item is current page, not linked)
 * @param {string} [ariaLabel] - Optional aria-label for the nav (defaults to common.ariaLabelBreadcrumb)
 */
export default function Breadcrumb({ items, ariaLabel }) {
  const { t } = useTranslation();
  if (!items || !items.length) return null;

  return (
    <nav className="text-sm text-text-muted mb-6 overflow-x-auto pb-1 scrollbar-none" aria-label={ariaLabel || t('common.ariaLabelBreadcrumb')}>
      <div className="flex items-center flex-nowrap sm:flex-wrap whitespace-nowrap min-w-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={index} className="inline-flex items-center">
              {index > 0 && <span className="mx-2 text-border">/</span>}
              {isLast ? (
                <span className="text-text-primary truncate max-w-[200px] sm:max-w-none">{item.name}</span>
              ) : (
                <Link to={item.url} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
