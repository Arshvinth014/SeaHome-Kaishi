import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Compass,
    ShieldCheck,
    Users,
    FileText,
    TrendingUp,
    Lock,
    ChevronLeft,
    ChevronRight,
    Star,
    Search,
    SlidersHorizontal,
    Heart,
    Building2,
    CheckCircle2,
    Check,
    ChevronDown,
    HelpCircle,
    MapPin,
    Bath,
    BedDouble,
    Ruler,
    MessageSquare
} from 'lucide-react';

import {
    FEATURED_PROPERTIES,
    INVESTMENT_PROJECTS,
    TOP_LOCATIONS,
    CORE_VALUES,
    TESTIMONIALS,
    AGENCY_PARTNERS
} from '../config/JapanRentalPage';

export function JapanRentalPage() {
    const [activeFilterTab, setActiveFilterTab] = useState<'buy' | 'rent' | 'invest'>('buy');
    const navigate = useNavigate();

    const renderIcon = (name: string, className: string = "w-5 h-5 text-blue-600") => {
        switch (name) {
            case 'Compass': return <Compass className={className} />;
            case 'ShieldCheck': return <ShieldCheck className={className} />;
            case 'Users': return <Users className={className} />;
            case 'FileText': return <FileText className={className} />;
            case 'TrendingUp': return <TrendingUp className={className} />;
            case 'Lock': return <Lock className={className} />;
            default: return <Compass className={className} />;
        }
    };

    return (
        <div className="w-full bg-[#FAFCFF] text-slate-800 antialiased font-sans">

            {/* HERO REGION CONTEXT CONTAINER */}
            <section className="relative w-full min-h-[520px] lg:min-h-[620px] bg-white overflow-hidden flex items-center z-20 pointer-events-auto 2xl:py-16">

                <div className="hidden lg:block absolute inset-0 z-0">
                    <img
                        src="/JapanHeroPage.png"
                        alt=""
                        className="w-full h-full object-cover object-center 2xl:object-right select-none"
                    />
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 py-8 lg:py-0 max-w-[1800px] mx-auto z-10 relative flex flex-col justify-between h-full gap-8">

                    {/* Content & Assistant Grid Context Frame */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center pt-0 lg:pt-0">

                        {/* Left Narrative Text Block (First on mobile via order-1, first on desktop via lg:order-1) */}
                        <div className="order-1 lg:order-1 lg:col-span-5 space-y-6 lg:space-y-10 z-20">
                            {/* Breadcrumb Navigation Path */}
                            <div className="text-[11px] font-bold text-slate-400 flex flex-wrap items-center gap-1.5 lg:mb-30 lg:mt-[-70px]">
                                <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
                                <ChevronRight className="w-3 h-3 text-slate-300" />
                                <span className="hover:text-blue-600 cursor-pointer transition-colors">Countries</span>
                                <ChevronRight className="w-3 h-3 text-slate-300" />
                                <span className="text-[#0B1B3D]">Japan-</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-[44px] font-semibold text-[#0B1B3D] lg:mt-[5px] tracking-tight leading-tight lg:leading-none">
                                    Japan Properties
                                </h1>
                                <h2 className="text-lg font-black text-[#0B1B3D] tracking-tight">
                                    Invest in Innovation.<br />Live in Harmony.
                                </h2>
                            </div>
                            <p className="text-slate-500 text-[13px] font-medium leading-relaxed max-w-lg">
                                Discover premium properties and high-potential real estate investment opportunities across Japan's most dynamic locations.
                            </p>

                            {/* Action Buttons Matrix */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <button className="bg-[#0066FF] hover:bg-blue-600 text-white font-black text-[12.5px] px-7 py-3.5 rounded-xl shadow-xs shadow-blue-500/10 transition-all cursor-pointer text-center">
                                    Explore Properties
                                </button>
                                <button
                                    onClick={() => navigate('/seahome-real-estates')}
                                    className="border border-slate-300 bg-white hover:bg-slate-50 text-[#0066FF] font-black text-[12.5px] px-6 py-3.5 rounded-xl shadow-3xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                                >
                                    <Compass size={15} />
                                    Check Rental Properties
                                </button>
                            </div>
                        </div>

                        {/* Right Mascot & Floating Panel Layer Assembly (Second on mobile via order-2, second on desktop via lg:order-2) */}
                        <div className="order-2 lg:order-2 lg:col-span-7 flex items-center justify-center lg:justify-end relative h-full min-h-[320px] lg:min-h-[400px] z-10">

                            {/* Speech Prompt Card Framework Container */}
                            <div className="bg-white/90 backdrop-blur-sm border border-slate-300/80 shadow-xl rounded-2xl p-5 w-full max-w-[280px] sm:max-w-[250px] h-[320px] sm:h-[300px] flex flex-col justify-between relative z-20 lg:mr-[50px]">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[12px] font-black text-[#662211] tracking-tight">
                                            Kon'nichiwa! I'm Pheasan.
                                        </span>
                                        <span className="text-xs select-none"> 🇯🇵</span>
                                    </div>

                                    <div className="space-y-1.5">
                                        <h4 className="font-bold text-slate-700 text-xs">Your Japan Property Guide.</h4>
                                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                            I'll help you find the best properties and investment opportunities in Japan.
                                        </p>
                                    </div>

                                    {/* Verified Criteria Indicators List */}
                                    <div className="space-y-2.5 text-[11px] font-bold text-slate-600 pt-2">
                                        <p className="flex items-center gap-2 text-[#0066FF]">
                                            <Check size={12} strokeWidth={3} /> Local Market Expert
                                        </p>
                                        <p className="flex items-center gap-2 text-[#0066FF]">
                                            <Check size={12} strokeWidth={3} /> Verified Opportunities
                                        </p>
                                        <p className="flex items-center gap-2 text-[#0066FF]">
                                            <Check size={12} strokeWidth={3} /> Here to Assist You
                                        </p>
                                    </div>
                                </div>

                                {/* Action Dropdown Trigger Button */}
                                <button className="w-full flex items-center justify-between bg-white border border-slate-400/80 text-[#0066FF] hover:bg-slate-50 font-black text-[10.5px] px-3 py-2 rounded-xl shadow-3xs transition-all cursor-pointer">
                                    <span className="flex items-center gap-1.5">
                                        <HelpCircle size={13} />
                                        How I Can Help You
                                    </span>
                                    <ChevronDown size={12} className="text-slate-400" />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* 3. Bottom Row Indicators Row Container */}
                    <div className="w-full flex flex-wrap items-center gap-6 sm:gap-7 pt-6 lg:pb-20 border-t border-slate-200/60 max-w-none lg:max-w-none z-20">

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-600 flex items-center justify-center text-[#0066FF] shrink-0">
                                <ShieldCheck size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-900 tracking-tight leading-none">Verified</span>
                                <span className="text-[10px] font-bold text-slate-800">Listings</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-600 flex items-center justify-center text-[#0066FF] shrink-0">
                                <Building2 size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-900 tracking-tight leading-none">Trusted</span>
                                <span className="text-[10px] font-bold text-slate-800">Agencies</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-600 flex items-center justify-center text-[#0066FF] shrink-0">
                                <ShieldCheck size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-900 tracking-tight leading-none">Secure</span>
                                <span className="text-[10px] font-bold text-slate-800">Transactions</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="w-9 h-9 rounded-full bg-blue-50/50 border border-blue-600 flex items-center justify-center text-[#0066FF] shrink-0">
                                <MapPin size={13} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-black text-slate-900 tracking-tight leading-none">Local</span>
                                <span className="text-[10px] font-bold text-slate-800">Expertise</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* SEARCH SYSTEM BAR COMPONENT */}
            <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 -mt-6 relative z-30">
                <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-4 space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-300 pb-3">
                        <button
                            onClick={() => setActiveFilterTab('buy')}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFilterTab === 'buy' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:text-slate-700'}`}
                        >
                            Buy
                        </button>
                        <button
                            onClick={() => setActiveFilterTab('rent')}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFilterTab === 'rent' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:text-slate-700'}`}
                        >
                            Rent
                        </button>
                        <button
                            onClick={() => setActiveFilterTab('invest')}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFilterTab === 'invest' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:text-slate-700'}`}
                        >
                            Invest
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end text-xs">
                        <div className="lg:col-span-3 space-y-1.5">
                            <label className="font-bold text-slate-400 block">Location</label>
                            <input type="text" placeholder="City, Area or District" className="w-full border border-slate-300 rounded-xl p-3 focus:outline-hidden focus:border-blue-500 font-medium" />
                        </div>
                        <div className="lg:col-span-2 space-y-1.5">
                            <label className="font-bold text-slate-400 block">Property Type</label>
                            <div className="relative">
                                <select className="w-full appearance-none border border-slate-300 rounded-xl p-3 pr-8 focus:outline-hidden text-slate-600 font-medium bg-white">
                                    <option>All Types</option>
                                </select>
                                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-1.5">
                            <label className="font-bold text-slate-400 block">Price Range</label>
                            <div className="relative">
                                <select className="w-full appearance-none border border-slate-300 rounded-xl p-3 pr-8 focus:outline-hidden text-slate-600 font-medium bg-white">
                                    <option>Any Price</option>
                                </select>
                                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-1.5">
                            <label className="font-bold text-slate-400 block">Bedrooms</label>
                            <div className="relative">
                                <select className="w-full appearance-none border border-slate-300 rounded-xl p-3 pr-8 focus:outline-hidden text-slate-600 font-medium bg-white">
                                    <option>Any</option>
                                </select>
                                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <button className="w-full flex items-center justify-center gap-1.5 border border-slate-300 text-slate-600 font-bold p-3 rounded-xl hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer">
                                <SlidersHorizontal className="w-3.5 h-3.5" /> More
                            </button>
                        </div>
                        <div className="lg:col-span-2">
                            <button className="w-full flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold p-3 rounded-xl shadow-xs transition-all cursor-pointer">
                                <Search className="w-4 h-4" /> Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FEATURED PROPERTIES CONSOLE (WITH HORIZONTAL BADGES) */}
            <section className="w-full py-16 px-4 lg:px-12 max-w-[1400px] mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">Featured Properties in Japan</h2>
                    <button className="text-[#0066FF] font-bold text-xs flex items-center gap-0.5 hover:underline">
                        View All Properties <ChevronRight size={14} />
                    </button>
                </div>

                <div className="relative">
                    {/* Navigation Control Knobs */}
                    <button className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-700 z-10 transition-colors">
                        <ChevronLeft size={16} />
                    </button>
                    <button className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-700 z-10 transition-colors">
                        <ChevronRight size={16} />
                    </button>

                    {/* Grid Stream mapping */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                        {FEATURED_PROPERTIES.map((prop) => (
                            <div key={prop.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col">
                                <div className="w-full h-32 bg-slate-300 relative overflow-hidden">
                                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                                    <button className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-xs">
                                        <Heart size={12} />
                                    </button>
                                    <span className="absolute bottom-2.5 left-2.5 bg-[#0066FF] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider">
                                        {prop.type}
                                    </span>
                                </div>
                                <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
                                    <div className="space-y-0.5">
                                        <h3 className="font-extrabold text-[#0C1E3E] text-xs truncate group-hover:text-[#0066FF] transition-colors">{prop.title}</h3>
                                        <p className="text-[10px] text-slate-400 font-semibold">{prop.location}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs font-black text-[#0C1E3E] block">{prop.price}</span>
                                        <div className="grid grid-cols-3 gap-1 border-t border-slate-300 pt-2 text-[9px] font-bold text-slate-400">
                                            <div><BedDouble size={11} className="text-slate-600 shrink-0" />  {prop.beds}</div>
                                            <div><Bath size={11} className="text-slate-600 shrink-0" /> {prop.baths}</div>
                                            <div><Ruler size={11} className="text-slate-600 shrink-0" /> {prop.area}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. HIGH POTENTIAL INVESTMENT PROJECTS */}
            <section className="w-full py-16 px-4 lg:px-12 2xl:px-10 bg-slate-300/50 border-y border-slate-300/80">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">Invest in Japan – High Potential Projects</h2>
                        <button className="text-[#0066FF] font-bold text-xs flex items-center gap-0.5 hover:underline">
                            View All Projects <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {INVESTMENT_PROJECTS.map((proj) => (
                            <div key={proj.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between">
                                <div>
                                    <div className="w-full h-36 bg-slate-300 relative overflow-hidden">
                                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                                        <span className="absolute bottom-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider">
                                            {proj.tag}
                                        </span>
                                    </div>
                                    <div className="p-4 space-y-1">
                                        <h3 className="font-extrabold text-[#0C1E3E] text-xs leading-snug group-hover:text-[#0066FF] transition-colors">{proj.title}</h3>
                                        <p className="text-[10px] text-slate-400 font-semibold">{proj.location}</p>
                                    </div>
                                </div>

                                <div className="p-4 pt-0 space-y-3">
                                    <div className="grid grid-cols-2 gap-2 border-t border-slate-300 pt-2.5 text-[9px] font-bold">
                                        <div>
                                            <span className="text-slate-400 block font-normal">Expected ROI</span>
                                            <span className="text-emerald-600 text-xs font-black">{proj.expectedRoi}</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-400 block font-normal">Min. Investment</span>
                                            <span className="text-[#0C1E3E] text-xs font-black">{proj.minInvestment}</span>
                                        </div>
                                    </div>
                                    <button className="w-full text-center text-[#0066FF] hover:underline font-extrabold text-[11px] pt-1">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TOP LOCATIONS REGIONAL MAP MATRIX */}
            <section className="w-full py-16 px-4 lg:px-12 max-w-[1400px] mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">Top Locations in Japan</h2>
                    <button className="text-[#0066FF] font-bold text-xs flex items-center gap-0.5 hover:underline">
                        Explore All Locations <ChevronRight size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    {TOP_LOCATIONS.map((loc) => (
                        <div key={loc.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group relative h-40 flex flex-col justify-end">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors z-10" />
                            <img src={loc.image} alt={loc.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />

                            <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent relative z-20 w-full text-white space-y-1">
                                <h3 className="font-black text-sm tracking-wide">{loc.name}</h3>
                                <p className="text-[9px] text-slate-300 font-medium line-clamp-1">{loc.description}</p>
                                <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[9px] font-bold">
                                    <span className="text-slate-400 font-normal">Avg. Price</span>
                                    <span className="text-blue-400 font-black">{loc.avgPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. JAPAN REAL ESTATE MARKET INSIGHTS SECTION */}
            <section className="w-full py-12 px-4 lg:px-12 2xl:px-10 bg-[#FAFCFF]">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0C1E3E] tracking-tight">
                            Japan Real Estate Market Insights
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                        <div className="lg:col-span-7 bg-white border border-slate-300 rounded-2xl shadow-[0_10px_30px_rgba(0,102,255,0.015)] p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

                            {/* Left Narrative Frame */}
                            <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="font-extrabold text-sm text-[#0C1E3E]">Market Overview</h3>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                        Japan's real estate market continues to show stability and growth, driven by urban development, tourism, and foreign investment.
                                    </p>
                                    <ul className="text-[11px] text-[#0C1E3E] font-bold space-y-2.5 pt-1">
                                        <li className="flex items-start gap-2 leading-tight">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>Steady price growth in major cities</span>
                                        </li>
                                        <li className="flex items-start gap-2 leading-tight">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>High rental demand in urban areas</span>
                                        </li>
                                        <li className="flex items-start gap-2 leading-tight">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>Strong infrastructure & safe environment</span>
                                        </li>
                                        <li className="flex items-start gap-2 leading-tight">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>Attractive opportunities for overseas investors</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <button className="text-xs font-bold text-[#0066FF] border border-slate-300/80 px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors">
                                        View Full Market Report
                                    </button>
                                </div>
                            </div>

                            {/* Right Graph Segment Inner Box */}
                            <div className="md:col-span-7 flex flex-col justify-between space-y-4 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-slate-300 pt-4 md:pt-0">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-extrabold text-xs text-[#0C1E3E]">Property Price Index (2020-2024)</h4>
                                        <p className="text-[10px] text-slate-400 font-bold">Japan Residential Price Index</p>
                                    </div>
                                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-black px-2 py-1 rounded-lg text-center leading-tight">
                                        +18.6%
                                        <span className="font-medium block text-[8px] text-slate-400 mt-0.5">vs 2020</span>
                                    </span>
                                </div>

                                {/* Line Chart Simulator */}
                                <div className="pt-6 pb-2 h-40 relative flex items-end justify-between px-2 border-b border-l border-slate-300/70">
                                    <div className="absolute inset-x-0 top-1/4 border-t border-slate-300/50 border-dashed" />
                                    <div className="absolute inset-x-0 top-2/4 border-t border-slate-300/50 border-dashed" />
                                    <div className="absolute inset-x-0 top-3/4 border-t border-slate-300/50 border-dashed" />

                                    {[30, 48, 62, 78, 100].map((val, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-2 z-10 w-12 relative">
                                            <div className="w-2.5 bg-blue-600 rounded-full transition-all duration-500 relative" style={{ height: `${val / 1.2}px` }}>
                                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-black text-blue-600">
                                                    {100 + (idx * 6)}
                                                </div>
                                            </div>
                                            <span className="text-[9px] font-bold text-slate-400 absolute -bottom-5">{2020 + idx}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 grid grid-cols-2 gap-4 items-stretch">
                            {/* Box 1: Avg Rental Yield */}
                            <div className="bg-white border border-slate-300 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.008)] flex flex-col justify-center space-y-1">
                                <span className="text-xl font-black text-[#0066FF] leading-none">4.2%</span>
                                <span className="text-[11px] font-extrabold text-[#0C1E3E] block">Avg. Rental Yield</span>
                                <span className="text-[10px] font-medium text-slate-400 block">(2024)</span>
                            </div>

                            {/* Box 2: Price Growth */}
                            <div className="bg-white border border-slate-300 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.008)] flex flex-col justify-center space-y-1">
                                <span className="text-xl font-black text-[#0066FF] leading-none">2.8%</span>
                                <span className="text-[11px] font-extrabold text-[#0C1E3E] block">Price Growth</span>
                                <span className="text-[10px] font-medium text-slate-400 block">(YoY)</span>
                            </div>

                            {/* Box 3: Foreign Investment */}
                            <div className="bg-white border border-slate-300 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.008)] flex flex-col justify-center space-y-1">
                                <span className="text-xl font-black text-[#0066FF] leading-none">¥2.5T+</span>
                                <span className="text-[11px] font-extrabold text-[#0C1E3E] block">Foreign Investment</span>
                                <span className="text-[10px] font-medium text-slate-400 block">(2024)</span>
                            </div>

                            {/* Box 4: Overseas Visitors */}
                            <div className="bg-white border border-slate-300 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.008)] flex flex-col justify-center space-y-1">
                                <span className="text-xl font-black text-[#0066FF] leading-none">1.5M+</span>
                                <span className="text-[11px] font-extrabold text-[#0C1E3E] block">Overseas Visitors</span>
                                <span className="text-[10px] font-medium text-slate-400 block">(2024)</span>
                            </div>
                        </div>

                        {/* COLUMN 3 : SEPARATE ANIMAL MASCOT COMPONENT (Takes 2/12 cols) */}
                        <div className="lg:col-span-2 bg-white border border-slate-300 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,102,255,0.01)] flex flex-col justify-between items-center text-center relative overflow-visible min-h-[220px] lg:min-h-0">
                            {/* Mascot Image Container */}
                            <div className="w-40 h-45 relative z-40 flex items-center justify-center z-20">
                                <img
                                    src="/JapanAnimalFooter.png"
                                    alt="SeaHome Assistant Bird Mascot"
                                    className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.05)] scale-110 z-10 pointer-events-none select-none"
                                />
                            </div>

                            {/* Message Block */}
                            <div className="space-y-1 mt-2">
                                <h5 className="text-[11px] font-black text-[#0C1E3E] leading-tight">
                                    Looking for the right investment in Japan?
                                </h5>
                                <p className="text-[10px] font-bold text-slate-400 leading-tight">
                                    I'm here to help you find the best deals.
                                </p>
                            </div>

                            {/* Action CTA Button */}
                            <button className="w-full bg-[#107C41] hover:bg-[#0b592e] text-white text-[10px] font-black py-2.5 px-3 rounded-xl transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5 mt-3">
                                <MessageSquare className="w-3 h-3" />
                                <span>Chat with Pheasant</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. WHY INVEST IN JAPAN WITH SEAHOMENET */}
            <section className="w-full py-16 px-4 lg:px-12 2xl:px-10 max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-8">
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Why Invest in Japan with <span className="text-[#0066FF]">SeaHomeNet?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
                    {CORE_VALUES.map((val) => (
                        <div key={val.id} className="bg-white border border-slate-300 p-5 rounded-2xl shadow-3xs space-y-3 flex flex-col justify-between items-start">
                            <div className="space-y-3 w-full">
                                <div className="w-9 h-9 rounded-xl bg-blue-50/80 flex items-center justify-center">
                                    {renderIcon(val.iconName)}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-extrabold text-xs text-[#0C1E3E] leading-snug">{val.title}</h4>
                                    <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. WHAT OUR INVESTORS SAY (TESTIMONIAL MATRIX) */}
            <section className="w-full py-16 px-4 lg:px-12 2xl:px-10 bg-slate-300/40 border-t border-slate-300">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">What Our Investors Say</h2>
                        <button className="text-[#0066FF] font-bold text-xs flex items-center gap-0.5 hover:underline">
                            View All Reviews <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((test) => (
                            <div key={test.id} className="bg-white border border-slate-300 p-5 rounded-2xl shadow-2xs flex flex-col justify-between space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-0.5 text-amber-400">
                                        {[...Array(test.rating)].map((_, i) => (
                                            <Star key={i} size={12} className="fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium italic leading-relaxed">
                                        "{test.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-t border-slate-200 pt-3.5">
                                    <img src={test.avatar} alt={test.name} className="w-8 h-8 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-extrabold text-xs text-[#0C1E3E]">{test.name}</h4>
                                        <span className="text-[10px] text-slate-400 font-semibold block">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. TRUSTED REAL ESTATE AGENCIES STRIP */}
            <section className="w-full py-12 px-4 lg:px-12 2xl:px-10 max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-black uppercase tracking-wider text-slate-400">Trusted Real Estate Agencies in Japan</h2>
                    <button className="text-[#0066FF] font-bold text-xs flex items-center gap-0.5 hover:underline">
                        View All Agencies <ChevronRight size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {AGENCY_PARTNERS.map((partner) => (
                        <div key={partner.id} className="bg-white border border-slate-400 px-4 py-4 rounded-xl flex items-center justify-center text-center shadow-3xs">
                            <span className="text-xs font-extrabold text-slate-400 tracking-tight block uppercase">{partner.logoText}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full px-4 lg:px-12 2xl:px-10 pb-16 max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
                <div className="bg-gradient-to-r from-[#0C1E3E] to-[#16366B] rounded-3xl px-6 lg:px-10 py-8 md:pt-20 md:pb-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 md:h-[150px] relative overflow-visible shadow-md">

                    {/* Mascot */}
                    <div className="absolute left-8 -top-10 hidden md:block z-30">
                        <img
                            src="/JapanAnimal.png"
                            alt="Mascot Helper"
                            className="w-44 h-44 object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                        />
                    </div>

                    {/* Narrative text block wrapper */}
                    <div className="space-y-2 md:pl-48 relative z-20 flex-1 text-center md:text-left">
                        <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                            Stay Updated with Japan Real Estate Opportunities
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto md:mx-0">
                            Subscribe to our newsletter and get the latest property listings and market insights directly inside your inbox.
                        </p>
                    </div>

                    {/* Form Interactive Context Area */}
                    <div className="w-full md:w-auto relative z-20">
                        <form
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:max-w-md"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-xs font-medium text-white placeholder-slate-400 focus:outline-hidden focus:border-white/30 md:min-w-[240px]"
                            />

                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </section>

        </div>
    );
}