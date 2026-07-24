import type { SurroundingsPoiCategory } from './seahomeRentalSurroundingsMapData';

export type KaishiMapsCategoryId =
  | 'restaurants'
  | 'hotels'
  | 'things-to-do'
  | 'museums'
  | 'transit'
  | 'pharmacies'
  | 'atms';

export type KaishiMapsCategory = {
  id: KaishiMapsCategoryId;
  label: string;
  /** OSM-backed POI groups shown when this chip is active */
  poiCategories: SurroundingsPoiCategory[];
  /** Show JR / rail station markers */
  showRailStations?: boolean;
};

export const KAISHI_MAPS_CATEGORIES: KaishiMapsCategory[] = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    poiCategories: ['convenience', 'supermarket'],
  },
  {
    id: 'hotels',
    label: 'Hotels',
    poiCategories: [],
  },
  {
    id: 'things-to-do',
    label: 'Things to do',
    poiCategories: ['park'],
  },
  {
    id: 'museums',
    label: 'Museums',
    poiCategories: ['school'],
  },
  {
    id: 'transit',
    label: 'Transit',
    poiCategories: [],
    showRailStations: true,
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    poiCategories: ['drugstore', 'hospital'],
  },
  {
    id: 'atms',
    label: 'ATMs',
    poiCategories: ['convenience'],
  },
];

/** JR Sobu Line corridor — default hub view when showing stations only */
export const KAISHI_MAPS_DEFAULT_CENTER = { lat: 35.655, lng: 139.92 };
export const KAISHI_MAPS_DEFAULT_ZOOM = 10;
