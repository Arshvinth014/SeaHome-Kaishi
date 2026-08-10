export type RentalPrefecture = { name: string; slug: string };

export type RentalRegion = {
  id: string;
  label: string;
  prefectures: RentalPrefecture[];
};

export const RENTAL_LISTING_COUNT = '12,400+';

export const RENTAL_REGIONS: RentalRegion[] = [
  { id: 'hokkaido', label: 'Hokkaido', prefectures: [{ name: 'Hokkaido', slug: 'hokkaido' }] },
  {
    id: 'tohoku',
    label: 'Tohoku',
    prefectures: [
      { name: 'Aomori', slug: 'aomori' },
      { name: 'Iwate', slug: 'iwate' },
      { name: 'Miyagi', slug: 'miyagi' },
      { name: 'Akita', slug: 'akita' },
      { name: 'Yamagata', slug: 'yamagata' },
      { name: 'Fukushima', slug: 'fukushima' },
    ],
  },
  {
    id: 'kanto',
    label: 'Kanto',
    prefectures: [
      { name: 'Tokyo', slug: 'tokyo' },
      { name: 'Kanagawa', slug: 'kanagawa' },
      { name: 'Saitama', slug: 'saitama' },
      { name: 'Chiba', slug: 'chiba' },
      { name: 'Ibaraki', slug: 'ibaraki' },
      { name: 'Tochigi', slug: 'tochigi' },
      { name: 'Gunma', slug: 'gunma' },
    ],
  },
  {
    id: 'chubu',
    label: 'Chubu',
    prefectures: [
      { name: 'Niigata', slug: 'niigata' },
      { name: 'Toyama', slug: 'toyama' },
      { name: 'Ishikawa', slug: 'ishikawa' },
      { name: 'Fukui', slug: 'fukui' },
      { name: 'Yamanashi', slug: 'yamanashi' },
      { name: 'Nagano', slug: 'nagano' },
      { name: 'Gifu', slug: 'gifu' },
      { name: 'Shizuoka', slug: 'shizuoka' },
      { name: 'Aichi', slug: 'aichi' },
    ],
  },
  {
    id: 'kinki',
    label: 'Kinki',
    prefectures: [
      { name: 'Mie', slug: 'mie' },
      { name: 'Shiga', slug: 'shiga' },
      { name: 'Kyoto', slug: 'kyoto' },
      { name: 'Osaka', slug: 'osaka' },
      { name: 'Hyogo', slug: 'hyogo' },
      { name: 'Nara', slug: 'nara' },
      { name: 'Wakayama', slug: 'wakayama' },
    ],
  },
  {
    id: 'chugoku',
    label: 'Chugoku',
    prefectures: [
      { name: 'Tottori', slug: 'tottori' },
      { name: 'Shimane', slug: 'shimane' },
      { name: 'Okayama', slug: 'okayama' },
      { name: 'Hiroshima', slug: 'hiroshima' },
      { name: 'Yamaguchi', slug: 'yamaguchi' },
    ],
  },
  {
    id: 'shikoku',
    label: 'Shikoku',
    prefectures: [
      { name: 'Tokushima', slug: 'tokushima' },
      { name: 'Kagawa', slug: 'kagawa' },
      { name: 'Ehime', slug: 'ehime' },
      { name: 'Kochi', slug: 'kochi' },
    ],
  },
  {
    id: 'kyushu',
    label: 'Kyushu',
    prefectures: [
      { name: 'Fukuoka', slug: 'fukuoka' },
      { name: 'Saga', slug: 'saga' },
      { name: 'Nagasaki', slug: 'nagasaki' },
      { name: 'Kumamoto', slug: 'kumamoto' },
      { name: 'Oita', slug: 'oita' },
      { name: 'Miyazaki', slug: 'miyazaki' },
      { name: 'Kagoshima', slug: 'kagoshima' },
    ],
  },
  { id: 'okinawa', label: 'Okinawa', prefectures: [{ name: 'Okinawa', slug: 'okinawa' }] },
];

export const RENTAL_SIDE_FILTERS = [
  { id: 'rent', label: 'Search by rent', sub: 'Monthly budget' },
  { id: 'layout', label: 'Search by layout', sub: '1K, 1LDK, 2LDK…' },
  { id: 'market', label: 'Rent market trends', sub: 'Area price guides' },
  { id: 'commute', label: 'Search by commute', sub: 'Time from station' },
  { id: 'schools', label: 'Search by schools', sub: 'District & access' },
  { id: 'company', label: 'Search by company area', sub: 'Near workplaces' },
  { id: 'university', label: 'Universities & colleges', sub: 'Student housing' },
  { id: 'shopping', label: 'Shopping & daily life', sub: 'Convenience' },
  { id: 'features', label: 'Special features', sub: 'Pet-friendly, furnished…' },
] as const;

export const RENTAL_NEW_LISTING_LINKS = [
  'Rental apartments',
  'Rental houses',
  'Share houses & co-living',
  'Furnished rentals',
  'No key money / deposit support',
  'Pet-friendly homes',
  'Designer & renovated units',
  'Short-term & monthly contracts',
] as const;
