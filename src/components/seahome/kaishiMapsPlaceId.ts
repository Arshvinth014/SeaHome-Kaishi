import { getPropertyDetail } from './seahomeRentalPropertyDetailData';
import { rentalPropertyDetailPath } from './seahomeRentalLineSearchData';
import type { RentalFullMapParams } from './seahomeRentalFullMapParams';
import { KAISHI_MAPS_PATH } from '../../utils/kaishiMapsRoutes';

/** Google Place ID–style prefix (deterministic per listing route). */
const PLACE_ID_PREFIX = 'ChIJ';

export type RentalListingMapContext = {
  locationSlug: string;
  lineSlug: string;
  stationSlug: string;
  listingId: string;
  stationName?: string;
};

export type KaishiMapsPlaceFocus = RentalFullMapParams & {
  placeId: string;
  placeSlug: string;
  returnPath: string;
};

/** URL slug: `miyagi-jr-main-station-2-listing-1` */
export function buildRentalListingPlaceSlug(ctx: RentalListingMapContext): string {
  return [ctx.locationSlug, ctx.lineSlug, ctx.stationSlug, ctx.listingId]
    .map((s) => s.trim().toLowerCase())
    .join('-');
}

/** Deterministic Place ID (ChIJ…) from listing route — same listing always gets the same id. */
export function buildRentalListingPlaceId(ctx: RentalListingMapContext): string {
  const key = buildRentalListingPlaceSlug(ctx);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let suffix = '';
  let n = h >>> 0;
  for (let i = 0; i < 22; i++) {
    suffix += chars[n % chars.length];
    n = Math.imul(n, 2654435761) >>> 0;
  }
  return `${PLACE_ID_PREFIX}${suffix}`;
}

export function parseRentalListingPlaceSlug(placeSlug: string): RentalListingMapContext | null {
  const parts = decodeURIComponent(placeSlug).trim().toLowerCase().split('-');
  if (parts.length < 4) return null;
  const listingId = parts[parts.length - 1]!;
  const stationSlug = parts[parts.length - 2]!;
  const lineSlug = parts[parts.length - 3]!;
  const locationSlug = parts.slice(0, -3).join('-');
  if (!locationSlug || !lineSlug || !stationSlug || !listingId) return null;
  return { locationSlug, lineSlug, stationSlug, listingId };
}

/** Google Maps–style view segment: `@35.6074,140.1065,16z` */
export function formatKaishiMapsViewSegment(lat: number, lng: number, zoom = 16): string {
  return `@${lat},${lng},${zoom}z`;
}

export function parseKaishiMapsViewSegment(segment: string): { lat: number; lng: number; zoom: number } | null {
  const raw = segment.startsWith('@') ? segment.slice(1) : segment;
  const match = /^(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?),(\d+(?:\.\d+)?)z$/i.exec(raw);
  if (!match) return null;
  const lat = Number(match[1]);
  const lng = Number(match[2]);
  const zoom = Number(match[3]);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || !Number.isFinite(zoom)) return null;
  return { lat, lng, zoom };
}

/**
 * Canonical apartment URL (Google Maps–like):
 * `/map/place/ChIJ…/miyagi-jr-main-station-2-listing-1/@35.6074,140.1065,16z`
 */
export function buildKaishiMapsPlacePath(
  ctx: RentalListingMapContext,
  lat: number,
  lng: number,
  options?: { zoom?: number; mode?: 'map' | 'satellite' }
): string {
  const placeId = buildRentalListingPlaceId(ctx);
  const placeSlug = buildRentalListingPlaceSlug(ctx);
  const view = formatKaishiMapsViewSegment(lat, lng, options?.zoom ?? 16);
  const base = `${KAISHI_MAPS_PATH}/place/${encodeURIComponent(placeId)}/${encodeURIComponent(placeSlug)}/${view}`;
  if (!options?.mode || options.mode === 'map') return base;
  return `${base}?mode=${options.mode}`;
}

export function buildKaishiMapsPlaceUrl(
  ctx: RentalListingMapContext,
  lat: number,
  lng: number,
  options?: { zoom?: number; mode?: 'map' | 'satellite' }
): string {
  const path = buildKaishiMapsPlacePath(ctx, lat, lng, options);
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${path}`;
  }
  return path;
}

export function parseKaishiMapsPlacePathname(pathname: string): {
  placeId: string;
  placeSlug: string;
  view: string;
} | null {
  const prefix = `${KAISHI_MAPS_PATH}/place/`;
  if (!pathname.startsWith(prefix)) return null;
  const rest = pathname.slice(prefix.length);
  const segments = rest.split('/').filter(Boolean);
  if (segments.length < 3) return null;
  const [placeId, placeSlug, ...viewParts] = segments;
  const view = viewParts.join('/');
  if (!placeId || !placeSlug || !view.startsWith('@')) return null;
  return {
    placeId: decodeURIComponent(placeId),
    placeSlug: decodeURIComponent(placeSlug),
    view,
  };
}

const RENTAL_DETAIL_PATH_RE =
  /\/search-by-line-station\/([^/]+)\/([^/]+)\/([^/]+)\/([^/?#]+)/i;

export function parseRentalListingFromDetailPath(detailPath: string): RentalListingMapContext | null {
  const match = RENTAL_DETAIL_PATH_RE.exec(detailPath);
  if (!match) return null;
  return {
    locationSlug: decodeURIComponent(match[1]!),
    lineSlug: decodeURIComponent(match[2]!),
    stationSlug: decodeURIComponent(match[3]!),
    listingId: decodeURIComponent(match[4]!),
  };
}

export function resolveKaishiMapsPlaceFromPath(pathname: string): KaishiMapsPlaceFocus | null {
  const parsed = parseKaishiMapsPlacePathname(pathname);
  if (!parsed) return null;

  const ctx = parseRentalListingPlaceSlug(parsed.placeSlug);
  if (!ctx) return null;

  const expectedId = buildRentalListingPlaceId(ctx);
  if (parsed.placeId !== expectedId) return null;

  const coords = parseKaishiMapsViewSegment(parsed.view);
  if (!coords) return null;

  const stationName =
    ctx.stationName ?? ctx.stationSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const property = getPropertyDetail(ctx.listingId, stationName);
  const title = `${property.title} ${property.roomNumber} ${property.layout}`.trim();

  return {
    placeId: parsed.placeId,
    placeSlug: parsed.placeSlug,
    lat: coords.lat,
    lng: coords.lng,
    title,
    returnPath: rentalPropertyDetailPath(
      ctx.locationSlug,
      ctx.lineSlug,
      ctx.stationSlug,
      ctx.listingId
    ),
    nearStations: property.transport,
    mode: undefined,
  };
}
