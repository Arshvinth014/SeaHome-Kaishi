export interface NewListingItem {
    id: string;
    category: string;
    imageUrl: string;
    stationWalk: string;
    price: string;
    size: string;
    link: string;
}

export interface NamedLink {
    label: string;
    path: string;
}

export const WHAT_S_NEW_LISTINGS: NewListingItem[] = [
    {
        id: '1082505888',
        category: 'Rental office',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
        stationWalk: '3-minute walk from Shimo-Ochiai Station',
        price: '165,000 yen',
        size: '20.00 m²',
        link: '/seahome-real-estates/rental-office/detail/1082505888',
    },
    {
        id: '1082505889',
        category: 'Rental office',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
        stationWalk: '8-minute walk from Kamikitadai Station',
        price: '924,000 yen',
        size: '502.64 m²',
        link: '/seahome-real-estates/rental-office/detail/1082505889',
    },
    {
        id: '1082505890',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80',
        stationWalk: '3-minute walk from Akaike Station',
        price: '159,500 yen',
        size: '52.00 m²',
        link: '/seahome-real-estates/rental-office/detail/1082505890',
    },
    {
        id: '1082505891',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
        stationWalk: '2-minute walk from Tsukamoto Station',
        price: '969,200 yen',
        size: '199.96 m²',
        link: '/seahome-real-estates/rental-office/detail/1082505891',
    },
    {
        id: '1082505892',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80',
        stationWalk: '4-minute walk from Tenjinbashisuji 6-chome Station',
        price: '379,280 yen',
        size: '114.00 m²',
        link: '/seahome-real-estates/rental-office/detail/1082505892',
    },
    {
        id: '1082505893',
        category: 'Rental office',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
        stationWalk: '5-minute walk from Shinagawa Station',
        price: '450,000 yen',
        size: '85.50 m²',
        link: '/seahome-real-estates/rental-office/detail/1082505893',
    },
    {
        id: '1082505894',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
        stationWalk: '1-minute walk from Roppongi Station',
        price: '1,200,000 yen',
        size: '310.00 m²',
        link: '/seahome-real-estates/rental-office/detail/1082505894',
    },
];

export const NOTABLE_CITIES_DISTRICTS: NamedLink[] = [
    { label: 'Shibuya Ward', path: '/seahome-real-estates/rental-office/tokyo/city/shibuya-ward' },
    { label: 'Shinjuku Ward', path: '/seahome-real-estates/rental-office/tokyo/city/shinjuku-ward' },
    { label: 'Chuo Ward', path: '/seahome-real-estates/rental-office/tokyo/city/chuo-ward' },
    { label: 'Hachioji City', path: '/seahome-real-estates/rental-office/tokyo/city/hachioji-city' },
    { label: 'Tachikawa City', path: '/seahome-real-estates/rental-office/tokyo/city/tachikawa-city' },
    { label: 'Setagaya Ward', path: '/seahome-real-estates/rental-office/tokyo/city/setagaya-ward' },
    { label: 'Minato Ward', path: '/seahome-real-estates/rental-office/tokyo/city/minato-ward' },
    { label: 'Morioka City', path: '/seahome-real-estates/rental-office/iwate/city/morioka-city' },
    { label: 'Koriyama City', path: '/seahome-real-estates/rental-office/fukushima/city/koriyama-city' },
    { label: 'Chuo Ward, Niigata City', path: '/seahome-real-estates/rental-office/niigata/city/niigata-chuo' },
    { label: 'Utsunomiya City', path: '/seahome-real-estates/rental-office/tochigi/city/utsunomiya-city' },
    { label: 'Takasaki City', path: '/seahome-real-estates/rental-office/gunma/city/takasaki-city' },
    { label: 'Kawaguchi City', path: '/seahome-real-estates/rental-office/saitama/city/kawaguchi-city' },
    { label: 'Funabashi City', path: '/seahome-real-estates/rental-office/chiba/city/funabashi-city' },
    { label: 'Kashiwa City', path: '/seahome-real-estates/rental-office/chiba/city/kashiwa-city' },
    { label: 'Aoi Ward, Shizuoka City', path: '/seahome-real-estates/rental-office/shizuoka/city/shizuoka-aoi' },
    { label: 'Naka Ward, Nagoya City', path: '/seahome-real-estates/rental-office/aichi/city/nagoya-naka' },
    { label: 'Kita Ward, Okayama City', path: '/seahome-real-estates/rental-office/okayama/city/okayama-kita' },
];

export const STATIONS_TO_WATCH: NamedLink[] = [
    { label: 'Ebisu Station', path: '/seahome-real-estates/rental-office/tokyo/ebisu-st/station-list' },
    { label: 'Ikebukuro Station', path: '/seahome-real-estates/rental-office/tokyo/ikebukuro-st/station-list' },
    { label: 'Jiyugaoka Station', path: '/seahome-real-estates/rental-office/tokyo/jiyugaoka-st/station-list' },
    { label: 'Kinshicho Station', path: '/seahome-real-estates/rental-office/tokyo/kinshicho-st/station-list' },
    { label: 'Kamata Station', path: '/seahome-real-estates/rental-office/tokyo/kamata-st/station-list' },
    { label: 'Akabane Station', path: '/seahome-real-estates/rental-office/tokyo/akabane-st/station-list' },
    { label: 'Shimokitazawa Station', path: '/seahome-real-estates/rental-office/tokyo/shimokitazawa-st/station-list' },
    { label: 'Yoyogi Station', path: '/seahome-real-estates/rental-office/tokyo/yoyogi-st/station-list' },
    { label: 'Iidabashi Station', path: '/seahome-real-estates/rental-office/tokyo/iidabashi-st/station-list' },
    { label: 'Omiya Station', path: '/seahome-real-estates/rental-office/saitama/omiya-st/station-list' },
    { label: 'Urawa Station', path: '/seahome-real-estates/rental-office/saitama/urawa-st/station-list' },
    { label: 'Yokohama Station', path: '/seahome-real-estates/rental-office/kanagawa/yokohama-st/station-list' },
    { label: 'Kannai Station', path: '/seahome-real-estates/rental-office/kanagawa/kannai-st/station-list' },
    { label: 'Kawasaki Station', path: '/seahome-real-estates/rental-office/kanagawa/kawasaki-st/station-list' },
    { label: 'Shin-Osaka Station', path: '/seahome-real-estates/rental-office/osaka/shin-osaka-st/station-list' },
    { label: 'Nagoya Station', path: '/seahome-real-estates/rental-office/aichi/nagoya-st/station-list' },
    { label: 'Sannomiya Station', path: '/seahome-real-estates/rental-office/hyogo/sannomiya-st/station-list' },
    { label: 'Hakata Station', path: '/seahome-real-estates/rental-office/fukuoka/hakata-st/station-list' },
];

export const OTHER_PROPERTY_TYPES: NamedLink[] = [
    { label: 'Store for Rent', path: '/seahome-real-estates/rental-shop' },
    { label: 'Rental parking', path: '/seahome-real-estates/parking' },
    { label: 'leased land', path: '/seahome-real-estates/rental-land' },
    { label: 'Rental warehouse', path: '/seahome-real-estates/warehouse' },
    { label: 'Rental and other', path: '/seahome-real-estates/rental-building-other' },
];

export const SEARCH_TOOLS: NamedLink[] = [
    { label: 'Useful information and tools for housing and real estate', path: '/seahome-real-estates/useful-tools' },
    { label: 'Real Estate Glossary', path: '/seahome-real-estates/glossary' },
];

export const RENTAL_OFFICE_TERMS: NamedLink[] = [
    { label: 'carpet tiles', path: '/glossary/carpet-tiles' },
    { label: 'SOHO', path: '/glossary/soho' },
    { label: 'Restoration to original condition', path: '/glossary/restoration' },
    { label: 'Free rent', path: '/glossary/free-rent' },
];

export const AFFILIATED_STORE_BANNER = {
    title: 'Find a SeaHome Net partner agent',
    description: 'Find your perfect property quickly! Directly entrust your property search to the real estate company that\'s right for you!',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/agents/affiliated-stores',
};

export const FOOTER_DISCLAIMER_TEXT =
    'For all your office and rental property needs, trust SeaHome Net. SeaHome Net, our real estate information website, makes it easy to find the perfect office or rental property to suit your needs.';

