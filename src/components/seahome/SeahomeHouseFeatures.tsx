import React from 'react';
import {
  type CategoryBlock,
  FeatureCategorySection,
} from './seahomeFeatureCategory';

type Props = {
  onNavigate: (path: string) => void;
  containerClass: string;
};

const BUY_BADGE = 'bg-amber-600 text-white';
const BUY_TITLE_CLASS = 'text-lg font-bold text-red-700 sm:text-xl';
const TOP_LINK = 'To special feature top';

const NEW_DETACHED_HOUSES: CategoryBlock = {
  badge: 'Buy',
  badgeClass: BUY_BADGE,
  title: 'New detached houses / subdivided lots',
  titleClass: BUY_TITLE_CLASS,
  topLinkLabel: TOP_LINK,
  topPath: '/buy-properties',
  large: [
    {
      title: 'Spacious new houses (100m²+)',
      lines: ['Spacious layouts', 'Room to grow', 'Family-friendly plans'],
      path: '/buy-properties',
    },
    {
      title: 'Houses with gardens',
      lines: ['Private yard space', 'Gardening & outdoor living', 'Kids & pets welcome'],
      path: '/buy-properties',
    },
    {
      title: 'South-facing properties',
      lines: ['Bright all day', 'Warm in winter', 'Energy efficient'],
      path: '/buy-properties',
    },
    {
      title: 'Near station (within 10 min walk)',
      lines: ['Easy commute', 'Shops nearby', 'Strong resale value'],
      path: '/buy-properties',
    },
  ],
  small: [
    { title: 'LDK 15+ tatami mats', path: '/buy-properties' },
    { title: 'Well-equipped kitchens', path: '/buy-properties' },
    { title: 'Upcoming sales', path: '/buy-properties' },
    { title: 'First-come, first-served', path: '/buy-properties' },
  ],
  extraLarge: [
    {
      title: 'Two-story family homes',
      lines: ['Separate living floors', 'Quiet bedrooms', 'Storage under stairs'],
      path: '/buy-properties',
    },
    {
      title: 'Eco-friendly builds',
      lines: ['High insulation', 'Solar ready', 'Lower utility bills'],
      path: '/buy-properties',
    },
    {
      title: 'Corner lot houses',
      lines: ['Extra windows', 'More privacy', 'Flexible layout'],
      path: '/buy-properties',
    },
    {
      title: 'Near parks & schools',
      lines: ['Green surroundings', 'Safe streets', 'Ideal for families'],
      path: '/buy-properties',
    },
  ],
  extraSmall: [
    { title: 'Dual parking', path: '/buy-properties' },
    { title: 'Walk-in closets', path: '/buy-properties' },
    { title: 'Floor heating', path: '/buy-properties' },
    { title: 'Open-plan LDK', path: '/buy-properties' },
  ],
};

const USED_MANSIONS: CategoryBlock = {
  badge: 'Buy',
  badgeClass: BUY_BADGE,
  title: 'Used mansions / condominiums',
  titleClass: BUY_TITLE_CLASS,
  topLinkLabel: TOP_LINK,
  topPath: '/buy-properties',
  large: [
    {
      title: 'Spacious family mansions (100m²+, 3LDK+)',
      lines: ['Large floor plans', 'Comfortable family life', 'Storage throughout'],
      path: '/buy-properties',
    },
    {
      title: 'Tower mansions',
      lines: ['Panoramic views', 'High floors', 'Premium facilities'],
      path: '/buy-properties',
    },
    {
      title: 'Recommended for telework',
      lines: ['Dedicated work space', 'Strong internet', 'Quiet rooms'],
      path: '/buy-properties',
    },
    {
      title: 'Recent builds (within 10 years)',
      lines: ['Modern specs', 'Clean interiors', 'Move-in ready'],
      path: '/buy-properties',
    },
  ],
  small: [
    { title: 'Spacious living rooms', path: '/buy-properties' },
    { title: 'Enhanced bath facilities', path: '/buy-properties' },
    { title: 'Easy parking', path: '/buy-properties' },
    { title: 'Earthquake resistant', path: '/buy-properties' },
  ],
  extraLarge: [
    {
      title: 'Renovated resale units',
      lines: ['Updated kitchen & bath', 'Fresh interiors', 'Great value'],
      path: '/buy-properties',
    },
    {
      title: 'Pet-friendly mansions',
      lines: ['Rules allow pets', 'Nearby parks', 'Balcony space'],
      path: '/buy-properties',
    },
    {
      title: 'Low monthly fees',
      lines: ['Reasonable management', 'Well-maintained', 'Budget conscious'],
      path: '/buy-properties',
    },
    {
      title: 'Top-floor corner units',
      lines: ['Extra light', 'Cross ventilation', 'Premium feel'],
      path: '/buy-properties',
    },
  ],
  extraSmall: [
    { title: 'South-facing rooms', path: '/buy-properties' },
    { title: 'Guest parking', path: '/buy-properties' },
    { title: 'Concierge service', path: '/buy-properties' },
    { title: 'Near major stations', path: '/buy-properties' },
  ],
};

const SeahomeHouseFeatures: React.FC<Props> = ({ onNavigate, containerClass }) => (
  <section
    className="w-full border-t border-gray-100 bg-[#faf9f6] py-8 sm:py-10"
    aria-labelledby="house-features-heading"
  >
    <div className={containerClass}>
      <div className="relative mb-8 text-center sm:mb-10">
        <h2 id="house-features-heading" className="text-xl font-bold text-sky-950 sm:text-2xl">
          Houses & Mansions
        </h2>
        <button
          type="button"
          onClick={() => onNavigate('/buy-properties')}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-xs font-semibold text-sky-600 underline-offset-2 hover:text-sky-800 hover:underline sm:inline sm:text-sm"
        >
          View all buy listings
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/buy-properties')}
          className="mt-2 text-xs font-semibold text-sky-600 underline-offset-2 hover:text-sky-800 hover:underline sm:hidden"
        >
          View all buy listings
        </button>
      </div>

      <FeatureCategorySection block={NEW_DETACHED_HOUSES} onNavigate={onNavigate} />
      <FeatureCategorySection block={USED_MANSIONS} onNavigate={onNavigate} />
    </div>
  </section>
);

export default SeahomeHouseFeatures;
