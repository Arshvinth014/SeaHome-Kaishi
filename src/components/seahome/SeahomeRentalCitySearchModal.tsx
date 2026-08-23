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

const SKY_BLUE = '#0284c7';
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
  onViewPrefecture,
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
    } else if (id === 'station' || id === 'route') {
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" aria-hidden />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="rental-city-search-title"
        className="relative z-10 w-full max-w-lg rounded-2xl border border-sky-100 bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute -top-3 left-4 rounded-lg border-2 bg-white px-3 py-1 text-xs font-extrabold shadow-sm sm:text-sm"
          style={{ borderColor: SKY_BLUE, color: SKY_BLUE }}
        >
          Choose how to search
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 right-3 z-20 inline-flex items-center gap-1 rounded-lg px-3 py-1 text-xs font-bold text-white shadow-md transition hover:brightness-110 sm:text-sm cursor-pointer"
          style={{ backgroundColor: SKY_BLUE }}
          aria-label="Close"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          Close
        </button>

        <div className="px-5 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-9">
          <h2
            id="rental-city-search-title"
            className="text-center text-base font-bold text-slate-800 sm:text-lg"
          >
            {city ? (
              <>
                Rental listings in{' '}
                <span style={{ color: SKY_BLUE }}>
                  {city.name}, {prefectureName}
                </span>
              </>
            ) : (
              <>
                Rental listings in{' '}
                <span style={{ color: SKY_BLUE }}>{prefectureName}</span>
              </>
            )}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
            {SEARCH_OPTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleOptionClick(id)}
                className="group flex min-h-[4.25rem] items-center gap-3 rounded-xl border-2 bg-white px-3 py-3 text-left transition hover:bg-sky-50/60 hover:border-sky-500 sm:min-h-[4.75rem] sm:px-4 cursor-pointer"
                style={{ borderColor: `${SKY_BLUE}33` }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white group-hover:bg-sky-50 transition-colors"
                  style={{ borderColor: SKY_BLUE, color: SKY_BLUE }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1 text-sm font-bold leading-snug text-slate-800 sm:text-[15px] group-hover:text-sky-900">
                  {label}
                </span>
                <ChevronRight
                  className="h-5 w-5 shrink-0 opacity-70 transition group-hover:translate-x-0.5"
                  style={{ color: SKY_BLUE }}
                  strokeWidth={2.5}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleViewAllPrefecture}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 underline decoration-sky-400/80 underline-offset-2 transition hover:text-sky-900 cursor-pointer"
          >
            <span className="text-[10px]" style={{ color: SKY_BLUE }} aria-hidden>
              ▶
            </span>
            View all rentals in {prefectureName}
          </button>
        </div>
      </div>
    </div>,
    getPortalNode()
  );
};

export default SeahomeRentalCitySearchModal;
