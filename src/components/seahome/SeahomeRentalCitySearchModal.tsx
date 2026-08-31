import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  Map,
  MapPinned,
  Network,
  TrainFront,
  X,
} from 'lucide-react';
import type { RentalCity } from './seahomeRentalCities';

export type CitySearchMethod = 'station' | 'area' | 'map' | 'route';

export type RentalSearchModalContext = {
  prefectureName: string;
  prefectureSlug: string;
  city?: RentalCity;
};

const SEARCH_OPTIONS: {
  id: CitySearchMethod;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}[] = [
    { id: 'station', label: 'Search by line & station', icon: TrainFront },
    { id: 'area', label: 'Search by area / city', icon: MapPinned },
    { id: 'map', label: 'Search on map', icon: Map },
    { id: 'route', label: 'Search by route diagram', icon: Network },
  ];

const PORTAL_ID = 'seahome-rental-search-modal-root';

function getPortalNode(): HTMLElement {
  if (typeof document === 'undefined') {
    return null as unknown as HTMLElement;
  }
  let el = document.getElementById(PORTAL_ID);
  if (!el) {
    el = document.createElement('div');
    el.id = PORTAL_ID;
    document.body.appendChild(el);
  }
  return el;
}

type Props = {
  context: RentalSearchModalContext;
  onClose: () => void;
  onSearch: (method: CitySearchMethod) => void;
  onViewPrefecture: () => void;
};

const SeahomeRentalCitySearchModal: React.FC<Props> = ({
  context,
  onClose,
  onSearch,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { prefectureName, prefectureSlug, city } = context;

  const isOfficeMode = location.pathname.includes('/rental-office');
  const basePath = isOfficeMode ? '/seahome-real-estates/rental-office' : '/seahome-real-estates/rental-shop';

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleOptionClick = (id: CitySearchMethod) => {
    onClose();
    if (id === 'area') {
      const cityPath = city
        ? `${basePath}/${prefectureSlug || 'iwate'}/city/${city.slug}`
        : `${basePath}/${prefectureSlug || 'iwate'}/city`;
      navigate(cityPath);
    } else if (id === 'route') {
      navigate(`${basePath}/${prefectureSlug || 'nagano'}/route-map`);
    } else if (id === 'station') {
      navigate(`/seahome-real-estates/rental/search-by-line-station/${prefectureSlug || 'niigata'}`);
    } else if (id === 'map') {
      navigate(`/seahome-real-estates/rental/search-by-map/${prefectureSlug || 'niigata'}`);
    } else {
      onSearch(id);
    }
  };

  const handleViewAllPrefecture = () => {
    onClose();
    navigate(`${basePath}/${prefectureSlug || 'iwate'}/city`);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" aria-hidden />

      {/* Dialog container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="rental-city-search-title"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-sky-100/90 bg-white/95 shadow-2xl backdrop-blur-md transition-all duration-300 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-sky-100/80 bg-gradient-to-r from-sky-50/80 via-white to-sky-50/40 px-5 py-3.5 sm:px-6">
          <span
            className="inline-flex items-center rounded-lg border border-sky-200/80 bg-sky-50 px-3 py-1 text-xs font-extrabold text-sky-700 shadow-2xs sm:text-sm"
          >
            Choose how to search
          </span>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-600 to-sky-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:from-sky-700 hover:to-sky-800 hover:shadow-md active:scale-95 tv-focusable sm:text-sm cursor-pointer"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
            Close
          </button>
        </div>

        {/* Dialog Body */}
        <div className="px-5 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
          <h2
            id="rental-city-search-title"
            className="text-center text-base font-extrabold text-slate-900 sm:text-lg tracking-tight"
          >
            {city ? (
              <>
                Rental listings in{' '}
                <span className="text-sky-600 font-extrabold">
                  {city.name}, {prefectureName}
                </span>
              </>
            ) : (
              <>
                Rental listings in{' '}
                <span className="text-sky-600 font-extrabold">{prefectureName}</span>
              </>
            )}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
            {SEARCH_OPTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleOptionClick(id)}
                className="group relative flex min-h-[4.25rem] items-center gap-3 rounded-xl border border-sky-200/80 bg-white/95 px-3.5 py-3 text-left shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-400 hover:bg-gradient-to-b hover:from-white hover:to-sky-50/70 hover:shadow-md active:scale-95 tv-focusable shimmer-overlay sm:min-h-[4.75rem] sm:px-4 cursor-pointer"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 ring-1 ring-sky-200/70 shadow-2xs transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky-600 group-hover:to-sky-800 group-hover:text-white group-hover:ring-sky-400"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1 text-sm font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-sky-700 sm:text-[15px]">
                  {label}
                </span>
                <ChevronRight
                  className="h-5 w-5 shrink-0 text-sky-600 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  strokeWidth={2.5}
                />
              </button>
            ))}
          </div>

          <div className="mt-5 text-center sm:mt-6">
            <button
              type="button"
              onClick={handleViewAllPrefecture}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 underline decoration-sky-400/80 underline-offset-3 transition-all duration-200 hover:text-sky-900 hover:scale-105 active:scale-95 tv-focusable cursor-pointer"
            >
              <span className="text-[10px] text-sky-600" aria-hidden>
                ▶
              </span>
              View all rentals in {prefectureName}
            </button>
          </div>
        </div>
      </div>
    </div>,
    getPortalNode()
  );
};

export default SeahomeRentalCitySearchModal;
