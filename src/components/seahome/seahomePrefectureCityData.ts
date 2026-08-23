export type CityInfo = {
  name: string;
  slug: string;
  count: number;
  district?: string;
  coordinates?: { x: number; y: number }; // Relative percentage position on the prefecture map
};

export type PrefectureCityData = {
  prefectureSlug: string;
  prefectureName: string;
  japaneseName: string;
  totalListings: number;
  svgViewBox: string;
  cities: CityInfo[];
  svgPaths?: { id: string; name: string; d: string; color?: string }[];
};

export const PREFECTURE_CITY_DATA: Record<string, PrefectureCityData> = {
  akita: {
    prefectureSlug: 'akita',
    prefectureName: 'Akita',
    japaneseName: '秋田県',
    totalListings: 99,
    svgViewBox: '0 0 500 600',
    cities: [
      { name: 'Akita City', slug: 'akita-city', count: 75, coordinates: { x: 42, y: 48 } },
      { name: 'Noshiro City', slug: 'noshiro-city', count: 4, coordinates: { x: 38, y: 26 } },
      { name: 'Yokote City', slug: 'yokote-city', count: 5, coordinates: { x: 58, y: 65 } },
      { name: 'Odate City', slug: 'odate-city', count: 1, coordinates: { x: 55, y: 15 } },
      { name: 'Oga City', slug: 'oga-city', count: 0, coordinates: { x: 28, y: 40 } },
      { name: 'Yuzawa City', slug: 'yuzawa-city', count: 0, coordinates: { x: 55, y: 80 } },
      { name: 'Kazuno City', slug: 'kazuno-city', count: 0, coordinates: { x: 68, y: 18 } },
      { name: 'Yurihonjo City', slug: 'yurihonjo-city', count: 2, coordinates: { x: 40, y: 64 } },
      { name: 'Katakami City', slug: 'katakami-city', count: 2, coordinates: { x: 39, y: 41 } },
      { name: 'Daisen City', slug: 'daisen-city', count: 7, coordinates: { x: 58, y: 52 } },
      { name: 'Kitaakita City', slug: 'kitaakita-city', count: 0, coordinates: { x: 52, y: 28 } },
      { name: 'Nikaho City', slug: 'nikaho-city', count: 0, coordinates: { x: 30, y: 70 } },
      { name: 'Semboku City', slug: 'semboku-city', count: 4, coordinates: { x: 65, y: 40 } },
      { name: 'Kosaka Town, Kazuno District', slug: 'kosaka-town', count: 0, coordinates: { x: 64, y: 10 } },
      { name: 'Kamikoani Village, Kitaakita District', slug: 'kamikoani-village', count: 0, coordinates: { x: 50, y: 34 } },
      { name: 'Fujisato Town, Yamamoto District', slug: 'fujisato-town', count: 0, coordinates: { x: 45, y: 18 } },
      { name: 'Mitane Town, Yamamoto District', slug: 'mitane-town', count: 0, coordinates: { x: 40, y: 31 } },
      { name: 'Happo-cho, Yamamoto-gun', slug: 'happo-cho', count: 0, coordinates: { x: 32, y: 19 } },
      { name: 'Gojome Town, Minamiakita District', slug: 'gojome-town', count: 0, coordinates: { x: 48, y: 39 } },
      { name: 'Hachirogata Town, Minamiakita District', slug: 'hachirogata-town', count: 0, coordinates: { x: 42, y: 39 } },
      { name: 'Ikawa Town, Minamiakita District', slug: 'ikawa-town', count: 0, coordinates: { x: 41, y: 43 } },
      { name: 'Ogata Village, Minamiakita District', slug: 'ogata-village', count: 0, coordinates: { x: 35, y: 37 } },
      { name: 'Misato Town, Senboku District', slug: 'misato-town', count: 0, coordinates: { x: 60, y: 58 } },
      { name: 'Ugo Town, Ogachi District', slug: 'ugo-town', count: 1, coordinates: { x: 50, y: 72 } },
      { name: 'Ogachi District, Higashinaruse Village', slug: 'higashinaruse-village', count: 0, coordinates: { x: 64, y: 74 } },
    ],
  },
  niigata: {
    prefectureSlug: 'niigata',
    prefectureName: 'Niigata',
    japaneseName: '新潟県',
    totalListings: 142,
    svgViewBox: '0 0 500 600',
    cities: [
      { name: 'Niigata City — Chuo Ward', slug: 'niigata-chuo', count: 48, coordinates: { x: 60, y: 30 } },
      { name: 'Niigata City — Nishi Ward', slug: 'niigata-nishi', count: 24, coordinates: { x: 52, y: 34 } },
      { name: 'Niigata City — Higashi Ward', slug: 'niigata-higashi', count: 16, coordinates: { x: 65, y: 26 } },
      { name: 'Nagaoka City', slug: 'nagaoka-city', count: 22, coordinates: { x: 45, y: 55 } },
      { name: 'Joetsu City', slug: 'joetsu-city', count: 12, coordinates: { x: 25, y: 75 } },
      { name: 'Shibata City', slug: 'shibata-city', count: 8, coordinates: { x: 70, y: 22 } },
      { name: 'Sanjo City', slug: 'sanjo-city', count: 6, coordinates: { x: 52, y: 44 } },
      { name: 'Kashiwazaki City', slug: 'kashiwazaki-city', count: 4, coordinates: { x: 35, y: 65 } },
      { name: 'Sado City (Sado Island)', slug: 'sado-city', count: 2, coordinates: { x: 25, y: 25 } },
    ],
  },
  tokyo: {
    prefectureSlug: 'tokyo',
    prefectureName: 'Tokyo',
    japaneseName: '東京都',
    totalListings: 1450,
    svgViewBox: '0 0 500 600',
    cities: [
      { name: 'Shinjuku Ward', slug: 'shinjuku', count: 320, coordinates: { x: 55, y: 45 } },
      { name: 'Shibuya Ward', slug: 'shibuya', count: 280, coordinates: { x: 52, y: 52 } },
      { name: 'Minato Ward', slug: 'minato', count: 210, coordinates: { x: 58, y: 54 } },
      { name: 'Chiyoda Ward', slug: 'chiyoda', count: 140, coordinates: { x: 60, y: 46 } },
      { name: 'Toshima Ward (Ikebukuro)', slug: 'toshima', count: 190, coordinates: { x: 52, y: 38 } },
      { name: 'Taito Ward (Ueno)', slug: 'taito', count: 110, coordinates: { x: 64, y: 40 } },
      { name: 'Setagaya Ward', slug: 'setagaya', count: 105, coordinates: { x: 42, y: 56 } },
      { name: 'Nakano Ward', slug: 'nakano', count: 95, coordinates: { x: 46, y: 44 } },
    ],
  },
  osaka: {
    prefectureSlug: 'osaka',
    prefectureName: 'Osaka',
    japaneseName: '大阪府',
    totalListings: 890,
    svgViewBox: '0 0 500 600',
    cities: [
      { name: 'Osaka City — Kita Ward (Umeda)', slug: 'osaka-kita', count: 290, coordinates: { x: 48, y: 35 } },
      { name: 'Osaka City — Chuo Ward (Namba)', slug: 'osaka-chuo', count: 260, coordinates: { x: 50, y: 42 } },
      { name: 'Osaka City — Nishi Ward', slug: 'osaka-nishi', count: 120, coordinates: { x: 44, y: 40 } },
      { name: 'Osaka City — Tennoji Ward', slug: 'osaka-tennoji', count: 85, coordinates: { x: 54, y: 48 } },
      { name: 'Sakai City', slug: 'sakai-city', count: 75, coordinates: { x: 46, y: 62 } },
      { name: 'Suita City', slug: 'suita-city', count: 40, coordinates: { x: 48, y: 24 } },
      { name: 'Toyonaka City', slug: 'toyonaka-city', count: 20, coordinates: { x: 40, y: 22 } },
    ],
  },
};

/** Helper to retrieve prefecture city data with fallback for unlisted prefectures */
export function getPrefectureCityData(slug: string, name: string): PrefectureCityData {
  const normalized = (slug || 'akita').toLowerCase().trim();
  if (PREFECTURE_CITY_DATA[normalized]) {
    return PREFECTURE_CITY_DATA[normalized];
  }

  // Fallback dynamic generator for any prefecture
  return {
    prefectureSlug: normalized,
    prefectureName: name || slug.charAt(0).toUpperCase() + slug.slice(1),
    japaneseName: `${name || slug}県`,
    totalListings: 45,
    svgViewBox: '0 0 500 600',
    cities: [
      { name: `${name || slug} Central City`, slug: `${normalized}-central`, count: 25, coordinates: { x: 50, y: 45 } },
      { name: `${name || slug} North Area`, slug: `${normalized}-north`, count: 12, coordinates: { x: 48, y: 25 } },
      { name: `${name || slug} South District`, slug: `${normalized}-south`, count: 8, coordinates: { x: 52, y: 65 } },
    ],
  };
}
