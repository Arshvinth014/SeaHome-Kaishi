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
      className={`overflow-hidden rounded-sm border border-gray-300 bg-white shadow-sm ${className}`}
      aria-labelledby={headingId}
    >
      <div
        className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4"
        style={{ backgroundColor: '#c80032' }}
      >
        <h2 id={headingId} className="text-sm font-bold tracking-wide text-white sm:text-base">
          {title}
        </h2>
        {badge ? (
          <span className="shrink-0 border border-white px-2 py-0.5 text-[10px] font-bold text-white sm:text-xs">
            {badge}
          </span>
        ) : null}
      </div>

      {categoryLinks && categoryLinks.length > 0 ? (
        <ul className="flex flex-wrap gap-x-0 divide-x divide-gray-200 border-b border-gray-200 bg-gray-50/80">
          {categoryLinks.map((label) => (
            <li key={label} className="min-w-0 flex-1 basis-[50%] sm:basis-0">
              <button
                type="button"
                onClick={() => onCategoryClick?.(label)}
                className="w-full truncate px-2 py-1.5 text-left text-[10px] font-semibold text-[#c80032] transition hover:bg-white hover:underline sm:px-3 sm:text-[11px]"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="relative bg-white px-1 py-3 sm:px-2 sm:py-4">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 z-10 flex h-12 w-7 -translate-y-1/2 items-center justify-center bg-[#4a4038]/85 text-white shadow-md transition hover:bg-[#4a4038] disabled:pointer-events-none disabled:opacity-30 sm:h-14 sm:w-8"
          aria-label="Previous listings"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
        </button>

        <div
          ref={trackRef}
          onScroll={updateScrollHints}
          className="flex gap-3 overflow-x-auto scroll-smooth px-8 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="list"
        >
          {cards.map((card) => (
            <article key={card.id} role="listitem" className="w-[min(42vw,168px)] shrink-0 sm:w-[152px]">
              <button
                type="button"
                onClick={() => onCardClick?.(card)}
                className="group flex w-full flex-col text-left"
              >
                <p className="mb-1 line-clamp-2 min-h-[2rem] text-[10px] font-bold leading-tight text-[#c80032] sm:min-h-[1.75rem] sm:text-[11px]">
                  {card.categoryIcon ? (
                    <span className="mr-0.5" aria-hidden>
                      {card.categoryIcon}
                    </span>
                  ) : null}
                  {card.category}
                </p>
                <div className="overflow-hidden border border-gray-200 bg-gray-100">
                  <img
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-auto w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-1.5 text-[10px] font-medium leading-snug text-[#0044bb] sm:text-[11px]">
                  {card.stationLine}
                </p>
                <p className="text-[10px] font-medium leading-snug text-[#0044bb] sm:text-[11px]">
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
          className="absolute right-0 top-1/2 z-10 flex h-12 w-7 -translate-y-1/2 items-center justify-center bg-[#4a4038]/85 text-white shadow-md transition hover:bg-[#4a4038] disabled:pointer-events-none disabled:opacity-30 sm:h-14 sm:w-8"
          aria-label="Next listings"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default SeahomeRentalPropertyCarousel;
