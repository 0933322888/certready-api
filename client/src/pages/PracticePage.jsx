import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getGuideBySlug } from '../data/tradeGuides';
import { getCourse } from '../data/courseContent';
import { getFreeChapters } from '../data/courseHelpers';
import SEO from '../components/seo/SEO';
import { getPracticePageSEO } from '../utils/seo';
import PracticeQuestion from '../components/course/PracticeQuestion';
import NotFoundPage from './NotFoundPage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const FREE_QUESTION_COUNT = 5;

export default function PracticePage() {
  const { tradeSlug } = useParams();
  const { t } = useTranslation();
  const guide = getGuideBySlug(tradeSlug);

  if (!guide) {
    return <NotFoundPage />;
  }

  const course = getCourse(guide.courseSlug, 'en');
  if (!course) {
    return <NotFoundPage />;
  }

  const freeChapters = getFreeChapters(course);
  const allFreeQuestions = freeChapters.flatMap((ch) =>
    (ch.practiceQuestions || []).map((q) => ({ ...q, chapterId: ch.id }))
  );
  const freeQuestions = allFreeQuestions.slice(0, FREE_QUESTION_COUNT);

  const seo = getPracticePageSEO({
    tradeName: guide.tradeName,
    tradeCode: guide.tradeCode,
    tradeSlug: guide.slug,
    questionCount: freeQuestions.length,
  });

  return (
    <>
      <SEO {...seo} />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-text-muted mb-8" aria-label={t('common.ariaLabelBreadcrumb')}>
          <Link to="/" className="hover:text-accent">{t('practicePage.home')}</Link>
          <span className="mx-2">/</span>
          <Link to={`/guides/${guide.slug}`} className="hover:text-accent">{t('practicePage.guide', { tradeName: guide.tradeName })}</Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{t('practicePage.freePracticeQuestions')}</span>
        </nav>

        <h1 className="text-4xl font-display font-bold text-text-primary mb-4">
          {t('practicePage.title', { tradeName: guide.tradeName })}
        </h1>
        <p className="text-lg text-text-muted mb-8">
          {t('practicePage.subtitle', { count: freeQuestions.length, code: guide.tradeCode })}
        </p>

        {freeQuestions.length === 0 ? (
          <Card>
            <p className="text-text-muted mb-4">
              {t('practicePage.noFreeQuestions')}
            </p>
            <Link to={`/courses/${guide.courseSlug}`}>
              <Button>{t('practicePage.viewCourseBtn', { tradeName: guide.tradeName })}</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-6">
            {freeQuestions.map((q, index) => {
              const nextQ = freeQuestions[index + 1];
              return (
                <PracticeQuestion
                  key={q.id}
                  questionId={`practice-${q.id}`}
                  actualQuestionId={q.id}
                  nextQuestionId={nextQ ? `practice-${nextQ.id}` : null}
                  courseId={null}
                  chapterId={null}
                  question={q.question}
                  options={q.options}
                  correctIndex={q.correctIndex}
                  explanation={q.explanation}
                  savedAnswer={null}
                  onAnswerSave={null}
                  explanationLabel={t('learn.explanation')}
                  nextQuestionLabel={t('learn.nextQuestion')}
                />
              );
            })}
          </div>
        )}

        <section className="mt-12 pt-8 border-t border-border">
          <p className="text-text-muted mb-4">
            {t('practicePage.wantMorePractice', { tradeName: guide.tradeName, count: course.totalQuestions })}
          </p>
          <Link to={`/courses/${guide.courseSlug}`}>
            <Button>{t('practicePage.viewFullCourseBtn', { tradeName: guide.tradeName })}</Button>
          </Link>
        </section>
      </main>
    </>
  );
}
