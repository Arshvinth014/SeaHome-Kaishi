import { getUseBrowserRouter } from '../config/routerMode';

/** Public Kaishi Maps URL — never prefix with user id (same for guests and logged-in users). */
export const KAISHI_MAPS_PATH = '/map';

/** Google Maps–style rental focus: `/map/place/ChIJ…/slug/@lat,lng,16z` */
export const KAISHI_MAPS_PLACE_PATH_PREFIX = `${KAISHI_MAPS_PATH}/place/`;

/** `/:segment/map`, `/:segment/dashboard/map`, or `user-xxx/map` — not canonical. */
const USER_SCOPED_MAP_PATH =
  /^\/[^/]+\/(?:dashboard\/)?map\/?$|^\/user-[^/]+\/map\/?$/i;

export function isKaishiMapsPlacePath(pathname?: string): boolean {
  const path = pathname ?? getAppRouterPath();
  return path.startsWith(KAISHI_MAPS_PLACE_PATH_PREFIX);
}

export function getAppRouterPath(): string {
  if (typeof window === 'undefined') return '/';

  if (!getUseBrowserRouter()) {
    const hash = window.location.hash || '';
    if (hash.startsWith('#/')) {
      const path = hash.slice(1).split('?')[0];
      return path || '/';
    }
    return window.location.pathname || '/';
  }

  return window.location.pathname || '/';
}

export function isKaishiMapsPath(pathname?: string): boolean {
  const path = pathname ?? getAppRouterPath();
  return (
    path === KAISHI_MAPS_PATH ||
    isKaishiMapsPlacePath(path) ||
    USER_SCOPED_MAP_PATH.test(path)
  );
}

export function isUserScopedKaishiMapsPath(pathname?: string): boolean {
  const path = pathname ?? getAppRouterPath();
  if (path === KAISHI_MAPS_PATH) return false;
  return USER_SCOPED_MAP_PATH.test(path);
}

export function kaishiMapsPath(): string {
  return KAISHI_MAPS_PATH;
}

/** Force the browser address bar to the canonical map path (or `/#/…` with HashRouter). */
export function syncBrowserUrlToCanonicalMap(search = '', hash = '', pathname?: string): void {
  if (typeof window === 'undefined') return;

  const mapPath =
    pathname && (pathname === KAISHI_MAPS_PATH || isKaishiMapsPlacePath(pathname))
      ? pathname
      : KAISHI_MAPS_PATH;

  if (!getUseBrowserRouter()) {
    const targetHash = `#${mapPath}${search}${hash}`;
    const next = `${window.location.pathname}${window.location.search}${targetHash}`;
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== next) {
      window.history.replaceState(null, '', next);
    }
    return;
  }

  const target = `${mapPath}${search}${hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (current !== target) {
    window.history.replaceState(null, '', target);
  }
}
