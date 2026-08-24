export interface ParkingListingItem {
    id: string;
    label: string;
    title: string;
    price: string;
    imageUrl: string;
    link: string;
}

export interface NamedLink {
    label: string;
    path: string;
    iconName?: string;
}

export const WHAT_S_NEW_PARKING_LISTINGS: ParkingListingItem[] = [
    {
        id: 'p1',
        label: 'Rental parking',
        title: '3-minute walk from Gion-Shinbashi Kita Station',
        price: '11,000 yen',
        imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
        link: '/properties?id=p1',
    },
    {
        id: 'p2',
        label: 'Rental parking',
        title: '4-minute walk from Shimo-Ochiai Station',
        price: '24,200 yen',
        imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80',
        link: '/properties?id=p2',
    },
    {
        id: 'p3',
        label: 'Rental parking',
        title: '14-minute walk from Fushiya Station',
        price: '0.77 million yen',
        imageUrl: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=600&q=80',
        link: '/properties?id=p3',
    },
    {
        id: 'p4',
        label: 'Rental parking',
        title: 'Minami-Nagasaki 6-chome, Toshima-ku',
        price: '23,100 yen',
        imageUrl: 'https://images.unsplash.com/photo-1617886834125-96eb13a30c5e?auto=format&fit=crop&w=600&q=80',
        link: '/properties?id=p4',
    },
    {
        id: 'p5',
        label: 'Rental parking',
        title: '23-minute walk from Kasai Station',
        price: '19,800 yen',
        imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80',
        link: '/properties?id=p5',
    },
    {
        id: 'p6',
        label: 'Rental parking',
        title: '5-minute walk from Shibuya Station',
        price: '35,000 yen',
        imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
        link: '/properties?id=p6',
    },
    {
        id: 'p7',
        label: 'Rental parking',
        title: '8-minute walk from Yokohama Station',
        price: '28,000 yen',
        imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
        link: '/properties?id=p7',
    },
];

export const OTHER_PROPERTY_TYPES_PARKING: NamedLink[] = [
    { label: 'Store for Rent', path: '/seahome-real-estates/rental-shop' },
    { label: 'rental office', path: '/seahome-real-estates/rental-office' },
    { label: 'leased land', path: '/seahome-real-estates/rental-land' },
    { label: 'Rental warehouse', path: '/seahome-real-estates/warehouse' },
    { label: 'Rental and other', path: '/seahome-real-estates/rental-building-other' },
];

export const SEARCH_TOOLS_PARKING: NamedLink[] = [
    { label: 'Useful information and tools for housing and real estate', path: '/seahome-real-estates/useful-tools' },
    { label: 'Real Estate Glossary', path: '/seahome-real-estates/glossary' },
];

export const PARKING_TERMS: NamedLink[] = [
    { label: 'landlord', path: '/seahome-real-estates/glossary' },
    { label: 'public road', path: '/seahome-real-estates/glossary' },
    { label: 'Rent', path: '/seahome-real-estates/glossary' },
    { label: 'Parking area', path: '/seahome-real-estates/glossary' },
];

export const AFFILIATED_STORE_BANNER_DATA = {
    title: 'Find a SeaHome affiliated store',
    description: "Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!",
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/properties?type=parking',
};

export const FOOTER_DISCLAIMER_PARKING_TEXT =
    'For monthly parking and rental parking spaces, leave it to SeaHome. SeaHome, a real estate information website, makes it easy to find the perfect monthly parking or rental parking space to suit your needs.';
