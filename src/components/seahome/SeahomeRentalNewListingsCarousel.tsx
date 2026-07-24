import React from 'react';
import {
  RENTAL_NEW_LISTING_CARDS,
  RENTAL_NEW_LISTINGS_HEADER,
  type RentalNewListingCard,
} from './seahomeRentalNewListingsData';
import { RENTAL_NEW_LISTING_LINKS } from './seahomeRentalData';
import SeahomeRentalPropertyCarousel from './SeahomeRentalPropertyCarousel';

type Props = {
  onListingClick?: (card: RentalNewListingCard) => void;
  onCategoryClick?: (category: string) => void;
  className?: string;
};

const SeahomeRentalNewListingsCarousel: React.FC<Props> = ({
  onListingClick,
  onCategoryClick,
  className = '',
}) => (
  <SeahomeRentalPropertyCarousel
    className={className}
    headingId="rental-new-listings-heading"
    title={RENTAL_NEW_LISTINGS_HEADER.title}
    badge={RENTAL_NEW_LISTINGS_HEADER.badge}
    cards={RENTAL_NEW_LISTING_CARDS}
    categoryLinks={RENTAL_NEW_LISTING_LINKS}
    onCardClick={onListingClick}
    onCategoryClick={onCategoryClick}
  />
);

export default SeahomeRentalNewListingsCarousel;
