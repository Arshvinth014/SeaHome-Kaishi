import { reverseGeocodePhoton } from '../../utils/reverseGeocodePhoton';
import type { MapSearchSuggestion } from './kaishiMapsPlaceSearch';
import type { KaishiMapsRailStation } from './seahomeKaishiMapsHubData';

export type KaishiMapsPlaceDetails = {
  id: string;
  name: string;
  nameJa?: string;
  category: string;
  address: string;
  website?: string;
  coordinatesLabel: string;
  lat: number;
  lng: number;
  rating?: number;
  reviewCount?: number;
  heroImageUrl: string;
  isTransit: boolean;
  wheelchairAccessible: boolean;
  lineName?: string;
};

const JA_NAMES: Record<string, string> = {
  Tokyo: '東京',
  'Tokyo Station': '東京駅',
  Chiba: '千葉',
  Osaka: '大阪',
  Kyoto: '京都',
  Yokohama: '横浜',
  Niigata: '新潟',
  Funabashi: '船橋',
  Koiwa: '小岩',
  Ichikawa: '市川',
  Kinshicho: '錦糸町',
};

function japaneseName(label: string, isStation: boolean): string | undefined {
  const base = JA_NAMES[label] ?? JA_NAMES[label.replace(/\s+Station$/i, '')];
  if (!base) return undefined;
  if (isStation && !base.endsWith('駅')) return `${base}駅`;
  return base;
}

function categoryLabel(
  suggestion: MapSearchSuggestion,
  osmType?: string,
  osmValue?: string
): { category: string; isTransit: boolean } {
  if (suggestion.source === 'station') {
    return { category: 'Transit station', isTransit: true };
  }
  if (suggestion.source === 'city') {
    return { category: 'City', isTransit: false };
  }
  const t = (osmType || osmValue || '').toLowerCase();
  if (t.includes('station') || osmValue === 'station') {
    return { category: 'Transit station', isTransit: true };
  }
  if (t === 'city' || t === 'town' || t === 'village') {
    return { category: 'City', isTransit: false };
  }
  if (t === 'house' || t === 'building') {
    return { category: 'Building', isTransit: false };
  }
  if (t === 'street') {
    return { category: 'Street', isTransit: false };
  }
  return { category: 'Place', isTransit: false };
}

function pseudoRating(name: string): { rating: number; reviewCount: number } {
  let h = 0;
  for (let i = 0; i < name.length; i += 1) {
    h = (h * 31 + name.charCodeAt(i)) | 0;
  }
  const rating = Math.round((3.9 + (Math.abs(h) % 11) / 10) * 10) / 10;
  const reviewCount = 800 + (Math.abs(h) % 24_000);
  return { rating, reviewCount };
}

export function placeHeroImageUrl(lat: number, lng: number): string {
  const latStr = lat.toFixed(5);
  const lngStr = lng.toFixed(5);
  return `https://staticmap.openstreetmap.de/staticmap.php?center=${latStr},${lngStr}&zoom=16&size=640x280&maptype=mapnik&markers=${latStr},${lngStr},lightblue1`;
}

function formatAddress(parts: string[]): string {
  const seen = new Set<string>();
  const uniq: string[] = [];
  for (const p of parts) {
    const t = p.trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    uniq.push(t);
  }
  return uniq.join(', ');
}

function buildAddressFromPhoton(p: Record<string, unknown>, fallback: string): string {
  const parts: string[] = [];
  const push = (key: string) => {
    const v = p[key];
    if (typeof v === 'string' && v.trim()) parts.push(v.trim());
  };
  push('housenumber');
  push('street');
  push('district');
  const locality = p.city || p.town || p.village || p.locality;
  if (typeof locality === 'string' && locality.trim()) parts.push(locality.trim());
  push('state');
  push('postcode');
  push('country');
  const line = formatAddress(parts);
  return line || fallback;
}

export async function fetchKaishiMapsPlaceDetails(
  suggestion: MapSearchSuggestion,
  stations: KaishiMapsRailStation[]
): Promise<KaishiMapsPlaceDetails> {
  const station =
    suggestion.source === 'station'
      ? stations.find((s) => suggestion.id === `station-${s.id}`)
      : undefined;

  let address = suggestion.subtitle ?? '';
  let osmType = '';
  let osmValue = '';
  let website: string | undefined;

  try {
    const url = `https://photon.komoot.io/reverse?lat=${encodeURIComponent(String(suggestion.lat))}&lon=${encodeURIComponent(String(suggestion.lng))}&lang=en`;
    const ctrl = new AbortController();
    const tid = window.setTimeout(() => ctrl.abort(), 10_000);
    const res = await fetch(url, { signal: ctrl.signal });
    window.clearTimeout(tid);
    if (res.ok) {
      const data = (await res.json()) as {
        features?: Array<{ properties?: Record<string, unknown> }>;
      };
      const p = data.features?.[0]?.properties;
      if (p) {
        address = buildAddressFromPhoton(p, address || suggestion.label);
        osmType = typeof p.osm_key === 'string' ? p.osm_key : '';
        osmValue = typeof p.osm_value === 'string' ? p.osm_value : typeof p.type === 'string' ? p.type : '';
        const w = p.website;
        if (typeof w === 'string' && w.trim()) website = w.trim();
      }
    }
  } catch {
    /* use fallbacks */
  }

  if (!address) {
    const rev = await reverseGeocodePhoton(suggestion.lat, suggestion.lng);
    address = rev?.fullLine ?? suggestion.label;
  }

  const { category, isTransit } = categoryLabel(suggestion, osmType, osmValue);
  const isStation = Boolean(station) || isTransit;
  const nameJa = japaneseName(suggestion.label, isStation);
  const { rating, reviewCount } = pseudoRating(suggestion.label);

  return {
    id: suggestion.id,
    name: suggestion.label,
    nameJa,
    category,
    address,
    website,
    coordinatesLabel: `${suggestion.lat.toFixed(5)}, ${suggestion.lng.toFixed(5)}`,
    lat: suggestion.lat,
    lng: suggestion.lng,
    rating: isStation || suggestion.source === 'city' ? rating : undefined,
    reviewCount: isStation || suggestion.source === 'city' ? reviewCount : undefined,
    heroImageUrl: placeHeroImageUrl(suggestion.lat, suggestion.lng),
    isTransit: isStation,
    wheelchairAccessible: isStation,
    lineName: station?.line,
  };
}
