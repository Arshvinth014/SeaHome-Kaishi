import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import BlogArticleAdSlot from '../blog/BlogArticleAdSlot';
import type { KaishiHouseAdContent } from './seahomeAdSlots';

export type SeahomeAdBandProps = {
  containerClass: string;
  googleDomId: string;
  googleSlot?: string;
  kaishiDomId: string;
  kaishi: KaishiHouseAdContent;
  /** Side-by-side on md+, or single column */
  layout?: 'dual' | 'google-only' | 'kaishi-only';
  minHeight?: number;
  googleFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
};

export const KaishiHouseAdSlot: React.FC<{
  domId: string;
  content: KaishiHouseAdContent;
  minHeight: number;
}> = ({ domId, content, minHeight }) => {
  const isExternal = /^https?:\/\//i.test(content.href);
  const body = (
    <>
      <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-sky-700 ring-1 ring-sky-200/80">
        <Sparkles className="h-3 w-3" aria-hidden />
        Kaishi Nihon
      </span>
      <p className="mt-3 text-base font-bold leading-snug text-sky-950 sm:text-lg">{content.title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-sky-900/75">{content.description}</p>
      <span className="mt-4 inline-flex rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition group-hover:bg-sky-800">
        {content.cta}
      </span>
    </>
  );

  const className =
    'group flex min-h-full w-full flex-col items-center justify-center rounded-xl border border-sky-200/90 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-5 text-center shadow-sm transition hover:border-sky-300 hover:shadow-md';

  if (isExternal) {
    return (
      <a
        id={domId}
        href={content.href}
        data-kaishi-ad-region={domId}
        data-kaishi-ad-type="kaishi-house"
        className={className}
        style={{ minHeight }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <Link
      id={domId}
      to={content.href}
      data-kaishi-ad-region={domId}
      data-kaishi-ad-type="kaishi-house"
      className={className}
      style={{ minHeight }}
    >
      {body}
    </Link>
  );
};

/**
 * Reserved band for Google AdSense + Kaishi Nihon house ads on the Seahome hub page.
 */
const SeahomeAdBand: React.FC<SeahomeAdBandProps> = ({
  containerClass,
  googleDomId,
  googleSlot,
  kaishiDomId,
  kaishi,
  layout = 'dual',
  minHeight = 100,
  googleFormat = 'horizontal',
  className = '',
}) => {
  const showGoogle = layout === 'dual' || layout === 'google-only';
  const showKaishi = layout === 'dual' || layout === 'kaishi-only';

  return (
    <aside
      className={`w-full border-y border-gray-100/90 bg-slate-50/90 py-4 sm:py-5 ${className}`}
      aria-label="Advertisements"
    >
      <div className={containerClass}>
        <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wider text-gray-400">
          Advertisement
        </p>
        <div
          className={
            layout === 'dual'
              ? 'grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4'
              : 'mx-auto w-full max-w-3xl'
          }
        >
          {showGoogle ? (
            <div className="overflow-hidden rounded-xl border border-gray-200/80 bg-white">
              <BlogArticleAdSlot
                domId={googleDomId}
                adSlot={googleSlot}
                minHeight={minHeight}
                adFormat={googleFormat}
                className="!rounded-none !border-transparent !bg-gray-50"
              />
            </div>
          ) : null}
          {showKaishi ? (
            <KaishiHouseAdSlot domId={kaishiDomId} content={kaishi} minHeight={minHeight} />
          ) : null}
        </div>
      </div>
    </aside>
  );
};

export default SeahomeAdBand;
