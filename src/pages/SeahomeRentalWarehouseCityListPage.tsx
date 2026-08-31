import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Warehouse,
  MapPin,
  SlidersHorizontal,
  Truck,
  Building2,
  ExternalLink,
  Heart,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  getWarehouseCityListData,
  type WarehouseCityListingCard,
} from '../components/seahome/WarehouseRentals/warehouseDiscoveryData';

export const SeahomeRentalWarehouseCityListPage: React.FC = () => {
  const { prefectureSlug = 'saitama', citySlug = 'kawaguchi-city' } = useParams<{
    prefectureSlug: string;
    citySlug: string;
  }>();

  const cityData = useMemo(
    () => getWarehouseCityListData(citySlug, prefectureSlug),
    [citySlug, prefectureSlug]
  );

  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'driveIn' | 'highCeiling' | 'heavyPower' | 'zeroKeyMoney'>('all');
  const [sortOrder, setSortOrder] = useState<'default' | 'rentAsc' | 'rentDesc' | 'areaDesc'>('default');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCards = useMemo(() => {
    let result = [...cityData.cards];

    if (activeFilterTab === 'driveIn') {
      result = result.filter((c) => c.tags.some((t) => t.toLowerCase().includes('truck') || t.toLowerCase().includes('drive') || t.toLowerCase().includes('dock')));
    } else if (activeFilterTab === 'highCeiling') {
      result = result.filter((c) => parseFloat(c.ceilingHeight) >= 6.0);
    } else if (activeFilterTab === 'heavyPower') {
      result = result.filter((c) => c.tags.some((t) => t.includes('200V') || t.includes('Power')));
    } else if (activeFilterTab === 'zeroKeyMoney') {
      result = result.filter((c) => c.keyMoneyDisplay.toLowerCase().includes('zero') || c.keyMoneyDisplay.includes('0'));
    }

    if (sortOrder === 'rentAsc') {
      result.sort((a, b) => a.rentYen - b.rentYen);
    } else if (sortOrder === 'rentDesc') {
      result.sort((a, b) => b.rentYen - a.rentYen);
    } else if (sortOrder === 'areaDesc') {
      result.sort((a, b) => parseFloat(b.usableAreaM2) - parseFloat(a.usableAreaM2));
    }

    return result;
  }, [cityData.cards, activeFilterTab, sortOrder]);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 font-sans pb-16 selection:bg-sky-500 selection:text-white">
      {/* 1. TOP BREADCRUMB TRAIL */}
      <nav className="border-b border-sky-100 bg-white/90 backdrop-blur-md py-2.5 shadow-2xs">
        <div className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold text-sky-900 ${HUB_CONTAINER}`}>
          <Link to="/seahome-real-estates" className="transition hover:text-sky-600">
            Real Estate Top
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/seahome-real-estates/warehouse" className="transition hover:text-sky-600">
            Rental Warehouse (賃貸倉庫)
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">{cityData.prefectureName} Prefecture</span>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 font-extrabold">{cityData.cityName} Rental Warehouses</span>
        </div>
      </nav>

      {/* 2. HERO HEADER BLOCK (athome.co.jp/rent_souko/saitama/kawaguchi-city/list/ layout) */}
      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        <header className="rounded-2xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
                <Warehouse className="w-4 h-4 text-sky-600" />
                <span>{cityData.cityName} Logistics & Commercial Warehouse Directory</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Rental Warehouses & Storage Facilities in{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {cityData.cityName}, {cityData.prefectureName} Prefecture
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Explore commercial warehouses, logistics depots, high-ceiling storage bays & ground-floor drive-in properties.
              </p>
            </div>

            {/* Counter Badge */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Available Listings</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{filteredCards.length}</span>
                <span className="text-xs font-bold text-slate-600">properties</span>
              </div>
            </div>
          </div>

          {/* Quick Filter Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { id: 'all', label: 'All Warehouses' },
              { id: 'driveIn', label: '10-Ton Truck & Container Access' },
              { id: 'highCeiling', label: 'High Ceiling (6m+ Clearance)' },
              { id: 'heavyPower', label: '3-Phase 200V High Voltage' },
              { id: 'zeroKeyMoney', label: 'Zero Key Money (礼金0)' },
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

        {/* 3. MAIN TWO-COLUMN LAYOUT */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem]">
          {/* Main Listings Column */}
          <main className="min-w-0 space-y-4">
            {/* Filter & Sort Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sky-100 bg-white p-3.5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                <span>Showing {filteredCards.length} verified warehouse properties</span>
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
              {filteredCards.map((card: WarehouseCityListingCard) => {
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
                              <span className="block text-[10px] font-bold text-slate-500 uppercase">Ceiling Clearance</span>
                              <span className="font-extrabold text-slate-900">{card.ceilingHeight}</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                              <span className="block text-[10px] font-bold text-slate-500 uppercase">Floor Load</span>
                              <span className="font-extrabold text-slate-900">{card.floorLoadCapacity}</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                              <span className="block text-[10px] font-bold text-slate-500 uppercase">Shutter Gate</span>
                              <span className="font-extrabold text-slate-900">{card.shutterDimensions}</span>
                            </div>
                          </div>

                          {/* Location & Transit */}
                          <div className="mt-3 space-y-1 text-xs text-slate-600 font-medium">
                            <p className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                              <span>{card.address}</span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <Truck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
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
                              const url = `/seahome-real-estates/rental-warehouse/detail/${card.id}`;
                              window.open(url, '_blank', 'noopener,noreferrer');
                            }}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-sky-600/20 transition-all hover:from-sky-700 hover:to-blue-800 cursor-pointer"
                          >
                            <span>View Warehouse Details</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </main>

          {/* Sidebar Area */}
          <aside className="space-y-5">
            {/* City Overview Card */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-2.5">
                <Building2 className="w-5 h-5 text-sky-600" />
                <h3 className="text-sm font-extrabold text-sky-950">
                  {cityData.cityName} Freight & Logistics
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {cityData.cityName} in {cityData.prefectureName} Prefecture is a premier logistics hub with direct arterial connections to major expressway interchanges, heavy truck bypass routes, and rail freight terminals.
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100 text-slate-700">
                  <span className="font-semibold text-slate-500">Logistics Zone:</span>
                  <span className="font-bold text-sky-900">Industrial & Commercial</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 text-slate-700">
                  <span className="font-semibold text-slate-500">Expressway Access:</span>
                  <span className="font-bold text-sky-900">Direct Ramp</span>
                </div>
                <div className="flex justify-between py-1 text-slate-700">
                  <span className="font-semibold text-slate-500">Container Access:</span>
                  <span className="font-bold text-emerald-700">10-Ton Approved</span>
                </div>
              </div>
            </div>

            {/* Neighboring Logistics Cities */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
                Explore Neighboring Warehouse Hubs
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {[
                  'Ota Ward',
                  'Adachi Ward',
                  'Edogawa Ward',
                  'Amagasaki City',
                  'Yao City',
                  'Settsu City',
                  'Gifu City',
                ].map((neighbor) => (
                  <Link
                    key={neighbor}
                    to="/seahome-real-estates/warehouse"
                    className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 transition-colors"
                  >
                    {neighbor}
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

export default SeahomeRentalWarehouseCityListPage;
