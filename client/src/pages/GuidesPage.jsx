import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import { tradeGuides } from '../data/tradeGuides';
import Card from '../components/ui/Card';

export default function GuidesPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('guidesPage.title')}
        description={t('guidesPage.seoDescription')}
        canonical="/guides"
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-display font-bold text-text-primary mb-4">
          {t('guidesPage.title')}
        </h1>
        <p className="text-lg text-text-muted mb-8">
          {t('guidesPage.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tradeGuides.map((guide) => (
            <Link key={guide.slug} to={`/guides/${guide.slug}`}>
              <Card hover className="h-full">
                <h2 className="text-xl font-display font-bold text-text-primary mb-2">
                  {guide.tradeName} ({guide.tradeCode})
                </h2>
                <p className="text-text-muted text-sm">
                  {guide.examQuestions} questions · {guide.passMark}% pass mark · {guide.apprenticeshipHours.toLocaleString()} hours
                </p>
                <span className="text-accent font-medium mt-2 inline-block">
                  {t('guidesPage.readGuide')}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
