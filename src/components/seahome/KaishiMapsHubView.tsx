import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Banknote,
  Bus,
  Hotel,
  Landmark,
  Layers,
  MapPin,
  Menu,
  Mic,
  Navigation,
  Pill,
  Search,
  TreePine,
  Utensils,
} from 'lucide-react';
import KaishiMapsHubLeafletMap from './KaishiMapsHubLeafletMap';
import KaishiMapsPlacePanel from './KaishiMapsPlacePanel';
import KaishiMapsSidebar from './KaishiMapsSidebar';
import {
  KAISHI_MAPS_CATEGORIES,
  KAISHI_MAPS_DEFAULT_CENTER,
  KAISHI_MAPS_DEFAULT_ZOOM,
  type KaishiMapsCategoryId,
} from './kaishiMapsCategories';
import type { MapSearchSuggestion } from './kaishiMapsPlaceSearch';
import { useKaishiMapsHubMapState } from './useKaishiMapsHubMapState';
import { useKaishiMapsHubSearch } from './useKaishiMapsHubSearch';
import { useKaishiMapsPlaceDetails } from './useKaishiMapsPlaceDetails';
import { useUserGeolocation } from './useUserGeolocation';
import {
  parseRentalFullMapParams,
  rentalFullMapParamsToSuggestion,
} from './seahomeRentalFullMapParams';
import {
  buildKaishiMapsPlacePath,
  parseRentalListingFromDetailPath,
  resolveKaishiMapsPlaceFromPath,
} from './kaishiMapsPlaceId';
import { KAISHI_MAPS_PATH } from '../../utils/kaishiMapsRoutes';

const CATEGORY_ICONS: Record<KaishiMapsCategoryId, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  restaurants: Utensils,
  hotels: Hotel,
  'things-to-do': TreePine,
  museums: Landmark,
  transit: Bus,
  pharmacies: Pill,
  atms: Banknote,
};

const SHOW_SIDEBAR_KEY = 'kaishi-maps-show-sidebar';

const MAP_STATUS_TOAST_CLASS =
  'pointer-events-none absolute bottom-6 left-1/2 z-[1000] -translate-x-1/2 rounded-full bg-white/95 px-3 py-1 text-xs text-gray-600 shadow';

const MAP_ERROR_TOAST_CLASS =
  'pointer-events-none absolute bottom-6 left-1/2 z-[1000] max-w-sm -translate-x-1/2 rounded-lg bg-white/95 px-3 py-2 text-center text-xs text-gray-600 shadow';

function CategoryChip({
  label,
  active,
  onClick,
  icon: Icon,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium shadow-[0_1px_2px_rgba(60,64,67,0.28),0_1px_3px_1px_rgba(60,64,67,0.12)] transition ${
        active
          ? 'border-[#1a73e8] bg-[#e8f0fe] text-[#1967d2]'
          : 'border-transparent bg-white text-[#3c4043] hover:bg-[#f8f9fa]'
      }`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
      <span>{label}</span>
    </button>
  );
}

const KaishiMapsHubView: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const placeFromPath = resolveKaishiMapsPlaceFromPath(location.pathname);
  const legacyQueryParams = placeFromPath ? null : parseRentalFullMapParams(searchParams.toString());
  const propertyFocusParams = placeFromPath ?? legacyQueryParams;

  const modeFromQuery = searchParams.get('mode');
  const initialMapMode =
    propertyFocusParams?.mode ??
    (modeFromQuery === 'satellite' ? 'satellite' : modeFromQuery === 'map' ? 'map' : 'map');
  const propertyReturnPath =
    placeFromPath?.returnPath ?? legacyQueryParams?.returnPath;

  const [searchActive, setSearchActive] = useState(() => propertyFocusParams != null);
  const [selectedPlace, setSelectedPlace] = useState<MapSearchSuggestion | null>(() =>
    propertyFocusParams
      ? rentalFullMapParamsToSuggestion({
          ...propertyFocusParams,
          placeId: placeFromPath?.placeId,
        })
      : null
  );
  const hub = useKaishiMapsHubMapState(
    initialMapMode,
    searchActive,
    propertyFocusParams
      ? { lat: propertyFocusParams.lat, lng: propertyFocusParams.lng }
      : KAISHI_MAPS_DEFAULT_CENTER,
    propertyFocusParams ? 16 : KAISHI_MAPS_DEFAULT_ZOOM
  );
  const placeDetails = useKaishiMapsPlaceDetails(selectedPlace, hub.railStations);
  const [layersOpen, setLayersOpen] = useState(false);
  const [preferSidebar, setPreferSidebar] = useState(() => {
    try {
      return localStorage.getItem(SHOW_SIDEBAR_KEY) !== 'false';
    } catch {
      return true;
    }
  });
  const [sidebarOpen, setSidebarOpen] = useState(preferSidebar);
  const [mapLayoutRevision, setMapLayoutRevision] = useState(0);
  const viewDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapPanelRef = useRef<HTMLDivElement | null>(null);
  const autoCenteredOnUserRef = useRef(false);
  const propertyFocusAppliedRef = useRef(propertyFocusParams != null);
  const geo = useUserGeolocation({ enabled: true, watch: true });

  const bumpMapLayout = useCallback(() => {
    setMapLayoutRevision((n) => n + 1);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
    bumpMapLayout();
  }, [bumpMapLayout]);

  useLayoutEffect(() => {
    bumpMapLayout();
  }, [sidebarOpen, bumpMapLayout]);

  useEffect(() => {
    const panel = mapPanelRef.current;
    if (!panel || typeof ResizeObserver === 'undefined') return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const bump = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => bumpMapLayout(), 16);
    };
    const observer = new ResizeObserver(bump);
    observer.observe(panel);
    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [bumpMapLayout]);

  useEffect(() => {
    try {
      localStorage.setItem(SHOW_SIDEBAR_KEY, String(preferSidebar));
    } catch {
      /* ignore */
    }
    if (!preferSidebar) setSidebarOpen(false);
  }, [preferSidebar]);

  const applySearchSuggestion = useCallback(
    (suggestion: MapSearchSuggestion) => {
      hub.flyTo(suggestion.lat, suggestion.lng, suggestion.zoom ?? 14);
      setSearchActive(true);
      setSelectedPlace(suggestion);
      setSidebarOpen(false);
    },
    [hub]
  );

  const search = useKaishiMapsHubSearch({
    stations: hub.railStations,
    onSelect: applySearchSuggestion,
    initialQuery: propertyFocusParams?.title ?? '',
  });

  useEffect(() => {
    if (placeFromPath || !legacyQueryParams) return;
    const ctx = legacyQueryParams.returnPath
      ? parseRentalListingFromDetailPath(legacyQueryParams.returnPath)
      : null;
    if (!ctx) return;
    navigate(
      buildKaishiMapsPlacePath(ctx, legacyQueryParams.lat, legacyQueryParams.lng, {
        mode: legacyQueryParams.mode,
      }),
      { replace: true }
    );
  }, [placeFromPath, legacyQueryParams, navigate]);

  useEffect(() => {
    if (!propertyFocusParams || propertyFocusAppliedRef.current) return;
    propertyFocusAppliedRef.current = true;
    const suggestion = rentalFullMapParamsToSuggestion({
      ...propertyFocusParams,
      placeId: placeFromPath?.placeId,
    });
    hub.flyTo(suggestion.lat, suggestion.lng, suggestion.zoom ?? 16);
    setSearchActive(true);
    setSelectedPlace(suggestion);
    setSidebarOpen(false);
  }, [propertyFocusParams, placeFromPath?.placeId, hub]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    void search.resolveSearch();
  };

  const handleClearSearch = useCallback(() => {
    search.clearSearch();
    setSearchActive(false);
    setSelectedPlace(null);
    hub.clearCategoryFilters();
    hub.flyTo(KAISHI_MAPS_DEFAULT_CENTER.lat, KAISHI_MAPS_DEFAULT_CENTER.lng, KAISHI_MAPS_DEFAULT_ZOOM);
    navigate(KAISHI_MAPS_PATH, { replace: true });
  }, [search, hub, navigate]);

  const handleClosePlace = useCallback(() => {
    handleClearSearch();
  }, [handleClearSearch]);

  const handleDirections = useCallback(() => {
    if (!selectedPlace) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.lat},${selectedPlace.lng}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [selectedPlace]);

  const handleViewChange = useCallback(
    (nextCenter: { lat: number; lng: number }, nextZoom: number) => {
      if (viewDebounceRef.current) clearTimeout(viewDebounceRef.current);
      viewDebounceRef.current = setTimeout(() => {
        hub.setCenter(nextCenter);
        hub.setZoom(nextZoom);
      }, 300);
    },
    [hub]
  );

  const handleMyLocation = useCallback(() => {
    if (geo.location) {
      hub.flyTo(geo.location.lat, geo.location.lng, 15);
      return;
    }
    geo.requestLocation();
  }, [geo, hub]);

  useEffect(() => {
    if (!geo.location || searchActive || autoCenteredOnUserRef.current) return;
    autoCenteredOnUserRef.current = true;
    hub.flyTo(geo.location.lat, geo.location.lng, 14);
  }, [geo.location, searchActive, hub]);

  const showPlacePanel = selectedPlace != null;
  const showMenuSidebar = sidebarOpen && !showPlacePanel;
  const layoutSidebarKey = showPlacePanel ? 'place' : showMenuSidebar ? 'menu' : 'closed';

  return (
    <div className="kaishi-maps-shell fixed inset-0 z-[100] flex h-full w-full bg-[#e8e8e8]">
      <div
        className={`relative z-[1100] shrink-0 overflow-hidden transition-[width] duration-200 ease-out max-md:fixed max-md:inset-y-0 max-md:left-0 ${
          showMenuSidebar ? 'w-[min(100vw,17.5rem)]' : 'w-0'
        }`}
        onTransitionEnd={(e) => {
          if (e.propertyName === 'width') bumpMapLayout();
        }}
      >
        <div className="h-full w-[min(100vw,17.5rem)]">
          {showMenuSidebar ? (
            <KaishiMapsSidebar
              open
              showSidebar={preferSidebar}
              onShowSidebarChange={(value) => {
                setPreferSidebar(value);
                if (value) setSidebarOpen(true);
              }}
              onClose={closeSidebar}
              className="h-full w-full shadow-[2px_0_6px_rgba(0,0,0,.08)] max-md:shadow-xl"
            />
          ) : null}
        </div>
      </div>

      {showMenuSidebar ? (
        <button
          type="button"
          className="absolute inset-0 z-[1050] bg-black/25 md:hidden"
          aria-label="Close menu"
          onClick={closeSidebar}
        />
      ) : null}

      <div
        className={`relative z-[1100] shrink-0 overflow-hidden transition-[width] duration-200 ease-out max-md:fixed max-md:inset-y-0 max-md:left-0 ${
          showPlacePanel ? 'w-full max-w-[25.5rem] md:relative' : 'w-0'
        }`}
        onTransitionEnd={(e) => {
          if (e.propertyName === 'width') bumpMapLayout();
        }}
      >
        <div className="h-full w-full max-w-[25.5rem]">
          {showPlacePanel ? (
            <KaishiMapsPlacePanel
              details={placeDetails.details}
              loading={placeDetails.loading}
              query={search.query}
              onQueryChange={(value) => {
                search.setQuery(value);
                search.setOpen(true);
                search.setError(null);
              }}
              onSearchSubmit={handleSearch}
              onClose={handleClosePlace}
              onOpenMenu={() => setSidebarOpen(true)}
              onDirections={handleDirections}
              onNearby={() => hub.clearCategoryFilters()}
              backLink={
                propertyReturnPath
                  ? { href: propertyReturnPath, label: 'Back to property listing' }
                  : undefined
              }
              suggestionsOpen={search.open}
              suggestions={search.suggestions}
              suggestionsLoading={search.loading}
              searchError={search.error}
              onSelectSuggestion={(place) => search.applySuggestion(place)}
            />
          ) : null}
        </div>
      </div>

      {showPlacePanel ? (
        <button
          type="button"
          className="absolute inset-0 z-[1050] bg-black/25 md:hidden"
          aria-label="Close place details"
          onClick={handleClosePlace}
        />
      ) : null}

      <div
        ref={mapPanelRef}
        className="relative h-full min-h-0 min-w-0 flex-1 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <KaishiMapsHubLeafletMap
            center={hub.center}
            zoom={hub.zoom}
            flyKey={hub.flyKey}
            mapMode={hub.mapMode}
            pois={hub.visiblePois}
            railStations={hub.railStations}
            showRailStations={hub.showRailStations}
            userLocation={geo.location}
            selectedPlace={
              selectedPlace
                ? { lat: selectedPlace.lat, lng: selectedPlace.lng, label: selectedPlace.label }
                : null
            }
            onViewChange={handleViewChange}
            layoutKey={`${layoutSidebarKey}-${mapLayoutRevision}`}
          />
        </div>

      {!showPlacePanel ? (
      <div ref={search.searchRef} className="pointer-events-none absolute left-0 top-0 z-[1000] p-3">
        <div className="flex flex-col gap-2">
          <div className="pointer-events-auto flex max-w-xl items-center gap-2">
            {!showMenuSidebar ? (
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,.3)] hover:bg-gray-50"
                title="Open menu"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-[#5f6368]" strokeWidth={2} />
              </button>
            ) : null}
            <form
              onSubmit={handleSearch}
              className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 shadow-[0_1px_6px_rgba(0,0,0,.28)]"
            >
              <Search className="h-5 w-5 shrink-0 text-gray-500" strokeWidth={2} />
              <input
                type="search"
                value={search.query}
                onChange={(e) => {
                  const value = e.target.value;
                  search.setQuery(value);
                  search.setOpen(true);
                  search.setError(null);
                  if (!value.trim()) {
                    handleClearSearch();
                  }
                }}
                onFocus={() => search.setOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    search.setOpen(false);
                  }
                }}
                placeholder="Search cities, stations, or places"
                className="min-w-0 flex-1 border-0 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
                autoComplete="off"
                aria-expanded={search.open}
                aria-controls="kaishi-maps-search-suggestions"
              />
              <button
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Voice search"
              >
                <Mic className="h-5 w-5 text-gray-600" />
              </button>
              <button
                type="button"
                onClick={handleMyLocation}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white hover:bg-[#1765cc] ${
                  geo.hasLocation ? 'bg-[#1967d2]' : 'bg-[#1a73e8]'
                }`}
                title={geo.hasLocation ? 'Center on your location' : 'Show my location'}
                aria-label="My location"
              >
                <Navigation className="h-4 w-4" />
              </button>
            </form>
          </div>

          {search.open && search.trimmedQuery ? (
            <ul
              id="kaishi-maps-search-suggestions"
              className="pointer-events-auto max-h-72 max-w-xl overflow-y-auto rounded-lg bg-white py-1 shadow-[0_2px_8px_rgba(0,0,0,.25)]"
              role="listbox"
            >
              {search.loading && search.suggestions.length === 0 ? (
                <li className="px-4 py-2.5 text-sm text-gray-500">Searching…</li>
              ) : null}
              {search.suggestions.map((place) => (
                <li key={place.id} role="option">
                  <button
                    type="button"
                    className="flex w-full items-start gap-3 px-4 py-2.5 text-left text-sm text-gray-800 hover:bg-gray-100"
                    onClick={() => search.applySuggestion(place)}
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                    <span>
                      <span className="block font-medium">{place.label}</span>
                      {place.subtitle ? (
                        <span className="block text-xs text-gray-500">{place.subtitle}</span>
                      ) : null}
                    </span>
                  </button>
                </li>
              ))}
              {!search.loading && search.suggestions.length === 0 ? (
                <li className="px-4 py-2.5 text-sm text-gray-500">No places found</li>
              ) : null}
              {search.error ? (
                <li className="border-t border-gray-100 px-4 py-2 text-xs text-red-600">{search.error}</li>
              ) : null}
            </ul>
          ) : null}
        </div>
      </div>
      ) : null}

      {searchActive && !showPlacePanel ? (
        <div className="pointer-events-none absolute left-0 right-0 top-[4.25rem] z-[1000] flex justify-center px-3 md:top-3 md:px-[min(20rem,36vw)]">
          <div
            className="kaishi-maps-category-bar pointer-events-auto flex max-w-full justify-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] sm:max-w-3xl [&::-webkit-scrollbar]:hidden"
            role="toolbar"
            aria-label="Place categories"
          >
            {KAISHI_MAPS_CATEGORIES.map((cat) => (
              <CategoryChip
                key={cat.id}
                label={cat.label}
                icon={CATEGORY_ICONS[cat.id]}
                active={hub.activeCategories.has(cat.id)}
                onClick={() => hub.toggleCategory(cat.id)}
              />
            ))}
          </div>
        </div>
      ) : null}

      {/* Bottom-left: Layers */}
      <div className="pointer-events-none absolute bottom-6 left-3 z-[1000]">
        <div className="relative pointer-events-auto">
          <button
            type="button"
            onClick={() => setLayersOpen((o) => !o)}
            className="flex w-[4.5rem] flex-col overflow-hidden rounded-lg bg-white shadow-[0_1px_6px_rgba(0,0,0,.3)]"
          >
            <div
              className={`flex h-14 items-center justify-center bg-gradient-to-br ${
                hub.mapMode === 'satellite'
                  ? 'from-slate-600 to-slate-800'
                  : 'from-sky-100 to-emerald-100'
              }`}
            >
              <Layers className={`h-6 w-6 ${hub.mapMode === 'satellite' ? 'text-white' : 'text-gray-700'}`} />
            </div>
            <span className="py-1.5 text-center text-[11px] font-medium text-gray-800">Layers</span>
          </button>
          {layersOpen ? (
            <div className="absolute bottom-0 left-[5rem] flex gap-2">
              <button
                type="button"
                onClick={() => {
                  hub.setMapMode('map');
                  setLayersOpen(false);
                }}
                className={`flex w-20 flex-col overflow-hidden rounded-lg border-2 bg-white shadow-lg ${
                  hub.mapMode === 'map' ? 'border-[#1a73e8]' : 'border-transparent'
                }`}
              >
                <div className="h-14 bg-gradient-to-br from-sky-100 to-emerald-50" />
                <span className="py-1 text-center text-[10px] font-medium">Map</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  hub.setMapMode('satellite');
                  setLayersOpen(false);
                }}
                className={`flex w-20 flex-col overflow-hidden rounded-lg border-2 bg-white shadow-lg ${
                  hub.mapMode === 'satellite' ? 'border-[#1a73e8]' : 'border-transparent'
                }`}
              >
                <div className="h-14 bg-gradient-to-br from-slate-600 to-slate-900" />
                <span className="py-1 text-center text-[10px] font-medium">Satellite</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {geo.isLocating && !geo.hasLocation ? (
        <p className={MAP_STATUS_TOAST_CLASS}>Finding your location…</p>
      ) : null}

      {geo.status === 'denied' || geo.status === 'unavailable' || geo.status === 'error' ? (
        <p className={MAP_ERROR_TOAST_CLASS}>{geo.errorMessage}</p>
      ) : null}

      {searchActive && hub.poisLoading ? (
        <p className={MAP_STATUS_TOAST_CLASS}>Loading places…</p>
      ) : null}
      </div>
    </div>
  );
};

export default KaishiMapsHubView;
