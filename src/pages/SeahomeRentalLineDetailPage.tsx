import React, { useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Search } from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  formatListingCount,
  rentalSearchByLineStationPath,
  rentalStationResultsPath,
} from '../components/seahome/seahomeRentalLineSearchData';
import SeahomeRentalLineDetailedFilterPanel from '../components/seahome/SeahomeRentalLineDetailedFilterPanel';
import SeahomeRentalLineFilterPanel from '../components/seahome/SeahomeRentalLineFilterPanel';
import SeahomeRentalLinePropertyCarousels from '../components/seahome/SeahomeRentalLinePropertyCarousels';
import {
  DEFAULT_LINE_SEARCH_FILTERS,
  findRailLine,
  stationsForLine,
  type LineSearchFilters,
  type RentalStation,
} from '../components/seahome/seahomeRentalLineStations';
import { RENTAL_REGIONS } from '../components/seahome/seahomeRentalData';

const CRIMSON = '#c80032';
const BEIGE = '#f5f0e6';
const INITIAL_STATION_VISIBLE = 18;

type LocationState = {
  prefectureSlug?: string;
  prefectureName?: string;
  citySlug?: string;
  cityName?: string;
} | null;

function prefectureNameFromSlug(slug: string): string {
  for (const region of RENTAL_REGIONS) {
    const p = region.prefectures.find((x) => x.slug === slug);
    if (p) return p.name;
  }
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}

function StepHeading({ step, title }: { step: number; title: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className="inline-flex h-6 min-w-[3.25rem] items-center justify-center px-1.5 text-[10px] font-black tracking-wide text-white sm:text-xs"
        style={{ backgroundColor: CRIMSON }}
      >
        STEP {step}
      </span>
      <h2 className="text-sm font-bold sm:text-base" style={{ color: CRIMSON }}>
        {title}
      </h2>
    </div>
  );
}

function MatchCounter({ count }: { count: number }) {
  const digits = String(count).padStart(6, '0').split('');
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <span className="text-xs font-bold text-[#5c4a3a] sm:text-sm">Matches</span>
      <div className="flex items-center gap-0.5">
        {digits.map((d, i) => (
          <span
            key={`${i}-${d}`}
            className="inline-flex h-9 w-7 items-center justify-center border border-gray-300 bg-white text-lg font-bold tabular-nums shadow-inner sm:h-10 sm:w-8"
            style={{ color: count > 0 ? CRIMSON : '#9ca3af' }}
          >
            {d}
          </span>
        ))}
      </div>
      <span className="text-xs font-bold text-[#5c4a3a] sm:text-sm">properties</span>
    </div>
  );
}

const SeahomeRentalLineDetailPage: React.FC = () => {
  const { locationSlug = '', lineSlug = '' } = useParams<{
    locationSlug: string;
    lineSlug: string;
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
  const citySlug = locationState?.citySlug ?? searchParams.get('city') ?? '';

  const line = useMemo(
    () => findRailLine(prefectureSlug, prefectureName, lineSlug),
    [prefectureSlug, prefectureName, lineSlug]
  );

  const stations = useMemo(
    () => (line ? stationsForLine(line.id, line.name) : []),
    [line]
  );

  const [showAllStations, setShowAllStations] = useState(false);
  const [selectedStationIds, setSelectedStationIds] = useState<string[]>([]);
  const [lineChecked, setLineChecked] = useState(false);
  const [filters, setFilters] = useState<LineSearchFilters>(DEFAULT_LINE_SEARCH_FILTERS);

  const visibleStations = showAllStations ? stations : stations.slice(0, INITIAL_STATION_VISIBLE);

  const matchCount = useMemo(() => {
    if (selectedStationIds.length === 0) return 0;
    return stations
      .filter((s) => selectedStationIds.includes(s.id))
      .reduce((sum, s) => sum + s.listingCount, 0);
  }, [selectedStationIds, stations]);

  const allSelected = stations.length > 0 && selectedStationIds.length === stations.length;

  const toggleStation = (id: string) => {
    setSelectedStationIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      setLineChecked(next.length === stations.length);
      return next;
    });
  };

  const toggleLineAll = () => {
    if (allSelected) {
      setSelectedStationIds([]);
      setLineChecked(false);
    } else {
      setSelectedStationIds(stations.map((s) => s.id));
      setLineChecked(true);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(
      rentalSearchByLineStationPath(locationSlug),
      {
        state: {
          prefectureSlug,
          prefectureName,
          citySlug: citySlug || undefined,
        },
      }
    );
  };

  const handleViewResults = () => {
    if (!line || selectedStationIds.length === 0) return;
    const primaryId = selectedStationIds[0];
    const primaryStation = stations.find((s) => s.id === primaryId);
    if (!primaryStation) return;

    navigate(rentalStationResultsPath(locationSlug, line.id, primaryStation.id), {
      state: {
        prefectureSlug,
        prefectureName,
        citySlug: citySlug || undefined,
        lineName: line.name,
        stationIds: selectedStationIds,
        filters,
      },
    });
  };

  const listingsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToListings = () => {
    listingsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openLineListings = () => {
    if (!line || stations.length === 0) return;
    const primary = stations[0];
    navigate(rentalStationResultsPath(locationSlug, line.id, primary.id), {
      state: {
        prefectureSlug,
        prefectureName,
        citySlug: citySlug || undefined,
        lineName: line.name,
        stationIds: [primary.id],
        filters,
      },
    });
  };

  if (!line) {
    return (
      <div className={`min-h-screen bg-[#faf8f5] py-12 ${HUB_CONTAINER}`}>
        <p className="text-sm text-gray-700">Line not found.</p>
        <button type="button" onClick={handleBack} className="mt-4 text-sm font-semibold text-sky-700 underline">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] pb-14 text-gray-900">
      <div className={`border-b border-gray-200 bg-white py-2.5 ${HUB_CONTAINER}`}>
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 transition hover:text-sky-950"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back
        </button>
      </div>

      <header className="py-4 text-white sm:py-5" style={{ backgroundColor: CRIMSON }}>
        <div className={HUB_CONTAINER}>
          <h1 className="text-center text-sm font-bold leading-relaxed sm:text-base">
            Search rentals on the {line.name}
            <span className="mt-1 block text-xs font-semibold text-white/90">
              {prefectureName} · apartments & mansions
            </span>
          </h1>
        </div>
      </header>

      <div className={`mt-4 text-xs leading-relaxed text-gray-700 sm:text-sm ${HUB_CONTAINER}`}>
        Select stations on this line, then set your budget and preferences. Listing counts are
        updated as you choose stations.
      </div>

      <div className={`mt-5 space-y-5 ${HUB_CONTAINER}`}>
        <section>
          <StepHeading step={1} title="Select stations" />
          <div
            className="mt-3 border border-[#d4cfc4] bg-white p-4 shadow-sm sm:p-5"
            style={{ backgroundColor: BEIGE }}
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#ddd5c8] pb-3">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={lineChecked || allSelected}
                  onChange={toggleLineAll}
                  className="h-4 w-4 accent-[#c80032]"
                />
                <span className="text-sm font-bold text-[#4a4038]">{line.name}</span>
              </label>
              <button
                type="button"
                onClick={toggleLineAll}
                className="text-xs font-semibold text-sky-700 underline decoration-sky-400/80"
              >
                Select all stations on {line.name}
              </button>
            </div>

            <ul className="grid gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {visibleStations.map((station: RentalStation) => (
                <li key={station.id} className="flex min-w-0 items-center gap-2">
                  <input
                    type="checkbox"
                    id={`st-${station.id}`}
                    checked={selectedStationIds.includes(station.id)}
                    onChange={() => toggleStation(station.id)}
                    className="h-4 w-4 shrink-0 accent-[#c80032]"
                  />
                  <label
                    htmlFor={`st-${station.id}`}
                    className="flex min-w-0 cursor-pointer items-baseline gap-1"
                  >
                    <span className="truncate text-sm font-medium text-sky-700 underline decoration-sky-400/70">
                      {station.name}
                    </span>
                    <span className="shrink-0 text-xs text-gray-600">
                      ({formatListingCount(station.listingCount)})
                    </span>
                  </label>
                </li>
              ))}
            </ul>

            {stations.length > INITIAL_STATION_VISIBLE ? (
              <div className="mt-3 text-right">
                <button
                  type="button"
                  onClick={() => setShowAllStations((v) => !v)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 underline sm:text-sm"
                >
                  {showAllStations ? 'Show fewer stations' : `Show all stations on ${line.name}`}
                  <ChevronDown
                    className={`h-4 w-4 transition ${showAllStations ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <div
          className="flex flex-col gap-4 border border-[#d4cfc4] bg-gradient-to-b from-[#f3efe8] to-[#ebe6dc] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <MatchCounter count={matchCount} />
          <button
            type="button"
            disabled={selectedStationIds.length === 0}
            onClick={handleViewResults}
            className="inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-bold text-white shadow-md transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:bg-gray-400"
            style={selectedStationIds.length > 0 ? { backgroundColor: CRIMSON } : undefined}
          >
            <Search className="h-5 w-5" strokeWidth={2.5} />
            View search results
          </button>
        </div>

        <section>
          <StepHeading step={2} title="Specify your preferred conditions" />
          <div className="mt-3">
            <SeahomeRentalLineFilterPanel filters={filters} onChange={setFilters} />
            <SeahomeRentalLineDetailedFilterPanel
              filters={filters}
              onChange={setFilters}
              onNext={scrollToListings}
            />
          </div>
        </section>

        <div ref={listingsSectionRef} className="scroll-mt-4">
          <SeahomeRentalLinePropertyCarousels
            lineName={line.name}
            onListingClick={openLineListings}
            className="pt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalLineDetailPage;
