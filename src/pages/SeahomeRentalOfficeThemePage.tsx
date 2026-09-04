import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Building,
  ChevronRight,
  Filter,
  HelpCircle,
  Mail,
  MapPin,
  Sparkles,
  Tag,
  Train,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import { PrefectureMapModal } from '../components/seahome/ShopRentals/PrefectureMapModal';

export interface OfficeThemeProperty {
  id: string;
  listingCode: string;
  buildingName: string;
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
  yearBuilt: string;
  badge: string;
  imageUrl: string;
  features: string[];
  agencyPhone: string;
}

export interface OfficeThemeMeta {
  id: string;
  title: string;
  subTitle: string;
  totalListings: number;
  description: string;
  icon: any;
  benefits: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  properties: OfficeThemeProperty[];
}

export const THEME_DATABASE: Record<string, OfficeThemeMeta> = {
  'cost-1': {
    id: 'cost-1',
    title: 'Special Feature: Offices with No Security Deposit or Key Money (Zero / 0)',
    subTitle: 'Minimize Upfront Initial Lease Capital (Shikikin & Reikin 0 Yen)',
    totalListings: 4820,
    description:
      'Looking to reduce initial cash outlay when opening or expanding your office? Browse verified rental office properties with zero security deposit and zero key money. Ideal for startups, tech ventures, and companies looking to preserve liquidity for business operations.',
    icon: Tag,
    benefits: [
      {
        title: 'Significantly Lower Starting Capital',
        text: 'Save up to 3 to 6 months of rent in upfront deposit requirements, allowing you to invest funds directly into interior fit-outs and IT infrastructure.',
      },
      {
        title: 'Fast & Flexible Commercial Lease Agreement',
        text: 'Zero-deposit offices often feature streamlined lease approval processes designed to help corporate tenants move in without delays.',
      },
    ],
    faqs: [
      {
        q: 'Are there hidden fees for zero deposit and zero key money offices?',
        a: 'No. All mandatory costs such as management fees, guarantee company enrollment fees, and restoration terms are transparently disclosed upfront on SeaHome Net.',
      },
      {
        q: 'Can corporate tax registration be completed at zero deposit offices?',
        a: 'Yes, all commercial offices listed on SeaHome Net support official legal address registration for Japanese corporate entities.',
      },
    ],
    properties: [
      {
        id: '1082505888',
        listingCode: 'OFF-1082505888',
        buildingName: 'Shimo-Ochiai Station Front Executive Office 3F',
        rentYen: 165000,
        rentDisplay: '165,000 yen / month',
        commonFeeDisplay: '15,000 yen / month',
        depositDisplay: '0 Yen (Zero Deposit)',
        keyMoneyDisplay: '0 Yen (Zero Key Money)',
        areaM2: '20.00 m²',
        tsuboArea: '6.05 tsubo',
        location: 'Shinjuku-ku, Tokyo',
        stationAccess: '3-min walk from Shimo-Ochiai Station (Seibu Shinjuku Line)',
        walkMinutes: 3,
        floor: '3rd Floor (Elevator)',
        structure: 'Steel Reinforced Concrete (SRC)',
        yearBuilt: 'Built in 2020',
        badge: 'Zero Deposit & Key Money',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        features: ['50mm OA Raised Floor', '24/7 Smart Access', 'Individual Air Conditioning', 'Zero Key Money'],
        agencyPhone: '03-5290-8800',
      },
      {
        id: '1082505890',
        listingCode: 'OFF-1082505890',
        buildingName: 'Akaike Station Avenue Commercial Office Suite 2F',
        rentYen: 159500,
        rentDisplay: '159,500 yen / month',
        commonFeeDisplay: '12,000 yen / month',
        depositDisplay: '0 Yen (Zero Deposit)',
        keyMoneyDisplay: '0 Yen (Zero Key Money)',
        areaM2: '52.00 m²',
        tsuboArea: '15.73 tsubo',
        location: 'Nisshin City, Aichi',
        stationAccess: '3-min walk from Akaike Station',
        walkMinutes: 3,
        floor: '2nd Floor',
        structure: 'Reinforced Concrete (RC)',
        yearBuilt: 'Built in 2021',
        badge: 'Zero Initial Fee',
        imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
        features: ['Station Front Corridor', 'High-Speed Fiber Optical', 'Restrooms Separate', 'Zero Deposit'],
        agencyPhone: '052-981-3320',
      },
      {
        id: '1082505892',
        listingCode: 'OFF-1082505892',
        buildingName: 'Tenjinbashisuji Business Plaza 5F',
        rentYen: 379280,
        rentDisplay: '379,280 yen / month',
        commonFeeDisplay: '25,000 yen / month',
        depositDisplay: '0 Yen (Zero Deposit)',
        keyMoneyDisplay: '0 Yen (Zero Key Money)',
        areaM2: '114.00 m²',
        tsuboArea: '34.48 tsubo',
        location: 'Kita-ku, Osaka City',
        stationAccess: '4-min walk from Tenjinbashisuji 6-chome Station',
        walkMinutes: 4,
        floor: '5th Floor',
        structure: 'Steel Frame (S Structure)',
        yearBuilt: 'Built in 2019',
        badge: 'Zero Shikikin / Reikin',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
        features: ['OA Raised Floor', 'Passenger & Service Elevators', '24h Card Security', 'Zero Key Money'],
        agencyPhone: '06-6451-9980',
      },
    ],
  },

  'criteria-2': {
    id: 'criteria-2',
    title: 'Special Feature: Ground Floor Office Space for Rent (1st Floor Roadside Access)',
    subTitle: 'Convenient 1st Floor Walk-In Workspaces & Customer Frontage Offices',
    totalListings: 3150,
    description:
      'Ground floor office spaces offer seamless visitor access without elevator wait times, high visibility for customer branding, and efficient logistics for deliveries and equipment moving.',
    icon: Building,
    benefits: [
      {
        title: 'Zero Elevator Wait Time for Clients & Staff',
        text: 'Enable quick entry and exit for high foot-traffic businesses, logistics couriers, and daily visitors.',
      },
      {
        title: 'Street-Level Signage & Brand Exposure',
        text: 'Glass display windows and ground floor door entrance plaques provide excellent promotional visibility.',
      },
    ],
    faqs: [
      {
        q: 'Are ground floor office spaces suitable for showrooms and retail operations?',
        a: 'Yes! Many ground floor offices allow dual corporate office and customer showroom/retail operations.',
      },
    ],
    properties: [
      {
        id: '1082505891',
        listingCode: 'OFF-1082505891',
        buildingName: 'Tsukamoto Stationfront Ground Floor Office & Showroom 1F',
        rentYen: 969200,
        rentDisplay: '969,200 yen / month',
        commonFeeDisplay: '50,000 yen / month',
        depositDisplay: '5 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '199.96 m²',
        tsuboArea: '60.48 tsubo',
        location: 'Yodogawa-ku, Osaka City',
        stationAccess: '2-min walk from Tsukamoto Station',
        walkMinutes: 2,
        floor: '1st Ground Floor Roadside',
        structure: 'SRC Fire-Resistant',
        yearBuilt: 'Built in 2022',
        badge: 'Ground Floor Roadside',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        features: ['Ground Floor Direct Entrance', 'Wide Glass Frontage', 'Heavy Loading Bay', '24h Access'],
        agencyPhone: '06-6302-7710',
      },
    ],
  },
};

export function getOfficeThemeDetail(id: string): OfficeThemeMeta {
  const norm = (id || 'cost-1').toLowerCase().trim();
  if (THEME_DATABASE[norm]) {
    return THEME_DATABASE[norm];
  }

  // Fallback dynamic generator for any theme ID
  const readableTitle = norm
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    id: norm,
    title: `Special Feature: ${readableTitle} Office Space for Rent`,
    subTitle: 'Curated Commercial Building Offices in Japan',
    totalListings: 2450,
    description: `Discover verified office properties matching ${readableTitle}. Enjoy high-efficiency workplace layouts, modern building infrastructure, and prime transit access.`,
    icon: Sparkles,
    benefits: [
      {
        title: 'Optimized Corporate Efficiency',
        text: 'Selected properties offer modern climate control, OA raised flooring, and high-speed fiber internet.',
      },
      {
        title: 'Prime Transit & Urban Access',
        text: 'Located near major subway and train lines across Tokyo, Osaka, Nagoya, and major metropolitan hubs.',
      },
    ],
    faqs: [
      {
        q: 'How do I arrange a property viewing?',
        a: 'Click "View Details" or "Inquire Now" to contact the listing agency directly.',
      },
    ],
    properties: [
      {
        id: '1082505888',
        listingCode: 'OFF-1082505888',
        buildingName: `Shinjuku Central Executive Office (${readableTitle})`,
        rentYen: 165000,
        rentDisplay: '165,000 yen / month',
        commonFeeDisplay: '15,000 yen / month',
        depositDisplay: '3 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '20.00 m²',
        tsuboArea: '6.05 tsubo',
        location: 'Shinjuku-ku, Tokyo',
        stationAccess: '3-min walk from Shimo-Ochiai Station',
        walkMinutes: 3,
        floor: '3rd Floor',
        structure: 'Steel Reinforced Concrete',
        yearBuilt: 'Built in 2020',
        badge: readableTitle,
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        features: ['OA Raised Floor', '24/7 Access', 'Individual Aircon', 'Fiber Optic'],
        agencyPhone: '03-5290-8800',
      },
      {
        id: '1082505889',
        listingCode: 'OFF-1082505889',
        buildingName: `Kamikitadai Commercial Headquarters Floor`,
        rentYen: 924000,
        rentDisplay: '924,000 yen / month',
        commonFeeDisplay: '60,000 yen / month',
        depositDisplay: '6 months rent',
        keyMoneyDisplay: '1 month rent',
        areaM2: '502.64 m²',
        tsuboArea: '152.05 tsubo',
        location: 'Higashiyamato City, Tokyo',
        stationAccess: '8-min walk from Kamikitadai Station',
        walkMinutes: 8,
        floor: '2nd Floor',
        structure: 'Steel Frame',
        yearBuilt: 'Built in 2018',
        badge: 'Large Floorplate',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        features: ['Large Open Floor', 'Dual Elevators', 'Parking Space', '24h Security'],
        agencyPhone: '042-563-1120',
      },
    ],
  };
}

export const SeahomeRentalOfficeThemePage: React.FC = () => {
  const { themeId = 'cost-1' } = useParams<{ themeId: string }>();

  const [isPrefectureModalOpen, setIsPrefectureModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('All Japan');
  const [maxRentFilter, setMaxRentFilter] = useState<number>(0);
  const [maxWalkFilter, setMaxWalkFilter] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'recommended' | 'rent-asc' | 'rent-desc' | 'area-desc'>('recommended');

  const theme = useMemo(() => getOfficeThemeDetail(themeId), [themeId]);
  const ThemeIcon = theme.icon || Sparkles;

  // Filter properties
  const filteredProperties = useMemo(() => {
    let result = [...theme.properties];

    if (selectedRegion !== 'All Japan') {
      result = result.filter((p) => p.location.toLowerCase().includes(selectedRegion.toLowerCase()));
    }
    if (maxRentFilter > 0) {
      result = result.filter((p) => p.rentYen <= maxRentFilter);
    }
    if (maxWalkFilter > 0) {
      result = result.filter((p) => p.walkMinutes <= maxWalkFilter);
    }

    if (sortBy === 'rent-asc') {
      result.sort((a, b) => a.rentYen - b.rentYen);
    } else if (sortBy === 'rent-desc') {
      result.sort((a, b) => b.rentYen - a.rentYen);
    }

    return result;
  }, [theme.properties, selectedRegion, maxRentFilter, maxWalkFilter, sortBy]);

  const handleOpenDetail = (officeId: string) => {
    window.open(`/seahome-real-estates/rental-office/detail/${officeId}`, '_blank', 'noopener,noreferrer');
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
            <Link to="/seahome-real-estates/rental-office" className="text-sky-600 hover:underline">
              Rental Office Search
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-bold text-slate-800 line-clamp-1">{theme.title}</span>
          </div>
        </div>
      </div>

      <main className={`${HUB_CONTAINER} mt-6 space-y-6`}>
        {/* 2. HERO THEME HEADER BANNER */}
        <div className="overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 p-6 sm:p-8 text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-bold text-sky-200 border border-sky-400/30 backdrop-blur-xs">
                <ThemeIcon className="h-4 w-4 text-sky-400" />
                <span>Commercial Real Estate Special Feature</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug">
                {theme.title}
              </h1>
              <p className="text-xs sm:text-sm text-sky-100/90 font-medium max-w-3xl leading-relaxed">
                {theme.description}
              </p>
            </div>

            {/* Property Counter Box */}
            <div className="shrink-0 rounded-2xl border border-sky-400/30 bg-white/10 p-4 backdrop-blur-md text-center self-start md:self-center">
              <span className="text-xs font-semibold text-sky-200 block">Matching Offices</span>
              <span className="text-3xl font-black text-white">{theme.totalListings.toLocaleString()}</span>
              <span className="text-xs text-sky-200 block">units available</span>
            </div>
          </div>
        </div>

        {/* 3. REGION & SEARCH FILTER BAR */}
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-xs space-y-3 sm:p-5">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-sky-600" />
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900">
                Refine Office Search Criteria
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsPrefectureModalOpen(true)}
              className="flex items-center gap-1 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200 transition"
            >
              <MapPin className="h-3.5 w-3.5 text-sky-600" />
              <span>Full Japan Region Selector</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
            {/* Region Filter */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Region / City</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full rounded-lg border border-slate-300 p-2 font-semibold text-slate-800 outline-none focus:border-sky-500 bg-white"
              >
                <option>All Japan</option>
                <option>Tokyo</option>
                <option>Osaka</option>
                <option>Aichi</option>
                <option>Kanagawa</option>
                <option>Saitama</option>
                <option>Fukuoka</option>
              </select>
            </div>

            {/* Max Rent Filter */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">Maximum Monthly Rent</label>
              <select
                value={maxRentFilter}
                onChange={(e) => setMaxRentFilter(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 p-2 font-semibold text-slate-800 outline-none focus:border-sky-500 bg-white"
              >
                <option value={0}>Any Monthly Rent</option>
                <option value={200000}>Under 200,000 Yen</option>
                <option value={400000}>Under 400,000 Yen</option>
                <option value={1000000}>Under 1,000,000 Yen</option>
              </select>
            </div>

            {/* Station Walk Filter */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">Station Walk Distance</label>
              <select
                value={maxWalkFilter}
                onChange={(e) => setMaxWalkFilter(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 p-2 font-semibold text-slate-800 outline-none focus:border-sky-500 bg-white"
              >
                <option value={0}>Any Walk Distance</option>
                <option value={3}>Within 3 Minutes</option>
                <option value={5}>Within 5 Minutes</option>
                <option value={10}>Within 10 Minutes</option>
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

        {/* 4. OFFICE PROPERTY LISTINGS SECTION */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-5 w-1.5 rounded-full bg-sky-600 inline-block" />
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Featured Properties for {theme.title}
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredProperties.length} verified listings
            </span>
          </div>

          <div className="space-y-4">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* Property Image Showcase */}
                  <div className="relative md:col-span-4 h-56 md:h-full bg-slate-100 min-h-[220px]">
                    <img
                      src={prop.imageUrl}
                      alt={prop.buildingName}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-sky-600 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                      {prop.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded bg-slate-900/80 px-2 py-0.5 text-[11px] font-bold text-white">
                      {prop.floor}
                    </span>
                  </div>

                  {/* Property Specs & Information */}
                  <div className="md:col-span-8 p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition">
                          {prop.buildingName}
                        </h3>
                        <span className="text-[11px] font-bold text-slate-500 shrink-0">
                          {prop.listingCode}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-sky-600" />
                          {prop.location}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-sky-800">
                          <Train className="h-3.5 w-3.5 text-sky-600" />
                          {prop.stationAccess}
                        </span>
                      </div>
                    </div>

                    {/* Financial Summary Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-xl border border-sky-100 bg-sky-50/50 p-3 text-xs">
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Monthly Rent</span>
                        <strong className="text-sm font-black text-sky-900">{prop.rentDisplay}</strong>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Common Fee</span>
                        <strong className="text-xs font-bold text-slate-800">{prop.commonFeeDisplay}</strong>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Deposit</span>
                        <strong className="text-xs font-bold text-slate-800">{prop.depositDisplay}</strong>
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-500 uppercase">Usable Area</span>
                        <strong className="text-xs font-bold text-slate-800">{prop.areaM2} ({prop.tsuboArea})</strong>
                      </div>
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {prop.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Action Footer */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 gap-2">
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                        Broker Tel: <strong>{prop.agencyPhone}</strong>
                      </span>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => handleOpenDetail(prop.id)}
                          className="flex-1 sm:flex-initial rounded-xl border border-sky-300 bg-sky-50 px-4 py-2 text-xs font-bold text-sky-800 hover:bg-sky-100 transition"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenDetail(prop.id)}
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

        {/* 5. THEME ADVANTAGES & TIPS SECTION */}
        {theme.benefits.length > 0 && (
          <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs sm:p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
              <Sparkles className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Key Advantages of {theme.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {theme.benefits.map((benefit, idx) => (
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
        {theme.faqs.length > 0 && (
          <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs sm:p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
              <HelpCircle className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Frequently Asked Questions ({theme.title})
              </h2>
            </div>
            <div className="space-y-3">
              {theme.faqs.map((faq, idx) => (
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

        {/* 7. BACK TO RENTAL OFFICE SEARCH */}
        <div className="pt-4 text-center">
          <Link
            to="/seahome-real-estates/rental-office"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-sky-800 shadow-xs hover:bg-sky-50 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Rental Office Main Search</span>
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

export default SeahomeRentalOfficeThemePage;
