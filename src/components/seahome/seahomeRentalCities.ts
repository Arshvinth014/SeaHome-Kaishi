/** Major cities / areas for prefecture drill-down on the rental map. */
export type RentalCity = { name: string; slug: string };

export const RENTAL_CITIES_BY_PREFECTURE: Record<string, RentalCity[]> = {
  hokkaido: [
    { name: 'Sapporo', slug: 'sapporo' },
    { name: 'Hakodate', slug: 'hakodate' },
    { name: 'Asahikawa', slug: 'asahikawa' },
  ],
  tokyo: [
    { name: 'Shinjuku', slug: 'shinjuku' },
    { name: 'Shibuya', slug: 'shibuya' },
    { name: 'Ikebukuro', slug: 'ikebukuro' },
    { name: 'Ueno', slug: 'ueno' },
  ],
  kanagawa: [
    { name: 'Yokohama', slug: 'yokohama' },
    { name: 'Kawasaki', slug: 'kawasaki' },
    { name: 'Fujisawa', slug: 'fujisawa' },
  ],
  osaka: [
    { name: 'Umeda', slug: 'umeda' },
    { name: 'Namba', slug: 'namba' },
    { name: 'Tennoji', slug: 'tennoji' },
  ],
  kyoto: [
    { name: 'Kyoto City', slug: 'kyoto-city' },
    { name: 'Uji', slug: 'uji' },
  ],
  aichi: [
    { name: 'Nagoya', slug: 'nagoya' },
    { name: 'Toyota', slug: 'toyota' },
  ],
  fukuoka: [
    { name: 'Fukuoka City', slug: 'fukuoka-city' },
    { name: 'Kitakyushu', slug: 'kitakyushu' },
  ],
};

/** Default city suggestions when a prefecture has no curated list. */
export function citiesForPrefecture(prefectureSlug: string, prefectureName: string): RentalCity[] {
  const curated = RENTAL_CITIES_BY_PREFECTURE[prefectureSlug];
  if (curated?.length) return curated;
  return [
    { name: `${prefectureName} — all areas`, slug: prefectureSlug },
    { name: `${prefectureName} — city center`, slug: `${prefectureSlug}-city` },
  ];
}
