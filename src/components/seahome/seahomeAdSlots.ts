const env = (key: string) => {
  if (typeof process !== 'undefined' && process.env) {
    const val = (process.env as Record<string, string | undefined>)[key];
    if (val !== undefined) return String(val).trim();
  }
  const metaEnv = (import.meta as any).env || {};
  return String(metaEnv[key] || metaEnv[`VITE_${key}`] || '').trim();
};

/** Google AdSense `data-ad-slot` ids for Seahome hub (set in `.env`). */
export const SEAHOME_GOOGLE_AD_SLOTS = {
  leaderboard: env('REACT_APP_GOOGLE_ADSENSE_SEAHOME_LEADERBOARD_SLOT'),
  afterHub: env('REACT_APP_GOOGLE_ADSENSE_SEAHOME_AFTER_HUB_SLOT'),
  midFeatured: env('REACT_APP_GOOGLE_ADSENSE_SEAHOME_MID_FEATURED_SLOT'),
  midLineup: env('REACT_APP_GOOGLE_ADSENSE_SEAHOME_MID_LINEUP_SLOT'),
  beforeTools: env('REACT_APP_GOOGLE_ADSENSE_SEAHOME_BEFORE_TOOLS_SLOT'),
  footerBand: env('REACT_APP_GOOGLE_ADSENSE_SEAHOME_FOOTER_BAND_SLOT'),
} as const;

export type KaishiHouseAdContent = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

/** Default Kaishi Nihon house creatives per placement region. */
export const SEAHOME_KAISHI_HOUSE_ADS: Record<string, KaishiHouseAdContent> = {
  'kaishi-seahome-ad-leaderboard': {
    title: 'Study Japanese with Kaishi Nihon',
    description: 'JLPT prep, live classes, and AI practice — built for life in Japan.',
    cta: 'Explore courses',
    href: '/',
  },
  'kaishi-seahome-ad-after-hub': {
    title: 'Immigration & visa support',
    description: 'Guidance for students and workers relocating to Japan.',
    cta: 'Learn more',
    href: '/',
  },
  'kaishi-seahome-ad-mid-featured': {
    title: 'Featured on Kaishi Nihon',
    description: 'Promote your property or school to international audiences.',
    cta: 'Advertise with us',
    href: '/become-lecturer',
  },
  'kaishi-seahome-ad-mid-lineup': {
    title: 'Find agents who speak your language',
    description: 'Bilingual real estate support through the Kaishi network.',
    cta: 'View services',
    href: '/seahome-real-estates',
  },
  'kaishi-seahome-ad-before-tools': {
    title: 'Student housing checklist',
    description: 'Free guides for first-time renters — contracts, deposits, and move-in.',
    cta: 'Read guides',
    href: '/blog',
  },
  'kaishi-seahome-ad-footer-band': {
    title: 'Kaishi Nihon × Seahome',
    description: 'Rent, buy, and learn — one platform for newcomers to Japan.',
    cta: 'Visit Kaishi Nihon',
    href: '/',
  },
};
