import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Building2,
  Calculator,
  Car,
  Factory,
  GraduationCap,
  Heart,
  Home,
  Landmark,
  MapPin,
  Hotel,
  Palmtree,
  Search,
  Store,
  Tent,
  Truck,
  User,
  Users,
  Warehouse,
} from 'lucide-react';
import { resolveSeahomeEmbedUrl } from '../config/seahomeEmbed';
import { navigateSeahomeEmbed, SEAHOME_NAVIGATE_EVENT } from '../utils/seahomeEmbedBridge';
import SeahomeFeaturedPickup from '../components/seahome/SeahomeFeaturedPickup';
import SeahomeFeatureLineup from '../components/seahome/SeahomeFeatureLineup';
import SeahomeHouseFeatures from '../components/seahome/SeahomeHouseFeatures';
import SeahomeLandAndCommercial from '../components/seahome/SeahomeLandAndCommercial';
import SeahomeSearchAndTools from '../components/seahome/SeahomeSearchAndTools';
import SeahomeNewsAndSocial from '../components/seahome/SeahomeNewsAndSocial';
import SeahomeAdPlacement from '../components/seahome/SeahomeAdPlacements';

function embedUrlWithKaishiFlag(base: string): string {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}kaishi_embed=1`;
}

type HubCard = {
  label: string;
  sub?: string;
  icon: React.ReactNode;
  path: string;
};

/** Shared horizontal inset + max width for all hub sections */
const HUB_CONTAINER = 'mx-auto w-full max-w-6xl px-5 sm:px-8 md:max-w-7xl md:px-10 lg:px-12';

const iconWrap = (children: React.ReactNode) => (
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100/90 text-sky-600 ring-1 ring-sky-200/70 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky-600 group-hover:to-sky-800 group-hover:text-white group-hover:ring-sky-400 sm:h-11 sm:w-11">
    {children}
  </span>
);

const HubCardButton: React.FC<{
  card: HubCard;
  onNavigate: (path: string) => void;
  className?: string;
  large?: boolean;
}> = ({ card, onNavigate, className = '', large }) => (
  <button
    type="button"
    onClick={() => onNavigate(card.path)}
    className={`group relative flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-sky-100/90 bg-white/95 px-2.5 py-3.5 text-center shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:bg-gradient-to-b hover:from-white hover:to-sky-50/70 hover:shadow-md active:scale-95 tv-focusable shimmer-overlay sm:gap-2 sm:px-3.5 sm:py-4 ${className}`}
  >
    {card.icon}
    <span
      className={`line-clamp-2 font-bold leading-snug text-sky-950 transition-colors duration-200 group-hover:text-sky-700 ${
        large ? 'text-sm sm:text-base' : 'text-[11px] sm:text-xs'
      }`}
    >
      {card.label}
    </span>
    {card.sub ? (
      <span className="line-clamp-1 text-[10px] font-medium text-gray-500 transition-colors group-hover:text-sky-800/80 sm:text-xs">{card.sub}</span>
    ) : null}
  </button>
);

function ColumnHeadingBlock({ title, letter }: { title: string; letter: string }) {
  const gradient = letter === 'R'
    ? 'from-sky-600 via-sky-700 to-indigo-900 shadow-sky-600/25 ring-1 ring-sky-400/30'
    : letter === 'B'
    ? 'from-amber-500 via-amber-600 to-amber-800 shadow-amber-500/25 ring-1 ring-amber-400/30'
    : 'from-emerald-500 via-teal-600 to-sky-800 shadow-emerald-500/25 ring-1 ring-teal-400/30';

  return (
    <div className="mb-4 flex items-center justify-center gap-3 border-b border-sky-100/80 pb-4">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-sm font-extrabold text-white shadow-md transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12 sm:text-base`}>
        {letter}
      </div>
      <h2 className="text-lg font-extrabold tracking-tight text-sky-950 sm:text-xl">{title}</h2>
    </div>
  );
}

const SeahomeRealEstates: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const embedUrl = useMemo(() => embedUrlWithKaishiFlag(resolveSeahomeEmbedUrl()), []);
  const [mode, setMode] = useState<'hub' | 'embed'>('hub');

  useEffect(() => {
    if ((location.state as { seahomeHub?: boolean } | null)?.seahomeHub) {
      setMode('hub');
    }
  }, [location.state, location.key]);
  const [embedPath, setEmbedPath] = useState('/properties');
  const openEmbed = useCallback((path: string) => {
    setEmbedPath(path.startsWith('/') ? path : `/${path}`);
    setMode('embed');
  }, []);

  useEffect(() => {
    if (mode !== 'embed') return;
    const t = window.setTimeout(() => navigateSeahomeEmbed(embedPath), 300);
    return () => window.clearTimeout(t);
  }, [mode, embedPath]);

  useEffect(() => {
    const onNav = (e: Event) => {
      const path = (e as CustomEvent<{ path: string }>).detail?.path;
      if (path) openEmbed(path);
    };
    window.addEventListener(SEAHOME_NAVIGATE_EVENT, onNav);
    return () => window.removeEventListener(SEAHOME_NAVIGATE_EVENT, onNav);
  }, [openEmbed]);

  const go = useCallback(
    (path: string) => {
      if (path.startsWith('/seahome-real-estates/')) {
        navigate(path);
        return;
      }
      openEmbed(path);
    },
    [navigate, openEmbed]
  );

  if (mode === 'embed') {
    return (
      <div className="flex w-full flex-col bg-slate-100" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className={`flex shrink-0 flex-wrap items-center gap-2 border-b border-sky-100 bg-white py-2.5 sm:gap-3 ${HUB_CONTAINER}`}>
          <button
            type="button"
            onClick={() => setMode('hub')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to services
          </button>
          <span className="text-sm text-gray-600">Browsing Seahome property listings</span>
          <Link
            to="/"
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-sky-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:from-purple-700 hover:to-sky-800"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden />
            Kaishi Nihon Home
          </Link>
        </div>
        <iframe
          title="Seahome Real Estates"
          src={embedUrl}
          className="block min-h-0 flex-1 w-full border-0"
          allow="geolocation; clipboard-write; fullscreen; payment"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  const RENT_PRIMARY: HubCard = {
    label: 'Residential Rentals',
    sub: 'Apartments & houses',
    icon: iconWrap(<Home className="h-6 w-6" strokeWidth={1.75} />),
    path: '/seahome-real-estates/rental',
  };

  const rentGrid: HubCard[] = [
    { label: 'Rental Shop', icon: iconWrap(<Store className="h-5 w-5" />), path: '/seahome-real-estates/rental-shop' },
    { label: 'Rental Office', icon: iconWrap(<Building2 className="h-5 w-5" />), path: '/seahome-real-estates/rental-office' },
    { label: 'Rental Land', icon: iconWrap(<MapPin className="h-5 w-5" />), path: '/seahome-real-estates/rental-land' },
    { label: 'Parking', icon: iconWrap(<Car className="h-5 w-5" />), path: '/seahome-real-estates/parking' },
    { label: 'Warehouse', icon: iconWrap(<Warehouse className="h-5 w-5" />), path: '/seahome-real-estates/warehouse' },
    { label: 'Building / Other', icon: iconWrap(<Factory className="h-5 w-5" />), path: '/seahome-real-estates/rental-building-other' },
  ];

  const buyResidential: HubCard[] = [
    { label: 'Apartments & Condos', icon: iconWrap(<Building2 className="h-5 w-5" />), path: '/buy-properties' },
    { label: 'Detached Houses', icon: iconWrap(<Home className="h-5 w-5" />), path: '/buy-properties' },
    { label: 'Land for Sale', icon: iconWrap(<MapPin className="h-5 w-5" />), path: '/buy-properties' },
    { label: 'Custom-Built Homes', icon: iconWrap(<Home className="h-5 w-5" />), path: '/buy-properties' },
  ];

  const buyCommercial: HubCard[] = [
    { label: 'Shops', icon: iconWrap(<Store className="h-5 w-5" />), path: '/commercial-properties' },
    { label: 'Offices', icon: iconWrap(<Landmark className="h-5 w-5" />), path: '/commercial-properties' },
    { label: 'Buildings', icon: iconWrap(<Factory className="h-5 w-5" />), path: '/commercial-properties' },
  ];

  const BOOKINGS_PRIMARY: HubCard = {
    label: 'Hotels',
    sub: 'Business, city & resort stays',
    icon: iconWrap(<Hotel className="h-6 w-6" strokeWidth={1.75} />),
    path: '/seahome-real-estates/JapanHotelsPage',
  };

  const bookingsGrid: HubCard[] = [
    { label: 'Villas', sub: 'Private homes & resorts', icon: iconWrap(<Palmtree className="h-5 w-5" />), path: '/seahome-real-estates/JapanVillasPage' },
    { label: 'Ryokan & onsen', sub: 'Traditional inns', icon: iconWrap(<Tent className="h-5 w-5" />), path: '/seahome-real-estates/JapanRyokanOnsenPage' },
    { label: 'Guesthouses', sub: 'Hostels & budget stays', icon: iconWrap(<Users className="h-5 w-5" />), path: '/properties' },
    { label: 'Minpaku', sub: 'Short-term rentals', icon: iconWrap(<Home className="h-5 w-5" />), path: '/properties' },
    { label: 'Monthly stays', sub: 'Serviced apartments', icon: iconWrap(<Building2 className="h-5 w-5" />), path: '/properties' },
    { label: 'Tours & activities', sub: 'Experiences in Japan', icon: iconWrap(<MapPin className="h-5 w-5" />), path: '/properties' },
  ];

  return (
    <div className="w-full bg-slate-50/90 text-gray-900 pb-8 animate-fade-in-up">
      {/* Sub-header utilities */}
      <div className="border-b border-sky-100/80 bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className={`flex flex-wrap items-center justify-between gap-3 py-3 ${HUB_CONTAINER}`}>
          <p className="text-xs font-semibold text-sky-950 sm:text-sm flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-extrabold text-sky-800">12,400+</span> listings nationwide · Updated daily · Operated by{' '}
            <span className="font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/60">Kaishi Nihon × Seahome</span>
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              to="/invest"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-700 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:from-purple-700 hover:to-sky-800 hover:shadow-md hover:scale-105 active:scale-95 tv-focusable sm:text-sm"
            >
              <Building2 className="h-4 w-4" />
              Check Investments
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-700 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:from-purple-700 hover:to-sky-800 hover:shadow-md hover:scale-105 active:scale-95 tv-focusable sm:text-sm"
            >
              <Home className="h-4 w-4 shrink-0" aria-hidden />
              Kaishi Nihon Home
            </Link>
            <button type="button" className="rounded-lg p-2 text-sky-800 transition-colors hover:bg-sky-100/80 active:scale-90 tv-focusable" aria-label="Favorites">
              <Heart className="h-5 w-5" />
            </button>
            <button type="button" className="rounded-lg p-2 text-sky-800 transition-colors hover:bg-sky-100/80 active:scale-90 tv-focusable" aria-label="My page">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <SeahomeAdPlacement placement="leaderboard" containerClass={HUB_CONTAINER} />

      {/* Hero + three columns */}
      <section className={`py-8 sm:py-10 ${HUB_CONTAINER}`}>
        <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-900 via-sky-950 to-indigo-950 px-6 py-8 text-center text-white shadow-lg sm:px-10 sm:py-10">
          <div className="absolute inset-0 opacity-15 bg-[url('/images/seahome/tokyo_skyline_view.png')] bg-cover bg-center pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-300 ring-1 ring-sky-400/40 shadow-inner">
              Kaishi Nihon × Seahome
            </span>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl text-white drop-shadow-sm">
              Find your home in Japan
            </h1>
            <p className="mx-auto mt-2.5 max-w-xl text-xs text-sky-100/90 sm:text-sm font-medium leading-relaxed">
              Rent, buy, or book — browse listings and stays with English support for students and newcomers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {/* Rent */}
          <div className="flex flex-col rounded-2xl border border-sky-100 bg-white/95 p-4.5 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-xl sm:p-5">
            <ColumnHeadingBlock title="Rent" letter="R" />
            <div className="flex flex-1 flex-col gap-3">
              <HubCardButton card={RENT_PRIMARY} onNavigate={go} large className="min-h-[120px]" />
              <p className="text-center text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50/80 py-1 rounded-md border border-amber-200/60 sm:text-xs">
                Trusted by international students
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
                {rentGrid.map((card) => (
                  <HubCardButton key={card.label} card={card} onNavigate={go} className="min-h-[92px]" />
                ))}
              </div>
            </div>
          </div>

          {/* Buy */}
          <div className="flex flex-col rounded-2xl border border-amber-100 bg-white/95 p-4.5 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl sm:p-5">
            <ColumnHeadingBlock title="Buy" letter="B" />
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {buyResidential.map((card) => (
                <HubCardButton key={card.label} card={card} onNavigate={go} className="min-h-[100px]" />
              ))}
            </div>
            <p className="my-3 text-center text-[11px] font-extrabold uppercase tracking-wider text-gray-500 bg-gray-100/70 py-1 rounded-md">
              Commercial
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {buyCommercial.map((card) => (
                <HubCardButton key={card.label} card={card} onNavigate={go} className="min-h-[88px]" />
              ))}
            </div>
          </div>

          {/* Bookings */}
          <div className="flex flex-col rounded-2xl border border-teal-100 bg-white/95 p-4.5 shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-xl sm:p-5">
            <ColumnHeadingBlock title="Bookings" letter="K" />
            <div className="flex flex-1 flex-col gap-3">
              <HubCardButton card={BOOKINGS_PRIMARY} onNavigate={go} large className="min-h-[120px]" />
              <p className="text-center text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50/80 py-1 rounded-md border border-teal-200/60 sm:text-xs">
                Stays & experiences across Japan
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
                {bookingsGrid.map((card) => (
                  <HubCardButton key={card.label} card={card} onNavigate={go} className="min-h-[92px]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeahomeAdPlacement placement="afterHub" containerClass={HUB_CONTAINER} />

      <SeahomeFeaturedPickup onNavigate={go} containerClass={HUB_CONTAINER} />

      <SeahomeAdPlacement placement="midFeatured" containerClass={HUB_CONTAINER} />

      <SeahomeFeatureLineup onNavigate={go} containerClass={HUB_CONTAINER} />

      <SeahomeAdPlacement placement="midLineup" containerClass={HUB_CONTAINER} />

      <SeahomeHouseFeatures onNavigate={go} containerClass={HUB_CONTAINER} />

      <SeahomeLandAndCommercial onNavigate={go} containerClass={HUB_CONTAINER} />

      <SeahomeAdPlacement placement="beforeTools" containerClass={HUB_CONTAINER} />

      <SeahomeSearchAndTools onNavigate={go} containerClass={HUB_CONTAINER} />

      <SeahomeNewsAndSocial onNavigate={go} containerClass={HUB_CONTAINER} />

      <SeahomeAdPlacement placement="footerBand" containerClass={HUB_CONTAINER} />

      {/* Quick links */}
      <nav className="w-full border-b border-gray-100 bg-white/90 py-4 shadow-2xs" aria-label="Resources">
        <ul className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-sky-900 ${HUB_CONTAINER}`}>
          {[
            { label: 'Property Library', path: '/properties', icon: BookOpen },
            { label: 'Area Guides', path: '/blog', icon: BookOpen },
            { label: 'Mortgage Calculator', path: '/properties', icon: Calculator },
          ].map(({ label, path, icon: Icon }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => go(path)}
                className="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-sky-600 hover:scale-105 active:scale-95 tv-focusable"
              >
                <Icon className="h-4 w-4 text-sky-500" aria-hidden />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Action buttons */}
      <section className="w-full bg-slate-100/60 py-6 sm:py-8">
        <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 ${HUB_CONTAINER}`}>
          {[
            { label: 'Student Housing', sub: 'Search near universities', icon: GraduationCap, path: '/properties' },
            { label: 'Sale & Appraisal', sub: 'Request a valuation', icon: Search, path: '/buy-properties' },
            { label: 'Find an Agent', sub: 'Bilingual support', icon: Users, path: '/find-agent' },
            { label: 'Moving Quote', sub: 'Furniture & logistics', icon: Truck, path: '/furniture' },
          ].map(({ label, sub, icon: Icon, path }) => (
            <button
              key={label}
              type="button"
              onClick={() => go(path)}
              className="group flex items-center gap-4 rounded-xl border border-gray-200/90 bg-white px-5 py-4 text-left shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-md active:scale-95 tv-focusable"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-indigo-800 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-sky-950 sm:text-base group-hover:text-sky-700 transition-colors">{label}</span>
                <span className="block text-xs font-medium text-gray-500">{sub}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SeahomeRealEstates;
