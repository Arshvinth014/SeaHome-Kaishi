import React from 'react';
import { CircleDollarSign, Heart } from 'lucide-react';
import {
  formatRentManYen,
  type PropertyCostsDetail,
  type RentalPropertyDetail,
} from './seahomeRentalPropertyDetailData';
import { formatYen } from './seahomeRentalStationResultsData';

const CRIMSON = '#b3002d';
const SKY_BTN = '#0088cc';

type Props = {
  property: RentalPropertyDetail;
};

function CostRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="grid grid-cols-[minmax(5.5rem,7.5rem)_1fr] border-b border-gray-300 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex items-center bg-[#ececec] px-2.5 py-2.5 text-[11px] font-bold text-gray-800 sm:text-xs">
        {label}
      </div>
      <div
        className={`bg-white px-2.5 py-2.5 text-xs sm:text-sm ${highlight ? 'font-bold' : 'text-gray-900'}`}
        style={highlight ? { color: CRIMSON } : undefined}
      >
        {value}
      </div>
    </div>
  );
}

const SeahomeRentalPropertyCostsSection: React.FC<Props> = ({ property }) => {
  const rentMan = formatRentManYen(property.rentYen);
  const costs: PropertyCostsDetail = property.costsDetail;

  return (
    <section id="costs" className="mt-6 border border-gray-300 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-300 px-3 py-2.5 sm:px-4">
        <h2 className="flex items-center gap-1.5 text-sm font-bold text-gray-900 sm:text-base">
          <CircleDollarSign className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: CRIMSON }} strokeWidth={2} />
          Costs
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="px-3 py-1.5 text-[11px] font-bold text-white sm:text-xs"
            style={{ backgroundColor: SKY_BTN }}
          >
            Check estimated move-in costs
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 sm:text-xs"
          >
            <Heart className="h-3.5 w-3.5" strokeWidth={2} />
            Add to favorites
          </button>
        </div>
      </div>

      <div className="p-0">
        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <CostRow label="Rent" value={`${rentMan} 万円`} highlight />
          <CostRow label="Mgmt. fee etc." value={formatYen(property.managementFeeYen)} />
        </div>
        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <CostRow label="Deposit / Guarantee" value={costs.depositDisplay} />
          <CostRow label="Key money" value={`${property.keyMoneyMonths} month(s)`} />
        </div>
        <div className="grid grid-cols-1 border-b border-gray-300 sm:grid-cols-2">
          <CostRow label="Other one-time fees" value={costs.otherOneTimeFees} />
          <CostRow label="Insurance etc." value={costs.insurance} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <CostRow label="Maintenance fees" value={costs.maintenanceFees} />
          <CostRow label="Credit card payment" value={costs.creditCardPayment} />
        </div>
      </div>
    </section>
  );
};

export default SeahomeRentalPropertyCostsSection;
