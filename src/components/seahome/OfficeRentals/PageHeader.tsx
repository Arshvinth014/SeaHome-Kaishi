import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, Store, Home } from 'lucide-react';

interface PageHeaderProps {
  totalListings?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  breadcrumbCurrent?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  totalListings = "77,775",
  titlePrefix = "Search for",
  titleHighlight = "rental office space, vacant offices, and commercial building properties.",
  breadcrumbCurrent = "Office for Rent",
}) => {
  return (
    <div className="w-full mb-6">
      {/* 1. Top Breadcrumb & Decorative Skyline */}
      <div className="flex justify-between items-end pb-2.5 px-1 relative">
        {/* Breadcrumb Links */}
        <nav className="flex items-center space-x-1.5 text-xs md:text-sm text-slate-500 z-10 font-medium">
          <Link to="/" className="text-sky-700 hover:underline transition-colors font-semibold">
            Real Estate & Housing Top
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/seahome-real-estates/rental" className="text-sky-700 hover:underline transition-colors font-semibold">
            Rental
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-sky-950 font-extrabold">{breadcrumbCurrent}</span>
        </nav>

        {/* Decorative Skyline Icons */}
        <div className="hidden md:flex items-end space-x-1.5 text-sky-200/60 select-none pointer-events-none pr-2">
          <Home className="w-4 h-4" />
          <Building2 className="w-6 h-6" />
          <Store className="w-5 h-5" />
          <Building2 className="w-8 h-8" />
          <Home className="w-4 h-4" />
          <Building2 className="w-7 h-7" />
        </div>
      </div>

      {/* 2. Main Header Card with Ocean Blue Border */}
      <div className="bg-white p-6 md:p-8 border-t-4 border-t-sky-600 rounded-2xl shadow-md border-x border-b border-sky-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Title Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>SeaHome Net Commercial Real Estate</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-[26px] font-black text-slate-900 leading-snug tracking-tight">
            {titlePrefix}{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent font-extrabold">
              {titleHighlight}
            </span>
          </h1>
        </div>

        {/* Listings Counter Badge Box */}
        <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
          <span className="text-xs text-sky-900 font-extrabold whitespace-nowrap">Available Office Listings</span>
          <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
            <span className="text-2xl font-black text-sky-600">{totalListings}</span>
            <span className="text-xs font-bold text-slate-600">units</span>
          </div>
        </div>

      </div>
    </div>
  );
};