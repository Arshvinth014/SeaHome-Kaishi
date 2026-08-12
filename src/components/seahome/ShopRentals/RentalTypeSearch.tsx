import React, { useState } from 'react';
import { Store, MapPin, Sparkles } from 'lucide-react';
import { businessCategories } from '../../../config/rentalShop';

export const RentalTypeSearch: React.FC = () => {
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

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm mb-8 overflow-hidden">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50/30 p-4 sm:p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-blue-600 text-white rounded-lg shadow-sm">
            <Store className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Rental store</h2>
              <span className="px-2 py-0.5 text-xs font-black bg-blue-600 text-white rounded uppercase tracking-wider">
                plus
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Support for choosing a property for opening a business.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2 text-xs font-semibold text-blue-700 bg-blue-100/60 px-3 py-1.5 rounded-full border border-blue-200">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Tailored Business Property Finder</span>
        </div>
      </div>

      {/* 2. Sub-section Bar */}
      <div className="px-5 py-3.5 bg-gray-50/80 border-b border-gray-200 flex items-center space-x-2.5">
        <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
        <h3 className="text-sm sm:text-base font-bold text-gray-800">
          Search by type of business you are opening.
        </h3>
      </div>

      {/* 3. Main Business Categories Grid */}
      <div className="p-4 sm:p-6 space-y-5 bg-gray-50/30">
        
        {/* Category 1: Beauty, Medical, Nursing */}
        <div className="border border-blue-200/80 rounded-lg overflow-hidden bg-white shadow-xs">
          <div className="bg-blue-50/70 p-3.5 border-b border-blue-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_beauty"
              checked={!!selectedOptions["beauty_main"]}
              onChange={() => handleCategoryToggle("beauty_main", beautyKeys)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor="cat_beauty"
              className="text-sm sm:text-base font-bold text-blue-900 cursor-pointer hover:text-blue-700"
            >
              {businessCategories.beautyAndMedical.title}
            </label>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {businessCategories.beautyAndMedical.items.map((item, idx) => {
              const itemKey = `beauty_item_${idx}`;
              return (
                <label key={idx} className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "beauty_main", beautyKeys)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Category 2: Heavy Eating and Drinking */}
        <div className="border border-blue-200/80 rounded-lg overflow-hidden bg-white shadow-xs">
          <div className="bg-blue-50/70 p-3.5 border-b border-blue-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_heavy_dining"
              checked={!!selectedOptions["heavy_dining_main"]}
              onChange={() => handleCategoryToggle("heavy_dining_main", heavyDiningKeys)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor="cat_heavy_dining"
              className="text-sm sm:text-base font-bold text-blue-900 cursor-pointer hover:text-blue-700"
            >
              {businessCategories.heavyDining.title}
            </label>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {businessCategories.heavyDining.items.map((item, idx) => {
              const itemKey = `hd_item_${idx}`;
              return (
                <label key={idx} className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "heavy_dining_main", heavyDiningKeys)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Category Row 3: Light Food, Bars/Clubs, Other Restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {businessCategories.lightDiningRow.map((card) => (
            <div
              key={card.id}
              className="border border-blue-200/80 rounded-lg p-4 bg-white hover:border-blue-300 transition-colors flex items-center space-x-3 shadow-xs"
            >
              <input
                type="checkbox"
                id={card.id}
                checked={!!selectedOptions[card.id]}
                onChange={() => handleToggle(card.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 shrink-0 cursor-pointer"
              />
              <label
                htmlFor={card.id}
                className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-600 cursor-pointer leading-snug"
              >
                {card.title}
              </label>
            </div>
          ))}
        </div>

        {/* Category 4: Retail and merchandise sales */}
        <div className="border border-blue-200/80 rounded-lg overflow-hidden bg-white shadow-xs">
          <div className="bg-blue-50/70 p-3.5 border-b border-blue-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_retail"
              checked={!!selectedOptions["retail_main"]}
              onChange={() => handleCategoryToggle("retail_main", retailKeys)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor="cat_retail"
              className="text-sm sm:text-base font-bold text-blue-900 cursor-pointer hover:text-blue-700"
            >
              {businessCategories.retail.title}
            </label>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {businessCategories.retail.items.map((item, idx) => {
              const itemKey = `retail_item_${idx}`;
              return (
                <label key={idx} className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "retail_main", retailKeys)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Category 5: Amusement */}
        <div className="border border-blue-200/80 rounded-lg overflow-hidden bg-white shadow-xs">
          <div className="bg-blue-50/70 p-3.5 border-b border-blue-100 flex items-center space-x-2.5">
            <input
              type="checkbox"
              id="cat_amusement"
              checked={!!selectedOptions["amusement_main"]}
              onChange={() => handleCategoryToggle("amusement_main", amusementKeys)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor="cat_amusement"
              className="text-sm sm:text-base font-bold text-blue-900 cursor-pointer hover:text-blue-700"
            >
              {businessCategories.amusement.title}
            </label>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {businessCategories.amusement.items.map((item, idx) => {
              const itemKey = `amuse_item_${idx}`;
              return (
                <label key={idx} className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={!!selectedOptions[itemKey]}
                    onChange={() => handleItemToggle(itemKey, "amusement_main", amusementKeys)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 shrink-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Category Row 6: Cram schools & tutoring / Others */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businessCategories.otherServicesRow.map((card) => (
            <div
              key={card.id}
              className="border border-blue-200/80 rounded-lg p-4 bg-white hover:border-blue-300 transition-colors flex items-center space-x-3 shadow-xs"
            >
              <input
                type="checkbox"
                id={card.id}
                checked={!!selectedOptions[card.id]}
                onChange={() => handleToggle(card.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 shrink-0 cursor-pointer"
              />
              <label
                htmlFor={card.id}
                className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-600 cursor-pointer leading-snug"
              >
                {card.title}
              </label>
            </div>
          ))}
        </div>

      </div>

      {/* 4. Bottom CTA Bar */}
      <div className="p-4 sm:p-5 bg-white border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={includeInquiryAllowed}
            onChange={(e) => setIncludeInquiryAllowed(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer shrink-0"
          />
          <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
            Include properties where the type of business allowed requires inquiry in the search results.
          </span>
        </label>

        <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center space-x-2.5 shrink-0">
          <MapPin className="w-5 h-5" />
          <span>Select a prefecture</span>
        </button>
      </div>
    </div>
  );
};