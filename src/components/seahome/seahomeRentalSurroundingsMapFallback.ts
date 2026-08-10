import type { SurroundingsPoi, SurroundingsPoiCategory } from './seahomeRentalSurroundingsMapData';

const FALLBACK_COUNTS: Record<SurroundingsPoiCategory, number> = {
  convenience: 5,
  supermarket: 3,
  school: 2,
  nursery: 2,
  park: 4,
  hospital: 3,
  drugstore: 2,
  carshare: 1,
};

const NAME_PREFIX: Record<SurroundingsPoiCategory, string> = {
  convenience: 'Convenience store',
  supermarket: 'Supermarket',
  school: 'Elementary / junior high school',
  nursery: 'Kindergarten / nursery',
  park: 'Park',
  hospital: 'Hospital / clinic',
  drugstore: 'Drugstore',
  carshare: 'Car-share station',
};

/** Offset lat/lng by meters (rough flat-earth). */
function offsetMeters(
  lat: number,
  lng: number,
  bearingDeg: number,
  distanceM: number
): { latitude: number; longitude: number } {
  const rad = (bearingDeg * Math.PI) / 180;
  const dLat = (distanceM * Math.cos(rad)) / 111_320;
  const dLng = (distanceM * Math.sin(rad)) / (111_320 * Math.cos((lat * Math.PI) / 180));
  return { latitude: lat + dLat, longitude: lng + dLng };
}

/**
 * Deterministic demo POIs around a listing when Overpass is unavailable or empty.
 */
export function buildFallbackNearbyPois(latitude: number, longitude: number): SurroundingsPoi[] {
  const pois: SurroundingsPoi[] = [];
  let bearing = 15;

  (Object.keys(FALLBACK_COUNTS) as SurroundingsPoiCategory[]).forEach((category) => {
    const count = FALLBACK_COUNTS[category];
    for (let i = 0; i < count; i += 1) {
      const distanceM = 120 + (bearing % 7) * 95 + i * 40;
      const coords = offsetMeters(latitude, longitude, bearing, distanceM);
      pois.push({
        id: `fallback-${category}-${i}`,
        category,
        name: `${NAME_PREFIX[category]} ${i + 1}`,
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      bearing += 37;
    }
  });

  return pois;
}
