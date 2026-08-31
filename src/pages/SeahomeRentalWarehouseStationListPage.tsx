import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Warehouse,
  MapPin,
  SlidersHorizontal,
  Truck,
  ExternalLink,
  Heart,
  Filter,
  RotateCcw,
  Train,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  getWarehouseStationListData,
  type WarehouseCityListingCard,
} from '../components/seahome/WarehouseRentals/warehouseDiscoveryData';

export const SeahomeRentalWarehouseStationListPage: React.FC = () => {
  const { prefectureSlug = 'osaka', stationSlug = 'hirano-st' } = useParams<{
    prefectureSlug: string;
    stationSlug: string;
  }>();

  const stationData = useMemo(
    () => getWarehouseStationListData(stationSlug, prefectureSlug),
    [stationSlug, prefectureSlug]
  );

  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'within10m' | 'truckRamp' | 'highCeiling' | 'zeroKeyMoney'>('all');
  const [sortOrder, setSortOrder] = useState<'default' | 'rentAsc' | 'rentDesc' | 'areaDesc'>('default');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // LEFT FILTER PANEL STATES
  const [minRent, setMinRent] = useState<number>(0);
  const [maxRent, setMaxRent] = useState<number>(0);
  const [minArea, setMinArea] = useState<number>(0);
  const [maxArea, setMaxArea] = useState<number>(0);

  // Checkbox Filters
  const [zeroDeposit, setZeroDeposit] = useState<boolean>(false);
  const [zeroKeyMoney, setZeroKeyMoney] = useState<boolean>(false);
  const [ceiling6m, setCeiling6m] = useState<boolean>(false);
  const [truckRamp, setTruckRamp] = useState<boolean>(false);
  const [electricShutter, setElectricShutter] = useState<boolean>(false);
  const [threePhasePower, setThreePhasePower] = useState<boolean>(false);
  const [officeMezzanine, setOfficeMezzanine] = useState<boolean>(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleResetFilters = () => {
    setActiveFilterTab('all');
    setMinRent(0);
    setMaxRent(0);
    setMinArea(0);
    setMaxArea(0);
    setZeroDeposit(false);
    setZeroKeyMoney(false);
    setCeiling6m(false);
    setTruckRamp(false);
    setElectricShutter(false);
    setThreePhasePower(false);
    setOfficeMezzanine(false);
  };

  const filteredCards = useMemo(() => {
    let result = [...stationData.cards];

    // Quick Tabs Filter
    if (activeFilterTab === 'within10m') {
      result = result.filter((c) => {
        const match = c.accessStation.match(/(\d+)-min/);
        return match ? parseInt(match[1], 10) <= 10 : true;
      });
    } else if (activeFilterTab === 'truckRamp') {
      result = result.filter((c) => c.tags.some((t) => t.toLowerCase().includes('truck') || t.toLowerCase().includes('dock') || t.toLowerCase().includes('ramp')));
    } else if (activeFilterTab === 'highCeiling') {
      result = result.filter((c) => parseFloat(c.ceilingHeight) >= 6.0);
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
    if (zeroDeposit) {
      result = result.filter((c) => c.depositDisplay.toLowerCase().includes('zero') || c.depositDisplay.includes('0'));
    }
    if (zeroKeyMoney) {
      result = result.filter((c) => c.keyMoneyDisplay.toLowerCase().includes('zero') || c.keyMoneyDisplay.includes('0'));
    }
    if (ceiling6m) {
      result = result.filter((c) => parseFloat(c.ceilingHeight) >= 6.0);
    }
    if (truckRamp) {
      result = result.filter((c) => c.tags.some((t) => t.toLowerCase().includes('truck') || t.toLowerCase().includes('ramp') || t.toLowerCase().includes('dock')));
    }
    if (electricShutter) {
      result = result.filter((c) => c.shutterDimensions.toLowerCase().includes('shutter') || c.tags.some((t) => t.toLowerCase().includes('shutter')));
    }
    if (threePhasePower) {
      result = result.filter((c) => c.tags.some((t) => t.includes('200V') || t.includes('Power')));
    }
    if (officeMezzanine) {
      result = result.filter((c) => c.tags.some((t) => t.toLowerCase().includes('office') || t.toLowerCase().includes('mezzanine')));
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
    stationData.cards,
    activeFilterTab,
    minRent,
    maxRent,
    minArea,
    maxArea,
    zeroDeposit,
    zeroKeyMoney,
    ceiling6m,
    truckRamp,
    electricShutter,
    threePhasePower,
    officeMezzanine,
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
          <Link to="/seahome-real-estates/warehouse" className="transition hover:text-sky-600">
            Rental Warehouse
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">{stationData.prefectureName} Prefecture</span>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 font-extrabold">{stationData.stationName} Warehouses</span>
        </div>
      </nav>

      {/* 2. HERO HEADER BLOCK */}
      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        <header className="rounded-2xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
                <Train className="w-4 h-4 text-sky-600" />
                <span>Station Cargo Directory · {stationData.railwayLine}</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Rental Warehouses & Logistics Bays near{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {stationData.stationName}
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Explore commercial warehouses, freight distribution centers & high-ceiling storage bays near {stationData.stationName} in {stationData.prefectureName} Prefecture.
              </p>
            </div>

            {/* Counter Badge */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Listings Found</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{filteredCards.length}</span>
                <span className="text-xs font-bold text-slate-600">properties</span>
              </div>
            </div>
          </div>

          {/* Quick Filter Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { id: 'all', label: 'All Station Warehouses' },
              { id: 'within10m', label: 'Within 10-Min Walk' },
              { id: 'truckRamp', label: '10-Ton Truck Access' },
              { id: 'highCeiling', label: 'High Ceiling (6m+ Clearance)' },
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
            <span>{mobileFilterOpen ? 'Hide Refine Search Filters' : 'Refine Station Search Filters'}</span>
          </button>
        </div>

        {/* 3. MAIN LAYOUT (Left Filter Panel + Main Listings + Station Sidebar) */}
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
                  <h2 className="text-sm font-extrabold text-sky-950">Refine Station Search</h2>
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
                      <option value={150000}>¥150,000</option>
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
                      <option value={50}>50 m²+</option>
                      <option value={100}>100 m²+</option>
                      <option value={200}>200 m²+</option>
                      <option value={500}>500 m²+</option>
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
                      <option value={200}>200 m²</option>
                      <option value={500}>500 m²</option>
                      <option value={1000}>1,000 m²</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* FILTER GROUP 3: LEASE TERMS & DEPOSIT */}
              <div className="space-y-2 border-b border-sky-50 pb-3">
                <label className="block text-xs font-extrabold text-slate-800">Lease Terms</label>
                <div className="space-y-1.5 text-xs font-semibold text-slate-700">
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

              {/* FILTER GROUP 4: CEILING & TRUCK FACILITIES */}
              <div className="space-y-2 border-b border-sky-50 pb-3">
                <label className="block text-xs font-extrabold text-slate-800">Facility & Cargo Access</label>
                <div className="space-y-1.5 text-xs font-semibold text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={ceiling6m}
                      onChange={(e) => setCeiling6m(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Ceiling 6m+ Clearance</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={truckRamp}
                      onChange={(e) => setTruckRamp(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>10-Ton Truck Access Ramp</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={electricShutter}
                      onChange={(e) => setElectricShutter(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Electric Shutter Gate</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={threePhasePower}
                      onChange={(e) => setThreePhasePower(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>3-Phase 200V Heavy Power</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-sky-900">
                    <input
                      type="checkbox"
                      checked={officeMezzanine}
                      onChange={(e) => setOfficeMezzanine(e.target.checked)}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Office Mezzanine Space</span>
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

          {/* MAIN WAREHOUSE LISTINGS COLUMN */}
          <main className="min-w-0 space-y-4">
            {/* Filter & Sort Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sky-100 bg-white p-3.5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                <span>Showing {filteredCards.length} verified station listings</span>
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
                  <Warehouse className="w-12 h-12 text-sky-300 mx-auto" />
                  <h3 className="text-base font-extrabold text-slate-800">No Station Properties Found</h3>
                  <p className="text-xs text-slate-500">Try adjusting your rent range, floor area, or station walking distance criteria on the left.</p>
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
                filteredCards.map((card: WarehouseCityListingCard) => {
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
                })
              )}
            </div>
          </main>

          {/* RIGHT SIDEBAR: STATION TRANSIT INFO */}
          <aside className="space-y-5">
            {/* Station Details Card */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-2.5">
                <Train className="w-5 h-5 text-sky-600" />
                <h3 className="text-sm font-extrabold text-sky-950">
                  {stationData.stationName} Freight Overview
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {stationData.stationName} in {stationData.prefectureName} Prefecture offers exceptional logistics infrastructure with access to {stationData.railwayLine} and arterial highway loading ramps.
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100 text-slate-700">
                  <span className="font-semibold text-slate-500">Railway Line:</span>
                  <span className="font-bold text-sky-900 truncate max-w-[10rem]">{stationData.railwayLine}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 text-slate-700">
                  <span className="font-semibold text-slate-500">Truck Bypass:</span>
                  <span className="font-bold text-sky-900">Arterial Highway Ramp</span>
                </div>
                <div className="flex justify-between py-1 text-slate-700">
                  <span className="font-semibold text-slate-500">Logistics Hub:</span>
                  <span className="font-bold text-emerald-700">Heavy Loading Approved</span>
                </div>
              </div>
            </div>

            {/* Other Stations to Watch */}
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
                Explore Other Freight Stations
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {[
                  { label: 'Bentencho Station', slug: 'bentencho-st' },
                  { label: 'Sonoda Station', slug: 'sonoda-st' },
                  { label: 'Eganosho Station', slug: 'eganosho-st' },
                  { label: 'Shin-Nagata Station', slug: 'shin-nagata-st' },
                  { label: 'Tokuan Station', slug: 'tokuan-st' },
                  { label: 'Kashima Station', slug: 'kashima-st' },
                ].map((stn) => (
                  <Link
                    key={stn.slug}
                    to={`/seahome-real-estates/rental-warehouse/osaka/${stn.slug}/station-list`}
                    className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 transition-colors"
                  >
                    {stn.label}
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

export default SeahomeRentalWarehouseStationListPage;
