import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronRight,
  Filter,
  HelpCircle,
  Mail,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Store,
  Train,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import { PrefectureMapModal } from '../components/seahome/ShopRentals/PrefectureMapModal';
import { specificCriteriaData } from '../config/rentalShop';

export interface ShopCriteriaProperty {
  id: string;
  listingCode: string;
  propertyName: string;
  rentYen: number;
  rentDisplay: string;
  commonFeeDisplay: string;
  depositDisplay: string;
  keyMoneyDisplay: string;
  areaM2: string;
  tsuboArea: string;
  location: string;
  stationAccess: string;
  walkMinutes: number;
  floor: string;
  structure: string;
  previousTenant: string;
  badge: string;
  imageUrl: string;
  features: string[];
  agencyPhone: string;
}

export interface ShopCriteriaMeta {
  id: string;
  title: string;
  subTitle: string;
  totalListings: number;
  description: string;
  benefits: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  properties: ShopCriteriaProperty[];
}

export const SHOP_CRITERIA_DATABASE: Record<string, ShopCriteriaMeta> = {
  'skeleton': {
    id: 'skeleton',
    title: 'Skeleton Handover Rental Shop Properties',
    subTitle: 'Bare Concrete Commercial Spaces Ready for Custom Interior & Layout Design',
    totalListings: 2840,
    description:
      'Explore skeleton condition rental stores and commercial spaces. Delivered in raw concrete shell state without existing fixtures, allowing you to design 100% customized restaurant, retail, salon, or office layouts tailored to your exact brand concept.',
    benefits: [
      {
        title: 'Complete Freedom in Interior Design',
        text: 'Build your dream store environment without constraints from previous tenant partitions or obsolete equipment.',
      },
      {
        title: 'Long-Term Brand Value & Utility Efficiency',
        text: 'Install brand-new electrical panels, HVAC ducting, and high-capacity grease traps optimized for your specific operations.',
      },
    ],
    faqs: [
      {
        q: 'What is a skeleton (スケルトン) handover condition?',
        a: 'A skeleton handover means the commercial space is delivered as raw concrete floors, walls, and ceiling, with main utility connections brought to the boundary.',
      },
      {
        q: 'How long does interior construction typically take for a skeleton store?',
        a: 'Interior fit-out construction generally takes between 4 to 8 weeks depending on the business scale and ventilation requirements.',
      },
    ],
    properties: [
      {
        id: 'sk-101',
        listingCode: 'SHP-SK-101-6990333869',
        propertyName: 'Shibuya Dogenzaka Prime Avenue Ground Floor Skeleton Unit',
        rentYen: 480000,
        rentDisplay: '480,000 yen / month',
        commonFeeDisplay: '30,000 yen / month',
        depositDisplay: '6 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '75.20 m²',
        tsuboArea: '22.74 tsubo',
        location: 'Shibuya Ward, Tokyo',
        stationAccess: '3-min walk from Shibuya Station (JR Yamanote Line)',
        walkMinutes: 3,
        floor: '1st Ground Floor Roadside',
        structure: 'Reinforced Concrete (RC Structure)',
        previousTenant: 'Bare Skeleton Shell (Newly Built)',
        badge: 'Skeleton Shell',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        features: ['Raw Concrete Handover', '3-Phase 200V High Power', '5.5m Glass Display Frontage', '24h Operation'],
        agencyPhone: '03-5489-3310',
      },
      {
        id: 'sk-102',
        listingCode: 'SHP-SK-102-6990333870',
        propertyName: 'Osaka Umeda Stationfront Commercial Plaza 2F Skeleton Suite',
        rentYen: 390000,
        rentDisplay: '390,000 yen / month',
        commonFeeDisplay: '25,000 yen / month',
        depositDisplay: '4 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '62.40 m²',
        tsuboArea: '18.87 tsubo',
        location: 'Kita Ward, Osaka City',
        stationAccess: '4-min walk from Umeda Station (Osaka Metro)',
        walkMinutes: 4,
        floor: '2nd Floor (Elevator Access)',
        structure: 'Steel Frame (S Structure)',
        previousTenant: 'Office Space (Demolished to Skeleton)',
        badge: 'Skeleton Shell',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        features: ['High Ceiling 3.2m', 'Gas Ducting Provision', 'Elevator Access', 'Corner Lot Signage'],
        agencyPhone: '06-6302-7710',
      },
      {
        id: 'sk-103',
        listingCode: 'SHP-SK-103-6990333871',
        propertyName: 'Nagoya Sakae Central District 1st Floor Storefront',
        rentYen: 550000,
        rentDisplay: '550,000 yen / month',
        commonFeeDisplay: '35,000 yen / month',
        depositDisplay: '5 months rent',
        keyMoneyDisplay: '2 months rent',
        areaM2: '88.10 m²',
        tsuboArea: '26.65 tsubo',
        location: 'Naka Ward, Nagoya City',
        stationAccess: '2-min walk from Sakae Station',
        walkMinutes: 2,
        floor: '1st Ground Floor',
        structure: 'Reinforced Concrete (RC)',
        previousTenant: 'Apparel Boutique (Skeleton Return)',
        badge: 'Skeleton Shell',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        features: ['High Foot Traffic Corridor', 'Water Meter 25mm', 'Full Glass Front', 'Immediate Handover'],
        agencyPhone: '052-981-3320',
      },
    ],
  },

  'existing-fixtures-and-fittings': {
    id: 'existing-fixtures-and-fittings',
    title: 'Turnkey Store Properties with Existing Fixtures & Fittings',
    subTitle: 'Ready-to-Open Commercial Spaces with Kitchen Equipment & Furniture Included',
    totalListings: 3520,
    description:
      'Minimize initial capital expenditure and open your business faster. These properties include existing kitchen hoods, counter seating, lighting, or salon styling chairs left by previous operators.',
    benefits: [
      {
        title: 'Drastically Reduced Initial Setup Costs',
        text: 'Save tens of thousands of dollars on expensive commercial kitchen ranges, grease traps, and refrigeration units.',
      },
      {
        title: 'Rapid Opening Schedule',
        text: 'Start operating within days of lease signing with minimal interior renovations required.',
      },
    ],
    faqs: [
      {
        q: 'Is there a fixture transfer fee (造作譲渡料)?',
        a: 'Some properties include free fixture transfer, while others have negotiable transfer fees clearly marked on the SeaHome listing detail page.',
      },
    ],
    properties: [
      {
        id: 'st-1',
        listingCode: 'ST-SUS-ST1-6990333869',
        propertyName: 'Susukino Central Commercial Plaza Izakaya Space',
        rentYen: 380000,
        rentDisplay: '380,000 yen / month',
        commonFeeDisplay: '25,000 yen / month',
        depositDisplay: '3 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '65.50 m²',
        tsuboArea: '19.81 tsubo',
        location: 'Chuo Ward, Sapporo City, Hokkaido',
        stationAccess: '2-min walk from Susukino Station',
        walkMinutes: 2,
        floor: '1st Ground Floor Roadside',
        structure: 'Reinforced Concrete (RC)',
        previousTenant: 'Japanese Izakaya & Charcoal Grill Dining',
        badge: 'Existing Fixtures Included',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
        features: ['Exhaust Hood Included', 'Grease Trap Installed', '3-Phase 200V Power', '24h Operating Approved'],
        agencyPhone: '03-5489-3310',
      },
    ],
  },

  'glass-front': {
    id: 'glass-front',
    title: 'Glass Front Commercial Retail Spaces & Showrooms',
    subTitle: 'High-Visibility Streetfront Stores with Full Window Displays',
    totalListings: 2150,
    description:
      'Maximize pedestrian attraction and brand exposure with full glass display frontage. Ideal for fashion boutiques, cafes, optical shops, showrooms, and customer service centers.',
    benefits: [
      {
        title: 'Maximum Natural Daylighting & Window Branding',
        text: 'Full-length window displays allow passersby to see your products and interior ambiance from the street.',
      },
    ],
    faqs: [
      {
        q: 'Can window graphics and illuminated signage be installed?',
        a: 'Yes, full glass frontage stores generally permit custom branding films and interior window displays.',
      },
    ],
    properties: [
      {
        id: 'gf-101',
        listingCode: 'SHP-GF-101-6990333872',
        propertyName: 'Omotesando Boulevard Glass Front Storefront 1F',
        rentYen: 750000,
        rentDisplay: '750,000 yen / month',
        commonFeeDisplay: '45,000 yen / month',
        depositDisplay: '6 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '92.00 m²',
        tsuboArea: '27.83 tsubo',
        location: 'Shibuya Ward, Tokyo',
        stationAccess: '2-min walk from Omotesando Station',
        walkMinutes: 2,
        floor: '1st Ground Floor Roadside',
        structure: 'Reinforced Concrete (RC)',
        previousTenant: 'Luxury Apparel & Jewelry Boutique',
        badge: 'Glass Front Storefront',
        imageUrl: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=800&q=80',
        features: ['Full Glass Window Frontage', 'High Ceiling 3.5m', 'Corner Entrance', 'Air Conditioning Installed'],
        agencyPhone: '03-5489-3310',
      },
    ],
  },

  'free-rent': {
    id: 'free-rent',
    title: 'Rent-Free Incentive Commercial Store Properties',
    subTitle: 'Enjoy 1 to 3 Months Zero Rent Period During Interior Setup',
    totalListings: 1480,
    description:
      'Keep initial setup expenditures low with rent-free incentive grace periods. Landlords offer 1 to 3 months of zero rent while you complete interior fit-outs and hire staff before official opening.',
    benefits: [
      {
        title: 'Zero Overhead Costs During Construction',
        text: 'Avoid double-rent expenses while your store interior is being constructed.',
      },
    ],
    faqs: [
      {
        q: 'Does free rent apply to management fees as well?',
        a: 'Free rent typically waives base monthly rent, while common service fees may still apply during the setup period.',
      },
    ],
    properties: [
      {
        id: 'fr-101',
        listingCode: 'SHP-FR-101-6990333873',
        propertyName: 'Ikebukuro Sunshine Avenue Store Unit (2 Months Free Rent)',
        rentYen: 320000,
        rentDisplay: '320,000 yen / month',
        commonFeeDisplay: '20,000 yen / month',
        depositDisplay: '3 months rent',
        keyMoneyDisplay: '0 Yen (Zero Key Money)',
        areaM2: '58.30 m²',
        tsuboArea: '17.63 tsubo',
        location: 'Toshima Ward, Tokyo',
        stationAccess: '4-min walk from Ikebukuro Station',
        walkMinutes: 4,
        floor: '1st Floor Storefront',
        structure: 'Steel Frame (S Structure)',
        previousTenant: 'Cosmetics & Beauty Supply Shop',
        badge: '2 Months Free Rent',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        features: ['2 Months Free Rent Incentive', 'Zero Key Money', '1st Floor Access', 'High Foot Traffic'],
        agencyPhone: '03-5290-8800',
      },
    ],
  },
};

export function getShopCriteriaDetail(slug: string): ShopCriteriaMeta {
  const norm = (slug || 'skeleton')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-');

  if (SHOP_CRITERIA_DATABASE[norm]) {
    return SHOP_CRITERIA_DATABASE[norm];
  }

  // Check partial matches in database keys
  const matchedKey = Object.keys(SHOP_CRITERIA_DATABASE).find(
    (k) => norm.includes(k) || k.includes(norm)
  );
  if (matchedKey) {
    return SHOP_CRITERIA_DATABASE[matchedKey];
  }

  // Dynamic Generator for any item slug from specificCriteriaData
  const titleName = slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    id: norm,
    title: `Rental Store Properties (${titleName})`,
    subTitle: `Commercial Shop & Retail Properties Filtered by ${titleName}`,
    totalListings: 1950,
    description: `Browse verified commercial retail shops, dining spaces, and storefronts matching ${titleName}. Filter by prefecture, city, monthly rent, and station walking distance.`,
    benefits: [
      {
        title: 'Targeted Commercial Selection',
        text: `Find properties matching your exact operational requirements (${titleName}) for optimal retail performance.`,
      },
      {
        title: 'Verified SeaHome Net Partner Listings',
        text: 'Directly connect with licensed real estate specialists knowledgeable in commercial store leasing.',
      },
    ],
    faqs: [
      {
        q: 'How do I schedule a tour for this store property?',
        a: 'Click "View Store Details" or "Inquire Now" to contact the listing agent directly on SeaHome Net.',
      },
    ],
    properties: [
      {
        id: 'sk-101',
        listingCode: 'SHP-SK-101-6990333869',
        propertyName: `Shibuya Commercial Storefront (${titleName})`,
        rentYen: 480000,
        rentDisplay: '480,000 yen / month',
        commonFeeDisplay: '30,000 yen / month',
        depositDisplay: '4 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '75.20 m²',
        tsuboArea: '22.74 tsubo',
        location: 'Shibuya Ward, Tokyo',
        stationAccess: '3-min walk from Shibuya Station',
        walkMinutes: 3,
        floor: '1st Ground Floor Roadside',
        structure: 'Reinforced Concrete (RC)',
        previousTenant: 'Retail Boutique',
        badge: titleName,
        imageUrl: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=800&q=80',
        features: ['1st Floor Access', 'High Foot Traffic', 'Wide Glass Frontage', '24h Operation'],
        agencyPhone: '03-5489-3310',
      },
      {
        id: 'st-1',
        listingCode: 'ST-SUS-ST1-6990333869',
        propertyName: `Shinjuku Central Avenue Dining & Store Space`,
        rentYen: 380000,
        rentDisplay: '380,000 yen / month',
        commonFeeDisplay: '25,000 yen / month',
        depositDisplay: '3 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '65.50 m²',
        tsuboArea: '19.81 tsubo',
        location: 'Shinjuku Ward, Tokyo',
        stationAccess: '2-min walk from Shinjuku Station',
        walkMinutes: 2,
        floor: '1st Floor',
        structure: 'SRC Structure',
        previousTenant: 'Restaurant & Bar',
        badge: 'Prime Storefront',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        features: ['Existing Kitchen Hood', 'Grease Trap', '3-Phase Power', 'Water Meter 25mm'],
        agencyPhone: '03-5290-8800',
      },
    ],
  };
}

export const SeahomeRentalShopCriteriaPage: React.FC = () => {
  const { criteriaSlug = 'skeleton' } = useParams<{ criteriaSlug: string }>();

  const [isPrefectureModalOpen, setIsPrefectureModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('All Japan');
  const [maxRentFilter, setMaxRentFilter] = useState<number>(0);
  const [maxWalkFilter, setMaxWalkFilter] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'recommended' | 'rent-asc' | 'rent-desc'>('recommended');

  // Scroll to top smoothly whenever criteriaSlug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [criteriaSlug]);

  const criteriaMeta = useMemo(() => getShopCriteriaDetail(criteriaSlug), [criteriaSlug]);

  const filteredProperties = useMemo(() => {
    let list = [...criteriaMeta.properties];

    if (selectedRegion !== 'All Japan') {
      list = list.filter((p) => p.location.toLowerCase().includes(selectedRegion.toLowerCase()));
    }
    if (maxRentFilter > 0) {
      list = list.filter((p) => p.rentYen <= maxRentFilter);
    }
    if (maxWalkFilter > 0) {
      list = list.filter((p) => p.walkMinutes <= maxWalkFilter);
    }

    if (sortBy === 'rent-asc') {
      list.sort((a, b) => a.rentYen - b.rentYen);
    } else if (sortBy === 'rent-desc') {
      list.sort((a, b) => b.rentYen - a.rentYen);
    }

    return list;
  }, [criteriaMeta.properties, selectedRegion, maxRentFilter, maxWalkFilter, sortBy]);

  const handleOpenStoreDetail = (storeId: string) => {
    window.open(`/seahome-real-estates/rental-shop/detail/${storeId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-16">
      {/* 1. TOP BREADCRUMB STRIP */}
      <div className="border-b border-sky-100 bg-white shadow-2xs py-3">
        <div className={HUB_CONTAINER}>
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
            <Link to="/seahome-real-estates" className="text-sky-600 hover:underline">
              SeaHome Net Top
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link to="/seahome-real-estates/rental-shop" className="text-sky-600 hover:underline">
              Rental Shop Search
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-bold text-slate-800 line-clamp-1">{criteriaMeta.title}</span>
          </div>
        </div>
      </div>

      <main className={`${HUB_CONTAINER} mt-6 space-y-6`}>
        {/* 2. HERO THEME BANNER */}
        <div className="overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 p-6 sm:p-8 text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-bold text-sky-200 border border-sky-400/30 backdrop-blur-xs">
                <Store className="h-4 w-4 text-sky-400" />
                <span>SeaHome Net Commercial Store Criteria</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug">
                {criteriaMeta.title}
              </h1>
              <p className="text-xs sm:text-sm text-sky-100/90 font-medium max-w-3xl leading-relaxed">
                {criteriaMeta.description}
              </p>
            </div>

            {/* Property Counter Box */}
            <div className="shrink-0 rounded-2xl border border-sky-400/30 bg-white/10 p-4 backdrop-blur-md text-center self-start md:self-center">
              <span className="text-xs font-semibold text-sky-200 block">Matching Stores</span>
              <span className="text-3xl font-black text-white">{criteriaMeta.totalListings.toLocaleString()}</span>
              <span className="text-xs text-sky-200 block">properties available</span>
            </div>
          </div>
        </div>

        {/* 3. REFINE FILTER BAR */}
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-xs space-y-3 sm:p-5">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-sky-600" />
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900">
                Filter {criteriaMeta.title} Properties
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsPrefectureModalOpen(true)}
              className="flex items-center gap-1 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200 transition"
            >
              <MapPin className="h-3.5 w-3.5 text-sky-600" />
              <span>Select Region / Prefecture</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
            {/* Region Selection */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">Prefecture / City</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full rounded-lg border border-slate-300 p-2 font-semibold text-slate-800 outline-none focus:border-sky-500 bg-white"
              >
                <option>All Japan</option>
                <option>Tokyo</option>
                <option>Osaka</option>
                <option>Sapporo</option>
                <option>Nagoya</option>
                <option>Fukuoka</option>
              </select>
            </div>

            {/* Max Rent */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">Max Monthly Rent</label>
              <select
                value={maxRentFilter}
                onChange={(e) => setMaxRentFilter(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 p-2 font-semibold text-slate-800 outline-none focus:border-sky-500 bg-white"
              >
                <option value={0}>Any Monthly Rent</option>
                <option value={300000}>Under 300,000 Yen</option>
                <option value={500000}>Under 500,000 Yen</option>
                <option value={1000000}>Under 1,000,000 Yen</option>
              </select>
            </div>

            {/* Station Walk */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">Station Walk Distance</label>
              <select
                value={maxWalkFilter}
                onChange={(e) => setMaxWalkFilter(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 p-2 font-semibold text-slate-800 outline-none focus:border-sky-500 bg-white"
              >
                <option value={0}>Any Distance</option>
                <option value={3}>Within 3 Minutes</option>
                <option value={5}>Within 5 Minutes</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">Sort Order</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full rounded-lg border border-slate-300 p-2 font-semibold text-slate-800 outline-none focus:border-sky-500 bg-white"
              >
                <option value="recommended">SeaHome Recommended</option>
                <option value="rent-asc">Rent: Low to High</option>
                <option value="rent-desc">Rent: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* 4. MATCHING STORE PROPERTY LISTINGS GRID */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-5 w-1.5 rounded-full bg-sky-600 inline-block" />
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Featured Stores for {criteriaMeta.title}
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredProperties.length} verified store listings
            </span>
          </div>

          <div className="space-y-4">
            {filteredProperties.map((storeProp) => (
              <div
                key={storeProp.id}
                className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* Store Thumbnail Photo */}
                  <div className="relative md:col-span-4 h-56 md:h-full bg-slate-100 min-h-[220px]">
                    <img
                      src={storeProp.imageUrl}
                      alt={storeProp.propertyName}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-sky-600 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                      {storeProp.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded bg-slate-900/80 px-2 py-0.5 text-[11px] font-bold text-white">
                      {storeProp.floor}
                    </span>
                  </div>

                  {/* Store Specs & Financial Info */}
                  <div className="md:col-span-8 p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition">
                          {storeProp.propertyName}
                        </h3>
                        <span className="text-[11px] font-bold text-slate-500 shrink-0">
                          {storeProp.listingCode}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-sky-600" />
                          {storeProp.location}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-sky-800">
                          <Train className="h-3.5 w-3.5 text-sky-600" />
                          {storeProp.stationAccess}
                        </span>
                      </div>
                    </div>

                    {/* Financial Summary Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-xl border border-sky-100 bg-sky-50/50 p-3 text-xs">
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Monthly Rent</span>
                        <strong className="text-sm font-black text-sky-900">{storeProp.rentDisplay}</strong>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Common Fee</span>
                        <strong className="text-xs font-bold text-slate-800">{storeProp.commonFeeDisplay}</strong>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Deposit</span>
                        <strong className="text-xs font-bold text-slate-800">{storeProp.depositDisplay}</strong>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Usable Area</span>
                        <strong className="text-xs font-bold text-slate-800">{storeProp.areaM2} ({storeProp.tsuboArea})</strong>
                      </div>
                    </div>

                    {/* Features Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {storeProp.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 gap-2">
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                        Previous Tenant: <strong>{storeProp.previousTenant}</strong>
                      </span>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => handleOpenStoreDetail(storeProp.id)}
                          className="flex-1 sm:flex-initial rounded-xl border border-sky-300 bg-sky-50 px-4 py-2 text-xs font-bold text-sky-800 hover:bg-sky-100 transition"
                        >
                          View Store Details
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenStoreDetail(storeProp.id)}
                          className="flex-1 sm:flex-initial rounded-xl bg-sky-600 px-5 py-2 text-xs font-bold text-white hover:bg-sky-700 transition shadow-xs flex items-center justify-center gap-1.5"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Inquire Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. CRITERIA ADVANTAGES & TIPS SECTION */}
        {criteriaMeta.benefits.length > 0 && (
          <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs sm:p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
              <Sparkles className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Key Considerations for {criteriaMeta.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {criteriaMeta.benefits.map((benefit, idx) => (
                <div key={idx} className="rounded-xl border border-sky-100 bg-sky-50/50 p-4 space-y-1.5">
                  <h3 className="text-xs font-extrabold text-sky-900 flex items-center gap-2 sm:text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white">
                      {idx + 1}
                    </span>
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium pl-7">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. FAQS SECTION */}
        {criteriaMeta.faqs.length > 0 && (
          <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs sm:p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
              <HelpCircle className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Frequently Asked Questions ({criteriaMeta.title})
              </h2>
            </div>
            <div className="space-y-3">
              {criteriaMeta.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200/80 bg-slate-50 p-4 space-y-1.5 text-xs">
                  <h3 className="font-extrabold text-slate-900 flex items-start gap-2 text-xs sm:text-sm">
                    <span className="font-black text-sky-600 shrink-0">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium pl-5 flex items-start gap-2">
                    <span className="font-black text-emerald-600 shrink-0">A.</span>
                    <span>{faq.a}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. OTHER SPECIFIC CRITERIA NAVIGATION GRID */}
        <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs sm:p-6 space-y-3">
          <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
            <SlidersHorizontal className="h-4 w-4 text-sky-600" />
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              Browse Other Specific Criteria for Rental Shops
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {specificCriteriaData.flatMap((g) =>
              g.items.map((item) => {
                const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const isCurrent = slug === criteriaSlug;
                return (
                  <Link
                    key={item}
                    to={`/seahome-real-estates/rental-shop/criteria/${slug}`}
                    className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 transition ${isCurrent
                        ? 'border-sky-500 bg-sky-600 text-white font-bold shadow-xs'
                        : 'border-sky-200 bg-sky-50/50 text-sky-900 hover:border-sky-400 hover:bg-sky-100'
                      }`}
                  >
                    <ChevronRight className={`h-3 w-3 ${isCurrent ? 'text-white' : 'text-sky-600'}`} />
                    <span>{item}</span>
                  </Link>
                );
              })
            )}
          </div>
        </section>

        {/* BACK TO RENTAL SHOP SEARCH */}
        <div className="pt-4 text-center">
          <Link
            to="/seahome-real-estates/rental-shop"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-sky-800 shadow-xs hover:bg-sky-50 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Rental Shop Main Search</span>
          </Link>
        </div>
      </main>

      {/* Region Picker Modal */}
      <PrefectureMapModal
        isOpen={isPrefectureModalOpen}
        onClose={() => setIsPrefectureModalOpen(false)}
      />
    </div>
  );
};

export default SeahomeRentalShopCriteriaPage;
