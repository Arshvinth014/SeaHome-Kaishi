export type ShopCategoryDetail = {
  slug: string;
  title: string;
  japaneseTitle: string;
  groupTitle: string;
  description: string;
  totalCount: number;
  criteriaTags: string[];
  sampleListings: {
    id: number;
    title: string;
    rent: string;
    managementFee: string;
    deposit: string;
    area: string;
    location: string;
    stationAccess: string;
    floor: string;
    approvedTag: string;
    img: string;
  }[];
  openingTips: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const RENTAL_SHOP_CATEGORIES: Record<string, ShopCategoryDetail> = {
  'clinic-medical': {
    slug: 'clinic-medical',
    title: 'Hospitals, Clinics & Dental Offices',
    japaneseTitle: '病院・クリニック・歯科向け賃貸店舗',
    groupTitle: 'Beauty, medical care, and nursing care',
    description: 'Find commercial spaces and medical building units approved for clinics, dental practices, internal medicine, orthopedics, and healthcare facilities. Search ground floor units with barrier-free access, water supply, and ample patient parking.',
    totalCount: 1420,
    criteriaTags: [
      '1st Floor (1階店舗)',
      'Barrier-free access (バリアフリー)',
      'Water drainage installed (水周りあり)',
      'Turnkey Medical Setup (医療居抜き)',
      'Near Station / 3-min walk (駅徒歩3分以内)',
      'Patient Parking Included (駐車場あり)',
      'Elevator (エレベーター完備)'
    ],
    sampleListings: [
      {
        id: 101,
        title: 'Shinjuku Medical Building 1st Floor Unit',
        rent: '420,000 yen/month',
        managementFee: '35,000 yen',
        deposit: 'Deposit 6 mo / Key 1 mo',
        area: '82.50 m² (24.95 tsubo)',
        location: 'Nishi-Shinjuku, Shinjuku-ku, Tokyo',
        stationAccess: '3-min walk from Nishi-Shinjuku Station',
        floor: '1st Floor',
        approvedTag: 'Clinic Approved',
        img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 102,
        title: 'Niigata Station Front Dental & Medical Space',
        rent: '280,000 yen/month',
        managementFee: '20,000 yen',
        deposit: 'Deposit 4 mo / Key 0 mo',
        area: '65.40 m² (19.78 tsubo)',
        location: 'Chuo-ku, Niigata City',
        stationAccess: '2-min walk from Niigata Station',
        floor: '2nd Floor (Elevator)',
        approvedTag: 'Dental / Medical',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 103,
        title: 'Umeda Health Care Center Roadside Facility',
        rent: '510,000 yen/month',
        managementFee: '40,000 yen',
        deposit: 'Deposit 6 mo / Key 1 mo',
        area: '110.20 m² (33.33 tsubo)',
        location: 'Kita-ku, Osaka City',
        stationAccess: '5-min walk from Umeda Station',
        floor: '1st Floor Street Facing',
        approvedTag: 'Turnkey Clinic',
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 104,
        title: 'Shibuya Orthopedic & Physical Therapy Unit',
        rent: '380,000 yen/month',
        managementFee: '25,000 yen',
        deposit: 'Deposit 5 mo / Key 1 mo',
        area: '74.10 m² (22.41 tsubo)',
        location: 'Jinnan, Shibuya-ku, Tokyo',
        stationAccess: '4-min walk from Shibuya Station',
        floor: '3rd Floor (Large Elevator)',
        approvedTag: 'Clinic / Therapy',
        img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
      },
    ],
    openingTips: [
      {
        title: 'Check Plumbing & Power Capacity Early',
        text: 'Medical and dental equipment require specialized high-capacity electrical supply and heavy plumbing drainage line access. Confirm building specs with landlords before signing.',
      },
      {
        title: 'Ensure X-Ray Shielding Compliance',
        text: 'If your clinic includes X-ray equipment, verify wall structure thickness and radiation shielding compliance required by Japanese healthcare regulations.',
      },
    ],
    faqs: [
      {
        q: 'Can a general retail shop be converted into a clinic?',
        a: 'Yes, provided the building owner permits medical use and the space meets municipal healthcare center regulations for waiting areas, ventilation, and plumbing.',
      },
      {
        q: 'What is the average initial cost for a turnkey medical unit?',
        a: 'Turnkey medical properties (居抜き店舗) save significantly on interior construction, with initial security deposits around 4-6 months rent.',
      },
    ],
    relatedSlugs: ['hair-salon', 'beauty-salon', 'massage-clinic', 'nursing-care'],
  },

  'hair-salon': {
    slug: 'hair-salon',
    title: 'Hair Salons & Barbershops',
    japaneseTitle: '美容室・理容室向け賃貸店舗',
    groupTitle: 'Beauty, medical care, and nursing care',
    description: 'Browse storefronts and upper-floor spaces suitable for hair salons, barber shops, hair coloring spots, and head spas. Search spaces equipped with shampoo station plumbing, high-power water heaters, and natural lighting.',
    totalCount: 1890,
    criteriaTags: [
      'Shampoo Plumbing Ready (シャンプー台配管あり)',
      'High-capacity Water Heater (給湯設備強化)',
      '1st Floor Storefront (路面店 / 1階店舗)',
      'Turnkey Hair Salon (美容室居抜き)',
      'Natural Sunlight (日当たり良好)',
      'Station 5-min walk (駅近)'
    ],
    sampleListings: [
      {
        id: 201,
        title: 'Harajuku Designer Hair Salon Space',
        rent: '360,000 yen/month',
        managementFee: '28,000 yen',
        deposit: 'Deposit 4 mo / Key 1 mo',
        area: '58.20 m² (17.60 tsubo)',
        location: 'Jingumae, Shibuya-ku, Tokyo',
        stationAccess: '3-min walk from Meiji-jingumae Station',
        floor: '2nd Floor (Glass Front)',
        approvedTag: 'Hair Salon Turnkey',
        img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 202,
        title: 'Yokohama Station West Exit Barber & Spa Unit',
        rent: '290,000 yen/month',
        managementFee: '22,000 yen',
        deposit: 'Deposit 3 mo / Key 1 mo',
        area: '48.90 m² (14.79 tsubo)',
        location: 'Nishi-ku, Yokohama City',
        stationAccess: '4-min walk from Yokohama Station',
        floor: '1st Floor Street Front',
        approvedTag: 'Salon / Barber',
        img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
      },
    ],
    openingTips: [
      {
        title: 'Plumbing Diameter for Multiple Washing Stations',
        text: 'Hair salons require a main water supply pipe of at least 20mm–25mm to run multiple shampoo stations simultaneously without water pressure loss.',
      },
    ],
    faqs: [
      {
        q: 'Is an upper floor unit good for a hair salon?',
        a: 'Yes! 2nd and 3rd floor units with glass windows or elevator access are very popular for hair salons because they offer privacy and lower rent costs than 1st floor retail.',
      },
    ],
    relatedSlugs: ['beauty-salon', 'esthetic-salon', 'massage-clinic', 'clinic-medical'],
  },

  'ramen-chinese': {
    slug: 'ramen-chinese',
    title: 'Ramen & Chinese Restaurants',
    japaneseTitle: 'ラーメン屋・中華料理店向け賃貸店舗',
    groupTitle: 'Heavy eating and drinking',
    description: 'Find commercial spaces equipped for heavy cooking (重飲食), ramen shops, Chinese diners, and noodle bars. Search properties with heavy gas supply, commercial duct exhaust systems, and grease traps.',
    totalCount: 1650,
    criteriaTags: [
      'Heavy Cooking Allowed (重飲食可)',
      'High Gas Volume Line (都市ガス大容量)',
      'Exhaust Duct System (排気ダクト施工済)',
      'Grease Trap (グリストラップ完備)',
      'Turnkey Restaurant (飲食居抜き)',
      '1st Floor Counter Shop (カウンター店舗)'
    ],
    sampleListings: [
      {
        id: 301,
        title: 'Ikebukuro Station East Exit Ramen Counter Shop',
        rent: '480,000 yen/month',
        managementFee: '32,000 yen',
        deposit: 'Deposit 6 mo / Key 1 mo',
        area: '42.10 m² (12.73 tsubo)',
        location: 'Higashi-Ikebukuro, Toshima-ku, Tokyo',
        stationAccess: '2-min walk from Ikebukuro Station',
        floor: '1st Floor Roadside',
        approvedTag: 'Ramen Turnkey',
        img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 302,
        title: 'Namba Dotonbori Chinese Diner & Noodle Bar',
        rent: '550,000 yen/month',
        managementFee: '40,000 yen',
        deposit: 'Deposit 8 mo / Key 1 mo',
        area: '76.80 m² (23.23 tsubo)',
        location: 'Chuo-ku, Osaka City',
        stationAccess: '3-min walk from Namba Station',
        floor: '1st Floor Busy District',
        approvedTag: 'Heavy Cooking Allowed',
        img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80',
      },
    ],
    openingTips: [
      {
        title: 'Confirm Exhaust & Smell Rules',
        text: 'Ramen broth and stir-fry cooking emit high smoke and odor. Confirm rooftop exhaust duct routing approval from building owners.',
      },
    ],
    faqs: [
      {
        q: 'What does "Heavy Cooking Allowed" (重飲食可) mean?',
        a: 'It means the landlord permits intense frying, high heat boilers, and heavy grease cooking (unlike light cafes which only permit heating pre-made food).',
      },
    ],
    relatedSlugs: ['yakiniku-korean', 'izakaya-pub', 'japanese-sushi', 'takeout-delivery'],
  },

  'cafe-bakery': {
    slug: 'cafe-bakery',
    title: 'Cafes, Coffee Shops & Bakeries',
    japaneseTitle: 'カフェ・喫茶店・ベーカリー向け賃貸店舗',
    groupTitle: 'Light food and drinks',
    description: 'Discover charming storefronts, corner units, and cozy spaces suitable for specialty cafes, coffee roasters, bakeries, tea rooms, and dessert shops.',
    totalCount: 2100,
    criteriaTags: [
      'Light Cooking (軽飲食可)',
      'Terrace Seating Allowed (テラス席可)',
      'Corner Storefront (角地店舗)',
      'Designer Interior (デザイナーズ)',
      'Bakery Oven Power (動力電気)',
      'Walk from Station 3-min (駅近)'
    ],
    sampleListings: [
      {
        id: 401,
        title: 'Kiyosumi-Shirakawa Coffee Roaster & Cafe Space',
        rent: '310,000 yen/month',
        managementFee: '20,000 yen',
        deposit: 'Deposit 4 mo / Key 1 mo',
        area: '52.30 m² (15.82 tsubo)',
        location: 'Koto-ku, Tokyo',
        stationAccess: '4-min walk from Kiyosumi-Shirakawa Station',
        floor: '1st Floor Glass Corner',
        approvedTag: 'Cafe Approved',
        img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 402,
        title: 'Kitsune Bakery & Pastry Shop Unit',
        rent: '270,000 yen/month',
        managementFee: '18,000 yen',
        deposit: 'Deposit 3 mo / Key 1 mo',
        area: '45.00 m² (13.61 tsubo)',
        location: 'Chuo-ku, Niigata City',
        stationAccess: '5-min walk from Bandai Area',
        floor: '1st Floor Street Facing',
        approvedTag: 'Bakery / Coffee',
        img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      },
    ],
    openingTips: [
      {
        title: 'Check Electrical Phase for Espresso Machines',
        text: 'Commercial 3-phase espresso machines and bakery ovens require 200V high-amperage power supply.',
      },
    ],
    faqs: [
      {
        q: 'Do cafes need grease traps?',
        a: 'If you serve warm meals or butter-heavy pastries, a small under-sink grease trap is recommended by municipal sanitation bureaus.',
      },
    ],
    relatedSlugs: ['ramen-chinese', 'izakaya-pub', 'fashion-apparel', 'takeout-delivery'],
  },

  'fashion-apparel': {
    slug: 'fashion-apparel',
    title: 'Fashion, Apparel & Accessory Stores',
    japaneseTitle: 'アパレル・服飾・雑貨向け賃貸店舗',
    groupTitle: 'Retail and merchandise sales',
    description: 'Find stylish retail spaces, boutique storefronts, and shopping district units for fashion, clothing, jewelry, cosmetics, and interior goods.',
    totalCount: 1340,
    criteriaTags: [
      'Shopping Street Location (商店街沿い)',
      'Display Window Front (ガラス張りショーウィンドウ)',
      'High Ceiling (天井高3m以上)',
      'Spotlight Track Lighting (スポットライト可)',
      '1st Floor Roadside (1階路面店)',
      'Fittings Included (什器あり)'
    ],
    sampleListings: [
      {
        id: 501,
        title: 'Omotesando Boutique Retail Storefront',
        rent: '520,000 yen/month',
        managementFee: '38,000 yen',
        deposit: 'Deposit 6 mo / Key 1 mo',
        area: '62.00 m² (18.75 tsubo)',
        location: 'Jingumae, Shibuya-ku, Tokyo',
        stationAccess: '2-min walk from Omotesando Station',
        floor: '1st Floor Street Front',
        approvedTag: 'Apparel / Retail',
        img: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=600&q=80',
      },
    ],
    openingTips: [
      {
        title: 'Evaluate Pedestrian Traffic Flow',
        text: 'Check daytime vs. evening pedestrian counts and street visibility before finalizing your retail lease.',
      },
    ],
    faqs: [
      {
        q: 'Are fitting rooms easy to install?',
        a: 'Yes, retail spaces with square floor plans allow modular fitting room installation without major structural work.',
      },
    ],
    relatedSlugs: ['cafe-bakery', 'convenience-drugstore', 'supermarket', 'retail-goods'],
  },
};

/** Dynamic fallback generator for any unlisted child category slug */
export function getRentalShopCategory(slug: string, rawTitle?: string): ShopCategoryDetail {
  const normalized = (slug || 'clinic-medical').toLowerCase().trim();
  if (RENTAL_SHOP_CATEGORIES[normalized]) {
    return RENTAL_SHOP_CATEGORIES[normalized];
  }

  const cleanTitle = rawTitle || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    slug: normalized,
    title: cleanTitle,
    japaneseTitle: `${cleanTitle}向け賃貸店舗`,
    groupTitle: 'Commercial & Retail Business',
    description: `Find commercial rental properties, vacant storefronts, and specialized spaces suitable for ${cleanTitle}. Browse units with optimal floor plans, access to transit, and flexible lease terms across Japan.`,
    totalCount: 450,
    criteriaTags: [
      '1st Floor Unit (1階店舗)',
      'Station 5-min walk (駅徒歩5分以内)',
      'Turnkey Interior (居抜き可)',
      'Parking Included (駐車場あり)',
      '24-Hour Access (24時間利用可)',
      'Signage Space (看板設置可)'
    ],
    sampleListings: [
      {
        id: 901,
        title: `Prime Station-Front Unit for ${cleanTitle}`,
        rent: '320,000 yen/month',
        managementFee: '25,000 yen',
        deposit: 'Deposit 4 mo / Key 1 mo',
        area: '54.50 m² (16.48 tsubo)',
        location: 'Shinjuku-ku, Tokyo',
        stationAccess: '3-min walk from Shinjuku Station',
        floor: '1st Floor Storefront',
        approvedTag: `${cleanTitle} Approved`,
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 902,
        title: `Niigata City Commercial Space for ${cleanTitle}`,
        rent: '210,000 yen/month',
        managementFee: '15,000 yen',
        deposit: 'Deposit 3 mo / Key 0 mo',
        area: '62.10 m² (18.78 tsubo)',
        location: 'Chuo-ku, Niigata City',
        stationAccess: '4-min walk from Bandai District',
        floor: '2nd Floor (Elevator)',
        approvedTag: 'Commercial Space',
        img: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 903,
        title: `Osaka Sannomiya Shopping Street Unit`,
        rent: '390,000 yen/month',
        managementFee: '30,000 yen',
        deposit: 'Deposit 5 mo / Key 1 mo',
        area: '71.80 m² (21.71 tsubo)',
        location: 'Kita-ku, Osaka City',
        stationAccess: '2-min walk from Umeda Station',
        floor: '1st Floor Corner Unit',
        approvedTag: 'Turnkey Store',
        img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
      },
    ],
    openingTips: [
      {
        title: 'Review Lease Terms & Business Approval',
        text: 'Ensure the lease contract explicitly lists your specific business activities under approved usage terms.',
      },
    ],
    faqs: [
      {
        q: `What should I prepare when applying for a ${cleanTitle} rental store?`,
        a: 'Prepare your business plan, company registration or personal ID, financial statements, and store concept documentation.',
      },
    ],
    relatedSlugs: ['clinic-medical', 'hair-salon', 'ramen-chinese', 'cafe-bakery', 'fashion-apparel'],
  };
}

/** Helper to generate clean URL slug from any category item string */
export function slugifyCategoryItem(itemName: string): string {
  const lower = itemName.toLowerCase();

  if (lower.includes('clinic') || lower.includes('hospital') || lower.includes('dentis')) return 'clinic-medical';
  if (lower.includes('hair') || lower.includes('barber')) return 'hair-salon';
  if (lower.includes('beauty salon') || lower.includes('salon')) return 'beauty-salon';
  if (lower.includes('massage') || lower.includes('chiropractic')) return 'massage-clinic';
  if (lower.includes('nursing') || lower.includes('welfare') || lower.includes('daycare')) return 'nursing-care';

  if (lower.includes('ramen') || lower.includes('chinese')) return 'ramen-chinese';
  if (lower.includes('bbq') || lower.includes('yakiniku') || lower.includes('korean')) return 'yakiniku-korean';
  if (lower.includes('curry') || lower.includes('international')) return 'curry-international';
  if (lower.includes('japanese') || lower.includes('sushi')) return 'japanese-sushi';
  if (lower.includes('udon') || lower.includes('soba')) return 'udon-soba';
  if (lower.includes('yakitori')) return 'yakitori';
  if (lower.includes('teppan') || lower.includes('okonomi')) return 'teppanyaki-okonomiyaki';
  if (lower.includes('western')) return 'western-restaurant';
  if (lower.includes('izakaya') || lower.includes('pub') || lower.includes('dining bar')) return 'izakaya-pub';
  if (lower.includes('bakery') || lower.includes('cake')) return 'bakery-cake';
  if (lower.includes('takeout') || lower.includes('delivery')) return 'takeout-delivery';

  if (lower.includes('cafe') || lower.includes('coffee') || lower.includes('light food')) return 'cafe-bakery';
  if (lower.includes('bar') || lower.includes('club') || lower.includes('snack')) return 'bars-clubs';
  if (lower.includes('other restaurant')) return 'other-restaurants';

  if (lower.includes('fashion') || lower.includes('apparel') || lower.includes('accessories')) return 'fashion-apparel';
  if (lower.includes('convenience') || lower.includes('drugstore')) return 'convenience-drugstore';
  if (lower.includes('supermarket')) return 'supermarket';
  if (lower.includes('retail')) return 'retail-goods';

  if (lower.includes('pachinko') || lower.includes('game')) return 'games-pachinko';
  if (lower.includes('karaoke')) return 'karaoke';
  if (lower.includes('internet') || lower.includes('manga')) return 'internet-manga-cafe';
  if (lower.includes('studio') || lower.includes('hall')) return 'studio-hall';
  if (lower.includes('amusement')) return 'amusement-other';

  if (lower.includes('school') || lower.includes('tutor') || lower.includes('cram')) return 'cram-schools';

  return itemName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
