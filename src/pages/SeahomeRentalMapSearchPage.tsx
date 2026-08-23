import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams, Link } from 'react-router-dom';
import { ChevronRight, Search, Map, Layers, Network, MapPin, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import { RENTAL_PORTAL_PATH, rentalListingsUrl } from '../components/seahome/seahomeRentalLineSearchData';
import { RENTAL_REGIONS } from '../components/seahome/seahomeRentalData';
import { getPrefectureCityData, type CityInfo } from '../components/seahome/seahomePrefectureCityData';
import { SeahomePrefectureMap } from '../components/seahome/SeahomePrefectureMap';

type LocationState = {
  prefectureSlug?: string;
  prefectureName?: string;
  cityName?: string;
  citySlug?: string;
} | null;

function prefectureNameFromSlug(slug: string): string {
  for (const region of RENTAL_REGIONS) {
    const p = region.prefectures.find((x) => x.slug === slug);
    if (p) return p.name;
  }
  return slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ') : 'Akita';
}

export const SeahomeRentalMapSearchPage: React.FC = () => {
  const { locationSlug = '' } = useParams<{ locationSlug: string }>();
  const [searchParams] = useSearchParams();
  const locationState = useLocation().state as LocationState;
  const navigate = useNavigate();

  const rawPrefectureSlug =
    (locationState?.prefectureSlug ?? searchParams.get('prefecture') ?? locationSlug) || 'akita';
  const prefectureSlug = rawPrefectureSlug.toLowerCase().trim();
  const prefectureName =
    locationState?.prefectureName ??
    searchParams.get('prefectureName') ??
    prefectureNameFromSlug(prefectureSlug);

  const prefData = useMemo(
    () => getPrefectureCityData(prefectureSlug, prefectureName),
    [prefectureSlug, prefectureName]
  );

  const [keywordQuery, setKeywordQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(RENTAL_PORTAL_PATH);
  };

  const handleKeywordSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ prefecture: prefectureSlug });
    if (keywordQuery.trim()) {
      params.set('q', keywordQuery.trim());
    }
    if (selectedCity) {
      params.set('city', selectedCity.slug);
    }
    navigate(rentalListingsUrl(`/properties?${params.toString()}`));
  };

  const handleCitySelect = (city: CityInfo) => {
    setSelectedCity(city);
    // Navigate directly to property search with city filter
    const params = new URLSearchParams({
      prefecture: prefectureSlug,
      city: city.slug,
      cityName: city.name,
    });
    navigate(rentalListingsUrl(`/properties?${params.toString()}`));
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-16 text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* BREADCRUMB TRAIL (Matching user reference image layout) */}
      <div className="bg-white border-b border-sky-100 py-2.5 px-4 text-xs font-medium text-slate-500 shadow-xs">
        <div className={`${HUB_CONTAINER} flex flex-wrap items-center gap-1.5`}>
          <Link to="/" className="hover:text-sky-700 transition-colors">
            Real Estate & Housing Top
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/seahome-real-estates/rental" className="hover:text-sky-700 transition-colors">
            Rental
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/seahome-real-estates/rental-shop" className="hover:text-sky-700 transition-colors">
            Store for Rent
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-sky-800 font-semibold">{prefData.prefectureName} Prefecture</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Search by map</span>
        </div>
      </div>

      <div className={`${HUB_CONTAINER} pt-6 pb-10 space-y-6`}>
        {/* PAGE HERO HEADER TITLE (Red/Crimson accent matching reference image & SeaHome styling) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-sky-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold mb-2">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Interactive Map Search</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Find{' '}
              <span className="text-rose-600 font-extrabold">
                rental properties, vacant shops, and commercial spaces
              </span>{' '}
              in{' '}
              <span className="text-rose-600 font-extrabold">{prefData.prefectureName} Prefecture</span>{' '}
              using a map.
            </h1>
          </div>

          <button
            type="button"
            onClick={handleBack}
            className="self-start sm:self-center inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-sky-800 shadow-xs hover:bg-sky-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </button>
        </div>

        {/* SEARCH TABS & KEYWORD INPUT BAR (Matching reference header buttons) */}
        <div className="rounded-2xl border border-sky-200 bg-white p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* SEARCH BY KEYWORD INPUT */}
            <form onSubmit={handleKeywordSearch} className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 shrink-0">
                Search by keyword
              </span>
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="search"
                  value={keywordQuery}
                  onChange={(e) => setKeywordQuery(e.target.value)}
                  placeholder="Enter station name/city/county name/facility name, etc."
                  className="w-full bg-slate-50 border border-slate-300 focus:border-sky-600 focus:bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs sm:text-sm hover:bg-sky-700 transition-all cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {/* QUICK METHOD NAVIGATION BUTTONS */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => navigate('/seahome-real-estates/rental')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border-2 border-rose-600 bg-white text-rose-700 font-bold text-xs hover:bg-rose-50 transition-all shadow-xs cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-rose-600" />
                <span>Search by region</span>
              </button>
              <button
                type="button"
                onClick={() => navigate(`/seahome-real-estates/rental/search-by-line-station/${prefectureSlug}`)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border-2 border-rose-600 bg-white text-rose-700 font-bold text-xs hover:bg-rose-50 transition-all shadow-xs cursor-pointer"
              >
                <Network className="w-3.5 h-3.5 text-rose-600" />
                <span>Search by railway line/station</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/seahome-real-estates/rental/map')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border-2 border-rose-600 bg-white text-rose-700 font-bold text-xs hover:bg-rose-50 transition-all shadow-xs cursor-pointer"
              >
                <Map className="w-3.5 h-3.5 text-rose-600" />
                <span>Search using the route map</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-sm ring-2 ring-rose-500/30 cursor-default"
              >
                <Map className="w-3.5 h-3.5 text-white" />
                <span>Search by map</span>
              </button>
            </div>
          </div>
        </div>

        {/* INSTRUCTION HEADING */}
        <div className="pt-2">
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
            Please select a city/ward/county.
          </h2>
        </div>

        {/* MAP VISUALIZATION CARD */}
        <div className="rounded-2xl border border-sky-200 bg-white p-3 sm:p-5 shadow-md">
          <SeahomePrefectureMap
            data={prefData}
            selectedCitySlug={selectedCity?.slug}
            onSelectCity={handleCitySelect}
          />
        </div>

        {/* CITY / DISTRICT BREAKDOWN LIST SECTION (Matching bottom table of reference image) */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="bg-slate-100/90 border-b border-slate-200 px-5 py-3.5">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-rose-600" />
              {prefData.prefectureName} Prefecture Cities & Districts
            </h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3.5 gap-x-4 text-xs">
              {prefData.cities.map((city) => {
                const hasListings = city.count > 0;
                return (
                  <button
                    key={city.slug}
                    type="button"
                    onClick={() => handleCitySelect(city)}
                    className="group flex items-baseline gap-1 text-left transition-colors cursor-pointer"
                  >
                    <span
                      className={`font-semibold group-hover:underline underline-offset-2 ${hasListings ? 'text-sky-700 font-bold group-hover:text-rose-600' : 'text-slate-400'
                        }`}
                    >
                      {city.name}
                    </span>
                    <span
                      className={`text-[11px] ${hasListings ? 'text-slate-500 font-medium' : 'text-slate-300'
                        }`}
                    >
                      ({city.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalMapSearchPage;
