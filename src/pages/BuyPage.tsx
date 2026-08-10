import { useState } from 'react';
import {
    ChevronDown,
    Heart,
    Search,
    SlidersHorizontal,
    Grid,
    TrendingUp,
    Home,
    List,
    MapPin,
    Bed,
    KeyRound,
    Bath,
    Maximize2,
    ChevronLeft,
    ChevronRight,
    ShieldCheck,
    Lock,
    Globe,
    UserCheck
} from 'lucide-react';

// Import decoupled mock structures
import { PROPERTIES_DATA, POPULAR_SEARCHES, PROPERTY_TYPES_MOCK, MORE_FEATURES_MOCK } from '../config/buyMock';

export function BuyPage() {
    const [activeSearchTab, setActiveSearchTab] = useState<'buy' | 'rent' | 'invest'>('buy');
    const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

    return (
        <div className="w-full bg-[#FAFCFF] min-h-screen font-sans text-slate-800 antialiased">
            {/* HERO REGION CONTROLLER BLOCK */}
            <section className="w-full bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FF] to-[#FAFCFF] pt-4 pb-12 px-4 lg:px-12 2xl:px-16 relative overflow-hidden">

                <div className="absolute inset-x-0 bottom-0 top-0 z-0 flex items-end justify-center pointer-events-none select-none">
                    <img
                        src="buyPageHero.png"
                        alt="Skyline Backdrop"
                        className="w-full max-w-[1400px] h-[200px] object-contain object-bottom opacity-40 mix-blend-multiply md:mb-[200px]"
                    />
                </div>

                <div className="w-full max-w-[1920px] mx-auto relative z-10 2xl:px-8 3xl:px-12">

                    {/* Breadcrumbs Layout */}
                    <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 py-2">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3 text-slate-300" />
                        <span className="text-slate-600 font-bold">Buy</span>
                    </div>

                    {/* Hero Title Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2 relative">
                        <div className="lg:col-span-8 space-y-2">
                            <h1 className="text-3xl sm:text-4xl font-black text-[#0C1E3E] tracking-tight">Buy Properties</h1>
                            <p className="text-slate-500 text-sm font-medium">Find your perfect property from verified listings worldwide.</p>
                        </div>
                    </div>

                    {/* Main Interface Wrapper with Precise Bird Overlap from image_c7dbff.jpg */}
                    <div className="relative mt-20 sm:mt-6">

                        {/* Bird Mascot Container floating directly on top of the search card border */}
                        <div className="absolute right-2 md:right-12 top-[-115px] sm:top-[-80px] flex items-center gap-1 sm:gap-3 z-20 pointer-events-none scale-85 sm:scale-100 origin-right">

                            {/* Mascot Bird Image Asset Wrapper */}
                            <div className="w-36 h-36 md:w-48 md:h-48 relative shrink-0 pointer-events-auto left-4 sm:left-7 mt-[-20px] sm:mt-[-50px]">
                                <img
                                    src="BlueBirdBuyPage.png"
                                    alt="Seahome Mascot Hero Asset"
                                    className="w-full h-full object-contain object-bottom"
                                />
                            </div>

                            {/* The Chat Bubble: Placed to the right of the bird, arrow pointing left */}
                            <div className="bg-white text-slate-800 shadow-md border border-slate-100/90 rounded-2xl p-3.5 max-w-[170px] sm:max-w-[195px] relative pointer-events-auto left-1 sm:left-2 mt-[-50px] sm:mt-[-90px]">
                                <span className="font-bold text-[#0C1E3E] text-xs block mb-0.5">Hi! I'm <span className="text-[#0066FF]">Sora </span> 👋</span>
                                <p className="text-[11px] font-medium leading-tight text-slate-500">I'll help you find the perfect property.</p>

                                {/* Pointing triangle facing left toward the mascot */}
                                <div className="absolute top-[70%] -left-1 w-2.5 h-2.5 bg-white border-l border-b border-slate-300/90 rotate-20"></div>
                            </div>

                        </div>

                        {/* Central Search Card Hub */}
                        <div className="bg-white border border-slate-300 shadow-xl shadow-blue-900/25 rounded-2xl p-4 sm:p-5 space-y-4 relative z-10">

                            {/* Active Operations Tabs Row */}
                            <div className="flex items-center gap-2 border-b border-slate-300 pb-3 overflow-x-auto no-scrollbar">
                                <button
                                    onClick={() => setActiveSearchTab?.('buy')}
                                    className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${activeSearchTab === 'buy' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    <Home className="w-3.5 h-3.5" /> Buy
                                </button>
                                <button
                                    onClick={() => setActiveSearchTab?.('rent')}
                                    className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${activeSearchTab === 'rent' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    <KeyRound className="w-3.5 h-3.5" /> Rent
                                </button>
                                <button
                                    onClick={() => setActiveSearchTab?.('invest')}
                                    className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${activeSearchTab === 'invest' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    <TrendingUp className="w-3.5 h-3.5" /> Invest
                                </button>
                            </div>

                            {/* Multi-tier Dropdown Filter System Input Fields Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end text-xs">

                                {/* Where input section */}
                                <div className="sm:col-span-2 lg:col-span-3 space-y-1.5">
                                    <label className="font-bold text-slate-400 block px-0.5">Where</label>
                                    <input
                                        type="text"
                                        placeholder="Country, City, or Location"
                                        className="w-full border border-slate-300 rounded-xl p-3 focus:outline-hidden focus:border-blue-500 font-medium placeholder:text-slate-300 h-[44px] bg-white"
                                    />
                                </div>

                                {/* Property Type selection mapped with PROPERTY_TYPES_MOCK */}
                                <div className="lg:col-span-2 space-y-1.5">
                                    <label className="font-bold text-slate-400 block px-0.5">Property Type</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none border border-slate-300 rounded-xl p-3 pr-8 focus:outline-hidden font-bold text-slate-600 bg-white h-[44px]">
                                            <option>All Types</option>
                                            {PROPERTY_TYPES_MOCK.map((type, idx) => (
                                                <option key={idx} value={type.label.toLowerCase()}>
                                                    {type.label} ({type.count})
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Price Range box section */}
                                <div className="lg:col-span-2 space-y-1.5">
                                    <label className="font-bold text-slate-400 block px-0.5">Price Range</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none border border-slate-300 rounded-xl p-3 pr-8 focus:outline-hidden font-bold text-slate-600 bg-white h-[44px]">
                                            <option>Any Price</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Bedrooms selector */}
                                <div className="lg:col-span-2 space-y-1.5">
                                    <label className="font-bold text-slate-400 block px-0.5">Bedrooms</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none border border-slate-300 rounded-xl p-3 pr-8 focus:outline-hidden font-bold text-slate-600 bg-white h-[44px]">
                                            <option>Any</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Action Buttons Section */}
                                <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 sm:pt-0">
                                    <button className="flex items-center justify-center gap-1.5 border border-slate-300 text-slate-600 font-bold p-3 rounded-xl hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer h-[44px] sm:min-w-[110px]">
                                        <SlidersHorizontal className="w-3.5 h-3.5" /> More Filters
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold p-3 rounded-xl shadow-xs transition-all cursor-pointer h-[44px] whitespace-nowrap px-4">
                                        <Search className="w-4 h-4 flex-shrink-0" />
                                        Search properties
                                    </button>
                                </div>
                            </div>

                            {/* Popular Searches footer tags mapped with POPULAR_SEARCHES mock data array */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 text-[11px] border-t border-slate-300">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-slate-400 font-bold">Popular Searches:</span>
                                    {POPULAR_SEARCHES.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-slate-300 hover:bg-slate-300/80 text-slate-500 font-semibold px-2.5 py-1 rounded-md cursor-pointer transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-slate-500 hover:text-[#0066FF] font-bold border border-slate-300 rounded-lg px-3 py-2 sm:py-1 bg-white cursor-pointer transition-colors">
                                    <Heart className="w-3 h-3 text-slate-400" /> Save Search
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* MAIN TWO-COLUMN CONTENT REGION */}
            <main className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 lg:px-12 2xl:px-16 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COLUMN: FILTERS INTERACTION SIDEBAR MATRIX */}
                <aside className="lg:col-span-3 bg-white border border-slate-300 rounded-2xl p-5 space-y-6 shadow-2xs self-start">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-300">
                        <h2 className="text-sm font-black text-[#0C1E3E] uppercase tracking-wider">Filters</h2>
                        <button className="text-xs font-bold text-[#0066FF] hover:underline cursor-pointer">Reset All</button>
                    </div>

                    <div className="space-y-3 pb-4 border-b border-slate-300">
                        <div className="flex justify-between items-center text-xs font-black text-slate-700 uppercase tracking-wide">
                            <span>Location</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="space-y-2 text-xs">
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Country</label>
                                <div className="relative">
                                    <select className="w-full appearance-none border border-slate-300 rounded-lg p-2.5 pr-8 focus:outline-hidden font-semibold text-slate-600 bg-white">
                                        <option>All Countries</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">City</label>
                                <input type="text" placeholder="Any City or Location" className="w-full border border-slate-300 rounded-lg p-2.5 text-slate-600 placeholder:text-slate-300 font-medium focus:outline-hidden focus:border-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pb-4 border-b border-slate-300">
                        <div className="flex justify-between items-center text-xs font-black text-slate-700 uppercase tracking-wide">
                            <span>Property Type</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="space-y-2 text-xs font-bold text-slate-500">
                            {PROPERTY_TYPES_MOCK.map((item, idx) => (
                                <label key={idx} className="flex items-center justify-between cursor-pointer group">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded-sm border-slate-300 text-[#0066FF] focus:ring-[#0066FF] w-3.5 h-3.5" />
                                        <span className="group-hover:text-slate-800 transition-colors">{item.label}</span>
                                    </div>
                                    <span className="text-[10.5px] text-slate-400 font-mono font-medium">{item.count}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3 pb-4 border-b border-slate-300">
                        <div className="flex justify-between items-center text-xs font-black text-slate-700 uppercase tracking-wide">
                            <span>Price Range</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="space-y-4">
                            <div className="h-1 bg-slate-300 rounded-full relative mx-1 mt-2">
                                <div className="absolute left-[15%] right-[20%] h-full bg-[#0066FF]"></div>
                                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-[#0066FF] rounded-full shadow-xs cursor-pointer"></div>
                                <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-[#0066FF] rounded-full shadow-xs cursor-pointer"></div>
                            </div>
                            <div className="flex justify-between items-center text-[10.5px] font-bold text-slate-400">
                                <span>$0</span>
                                <span>$5,000,000+</span>
                            </div>
                            <div className="text-xs">
                                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Currency</label>
                                <div className="relative">
                                    <select className="w-full appearance-none border border-slate-300 rounded-lg p-2.5 pr-8 focus:outline-hidden font-black text-slate-700 bg-white">
                                        <option>USD</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pb-4 border-b border-slate-300">
                        <div className="flex justify-between items-center text-xs font-black text-slate-700 uppercase tracking-wide">
                            <span>Bedrooms</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="grid grid-cols-6 gap-1 text-[11px] font-bold text-center">
                            {['Any', '1+', '2+', '3+', '4+', '5+'].map((opt, i) => (
                                <button key={i} className={`py-1.5 rounded-md border border-slate-300 cursor-pointer transition-colors ${i === 0 ? 'bg-[#0066FF] text-white border-[#0066FF]' : 'bg-slate-50 hover:bg-slate-300 text-slate-600'}`}>{opt}</button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3 pb-4 border-b border-slate-300">
                        <div className="flex justify-between items-center text-xs font-black text-slate-700 uppercase tracking-wide">
                            <span>Bathrooms</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="grid grid-cols-6 gap-1 text-[11px] font-bold text-center">
                            {['Any', '1+', '2+', '3+', '4+', '5+'].map((opt, i) => (
                                <button key={i} className={`py-1.5 rounded-md border border-slate-300 cursor-pointer transition-colors ${i === 0 ? 'bg-[#0066FF] text-white border-[#0066FF]' : 'bg-slate-50 hover:bg-slate-300 text-slate-600'}`}>{opt}</button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3 pb-4 border-b border-slate-300">
                        <div className="flex justify-between items-center text-xs font-black text-slate-700 uppercase tracking-wide">
                            <span>Property Size</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder="Min Size" className="border border-slate-300 rounded-lg p-2.5 focus:outline-hidden font-medium" />
                                <div className="relative">
                                    <select className="w-full appearance-none border border-slate-300 rounded-lg p-2.5 pr-6 focus:outline-hidden font-bold bg-white text-slate-500">
                                        <option>sqft</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-3 pointer-events-none" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder="Max Size" className="border border-slate-300 rounded-lg p-2.5 focus:outline-hidden font-medium" />
                                <div className="relative">
                                    <select className="w-full appearance-none border border-slate-300 rounded-lg p-2.5 pr-6 focus:outline-hidden font-bold bg-white text-slate-500">
                                        <option>sqft</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-3 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs font-black text-slate-700 uppercase tracking-wide">
                            <span>More Features</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="space-y-2 text-xs font-bold text-slate-500">
                            {MORE_FEATURES_MOCK.map((feat, i) => (
                                <label key={i} className="flex items-center justify-between cursor-pointer group">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded-sm border-slate-300 text-[#0066FF] focus:ring-[#0066FF] w-3.5 h-3.5" />
                                        <span className="group-hover:text-slate-800 transition-colors">{feat.label}</span>
                                    </div>
                                    <span className="text-[10.5px] text-slate-400 font-mono font-medium">{feat.count}</span>
                                </label>
                            ))}
                        </div>
                        <button className="w-full text-center text-xs font-bold text-[#0066FF] hover:underline pt-2 cursor-pointer">Show More</button>
                    </div>
                </aside>

                {/* RIGHT COLUMN: SEARCH RESULT LISTINGS FEED MATRIX */}
                <section className="lg:col-span-9 space-y-6">

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-slate-300 rounded-xl p-3 shadow-2xs">
                        <div className="text-sm font-black text-[#0C1E3E]">
                            12,540 <span className="text-slate-400 font-bold ml-0.5">Properties Found</span>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto text-xs justify-between sm:justify-end">
                            <div className="flex items-center gap-1.5">
                                <span className="text-slate-400 font-bold whitespace-nowrap">Sort by:</span>
                                <div className="relative">
                                    <select className="appearance-none border border-slate-300 rounded-lg py-1.5 pl-3 pr-8 focus:outline-hidden font-bold bg-white text-slate-700">
                                        <option>Newest First</option>
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
                                </div>
                            </div>
                            <div className="flex items-center gap-1 border-l border-slate-300 pl-3">
                                <button onClick={() => setViewType('grid')} className={`p-2 rounded-lg cursor-pointer ${viewType === 'grid' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:bg-slate-50'}`}>
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button onClick={() => setViewType('list')} className={`p-2 rounded-lg cursor-pointer ${viewType === 'list' ? 'bg-[#0066FF] text-white' : 'text-slate-400 hover:bg-slate-50'}`}>
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Core Properties Data integration mapping directly from decoupled source */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {PROPERTIES_DATA.map((prop) => (
                            <div key={prop.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-slate-400/60 transition-all group flex flex-col justify-between">
                                <div>
                                    <div className="h-44 bg-slate-300 relative overflow-hidden">
                                        <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />

                                        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
                                            {prop.badge && (
                                                <span className={`text-[9px] font-black tracking-wider px-2 py-0.5 rounded text-white uppercase shadow-xs ${prop.badge === 'FEATURED' ? 'bg-blue-600' : prop.badge === 'NEW' ? 'bg-emerald-500' : 'bg-rose-500'
                                                    }`}>
                                                    {prop.badge}
                                                </span>
                                            )}
                                            <span className="bg-sky-400/90 backdrop-blur-xs text-white text-[9px] font-black px-2 py-0.5 rounded tracking-wide uppercase">{prop.type}</span>
                                        </div>

                                        {prop.discount && (
                                            <span className="absolute top-3 right-12 bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm shadow-xs z-10">{prop.discount}</span>
                                        )}

                                        <button className="absolute top-3 right-3 z-10 w-7 h-7 bg-white/90 backdrop-blur-xs text-slate-400 hover:text-rose-500 rounded-full flex items-center justify-center shadow-xs transition-colors cursor-pointer">
                                            <Heart className="w-3.5 h-3.5" />
                                        </button>
                                    </div>

                                    <div className="p-4 space-y-1.5">
                                        <h3 className="font-black text-slate-800 text-sm group-hover:text-[#0066FF] transition-colors truncate">{prop.title}</h3>
                                        <p className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" /> {prop.location}
                                        </p>

                                        <div className="pt-1 flex items-baseline gap-1.5">
                                            <span className="text-sm font-black text-slate-900">{prop.price}</span>
                                            {prop.discount && <span className="text-[10px] text-slate-400 font-medium line-through font-mono">$850,000 USD</span>}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-[10.5px] font-bold text-slate-500 border-t border-slate-50">
                                            {prop.specs.beds && (
                                                <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-slate-400" /> {prop.specs.beds} Beds</span>
                                            )}
                                            {prop.specs.baths && (
                                                <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-slate-400" /> {prop.specs.baths} Baths</span>
                                            )}
                                            <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-slate-400" /> {prop.specs.size}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 pt-0">
                                    <div className="flex items-center justify-between pt-2 border-t border-slate-300 text-[11px]">
                                        <div className="flex items-center gap-2 truncate">
                                            <div className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center font-bold text-[9px] text-[#0066FF] border border-blue-50 shrink-0 uppercase">
                                                {prop.agency.name.substring(0, 2)}
                                            </div>
                                            <div className="truncate">
                                                <span className="font-bold text-slate-700 block truncate leading-tight">{prop.agency.name}</span>
                                                <span className="text-[9px] font-semibold text-emerald-500 uppercase tracking-wide">Verified Agency</span>
                                            </div>
                                        </div>
                                        <span className="text-[10.5px] font-black text-amber-500 font-mono shrink-0">★ {prop.agency.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-300 text-xs">
                        <div className="flex items-center gap-1 font-bold text-slate-500">
                            <button className="p-2 border border-slate-300 rounded-lg hover:bg-slate-150 cursor-pointer text-slate-300"><ChevronLeft className="w-3.5 h-3.5" /></button>
                            <button className="w-8 h-8 rounded-lg bg-[#0066FF] text-white font-black cursor-pointer">1</button>
                            <button className="w-8 h-8 rounded-lg border border-slate-300 hover:bg-slate-150 cursor-pointer">2</button>
                            <button className="w-8 h-8 rounded-lg border border-slate-300 hover:bg-slate-50 cursor-pointer">3</button>
                            <span className="px-1 text-slate-300 font-medium">...</span>
                            <button className="w-8 h-8 rounded-lg border border-slate-300 hover:bg-slate-150 cursor-pointer">417</button>
                            <button className="p-2 border border-slate-300 rounded-lg hover:bg-slate-150 cursor-pointer"><ChevronRight className="w-3.5 h-3.5" /></button>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400 font-bold">
                            <span>Show:</span>
                            <div className="relative">
                                <select className="appearance-none border border-slate-300 rounded-lg py-1.5 pl-3 pr-8 focus:outline-hidden font-black text-slate-700 bg-white">
                                    <option>12 per page</option>
                                </select>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                </section>
            </main>

            {/* TRUST AND VALUE PROPOSITIONS STRIP OVERVIEW */}
            <section className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 lg:px-12 2xl:px-16 py-8 mt-[-20px] sm:mt-[-60px] border-t border-slate-50">
                <div className="bg-white border border-slate-300 shadow-md shadow-blue-900/[0.01] rounded-2xl p-5 sm:p-6 relative overflow-hidden lg:overflow-visible">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pr-0 lg:pr-32 pb-24 lg:pb-0">

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-blue-50 text-[#0066FF] shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-800 text-xs uppercase tracking-wide">Verified Listings</h4>
                                <p className="text-[11px] leading-relaxed text-slate-400 font-medium">All properties are verified for your safety.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-blue-50 text-[#0066FF] shrink-0"><Lock className="w-5 h-5" /></div>
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-800 text-xs uppercase tracking-wide">Secure Transactions</h4>
                                <p className="text-[11px] leading-relaxed text-slate-400 font-medium">We ensure safe and secure transactions.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-blue-50 text-[#0066FF] shrink-0"><Globe className="w-5 h-5" /></div>
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-800 text-xs uppercase tracking-wide">Global Coverage</h4>
                                <p className="text-[11px] leading-relaxed text-slate-400 font-medium">Properties in 85+ countries worldwide.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-blue-50 text-[#0066FF] shrink-0"><UserCheck className="w-5 h-5" /></div>
                            <div className="space-y-0.5">
                                <h4 className="font-black text-slate-800 text-xs uppercase tracking-wide">Expert Support</h4>
                                <p className="text-[11px] leading-relaxed text-slate-400 font-medium">Get help from real estate experts 24/7.</p>
                            </div>
                        </div>

                    </div>

                    {/* MASCOT PLACEMENT 2 BOUNDING CONTAINER */}
                    <div className="flex absolute right-4 sm:right-6 lg:right-5 bottom-[-20px] sm:bottom-[-10px] lg:bottom-0 mb-0 lg:mb-[80px] w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 items-center justify-center z-20 pointer-events-none">
                        <img src="BlueBirdBuyPage.png" alt="Seahome Mascot Trust Footer Asset" className="w-full h-full object-contain object-bottom" />
                    </div>
                </div>
            </section>
        </div>
    );
}