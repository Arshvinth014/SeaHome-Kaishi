import { useState } from 'react';
import {
    ShieldCheck,
    MapPin,
    Search,
    SlidersHorizontal,
    Heart,
    Bed,
    Bath,
    Check,
    HelpCircle,
    Maximize2,
    ChevronRight,
    ArrowRight,
    TrendingUp,
    Users,
    Building2,
    Scale,
    Compass,
    Layers,
    MessageSquare,
    ChevronDown
} from 'lucide-react';
import { SRI_LANKA_PROPERTIES, SRI_LANKA_PROJECTS, TOP_LOCATIONS } from '../config/sriLankaData';
import { useNavigate } from 'react-router-dom';
export function CountryPage() {
    const [activeFilterTab, setActiveFilterTab] = useState<'buy' | 'rent' | 'invest'>('buy');
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">

            {/* HERO REGION CONTEXT CONTAINER */}
            <section className="relative w-full min-h-[520px] 2xl:min-h-[620px] bg-white overflow-hidden flex items-center py-6 sm:py-12 2xl:py-16 z-20 pointer-events-auto">

                {/* Full-width Background Image & Gradient Overlay (Visible on Desktop - Image 1 Design) */}
                <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none select-none">
                    <img
                        src="/CountryPagehero.png"
                        alt="Sri Lanka Country Hero Background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Soft white gradient fade overlay behind left side text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-45% to-transparent" />
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 z-10 relative flex flex-col justify-between h-full gap-8 max-w-[1800px] mx-auto">

                    {/* 1. Breadcrumb Navigation Path */}
                    <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 flex-wrap">
                        <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
                        <ChevronRight className="w-3 h-3 text-slate-300" />
                        <span className="hover:text-blue-600 cursor-pointer transition-colors">Countries</span>
                        <ChevronRight className="w-3 h-3 text-slate-300" />
                        <span className="text-[#0B1B3D]">Sri Lanka</span>
                    </div>

                    {/* 2. Content & Assistant Grid Context Frame */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 2xl:gap-10 items-center pt-0">

                        {/* Left Narrative Text Block */}
                        <div className="lg:col-span-5 space-y-6 z-20 text-center lg:text-left flex flex-col items-center lg:items-start">
                            <div className="space-y-4 w-full">
                                <h1 className="text-3xl sm:text-4xl md:text-[44px] 2xl:text-[56px] font-semibold text-[#0B1B3D] tracking-tight leading-tight lg:leading-none">
                                    Sri Lanka Properties
                                </h1>
                                <h2 className="text-base sm:text-lg 2xl:text-2xl font-black text-[#0B1B3D] tracking-tight">
                                    Invest in Paradise. Live the Potential.
                                </h2>
                            </div>
                            <p className="text-slate-500 text-[13px] 2xl:text-[15px] font-medium leading-relaxed max-w-lg">
                                Discover premium properties and high-potential real estate investment opportunities across Sri Lanka's most promising locations.
                            </p>

                            {/* Action Buttons Matrix */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-[#0066FF] hover:bg-blue-600 text-white font-black text-[12.5px] px-7 py-3.5 rounded-xl shadow-xs shadow-blue-500/10 transition-all cursor-pointer">
                                    Explore Properties
                                </button>
                                <button onClick={() => navigate('/sl-homepage')} className="w-full sm:w-auto border border-slate-300 bg-white hover:bg-slate-50 text-[#0066FF] font-black text-[12.5px] px-6 py-3.5 rounded-xl shadow-3xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                                    <Compass size={15} />
                                    Check Rental Properties
                                </button>
                            </div>
                        </div>

                        {/* Right Mascot & Floating Panel Layer Assembly */}
                        <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative h-full min-h-[220px] lg:min-h-[300px] z-10 w-full">

                            {/* Mascot Fixed Alignment Frame (Visible ONLY on Desktop, positioned left of speech card like Image 1) */}
                            <div className="hidden lg:block absolute right-[210px] xl:right-[250px] 2xl:right-[320px] w-[280px] xl:w-[350px] 2xl:w-[430px] z-20 pointer-events-none">
                                <img
                                    src="/jungleFowlHero.png"
                                    alt="Sri Lanka Welcome Character Assistant"
                                    className="w-full h-full object-contain select-none drop-shadow-md"
                                />
                            </div>

                            {/* Speech Prompt Card Framework Container */}
                            <div className="bg-white border border-slate-300/80 shadow-xl rounded-2xl p-5 2xl:p-6 w-full max-w-[280px] sm:max-w-[250px] 2xl:max-w-[320px] space-y-3 relative z-20 lg:mr-0 mx-auto lg:mx-0">
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[12px] font-black text-[#662211] tracking-tight">
                                            Ayubowan! I'm Junglefowl
                                        </span>
                                        <span className="text-xs select-none">🇱🇰</span>
                                    </div>

                                    <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                                        Your Sri Lanka real estate guide. I'll help you find the best properties and investment opportunities across our beautiful island.
                                    </p>
                                </div>

                                {/* Verified Criteria Indicators List */}
                                <div className="space-y-1.5 text-[11px] font-bold text-slate-600 pt-1">
                                    <p className="flex items-center gap-2 text-[#0066FF]">
                                        <Check size={12} strokeWidth={3} className="text-[#0066FF]" /> Local Market Expert
                                    </p>
                                    <p className="flex items-center gap-2 text-[#0066FF]">
                                        <Check size={12} strokeWidth={3} className="text-[#0066FF]" /> Verified Opportunities
                                    </p>
                                    <p className="flex items-center gap-2 text-[#0066FF]">
                                        <Check size={12} strokeWidth={3} className="text-[#0066FF]" /> Here to Assist You
                                    </p>
                                </div>

                                {/* Action Dropdown Trigger Button */}
                                <button className="w-full flex items-center justify-between bg-white border border-slate-300/80 text-[#0066FF] hover:bg-slate-50 font-black text-[10.5px] px-3 py-2 rounded-xl shadow-3xs transition-all mt-2 cursor-pointer">
                                    <span className="flex items-center gap-1.5">
                                        <HelpCircle size={13} className="text-[#0066FF]" />
                                        How I Can Help You
                                    </span>
                                    <ChevronDown size={12} className="text-slate-400" />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* 3. Bottom Row Indicators Row Container */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 pt-4 border-t border-slate-300/60 max-w-2xl z-20 w-full">

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-300 flex items-center justify-center text-[#0066FF] shrink-0">
                                <ShieldCheck size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-700 tracking-tight leading-none">Verified</span>
                                <span className="text-[10px] font-bold text-slate-400">Listings</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-300 flex items-center justify-center text-[#0066FF] shrink-0">
                                <Building2 size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-700 tracking-tight leading-none">Trusted</span>
                                <span className="text-[10px] font-bold text-slate-400">Agencies</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-300 flex items-center justify-center text-[#0066FF] shrink-0">
                                <ShieldCheck size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-700 tracking-tight leading-none">Secure</span>
                                <span className="text-[10px] font-bold text-slate-400">Transactions</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-300 flex items-center justify-center text-[#0066FF] shrink-0">
                                <MapPin size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-700 tracking-tight leading-none">Local</span>
                                <span className="text-[10px] font-bold text-slate-400">Expertise</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* SEARCH SYSTEM BAR COMPONENT */}
            <section className="relative z-30 max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 -mt-2">
                <div className="rounded-2xl border border-slate-300 bg-white p-4 sm:p-5 shadow-lg">

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2 border-b border-slate-300 pb-4">

                        <button
                            onClick={() => setActiveFilterTab('buy')}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${activeFilterTab === 'buy'
                                ? 'bg-[#0066FF] text-white'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            Buy
                        </button>

                        <button
                            onClick={() => setActiveFilterTab('rent')}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${activeFilterTab === 'rent'
                                ? 'bg-[#0066FF] text-white'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            Rent
                        </button>

                        <button
                            onClick={() => setActiveFilterTab('invest')}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${activeFilterTab === 'invest'
                                ? 'bg-[#0066FF] text-white'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            Invest
                        </button>

                    </div>

                    {/* Search Form */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mt-5">

                        {/* Location */}
                        <div className="lg:col-span-3">
                            <label className="block mb-2 text-xs font-bold text-slate-500">
                                Location
                            </label>

                            <input
                                type="text"
                                placeholder="City, Area or District"
                                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Property Type */}
                        <div className="lg:col-span-2">
                            <label className="block mb-2 text-xs font-bold text-slate-500">
                                Property Type
                            </label>

                            <div className="relative">

                                <select className="w-full h-12 appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>All Types</option>
                                </select>

                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            </div>
                        </div>

                        {/* Price */}
                        <div className="lg:col-span-2">
                            <label className="block mb-2 text-xs font-bold text-slate-500">
                                Price Range
                            </label>

                            <div className="relative">

                                <select className="w-full h-12 appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Any Price</option>
                                </select>

                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            </div>
                        </div>

                        {/* Bedrooms */}
                        <div className="lg:col-span-2">
                            <label className="block mb-2 text-xs font-bold text-slate-500">
                                Bedrooms
                            </label>

                            <div className="relative">

                                <select className="w-full h-12 appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Any</option>
                                </select>

                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            </div>
                        </div>

                        {/* More Button */}
                        <div className="lg:col-span-1 flex items-end">

                            <button className="w-full h-12 flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 cursor-pointer">
                                <SlidersHorizontal className="h-4 w-4" />
                                More
                            </button>

                        </div>

                        {/* Search Button */}
                        <div className="lg:col-span-2 flex items-end">

                            <button className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#0066FF] text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-700 cursor-pointer">
                                <Search className="h-4 w-4" />
                                Search
                            </button>

                        </div>

                    </div>

                </div>
            </section>

            {/* FEATURED PORTFOLIO GRID */}
            <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 2xl:px-10 py-16 space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Featured Properties in Sri Lanka</h3>
                    <button className="text-xs font-bold text-[#0066FF] flex items-center gap-1 hover:underline cursor-pointer">
                        View All Properties <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    {SRI_LANKA_PROPERTIES.map((prop) => (
                        <div key={prop.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group relative">
                            <button className="absolute top-2 right-2 z-10 w-7 h-7 bg-white/80 backdrop-blur-xs rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 shadow-2xs transition-colors cursor-pointer">
                                <Heart className="w-3.5 h-3.5" />
                            </button>
                            <div className="h-28 bg-slate-300 relative">
                                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                                <span className="absolute bottom-2 left-2 bg-[#0066FF] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider">{prop.badge}</span>
                            </div>
                            <div className="p-3 space-y-1">
                                <h4 className="font-black text-slate-900 text-xs truncate">{prop.title}</h4>
                                <p className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                                    <MapPin className="w-2.5 h-2.5 text-slate-300 shrink-0" /> {prop.location}
                                </p>
                                <p className="text-xs font-black text-[#0066FF] pt-1">{prop.price}</p>
                                <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2 text-[9px] text-slate-400 font-bold border-t border-slate-300">
                                    {prop.specs.map((spec, sIdx) => {
                                        const isBed = spec.includes('Beds');
                                        const isBath = spec.includes('Baths');
                                        return (
                                            <span key={sIdx} className="flex items-center gap-0.5">
                                                {isBed && <Bed className="w-2.5 h-2.5 text-slate-300" />}
                                                {isBath && <Bath className="w-2.5 h-2.5 text-slate-300" />}
                                                {!isBed && !isBath && <Maximize2 className="w-2.5 h-2.5 text-slate-300" />}
                                                {spec.replace(/[^\d\s\w+,.]/g, '')}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DEVELOPMENT INVESTMENT PROJECTS */}
            <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 2xl:px-10 py-4 space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Invest in Sri Lanka – Real Estate Projects</h3>
                    <button className="text-xs font-bold text-[#0066FF] flex items-center gap-1 hover:underline cursor-pointer">
                        View All Projects <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                    {SRI_LANKA_PROJECTS.map((proj) => (
                        <div key={proj.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
                            <div>
                                <div className="h-32 bg-slate-300 relative">
                                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                                    {proj.isFeatured && (
                                        <span className="absolute top-2 left-2 bg-amber-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Featured</span>
                                    )}
                                </div>
                                <div className="p-4 space-y-1">
                                    <h4 className="font-black text-slate-900 text-sm">{proj.title}</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">{proj.location} • {proj.type}</p>
                                </div>
                            </div>
                            <div className="p-4 pt-0 space-y-3">
                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-300 text-[10.5px]">
                                    <div>
                                        <span className="text-[9px] font-bold text-slate-400 block uppercase">Expected ROI</span>
                                        <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                                            <TrendingUp className="w-3 h-3" /> {proj.roi}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[9px] font-bold text-slate-400 block uppercase">Min. Investment</span>
                                        <span className="text-slate-800 font-bold">{proj.minInvestment}</span>
                                    </div>
                                </div>
                                <button className="w-full text-center bg-blue-50 hover:bg-blue-100 text-[#0066FF] font-bold text-[11px] py-2 rounded-xl transition-colors cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TOP REGIONAL LOCATIONS SECTION */}
            <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 2xl:px-10 py-16 space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Top Locations in Sri Lanka</h3>
                    <button className="text-xs font-bold text-[#0066FF] flex items-center gap-1 hover:underline cursor-pointer">
                        Explore All Areas <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {TOP_LOCATIONS.map((loc, i) => (
                        <div key={i} className="bg-slate-200 rounded-2xl overflow-hidden border border-slate-300/60 p-2 flex flex-col gap-2 shadow-2xs hover:bg-slate-200/50 transition-colors cursor-pointer">
                            <div className="h-20 rounded-xl bg-slate-300 overflow-hidden">
                                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="px-1 text-[11px]">
                                <h4 className="font-black text-slate-900">{loc.name}</h4>
                                <p className="text-[9.5px] text-slate-400 font-medium truncate">{loc.tag}</p>
                                <p className="text-[10px] font-bold text-[#0066FF] mt-1">Avg. {loc.avgPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REAL ESTATE MARKET INSIGHTS MATRIX */}
            <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 2xl:px-10 py-4">
                <div className="bg-slate-200 border border-slate-200/50 rounded-3xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    <div className="lg:col-span-5 space-y-5">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Sri Lanka Real Estate Market Overview</h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                            A growing market with high potential returns for local and international investors seeking geographic portfolio diversification.
                        </p>
                        <ul className="space-y-2 text-xs font-bold text-slate-500">
                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#0066FF] shrink-0" /> Strong tourism growth and infrastructure development</li>
                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#0066FF] shrink-0" /> Government incentives for foreign investors</li>
                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#0066FF] shrink-0" /> High rental yields in prime commercial locations</li>
                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#0066FF] shrink-0" /> Growing demand for residential and luxury spaces</li>
                        </ul>
                        <button className="bg-white border border-slate-300 text-[#0066FF] hover:bg-slate-50 font-bold text-xs px-5 py-3 rounded-xl shadow-2xs transition-all cursor-pointer">
                            View Full Market Report
                        </button>
                    </div>

                    <div className="lg:col-span-3 flex justify-center items-center bg-white rounded-2xl p-4 border border-slate-50">
                        <div className="w-full aspect-[1/1.2] relative max-w-[200px] opacity-80 flex items-center justify-center text-slate-50 font-black text-3xl select-none">
                            {/* <Globe className="w-24 h-24 stroke-1 text-slate-200" /> */}
                            <img
                                src="/SLMap.PNG"
                                alt="Sri Lanka Geographic Investment Hotspots Map"
                                className="w-full h-full object-contain mix-blend-multiply"
                            />
                            <span className="absolute top-[10%] left-[35%] text-[9px] text-slate-900 font-bold bg-white px-1.5 py-0.5 shadow-2xs rounded-md">Jaffna</span>
                            <span className="absolute top-[65%] left-[10%] text-[9px] text-slate-900 font-bold bg-white px-1.5 py-0.5 shadow-2xs rounded-md">Colombo</span>
                            <span className="absolute bottom-[5%] left-[35%] text-[9px] text-slate-900 font-bold bg-white px-1.5 py-0.5 shadow-2xs rounded-md">Galle</span>
                        </div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-300 p-4 rounded-xl shadow-2xs">
                            <span className="text-lg font-black text-[#0066FF] block">8.5%</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Average ROI</span>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl shadow-2xs">
                            <span className="text-lg font-black text-[#0066FF] block">6.3%</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tourism Growth</span>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl shadow-2xs">
                            <span className="text-lg font-black text-[#0066FF] block">$2.8B+</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">FDI in Real Estate</span>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl shadow-2xs">
                            <span className="text-lg font-black text-[#0066FF] block">150K+</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Foreign Investors</span>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl shadow-2xs col-span-2 flex items-center justify-between">
                            <div>
                                <span className="text-lg font-black text-[#0066FF] block">25+</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mega Projects in Development</span>
                            </div>
                            <span className="bg-emerald-50 text-emerald-600 font-black text-[10px] px-2 py-1 rounded-md uppercase">Tier-1</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* WHY INVEST SECTION */}
            <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 2xl:px-10 py-16 space-y-8 relative">
                <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        Why Invest in Sri Lanka with <span className="text-[#0066FF]">SeaHomeNet?</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="bg-white border border-slate-300 p-4 rounded-xl space-y-2">
                            <Compass className="w-5 h-5 text-[#0066FF]" />
                            <h4 className="font-black text-xs text-slate-900">Local Expertise</h4>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">In-depth localized knowledge of the regulatory real estate market.</p>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl space-y-2">
                            <ShieldCheck className="w-5 h-5 text-[#0066FF]" />
                            <h4 className="font-black text-xs text-slate-900">Verified Properties</h4>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">All active database listing profiles undergo rigorous ownership audits.</p>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl space-y-2">
                            <Users className="w-5 h-5 text-[#0066FF]" />
                            <h4 className="font-black text-xs text-slate-900">End-to-End Support</h4>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">From portfolio analysis selection patterns through settlement escrow logs.</p>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl space-y-2">
                            <Scale className="w-5 h-5 text-[#0066FF]" />
                            <h4 className="font-black text-xs text-slate-900">Legal Assistance</h4>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Direct channels guiding cross-border compliance parameters properly.</p>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl space-y-2">
                            <TrendingUp className="w-5 h-5 text-[#0066FF]" />
                            <h4 className="font-black text-xs text-slate-900">High ROI Potential</h4>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Attractive growth vectors mapped accurately onto verified opportunities.</p>
                        </div>
                        <div className="bg-white border border-slate-300 p-4 rounded-xl space-y-2">
                            <Layers className="w-5 h-5 text-[#0066FF]" />
                            <h4 className="font-black text-xs text-slate-900">Secure & Transparent</h4>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Fully audited infrastructure keeping asset management processing clear.</p>
                        </div>
                    </div>

                    {/* Character Callout Vector Block */}
                    <div className="lg:col-span-4 bg-blue-50/50 border border-blue-300/40 rounded-2xl p-4 flex items-center justify-between gap-4">
                        <div className="w-[220px] h-[220px] shrink-0 border border-blue-300/40 overflow-hidden bg-white rounded-xl shadow-2xs">
                            <img
                                src="/jungleFowl.png"
                                alt="Assistant Dialogue Target Mascot"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="space-y-2 flex-1">
                            <p className="text-[11px] font-black text-slate-900 leading-tight">Got questions?</p>
                            <p className="text-[10px] text-slate-500 font-medium leading-normal">
                                I'm here to help you find the perfect investment in Sri Lanka!
                            </p>
                            <button className="bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-[9.5px] px-3 py-1.5 rounded-lg transition-colors shadow-xs w-full text-center flex items-center justify-center gap-1 cursor-pointer">
                                <MessageSquare className="w-3 h-3" /> Chat with Junglefowl
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT INVESTORS SAY TESTIMONIAL CARDS */}
            <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 2xl:px-10 py-4 space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">What Investors Say</h3>
                    <button className="text-xs font-bold text-[#0066FF] flex items-center gap-1 hover:underline cursor-pointer">
                        View All Reviews <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: 'Michael T.', origin: 'Investor, Australia', quote: 'SeaHomeNet made investing in Sri Lanka so easy. The team was professional and the returns have been excellent!' },
                        { name: 'Priya S.', origin: 'Investor, Singapore', quote: 'Found a great villa in Galle through SeaHomeNet. The process was smooth, secure, and transparent throughout.' },
                        { name: 'James L.', origin: 'Investor, UK', quote: 'Highly recommended platform for anyone looking to enter the Sri Lankan real estate market with full confidence.' }
                    ].map((testi, tIdx) => (
                        <div key={tIdx} className="bg-white border border-slate-300 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-2xs">
                            <blockquote>
                                <p className="text-xs font-medium text-slate-500 italic leading-relaxed">
                                    "{testi.quote}"
                                </p>
                            </blockquote>
                            <div className="flex items-center justify-between pt-3 border-t border-slate-300">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden text-center text-[10px] flex items-center justify-center font-bold text-slate-400">
                                        USR
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black text-slate-900">{testi.name}</h4>
                                        <p className="text-[9.5px] font-semibold text-slate-400">{testi.origin}</p>
                                    </div>
                                </div>
                                <div className="text-amber-400 text-[10px] font-bold tracking-xs">★★★★★</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* INSTITUTIONAL TRUSTED AGENCIES GRID */}
            <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 2xl:px-10 py-16 space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-sm font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-600" /> Trusted Real Estate Agencies in Sri Lanka
                    </h3>
                    <button className="text-xs font-bold text-[#0066FF] hover:underline cursor-pointer">View All Agencies →</button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
                    {['LankaPropertyWeb', 'ACQUEST', 'John Keells', 'RE/MAX Sri Lanka', 'CENTURY 21', 'CBRE Sri Lanka'].map((brand, bIdx) => (
                        <div key={bIdx} className="border border-slate-400 rounded-xl p-3.5 text-center text-xs font-black tracking-tight text-slate-400 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:text-slate-600 transition-all cursor-pointer">
                            {brand}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}