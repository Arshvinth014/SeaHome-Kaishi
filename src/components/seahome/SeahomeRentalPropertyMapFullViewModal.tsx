import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import SeahomeRentalPropertyLeafletMap from './SeahomeRentalPropertyLeafletMap';
import SeahomeRentalSurroundingsMapAside from './SeahomeRentalSurroundingsMapAside';
import type { PropertyTransportAccess } from './seahomeRentalPropertyDetailData';
import type { PropertySurroundingsMap, SurroundingsPoi, SurroundingsPoiCategory } from './seahomeRentalSurroundingsMapData';
import type { NearStationMarker } from './seahomeRentalSurroundingsMapStations';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  mapConfig: PropertySurroundingsMap;
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
};

const SeahomeRentalPropertyMapFullViewModal: React.FC<Props> = ({
  open,
  onClose,
  title,
  mapConfig,
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
}) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/55 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="full-map-dialog-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden border border-gray-300 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
          <h2 id="full-map-dialog-title" className="min-w-0 truncate text-sm font-bold text-gray-900 sm:text-base">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            aria-label="Close full map"
          >
            <X className="h-4 w-4" strokeWidth={2.25} />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_minmax(12rem,14rem)]">
          <div className="relative min-h-[min(58vh,520px)] border-b border-gray-200 lg:min-h-[min(70vh,640px)] lg:border-b-0 lg:border-r">
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
              <div className="flex h-full min-h-[min(58vh,520px)] items-center justify-center bg-[#eef3f0] text-sm text-gray-600">
                Loading nearby places…
              </div>
            ) : (
              <SeahomeRentalPropertyLeafletMap
                latitude={mapConfig.latitude}
                longitude={mapConfig.longitude}
                mapMode={mapMode}
                pois={pois}
                activeCategories={activeCategories}
                nearStations={stationMarkers}
                className="h-full min-h-[min(58vh,520px)] lg:min-h-[min(70vh,640px)]"
                layoutRefreshKey={open ? 1 : 0}
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

          <aside className="max-h-[40vh] overflow-y-auto bg-[#fafafa] p-3 sm:max-h-none sm:p-4 lg:overflow-visible">
            <SeahomeRentalSurroundingsMapAside
              nearStations={nearStations}
              pois={pois}
              activeCategories={activeCategories}
              onToggleCategory={onToggleCategory}
              listMaxHeightClass="max-h-[min(32vh,280px)] lg:max-h-[min(58vh,520px)]"
            />
          </aside>
        </div>

        <p className="border-t border-gray-200 px-4 py-2 text-[10px] leading-relaxed text-gray-500 sm:text-[11px]">
          Map © Esri (English labels). Nearby places are loaded from OpenStreetMap (Overpass API) within about 1
          km of the listing.
        </p>
      </div>
    </div>
  );
};

export default SeahomeRentalPropertyMapFullViewModal;
