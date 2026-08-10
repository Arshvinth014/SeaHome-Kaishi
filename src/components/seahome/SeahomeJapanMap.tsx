import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { JAPAN_MAP_PREFECTURES } from './seahomeJapanMapPaths';

export type JapanMapSelection = {
  prefectureSlug: string;
  prefectureName: string;
  city?: { name: string; slug: string };
};

const MAP_W = 480;
const MAP_H = 520;
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

function clampZoom(z: number): number {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(z * 100) / 100));
}

function clampPan(panX: number, panY: number, zoom: number): { x: number; y: number } {
  const vw = MAP_W / zoom;
  const vh = MAP_H / zoom;
  const maxX = Math.max(0, (MAP_W - vw) / 2);
  const maxY = Math.max(0, (MAP_H - vh) / 2);
  return {
    x: Math.max(-maxX, Math.min(maxX, panX)),
    y: Math.max(-maxY, Math.min(maxY, panY)),
  };
}

function viewBoxFrom(zoom: number, panX: number, panY: number): string {
  const vw = MAP_W / zoom;
  const vh = MAP_H / zoom;
  const x = MAP_W / 2 - vw / 2 + panX;
  const y = MAP_H / 2 - vh / 2 + panY;
  return `${x} ${y} ${vw} ${vh}`;
}

type DragState = {
  pointerId: number;
  panStart: { x: number; y: number };
  clientStart: { x: number; y: number };
  moved: boolean;
};

type Props = {
  activeSlug: string | null;
  hoveredSlug: string | null;
  onPrefectureSelect: (slug: string, name: string) => void;
  onPrefectureHover: (slug: string | null) => void;
  className?: string;
};

const SeahomeJapanMap: React.FC<Props> = ({
  activeSlug,
  hoveredSlug,
  onPrefectureSelect,
  onPrefectureHover,
  className = '',
}) => {
  const titleId = useId();
  const glowId = useId().replace(/:/g, '');
  const viewportRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const didDragRef = useRef(false);
  const panRafRef = useRef(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const canPan = zoom > MIN_ZOOM + 0.01;

  const viewBox = useMemo(() => viewBoxFrom(zoom, pan.x, pan.y), [zoom, pan.x, pan.y]);

  const labelPref = useMemo(() => {
    const slug = hoveredSlug ?? activeSlug;
    return JAPAN_MAP_PREFECTURES.find((p) => p.slug === slug);
  }, [hoveredSlug, activeSlug]);

  const selectPrefecture = useCallback(
    (slug: string, name: string) => {
      onPrefectureSelect(slug, name);
    },
    [onPrefectureSelect]
  );

  const changeZoom = useCallback((delta: number) => {
    setZoom((z) => {
      const next = clampZoom(z + delta);
      setPan((p) => clampPan(p.x, p.y, next));
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const clientDeltaToPan = useCallback(
    (dx: number, dy: number, z: number) => {
      const svg = svgRef.current;
      if (!svg) return { x: 0, y: 0 };
      const rect = svg.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return { x: 0, y: 0 };
      const scaleX = MAP_W / z / rect.width;
      const scaleY = MAP_H / z / rect.height;
      return { x: dx * scaleX, y: dy * scaleY };
    },
    []
  );

  const schedulePan = useCallback(
    (next: { x: number; y: number }) => {
      if (panRafRef.current) cancelAnimationFrame(panRafRef.current);
      panRafRef.current = requestAnimationFrame(() => {
        panRafRef.current = 0;
        setPan(next);
      });
    },
    []
  );

  const endDrag = useCallback((pointerId: number) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== pointerId) return;
    if (drag.moved) didDragRef.current = true;
    dragRef.current = null;
    setIsDragging(false);
  }, []);

  const onViewportPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!canPan) return;
      if ((e.target as HTMLElement).closest('[data-map-zoom-controls]')) return;
      if (e.button !== 0) return;

      dragRef.current = {
        pointerId: e.pointerId,
        panStart: { ...pan },
        clientStart: { x: e.clientX, y: e.clientY },
        moved: false,
      };
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [canPan, pan]
  );

  const onViewportPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== e.pointerId) return;

      const dx = e.clientX - drag.clientStart.x;
      const dy = e.clientY - drag.clientStart.y;
      if (!drag.moved && Math.hypot(dx, dy) > 4) {
        drag.moved = true;
        onPrefectureHover(null);
      }
      if (!drag.moved) return;

      const delta = clientDeltaToPan(dx, dy, zoom);
      schedulePan(clampPan(drag.panStart.x - delta.x, drag.panStart.y - delta.y, zoom));
    },
    [clientDeltaToPan, onPrefectureHover, schedulePan, zoom]
  );

  const onViewportPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
      endDrag(e.pointerId);
    },
    [endDrag]
  );

  const onPrefectureClick = useCallback(
    (slug: string, name: string) => {
      if (didDragRef.current) {
        didDragRef.current = false;
        return;
      }
      selectPrefecture(slug, name);
    },
    [selectPrefecture]
  );

  useEffect(() => {
    return () => {
      if (panRafRef.current) cancelAnimationFrame(panRafRef.current);
    };
  }, []);

  useEffect(() => {
    if (activeSlug) {
      document.getElementById('rental-city-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeSlug]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      changeZoom(delta);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [changeZoom]);

  const zoomIn = () => changeZoom(ZOOM_STEP);
  const zoomOut = () => changeZoom(-ZOOM_STEP);
  const canZoomIn = zoom < MAX_ZOOM - 0.01;
  const canZoomOut = zoom > MIN_ZOOM + 0.01;

  return (
    <div className={`min-w-0 ${className}`}>
      <div className="relative rounded-xl border border-sky-200/90 bg-gradient-to-b from-sky-50/80 to-white p-2 shadow-inner sm:p-3">
        <p
          className="pointer-events-none absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-sky-800 shadow-sm sm:text-xs"
          aria-live="polite"
        >
          {labelPref?.name ?? 'Click a prefecture on the map or list'}
        </p>

        <div
          ref={viewportRef}
          className={`relative overflow-hidden rounded-lg select-none ${
            canPan ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : ''
          }`}
          style={canPan ? { touchAction: 'none' } : undefined}
          aria-label="Japan map viewport — scroll to zoom, drag to pan when zoomed in"
          onPointerDown={onViewportPointerDown}
          onPointerMove={onViewportPointerMove}
          onPointerUp={onViewportPointerUp}
          onPointerCancel={onViewportPointerUp}
          onPointerLeave={onViewportPointerUp}
        >
          <svg
            ref={svgRef}
            viewBox={viewBox}
            className="mx-auto block h-auto w-full max-h-[min(72vh,620px)] min-h-[340px] max-w-full"
            role="img"
            aria-labelledby={titleId}
            preserveAspectRatio="xMidYMid meet"
          >
            <title id={titleId}>Interactive map of Japan — select a prefecture</title>
            <defs>
              <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#0ea5e9" floodOpacity="0.85" />
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#38bdf8" floodOpacity="0.45" />
              </filter>
            </defs>
            {JAPAN_MAP_PREFECTURES.map((pref) => {
              const isSelected = activeSlug === pref.slug;
              const isHovered = hoveredSlug === pref.slug;
              const isHighlight = isHovered && !isSelected;
              return (
                <path
                  key={pref.slug}
                  d={pref.path}
                  className={`transition-[fill,stroke,filter] duration-200 ${
                    isDragging ? 'pointer-events-none' : 'cursor-pointer'
                  }`}
                  fill={isSelected ? '#0284c7' : isHighlight ? '#38bdf8' : '#bae6fd'}
                  stroke={isSelected ? '#0c4a6e' : isHighlight ? '#0369a1' : '#ffffff'}
                  strokeWidth={isSelected ? 1.2 : isHighlight ? 1.1 : 0.65}
                  filter={isHighlight ? `url(#${glowId})` : undefined}
                  onMouseEnter={() => onPrefectureHover(pref.slug)}
                  onMouseLeave={() => onPrefectureHover(null)}
                  onFocus={() => onPrefectureHover(pref.slug)}
                  onBlur={() => onPrefectureHover(null)}
                  onClick={() => onPrefectureClick(pref.slug, pref.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onPrefectureClick(pref.slug, pref.name);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${pref.name} prefecture`}
                  aria-pressed={isSelected}
                />
              );
            })}
          </svg>

          <div
            data-map-zoom-controls
            className="absolute bottom-2 right-2 z-20 flex flex-col overflow-hidden rounded-lg border border-sky-200/90 bg-white/95 shadow-md backdrop-blur-sm"
            role="group"
            aria-label="Map zoom controls"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={zoomIn}
              disabled={!canZoomIn}
              className="flex h-8 w-8 items-center justify-center text-sky-800 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Zoom in"
            >
              <Plus className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <span className="border-t border-sky-100 py-0.5 text-center text-[9px] font-semibold tabular-nums text-sky-700">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomOut}
              disabled={!canZoomOut}
              className="flex h-8 w-8 items-center justify-center text-sky-800 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Zoom out"
            >
              <Minus className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={resetZoom}
              disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
              className="flex h-8 w-8 items-center justify-center border-t border-sky-100 text-sky-800 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <p className="mt-1 text-center text-[10px] text-gray-500 sm:text-[11px]">
          Zoom in, then drag the map · hover list or map · click to select
        </p>
      </div>
    </div>
  );
};

export default SeahomeJapanMap;
