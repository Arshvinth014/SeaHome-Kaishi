import React from 'react';
import {
  ArrowRight,
  Award,
  Building2,
  ChevronRight,
  Home,
  Laptop,
  Smartphone,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react';

type PickupProps = {
  onNavigate: (path: string) => void;
  containerClass: string;
};

type LargeBanner = {
  title: string;
  subtitle: string;
  path: string;
  bg: string;
  accent: string;
  icon: React.ReactNode;
};

type SideTile = {
  title: string;
  subtitle?: string;
  path: string;
  bg: string;
  icon?: React.ReactNode;
  badge?: string;
};

const LARGE_BANNERS: LargeBanner[] = [
  {
    title: 'LGBTQ+ Friendly Housing',
    subtitle: 'Inclusive listings across Japan',
    path: '/properties',
    bg: 'from-sky-100 via-sky-50 to-white',
    accent: 'bg-sky-500/15 text-sky-800',
    icon: <Users className="h-16 w-16 text-sky-400/80 sm:h-20 sm:w-20" strokeWidth={1.25} />,
  },
  {
    title: 'New Condominium Special',
    subtitle: 'Modern towers & designer interiors',
    path: '/buy-properties',
    bg: 'from-slate-100 via-white to-sky-50',
    accent: 'bg-slate-500/10 text-slate-800',
    icon: <Building2 className="h-16 w-16 text-slate-400/90 sm:h-20 sm:w-20" strokeWidth={1.25} />,
  },
  {
    title: 'Homes Near Surf Spots',
    subtitle: 'Coastal living from Chiba to Okinawa',
    path: '/properties',
    bg: 'from-cyan-100 via-sky-50 to-white',
    accent: 'bg-cyan-500/15 text-cyan-900',
    icon: <Waves className="h-16 w-16 text-cyan-500/70 sm:h-20 sm:w-20" strokeWidth={1.25} />,
  },
  {
    title: 'Remote-Work Ready Homes',
    subtitle: 'Quiet rooms, fiber internet & desk space',
    path: '/properties',
    bg: 'from-indigo-50 via-sky-50 to-white',
    accent: 'bg-indigo-500/10 text-indigo-900',
    icon: <Laptop className="h-16 w-16 text-indigo-400/80 sm:h-20 sm:w-20" strokeWidth={1.25} />,
  },
];

const SIDE_TILES: SideTile[] = [
  {
    title: 'First-Time Renters Guide',
    subtitle: 'Step-by-step in English',
    path: '/blog',
    bg: 'from-sky-200/80 to-sky-100',
    icon: <Home className="h-10 w-10 text-sky-600/70" />,
  },
  {
    title: 'Seahome on Mobile',
    subtitle: 'Search listings anywhere',
    path: '/properties',
    bg: 'from-blue-100 to-sky-50',
    icon: <Smartphone className="h-10 w-10 text-sky-600/70" />,
  },
  {
    title: 'No. 1 for International Students',
    subtitle: 'Kaishi Nihon partner',
    path: '/properties',
    bg: 'from-amber-50 to-sky-50',
    badge: '#1',
    icon: <Award className="h-10 w-10 text-amber-600/80" />,
  },
  {
    title: 'New Build Updates',
    subtitle: 'Pre-construction & move-in dates',
    path: '/buy-properties',
    bg: 'from-sky-900 to-sky-700',
    icon: <Sparkles className="h-10 w-10 text-sky-200/90" />,
  },
];

function SeeMoreButton({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-md px-2.5 py-1 text-[11px] font-bold sm:text-xs ${
        dark ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-white/90 text-sky-800 shadow-sm ring-1 ring-sky-100'
      }`}
    >
      See more
      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
    </span>
  );
}

const LargePickupBanner: React.FC<{ banner: LargeBanner; onNavigate: (path: string) => void }> = ({
  banner,
  onNavigate,
}) => (
  <button
    type="button"
    onClick={() => onNavigate(banner.path)}
    className={`group relative flex min-h-[100px] w-full overflow-hidden rounded-xl border border-sky-100/80 bg-gradient-to-r ${banner.bg} text-left shadow-sm transition hover:border-sky-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 sm:min-h-[112px]`}
  >
    <div className="relative z-10 flex flex-1 flex-col justify-center gap-1 p-4 pr-28 sm:p-5 sm:pr-36">
      <span className={`w-fit rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${banner.accent}`}>
        Special
      </span>
      <span className="text-base font-bold leading-tight text-sky-950 sm:text-lg">{banner.title}</span>
      <span className="text-xs text-sky-800/80 sm:text-sm">{banner.subtitle}</span>
      <span className="mt-2">
        <SeeMoreButton />
      </span>
    </div>
    <div className="pointer-events-none absolute bottom-0 right-2 top-0 flex items-center opacity-90 transition group-hover:scale-105 sm:right-4">
      {banner.icon}
    </div>
  </button>
);

const SidePickupTile: React.FC<{ tile: SideTile; onNavigate: (path: string) => void }> = ({
  tile,
  onNavigate,
}) => {
  const isDark = tile.bg.includes('sky-900');
  return (
    <button
      type="button"
      onClick={() => onNavigate(tile.path)}
      className={`group relative flex min-h-[100px] flex-1 flex-col overflow-hidden rounded-xl border border-sky-100/60 bg-gradient-to-br ${tile.bg} p-3 text-left shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 sm:min-h-0 sm:p-4 ${
        isDark ? 'border-sky-800 text-white' : 'hover:border-sky-200'
      }`}
    >
      {tile.badge ? (
        <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-2 py-0.5 text-xs font-black text-amber-950">
          {tile.badge}
        </span>
      ) : null}
      <div className="relative z-10 flex flex-1 flex-col">
        <span className={`text-sm font-bold leading-snug ${isDark ? 'text-white' : 'text-sky-950'}`}>
          {tile.title}
        </span>
        {tile.subtitle ? (
          <span className={`mt-0.5 text-[11px] ${isDark ? 'text-sky-200' : 'text-sky-800/75'}`}>{tile.subtitle}</span>
        ) : null}
        <span className="mt-auto pt-2">
          <SeeMoreButton dark={isDark} />
        </span>
      </div>
      {tile.icon ? (
        <div
          className={`pointer-events-none absolute bottom-2 right-2 opacity-60 transition group-hover:opacity-80 ${
            isDark ? 'opacity-40' : ''
          }`}
        >
          {tile.icon}
        </div>
      ) : null}
    </button>
  );
};

const SeahomeFeaturedPickup: React.FC<PickupProps> = ({ onNavigate, containerClass }) => (
  <section className="w-full border-t border-gray-100 bg-white py-8 sm:py-10" aria-labelledby="featured-pickup-heading">
    <div className={containerClass}>
      <div className="mb-6 sm:mb-8">
        <h2 id="featured-pickup-heading" className="text-xl font-bold text-sky-950 sm:text-2xl">
          Featured Pickup
        </h2>
        <div className="mt-2 h-0.5 w-full max-w-[12rem] bg-sky-600" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_minmax(200px,32%)] lg:gap-5 xl:gap-6">
        <div className="flex flex-col gap-3 sm:gap-3.5">
          {LARGE_BANNERS.map((banner) => (
            <LargePickupBanner key={banner.title} banner={banner} onNavigate={onNavigate} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-3.5 lg:grid-cols-1 lg:grid-rows-4">
          {SIDE_TILES.map((tile) => (
            <SidePickupTile key={tile.title} tile={tile} onNavigate={onNavigate} />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onNavigate('/properties')}
        className="group relative mt-5 w-full overflow-hidden rounded-xl border border-sky-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 sm:mt-6"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-sky-100 via-sky-50 to-cyan-50"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgb(14 165 233 / 0.15) 0, rgb(14 165 233 / 0.15) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(0deg, rgb(14 165 233 / 0.08) 0, rgb(14 165 233 / 0.08) 1px, transparent 1px, transparent 48px)',
          }}
          aria-hidden
        />
        <div className="relative flex flex-col items-center gap-3 px-4 py-6 sm:flex-row sm:justify-center sm:gap-6 sm:py-7">
          <p className="max-w-md text-center text-sm font-semibold text-sky-950 sm:text-left sm:text-base">
            Search properties by your specific requirements — area, budget, layout & more
          </p>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition group-hover:bg-sky-800">
            Advanced search
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </button>
    </div>
  </section>
);

export default SeahomeFeaturedPickup;
