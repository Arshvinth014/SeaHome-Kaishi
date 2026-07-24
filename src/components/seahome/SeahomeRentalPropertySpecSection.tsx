import React from 'react';
import { MapPin } from 'lucide-react';
import {
  formatRentManYen,
  type PropertyStaffRecommendation,
  type PropertyTransportAccess,
  type RentalPropertyDetail,
} from './seahomeRentalPropertyDetailData';
import { formatYen } from './seahomeRentalStationResultsData';

const CRIMSON = '#b3002d';
const SKY_BTN = '#0088cc';

type Props = {
  property: RentalPropertyDetail;
  onShowMap?: () => void;
};

function SpecPair({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-[minmax(5.5rem,7.5rem)_1fr] border-b border-gray-300 sm:border-b-0 sm:border-r sm:last:border-r-0 ${className}`}
    >
      <div className="flex items-center bg-[#ececec] px-2.5 py-2.5 text-[11px] font-bold leading-snug text-gray-800 sm:text-xs">
        {label}
      </div>
      <div className="bg-white px-2.5 py-2.5 text-xs text-gray-900 sm:text-sm">{children}</div>
    </div>
  );
}

function StaffRecommendationBlock({ staff }: { staff: PropertyStaffRecommendation }) {
  return (
    <div className="border border-gray-300 bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <img
          src={staff.photoUrl}
          alt=""
          className="h-20 w-20 shrink-0 rounded-full border border-gray-200 object-cover sm:h-24 sm:w-24"
        />
        <div className="min-w-0 flex-1">
          <div
            className="relative rounded-md border-2 bg-white px-4 py-3 sm:px-5 sm:py-4"
            style={{ borderColor: CRIMSON }}
          >
            <p className="text-xs font-bold sm:text-sm" style={{ color: CRIMSON }}>
              {staff.commentTitle}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gray-800 sm:text-sm">{staff.commentBody}</p>
            <span
              className="absolute -left-2 top-8 hidden h-0 w-0 border-y-[8px] border-r-[10px] border-y-transparent sm:block"
              style={{ borderRightColor: CRIMSON }}
              aria-hidden
            />
          </div>
          <p className="mt-3 text-[11px] text-gray-700 sm:text-xs">
            <span className="font-semibold text-gray-900">{staff.agencyName}</span>
            <span className="mx-1.5 text-gray-400">/</span>
            <span>{staff.agentName}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TransportList({ lines }: { lines: PropertyTransportAccess[] }) {
  return (
    <ul className="space-y-1">
      {lines.map((row) => (
        <li key={`${row.line}-${row.station}`} className="leading-snug">
          <span className="text-gray-800">
            {row.line} / {row.station}
          </span>
          <span className="ml-1 text-gray-600">· {row.walkMinutes} min walk</span>
        </li>
      ))}
    </ul>
  );
}

const SeahomeRentalPropertySpecSection: React.FC<Props> = ({ property, onShowMap }) => {
  const rentMan = formatRentManYen(property.rentYen);
  const builtLabel = property.builtLabel;

  return (
    <section id="info" className="mt-4 space-y-0">
      <StaffRecommendationBlock staff={property.staffRecommendation} />

      <div className="border border-t-0 border-gray-300 bg-white">
        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <SpecPair label="Rent">
            <p className="text-base font-bold text-gray-900 sm:text-lg">
              {rentMan}
              <span className="text-sm font-bold sm:text-base"> 万円</span>
            </p>
            <button
              type="button"
              className="mt-2 inline-block px-3 py-1.5 text-[11px] font-bold text-white sm:text-xs"
              style={{ backgroundColor: SKY_BTN }}
            >
              Check estimated move-in costs
            </button>
          </SpecPair>
          <SpecPair label="Mgmt. fee etc.">{formatYen(property.managementFeeYen)}</SpecPair>
        </div>

        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <SpecPair label="Security deposit">{property.depositMonths} month(s)</SpecPair>
          <SpecPair label="Key money">{property.keyMoneyMonths} month(s)</SpecPair>
        </div>

        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <SpecPair label="Layout">{property.layout}</SpecPair>
          <SpecPair label="Area">{property.areaSqm}m²</SpecPair>
        </div>

        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <SpecPair label="Built">{builtLabel}</SpecPair>
          <SpecPair label="Type">{property.propertyType}</SpecPair>
        </div>

        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <SpecPair label="Floors / Floor">
            {property.floorsTotal}-story / {property.floorNumber}F
          </SpecPair>
          <SpecPair label="Main exposure">{property.mainExposure}</SpecPair>
        </div>

        <div className="grid grid-cols-[minmax(5.5rem,7.5rem)_1fr] border-b border-gray-300">
          <div className="flex items-center bg-[#ececec] px-2.5 py-2.5 text-[11px] font-bold text-gray-800 sm:text-xs">
            Address
          </div>
          <div className="flex flex-wrap items-center gap-2 bg-white px-2.5 py-2.5 text-xs sm:text-sm">
            <span className="text-gray-900">{property.address}</span>
            <button
              type="button"
              onClick={onShowMap}
              className="inline-flex shrink-0 items-center gap-1 border border-sky-600 bg-white px-2 py-0.5 text-[11px] font-semibold text-sky-700 hover:bg-sky-50 sm:text-xs"
            >
              <MapPin className="h-3.5 w-3.5" />
              Map
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(5.5rem,7.5rem)_1fr]">
          <div className="flex items-start bg-[#ececec] px-2.5 py-2.5 text-[11px] font-bold text-gray-800 sm:text-xs">
            Transport
          </div>
          <div className="bg-white px-2.5 py-2.5">
            <TransportList lines={property.transport} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeahomeRentalPropertySpecSection;
