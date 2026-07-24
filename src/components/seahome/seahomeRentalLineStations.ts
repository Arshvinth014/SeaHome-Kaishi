import type { RentalRailLine } from './seahomeRentalLineSearchData';
import { railOperatorsForPrefecture } from './seahomeRentalLineSearchData';

export type RentalStation = {
  id: string;
  name: string;
  listingCount: number;
};

const JR_SOBU_STATIONS: RentalStation[] = [
  { id: 'tokyo', name: 'Tokyo', listingCount: 4820 },
  { id: 'shin-nihombashi', name: 'Shin-Nihombashi', listingCount: 1890 },
  { id: 'bakurocho', name: 'Bakurocho', listingCount: 1240 },
  { id: 'kinshicho', name: 'Kinshicho', listingCount: 2100 },
  { id: 'kameido', name: 'Kameido', listingCount: 980 },
  { id: 'hirai', name: 'Hirai', listingCount: 420 },
  { id: 'shin-koiwa', name: 'Shin-Koiwa', listingCount: 1560 },
  { id: 'koiwa', name: 'Koiwa', listingCount: 890 },
  { id: 'ichikawa', name: 'Ichikawa', listingCount: 1120 },
  { id: 'funabashi', name: 'Funabashi', listingCount: 2340 },
  { id: 'nishi-funabashi', name: 'Nishi-Funabashi', listingCount: 760 },
  { id: 'moto-yawata', name: 'Moto-Yawata', listingCount: 540 },
  { id: 'yawata', name: 'Yawata', listingCount: 480 },
  { id: 'keisei-yawata', name: 'Keisei Yawata', listingCount: 310 },
  { id: 'ichikawa-ohno', name: 'Ichikawa-Ohno', listingCount: 620 },
  { id: 'sugano', name: 'Sugano', listingCount: 280 },
  { id: 'shimosa-nakayama', name: 'Shimosa-Nakayama', listingCount: 450 },
  { id: 'nishi-chiba', name: 'Nishi-Chiba', listingCount: 890 },
  { id: 'chiba', name: 'Chiba', listingCount: 3210 },
  { id: 'hon-chiba', name: 'Hon-Chiba', listingCount: 1120 },
  { id: 'chibaminato', name: 'Chibaminato', listingCount: 680 },
  { id: 'soga', name: 'Soga', listingCount: 540 },
  { id: 'honda', name: 'Honda', listingCount: 120 },
  { id: 'kamatori', name: 'Kamatori', listingCount: 95 },
  { id: 'zushiomi', name: 'Zushiomi', listingCount: 88 },
  { id: 'kugahara', name: 'Kugahara', listingCount: 72 },
  { id: 'chiba-koen', name: 'Chiba-Koen', listingCount: 410 },
];

const STATIONS_BY_LINE: Record<string, RentalStation[]> = {
  'jr-sobu': JR_SOBU_STATIONS,
  'jr-keiyo': [
    { id: 'tokyo', name: 'Tokyo', listingCount: 2100 },
    { id: 'hamamatsucho', name: 'Hamamatsucho', listingCount: 890 },
    { id: 'takeshiba', name: 'Takeshiba', listingCount: 320 },
    { id: 'shimbashi', name: 'Shimbashi', listingCount: 1240 },
    { id: 'shinagawa', name: 'Shinagawa', listingCount: 1560 },
    { id: 'shin-kiba', name: 'Shin-Kiba', listingCount: 980 },
    { id: 'kasai', name: 'Kasai', listingCount: 540 },
    { id: 'maihama', name: 'Maihama', listingCount: 420 },
    { id: 'shin-urayasu', name: 'Shin-Urayasu', listingCount: 380 },
    { id: 'ichikawa', name: 'Ichikawa', listingCount: 620 },
    { id: 'funabashi', name: 'Funabashi', listingCount: 890 },
    { id: 'nishi-funabashi', name: 'Nishi-Funabashi', listingCount: 760 },
    { id: 'kaihin-makuhari', name: 'Kaihin-Makuhari', listingCount: 1120 },
    { id: 'makuhari', name: 'Makuhari', listingCount: 1340 },
    { id: 'chiba-minato', name: 'Chiba-Minato', listingCount: 480 },
    { id: 'soga', name: 'Soga', listingCount: 390 },
  ],
  'keisei-main': [
    { id: 'keisei-ueno', name: 'Keisei-Ueno', listingCount: 890 },
    { id: 'nippori', name: 'Nippori', listingCount: 620 },
    { id: 'aoto', name: 'Aoto', listingCount: 480 },
    { id: 'takasago', name: 'Takasago', listingCount: 340 },
    { id: 'shinkoiwa', name: 'Shin-Koiwa', listingCount: 410 },
    { id: 'ichikawa', name: 'Ichikawa', listingCount: 520 },
    { id: 'keisei-yawata', name: 'Keisei Yawata', listingCount: 280 },
    { id: 'keisei-funabashi', name: 'Keisei Funabashi', listingCount: 390 },
    { id: 'chiba', name: 'Chiba', listingCount: 1120 },
  ],
};

function genericStationsForLine(lineName: string): RentalStation[] {
  const base = lineName.replace(/^JR\s+/i, '').replace(/\s+Line$/i, '');
  return Array.from({ length: 12 }, (_, i) => ({
    id: `station-${i + 1}`,
    name: `${base} Station ${i + 1}`,
    listingCount: Math.max(40, 800 - i * 55),
  }));
}

export function stationsForLine(lineId: string, lineName: string): RentalStation[] {
  return STATIONS_BY_LINE[lineId] ?? genericStationsForLine(lineName);
}

export function findStationOnLine(
  lineId: string,
  lineName: string,
  stationSlug: string
): RentalStation | undefined {
  const slug = stationSlug.trim().toLowerCase();
  return stationsForLine(lineId, lineName).find((s) => s.id.toLowerCase() === slug);
}

export function findRailLine(
  prefectureSlug: string,
  prefectureName: string,
  lineId: string
): RentalRailLine | undefined {
  const operators = railOperatorsForPrefecture(prefectureSlug, prefectureName);
  for (const op of operators) {
    const line = op.lines.find((l) => l.id === lineId);
    if (line) return line;
  }
  return undefined;
}

export const RENT_EXTRA_OPTIONS = [
  { id: 'mgmt-included', label: 'Management fee included' },
  { id: 'parking-included', label: 'Parking fee included' },
  { id: 'no-key-money', label: 'No key money' },
  { id: 'no-deposit', label: 'No deposit / guarantor fee' },
  { id: 'initial-card', label: 'Initial costs payable by card' },
  { id: 'rent-card', label: 'Rent payable by card' },
] as const;

export const LAYOUT_OPTIONS = [
  '1R',
  '1K',
  '1DK',
  '1LDK',
  '2K',
  '2DK',
  '2LDK',
  '3K',
  '3DK',
  '3LDK',
  '4K',
  '4DK',
  '4LDK+',
] as const;

export const AREA_OPTIONS = [
  { value: '', label: 'No specification' },
  { value: '20', label: '20m² or more' },
  { value: '25', label: '25m² or more' },
  { value: '30', label: '30m² or more' },
  { value: '40', label: '40m² or more' },
  { value: '50', label: '50m² or more' },
  { value: '60', label: '60m² or more' },
  { value: '70', label: '70m² or more' },
  { value: '80', label: '80m² or more' },
  { value: '100', label: '100m² or more' },
];

export const WALK_FROM_STATION_OPTIONS = [
  { value: '', label: 'No specification' },
  { value: '1', label: 'Within 1 minute' },
  { value: '3', label: 'Within 3 minutes' },
  { value: '5', label: 'Within 5 minutes' },
  { value: '7', label: 'Within 7 minutes' },
  { value: '10', label: 'Within 10 minutes' },
  { value: '15', label: 'Within 15 minutes' },
  { value: '20', label: 'Within 20 minutes' },
];

export const BUILDING_AGE_OPTIONS = [
  { value: '', label: 'No specification' },
  { value: 'new', label: 'New construction' },
  { value: '3', label: 'Within 3 years' },
  { value: '5', label: 'Within 5 years' },
  { value: '10', label: 'Within 10 years' },
  { value: '15', label: 'Within 15 years' },
  { value: '20', label: 'Within 20 years' },
  { value: '25', label: 'Within 25 years' },
  { value: '30', label: 'Within 30 years' },
  { value: '35', label: 'Within 35 years' },
  { value: '40', label: 'Within 40 years' },
];

export const SURROUNDING_OPTIONS = [
  {
    id: 'convenience',
    label: 'Convenience store within ~5 min walk (400m)',
  },
  {
    id: 'shopping',
    label: 'Shopping (supermarket, mall, etc.) within ~15 min walk (1,200m)',
  },
  {
    id: 'dining',
    label: 'Restaurants within ~10 min walk (800m)',
  },
  {
    id: 'hospital',
    label: 'Hospital within ~15 min walk (1,200m)',
  },
  {
    id: 'childcare',
    label: 'Kindergarten / nursery within ~10 min walk (800m)',
  },
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  { id: 'apartment', label: 'Apartment' },
  { id: 'mansion', label: 'Mansion' },
  { id: 'detached', label: 'Detached house' },
] as const;

export const BUILDING_STRUCTURE_OPTIONS = [
  { id: 'rc', label: 'Reinforced concrete / steel-reinforced' },
  { id: 'steel', label: 'Steel frame' },
  { id: 'wood', label: 'Wooden' },
  { id: 'other', label: 'Other' },
] as const;

export const MEDIA_OPTIONS = [
  { id: 'floorplan', label: 'Floor plan available' },
  { id: 'photos', label: 'Photos available' },
  { id: 'panorama', label: 'Panorama available' },
  { id: 'vr', label: 'VR available' },
] as const;

export const KITCHEN_OPTIONS = [
  { id: 'system-kitchen', label: 'System kitchen' },
  { id: 'counter-kitchen', label: 'Counter kitchen' },
  { id: 'ih', label: 'IH cooking heater' },
  { id: 'gas-stove', label: 'Gas stove allowed' },
  { id: 'two-burners', label: '2+ burners' },
  { id: 'water-purifier', label: 'Water purifier' },
  { id: 'dishwasher', label: 'Dishwasher / dryer' },
  { id: 'disposer', label: 'Garbage disposer' },
] as const;

export const BATH_TOILET_OPTIONS = [
  { id: 'bath-toilet-separate', label: 'Separate bath and toilet' },
  { id: 'bath-toilet-combined', label: 'Combined bath and toilet' },
  { id: 'reheat', label: 'Reheating function' },
  { id: 'bath-dryer', label: 'Bathroom dryer' },
  { id: 'washlet', label: 'Warm-water bidet toilet' },
  { id: 'vanity-shower', label: 'Vanity with shower' },
  { id: 'washroom-independent', label: 'Independent washroom' },
  { id: 'tankless-toilet', label: 'Tankless toilet' },
] as const;

export const HEATING_COOLING_OPTIONS = [
  { id: 'ac', label: 'Air conditioner' },
  { id: 'ac-all-rooms', label: 'AC in all rooms' },
  { id: 'floor-heating', label: 'Floor heating' },
] as const;

export const STORAGE_OPTIONS = [
  { id: 'walk-in-closet', label: 'Walk-in closet' },
  { id: 'storage-space', label: 'Storage space' },
  { id: 'underfloor-storage', label: 'Underfloor storage' },
  { id: 'trunk-room', label: 'Trunk room' },
  { id: 'shoe-box', label: 'Shoe cabinet' },
] as const;

export const TV_COMMUNICATION_OPTIONS = [
  { id: 'bs', label: 'BS terminal' },
  { id: 'cs', label: 'CS' },
  { id: 'catv', label: 'CATV' },
  { id: 'fiber', label: 'Optical fiber' },
  { id: 'free-internet', label: 'Free internet' },
] as const;

export const SECURITY_OPTIONS = [
  { id: 'auto-lock', label: 'Auto-lock' },
  { id: 'security-24h', label: '24-hour security' },
  { id: 'security-camera', label: 'Security camera' },
  { id: 'intercom-monitor', label: 'Intercom with monitor' },
  { id: 'dimple-key', label: 'Dimple key' },
  { id: 'security-glass', label: 'Security glass' },
  { id: 'delivery-box', label: 'Delivery box' },
  { id: 'electric-shutter', label: 'Electric shutter' },
] as const;

export const POSITION_OPTIONS = [
  { id: 'floor-2plus', label: '2nd floor or higher' },
  { id: 'corner-room', label: 'Corner room' },
  { id: 'top-floor', label: 'Top floor' },
  { id: 'floor-1', label: '1st floor' },
] as const;

export const TENANCY_CONDITION_OPTIONS = [
  { id: 'immediate-move-in', label: 'Immediate move-in' },
  { id: 'exclude-female-only', label: 'Exclude female-only' },
  { id: 'pet-consultation', label: 'Pet consultation' },
  { id: 'no-key-money', label: 'No key money' },
  { id: 'free-rent', label: 'Free rent period' },
  { id: 'diy-allowed', label: 'DIY allowed' },
  { id: 'two-person', label: 'Two-person occupancy' },
  { id: 'exclude-male-only', label: 'Exclude male-only' },
  { id: 'large-dog-consultation', label: 'Large dog consultation' },
  { id: 'no-deposit', label: 'No deposit' },
  { id: 'two-generation', label: 'Suitable for two-generation households' },
  { id: 'no-guarantor', label: 'No guarantor required' },
  { id: 'female-only', label: 'Female-only' },
  { id: 'senior-consultation', label: 'Senior consultation' },
  { id: 'small-dog-consultation', label: 'Small dog consultation' },
  { id: 'office-allowed', label: 'Office use allowed' },
  { id: 'trash-24h', label: '24-hour trash disposal' },
] as const;

export const COMMON_FACILITY_OPTIONS = [
  { id: 'elevator', label: 'Elevator' },
  { id: 'fitness', label: 'Fitness facility' },
  { id: 'resident-manager', label: 'Resident manager' },
  { id: 'drop-off', label: 'Drop-off space' },
  { id: 'front-service', label: 'Front desk service' },
] as const;

export const EQUIPMENT_OPTIONS = [
  { id: 'flooring', label: 'Flooring' },
  { id: 'washer-space', label: 'Washing machine space' },
  { id: 'propane-gas', label: 'Propane gas' },
  { id: 'energy-water-heater', label: 'Energy-saving water heater' },
  { id: 'all-room-flooring', label: 'Flooring in all rooms' },
  { id: 'washer-dryer', label: 'Washer / clothes dryer' },
  { id: 'double-glazing', label: 'Double-glazed glass' },
  { id: 'indoor-drying', label: 'Indoor clothes drying' },
  { id: 'indoor-washer', label: 'Indoor washing machine space' },
  { id: 'city-gas', label: 'City gas' },
  { id: 'ventilation-24h', label: '24-hour ventilation system' },
  { id: 'ev-charging', label: 'EV charging' },
] as const;

export const FEATURE_CHARACTERISTIC_OPTIONS = [
  { id: 'south-facing', label: 'South-facing' },
  { id: 'barrier-free', label: 'Barrier-free' },
  { id: 'with-appliances', label: 'With appliances' },
  { id: 'loft', label: 'Loft' },
  { id: 'smart-house', label: 'Smart house' },
  { id: 'quiet-area', label: 'Quiet residential area' },
  { id: 'all-electric', label: 'All-electric' },
  { id: 'bay-window', label: 'Bay window' },
  { id: 'designers', label: "Designer's property" },
  { id: 'condo-type', label: 'Condominium type' },
  { id: 'furnished', label: 'Furnished' },
  { id: 'maisonette', label: 'Maisonette' },
  { id: 'tile-exterior', label: 'Tile exterior' },
] as const;

export const CONSTRUCTION_METHOD_OPTIONS = [
  { id: 'non-formaldehyde', label: 'Non-formaldehyde' },
  { id: 'double-floor-ceiling', label: 'Double floor / double ceiling' },
] as const;

export const OTHER_PROPERTY_OPTIONS = [
  { id: 'balcony', label: 'Balcony' },
  { id: 'wood-deck', label: 'Wood deck' },
  { id: 'parking-2', label: '2 parking spaces' },
  { id: 'motorcycle-parking', label: 'Motorcycle parking' },
  { id: 'reform-included', label: 'Includes renovated / planned renovation' },
  { id: 'roof-balcony', label: 'Roof balcony' },
  { id: 'garden', label: 'Garden / private garden' },
  { id: 'medium-car-parking', label: 'Parking for medium-sized cars' },
  { id: 'balcony-2plus', label: '2+ balconies' },
  { id: 'parking-nearby', label: 'Parking (including nearby)' },
  { id: 'bicycle-parking', label: 'Bicycle parking' },
] as const;

export const DISCLOSURE_DATE_OPTIONS = [
  { value: '', label: 'No specification' },
  { value: 'today', label: 'Released today' },
  { value: '3days', label: 'Released within 3 days' },
  { value: '1week', label: 'Released within 1 week' },
] as const;

export const CONTRACT_CONDITION_OPTIONS = [
  { value: 'including-fixed-term', label: 'Including fixed-term tenancy' },
  { value: 'excluding-fixed-term', label: 'Exclude fixed-term tenancy' },
  { value: 'fixed-term-only', label: 'Fixed-term tenancy only' },
] as const;

export type LineSearchFilters = {
  rentMin: string;
  rentMax: string;
  rentExtras: string[];
  layouts: string[];
  areaMin: string;
  walkMinutes: string;
  buildingAge: string;
  surroundings: string[];
  propertyTypes: string[];
  buildingStructures: string[];
  media: string[];
  kitchen: string[];
  bathToilet: string[];
  heatingCooling: string[];
  storage: string[];
  tvCommunication: string[];
  security: string[];
  position: string[];
  tenancyConditions: string[];
  commonFacilities: string[];
  equipment: string[];
  features: string[];
  construction: string[];
  otherProperty: string[];
  disclosureDate: string;
  contractCondition: string;
  appealRecommended: boolean;
};

export const DEFAULT_LINE_SEARCH_FILTERS: LineSearchFilters = {
  rentMin: '',
  rentMax: '',
  rentExtras: [],
  layouts: [],
  areaMin: '',
  walkMinutes: '',
  buildingAge: '',
  surroundings: [],
  propertyTypes: [],
  buildingStructures: [],
  media: [],
  kitchen: [],
  bathToilet: [],
  heatingCooling: [],
  storage: [],
  tvCommunication: [],
  security: [],
  position: [],
  tenancyConditions: [],
  commonFacilities: [],
  equipment: [],
  features: [],
  construction: [],
  otherProperty: [],
  disclosureDate: '',
  contractCondition: 'including-fixed-term',
  appealRecommended: false,
};

export function appendLineFiltersToParams(params: URLSearchParams, filters: LineSearchFilters): void {
  if (filters.rentMin) params.set('rentMin', filters.rentMin);
  if (filters.rentMax) params.set('rentMax', filters.rentMax);
  filters.rentExtras.forEach((id) => params.append('rentExtra', id));
  filters.layouts.forEach((l) => params.append('layout', l));
  if (filters.areaMin) params.set('areaMin', filters.areaMin);
  if (filters.walkMinutes) params.set('walk', filters.walkMinutes);
  if (filters.buildingAge) params.set('buildingAge', filters.buildingAge);
  filters.surroundings.forEach((id) => params.append('surrounding', id));
  filters.propertyTypes.forEach((id) => params.append('propertyType', id));
  filters.buildingStructures.forEach((id) => params.append('structure', id));
  filters.media.forEach((id) => params.append('media', id));
  filters.kitchen.forEach((id) => params.append('kitchen', id));
  filters.bathToilet.forEach((id) => params.append('bath', id));
  filters.heatingCooling.forEach((id) => params.append('hvac', id));
  filters.storage.forEach((id) => params.append('storage', id));
  filters.tvCommunication.forEach((id) => params.append('tvComm', id));
  filters.security.forEach((id) => params.append('security', id));
  filters.position.forEach((id) => params.append('position', id));
  filters.tenancyConditions.forEach((id) => params.append('condition', id));
  filters.commonFacilities.forEach((id) => params.append('facility', id));
  filters.equipment.forEach((id) => params.append('equipment', id));
  filters.features.forEach((id) => params.append('feature', id));
  filters.construction.forEach((id) => params.append('construction', id));
  filters.otherProperty.forEach((id) => params.append('other', id));
  if (filters.disclosureDate) params.set('disclosure', filters.disclosureDate);
  if (filters.contractCondition) params.set('contract', filters.contractCondition);
  if (filters.appealRecommended) params.set('appealRecommended', '1');
}

export const RENT_MIN_OPTIONS = [
  { value: '', label: 'No minimum' },
  { value: '40000', label: '¥40,000' },
  { value: '50000', label: '¥50,000' },
  { value: '60000', label: '¥60,000' },
  { value: '70000', label: '¥70,000' },
  { value: '80000', label: '¥80,000' },
  { value: '100000', label: '¥100,000' },
];

export const RENT_MAX_OPTIONS = [
  { value: '', label: 'No maximum' },
  { value: '60000', label: '¥60,000' },
  { value: '80000', label: '¥80,000' },
  { value: '100000', label: '¥100,000' },
  { value: '120000', label: '¥120,000' },
  { value: '150000', label: '¥150,000' },
  { value: '200000', label: '¥200,000' },
];
