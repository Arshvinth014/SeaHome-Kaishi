/**
 * Same-origin Seahome Net bundle (see `npm run sync-seahome-embed`).
 * Dev fallback: proxy `/seahome-net/` → localhost:3001 or set REACT_APP_SEAHOME_NET_EMBED_URL.
 */
export function resolveSeahomeEmbedUrl(): string {
  const fromEnv =
    (typeof process !== 'undefined' && process.env?.REACT_APP_SEAHOME_NET_EMBED_URL?.trim()) ||
    (import.meta as any).env?.VITE_SEAHOME_NET_EMBED_URL?.trim();
  if (fromEnv) return fromEnv;

  if (typeof window !== 'undefined') {
    const base = `${window.location.origin}/seahome-net/`;
    return base.endsWith('/') ? base : `${base}/`;
  }

  return '/seahome-net/';
}
