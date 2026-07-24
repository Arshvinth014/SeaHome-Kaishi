import React, { useEffect, useRef } from 'react';

const AD_CLIENT =
  typeof process !== 'undefined' && process.env
    ? String(process.env.REACT_APP_GOOGLE_ADSENSE_CLIENT || '').trim()
    : String((import.meta as any).env?.VITE_GOOGLE_ADSENSE_CLIENT || '').trim();

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

let adsenseScriptRequested = false;

function ensureAdsenseScript(client: string) {
  if (adsenseScriptRequested || typeof document === 'undefined') return;
  if (document.getElementById('adsbygoogle-js')) {
    adsenseScriptRequested = true;
    return;
  }
  adsenseScriptRequested = true;
  const s = document.createElement('script');
  s.id = 'adsbygoogle-js';
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
  document.head.appendChild(s);
}

export type BlogArticleAdSlotProps = {
  /** Stable DOM id for Kaishi Ad Manager / GTM / analytics */
  domId: string;
  /** Google AdSense `data-ad-slot` (numeric string from AdSense UI). Omit for placeholder-only. */
  adSlot?: string;
  /** Minimum height to reduce layout shift (CLS). */
  minHeight: number;
  /** AdSense `data-ad-format` */
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
};

/**
 * Reserved ad surface for blog articles.
 * - With `REACT_APP_GOOGLE_ADSENSE_CLIENT` + `adSlot`, renders an AdSense unit and runs the standard `adsbygoogle.push` flow.
 * - Without env/slot, renders an empty reserved region (Kaishi / house ads via GTM can target `data-kaishi-ad-region`).
 */
const BlogArticleAdSlot: React.FC<BlogArticleAdSlotProps> = ({
  domId,
  adSlot,
  minHeight,
  adFormat = 'auto',
  className = '',
}) => {
  const pushed = useRef(false);
  const insRef = useRef<HTMLModElement | null>(null);
  const enabled = Boolean(AD_CLIENT && adSlot?.trim());

  useEffect(() => {
    if (!enabled) return;
    ensureAdsenseScript(AD_CLIENT);
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !insRef.current || pushed.current) return;

    const tryPush = () => {
      if (!insRef.current || pushed.current) return false;
      const w = window as Window & { adsbygoogle?: unknown[] };
      if (!w.adsbygoogle) return false;
      try {
        w.adsbygoogle.push({});
        pushed.current = true;
        return true;
      } catch {
        return false;
      }
    };

    if (tryPush()) return;

    const start = Date.now();
    const id = window.setInterval(() => {
      if (tryPush() || Date.now() - start > 15000) {
        window.clearInterval(id);
      }
    }, 120);

    return () => window.clearInterval(id);
  }, [enabled, adSlot]);

  if (!enabled) {
    return (
      <div
        id={domId}
        data-kaishi-ad-region={domId}
        className={`w-full rounded-xl border border-white/10 bg-slate-900/35 ${className}`}
        style={{ minHeight }}
        role="complementary"
        aria-label="Advertisement"
      />
    );
  }

  return (
    <ins
      ref={insRef}
      id={domId}
      data-kaishi-ad-region={domId}
      className={`adsbygoogle block w-full ${className}`}
      style={{ display: 'block', minHeight }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={adSlot!.trim()}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
};

export default BlogArticleAdSlot;
