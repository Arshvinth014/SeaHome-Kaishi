// Mock data for the Japan Ryokan & Onsen page.
// Replace these arrays with real API/CMS data when connecting the backend.

export const JAPAN_RYOKAN_DESTINATION_FILTERS = [
    'Hakone',
    'Kyoto',
    'Kusatsu',
    'Beppu',
    'Kurokawa',
    'Nikko',
    'Takayama',
    'Yufuin',
    'Noboribetsu',
    'Atami',
] as const;


/* =========================================================
   FEATURED RYOKAN & ONSEN STAYS
========================================================= */

export const FEATURED_RYOKAN_STAYS = [
    {
        id: 'r1',
        name: 'Hakone Yutowa',
        location: 'Hakone, Kanagawa',
        image:
            'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=85',
        rating: 9.3,
        ratingLabel: 'Exceptional',
        reviews: 1842,
        price: '¥32,800',
        feature: 'Private Onsen',
        blurb:
            'A peaceful Hakone retreat surrounded by mountains, hot springs, and traditional Japanese hospitality.',
        tags: ['Onsen', 'Mountain View', 'Breakfast'],
    },

    {
        id: 'r2',
        name: 'Gora Kadan',
        location: 'Gora, Hakone',
        image:
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=85',
        rating: 9.7,
        ratingLabel: 'Exceptional',
        reviews: 1256,
        price: '¥68,500',
        feature: 'Luxury Ryokan',
        blurb:
            'A historic luxury ryokan featuring private hot-spring baths, elegant rooms, and seasonal Japanese cuisine.',
        tags: ['Luxury', 'Kaiseki', 'Private Bath'],
    },

    {
        id: 'r3',
        name: 'Kurokawa Onsen Ryokan',
        location: 'Kurokawa, Kumamoto',
        image:
            'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=700&q=85',
        rating: 9.5,
        ratingLabel: 'Exceptional',
        reviews: 967,
        price: '¥41,200',
        feature: 'Forest Onsen',
        blurb:
            'Traditional wooden accommodation tucked into a forested hot-spring village in Kyushu.',
        tags: ['Forest', 'Onsen', 'Traditional'],
    },

    {
        id: 'r4',
        name: 'Yufuin Baien',
        location: 'Yufuin, Oita',
        image:
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&q=85',
        rating: 9.1,
        ratingLabel: 'Wonderful',
        reviews: 1438,
        price: '¥28,900',
        feature: 'Mount Yufu Views',
        blurb:
            'Relax in natural hot springs while enjoying beautiful views of Mount Yufu and the surrounding countryside.',
        tags: ['Mountain View', 'Onsen', 'Garden'],
    },
] as const;


/* =========================================================
   LAST-MINUTE RYOKAN
========================================================= */

export const TONIGHT_RYOKANS = [
    {
        id: 't1',
        name: 'Hakone Kowakudani Onsen',
        location: 'Hakone, Kanagawa',
        image:
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
        rating: 9.2,
        ratingLabel: 'Exceptional',
        reviews: 932,
        price: '¥24,800',
    },

    {
        id: 't2',
        name: 'Kusatsu Onsen Hotel',
        location: 'Kusatsu, Gunma',
        image:
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=80',
        rating: 8.9,
        ratingLabel: 'Wonderful',
        reviews: 1268,
        price: '¥19,600',
    },

    {
        id: 't3',
        name: 'Beppu Kannawa Ryokan',
        location: 'Beppu, Oita',
        image:
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80',
        rating: 9.0,
        ratingLabel: 'Wonderful',
        reviews: 721,
        price: '¥16,900',
    },

    {
        id: 't4',
        name: 'Noboribetsu Grand Hotel',
        location: 'Noboribetsu, Hokkaido',
        image:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80',
        rating: 8.8,
        ratingLabel: 'Wonderful',
        reviews: 1890,
        price: '¥22,400',
    },
] as const;


/* =========================================================
   WEEKEND RYOKANS
========================================================= */

export const WEEKEND_RYOKANS = [
    {
        id: 'w1',
        name: 'Yunohana Onsen Ryokan',
        location: 'Kyoto, Kyoto',
        image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
        rating: 9.3,
        ratingLabel: 'Exceptional',
        reviews: 804,
        price: '¥27,500',
    },

    {
        id: 'w2',
        name: 'Kurokawa Hana-no-Sho',
        location: 'Kurokawa, Kumamoto',
        image:
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
        rating: 9.4,
        ratingLabel: 'Exceptional',
        reviews: 692,
        price: '¥35,800',
    },

    {
        id: 'w3',
        name: 'Atami Seaside Ryokan',
        location: 'Atami, Shizuoka',
        image:
            'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
        rating: 8.8,
        ratingLabel: 'Wonderful',
        reviews: 1176,
        price: '¥21,300',
    },

    {
        id: 'w4',
        name: 'Takayama Traditional Inn',
        location: 'Takayama, Gifu',
        image:
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
        rating: 9.1,
        ratingLabel: 'Wonderful',
        reviews: 548,
        price: '¥18,700',
    },
] as const;


/* =========================================================
   POPULAR ONSEN DESTINATIONS
========================================================= */

export const POPULAR_ONSEN_DESTINATIONS = [
    {
        id: 'o1',
        name: 'Hakone',
        subtitle: 'Mountain hot springs near Tokyo',
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=700&q=85',
        count: 184,
    },

    {
        id: 'o2',
        name: 'Kusatsu',
        subtitle: 'One of Japan’s most famous hot-spring towns',
        image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&q=85',
        count: 126,
    },

    {
        id: 'o3',
        name: 'Beppu',
        subtitle: 'Famous for its incredible variety of hot springs',
        image:
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=85',
        count: 213,
    },

    {
        id: 'o4',
        name: 'Kurokawa',
        subtitle: 'A peaceful traditional onsen village',
        image:
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=85',
        count: 94,
    },

    {
        id: 'o5',
        name: 'Yufuin',
        subtitle: 'Relaxing countryside hot springs',
        image:
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=85',
        count: 137,
    },

    {
        id: 'o6',
        name: 'Noboribetsu',
        subtitle: 'Volcanic hot springs in Hokkaido',
        image:
            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=85',
        count: 108,
    },
] as const;


/* =========================================================
   RYOKAN EXPERIENCES
========================================================= */

export const RYOKAN_EXPERIENCES = [
    {
        id: 'e1',
        title: 'Private Onsen',
        subtitle:
            'Enjoy a peaceful hot-spring bath in the privacy of your own room.',
        image:
            'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=700&q=85',
    },

    {
        id: 'e2',
        title: 'Kaiseki Dining',
        subtitle:
            'Experience beautifully prepared multi-course Japanese cuisine.',
        image:
            'https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=85',
    },

    {
        id: 'e3',
        title: 'Tatami Rooms',
        subtitle:
            'Stay in traditional rooms with tatami floors and futon bedding.',
        image:
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=85',
    },

    {
        id: 'e4',
        title: 'Mountain Retreats',
        subtitle:
            'Escape into quiet mountain villages surrounded by nature.',
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=700&q=85',
    },
] as const;


/* =========================================================
   POPULAR RYOKANS
========================================================= */

export const POPULAR_RYOKANS = [
    {
        id: 'p1',
        name: 'Hakone Ginyu',
        location: 'Hakone, Kanagawa',
        rating: 9.6,
        ratingLabel: 'Exceptional',
        reviews: 2104,
        image:
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80',
        price: '¥54,800',
    },

    {
        id: 'p2',
        name: 'Arashiyama Benkei',
        location: 'Arashiyama, Kyoto',
        rating: 9.4,
        ratingLabel: 'Exceptional',
        reviews: 1642,
        image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&q=80',
        price: '¥42,300',
    },

    {
        id: 'p3',
        name: 'Kurokawa Sanga',
        location: 'Kurokawa, Kumamoto',
        rating: 9.5,
        ratingLabel: 'Exceptional',
        reviews: 1087,
        image:
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=80',
        price: '¥39,900',
    },

    {
        id: 'p4',
        name: 'Yufuin Sanso Murata',
        location: 'Yufuin, Oita',
        rating: 9.7,
        ratingLabel: 'Exceptional',
        reviews: 934,
        image:
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80',
        price: '¥61,500',
    },

    {
        id: 'p5',
        name: 'Nishimuraya Kinosaki',
        location: 'Kinosaki, Hyogo',
        rating: 9.3,
        ratingLabel: 'Exceptional',
        reviews: 1468,
        image:
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
        price: '¥36,700',
    },

    {
        id: 'p6',
        name: 'Takayama Hanaoka',
        location: 'Takayama, Gifu',
        rating: 9.0,
        ratingLabel: 'Wonderful',
        reviews: 815,
        image:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80',
        price: '¥24,600',
    },
] as const;


/* =========================================================
   ONSEN REGIONS
========================================================= */

export const JAPAN_ONSEN_REGIONS = [
  {
    id: 'reg1',
    name: 'Kanto',
    subtitle: 'Easy-to-reach mountain hot springs around Tokyo.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=700&q=85',
  },
  {
    id: 'reg2',
    name: 'Kansai',
    subtitle: 'Historic onsen towns and traditional ryokans near Kyoto and Osaka.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=85',
  },
  {
    id: 'reg3',
    name: 'Hokkaido',
    subtitle: 'Scenic hot springs surrounded by mountains, forests, and snow.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&q=85',
  },
  {
    id: 'reg4',
    name: 'Kyushu',
    subtitle: 'Famous volcanic hot springs, from Beppu to Yufuin.',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=700&q=85',
  },
] as const;


/* =========================================================
   ONSEN TYPES
========================================================= */

export const ONSEN_TYPES = [
    {
        id: 'type1',
        title: 'Outdoor Rotenburo',
        count: '1,240 stays',
        description:
            'Open-air baths surrounded by mountains, forests, or gardens.',
        image:
            'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',
    },

    {
        id: 'type2',
        title: 'Private Onsen',
        count: '860 stays',
        description:
            'Private baths for couples, families, and guests seeking privacy.',
        image:
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    },

    {
        id: 'type3',
        title: 'Mountain Onsen',
        count: '720 stays',
        description:
            'Quiet hot springs hidden among Japan’s mountain landscapes.',
        image:
            'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    },

    {
        id: 'type4',
        title: 'Seaside Onsen',
        count: '410 stays',
        description:
            'Relax in warm mineral waters while looking out toward the sea.',
        image:
            'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    },
] as const;


/* =========================================================
   ONSEN ETIQUETTE GUIDE
========================================================= */

export const ONSEN_ETIQUETTE = [
    {
        id: 'et1',
        number: '01',
        title: 'Wash before entering',
        description:
            'Take a shower and clean yourself thoroughly before entering the communal bath.',
    },

    {
        id: 'et2',
        number: '02',
        title: 'Keep towels out of the water',
        description:
            'Small towels are used outside the bath and should never be placed in the hot spring.',
    },

    {
        id: 'et3',
        number: '03',
        title: 'Enjoy the bath quietly',
        description:
            'Onsens are peaceful spaces, so keep conversations quiet and respect other guests.',
    },

    {
        id: 'et4',
        number: '04',
        title: 'Dry before returning',
        description:
            'Dry yourself with your small towel before entering the changing room.',
    },
] as const;


/* =========================================================
   FAQ
========================================================= */

export const RYOKAN_ONSEN_FAQS = [
    {
        id: 'f1',
        q: 'What is a ryokan?',
        a:
            'A ryokan is a traditional Japanese inn. Many ryokans feature tatami rooms, futon bedding, Japanese meals, gardens, and hot-spring baths.',
    },

    {
        id: 'f2',
        q: 'What is an onsen?',
        a:
            'An onsen is a Japanese hot spring using naturally heated mineral-rich water. Many ryokans are built around their own onsen facilities.',
    },

    {
        id: 'f3',
        q: 'Do ryokans always have private onsens?',
        a:
            'No. Some ryokans offer shared public baths, some offer reservable private baths, and others have private onsen baths attached to individual rooms.',
    },

    {
        id: 'f4',
        q: 'What should I wear in a ryokan?',
        a:
            'Most ryokans provide a yukata, a casual Japanese robe that guests can wear around the property and sometimes to nearby attractions.',
    },

    {
        id: 'f5',
        q: 'Can I visit an onsen if I am not staying overnight?',
        a:
            'Many onsen facilities offer day-use bathing, although opening hours and availability vary by property.',
    },

    {
        id: 'f6',
        q: 'Are tattoos allowed in Japanese onsens?',
        a:
            'Policies vary between properties. Some onsens restrict tattoos while others allow them or provide private baths, so check the individual property rules before booking.',
    },
] as const;