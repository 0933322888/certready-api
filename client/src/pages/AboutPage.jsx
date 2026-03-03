import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
      />
      <h1 className="text-4xl font-display font-bold text-text-primary mb-6">
        {t('about.title')}
      </h1>

      <div className="space-y-6 text-text-primary leading-relaxed">
        <p className="text-text-muted text-lg">
          {t('about.intro')}
        </p>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            {t('about.hairstylistHeading')}
          </h2>
          <p className="text-text-muted mb-2">
            {t('about.hairstylistPara')}
          </p>
          <p className="text-text-muted">
            {t('about.marynaBio')}
          </p>
        </section>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            {t('about.cooperateHeading')}
          </h2>
          <p className="text-text-muted">
            {t('about.cooperatePara')}
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 text-accent hover:text-accent/80 font-medium"
          >
            {t('about.contactUs')} →
          </Link>
        </Card>
      </div>

      <div className="mt-10 text-center">
        <Link to="/" className="text-accent hover:text-accent/80 text-sm">
          ← {t('privacy.backHome')}
        </Link>
      </div>
    </div>
  );
}
