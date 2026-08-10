import React from 'react';
import { Camera, ChevronRight, Heart, ZoomIn } from 'lucide-react';
import {
  formatYen,
  type StationResultListing,
} from './seahomeRentalStationResultsData';

const CRIMSON = '#c80032';
const ROW_BG = '#fdfdf0';

function FeatureTag({ label, variant }: { label: string; variant: 'gray' | 'blue' }) {
  if (variant === 'blue') {
    return (
      <span className="inline-flex rounded border border-[#5b8fd4] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#2563eb] sm:text-[11px]">
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex rounded bg-[#6b6b6b] px-2 py-0.5 text-[10px] font-semibold text-white sm:text-[11px]">
      {label}
    </span>
  );
}

function RentCell({ rentYen, managementFeeYen }: { rentYen: number; managementFeeYen: number }) {
  const man = rentYen / 10000;
  const main = Number.isInteger(man) ? String(man) : man.toFixed(1);

  return (
    <div className="text-center">
      <p className="leading-tight">
        <span className="text-2xl font-black tabular-nums sm:text-3xl" style={{ color: CRIMSON }}>
          {main}
        </span>
        <span className="ml-0.5 text-sm font-bold text-gray-900 sm:text-base">万円</span>
      </p>
      <p className="mt-0.5 text-[11px] text-gray-800 sm:text-xs">{formatYen(managementFeeYen)}</p>
      <p className="text-[10px] text-gray-500">mgmt. fee</p>
    </div>
  );
}

type RowProps = {
  listing: StationResultListing;
  checked: boolean;
  onToggle: () => void;
  detailHref?: string;
};

export function SeahomeRentalListingRow({ listing, checked, onToggle, detailHref }: RowProps) {
  return (
    <article
      className="border-b border-gray-300 last:border-b-0"
      style={{ backgroundColor: ROW_BG }}
    >
      <div className="grid grid-cols-[auto_1fr] gap-0">
        <div className="flex flex-col items-center gap-2 border-r border-gray-300 px-2 py-3 sm:px-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="h-4 w-4 accent-[#c80032]"
            aria-label={`Select room on ${listing.floor}`}
          />
          <div className="relative w-14 shrink-0 sm:w-16">
            <img
              src={listing.floorPlanUrl}
              alt={listing.floorPlanAlt}
              className="aspect-[3/4] w-full border border-gray-300 bg-white object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-0.5 right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 shadow">
              <ZoomIn className="h-3 w-3 text-gray-600" strokeWidth={2} />
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <div className="grid min-w-[36rem] grid-cols-[minmax(3rem,0.6fr)_minmax(5rem,1fr)_minmax(4.5rem,0.9fr)_minmax(4rem,0.8fr)_minmax(4.5rem,0.9fr)_auto_auto] items-center gap-1 overflow-x-auto border-b border-gray-200 px-2 py-3 sm:gap-2 sm:px-3">
            <p className="text-center text-sm font-bold text-gray-900">{listing.floor}</p>
            <RentCell rentYen={listing.rentYen} managementFeeYen={listing.managementFeeYen} />
            <div className="text-center text-[11px] font-medium leading-snug text-gray-900 sm:text-xs">
              <p>{formatYen(listing.depositYen)}</p>
              <p className="mt-1">{listing.keyMoneyYen > 0 ? formatYen(listing.keyMoneyYen) : '—'}</p>
            </div>
            <div className="text-center text-[11px] font-medium leading-snug text-gray-900 sm:text-xs">
              <p>{listing.layout}</p>
              <p className="mt-1">{listing.area}</p>
            </div>
            <div className="flex justify-center">
              {listing.photoRich ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-1 border border-[#5b8fd4] bg-white px-1.5 py-1 text-[10px] font-bold text-[#2563eb] sm:text-[11px]"
                >
                  <Camera className="h-3.5 w-3.5" />
                  Many photos
                </button>
              ) : (
                <span className="text-[10px] text-gray-400">—</span>
              )}
            </div>
            <button
              type="button"
              className="flex justify-center p-1 text-gray-400 transition hover:text-[#c80032]"
              aria-label="Add to favorites"
            >
              <Heart className="h-5 w-5" strokeWidth={1.75} />
            </button>
            {detailHref ? (
              <a
                href={detailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-[#e8f2fc] px-2 py-2 text-[10px] font-bold text-[#0044bb] no-underline transition hover:bg-[#d6e8fa] sm:px-3 sm:text-xs"
              >
                View details
                <ChevronRight className="ml-0.5 inline h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>

          <div className="px-2 py-2.5 sm:px-3">
            <p className="text-[10px] font-bold text-gray-800 sm:text-[11px]">Popular features</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {listing.featureTags.map((tag) => (
                <FeatureTag key={tag.label} label={tag.label} variant={tag.variant} />
              ))}
            </div>
            {listing.hasRecommendedComment ? (
              <div className="mt-2 flex justify-end">
                <button
                  type="button"
                  className="border px-3 py-1 text-[10px] font-bold transition hover:bg-[#fff5f6] sm:text-[11px]"
                  style={{ borderColor: CRIMSON, color: CRIMSON }}
                >
                  See recommended comment
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

type TableProps = {
  listings: StationResultListing[];
  checkedIds: string[];
  onToggle: (id: string) => void;
  getDetailHref?: (listingId: string) => string;
  className?: string;
};

const SeahomeRentalListingTable: React.FC<TableProps> = ({
  listings,
  checkedIds,
  onToggle,
  getDetailHref,
  className = '',
}) => {
  const rootClass = ['overflow-hidden border border-gray-300 bg-white', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={rootClass}>
      <div className="hidden border-b border-gray-300 bg-[#eceae4] text-center text-[10px] font-bold text-gray-700 sm:grid sm:grid-cols-[4.5rem_1fr]">
        <div className="border-r border-gray-300 py-2" aria-hidden />
        <div className="grid grid-cols-[minmax(3rem,0.6fr)_minmax(5rem,1fr)_minmax(4.5rem,0.9fr)_minmax(4rem,0.8fr)_minmax(4.5rem,0.9fr)_auto_auto] gap-1 px-2 py-2 sm:gap-2 sm:px-3">
          <span>Room / floor</span>
          <span>Rent / fees</span>
          <span>
            Deposit
            <br />
            Key money
          </span>
          <span>
            Layout
            <br />
            Area
          </span>
          <span>Photos</span>
          <span>Favorite</span>
          <span />
        </div>
      </div>

      <div className="border-b border-gray-300 bg-[#eceae4] px-3 py-2 text-center text-[10px] font-bold text-gray-700 sm:hidden">
        Property listings
      </div>

      {listings.map((listing) => (
        <SeahomeRentalListingRow
          key={listing.id}
          listing={listing}
          checked={checkedIds.includes(listing.id)}
          onToggle={() => onToggle(listing.id)}
          detailHref={getDetailHref?.(listing.id)}
        />
      ))}
    </section>
  );
};

export default SeahomeRentalListingTable;
