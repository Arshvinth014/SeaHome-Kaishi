import React from 'react';
import { 
  Building2, 
  BookOpen, 
  Search, 
  ExternalLink, 
  ChevronRight,
  Warehouse,
  Car,
  Landmark,
  Layers,
} from 'lucide-react';

export const RentalShopBottom: React.FC = () => {
  const otherPropertyTypes = [
    { name: "rental office", icon: <Building2 className="w-3.5 h-3.5 text-blue-500" /> },
    { name: "Rental parking", icon: <Car className="w-3.5 h-3.5 text-blue-500" /> },
    { name: "leased land", icon: <Landmark className="w-3.5 h-3.5 text-blue-500" /> },
    { name: "Rental warehouse", icon: <Warehouse className="w-3.5 h-3.5 text-blue-500" /> },
    { name: "Rental and other", icon: <Layers className="w-3.5 h-3.5 text-blue-500" /> },
  ];

  const glossaryTerms = [
    "Existing fixtures and fittings",
    "Standing sign",
    "tenant",
    "Construction"
  ];

  return (
    <div className="space-y-6 mt-8 mb-12">
      {/* ---------------- 1. View other types of properties ---------------- */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center space-x-3 bg-gradient-to-r from-blue-50/40 via-white to-transparent">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
            View other types of properties
          </h2>
        </div>

        <div className="p-4 sm:p-5 flex flex-wrap items-center gap-3 sm:gap-6 text-sm">
          {otherPropertyTypes.map((type, idx) => (
            <a
              key={idx}
              href={`#${type.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center space-x-1.5 text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium group"
            >
              <span className="opacity-80 group-hover:opacity-100">{type.icon}</span>
              <span>{type.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ---------------- 2. Store for Rent Terms / Glossary ---------------- */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-blue-50/40 via-white to-transparent">
          <div className="flex items-start sm:items-center space-x-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></div>
            <div>
              <span className="text-base sm:text-lg font-bold text-blue-600 mr-2">
                Store for Rent
              </span>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                Find out the meaning of terms commonly used in [this context].
              </span>
            </div>
          </div>

          <a
            href="#glossary"
            className="inline-flex items-center space-x-1 text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline self-start sm:self-auto shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Look up other real estate terms</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        <div className="p-4 sm:p-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm">
          {glossaryTerms.map((term, idx) => (
            <React.Fragment key={idx}>
              <a
                href={`#${term.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
              >
                {term}
              </a>
              {idx < glossaryTerms.length - 1 && (
                <span className="text-gray-300 select-none font-light">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ---------------- 3. Affiliated Store Promotion Box ---------------- */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50/30 border border-blue-200/80 rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Thumbnail Image */}
          <div className="relative w-full sm:w-36 h-24 rounded-lg overflow-hidden shrink-0 border border-blue-200 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
              alt="Sea Home Affiliated Store"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <a
              href="#affiliated-stores"
              className="inline-flex items-center space-x-1.5 text-base sm:text-lg font-bold text-blue-700 hover:text-blue-900 hover:underline tracking-tight group"
            >
              <Search className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>Find an Sea Home affiliated store</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </a>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Find your perfect property quickly! Directly entrust your property search to the real estate company that's right for you!
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- 4. Footer Explanatory Text ---------------- */}
      <div className="pt-2">
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
          For all your rental and vacant property needs, trust Sea Home. Sea Home, our real estate information website, makes it easy to find the perfect rental or vacant property to suit your needs.
        </p>
      </div>
    </div>
  );
};