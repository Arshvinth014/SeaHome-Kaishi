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
    className="flex min-h-[120px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-4 text-center shadow-sm transition hover:border-sky-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 sm:min-h-[132px] sm:px-4"
  >
    <span className="text-sm font-bold leading-snug text-sky-700 sm:text-base">{card.title}</span>
    {card.lines?.map((line) => (
      <span key={line} className="mt-1 block text-[11px] leading-relaxed text-gray-600 sm:text-xs">
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
    className="flex min-h-[52px] items-center justify-center rounded-lg border border-gray-200 bg-white px-2 py-3 text-center shadow-sm transition hover:border-sky-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 sm:min-h-[56px]"
  >
    <span className="text-xs font-bold leading-snug text-sky-700 sm:text-sm">{card.title}</span>
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
  const titleClass = block.titleClass ?? 'text-lg font-bold text-sky-800 sm:text-xl';

  return (
    <div className="mb-10 last:mb-0 sm:mb-12">
      <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide ${block.badgeClass}`}>
          {block.badge}
        </span>
        <h3 className={`flex-1 ${titleClass}`}>{block.title}</h3>
        <button
          type="button"
          onClick={() => onNavigate(block.topPath)}
          className="text-xs font-semibold text-sky-600 underline-offset-2 hover:text-sky-800 hover:underline sm:text-sm"
        >
          {block.topLinkLabel}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {showLarge.map((card) => (
          <LargeFeatureCard key={card.title} card={card} onNavigate={onNavigate} />
        ))}
      </div>
      {block.centerSmallRow && showSmall.length > 0 && showSmall.length < 4 ? (
        <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-4 sm:gap-3">
          <div className="hidden sm:block" aria-hidden />
          {showSmall.map((card) => (
            <SmallFeatureCard key={card.title} card={card} onNavigate={onNavigate} />
          ))}
          <div className="hidden sm:block" aria-hidden />
        </div>
      ) : (
        <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-4 sm:gap-3">
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
            className="inline-flex min-w-[200px] items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-sky-800 shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
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
