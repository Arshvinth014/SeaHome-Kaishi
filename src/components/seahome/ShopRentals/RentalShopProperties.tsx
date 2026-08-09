import React, { useRef } from 'react';
import { 
  Building, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Glasses, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  Store
} from 'lucide-react';
import { shoppingDistricts, whatsNewProperties } from '../../../config/rentalShop';

export const RentalShopProperties: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8 mb-8">
      {/* ---------------- SECTION 1: Popular Shopping District ---------------- */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden">
        {/* Section Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center space-x-3 bg-gradient-to-r from-blue-50/40 via-white to-transparent">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <Compass className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
            Search by popular shopping district
          </h2>
        </div>

        {/* District Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shoppingDistricts.map((district) => (
            <div
              key={district.id}
              className="group relative h-28 sm:h-32 rounded-lg overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={district.img}
                alt={`${district.region} ${district.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>

              {/* District Label Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3 flex items-end justify-between bg-white/30 backdrop-blur-md border-t border-white/20">
                <div className="truncate">
                  <span className="block text-[11px] font-medium text-gray-800 tracking-wide uppercase truncate">
                    {district.region}
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-gray-900 truncate">
                    {district.name}
                  </span>
                </div>
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 ml-1 opacity-90 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- SECTION 2: Promotional Banners ---------------- */}
      <div className="space-y-3">
        {/* VR Tour Banner */}
        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-5 sm:p-6 text-white shadow-sm hover:shadow-md transition cursor-pointer border border-blue-500/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-xs border border-white/20">
                <Glasses className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 text-xs font-bold bg-blue-400/30 border border-blue-200/30 rounded text-blue-100 uppercase tracking-wider">
                    VR Feature
                  </span>
                  <h3 className="text-base sm:text-xl font-bold tracking-tight">
                    VR Virtual Property Tours
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 mt-1">
                  Tour commercial properties online anytime with 360-degree immersive views.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white text-blue-700 rounded-lg font-bold text-xs sm:text-sm shadow-xs group-hover:bg-blue-50 transition-colors">
              <span>Explore VR Tours</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Commercial Area Info Banner */}
        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-5 sm:p-6 text-white shadow-sm hover:shadow-md transition cursor-pointer border border-gray-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-lg backdrop-blur-xs border border-blue-400/30">
                <Store className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold tracking-tight text-white">
                  Find Real Estate Agencies with Area Insights
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Access local foot-traffic, demographics, and commercial zone statistics.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-xs sm:text-sm shadow-xs transition-colors">
              <span>Search Agencies</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- SECTION 3: What's New ---------------- */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden">
        {/* Section Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-blue-50/40 via-white to-transparent">
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              what's new
            </h2>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="p-4 sm:p-6">
          <div
            ref={scrollRef}
            className="flex items-stretch space-x-4 overflow-x-auto scrollbar-none scroll-smooth pb-2"
          >
            {whatsNewProperties.map((prop) => (
              <div
                key={prop.id}
                className="w-56 sm:w-64 shrink-0 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
              >
                {/* Image & Type Badge */}
                <div className="relative h-36 bg-gray-100 overflow-hidden">
                  <span className="absolute top-2 left-2 z-10 px-2 py-1 bg-blue-600/90 backdrop-blur-xs text-[10px] font-semibold text-white rounded">
                    {prop.type}
                  </span>
                  <img
                    src={prop.img}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                  <div className="flex items-start space-x-1.5">
                    <Building className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
                      {prop.title}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-baseline justify-between">
                    <span className="text-xs sm:text-sm font-bold text-blue-600">
                      {prop.price}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {prop.area}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};