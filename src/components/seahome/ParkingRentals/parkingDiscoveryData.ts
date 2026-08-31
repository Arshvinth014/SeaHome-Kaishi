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

export interface ParkingDetailSpec {
    id: string;
    listingCode: string;
    title: string;
    label: string;
    rentYen: number;
    rentDisplay: string;
    depositDisplay: string;
    keyMoneyDisplay: string;
    guaranteeFeeDisplay: string;
    renewalFeeDisplay: string;
    parkingType: string;
    address: string;
    accessStation: string;
    vehicleLimits: {
        maxLength: string;
        maxWidth: string;
        maxHeight: string;
        maxWeight: string;
        groundClearance: string;
    };
    allowedVehicleTypes: string[];
    securityFeatures: string[];
    currentStatus: string;
    handoverDate: string;
    description: string;
    galleryImages: { url: string; caption: string }[];
    listingAgency: {
        name: string;
        license: string;
        phone: string;
        address: string;
        hours: string;
    };
}

export const WHAT_S_NEW_PARKING_LISTINGS: ParkingListingItem[] = [
    {
        id: 'p1',
        label: 'Rental parking',
        title: '3-minute walk from Gion-Shinbashi Kita Station',
        price: '11,000 yen',
        imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
        link: '/seahome-real-estates/parking/detail/p1',
    },
    {
        id: 'p2',
        label: 'Rental parking',
        title: '4-minute walk from Shimo-Ochiai Station',
        price: '24,200 yen',
        imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80',
        link: '/seahome-real-estates/parking/detail/p2',
    },
    {
        id: 'p3',
        label: 'Rental parking',
        title: '14-minute walk from Fushiya Station',
        price: '7,700 yen',
        imageUrl: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=600&q=80',
        link: '/seahome-real-estates/parking/detail/p3',
    },
    {
        id: 'p4',
        label: 'Rental parking',
        title: 'Minami-Nagasaki 6-chome, Toshima-ku',
        price: '23,100 yen',
        imageUrl: 'https://images.unsplash.com/photo-1617886834125-96eb13a30c5e?auto=format&fit=crop&w=600&q=80',
        link: '/seahome-real-estates/parking/detail/p4',
    },
    {
        id: 'p5',
        label: 'Rental parking',
        title: '23-minute walk from Kasai Station',
        price: '19,800 yen',
        imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80',
        link: '/seahome-real-estates/parking/detail/p5',
    },
    {
        id: 'p6',
        label: 'Rental parking',
        title: '5-minute walk from Shibuya Station',
        price: '35,000 yen',
        imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
        link: '/seahome-real-estates/parking/detail/p6',
    },
    {
        id: 'p7',
        label: 'Rental parking',
        title: '8-minute walk from Yokohama Station',
        price: '28,000 yen',
        imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
        link: '/seahome-real-estates/parking/detail/p7',
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
    link: '/seahome-real-estates/estate',
};

export const FOOTER_DISCLAIMER_PARKING_TEXT =
    'For monthly parking and rental parking spaces, leave it to SeaHome. SeaHome, a real estate information website, makes it easy to find the perfect monthly parking or rental parking space to suit your needs.';

export const PARKING_DETAILS_DATA: Record<string, ParkingDetailSpec> = {
    p1: {
        id: 'p1',
        listingCode: '6991935154',
        title: 'Covered Flat Surface Parking Space in Gion-Shinbashi',
        label: 'Rental parking',
        rentYen: 11000,
        rentDisplay: '11,000 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: 'None',
        guaranteeFeeDisplay: '50% of monthly rent (initial)',
        renewalFeeDisplay: '1 Month rent upon contract renewal',
        parkingType: 'Covered Flat Outdoor Surface Parking Space',
        address: 'Shinbashi-cho, Gion, Higashiyama-ku, Kyoto City',
        accessStation: '3-minute walk from Gion-Shinbashi Kita Station (Keihan Main Line)',
        vehicleLimits: {
            maxLength: '5,000 mm (5.0 m)',
            maxWidth: '1,900 mm (1.9 m)',
            maxHeight: '2,100 mm (2.1 m)',
            maxWeight: '2,000 kg (2.0 Tons)',
            groundClearance: '150 mm minimum',
        },
        allowedVehicleTypes: ['Standard Sedan', 'Compact SUV', 'Minivan', 'Hatchback', 'Light Commercial Van'],
        securityFeatures: [
            '24/7 CCTV Camera Surveillance',
            'Overhead Roof Weather Protection',
            'Wide Angle Entry Access Road',
            'Flat Surface (No Elevated Ramp)',
            'Nighttime Automated Flood Lighting',
            'EV Charging Port Connection Ready',
        ],
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Prime covered monthly parking space located just 3 minutes walk from Gion-Shinbashi Station. Equipped with overhead roof weather shelter, high-resolution night security cameras, and wide 6-meter entrance road allowing easy vehicle maneuvering.',
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
                caption: 'Covered parking plot view with individual marked space',
            },
            {
                url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80',
                caption: 'Wide entrance road access for smooth parking',
            },
            {
                url: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=1200&q=80',
                caption: 'Surrounding neighborhood and access road layout',
            },
        ],
        listingAgency: {
            name: 'SeaHome Parking & Logistics Advisory Co., Ltd.',
            license: 'Governor of Kyoto (3) No. 41820',
            phone: '+81-50-5833-2422',
            address: '45-1 Gion-machi, Higashiyama-ku, Kyoto',
            hours: '9:00 AM - 18:00 PM (English & Japanese support)',
        },
    },
    p2: {
        id: 'p2',
        listingCode: '6991935155',
        title: 'Shimo-Ochiai Station Covered Parking Plot',
        label: 'Rental parking',
        rentYen: 24200,
        rentDisplay: '24,200 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: 'None',
        guaranteeFeeDisplay: 'Included',
        renewalFeeDisplay: '1 Month rent',
        parkingType: 'Multi-Level Covered Garage',
        address: 'Shimo-Ochiai, Shinjuku-ku, Tokyo',
        accessStation: '4-minute walk from Shimo-Ochiai Station (Seibu Shinjuku Line)',
        vehicleLimits: {
            maxLength: '5,050 mm',
            maxWidth: '1,850 mm',
            maxHeight: '1,550 mm',
            maxWeight: '1,900 kg',
            groundClearance: '140 mm',
        },
        allowedVehicleTypes: ['Standard Sedan', 'Compact Hatchback', 'Coupe'],
        securityFeatures: ['Keycard Gated Entry', '24/7 Security Camera', 'Underground Shelter'],
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Secure multi-level covered garage parking spot near Shimo-Ochiai Station in Shinjuku-ku. Features keycard access gate and 24-hour video surveillance.',
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80',
                caption: 'Secure gated garage entrance',
            },
        ],
        listingAgency: {
            name: 'SeaHome Shinjuku Commercial Branch',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '2-11-3 Shinjuku, Shinjuku-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    p3: {
        id: 'p3',
        listingCode: '6991935156',
        title: 'Fushiya Station Open Surface Parking Plot',
        label: 'Rental parking',
        rentYen: 7700,
        rentDisplay: '7,700 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: 'None',
        guaranteeFeeDisplay: '50% of 1 month rent',
        renewalFeeDisplay: 'None',
        parkingType: 'Paved Flat Outdoor Surface Spot',
        address: 'Fushiya, Nakagawa-ku, Nagoya City',
        accessStation: '14-minute walk from Fushiya Station (Kintetsu Nagoya Line)',
        vehicleLimits: {
            maxLength: '5,300 mm',
            maxWidth: '2,000 mm',
            maxHeight: 'No height limit',
            maxWeight: '3,000 kg',
            groundClearance: '120 mm',
        },
        allowedVehicleTypes: ['Large SUV', 'Full-size Van', 'Truck', 'Sedan'],
        securityFeatures: ['Surveillance Lighting', 'Paved Asphalt', 'No Height Restriction'],
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Spacious outdoor paved parking plot suitable for large SUVs, minivans, and commercial work trucks.',
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=1200&q=80',
                caption: 'Paved outdoor open parking space',
            },
        ],
        listingAgency: {
            name: 'SeaHome Nagoya Real Estate Hub',
            license: 'Governor of Aichi (2) No. 34210',
            phone: '+81-50-5833-2422',
            address: '1-1-4 Meieki, Nakamura-ku, Nagoya',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    p4: {
        id: 'p4',
        listingCode: '6991935157',
        title: 'Minami-Nagasaki Toshima-ku Resident Parking Space',
        label: 'Rental parking',
        rentYen: 23100,
        rentDisplay: '23,100 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: '1 Month',
        guaranteeFeeDisplay: 'Included',
        renewalFeeDisplay: '1 Month rent',
        parkingType: 'Residential Outdoor Flat Parking',
        address: 'Minami-Nagasaki 6-chome, Toshima-ku, Tokyo',
        accessStation: '7-minute walk from Higashi-Nagasaki Station (Seibu Ikebukuro Line)',
        vehicleLimits: {
            maxLength: '4,900 mm',
            maxWidth: '1,850 mm',
            maxHeight: '2,000 mm',
            maxWeight: '2,000 kg',
            groundClearance: '150 mm',
        },
        allowedVehicleTypes: ['Sedan', 'Hatchback', 'Compact SUV'],
        securityFeatures: ['Residential Quiet Area', 'Marked Reserved Space'],
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Quiet residential neighborhood parking space in Toshima-ku, perfect for neighborhood residents.',
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1617886834125-96eb13a30c5e?auto=format&fit=crop&w=1200&q=80',
                caption: 'Toshima-ku quiet parking lot',
            },
        ],
        listingAgency: {
            name: 'SeaHome Toshima Advisory',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '1-4-8 Ginza, Chuo-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    p5: {
        id: 'p5',
        listingCode: '6991935158',
        title: 'Kasai Station Flat Parking Plot',
        label: 'Rental parking',
        rentYen: 19800,
        rentDisplay: '19,800 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: 'None',
        guaranteeFeeDisplay: '50% of monthly rent',
        renewalFeeDisplay: '1 Month rent',
        parkingType: 'Flat Outdoor Parking',
        address: 'Kasai, Edogawa-ku, Tokyo',
        accessStation: '23-minute walk from Kasai Station (Tokyo Metro Tozai Line)',
        vehicleLimits: {
            maxLength: '5,000 mm',
            maxWidth: '1,900 mm',
            maxHeight: '2,200 mm',
            maxWeight: '2,100 kg',
            groundClearance: '150 mm',
        },
        allowedVehicleTypes: ['Sedan', 'SUV', 'Van'],
        securityFeatures: ['Asphalt Paved', 'Wheel Stoppers Installed'],
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Flat asphalt parking spot with wheel stoppers installed, located in Kasai Edogawa-ku.',
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
                caption: 'Kasai Edogawa parking plot',
            },
        ],
        listingAgency: {
            name: 'SeaHome Edogawa Branch',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '1-4-8 Ginza, Chuo-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    p6: {
        id: 'p6',
        listingCode: '6991935159',
        title: 'Central Shibuya Station Underground Parking Space',
        label: 'Rental parking',
        rentYen: 35000,
        rentDisplay: '35,000 yen / month',
        depositDisplay: '2 Months',
        keyMoneyDisplay: '1 Month',
        guaranteeFeeDisplay: 'Included',
        renewalFeeDisplay: '1 Month rent',
        parkingType: 'Underground Secured Parking Spot',
        address: 'Dogenzaka, Shibuya-ku, Tokyo',
        accessStation: '5-minute walk from Shibuya Station (JR Yamanote Line / Metro)',
        vehicleLimits: {
            maxLength: '5,200 mm',
            maxWidth: '1,950 mm',
            maxHeight: '2,100 mm',
            maxWeight: '2,200 kg',
            groundClearance: '140 mm',
        },
        allowedVehicleTypes: ['Luxury Sedan', 'SUV', 'Sports Car', 'EV Vehicle'],
        securityFeatures: ['Shutter Gate Keycard', '24/7 Security Patrol', 'EV Charging Station'],
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Premium underground parking spot in central Shibuya with keycard shutter gate and 24/7 security guard patrol.',
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
                caption: 'Central Shibuya underground parking',
            },
        ],
        listingAgency: {
            name: 'SeaHome Shibuya Commercial Division',
            license: 'Governor of Tokyo (3) No. 98210',
            phone: '+81-50-5833-2422',
            address: '3-1-1 Shibuya, Shibuya-ku, Tokyo',
            hours: '9:30 AM - 18:30 PM',
        },
    },
    p7: {
        id: 'p7',
        listingCode: '6991935160',
        title: 'Yokohama Station Covered Parking Space',
        label: 'Rental parking',
        rentYen: 28000,
        rentDisplay: '28,000 yen / month',
        depositDisplay: '1 Month',
        keyMoneyDisplay: '1 Month',
        guaranteeFeeDisplay: '50% of 1 month rent',
        renewalFeeDisplay: '1 Month rent',
        parkingType: 'Covered Flat Parking Space',
        address: 'Nishi-ku, Yokohama City, Kanagawa Prefecture',
        accessStation: '8-minute walk from Yokohama Station (JR Tokaido Line)',
        vehicleLimits: {
            maxLength: '5,000 mm',
            maxWidth: '1,900 mm',
            maxHeight: '2,100 mm',
            maxWeight: '2,000 kg',
            groundClearance: '150 mm',
        },
        allowedVehicleTypes: ['Sedan', 'SUV', 'Minivan'],
        securityFeatures: ['Roof Shelter', 'Surveillance Cameras'],
        currentStatus: 'Vacant',
        handoverDate: 'Immediate',
        description: 'Covered parking space located within 8 minutes walk of Yokohama Station, ideal for commuters.',
        galleryImages: [
            {
                url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
                caption: 'Yokohama covered parking plot',
            },
        ],
        listingAgency: {
            name: 'SeaHome Kanagawa Real Estate Hub',
            license: 'Governor of Kanagawa (3) No. 28910',
            phone: '+81-50-5833-2422',
            address: '1-1-8 Kitasaiwai, Nishi-ku, Yokohama',
            hours: '9:30 AM - 18:30 PM',
        },
    },
};

export function getParkingDetail(id: string): ParkingDetailSpec {
    return PARKING_DETAILS_DATA[id] ?? PARKING_DETAILS_DATA['p1'];
}
