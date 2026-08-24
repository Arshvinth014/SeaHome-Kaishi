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

export interface LandDetailSpec {
    id: string;
    listingCode: string;
    title: string;
    category: string;
    rentYen: number;
    rentDisplay: string;
    depositDisplay: string;
    keyMoneyDisplay: string;
    managementFeeDisplay: string;
    guaranteeFeeDisplay: string;
    landAreaM2: string;
    landAreaTsubo: string;
    pricePerTsuboDisplay: string;
    address: string;
    accessStation: string;
    landCategory: string;
    topography: string;
    zoning: string;
    buildingCoverageRatio: string;
    floorAreaRatio: string;
    frontRoadInfo: string;
    utilitiesInfo: string;
    leaseType: string;
    leaseTerm: string;
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

export const WHAT_S_NEW_LAND_LISTINGS: LandListingItem[] = [
    {
        id: 'land-1',
        category: 'Material storage area',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        stationWalk: '86-minute walk from Kamimaki Station',
        price: '600,000 yen',
        size: '1,713.00 m²',
        link: '/seahome-real-estates/rental-land/detail/land-1',
    },
    {
        id: 'land-2',
        category: 'Store site',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        stationWalk: '18-minute walk from "Koga" Station',
        price: '300,000 yen',
        size: '1,012.00 m²',
        link: '/seahome-real-estates/rental-land/detail/land-2',
    },
    {
        id: 'land-3',
        category: 'Store site',
        imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80',
        stationWalk: 'Hirozaki, Mashiki-machi, Kamimashiki-gun',
        price: '308,000 yen',
        size: '1,015.65 m²',
        link: '/seahome-real-estates/rental-land/detail/land-3',
    },
    {
        id: 'land-4',
        category: 'Business land',
        imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
        stationWalk: '20-minute walk from Yachimata Station',
        price: '300,000 yen',
        size: '1,652.00 m²',
        link: '/seahome-real-estates/rental-land/detail/land-4',
    },
    {
        id: 'land-5',
        category: 'Material storage area',
        imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
        stationWalk: '13-minute walk from Shin-Kamagaya Station',
        price: '90,000 yen',
        size: '280.00 m²',
        link: '/seahome-real-estates/rental-land/detail/land-5',
    },
    {
        id: 'land-6',
        category: 'Business land',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        stationWalk: '10-minute walk from Chiba Station',
        price: '250,000 yen',
        size: '500.00 m²',
        link: '/seahome-real-estates/rental-land/detail/land-6',
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
    title: 'Find a SeaHome affiliated store',
    description: "Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!",
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/agents/affiliated-stores',
};

export const FOOTER_DISCLAIMER_LAND_TEXT =
    'For all your land rental needs, trust SeaHome. SeaHome, our real estate information website, makes it easy to find the perfect land rental property to suit your needs.';

export const LAND_DETAILS_DATA: Record<string, LandDetailSpec> = {
    'land-1': {
        id: 'land-1',
        listingCode: '6990920475',
        title: 'Material Storage Yard & Commercial Land Plot',
        category: 'Material storage area',
        rentYen: 600000,
        rentDisplay: '600,000 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: '1 Month',
        managementFeeDisplay: 'None',
        guaranteeFeeDisplay: '50% of monthly rent (initial)',
        landAreaM2: '1,713.00 m²',
        landAreaTsubo: '518.18 tsubo',
        pricePerTsuboDisplay: '1,158 yen / tsubo',
        address: 'Kamimaki, Sakura City, Chiba Prefecture',
        accessStation: '86-minute walk from Kamimaki Station (JR Sobu Main Line)',
        landCategory: 'Miscellaneous Land (雑種地)',
        topography: 'Flat / Level Ground',
        zoning: 'Quasi-Industrial District (準工業地域)',
        buildingCoverageRatio: '60%',
        floorAreaRatio: '200%',
        frontRoadInfo: 'East side, 8m public road width, 25m frontage',
        utilitiesInfo: 'Electricity connected, City Water connection nearby, Septic tank OK',
        leaseType: 'Fixed-term Commercial Land Lease',
        leaseTerm: '5 Years (Renewable)',
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Large flat land plot of 1,713.00 m² ideal for material storage, construction equipment yard, container depot, or vehicle parking. Wide 8-meter front road allowing smooth trailer and heavy truck access.',
        features: [
            'Flat Land Surface',
            'Heavy Truck Access (8m Road)',
            'Container Yard OK',
            'Immediate Availability',
            'Electricity & Water Ready',
            'Corner Lot Visibility',
            'Long-Term Lease Available',
        ],
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
                caption: 'Main plot view - 1,713 m² flat land surface',
            },
            {
                url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
                caption: 'Wide 8m front road access for heavy vehicles',
            },
            {
                url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
                caption: 'Surrounding commercial environment and plot boundaries',
            },
        ],
        listingAgency: {
            name: 'SeaHome Commercial Land Real Estate Co., Ltd.',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '1-4-8 Ginza, Chuo-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM (English & Japanese support)',
        },
    },
    'land-2': {
        id: 'land-2',
        listingCode: '6990920476',
        title: 'Prime Retail & Drive-Thru Store Site in Koga',
        category: 'Store site',
        rentYen: 300000,
        rentDisplay: '300,000 yen / month',
        depositDisplay: '2 Months',
        keyMoneyDisplay: '1 Month',
        managementFeeDisplay: 'None',
        guaranteeFeeDisplay: 'Required (SeaHome Guarantee Plan)',
        landAreaM2: '1,012.00 m²',
        landAreaTsubo: '306.13 tsubo',
        pricePerTsuboDisplay: '980 yen / tsubo',
        address: 'Koga City, Ibaraki Prefecture',
        accessStation: '18-minute walk from "Koga" Station (JR Utsunomiya Line)',
        landCategory: 'Building Land (宅地)',
        topography: 'Flat Land',
        zoning: 'Neighborhood Commercial District (近隣商業地域)',
        buildingCoverageRatio: '80%',
        floorAreaRatio: '300%',
        frontRoadInfo: 'South side, 12m main highway frontage',
        utilitiesInfo: 'City Gas, Electricity, City Water & Sewer connected',
        leaseType: 'Standard Commercial Land Lease',
        leaseTerm: '3 Years',
        currentStatus: 'Vacant',
        handoverDate: 'Consultation',
        description: 'Prime 1,012 m² store site located along a high-traffic highway in Koga. Excellent street visibility for retail shops, restaurants, drive-thru facilities, or automotive showrooms.',
        features: [
            'Main Highway Frontage',
            'High Foot & Vehicle Traffic',
            'Full City Utilities Connected',
            'Ideal for Retail & Dining',
            'Parking Space for 15+ Cars',
        ],
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
                caption: 'Commercial store plot fronting main road',
            },
            {
                url: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80',
                caption: 'Plot entrance and road access',
            },
        ],
        listingAgency: {
            name: 'SeaHome Retail & Land Advisory',
            license: 'Governor of Tokyo (2) No. 10452',
            phone: '+81-50-5833-2422',
            address: '2-11-3 Shinjuku, Shinjuku-ku, Tokyo',
            hours: '9:00 AM - 19:00 PM',
        },
    },
    'land-3': {
        id: 'land-3',
        listingCode: '6990920477',
        title: 'Commercial Store & Warehouse Plot in Mashiki',
        category: 'Store site',
        rentYen: 308000,
        rentDisplay: '308,000 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: '1 Month',
        managementFeeDisplay: 'None',
        guaranteeFeeDisplay: '100% of 1 month rent',
        landAreaM2: '1,015.65 m²',
        landAreaTsubo: '307.23 tsubo',
        pricePerTsuboDisplay: '1,002 yen / tsubo',
        address: 'Hirozaki, Mashiki-machi, Kamimashiki-gun, Kumamoto Prefecture',
        accessStation: '15-minute drive from Kumamoto Airport / Highway Interchange',
        landCategory: 'Miscellaneous Land',
        topography: 'Flat Land',
        zoning: 'Commercial District',
        buildingCoverageRatio: '60%',
        floorAreaRatio: '200%',
        frontRoadInfo: 'North side, 10m road frontage',
        utilitiesInfo: 'Electricity, City Water connected',
        leaseType: 'Fixed-term Lease',
        leaseTerm: '10 Years',
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Strategic 1,015 m² commercial land plot near airport logistics corridor. Suitable for regional distribution center, retail outlet, or commercial service office.',
        features: [
            'Airport Access Corridor',
            'Wide Frontage',
            'Flexible Lease Terms',
            'Flat & Ready to Build',
        ],
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80',
                caption: 'Mashiki commercial land plot',
            },
        ],
        listingAgency: {
            name: 'SeaHome Regional Property Hub',
            license: 'Governor of Tokyo (4) No. 81920',
            phone: '+81-50-5833-2422',
            address: '3-1-1 Shibuya, Shibuya-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    'land-4': {
        id: 'land-4',
        listingCode: '6990920478',
        title: 'Business & Logistics Land Plot in Yachimata',
        category: 'Business land',
        rentYen: 300000,
        rentDisplay: '300,000 yen / month',
        depositDisplay: '2 Months',
        keyMoneyDisplay: 'None',
        managementFeeDisplay: 'None',
        guaranteeFeeDisplay: '50% of monthly rent',
        landAreaM2: '1,652.00 m²',
        landAreaTsubo: '499.73 tsubo',
        pricePerTsuboDisplay: '600 yen / tsubo',
        address: 'Yachimata City, Chiba Prefecture',
        accessStation: '20-minute walk from Yachimata Station (JR Hyuga Line)',
        landCategory: 'Miscellaneous Land',
        topography: 'Flat Level Terrain',
        zoning: 'Industrial District',
        buildingCoverageRatio: '60%',
        floorAreaRatio: '200%',
        frontRoadInfo: 'East & North 2-sided road frontage (6m width)',
        utilitiesInfo: 'Electricity, Water supply connected',
        leaseType: 'Standard Land Lease',
        leaseTerm: '3 Years',
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Large 1,652 m² dual-frontage land parcel ideal for logistics hub, equipment storage, or light industrial facility.',
        features: [
            '2-Sided Corner Access',
            'Industrial Zoning',
            'No Key Money Required',
            'Large 500 Tsubo Footprint',
        ],
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
                caption: 'Yachimata industrial business land',
            },
        ],
        listingAgency: {
            name: 'SeaHome Industrial Property Division',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '1-4-8 Ginza, Chuo-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    'land-5': {
        id: 'land-5',
        listingCode: '6990920479',
        title: 'Compact Storage Yard & Parking in Shin-Kamagaya',
        category: 'Material storage area',
        rentYen: 90000,
        rentDisplay: '90,000 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: '1 Month',
        managementFeeDisplay: 'None',
        guaranteeFeeDisplay: 'Included',
        landAreaM2: '280.00 m²',
        landAreaTsubo: '84.70 tsubo',
        pricePerTsuboDisplay: '1,062 yen / tsubo',
        address: 'Kamagaya City, Chiba Prefecture',
        accessStation: '13-minute walk from Shin-Kamagaya Station (Hokuso Line / Tobu Noda Line)',
        landCategory: 'Miscellaneous Land',
        topography: 'Flat Level Land',
        zoning: 'Residential / Commercial Mixed',
        buildingCoverageRatio: '60%',
        floorAreaRatio: '200%',
        frontRoadInfo: 'West side, 6m road frontage',
        utilitiesInfo: 'Electricity nearby',
        leaseType: 'Standard Land Lease',
        leaseTerm: '2 Years',
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Compact 280 m² fenced storage lot in Shin-Kamagaya. Perfect for small contractor yard, scaffolding storage, or private vehicle fleet parking.',
        features: [
            'Fenced Perimeter',
            'Station Walking Distance',
            'Affordable Monthly Rent',
            'Contractor Yard Ready',
        ],
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
                caption: 'Shin-Kamagaya fenced storage lot',
            },
        ],
        listingAgency: {
            name: 'SeaHome Land Advisory',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '1-4-8 Ginza, Chuo-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    'land-6': {
        id: 'land-6',
        listingCode: '6990920480',
        title: 'Central Chiba Business & Commercial Plot',
        category: 'Business land',
        rentYen: 250000,
        rentDisplay: '250,000 yen / month',
        depositDisplay: '2 Months',
        keyMoneyDisplay: '1 Month',
        managementFeeDisplay: 'None',
        guaranteeFeeDisplay: '50% of monthly rent',
        landAreaM2: '500.00 m²',
        landAreaTsubo: '151.25 tsubo',
        pricePerTsuboDisplay: '1,652 yen / tsubo',
        address: 'Chiba City, Chiba Prefecture',
        accessStation: '10-minute walk from Chiba Station (JR Sobu Line / Keisei Line)',
        landCategory: 'Building Land',
        topography: 'Flat Plot',
        zoning: 'Commercial District',
        buildingCoverageRatio: '80%',
        floorAreaRatio: '400%',
        frontRoadInfo: 'North side, 10m road frontage',
        utilitiesInfo: 'All City Utilities Connected',
        leaseType: 'Fixed-term Land Lease',
        leaseTerm: '5 Years',
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Prime 500 m² central Chiba commercial plot within 10 minutes walk of main Chiba Station. High density 400% floor area ratio.',
        features: [
            '10-Min Walk to Major Hub Station',
            'High Density Zoning (400% FAR)',
            'Full City Infrastructure',
            'Commercial Building Potential',
        ],
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
                caption: 'Central Chiba commercial plot',
            },
        ],
        listingAgency: {
            name: 'SeaHome Central Chiba Branch',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '1-4-8 Ginza, Chuo-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
};

export function getLandDetail(id: string): LandDetailSpec {
    return LAND_DETAILS_DATA[id] ?? LAND_DETAILS_DATA['land-1'];
}
