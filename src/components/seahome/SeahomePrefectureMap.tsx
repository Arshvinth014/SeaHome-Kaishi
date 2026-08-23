import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ZoomIn, ZoomOut, RotateCcw, MapPin, Layers, Search, Building2 } from 'lucide-react';
import type { CityInfo, PrefectureCityData } from './seahomePrefectureCityData';
import { createBaseLayerGroup } from './seahomeRentalMapTiles';

interface SeahomePrefectureMapProps {
  data: PrefectureCityData;
  selectedCitySlug?: string;
  onSelectCity: (city: CityInfo) => void;
}

function cityMarkerIcon(city: CityInfo, isSelected: boolean) {
  const bgClass = isSelected
    ? 'background: linear-gradient(135deg, #0284c7, #1d4ed8); color: #ffffff; border: 2px solid #ffffff; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.45);'
    : city.count > 0
    ? 'background: linear-gradient(135deg, #0369a1, #0284c7); color: #ffffff; border: 2px solid #ffffff; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.25);'
    : 'background: #ffffff; color: #334155; border: 1.5px solid #cbd5e1; box-shadow: 0 1px 4px rgba(0,0,0,0.15);';

  const badgeBg = isSelected
    ? 'background: #ffffff; color: #0284c7;'
    : city.count > 0
    ? 'background: rgba(255,255,255,0.25); color: #ffffff;'
    : 'background: #f1f5f9; color: #64748b;';

  const html = `
    <div style="display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:9999px;font-family:system-ui,-apple-system,sans-serif;font-size:11px;font-weight:700;white-space:nowrap;cursor:pointer;transition:transform 0.15s ease;${bgClass}">
      <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${isSelected ? '#38bdf8' : city.count > 0 ? '#38bdf8' : '#94a3b8'}"></span>
      <span>${city.name}</span>
      <span style="padding:1px 6px;border-radius:9999px;font-size:10px;font-weight:800;${badgeBg}">(${city.count})</span>
    </div>
  `;

  return L.divIcon({
    className: 'city-district-tag-marker',
    html,
    iconSize: [120, 28],
    iconAnchor: [60, 14],
  });
}

export const SeahomePrefectureMap: React.FC<SeahomePrefectureMapProps> = ({
  data,
  selectedCitySlug,
  onSelectCity,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const baseLayerRef = useRef<L.LayerGroup | null>(null);
  const cityMarkersLayerRef = useRef<L.LayerGroup | null>(null);

  const [mapMode, setMapMode] = useState<'map' | 'satellite'>('map');
  const [filterText, setFilterText] = useState('');
  const [hoveredCity, setHoveredCity] = useState<CityInfo | null>(null);

  const centerLat = data.centerLat || 37.5;
  const centerLng = data.centerLng || 139.0;
  const initialZoom = data.zoom || 9;

  // Initialize Leaflet Map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [centerLat, centerLng],
      zoom: initialZoom,
      scrollWheelZoom: true,
      zoomControl: false,
      minZoom: 5,
      maxZoom: 18,
    });

    const baseLayer = createBaseLayerGroup(mapMode);
    baseLayer.addTo(map);

    const cityLayer = L.layerGroup().addTo(map);

    mapRef.current = map;
    baseLayerRef.current = baseLayer;
    cityMarkersLayerRef.current = cityLayer;

    // Handle container resize
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      clearTimeout(timer);
      map.remove();
      mapRef.current = null;
      baseLayerRef.current = null;
      cityMarkersLayerRef.current = null;
    };
  }, []);

  // Update center when prefecture changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.setView([centerLat, centerLng], initialZoom, { animate: true });
  }, [data.prefectureSlug, centerLat, centerLng, initialZoom]);

  // Update base layer mode (Street map vs Satellite)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (baseLayerRef.current) {
      map.removeLayer(baseLayerRef.current);
    }
    const nextLayer = createBaseLayerGroup(mapMode);
    nextLayer.addTo(map);
    baseLayerRef.current = nextLayer;
  }, [mapMode]);

  // Update City & District Markers on map
  useEffect(() => {
    const map = mapRef.current;
    const layer = cityMarkersLayerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    const filteredCities = data.cities.filter((c) =>
      c.name.toLowerCase().includes(filterText.toLowerCase())
    );

    filteredCities.forEach((city) => {
      const isSelected = selectedCitySlug === city.slug;
      const marker = L.marker([city.lat, city.lng], {
        icon: cityMarkerIcon(city, isSelected),
        zIndexOffset: isSelected ? 1000 : city.count > 0 ? 500 : 100,
      });

      marker.on('click', () => {
        onSelectCity(city);
        map.flyTo([city.lat, city.lng], Math.max(map.getZoom(), 11), { duration: 0.8 });
      });

      marker.on('mouseover', () => {
        setHoveredCity(city);
      });

      marker.on('mouseout', () => {
        setHoveredCity(null);
      });

      marker.bindPopup(
        `<div style="font-family:sans-serif;padding:4px;text-align:center;">
          <strong style="font-size:13px;color:#0f172a;display:block;margin-bottom:2px;">${city.name}</strong>
          <span style="font-size:11px;color:#0284c7;font-weight:700;">${city.count} rental listings available</span>
        </div>`
      );

      marker.addTo(layer);
    });
  }, [data.cities, selectedCitySlug, filterText, onSelectCity]);

  const handleZoomIn = () => mapRef.current?.zoomIn();
  const handleZoomOut = () => mapRef.current?.zoomOut();
  const handleReset = () => {
    mapRef.current?.flyTo([centerLat, centerLng], initialZoom);
  };

  return (
    <div className="relative w-full rounded-2xl border-2 border-sky-200 bg-slate-900 shadow-xl overflow-hidden select-none">
      {/* 1. TOP FLOATING BADGE (Prefecture Info) */}
      <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-200 shadow-md flex items-center gap-3 max-w-[85%] sm:max-w-md">
        <div className="p-2 bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-xl shadow-xs shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-extrabold text-sky-950 truncate">
              {data.prefectureName} Prefecture ({data.japaneseName})
            </h3>
            <span className="px-2 py-0.5 text-[10px] font-black bg-sky-100 text-sky-800 rounded-full shrink-0">
              Real Map View
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium truncate">
            {data.cities.length} Cities & Districts • {data.totalListings} Total Properties
          </p>
        </div>
      </div>

      {/* 2. TOP RIGHT FLOATING CONTROLS */}
      <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-sky-200 shadow-md">
        <button
          type="button"
          onClick={handleZoomIn}
          title="Zoom in"
          className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          title="Zoom out"
          className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all cursor-pointer"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleReset}
          title="Reset map view"
          className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <div className="w-full h-px bg-slate-200 my-0.5" />
        <button
          type="button"
          onClick={() => setMapMode((m) => (m === 'map' ? 'satellite' : 'map'))}
          title={mapMode === 'map' ? 'Switch to Satellite Map' : 'Switch to Street Map'}
          className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
            mapMode === 'satellite'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
          }`}
        >
          <Layers className="w-4 h-4" />
        </button>
      </div>

      {/* 3. FILTER SEARCH BAR OVERLAY AT BOTTOM LEFT */}
      <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md p-2 rounded-xl border border-sky-200 shadow-md flex items-center gap-2 max-w-xs">
        <Search className="w-4 h-4 text-sky-600 shrink-0 ml-1" />
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter city or district tags..."
          className="w-full bg-transparent text-xs text-slate-900 placeholder-slate-400 font-medium outline-none"
        />
        {filterText && (
          <button
            type="button"
            onClick={() => setFilterText('')}
            className="text-xs font-bold text-slate-400 hover:text-slate-700 px-1"
          >
            ✕
          </button>
        )}
      </div>

      {/* 4. REAL LEAFLET MAP CANVAS */}
      <div
        ref={containerRef}
        className="w-full h-[460px] sm:h-[540px] z-10"
        aria-label="Real Leaflet Map"
      />

      {/* 5. HOVER TOOLTIP FLOATING PANEL */}
      {hoveredCity && (
        <div className="absolute bottom-4 right-4 z-20 bg-slate-900/90 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl text-xs font-medium shadow-xl border border-slate-700 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2">
          <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
          <div>
            <span className="block font-bold text-sky-300">{hoveredCity.name}</span>
            <span className="block text-[11px] text-slate-300">
              Click tag to view {hoveredCity.count} property listings
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeahomePrefectureMap;

