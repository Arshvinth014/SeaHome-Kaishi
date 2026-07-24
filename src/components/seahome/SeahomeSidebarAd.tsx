import React from 'react';
import { KaishiHouseAdSlot } from './SeahomeAdBand';
import { SEAHOME_KAISHI_HOUSE_ADS } from './seahomeAdSlots';

type Props = {
  kaishiDomId: keyof typeof SEAHOME_KAISHI_HOUSE_ADS | string;
  minHeight?: number;
  className?: string;
};

/** Single Kaishi house ad for narrow sidebars (no Google slot). */
const SeahomeSidebarAd: React.FC<Props> = ({
  kaishiDomId,
  minHeight = 120,
  className = '',
}) => {
  const kaishi = SEAHOME_KAISHI_HOUSE_ADS[kaishiDomId];
  if (!kaishi) return null;

  return (
    <div className={`w-full ${className}`} aria-label="Advertisement">
      <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wider text-gray-400">
        Advertisement
      </p>
      <KaishiHouseAdSlot domId={kaishiDomId} content={kaishi} minHeight={minHeight} />
    </div>
  );
};

export default SeahomeSidebarAd;
