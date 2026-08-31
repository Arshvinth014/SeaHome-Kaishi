import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Store,
  MapPin,
  SlidersHorizontal,
  ExternalLink,
  Heart,
  Filter,
  RotateCcw,
  Utensils,
  ShoppingBag,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';

export interface DistrictStoreListingCard {
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
  floorLevel: string;
  previousTenant: string;
  handoverCondition: string;
  address: string;
  accessStation: string;
  imageUrl: string;
  tags: string[];
  isNewListing?: boolean;
}

export function getDistrictStoreListData(districtSlug: string) {
  let districtName = 'Susukino';
  let regionName = 'Sapporo, Hokkaido';
  let footTraffic = 'Ultra-High Density (Commercial Nightlife & Dining Corridor)';

  if (districtSlug.includes('ameya')) {
    districtName = 'Ameya Yokocho';
    regionName = 'Ueno, Tokyo';
    footTraffic = 'Extremely High (Daily Tourist & Retail Market Street)';
  } else if (districtSlug.includes('takeshita')) {
    districtName = 'Takeshita Street';
    regionName = 'Harajuku, Tokyo';
    footTraffic = 'High Youth & International Tourist Fashion District';
  } else if (districtSlug.includes('kita')) {
    districtName = 'Umeda Kita District';
    regionName = 'Osaka City, Osaka';
    footTraffic = 'High Corporate & Premium Retail Station Hub';
  } else if (districtSlug.includes('minami') || districtSlug.includes('dotombori')) {
    districtName = 'Minami / Dotombori';
    regionName = 'Osaka City, Osaka';
    footTraffic = 'Ultra-High Entertainment & Culinary Corridor';
  } else if (districtSlug.includes('tenjin')) {
    districtName = 'Tenjin Commercial District';
    regionName = 'Fukuoka City, Fukuoka';
    footTraffic = 'Major Kyushu Retail & Dining Hub';
  } else if (districtSlug.includes('naka') || districtSlug.includes('sakae')) {
    districtName = 'Sakae Naka District';
    regionName = 'Nagoya City, Aichi';
    footTraffic = 'Central Chubu Commercial & Department Store Zone';
  }

  const cards: DistrictStoreListingCard[] = [
    {
      id: 'st-1',
      listingCode: 'ST-SUS-6987410293',
      title: `${districtName} Main Avenue Ground-Floor Restaurant & Izakaya Space`,
      propertyName: `${districtName} Central Commercial Plaza Bay A`,
      rentYen: 380000,
      rentDisplay: '380,000 yen',
      commonFeeDisplay: '25,000 yen / mo',
      depositDisplay: '3 months',
      keyMoneyDisplay: '1 month',
      usableAreaM2: '65.50 m²',
      usableAreaTsubo: '19.81 tsubo',
      floorLevel: '1st Ground Floor Storefront',
      previousTenant: 'Japanese Dining & Izakaya',
      handoverCondition: 'Existing Kitchen Fixtures Included (Turnkey)',
      address: `Main Street, ${districtName}, ${regionName}`,
      accessStation: `2-min walk from ${districtName} Station`,
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      tags: ['Ground Floor Storefront', 'Existing Kitchen Equipment', 'Late Night Operating Approved', 'Heavy Foot Traffic'],
      isNewListing: true,
    },
    {
      id: 'st-2',
      listingCode: 'ST-SUS-7481029384',
      title: `Prime Corner Retail Storefront in High Foot-Traffic Location near ${districtName}`,
      propertyName: `${districtName} Fashion & Boutique Tower`,
      rentYen: 550000,
      rentDisplay: '550,000 yen',
      commonFeeDisplay: '30,000 yen / mo',
      depositDisplay: '4 months',
      keyMoneyDisplay: '1 month',
      usableAreaM2: '110.20 m²',
      usableAreaTsubo: '33.33 tsubo',
      floorLevel: '1st Floor & Mezzanine Showcase',
      previousTenant: 'Apparel Boutique & Accessories',
      handoverCondition: 'Clean Skeleton Lease (High Ceiling)',
      address: `Corner Avenue, ${districtName}, ${regionName}`,
      accessStation: `1-min walk from ${districtName} Transit Terminal`,
      imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      tags: ['Corner Glass Frontage', 'High Ceiling 3.8m', 'Skeleton Handover', 'Prime Brand Exposure'],
      isNewListing: true,
    },
    {
      id: 'st-3',
      listingCode: 'ST-SUS-8192039485',
      title: `Cozy Cafe & Bakery Storefront Space in ${districtName}`,
      propertyName: `${districtName} Promenade Shops Unit B`,
      rentYen: 220000,
      rentDisplay: '220,000 yen',
      commonFeeDisplay: '15,000 yen / mo',
      depositDisplay: '2 months',
      keyMoneyDisplay: 'Zero Key Money',
      usableAreaM2: '48.80 m²',
      usableAreaTsubo: '14.76 tsubo',
      floorLevel: '1st Ground Floor Roadside',
      previousTenant: 'Specialty Espresso Cafe',
      handoverCondition: 'Counter & Coffee Fixtures Handover',
      address: `Promenade Walkway, ${districtName}, ${regionName}`,
      accessStation: `4-min walk from ${districtName} Station`,
      imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      tags: ['Zero Key Money', 'Terrace Seating Approved', 'Grease Trap Installed', 'High Repeat Footfall'],
    },
    {
      id: 'st-4',
      listingCode: 'ST-SUS-9028192049',
      title: `Subterranean Dining Bar & Club Lounge Space in ${districtName}`,
      propertyName: `${districtName} Nightlife Plaza B1F`,
      rentYen: 420000,
      rentDisplay: '420,000 yen',
      commonFeeDisplay: '22,000 yen / mo',
      depositDisplay: '3 months',
      keyMoneyDisplay: '1 month',
      usableAreaM2: '135.00 m²',
      usableAreaTsubo: '40.83 tsubo',
      floorLevel: 'Basement 1st Floor (B1F Direct Stairs)',
      previousTenant: 'Cocktail Bar & Live Lounge',
      handoverCondition: 'Soundproofed & Fully Equipped Bar Counter',
      address: `Entertainment Hub, ${districtName}, ${regionName}`,
      accessStation: `3-min walk from ${districtName} Subway Exit`,
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
      tags: ['Soundproof Insulation', 'Existing Bar Fixtures', '24-Hour License', 'Exhaust Ventilation'],
    },
  ];

  return {
    districtSlug,
    districtName,
    regionName,
    footTraffic,
    totalCount: cards.length,
    cards,
  };
}

export const SeahomeRentalShopDistrictListPage: React.FC = () => {
  const { districtSlug = 'susukino' } = useParams<{ districtSlug: string }>();

  const districtData = useMemo(
    () => getDistrictStoreListData(districtSlug),
    [districtSlug]
  );

  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'groundFloor' | 'restaurant' | 'fixtures' | 'zeroKeyMoney'>('all');
  const [sortOrder, setSortOrder] = useState<'default' | 'rentAsc' | 'rentDesc' | 'areaDesc'>('default');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // LEFT FILTER PANEL STATES
  const [minRent, setMinRent] = useState<number>(0);
  const [maxRent, setMaxRent] = useState<number>(0);
  const [minArea, setMinArea] = useState<number>(0);
  const [maxArea, setMaxArea] = useState<number>(0);

  // Checkbox Filters
  const [groundFloorOnly, setGroundFloorOnly] = useState<boolean>(false);
  const [zeroDeposit, setZeroDeposit] = useState<boolean>(false);
  const [zeroKeyMoney, setZeroKeyMoney] = useState<boolean>(false);
  const [existingFixtures, setExistingFixtures] = useState<boolean>(false);
  const [lateNightOperating, setLateNightOperating] = useState<boolean>(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleResetFilters = () => {
    setActiveFilterTab('all');
    setMinRent(0);
    setMaxRent(0);
    setMinArea(0);
    setMaxArea(0);
    setGroundFloorOnly(false);
    setZeroDeposit(false);
    setZeroKeyMoney(false);
    setExistingFixtures(false);
    setLateNightOperating(false);
  };

  const filteredCards = useMemo(() => {
    let result = [...districtData.cards];

    // Quick Tabs Filter
    if (activeFilterTab === 'groundFloor') {
      result = result.filter((c) => c.floorLevel.toLowerCase().includes('1st') || c.floorLevel.toLowerCase().includes('ground'));
    } else if (activeFilterTab === 'restaurant') {
      result = result.filter((c) => c.tags.some((t) => t.toLowerCase().includes('kitchen') || t.toLowerCase().includes('dining')));
    } else if (activeFilterTab === 'fixtures') {
      result = result.filter((c) => c.handoverCondition.toLowerCase().includes('fixtures') || c.handoverCondition.toLowerCase().includes('turnkey'));
    } else if (activeFilterTab === 'zeroKeyMoney') {
      result = result.filter((c) => c.keyMoneyDisplay.toLowerCase().includes('zero') || c.keyMoneyDisplay.includes('0'));
    }

    // Left Panel Rent Filters
    if (minRent > 0) {
      result = result.filter((c) => c.rentYen >= minRent);
    }
    if (maxRent > 0) {
      result = result.filter((c) => c.rentYen <= maxRent);
    }

    // Left Panel Area Filters
    if (minArea > 0) {
      result = result.filter((c) => parseFloat(c.usableAreaM2) >= minArea);
    }
    if (maxArea > 0) {
      result = result.filter((c) => parseFloat(c.usableAreaM2) <= maxArea);
    }

    // Checkboxes
    if (groundFloorOnly) {
      result = result.filter((c) => c.floorLevel.toLowerCase().includes('1st') || c.floorLevel.toLowerCase().includes('ground'));
    }
    if (zeroDeposit) {
      result = result.filter((c) => c.depositDisplay.toLowerCase().includes('zero') || c.depositDisplay.includes('0'));
    }
    if (zeroKeyMoney) {
      result = result.filter((c) => c.keyMoneyDisplay.toLowerCase().includes('zero') || c.keyMoneyDisplay.includes('0'));
    }
    if (existingFixtures) {
      result = result.filter((c) => c.handoverCondition.toLowerCase().includes('fixtures') || c.handoverCondition.toLowerCase().includes('turnkey'));
    }
    if (lateNightOperating) {
      result = result.filter((c) => c.tags.some((t) => t.toLowerCase().includes('night') || t.toLowerCase().includes('24-hour')));
    }

    // Sorting
    if (sortOrder === 'rentAsc') {
      result.sort((a, b) => a.rentYen - b.rentYen);
    } else if (sortOrder === 'rentDesc') {
      result.sort((a, b) => b.rentYen - a.rentYen);
    } else if (sortOrder === 'areaDesc') {
      result.sort((a, b) => parseFloat(b.usableAreaM2) - parseFloat(a.usableAreaM2));
    }

    return result;
  }, [
    districtData.cards,
    activeFilterTab,
    minRent,
    maxRent,
    minArea,
    maxArea,
    groundFloorOnly,
    zeroDeposit,
    zeroKeyMoney,
    existingFixtures,
    lateNightOperating,
    sortOrder,
  ]);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 font-sans pb-16 selection:bg-sky-500 selection:text-white">
      {/* 1. TOP BREADCRUMB TRAIL */}
      <nav className="border-b border-sky-100 bg-white/90 backdrop-blur-md py-2.5 shadow-2xs">
        <div className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold text-sky-900 ${HUB_CONTAINER}`}>
          <Link to="/seahome-real-estates" className="transition hover:text-sky-600">
            Real Estate Top
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/seahome-real-estates/rental-shop" className="transition hover:text-sky-600">
            Store for Rent (店舗賃貸)
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">Popular Shopping Districts</span>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 font-extrabold">{districtData.districtName} Store Listings</span>
        </div>
      </nav>

      {/* 2. HERO HEADER BLOCK */}
      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        <header className="rounded-2xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
                <Store className="w-4 h-4 text-sky-600" />
                <span>Commercial Entertainment & Retail District · {districtData.regionName}</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Rental Store Properties & Retail Spaces in{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {districtData.districtName} Shopping District
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Explore prime ground-floor retail shopfronts, food & beverage spaces, Izakaya & bar leases, and turnkey commercial units in {districtData.districtName}.
              </p>
            </div>

            {/* Counter Badge */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Available Stores</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{filteredCards.length}</span>
                <span className="text-xs font-bold text-slate-600">properties</span>
              </div>
            </div>
          </div>

          {/* Quick Filter Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { id: 'all', label: 'All Shopfronts' },
              { id: 'groundFloor', label: 'Ground Floor Storefront (1F)' },
              { id: 'restaurant', label: 'Restaurant / F&B Ready' },
              { id: 'fixtures', label: 'Turnkey Fixtures Included' },
              { id: 'zeroKeyMoney', label: 'Zero Key Money' },
            ].map((tab) => {
              const isActive = activeFilterTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilterTab(tab.id as typeof activeFilterTab)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all duration-200 cursor-pointer ${isActive
                    ? 'border-sky-500 bg-sky-600 text-white shadow-md shadow-sky-600/20'
                    : 'border-sky-100 bg-slate-50/80 text-slate-700 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </header>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFilterOpen((v) => !v)}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-xs font-extrabold text-white shadow-md cursor-pointer"
          >
            <Filter className="w-4 h-4" />
            <span>{mobileFilterOpen ? 'Hide Refine Search Filters' : 'Refine District Search Filters'}</span>
          </button>
        </div>

        {/* 3. MAIN LAYOUT (Left Filter Panel + Main Listings + District Sidebar) */}
        <div className="grid gap-6 lg:grid-cols-[17.5rem_minmax(0,1fr)_18rem]">
          {/* LEFT REFINE SEARCH FILTER PANEL */}
          <aside
            className={`space-y-4 shrink-0 ${mobileFilterOpen ? 'block' : 'hidden lg:block'
              }`}
          >
            <div className="sticky top-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-sky-600" />
                  <h2 className="text-sm font-extrabold text-sky-950">Refine District Search</h2>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 hover:text-sky-900 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* FILTER GROUP 1: MONTHLY RENT */}
              <div className="space-y-2 border-b border-sky-50 pb-3">
                <label className="block text-xs font-extrabold text-slate-800">Monthly Rent</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-500 mb-1">Min Rent</span>
                    <select
                      value={minRent}
                      onChange={(e) => setMinRent(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 focus:border-sky-500 focus:outline-none shadow-2xs"
                    >
                      <option value={0}>No Min</option>
                      <option value={200000}>¥200,000</option>
                      <option value={300000}>¥300,000</option>
                      <option value={500000}>¥500,000</option>
                    </select>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-500 mb-1">Max Rent</span>
                    <select
                      value={maxRent}
                      onChange={(e) => setMaxRent(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 focus:border-sky-500 focus:outline-none shadow-2xs"
                    >
                      <option value={0}>No Max</option>
                      <option value={300000}>¥300,000</option>
                      <option value={500000}>¥500,000</option>
                      <option value={1000000}>¥1,000,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* FILTER GROUP 2: USABLE FLOOR AREA */}
              <div className="space-y-2 border-b border-sky-50 pb-3">
                <label className="block text-xs font-extrabold text-slate-800">Usable Floor Area</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-500 mb-1">Min Area (m²)</span>
                    <select
                      value={minArea}
                      onChange={(e) => setMinArea(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 focus:border-sky-500 focus:outline-none shadow-2xs"
                    >
                      <option value={0}>No Min</option>
                      <option value={30}>30 m²+</option>
                      <option value={50}>50 m²+</option>
                      <option value={100}>100 m²+</option>
                    </select>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-500 mb-1">Max Area (m²)</span>
                    <select
                      value={maxArea}
                      onChange={(e) => setMaxArea(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 focus:border-sky-500 focus:outline-none shadow-2xs"
                    >
                      <option value={0}>No Max</option>
                      <option value={50}>50 m²</option>
                      <option value={100}>100 m²</option>
                      <option value={200}>200 m²</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* FILTER GROUP 3: STORE LOCATION & FLOOR LEVEL */}
              <div className="space-y-2 border-b border-sky-50 pb-3">
                <label className="block text-xs font-extrabold text-slate-800">Store Features</label>
                <div className="space-y-1.5 text-xs font-semibold text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={groundFloorOnly}
                      onChange={(e) => setGroundFloorOnly(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Ground Floor Storefront (1F)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={existingFixtures}
                      onChange={(e) => setExistingFixtures(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Turnkey Kitchen & Fixtures Included</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={lateNightOperating}
                      onChange={(e) => setLateNightOperating(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Late Night Operating License</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={zeroDeposit}
                      onChange={(e) => setZeroDeposit(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Zero Deposit</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={zeroKeyMoney}
                      onChange={(e) => setZeroKeyMoney(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Zero Key Money</span>
                  </label>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 py-2.5 text-xs font-extrabold text-white shadow-md transition hover:from-sky-700 hover:to-blue-800 cursor-pointer"
                >
                  <span>Apply Filters ({filteredCards.length})</span>
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN STORE LISTINGS COLUMN */}
          <main className="min-w-0 space-y-4">
            {/* Filter & Sort Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sky-100 bg-white p-3.5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                <span>Showing {filteredCards.length} verified commercial store properties</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <label className="font-bold text-slate-600">Sort by:</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as typeof sortOrder)}
                  className="rounded-lg border border-sky-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-2xs"
                >
                  <option value="default">Default Recommended</option>
                  <option value="rentAsc">Rent: Low to High</option>
                  <option value="rentDesc">Rent: High to Low</option>
                  <option value="areaDesc">Usable Area: Largest First</option>
                </select>
              </div>
            </div>

            {/* Listing Cards Grid */}
            <div className="space-y-4">
              {filteredCards.length === 0 ? (
                <div className="rounded-2xl border border-sky-100 bg-white p-8 text-center space-y-3">
                  <Store className="w-12 h-12 text-sky-300 mx-auto" />
                  <h3 className="text-base font-extrabold text-slate-800">No Store Properties Found</h3>
                  <p className="text-xs text-slate-500">Try adjusting your rent range, floor level, or turnkey fixture criteria on the left.</p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-extrabold shadow-sm hover:bg-sky-700 transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              ) : (
                filteredCards.map((card: DistrictStoreListingCard) => {
                  const isFav = !!favorites[card.id];
                  return (
                    <article
                      key={card.id}
                      className="group rounded-2xl border border-sky-100 bg-white p-4 sm:p-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex flex-col md:flex-row gap-5">
                        {/* Thumbnail Image */}
                        <div className="relative w-full md:w-64 h-48 shrink-0 overflow-hidden rounded-xl border border-sky-100 bg-slate-100">
                          <img
                            src={card.imageUrl}
                            alt={card.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {card.isNewListing && (
                            <span className="absolute top-2.5 left-2.5 rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-extrabold text-white shadow-xs">
                              NEW LISTING
                            </span>
                          )}
                          <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/65 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                            {card.usableAreaM2}
                          </span>
                        </div>

                        {/* Content Info */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between space-y-3">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <span className="text-[11px] font-extrabold text-sky-700 uppercase tracking-wider">
                                  Listing Code: {card.listingCode}
                                </span>
                                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug mt-0.5">
                                  {card.title}
                                </h3>
                              </div>
                              <button
                                type="button"
                                onClick={() => toggleFavorite(card.id)}
                                className={`p-2 rounded-xl border transition-all cursor-pointer ${isFav ? 'bg-red-50 text-red-600 border-red-200' : 'bg-slate-50 text-slate-400 border-slate-200 hover:text-red-500'
                                  }`}
                              >
                                <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                              </button>
                            </div>

                            {/* Rent Badge Bar */}
                            <div className="mt-3 flex flex-wrap items-baseline gap-2 p-2.5 rounded-xl bg-sky-50/80 border border-sky-100">
                              <span className="text-xl sm:text-2xl font-black text-sky-950">
                                {card.rentDisplay}
                              </span>
                              <span className="text-xs font-semibold text-slate-600">/ month</span>
                              <span className="text-xs text-slate-500 font-medium ml-auto">
                                Common Fee: <strong className="text-slate-800">{card.commonFeeDisplay}</strong> · Deposit: <strong className="text-slate-800">{card.depositDisplay}</strong>
                              </span>
                            </div>

                            {/* Key Specs Breakdown Table */}
                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                <span className="block text-[10px] font-bold text-slate-500 uppercase">Usable Area</span>
                                <span className="font-extrabold text-slate-900">{card.usableAreaM2}</span>
                                <span className="block text-[10px] text-slate-500">({card.usableAreaTsubo})</span>
                              </div>
                              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                <span className="block text-[10px] font-bold text-slate-500 uppercase">Floor Level</span>
                                <span className="font-extrabold text-slate-900">{card.floorLevel}</span>
                              </div>
                              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                <span className="block text-[10px] font-bold text-slate-500 uppercase">Previous Tenant</span>
                                <span className="font-extrabold text-slate-900 truncate block">{card.previousTenant}</span>
                              </div>
                              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                <span className="block text-[10px] font-bold text-slate-500 uppercase">Handover</span>
                                <span className="font-extrabold text-slate-900 truncate block">{card.handoverCondition}</span>
                              </div>
                            </div>

                            {/* Location & Transit */}
                            <div className="mt-3 space-y-1 text-xs text-slate-600 font-medium">
                              <p className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                                <span>{card.address}</span>
                              </p>
                              <p className="flex items-center gap-1.5">
                                <Utensils className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                                <span>{card.accessStation}</span>
                              </p>
                            </div>

                            {/* Tag Chips */}
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {card.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-900 text-[10px] font-extrabold border border-sky-200/60"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 justify-end">
                            <button
                              type="button"
                              onClick={() => {
                                const url = `/seahome-real-estates/rental-shop/detail/${card.id}`;
                                window.open(url, '_blank', 'noopener,noreferrer');
                              }}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-sky-600/20 transition-all hover:from-sky-700 hover:to-blue-800 cursor-pointer"
                            >
                              <span>View Store Details</span>
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </main>

          {/* RIGHT SIDEBAR: SHOPPING DISTRICT COMMERCIAL PROFILE */}
          <aside className="space-y-5">
            {/* Commercial Profile Card */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-2.5">
                <ShoppingBag className="w-5 h-5 text-sky-600" />
                <h3 className="text-sm font-extrabold text-sky-950">
                  {districtData.districtName} Commercial Profile
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {districtData.districtName} in {districtData.regionName} is a top-tier retail & commercial destination with {districtData.footTraffic}.
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100 text-slate-700">
                  <span className="font-semibold text-slate-500">Commercial Zone:</span>
                  <span className="font-bold text-sky-900">Commercial & Nightlife</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 text-slate-700">
                  <span className="font-semibold text-slate-500">Foot Traffic:</span>
                  <span className="font-bold text-emerald-700">Ultra-High Footfall</span>
                </div>
                <div className="flex justify-between py-1 text-slate-700">
                  <span className="font-semibold text-slate-500">Operating Hours:</span>
                  <span className="font-bold text-sky-900">Daytime & Late Night</span>
                </div>
              </div>
            </div>

            {/* Other Popular Shopping Districts */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
                Explore Other Shopping Districts
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {[
                  { label: 'Susukino', slug: 'susukino' },
                  { label: 'Ameya Yokocho', slug: 'ameya-yokocho' },
                  { label: 'Takeshita Street', slug: 'takeshita-street' },
                  { label: 'Kita Umeda', slug: 'kita' },
                  { label: 'Minami Dotombori', slug: 'minami' },
                  { label: 'Tenjin Fukuoka', slug: 'tenjin' },
                  { label: 'Sakae Nagoya', slug: 'naka' },
                ].map((dist) => (
                  <Link
                    key={dist.slug}
                    to={`/seahome-real-estates/rental-shop/shopping-district/${dist.slug}/list`}
                    className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 transition-colors"
                  >
                    {dist.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalShopDistrictListPage;
