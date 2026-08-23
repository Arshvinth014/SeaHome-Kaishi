import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, MapPin, Network, Map, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { businessCategories } from '../../../config/rentalShop';
import { slugifyCategoryItem } from '../../../config/rentalShopCategories';

interface RentalTypeSearchProps {
  onOpenPrefectureModal?: () => void;
}

type SearchTab = 'business' | 'area' | 'station' | 'map' | 'condition';

export const RentalTypeSearch: React.FC<RentalTypeSearchProps> = ({ onOpenPrefectureModal }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<SearchTab>('business');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});
  const [includeInquiryAllowed, setIncludeInquiryAllowed] = useState<boolean>(true);

  // Helper item key arrays for category groups
  const beautyKeys = businessCategories.beautyAndMedical.items.map((_, idx) => `beauty_item_${idx}`);
  const heavyDiningKeys = businessCategories.heavyDining.items.map((_, idx) => `hd_item_${idx}`);
  const retailKeys = businessCategories.retail.items.map((_, idx) => `retail_item_${idx}`);
  const amusementKeys = businessCategories.amusement.items.map((_, idx) => `amuse_item_${idx}`);

  // Single toggle for simple non-grouped items
  const handleToggle = (key: string) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Toggle category header checkbox and sync all child item checkboxes
  const handleCategoryToggle = (mainKey: string, itemKeys: string[]) => {
    setSelectedOptions((prev) => {
      const isCurrentlyChecked = !!prev[mainKey];
      const nextState = !isCurrentlyChecked;
      const updated = { ...prev, [mainKey]: nextState };
      itemKeys.forEach((key) => {
        updated[key] = nextState;
      });
      return updated;
    });
  };

  // Toggle an individual child item checkbox and update main category state accordingly
  const handleItemToggle = (itemKey: string, mainKey: string, itemKeys: string[]) => {
    setSelectedOptions((prev) => {
      const nextItemState = !prev[itemKey];
      const updated = { ...prev, [itemKey]: nextItemState };
      const allChecked = itemKeys.every((k) => (k === itemKey ? nextItemState : !!prev[k]));
      updated[mainKey] = allChecked;
      return updated;
    });
  };

  const handleCategoryTextClick = (itemName: string) => {
    const slug = slugifyCategoryItem(itemName);
    navigate(`/seahome-real-estates/rental-shop/category/${slug}`);
  };

  // Count total selected items
  const selectedCount = Object.values(selectedOptions).filter(Boolean).length;
  const hasAnySelection = selectedCount > 0;

  const handleStationSearchClick = () => {
    navigate('/seahome-real-estates/rental/search-by-line-station/niigata');
  };

  const handleMapSearchClick = () => {
    navigate('/seahome-real-estates/rental/search-by-map');
  };

  return (
    <div className="w-full bg-white border border-sky-200/80 rounded-2xl shadow-md shadow-sky-900/5 mb-8 overflow-hidden relative">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-4 sm:p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-white/20 text-white rounded-xl backdrop-blur-md border border-white/20 shadow-sm">
            <Store className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-extrabold tracking-tight">Rental Shop Search</h2>
              <span className="px-2 py-0.5 text-xs font-black bg-amber-400 text-slate-900 rounded uppercase tracking-wider shadow-xs">
                SeaHome Net
              </span>
            </div>
            <p className="text-xs sm:text-sm text-sky-100 mt-0.5 font-medium">
              Find vacant stores, food & dining spaces, and retail shops across Japan.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2 text-xs font-bold text-white bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
          <span>Tailored Business Property Finder</span>
        </div>
      </div>

      {/* 2. ATHOME ALIGNED 5 SEARCH NAVIGATION TABS */}
      <div className="border-b border-sky-100 bg-sky-50/60 p-2 sm:p-3">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {[
            { id: 'business', label: 'By Business Type', sub: 'By Sector', icon: Store },
            { id: 'area', label: 'By Area / City', sub: 'By Region', icon: MapPin },
            { id: 'station', label: 'By Line / Station', sub: 'By Line & Station', icon: Network },
            { id: 'map', label: 'By Map Search', sub: 'Map Location', icon: Map },
            { id: 'condition', label: 'By Special Criteria', sub: 'By Condition', icon: SlidersHorizontal },
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

      {/* 3. Sub-section Bar */}
      <div className="px-5 py-3.5 bg-sky-50/40 border-b border-sky-100 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-1.5 h-5 bg-sky-600 rounded-full"></div>
          <h3 className="text-sm sm:text-base font-extrabold text-sky-950">
            {activeTab === 'business' && 'Search rental shops by business type you are opening'}
            {activeTab === 'area' && 'Select a prefecture or city to search shops'}
            {activeTab === 'station' && 'Search rental shops by railway line & station'}
            {activeTab === 'map' && 'Search rental shops on the map'}
            {activeTab === 'condition' && 'Filter shops by special conditions & specifications'}
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

      {/* 4. Main Business Categories Grid */}
      <div className="p-4 sm:p-6 space-y-5 bg-slate-50/30">
        {/* Quick Search Action Buttons Panel */}
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
                <span className="block text-[10px] text-slate-500">JR & private railway lines</span>
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
                <span className="block text-[10px] text-slate-500">Interactive shop map</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category 1: Beauty, Medical, Nursing */}
        <div className="border border-sky-200/80 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-sky-50/70 p-3.5 border-b border-sky-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_beauty"
              checked={!!selectedOptions["beauty_main"]}
              onChange={() => handleCategoryToggle("beauty_main", beautyKeys)}
              className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => handleCategoryTextClick(businessCategories.beautyAndMedical.title)}
              className="text-sm sm:text-base font-bold text-sky-950 hover:text-sky-600 hover:underline transition-colors text-left"
            >
              {businessCategories.beautyAndMedical.title}
            </button>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {businessCategories.beautyAndMedical.items.map((item, idx) => {
              const itemKey = `beauty_item_${idx}`;
              return (
                <div key={idx} className="flex items-start space-x-2 group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "beauty_main", beautyKeys)}
                    className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => handleCategoryTextClick(item)}
                    className="text-left text-xs sm:text-sm text-slate-700 group-hover:text-sky-600 hover:underline transition-colors leading-tight font-medium cursor-pointer"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category 2: Heavy Eating and Drinking */}
        <div className="border border-sky-200/80 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-sky-50/70 p-3.5 border-b border-sky-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_heavy_dining"
              checked={!!selectedOptions["heavy_dining_main"]}
              onChange={() => handleCategoryToggle("heavy_dining_main", heavyDiningKeys)}
              className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => handleCategoryTextClick(businessCategories.heavyDining.title)}
              className="text-sm sm:text-base font-bold text-sky-950 hover:text-sky-600 hover:underline transition-colors text-left"
            >
              {businessCategories.heavyDining.title}
            </button>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {businessCategories.heavyDining.items.map((item, idx) => {
              const itemKey = `hd_item_${idx}`;
              return (
                <div key={idx} className="flex items-start space-x-2 group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "heavy_dining_main", heavyDiningKeys)}
                    className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => handleCategoryTextClick(item)}
                    className="text-left text-xs sm:text-sm text-slate-700 group-hover:text-sky-600 hover:underline transition-colors leading-tight font-medium cursor-pointer"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Row 3: Light Food, Bars/Clubs, Other Restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {businessCategories.lightDiningRow.map((card) => (
            <div
              key={card.id}
              className="border border-sky-200/80 rounded-xl p-4 bg-white hover:border-sky-400 transition-colors flex items-center space-x-3 shadow-xs group"
            >
              <input
                type="checkbox"
                id={card.id}
                checked={!!selectedOptions[card.id]}
                onChange={() => handleToggle(card.id)}
                className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 shrink-0 cursor-pointer"
              />
              <button
                type="button"
                onClick={() => handleCategoryTextClick(card.title)}
                className="text-left text-xs sm:text-sm font-bold text-sky-950 group-hover:text-sky-600 hover:underline cursor-pointer leading-snug"
              >
                {card.title}
              </button>
            </div>
          ))}
        </div>

        {/* Category 4: Retail and merchandise sales */}
        <div className="border border-sky-200/80 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-sky-50/70 p-3.5 border-b border-sky-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_retail"
              checked={!!selectedOptions["retail_main"]}
              onChange={() => handleCategoryToggle("retail_main", retailKeys)}
              className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => handleCategoryTextClick(businessCategories.retail.title)}
              className="text-sm sm:text-base font-bold text-sky-950 hover:text-sky-600 hover:underline transition-colors text-left"
            >
              {businessCategories.retail.title}
            </button>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {businessCategories.retail.items.map((item, idx) => {
              const itemKey = `retail_item_${idx}`;
              return (
                <div key={idx} className="flex items-start space-x-2 group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "retail_main", retailKeys)}
                    className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => handleCategoryTextClick(item)}
                    className="text-left text-xs sm:text-sm text-slate-700 group-hover:text-sky-600 hover:underline transition-colors leading-tight font-medium cursor-pointer"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category 5: Amusement */}
        <div className="border border-sky-200/80 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-sky-50/70 p-3.5 border-b border-sky-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_amusement"
              checked={!!selectedOptions["amusement_main"]}
              onChange={() => handleCategoryToggle("amusement_main", amusementKeys)}
              className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => handleCategoryTextClick(businessCategories.amusement.title)}
              className="text-sm sm:text-base font-bold text-sky-950 hover:text-sky-600 hover:underline transition-colors text-left"
            >
              {businessCategories.amusement.title}
            </button>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {businessCategories.amusement.items.map((item, idx) => {
              const itemKey = `amuse_item_${idx}`;
              return (
                <div key={idx} className="flex items-start space-x-2 group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "amusement_main", amusementKeys)}
                    className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => handleCategoryTextClick(item)}
                    className="text-left text-xs sm:text-sm text-slate-700 group-hover:text-sky-600 hover:underline transition-colors leading-tight font-medium cursor-pointer"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Row 6: Cram schools & tutoring / Others */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businessCategories.otherServicesRow.map((card) => (
            <div
              key={card.id}
              className="border border-sky-200/80 rounded-xl p-4 bg-white hover:border-sky-400 transition-colors flex items-center space-x-3 shadow-xs group"
            >
              <input
                type="checkbox"
                id={card.id}
                checked={!!selectedOptions[card.id]}
                onChange={() => handleToggle(card.id)}
                className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 shrink-0 cursor-pointer"
              />
              <button
                type="button"
                onClick={() => handleCategoryTextClick(card.title)}
                className="text-left text-xs sm:text-sm font-bold text-sky-950 group-hover:text-sky-600 hover:underline cursor-pointer leading-snug"
              >
                {card.title}
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* 5. Bottom CTA Bar */}
      <div className="p-4 sm:p-5 bg-white border-t border-sky-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={includeInquiryAllowed}
            onChange={(e) => setIncludeInquiryAllowed(e.target.checked)}
            className="w-5 h-5 text-sky-600 border-slate-300 rounded focus:ring-sky-500 cursor-pointer shrink-0"
          />
          <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-sky-600 transition-colors">
            Include properties where the type of business allowed requires inquiry in the search results.
          </span>
        </label>

        <button
          type="button"
          onClick={onOpenPrefectureModal}
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-md shadow-sky-600/20 transition-all flex items-center justify-center space-x-2.5 shrink-0 cursor-pointer"
        >
          <MapPin className="w-5 h-5" />
          <span>Select a prefecture</span>
        </button>
      </div>

      {/* Floating Bottom Sticky Ribbon when items are selected */}
      {hasAnySelection && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl bg-slate-900/95 text-white backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.6)] p-3.5 sm:p-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center space-x-3.5 w-full md:w-auto">
            <span className="flex h-7 px-3 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/30 text-xs font-bold shrink-0">
              {selectedCount} selected
            </span>
            <label className="flex items-center space-x-2.5 cursor-pointer group text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">
              <input
                type="checkbox"
                checked={includeInquiryAllowed}
                onChange={(e) => setIncludeInquiryAllowed(e.target.checked)}
                className="w-4 h-4 text-sky-500 border-slate-600 rounded focus:ring-sky-500 cursor-pointer shrink-0"
              />
              <span className="leading-tight">
                Include properties where the type of business allowed requires inquiry in the search results.
              </span>
            </label>
          </div>

          <button
            type="button"
            onClick={onOpenPrefectureModal}
            className="w-full md:w-auto px-6 py-2.5 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-600/30 transition-all flex items-center justify-center space-x-2 shrink-0 group cursor-pointer"
          >
            <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Select a prefecture</span>
          </button>
        </div>
      )}
    </div>
  );
};
