export interface LandListingItem {
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

export const WHAT_S_NEW_LAND_LISTINGS: LandListingItem[] = [
    {
        id: 'land-1',
        category: 'Material storage area',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
        stationWalk: '86-minute walk from Kamimaki Station',
        price: '600,000 yen',
        size: '1,713.00 m²',
        link: '/properties?id=land-1',
    },
    {
        id: 'land-2',
        category: 'Store site',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
        stationWalk: '18-minute walk from "Koga" Station',
        price: '300,000 yen',
        size: '1,012.00 m²',
        link: '/properties?id=land-2',
    },
    {
        id: 'land-3',
        category: 'Store site',
        imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=400&q=80',
        stationWalk: 'Hirozaki, Mashiki-machi, Kamimashiki-gun',
        price: '308,000 yen',
        size: '1,015.65 m²',
        link: '/properties?id=land-3',
    },
    {
        id: 'land-4',
        category: 'Business land',
        imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=400&q=80',
        stationWalk: '20-minute walk from Yachimata Station',
        price: '300,000 yen',
        size: '1,652.00 m²',
        link: '/properties?id=land-4',
    },
    {
        id: 'land-5',
        category: 'Material storage area',
        imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400&q=80',
        stationWalk: '13-minute walk from Shin-Kamagaya Station',
        price: '90,000 yen',
        size: '280.00 m²',
        link: '/properties?id=land-5',
    },
    {
        id: 'land-6',
        category: 'Business land',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
        stationWalk: '10-minute walk from Chiba Station',
        price: '250,000 yen',
        size: '500.00 m²',
        link: '/properties?id=land-6',
    },
];

export const OTHER_PROPERTY_TYPES_LAND: NamedLink[] = [
    { label: 'Store for Rent', path: '/seahome-real-estates/rental-shop' },
    { label: 'rental office', path: '/seahome-real-estates/rental-office' },
    { label: 'Rental parking', path: '/seahome-real-estates/parking' },
    { label: 'Rental warehouse', path: '/seahome-real-estates/warehouse' },
    { label: 'Rental and other', path: '/seahome-real-estates/rental-building-other' },
];

export const SEARCH_TOOLS_LAND: NamedLink[] = [
    { label: 'Useful information and tools for housing and real estate', path: '/tools/useful-info' },
    { label: 'Real Estate Glossary', path: '/tools/glossary' },
];

export const LEASED_LAND_TERMS: NamedLink[] = [
    { label: 'Surface rights', path: '/glossary/surface-rights' },
    { label: 'Land lease rights', path: '/glossary/land-lease-rights' },
    { label: 'Vacant land', path: '/glossary/vacant-land' },
    { label: 'Land Lease and House Lease Law', path: '/glossary/lease-law' },
];

export const AFFILIATED_STORE_BANNER_LAND = {
    title: 'Find an At Home affiliated store',
    description: "Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!",
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/agents/affiliated-stores',
};

export const FOOTER_DISCLAIMER_LAND_TEXT =
    'For all your land rental needs, trust At Home. At Home, our real estate information website, makes it easy to find the perfect land rental property to suit your needs.';
