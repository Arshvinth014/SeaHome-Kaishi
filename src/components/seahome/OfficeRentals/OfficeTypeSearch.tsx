import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Network, Map, SlidersHorizontal, ArrowRight, LayoutGrid, Users, CheckCircle2, ShieldCheck } from 'lucide-react';

interface OfficeTypeSearchProps {
  onOpenPrefectureModal?: () => void;
}

type SearchTab = 'size' | 'area' | 'station' | 'map' | 'condition';

export const officeSizeCategories = [
  {
    id: 'under_10',
    tsubo: 'Under 10 Tsubo',
    areaM2: 'Up to 33 m²',
    capacity: '1 - 5 People (SOHO / Startup)',
    count: 14200,
    desc: 'Compact office spaces ideal for small teams, freelancing studios, and branch offices.',
  },
  {
    id: '10_30',
    tsubo: '10 - 30 Tsubo',
    areaM2: '33 - 100 m²',
    capacity: '5 - 15 People (Growing Business)',
    count: 22800,
    desc: 'Standard mid-sized office layouts suitable for tech startups and professional agencies.',
  },
  {
    id: '30_50',
    tsubo: '30 - 50 Tsubo',
    areaM2: '100 - 165 m²',
    capacity: '15 - 30 People (Medium Enterprise)',
    count: 15400,
    desc: 'Spacious office floors equipped with conference rooms and executive offices.',
  },
  {
    id: '50_100',
    tsubo: '50 - 100 Tsubo',
    areaM2: '165 - 330 m²',
    capacity: '30 - 60 People (Corporate Headquarters)',
    count: 9800,
    desc: 'High-grade commercial building space with receptionist area and high security.',
  },
  {
    id: 'over_100',
    tsubo: 'Over 100 Tsubo',
    areaM2: '330 m²+',
    capacity: '60+ People (Large Corporate / Flagship)',
    count: 5200,
    desc: 'Prime landmark office towers with full-floor occupancy and VIP amenities.',
  },
];

export const officeCriteriaGroups = [
  {
    id: 'location',
    title: 'Location & Access',
    items: ['Near Station (Within 3 min)', 'Station Front Building', 'Direct Subway Access', 'Corner Lot / Roadside'],
  },
  {
    id: 'facilities',
    title: 'Building Facilities & Specifications',
    items: ['OA Floor (Underfloor Wiring)', 'Individual Air Conditioning', '24-Hour Security & Access', 'Elevator (2+ Units)'],
  },
  {
    id: 'contract',
    title: 'Interior & Contract Terms',
    items: ['Turnkey / Furnished Office', 'No Key Money Required', 'Immediate Move-in Allowed', 'Parking Space Included'],
  },
];

export const OfficeTypeSearch: React.FC<OfficeTypeSearchProps> = ({ onOpenPrefectureModal }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<SearchTab>('size');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});

  const handleToggle = (key: string) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleStationSearchClick = () => {
    navigate('/seahome-real-estates/rental/search-by-line-station/niigata');
  };

  const handleMapSearchClick = () => {
    navigate('/seahome-real-estates/rental/search-by-map');
  };

  const handleSizeClick = (sizeId: string) => {
    navigate(`/seahome-real-estates/rental-office/size/${sizeId}`);
  };

  return (
    <div className="w-full bg-white border border-sky-200/80 rounded-2xl shadow-md shadow-sky-900/5 mb-8 overflow-hidden relative">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-4 sm:p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-white/20 text-white rounded-xl backdrop-blur-md border border-white/20 shadow-sm">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-extrabold tracking-tight">Rental Office Search</h2>
              <span className="px-2 py-0.5 text-xs font-black bg-amber-400 text-slate-900 rounded uppercase tracking-wider shadow-xs">
                SeaHome Net
              </span>
            </div>
            <p className="text-xs sm:text-sm text-sky-100 mt-0.5 font-medium">
              Search for commercial offices, vacant spaces, and office buildings across Japan.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2 text-xs font-bold text-white bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
          <span>Official Office Property Portal</span>
        </div>
      </div>

      {/* 2. ATHOME ALIGNED 5 SEARCH NAVIGATION TABS */}
      <div className="border-b border-sky-100 bg-sky-50/60 p-2 sm:p-3">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {[
            { id: 'size', label: 'By Floor Area', sub: 'By Area & Tsubo', icon: LayoutGrid },
            { id: 'area', label: 'By Area / City', sub: 'By Region / City', icon: MapPin },
            { id: 'station', label: 'By Line / Station', sub: 'By Railway Line', icon: Network },
            { id: 'map', label: 'By Map Search', sub: 'By Map Search', icon: Map },
            { id: 'condition', label: 'By Special Criteria', sub: 'By Facilities & Terms', icon: SlidersHorizontal },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id as SearchTab);
                  if (tab.id === 'area') {
                    onOpenPrefectureModal?.();
                  } else if (tab.id === 'station') {
                    handleStationSearchClick();
                  } else if (tab.id === 'map') {
                    handleMapSearchClick();
                  }
                }}
                className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${isActive
                  ? 'border-sky-500 bg-white text-sky-900 shadow-md shadow-sky-900/10 font-bold ring-2 ring-sky-500/20'
                  : 'border-sky-100 bg-white/70 text-slate-700 hover:border-sky-300 hover:bg-white hover:text-sky-900'
                  }`}
              >
                <div className="flex items-center gap-1.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-600' : 'text-sky-500'}`} />
                  <span className="text-xs sm:text-sm font-extrabold leading-tight">{tab.label}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium mt-0.5">{tab.sub}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Sub-section Indicator Bar */}
      <div className="px-5 py-3.5 bg-sky-50/40 border-b border-sky-100 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-1.5 h-5 bg-sky-600 rounded-full"></div>
          <h3 className="text-sm sm:text-base font-extrabold text-sky-950">
            {activeTab === 'size' && 'Search rental office space by floor area & employee capacity'}
            {activeTab === 'area' && 'Select a prefecture or city to search rental offices'}
            {activeTab === 'station' && 'Search offices near railway lines & stations'}
            {activeTab === 'map' && 'Search rental offices using interactive map'}
            {activeTab === 'condition' && 'Filter offices by facilities & contract conditions'}
          </h3>
        </div>

        <button
          type="button"
          onClick={onOpenPrefectureModal}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-white border border-sky-200 px-3 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5 text-sky-600" />
          <span>Change Region</span>
        </button>
      </div>

      {/* 4. Tab Content Panels */}
      <div className="p-4 sm:p-6 space-y-5 bg-slate-50/30">
        {/* Quick Action Navigation Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 rounded-xl border border-sky-100 mb-2">
          <button
            type="button"
            onClick={onOpenPrefectureModal}
            className="flex items-center justify-between p-3 bg-white rounded-xl border border-sky-200 text-left hover:border-sky-400 hover:shadow-sm transition-all group cursor-pointer"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <span className="block text-xs font-bold text-sky-950">Search by Region</span>
                <span className="block text-[10px] text-slate-500">Pick prefecture & city</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleStationSearchClick}
            className="flex items-center justify-between p-3 bg-white rounded-xl border border-sky-200 text-left hover:border-sky-400 hover:shadow-sm transition-all group cursor-pointer"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Network className="w-4 h-4" />
              </span>
              <div>
                <span className="block text-xs font-bold text-sky-950">Search by Station</span>
                <span className="block text-[10px] text-slate-500">JR & private subway lines</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleMapSearchClick}
            className="flex items-center justify-between p-3 bg-white rounded-xl border border-sky-200 text-left hover:border-sky-400 hover:shadow-sm transition-all group cursor-pointer"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Map className="w-4 h-4" />
              </span>
              <div>
                <span className="block text-xs font-bold text-sky-950">Search by Map</span>
                <span className="block text-[10px] text-slate-500">Interactive office map</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* SEARCH BY FLOOR AREA / TSUBOS GRID */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold text-sky-950 uppercase tracking-wider flex items-center gap-1.5">
            <LayoutGrid className="w-4 h-4 text-sky-600" />
            <span>Search by Office Size & Capacity</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {officeSizeCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleSizeClick(cat.id)}
                className="group p-4 bg-white border border-sky-200/80 hover:border-sky-500 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-extrabold bg-sky-100 text-sky-800 rounded-full mb-2">
                    {cat.areaM2}
                  </span>
                  <h5 className="text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {cat.tsubo}
                  </h5>
                  <p className="text-xs font-bold text-sky-600 mt-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-sky-500" />
                    <span>{cat.capacity}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400">Listings:</span>
                  <span className="font-extrabold text-sky-700">{cat.count.toLocaleString()} units</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POPULAR SPECIAL CRITERIA GROUPS */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-extrabold text-sky-950 uppercase tracking-wider flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-sky-600" />
            <span>Popular Facilities & Special Criteria</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {officeCriteriaGroups.map((group) => (
              <div key={group.id} className="bg-white border border-sky-200/80 rounded-xl p-4 shadow-xs">
                <h5 className="text-xs font-extrabold text-sky-950 pb-2.5 border-b border-sky-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>{group.title}</span>
                </h5>
                <div className="mt-3 space-y-2">
                  {group.items.map((item, idx) => {
                    const itemKey = `opt_${group.id}_${idx}`;
                    return (
                      <label key={idx} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={!!selectedOptions[itemKey]}
                          onChange={() => handleToggle(itemKey)}
                          className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
                        />
                        <span className="text-xs text-slate-700 group-hover:text-sky-600 font-medium transition-colors">
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. Bottom CTA Bar */}
      <div className="p-4 sm:p-5 bg-white border-t border-sky-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
          <span>All office listings verified by SeaHome Net commercial real estate network.</span>
        </div>

        <button
          type="button"
          onClick={onOpenPrefectureModal}
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-md shadow-sky-600/20 transition-all flex items-center justify-center space-x-2.5 shrink-0 cursor-pointer"
        >
          <MapPin className="w-5 h-5" />
          <span>Select a prefecture for offices</span>
        </button>
      </div>
    </div>
  );
};

export default OfficeTypeSearch;
