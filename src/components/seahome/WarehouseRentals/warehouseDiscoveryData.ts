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

export interface WarehouseDetailSpec {
    id: string;
    listingCode: string;
    label: string;
    title: string;
    propertyName: string;
    rentYen: number;
    rentDisplay: string;
    commonFeeDisplay: string;
    depositDisplay: string;
    keyMoneyDisplay: string;
    guaranteeFeeDisplay: string;
    renewalFeeDisplay: string;
    usableAreaM2: string;
    usableAreaTsubo: string;
    ceilingHeight: string;
    floorLoadCapacity: string;
    structure: string;
    yearBuilt: string;
    floorLevel: string;
    shutterDimensions: string;
    truckAccess: string;
    powerSupply: string;
    address: string;
    stationAccess: string;
    currentStatus: string;
    handoverDate: string;
    description: string;
    features: string[];
    galleryImages: { url: string; caption: string }[];
    listingAgency: {
        name: string;
        license: string;
        phone: string;
        address: string;
        hours: string;
    };
}

export const WHAT_S_NEW_WAREHOUSE_LISTINGS: WarehouseListingItem[] = [
    {
        id: 'w1',
        label: 'Rental Warehouse',
        title: 'Shinjuku Cargo Depot — 1 minute walk from Nishi-Shinjuku Station',
        price: '165,000 yen',
        size: '36.34 m²',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        link: '/seahome-real-estates/rental-warehouse/detail/w1',
    },
    {
        id: 'w2',
        label: 'Rental Warehouse',
        title: 'Daimotsu Logistics Hub — 11-minute walk from Daimotsu Station',
        price: '178,000 yen',
        size: '100.66 m²',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        link: '/seahome-real-estates/rental-warehouse/detail/w2',
    },
    {
        id: 'w3',
        label: 'Rental Warehouse',
        title: 'Tsuchiura Industrial Storage Facility — 32-minute walk from Tsuchiura Station',
        price: '150,000 yen',
        size: '240.00 m²',
        imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
        link: '/seahome-real-estates/rental-warehouse/detail/w3',
    },
    {
        id: 'w4',
        label: 'Rental Warehouse',
        title: 'Ikuta Compact Storage Bay — 5-minute walk from Ikuta Station',
        price: '38,500 yen',
        size: '16.30 m²',
        imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
        link: '/seahome-real-estates/rental-warehouse/detail/w4',
    },
    {
        id: 'w5',
        label: 'Rental Warehouse',
        title: 'JR Nagase Heavy Distribution Complex — 12-minute walk from JR Nagase Station',
        price: '1,650,000 yen',
        size: '978.76 m²',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        link: '/seahome-real-estates/rental-warehouse/detail/w5',
    },
];

export function getWarehouseDetail(id: string): WarehouseDetailSpec {
    const found = WHAT_S_NEW_WAREHOUSE_LISTINGS.find((w) => w.id === id);
    const title = found?.title || 'Prime Logistics Warehouse & Commercial Storage Center';
    const rentDisplay = found?.price || '165,000 yen';
    const usableAreaM2 = found?.size || '36.34 m²';

    return {
        id: id || 'w1',
        listingCode: `WH-${id ? id.toUpperCase() : 'W1'}-6983611859`,
        label: 'Rental Warehouse & Logistics Facility',
        title,
        propertyName: found?.title ? found.title.split('—')[0].trim() : 'SeaHome Premium Cargo Facility',
        rentYen: 165000,
        rentDisplay,
        commonFeeDisplay: '12,000 yen / month',
        depositDisplay: '2 months rent',
        keyMoneyDisplay: '1 month rent',
        guaranteeFeeDisplay: '50% of 1st month rent',
        renewalFeeDisplay: '1 month new rent',
        usableAreaM2,
        usableAreaTsubo: '10.99 tsubo',
        ceilingHeight: '5.8 meters clearance',
        floorLoadCapacity: '2.0 tons / m²',
        structure: 'Steel Frame (S Structure) Fire-Resistant',
        yearBuilt: 'Built in 2019 (Modern Reinforced Construction)',
        floorLevel: '1st Ground Floor (Direct Drive-in Dock)',
        shutterDimensions: 'W 4.5m x H 4.2m Electric Roll-up Shutter',
        truckAccess: 'Large 10-Ton Container Truck Loading Dock & Ramp',
        powerSupply: '3-Phase 200V / High Voltage Capacity Power',
        address: 'Nishi-Shinjuku, Shinjuku Ward, Tokyo 160-0023',
        stationAccess: '1-min walk from Nishi-Shinjuku Station (Tokyo Metro Marunouchi Line)',
        currentStatus: 'Vacant & Available Immediately',
        handoverDate: 'Immediate Handover Available',
        description:
            'High-grade commercial rental warehouse equipped with electric roll-up shutter doors, 5.8m clear ceiling height, and 2.0t/m² heavy floor load capacity. Features 3-Phase 200V industrial power, loading dock for 10-ton container trucks, LED lighting, office mezzanine space, and 24/7 security access control.',
        features: [
            'Overhead Electric Roll-Up Shutter Door',
            'Heavy 2.0t/m² Floor Load Capacity',
            '5.8m High Ceiling Clearance',
            '3-Phase 200V High Voltage Power Supply',
            '10-Ton Container Truck Loading Ramp',
            'Integrated Office Mezzanine Space',
            '24/7 Security CCTV & Keycard Access',
            'Fire Sprinkler System & Alarm',
            'On-Site Reserved Truck Parking',
        ],
        galleryImages: [
            {
                url: found?.imageUrl || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
                caption: 'Warehouse Interior Storage Bay with High Ceiling Clearance',
            },
            {
                url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
                caption: 'Exterior Loading Dock & Heavy Truck Access Yard',
            },
            {
                url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
                caption: 'Electric Roll-Up Shutter & Container Ramp Access',
            },
            {
                url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1000&q=80',
                caption: 'Office Mezzanine & Staff Restroom Area',
            },
        ],
        listingAgency: {
            name: 'SeaHome Commercial Logistics Real Estate Co., Ltd.',
            license: 'Governor of Tokyo License (4) No. 89432',
            phone: '03-5290-8800',
            address: '2-1-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo',
            hours: '9:00 AM - 6:00 PM (Closed Sundays)',
        },
    };
}

export const OTHER_PROPERTY_TYPES_WAREHOUSE: NamedLink[] = [
    { label: 'Store for Rent', path: '/seahome-real-estates/rental-shop' },
    { label: 'rental office', path: '/seahome-real-estates/rental-office' },
    { label: 'Rental parking', path: '/seahome-real-estates/parking' },
    { label: 'leased land', path: '/seahome-real-estates/rental-land' },
    { label: 'Rental and other', path: '/seahome-real-estates/rental-building-other' },
];

export const SEARCH_TOOLS_WAREHOUSE: NamedLink[] = [
    { label: 'Useful information and tools for housing and real estate', path: '/seahome-real-estates/useful-tools' },
    { label: 'Real Estate Glossary', path: '/seahome-real-estates/glossary' },
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
    title: 'Find a SeaHome affiliated store',
    description: "Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!",
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/properties?type=warehouse',
};

export const FOOTER_DISCLAIMER_WAREHOUSE_TEXT =
    'For all your warehouse rental needs, trust SeaHome. SeaHome, a real estate information website, makes it easy to find the perfect warehouse or storage property to suit your needs.';
