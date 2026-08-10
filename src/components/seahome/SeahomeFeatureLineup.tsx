import React from 'react';
import {
  type CategoryBlock,
  FeatureCategorySection,
} from './seahomeFeatureCategory';

type LineupProps = {
  onNavigate: (path: string) => void;
  containerClass: string;
};

const BUY_LINEUP: CategoryBlock = {
  badge: 'Buy',
  badgeClass: 'bg-amber-600 text-white',
  title: 'New & resale condominiums',
  topLinkLabel: 'Top of buy features',
  topPath: '/buy-properties',
  large: [
    {
      title: 'High-grade condos',
      lines: ['Central Tokyo', 'Premium finishes', 'Concierge buildings'],
      path: '/buy-properties',
    },
    {
      title: 'Tower mansions',
      lines: ['Sky lounges', 'City views', '24/7 security'],
      path: '/buy-properties',
    },
    {
      title: 'Model rooms open',
      lines: ['New developments', 'Limited units', 'Move-in ready'],
      path: '/buy-properties',
    },
    {
      title: 'Within 5 min of station',
      lines: ['Commuter friendly', 'Major lines', 'Walkable daily life'],
      path: '/buy-properties',
    },
  ],
  small: [
    { title: 'Low-rise condos', path: '/buy-properties' },
    { title: 'Hilltop mansions', path: '/buy-properties' },
    { title: 'Recommended for telework', path: '/buy-properties' },
    { title: 'Odakyu line features', path: '/buy-properties' },
  ],
  extraLarge: [
    {
      title: 'Pet-friendly purchases',
      lines: ['Dog & cat OK', 'Balcony space', 'Park nearby'],
      path: '/buy-properties',
    },
    {
      title: 'Investment units',
      lines: ['Yield focus', 'Rental demand', 'Studio to 2LDK'],
      path: '/buy-properties',
    },
    {
      title: 'Renovated resale',
      lines: ['Modern kitchens', 'Updated baths', 'Value picks'],
      path: '/buy-properties',
    },
    {
      title: 'Family 3LDK+',
      lines: ['School districts', 'Storage', 'Parking included'],
      path: '/buy-properties',
    },
  ],
  extraSmall: [
    { title: 'South-facing units', path: '/buy-properties' },
    { title: 'Corner rooms', path: '/buy-properties' },
    { title: 'Top-floor listings', path: '/buy-properties' },
    { title: 'Under ¥50M picks', path: '/buy-properties' },
  ],
};

const RENT_LINEUP: CategoryBlock = {
  badge: 'Rent',
  badgeClass: 'bg-sky-700 text-white',
  title: 'Rental properties',
  topLinkLabel: 'Top of rent features',
  topPath: '/properties',
  large: [
    {
      title: 'Furnished apartments',
      lines: ['Move-in ready', 'Short contracts', 'International tenants'],
      path: '/properties',
    },
    {
      title: 'Share houses',
      lines: ['Private rooms', 'Shared common areas', 'Budget friendly'],
      path: '/share-apartments',
    },
    {
      title: 'Near universities',
      lines: ['Student housing', 'Bike friendly', 'English support'],
      path: '/properties',
    },
    {
      title: 'Family rentals',
      lines: ['3LDK+ layouts', 'Quiet neighborhoods', 'Parks & schools'],
      path: '/properties',
    },
  ],
  small: [
    { title: 'Studio & 1K', path: '/properties' },
    { title: 'No key money', path: '/properties' },
    { title: 'Pets allowed', path: '/properties' },
    { title: 'Yamanote line area', path: '/properties' },
  ],
  extraLarge: [
    {
      title: 'Designer rentals',
      lines: ['Stylish interiors', 'Boutique buildings', 'City centers'],
      path: '/properties',
    },
    {
      title: 'Corporate leases',
      lines: ['Company contracts', 'Receipts in English', 'Flexible terms'],
      path: '/properties',
    },
    {
      title: 'Short-term stay',
      lines: ['1–12 months', 'Fully equipped', 'Easy application'],
      path: '/properties',
    },
    {
      title: 'Suburban houses',
      lines: ['Detached homes', 'Garden space', 'Family living'],
      path: '/properties',
    },
  ],
  extraSmall: [
    { title: 'Women-only floors', path: '/properties' },
    { title: 'Senior-friendly', path: '/properties' },
    { title: 'Bike parking', path: '/properties' },
    { title: 'Utilities included', path: '/properties' },
  ],
};

const SeahomeFeatureLineup: React.FC<LineupProps> = ({ onNavigate, containerClass }) => (
  <section
    className="w-full border-t border-gray-100 bg-[#faf9f6] py-8 sm:py-10"
    aria-labelledby="feature-lineup-heading"
  >
    <div className={containerClass}>
      <div className="relative mb-8 text-center sm:mb-10">
        <h2 id="feature-lineup-heading" className="text-xl font-bold text-sky-950 sm:text-2xl">
          Feature Lineup
        </h2>
        <button
          type="button"
          onClick={() => onNavigate('/properties')}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-xs font-semibold text-sky-600 underline-offset-2 hover:text-sky-800 hover:underline sm:inline sm:text-sm"
        >
          View all features
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/properties')}
          className="mt-2 text-xs font-semibold text-sky-600 underline-offset-2 hover:text-sky-800 hover:underline sm:hidden"
        >
          View all features
        </button>
      </div>

      <FeatureCategorySection block={BUY_LINEUP} onNavigate={onNavigate} />
      <FeatureCategorySection block={RENT_LINEUP} onNavigate={onNavigate} />
    </div>
  </section>
);

export default SeahomeFeatureLineup;
