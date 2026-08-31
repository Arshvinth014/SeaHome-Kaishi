import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { RentalNewListingCard } from './seahomeRentalNewListingsData';

const SCROLL_STEP = 280;

export type RentalPropertyCard = RentalNewListingCard;

type Props = {
  title: string;
  badge?: string;
  headingId: string;
  cards: RentalPropertyCard[];
  categoryLinks?: readonly string[];
  onCardClick?: (card: RentalPropertyCard) => void;
  onCategoryClick?: (category: string) => void;
  className?: string;
};

const SeahomeRentalPropertyCarousel: React.FC<Props> = ({
  title,
  badge = 'Updated daily',
  headingId,
  cards,
  categoryLinks,
  onCardClick,
  onCategoryClick,
  className = '',
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollHints = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  const scrollBy = useCallback(
    (dir: -1 | 1) => {
      trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
      window.setTimeout(updateScrollHints, 320);
    },
    [updateScrollHints]
  );

  useEffect(() => {
    updateScrollHints();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateScrollHints);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollHints, cards.length]);

  return (
    <section
      className={`overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md ${className}`}
      aria-labelledby={headingId}
    >
      {/* Header Bar with Ocean Blue Gradient */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 text-white"
      >
        <h2 id={headingId} className="text-sm font-extrabold tracking-tight text-white sm:text-base">
          {title}
        </h2>
        {badge ? (
          <span className="shrink-0 rounded-full border border-white/40 bg-white/20 px-3 py-0.5 text-[10px] font-extrabold text-white backdrop-blur-xs sm:text-xs">
            {badge}
          </span>
        ) : null}
      </div>

      {categoryLinks && categoryLinks.length > 0 ? (
        <ul className="flex flex-wrap gap-x-0 divide-x divide-sky-100 border-b border-sky-100 bg-sky-50/60">
          {categoryLinks.map((label) => (
            <li key={label} className="min-w-0 flex-1 basis-[50%] sm:basis-0">
              <button
                type="button"
                onClick={() => onCategoryClick?.(label)}
                className="w-full truncate px-3 py-2 text-left text-[11px] font-extrabold text-sky-800 transition hover:bg-white hover:text-sky-950 sm:text-xs cursor-pointer"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="relative bg-white px-2 py-4 sm:px-3 sm:py-5">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className="absolute left-1 top-1/2 z-10 flex h-10 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-sky-600/90 text-white shadow-md transition hover:bg-sky-700 disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-8 cursor-pointer"
          aria-label="Previous listings"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
        </button>

        <div
          ref={trackRef}
          onScroll={updateScrollHints}
          className="flex gap-3.5 overflow-x-auto scroll-smooth px-7 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="list"
        >
          {cards.map((card) => (
            <article key={card.id} role="listitem" className="w-[min(44vw,175px)] shrink-0 sm:w-[165px]">
              <button
                type="button"
                onClick={() => onCardClick?.(card)}
                className="group flex w-full flex-col text-left cursor-pointer"
              >
                <p className="mb-1.5 line-clamp-2 min-h-[2rem] text-[11px] font-extrabold leading-tight text-sky-800 group-hover:text-sky-600 transition-colors">
                  {card.categoryIcon ? (
                    <span className="mr-1" aria-hidden>
                      {card.categoryIcon}
                    </span>
                  ) : null}
                  {card.category}
                </p>
                <div className="overflow-hidden rounded-xl border border-sky-100 bg-slate-100 shadow-2xs">
                  <img
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-auto w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-[11px] font-bold leading-snug text-slate-800 group-hover:text-sky-700 truncate">
                  {card.stationLine}
                </p>
                <p className="text-[10px] font-semibold leading-snug text-slate-500 truncate">
                  {card.specsLine}
                </p>
              </button>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className="absolute right-1 top-1/2 z-10 flex h-10 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-sky-600/90 text-white shadow-md transition hover:bg-sky-700 disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-8 cursor-pointer"
          aria-label="Next listings"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default SeahomeRentalPropertyCarousel;
