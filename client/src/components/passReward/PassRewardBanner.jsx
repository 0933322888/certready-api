import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { paths } from '../../utils/routes';
import { PASS_REWARD_CONFIG } from '../../config/passReward';

export default function PassRewardBanner({ className = '', compact = false, highlight = false }) {
  if (compact) {
    return (
      <div className={`p-3 rounded-xl bg-accent-warm/10 border border-accent-warm/20 flex items-center justify-between gap-3 ${className}`}>
        <div className="flex items-center gap-2">
          <Badge variant="warm" className="text-xs shrink-0">Pass Reward</Badge>
          <p className="text-xs text-text-primary">
            Pass your exam and get your {PASS_REWARD_CONFIG.standardPriceCad} course fee back.
          </p>
        </div>
        <Link
          to={paths.passReward}
          className="text-xs font-semibold text-accent-warm hover:underline shrink-0"
        >
          Details →
        </Link>
      </div>
    );
  }

  if (highlight) {
    return (
      <div className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-accent-warm/20 via-surface to-accent/10 border-2 border-accent-warm/40 shadow-lg shadow-accent-warm/5 relative overflow-hidden ${className}`}>
        <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-accent-warm/10 blur-2xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="warm" className="text-xs font-semibold px-2.5 py-1">
                🏆 {PASS_REWARD_CONFIG.headlines.badge}
              </Badge>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                100% Full Refund Guarantee
              </span>
              <span className="text-xs text-text-muted">6-Month Window</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-text-primary leading-snug">
                Pass Your Exam & Get Your Course <span className="text-accent-warm underline decoration-accent-warm/50 underline-offset-4">100% Reimbursed</span>
              </h2>
              <p className="text-sm sm:text-base text-text-muted mt-2 leading-relaxed">
                Study with CertReady, pass your official Canadian certification exam within 6 months, and we will refund your entire course fee. No catch, no positive review required.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-muted pt-1">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Full {PASS_REWARD_CONFIG.standardPriceCad} reimbursement
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Simple proof of passing
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Direct refund to your payment method
              </span>
            </div>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3">
            <Link to={paths.passReward} className="w-full sm:w-auto">
              <Button className="w-full text-center bg-accent-warm hover:bg-accent-warm/90 text-white font-semibold shadow-md">
                See How It Works →
              </Button>
            </Link>
            <Link
              to={paths.passReward}
              className="text-xs font-semibold text-accent-warm hover:underline text-center sm:text-right"
            >
              Promotion Details & FAQ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-5 rounded-2xl bg-gradient-to-r from-accent-warm/15 via-accent/10 to-surface border border-accent-warm/30 relative overflow-hidden ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant="warm" className="text-xs">
              {PASS_REWARD_CONFIG.headlines.badge}
            </Badge>
            <span className="text-xs text-text-muted">6-Month Window</span>
          </div>
          <h4 className="text-lg font-display font-bold text-text-primary">
            {PASS_REWARD_CONFIG.headlines.primary}
          </h4>
          <p className="text-sm text-text-muted mt-1 max-w-xl">
            Pass your certification exam within 6 months of purchase, submit reasonable proof, and we’ll refund your full course fee. No positive review required.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <Link
            to={paths.passReward}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-surface border border-border text-sm font-semibold text-text-primary hover:text-accent hover:border-accent transition-colors"
          >
            Learn How It Works →
          </Link>
        </div>
      </div>
    </div>
  );
}
