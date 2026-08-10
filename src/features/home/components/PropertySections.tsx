import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Heart, 
  BedDouble, 
  Bath, 
  Maximize, 
  Globe, 
  CheckSquare, 
  Compass, 
  Users, 
  Building2, 
  Coins 
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { INVESTMENT_OPPS } from '../../../config/mockData';

// Mock data structures embedded to ensure matching content keys
const FEATURED_PROPERTIES = [
  { id: 1, title: 'Skyline Residences', location: 'Tokyo, Japan', price: '$850,000 USD', tag: 'FEATURED', type: 'Luxury Apartment', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500', beds: '2 Beds', baths: '2 Baths', sqft: '1,200 sqft' },
  { id: 2, title: 'Sea View Villa', location: 'Galle, Sri Lanka', price: '$1,250,000 USD', tag: '', type: 'House', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500', beds: '4 Beds', baths: '4 Baths', sqft: '3,500 sqft' },
  { id: 3, title: 'Commercial Tower', location: 'Colombo, Sri Lanka', price: '$3,500,000 USD', tag: '', type: 'Property for Business', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500', beds: '', baths: '', sqft: '20,000 sqft' },
  { id: 4, title: 'Oceanfront Land', location: 'Matara, Sri Lanka', price: '$650,000 USD', tag: '', type: 'Land', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500', beds: '', baths: '', sqft: '2.5 Acres' },
  { id: 5, title: 'Modern Home', location: 'Osaka, Japan', price: '$720,000 USD', tag: '', type: 'House', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500', beds: '3 Beds', baths: '2 Baths', sqft: '1,800 sqft' },
  { id: 6, title: 'Urban Heights', location: 'Tokyo, Japan', price: '$1,100,000 USD', tag: '', type: 'Luxury Apartment', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500', beds: '3 Beds', baths: '2 Baths', sqft: '1,300 sqft' },
];

const COUNTRIES = [
  { id: 1, name: 'Sri Lanka', count: '2,456 Properties', flag: '🇱🇰', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600', path: '/country/sri-lanka' },
  { id: 2, name: 'Japan', count: '3,892 Properties', flag: '🇯🇵', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600', path: '/japan-rental' },
  { id: 3, name: 'All Countries', count: '12,540+ Properties', flag: '🌐', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600', path: '/buy' }
];

const METRICS = [
  { value: '12,540+', label: 'Properties Worldwide', icon: <Globe size={20} className="text-blue-600" /> },
  { value: '2,350+', label: 'Verified Agencies', icon: <CheckSquare size={20} className="text-blue-600" /> },
  { value: '85+', label: 'Countries Covered', icon: <Compass size={20} className="text-blue-600" /> },
  { value: '25K+', label: 'Happy Investors', icon: <Users size={20} className="text-blue-600" /> },
  { value: '$2.5B+', label: 'Property Value Traded', icon: <Coins size={20} className="text-blue-600" /> }
];

export function PropertySections() {
  return (
    <div className="w-full bg-[#f8fafc]/40 pb-16 space-y-16 overflow-hidden max-w-[1920px] 2xl:max-w-[1600px] mx-auto px-0 2xl:px-8 3xl:px-12">
      {/* SECTION 1: Featured Properties */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 2xl:px-10 pt-2" id="buy">
        <div className="flex justify-between items-center mb-5 gap-2">
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-900 tracking-tight whitespace-nowrap">Featured Properties</h2>
          <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 border border-slate-300 bg-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors shrink-0">
            <span className="hidden sm:inline">View All Properties</span><span className="sm:hidden">View All</span> <span className="text-[10px]">→</span>
          </button>
        </div>

        <div className="relative group/slider">
          {/* Slider Arrow Left */}
          <button className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-400 shadow-sm items-center justify-center text-slate-600 z-10 opacity-80 hover:opacity-100 transition-opacity">
            <ChevronLeft size={16} />
          </button>

          {/* 6 Grid Lineup matching layout view */}
          <div className="flex lg:grid overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0 lg:grid-cols-6 gap-4 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {FEATURED_PROPERTIES.map((property) => (
              <div key={property.id} className="min-w-[240px] sm:min-w-[280px] lg:min-w-0 snap-start bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-32 w-full bg-slate-500 relative overflow-hidden">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    {property.tag && (
                      <span className="absolute top-2.5 left-2.5 bg-[#0066FF] text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                        {property.tag}
                      </span>
                    )}
                    {property.type && (
                      <span className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-blue-600 font-medium text-[9px] px-1.5 py-0.5 rounded-md">
                        {property.type}
                      </span>
                    )}
                    <button className="absolute top-2.5 right-2.5 w-6 h-6 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-xs border border-slate-200">
                      <Heart size={12} className="text-rose-500 fill-rose-500" />
                    </button>
                  </div>

                  <div className="p-3.5 space-y-1">
                    <h3 className="font-bold text-slate-900 text-[13px] tracking-tight leading-snug line-clamp-1">{property.title}</h3>
                    <p className="text-[11px] text-slate-400 flex items-center gap-0.5 font-normal line-clamp-1">
                      <MapPin size={10} className="text-slate-600 shrink-0" /> {property.location}
                    </p>
                    <p className="text-[13px] font-extrabold text-slate-900 pt-1">{property.price}</p>
                  </div>
                </div>

                {/* Specs section with explicit custom micro-icons layout */}
                <div className="p-3.5 pt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-slate-400 border-t border-slate-300 mt-2">
                  {property.beds && (
                    <span className="flex items-center gap-0.5 font-medium"><BedDouble size={11} className="text-slate-600 shrink-0" /> {property.beds.split(' ')[0]} Beds</span>
                  )}
                  {property.baths && (
                    <span className="flex items-center gap-0.5 font-medium"><Bath size={11} className="text-slate-600 shrink-0" /> {property.baths.split(' ')[0]} Baths</span>
                  )}
                  {property.sqft && (
                    <span className="flex items-center gap-0.5 font-medium"><Maximize size={11} className="text-slate-600 shrink-0" /> {property.sqft}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Slider Arrow Right */}
          <button className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-600 shadow-sm items-center justify-center text-slate-600 z-10 opacity-80 hover:opacity-100 transition-opacity">
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* SECTION 2: Explore Properties By Country Layout */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 2xl:px-10 space-y-5" id="countries">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-900 tracking-tight whitespace-nowrap">Explore Properties by Country</h2>
          <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 border border-slate-300 bg-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors shrink-0">
            <span className="hidden sm:inline">View All Countries</span><span className="sm:hidden">View All</span> <span className="text-[10px]">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COUNTRIES.map((country) => (
            <Link
              key={country.id}
              to={country.path}
              className="block h-40 sm:h-48 rounded-2xl overflow-hidden relative group shadow-xs cursor-pointer border border-slate-300"
            >
              <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
              
              {/* Top Custom Float Icon for global panel */}
              {country.id === 3 && (
                <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                  <Building2 size={14} />
                </div>
              )}

              <div className="absolute bottom-5 left-5 text-white space-y-0.5">
                <div className="flex items-center gap-2">
                  {country.id !== 3 && <span className="text-lg drop-shadow-xs">{country.flag}</span>}
                  <h3 className="font-bold text-lg tracking-tight">{country.name}</h3>
                </div>
                <p className="text-xs text-slate-300/90 font-light">{country.count}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Global Statistics Counter Row Block */}
        <div className="bg-white border border-slate-300 rounded-2xl p-5 flex flex-wrap md:grid md:grid-cols-5 gap-y-6 gap-x-4 shadow-xs mt-6 items-center justify-between sm:justify-start">
          {METRICS.map((m, i) => (
            <div key={i} className="flex items-center gap-3 px-1 min-w-[140px] sm:min-w-[160px] md:min-w-0">
              <div className="w-10 h-10 rounded-full bg-blue-300/70 flex items-center justify-center shrink-0">
                {m.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-base font-bold text-slate-900 leading-none tracking-tight">{m.value}</p>
                <p className="text-[11px] font-medium text-slate-400 leading-tight">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Top Investment Opportunities (Pre-existing Content) */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 2xl:px-10 pt-4" id="invest">
        <div className="flex justify-between items-end mb-5 gap-2">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-900 tracking-tight">Top Investment Opportunities</h2>
          </div>
          <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 border border-slate-300 bg-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors shrink-0">
            <span className="hidden sm:inline">View All Opportunities</span><span className="sm:hidden">View All</span> <span className="text-[10px]">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {INVESTMENT_OPPS.map((opp) => (
              <div 
                key={opp.id} 
                className="bg-white border border-slate-300 rounded-2xl overflow-hidden p-3 flex flex-col justify-between group shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="h-32 w-full rounded-xl overflow-hidden bg-slate-300">
                    <img 
                      src={opp.image} 
                      alt={opp.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="pt-4 space-y-1">
                    <h4 className="font-bold text-slate-900 text-[13px] tracking-tight leading-snug line-clamp-1">{opp.title}</h4>
                    <p className="text-[11px] text-slate-400 font-medium">{opp.location}</p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-300/80 flex justify-between items-end">
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold tracking-tight">ROI</span>
                    <span className="text-[#0066FF] font-black text-[14px]">{opp.roi}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] font-bold tracking-tight">Min. Investment</span>
                    <span className="text-slate-700 font-extrabold text-[12px]">{opp.minInvestment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 bg-[#0a1128] rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[260px] lg:min-h-[280px]">
            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-bold tracking-tight">List Your Property</h3>
              <p className="text-[14px] font-bold text-slate-400 font-light leading-relaxed max-w-full sm:max-w-[200px] lg:max-w-full">
                Reach global investors and sell or rent faster.
              </p>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" alt="List Your Property" className="w-full h-24 lg:h-20 object-cover rounded-xl mt-2" />
            </div>
            
            <div className="w-full mt-6 lg:mt-0">
              <button className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-[13px] py-3 px-4 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span><Building2 className="w-4 h-4 text-white-500/80" strokeWidth={2.5} /></span> List Your Property
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}