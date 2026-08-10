import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  Link2,
  Phone,
} from 'lucide-react';

type Props = {
  onNavigate: (path: string) => void;
  containerClass: string;
};

type PromoSlide = {
  title: string;
  subtitle: string;
  path: string;
  gradient: string;
};

const PROMO_SLIDES: PromoSlide[] = [
  {
    title: "Curated 'Room' File",
    subtitle: 'Interiors & layout inspiration',
    path: '/blog',
    gradient: 'from-sky-200 via-sky-100 to-white',
  },
  {
    title: 'Lifestyle & neighborhoods',
    subtitle: 'Stories from across Japan',
    path: '/blog',
    gradient: 'from-cyan-200 via-sky-50 to-white',
  },
  {
    title: 'Entertainment & culture',
    subtitle: 'Live well near the city',
    path: '/blog',
    gradient: 'from-indigo-200 via-sky-50 to-white',
  },
  {
    title: 'Regional living guides',
    subtitle: 'Mountains, coast & countryside',
    path: '/blog',
    gradient: 'from-emerald-200 via-sky-50 to-white',
  },
];

const DAILY_NEWS = [
  { title: 'Spring move-in season: what international renters should know', path: '/blog' },
  { title: 'Updated average rents in Tokyo 23 wards', path: '/blog' },
  { title: 'How to read a Japanese lease contract (English summary)', path: '/blog' },
  { title: 'Seahome × Kaishi Nihon student housing fair recap', path: '/blog' },
];

const SeahomeNewsAndSocial: React.FC<Props> = ({ onNavigate, containerClass }) => {
  const [promoIndex, setPromoIndex] = useState(0);
  const slide = PROMO_SLIDES[promoIndex];

  const prevPromo = () => setPromoIndex((i) => (i === 0 ? PROMO_SLIDES.length - 1 : i - 1));
  const nextPromo = () => setPromoIndex((i) => (i === PROMO_SLIDES.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full border-t border-gray-200 bg-gray-100/90">
      {/* Promo row */}
      <section className="py-8 sm:py-10" aria-label="Featured stories">
        <div className={containerClass}>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {/* Featured carousel card */}
            <div className="relative col-span-2 lg:col-span-1">
              <button
                type="button"
                onClick={() => onNavigate(slide.path)}
                className={`relative flex h-full min-h-[140px] w-full flex-col justify-end overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br ${slide.gradient} p-4 text-left shadow-sm transition hover:border-sky-200 hover:shadow-md sm:min-h-[160px]`}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-sky-800/80">Featured</p>
                <p className="mt-1 text-sm font-bold leading-snug text-sky-950 sm:text-base">{slide.title}</p>
                <p className="mt-0.5 text-[11px] text-gray-600 sm:text-xs">{slide.subtitle}</p>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevPromo();
                }}
                className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-sm hover:bg-white"
                aria-label="Previous feature"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextPromo();
                }}
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-sm hover:bg-white"
                aria-label="Next feature"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {PROMO_SLIDES.slice(1).map((promo) => (
              <button
                key={promo.title}
                type="button"
                onClick={() => onNavigate(promo.path)}
                className={`flex min-h-[120px] flex-col justify-end rounded-lg border border-gray-200 bg-gradient-to-br ${promo.gradient} p-3 text-left shadow-sm transition hover:border-sky-200 hover:shadow-md sm:min-h-[160px] sm:p-4`}
              >
                <p className="text-sm font-bold leading-snug text-sky-950">{promo.title}</p>
                <p className="mt-0.5 text-[11px] text-gray-600">{promo.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News · Info · Spotlight */}
      <section className="border-t border-gray-200/80 bg-gray-100/50 py-8 sm:py-10">
        <div className={containerClass}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Daily news */}
            <div>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-base font-bold text-gray-900 sm:text-lg">Daily news</h2>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-500 sm:text-xs">
                  <span>Updated {new Date().toISOString().slice(0, 10)}</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/blog')}
                    className="font-semibold text-sky-600 hover:text-sky-800 hover:underline"
                  >
                    View all news
                  </button>
                </div>
              </div>
              <ul className="space-y-2.5">
                {DAILY_NEWS.map((item) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.path)}
                      className="text-left text-sm font-medium text-sky-700 hover:text-sky-900 hover:underline"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 border-t border-gray-200 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded bg-sky-700 text-white">
                  <Link2 className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-sm font-bold text-sky-800">
                  RE.port <span className="font-normal text-gray-500">· Kaishi insights</span>
                </span>
              </div>
            </div>

            {/* Information */}
            <div>
              <h2 className="mb-3 text-base font-bold text-gray-900 sm:text-lg">Information</h2>
              <button
                type="button"
                onClick={() => onNavigate('/find-agent')}
                className="flex w-full items-start gap-2 rounded-lg border border-gray-200 bg-white px-3 py-3 text-left text-sm text-sky-700 shadow-sm transition hover:border-sky-200 hover:bg-sky-50/50"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" aria-hidden />
                <span>
                  <span className="font-semibold">Support line</span>
                  <span className="mt-0.5 block text-xs text-gray-600">
                    Incoming calls from +81-50-5833-2422 — agent & viewing support
                  </span>
                </span>
              </button>
            </div>

            {/* Spotlight */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <DoorOpen className="h-5 w-5 text-red-600" aria-hidden />
                <h2 className="text-base font-bold text-red-700">Door to tomorrow</h2>
              </div>
              <div className="flex gap-3">
                <div
                  className="h-16 w-16 shrink-0 rounded-md bg-gradient-to-br from-sky-200 to-sky-400"
                  aria-hidden
                />
                <div className="min-w-0 text-sm">
                  <p className="font-bold text-gray-900">S. Ito</p>
                  <p className="mt-0.5 text-gray-600">Real estate advisor · Bilingual support</p>
                  <p className="mt-1 text-xs text-gray-400">Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  <button
                    type="button"
                    onClick={() => onNavigate('/find-agent')}
                    className="mt-2 text-xs font-semibold text-sky-600 hover:underline"
                  >
                    Read story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official SNS */}
      <section className="border-t border-gray-200/80 py-8 sm:py-10" aria-labelledby="official-sns-heading">
        <div className={containerClass}>
          <h2 id="official-sns-heading" className="text-base font-bold text-gray-900 sm:text-lg">
            Official social channels
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            <span className="font-semibold text-sky-800">Seahome Real Estates</span> on Kaishi Nihon — follow for
            listings, area tips, and student housing updates.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'X (Twitter)', href: 'https://twitter.com', bg: 'bg-gray-900', letter: 'X' },
              { label: 'Instagram', href: 'https://instagram.com', bg: 'bg-gradient-to-br from-purple-600 via-pink-500 to-amber-400', letter: 'IG' },
              { label: 'LINE', href: 'https://line.me', bg: 'bg-green-500', letter: 'LINE' },
              { label: 'YouTube', href: 'https://youtube.com', bg: 'bg-red-600', letter: '▶' },
            ].map((sns) => (
              <a
                key={sns.label}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-12 w-12 items-center justify-center rounded-lg text-xs font-bold text-white shadow-sm transition hover:opacity-90 sm:h-14 sm:w-14 sm:text-sm ${sns.bg}`}
                aria-label={sns.label}
              >
                {sns.letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className={`flex justify-end pb-8 ${containerClass}`}>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
          aria-label="Back to top"
        >
          <ChevronRight className="h-5 w-5 -rotate-90" aria-hidden />
        </button>
      </div>
    </div>
  );
};

export default SeahomeNewsAndSocial;
