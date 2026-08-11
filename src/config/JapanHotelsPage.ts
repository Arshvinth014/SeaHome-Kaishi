// Mock data for the Japan Hotels booking page.
// Swap these arrays for real API/CMS data when wiring up the backend.

// Cities used in the search bar filter — Japan only, no other countries.
export const JAPAN_CITY_FILTERS = [
    'Tokyo',
    'Osaka',
    'Kyoto',
    'Yokohama',
    'Sapporo',
    'Fukuoka',
    'Nagoya',
    'Okinawa (Naha)',
    'Hakone',
    'Kobe',
] as const;

export const TONIGHT_HOTELS = [
    {
        id: 'h1',
        name: 'Park Hyatt Tokyo',
        location: 'Shinjuku, Tokyo',
        image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80',
        rating: 9.4,
        ratingLabel: 'Exceptional',
        reviews: 2841,
        price: '¥68,000',
        blurb: 'Located in Shinjuku, 0.6 miles from Tokyo Metropolitan Government Building, Park Hyatt Tokyo provides accommodations with skyline views.',
    },
    {
        id: 'h2',
        name: 'The Ritz-Carlton Kyoto',
        location: 'Nakagyo, Kyoto',
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
        rating: 9.6,
        ratingLabel: 'Exceptional',
        reviews: 1523,
        price: '¥92,500',
        blurb: 'Set along the Kamogawa River, The Ritz-Carlton Kyoto offers riverside rooms, a spa, and easy access to Gion.',
    },
    {
        id: 'h3',
        name: 'Osaka Marriott Miyako',
        location: 'Abeno, Osaka',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
        rating: 9.0,
        ratingLabel: 'Wonderful',
        reviews: 3190,
        price: '¥38,200',
        blurb: 'Perched atop Abeno Harukas, Japan\u2019s tallest building, this hotel has floor-to-ceiling views over Osaka.',
    },
    {
        id: 'h4',
        name: 'Fukuoka Bayside Inn',
        location: 'Hakata, Fukuoka',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
        rating: 8.7,
        ratingLabel: 'Wonderful',
        reviews: 984,
        price: '¥14,900',
        blurb: 'A short walk from Hakata Station, Fukuoka Bayside Inn provides free WiFi, harbor views, and 24-hour front desk service.',
    },
] as const;

export const WEEKEND_HOTELS = [
    {
        id: 'w1',
        name: 'Sapporo Snow Crown Hotel',
        location: 'Chuo-ku, Sapporo',
        image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&q=80',
        rating: 8.9,
        ratingLabel: 'Wonderful',
        reviews: 1102,
        price: '¥21,300',
    },
    {
        id: 'w2',
        name: 'Yokohama Bay Ryokan',
        location: 'Minato Mirai, Yokohama',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
        rating: 9.1,
        ratingLabel: 'Wonderful',
        reviews: 764,
        price: '¥26,750',
    },
    {
        id: 'w3',
        name: 'Kyoto Machiya Guesthouse',
        location: 'Higashiyama, Kyoto',
        image: 'https://images.unsplash.com/photo-1522547902298-51566e4fb383?w=600&q=80',
        rating: 9.3,
        ratingLabel: 'Exceptional',
        reviews: 512,
        price: '¥17,400',
    },
    {
        id: 'w4',
        name: 'Tokyo Bay Urban Hotel',
        location: 'Odaiba, Tokyo',
        image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80',
        rating: 8.6,
        ratingLabel: 'Wonderful',
        reviews: 2276,
        price: '¥19,800',
    },
] as const;

export const TRENDING_DESTINATIONS = [
    {
        id: 'd1',
        name: 'Tokyo',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
        avgPrice: '¥18,400',
    },
    {
        id: 'd2',
        name: 'Kyoto',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
        avgPrice: '¥16,900',
    },
    {
        id: 'd3',
        name: 'Osaka',
        image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80',
        avgPrice: '¥13,200',
    },
    {
        id: 'd4',
        name: 'Sapporo',
        image: 'https://images.unsplash.com/photo-1548813831-5eab00c11ac9?w=600&q=80',
        avgPrice: '¥11,500',
    },
] as const;

export const POPULAR_CITIES = [
    { id: 'c1', name: 'Tokyo', count: 3218, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&q=80' },
    { id: 'c2', name: 'Osaka', count: 1904, image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=300&q=80' },
    { id: 'c3', name: 'Kyoto', count: 1466, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&q=80' },
    { id: 'c4', name: 'Fukuoka', count: 742, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&q=80' },
    { id: 'c5', name: 'Yokohama', count: 611, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=300&q=80' },
    { id: 'c6', name: 'Sapporo', count: 588, image: 'https://images.unsplash.com/photo-1548813831-5eab00c11ac9?w=300&q=80' },
] as const;

export const POPULAR_HOTELS = [
    { id: 'p1', name: 'Shibuya Sky Hotel', location: 'Tokyo, Japan', rating: 8.9, ratingLabel: 'Wonderful', reviews: 8210, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=300&q=80' },
    { id: 'p2', name: 'Namba Central Hotel', location: 'Osaka, Japan', rating: 8.4, ratingLabel: 'Very Good', reviews: 5390, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&q=80' },
    { id: 'p3', name: 'Gion Riverside Inn', location: 'Kyoto, Japan', rating: 9.2, ratingLabel: 'Exceptional', reviews: 3021, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&q=80' },
    { id: 'p4', name: 'Hakata Station Hotel', location: 'Fukuoka, Japan', rating: 8.1, ratingLabel: 'Very Good', reviews: 1889, image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=300&q=80' },
    { id: 'p5', name: 'Minato Mirai Suites', location: 'Yokohama, Japan', rating: 8.7, ratingLabel: 'Wonderful', reviews: 2245, image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=300&q=80' },
    { id: 'p6', name: 'Odori Park Hotel', location: 'Sapporo, Japan', rating: 8.8, ratingLabel: 'Wonderful', reviews: 1670, image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=300&q=80' },
] as const;

export const ACCOMMODATION_TYPES = [
    { id: 'a1', title: 'Apartments', count: '18,450 apartments', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80' },
    { id: 'a2', title: 'Ryokans', count: '6,320 ryokans', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80' },
    { id: 'a3', title: 'Guesthouses', count: '9,870 guesthouses', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
    { id: 'a4', title: 'Luxury Hotels', count: '2,140 luxury hotels', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80' },
] as const;

export const HOTEL_FAQS = [
    { id: 'f1', q: 'How do I find cheap hotels in Japan on SeaHomeNet?', a: 'Use the price filter in the search bar and sort results by "Lowest price first" to see budget-friendly stays across Tokyo, Osaka, Kyoto, and more.' },
    { id: 'f2', q: 'Where can I find last-minute hotel deals?', a: 'Check the "Last minute hotels near you tonight" and "this weekend" sections above \u2014 they refresh daily with discounted same-week availability.' },
    { id: 'f3', q: 'How many hotels are listed on SeaHomeNet?', a: 'We currently list over 38,000 verified properties across Japan, from city-center business hotels to countryside ryokans.' },
    { id: 'f4', q: 'How do I search for a hotel on SeaHomeNet?', a: 'Enter your destination, check-in and check-out dates, and number of guests in the search bar, then tap Search to see available stays.' },
    { id: 'f5', q: 'Why should I trust SeaHomeNet\u2019s hotel reviews?', a: 'All reviews are submitted by guests who completed a verified stay booked through our platform, so ratings reflect real experiences.' },
    { id: 'f6', q: 'Can I book both hotels and long-term rentals here?', a: 'Yes \u2014 SeaHomeNet covers everything from nightly hotel stays to long-term apartment rentals and property purchases across Japan.' },
] as const;
