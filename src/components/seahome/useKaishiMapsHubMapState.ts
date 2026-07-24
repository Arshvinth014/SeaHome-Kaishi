import { useCallback, useEffect, useMemo, useState } from 'react';
import { buildKaishiMapsHubRailStations } from './seahomeKaishiMapsHubData';
import {
  KAISHI_MAPS_CATEGORIES,
  KAISHI_MAPS_DEFAULT_CENTER,
  KAISHI_MAPS_DEFAULT_ZOOM,
  type KaishiMapsCategoryId,
} from './kaishiMapsCategories';
import { buildFallbackNearbyPois } from './seahomeRentalSurroundingsMapFallback';
import { fetchNearbyPois } from './seahomeRentalSurroundingsMapService';
import type { SurroundingsPoi, SurroundingsPoiCategory } from './seahomeRentalSurroundingsMapData';

const POI_FETCH_RADIUS_M = 3500;

export function useKaishiMapsHubMapState(
  initialMapMode: 'map' | 'satellite' = 'map',
  searchActive = false,
  initialCenter = KAISHI_MAPS_DEFAULT_CENTER,
  initialZoom = KAISHI_MAPS_DEFAULT_ZOOM
) {
  const railStations = useMemo(() => buildKaishiMapsHubRailStations(), []);

  const [mapMode, setMapMode] = useState<'map' | 'satellite'>(initialMapMode);
  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(initialZoom);
  const [activeCategories, setActiveCategories] = useState<Set<KaishiMapsCategoryId>>(new Set());
  const [pois, setPois] = useState<SurroundingsPoi[]>([]);
  const [poisLoading, setPoisLoading] = useState(false);
  const [flyKey, setFlyKey] = useState(0);

  const loadPois = useCallback((lat: number, lng: number) => {
    setPoisLoading(true);
    fetchNearbyPois(lat, lng, POI_FETCH_RADIUS_M)
      .then((results) => {
        setPois(results);
      })
      .catch(() => {
        setPois(buildFallbackNearbyPois(lat, lng));
      })
      .finally(() => {
        setPoisLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!searchActive) {
      setPois([]);
      setPoisLoading(false);
      return;
    }
    const timer = window.setTimeout(() => loadPois(center.lat, center.lng), 400);
    return () => window.clearTimeout(timer);
  }, [center.lat, center.lng, loadPois, searchActive]);

  const toggleCategory = (id: KaishiMapsCategoryId) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const clearCategoryFilters = useCallback(() => {
    setActiveCategories(new Set());
  }, []);

  const activePoiCategories = useMemo(() => {
    const set = new Set<SurroundingsPoiCategory>();
    KAISHI_MAPS_CATEGORIES.forEach((cat) => {
      if (!activeCategories.has(cat.id)) return;
      cat.poiCategories.forEach((p) => set.add(p));
    });
    return set;
  }, [activeCategories]);

  const showRailStations = !searchActive || activeCategories.has('transit');

  const visiblePois = useMemo(() => {
    if (!searchActive) return [];
    if (activeCategories.size === 0) return pois;
    return pois.filter((p) => activePoiCategories.has(p.category));
  }, [pois, activeCategories.size, activePoiCategories, searchActive]);

  const flyTo = useCallback((lat: number, lng: number, nextZoom = 14) => {
    setCenter({ lat, lng });
    setZoom(nextZoom);
    setFlyKey((k) => k + 1);
  }, []);

  return {
    railStations,
    mapMode,
    setMapMode,
    center,
    zoom,
    setCenter,
    setZoom,
    activeCategories,
    toggleCategory,
    clearCategoryFilters,
    visiblePois,
    showRailStations,
    poisLoading,
    flyKey,
    flyTo,
  };
}
