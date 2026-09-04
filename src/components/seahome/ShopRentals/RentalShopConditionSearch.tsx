import React from 'react';
import { Link } from 'react-router-dom';
import {
  SlidersHorizontal,
  Building2,
  Store,
  Sliders,
  ShieldCheck,
  FileCheck,
  Sparkles,
  Car,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { specificCriteriaData } from '../../../config/rentalShop';

// Icon mapping based on category id
const categoryIcons: Record<string, React.ReactNode> = {
  situation: <Building2 className="w-4 h-4 text-blue-600" />,
  exterior: <Store className="w-4 h-4 text-blue-600" />,
  interior: <Sliders className="w-4 h-4 text-blue-600" />,
  security: <ShieldCheck className="w-4 h-4 text-blue-600" />,
  conditions: <FileCheck className="w-4 h-4 text-blue-600" />,
  features: <Sparkles className="w-4 h-4 text-blue-600" />,
  parking: <Car className="w-4 h-4 text-blue-600" />,
  location: <MapPin className="w-4 h-4 text-blue-600" />
};

export const RentalShopConditionSearch: React.FC = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xs mb-8 overflow-hidden">
      {/* 1. Header with Blue Accent Bar */}
      <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center space-x-3 bg-gradient-to-r from-blue-50/40 via-white to-transparent">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
        <SlidersHorizontal className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
          Search by specific criteria
        </h2>
      </div>

      {/* Categories */}
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {specificCriteriaData.map((group) => (
            <div
              key={group.id}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  {categoryIcons[group.id]}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-800 capitalize">
                    {group.title}
                  </h3>

                  <div className="mt-1 h-1 w-10 rounded-full bg-blue-500" />
                </div>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => {
                  const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <Link
                      key={idx}
                      to={`/seahome-real-estates/rental-shop/criteria/${slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-3.5
                        py-2
                        text-sm
                        text-slate-700
                        transition-all
                        duration-200
                        hover:border-blue-300
                        hover:bg-blue-50
                        hover:text-blue-700
                        hover:shadow-sm
                      "
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};