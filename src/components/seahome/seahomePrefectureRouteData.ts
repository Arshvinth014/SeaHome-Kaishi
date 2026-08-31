export interface RouteStation {
  name: string;
  slug: string;
  count: number;
  isHub?: boolean;
}

export interface RailwayLineData {
  id: string;
  lineName: string;
  company: string;
  color: string; // Tailwind border/bg color class
  hexColor: string;
  totalListings: number;
  stations: RouteStation[];
}

export interface PrefectureRouteMapData {
  prefectureSlug: string;
  prefectureName: string;
  japaneseName: string;
  totalListings: number;
  lines: RailwayLineData[];
}

export const PREFECTURE_ROUTE_DATABASE: Record<string, PrefectureRouteMapData> = {
  nagano: {
    prefectureSlug: 'nagano',
    prefectureName: 'Nagano',
    japaneseName: 'Nagano Prefecture',
    totalListings: 158,
    lines: [
      {
        id: 'hokuriku-shinkansen',
        lineName: 'JR Hokuriku Shinkansen Line',
        company: 'JR East',
        color: 'border-rose-500 bg-rose-50 text-rose-700',
        hexColor: '#e11d48',
        totalListings: 64,
        stations: [
          { name: 'Karuizawa Station', slug: 'karuizawa-station', count: 18, isHub: true },
          { name: 'Sakudaira Station', slug: 'sakudaira-station', count: 12 },
          { name: 'Ueda Station', slug: 'ueda-station', count: 24, isHub: true },
          { name: 'Nagano Station', slug: 'nagano-station', count: 68, isHub: true },
          { name: 'Iiyama Station', slug: 'iiyama-station', count: 8 },
        ],
      },
      {
        id: 'shinetsu-main-line',
        lineName: 'JR Shinetsu Main Line',
        company: 'JR East',
        color: 'border-emerald-500 bg-emerald-50 text-emerald-700',
        hexColor: '#10b981',
        totalListings: 52,
        stations: [
          { name: 'Shinonoi Station', slug: 'shinonoi-station', count: 12 },
          { name: 'Amori Station', slug: 'amori-station', count: 9 },
          { name: 'Nagano Station', slug: 'nagano-station', count: 68, isHub: true },
          { name: 'Kita-Nagano Station', slug: 'kita-nagano-station', count: 15 },
          { name: 'Sanryo Station', slug: 'sanryo-station', count: 6 },
        ],
      },
      {
        id: 'shinano-railway',
        lineName: 'Shinano Railway Line',
        company: 'Shinano Railway',
        color: 'border-sky-500 bg-sky-50 text-sky-700',
        hexColor: '#0284c7',
        totalListings: 48,
        stations: [
          { name: 'Karuizawa Station', slug: 'karuizawa-station', count: 18, isHub: true },
          { name: 'Komoro Station', slug: 'komoro-station', count: 14 },
          { name: 'Ueda Station', slug: 'ueda-station', count: 24, isHub: true },
          { name: 'Togura Station', slug: 'togura-station', count: 8 },
          { name: 'Yashiro Station', slug: 'yashiro-station', count: 11 },
          { name: 'Shinonoi Station', slug: 'shinonoi-station', count: 12 },
        ],
      },
      {
        id: 'nagano-dentetsu',
        lineName: 'Nagano Electric Railway Line (Nagaden)',
        company: 'Nagano Electric Railway',
        color: 'border-purple-500 bg-purple-50 text-purple-700',
        hexColor: '#8b5cf6',
        totalListings: 39,
        stations: [
          { name: 'Nagano Station', slug: 'nagano-station', count: 68, isHub: true },
          { name: 'Shiroyama Station', slug: 'shiroyama-station', count: 10 },
          { name: 'Hongo Station', slug: 'hongo-station', count: 7 },
          { name: 'Suzaka Station', slug: 'suzaka-station', count: 16 },
          { name: 'Obuse Station', slug: 'obuse-station', count: 9 },
          { name: 'Yudanaka Station', slug: 'yudanaka-station', count: 5 },
        ],
      },
      {
        id: 'jr-chuo-main-line',
        lineName: 'JR Chuo Main Line (East Section)',
        company: 'JR East',
        color: 'border-amber-500 bg-amber-50 text-amber-700',
        hexColor: '#f59e0b',
        totalListings: 45,
        stations: [
          { name: 'Chino Station', slug: 'chino-station', count: 11 },
          { name: 'Kamisuwa Station', slug: 'kamisuwa-station', count: 15 },
          { name: 'Okaya Station', slug: 'okaya-station', count: 14 },
          { name: 'Shiojiri Station', slug: 'shiojiri-station', count: 19, isHub: true },
          { name: 'Matsumoto Station', slug: 'matsumoto-station', count: 35, isHub: true },
        ],
      },
    ],
  },
  niigata: {
    prefectureSlug: 'niigata',
    prefectureName: 'Niigata',
    japaneseName: 'Niigata Prefecture',
    totalListings: 142,
    lines: [
      {
        id: 'echigo-line',
        lineName: 'JR Echigo Line',
        company: 'JR East',
        color: 'border-sky-500 bg-sky-50 text-sky-700',
        hexColor: '#0284c7',
        totalListings: 58,
        stations: [
          { name: 'Niigata Station', slug: 'niigata-station', count: 48, isHub: true },
          { name: 'Hakusan Station', slug: 'hakusan-station', count: 16 },
          { name: 'Sekiya Station', slug: 'sekiya-station', count: 12 },
          { name: 'Aoyama Station', slug: 'aoyama-station', count: 14 },
          { name: 'Terao Station', slug: 'terao-station', count: 9 },
        ],
      },
      {
        id: 'joetsu-shinkansen',
        lineName: 'JR Joetsu Shinkansen Line',
        company: 'JR East',
        color: 'border-emerald-500 bg-emerald-50 text-emerald-700',
        hexColor: '#10b981',
        totalListings: 62,
        stations: [
          { name: 'Echigo-Yuzawa Station', slug: 'echigo-yuzawa-station', count: 15 },
          { name: 'Urasa Station', slug: 'urasa-station', count: 8 },
          { name: 'Nagaoka Station', slug: 'nagaoka-station', count: 22, isHub: true },
          { name: 'Tsubame-Sanjo Station', slug: 'tsubame-sanjo-station', count: 14 },
          { name: 'Niigata Station', slug: 'niigata-station', count: 48, isHub: true },
        ],
      },
    ],
  },
  tokyo: {
    prefectureSlug: 'tokyo',
    prefectureName: 'Tokyo',
    japaneseName: 'Tokyo Metropolis',
    totalListings: 1450,
    lines: [
      {
        id: 'yamanote-line',
        lineName: 'JR Yamanote Loop Line',
        company: 'JR East',
        color: 'border-lime-500 bg-lime-50 text-lime-700',
        hexColor: '#84cc16',
        totalListings: 780,
        stations: [
          { name: 'Shinjuku Station', slug: 'shinjuku-station', count: 320, isHub: true },
          { name: 'Shibuya Station', slug: 'shibuya-station', count: 280, isHub: true },
          { name: 'Shinagawa Station', slug: 'shinagawa-station', count: 210, isHub: true },
          { name: 'Tokyo Station', slug: 'tokyo-station', count: 240, isHub: true },
          { name: 'Ikebukuro Station', slug: 'ikebukuro-station', count: 190, isHub: true },
        ],
      },
    ],
  },
};

export function getPrefectureRouteData(slug: string, fallbackName?: string): PrefectureRouteMapData {
  const norm = (slug || 'nagano').toLowerCase().trim();
  if (PREFECTURE_ROUTE_DATABASE[norm]) {
    return PREFECTURE_ROUTE_DATABASE[norm];
  }

  const name = fallbackName || norm.charAt(0).toUpperCase() + norm.slice(1);

  return {
    prefectureSlug: norm,
    prefectureName: name,
    japaneseName: `${name} Prefecture`,
    totalListings: 120,
    lines: [
      {
        id: `${norm}-main-line`,
        lineName: `JR ${name} Main Railway Line`,
        company: 'JR Network',
        color: 'border-sky-500 bg-sky-50 text-sky-700',
        hexColor: '#0284c7',
        totalListings: 54,
        stations: [
          { name: `${name} Central Station`, slug: `${norm}-central`, count: 42, isHub: true },
          { name: `${name} North Station`, slug: `${norm}-north`, count: 18 },
          { name: `${name} South Station`, slug: `${norm}-south`, count: 15 },
          { name: `${name} West Station`, slug: `${norm}-west`, count: 12 },
        ],
      },
      {
        id: `${norm}-express-line`,
        lineName: `${name} Express Line`,
        company: 'Regional Railway',
        color: 'border-indigo-500 bg-indigo-50 text-indigo-700',
        hexColor: '#6366f1',
        totalListings: 38,
        stations: [
          { name: `${name} Central Station`, slug: `${norm}-central`, count: 42, isHub: true },
          { name: `${name} East Station`, slug: `${norm}-east`, count: 14 },
          { name: `${name} Park Station`, slug: `${norm}-park`, count: 9 },
        ],
      },
    ],
  };
}
