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
  type LucideIcon,
} from 'lucide-react';
import { resolveSeahomeEmbedUrl } from '../config/seahomeEmbed';
import SeahomeSidebarAd from '../components/seahome/SeahomeSidebarAd';
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

type SearchTab = 'area' | 'station' | 'map';

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

  /** Leave listings iframe and return to the map portal (keeps prior history, e.g. line search). */
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
    const params = new URLSearchParams({ prefecture: citySearchModal.prefectureSlug });
    setCitySearchModal(null);
    openListings(`/properties?${params.toString()}`);
  }, [citySearchModal, openListings]);

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
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </button>
          <span className="text-sm text-gray-600">Browsing rental listings</span>
          <Link
            to="/seahome-real-estates"
            state={{ seahomeHub: true }}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-sky-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:from-purple-700 hover:to-sky-800"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden />
            Seahome Home
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
    <div className="w-full bg-slate-50/90 pb-10 text-gray-900">
      <div className={`border-b border-gray-100 bg-white py-2.5 ${HUB_CONTAINER}`}>
        <Link
          to="/seahome-real-estates"
          state={{ seahomeHub: true }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 transition hover:text-sky-950"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Seahome services
        </Link>
      </div>

      <div className={`py-5 sm:py-6 ${HUB_CONTAINER}`}>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_19rem]">
          {/* Main column */}
          <main className="min-w-0 space-y-4">
            {/* Section header bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg bg-gradient-to-r from-sky-600 to-sky-800 px-4 py-2.5 text-white shadow-sm">
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg" aria-hidden>
                  🏠
                </span>
                <h1 className="text-sm font-bold leading-snug sm:text-base">
                  Search rentals — apartments & houses
                </h1>
              </div>
              <p className="shrink-0 text-xs font-semibold sm:text-sm">
                <span className="tabular-nums">{RENTAL_LISTING_COUNT}</span> listings
              </p>
            </div>

            <div className="rounded-b-lg border border-t-0 border-sky-100 bg-white px-4 py-4 shadow-sm sm:px-5">
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Find apartments and houses for rent across Japan. Search by area, station, rent, layout, or
                commute — with English-friendly support from Kaishi Nihon × Seahome for students and newcomers.
              </p>

              {/* Quick search tabs */}
              <div className="mt-4 flex flex-wrap items-end gap-2 border-b border-gray-200 pb-3">
                {(
                  [
                    ['area', 'Search by area'],
                    ['station', 'Search by station'],
                    ['map', 'Map search'],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSearchTab(id)}
                    className={`rounded-t-md px-3 py-1.5 text-xs font-semibold sm:text-sm ${
                      searchTab === id
                        ? 'bg-sky-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-sky-50 hover:text-sky-900'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSearchSubmit} className="mt-3 flex flex-wrap gap-2">
                <div className="relative min-w-[200px] flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={
                      searchTab === 'station'
                        ? 'Enter station name (e.g. Shibuya)'
                        : searchTab === 'map'
                          ? 'Select a prefecture below'
                          : 'Enter city, ward, or area'
                    }
                    className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </form>

              {/* Map search panel */}
              <div className="mt-5 rounded-lg border-2 border-sky-200/80 bg-sky-50/40 p-3 sm:p-4">
                <div className="mb-3 flex items-center gap-2 border-b border-sky-200/60 pb-2">
                  <MapPin className="h-4 w-4 text-sky-700" />
                  <h2 className="text-sm font-bold text-sky-950 sm:text-base">
                    Select the prefecture you are looking for
                  </h2>
                </div>

                <div
                  className="grid gap-3 xl:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)_minmax(0,13.5rem)] xl:items-start xl:gap-4"
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
                <div className="mt-3 xl:hidden">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-sky-800">
                    Or choose a prefecture
                  </p>
                  <SeahomeRentalRegionList
                    regions={RENTAL_REGIONS}
                    activeSlug={mapSelection?.prefectureSlug ?? null}
                    hoveredSlug={hoveredPrefectureSlug}
                    onPrefectureClick={selectPrefecture}
                    onPrefectureHover={setHoveredPrefectureSlug}
                  />
                </div>
                {mapSelection ? (
                  <SeahomeRentalCityPanel
                    selection={mapSelection}
                    onCitySelect={selectCity}
                    onSearchPrefecture={searchSelectedPrefecture}
                  />
                ) : null}

                {/* In-panel quick filters (desktop: beside map on wide screens — stacked on mobile) */}
                <div className="mt-4 grid gap-1.5 border-t border-sky-200/60 pt-3 sm:grid-cols-2 lg:hidden">
                  {RENTAL_SIDE_FILTERS.slice(0, 6).map((item) => {
                    const Icon = FILTER_ICONS[item.id];
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => openListings('/properties')}
                        className="flex items-center gap-2 rounded-md border border-sky-100 bg-white px-2.5 py-2 text-left text-xs transition hover:border-sky-300 hover:bg-sky-50"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-sky-600" />
                        <span className="font-semibold text-sky-950">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <SeahomeRentalNewListingsCarousel
                className="mt-5"
                onListingClick={() => openListings('/properties')}
                onCategoryClick={() => openListings('/properties')}
              />
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm">
              <p className="bg-sky-50 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-sky-800">
                Other ways to search
              </p>
              <ul className="divide-y divide-gray-100">
                {RENTAL_SIDE_FILTERS.map((item) => {
                  const Icon = FILTER_ICONS[item.id];
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => openListings('/properties')}
                        className="flex w-full items-start gap-2.5 px-3 py-2.5 text-left transition hover:bg-sky-50/80"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-700">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold text-sky-950 sm:text-sm">{item.label}</span>
                          <span className="block text-[10px] text-gray-500">{item.sub}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <SeahomeSidebarAd kaishiDomId="kaishi-seahome-ad-mid-featured" />

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-sky-600 to-sky-700 px-3 py-2">
                <p className="text-xs font-bold text-white">Building library</p>
              </div>
              <div className="p-3">
                <div className="mb-2 flex h-20 items-center justify-center rounded-md bg-gradient-to-br from-slate-200 to-slate-300 text-slate-500">
                  <Building2 className="h-10 w-10 opacity-60" />
                </div>
                <p className="text-[11px] leading-relaxed text-gray-600">
                  Explore popular apartment buildings, floor plans, and English-friendly property guides.
                </p>
                <button
                  type="button"
                  onClick={() => openListings('/properties')}
                  className="mt-2 text-xs font-semibold text-sky-700 hover:text-sky-900"
                >
                  Browse buildings →
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-sky-600 to-sky-700 px-3 py-2">
                <p className="text-xs font-bold text-white">Town library</p>
              </div>
              <div className="p-3">
                <div className="mb-2 flex h-20 items-center justify-center rounded-md bg-gradient-to-br from-sky-100 to-sky-200 text-sky-600">
                  <MapPin className="h-10 w-10 opacity-70" />
                </div>
                <p className="text-[11px] leading-relaxed text-gray-600">
                  Neighborhood guides for students — transit, supermarkets, and daily life in each area.
                </p>
                <button
                  type="button"
                  onClick={() => openListings('/properties')}
                  className="mt-2 text-xs font-semibold text-sky-700 hover:text-sky-900"
                >
                  Explore areas →
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {citySearchModal ? (
        <SeahomeRentalCitySearchModal
          context={citySearchModal}
          onClose={closeCitySearchModal}
          onSearch={handleCitySearchMethod}
          onViewPrefecture={handleCityModalViewPrefecture}
        />
      ) : null}
    </div>
  );
};

export default SeahomeRentalPage;
