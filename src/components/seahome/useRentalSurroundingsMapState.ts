import { useEffect, useMemo, useState } from 'react';
import type { PropertyTransportAccess } from './seahomeRentalPropertyDetailData';
import { buildFallbackNearbyPois } from './seahomeRentalSurroundingsMapFallback';
import { fetchNearbyPois } from './seahomeRentalSurroundingsMapService';
import {
  SURROUNDINGS_POI_FILTERS,
  type SurroundingsPoi,
  type SurroundingsPoiCategory,
} from './seahomeRentalSurroundingsMapData';
import { buildNearStationMarkers } from './seahomeRentalSurroundingsMapStations';

export function useRentalSurroundingsMapState(
  latitude: number,
  longitude: number,
  nearStations: PropertyTransportAccess[] = [],
  initialMapMode: 'map' | 'satellite' = 'map'
) {
  const allCategoryIds = useMemo(
    () => new Set(SURROUNDINGS_POI_FILTERS.map((f) => f.id)),
    []
  );

  const [activeCategories, setActiveCategories] = useState<Set<SurroundingsPoiCategory>>(
    () => new Set(allCategoryIds)
  );
  const [mapMode, setMapMode] = useState<'map' | 'satellite'>(initialMapMode);
  const [pois, setPois] = useState<SurroundingsPoi[]>(() =>
    buildFallbackNearbyPois(latitude, longitude)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(true);

  const stationMarkers = useMemo(
    () => buildNearStationMarkers(latitude, longitude, nearStations),
    [latitude, longitude, nearStations]
  );

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchNearbyPois(latitude, longitude)
      .then((results) => {
        if (!cancelled) {
          const next =
            results.length > 0 ? results : buildFallbackNearbyPois(latitude, longitude);
          setPois(next);
          setUsingFallback(next.some((p) => p.id.startsWith('fallback-')));
          setError(null);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setPois(buildFallbackNearbyPois(latitude, longitude));
          setUsingFallback(true);
          setError(err instanceof Error ? err.message : 'Could not load nearby places');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [latitude, longitude]);

  const toggleCategory = (id: SurroundingsPoiCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const visibleCount = pois.filter((p) => activeCategories.has(p.category)).length;

  return {
    activeCategories,
    mapMode,
    setMapMode,
    pois,
    loading,
    error,
    usingFallback,
    stationMarkers,
    toggleCategory,
    visibleCount,
  };
}
