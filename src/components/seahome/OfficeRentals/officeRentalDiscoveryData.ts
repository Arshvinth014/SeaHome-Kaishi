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
        id: 'new-1',
        category: 'Rental office',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
        stationWalk: '3-minute walk from Shimo-Ochiai Station',
        price: '165,000 yen',
        size: '20.00 m²',
        link: '/properties?id=new-1',
    },
    {
        id: 'new-2',
        category: 'Rental office',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
        stationWalk: '8-minute walk from Kamikitadai Station',
        price: '924,000 yen',
        size: '502.64 m²',
        link: '/properties?id=new-2',
    },
    {
        id: 'new-3',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80',
        stationWalk: '3-minute walk from Akaike Station',
        price: '159,500 yen',
        size: '52.00 m²',
        link: '/properties?id=new-3',
    },
    {
        id: 'new-4',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
        stationWalk: '2-minute walk from Tsukamoto Station',
        price: '969,200 yen',
        size: '199.96 m²',
        link: '/properties?id=new-4',
    },
    {
        id: 'new-5',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80',
        stationWalk: '4-minute walk from Tenjinbashisuji 6-chome Station',
        price: '379,280 yen',
        size: '114.00 m²',
        link: '/properties?id=new-5',
    },
    {
        id: 'new-6',
        category: 'Rental office',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
        stationWalk: '5-minute walk from Shinagawa Station',
        price: '450,000 yen',
        size: '85.50 m²',
        link: '/properties?id=new-6',
    },
    {
        id: 'new-7',
        category: 'Shops and offices for rent',
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
        stationWalk: '1-minute walk from Roppongi Station',
        price: '1,200,000 yen',
        size: '310.00 m²',
        link: '/properties?id=new-7',
    },
];

export const NOTABLE_CITIES_DISTRICTS: NamedLink[] = [
    { label: 'Shibuya Ward', path: '/properties?city=shibuya' },
    { label: 'Shinjuku Ward', path: '/properties?city=shinjuku' },
    { label: 'Chuo Ward', path: '/properties?city=chuo' },
    { label: 'Hachioji City', path: '/properties?city=hachioji' },
    { label: 'Tachikawa City', path: '/properties?city=tachikawa' },
    { label: 'Setagaya Ward', path: '/properties?city=setagaya' },
    { label: 'Minato Ward', path: '/properties?city=minato' },
    { label: 'Morioka City', path: '/properties?city=morioka' },
    { label: 'Koriyama City', path: '/properties?city=koriyama' },
    { label: 'Chuo Ward, Niigata City', path: '/properties?city=niigata-chuo' },
    { label: 'Utsunomiya City', path: '/properties?city=utsunomiya' },
    { label: 'Takasaki City', path: '/properties?city=takasaki' },
    { label: 'Kawaguchi City', path: '/properties?city=kawaguchi' },
    { label: 'Funabashi City', path: '/properties?city=funabashi' },
    { label: 'Kashiwa City', path: '/properties?city=kashiwa' },
    { label: 'Aoi Ward, Shizuoka City', path: '/properties?city=shizuoka-aoi' },
    { label: 'Naka Ward, Nagoya City', path: '/properties?city=nagoya-naka' },
    { label: 'Kita Ward, Okayama City', path: '/properties?city=okayama-kita' },
];

export const STATIONS_TO_WATCH: NamedLink[] = [
    { label: 'Ebisu Station', path: '/properties?station=ebisu' },
    { label: 'Ikebukuro Station', path: '/properties?station=ikebukuro' },
    { label: 'Jiyugaoka Station', path: '/properties?station=jiyugaoka' },
    { label: 'Kinshicho Station', path: '/properties?station=kinshicho' },
    { label: 'Kamata Station', path: '/properties?station=kamata' },
    { label: 'Akabane Station', path: '/properties?station=akabane' },
    { label: 'Shimokitazawa Station', path: '/properties?station=shimokitazawa' },
    { label: 'Yoyogi Station', path: '/properties?station=yoyogi' },
    { label: 'Iidabashi Station', path: '/properties?station=iidabashi' },
    { label: 'Omiya Station', path: '/properties?station=omiya' },
    { label: 'Urawa Station', path: '/properties?station=urawa' },
    { label: 'Yokohama Station', path: '/properties?station=yokohama' },
    { label: 'Kannai Station', path: '/properties?station=kannai' },
    { label: 'Kawasaki Station', path: '/properties?station=kawasaki' },
    { label: 'Shin-Osaka Station', path: '/properties?station=shin-osaka' },
    { label: 'Nagoya Station', path: '/properties?station=nagoya' },
    { label: 'Sannomiya Station', path: '/properties?station=sannomiya' },
    { label: 'Hakata Station', path: '/properties?station=hakata' },
];

export const OTHER_PROPERTY_TYPES: NamedLink[] = [
    { label: 'Store for Rent', path: '/properties?type=store' },
    { label: 'Rental parking', path: '/properties?type=parking' },
    { label: 'Leased land', path: '/properties?type=land' },
    { label: 'Rental warehouse', path: '/properties?type=warehouse' },
    { label: 'Rental and other', path: '/properties?type=other' },
];

export const SEARCH_TOOLS: NamedLink[] = [
    { label: 'Useful information and tools for housing and real estate', path: '/tools/useful-info' },
    { label: 'Real Estate Glossary', path: '/tools/glossary' },
];

export const RENTAL_OFFICE_TERMS: NamedLink[] = [
    { label: 'carpet tiles', path: '/glossary/carpet-tiles' },
    { label: 'SOHO', path: '/glossary/soho' },
    { label: 'Restoration to original condition', path: '/glossary/restoration' },
    { label: 'Free rent', path: '/glossary/free-rent' },
];

export const AFFILIATED_STORE_BANNER = {
    title: 'Find an At Home affiliated store',
    description: 'Find your perfect property quickly! Directly entrust your property search to the real estate company that\'s right for you!',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/agents/affiliated-stores',
};

export const FOOTER_DISCLAIMER_TEXT =
    'For all your office and rental property needs, trust At Home. At Home, our real estate information website, makes it easy to find the perfect office or rental property to suit your needs.';
