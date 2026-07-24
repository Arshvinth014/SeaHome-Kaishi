import React from 'react';
import { MapPin, Smartphone } from 'lucide-react';
import type { PropertyListingCompanyProfile } from './seahomeRentalListingCompanyData';

const CRIMSON = '#b3002d';
const BRAND_BLUE = '#005bac';

type Props = {
  company: PropertyListingCompanyProfile;
  onShowMap?: () => void;
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-[minmax(6.5rem,8.5rem)_1fr]">
      <div className="bg-[#ececec] px-2.5 py-2.5 text-[11px] font-bold text-gray-800 sm:text-xs">
        {label}
      </div>
      <div className="bg-white px-2.5 py-2.5 text-xs text-gray-900 sm:text-sm">{children}</div>
    </div>
  );
}

const SeahomeRentalListingCompanySection: React.FC<Props> = ({ company, onShowMap }) => {
  return (
    <section id="company" className="mt-6 scroll-mt-24 border border-gray-300 bg-white">
      <div className="px-3 py-2 text-xs font-bold text-white sm:px-4 sm:text-sm" style={{ backgroundColor: CRIMSON }}>
        Listed real estate company
      </div>

      <div className="border-b border-gray-200 px-3 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold leading-snug sm:text-xl" style={{ color: BRAND_BLUE }}>
              {company.branchName}
            </h2>
            <p className="mt-1 text-xs text-gray-700 sm:text-sm">{company.tagline}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {company.badges.map((badge) => (
                <li
                  key={badge}
                  className="border border-gray-400 bg-white px-2 py-1 text-[10px] font-semibold text-gray-800 sm:text-[11px]"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-2 border border-gray-300 bg-[#fafafa] p-2">
            <div className="flex h-14 w-14 items-center justify-center border border-gray-300 bg-white">
              <Smartphone className="h-7 w-7 text-gray-500" strokeWidth={1.75} />
            </div>
            <div className="max-w-[9rem]">
              <p className="text-[10px] font-semibold leading-snug text-gray-800 sm:text-[11px]">
                View this agency on your smartphone
              </p>
              <div className="mt-1 grid h-12 w-12 place-items-center border border-gray-400 bg-white text-[8px] text-gray-500">
                QR
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b border-gray-200 lg:grid-cols-2">
        <div className="border-b border-gray-200 p-3 sm:p-4 lg:border-b-0 lg:border-r">
          <h3 className="mb-2 text-xs font-bold text-gray-900 sm:text-sm">About our branch</h3>
          <img
            src={company.storePhotoUrl}
            alt=""
            className="aspect-[16/10] w-full border border-gray-200 object-cover"
          />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="mb-3 text-xs font-bold text-gray-900 sm:text-sm">Our team</h3>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {company.staff.map((member) => (
              <li key={member.id} className="text-center">
                <img
                  src={member.photoUrl}
                  alt=""
                  className="mx-auto h-14 w-14 rounded-full border border-gray-200 object-cover sm:h-16 sm:w-16"
                />
                <p className="mt-1.5 text-[10px] font-semibold leading-tight sm:text-[11px]" style={{ color: BRAND_BLUE }}>
                  {member.name}
                </p>
              </li>
            ))}
          </ul>
          <button type="button" className="mt-3 text-[11px] font-semibold text-sky-700 underline sm:text-xs">
            See more staff
          </button>
        </div>
      </div>

      <div>
        <InfoRow label="Address">
          <div className="flex flex-wrap items-center gap-2">
            <span>
              〒{company.postalCode}
              <br />
              {company.address}
            </span>
            <button
              type="button"
              onClick={onShowMap}
              className="inline-flex items-center gap-1 border border-sky-600 bg-white px-2 py-0.5 text-[11px] font-semibold text-sky-700 hover:bg-sky-50 sm:text-xs"
            >
              <MapPin className="h-3.5 w-3.5" />
              Map
            </button>
          </div>
        </InfoRow>
        <InfoRow label="Access">{company.access}</InfoRow>
        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <InfoRow label="Hours">{company.businessHours}</InfoRow>
          <InfoRow label="Closed">{company.closedDay}</InfoRow>
        </div>
        <InfoRow label="Highlights">
          <ul className="grid gap-1 sm:grid-cols-2">
            {company.features.map((feature) => (
              <li key={feature} className="flex gap-1.5 text-[11px] leading-snug sm:text-xs">
                <span className="text-gray-400">·</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </InfoRow>
        <InfoRow label="Associations">
          <ul className="space-y-1">
            {company.associations.map((item) => (
              <li key={item} className="text-[11px] leading-snug sm:text-xs">
                {item}
              </li>
            ))}
          </ul>
        </InfoRow>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <InfoRow label="License">{company.licenseNumber}</InfoRow>
          <InfoRow label="Tel / Fax">
            {company.phone} / {company.fax}
          </InfoRow>
        </div>
      </div>
    </section>
  );
};

export default SeahomeRentalListingCompanySection;
