import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Search } from 'lucide-react';
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

const CRIMSON = '#c80032';
const BEIGE = '#f5f0e6';
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
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}

function titleCaseSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const SeahomeRentalLineStationSearchPage: React.FC = () => {
  const { locationSlug = '' } = useParams<{ locationSlug: string }>();
  const [searchParams] = useSearchParams();
  const locationState = useLocation().state as LocationState;
  const navigate = useNavigate();

  const prefectureSlug =
    locationState?.prefectureSlug ?? searchParams.get('prefecture') ?? locationSlug;
  const prefectureName =
    locationState?.prefectureName ??
    searchParams.get('prefectureName') ??
    prefectureNameFromSlug(prefectureSlug);
  const cityName =
    locationState?.cityName ?? searchParams.get('cityName') ?? titleCaseSlug(locationSlug);
  const citySlug = locationState?.citySlug ?? searchParams.get('city') ?? '';

  const areaLabel = citySlug && cityName ? `${cityName}, ${prefectureName}` : prefectureName;

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
    navigate(rentalLineDetailPath(locationSlug, line.id), {
      state: {
        prefectureSlug,
        prefectureName,
        citySlug: citySlug || undefined,
        cityName: citySlug ? cityName : undefined,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] pb-12 text-gray-900">
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

      <header className="px-0 py-4 text-center text-white sm:py-5" style={{ backgroundColor: CRIMSON }}>
        <p className={`text-sm font-bold leading-snug sm:text-base ${HUB_CONTAINER}`}>
          <span className="block sm:inline">{prefectureName} rentals</span>
          <span className="mx-1 hidden sm:inline">·</span>
          <span className="block sm:inline">apartments & mansions</span>
          <span className="mx-1 hidden sm:inline">—</span>
          <span className="block sm:inline">search by line & station</span>
          {citySlug ? (
            <span className="mt-1 block text-xs font-semibold text-white/90 sm:text-sm">
              ({areaLabel})
            </span>
          ) : null}
        </p>
      </header>

      <div className={HUB_CONTAINER}>
        <div className="mt-4 border-2 bg-white p-4 sm:p-5" style={{ borderColor: CRIMSON }}>
          <p className="text-sm font-bold text-[#4a4038] sm:text-base">
            Quick search — enter a station name
          </p>
          <form onSubmit={handleStationSearch} className="mt-3 flex gap-0">
            <input
              type="search"
              value={stationQuery}
              onChange={(e) => setStationQuery(e.target.value)}
              placeholder="Enter station name"
              className="min-w-0 flex-1 border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-[#c80032] focus:ring-1 focus:ring-[#c80032]/30"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center px-4 text-white transition hover:brightness-110"
              style={{ backgroundColor: CRIMSON }}
              aria-label="Search by station"
            >
              <Search className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </form>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#d4cfc4] pb-3">
          <div className="flex items-start gap-2">
            <span
              className="mt-0.5 inline-block h-5 w-1 shrink-0 rounded-sm"
              style={{ backgroundColor: CRIMSON }}
              aria-hidden
            />
            <p className="text-sm font-bold text-[#4a4038]">
              Select a line ({MAX_LINES} maximum)
              {selectedLineIds.length > 0 ? (
                <span className="ml-1 font-semibold text-[#c80032]">
                  — {selectedLineIds.length} selected
                </span>
              ) : null}
            </p>
          </div>
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 sm:text-sm"
          >
            <Search className="h-3.5 w-3.5 text-gray-500" aria-hidden />
            Change search method
            <ChevronDown className="h-3.5 w-3.5 text-gray-500" aria-hidden />
          </button>
        </div>

        {lineLimitHint ? (
          <p className="mt-2 text-sm font-semibold text-[#c80032]">
            You can select up to {MAX_LINES} lines. Deselect one to add another.
          </p>
        ) : null}

        <div className="mt-4 space-y-0 border border-[#e8e2d8] bg-white shadow-sm">
          {operators.map((operator) => (
            <section key={operator.id}>
              <div
                className="border-b border-[#e0d9ce] px-4 py-2.5"
                style={{ backgroundColor: BEIGE }}
              >
                <h2 className="text-sm font-bold text-[#5c4a3a] sm:text-base">{operator.name}</h2>
              </div>
              <ul
                className={`grid gap-x-4 gap-y-2 border-b border-[#eee8de] px-4 py-3 ${
                  operator.lines.length > 4 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-1'
                }`}
              >
                {operator.lines.map((line) => {
                  const checked = selectedLineIds.includes(line.id);
                  return (
                    <li key={line.id} className="flex min-w-0 items-center gap-2 py-0.5">
                      <input
                        type="checkbox"
                        id={`line-${line.id}`}
                        checked={checked}
                        onChange={() => toggleLine(line)}
                        className="h-4 w-4 shrink-0 accent-[#c80032]"
                      />
                      <div className="flex min-w-0 flex-1 items-baseline gap-1">
                        <button
                          type="button"
                          onClick={() => handleLineClick(line)}
                          className="truncate text-left text-sm font-medium text-sky-700 underline decoration-sky-400/80 underline-offset-2 hover:text-sky-900"
                        >
                          {line.name}
                        </button>
                        <span className="shrink-0 text-xs text-gray-600">
                          ({formatListingCount(line.listingCount)})
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {selectedLineIds.length > 0 ? (
          <div className="mt-6 flex justify-center">
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
              className="rounded-lg px-8 py-3 text-sm font-bold text-white shadow-md transition hover:brightness-110 sm:text-base"
              style={{ backgroundColor: CRIMSON }}
            >
              View listings on selected lines ({selectedLineIds.length})
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SeahomeRentalLineStationSearchPage;
