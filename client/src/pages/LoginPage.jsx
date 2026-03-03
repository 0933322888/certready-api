import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loginWithGoogle, loading } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await login(data.email, data.password);
      toast.success(t('auth.welcomeBackToast'));
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || t('auth.loginFailed'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <SEO noIndex title="Log In" description="Log in to your CertReady account." />
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
            {t('auth.welcomeBack')}
          </h1>
          <p className="text-text-muted">{t('auth.signInContinue')}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              {t('auth.email')}
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-danger">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              {t('auth.password')}
            </label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-danger">{errors.password.message}</p>
            )}
            <div className="mt-2 text-right">
              <Link to="/forgot-password" className="text-sm text-accent hover:text-accent/80">
                {t('auth.forgotPassword')}
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={submitting || loading}
          >
            {submitting || loading ? (
              <span className="flex items-center justify-center">
                <Spinner size="sm" className="mr-2" />
                {t('auth.signingIn')}
              </span>
            ) : (
              t('auth.signIn')
            )}
          </Button>
        </form>

        {import.meta.env.VITE_GOOGLE_CLIENT_ID && (
          <>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-surface text-text-muted">{t('auth.orContinueWith')}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={async (res) => {
                  if (!res.credential) return;
                  setSubmitting(true);
                  try {
                    await loginWithGoogle(res.credential);
                    toast.success(t('auth.welcomeBackToast'));
                    navigate(location.state?.from?.pathname || '/dashboard', { replace: true });
                  } catch (err) {
                    toast.error(err.response?.data?.message || t('auth.googleSignInFailed'));
                  } finally {
                    setSubmitting(false);
                  }
                }}
                onError={() => toast.error(t('auth.googleSignInFailed'))}
                useOneTap={false}
                theme="filled_black"
                size="large"
                text="continue_with"
              />
            </div>
          </>
        )}

        <div className="mt-6 text-center">
          <p className="text-text-muted">
            {t('auth.noAccount')}{' '}
            <Link to="/register" className="text-accent hover:text-accent/80 font-medium">
              {t('auth.signUp')}
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
