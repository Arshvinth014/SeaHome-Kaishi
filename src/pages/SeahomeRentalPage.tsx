import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Building2,
  CircleDollarSign,
  Clock,
  GraduationCap,
  Home,
  LayoutGrid,
  MapPin,
  Search,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  Zap,
  SlidersHorizontal,
  Network,
  Map,
  TrainFront,
  Dog,
  Wifi,
  Car,
  type LucideIcon,
} from 'lucide-react';
import { resolveSeahomeEmbedUrl } from '../config/seahomeEmbed';
import SeahomeJapanMap, { type JapanMapSelection } from '../components/seahome/SeahomeJapanMap';
import SeahomeRentalCityPanel from '../components/seahome/SeahomeRentalCityPanel';
import SeahomeRentalCitySearchModal, {
  type CitySearchMethod,
  type RentalSearchModalContext,
} from '../components/seahome/SeahomeRentalCitySearchModal';
import SeahomeRentalNewListingsCarousel from '../components/seahome/SeahomeRentalNewListingsCarousel';
import SeahomeRentalRegionList from '../components/seahome/SeahomeRentalRegionList';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import type { RentalCity } from '../components/seahome/seahomeRentalCities';
import {
  RENTAL_LISTING_COUNT,
  RENTAL_REGIONS,
  RENTAL_SIDE_FILTERS,
} from '../components/seahome/seahomeRentalData';
import {
  RENTAL_PORTAL_PATH,
  rentalListingsUrl,
  rentalSearchByLineStationPath,
} from '../components/seahome/seahomeRentalLineSearchData';
import { navigateSeahomeEmbed, SEAHOME_NAVIGATE_EVENT } from '../utils/seahomeEmbedBridge';

function embedUrlWithKaishiFlag(base: string): string {
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}kaishi_embed=1`;
}

const FILTER_ICONS: Record<(typeof RENTAL_SIDE_FILTERS)[number]['id'], LucideIcon> = {
  rent: CircleDollarSign,
  layout: LayoutGrid,
  market: TrendingUp,
  commute: Clock,
  schools: GraduationCap,
  company: Building2,
  university: GraduationCap,
  shopping: ShoppingCart,
  features: Sparkles,
};

export const RESIDENTIAL_SPECIAL_FEATURES = [
  {
    id: 'zero-deposit',
    title: 'Zero Deposit & Key Money (敷礼0)',
    description: 'Minimize initial moving expenses with no security deposit or key money required upfront.',
    icon: CircleDollarSign,
    badge: 'Cost Saver',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'furnished',
    title: 'Furnished & Appliances Included',
    description: 'Move in immediately with air conditioner, refrigerator, washing machine, and microwave included.',
    icon: Zap,
    badge: 'Ready to Move',
    color: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  {
    id: 'station-5min',
    title: 'Station Within 5-Minute Walk',
    description: 'Prime transit locations offering effortless daily commute to universities and workplaces.',
    icon: TrainFront,
    badge: 'Top Transit',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    id: 'pet-friendly',
    title: 'Pet-Friendly Apartments',
    description: 'Verified pet-welcoming rental properties allowing cats, dogs, and small animals.',
    icon: Dog,
    badge: 'Pets Allowed',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'free-internet',
    title: 'Free Fiber Optic Internet',
    description: 'High-speed Wi-Fi and optical fiber internet line included in monthly maintenance fees.',
    icon: Wifi,
    badge: 'Free Wi-Fi',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    id: 'auto-lock',
    title: 'Auto-Lock & Security Camera',
    description: 'High security apartment buildings featuring keycard access, intercom with monitor, and CCTV.',
    icon: ShieldCheck,
    badge: '24/7 Security',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    id: 'renovated',
    title: 'Renovated & Designer Suites',
    description: 'Refreshed modern interior design, updated bathrooms, and stylish flooring.',
    icon: Sparkles,
    badge: 'Renovated',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    id: 'parking',
    title: 'Parking Space Included',
    description: 'Rental apartments and detached houses equipped with designated resident parking bays.',
    icon: Car,
    badge: 'Parking Available',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
];

export const RENT_PRICE_RANGES = [
  { label: 'Under 50,000 Yen', sub: 'Budget Friendly', count: '14,200', query: 'max_rent=50000' },
  { label: '50,000 - 80,000 Yen', sub: 'Single / Student Choice', count: '38,500', query: 'min_rent=50000&max_rent=80000' },
  { label: '80,000 - 120,000 Yen', sub: 'Standard 1LDK / Couple', count: '45,800', query: 'min_rent=80000&max_rent=120000' },
  { label: '120,000 - 150,000 Yen', sub: 'Spacious Family Units', count: '28,400', query: 'min_rent=120000&max_rent=150000' },
  { label: 'Over 150,000 Yen', sub: 'High-End Condos', count: '18,900', query: 'min_rent=150000' },
];

export const LAYOUT_TYPES = [
  { label: 'Studio / 1K / 1DK', sub: 'Single Occupancy (20-30 m²)', count: '52,100', query: 'layout=1K' },
  { label: '1LDK', sub: 'Spacious Single / Couple (30-45 m²)', count: '41,800', query: 'layout=1LDK' },
  { label: '2K / 2DK', sub: 'Roommate / Compact 2-Room (40-50 m²)', count: '24,600', query: 'layout=2K' },
  { label: '2LDK', sub: 'Standard Family / Couple (50-65 m²)', count: '35,900', query: 'layout=2LDK' },
  { label: '3LDK / 4LDK+', sub: 'Large Family Condos & Houses (65 m²+)', count: '19,400', query: 'layout=3LDK' },
];

type SearchTab = 'area' | 'station' | 'map' | 'route' | 'features';

const SeahomeRentalPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const embedUrl = useMemo(() => embedUrlWithKaishiFlag(resolveSeahomeEmbedUrl()), []);
  const isListingsView = searchParams.get('view') === 'listings';
  const embedPath = searchParams.get('path') ?? '/properties';
  const [searchTab, setSearchTab] = useState<SearchTab>('area');
  const [query, setQuery] = useState('');
  const [mapSelection, setMapSelection] = useState<JapanMapSelection | null>(null);
  const [hoveredPrefectureSlug, setHoveredPrefectureSlug] = useState<string | null>(null);
  const [citySearchModal, setCitySearchModal] = useState<RentalSearchModalContext | null>(null);

  const openListings = useCallback(
    (path = '/properties') => {
      const normalized = path.startsWith('/') ? path : `/${path}`;
      navigate(rentalListingsUrl(normalized));
    },
    [navigate]
  );

  const exitListingsView = useCallback(() => {
    navigate(RENTAL_PORTAL_PATH, { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (!isListingsView) return;
    const t = window.setTimeout(() => navigateSeahomeEmbed(embedPath), 300);
    return () => window.clearTimeout(t);
  }, [isListingsView, embedPath]);

  useEffect(() => {
    const onNav = (e: Event) => {
      const path = (e as CustomEvent<{ path: string }>).detail?.path;
      if (path) openListings(path);
    };
    window.addEventListener(SEAHOME_NAVIGATE_EVENT, onNav);
    return () => window.removeEventListener(SEAHOME_NAVIGATE_EVENT, onNav);
  }, [openListings]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openListings('/properties');
  };

  const openSearchModal = useCallback((ctx: RentalSearchModalContext) => {
    setCitySearchModal(ctx);
  }, []);

  const selectPrefecture = useCallback(
    (slug: string, name: string) => {
      setMapSelection({ prefectureSlug: slug, prefectureName: name });
      openSearchModal({ prefectureSlug: slug, prefectureName: name });
    },
    [openSearchModal]
  );

  const selectCity = useCallback(
    (city: RentalCity, selection: JapanMapSelection) => {
      setMapSelection({ ...selection, city });
      openSearchModal({
        prefectureSlug: selection.prefectureSlug,
        prefectureName: selection.prefectureName,
        city,
      });
    },
    [openSearchModal]
  );

  const closeCitySearchModal = useCallback(() => {
    setCitySearchModal(null);
  }, []);

  const handleCitySearchMethod = useCallback(
    (method: CitySearchMethod) => {
      if (!citySearchModal) return;
      const ctx = citySearchModal;
      setCitySearchModal(null);

      if (method === 'area') {
        const cityPath = ctx.city
          ? `/seahome-real-estates/rental-office/${ctx.prefectureSlug || 'iwate'}/city/${ctx.city.slug}`
          : `/seahome-real-estates/rental-office/${ctx.prefectureSlug || 'iwate'}/city`;
        navigate(cityPath);
        return;
      }
      if (method === 'station') {
        const locationSlug = ctx.city?.slug ?? ctx.prefectureSlug;
        navigate(rentalSearchByLineStationPath(locationSlug), {
          state: {
            prefectureSlug: ctx.prefectureSlug,
            prefectureName: ctx.prefectureName,
            citySlug: ctx.city?.slug,
            cityName: ctx.city?.name,
          },
        });
        return;
      }
      if (method === 'route') {
        navigate(`/seahome-real-estates/rental-office/${ctx.prefectureSlug || 'nagano'}/route-map`);
        return;
      }
      if (method === 'map') {
        navigate(`/seahome-real-estates/rental/search-by-map/${ctx.prefectureSlug || 'niigata'}`);
        return;
      }

      const params = new URLSearchParams({
        prefecture: ctx.prefectureSlug,
        search: method,
      });
      if (ctx.city) params.set('city', ctx.city.slug);
      openListings(`/properties?${params.toString()}`);
    },
    [citySearchModal, navigate, openListings]
  );

  const handleCityModalViewPrefecture = useCallback(() => {
    if (!citySearchModal) return;
    const prefSlug = citySearchModal.prefectureSlug || 'iwate';
    setCitySearchModal(null);
    navigate(`/seahome-real-estates/rental-office/${prefSlug}/city`);
  }, [citySearchModal, navigate]);

  const searchSelectedPrefecture = useCallback(() => {
    if (!mapSelection) return;
    openSearchModal({
      prefectureSlug: mapSelection.prefectureSlug,
      prefectureName: mapSelection.prefectureName,
      city: mapSelection.city,
    });
  }, [mapSelection, openSearchModal]);

  if (isListingsView) {
    return (
      <div className="flex w-full flex-col bg-slate-100" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className={`flex shrink-0 flex-wrap items-center gap-2 border-b border-sky-100 bg-white py-2.5 sm:gap-3 ${HUB_CONTAINER}`}>
          <button
            type="button"
            onClick={exitListingsView}
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-900 transition hover:bg-sky-100 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </button>
          <span className="text-sm text-gray-600 font-medium">Browsing SeaHome Net rental listings</span>
          <Link
            to="/seahome-real-estates"
            state={{ seahomeHub: true }}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:from-sky-700 hover:to-blue-800"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden />
            SeaHome Home
          </Link>
        </div>
        <iframe
          title="Seahome rental listings"
          src={embedUrl}
          className="block min-h-0 flex-1 w-full border-0"
          allow="geolocation; clipboard-write; fullscreen; payment"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/70 pb-16 text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. BREADCRUMB TRAIL */}
      <div className="bg-white border-b border-sky-100 py-2.5 px-4 text-xs font-medium text-slate-500 shadow-xs">
        <div className={`${HUB_CONTAINER} flex flex-wrap items-center justify-between`}>
          <div className="flex items-center gap-1.5">
            <Link to="/" className="hover:text-sky-700 transition-colors">
              Real Estate & Housing Top
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-sky-900 font-bold">Rental Housing (Apartments & Houses)</span>
          </div>

          <Link
            to="/seahome-real-estates"
            state={{ seahomeHub: true }}
            className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 font-bold transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to SeaHome Portal</span>
          </Link>
        </div>
      </div>

      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        {/* 2. HERO HEADER BLOCK */}
        <div className="rounded-2xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
                <Home className="w-4 h-4 text-sky-600" />
                <span>SeaHome Net Official Housing Portal</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Search for{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  Rental Housing — Apartments, Condominiums, & Houses
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Find verified rental properties across Japan. Kaishi Nihon × SeaHome Net assistance for students & international residents.
              </p>
            </div>

            {/* Total Available Listings Badge */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Listings Available Today</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{RENTAL_LISTING_COUNT}</span>
                <span className="text-xs font-bold text-slate-600">units</span>
              </div>
            </div>
          </div>

          {/* 3. SEARCH NAVIGATION TABS */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-sky-50/60 p-2 rounded-xl border border-sky-100">
            {[
              { id: 'area', label: 'By Area / City', sub: 'Pick Region', icon: MapPin },
              { id: 'station', label: 'By Line / Station', sub: 'Railway Lines', icon: TrainFront },
              { id: 'map', label: 'By Map Search', sub: 'Interactive Map', icon: Map },
              { id: 'route', label: 'By Route Diagram', sub: 'Transit Diagram', icon: Network },
              { id: 'features', label: 'Special Criteria', sub: 'Filter Amenities', icon: SlidersHorizontal },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = searchTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setSearchTab(tab.id as SearchTab);
                    if (tab.id === 'station') {
                      navigate('/seahome-real-estates/rental/search-by-line-station/niigata');
                    } else if (tab.id === 'route') {
                      navigate('/seahome-real-estates/rental-office/nagano/route-map');
                    } else if (tab.id === 'map') {
                      navigate('/seahome-real-estates/rental/search-by-map/niigata');
                    }
                  }}
                  className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${isActive
                    ? 'border-sky-500 bg-white text-sky-900 shadow-md shadow-sky-900/10 font-bold ring-2 ring-sky-500/20'
                    : 'border-sky-100 bg-white/70 text-slate-700 hover:border-sky-300 hover:bg-white hover:text-sky-900'
                    }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-sky-600' : 'text-sky-500'}`} />
                    <span className="text-xs sm:text-sm font-extrabold leading-tight">{tab.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium mt-0.5">{tab.sub}</span>
                </button>
              );
            })}
          </div>

          {/* Search Form Bar */}
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter city, station, layout, or keywords (e.g. Shibuya, 1LDK, Pet friendly)"
                className="w-full rounded-xl border border-sky-200 py-2.5 pl-10 pr-4 text-xs sm:text-sm font-medium focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 bg-white shadow-xs"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-sky-600/20 transition-all hover:from-sky-700 hover:to-blue-800 cursor-pointer"
            >
              <Search className="h-4 w-4" />
              <span>Search Properties</span>
            </button>
          </form>
        </div>

        {/* 4. MAIN TWO-COLUMN CONTENT AREA */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem]">
          {/* Main Left Column */}
          <main className="min-w-0 space-y-6">
            {/* INTERACTIVE PREFECTURE MAP & REGION LIST */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-sky-600" />
                  <h2 className="text-base font-extrabold text-sky-950">
                    Select a Prefecture to Browse Rentals
                  </h2>
                </div>
                <span className="text-xs font-semibold text-slate-500">Click any prefecture on map</span>
              </div>

              <div
                className="grid gap-4 xl:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)_minmax(0,13.5rem)] xl:items-start"
                onMouseLeave={() => setHoveredPrefectureSlug(null)}
              >
                <div className="hidden xl:block">
                  <SeahomeRentalRegionList
                    regions={RENTAL_REGIONS.slice(0, 4)}
                    activeSlug={mapSelection?.prefectureSlug ?? null}
                    hoveredSlug={hoveredPrefectureSlug}
                    onPrefectureClick={selectPrefecture}
                    onPrefectureHover={setHoveredPrefectureSlug}
                  />
                </div>
                <SeahomeJapanMap
                  activeSlug={mapSelection?.prefectureSlug ?? null}
                  hoveredSlug={hoveredPrefectureSlug}
                  onPrefectureSelect={selectPrefecture}
                  onPrefectureHover={setHoveredPrefectureSlug}
                />
                <div className="hidden xl:block">
                  <SeahomeRentalRegionList
                    regions={RENTAL_REGIONS.slice(4)}
                    activeSlug={mapSelection?.prefectureSlug ?? null}
                    hoveredSlug={hoveredPrefectureSlug}
                    onPrefectureClick={selectPrefecture}
                    onPrefectureHover={setHoveredPrefectureSlug}
                  />
                </div>
              </div>

              <div className="xl:hidden pt-2 border-t border-sky-100">
                <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wide text-sky-800">
                  Select a Prefecture Region
                </p>
                <SeahomeRentalRegionList
                  regions={RENTAL_REGIONS}
                  activeSlug={mapSelection?.prefectureSlug ?? null}
                  hoveredSlug={hoveredPrefectureSlug}
                  onPrefectureClick={selectPrefecture}
                  onPrefectureHover={setHoveredPrefectureSlug}
                />
              </div>

              {mapSelection && (
                <SeahomeRentalCityPanel
                  selection={mapSelection}
                  onCitySelect={selectCity}
                  onSearchPrefecture={searchSelectedPrefecture}
                />
              )}
            </div>

            {/* SPECIAL FEATURES CARDS GRID */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sky-600" />
                  <h2 className="text-base sm:text-lg font-extrabold text-sky-950">
                    Search Housing by Special Feature & Terms
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">Popular Conditions</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                {RESIDENTIAL_SPECIAL_FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.id}
                      onClick={() => openListings(`/properties?filter=${feature.id}`)}
                      className="group p-4 rounded-xl border border-sky-100 bg-white hover:border-sky-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <span className={`p-2 rounded-lg ${feature.color} border shadow-2xs`}>
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="text-[10px] font-extrabold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">
                            {feature.badge}
                          </span>
                        </div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                          {feature.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                          {feature.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-sky-600 font-bold">
                        <span>Browse properties</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RENT PRICE RANGE & LAYOUT QUICK BREAKDOWN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Rent Price Breakdown */}
              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
                  <CircleDollarSign className="w-4 h-4 text-sky-600" />
                  <h3 className="text-sm font-extrabold text-sky-950">Search by Monthly Rent Range</h3>
                </div>
                <div className="space-y-2">
                  {RENT_PRICE_RANGES.map((price, idx) => (
                    <div
                      key={idx}
                      onClick={() => openListings(`/properties?${price.query}`)}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-sky-50 hover:border-sky-300 transition-all cursor-pointer group"
                    >
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-sky-700">
                          {price.label}
                        </span>
                        <span className="block text-[10px] text-slate-500">{price.sub}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-sky-700">{price.count} units</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layout Type Breakdown */}
              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
                  <LayoutGrid className="w-4 h-4 text-sky-600" />
                  <h3 className="text-sm font-extrabold text-sky-950">Search by Floor Layout Type</h3>
                </div>
                <div className="space-y-2">
                  {LAYOUT_TYPES.map((layout, idx) => (
                    <div
                      key={idx}
                      onClick={() => openListings(`/properties?${layout.query}`)}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-sky-50 hover:border-sky-300 transition-all cursor-pointer group"
                    >
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-sky-700">
                          {layout.label}
                        </span>
                        <span className="block text-[10px] text-slate-500">{layout.sub}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-sky-700">{layout.count} units</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NEW LISTINGS CAROUSEL SHOWCASE */}
            <SeahomeRentalNewListingsCarousel
              className="mt-2"
              onListingClick={(card) => {
                const url = `/seahome-real-estates/rental/detail/${card.id}`;
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
              onCategoryClick={(cat) => openListings(`/properties?category=${encodeURIComponent(cat)}`)}
            />
          </main>

          {/* Right Sidebar */}
          <aside className="space-y-5">
            {/* Quick Navigation Methods */}
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-sky-600 to-blue-800 p-3.5 text-white">
                <h3 className="text-xs font-extrabold uppercase tracking-wider">Other Ways to Search Housing</h3>
              </div>
              <ul className="divide-y divide-sky-50">
                {RENTAL_SIDE_FILTERS.map((item) => {
                  const Icon = FILTER_ICONS[item.id];
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => openListings(`/properties?filter=${item.id}`)}
                        className="flex w-full items-start gap-3 p-3 text-left transition hover:bg-sky-50/70 group cursor-pointer"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <span className="block text-xs font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                            {item.label}
                          </span>
                          <span className="block text-[10px] text-slate-500 font-medium">{item.sub}</span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Building Library Card */}
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2.5">
                <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">Building Library & Guides</h3>
              </div>
              <div className="p-4 space-y-2">
                <div className="h-24 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-sky-600">
                  <Building2 className="h-10 w-10 opacity-70" />
                </div>
                <p className="text-xs leading-relaxed text-slate-600 font-medium">
                  Explore popular apartment complexes, floor plans, and English-friendly rental guides.
                </p>
                <button
                  type="button"
                  onClick={() => openListings('/properties?type=building-library')}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-sky-700 hover:text-sky-900 pt-1 cursor-pointer"
                >
                  <span>Browse building catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Town & Neighborhood Library Card */}
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2.5">
                <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">Town & Neighborhood Library</h3>
              </div>
              <div className="p-4 space-y-2">
                <div className="h-24 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-sky-600">
                  <MapPin className="h-10 w-10 opacity-70" />
                </div>
                <p className="text-xs leading-relaxed text-slate-600 font-medium">
                  Neighborhood guides for international residents — transit, supermarkets, & living tips.
                </p>
                <button
                  type="button"
                  onClick={() => openListings('/properties?type=town-library')}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-sky-700 hover:text-sky-900 pt-1 cursor-pointer"
                >
                  <span>Explore town guides</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* SEARCH MODAL */}
      {citySearchModal && (
        <SeahomeRentalCitySearchModal
          context={citySearchModal}
          onClose={closeCitySearchModal}
          onSearch={handleCitySearchMethod}
          onViewPrefecture={handleCityModalViewPrefecture}
        />
      )}
    </div>
  );
};

export default SeahomeRentalPage;
