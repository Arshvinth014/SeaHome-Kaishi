import {
  CheckCircle2,
  Building2,
  ShieldCheck,
  Globe,
  Search,
  Compass,
  Briefcase,
  Building,
  BarChart3,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative w-full bg-gradient-to-b from-blue-50/30 via-white to-white pb-10 lg:pb-20 font-sans overflow-x-hidden">
      
      {/* Container wrapper for screens */}
      <div className="max-w-[1920px] 2xl:max-w-[1600px] mx-auto 2xl:px-8">

        {/* 1. Main Hero Content Layout */}
        <section className="px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-10 pt-6 lg:pt-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-1 items-center">

          {/* Column 1: Left Frame Text & Badges (Occupies 3 Columns on desktop, properly bounded on TV) */}
          <div className="col-span-1 lg:col-span-3 space-y-5 lg:space-y-7 z-20 pointer-events-auto text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-black text-slate-900 tracking-tight leading-[1.15]">
              The World of <br className="hidden lg:inline" />
              <span className="text-[#0066FF]">Real Estate</span> <br />
              at Your Fingertips
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
              Buy, Invest, and Connect with Verified Real Estate Agencies Worldwide.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <button className="bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs px-4 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all cursor-pointer whitespace-nowrap">
                Explore Properties
              </button>
              <button className="border border-blue-100 hover:border-blue-300 text-[#0066FF] bg-white font-bold text-xs px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Invest Now
              </button>
            </div>

            {/* Value Badging Sub-Row */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 pt-6 border-t border-slate-300 text-[11px] font-bold text-slate-400 max-w-sm mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500/80" strokeWidth={2.5} /> Verified Listings
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-500/80" strokeWidth={2.5} /> Trusted Agencies
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500/80" strokeWidth={2.5} /> Secure Transactions
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-500/80" strokeWidth={2.5} /> Global Network
              </div>
            </div>
          </div>

          {/* Column 2: Graphical Map */}
          <div className="col-span-1 lg:col-span-7 mt-4 lg:mt-1.5 relative w-full flex justify-center items-center overflow-visible">
            <div className="relative w-full aspect-[1.4/1] scale-100 sm:scale-105 lg:scale-110 2xl:scale-100 transform origin-center max-w-2xl lg:max-w-none">
              
              {/* World Map Background Asset */}
              <img
                src="HomePage.png"
                alt="Global Network Grid"
                className="w-full h-full object-contain"
              />

              {/* Live Property Marker: Tokyo */}
              <div className="absolute top-[10%] right-[2%] sm:right-[6%] bg-white p-1 sm:p-1.5 rounded-xl shadow-xl hover:border-blue-500 hover:shadow-[0_20px_25px_rgba(37,99,235,0.3)] transition-all border border-slate-300/80 flex items-center gap-1.5 sm:gap-2 z-10">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-slate-300 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=100" className="w-full h-full object-cover" alt="Tokyo" />
                </div>
                <div className="text-[7.5px] sm:text-[9px] leading-tight pr-1">
                  <p className="font-bold text-slate-900 whitespace-nowrap">Luxury Apartment</p>
                  <p className="text-slate-400">Tokyo, Japan</p>
                  <p className="text-slate-900 font-extrabold mt-0.5">$800,000 USD</p>
                </div>
              </div>
              <div className="absolute top-[26%] right-[6%] sm:right-[8%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full border-2 border-white shadow-sm z-10"></div>

              {/* Live Property Marker: Galle */}
              <div className="absolute top-[42%] left-[48%] sm:left-[53%] bg-white p-1 sm:p-1.5 rounded-xl shadow-xl hover:border-blue-500 hover:shadow-[0_20px_25px_rgba(37,99,235,0.3)] transition-all border border-slate-300/80 flex items-center gap-1.5 sm:gap-2 z-10">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-slate-300 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=100" className="w-full h-full object-cover" alt="Galle" />
                </div>
                <div className="text-[7.5px] sm:text-[9px] leading-tight pr-1">
                  <p className="font-bold text-slate-900 whitespace-nowrap">Beachfront Villa</p>
                  <p className="text-slate-400">Galle, Sri Lanka</p>
                  <p className="text-slate-900 font-extrabold mt-0.5">$1,150,000 USD</p>
                </div>
              </div>
              <div className="absolute top-[56%] left-[65%] sm:left-[69.5%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full border-2 border-white shadow-sm z-10"></div>

            </div>
          </div>

          {/* Column 3: Interactive Assistant Panel */}
          <div className="col-span-1 lg:col-span-2 w-full flex justify-center lg:justify-end z-10">
            <div className="bg-white border border-slate-300 w-full max-w-xs lg:max-w-[240px] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 space-y-3">
              <div className="leading-tight relative">
                <span className="absolute top-0 right-0 text-sm">👋</span>
                <p className="text-[13px] font-black text-slate-900 flex items-center gap-1">
                  Hi! I'm <span className="text-[#0066FF]">Sora</span>
                </p>
                <p className="text-[12px] text-slate-500 font-semibold mt-1 leading-normal">
                  Your real estate guide. How can I help you today?
                </p>
              </div>
              <div className="space-y-1 text-[11px] text-slate-600 font-bold">
                <button className="w-full bg-slate-300/60 hover:bg-slate-200 p-2.5 rounded-xl text-left flex justify-between items-center group transition-colors cursor-pointer">
                  <span className="flex items-center gap-2 text-slate-700 font-extrabold"><Compass className="w-3.5 h-3.5 text-slate-700" /> Find Properties</span>
                  <span className="text-slate-300 group-hover:text-blue-600 transition-colors">›</span>
                </button>
                <button className="w-full bg-slate-300/60 hover:bg-slate-200 p-2.5 rounded-xl text-left flex justify-between items-center group transition-colors cursor-pointer">
                  <span className="flex items-center gap-2 text-slate-700 font-extrabold"><Briefcase className="w-3.5 h-3.5 text-slate-700" /> Invest Opportunities</span>
                  <span className="text-slate-300 group-hover:text-blue-600 transition-colors">›</span>
                </button>
                <button className="w-full bg-slate-300/60 hover:bg-slate-200 p-2.5 rounded-xl text-left flex justify-between items-center group transition-colors cursor-pointer">
                  <span className="flex items-center gap-2 text-slate-700 font-extrabold"><Building className="w-3.5 h-3.5 text-slate-700" /> Find Agencies</span>
                  <span className="text-slate-300 group-hover:text-blue-600 transition-colors">›</span>
                </button>
                <button className="w-full bg-slate-300/60 hover:bg-slate-200 p-2.5 rounded-xl text-left flex justify-between items-center group transition-colors cursor-pointer">
                  <span className="flex items-center gap-2 text-slate-700 font-extrabold"><BarChart3 className="w-3.5 h-3.5 text-slate-700" /> Market Insights</span>
                  <span className="text-slate-300 group-hover:text-blue-600 transition-colors">›</span>
                </button>
                <button className="w-full bg-slate-300/60 hover:bg-slate-200 p-2.5 rounded-xl text-left flex justify-between items-center group transition-colors cursor-pointer">
                  <span className="flex items-center gap-2 text-slate-700 font-extrabold"><HelpCircle className="w-3.5 h-3.5 text-slate-700" /> Learn More</span>
                  <span className="text-slate-300 group-hover:text-blue-600 transition-colors">›</span>
                </button>
              </div>
            </div>
          </div>

        </section>

        {/* 2. Structured Parameter Search Bar Section Matrix */}
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 2xl:px-10 mt-12 relative z-30">
          <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-300 p-5 space-y-5">

            {/* Tab Controls Selector Toggle */}
            <div className="flex gap-6 border-b border-slate-300 pb-2 text-xs font-bold text-slate-400">
              <button className="text-[#0066FF] border-b-2 border-[#0066FF] pb-2.5 px-1 flex items-center gap-2">
                Buy
              </button>
              <button className="hover:text-slate-600 pb-2.5 px-1 flex items-center gap-2 transition-colors">
                Rent
              </button>
              <button className="hover:text-slate-600 pb-2.5 px-1 flex items-center gap-2 transition-colors">
                Invest
              </button>
            </div>

            {/* Grid Selection Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
              <div className="lg:col-span-3">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">What are you looking for?</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Apartment, House, Land..."
                    className="w-full bg-slate-300/60 border border-slate-300/40 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 font-medium transition-colors"
                  />
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Select Country</label>
                <div className="relative">
                  <select className="w-full bg-slate-300/60 border border-slate-300/40 rounded-xl p-3 pr-8 text-xs text-slate-600 font-bold focus:outline-none appearance-none cursor-pointer">
                    <option>Any Country</option>
                    <option>Sri Lanka</option>
                    <option>Japan</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Select City</label>
                <div className="relative">
                  <select className="w-full bg-slate-300/60 border border-slate-300/40 rounded-xl p-3 pr-8 text-xs text-slate-600 font-bold focus:outline-none appearance-none cursor-pointer">
                    <option>Any City</option>
                    <option>Colombo</option>
                    <option>Tokyo</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Property Type</label>
                <div className="relative">
                  <select className="w-full bg-slate-300/60 border border-slate-300/40 rounded-xl p-3 pr-8 text-xs text-slate-600 font-bold focus:outline-none appearance-none cursor-pointer">
                    <option>All Types</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Budget Range</label>
                <div className="relative">
                  <select className="w-full bg-slate-300/60 border border-slate-300/40 rounded-xl p-3 pr-8 text-xs text-slate-600 font-bold focus:outline-none appearance-none cursor-pointer">
                    <option>Any Budget</option>
                    <option>$100k - $500k</option>
                    <option>$500k - $2M</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-1">
                <button className="w-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs h-[42px] rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer">
                  <Search className="w-3.5 h-3.5" strokeWidth={2.5} />
                  <span>Search</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}