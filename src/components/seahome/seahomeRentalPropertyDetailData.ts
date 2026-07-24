import {
  buildPropertySurroundingsMap,
  type PropertySurroundingsMap,
} from './seahomeRentalSurroundingsMapData';
import {
  DEMO_LISTING_COMPANY,
  type PropertyListingCompanyProfile,
} from './seahomeRentalListingCompanyData';

export type PropertyGalleryImage = {
  id: string;
  url: string;
  alt: string;
  caption: string;
};

export type PropertyTransportAccess = {
  line: string;
  station: string;
  walkMinutes: number;
};

export type PropertyStaffRecommendation = {
  photoUrl: string;
  commentTitle: string;
  commentBody: string;
  agencyName: string;
  agentName: string;
};

export type PropertyListingAgency = {
  branchName: string;
  contactLabel: string;
  closedDay: string;
  businessHours: string;
  managementNumber: string;
  referralNote: string;
};

export type PropertyFeatureTag = {
  id: string;
  label: string;
  active: boolean;
};

export type PropertyFeatureCategory = {
  label: string;
  items: string[];
};

export type PropertyFeatures = {
  highlights: string[];
  tags: PropertyFeatureTag[];
  categories: PropertyFeatureCategory[];
};

export type PropertyCostsDetail = {
  depositDisplay: string;
  otherOneTimeFees: string;
  insurance: string;
  maintenanceFees: string;
  creditCardPayment: string;
};

export type PropertyOtherInfo = {
  buildingRoom: string;
  layoutDetail: string;
  propertyType: string;
  exclusiveArea: string;
  builtLabel: string;
  mainExposure: string;
  floorsDisplay: string;
  structure: string;
  parking: string;
  bicycleParking: string;
  remarks: string;
  contractPeriod: string;
  renewalFee: string;
  transactionType: string;
  currentStatus: string;
  moveInDate: string;
  propertyNumber: string;
  registrationNumber: string;
  publishedDate: string;
  nextUpdateDate: string;
};

export type RentalPropertyDetail = {
  id: string;
  title: string;
  propertyType: string;
  roomNumber: string;
  layout: string;
  rentYen: number;
  managementFeeYen: number;
  depositMonths: number;
  keyMoneyMonths: number;
  areaSqm: number;
  builtYear: number;
  builtMonth: number;
  builtLabel: string;
  floorsTotal: number;
  floorNumber: number;
  mainExposure: string;
  address: string;
  stationAccess: string;
  transport: PropertyTransportAccess[];
  structure: string;
  staffRecommendation: PropertyStaffRecommendation;
  listingAgency: PropertyListingAgency;
  listingCompany: PropertyListingCompanyProfile;
  features: PropertyFeatures;
  costsDetail: PropertyCostsDetail;
  appealText: string;
  otherInfo: PropertyOtherInfo;
  surroundingsMap: PropertySurroundingsMap;
  gallery: PropertyGalleryImage[];
};

const FLOOR_PLAN =
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=85';
const EXTERIOR =
  'https://images.unsplash.com/photo-1545324418-cc68a1c55a2b?auto=format&fit=crop&w=600&q=80';
const INTERIOR =
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80';
const KITCHEN =
  'https://images.unsplash.com/photo-1556911223-bff31c8d4baf?auto=format&fit=crop&w=600&q=80';
const BATH =
  'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80';
const VIEW =
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80';
const ENTRANCE =
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80';
const BALCONY =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80';
const STORAGE =
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80';

const AGENT_PHOTO =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80';

const DEMO_STAFF: PropertyStaffRecommendation = {
  photoUrl: AGENT_PHOTO,
  commentTitle: 'Recommended comment',
  commentBody:
    'This bright 4LDK faces east with a wide living area and walk-in storage. We can share off-market listings in the same area and arrange same-day viewings. Move-in cost estimates and virtual tours are available on request.',
  agencyName: 'Seahome Real Estate · Chiba branch',
  agentName: 'Ryohei Horikoshi',
};

const DEMO_AGENCY: PropertyListingAgency = {
  branchName: 'Seahome Real Estate · Chiba branch',
  contactLabel: 'Contact: Shohei Hosokawa',
  closedDay: 'Wednesdays',
  businessHours: '10:00–18:00',
  managementNumber: 'R301235-035128',
  referralNote: 'Mention you found this listing on Seahome for a smoother conversation.',
};

const DEMO_FEATURES: PropertyFeatures = {
  highlights: [
    'Condominium-type unit',
    'South-facing',
    'Two occupants allowed',
    'IT explanation supported',
    'No guarantor required',
  ],
  tags: [
    { id: 'sep-bath', label: 'Separate bath & toilet', active: true },
    { id: 'reheating', label: 'Reheating bath', active: true },
    { id: 'floor-2plus', label: '2nd floor or higher', active: true },
    { id: 'vanity', label: 'Vanity with shower', active: true },
    { id: 'flooring', label: 'Flooring', active: true },
    { id: 'ac', label: 'Air conditioning', active: true },
    { id: 'autolock', label: 'Auto-lock', active: true },
    { id: 'parking', label: 'Parking (incl. nearby)', active: false },
    { id: 'pet', label: 'Pets negotiable', active: false },
    { id: 'south', label: 'South-facing', active: false },
  ],
  categories: [
    {
      label: 'Bath & toilet',
      items: [
        'Separate bath & toilet',
        'Bathroom dryer',
        'Warm-water bidet toilet',
        'Vanity with shower',
        'Reheating function',
        'Bathroom',
        'Toilet',
      ],
    },
    {
      label: 'Kitchen',
      items: [
        'Counter kitchen',
        'System kitchen',
        'Dishwasher / dryer',
        '3+ burner stove',
        '2-burner stove',
        'Gas stove included',
      ],
    },
    {
      label: 'Security',
      items: ['Auto-lock', 'Monitor intercom'],
    },
    {
      label: 'Storage',
      items: ['Walk-in closet', 'Storage space', 'Shoe closet', 'Closet'],
    },
    {
      label: 'Facilities & services',
      items: [
        '2+ air conditioners',
        'Floor heating',
        'Indoor laundry space',
        'Hot water supply',
        'Flooring in all rooms',
        'Flooring',
        'City gas',
        'Air conditioning',
      ],
    },
    {
      label: 'TV & internet',
      items: ['Internet ready', 'Free internet'],
    },
    {
      label: 'Other',
      items: ['2+ elevators', 'Balcony', 'Bicycle parking', 'Elevator'],
    },
  ],
};

const DEMO_COSTS_DETAIL: PropertyCostsDetail = {
  depositDisplay: '2 months / None',
  otherOneTimeFees: 'None',
  insurance: 'Required',
  maintenanceFees: '—',
  creditCardPayment: 'Initial costs accepted',
};

export function buildPropertyOtherInfo(property: {
  title: string;
  roomNumber: string;
  layout: string;
  propertyType: string;
  areaSqm: number;
  builtLabel: string;
  mainExposure: string;
  floorsTotal: number;
  floorNumber: number;
  structure: string;
}): PropertyOtherInfo {
  return {
    buildingRoom: `${property.title} ${property.roomNumber}`,
    layoutDetail: `${property.layout} (LDK 13.7 tatami, Western room 5.0 tatami, Western room 5.5 tatami, Western room 4.5 tatami…)`,
    propertyType: property.propertyType,
    exclusiveArea: `${property.areaSqm}m²`,
    builtLabel: property.builtLabel,
    mainExposure: property.mainExposure,
    floorsDisplay: `${property.floorsTotal}-story / ${property.floorNumber}F`,
    structure: property.structure,
    parking: 'None available',
    bicycleParking: 'Paid',
    remarks:
      'Rent guarantee company required (initial 100%, monthly 0.7%).\nManagement: outsourced / resident manager on duty.\nCancellation within 1 year may incur a penalty.\nFire insurance: ¥23,000 / 2 years.',
    contractPeriod: '2 years',
    renewalFee: 'None',
    transactionType: 'Brokerage',
    currentStatus: 'Vacant',
    moveInDate: 'Immediate',
    propertyNumber: '1194523618',
    registrationNumber: 'R301235-035128',
    publishedDate: 'May 14, 2024',
    nextUpdateDate: 'May 28, 2024',
  };
}

const DEMO_APPEAL_TEXT = `Welcome from Seahome Real Estate · Chiba branch.

We are among the top agencies in Chiba for rental volume, listing coverage, and walk-in traffic. Whether you need the latest listings, newer buildings, pet-friendly units, zero deposit/key money, or free-rent promotions, our team will search seriously to match your criteria.

Some recommended units are not published online—please call or inquire anytime. Viewings can often be arranged on short notice. We look forward to helping you find your next home.`;

const CHIBA_TRANSPORT: PropertyTransportAccess[] = [
  { line: 'JR Sobu Line', station: 'Chiba Station', walkMinutes: 8 },
  { line: 'Chiba Urban Monorail', station: 'Yoshikawa-koen Station', walkMinutes: 4 },
  { line: 'Keisei Chiba Line', station: 'Chiba-Chuo Station', walkMinutes: 10 },
];

const DEMO_GALLERY: PropertyGalleryImage[] = [
  { id: 'g1', url: FLOOR_PLAN, alt: 'Floor plan', caption: 'Floor plan' },
  { id: 'g2', url: EXTERIOR, alt: 'Building exterior', caption: 'Exterior' },
  { id: 'g3', url: INTERIOR, alt: 'Living room', caption: 'Living room' },
  { id: 'g4', url: KITCHEN, alt: 'Kitchen', caption: 'Kitchen' },
  { id: 'g5', url: BATH, alt: 'Bathroom', caption: 'Bathroom' },
  { id: 'g6', url: VIEW, alt: 'View from window', caption: 'View' },
  { id: 'g7', url: ENTRANCE, alt: 'Entrance area', caption: 'Entrance' },
  { id: 'g8', url: BALCONY, alt: 'Balcony', caption: 'Balcony' },
  { id: 'g9', url: STORAGE, alt: 'Storage', caption: 'Storage' },
];

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export function formatBuiltLabel(year: number, month: number, asOf: Date = new Date()): string {
  const safeMonth = Math.min(12, Math.max(1, month));
  let years = asOf.getFullYear() - year;
  let months = asOf.getMonth() + 1 - safeMonth;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years < 0) {
    return `${MONTH_NAMES[safeMonth - 1]} ${year}`;
  }
  const age =
    years > 0 || months > 0
      ? ` (${years} year${years === 1 ? '' : 's'} ${months} month${months === 1 ? '' : 's'})`
      : '';
  return `${MONTH_NAMES[safeMonth - 1]} ${year}${age}`;
}

const PROPERTIES: Record<string, RentalPropertyDetail> = {
  'listing-1': {
    id: 'listing-1',
    propertyType: 'Rental mansion',
    title: 'Claire Homes Chiba Center Cross',
    roomNumber: '1207',
    layout: '4LDK',
    rentYen: 175000,
    managementFeeYen: 20000,
    depositMonths: 2,
    keyMoneyMonths: 1,
    areaSqm: 75.55,
    builtYear: 2018,
    builtMonth: 1,
    builtLabel: formatBuiltLabel(2018, 1),
    floorsTotal: 15,
    floorNumber: 12,
    mainExposure: 'East',
    address: '1-chome Chuo, Chuo-ku, Chiba City, Chiba',
    stationAccess: 'Chiba Station · 8 min walk',
    transport: CHIBA_TRANSPORT,
    structure: 'RC',
    staffRecommendation: DEMO_STAFF,
    listingAgency: DEMO_AGENCY,
    listingCompany: DEMO_LISTING_COMPANY,
    features: DEMO_FEATURES,
    costsDetail: DEMO_COSTS_DETAIL,
    appealText: DEMO_APPEAL_TEXT,
    otherInfo: buildPropertyOtherInfo({
      title: 'Claire Homes Chiba Center Cross',
      roomNumber: '1207',
      layout: '4LDK',
      propertyType: 'Rental mansion',
      areaSqm: 75.55,
      builtLabel: formatBuiltLabel(2018, 1),
      mainExposure: 'East',
      floorsTotal: 15,
      floorNumber: 12,
      structure: 'RC',
    }),
    surroundingsMap: buildPropertySurroundingsMap(35.6074, 140.1065),
    gallery: DEMO_GALLERY,
  },
};

function defaultProperty(apartmentId: string, stationName: string): RentalPropertyDetail {
  const match = PROPERTIES[apartmentId];
  if (match) return match;

  const num = apartmentId.replace(/\D/g, '') || '7';
  const builtYear = 2015;
  const builtMonth = 6;
  const builtLabel = formatBuiltLabel(builtYear, builtMonth);
  const propertyType = 'Rental mansion';
  const title = `Residence near ${stationName}`;
  const roomNumber = `${num}07`;
  const layout = '3LDK';
  const areaSqm = 68.2;
  const floorsTotal = 12;
  const floorNumber = Number(num) || 7;
  const mainExposure = 'South';
  const structure = 'RC';
  return {
    id: apartmentId,
    propertyType,
    title,
    roomNumber,
    layout,
    rentYen: 140000,
    managementFeeYen: 10000,
    depositMonths: 2,
    keyMoneyMonths: 1,
    areaSqm,
    builtYear,
    builtMonth,
    builtLabel,
    floorsTotal,
    floorNumber,
    mainExposure,
    address: `Near ${stationName} Station, Chiba`,
    stationAccess: `${stationName} Station · 6 min walk`,
    transport: [
      {
        line: 'JR Sobu Line',
        station: `${stationName} Station`,
        walkMinutes: 6,
      },
    ],
    structure,
    staffRecommendation: {
      ...DEMO_STAFF,
      commentBody: `Convenient access to ${stationName} Station. Contact us for viewing slots, floor plans, and off-market units nearby.`,
    },
    listingAgency: DEMO_AGENCY,
    listingCompany: DEMO_LISTING_COMPANY,
    features: DEMO_FEATURES,
    costsDetail: DEMO_COSTS_DETAIL,
    appealText: DEMO_APPEAL_TEXT,
    otherInfo: buildPropertyOtherInfo({
      title,
      roomNumber,
      layout,
      propertyType,
      areaSqm,
      builtLabel,
      mainExposure,
      floorsTotal,
      floorNumber,
      structure,
    }),
    surroundingsMap: buildPropertySurroundingsMap(),
    gallery: DEMO_GALLERY,
  };
}

export function resolvePropertyOtherInfo(property: RentalPropertyDetail): PropertyOtherInfo {
  if (property.otherInfo) {
    return property.otherInfo;
  }

  return buildPropertyOtherInfo({
    title: property.title,
    roomNumber: property.roomNumber,
    layout: property.layout,
    propertyType: property.propertyType,
    areaSqm: property.areaSqm,
    builtLabel: property.builtLabel,
    mainExposure: property.mainExposure,
    floorsTotal: property.floorsTotal,
    floorNumber: property.floorNumber,
    structure: property.structure,
  });
}

export function getPropertyDetail(
  apartmentId: string,
  stationName: string
): RentalPropertyDetail {
  const property = defaultProperty(apartmentId, stationName);
  return {
    ...property,
    otherInfo: resolvePropertyOtherInfo(property),
    surroundingsMap: property.surroundingsMap ?? buildPropertySurroundingsMap(),
  };
}

export function formatRentManYen(yen: number): string {
  const man = yen / 10000;
  return Number.isInteger(man) ? String(man) : man.toFixed(1);
}
