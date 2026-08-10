import type { KaishiMapsRailStation } from './seahomeKaishiMapsHubData';

export type MapSearchSuggestion = {
  id: string;
  label: string;
  subtitle?: string;
  lat: number;
  lng: number;
  zoom?: number;
  source: 'city' | 'station' | 'geocode' | 'property';
};

const QUICK_CITIES: MapSearchSuggestion[] = [
  { id: 'city-niigata', label: 'Niigata', subtitle: 'Japan', lat: 37.9022, lng: 139.0232, zoom: 12, source: 'city' },
  { id: 'city-tokyo', label: 'Tokyo', subtitle: 'Japan', lat: 35.6812, lng: 139.7671, zoom: 12, source: 'city' },
  { id: 'city-chiba', label: 'Chiba', subtitle: 'Japan', lat: 35.6074, lng: 140.1065, zoom: 12, source: 'city' },
  { id: 'city-osaka', label: 'Osaka', subtitle: 'Japan', lat: 34.6937, lng: 135.5023, zoom: 12, source: 'city' },
  { id: 'city-kyoto', label: 'Kyoto', subtitle: 'Japan', lat: 35.0116, lng: 135.7681, zoom: 12, source: 'city' },
  { id: 'city-yokohama', label: 'Yokohama', subtitle: 'Japan', lat: 35.4437, lng: 139.638, zoom: 12, source: 'city' },
];

function normalizeQuery(q: string): string {
  return q.trim().toLowerCase().replace(/\s+/g, ' ');
}

function matchesLabel(label: string, query: string): boolean {
  const l = label.toLowerCase();
  const q = normalizeQuery(query);
  if (!q) return false;
  if (l.includes(q) || q.includes(l)) return true;
  if (q.endsWith(' station')) {
    const without = q.replace(/\s+station$/, '').trim();
    return l.includes(without) || without.includes(l);
  }
  if (`${l} station`.includes(q)) return true;
  return false;
}

function stationSuggestions(stations: KaishiMapsRailStation[], query: string): MapSearchSuggestion[] {
  const q = normalizeQuery(query);
  if (!q) return [];

  return stations
    .filter((s) => matchesLabel(s.name, q))
    .slice(0, 6)
    .map((s) => ({
      id: `station-${s.id}`,
      label: s.name,
      subtitle: `${s.line} Station`,
      lat: s.latitude,
      lng: s.longitude,
      zoom: 14,
      source: 'station' as const,
    }));
}

function citySuggestions(query: string): MapSearchSuggestion[] {
  const q = normalizeQuery(query);
  if (!q) return [];
  return QUICK_CITIES.filter((c) => matchesLabel(c.label, q));
}

function dedupeSuggestions(items: MapSearchSuggestion[]): MapSearchSuggestion[] {
  const seen = new Set<string>();
  const out: MapSearchSuggestion[] = [];
  for (const item of items) {
    const key = `${item.label.toLowerCase()}|${item.lat.toFixed(3)}|${item.lng.toFixed(3)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

/** Instant matches from cities + JR Sobu stations (no network). */
export function buildLocalSearchSuggestions(
  query: string,
  stations: KaishiMapsRailStation[]
): MapSearchSuggestion[] {
  const q = normalizeQuery(query);
  if (!q) return [];

  return dedupeSuggestions([
    ...stationSuggestions(stations, q),
    ...citySuggestions(q),
  ]).slice(0, 8);
}

export function mergeSearchSuggestions(
  local: MapSearchSuggestion[],
  remote: MapSearchSuggestion[],
  max = 8
): MapSearchSuggestion[] {
  return dedupeSuggestions([...local, ...remote]).slice(0, max);
}

export function pickBestSearchMatch(
  query: string,
  suggestions: MapSearchSuggestion[]
): MapSearchSuggestion | null {
  const q = normalizeQuery(query);
  if (!q || suggestions.length === 0) return null;

  const exact = suggestions.find((s) => s.label.toLowerCase() === q);
  if (exact) return exact;

  const exactStation = suggestions.find((s) => `${s.label.toLowerCase()} station` === q);
  if (exactStation) return exactStation;

  return suggestions[0];
}
