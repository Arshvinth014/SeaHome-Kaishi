import React from 'react';

const CRIMSON = '#b3002d';

type Props = {
  appealText: string;
};

const SeahomeRentalPropertyAppealSection: React.FC<Props> = ({ appealText }) => {
  return (
    <section id="appeal" className="mt-6 overflow-hidden border border-gray-300 bg-white">
      <div className="flex items-stretch border-b border-gray-200 bg-[#f3f3f3]">
        <span
          className="w-1 shrink-0 self-stretch"
          style={{ backgroundColor: CRIMSON }}
          aria-hidden
        />
        <h2 className="px-3 py-2.5 text-sm font-bold text-gray-900 sm:px-4 sm:text-base">
          Appeal points
        </h2>
      </div>
      <p className="whitespace-pre-line px-4 py-4 text-xs leading-relaxed text-gray-800 sm:px-5 sm:py-5 sm:text-sm">
        {appealText}
      </p>
    </section>
  );
};

export default SeahomeRentalPropertyAppealSection;
