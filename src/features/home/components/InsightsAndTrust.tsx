import { 
  Globe, 
  CheckSquare, 
  Search, 
  ShieldCheck, 
  Headphones, 
  ChevronLeft, 
  ChevronRight, 
  UserCheck, 
  MapPin, 
  Shield, 
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import { ChatBotPopup } from './ChatBotPopup';

export function InsightsAndTrust() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    /* TV Screen Optimization: Added max-w-[1920px] mx-auto wrapper box to lock layout cleanly on large TV screens */
    <div className="w-full bg-white py-12 space-y-16 overflow-hidden max-w-[1920px] 2xl:max-w-[1600px] mx-auto px-0 2xl:px-8 3xl:px-12">
      
      {/*  1. MARKET INSIGHTS & ANALYTICAL TRENDS PANELS LAYOUT*/}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto mt-0 lg:mt-[-40px] px-4 sm:px-6 2xl:px-10 space-y-6">
        <div>
          <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight">Market Insights & Trends</h2>
        </div>

        {/* 5-Column layout grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1: Overview */}
          <div className="bg-white border border-slate-300 p-5 rounded-2xl flex flex-col justify-between shadow-xs min-h-[220px] lg:min-h-auto">
            <div className="space-y-3">
              <h3 className="font-bold text-[#0F172A] text-lg leading-snug">
                Global Real Estate <br /> Market Overview
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                Stay updated with the latest trends, price changes, and investment hotspots.
              </p>
            </div>
            <button className="w-full mt-6 text-center border border-blue-500 text-blue-600 font-semibold text-xs py-2 px-4 rounded-xl bg-white hover:bg-blue-50/50 transition-colors">
              Read Full Report
            </button>
          </div>

          {/* Card 2: Price Index SVG Line Graph with Node Circles */}
          <div className="bg-white border border-slate-300 p-5 rounded-2xl shadow-xs flex flex-col justify-between min-h-[220px] lg:min-h-auto">
            <div>
              <h4 className="text-[12px] font-bold text-slate-700">Price Index (Global)</h4>
              <p className="text-emerald-500 text-[13px] font-semibold mt-1">
                ↑ 6.8% <span className="text-slate-400 font-normal ml-0.5">vs last quarter</span>
              </p>
            </div>
            
            <div className="h-24 w-full relative pt-2">
              <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Area under line */}
                <path d="M10,85 L40,78 L80,55 L120,64 L160,50 L200,62 L245,40 L285,15 L285,100 L10,100 Z" fill="url(#chart-grad)" />
                {/* Connected metric line */}
                <path d="M10,85 L40,78 L80,55 L120,64 L160,50 L200,62 L245,40 L285,15" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
                
                {/* Interactive Node Marker Circles */}
                <circle cx="10" cy="85" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="40" cy="78" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="80" cy="55" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="120" cy="64" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="160" cy="50" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="200" cy="62" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="245" cy="40" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="285" cy="15" r="3.5" fill="#fff" stroke="#3B82F6" strokeWidth="2" />

                <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12"/>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between text-[11px] font-normal text-slate-400 px-1 pt-1">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </div>

          {/* Card 3: Countries Ranking List */}
          <div className="bg-white border border-slate-300 p-5 rounded-2xl shadow-xs space-y-4 min-h-[220px] lg:min-h-auto flex flex-col justify-between lg:block">
            <div>
              <h4 className="text-[12px] font-bold text-slate-700">Top Performing Countries</h4>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">By Price Growth</p>
            </div>
            <div className="space-y-3.5 text-[12px] font-medium text-slate-600 pt-1 flex-1 lg:flex-none flex flex-col justify-center lg:block">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="text-sm shadow-xs rounded-xs">🇯🇵</span> Japan
                </span>
                <span className="text-blue-600 font-semibold">8.7%</span>
              </div>
              <div className="flex justify-between items-center mt-3.5 lg:mt-0">
                <span className="flex items-center gap-2">
                  <span className="text-sm shadow-xs rounded-xs">🇱🇰</span> Sri Lanka
                </span>
                <span className="text-blue-600 font-semibold">6.2%</span>
              </div>
              <div className="flex justify-between items-center mt-3.5 lg:mt-0">
                <span className="flex items-center gap-2">
                  <span className="text-sm shadow-xs rounded-xs">🇦🇪</span> UAE
                </span>
                <span className="text-blue-600 font-semibold">5.1%</span>
              </div>
            </div>
          </div>

          {/* Card 4: Circle Doughnut Chart Ring */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between min-h-[220px] lg:min-h-auto">
            <div className="space-y-1">
              <h4 className="text-[12px] font-bold text-slate-700">Most Searched Property Types</h4>
              <p className="text-[11px] text-slate-400">Trending searches across buyers and investors</p>
            </div>
            <div className="flex items-center justify-between gap-1 py-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0 rounded-full bg-slate-100/80 p-2">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E2E8F0" strokeWidth="3.8" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeDasharray="45 55" strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" strokeDasharray="30 70" strokeDashoffset="-45" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#64748B" strokeWidth="4" strokeLinecap="round" strokeDasharray="15 85" strokeDashoffset="-75" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 90" strokeDashoffset="-90" />
                </svg>
              </div>
              <div className="text-[11px] font-medium text-slate-500 space-y-1.5 w-full pl-2 sm:pl-3">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span> Apartments</span>
                  <span className="text-slate-700 font-semibold">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span> Houses</span>
                  <span className="text-slate-700 font-semibold">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-500 inline-block"></span> Land</span>
                  <span className="text-slate-700 font-semibold">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block"></span> Comm.</span>
                  <span className="text-slate-700 font-semibold">10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: SoraHome Image Card */}
          <div className="bg-white border border-slate-50 p-5 rounded-2xl shadow-xs min-h-[220px] lg:min-h-auto flex items-center justify-center relative">
            <style>{`
              @keyframes birdFloat {
                0% { transform: translateY(0px) rotate(-2deg); }
                50% { transform: translateY(-8px) rotate(2deg); }
                100% { transform: translateY(0px) rotate(-2deg); }
              }
              .bird-animation {
                animation: birdFloat 2.5s ease-in-out infinite;
                transform-origin: center bottom;
              }
            `}</style>

            <img
              src="/SoraHome.png"
              alt="SoraHome - AI Property Assistant"
              className="bird-animation w-full h-auto max-w-full object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 2. BRAND VALUE ARCHITECTURE & TESTIMONIAL COMPONENT */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 2xl:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        
        {/* Why Choose Assets Matrix Box Left Side */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Why Choose <span className="text-[#0066FF]">SeaHomeNet?</span>
            </h2>
            <p className="text-[13px] text-slate-500 mt-1.5 font-normal max-w-xl">
              A global platform designed to connect investors, buyers, and real estate agencies seamlessly.
            </p>
          </div>
          
          {/* Horizontal Lineup of Core Features */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
            <div className="space-y-2 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div className="w-10 h-10 rounded-full bg-blue-300/60 border border-blue-300 flex items-center justify-center text-[#0066FF]">
                <Globe size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-[12px] tracking-tight">Global Reach</h4>
              <p className="text-[11px] text-slate-400 leading-normal font-normal text-center sm:text-left">
                Access properties from 85+ countries.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div className="w-10 h-10 rounded-full bg-blue-300/60 border border-blue-300 flex items-center justify-center text-[#0066FF]">
                <CheckSquare size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-[12px] tracking-tight">Verified Listings</h4>
              <p className="text-[11px] text-slate-400 leading-normal font-normal text-center sm:text-left">
                All properties and agencies are verified.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div className="w-10 h-10 rounded-full bg-blue-300/60 border border-blue-300 flex items-center justify-center text-[#0066FF]">
                <Search size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-[12px] tracking-tight">Smart Search</h4>
              <p className="text-[11px] text-slate-400 leading-normal font-normal text-center sm:text-left">
                Advanced filters to find your perfect property.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div className="w-10 h-10 rounded-full bg-blue-300/60 border border-blue-300 flex items-center justify-center text-[#0066FF]">
                <ShieldCheck size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-[12px] tracking-tight">Secure Platform</h4>
              <p className="text-[11px] text-slate-400 leading-normal font-normal text-center sm:text-left">
                Safe and transparent transactions.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left flex flex-col items-center sm:items-start col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-full bg-blue-300/60 border border-blue-300 flex items-center justify-center text-[#0066FF]">
                <Headphones size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-[12px] tracking-tight">Expert Support</h4>
              <p className="text-[11px] text-slate-400 leading-normal font-normal text-center sm:text-left">
                Our team is here to help you 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Client Evaluation Testimonial Window Right Side */}
        <div className="lg:col-span-5 w-full bg-blue-50/10 border border-slate-300 rounded-2xl p-6 relative flex flex-col justify-between min-h-[170px]">
          <div className="flex gap-4 items-start">
            <span className="text-3xl text-blue-500 font-serif leading-none mt-1">“</span>
            <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
              SeaHomeNet made it so easy to find and invest in our dream property in Sri Lanka. Highly recommended!
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-300/60 mt-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-300 overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
                  alt="David Chen Avatar Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-[11px]">
                <p className="font-bold text-slate-900">David Chen</p>
                <p className="text-slate-400 font-normal">Investor, Singapore</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-0.5 text-blue-500 text-[10px]">
                ★★★★★
              </div>
              <div className="flex gap-1.5">
                <button className="w-6 h-6 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors">
                  <ChevronLeft size={13} />
                </button>
                <button className="w-6 h-6 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 3. HOW IT WORKS & DOWNLOAD MOBILE APP */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 2xl:px-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Grid Panel: How It Works Process Tracker Line */}
        <div className="lg:col-span-8 bg-white border border-slate-300 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">How It Works</h3>
          </div>
          
          <div className="relative flex flex-col sm:flex-row justify-between items-start gap-6 pb-2">
            {/* Horizontal Continuous Connective Rail Line */}
            <div className="hidden sm:block absolute top-5 left-[8%] right-[8%] h-[1px] bg-slate-400 z-0"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-2 flex-1 w-full sm:w-auto relative z-10" >
              <div className="w-11 h-11 rounded-full bg-white border border-slate-300 flex items-center justify-center text-blue-600 shadow-xs">
                <Search size={18} />
              </div>
              <h5 className="text-[12px] font-bold text-slate-800">Search</h5>
              <p className="text-[11px] text-slate-400 max-w-[150px] sm:max-w-[110px] leading-normal font-normal">Find properties or investment opportunities.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-2 flex-1 w-full sm:w-auto relative z-10">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-300 flex items-center justify-center text-blue-600 shadow-xs">
                <UserCheck size={18} />
              </div>
              <h5 className="text-[12px] font-bold text-slate-800">Connect</h5>
              <p className="text-[11px] text-slate-400 max-w-[150px] sm:max-w-[120px] leading-normal font-normal">Contact verified agencies or list your property.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-2 flex-1 w-full sm:w-auto relative z-10">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-300 flex items-center justify-center text-blue-600 shadow-xs">
                <MapPin size={18} />
              </div>
              <h5 className="text-[12px] font-bold text-slate-800">Visit & Decide</h5>
              <p className="text-[11px] text-slate-400 max-w-[150px] sm:max-w-[110px] leading-normal font-normal">Schedule a visit or get virtual tour.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-2 flex-1 w-full sm:w-auto relative z-10">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-300 flex items-center justify-center text-blue-600 shadow-xs">
                <Shield size={18} />
              </div>
              <h5 className="text-[12px] font-bold text-slate-800">Secure Deal</h5>
              <p className="text-[11px] text-slate-400 max-w-[150px] sm:max-w-[110px] leading-normal font-normal">Negotiate and close deals securely.</p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center space-y-2 flex-1 w-full sm:w-auto relative z-10">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-300 flex items-center justify-center text-blue-600 shadow-xs">
                <TrendingUp size={18} />
              </div>
              <h5 className="text-[12px] font-bold text-slate-800">Invest & Grow</h5>
              <p className="text-[11px] text-slate-400 max-w-[150px] sm:max-w-[120px] leading-normal font-normal">Enjoy returns on your real estate investment.</p>
            </div>
          </div>
        </div>

        {/* Right Grid Panel: App Promotion Callout Card */}
        <div className="lg:col-span-4 bg-[#03152B] rounded-2xl p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center lg:items-stretch relative overflow-hidden min-h-[220px] sm:min-h-[160px] shadow-xs">
          <div className="space-y-2.5 max-w-full sm:max-w-[160px] lg:max-w-[180px] z-10 flex flex-col justify-between h-full">
            <div className="space-y-2">
              <h4 className="text-base font-bold tracking-tight">Download Our App</h4>
              <p className="text-[11px] text-slate-400 font-normal leading-normal">
                Manage your properties and investments on the go.
              </p>
            </div>
            
            {/* Store Badges Row Layout */}
            <div className="flex flex-row sm:flex-col lg:flex-row gap-2 pt-4 sm:pt-1">
              <button className="bg-black hover:bg-slate-900 text-white py-1 px-2.5 rounded-md border border-slate-800 flex items-center gap-1.5 transition-colors text-[9px] font-medium tracking-tight whitespace-nowrap">
                <span className="text-sm"></span>
                <div className="text-left leading-none">
                  <span className="text-[7px] block text-slate-400">Download on the</span>App Store
                </div>
              </button>
              <button className="bg-black hover:bg-slate-900 text-white py-1 px-2.5 rounded-md border border-slate-800 flex items-center gap-1.5 transition-colors text-[9px] font-medium tracking-tight whitespace-nowrap">
                <span className="text-[10px]">▶</span>
                <div className="text-left leading-none">
                  <span className="text-[7px] block text-slate-400">GET IT ON</span>Google Play
                </div>
              </button>
            </div>
          </div>

          {/* Phone Frame Device Floating Mockup Cutout */}
          <div className="absolute right-4 sm:right-2 -bottom-8 w-[110px] sm:w-[125px] aspect-[1/2] bg-[#0A2240] border-[3px] border-slate-700/60 rounded-t-2xl shadow-xl p-1.5 flex flex-col space-y-1.5 z-0 lg:z-10">
            <div className="w-8 h-1 bg-slate-800 rounded-full mx-auto mb-0.5"></div>
            <div className="flex-1 bg-[#020B14] rounded-t-xl p-1.5 text-white text-[6px] space-y-1 overflow-hidden border border-slate-900">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1 text-[5px] text-slate-400">
                <span>SeaHome Live</span>
                <span>📶</span>
              </div>
              <div className="w-full aspect-video bg-slate-800 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=120" className="w-full h-full object-cover" />
                <span className="absolute bottom-0.5 left-1 text-[4.5px] font-bold text-white z-20">Skyline Residences</span>
              </div>
              <p className="text-[5px] text-slate-400 leading-tight">Tokyo, Japan</p>
              <div className="w-full h-2 bg-blue-600 rounded-xs flex items-center justify-center text-[4px] font-bold">View Asset</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUSTED PARTNERS REGISTRY HORIZONTAL STRIP */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 2xl:px-10 space-y-4 pt-2">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">Trusted by Top Real Estate Agencies Worldwide</h3>
        
        <div className="flex items-center justify-between border border-slate-300 rounded-xl p-5 bg-white/50 gap-4">
          <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-4 flex-1">
            <span className="text-xs font-black tracking-tighter text-slate-800 font-serif">CENTURY 21</span>
            <span className="text-xs font-black tracking-tight text-red-600 border border-red-500/30 px-1 py-0.5 rounded-sm">ERA <span className="text-[8px] text-slate-400 font-normal block tracking-normal">REAL ESTATE</span></span>
            <span className="text-xs font-bold tracking-tight text-emerald-600 flex items-center gap-1">🟢 LankaPropertyWeb</span>
            <span className="text-xs font-medium tracking-tight text-slate-900 sm:border-l sm:border-slate-300 sm:pl-4 font-mono">List | Sotheby's <span className="text-[8px] block text-slate-400 font-sans tracking-widest uppercase">International Realty</span></span>
            <span className="text-xs font-bold tracking-tight text-blue-900">🗄️ COLDWELL BANKER</span>
            <span className="text-xs font-extrabold tracking-widest text-[#0066FF]">RE/MAX</span>
            <span className="text-xs font-black tracking-tight text-teal-800">CBRE</span>
            <span className="text-[10px] font-bold tracking-wider text-slate-600">ENGEL & VÖLKERS</span>
          </div>

          <button className="w-7 h-7 rounded-full border border-slate-300 bg-white shadow-xs flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors shrink-0">
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* ChatBot Popup */}
      <ChatBotPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

    </div>
  );
}