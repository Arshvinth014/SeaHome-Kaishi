import React from 'react';
import { Building2, Calendar, Mail, Monitor, Phone } from 'lucide-react';
import type { PropertyListingAgency } from './seahomeRentalPropertyDetailData';

const ORANGE = '#f38100';
const BLUE = '#4a90e2';
const HEADER_BG = '#c4a574';
const PANEL_BG = '#faf6ee';
const CRIMSON = '#b3002d';

const ICON_CLASS = 'h-6 w-6 sm:h-7 sm:w-7';

type Props = {
  agency: PropertyListingAgency;
};

function InquiryCta({
  label,
  icon,
  variant,
  badge,
}: {
  label: string;
  icon: React.ReactNode;
  variant: 'orange' | 'blue' | 'phone';
  badge?: string;
}) {
  const isPhone = variant === 'phone';
  const isOrange = variant === 'orange';
  const bg = isPhone ? '#fff' : isOrange ? ORANGE : BLUE;
  const color = isPhone ? ORANGE : '#fff';
  const border = isPhone ? `2px solid ${ORANGE}` : 'none';

  return (
    <button
      type="button"
      className="relative flex min-h-[4.5rem] flex-col items-center justify-center gap-1 px-2 py-3 text-center text-xs font-bold leading-tight sm:min-h-[5rem] sm:text-sm"
      style={{ backgroundColor: bg, color, border }}
    >
      {badge ? (
        <span className="absolute left-1 top-1 rounded-sm bg-[#fff9c4] px-1.5 py-0.5 text-[9px] font-bold text-gray-900 shadow sm:text-[10px]">
          {badge}
        </span>
      ) : null}
      {icon}
      <span>{label}</span>
    </button>
  );
}

const SeahomeRentalPropertyInquirySection: React.FC<Props> = ({ agency }) => {
  return (
    <section
      id="inquire"
      className="mt-6 overflow-hidden rounded-sm border border-[#d4c4a8] bg-white"
      style={{ backgroundColor: PANEL_BG }}
    >
      <div
        className="px-3 py-2.5 text-center text-xs font-bold text-white sm:text-sm"
        style={{ backgroundColor: HEADER_BG }}
      >
        Please contact us for vacancy updates, viewings, and any questions about this property.
      </div>

      <div className="border-b border-[#e8dcc8] px-4 py-3 sm:px-5">
        <p className="text-sm font-bold text-gray-900">{agency.branchName}</p>
        <p className="mt-1 text-xs text-gray-800 sm:text-sm">{agency.contactLabel}</p>
        <p className="mt-1 text-[11px] text-gray-600 sm:text-xs">
          Closed: {agency.closedDay} · Hours: {agency.businessHours}
        </p>
      </div>

      <div className="grid gap-4 px-4 py-4 sm:px-5 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-center text-[11px] font-bold text-gray-700 sm:text-xs">
            Send an inquiry (free)
          </p>
          <div className="grid grid-cols-3 gap-2">
            <InquiryCta
              label="Email"
              variant="orange"
              badge="Easy 1 min"
              icon={<Mail className={ICON_CLASS} strokeWidth={2} />}
            />
            <InquiryCta
              label="Viewing"
              variant="orange"
              icon={<Building2 className={ICON_CLASS} strokeWidth={2} />}
            />
            <div className="flex flex-col gap-1">
              <InquiryCta
                label="Phone"
                variant="phone"
                icon={<Phone className={ICON_CLASS} strokeWidth={2} />}
              />
            </div>
          </div>
          <p className="mt-1.5 text-center text-[10px] leading-snug text-gray-500 sm:text-[11px]">
            Tap to reveal the number, then call from your phone.
          </p>
        </div>

        <div>
          <p className="mb-2 text-center text-[11px] font-bold text-gray-700 sm:text-xs">
            Speak with the agency directly (free)
          </p>
          <div className="grid grid-cols-2 gap-2">
            <InquiryCta
              label="Visit branch"
              variant="blue"
              icon={<Calendar className={ICON_CLASS} strokeWidth={2} />}
            />
            <InquiryCta
              label="Online consult"
              variant="blue"
              icon={<Monitor className={ICON_CLASS} strokeWidth={2} />}
            />
          </div>
          <p className="mt-2 text-right text-[10px] text-gray-600 sm:text-[11px]">
            Listing ID: {agency.managementNumber}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-[#e8dcc8] px-4 py-3 sm:flex-row sm:items-end sm:justify-between sm:px-5">
        <p className="text-[11px] font-semibold leading-snug sm:text-xs" style={{ color: CRIMSON }}>
          {agency.referralNote}
        </p>
      </div>
    </section>
  );
};

export default SeahomeRentalPropertyInquirySection;
