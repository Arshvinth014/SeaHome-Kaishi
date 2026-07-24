import React from 'react';
import SeahomeAdBand, { type SeahomeAdBandProps } from './SeahomeAdBand';
import { SEAHOME_GOOGLE_AD_SLOTS, SEAHOME_KAISHI_HOUSE_ADS } from './seahomeAdSlots';

export type SeahomeAdPlacementId =
  | 'leaderboard'
  | 'afterHub'
  | 'midFeatured'
  | 'midLineup'
  | 'beforeTools'
  | 'footerBand';

const PLACEMENT_CONFIG: Record<
  SeahomeAdPlacementId,
  {
    googleDomId: string;
    kaishiDomId: string;
    googleSlot: string;
    minHeight: number;
    googleFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  }
> = {
  leaderboard: {
    googleDomId: 'kaishi-seahome-ad-google-leaderboard',
    kaishiDomId: 'kaishi-seahome-ad-leaderboard',
    googleSlot: SEAHOME_GOOGLE_AD_SLOTS.leaderboard,
    minHeight: 100,
  },
  afterHub: {
    googleDomId: 'kaishi-seahome-ad-google-after-hub',
    kaishiDomId: 'kaishi-seahome-ad-after-hub',
    googleSlot: SEAHOME_GOOGLE_AD_SLOTS.afterHub,
    minHeight: 100,
  },
  midFeatured: {
    googleDomId: 'kaishi-seahome-ad-google-mid-featured',
    kaishiDomId: 'kaishi-seahome-ad-mid-featured',
    googleSlot: SEAHOME_GOOGLE_AD_SLOTS.midFeatured,
    minHeight: 120,
    googleFormat: 'rectangle',
  },
  midLineup: {
    googleDomId: 'kaishi-seahome-ad-google-mid-lineup',
    kaishiDomId: 'kaishi-seahome-ad-mid-lineup',
    googleSlot: SEAHOME_GOOGLE_AD_SLOTS.midLineup,
    minHeight: 100,
  },
  beforeTools: {
    googleDomId: 'kaishi-seahome-ad-google-before-tools',
    kaishiDomId: 'kaishi-seahome-ad-before-tools',
    googleSlot: SEAHOME_GOOGLE_AD_SLOTS.beforeTools,
    minHeight: 100,
  },
  footerBand: {
    googleDomId: 'kaishi-seahome-ad-google-footer-band',
    kaishiDomId: 'kaishi-seahome-ad-footer-band',
    googleSlot: SEAHOME_GOOGLE_AD_SLOTS.footerBand,
    minHeight: 90,
  },
};

type Props = {
  placement: SeahomeAdPlacementId;
  containerClass: string;
  className?: string;
  /** Sidebar / narrow regions: use `kaishi-only` for a single ad slot. */
  layout?: SeahomeAdBandProps['layout'];
};

/** Single Google + Kaishi ad band for a named region on the Seahome hub page. */
const SeahomeAdPlacement: React.FC<Props> = ({
  placement,
  containerClass,
  className,
  layout = 'dual',
}) => {
  const cfg = PLACEMENT_CONFIG[placement];
  const kaishi = SEAHOME_KAISHI_HOUSE_ADS[cfg.kaishiDomId];

  if (!kaishi) return null;

  return (
    <SeahomeAdBand
      containerClass={containerClass}
      googleDomId={cfg.googleDomId}
      googleSlot={cfg.googleSlot || undefined}
      kaishiDomId={cfg.kaishiDomId}
      kaishi={kaishi}
      layout={layout}
      minHeight={cfg.minHeight}
      googleFormat={cfg.googleFormat ?? 'horizontal'}
      className={className}
    />
  );
};

export default SeahomeAdPlacement;
