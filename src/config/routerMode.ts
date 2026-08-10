/**
 * Production defaults to HashRouter (static hosts). For Azure Static Web Apps with SPA fallback,
 * set REACT_APP_USE_BROWSER_ROUTER=true so URLs are path-based (better SEO); update any hard-coded `#/` links.
 */
export function getUseBrowserRouter(): boolean {
  const isDev = typeof process !== 'undefined' ? process.env?.NODE_ENV === 'development' : (import.meta as any).env?.DEV;
  const useBrowser =
    (typeof process !== 'undefined' && process.env?.REACT_APP_USE_BROWSER_ROUTER === 'true') ||
    (import.meta as any).env?.VITE_USE_BROWSER_ROUTER === 'true';
  return Boolean(isDev || useBrowser);
}
