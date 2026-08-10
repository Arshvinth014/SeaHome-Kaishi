import React from 'react';
import { Heart } from 'lucide-react';
import type { PropertyOtherInfo } from './seahomeRentalPropertyDetailData';

const CRIMSON = '#b3002d';

function InfoPair({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(5.5rem,7.5rem)_1fr] border-b border-gray-300 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex items-center bg-[#ececec] px-2.5 py-2.5 text-[11px] font-bold leading-snug text-gray-800 sm:text-xs">
        {label}
      </div>
      <div className="bg-white px-2.5 py-2.5 text-xs text-gray-900 sm:text-sm">{value}</div>
    </div>
  );
}

function InfoFullRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(5.5rem,7.5rem)_1fr] border-b border-gray-300">
      <div className="flex items-start bg-[#ececec] px-2.5 py-2.5 text-[11px] font-bold text-gray-800 sm:text-xs">
        {label}
      </div>
      <div className="whitespace-pre-line bg-white px-2.5 py-2.5 text-xs leading-relaxed text-gray-900 sm:text-sm">
        {value}
      </div>
    </div>
  );
}

function PairRow({ left, right }: { left: { label: string; value: string }; right: { label: string; value: string } }) {
  return (
    <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
      <InfoPair label={left.label} value={left.value} />
      <InfoPair label={right.label} value={right.value} />
    </div>
  );
}

type Props = {
  info: PropertyOtherInfo;
};

const SeahomeRentalPropertyOtherInfoSection: React.FC<Props> = ({ info }) => {
  return (
    <section
      id="other-info"
      className="mt-6 scroll-mt-24 border border-gray-300 bg-white"
      aria-labelledby="other-info-heading"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-[#f3f3f3] px-3 py-2.5 sm:px-4">
        <h2
          id="other-info-heading"
          className="flex items-center gap-2 text-sm font-bold text-gray-900 sm:text-base"
        >
          <span className="h-4 w-1 shrink-0" style={{ backgroundColor: CRIMSON }} aria-hidden />
          Other property information
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-1 border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 sm:text-xs"
        >
          <Heart className="h-3.5 w-3.5" strokeWidth={2} />
          Add to favorites
        </button>
      </div>

      <div>
        <InfoFullRow label="Building / room" value={info.buildingRoom} />
        <InfoFullRow label="Layout detail" value={info.layoutDetail} />

        <PairRow
          left={{ label: 'Property type', value: info.propertyType }}
          right={{ label: 'Exclusive area', value: info.exclusiveArea }}
        />
        <PairRow
          left={{ label: 'Built', value: info.builtLabel }}
          right={{ label: 'Main exposure', value: info.mainExposure }}
        />
        <PairRow
          left={{ label: 'Floors / floor', value: info.floorsDisplay }}
          right={{ label: 'Structure', value: info.structure }}
        />
        <PairRow
          left={{ label: 'Parking', value: info.parking }}
          right={{ label: 'Bicycle parking', value: info.bicycleParking }}
        />

        <InfoFullRow label="Remarks" value={info.remarks} />

        <PairRow
          left={{ label: 'Contract term', value: info.contractPeriod }}
          right={{ label: 'Renewal fee', value: info.renewalFee }}
        />
        <PairRow
          left={{ label: 'Transaction type', value: info.transactionType }}
          right={{ label: 'Current status', value: info.currentStatus }}
        />
        <PairRow
          left={{ label: 'Move-in date', value: info.moveInDate }}
          right={{ label: 'Property no.', value: info.propertyNumber }}
        />
        <PairRow
          left={{ label: 'Registration no.', value: info.registrationNumber }}
          right={{ label: 'Listed on', value: info.publishedDate }}
        />

        <InfoFullRow label="Next update scheduled" value={info.nextUpdateDate} />
      </div>
    </section>
  );
};

export default SeahomeRentalPropertyOtherInfoSection;

