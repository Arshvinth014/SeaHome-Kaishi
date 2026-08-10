import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronDown,
  Download,
  Heart,
  Mail,
  MessageCircle,
  Plus,
  Search,
  Train,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  formatListingCount,
  rentalLineDetailPath,
  rentalPropertyDetailPath,
  rentalSearchByLineStationPath,
} from '../components/seahome/seahomeRentalLineSearchData';
import {
  DEFAULT_LINE_SEARCH_FILTERS,
  findRailLine,
  findStationOnLine,
  stationsForLine,
  type LineSearchFilters,
} from '../components/seahome/seahomeRentalLineStations';
import SeahomeRentalListingTable from '../components/seahome/SeahomeRentalListingTable';
import {
  demoListingsForStation,
  DISPLAY_COUNT_OPTIONS,
  OCCUPANCY_FILTER_OPTIONS,
  SORT_OPTIONS,
} from '../components/seahome/seahomeRentalStationResultsData';
import { RENTAL_REGIONS } from '../components/seahome/seahomeRentalData';

const CRIMSON = '#c80032';
const PINK_BORDER = '#e8b4bc';

type LocationState = {
  prefectureSlug?: string;
  prefectureName?: string;
  citySlug?: string;
  lineName?: string;
  stationIds?: string[];
  filters?: LineSearchFilters;
} | null;

function prefectureNameFromSlug(slug: string): string {
  for (const region of RENTAL_REGIONS) {
    const p = region.prefectures.find((x) => x.slug === slug);
    if (p) return p.name;
  }
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}

const SeahomeRentalStationResultsPage: React.FC = () => {
  const { locationSlug = '', lineSlug = '', stationSlug = '' } = useParams<{
    locationSlug: string;
    lineSlug: string;
    stationSlug: string;
  }>();
  const [searchParams] = useSearchParams();
  const locationState = useLocation().state as LocationState;
  const navigate = useNavigate();

  const prefectureSlug =
    locationState?.prefectureSlug ?? searchParams.get('prefecture') ?? locationSlug;
  const prefectureName =
    locationState?.prefectureName ??
    searchParams.get('prefectureName') ??
    prefectureNameFromSlug(prefectureSlug);

  const line = useMemo(
    () => findRailLine(prefectureSlug, prefectureName, lineSlug),
    [prefectureSlug, prefectureName, lineSlug]
  );

  const station = useMemo(
    () => (line ? findStationOnLine(line.id, line.name, stationSlug) : undefined),
    [line, stationSlug]
  );

  const allStationIds = locationState?.stationIds?.length
    ? locationState.stationIds
    : station
      ? [station.id]
      : [];

  const selectedStations = useMemo(() => {
    if (!line) return [];
    const list = stationsForLine(line.id, line.name);
    return list.filter((s) => allStationIds.includes(s.id));
  }, [line, allStationIds]);

  const totalCount = useMemo(() => {
    if (selectedStations.length > 0) {
      return selectedStations.reduce((sum, s) => sum + s.listingCount, 0);
    }
    return station?.listingCount ?? 0;
  }, [selectedStations, station]);

  const [occupancy, setOccupancy] = useState<string | null>(null);
  const [showMoreCriteria, setShowMoreCriteria] = useState(false);
  const [displayCount, setDisplayCount] = useState('30');
  const [sortBy, setSortBy] = useState('');
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const listings = useMemo(
    () => demoListingsForStation(station?.name ?? stationSlug, Number(displayCount) || 30),
    [station, stationSlug, displayCount]
  );

  const titleStationLabel = useMemo(() => {
    if (selectedStations.length <= 1) {
      return station?.name ?? stationSlug.replace(/-/g, ' ');
    }
    const names = selectedStations.map((s) => s.name).join(', ');
    return names;
  }, [selectedStations, station, stationSlug]);

  const lineDetailState = {
    prefectureSlug,
    prefectureName,
    citySlug: locationState?.citySlug,
    stationIds: allStationIds,
    filters: locationState?.filters ?? DEFAULT_LINE_SEARCH_FILTERS,
  };

  const handleBack = () => {
    if (line) {
      navigate(rentalLineDetailPath(locationSlug, line.id), { state: lineDetailState });
      return;
    }
    navigate(rentalSearchByLineStationPath(locationSlug));
  };

  const toggleChecked = (id: string) => {
    setCheckedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  if (!line || !station) {
    return (
      <div className={`min-h-screen bg-[#faf8f5] py-12 ${HUB_CONTAINER}`}>
        <p className="text-sm text-gray-700">Station or line not found.</p>
        <button type="button" onClick={handleBack} className="mt-4 text-sm font-semibold text-sky-700 underline">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] pb-24 text-gray-900">
      <div className={`border-b border-gray-200 bg-white py-2.5 ${HUB_CONTAINER}`}>
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 transition hover:text-sky-950"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to station selection
        </button>
      </div>

      <div className={`mt-4 ${HUB_CONTAINER}`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <main className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start gap-4 border-b border-gray-200 bg-white px-4 py-4 sm:px-5">
              <span className="text-4xl leading-none" role="img" aria-hidden>
                👋
              </span>
              <div className="min-w-0 flex-1">
                <h1 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
                  Rental listings (apartments & mansions) at{' '}
                  <span style={{ color: CRIMSON }}>{titleStationLabel}</span> Station
                </h1>
                <p className="mt-1 text-xs text-gray-600">
                  {line.name} · {prefectureName}
                  {selectedStations.length > 1
                    ? ` · ${selectedStations.length} stations selected`
                    : null}
                </p>
              </div>
            </div>

            <div className="grid gap-3 bg-white px-4 py-4 sm:grid-cols-2 sm:px-5">
              <button
                type="button"
                onClick={() =>
                  navigate(rentalLineDetailPath(locationSlug, line.id), { state: lineDetailState })
                }
                className="flex items-center justify-center gap-2 border-2 bg-white px-3 py-3 text-sm font-bold transition hover:bg-[#fff5f6]"
                style={{ borderColor: PINK_BORDER, color: CRIMSON }}
              >
                <Train className="h-5 w-5 shrink-0" strokeWidth={2} />
                Change line / station
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
              <button
                type="button"
                onClick={() =>
                  navigate(rentalLineDetailPath(locationSlug, line.id), {
                    state: { ...lineDetailState, focusStep: 2 },
                  })
                }
                className="flex items-center justify-center gap-2 border-2 bg-white px-3 py-3 text-sm font-bold transition hover:bg-[#fff5f6]"
                style={{ borderColor: PINK_BORDER, color: CRIMSON }}
              >
                <Search className="h-5 w-5 shrink-0" strokeWidth={2} />
                Refine conditions
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
            </div>

            <div className="border-t border-gray-200 bg-white px-4 py-4 sm:px-5">
              <p className="text-sm font-bold text-gray-800">
                Narrow down floor plans by number of occupants
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {OCCUPANCY_FILTER_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setOccupancy(occupancy === opt.id ? null : opt.id)}
                    className="border px-4 py-2 text-xs font-bold transition sm:text-sm"
                    style={{
                      borderColor: PINK_BORDER,
                      backgroundColor: occupancy === opt.id ? '#fff0f2' : 'white',
                      color: occupancy === opt.id ? CRIMSON : '#374151',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-white px-4 py-3 sm:px-5">
              <button
                type="button"
                onClick={() => setShowMoreCriteria((v) => !v)}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-800"
              >
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: CRIMSON }}
                >
                  <Plus className={`h-4 w-4 transition ${showMoreCriteria ? 'rotate-45' : ''}`} />
                </span>
                Add more search criteria
              </button>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 border border-gray-300 bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 sm:text-xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  Save these conditions
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 border border-gray-300 bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 sm:text-xs"
                >
                  <Mail className="h-3.5 w-3.5" />
                  New listing alerts
                </button>
              </div>
            </div>

            {showMoreCriteria ? (
              <div className="border-t border-gray-200 bg-[#fffaf9] px-4 py-3 text-xs text-gray-600 sm:px-5">
                Additional filters from your previous search are applied. Use &quot;Refine
                conditions&quot; to change rent, layout, and detailed preferences.
              </div>
            ) : null}

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 bg-white px-4 py-4 sm:px-5">
              <p className="text-2xl font-bold tabular-nums sm:text-3xl" style={{ color: CRIMSON }}>
                {formatListingCount(totalCount)}
                <span className="ml-1 text-base font-bold text-gray-800 sm:text-lg">results</span>
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  Display
                  <select
                    value={displayCount}
                    onChange={(e) => setDisplayCount(e.target.value)}
                    className="border border-gray-300 bg-white px-2 py-1 text-xs"
                  >
                    {DISPLAY_COUNT_OPTIONS.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-500">items</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  Sort
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 bg-white px-2 py-1 text-xs"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.value || 'default'} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <SeahomeRentalListingTable
              className="mt-1 overflow-x-auto border-t border-gray-200"
              listings={listings}
              checkedIds={checkedIds}
              onToggle={toggleChecked}
              getDetailHref={(listingId) =>
                rentalPropertyDetailPath(locationSlug, lineSlug, stationSlug, listingId)
              }
            />
          </main>

          <aside className="hidden w-56 shrink-0 space-y-3 lg:block xl:w-64">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-40 flex-col items-center justify-center border border-gray-200 bg-white p-3 text-center text-[10px] text-gray-500 shadow-sm"
              >
                <span className="text-2xl">🏠</span>
                <span className="mt-2 font-semibold">Sponsored</span>
              </div>
            ))}
          </aside>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-300 bg-[#e8e4dc] shadow-lg">
        <div
          className={`flex flex-col items-stretch gap-3 py-3 sm:flex-row sm:items-center sm:justify-between ${HUB_CONTAINER}`}
        >
          <p className="text-center text-xs font-bold text-gray-700 sm:text-left sm:text-sm">
            For checked properties
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            <button
              type="button"
              disabled={checkedIds.length === 0}
              className="inline-flex items-center gap-2 border border-gray-400 bg-white px-5 py-2 text-sm font-bold text-gray-800 disabled:opacity-50"
            >
              <MessageCircle className="h-4 w-4" />
              Inquiry
            </button>
            <button
              type="button"
              disabled={checkedIds.length === 0}
              className="inline-flex items-center gap-2 border border-gray-400 bg-white px-5 py-2 text-sm font-bold text-gray-800 disabled:opacity-50"
            >
              <Heart className="h-4 w-4" />
              Add to favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalStationResultsPage;
