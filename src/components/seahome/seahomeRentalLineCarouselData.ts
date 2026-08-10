import type { RentalPropertyCard } from './SeahomeRentalPropertyCarousel';

const IMAGES = {
  apartment:
    'https://images.unsplash.com/photo-1545324418-cc68a1c55a2b?auto=format&fit=crop&w=400&q=80',
  mansion:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
  house:
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
  modern:
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
  compact:
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
  tower:
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
} as const;

export function lineNewListingCards(lineName: string): RentalPropertyCard[] {
  return [
    {
      id: 'new-apt-1',
      category: 'Rental apartment',
      imageUrl: IMAGES.apartment,
      imageAlt: 'Rental apartment building',
      stationLine: `Near ${lineName} · 6 min walk`,
      specsLine: '¥100,000 · 1LDK · 42.11m²',
    },
    {
      id: 'new-mansion-1',
      category: 'Rental mansion',
      imageUrl: IMAGES.mansion,
      imageAlt: 'Rental mansion exterior',
      stationLine: `Near ${lineName} · 8 min walk`,
      specsLine: '¥118,000 · 2DK · 48.50m²',
    },
    {
      id: 'new-apt-2',
      category: 'Rental apartment',
      imageUrl: IMAGES.modern,
      imageAlt: 'Modern rental building',
      stationLine: `Near ${lineName} · 4 min walk`,
      specsLine: '¥88,000 · 1K · 26.20m²',
    },
    {
      id: 'new-apt-3',
      category: 'Rental apartment',
      imageUrl: IMAGES.compact,
      imageAlt: 'Compact rental apartment',
      stationLine: `Near ${lineName} · 10 min walk`,
      specsLine: '¥72,000 · 1DK · 30.00m²',
    },
    {
      id: 'new-mansion-2',
      category: 'Rental mansion',
      imageUrl: IMAGES.tower,
      imageAlt: 'High-rise rental mansion',
      stationLine: `Near ${lineName} · 5 min walk`,
      specsLine: '¥135,000 · 2LDK · 55.80m²',
    },
    {
      id: 'new-apt-4',
      category: 'Rental apartment',
      imageUrl: IMAGES.apartment,
      imageAlt: 'Walk-up rental apartment',
      stationLine: `Near ${lineName} · 7 min walk`,
      specsLine: '¥95,000 · 1LDK · 38.40m²',
    },
    {
      id: 'new-apt-5',
      category: 'Rental apartment',
      imageUrl: IMAGES.modern,
      imageAlt: 'Renovated rental apartment',
      stationLine: `Near ${lineName} · 3 min walk`,
      specsLine: '¥110,000 · 1LDK · 40.00m²',
    },
    {
      id: 'new-mansion-3',
      category: 'Rental mansion',
      imageUrl: IMAGES.mansion,
      imageAlt: 'Family rental mansion',
      stationLine: `Near ${lineName} · 9 min walk`,
      specsLine: '¥128,000 · 3DK · 62.00m²',
    },
  ];
}

export function linePopularRankingCards(lineName: string): RentalPropertyCard[] {
  return [
    {
      id: 'pop-house-1',
      category: 'Rental detached house',
      categoryIcon: '🏠',
      imageUrl: IMAGES.house,
      imageAlt: 'Detached rental house',
      stationLine: `「${lineName}」area · 12 min walk`,
      specsLine: '¥150,000 · 3LDK · 78.00m²',
    },
    {
      id: 'pop-apt-1',
      category: 'Rental apartment',
      categoryIcon: '🏢',
      imageUrl: IMAGES.apartment,
      imageAlt: 'Popular rental apartment',
      stationLine: `「${lineName}」area · 5 min walk`,
      specsLine: '¥92,000 · 1LDK · 36.50m²',
    },
    {
      id: 'pop-mansion-1',
      category: 'Rental mansion',
      categoryIcon: '🏙',
      imageUrl: IMAGES.mansion,
      imageAlt: 'Popular rental mansion',
      stationLine: `「${lineName}」area · 6 min walk`,
      specsLine: '¥125,000 · 2LDK · 52.30m²',
    },
    {
      id: 'pop-apt-2',
      category: 'Rental apartment',
      categoryIcon: '🏢',
      imageUrl: IMAGES.modern,
      imageAlt: 'Station-front rental apartment',
      stationLine: `「${lineName}」area · 2 min walk`,
      specsLine: '¥105,000 · 1DK · 32.00m²',
    },
    {
      id: 'pop-house-2',
      category: 'Rental detached house',
      categoryIcon: '🏠',
      imageUrl: IMAGES.house,
      imageAlt: 'Family rental house',
      stationLine: `「${lineName}」area · 15 min walk`,
      specsLine: '¥138,000 · 4LDK · 92.00m²',
    },
    {
      id: 'pop-mansion-2',
      category: 'Rental mansion',
      categoryIcon: '🏙',
      imageUrl: IMAGES.tower,
      imageAlt: 'Tower mansion rental',
      stationLine: `「${lineName}」area · 4 min walk`,
      specsLine: '¥142,000 · 2LDK · 58.10m²',
    },
    {
      id: 'pop-apt-3',
      category: 'Rental apartment',
      categoryIcon: '🏢',
      imageUrl: IMAGES.compact,
      imageAlt: 'Budget rental apartment',
      stationLine: `「${lineName}」area · 8 min walk`,
      specsLine: '¥68,000 · 1K · 22.50m²',
    },
    {
      id: 'pop-mansion-3',
      category: 'Rental mansion',
      categoryIcon: '🏙',
      imageUrl: IMAGES.mansion,
      imageAlt: 'Corner unit mansion',
      stationLine: `「${lineName}」area · 7 min walk`,
      specsLine: '¥118,000 · 1LDK · 44.00m²',
    },
  ];
}
