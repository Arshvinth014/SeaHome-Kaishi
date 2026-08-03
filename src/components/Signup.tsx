import { useState } from 'react';
import { X, Settings, Globe, ArrowRight, Sparkles, ShieldCheck, Mail, Loader2, KeyRound, Phone } from 'lucide-react';

/**
 * Props for the Signup modal component.
 * @param open - Whether the modal is visible.
 * @param onClose - Callback to close the modal.
 * @param isNewUser - Whether this is a new user (shows Sign Up tab) or returning user (shows Log In tab).
 */
interface SignupProps {
  open: boolean;
  onClose: () => void;
  isNewUser?: boolean;
}

const countryCodes = [
  { code: '+1', label: 'US +1' },
  { code: '+91', label: 'IN +91' },
  { code: '+44', label: 'UK +44' },
  { code: '+61', label: 'AU +61' },
  { code: '+81', label: 'JP +81' },
  { code: '+86', label: 'CN +86' },
  { code: '+49', label: 'DE +49' },
  { code: '+33', label: 'FR +33' },
  { code: '+94', label: 'LK +94' },
  { code: '+971', label: 'AE +971' },
  { code: '+966', label: 'SA +966' },
  { code: '+65', label: 'SG +65' },
  { code: '+852', label: 'HK +852' },
  { code: '+82', label: 'KR +82' },
  { code: '+7', label: 'RU +7' },
];

type SignupStep = 'initial' | 'email' | 'loading' | 'otp' | 'mobile' | 'mobile-loading' | 'mobile-otp';

export default function Signup({ open, onClose, isNewUser = true }: SignupProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(isNewUser ? 'signup' : 'login');
  const [signupStep, setSignupStep] = useState<SignupStep>('initial');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [mobileOtp, setMobileOtp] = useState('');

  const handleManualSignUp = () => {
    setSignupStep('email');
  };

  const handleSendOtp = () => {
    if (!email.trim()) return;
    setSignupStep('loading');
    // Simulate OTP sending — replace with actual API call
    setTimeout(() => {
      setSignupStep('otp');
    }, 2000);
  };

  const handleSendMobileOtp = () => {
    if (!phone.trim()) return;
    setSignupStep('mobile-loading');
    // Simulate OTP sending — replace with actual API call
    setTimeout(() => {
      setSignupStep('mobile-otp');
    }, 2000);
  };

  const handleBack = () => {
    switch (signupStep) {
      case 'email':
        setSignupStep('initial');
        break;
      case 'otp':
        setSignupStep('email');
        break;
      case 'mobile':
        setSignupStep('email');
        break;
      case 'mobile-otp':
        setSignupStep('mobile');
        break;
    }
  };

  const handleClose = () => {
    setSignupStep('initial');
    setEmail('');
    setOtp('');
    setPhone('');
    setMobileOtp('');
    setCountryCode('+1');
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-md sm:px-6">
      <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_25px_80px_-28px_rgba(15,23,42,0.65)] backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-600/10 via-cyan-400/10 to-indigo-500/10" />

        <div className="relative p-4 sm:p-6">
          <button
            className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white/80 p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-800"
            onClick={handleClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="mb-5 mt-2 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">SeaHome Net</p>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                {activeTab === 'signup' ? 'Create your account' : 'Welcome back'}
              </h2>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
            <button
              type="button"
              className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${activeTab === 'login' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
            <button
              type="button"
              className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${activeTab === 'signup' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>

          {activeTab === 'signup' && signupStep === 'initial' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Fast access</p>
                <p className="mt-1 text-sm text-slate-600">
                  Continue with Google or create your account manually in seconds.
                </p>
              </div>

              <button className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Globe size={18} />
                </span>
                <span className="flex-1 text-left">Continue with Google</span>
                <ArrowRight size={16} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
              </button>

              <button
                onClick={handleManualSignUp}
                className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Settings size={18} />
                </span>
                <span className="flex-1 text-left">Manual Sign Up</span>
                <ArrowRight size={16} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck size={14} className="text-emerald-500" />
                Secure sign-in for buyers, renters, and investors.
              </div>
            </div>
          )}

          {activeTab === 'signup' && signupStep === 'email' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email address</p>
                <p className="mt-1 text-sm text-slate-600">
                  Enter your email to receive a one-time verification code.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex items-center gap-3 shadow-sm transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
                <Mail size={18} className="text-slate-400 shrink-0" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
                  className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                  autoFocus
                />
              </div>

              <button
                onClick={handleSendOtp}
                disabled={!email.trim()}
                className="group flex w-full items-center gap-3 rounded-2xl border border-blue-200 bg-blue-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-blue-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                  <ArrowRight size={18} />
                </span>
                <span className="flex-1 text-left">Send Verification Code</span>
              </button>

              <button
                onClick={() => setSignupStep('mobile')}
                className="w-full text-center text-xs font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
              >
                Try another way — Mobile OTP verification
              </button>

              <button
                onClick={handleBack}
                className="w-full text-center text-xs font-medium text-slate-500 transition hover:text-slate-700"
              >
                ← Back to sign-up options
              </button>
            </div>
          )}

          {activeTab === 'signup' && signupStep === 'loading' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Sending code</p>
                <p className="mt-1 text-sm text-slate-600">
                  We're sending a one-time verification code to <strong className="text-slate-800">{email}</strong>.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center py-8">
                <Loader2 size={40} className="animate-spin text-blue-600" />
                <p className="mt-4 text-sm font-medium text-slate-600">Please wait…</p>
              </div>
            </div>
          )}

          {activeTab === 'signup' && signupStep === 'otp' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Check your inbox</p>
                <p className="mt-1 text-sm text-slate-600">
                  Enter the 6-digit code sent to <strong className="text-slate-800">{email}</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex items-center gap-3 shadow-sm transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
                <KeyRound size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="000000"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none tracking-[0.3em]"
                  autoFocus
                />
              </div>

              <button
                disabled={otp.length !== 6}
                className="group flex w-full items-center gap-3 rounded-2xl border border-blue-200 bg-blue-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-blue-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                  <ShieldCheck size={18} />
                </span>
                <span className="flex-1 text-left">Verify & Create Account</span>
              </button>

              <button
                onClick={handleBack}
                className="w-full text-center text-xs font-medium text-slate-500 transition hover:text-slate-700"
              >
                ← Change email address
              </button>
            </div>
          )}

          {activeTab === 'signup' && signupStep === 'mobile' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mobile verification</p>
                <p className="mt-1 text-sm text-slate-600">
                  Enter your mobile number to receive a one-time verification code via SMS.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
                <div className="flex items-center gap-2 px-4 py-3">
                  <Phone size={18} className="text-slate-400 shrink-0" />
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-transparent text-sm font-medium text-slate-700 outline-none cursor-pointer"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <span className="text-slate-300">|</span>
                  <input
                    type="tel"
                    placeholder="5551234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMobileOtp()}
                    className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                    autoFocus
                  />
                </div>
              </div>

              <button
                onClick={handleSendMobileOtp}
                disabled={!phone.trim()}
                className="group flex w-full items-center gap-3 rounded-2xl border border-blue-200 bg-blue-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-blue-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                  <ArrowRight size={18} />
                </span>
                <span className="flex-1 text-left">Send Verification Code</span>
              </button>

              <button
                onClick={handleBack}
                className="w-full text-center text-xs font-medium text-slate-500 transition hover:text-slate-700"
              >
                ← Back to email verification
              </button>
            </div>
          )}

          {activeTab === 'signup' && signupStep === 'mobile-loading' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Sending code</p>
                <p className="mt-1 text-sm text-slate-600">
                  We're sending a one-time verification code to{' '}
                  <strong className="text-slate-800">{countryCode} {phone}</strong>.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center py-8">
                <Loader2 size={40} className="animate-spin text-blue-600" />
                <p className="mt-4 text-sm font-medium text-slate-600">Please wait…</p>
              </div>
            </div>
          )}

          {activeTab === 'signup' && signupStep === 'mobile-otp' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Check your phone</p>
                <p className="mt-1 text-sm text-slate-600">
                  Enter the 6-digit code sent to{' '}
                  <strong className="text-slate-800">{countryCode} {phone}</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex items-center gap-3 shadow-sm transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
                <KeyRound size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="000000"
                  maxLength={6}
                  value={mobileOtp}
                  onChange={(e) => setMobileOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none tracking-[0.3em]"
                  autoFocus
                />
              </div>

              <button
                disabled={mobileOtp.length !== 6}
                className="group flex w-full items-center gap-3 rounded-2xl border border-blue-200 bg-blue-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-blue-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                  <ShieldCheck size={18} />
                </span>
                <span className="flex-1 text-left">Verify & Create Account</span>
              </button>

              <button
                onClick={handleBack}
                className="w-full text-center text-xs font-medium text-slate-500 transition hover:text-slate-700"
              >
                ← Change mobile number
              </button>
            </div>
          )}

          {activeTab === 'login' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Welcome back</p>
                <p className="mt-1 text-sm text-slate-600">
                  Sign in to your account to continue where you left off.
                </p>
              </div>

              <button className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Globe size={18} />
                </span>
                <span className="flex-1 text-left">Auto Google Login</span>
                <ArrowRight size={16} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck size={14} className="text-emerald-500" />
                Secure sign-in for buyers, renters, and investors.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}