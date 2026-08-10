export type SurroundingsPoiCategory =
  | 'convenience'
  | 'supermarket'
  | 'school'
  | 'nursery'
  | 'park'
  | 'hospital'
  | 'drugstore'
  | 'carshare';

export type SurroundingsPoi = {
  id: string;
  category: SurroundingsPoiCategory;
  name: string;
  latitude: number;
  longitude: number;
};

export type PropertySurroundingsMap = {
  latitude: number;
  longitude: number;
};

export type SurroundingsPoiFilter = {
  id: SurroundingsPoiCategory;
  label: string;
  color: string;
};

export const SURROUNDINGS_POI_FILTERS: SurroundingsPoiFilter[] = [
  { id: 'convenience', label: 'Convenience store', color: '#8ecae6' },
  { id: 'supermarket', label: 'Supermarket', color: '#2a9d8f' },
  { id: 'school', label: 'Elementary / junior high', color: '#5c9ded' },
  { id: 'nursery', label: 'Kindergarten / nursery', color: '#4a7fd7' },
  { id: 'park', label: 'Park', color: '#52b788' },
  { id: 'hospital', label: 'Hospital / clinic', color: '#48cae4' },
  { id: 'drugstore', label: 'Drugstore', color: '#38b0a8' },
  { id: 'carshare', label: 'Car-share station', color: '#4d6fa9' },
];

/** Default map center (Chiba City) for Kaishi Maps hub at `/map`. */
export const KAISHI_MAPS_DEFAULT_CENTER = { lat: 35.6074, lng: 140.1065 };

const CHIBA_CENTER = KAISHI_MAPS_DEFAULT_CENTER;

export function buildPropertySurroundingsMap(
  lat: number = CHIBA_CENTER.lat,
  lng: number = CHIBA_CENTER.lng
): PropertySurroundingsMap {
  return {
    latitude: lat,
    longitude: lng,
  };
}
