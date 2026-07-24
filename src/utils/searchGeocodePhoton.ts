import type { MapSearchSuggestion } from '../components/seahome/kaishiMapsPlaceSearch';

/** Japan bounding box for Photon — prioritizes domestic results */
const JAPAN_BBOX = '122.93,24.04,153.99,45.55';

type PhotonFeature = {
  geometry?: { coordinates?: [number, number] };
  properties?: Record<string, unknown>;
};

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function labelFromProperties(p: Record<string, unknown>): string {
  const name = str(p.name);
  if (name) return name;
  const street = str(p.street);
  if (street) return street;
  return (
    str(p.city) ||
    str(p.town) ||
    str(p.village) ||
    str(p.locality) ||
    str(p.county) ||
    str(p.state) ||
    str(p.country)
  );
}

function subtitleFromProperties(p: Record<string, unknown>, label: string): string | undefined {
  const parts: string[] = [];
  const locality = str(p.city) || str(p.town) || str(p.village) || str(p.locality);
  if (locality && locality !== label) parts.push(locality);
  const state = str(p.state);
  if (state && state !== label && state !== locality) parts.push(state);
  const country = str(p.country);
  if (country) parts.push(country);
  const uniq = Array.from(new Set(parts));
  return uniq.length > 0 ? uniq.join(', ') : undefined;
}

function zoomForPlaceType(type: string): number {
  switch (type) {
    case 'country':
      return 6;
    case 'state':
      return 8;
    case 'city':
    case 'district':
      return 11;
    case 'locality':
    case 'borough':
      return 12;
    case 'street':
      return 15;
    case 'house':
    case 'building':
      return 17;
    default:
      return 14;
  }
}

function parseFeature(feature: PhotonFeature): MapSearchSuggestion | null {
  const coords = feature.geometry?.coordinates;
  if (!coords || coords.length < 2) return null;
  const [lng, lat] = coords;
  const p = feature.properties;
  if (!p || typeof p !== 'object') return null;

  const label = labelFromProperties(p);
  if (!label) return null;

  const osmType = str(p.osm_type);
  const osmId = p.osm_id;
  const id =
    osmType && osmId != null
      ? `photon-${osmType}-${osmId}`
      : `photon-${lat.toFixed(5)}-${lng.toFixed(5)}`;

  return {
    id,
    label,
    subtitle: subtitleFromProperties(p, label),
    lat,
    lng,
    zoom: zoomForPlaceType(str(p.type) || str(p.osm_value)),
    source: 'geocode',
  };
}

/** Forward geocode a place name via Photon (CORS-friendly). */
export async function searchGeocodePhoton(
  query: string,
  options?: { limit?: number; bbox?: string }
): Promise<MapSearchSuggestion[]> {
  const q = query.trim();
  if (!q) return [];

  const limit = options?.limit ?? 6;
  const params = new URLSearchParams({
    q,
    limit: String(limit),
    bbox: options?.bbox ?? JAPAN_BBOX,
    lang: 'en',
  });

  const url = `https://photon.komoot.io/api/?${params.toString()}`;
  const ctrl = new AbortController();
  const tid = window.setTimeout(() => ctrl.abort(), 12_000);

  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) return [];
    const data = (await res.json()) as { features?: PhotonFeature[] };
    const out: MapSearchSuggestion[] = [];
    for (const feature of data.features ?? []) {
      const parsed = parseFeature(feature);
      if (parsed) out.push(parsed);
    }
    return out;
  } catch {
    return [];
  } finally {
    window.clearTimeout(tid);
  }
}
