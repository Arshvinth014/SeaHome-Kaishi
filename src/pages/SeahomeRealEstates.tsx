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
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-100 sm:h-11 sm:w-11">
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
    className={`group flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-200/90 bg-white px-2 py-3 text-center shadow-sm transition hover:border-sky-200 hover:bg-sky-50/50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 sm:gap-2 sm:px-3 sm:py-4 ${className}`}
  >
    {card.icon}
    <span
      className={`line-clamp-2 font-semibold leading-snug text-sky-950 ${large ? 'text-sm sm:text-base' : 'text-[11px] sm:text-xs'
        }`}
    >
      {card.label}
    </span>
    {card.sub ? (
      <span className="line-clamp-1 text-[10px] font-medium text-gray-500 sm:text-xs">{card.sub}</span>
    ) : null}
  </button>
);

function ColumnHeadingBlock({ title, letter }: { title: string; letter: string }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3 border-b border-sky-100 pb-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-900 text-sm font-bold text-white shadow-md sm:h-12 sm:w-12 sm:text-base">
        {letter}
      </div>
      <h2 className="text-lg font-bold text-sky-950 sm:text-xl">{title}</h2>
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
    path: '/properties',
  };

  const bookingsGrid: HubCard[] = [
    { label: 'Villas', sub: 'Private homes & resorts', icon: iconWrap(<Palmtree className="h-5 w-5" />), path: '/properties' },
    { label: 'Ryokan & onsen', sub: 'Traditional inns', icon: iconWrap(<Tent className="h-5 w-5" />), path: '/properties' },
    { label: 'Guesthouses', sub: 'Hostels & budget stays', icon: iconWrap(<Users className="h-5 w-5" />), path: '/properties' },
    { label: 'Minpaku', sub: 'Short-term rentals', icon: iconWrap(<Home className="h-5 w-5" />), path: '/properties' },
    { label: 'Monthly stays', sub: 'Serviced apartments', icon: iconWrap(<Building2 className="h-5 w-5" />), path: '/properties' },
    { label: 'Tours & activities', sub: 'Experiences in Japan', icon: iconWrap(<MapPin className="h-5 w-5" />), path: '/properties' },
  ];

  return (
    <div className="w-full bg-slate-50/80 text-gray-900 pb-8">
      {/* Sub-header utilities */}
      <div className="border-b border-gray-100 bg-white">
        <div className={`flex flex-wrap items-center justify-between gap-3 py-3 ${HUB_CONTAINER}`}>
          <p className="text-xs font-medium text-sky-900/80 sm:text-sm">
            <span className="font-bold text-sky-800">12,400+</span> listings nationwide · Updated daily · Operated by{' '}
            <span className="font-semibold text-sky-700">Kaishi Nihon × Seahome</span>
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              to="/invest"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-sky-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:from-purple-700 hover:to-sky-800 sm:text-sm"
            >
              <Building2 className="h-4 w-4" />
              Check Investments
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-sky-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:from-purple-700 hover:to-sky-800 sm:text-sm"
            >
              <Home className="h-4 w-4 shrink-0" aria-hidden />
              Kaishi Nihon Home
            </Link>
            <button type="button" className="rounded-lg p-2 text-sky-800 hover:bg-sky-100" aria-label="Favorites">
              <Heart className="h-5 w-5" />
            </button>
            <button type="button" className="rounded-lg p-2 text-sky-800 hover:bg-sky-100" aria-label="My page">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <SeahomeAdPlacement placement="leaderboard" containerClass={HUB_CONTAINER} />

      {/* Hero + three columns */}
      <section className={`py-8 sm:py-10 ${HUB_CONTAINER}`}>
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">Kaishi Nihon × Seahome</p>
          <h1 className="mt-1 text-2xl font-bold text-sky-950 sm:text-3xl">Find your home in Japan</h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Rent, buy, or book — browse listings and stays with English support for students and newcomers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {/* Rent */}
          <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
            <ColumnHeadingBlock title="Rent" letter="R" />
            <div className="flex flex-1 flex-col gap-3">
              <HubCardButton card={RENT_PRIMARY} onNavigate={go} large className="min-h-[120px]" />
              <p className="text-center text-[10px] font-bold uppercase tracking-wide text-amber-800 sm:text-xs">
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
          <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
            <ColumnHeadingBlock title="Buy" letter="B" />
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {buyResidential.map((card) => (
                <HubCardButton key={card.label} card={card} onNavigate={go} className="min-h-[100px]" />
              ))}
            </div>
            <p className="my-3 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-400">
              Commercial
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {buyCommercial.map((card) => (
                <HubCardButton key={card.label} card={card} onNavigate={go} className="min-h-[88px]" />
              ))}
            </div>
          </div>

          {/* Bookings */}
          <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
            <ColumnHeadingBlock title="Bookings" letter="K" />
            <div className="flex flex-1 flex-col gap-3">
              <HubCardButton card={BOOKINGS_PRIMARY} onNavigate={go} large className="min-h-[120px]" />
              <p className="text-center text-[10px] font-bold uppercase tracking-wide text-sky-800/90 sm:text-xs">
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
      <nav className="w-full border-b border-gray-100 bg-white py-4" aria-label="Resources">
        <ul className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-sky-900 ${HUB_CONTAINER}`}>
          {[
            { label: 'Property Library', path: '/properties', icon: BookOpen },
            { label: 'Area Guides', path: '/blog', icon: BookOpen },
            { label: 'Mortgage Calculator', path: '/properties', icon: Calculator },
          ].map(({ label, path, icon: Icon }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => go(path)}
                className="inline-flex items-center gap-1.5 transition hover:text-sky-600"
              >
                <Icon className="h-4 w-4 text-sky-500" aria-hidden />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Action buttons */}
      <section className="w-full bg-slate-50 py-6 sm:py-8">
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
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left shadow-sm transition hover:border-sky-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-sky-800 text-white">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm font-bold text-sky-950 sm:text-base">{label}</span>
                <span className="block text-xs text-gray-500">{sub}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SeahomeRealEstates;
