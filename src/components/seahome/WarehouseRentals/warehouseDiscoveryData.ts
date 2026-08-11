export interface WarehouseListingItem {
    id: string;
    label: string;
    title: string;
    price: string;
    size: string;
    imageUrl: string;
    link: string;
}

export interface NamedLink {
    label: string;
    path: string;
}

export const WHAT_S_NEW_WAREHOUSE_LISTINGS: WarehouseListingItem[] = [
    {
        id: 'w1',
        label: 'Rental warehouse',
        title: '1 minute walk from Nishi-Shinjuku Station',
        price: '165,000 yen',
        size: '36.34 m²',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=w1',
    },
    {
        id: 'w2',
        label: 'Rental warehouse',
        title: '11-minute walk from Daimotsu Station',
        price: '178,000 yen',
        size: '100.66 m²',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=w2',
    },
    {
        id: 'w3',
        label: 'Rental warehouse',
        title: '32-minute walk from Tsuchiura Station',
        price: '150,000 yen',
        size: '240.00 m²',
        imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=w3',
    },
    {
        id: 'w4',
        label: 'Rental warehouse',
        title: '5-minute walk from Ikuta Station',
        price: '38,500 yen',
        size: '16.30 m²',
        imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=w4',
    },
    {
        id: 'w5',
        label: 'Rental warehouse',
        title: '12-minute walk from JR Nagase Station',
        price: '1.65 million yen',
        size: '978.76 m²',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=w5',
    },
];

export const OTHER_PROPERTY_TYPES_WAREHOUSE: NamedLink[] = [
    { label: 'Store for Rent', path: '/seahome-real-estates/rental-shop' },
    { label: 'rental office', path: '/seahome-real-estates/rental-office' },
    { label: 'Rental parking', path: '/seahome-real-estates/parking' },
    { label: 'leased land', path: '/seahome-real-estates/rental-land' },
    { label: 'Rental and other', path: '/seahome-real-estates/rental-building-other' },
];

export const SEARCH_TOOLS_WAREHOUSE: NamedLink[] = [
    { label: 'Useful information and tools for housing and real estate', path: '/tools/housing-tools' },
    { label: 'Real Estate Glossary', path: '/tools/glossary' },
];

export const NOTABLE_CITIES_WAREHOUSE: NamedLink[] = [
    { label: 'Kawaguchi City', path: '/properties?city=kawaguchi' },
    { label: 'Ota Ward', path: '/properties?city=ota' },
    { label: 'Adachi Ward', path: '/properties?city=adachi' },
    { label: 'Edogawa Ward', path: '/properties?city=edogawa' },
    { label: 'Gifu City', path: '/properties?city=gifu' },
    { label: 'Minato Ward, Osaka City', path: '/properties?city=osaka-minato' },
    { label: 'Nishiyodogawa Ward, Osaka City', path: '/properties?city=osaka-nishiyodogawa' },
    { label: 'Joto Ward, Osaka City', path: '/properties?city=osaka-joto' },
    { label: 'Yodogawa Ward, Osaka City', path: '/properties?city=osaka-yodogawa' },
    { label: 'Hirano Ward, Osaka City', path: '/properties?city=osaka-hirano' },
    { label: 'Toyonaka City', path: '/properties?city=toyonaka' },
    { label: 'Yao City', path: '/properties?city=yao' },
    { label: 'Settsu City', path: '/properties?city=settsu' },
    { label: 'Higashi-Osaka City', path: '/properties?city=higashi-osaka' },
    { label: 'Amagasaki City', path: '/properties?city=amagasaki' },
];

export const STATIONS_TO_WATCH_WAREHOUSE: NamedLink[] = [
    { label: 'Hirano Station', path: '/properties?station=hirano' },
    { label: 'Eganosho Station', path: '/properties?station=eganosho' },
    { label: 'Bentencho Station', path: '/properties?station=bentencho' },
    { label: 'Shin-Nagata Station', path: '/properties?station=shin-nagata' },
    { label: 'Tokuan Station', path: '/properties?station=tokuan' },
    { label: 'Goshijima Station', path: '/properties?station=goshijima' },
    { label: 'Kashima Station', path: '/properties?station=kashima' },
    { label: 'Minami-Suita Station', path: '/properties?station=minami-suita' },
    { label: 'Kizuri-Kamikita Station', path: '/properties?station=kizuri-kamikita' },
    { label: 'Kanzakigawa Station', path: '/properties?station=kanzakigawa' },
    { label: 'Sonoda Station', path: '/properties?station=sonoda' },
    { label: 'Shonai Station', path: '/properties?station=shonai' },
    { label: 'Asashiobashi Station', path: '/properties?station=asashiobashi' },
    { label: 'Nagata Station', path: '/properties?station=nagata' },
    { label: 'Minami-Settsu Station', path: '/properties?station=minami-settsu' },
];

export const AFFILIATED_STORE_BANNER_WAREHOUSE_DATA = {
    title: 'Find an At Home affiliated store',
    description: "Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!",
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/properties?type=warehouse',
};

export const FOOTER_DISCLAIMER_WAREHOUSE_TEXT =
    'For all your warehouse rental needs, trust At Home. At Home, a real estate information website, makes it easy to find the perfect warehouse or storage property to suit your needs.';
