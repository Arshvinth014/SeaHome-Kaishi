import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, MapPin, Search, Map, Layers, Network, CheckCircle2 } from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  formatListingCount,
  RENTAL_PORTAL_PATH,
  railOperatorsForPrefecture,
  rentalLineDetailPath,
  rentalListingsUrl,
  type RentalRailLine,
} from '../components/seahome/seahomeRentalLineSearchData';
import { RENTAL_REGIONS } from '../components/seahome/seahomeRentalData';

const MAX_LINES = 5;

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
  return slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ') : 'Japan';
}

function titleCaseSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export const SeahomeRentalLineStationSearchPage: React.FC = () => {
  const { locationSlug = '' } = useParams<{ locationSlug: string }>();
  const [searchParams] = useSearchParams();
  const locationState = useLocation().state as LocationState;
  const navigate = useNavigate();

  const rawPrefectureSlug =
    (locationState?.prefectureSlug ?? searchParams.get('prefecture') ?? locationSlug) || 'niigata';
  const prefectureSlug = rawPrefectureSlug.toLowerCase().trim();
  const prefectureName =
    locationState?.prefectureName ??
    searchParams.get('prefectureName') ??
    prefectureNameFromSlug(prefectureSlug);
  const citySlug = locationState?.citySlug ?? searchParams.get('city') ?? '';
  const cityName =
    locationState?.cityName ?? searchParams.get('cityName') ?? (citySlug ? titleCaseSlug(citySlug) : '');

  const areaLabel = citySlug && cityName ? `${cityName}, ${prefectureName}` : `${prefectureName} Prefecture`;

  const operators = useMemo(
    () => railOperatorsForPrefecture(prefectureSlug, prefectureName),
    [prefectureSlug, prefectureName]
  );

  const [stationQuery, setStationQuery] = useState('');
  const [selectedLineIds, setSelectedLineIds] = useState<string[]>([]);
  const [lineLimitHint, setLineLimitHint] = useState(false);

  const toggleLine = (line: RentalRailLine) => {
    setLineLimitHint(false);
    setSelectedLineIds((prev) => {
      if (prev.includes(line.id)) return prev.filter((id) => id !== line.id);
      if (prev.length >= MAX_LINES) {
        setLineLimitHint(true);
        return prev;
      }
      return [...prev, line.id];
    });
  };

  const goToListings = (extra: URLSearchParams) => {
    navigate(rentalListingsUrl(`/properties?${extra.toString()}`));
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(RENTAL_PORTAL_PATH);
  };

  const handleStationSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ prefecture: prefectureSlug, search: 'station' });
    if (citySlug) params.set('city', citySlug);
    const q = stationQuery.trim();
    if (q) params.set('station', q);
    selectedLineIds.forEach((id) => params.append('line', id));
    goToListings(params);
  };

  const handleLineClick = (line: RentalRailLine) => {
    navigate(rentalLineDetailPath(locationSlug || prefectureSlug, line.id), {
      state: {
        prefectureSlug,
        prefectureName,
        citySlug: citySlug || undefined,
        cityName: citySlug ? cityName : undefined,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-16 text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* BREADCRUMB TRAIL (Matching user reference layout) */}
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
          <span className="text-sky-800 font-semibold">{prefectureName} Prefecture</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Search by railway line/station</span>
        </div>
      </div>

      <div className={`${HUB_CONTAINER} pt-6 pb-10 space-y-6`}>
        {/* PAGE HERO HEADING WITH SKY/OCEAN BLUE DESIGN */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-sky-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold mb-2">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{areaLabel}</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-sky-950 tracking-tight leading-snug">
              Find rental properties, vacant shops, and commercial spaces in{' '}
              <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                {prefectureName} Prefecture
              </span>{' '}
              by train line and station.
            </h1>
          </div>
          <button
            type="button"
            onClick={handleBack}
            className="self-start sm:self-center inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-sky-800 shadow-sm hover:bg-sky-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </button>
        </div>

        {/* EASY SEARCH CARD (Station Name Input Box) */}
        <div className="rounded-2xl border border-sky-200/80 bg-gradient-to-r from-sky-50/90 via-white to-blue-50/80 p-4 sm:p-6 shadow-md shadow-sky-900/5">
          <form onSubmit={handleStationSearch} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="sm:w-64 shrink-0">
              <span className="inline-block px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wide mr-2 shadow-xs">
                Easy search:
              </span>
              <span className="text-xs sm:text-sm font-bold text-sky-950">
                Enter station name to view properties
              </span>
            </div>
            <div className="flex-1 flex items-center gap-2 min-w-0">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-sky-500 pointer-events-none" />
                <input
                  type="search"
                  value={stationQuery}
                  onChange={(e) => setStationQuery(e.target.value)}
                  placeholder="Please enter the station name..."
                  className="w-full bg-white border border-sky-300 focus:border-sky-600 text-slate-900 placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-sky-500/30 transition-all shadow-xs"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-600/20 hover:from-sky-700 hover:to-blue-700 transition-all cursor-pointer shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>

        {/* ACTION BUTTONS & ROUTE SELECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          <div>
            <p className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              Please select a route.{' '}
              <span className="text-slate-500 font-normal">
                (You can select up to {MAX_LINES} routes.)
              </span>
            </p>
            {selectedLineIds.length > 0 && (
              <p className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                {selectedLineIds.length} line{selectedLineIds.length > 1 ? 's' : ''} selected
              </p>
            )}
            {lineLimitHint && (
              <p className="text-xs font-semibold text-amber-600 mt-1">
                You can select up to {MAX_LINES} routes. Deselect one to choose another.
              </p>
            )}
          </div>

          {/* Quick Method Buttons (Search by region, Search by map, Route map) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => navigate('/seahome-real-estates/rental')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-sky-600 bg-white text-sky-700 font-bold text-xs hover:bg-sky-50 transition-all shadow-xs"
            >
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Search by region</span>
            </button>
            <button
              type="button"
              onClick={() =>
                navigate(`/seahome-real-estates/rental/search-by-map/${prefectureSlug}`, {
                  state: { prefectureSlug, prefectureName, citySlug, cityName },
                })
              }
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-sky-600 bg-white text-sky-700 font-bold text-xs hover:bg-sky-50 transition-all shadow-xs cursor-pointer"
            >
              <Map className="w-3.5 h-3.5 text-sky-600" />
              <span>Search by map</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/seahome-real-estates/rental/map')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-sky-600 bg-white text-sky-700 font-bold text-xs hover:bg-sky-50 transition-all shadow-xs"
            >
              <Network className="w-3.5 h-3.5 text-sky-600" />
              <span>Search using route map</span>
            </button>
          </div>
        </div>

        {/* RAIL OPERATOR LINE GROUPS (JR, Bullet Train, Others) */}
        <div className="space-y-6">
          {operators.map((operator) => (
            <div
              key={operator.id}
              className="rounded-2xl border border-sky-100 bg-white shadow-md shadow-sky-900/5 overflow-hidden"
            >
              {/* OPERATOR SECTION HEADER */}
              <div className="bg-gradient-to-r from-sky-100/90 via-sky-50 to-slate-100 border-b border-sky-200/80 px-4 py-3 flex items-center justify-between">
                <h2 className="text-sm sm:text-base font-extrabold text-sky-950 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-sky-600" />
                  {operator.name}
                </h2>
                <span className="text-xs font-semibold text-sky-700 bg-sky-200/60 px-2.5 py-0.5 rounded-full">
                  {operator.lines.length} Line{operator.lines.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* OPERATOR LINES GRID */}
              <ul className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {operator.lines.map((line) => {
                  const checked = selectedLineIds.includes(line.id);

                  return (
                    <li
                      key={line.id}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                        checked
                          ? 'border-sky-500 bg-sky-50/80 shadow-xs'
                          : 'border-slate-200/80 bg-white hover:border-sky-300 hover:bg-sky-50/30'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <input
                          type="checkbox"
                          id={`line-${line.id}`}
                          checked={checked}
                          onChange={() => toggleLine(line)}
                          className="h-4.5 w-4.5 shrink-0 accent-sky-600 rounded cursor-pointer"
                        />
                        <button
                          type="button"
                          onClick={() => handleLineClick(line)}
                          className="truncate text-left text-xs sm:text-sm font-semibold text-sky-800 hover:text-sky-950 underline decoration-sky-300 underline-offset-2 hover:decoration-sky-600 transition-colors"
                        >
                          {line.name}
                        </button>
                      </div>
                      <span className="text-xs font-medium text-slate-500 shrink-0 ml-2">
                        ({formatListingCount(line.listingCount)})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* PRIMARY ACTION BUTTON AT BOTTOM */}
        <div className="pt-6 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              const params = new URLSearchParams({
                prefecture: prefectureSlug,
                search: 'station',
              });
              if (citySlug) params.set('city', citySlug);
              selectedLineIds.forEach((id) => params.append('line', id));
              goToListings(params);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-700 px-10 py-4 text-base sm:text-lg font-extrabold text-white shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.02] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-sky-500/40 cursor-pointer"
          >
            <span>
              {selectedLineIds.length > 0
                ? `Select a station (${selectedLineIds.length} line${selectedLineIds.length > 1 ? 's' : ''} selected)`
                : 'Select a station'}
            </span>
            <ChevronRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-slate-500 font-medium">
            Clicking line names directly views specific station details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalLineStationSearchPage;
