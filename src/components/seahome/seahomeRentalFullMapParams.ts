import type { PropertyTransportAccess } from './seahomeRentalPropertyDetailData';
import { kaishiMapsPath } from '../../utils/kaishiMapsRoutes';
import type { MapSearchSuggestion } from './kaishiMapsPlaceSearch';
import {
  KAISHI_MAPS_DEFAULT_CENTER,
  buildPropertySurroundingsMap,
} from './seahomeRentalSurroundingsMapData';

export type RentalFullMapParams = {
  lat: number;
  lng: number;
  title?: string;
  returnPath?: string;
  mode?: 'map' | 'satellite';
  nearStations?: PropertyTransportAccess[];
};

const KAISHI_MAPS_DEFAULT_STATIONS: PropertyTransportAccess[] = [
  { line: 'JR Sobu Line', station: 'Chiba Station', walkMinutes: 8 },
  { line: 'Chiba Urban Monorail', station: 'Yoshikawa-koen Station', walkMinutes: 4 },
  { line: 'Keisei Chiba Line', station: 'Chiba-Chuo Station', walkMinutes: 10 },
];

/** Params used when `/map` is opened without query coordinates (e.g. from the home mega menu). */
export function getDefaultRentalFullMapParams(): RentalFullMapParams {
  const map = buildPropertySurroundingsMap(
    KAISHI_MAPS_DEFAULT_CENTER.lat,
    KAISHI_MAPS_DEFAULT_CENTER.lng
  );
  return {
    lat: map.latitude,
    lng: map.longitude,
    title: 'Kaishi Maps — Chiba City',
    nearStations: KAISHI_MAPS_DEFAULT_STATIONS,
    mode: 'map',
  };
}

export function resolveRentalFullMapParams(search: string): RentalFullMapParams {
  return parseRentalFullMapParams(search) ?? getDefaultRentalFullMapParams();
}

export function buildRentalFullMapSearch({
  lat,
  lng,
  title,
  returnPath,
  mode,
  nearStations,
}: RentalFullMapParams): string {
  const query = new URLSearchParams();
  query.set('lat', String(lat));
  query.set('lng', String(lng));
  if (title) query.set('title', title);
  if (returnPath) query.set('return', returnPath);
  if (mode) query.set('mode', mode);
  if (nearStations && nearStations.length > 0) {
    query.set('stations', JSON.stringify(nearStations));
  }
  return query.toString();
}

export function buildRentalFullMapLocation(params: RentalFullMapParams): {
  pathname: string;
  search: string;
} {
  return {
    pathname: kaishiMapsPath(),
    search: buildRentalFullMapSearch(params),
  };
}

export function buildRentalFullMapUrl(params: RentalFullMapParams): string {
  const { pathname, search } = buildRentalFullMapLocation(params);
  const path = search ? `${pathname}?${search}` : pathname;
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${path}`;
  }
  return path;
}

export function rentalFullMapParamsToSuggestion(
  params: RentalFullMapParams & { placeId?: string }
): MapSearchSuggestion {
  return {
    id: params.placeId ?? `property-${params.lat.toFixed(5)}-${params.lng.toFixed(5)}`,
    label: params.title ?? 'Rental property',
    subtitle: 'Apartment listing',
    lat: params.lat,
    lng: params.lng,
    zoom: 16,
    source: 'property',
  };
}

export function parseRentalFullMapParams(search: string): RentalFullMapParams | null {
  const query = new URLSearchParams(search.startsWith('?') ? search : `?${search}`);
  const lat = Number(query.get('lat'));
  const lng = Number(query.get('lng'));
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const modeRaw = query.get('mode');
  const mode = modeRaw === 'satellite' ? 'satellite' : modeRaw === 'map' ? 'map' : undefined;

  let nearStations: PropertyTransportAccess[] | undefined;
  const stationsRaw = query.get('stations');
  if (stationsRaw) {
    try {
      const parsed = JSON.parse(stationsRaw) as PropertyTransportAccess[];
      if (Array.isArray(parsed)) nearStations = parsed;
    } catch {
      nearStations = undefined;
    }
  }

  return {
    lat,
    lng,
    title: query.get('title') ?? undefined,
    returnPath: query.get('return') ?? undefined,
    mode,
    nearStations,
  };
}
