import React from 'react';
import {
  Baby,
  Car,
  GraduationCap,
  Pill,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Train,
  Trees,
} from 'lucide-react';
import type { PropertyTransportAccess } from './seahomeRentalPropertyDetailData';
import {
  SURROUNDINGS_POI_FILTERS,
  type SurroundingsPoi,
  type SurroundingsPoiCategory,
} from './seahomeRentalSurroundingsMapData';

const POI_ICONS: Record<
  SurroundingsPoiCategory,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  convenience: ShoppingBag,
  supermarket: ShoppingCart,
  school: GraduationCap,
  nursery: Baby,
  park: Trees,
  hospital: Plus,
  drugstore: Pill,
  carshare: Car,
};

type Props = {
  nearStations: PropertyTransportAccess[];
  pois: SurroundingsPoi[];
  activeCategories: Set<SurroundingsPoiCategory>;
  onToggleCategory: (id: SurroundingsPoiCategory) => void;
  listMaxHeightClass?: string;
};

const SeahomeRentalSurroundingsMapAside: React.FC<Props> = ({
  nearStations,
  pois,
  activeCategories,
  onToggleCategory,
  listMaxHeightClass = 'max-h-[280px] sm:max-h-[320px]',
}) => {
  return (
    <>
      <div className="border-b border-gray-200 pb-3">
        <p className="text-xs font-bold text-gray-900 sm:text-sm">Near stations</p>
        {nearStations.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {nearStations.map((access) => (
              <li
                key={`${access.line}-${access.station}`}
                className="flex items-start gap-2 text-[11px] leading-snug text-gray-800 sm:text-xs"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#1a5fb4]">
                  <Train className="h-3.5 w-3.5 text-white" strokeWidth={2.25} />
                </span>
                <span>
                  <span className="font-semibold text-[#0044bb]">「{access.station}」</span>
                  <span className="text-gray-700"> · {access.walkMinutes} min walk</span>
                  <br />
                  <span className="text-[10px] text-gray-600 sm:text-[11px]">{access.line}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-[11px] text-gray-600 sm:text-xs">No station access listed.</p>
        )}
      </div>

      <p className="mt-3 flex items-center gap-1 text-xs font-bold text-gray-800">
        Show surroundings
        <span
          className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f5a623] text-[10px] font-bold text-white"
          title="Data from OpenStreetMap via Overpass API"
        >
          ?
        </span>
      </p>
      <ul className={`mt-3 space-y-2 overflow-y-auto ${listMaxHeightClass}`}>
        {SURROUNDINGS_POI_FILTERS.map((filter) => {
          const Icon = POI_ICONS[filter.id];
          const checked = activeCategories.has(filter.id);
          const count = pois.filter((p) => p.category === filter.id).length;
          return (
            <li key={filter.id}>
              <label className="flex cursor-pointer items-center gap-2 text-[11px] text-gray-800 sm:text-xs">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggleCategory(filter.id)}
                  className="h-3.5 w-3.5 accent-sky-600"
                />
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm"
                  style={{ backgroundColor: filter.color }}
                >
                  <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2.25} />
                </span>
                <span className="leading-tight">
                  {filter.label}
                  <span className="ml-1 text-gray-500">({count})</span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SeahomeRentalSurroundingsMapAside;
