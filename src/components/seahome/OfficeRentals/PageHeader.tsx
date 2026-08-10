import React from 'react';
import { ChevronRight, Building2, Store, Home } from 'lucide-react';

interface PageHeaderProps {
  totalListings?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ totalListings = "72,710" }) => {
  return (
    <div className="w-full mb-8">
      {/* 1. Top Breadcrumb & Decorative Skyline */}
      <div className="flex justify-between items-end pb-2 px-1 relative">
        {/* Breadcrumb Links */}
        <nav className="flex items-center space-x-1.5 text-xs md:text-sm text-gray-600 z-10">
          <a href="#" className="text-blue-600 hover:underline transition-colors font-normal">
            Search for office space and rental
          </a>
          
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <a href="/seahome-real-estates" className="text-blue-600 hover:underline transition-colors font-normal">
            Rental
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-gray-800 font-medium">Office for Rent</span>
        </nav>

        {/* Subtle Decorative Building Watermark (matches top-right graphic in screenshot) */}
        <div className="hidden md:flex items-end space-x-1.5 text-blue-200/50 select-none pointer-events-none pr-2">
          <Home className="w-4 h-4" />
          <Building2 className="w-6 h-6" />
          <Store className="w-5 h-5" />
          <Building2 className="w-8 h-8" />
          <Home className="w-4 h-4" />
          <Building2 className="w-7 h-7" />
        </div>
      </div>

      {/* 2. Main Header Card with Blue Top Border */}
      <div className="bg-white p-6 md:p-8 border-t-[3px] border-t-blue-600 rounded-b-lg shadow-sm border-x border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Title Section */}
        <div className="max-w-3xl">
          <h1 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-gray-900 leading-snug tracking-tight">
            Search for{" "}
            <span className="text-blue-600">
              rental property information for offices, vacant offices, and commercial spaces.
            </span>
          </h1>
        </div>

        {/* Listings Counter Badge Box */}
        <div className="flex items-center justify-between md:justify-end space-x-3 bg-gray-50 md:bg-transparent p-3.5 md:p-0 rounded-xl border border-gray-100 md:border-0 shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
            Number of listings today
          </span>
          <div className="bg-gray-100/80 border border-gray-200/60 rounded-full px-5 py-2 flex items-center space-x-1.5 shadow-inner">
            <span className="text-xl sm:text-2xl font-black text-blue-600 tracking-tight">
              {totalListings}
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-700">
              items
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};