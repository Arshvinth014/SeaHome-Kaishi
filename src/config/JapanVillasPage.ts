// Mock data for the Japan Villas booking page.
// Swap these arrays for real API/CMS data when wiring up the backend.
// Japan only — all destinations and villa content are focused on Japan.

export const JAPAN_VILLA_DESTINATION_FILTERS = [
    'Hakone',
    'Karuizawa',
    'Fujikawaguchiko',
    'Kyoto',
    'Nikko',
    'Shirakawa-go',
    'Shirahama',
    'Okinawa',
    'Izu',
    'Kamakura',
] as const;


export const FEATURED_VILLA_DESTINATIONS = [
    {
        id: 'd1',
        name: 'Hakone',
        subtitle: 'Private villas with mountain and hot spring views',
        image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&q=80',
    },
    {
        id: 'd2',
        name: 'Fujikawaguchiko',
        subtitle: 'Lakefront escapes with unforgettable Mount Fuji views',
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=700&q=80',
    },
    {
        id: 'd3',
        name: 'Okinawa',
        subtitle: 'Tropical villas, private pools, and oceanfront stays',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80',
    },
    {
        id: 'd4',
        name: 'Karuizawa',
        subtitle: 'Peaceful forest villas surrounded by nature',
        image:
            'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=700&q=80',
    },
] as const;


export const TONIGHT_VILLAS = [
    {
        id: 'v1',
        name: 'Hakone Private Onsen Villa',
        location: 'Hakone, Kanagawa',
        image:
            'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=700&q=80',
        rating: 9.6,
        ratingLabel: 'Exceptional',
        reviews: 428,
        price: '¥48,000',
        blurb:
            'A peaceful private villa with its own onsen, mountain views, and a traditional Japanese-inspired interior.',
        features: ['Private onsen', 'Mountain view', 'Entire villa'],
    },
    {
        id: 'v2',
        name: 'Fuji Lakefront Retreat',
        location: 'Fujikawaguchiko, Yamanashi',
        image:
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=80',
        rating: 9.5,
        ratingLabel: 'Exceptional',
        reviews: 316,
        price: '¥55,500',
        blurb:
            'A spacious villa near Lake Kawaguchi with sweeping views of Mount Fuji and room for the whole family.',
        features: ['Fuji view', 'Lakefront', 'Family friendly'],
    },
    {
        id: 'v3',
        name: 'Okinawa Ocean Villa',
        location: 'Onna, Okinawa',
        image:
            'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80',
        rating: 9.3,
        ratingLabel: 'Exceptional',
        reviews: 692,
        price: '¥39,800',
        blurb:
            'A modern coastal villa with a private pool, open living spaces, and easy access to Okinawa beaches.',
        features: ['Private pool', 'Ocean view', 'Beach access'],
    },
    {
        id: 'v4',
        name: 'Karuizawa Forest House',
        location: 'Karuizawa, Nagano',
        image:
            'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=700&q=80',
        rating: 9.1,
        ratingLabel: 'Wonderful',
        reviews: 247,
        price: '¥32,400',
        blurb:
            'A secluded forest villa surrounded by greenery, perfect for a quiet escape from the city.',
        features: ['Forest setting', 'Private garden', 'Entire villa'],
    },
] as const;


export const WEEKEND_VILLAS = [
    {
        id: 'w1',
        name: 'Lake Kawaguchi Fuji Villa',
        location: 'Fujikawaguchiko',
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
        rating: 9.4,
        ratingLabel: 'Exceptional',
        reviews: 384,
        price: '¥41,200',
    },
    {
        id: 'w2',
        name: 'Izu Ocean View Villa',
        location: 'Izu, Shizuoka',
        image:
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80',
        rating: 9.2,
        ratingLabel: 'Exceptional',
        reviews: 291,
        price: '¥36,800',
    },
    {
        id: 'w3',
        name: 'Nikko Mountain Villa',
        location: 'Nikko, Tochigi',
        image:
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
        rating: 9.0,
        ratingLabel: 'Wonderful',
        reviews: 176,
        price: '¥28,900',
    },
    {
        id: 'w4',
        name: 'Shirahama Beach Villa',
        location: 'Shirahama, Wakayama',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
        rating: 8.9,
        ratingLabel: 'Wonderful',
        reviews: 223,
        price: '¥31,500',
    },
] as const;


export const VILLA_EXPERIENCES = [
    {
        id: 'e1',
        name: 'Private Pool Villas',
        subtitle: 'Make your stay your own with a private pool',
        image:
            'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80',
    },
    {
        id: 'e2',
        name: 'Onsen Villas',
        subtitle: 'Relax in your own private Japanese hot spring',
        image:
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80',
    },
    {
        id: 'e3',
        name: 'Mountain Retreats',
        subtitle: 'Escape into the forests and mountains of Japan',
        image:
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&q=80',
    },
    {
        id: 'e4',
        name: 'Beachfront Villas',
        subtitle: 'Wake up beside Japan’s beautiful coastline',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80',
    },
] as const;


export const POPULAR_VILLA_DESTINATIONS = [
    {
        id: 'p1',
        name: 'Hakone',
        count: 486,
        image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&q=80',
    },
    {
        id: 'p2',
        name: 'Fujikawaguchiko',
        count: 372,
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=300&q=80',
    },
    {
        id: 'p3',
        name: 'Okinawa',
        count: 921,
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80',
    },
    {
        id: 'p4',
        name: 'Karuizawa',
        count: 264,
        image:
            'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=300&q=80',
    },
    {
        id: 'p5',
        name: 'Izu',
        count: 318,
        image:
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=300&q=80',
    },
    {
        id: 'p6',
        name: 'Shirahama',
        count: 241,
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80',
    },
] as const;


export const POPULAR_VILLAS = [
    {
        id: 'pv1',
        name: 'Hakone Retreat Villa',
        location: 'Hakone, Japan',
        rating: 9.6,
        ratingLabel: 'Exceptional',
        reviews: 428,
        image:
            'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=400&q=80',
        price: '¥48,000',
        feature: 'Private onsen',
    },
    {
        id: 'pv2',
        name: 'Fuji View Private Villa',
        location: 'Fujikawaguchiko, Japan',
        rating: 9.5,
        ratingLabel: 'Exceptional',
        reviews: 316,
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&q=80',
        price: '¥55,500',
        feature: 'Mount Fuji view',
    },
    {
        id: 'pv3',
        name: 'Okinawa Blue Villa',
        location: 'Onna, Okinawa',
        rating: 9.3,
        ratingLabel: 'Exceptional',
        reviews: 692,
        image:
            'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80',
        price: '¥39,800',
        feature: 'Private pool',
    },
    {
        id: 'pv4',
        name: 'Karuizawa Forest Villa',
        location: 'Karuizawa, Japan',
        rating: 9.1,
        ratingLabel: 'Wonderful',
        reviews: 247,
        image:
            'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&q=80',
        price: '¥32,400',
        feature: 'Forest retreat',
    },
    {
        id: 'pv5',
        name: 'Izu Ocean Escape',
        location: 'Izu, Shizuoka',
        rating: 9.2,
        ratingLabel: 'Exceptional',
        reviews: 291,
        image:
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&q=80',
        price: '¥36,800',
        feature: 'Ocean view',
    },
    {
        id: 'pv6',
        name: 'Shirahama Coastal Villa',
        location: 'Shirahama, Wakayama',
        rating: 8.9,
        ratingLabel: 'Wonderful',
        reviews: 223,
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
        price: '¥31,500',
        feature: 'Beach access',
    },
] as const;


export const VILLA_STYLES = [
    {
        id: 's1',
        title: 'Luxury Villas',
        count: '1,240 luxury villas',
        image:
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80',
    },
    {
        id: 's2',
        title: 'Traditional Japanese Villas',
        count: '860 traditional villas',
        image:
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80',
    },
    {
        id: 's3',
        title: 'Beach Villas',
        count: '1,980 beach villas',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80',
    },
    {
        id: 's4',
        title: 'Mountain Villas',
        count: '740 mountain villas',
        image:
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=500&q=80',
    },
] as const;


export const JAPAN_VILLA_REGIONS = [
    {
        id: 'r1',
        name: 'Kanto',
        description: 'Hakone, Kamakura, Nikko & nearby escapes',
        image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    },
    {
        id: 'r2',
        name: 'Kansai',
        description: 'Kyoto, Osaka and peaceful countryside villas',
        image:
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    },
    {
        id: 'r3',
        name: 'Chubu',
        description: 'Mount Fuji, lakes, forests and mountain retreats',
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    },
    {
        id: 'r4',
        name: 'Okinawa',
        description: 'Island villas, private pools and ocean views',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    },
] as const;


export const VILLA_FAQS = [
    {
        id: 'f1',
        q: 'How do I find villas in Japan on SeaHomeNet?',
        a:
            'Enter your preferred Japanese destination, choose your dates and guests, then search to browse available villas. You can narrow your options by destination, villa style, price, and amenities.',
    },
    {
        id: 'f2',
        q: 'Where can I find villas with private pools in Japan?',
        a:
            'Private-pool villas are especially popular in Okinawa and other coastal destinations. You can also find private-pool stays in selected resort and countryside areas across Japan.',
    },
    {
        id: 'f3',
        q: 'Can I book a private onsen villa in Japan?',
        a:
            'Yes. Hakone and other hot spring destinations offer private villas with onsen-style bathing experiences, making them a great choice for a relaxing getaway.',
    },
    {
        id: 'f4',
        q: 'Which Japanese destinations are best for villa stays?',
        a:
            'Popular villa destinations include Hakone, Fujikawaguchiko, Okinawa, Karuizawa, Izu, Nikko, and Shirahama.',
    },
    {
        id: 'f5',
        q: 'Are Japanese villas suitable for families and groups?',
        a:
            'Many villas offer entire-property stays, multiple bedrooms, kitchens, living areas, and outdoor spaces, making them a convenient option for families and groups.',
    },
    {
        id: 'f6',
        q: 'Can I find traditional Japanese-style villas?',
        a:
            'Yes. Some villa stays feature traditional Japanese architecture, tatami-style interiors, gardens, baths, and other elements inspired by local Japanese homes.',
    },
] as const;