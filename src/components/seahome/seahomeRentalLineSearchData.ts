/** Demo rail lines for rental search-by-line pages (listing counts are illustrative). */
export type RentalRailLine = {
  id: string;
  name: string;
  listingCount: number;
};

export type RentalRailOperator = {
  id: string;
  name: string;
  lines: RentalRailLine[];
};

const CHIBA_OPERATORS: RentalRailOperator[] = [
  {
    id: 'jr',
    name: 'JR',
    lines: [
      { id: 'jr-sobu', name: 'JR Sobu Line', listingCount: 27282 },
      { id: 'jr-keiyo', name: 'JR Keiyo Line', listingCount: 12440 },
      { id: 'jr-uchibo', name: 'JR Uchibo Line', listingCount: 3890 },
      { id: 'jr-sotobo', name: 'JR Sotobo Line', listingCount: 5120 },
      { id: 'jr-narita', name: 'JR Narita Line', listingCount: 4210 },
      { id: 'jr-kashima', name: 'JR Kashima Line', listingCount: 980 },
      { id: 'jr-kururi', name: 'JR Kururi Line', listingCount: 420 },
      { id: 'jr-sotetsu', name: 'JR Sotetsu Main (via)', listingCount: 2100 },
      { id: 'jr-negishi', name: 'JR Negishi Line (via)', listingCount: 8900 },
    ],
  },
  {
    id: 'tokyo-metro',
    name: 'Tokyo Metro',
    lines: [{ id: 'metro-tozai', name: 'Tokyo Metro Tozai Line', listingCount: 18500 }],
  },
  {
    id: 'toei',
    name: 'Tokyo Metropolitan Bureau of Transportation',
    lines: [
      { id: 'toei-shinjuku', name: 'Toei Shinjuku Line', listingCount: 6200 },
      { id: 'toei-oedo', name: 'Toei Oedo Line', listingCount: 5400 },
    ],
  },
  {
    id: 'keisei',
    name: 'Keisei Electric Railway',
    lines: [
      { id: 'keisei-main', name: 'Keisei Main Line', listingCount: 11200 },
      { id: 'keisei-chiba', name: 'Keisei Chiba Line', listingCount: 2100 },
      { id: 'keisei-chihara', name: 'Keisei Chihara Line', listingCount: 890 },
    ],
  },
  {
    id: 'keikyu',
    name: 'Keikyu Corporation',
    lines: [
      { id: 'keikyu-main', name: 'Keikyu Main Line', listingCount: 9800 },
      { id: 'keikyu-kurihama', name: 'Keikyu Kurihama Line', listingCount: 1200 },
    ],
  },
  {
    id: 'chiba-monorail',
    name: 'Chiba Urban Monorail',
    lines: [{ id: 'chiba-monorail-1', name: 'Chiba Urban Monorail Line 1', listingCount: 640 }],
  },
  {
    id: 'choshi',
    name: 'Choshi Electric Railway',
    lines: [{ id: 'choshi-dentetsu', name: 'Choshi Electric Railway Line', listingCount: 42 }],
  },
  {
    id: 'isumi',
    name: 'Isumi Railway',
    lines: [{ id: 'isumi', name: 'Isumi Line', listingCount: 18 }],
  },
  {
    id: 'kominato',
    name: 'Kominato Railway',
    lines: [{ id: 'kominato', name: 'Kominato Railway Line', listingCount: 12 }],
  },
  {
    id: 'shibayama',
    name: 'Shibayama Railway',
    lines: [{ id: 'shibayama', name: 'Shibayama Railway Line', listingCount: 8 }],
  },
  {
    id: 'toyo',
    name: 'Toyo Rapid Railway',
    lines: [{ id: 'toyo-rapid', name: 'Toyo Rapid Railway Line', listingCount: 1100 }],
  },
  {
    id: 'yukarigaoka',
    name: 'Yamaman Yukarigaoka',
    lines: [{ id: 'yukarigaoka', name: 'Yamaman Yukarigaoka Line', listingCount: 95 }],
  },
  {
    id: 'tsukuba',
    name: 'Tsukuba Express',
    lines: [{ id: 'tx', name: 'Tsukuba Express (TX)', listingCount: 4200 }],
  },
  {
    id: 'twr',
    name: 'Tokyo Waterfront Area Rapid Transit',
    lines: [{ id: 'rinkai', name: 'Rinkai Line', listingCount: 3100 }],
  },
  {
    id: 'yurikamome',
    name: 'Yurikamome',
    lines: [{ id: 'yurikamome', name: 'Yurikamome Line', listingCount: 2800 }],
  },
];

const TOKYO_OPERATORS: RentalRailOperator[] = [
  {
    id: 'jr',
    name: 'JR',
    lines: [
      { id: 'jr-yamanote', name: 'JR Yamanote Line', listingCount: 45200 },
      { id: 'jr-chuo', name: 'JR Chuo / Sobu Line', listingCount: 38100 },
      { id: 'jr-keihin-tohoku', name: 'JR Keihin-Tohoku Line', listingCount: 22400 },
      { id: 'jr-tokaido', name: 'JR Tokaido Line', listingCount: 19800 },
      { id: 'jr-saikyo', name: 'JR Saikyo Line', listingCount: 14200 },
    ],
  },
  {
    id: 'tokyo-metro',
    name: 'Tokyo Metro',
    lines: [
      { id: 'metro-ginza', name: 'Ginza Line', listingCount: 12400 },
      { id: 'metro-marunouchi', name: 'Marunouchi Line', listingCount: 11800 },
      { id: 'metro-hibiya', name: 'Hibiya Line', listingCount: 10200 },
      { id: 'metro-tozai', name: 'Tozai Line', listingCount: 18500 },
      { id: 'metro-chiyoda', name: 'Chiyoda Line', listingCount: 9600 },
      { id: 'metro-yurakucho', name: 'Yurakucho / Fukutoshin Line', listingCount: 11200 },
    ],
  },
  {
    id: 'toei',
    name: 'Toei Subway',
    lines: [
      { id: 'toei-asakusa', name: 'Asakusa Line', listingCount: 7400 },
      { id: 'toei-mita', name: 'Mita Line', listingCount: 5200 },
      { id: 'toei-shinjuku', name: 'Shinjuku Line', listingCount: 6200 },
      { id: 'toei-oedo', name: 'Oedo Line', listingCount: 8900 },
    ],
  },
  {
    id: 'private',
    name: 'Major private railways',
    lines: [
      { id: 'odakyu', name: 'Odakyu Line', listingCount: 15600 },
      { id: 'keio', name: 'Keio Line', listingCount: 12800 },
      { id: 'tobu', name: 'Tobu Skytree Line', listingCount: 9400 },
      { id: 'seibu', name: 'Seibu Shinjuku / Ikebukuro Line', listingCount: 11200 },
    ],
  },
];

const KANAGAWA_OPERATORS: RentalRailOperator[] = [
  {
    id: 'jr',
    name: 'JR',
    lines: [
      { id: 'jr-tokaido', name: 'JR Tokaido Line', listingCount: 14200 },
      { id: 'jr-yokosuka', name: 'JR Yokosuka Line', listingCount: 11800 },
      { id: 'jr-sotetsu', name: 'JR / Sotetsu Main', listingCount: 8600 },
    ],
  },
  {
    id: 'private',
    name: 'Private railways',
    lines: [
      { id: 'odakyu', name: 'Odakyu Line', listingCount: 12400 },
      { id: 'keikyu', name: 'Keikyu Main Line', listingCount: 9800 },
      { id: 'sotetsu', name: 'Sotetsu Line', listingCount: 6200 },
    ],
  },
];

const BY_PREFECTURE: Record<string, RentalRailOperator[]> = {
  chiba: CHIBA_OPERATORS,
  tokyo: TOKYO_OPERATORS,
  kanagawa: KANAGAWA_OPERATORS,
};

function genericOperators(prefectureName: string): RentalRailOperator[] {
  return [
    {
      id: 'jr',
      name: 'JR',
      lines: [
        { id: 'jr-main', name: `JR lines in ${prefectureName}`, listingCount: 8400 },
        { id: 'jr-local', name: `JR local lines in ${prefectureName}`, listingCount: 3200 },
      ],
    },
    {
      id: 'private',
      name: 'Private railways',
      lines: [
        { id: 'private-1', name: `Major private line A (${prefectureName})`, listingCount: 2100 },
        { id: 'private-2', name: `Major private line B (${prefectureName})`, listingCount: 1800 },
      ],
    },
  ];
}

export function railOperatorsForPrefecture(prefectureSlug: string, prefectureName: string): RentalRailOperator[] {
  return BY_PREFECTURE[prefectureSlug] ?? genericOperators(prefectureName);
}

export const RENTAL_PORTAL_PATH = '/seahome-real-estates/rental';

export function rentalSearchByLineStationPath(locationSlug: string): string {
  const slug = encodeURIComponent(locationSlug.trim().toLowerCase());
  return `${RENTAL_PORTAL_PATH}/search-by-line-station/${slug}`;
}

export function rentalLineDetailPath(locationSlug: string, lineId: string): string {
  const loc = encodeURIComponent(locationSlug.trim().toLowerCase());
  const line = encodeURIComponent(lineId.trim().toLowerCase());
  return `${RENTAL_PORTAL_PATH}/search-by-line-station/${loc}/${line}`;
}

export function rentalStationResultsPath(
  locationSlug: string,
  lineSlug: string,
  stationSlug: string
): string {
  const loc = encodeURIComponent(locationSlug.trim().toLowerCase());
  const line = encodeURIComponent(lineSlug.trim().toLowerCase());
  const station = encodeURIComponent(stationSlug.trim().toLowerCase());
  return `${RENTAL_PORTAL_PATH}/search-by-line-station/${loc}/${line}/${station}`;
}

export function rentalPropertyDetailPath(
  locationSlug: string,
  lineSlug: string,
  stationSlug: string,
  apartmentId: string
): string {
  const loc = encodeURIComponent(locationSlug.trim().toLowerCase());
  const line = encodeURIComponent(lineSlug.trim().toLowerCase());
  const station = encodeURIComponent(stationSlug.trim().toLowerCase());
  const apt = encodeURIComponent(apartmentId.trim().toLowerCase());
  return `${RENTAL_PORTAL_PATH}/search-by-line-station/${loc}/${line}/${station}/${apt}`;
}

/** URL for embedded Seahome listings (synced with browser history). */
export function rentalListingsUrl(listingsPath: string): string {
  const params = new URLSearchParams();
  params.set('view', 'listings');
  const path = listingsPath.startsWith('/') ? listingsPath : `/${listingsPath}`;
  params.set('path', path);
  return `${RENTAL_PORTAL_PATH}?${params.toString()}`;
}

export function formatListingCount(n: number): string {
  return n.toLocaleString('en-US');
}
