import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Maximize2 } from 'lucide-react';
import SeahomeRentalPropertyLeafletMap from './SeahomeRentalPropertyLeafletMap';
import SeahomeRentalSurroundingsMapAside from './SeahomeRentalSurroundingsMapAside';
import type { PropertyTransportAccess } from './seahomeRentalPropertyDetailData';
import type { PropertySurroundingsMap } from './seahomeRentalSurroundingsMapData';
import { buildKaishiMapsPlacePath, type RentalListingMapContext } from './kaishiMapsPlaceId';
import { useRentalSurroundingsMapState } from './useRentalSurroundingsMapState';

const CRIMSON = '#b3002d';

type Props = {
  sectionTitle: string;
  mapConfig: PropertySurroundingsMap;
  nearStations?: PropertyTransportAccess[];
  /** Listing route — used for Google Maps–style `/map/place/ChIJ…/…/@lat,lng,16z` URLs */
  listingMapContext: RentalListingMapContext;
};

const SeahomeRentalPropertySurroundingsMapSection: React.FC<Props> = ({
  sectionTitle,
  mapConfig,
  nearStations = [],
  listingMapContext,
}) => {
  const navigate = useNavigate();

  const mapState = useRentalSurroundingsMapState(
    mapConfig.latitude,
    mapConfig.longitude,
    nearStations
  );

  const openFullMap = () => {
    navigate(
      buildKaishiMapsPlacePath(
        { ...listingMapContext, stationName: listingMapContext.stationName },
        mapConfig.latitude,
        mapConfig.longitude,
        { mode: mapState.mapMode }
      )
    );
  };

  return (
    <section id="area" className="mt-6 scroll-mt-24 border border-gray-300 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 px-3 py-2.5 sm:px-4">
        <h2 className="flex min-w-0 items-center gap-1.5 text-xs font-bold leading-snug text-gray-900 sm:text-sm">
          <MapPin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" style={{ color: CRIMSON }} strokeWidth={2.5} />
          <span className="truncate">{sectionTitle}</span>
        </h2>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-1 border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 sm:text-xs"
        >
          <Heart className="h-3.5 w-3.5" strokeWidth={2} />
          Add to favorites
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(11rem,13.5rem)]">
        <div className="relative border-b border-gray-200 lg:border-b-0 lg:border-r">
          <div className="absolute right-2 top-2 z-[500] flex overflow-hidden rounded border border-gray-300 bg-white text-[11px] font-bold shadow-sm">
            <button
              type="button"
              onClick={() => mapState.setMapMode('map')}
              className={`px-2.5 py-1 ${mapState.mapMode === 'map' ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-500'}`}
            >
              Map
            </button>
            <button
              type="button"
              onClick={() => mapState.setMapMode('satellite')}
              className={`border-l border-gray-300 px-2.5 py-1 ${mapState.mapMode === 'satellite' ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-500'}`}
            >
              Satellite
            </button>
            <button
              type="button"
              onClick={openFullMap}
              className="inline-flex items-center gap-1 border-l border-gray-300 bg-[#fff8e6] px-2.5 py-1 text-[#8a6500] hover:bg-[#fff3d6]"
            >
              <Maximize2 className="h-3.5 w-3.5" strokeWidth={2.25} />
              Full map
            </button>
          </div>

          {mapState.loading ? (
            <div className="flex h-[min(420px,62vw)] items-center justify-center bg-[#eef3f0] text-sm text-gray-600 sm:h-[420px]">
              Loading nearby places…
            </div>
          ) : (
            <SeahomeRentalPropertyLeafletMap
              latitude={mapConfig.latitude}
              longitude={mapConfig.longitude}
              mapMode={mapState.mapMode}
              pois={mapState.pois}
              activeCategories={mapState.activeCategories}
              nearStations={mapState.stationMarkers}
            />
          )}

          {!mapState.loading && mapState.error ? (
            <p className="absolute bottom-2 left-2 right-2 z-[500] rounded bg-amber-50 px-2 py-1 text-[11px] text-amber-900 shadow">
              {mapState.error}. Map tiles still load; try refreshing in a moment.
            </p>
          ) : null}

          {!mapState.loading ? (
            <p className="absolute bottom-2 left-2 z-[500] rounded bg-white/90 px-2 py-0.5 text-[10px] text-gray-700 shadow">
              {mapState.visibleCount} places shown
              {mapState.usingFallback ? ' (sample data)' : ' (OpenStreetMap)'}
            </p>
          ) : null}
        </div>

        <aside className="bg-[#fafafa] p-3 sm:p-4">
          <SeahomeRentalSurroundingsMapAside
            nearStations={nearStations}
            pois={mapState.pois}
            activeCategories={mapState.activeCategories}
            onToggleCategory={mapState.toggleCategory}
          />
        </aside>
      </div>

      <p className="border-t border-gray-200 px-3 py-2 text-[10px] leading-relaxed text-gray-500 sm:px-4 sm:text-[11px]">
        Map © Esri (English labels). Nearby places are loaded from OpenStreetMap (Overpass API)
        within about 1 km of the listing. Names and locations may differ from actual conditions.
      </p>
    </section>
  );
};

export default SeahomeRentalPropertySurroundingsMapSection;
