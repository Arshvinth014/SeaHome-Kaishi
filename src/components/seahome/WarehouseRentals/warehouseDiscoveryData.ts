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

export interface WarehouseCityListingCard {
    id: string;
    listingCode: string;
    title: string;
    propertyName: string;
    rentYen: number;
    rentDisplay: string;
    commonFeeDisplay: string;
    depositDisplay: string;
    keyMoneyDisplay: string;
    usableAreaM2: string;
    usableAreaTsubo: string;
    ceilingHeight: string;
    floorLoadCapacity: string;
    structure: string;
    shutterDimensions: string;
    address: string;
    accessStation: string;
    imageUrl: string;
    tags: string[];
    isNewListing?: boolean;
}

export function getWarehouseCityListData(citySlug: string, prefectureSlug: string) {
    const capitalizedPref = prefectureSlug ? prefectureSlug.charAt(0).toUpperCase() + prefectureSlug.slice(1) : 'Saitama';
    let cityName = 'Kawaguchi City';
    if (citySlug.includes('ota')) cityName = 'Ota Ward';
    else if (citySlug.includes('adachi')) cityName = 'Adachi Ward';
    else if (citySlug.includes('edogawa')) cityName = 'Edogawa Ward';
    else if (citySlug.includes('gifu')) cityName = 'Gifu City';
    else if (citySlug.includes('osaka-minato')) cityName = 'Minato Ward, Osaka City';
    else if (citySlug.includes('nishiyodogawa')) cityName = 'Nishiyodogawa Ward, Osaka City';
    else if (citySlug.includes('joto')) cityName = 'Joto Ward, Osaka City';
    else if (citySlug.includes('yodogawa')) cityName = 'Yodogawa Ward, Osaka City';
    else if (citySlug.includes('hirano')) cityName = 'Hirano Ward, Osaka City';
    else if (citySlug.includes('toyonaka')) cityName = 'Toyonaka City';
    else if (citySlug.includes('yao')) cityName = 'Yao City';
    else if (citySlug.includes('settsu')) cityName = 'Settsu City';
    else if (citySlug.includes('higashi-osaka')) cityName = 'Higashi-Osaka City';
    else if (citySlug.includes('amagasaki')) cityName = 'Amagasaki City';

    const cards: WarehouseCityListingCard[] = [
        {
            id: 'w1',
            listingCode: 'WH-KWG-6983611859',
            title: `${cityName} Heavy Logistics Center & Multi-Bay Rental Warehouse`,
            propertyName: `${cityName} Industrial Park Warehouse Bay A`,
            rentYen: 280000,
            rentDisplay: '280,000 yen',
            commonFeeDisplay: '15,000 yen / mo',
            depositDisplay: '2 months',
            keyMoneyDisplay: '1 month',
            usableAreaM2: '145.50 m²',
            usableAreaTsubo: '44.01 tsubo',
            ceilingHeight: '6.0m Clearance',
            floorLoadCapacity: '2.5 tons / m²',
            structure: 'Steel Frame 1st Floor (Drive-in)',
            shutterDimensions: 'W 4.8m x H 4.5m Electric Gate',
            address: `Arai, ${cityName}, ${capitalizedPref} Prefecture`,
            accessStation: '12-min walk from Kawaguchi-Motogo Station (Saitama Railway Line)',
            imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            tags: ['10-Ton Truck Loading Ramp', '3-Phase 200V Power', 'Office Mezzanine', 'Electric Shutter'],
            isNewListing: true,
        },
        {
            id: 'w2',
            listingCode: 'WH-KWG-7482910482',
            title: `${cityName} High Ceiling Cargo Storage & Distribution Yard`,
            propertyName: `${cityName} Freight Logistics Center`,
            rentYen: 450000,
            rentDisplay: '450,000 yen',
            commonFeeDisplay: '20,000 yen / mo',
            depositDisplay: '3 months',
            keyMoneyDisplay: '1 month',
            usableAreaM2: '298.80 m²',
            usableAreaTsubo: '90.38 tsubo',
            ceilingHeight: '6.5m Clearance',
            floorLoadCapacity: '3.0 tons / m²',
            structure: 'Reinforced Concrete & Steel',
            shutterDimensions: 'W 5.2m x H 4.8m Double Shutter',
            address: `Ryoke, ${cityName}, ${capitalizedPref} Prefecture`,
            accessStation: '8-min drive to Interstate Expressway Interchange',
            imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            tags: ['Container Truck Dock', 'Overhead Crane Hoist', '24/7 Access CCTV', 'Sprinklers'],
            isNewListing: true,
        },
        {
            id: 'w3',
            listingCode: 'WH-KWG-8193029104',
            title: `${cityName} Compact Commercial Storage & Equipment Facility`,
            propertyName: `${cityName} Trade & Distribution Unit B`,
            rentYen: 165000,
            rentDisplay: '165,000 yen',
            commonFeeDisplay: '10,000 yen / mo',
            depositDisplay: '2 months',
            keyMoneyDisplay: 'Zero Key Money',
            usableAreaM2: '86.20 m²',
            usableAreaTsubo: '26.07 tsubo',
            ceilingHeight: '5.2m Clearance',
            floorLoadCapacity: '1.8 tons / m²',
            structure: 'Steel Frame Ground Floor',
            shutterDimensions: 'W 4.2m x H 4.0m Roll-up Shutter',
            address: `Naka-Aoki, ${cityName}, ${capitalizedPref} Prefecture`,
            accessStation: '15-min walk from Kawaguchi Station (JR Keihin-Tohoku Line)',
            imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
            tags: ['Zero Key Money', 'Direct Truck Access', '24/7 Security Access', 'LED Bay Lighting'],
        },
        {
            id: 'w4',
            listingCode: 'WH-KWG-9038201948',
            title: `${cityName} Multi-Story Logistics Facility with Freight Elevator`,
            propertyName: `${cityName} Cargo Tower & Storage Hub`,
            rentYen: 890000,
            rentDisplay: '890,000 yen',
            commonFeeDisplay: '40,000 yen / mo',
            depositDisplay: '3 months',
            keyMoneyDisplay: '1 month',
            usableAreaM2: '580.40 m²',
            usableAreaTsubo: '175.57 tsubo',
            ceilingHeight: '5.8m Clearance per floor',
            floorLoadCapacity: '2.0 tons / m²',
            structure: 'Steel Frame 2-Story Facility',
            shutterDimensions: 'W 5.0m x H 4.5m Shutter & Dock',
            address: `Hasuda, ${cityName}, ${capitalizedPref} Prefecture`,
            accessStation: '10-min drive from Tokyo Ring Road Interchange',
            imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
            tags: ['Freight Elevator (3.5t)', '2-Story Office Suite', 'Reserved Truck Bays', 'Sprinklers'],
        },
    ];

    return {
        prefectureSlug,
        prefectureName: capitalizedPref,
        citySlug,
        cityName,
        totalCount: cards.length,
        cards,
    };
}

export function getWarehouseDetail(id: string): WarehouseDetailSpec {
    const foundWhatNew = WHAT_S_NEW_WAREHOUSE_LISTINGS.find((w) => w.id === id);
    const sampleCity = getWarehouseCityListData('kawaguchi-city', 'saitama');
    const foundCityCard = sampleCity.cards.find((c) => c.id === id);

    const title = foundWhatNew?.title || foundCityCard?.title || 'Kawaguchi Motogo Heavy Logistics Center & Commercial Warehouse';
    const rentDisplay = foundWhatNew?.price || foundCityCard?.rentDisplay || '280,000 yen';
    const usableAreaM2 = foundWhatNew?.size || foundCityCard?.usableAreaM2 || '145.50 m²';
    const address = foundCityCard?.address || 'Arai, Kawaguchi City, Saitama Prefecture';
    const stationAccess = foundCityCard?.accessStation || '12-min walk from Kawaguchi-Motogo Station (Saitama Railway Line)';

    return {
        id: id || 'w1',
        listingCode: `WH-${id ? id.toUpperCase() : 'W1'}-6987482007`,
        label: 'Rental Warehouse & Logistics Facility',
        title,
        propertyName: title.split('—')[0].trim(),
        rentYen: foundCityCard?.rentYen || 280000,
        rentDisplay,
        commonFeeDisplay: foundCityCard?.commonFeeDisplay || '15,000 yen / month',
        depositDisplay: foundCityCard?.depositDisplay || '2 months rent',
        keyMoneyDisplay: foundCityCard?.keyMoneyDisplay || '1 month rent',
        guaranteeFeeDisplay: '50% of 1st month rent',
        renewalFeeDisplay: '1 month new rent',
        usableAreaM2,
        usableAreaTsubo: foundCityCard?.usableAreaTsubo || '44.01 tsubo',
        ceilingHeight: foundCityCard?.ceilingHeight || '6.0 meters clearance',
        floorLoadCapacity: foundCityCard?.floorLoadCapacity || '2.5 tons / m²',
        structure: foundCityCard?.structure || 'Steel Frame (S Structure) 1st Floor Drive-In',
        yearBuilt: 'Built in 2020 (Modern Reinforced Construction)',
        floorLevel: '1st Ground Floor (Direct Shutter Drive-In Dock)',
        shutterDimensions: foundCityCard?.shutterDimensions || 'W 4.8m x H 4.5m Electric Roll-up Shutter',
        truckAccess: 'Large 10-Ton Container Truck Loading Dock & Ramp',
        powerSupply: '3-Phase 200V / High Voltage Capacity Power',
        address,
        stationAccess,
        currentStatus: 'Vacant & Available Immediately',
        handoverDate: 'Immediate Handover Available',
        description:
            'High-grade commercial rental warehouse equipped with electric roll-up shutter doors, 6.0m clear ceiling height, and 2.5t/m² heavy floor load capacity. Features 3-Phase 200V industrial power, loading dock for 10-ton container trucks, LED lighting, office mezzanine space, and 24/7 security access control.',
        features: foundCityCard?.tags || [
            'Overhead Electric Roll-Up Shutter Door',
            'Heavy 2.5t/m² Floor Load Capacity',
            '6.0m High Ceiling Clearance',
            '3-Phase 200V High Voltage Power Supply',
            '10-Ton Container Truck Loading Ramp',
            'Integrated Office Mezzanine Space',
            '24/7 Security CCTV & Keycard Access',
            'Fire Sprinkler System & Alarm',
            'On-Site Reserved Truck Parking',
        ],
        galleryImages: [
            {
                url: foundWhatNew?.imageUrl || foundCityCard?.imageUrl || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
                caption: 'Warehouse Interior Storage Bay with 6.0m Clearance',
            },
            {
                url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
                caption: 'Exterior Loading Dock & Heavy Truck Access Ramp',
            },
            {
                url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
                caption: 'Overhead Electric Shutter Gate & Drive-in Access',
            },
            {
                url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1000&q=80',
                caption: 'Office Mezzanine & Staff Restroom Facility',
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
    { label: 'Kawaguchi City', path: '/seahome-real-estates/rental-warehouse/saitama/kawaguchi-city/list' },
    { label: 'Ota Ward', path: '/seahome-real-estates/rental-warehouse/tokyo/ota-ward/list' },
    { label: 'Adachi Ward', path: '/seahome-real-estates/rental-warehouse/tokyo/adachi-ward/list' },
    { label: 'Edogawa Ward', path: '/seahome-real-estates/rental-warehouse/tokyo/edogawa-ward/list' },
    { label: 'Gifu City', path: '/seahome-real-estates/rental-warehouse/gifu/gifu-city/list' },
    { label: 'Minato Ward, Osaka City', path: '/seahome-real-estates/rental-warehouse/osaka/osaka-minato/list' },
    { label: 'Nishiyodogawa Ward, Osaka City', path: '/seahome-real-estates/rental-warehouse/osaka/osaka-nishiyodogawa/list' },
    { label: 'Joto Ward, Osaka City', path: '/seahome-real-estates/rental-warehouse/osaka/osaka-joto/list' },
    { label: 'Yodogawa Ward, Osaka City', path: '/seahome-real-estates/rental-warehouse/osaka/osaka-yodogawa/list' },
    { label: 'Hirano Ward, Osaka City', path: '/seahome-real-estates/rental-warehouse/osaka/osaka-hirano/list' },
    { label: 'Toyonaka City', path: '/seahome-real-estates/rental-warehouse/osaka/toyonaka-city/list' },
    { label: 'Yao City', path: '/seahome-real-estates/rental-warehouse/osaka/yao-city/list' },
    { label: 'Settsu City', path: '/seahome-real-estates/rental-warehouse/osaka/settsu-city/list' },
    { label: 'Higashi-Osaka City', path: '/seahome-real-estates/rental-warehouse/osaka/higashi-osaka/list' },
    { label: 'Amagasaki City', path: '/seahome-real-estates/rental-warehouse/hyogo/amagasaki-city/list' },
];

export const STATIONS_TO_WATCH_WAREHOUSE: NamedLink[] = [
    { label: 'Hirano Station', path: '/seahome-real-estates/rental-warehouse/osaka/hirano-st/station-list' },
    { label: 'Eganosho Station', path: '/seahome-real-estates/rental-warehouse/osaka/eganosho-st/station-list' },
    { label: 'Bentencho Station', path: '/seahome-real-estates/rental-warehouse/osaka/bentencho-st/station-list' },
    { label: 'Shin-Nagata Station', path: '/seahome-real-estates/rental-warehouse/hyogo/shin-nagata-st/station-list' },
    { label: 'Tokuan Station', path: '/seahome-real-estates/rental-warehouse/osaka/tokuan-st/station-list' },
    { label: 'Goshijima Station', path: '/seahome-real-estates/rental-warehouse/osaka/goshijima-st/station-list' },
    { label: 'Kashima Station', path: '/seahome-real-estates/rental-warehouse/osaka/kashima-st/station-list' },
    { label: 'Minami-Suita Station', path: '/seahome-real-estates/rental-warehouse/osaka/minami-suita-st/station-list' },
    { label: 'Kizuri-Kamikita Station', path: '/seahome-real-estates/rental-warehouse/osaka/kizuri-kamikita-st/station-list' },
    { label: 'Kanzakigawa Station', path: '/seahome-real-estates/rental-warehouse/osaka/kanzakigawa-st/station-list' },
    { label: 'Sonoda Station', path: '/seahome-real-estates/rental-warehouse/hyogo/sonoda-st/station-list' },
    { label: 'Shonai Station', path: '/seahome-real-estates/rental-warehouse/osaka/shonai-st/station-list' },
    { label: 'Asashiobashi Station', path: '/seahome-real-estates/rental-warehouse/osaka/asashiobashi-st/station-list' },
    { label: 'Nagata Station', path: '/seahome-real-estates/rental-warehouse/osaka/nagata-st/station-list' },
    { label: 'Minami-Settsu Station', path: '/seahome-real-estates/rental-warehouse/osaka/minami-settsu-st/station-list' },
];

export function getWarehouseStationListData(stationSlug: string, prefectureSlug: string) {
    const capitalizedPref = prefectureSlug ? prefectureSlug.charAt(0).toUpperCase() + prefectureSlug.slice(1) : 'Osaka';
    let stationName = 'Hirano Station';
    let railwayLine = 'JR Yamatoji Line / Osaka Metro Tanimachi Line';

    if (stationSlug.includes('eganosho')) {
        stationName = 'Eganosho Station';
        railwayLine = 'Kintetsu Minami-Osaka Line';
    } else if (stationSlug.includes('bentencho')) {
        stationName = 'Bentencho Station';
        railwayLine = 'JR Osaka Loop Line / Osaka Metro Chuo Line';
    } else if (stationSlug.includes('shin-nagata')) {
        stationName = 'Shin-Nagata Station';
        railwayLine = 'JR Kobe Line / Kobe Municipal Subway';
    } else if (stationSlug.includes('tokuan')) {
        stationName = 'Tokuan Station';
        railwayLine = 'JR Gakken-Toshi Line';
    } else if (stationSlug.includes('kashima')) {
        stationName = 'Kashima Station';
        railwayLine = 'JR Tozai Line';
    } else if (stationSlug.includes('sonoda')) {
        stationName = 'Sonoda Station';
        railwayLine = 'Hankyu Kobe Main Line';
    } else if (stationSlug.includes('shonai')) {
        stationName = 'Shonai Station';
        railwayLine = 'Hankyu Takarazuka Main Line';
    } else if (stationSlug.includes('asashiobashi')) {
        stationName = 'Asashiobashi Station';
        railwayLine = 'Osaka Metro Chuo Line';
    }

    const cards: WarehouseCityListingCard[] = [
        {
            id: 'w1',
            listingCode: 'WH-STN-6987482007',
            title: `Logistics Storage & Rental Warehouse near ${stationName}`,
            propertyName: `${stationName} Transit Logistics Center Bay A`,
            rentYen: 310000,
            rentDisplay: '310,000 yen',
            commonFeeDisplay: '18,000 yen / mo',
            depositDisplay: '2 months',
            keyMoneyDisplay: '1 month',
            usableAreaM2: '168.00 m²',
            usableAreaTsubo: '50.82 tsubo',
            ceilingHeight: '6.2m Clearance',
            floorLoadCapacity: '2.5 tons / m²',
            structure: 'Steel Frame 1st Floor (Drive-In)',
            shutterDimensions: 'W 5.0m x H 4.6m Gate',
            address: `Hirano Ward, Osaka City, ${capitalizedPref} Prefecture`,
            accessStation: `6-min walk from ${stationName} (${railwayLine})`,
            imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            tags: ['10-Ton Truck Loading Ramp', '3-Phase 200V Power', 'Office Mezzanine', 'Electric Shutter'],
            isNewListing: true,
        },
        {
            id: 'w2',
            listingCode: 'WH-STN-7482019482',
            title: `High Clearance Freight Depot & Distribution Yard near ${stationName}`,
            propertyName: `${stationName} Cargo Transit Hub`,
            rentYen: 520000,
            rentDisplay: '520,000 yen',
            commonFeeDisplay: '25,000 yen / mo',
            depositDisplay: '3 months',
            keyMoneyDisplay: '1 month',
            usableAreaM2: '340.50 m²',
            usableAreaTsubo: '103.00 tsubo',
            ceilingHeight: '6.8m Clearance',
            floorLoadCapacity: '3.5 tons / m²',
            structure: 'Reinforced Concrete & Steel Heavy Structure',
            shutterDimensions: 'W 5.5m x H 5.0m Double Gate',
            address: `Near ${stationName}, ${capitalizedPref} Prefecture`,
            accessStation: `4-min walk from ${stationName} (${railwayLine})`,
            imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            tags: ['Container Truck Dock', 'Overhead Crane Hoist', '24/7 Access CCTV', 'Sprinklers'],
            isNewListing: true,
        },
        {
            id: 'w3',
            listingCode: 'WH-STN-8193049201',
            title: `Compact Industrial Storage & Equipment Bay near ${stationName}`,
            propertyName: `${stationName} Commercial Storage Unit B`,
            rentYen: 175000,
            rentDisplay: '175,000 yen',
            commonFeeDisplay: '12,000 yen / mo',
            depositDisplay: '2 months',
            keyMoneyDisplay: 'Zero Key Money',
            usableAreaM2: '92.40 m²',
            usableAreaTsubo: '27.95 tsubo',
            ceilingHeight: '5.5m Clearance',
            floorLoadCapacity: '2.0 tons / m²',
            structure: 'Steel Frame Ground Floor Drive-in',
            shutterDimensions: 'W 4.5m x H 4.2m Roll-up Shutter',
            address: `Adjacent to ${stationName}, ${capitalizedPref} Prefecture`,
            accessStation: `9-min walk from ${stationName} (${railwayLine})`,
            imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
            tags: ['Zero Key Money', 'Direct Truck Access', '24/7 Security Access', 'LED Bay Lighting'],
        },
        {
            id: 'w4',
            listingCode: 'WH-STN-9038102948',
            title: `2-Story Logistics Facility with Freight Elevator near ${stationName}`,
            propertyName: `${stationName} Cargo Tower & Storage Facility`,
            rentYen: 950000,
            rentDisplay: '950,000 yen',
            commonFeeDisplay: '45,000 yen / mo',
            depositDisplay: '3 months',
            keyMoneyDisplay: '1 month',
            usableAreaM2: '620.00 m²',
            usableAreaTsubo: '187.55 tsubo',
            ceilingHeight: '6.0m Clearance per floor',
            floorLoadCapacity: '2.2 tons / m²',
            structure: 'Steel Frame 2-Story Cargo Facility',
            shutterDimensions: 'W 5.2m x H 4.8m Shutter Ramp',
            address: `Expressway Arterial near ${stationName}, ${capitalizedPref} Prefecture`,
            accessStation: `11-min walk / 3-min drive from ${stationName}`,
            imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
            tags: ['Freight Elevator (3.5t)', '2-Story Office Suite', 'Reserved Truck Bays', 'Sprinklers'],
        },
    ];

    return {
        prefectureSlug,
        prefectureName: capitalizedPref,
        stationSlug,
        stationName,
        railwayLine,
        totalCount: cards.length,
        cards,
    };
}

export const AFFILIATED_STORE_BANNER_WAREHOUSE_DATA = {
    title: 'Find a SeaHome affiliated store',
    description: "Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!",
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    link: '/properties?type=warehouse',
};

export const FOOTER_DISCLAIMER_WAREHOUSE_TEXT =
    'For all your warehouse rental needs, trust SeaHome. SeaHome, a real estate information website, makes it easy to find the perfect warehouse or storage property to suit your needs.';
