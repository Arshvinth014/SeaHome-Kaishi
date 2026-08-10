import React from 'react';
import { type CategoryBlock, FeatureCategorySection } from './seahomeFeatureCategory';

type Props = {
  onNavigate: (path: string) => void;
  containerClass: string;
};

const GOLD_BUY_BADGE = 'bg-amber-500 text-white';
const GOLD_RENT_BADGE = 'bg-amber-500 text-white';
const RED_TITLE = 'text-lg font-bold text-red-700 sm:text-xl';

const LAND_FOR_SALE: CategoryBlock = {
  badge: 'Buy',
  badgeClass: GOLD_BUY_BADGE,
  title: 'Land for sale',
  titleClass: RED_TITLE,
  topLinkLabel: 'To land investment top',
  topPath: '/buy-properties',
  large: [
    {
      title: 'Residential land from ~50 tsubo',
      lines: ['Subdivision lots', 'Build your dream home', 'Suburban & urban areas'],
      path: '/buy-properties',
    },
    {
      title: 'Station-area building lots',
      lines: ['High convenience', 'Strong asset value', 'Walkable neighborhoods'],
      path: '/buy-properties',
    },
    {
      title: 'Investment land with road access',
      lines: ['Development potential', 'Clear title', 'Yield-focused picks'],
      path: '/buy-properties',
    },
    {
      title: 'Flat, ready-to-build plots',
      lines: ['Surveyed parcels', 'Utilities nearby', 'Fast planning'],
      path: '/buy-properties',
    },
  ],
  small: [
    { title: 'Search by land shape', path: '/buy-properties' },
    { title: 'Corner lots', path: '/buy-properties' },
    { title: 'Sloped land', path: '/buy-properties' },
    { title: 'Converted agricultural land', path: '/buy-properties' },
  ],
  extraLarge: [
    {
      title: 'Large lots 100 tsubo+',
      lines: ['Custom mansion sites', 'Privacy & space', 'Premium districts'],
      path: '/buy-properties',
    },
    {
      title: 'Waterfront & view land',
      lines: ['Scenic locations', 'Limited supply', 'Lifestyle focus'],
      path: '/buy-properties',
    },
    {
      title: 'Commercial-zoned land',
      lines: ['Shop & office potential', 'Main road frontage', 'Mixed use'],
      path: '/commercial-properties',
    },
    {
      title: 'Vacant land bundles',
      lines: ['Multiple parcels', 'Portfolio buyers', 'Negotiable terms'],
      path: '/buy-properties',
    },
  ],
  extraSmall: [
    { title: 'Urban infill lots', path: '/buy-properties' },
    { title: 'Setback-compliant plots', path: '/buy-properties' },
    { title: 'Forest-adjacent land', path: '/buy-properties' },
    { title: 'Leasehold land', path: '/buy-properties' },
  ],
};

const RENTAL_STORE_PLUS: CategoryBlock = {
  badge: 'Rent',
  badgeClass: GOLD_RENT_BADGE,
  title: 'Rental store plus',
  titleClass: RED_TITLE,
  topLinkLabel: 'To commercial rent top',
  topPath: '/commercial-properties',
  centerSmallRow: true,
  large: [
    {
      title: 'Ramen & Chinese cuisine',
      lines: ['Exhaust & plumbing ready', 'High foot traffic areas', 'Turnkey shop shells'],
      path: '/commercial-properties',
    },
    {
      title: 'Café & light dining',
      lines: ['Street visibility', 'Terrace potential', 'Compact floor plans'],
      path: '/commercial-properties',
    },
    {
      title: 'Retail street frontage',
      lines: ['Display windows', 'Main road access', 'Mixed shopping streets'],
      path: '/commercial-properties',
    },
    {
      title: 'Office + retail combined',
      lines: ['Dual use layouts', 'Mezzanine options', 'Central business districts'],
      path: '/commercial-properties',
    },
  ],
  small: [
    { title: 'Schools & cram schools', path: '/commercial-properties' },
    { title: 'Clinics & wellness', path: '/commercial-properties' },
  ],
};

const SeahomeLandAndCommercial: React.FC<Props> = ({ onNavigate, containerClass }) => (
  <section
    className="w-full border-t border-gray-100 bg-[#faf9f6] py-8 sm:py-10"
    aria-labelledby="land-commercial-heading"
  >
    <div className={containerClass}>
      <div className="relative mb-8 text-center sm:mb-10">
        <h2 id="land-commercial-heading" className="text-xl font-bold text-sky-950 sm:text-2xl">
          Land & Commercial
        </h2>
        <button
          type="button"
          onClick={() => onNavigate('/commercial-properties')}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-xs font-semibold text-sky-600 underline-offset-2 hover:text-sky-800 hover:underline sm:inline sm:text-sm"
        >
          View all commercial
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/commercial-properties')}
          className="mt-2 text-xs font-semibold text-sky-600 underline-offset-2 hover:text-sky-800 hover:underline sm:hidden"
        >
          View all commercial
        </button>
      </div>

      <FeatureCategorySection block={LAND_FOR_SALE} onNavigate={onNavigate} />
      <FeatureCategorySection block={RENTAL_STORE_PLUS} onNavigate={onNavigate} />
    </div>
  </section>
);

export default SeahomeLandAndCommercial;
