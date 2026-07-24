import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import type { PropertyListingCompanyProfile } from './seahomeRentalListingCompanyData';

const CRIMSON = '#b3002d';
const BRAND_BLUE = '#005bac';

type Props = {
  company: PropertyListingCompanyProfile;
  listingsPath: string;
  faqAnswersPath?: string;
  companyMoreInfoPath?: string;
};

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-stretch border-b border-gray-200 bg-[#f3f3f3]">
      <span className="w-1 shrink-0 self-stretch" style={{ backgroundColor: CRIMSON }} aria-hidden />
      <h2 className="px-3 py-2.5 text-sm font-bold text-gray-900 sm:px-4 sm:text-base">{title}</h2>
    </div>
  );
}

const SeahomeRentalListingCompanyFooterSection: React.FC<Props> = ({
  company,
  listingsPath,
  faqAnswersPath = '#company-faq',
  companyMoreInfoPath = '#company',
}) => {
  const otherListingsTitle = `Other listings from ${company.branchName}`;
  const moreInfoLabel = `See more company information · ${company.branchName}`;

  return (
    <>
      <section className="mt-4 overflow-hidden border border-gray-300 bg-white">
        <SectionHeader title={otherListingsTitle} />
        <div className="px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex items-center gap-2">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-sm text-white"
              style={{ backgroundColor: CRIMSON }}
            >
              <Home className="h-5 w-5" strokeWidth={2.25} aria-hidden />
            </span>
            <span className="text-sm font-bold text-gray-900">Rent</span>
          </div>
          <ul className="mt-3 space-y-1.5 pl-11">
            {company.rentLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={listingsPath}
                  className="text-xs font-semibold text-sky-700 underline hover:text-sky-900 sm:text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="company-faq" className="mt-4 scroll-mt-24 overflow-hidden border border-gray-300 bg-white">
        <SectionHeader title="FAQ for this agency" />
        <ul className="divide-y divide-gray-200">
          {company.shopFaq.map((item) => (
            <li key={item.id} className="flex gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white sm:h-7 sm:w-7 sm:text-xs"
                style={{ backgroundColor: CRIMSON }}
                aria-hidden
              >
                Q
              </span>
              <p className="min-w-0 flex-1 text-xs leading-relaxed text-gray-900 sm:text-sm">{item.question}</p>
            </li>
          ))}
        </ul>
        <p className="border-t border-gray-200 px-4 py-3 sm:px-5">
          <a
            href={faqAnswersPath}
            className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-sky-700 underline sm:text-xs"
          >
            <ChevronRight className="h-3.5 w-3.5 text-[#c80032]" strokeWidth={2.5} />
            See answers to frequently asked questions
          </a>
        </p>
      </section>

      <div className="mt-4 border border-gray-300 bg-[#fafafa] px-4 py-5 text-center sm:px-5 sm:py-6">
        <a
          href={companyMoreInfoPath}
          className="text-sm font-bold underline sm:text-base"
          style={{ color: BRAND_BLUE }}
        >
          {moreInfoLabel}
        </a>
      </div>
    </>
  );
};

export default SeahomeRentalListingCompanyFooterSection;
