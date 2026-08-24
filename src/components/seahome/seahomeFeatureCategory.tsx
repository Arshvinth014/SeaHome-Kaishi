import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type FeatureCard = {
  title: string;
  lines?: string[];
  path: string;
};

export type CategoryBlock = {
  badge: string;
  badgeClass: string;
  title: string;
  titleClass?: string;
  topLinkLabel: string;
  topPath: string;
  large: FeatureCard[];
  small: FeatureCard[];
  extraLarge?: FeatureCard[];
  extraSmall?: FeatureCard[];
  /** Center the small-card row when fewer than 4 items (e.g. 2 cards under a 4-col grid) */
  centerSmallRow?: boolean;
};

export const LargeFeatureCard: React.FC<{ card: FeatureCard; onNavigate: (path: string) => void }> = ({
  card,
  onNavigate,
}) => (
  <button
    type="button"
    onClick={() => onNavigate(card.path)}
    className="group relative flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-sky-100/80 bg-white/95 px-3.5 py-4 text-center shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:bg-gradient-to-b hover:from-white hover:to-sky-50/70 hover:shadow-md active:scale-95 tv-focusable shimmer-overlay sm:min-h-[132px] sm:px-4"
  >
    <span className="text-sm font-extrabold leading-snug text-sky-950 transition-colors group-hover:text-sky-700 sm:text-base">{card.title}</span>
    {card.lines?.map((line) => (
      <span key={line} className="mt-1 block text-[11px] font-medium leading-relaxed text-gray-600 group-hover:text-sky-900/80 sm:text-xs">
        {line}
      </span>
    ))}
  </button>
);

export const SmallFeatureCard: React.FC<{ card: FeatureCard; onNavigate: (path: string) => void }> = ({
  card,
  onNavigate,
}) => (
  <button
    type="button"
    onClick={() => onNavigate(card.path)}
    className="group flex min-h-[52px] items-center justify-center rounded-xl border border-sky-100/70 bg-white/95 px-2.5 py-3 text-center shadow-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-sky-300 hover:bg-gradient-to-b hover:from-white hover:to-sky-50/60 hover:shadow-md active:scale-95 tv-focusable sm:min-h-[56px]"
  >
    <span className="text-xs font-bold leading-snug text-sky-900 transition-colors group-hover:text-sky-700 sm:text-sm">{card.title}</span>
  </button>
);

export const FeatureCategorySection: React.FC<{
  block: CategoryBlock;
  onNavigate: (path: string) => void;
  defaultExpanded?: boolean;
}> = ({ block, onNavigate, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const showLarge = expanded && block.extraLarge ? [...block.large, ...block.extraLarge] : block.large;
  const showSmall = expanded && block.extraSmall ? [...block.small, ...block.extraSmall] : block.small;
  const hasMore = Boolean(block.extraLarge?.length);
  const titleClass = block.titleClass ?? 'text-lg font-extrabold text-sky-950 sm:text-xl';

  return (
    <div className="mb-10 last:mb-0 sm:mb-12">
      <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
        <span className={`rounded-full px-3.5 py-1 text-xs font-extrabold tracking-wide shadow-2xs ${block.badgeClass}`}>
          {block.badge}
        </span>
        <h3 className={`flex-1 ${titleClass}`}>{block.title}</h3>
        <button
          type="button"
          onClick={() => onNavigate(block.topPath)}
          className="text-xs font-bold text-sky-600 underline-offset-2 transition-all duration-200 hover:text-sky-800 hover:underline active:scale-95 tv-focusable sm:text-sm"
        >
          {block.topLinkLabel}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3.5">
        {showLarge.map((card) => (
          <LargeFeatureCard key={card.title} card={card} onNavigate={onNavigate} />
        ))}
      </div>
      {block.centerSmallRow && showSmall.length > 0 && showSmall.length < 4 ? (
        <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:mt-3.5 sm:grid-cols-4 sm:gap-3.5">
          <div className="hidden sm:block" aria-hidden />
          {showSmall.map((card) => (
            <SmallFeatureCard key={card.title} card={card} onNavigate={onNavigate} />
          ))}
          <div className="hidden sm:block" aria-hidden />
        </div>
      ) : (
        <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:mt-3.5 sm:grid-cols-4 sm:gap-3.5">
          {showSmall.map((card) => (
            <SmallFeatureCard key={card.title} card={card} onNavigate={onNavigate} />
          ))}
        </div>
      )}

      {hasMore ? (
        <div className="mt-4 flex justify-center sm:mt-5">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex min-w-[200px] items-center justify-center gap-1.5 rounded-xl border border-sky-200 bg-white/95 px-6 py-2.5 text-sm font-bold text-sky-900 shadow-xs transition-all duration-300 hover:border-sky-300 hover:bg-sky-50/80 hover:shadow-md active:scale-95 tv-focusable"
          >
            {expanded ? 'Show less' : 'See more'}
            {expanded ? (
              <ChevronUp className="h-4 w-4" aria-hidden />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
};
