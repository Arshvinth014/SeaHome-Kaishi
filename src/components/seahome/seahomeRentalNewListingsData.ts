/** Demo cards for the rental portal “new listings” carousel (opens Seahome embed on click). */
export type RentalNewListingCard = {
  id: string;
  category: string;
  categoryIcon?: string;
  imageUrl: string;
  imageAlt: string;
  stationLine: string;
  specsLine: string;
};

export const RENTAL_NEW_LISTINGS_HEADER = {
  title: 'New rental listings',
  badge: 'Updated daily',
} as const;

export const RENTAL_NEW_LISTING_CARDS: RentalNewListingCard[] = [
  {
    id: 'apt-1',
    category: 'Rental apartments',
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc68a1c55a2b?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Mid-rise rental apartment building',
    stationLine: '「Yagoto」Station · 6 min walk',
    specsLine: '¥60,000 · 1K · 24.37m²',
  },
  {
    id: 'apt-2',
    category: 'Rental apartments',
    imageUrl:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Modern apartment exterior with balconies',
    stationLine: '「Nagoya」Station · 8 min walk',
    specsLine: '¥72,000 · 1DK · 28.10m²',
  },
  {
    id: 'house-1',
    category: 'Rental houses',
    imageUrl:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Detached rental house',
    stationLine: '「Kichijoji」Station · 12 min walk',
    specsLine: '¥128,000 · 2LDK · 58.20m²',
  },
  {
    id: 'share-1',
    category: 'Share houses & co-living',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Shared living room in co-living space',
    stationLine: '「Shibuya」Station · 5 min walk',
    specsLine: '¥48,000 · private room · 12.00m²',
  },
  {
    id: 'furn-1',
    category: 'Furnished rentals',
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Furnished studio interior',
    stationLine: '「Roppongi」Station · 4 min walk',
    specsLine: '¥95,000 · 1LDK · 32.50m²',
  },
  {
    id: 'nodeposit-1',
    category: 'No key money / deposit support',
    imageUrl:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Compact urban apartment building',
    stationLine: '「Tennoji」Station · 7 min walk',
    specsLine: '¥55,000 · 1K · 21.80m²',
  },
  {
    id: 'pet-1',
    category: 'Pet-friendly homes',
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Pet-friendly home with yard',
    stationLine: '「Yokohama」Station · 10 min walk',
    specsLine: '¥88,000 · 2K · 45.00m²',
  },
  {
    id: 'design-1',
    category: 'Designer & renovated units',
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Renovated designer apartment',
    stationLine: '「Daikanyama」Station · 3 min walk',
    specsLine: '¥142,000 · 1LDK · 36.20m²',
  },
  {
    id: 'short-1',
    category: 'Short-term & monthly contracts',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Serviced apartment for monthly stay',
    stationLine: '「Shinjuku」Station · 2 min walk',
    specsLine: '¥110,000 · 1K · 25.00m² · monthly OK',
  },
  {
    id: 'apt-3',
    category: 'Rental apartments',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'High-rise rental tower',
    stationLine: '「Osaka-Umeda」Station · 5 min walk',
    specsLine: '¥78,000 · 1K · 26.50m²',
  },
];
