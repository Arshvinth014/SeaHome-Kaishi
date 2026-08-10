import React from 'react';
import type { RentalRegion } from './seahomeRentalData';

type Props = {
  regions: RentalRegion[];
  activeSlug: string | null;
  hoveredSlug: string | null;
  onPrefectureClick: (slug: string, name: string) => void;
  onPrefectureHover: (slug: string | null) => void;
};

function prefectureBtnClass(active: boolean, hovered: boolean): string {
  if (active) {
    return 'border-sky-600 bg-sky-600 text-white shadow-sm ring-2 ring-sky-300/50';
  }
  if (hovered) {
    return 'border-sky-500 bg-sky-100 text-sky-950 shadow-md ring-2 ring-sky-400/70';
  }
  return 'border-gray-200 bg-white text-gray-800 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-900';
}

/** Regional prefecture buttons flanking the Japan map (synced hover with map). */
const SeahomeRentalRegionList: React.FC<Props> = ({
  regions,
  activeSlug,
  hoveredSlug,
  onPrefectureClick,
  onPrefectureHover,
}) => (
  <div className="flex flex-col gap-2">
    {regions.map((region) => (
      <div
        key={region.id}
        className={`rounded-md border bg-white/90 p-2 shadow-sm transition-colors duration-200 ${
          region.prefectures.some((p) => p.slug === hoveredSlug)
            ? 'border-sky-300/90 bg-sky-50/40'
            : 'border-white/80'
        }`}
      >
        <p className="mb-1.5 border-b border-sky-100 pb-1 text-[11px] font-bold uppercase tracking-wide text-sky-800">
          {region.label}
        </p>
        <div className="flex flex-wrap gap-1">
          {region.prefectures.map((pref) => {
            const active = activeSlug === pref.slug;
            const hovered = hoveredSlug === pref.slug && !active;
            return (
              <button
                key={pref.slug}
                type="button"
                onClick={() => onPrefectureClick(pref.slug, pref.name)}
                onMouseEnter={() => onPrefectureHover(pref.slug)}
                onMouseLeave={() => onPrefectureHover(null)}
                onFocus={() => onPrefectureHover(pref.slug)}
                onBlur={() => onPrefectureHover(null)}
                onTouchStart={() => onPrefectureHover(pref.slug)}
                onTouchEnd={() => onPrefectureHover(null)}
                onTouchCancel={() => onPrefectureHover(null)}
                className={`rounded border px-1.5 py-0.5 text-[10px] font-medium transition-all duration-200 sm:text-[11px] ${prefectureBtnClass(active, hovered)}`}
              >
                {pref.name}
              </button>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

export default SeahomeRentalRegionList;
