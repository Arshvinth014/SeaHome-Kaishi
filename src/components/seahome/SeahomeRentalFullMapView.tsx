import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SeahomeRentalPropertyLeafletMap from './SeahomeRentalPropertyLeafletMap';
import SeahomeRentalSurroundingsMapAside from './SeahomeRentalSurroundingsMapAside';
import type { PropertyTransportAccess } from './seahomeRentalPropertyDetailData';
import type { SurroundingsPoi, SurroundingsPoiCategory } from './seahomeRentalSurroundingsMapData';
import type { NearStationMarker } from './seahomeRentalSurroundingsMapStations';

const CRIMSON = '#b3002d';

type Props = {
  title: string;
  returnPath?: string;
  /** True when opened at `/map` without property query params (mega menu hub). */
  isHubView?: boolean;
  latitude: number;
  longitude: number;
  mapMode: 'map' | 'satellite';
  onMapModeChange: (mode: 'map' | 'satellite') => void;
  pois: SurroundingsPoi[];
  activeCategories: Set<SurroundingsPoiCategory>;
  onToggleCategory: (id: SurroundingsPoiCategory) => void;
  nearStations: PropertyTransportAccess[];
  stationMarkers: NearStationMarker[];
  loading: boolean;
  visibleCount: number;
  usingFallback: boolean;
  error: string | null;
  compact?: boolean;
};

const SeahomeRentalFullMapView: React.FC<Props> = ({
  title,
  returnPath,
  isHubView = false,
  latitude,
  longitude,
  mapMode,
  onMapModeChange,
  pois,
  activeCategories,
  onToggleCategory,
  nearStations,
  stationMarkers,
  loading,
  visibleCount,
  usingFallback,
  error,
  compact = false,
}) => {
  const mapHeightClass = compact
    ? 'h-[min(420px,62vw)] sm:h-[420px]'
    : 'h-[min(58vh,520px)] min-h-[360px] lg:min-h-[calc(100vh-11rem)]';

  return (
    <div className={compact ? '' : 'flex min-h-[calc(100vh-4rem)] flex-col bg-white'}>
      {!compact ? (
        <header
          className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-4 py-3"
          style={{ borderTopColor: CRIMSON, borderTopWidth: 3 }}
        >
          {returnPath ? (
            <Link
              to={returnPath}
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-800 hover:underline sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to property
            </Link>
          ) : isHubView ? (
            <Link
              to="/seahome-real-estates/rental"
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-800 hover:underline sm:text-sm"
            >
              Browse rental listings
            </Link>
          ) : (
            <span className="text-xs text-gray-500 sm:text-sm">Property surroundings map</span>
          )}
          <h1 className="min-w-0 flex-1 text-right text-sm font-bold text-gray-900 sm:text-base">{title}</h1>
        </header>
      ) : null}

      <div className={`grid flex-1 grid-cols-1 ${compact ? '' : 'lg:grid-cols-[1fr_minmax(12rem,16rem)]'}`}>
        <div className={`relative ${compact ? '' : 'border-b border-gray-200 lg:border-b-0 lg:border-r'}`}>
          <div className="absolute right-2 top-2 z-[500] flex overflow-hidden rounded border border-gray-300 bg-white text-[11px] font-bold shadow-sm">
            <button
              type="button"
              onClick={() => onMapModeChange('map')}
              className={`px-2.5 py-1 ${mapMode === 'map' ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-500'}`}
            >
              Map
            </button>
            <button
              type="button"
              onClick={() => onMapModeChange('satellite')}
              className={`border-l border-gray-300 px-2.5 py-1 ${mapMode === 'satellite' ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-500'}`}
            >
              Satellite
            </button>
          </div>

          {loading ? (
            <div
              className={`flex items-center justify-center bg-[#eef3f0] text-sm text-gray-600 ${mapHeightClass} w-full`}
            >
              Loading nearby places…
            </div>
          ) : (
            <SeahomeRentalPropertyLeafletMap
              latitude={latitude}
              longitude={longitude}
              mapMode={mapMode}
              pois={pois}
              activeCategories={activeCategories}
              nearStations={stationMarkers}
              className={`w-full ${mapHeightClass}`}
              layoutRefreshKey={1}
            />
          )}

          {!loading && error ? (
            <p className="absolute bottom-2 left-2 right-2 z-[500] rounded bg-amber-50 px-2 py-1 text-[11px] text-amber-900 shadow">
              {error}. Map tiles still load; try refreshing in a moment.
            </p>
          ) : null}

          {!loading ? (
            <p className="absolute bottom-2 left-2 z-[500] rounded bg-white/90 px-2 py-0.5 text-[10px] text-gray-700 shadow">
              {visibleCount} places shown
              {usingFallback ? ' (sample data)' : ' (OpenStreetMap)'}
            </p>
          ) : null}
        </div>

        <aside className={`bg-[#fafafa] p-3 sm:p-4 ${compact ? '' : 'lg:overflow-y-auto'}`}>
          <SeahomeRentalSurroundingsMapAside
            nearStations={nearStations}
            pois={pois}
            activeCategories={activeCategories}
            onToggleCategory={onToggleCategory}
            listMaxHeightClass={
              compact ? 'max-h-[280px] sm:max-h-[320px]' : 'max-h-[min(32vh,280px)] lg:max-h-none'
            }
          />
        </aside>
      </div>

      {!compact ? (
        <p className="border-t border-gray-200 px-4 py-2 text-[10px] leading-relaxed text-gray-500 sm:text-[11px]">
          Map © Esri (English labels). Nearby places are loaded from OpenStreetMap (Overpass API) within about 1
          km of the listing.
        </p>
      ) : null}
    </div>
  );
};

export default SeahomeRentalFullMapView;
