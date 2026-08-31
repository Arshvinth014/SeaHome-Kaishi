export interface BuildingListingItem {
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

export const WHAT_S_NEW_BUILDING_LISTINGS: BuildingListingItem[] = [
    {
        id: 'b1',
        label: 'Rented factory',
        title: 'Asami Station, 2800m walk',
        price: '348,000 yen',
        size: '202.14 m²',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=b1',
    },
    {
        id: 'b2',
        label: 'Rented factory',
        title: '4-minute walk from Kita-Shin-Yokohama Station',
        price: '792,000 yen',
        size: '261.14 m²',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=b2',
    },
    {
        id: 'b3',
        label: 'Rental workshop',
        title: '4-minute walk from Kita-Shin-Yokohama Station',
        price: '792,000 yen',
        size: '261.14 m²',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=b3',
    },
    {
        id: 'b4',
        label: 'Rented factory',
        title: '37-minute walk from Sano City Station',
        price: '450,000 yen',
        size: '828.18 m²',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=b4',
    },
    {
        id: 'b5',
        label: 'Rental and other',
        title: '10-minute walk from Namba Station',
        price: '88,000 yen',
        size: '42.00 m²',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
        link: '/properties?id=b5',
    },
];

export const OTHER_PROPERTY_TYPES_BUILDING: NamedLink[] = [
    { label: 'Store for Rent', path: '/seahome-real-estates/rental-shop' },
    { label: 'rental office', path: '/seahome-real-estates/rental-office' },
    { label: 'Rental parking', path: '/seahome-real-estates/parking' },
    { label: 'leased land', path: '/seahome-real-estates/rental-land' },
    { label: 'Rental warehouse', path: '/seahome-real-estates/warehouse' },
];

export const SEARCH_TOOLS_BUILDING: NamedLink[] = [
    { label: 'Useful information and tools for housing and real estate', path: '/seahome-real-estates/useful-tools' },
    { label: 'Real Estate Glossary', path: '/seahome-real-estates/glossary' },
];

export const RENTAL_BUILDING_TERMS: NamedLink[] = [
    { label: 'Built-in', path: '/seahome-real-estates/glossary' },
    { label: 'Common area maintenance fees', path: '/seahome-real-estates/glossary' },
    { label: 'Sublease', path: '/seahome-real-estates/glossary' },
    { label: 'Leasing', path: '/seahome-real-estates/glossary' },
];

export const AFFILIATED_STORE_BANNER_BUILDING_DATA = {
    title: 'Find a SeaHome affiliated store',
    description: "Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!",
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/seahome-real-estates/estate',
};

export const FOOTER_DISCLAIMER_BUILDING_TEXT =
    'For all your commercial property needs, including office buildings and other commercial rental properties, trust SeaHome. SeaHome, our real estate information website, makes it easy to find the perfect commercial rental property to suit your needs.';
