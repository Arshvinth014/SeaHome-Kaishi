export type CityInfo = {
  name: string;
  slug: string;
  count: number;
  district?: string;
  coordinates?: { x: number; y: number }; // Relative percentage position fallback
  lat: number;
  lng: number;
};

export type PrefectureCityData = {
  prefectureSlug: string;
  prefectureName: string;
  japaneseName: string;
  totalListings: number;
  centerLat: number;
  centerLng: number;
  zoom: number;
  cities: CityInfo[];
};

export const PREFECTURE_CITY_DATA: Record<string, PrefectureCityData> = {
  akita: {
    prefectureSlug: 'akita',
    prefectureName: 'Akita',
    japaneseName: '秋田県',
    totalListings: 99,
    centerLat: 39.7186,
    centerLng: 140.1024,
    zoom: 9,
    cities: [
      { name: 'Akita City', slug: 'akita-city', count: 75, lat: 39.7186, lng: 140.1024 },
      { name: 'Noshiro City', slug: 'noshiro-city', count: 4, lat: 40.2117, lng: 140.0270 },
      { name: 'Yokote City', slug: 'yokote-city', count: 5, lat: 39.3142, lng: 140.5532 },
      { name: 'Odate City', slug: 'odate-city', count: 1, lat: 40.2721, lng: 140.5623 },
      { name: 'Oga City', slug: 'oga-city', count: 0, lat: 39.8744, lng: 139.8519 },
      { name: 'Yuzawa City', slug: 'yuzawa-city', count: 0, lat: 39.1627, lng: 140.4908 },
      { name: 'Kazuno City', slug: 'kazuno-city', count: 0, lat: 40.2227, lng: 140.7892 },
      { name: 'Yurihonjo City', slug: 'yurihonjo-city', count: 2, lat: 39.3872, lng: 140.0487 },
      { name: 'Katakami City', slug: 'katakami-city', count: 2, lat: 39.8781, lng: 140.0161 },
      { name: 'Daisen City', slug: 'daisen-city', count: 7, lat: 39.4533, lng: 140.4746 },
      { name: 'Kitaakita City', slug: 'kitaakita-city', count: 0, lat: 40.0053, lng: 140.4103 },
      { name: 'Nikaho City', slug: 'nikaho-city', count: 0, lat: 39.2028, lng: 139.9078 },
      { name: 'Semboku City', slug: 'semboku-city', count: 4, lat: 39.7003, lng: 140.7303 },
      { name: 'Kosaka Town, Kazuno District', slug: 'kosaka-town', count: 0, lat: 40.3347, lng: 140.7564 },
      { name: 'Kamikoani Village, Kitaakita District', slug: 'kamikoani-village', count: 0, lat: 39.9575, lng: 140.3106 },
      { name: 'Fujisato Town, Yamamoto District', slug: 'fujisato-town', count: 0, lat: 40.2817, lng: 140.2583 },
      { name: 'Mitane Town, Yamamoto District', slug: 'mitane-town', count: 0, lat: 40.1161, lng: 140.0767 },
      { name: 'Happo-cho, Yamamoto-gun', slug: 'happo-cho', count: 0, lat: 40.3475, lng: 140.0381 },
      { name: 'Gojome Town, Minamiakita District', slug: 'gojome-town', count: 0, lat: 39.9442, lng: 140.1172 },
      { name: 'Hachirogata Town, Minamiakita District', slug: 'hachirogata-town', count: 0, lat: 39.9483, lng: 140.0747 },
      { name: 'Ikawa Town, Minamiakita District', slug: 'ikawa-town', count: 0, lat: 39.9033, lng: 140.0825 },
      { name: 'Ogata Village, Minamiakita District', slug: 'ogata-village', count: 0, lat: 39.9983, lng: 139.9575 },
      { name: 'Misato Town, Senboku District', slug: 'misato-town', count: 0, lat: 39.4589, lng: 140.5628 },
      { name: 'Ugo Town, Ogachi District', slug: 'ugo-town', count: 1, lat: 39.1839, lng: 140.4075 },
      { name: 'Higashinaruse Village, Ogachi District', slug: 'higashinaruse-village', count: 0, lat: 39.1822, lng: 140.6775 },
    ],
  },
  niigata: {
    prefectureSlug: 'niigata',
    prefectureName: 'Niigata',
    japaneseName: '新潟県',
    totalListings: 142,
    centerLat: 37.9026,
    centerLng: 139.0232,
    zoom: 9,
    cities: [
      { name: 'Niigata City — Chuo Ward', slug: 'niigata-chuo', count: 48, lat: 37.9162, lng: 139.0364 },
      { name: 'Niigata City — Nishi Ward', slug: 'niigata-nishi', count: 24, lat: 37.8732, lng: 138.9723 },
      { name: 'Niigata City — Higashi Ward', slug: 'niigata-higashi', count: 16, lat: 37.9351, lng: 139.0882 },
      { name: 'Nagaoka City', slug: 'nagaoka-city', count: 22, lat: 37.4468, lng: 138.8524 },
      { name: 'Joetsu City', slug: 'joetsu-city', count: 12, lat: 37.1480, lng: 138.2361 },
      { name: 'Shibata City', slug: 'shibata-city', count: 8, lat: 37.9481, lng: 139.3278 },
      { name: 'Sanjo City', slug: 'sanjo-city', count: 6, lat: 37.6367, lng: 138.9614 },
      { name: 'Kashiwazaki City', slug: 'kashiwazaki-city', count: 4, lat: 37.3686, lng: 138.5574 },
      { name: 'Sado City (Sado Island)', slug: 'sado-city', count: 2, lat: 38.0167, lng: 138.3667 },
    ],
  },
  tokyo: {
    prefectureSlug: 'tokyo',
    prefectureName: 'Tokyo',
    japaneseName: '東京都',
    totalListings: 1450,
    centerLat: 35.6762,
    centerLng: 139.6503,
    zoom: 11,
    cities: [
      { name: 'Shinjuku Ward', slug: 'shinjuku', count: 320, lat: 35.6938, lng: 139.7034 },
      { name: 'Shibuya Ward', slug: 'shibuya', count: 280, lat: 35.6580, lng: 139.7016 },
      { name: 'Minato Ward', slug: 'minato', count: 210, lat: 35.6581, lng: 139.7514 },
      { name: 'Chiyoda Ward', slug: 'chiyoda', count: 140, lat: 35.6940, lng: 139.7538 },
      { name: 'Toshima Ward (Ikebukuro)', slug: 'toshima', count: 190, lat: 35.7262, lng: 139.7164 },
      { name: 'Taito Ward (Ueno)', slug: 'taito', count: 110, lat: 35.7126, lng: 139.7800 },
      { name: 'Setagaya Ward', slug: 'setagaya', count: 105, lat: 35.6466, lng: 139.6533 },
      { name: 'Nakano Ward', slug: 'nakano', count: 95, lat: 35.7075, lng: 139.6638 },
    ],
  },
  osaka: {
    prefectureSlug: 'osaka',
    prefectureName: 'Osaka',
    japaneseName: '大阪府',
    totalListings: 890,
    centerLat: 34.6937,
    centerLng: 135.5023,
    zoom: 11,
    cities: [
      { name: 'Osaka City — Kita Ward (Umeda)', slug: 'osaka-kita', count: 290, lat: 34.7056, lng: 135.4983 },
      { name: 'Osaka City — Chuo Ward (Namba)', slug: 'osaka-chuo', count: 260, lat: 34.6812, lng: 135.5100 },
      { name: 'Osaka City — Nishi Ward', slug: 'osaka-nishi', count: 120, lat: 34.6756, lng: 135.4890 },
      { name: 'Osaka City — Tennoji Ward', slug: 'osaka-tennoji', count: 85, lat: 34.6567, lng: 135.5222 },
      { name: 'Sakai City', slug: 'sakai-city', count: 75, lat: 34.5733, lng: 135.4831 },
      { name: 'Suita City', slug: 'suita-city', count: 40, lat: 34.7594, lng: 135.5167 },
      { name: 'Toyonaka City', slug: 'toyonaka-city', count: 20, lat: 34.7814, lng: 135.4703 },
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
    centerLat: 37.5000,
    centerLng: 139.0000,
    zoom: 9,
    cities: [
      { name: `${name || slug} Central City`, slug: `${normalized}-central`, count: 25, lat: 37.5100, lng: 139.0100 },
      { name: `${name || slug} North Area`, slug: `${normalized}-north`, count: 12, lat: 37.6500, lng: 139.1200 },
      { name: `${name || slug} South District`, slug: `${normalized}-south`, count: 8, lat: 37.3800, lng: 138.8900 },
    ],
  };
}
