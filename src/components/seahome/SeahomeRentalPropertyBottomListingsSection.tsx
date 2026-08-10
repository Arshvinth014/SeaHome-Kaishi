import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import type { RentalPropertyCard } from './SeahomeRentalPropertyCarousel';
import type { RentalRecommendedListingCard } from './seahomeRentalPropertyRelatedListingsData';
import { RENTAL_PROPERTY_DISCLAIMERS } from './seahomeRentalPropertyRelatedListingsData';

const CRIMSON = '#c80032';
const SCROLL_STEP = 280;

type Props = {
  branchName: string;
  agencyCards: RentalPropertyCard[];
  recommendedCards: RentalRecommendedListingCard[];
  propertyDetailPath: (listingId: string) => string;
};

function AgencyListingsCarousel({
  title,
  cards,
  propertyDetailPath,
}: {
  title: string;
  cards: RentalPropertyCard[];
  propertyDetailPath: (listingId: string) => string;
}) {
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
    <section className="mt-4 overflow-hidden border border-gray-300 bg-[#faf8f5]">
      <h2 className="border-b border-gray-300 bg-[#f0f0f0] px-3 py-2.5 text-xs font-bold text-gray-900 sm:px-4 sm:text-sm">
        {title}
      </h2>
      <div className="relative bg-[#faf8f5] px-1 py-3 sm:px-2 sm:py-4">
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
              <Link to={propertyDetailPath(card.id)} className="group flex w-full flex-col">
                <p className="mb-1 text-[10px] font-bold leading-tight text-[#c80032] sm:text-[11px]">
                  {card.category}
                </p>
                <div className="overflow-hidden border border-gray-200 bg-white">
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
              </Link>
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
}

function RecommendedListingsGrid({
  cards,
  propertyDetailPath,
}: {
  cards: RentalRecommendedListingCard[];
  propertyDetailPath: (listingId: string) => string;
}) {
  return (
    <section className="mt-4 overflow-hidden border border-gray-300 bg-white">
      <h2
        className="px-3 py-2.5 text-sm font-bold tracking-wide text-white sm:px-4 sm:text-base"
        style={{ backgroundColor: CRIMSON }}
      >
        Recommended for you
      </h2>
      <ul className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 sm:gap-4 sm:p-4 lg:grid-cols-5">
        {cards.map((card) => (
          <li key={card.id}>
            <Link
              to={propertyDetailPath(card.id)}
              className="group flex h-full flex-col border border-gray-200 bg-white transition hover:shadow-sm"
            >
              <div className="flex items-center gap-1 px-2 pt-2">
                <p className="text-[10px] font-bold text-[#c80032] sm:text-[11px]">{card.category}</p>
                {card.isNew ? (
                  <span className="rounded-sm bg-[#f5a623] px-1 py-px text-[9px] font-bold text-white">NEW</span>
                ) : null}
              </div>
              <div className="mx-2 mt-1 overflow-hidden border border-gray-200">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-2">
                <p className="text-[11px] font-semibold text-gray-900 sm:text-xs">
                  {card.layout} {card.area}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-gray-700 sm:text-[11px]">{card.stationLine}</p>
                <p className="text-[10px] leading-snug text-gray-600 sm:text-[11px]">{card.addressLine}</p>
                <p className="mt-2 text-base font-bold text-gray-900 sm:text-lg">{card.rentLabel}</p>
                {card.photoRich ? (
                  <span className="mt-auto inline-block w-fit border border-[#d4a017] bg-[#fff8e6] px-1.5 py-0.5 text-[9px] font-bold text-[#8a6500] sm:text-[10px]">
                    Rich photos
                  </span>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const SeahomeRentalPropertyBottomListingsSection: React.FC<Props> = ({
  branchName,
  agencyCards,
  recommendedCards,
  propertyDetailPath,
}) => {
  const agencyTitle = `Other listings from ${branchName}`;

  const scrollToTop = () => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <AgencyListingsCarousel
        title={agencyTitle}
        cards={agencyCards}
        propertyDetailPath={propertyDetailPath}
      />

      <RecommendedListingsGrid cards={recommendedCards} propertyDetailPath={propertyDetailPath} />

      <section className="mt-6 border-t border-gray-200 pt-4">
        <ul className="space-y-2 text-[10px] leading-relaxed text-gray-600 sm:text-[11px]">
          {RENTAL_PROPERTY_DISCLAIMERS.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="shrink-0 text-gray-400" aria-hidden>
                ·
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 z-40 flex h-10 w-10 items-center justify-center border border-gray-300 bg-white/95 shadow-md transition hover:bg-gray-50 sm:right-6"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 text-gray-800" strokeWidth={2} />
      </button>
    </>
  );
};

export default SeahomeRentalPropertyBottomListingsSection;
