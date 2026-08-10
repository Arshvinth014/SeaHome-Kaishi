import {
  SURROUNDINGS_POI_FILTERS,
  type SurroundingsPoi,
  type SurroundingsPoiCategory,
} from './seahomeRentalSurroundingsMapData';
import { buildFallbackNearbyPois } from './seahomeRentalSurroundingsMapFallback';

type OverpassElement = {
  id: number;
  type: 'node' | 'way' | 'relation';
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
};

type OverpassResponse = {
  elements: OverpassElement[];
};

const MAX_PER_CATEGORY = 12;

function elementCoords(el: OverpassElement): { lat: number; lon: number } | null {
  if (typeof el.lat === 'number' && typeof el.lon === 'number') {
    return { lat: el.lat, lon: el.lon };
  }
  if (el.center) {
    return { lat: el.center.lat, lon: el.center.lon };
  }
  return null;
}

function elementName(tags: Record<string, string> | undefined, fallback: string): string {
  if (!tags) return fallback;
  return tags['name:en'] || tags.name || tags['name:ja'] || tags.brand || tags.operator || fallback;
}

function categorize(tags: Record<string, string> | undefined): SurroundingsPoiCategory | null {
  if (!tags) return null;

  const shop = tags.shop;
  const amenity = tags.amenity;
  const leisure = tags.leisure;
  const landuse = tags.landuse;

  if (shop === 'convenience' || shop === 'variety_store') return 'convenience';
  if (shop === 'supermarket' || shop === 'department_store') return 'supermarket';
  if (amenity === 'school' || amenity === 'college' || tags.building === 'school') return 'school';
  if (
    amenity === 'kindergarten' ||
    amenity === 'childcare' ||
    amenity === 'nursery' ||
    tags.preschool === 'yes'
  ) {
    return 'nursery';
  }
  if (
    leisure === 'park' ||
    leisure === 'garden' ||
    leisure === 'playground' ||
    landuse === 'grass' ||
    landuse === 'recreation_ground'
  ) {
    return 'park';
  }
  if (amenity === 'hospital' || amenity === 'clinic' || amenity === 'doctors') return 'hospital';
  if (amenity === 'pharmacy' || shop === 'chemist' || shop === 'drugstore') return 'drugstore';
  if (amenity === 'car_sharing' || tags.car_sharing === 'yes') return 'carshare';

  return null;
}

function buildOverpassQuery(lat: number, lng: number, radiusM: number): string {
  return `
[out:json][timeout:45];
(
  nwr["shop"="convenience"](around:${radiusM},${lat},${lng});
  nwr["shop"="supermarket"](around:${radiusM},${lat},${lng});
  nwr["shop"="chemist"](around:${radiusM},${lat},${lng});
  nwr["amenity"="pharmacy"](around:${radiusM},${lat},${lng});
  nwr["amenity"="school"](around:${radiusM},${lat},${lng});
  nwr["amenity"="college"](around:${radiusM},${lat},${lng});
  nwr["amenity"~"kindergarten|childcare"](around:${radiusM},${lat},${lng});
  nwr["leisure"="park"](around:${radiusM},${lat},${lng});
  nwr["amenity"~"hospital|clinic|doctors"](around:${radiusM},${lat},${lng});
  nwr["amenity"="car_sharing"](around:${radiusM},${lat},${lng});
);
out center;
`;
}

function mergeWithFallback(apiPois: SurroundingsPoi[], latitude: number, longitude: number): SurroundingsPoi[] {
  if (apiPois.length === 0) {
    return buildFallbackNearbyPois(latitude, longitude);
  }

  const fallback = buildFallbackNearbyPois(latitude, longitude);
  const countByCategory = new Map<SurroundingsPoiCategory, number>();
  for (const poi of apiPois) {
    countByCategory.set(poi.category, (countByCategory.get(poi.category) ?? 0) + 1);
  }

  const extras = fallback.filter((poi) => (countByCategory.get(poi.category) ?? 0) === 0);
  return [...apiPois, ...extras];
}

function parseOverpassElements(elements: OverpassElement[]): SurroundingsPoi[] {
  const counts: Record<SurroundingsPoiCategory, number> = {
    convenience: 0,
    supermarket: 0,
    school: 0,
    nursery: 0,
    park: 0,
    hospital: 0,
    drugstore: 0,
    carshare: 0,
  };

  const pois: SurroundingsPoi[] = [];

  for (const el of elements) {
    const category = categorize(el.tags);
    if (!category) continue;
    if (counts[category] >= MAX_PER_CATEGORY) continue;

    const coords = elementCoords(el);
    if (!coords) continue;

    const label =
      SURROUNDINGS_POI_FILTERS.find((f) => f.id === category)?.label ?? category;

    pois.push({
      id: `${el.type}-${el.id}`,
      category,
      name: elementName(el.tags, label),
      latitude: coords.lat,
      longitude: coords.lon,
    });
    counts[category] += 1;
  }

  return pois;
}

export async function fetchNearbyPois(
  latitude: number,
  longitude: number,
  radiusM = 1000
): Promise<SurroundingsPoi[]> {
  const query = buildOverpassQuery(latitude, longitude, radiusM);
  const endpoints = [
    '/api/overpass/api/interpreter',
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
  ];

  let lastError: unknown;

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `data=${encodeURIComponent(query)}`,
      });

      if (!response.ok) {
        throw new Error(`Overpass HTTP ${response.status}`);
      }

      const json = (await response.json()) as OverpassResponse;
      const parsed = parseOverpassElements(json.elements ?? []);
      return mergeWithFallback(parsed, latitude, longitude);
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    return buildFallbackNearbyPois(latitude, longitude);
  }

  return buildFallbackNearbyPois(latitude, longitude);
}
