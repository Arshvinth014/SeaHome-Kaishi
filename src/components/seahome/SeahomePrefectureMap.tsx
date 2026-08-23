import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, MapPin, Building2 } from 'lucide-react';
import type { CityInfo, PrefectureCityData } from './seahomePrefectureCityData';

interface SeahomePrefectureMapProps {
  data: PrefectureCityData;
  selectedCitySlug?: string;
  onSelectCity: (city: CityInfo) => void;
}

export const SeahomePrefectureMap: React.FC<SeahomePrefectureMapProps> = ({
  data,
  selectedCitySlug,
  onSelectCity,
}) => {
  const [hoveredCity, setHoveredCity] = useState<CityInfo | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.25));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.85));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-sky-900/10 via-emerald-950/5 to-slate-900/10 border border-sky-200/80 shadow-inner overflow-hidden select-none">
      {/* MAP FLOATING CONTROLS */}
      <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-xl border border-sky-200 shadow-md">
        <button
          type="button"
          onClick={handleZoomIn}
          title="Zoom In"
          className="p-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          title="Zoom Out"
          className="p-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all cursor-pointer"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleResetZoom}
          title="Reset View"
          className="p-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* PREFECTURE TITLE BADGE OVERLAY ON MAP */}
      <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-sky-200 shadow-md flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <div>
          <h3 className="text-xs font-black text-slate-900 tracking-wide uppercase">
            {data.prefectureName} Prefecture ({data.japaneseName})
          </h3>
          <p className="text-[11px] text-slate-500 font-medium">
            {data.cities.length} Cities / Districts • {data.totalListings} Total Rentals
          </p>
        </div>
      </div>

      {/* MAIN VISUAL MAP CANVAS */}
      <div className="w-full h-[420px] sm:h-[500px] flex items-center justify-center p-4 overflow-hidden relative">
        <div
          className="w-full h-full relative transition-transform duration-300 ease-out flex items-center justify-center"
          style={{
            transform: `scale(${zoomLevel}) translate(${pan.x}px, ${pan.y}px)`,
          }}
        >
          {/* BACKGROUND PREFECTURE VECTOR GRAPHIC */}
          <svg
            viewBox={data.svgViewBox}
            className="w-full h-full max-h-[460px] filter drop-shadow-xl transition-all"
          >
            <defs>
              <linearGradient id="prefGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" /> {/* Emerald light */}
                <stop offset="50%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
              <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* OCEAN / COASTAL BACKGROUND BACKDROP */}
            <rect width="100%" height="100%" fill="url(#oceanGrad)" opacity="0.12" rx="16" />

            {/* PREFECTURE MAIN BASE POLYGON SHAPE */}
            <g filter="url(#mapShadow)">
              {/* Styling realistic prefecture silhouette matching Akita / Japanese prefecture aesthetic */}
              <path
                d="M 170 80 Q 210 60 270 70 Q 330 90 350 140 Q 380 200 360 270 Q 370 340 330 400 Q 310 460 280 500 Q 230 520 180 470 Q 150 420 140 360 Q 130 300 150 250 Q 120 210 140 160 Z"
                fill="url(#prefGrad)"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* COASTAL WATERS & BAY DETAILED CURVES */}
              <path
                d="M 140 250 Q 100 240 115 280 Q 135 310 150 290 Z"
                fill="#7dd3fc"
                stroke="#0284c7"
                strokeWidth="1.5"
                opacity="0.8"
              />
            </g>
          </svg>

          {/* INTERACTIVE CITY MAP NODES & BADGES OVERLAY */}
          {data.cities.map((city) => {
            const coords = city.coordinates || { x: 50, y: 50 };
            const isSelected = selectedCitySlug === city.slug;
            const isHovered = hoveredCity?.slug === city.slug;
            const hasListings = city.count > 0;

            return (
              <div
                key={city.slug}
                onClick={() => onSelectCity(city)}
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer transition-all duration-200 ${
                  isHovered || isSelected ? 'scale-110 z-30' : 'scale-100'
                }`}
              >
                {/* CITY LABEL & COUNT PILL */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-md border transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-400 ring-2 ring-sky-300 shadow-sky-600/30'
                      : isHovered
                      ? 'bg-white text-sky-900 border-sky-300 shadow-lg scale-105'
                      : hasListings
                      ? 'bg-white/95 text-slate-900 border-emerald-400 shadow-xs hover:border-sky-500'
                      : 'bg-white/80 text-slate-600 border-slate-200 opacity-90'
                  }`}
                >
                  <MapPin
                    className={`w-3 h-3 ${
                      isSelected ? 'text-white' : hasListings ? 'text-emerald-600' : 'text-slate-400'
                    }`}
                  />
                  <span>{city.name}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : hasListings
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    ({city.count})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER QUICK TOOLTIP WHEN HOVERING CITY */}
      {hoveredCity && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-slate-900/90 text-white backdrop-blur-md px-4 py-2 rounded-xl text-xs font-medium shadow-xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Building2 className="w-4 h-4 text-sky-400" />
          <span>
            Click to view <strong className="text-sky-300 font-bold">{hoveredCity.name}</strong> rental properties ({hoveredCity.count} available)
          </span>
        </div>
      )}
    </div>
  );
};

export default SeahomePrefectureMap;
