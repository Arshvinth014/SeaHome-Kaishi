import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { KaishiMapsRailStation } from './seahomeKaishiMapsHubData';
import { createBaseLayerGroup } from './seahomeRentalMapTiles';
import {
  SURROUNDINGS_POI_FILTERS,
  type SurroundingsPoi,
} from './seahomeRentalSurroundingsMapData';

type MapCenter = { lat: number; lng: number };

export type UserMapLocation = {
  lat: number;
  lng: number;
  accuracyM: number;
};

type Props = {
  center: MapCenter;
  zoom: number;
  /** Changes when search / fly-to runs so the map animates without pan feedback loops */
  flyKey?: number;
  mapMode: 'map' | 'satellite';
  pois: SurroundingsPoi[];
  railStations: KaishiMapsRailStation[];
  showRailStations: boolean;
  /** Device GPS position — shown as a blue dot when available */
  userLocation?: UserMapLocation | null;
  /** Highlighted search result */
  selectedPlace?: { lat: number; lng: number; label: string } | null;
  onViewChange?: (center: MapCenter, zoom: number) => void;
  /** Bumps when the map panel resizes (e.g. sidebar open/close) so Leaflet reflows tiles */
  layoutKey?: string | number;
  className?: string;
};

function poiColor(category: string): string {
  return SURROUNDINGS_POI_FILTERS.find((f) => f.id === category)?.color ?? '#5c9ded';
}

function poiMarkerIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `<span style="display:block;width:10px;height:10px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.35)"></span>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  });
}

function railStationMarkerIcon() {
  return L.divIcon({
    className: '',
    html: `<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#1a73e8;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.3);font-size:9px;font-weight:700;color:#fff">S</span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function userLocationMarkerIcon() {
  return L.divIcon({
    className: 'kaishi-maps-user-location-marker',
    html: `<span class="kaishi-maps-user-location-dot" aria-hidden="true"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function selectedPlaceMarkerIcon() {
  return L.divIcon({
    className: '',
    html: `<span style="display:block;width:26px;height:26px;border-radius:50% 50% 50% 4px;background:#ea4335;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35);transform:rotate(-45deg)"></span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** True when the map container is in the DOM and panes are ready */
function isMapUsable(map: L.Map | null): map is L.Map {
  if (!map) return false;
  try {
    const container = map.getContainer();
    if (!container?.isConnected) return false;
    const rect = container.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return false;
    const pane = (map as L.Map & { _mapPane?: HTMLElement })._mapPane;
    return Boolean(pane && pane.isConnected);
  } catch {
    return false;
  }
}

type ResizeOpts = {
  suppressMoveEndRef: React.MutableRefObject<boolean>;
  generation: number;
  isGenerationActive: (gen: number) => boolean;
};

function refreshLeafletSize(map: L.Map, opts: ResizeOpts): void {
  if (!opts.isGenerationActive(opts.generation) || !isMapUsable(map)) return;

  opts.suppressMoveEndRef.current = true;
  try {
    map.invalidateSize({ animate: false, pan: false });
  } catch {
    /* map mid-teardown or panes not ready */
  } finally {
    window.setTimeout(() => {
      opts.suppressMoveEndRef.current = false;
    }, 0);
  }
}

/** Leaflet often measures the container before flex layout finishes after sidebar toggle */
function scheduleLeafletResize(map: L.Map, opts: ResizeOpts): void {
  const { generation, isGenerationActive } = opts;
  const tick = () => {
    if (!isGenerationActive(generation)) return;
    refreshLeafletSize(map, opts);
  };

  tick();
  requestAnimationFrame(() => {
    tick();
    requestAnimationFrame(tick);
  });
  [50, 150, 300, 500].forEach((delay) => {
    window.setTimeout(tick, delay);
  });
}

const KaishiMapsHubLeafletMap: React.FC<Props> = ({
  center,
  zoom,
  flyKey = 0,
  mapMode,
  pois,
  railStations,
  showRailStations,
  userLocation,
  selectedPlace,
  onViewChange,
  layoutKey,
  className = 'h-full w-full',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const baseLayerRef = useRef<L.LayerGroup | null>(null);
  const poiLayerRef = useRef<L.LayerGroup | null>(null);
  const railLayerRef = useRef<L.LayerGroup | null>(null);
  const userLayerRef = useRef<L.LayerGroup | null>(null);
  const selectedLayerRef = useRef<L.LayerGroup | null>(null);
  const userAccuracyRef = useRef<L.Circle | null>(null);
  const suppressMoveEndRef = useRef(false);
  const resizeGenerationRef = useRef(0);
  const [mapReady, setMapReady] = useState(false);

  const isGenerationActive = useCallback(
    (gen: number) => gen === resizeGenerationRef.current,
    []
  );

  const getResizeOpts = useCallback((): ResizeOpts => {
    return {
      suppressMoveEndRef,
      generation: resizeGenerationRef.current,
      isGenerationActive,
    };
  }, [isGenerationActive]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [center.lat, center.lng],
      zoom,
      scrollWheelZoom: true,
      zoomControl: false,
      minZoom: 5,
      maxZoom: 19,
    });

    L.control
      .zoom({
        position: 'bottomright',
        zoomInText: '+',
        zoomOutText: '−',
        zoomInTitle: 'Zoom in',
        zoomOutTitle: 'Zoom out',
      })
      .addTo(map);

    const baseLayer = createBaseLayerGroup('map');
    baseLayer.addTo(map);

    mapRef.current = map;
    baseLayerRef.current = baseLayer;
    poiLayerRef.current = L.layerGroup().addTo(map);
    railLayerRef.current = L.layerGroup().addTo(map);
    userLayerRef.current = L.layerGroup().addTo(map);
    selectedLayerRef.current = L.layerGroup().addTo(map);
    setMapReady(true);

    const onMoveEnd = () => {
      if (suppressMoveEndRef.current || !isMapUsable(map)) return;
      try {
        const c = map.getCenter();
        onViewChange?.({ lat: c.lat, lng: c.lng }, map.getZoom());
      } catch {
        /* panes not ready during resize */
      }
    };
    map.on('moveend', onMoveEnd);

    scheduleLeafletResize(map, {
      suppressMoveEndRef,
      generation: resizeGenerationRef.current,
      isGenerationActive,
    });

    return () => {
      resizeGenerationRef.current += 1;
      map.off('moveend', onMoveEnd);
      map.remove();
      mapRef.current = null;
      baseLayerRef.current = null;
      poiLayerRef.current = null;
      railLayerRef.current = null;
      userLayerRef.current = null;
      selectedLayerRef.current = null;
      userAccuracyRef.current = null;
      setMapReady(false);
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || flyKey === 0) return;
    map.setView([center.lat, center.lng], zoom, { animate: true });
  }, [flyKey, center.lat, center.lng, zoom, mapReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    if (baseLayerRef.current) {
      map.removeLayer(baseLayerRef.current);
    }

    const nextLayer = createBaseLayerGroup(mapMode);
    nextLayer.addTo(map);
    baseLayerRef.current = nextLayer;
  }, [mapMode, mapReady]);

  useEffect(() => {
    if (!mapReady) return;
    const layer = poiLayerRef.current;
    if (!layer) return;

    layer.clearLayers();

    pois.forEach((poi) => {
      const marker = L.marker([poi.latitude, poi.longitude], {
        icon: poiMarkerIcon(poiColor(poi.category)),
      });
      marker.bindPopup(`<strong>${escapeHtml(poi.name)}</strong>`);
      marker.addTo(layer);
    });
  }, [pois, mapReady]);

  useEffect(() => {
    if (!mapReady) return;
    const layer = railLayerRef.current;
    if (!layer) return;

    layer.clearLayers();
    if (!showRailStations) return;

    railStations.forEach((station) => {
      const marker = L.marker([station.latitude, station.longitude], {
        icon: railStationMarkerIcon(),
      });
      marker.bindPopup(
        `<strong>${escapeHtml(station.name)} Station</strong><br/>${escapeHtml(station.line)}`
      );
      marker.addTo(layer);
    });
  }, [railStations, showRailStations, mapReady]);

  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    const layer = userLayerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();
    if (userAccuracyRef.current) {
      map.removeLayer(userAccuracyRef.current);
      userAccuracyRef.current = null;
    }

    if (!userLocation) return;

    const accuracy = L.circle([userLocation.lat, userLocation.lng], {
      radius: userLocation.accuracyM,
      color: '#1a73e8',
      fillColor: '#1a73e8',
      fillOpacity: 0.12,
      weight: 1,
      opacity: 0.35,
    });
    accuracy.addTo(map);
    userAccuracyRef.current = accuracy;

    const marker = L.marker([userLocation.lat, userLocation.lng], {
      icon: userLocationMarkerIcon(),
      zIndexOffset: 1000,
    });
    marker.bindPopup('<strong>Your location</strong>');
    marker.addTo(layer);
  }, [userLocation, mapReady]);

  useEffect(() => {
    if (!mapReady) return;
    const layer = selectedLayerRef.current;
    if (!layer) return;

    layer.clearLayers();
    if (!selectedPlace) return;

    const marker = L.marker([selectedPlace.lat, selectedPlace.lng], {
      icon: selectedPlaceMarkerIcon(),
      zIndexOffset: 900,
    });
    marker.bindPopup(`<strong>${escapeHtml(selectedPlace.label)}</strong>`);
    marker.addTo(layer);
  }, [selectedPlace, mapReady]);

  useLayoutEffect(() => {
    if (!mapReady || layoutKey === undefined) return;
    const map = mapRef.current;
    if (!map) return;
    resizeGenerationRef.current += 1;
    scheduleLeafletResize(map, getResizeOpts());
  }, [mapReady, layoutKey, getResizeOpts]);

  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    const el = containerRef.current;
    if (!map || !el) return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        refreshLeafletSize(map, getResizeOpts());
      }, 16);
    };

    const targets = [el, el.parentElement, el.parentElement?.parentElement].filter(
      (node): node is HTMLElement => node instanceof HTMLElement
    );

    const observer = new ResizeObserver(onResize);
    targets.forEach((target) => observer.observe(target));
    window.addEventListener('resize', onResize);

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [mapReady, className, getResizeOpts]);

  return (
    <div
      ref={containerRef}
      className={`kaishi-maps-google surroundings-leaflet-map h-full w-full ${className}`}
      aria-label="Map"
    />
  );
};


export default KaishiMapsHubLeafletMap;
