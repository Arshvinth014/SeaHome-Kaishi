export const KAISHI_EMBED_SOURCE = 'kaishi-nihon';

export type SeahomeEmbedMessage =
  | { source: typeof KAISHI_EMBED_SOURCE; type: 'SEAHOME_NAVIGATE'; path: string }
  | { source: typeof KAISHI_EMBED_SOURCE; type: 'SEAHOME_SET_LANGUAGE'; lang: string }
  | { source: typeof KAISHI_EMBED_SOURCE; type: 'SEAHOME_SET_CURRENCY'; currency: string };

const SEAHOME_IFRAME_TITLE = 'Seahome Real Estates';

function getSeahomeIframe(): HTMLIFrameElement | null {
  return document.querySelector<HTMLIFrameElement>(`iframe[title="${SEAHOME_IFRAME_TITLE}"]`);
}

function postToSeahomeEmbed(message: SeahomeEmbedMessage): void {
  const iframe = getSeahomeIframe();
  const target = iframe?.contentWindow;
  if (!target) return;
  target.postMessage(message, window.location.origin);
}

export const SEAHOME_NAVIGATE_EVENT = 'seahome:navigate';

function normalizeSeahomePath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

export function navigateSeahomeEmbed(path: string): void {
  postToSeahomeEmbed({
    source: KAISHI_EMBED_SOURCE,
    type: 'SEAHOME_NAVIGATE',
    path: normalizeSeahomePath(path),
  });
}

/** Navigate embed iframe when present; otherwise open listings from the hub page. */
export function requestSeahomeNavigation(path: string): void {
  const normalized = normalizeSeahomePath(path);
  if (getSeahomeIframe()) {
    navigateSeahomeEmbed(normalized);
    return;
  }
  window.dispatchEvent(
    new CustomEvent<{ path: string }>(SEAHOME_NAVIGATE_EVENT, { detail: { path: normalized } })
  );
}

export function setSeahomeEmbedLanguage(lang: string): void {
  localStorage.setItem('language', lang);
  postToSeahomeEmbed({ source: KAISHI_EMBED_SOURCE, type: 'SEAHOME_SET_LANGUAGE', lang });
}

export function setSeahomeEmbedCurrency(currency: string): void {
  localStorage.setItem('seahome_selected_currency', currency);
  postToSeahomeEmbed({ source: KAISHI_EMBED_SOURCE, type: 'SEAHOME_SET_CURRENCY', currency });
}
