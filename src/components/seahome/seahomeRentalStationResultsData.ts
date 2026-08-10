export type ListingFeatureTag = {
  label: string;
  variant: 'gray' | 'blue';
};

export type StationResultListing = {
  id: string;
  floor: string;
  rentYen: number;
  managementFeeYen: number;
  depositYen: number;
  keyMoneyYen: number;
  layout: string;
  area: string;
  floorPlanUrl: string;
  floorPlanAlt: string;
  photoRich: boolean;
  featureTags: ListingFeatureTag[];
  hasRecommendedComment?: boolean;
};

export const OCCUPANCY_FILTER_OPTIONS = [
  { id: 'solo', label: 'Living alone' },
  { id: 'couple', label: 'Living as two' },
  { id: 'family', label: 'Family' },
] as const;

export const DISPLAY_COUNT_OPTIONS = ['30', '50', '100'] as const;

export const SORT_OPTIONS = [
  { value: '', label: 'Not specified' },
  { value: 'rent-asc', label: 'Rent: low to high' },
  { value: 'rent-desc', label: 'Rent: high to low' },
  { value: 'area-desc', label: 'Area: large to small' },
  { value: 'newest', label: 'Newest first' },
] as const;

const FLOOR_PLAN =
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=200&q=80';

const FEATURE_SETS: ListingFeatureTag[][] = [
  [
    { label: 'Parking (incl. nearby)', variant: 'gray' },
    { label: 'Pet consultation', variant: 'gray' },
    { label: 'Immediate move-in', variant: 'gray' },
    { label: 'Separate bath & toilet', variant: 'blue' },
    { label: '2nd floor or higher', variant: 'blue' },
  ],
  [
    { label: 'Auto-lock', variant: 'blue' },
    { label: 'Within 5 min walk', variant: 'gray' },
    { label: 'No key money', variant: 'gray' },
    { label: 'Floor heating', variant: 'blue' },
  ],
  [
    { label: 'Pet consultation', variant: 'gray' },
    { label: 'Separate bath & toilet', variant: 'blue' },
    { label: 'System kitchen', variant: 'blue' },
    { label: 'Immediate move-in', variant: 'gray' },
  ],
];

export function formatYen(amount: number): string {
  return `¥${amount.toLocaleString('en-US')}`;
}

export function demoListingsForStation(stationName: string, count: number): StationResultListing[] {
  const templates = [
    { floor: '7F', rent: 140000, mgmt: 10000, deposit: 140000, key: 140000, layout: '3LDK', area: '68.73m²' },
    { floor: '3F', rent: 100000, mgmt: 8000, deposit: 100000, key: 100000, layout: '1LDK', area: '42.11m²' },
    { floor: '5F', rent: 72000, mgmt: 6000, deposit: 72000, key: 72000, layout: '1DK', area: '30.00m²' },
    { floor: '2F', rent: 118000, mgmt: 9000, deposit: 118000, key: 118000, layout: '2DK', area: '48.50m²' },
    { floor: '9F', rent: 95000, mgmt: 7500, deposit: 95000, key: 0, layout: '1LDK', area: '38.40m²' },
    { floor: '1F', rent: 150000, mgmt: 12000, deposit: 150000, key: 150000, layout: '3LDK', area: '78.00m²' },
  ];

  return Array.from({ length: Math.min(count, 12) }, (_, i) => {
    const t = templates[i % templates.length];
    return {
      id: `listing-${i + 1}`,
      floor: t.floor,
      rentYen: t.rent,
      managementFeeYen: t.mgmt,
      depositYen: t.deposit,
      keyMoneyYen: t.key,
      layout: t.layout,
      area: t.area,
      floorPlanUrl: FLOOR_PLAN,
      floorPlanAlt: `Floor plan near ${stationName} Station`,
      photoRich: i % 2 === 0,
      featureTags: FEATURE_SETS[i % FEATURE_SETS.length],
      hasRecommendedComment: i % 3 === 0,
    };
  });
}
