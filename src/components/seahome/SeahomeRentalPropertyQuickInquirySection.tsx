import React, { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

const HEADER_YELLOW = '#f5c842';
const BLUE = '#0088cc';
const ORANGE = '#f38100';
const CRIMSON = '#b3002d';
const LABEL_BG = '#f5f0e6';

const STEPS = [
  { id: 1, label: 'Your details' },
  { id: 2, label: 'Review' },
  { id: 3, label: 'Complete' },
] as const;

const INQUIRY_OPTIONS = [
  { id: 'details', label: 'Property details (area, conditions, etc.)' },
  { id: 'viewing', label: 'Schedule an in-person viewing' },
  { id: 'vacancy', label: 'Latest vacancy status' },
] as const;

type Props = {
  propertyTitle: string;
  storeCode?: string;
};

function RequiredBadge() {
  return (
    <span
      className="shrink-0 rounded-sm px-1 py-0.5 text-[9px] font-bold leading-none text-white sm:text-[10px]"
      style={{ backgroundColor: CRIMSON }}
    >
      Required
    </span>
  );
}

function FormRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 border-b border-gray-200 last:border-b-0 sm:grid-cols-[minmax(7rem,11rem)_1fr]">
      <div
        className="flex items-start justify-between gap-2 px-3 py-3 sm:flex-col sm:items-start sm:justify-start sm:py-4"
        style={{ backgroundColor: LABEL_BG }}
      >
        <span className="text-xs font-bold text-gray-800 sm:text-sm">{label}</span>
        <RequiredBadge />
      </div>
      <div className="bg-white px-3 py-3 sm:px-4 sm:py-4">{children}</div>
    </div>
  );
}

const SeahomeRentalPropertyQuickInquirySection: React.FC<Props> = ({
  propertyTitle,
  storeCode = '00260220',
}) => {
  const [step] = useState(1);
  const [inquiryTypes, setInquiryTypes] = useState<Record<string, boolean>>({
    details: false,
    viewing: false,
    vacancy: false,
  });
  const [otherMessage, setOtherMessage] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [agencyShareConsent, setAgencyShareConsent] = useState(false);

  const toggleInquiry = (id: string) => {
    setInquiryTypes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const inputClass =
    'w-full border border-gray-300 px-2.5 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600';

  return (
    <section id="quick-inquiry" className="mt-6 border border-gray-300 bg-white">
      <div className="px-4 py-3 sm:px-5 sm:py-4" style={{ backgroundColor: HEADER_YELLOW }}>
        <h2 className="text-base font-bold text-gray-900 sm:text-lg">Quick inquiry</h2>
        <p className="mt-0.5 text-xs text-gray-800 sm:text-sm">
          Fill in the required fields to contact us right away.
        </p>
      </div>

      <div className="border-b border-gray-200 bg-white px-4 py-3 sm:px-5">
        <p
          className="inline-block border-2 px-3 py-2 text-xs font-bold leading-snug text-gray-900 sm:text-sm"
          style={{ borderColor: CRIMSON }}
        >
          {propertyTitle}
        </p>
      </div>

      <ol className="flex border-b border-gray-300">
        {STEPS.map((s, index) => {
          const active = s.id === step;
          const past = s.id < step;
          return (
            <li
              key={s.id}
              className={`relative flex flex-1 items-center justify-center px-2 py-2.5 text-center text-[10px] font-bold leading-tight sm:px-3 sm:text-xs ${
                active
                  ? 'z-10 text-white'
                  : past
                    ? 'bg-[#d6e8f5] text-gray-700'
                    : 'bg-[#ececec] text-gray-500'
              }`}
              style={active ? { backgroundColor: BLUE } : undefined}
            >
              <span className="mr-1">{s.id}.</span>
              {s.label}
              {index < STEPS.length - 1 ? (
                <span
                  className="absolute -right-3 top-0 z-20 hidden h-full w-3 sm:block"
                  style={{
                    background: active ? BLUE : past ? '#d6e8f5' : '#ececec',
                    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                  }}
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="border-b border-gray-200">
          <FormRow label="Inquiry topic">
            <ul className="space-y-2">
              {INQUIRY_OPTIONS.map((opt) => (
                <li key={opt.id}>
                  <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-800 sm:text-sm">
                    <input
                      type="checkbox"
                      checked={Boolean(inquiryTypes[opt.id])}
                      onChange={() => toggleInquiry(opt.id)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600"
                    />
                    <span>{opt.label}</span>
                  </label>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-semibold text-gray-700">Other</p>
            <textarea
              value={otherMessage}
              onChange={(e) => setOtherMessage(e.target.value)}
              rows={4}
              className={`${inputClass} mt-1 resize-y`}
              placeholder="Enter any other questions or requests"
            />
          </FormRow>

          <FormRow label="Name">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-600">
                  Last name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Yamada"
                  autoComplete="family-name"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold text-gray-600">
                  First name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Taro"
                  autoComplete="given-name"
                />
              </div>
            </div>
          </FormRow>

          <FormRow label="Email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="e.g. yamada.taro@example.com"
              autoComplete="email"
            />
            <button
              type="button"
              className="mt-1.5 text-[11px] font-semibold text-sky-700 underline sm:text-xs"
            >
              Using a mobile carrier email address?
            </button>
          </FormRow>

          <FormRow label="Phone">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
              placeholder="090-0000-0000"
              autoComplete="tel"
            />
            <p className="mt-1.5 text-[10px] leading-snug text-gray-500 sm:text-[11px]">
              We may send a verification code to this number by SMS or voice call.
            </p>
          </FormRow>
        </div>

        <div className="space-y-3 bg-[#fafafa] px-4 py-4 sm:px-5">
          <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-relaxed text-gray-700 sm:text-xs">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600"
            />
            <span>
              I agree to receive property information and related updates from Seahome (you may opt
              out at any time).
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-relaxed text-gray-700 sm:text-xs">
            <input
              type="checkbox"
              checked={agencyShareConsent}
              onChange={(e) => setAgencyShareConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600"
            />
            <span>
              I agree that my inquiry details may be shared with the listing agency so they can
              respond to my request.
            </span>
          </label>
        </div>

        <div className="border-t border-gray-200 bg-white px-4 py-5 sm:px-5">
          <a
            href="#privacy-handling"
            className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 underline sm:text-sm"
          >
            Handling of personal information
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
          <p className="mt-2 text-[11px] leading-relaxed text-gray-700 sm:text-xs">
            If you agree to the handling of personal information, click the button below to proceed
            to the confirmation screen.
          </p>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="inline-flex w-full max-w-lg items-center justify-center gap-2 border-2 bg-white px-4 py-3.5 text-sm font-bold sm:text-base"
              style={{ borderColor: ORANGE, color: ORANGE }}
            >
              Agree and proceed to confirmation
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>

          <section
            id="privacy-handling"
            className="mt-5 border border-gray-300 bg-[#f0f0f0] px-3 py-3 sm:px-4 sm:py-4"
          >
            <h3 className="text-xs font-bold text-gray-900 sm:text-sm">
              Handling of personal information
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-gray-800 sm:text-xs">
              Information you provide will be transmitted via Seahome servers to the listing agency
              by email or fax. Seahome and the agency may store your details to respond to your
              inquiry.{' '}
              <a href="/privacy" className="font-semibold text-sky-700 underline">
                Learn more
              </a>
              . The receiving agency will also store and manage your information in accordance with
              its privacy policy.
            </p>
            <p className="mt-3 text-right text-[10px] text-gray-600 sm:text-[11px]">
              Store code: {storeCode}
            </p>
          </section>
        </div>
      </form>
    </section>
  );
};

export default SeahomeRentalPropertyQuickInquirySection;
