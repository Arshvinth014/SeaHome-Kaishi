import React, { useMemo } from 'react';
import SeahomeRentalPropertyCarousel, { type RentalPropertyCard } from './SeahomeRentalPropertyCarousel';
import {
  lineNewListingCards,
  linePopularRankingCards,
} from './seahomeRentalLineCarouselData';

type Props = {
  lineName: string;
  onListingClick?: (card: RentalPropertyCard) => void;
  className?: string;
};

const SeahomeRentalLinePropertyCarousels: React.FC<Props> = ({
  lineName,
  onListingClick,
  className = '',
}) => {
  const newListings = useMemo(() => lineNewListingCards(lineName), [lineName]);
  const popular = useMemo(() => linePopularRankingCards(lineName), [lineName]);

  return (
    <div className={`space-y-5 ${className}`}>
      <SeahomeRentalPropertyCarousel
        headingId="line-new-listings-heading"
        title="New rental listings"
        badge="Updated daily"
        cards={newListings}
        onCardClick={onListingClick}
      />
      <SeahomeRentalPropertyCarousel
        headingId="line-popular-ranking-heading"
        title={`Popular rentals on ${lineName}`}
        badge="Updated daily"
        cards={popular}
        onCardClick={onListingClick}
      />
    </div>
  );
};

export default SeahomeRentalLinePropertyCarousels;
