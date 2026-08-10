import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  SURROUNDINGS_POI_FILTERS,
  type SurroundingsPoi,
  type SurroundingsPoiCategory,
} from './seahomeRentalSurroundingsMapData';
import type { NearStationMarker } from './seahomeRentalSurroundingsMapStations';
import { createBaseLayerGroup } from './seahomeRentalMapTiles';

const CRIMSON = '#b3002d';

type Props = {
  latitude: number;
  longitude: number;
  mapMode: 'map' | 'satellite';
  pois: SurroundingsPoi[];
  activeCategories: Set<SurroundingsPoiCategory>;
  nearStations?: NearStationMarker[];
  className?: string;
  layoutRefreshKey?: number;
};

function categoryColor(category: SurroundingsPoiCategory): string {
  return SURROUNDINGS_POI_FILTERS.find((f) => f.id === category)?.color ?? '#5c9ded';
}

function poiMarkerIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `<span style="display:block;width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

function propertyMarkerIcon() {
  return L.divIcon({
    className: '',
    html: `<span style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:${CRIMSON};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35);font-size:18px">⌂</span>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

function stationMarkerIcon() {
  return L.divIcon({
    className: '',
    html: `<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:3px;background:#1a5fb4;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35);font-size:11px;font-weight:700;color:#fff">S</span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function syncPoiMarkers(
  poiLayer: L.LayerGroup,
  pois: SurroundingsPoi[],
  activeCategories: Set<SurroundingsPoiCategory>
) {
  poiLayer.clearLayers();

  for (const poi of pois) {
    if (!activeCategories.has(poi.category)) continue;
    const marker = L.marker([poi.latitude, poi.longitude], {
      icon: poiMarkerIcon(categoryColor(poi.category)),
    });
    marker.bindPopup(`<strong>${poi.name}</strong>`);
    marker.addTo(poiLayer);
  }
}

const SeahomeRentalPropertyLeafletMap: React.FC<Props> = ({
  latitude,
  longitude,
  mapMode,
  pois,
  activeCategories,
  nearStations = [],
  className = 'h-[min(420px,62vw)] w-full sm:h-[420px]',
  layoutRefreshKey = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const baseLayerRef = useRef<L.LayerGroup | null>(null);
  const poiLayerRef = useRef<L.LayerGroup | null>(null);
  const stationLayerRef = useRef<L.LayerGroup | null>(null);
  const propertyMarkerRef = useRef<L.Marker | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [latitude, longitude],
      zoom: 15,
      scrollWheelZoom: true,
      zoomControl: false,
    });

    L.control
      .zoom({
        position: 'topleft',
        zoomInText: '+',
        zoomOutText: '−',
        zoomInTitle: 'Zoom in',
        zoomOutTitle: 'Zoom out',
      })
      .addTo(map);

    const baseLayer = createBaseLayerGroup('map');
    baseLayer.addTo(map);

    const poiLayer = L.layerGroup().addTo(map);
    const stationLayer = L.layerGroup().addTo(map);
    const propertyMarker = L.marker([latitude, longitude], {
      icon: propertyMarkerIcon(),
      zIndexOffset: 1000,
    })
      .addTo(map)
      .bindPopup('This property');

    mapRef.current = map;
    baseLayerRef.current = baseLayer;
    poiLayerRef.current = poiLayer;
    stationLayerRef.current = stationLayer;
    propertyMarkerRef.current = propertyMarker;
    setMapReady(true);

    return () => {
      map.remove();
      mapRef.current = null;
      baseLayerRef.current = null;
      poiLayerRef.current = null;
      stationLayerRef.current = null;
      propertyMarkerRef.current = null;
      setMapReady(false);
    };
  }, [latitude, longitude]);

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
    const poiLayer = poiLayerRef.current;
    if (!poiLayer) return;
    syncPoiMarkers(poiLayer, pois, activeCategories);
  }, [pois, activeCategories, mapReady]);

  useEffect(() => {
    if (!mapReady) return;
    const stationLayer = stationLayerRef.current;
    if (!stationLayer) return;

    stationLayer.clearLayers();

    for (const station of nearStations) {
      const marker = L.marker([station.latitude, station.longitude], {
        icon: stationMarkerIcon(),
      });
      marker.bindPopup(
        `<strong>${station.name}</strong><br/>${station.line}<br/>${station.walkMinutes} min walk`
      );
      marker.addTo(stationLayer);
    }
  }, [nearStations, mapReady]);

  useEffect(() => {
    const map = mapRef.current;
    const propertyMarker = propertyMarkerRef.current;
    if (!map || !propertyMarker || !mapReady) return;

    propertyMarker.setLatLng([latitude, longitude]);
    map.setView([latitude, longitude], map.getZoom(), { animate: false });
  }, [latitude, longitude, mapReady]);

  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;

    const timer = window.setTimeout(() => {
      map.invalidateSize();
    }, 120);

    return () => window.clearTimeout(timer);
  }, [layoutRefreshKey, mapReady, className]);

  return (
    <div
      ref={containerRef}
      className={`surroundings-leaflet-map w-full ${className}`}
      aria-label="Surroundings map"
    />
  );
};

export default SeahomeRentalPropertyLeafletMap;
