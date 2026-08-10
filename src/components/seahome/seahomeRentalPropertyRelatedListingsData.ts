import type { RentalPropertyCard } from './SeahomeRentalPropertyCarousel';
import { formatRentManYen } from './seahomeRentalPropertyDetailData';

export type RentalRecommendedListingCard = {
  id: string;
  category: string;
  isNew?: boolean;
  imageUrl: string;
  imageAlt: string;
  layout: string;
  area: string;
  stationLine: string;
  addressLine: string;
  rentLabel: string;
  photoRich: boolean;
};

const IMAGES = {
  a: 'https://images.unsplash.com/photo-1545324418-cc68a1c55a2b?auto=format&fit=crop&w=400&q=80',
  b: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
  c: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
  d: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
  e: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
  f: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
  g: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
} as const;

function rentLabel(yen: number): string {
  return `${formatRentManYen(yen)}万円`;
}

function specsLine(yen: number, layout: string, area: string): string {
  return `${rentLabel(yen)} ${layout} ${area}`;
}

export function agencyOtherListingCards(
  stationName: string,
  excludePropertyId: string
): RentalPropertyCard[] {
  const stationLabel = `「${stationName}」Station`;
  const items: RentalPropertyCard[] = [
    {
      id: 'listing-2',
      category: 'Rental mansion',
      imageUrl: IMAGES.b,
      imageAlt: 'Rental mansion near station',
      stationLine: `${stationLabel} · 8 min walk`,
      specsLine: specsLine(100000, '1LDK', '42.11m²'),
    },
    {
      id: 'listing-3',
      category: 'Rental mansion',
      imageUrl: IMAGES.d,
      imageAlt: 'Compact rental building',
      stationLine: `${stationLabel} · 6 min walk`,
      specsLine: specsLine(72000, '1DK', '30.00m²'),
    },
    {
      id: 'listing-4',
      category: 'Rental mansion',
      imageUrl: IMAGES.c,
      imageAlt: 'Tower rental mansion',
      stationLine: `${stationLabel} · 10 min walk`,
      specsLine: specsLine(66000, '1K', '31.08m²'),
    },
    {
      id: 'listing-5',
      category: 'Rental mansion',
      imageUrl: IMAGES.a,
      imageAlt: 'Mid-rise rental mansion',
      stationLine: `${stationLabel} · 5 min walk`,
      specsLine: specsLine(118000, '2DK', '48.50m²'),
    },
    {
      id: 'listing-6',
      category: 'Rental mansion',
      imageUrl: IMAGES.e,
      imageAlt: 'Rental mansion exterior',
      stationLine: `${stationLabel} · 12 min walk`,
      specsLine: specsLine(95000, '1LDK', '38.40m²'),
    },
    {
      id: 'listing-7',
      category: 'Rental mansion',
      imageUrl: IMAGES.f,
      imageAlt: 'Family rental mansion',
      stationLine: `${stationLabel} · 9 min walk`,
      specsLine: specsLine(150000, '3LDK', '78.00m²'),
    },
    {
      id: 'listing-8',
      category: 'Rental mansion',
      imageUrl: IMAGES.g,
      imageAlt: 'Detached-style rental',
      stationLine: `${stationLabel} · 14 min walk`,
      specsLine: specsLine(88000, '1LDK', '36.20m²'),
    },
  ];

  return items.filter((card) => card.id !== excludePropertyId);
}

export function recommendedListingCards(
  stationName: string,
  excludePropertyId: string
): RentalRecommendedListingCard[] {
  const stationLabel = `「${stationName}」Station`;
  const addressBase = `${stationName} area, Chuo-ku, Chiba City`;

  const items: RentalRecommendedListingCard[] = [
    {
      id: 'listing-1',
      category: 'Rental mansion',
      isNew: true,
      imageUrl: IMAGES.a,
      imageAlt: 'Recommended rental mansion',
      layout: '4LDK',
      area: '75.55m²',
      stationLine: `${stationLabel} · 8 min walk`,
      addressLine: `${addressBase} · Fujimi`,
      rentLabel: rentLabel(175000),
      photoRich: true,
    },
    {
      id: 'listing-9',
      category: 'Rental mansion',
      imageUrl: IMAGES.b,
      imageAlt: 'Recommended rental near station',
      layout: '2LDK',
      area: '67.81m²',
      stationLine: `${stationLabel} · 7 min walk`,
      addressLine: `${addressBase} · Matsunami 2-chome`,
      rentLabel: rentLabel(175000),
      photoRich: true,
    },
    {
      id: 'listing-10',
      category: 'Rental mansion',
      imageUrl: IMAGES.c,
      imageAlt: 'High-rise rental mansion',
      layout: '3LDK',
      area: '72.40m²',
      stationLine: `${stationLabel} · 4 min walk`,
      addressLine: `${addressBase} · Chuo 1-chome`,
      rentLabel: rentLabel(168000),
      photoRich: true,
    },
    {
      id: 'listing-11',
      category: 'Rental mansion',
      imageUrl: IMAGES.d,
      imageAlt: 'Compact recommended rental',
      layout: '1LDK',
      area: '41.20m²',
      stationLine: `${stationLabel} · 6 min walk`,
      addressLine: `${addressBase} · Honcho`,
      rentLabel: rentLabel(98000),
      photoRich: false,
    },
    {
      id: 'listing-12',
      category: 'Rental mansion',
      imageUrl: IMAGES.e,
      imageAlt: 'Renovated rental mansion',
      layout: '2DK',
      area: '52.30m²',
      stationLine: `${stationLabel} · 11 min walk`,
      addressLine: `${addressBase} · Inage`,
      rentLabel: rentLabel(125000),
      photoRich: true,
    },
    {
      id: 'listing-13',
      category: 'Rental mansion',
      imageUrl: IMAGES.f,
      imageAlt: 'Family-oriented rental',
      layout: '3LDK',
      area: '80.10m²',
      stationLine: `${stationLabel} · 9 min walk`,
      addressLine: `${addressBase} · Ohdori`,
      rentLabel: rentLabel(198000),
      photoRich: true,
    },
    {
      id: 'listing-14',
      category: 'Rental mansion',
      imageUrl: IMAGES.g,
      imageAlt: 'Quiet residential rental',
      layout: '1DK',
      area: '29.50m²',
      stationLine: `${stationLabel} · 5 min walk`,
      addressLine: `${addressBase} · Sakaemachi`,
      rentLabel: rentLabel(75000),
      photoRich: false,
    },
    {
      id: 'listing-15',
      category: 'Rental mansion',
      imageUrl: IMAGES.a,
      imageAlt: 'Corner unit rental mansion',
      layout: '2LDK',
      area: '58.00m²',
      stationLine: `${stationLabel} · 10 min walk`,
      addressLine: `${addressBase} · Yoshida`,
      rentLabel: rentLabel(132000),
      photoRich: true,
    },
    {
      id: 'listing-16',
      category: 'Rental mansion',
      isNew: true,
      imageUrl: IMAGES.b,
      imageAlt: 'Newly listed rental mansion',
      layout: '1K',
      area: '24.80m²',
      stationLine: `${stationLabel} · 3 min walk`,
      addressLine: `${addressBase} · Nishiwada`,
      rentLabel: rentLabel(68000),
      photoRich: true,
    },
    {
      id: 'listing-17',
      category: 'Rental mansion',
      imageUrl: IMAGES.c,
      imageAlt: 'Station-front rental mansion',
      layout: '1LDK',
      area: '39.90m²',
      stationLine: `${stationLabel} · 2 min walk`,
      addressLine: `${addressBase} · Ekimae`,
      rentLabel: rentLabel(112000),
      photoRich: true,
    },
  ];

  return items.filter((card) => card.id !== excludePropertyId).slice(0, 10);
}

export const RENTAL_PROPERTY_DISCLAIMERS: readonly string[] = [
  'Rent, fees, layout, and availability are based on information at the time of publication and may change without notice.',
  'Photos and floor plans may differ from the current condition. Please confirm on viewing.',
  'Initial costs, contract terms, and move-in dates vary by property. Contact the listing agency for the latest details.',
  'Displayed listings are provided by the advertising real estate agency. Seahome is not the contracting party for transactions.',
];
