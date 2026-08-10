import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Train } from 'lucide-react';
import type { KaishiMapsListingMarker, KaishiMapsRailStation } from './seahomeKaishiMapsHubData';
import {
  SURROUNDINGS_POI_FILTERS,
  type SurroundingsPoi,
  type SurroundingsPoiCategory,
} from './seahomeRentalSurroundingsMapData';
import {
  Baby,
  Car,
  GraduationCap,
  Pill,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Trees,
} from 'lucide-react';

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
  listings: KaishiMapsListingMarker[];
  railStations: KaishiMapsRailStation[];
  pois: SurroundingsPoi[];
  activeCategories: Set<SurroundingsPoiCategory>;
  onToggleCategory: (id: SurroundingsPoiCategory) => void;
  showListings: boolean;
  onShowListingsChange: (value: boolean) => void;
  showRailStations: boolean;
  onShowRailStationsChange: (value: boolean) => void;
  poisLoading: boolean;
};

function formatRent(yen: number): string {
  return `¥${yen.toLocaleString('en-US')}/mo`;
}

const KaishiMapsHubAside: React.FC<Props> = ({
  listings,
  railStations,
  pois,
  activeCategories,
  onToggleCategory,
  showListings,
  onShowListingsChange,
  showRailStations,
  onShowRailStationsChange,
  poisLoading,
}) => {
  return (
    <>
      <div className="border-b border-gray-200 pb-3">
        <label className="flex cursor-pointer items-center gap-2 text-xs font-bold text-gray-900 sm:text-sm">
          <input
            type="checkbox"
            checked={showListings}
            onChange={(e) => onShowListingsChange(e.target.checked)}
            className="h-3.5 w-3.5 accent-[#b3002d]"
          />
          <Building2 className="h-4 w-4 text-[#b3002d]" strokeWidth={2.25} />
          Rental apartments ({listings.length})
        </label>
        <ul className="mt-2 max-h-[min(28vh,200px)] space-y-1.5 overflow-y-auto lg:max-h-[220px]">
          {listings.map((listing) => (
            <li key={listing.id}>
              <Link
                to={listing.detailPath}
                className="block rounded border border-gray-200 bg-white px-2 py-1.5 text-[11px] leading-snug text-gray-800 hover:border-sky-300 hover:bg-sky-50 sm:text-xs"
              >
                <span className="font-semibold text-gray-900">{listing.floor}</span>
                <span className="text-gray-600"> · {listing.layout}</span>
                <br />
                <span className="text-[10px] text-gray-600">{listing.stationName} Station</span>
                <br />
                <span className="font-semibold text-[#b3002d]">{formatRent(listing.rentYen)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 border-b border-gray-200 pb-3">
        <label className="flex cursor-pointer items-center gap-2 text-xs font-bold text-gray-900 sm:text-sm">
          <input
            type="checkbox"
            checked={showRailStations}
            onChange={(e) => onShowRailStationsChange(e.target.checked)}
            className="h-3.5 w-3.5 accent-[#1a5fb4]"
          />
          <Train className="h-4 w-4 text-[#1a5fb4]" strokeWidth={2.25} />
          Rail stations ({railStations.length})
        </label>
        <ul className="mt-2 max-h-[min(22vh,160px)] space-y-1 overflow-y-auto lg:max-h-[180px]">
          {railStations.map((station) => (
            <li
              key={station.id}
              className="flex items-start gap-2 text-[11px] leading-snug text-gray-800 sm:text-xs"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-[#1a5fb4] text-[9px] font-bold text-white">
                S
              </span>
              <span>
                <span className="font-semibold text-[#0044bb]">{station.name}</span>
                <span className="text-gray-600">
                  {' '}
                  · {station.listingCount.toLocaleString('en-US')} listings
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-3 flex items-center gap-1 text-xs font-bold text-gray-800">
        Public places
        {poisLoading ? (
          <span className="text-[10px] font-normal text-gray-500">(loading…)</span>
        ) : null}
      </p>
      <ul className="mt-2 max-h-[min(32vh,240px)] space-y-2 overflow-y-auto lg:max-h-none">
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

export default KaishiMapsHubAside;
