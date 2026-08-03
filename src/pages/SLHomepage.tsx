import { useState } from 'react';
import {
  Search, MapPin, Building2, ShieldCheck,
  ThumbsUp, ChevronLeft, ChevronRight, Heart, Eye,
  Home, Utensils, Building, LifeBuoy, Star, Mail, ArrowRight,
  ChevronDown, Check,
  Maximize2,
  Bed,
  Bath,
  HelpCircle
} from 'lucide-react';
import {
  propertyCategories, featuredProperties, moreServices, testimonials, popularLocations, POPULAR_SEARCHES
} from '../config/SLHomepage';

const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Home': return <Home className={className} />;
    case 'Utensils': return <Utensils className={className} />;
    case 'Building': return <Building className={className} />;
    case 'LifeBuoy': return <LifeBuoy className={className} />;
    default: return <Home className={className} />;
  }
};

export function SLHomepage() {
  const [activeTab, setActiveTab] = useState<'rent' | 'restaurants' | 'hotels'>('rent');

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 font-sans">

      {/* HERO SECTION */}
      <section className="relative min-h-[530px] lg:h-[530px] w-full flex items-center justify-center overflow-hidden py-10 lg:py-0 px-4 lg:px-16 bg-slate-50">

        {/* 1. Base Sea Coast Backdrop Layer (Visible only on Desktop for clean mobile reading layout) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <img
            src="SLHubHero.png"
            alt="Sri Lanka Coastline Backdrop"
            className="w-full h-full object-cover object-center pointer-events-none select-none bg-slate-100"
          />
          {/* Transparent overlay tint matching the web layout view */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.3px]" />
        </div>

        {/* Main Content Layout Container */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-4 items-center lg:items-end relative z-10 pt-4 lg:pt-6">

          {/* LEFT COMPONENT COLUMN: Heading Stack & Search Panel */}
          <div className="col-span-1 lg:col-span-9 space-y-6 flex flex-col justify-end">

            {/* Hero text headers styling block */}
            <div className="space-y-3 max-w-2xl text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0B1D3A] tracking-tight leading-[1.15]">
                Sri Lanka's Home <br />
                <span className="text-[#0066FF]">Rental & Real Estate Hub</span>
              </h1>
              <p className="text-slate-600 lg:text-slate-500 text-sm font-semibold max-w-xl leading-relaxed">
                Find the best rental properties, list your property, discover <br className="hidden sm:inline" /> restaurants, and book hotels for your special moments.
              </p>
            </div>

            {/* Badges strip bar container */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="flex items-center gap-1.5 bg-white/90 lg:bg-white/85 backdrop-blur-xs px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-700 shadow-xs border border-slate-300/40">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" /> 100% Verified Listings
              </span>
              <span className="flex items-center gap-1.5 bg-white/90 lg:bg-white/85 backdrop-blur-xs px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-700 shadow-xs border border-slate-300/40">
                <ThumbsUp className="w-3.5 h-3.5 text-[#0066FF]" /> Trusted by Sri Lankans
              </span>
              <span className="flex items-center gap-1.5 bg-white/90 lg:bg-white/85 backdrop-blur-xs px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-700 shadow-xs border border-slate-300/40">
                <Search className="w-3.5 h-3.5 text-[#0066FF]" /> Easy & Secure
              </span>
            </div>

            {/* Input Interface Control Box Wrapper */}
            <div className="relative mt-2 max-w-[1080px] w-full pt-[44px] lg:pt-[44px]">

              {/* Context Navigation Tabs positioned floating directly on the card boundary */}
              <div className="flex items-center gap-1 absolute top-[0px] left-0 z-20 w-full overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab('rent')}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 rounded-t-xl text-xs font-bold transition-all h-[44px] cursor-pointer whitespace-nowrap ${activeTab === 'rent'
                    ? 'bg-white text-[#0066FF] border-t border-x border-slate-300/50 shadow-[0_-4px_12px_rgba(0,0,0,0.01)]'
                    : 'bg-white/75 hover:bg-white text-slate-600'
                    }`}
                >
                  <Building2 className="w-3.5 h-3.5" /> Rent
                </button>
                <button
                  onClick={() => setActiveTab('restaurants')}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 rounded-t-xl text-xs font-bold transition-all h-[44px] cursor-pointer whitespace-nowrap ${activeTab === 'restaurants'
                    ? 'bg-white text-[#0066FF] border-t border-x border-slate-300/50 shadow-[0_-4px_12px_rgba(0,0,0,0.01)]'
                    : 'bg-white/75 hover:bg-white text-slate-600'
                    }`}
                >
                  <Utensils className="w-3.5 h-3.5" /> Restaurants
                </button>
                <button
                  onClick={() => setActiveTab('hotels')}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 rounded-t-xl text-xs font-bold transition-all h-[44px] cursor-pointer whitespace-nowrap ${activeTab === 'hotels'
                    ? 'bg-white text-[#0066FF] border-t border-x border-slate-300/50 shadow-[0_-4px_12px_rgba(0,0,0,0.01)]'
                    : 'bg-white/75 hover:bg-white text-slate-600'
                    }`}
                >
                  <Building2 className="w-3.5 h-3.5" /> Hotels for Functions
                </button>
              </div>

              {/* Central Filter Dashboard Interface Segment Box */}
              <div className="bg-white border border-slate-200/80 lg:border-slate-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.05)] rounded-b-2xl rounded-tr-2xl p-5 space-y-4 relative z-10">

                {/* Filter System Input Fields Form Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end text-xs">

                  {/* Search Target String Input */}
                  <div className="lg:col-span-4 flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700 px-0.5 text-[11px]">What are you looking for?</label>
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-[14px] pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Ex: Apartment, House, Room..."
                        className="w-full border border-slate-300/90 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 font-medium text-slate-700 placeholder:text-slate-400 bg-white h-[44px]"
                      />
                    </div>
                  </div>

                  {/* City/Location Input */}
                  <div className="lg:col-span-3 flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700 px-0.5 text-[11px]">Location</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-[14px] pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Any City or Area"
                        className="w-full border border-slate-300/90 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 font-medium text-slate-700 placeholder:text-slate-400 bg-white h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Property Type Dropdown Selector */}
                  <div className="lg:col-span-2 flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700 px-0.5 text-[11px]">Property Type</label>
                    <div className="relative">
                      <select className="w-full appearance-none border border-slate-300/90 rounded-xl p-3 pr-8 focus:outline-none font-bold text-slate-600 bg-white h-[44px]">
                        <option>Any Type</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Budget Limit Option Selector */}
                  <div className="lg:col-span-3 flex flex-col gap-1.5">
                    <label className="font-bold text-slate-700 px-0.5 text-[11px]">Budget</label>
                    <div className="relative">
                      <select className="w-full appearance-none border border-slate-300/90 rounded-xl p-3 pr-8 focus:outline-none font-bold text-slate-600 bg-white h-[44px]">
                        <option>Any Budget</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Dynamic tag array looping from popular search parameters */}
                <div className="flex flex-wrap items-center gap-2 pt-6 text-[11px] border-t border-slate-200">
                  <span className="text-slate-500 font-bold">Popular Searches:</span>
                  {POPULAR_SEARCHES.map((term: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-[#EDF4FF] hover:bg-blue-100 text-[#0066FF] font-semibold px-2.5 py-1 rounded-md cursor-pointer transition-colors"
                    >
                      {term}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT COMPONENT COLUMN: Mascot & Ayubowan floating card container (Hidden completely on mobile) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col items-end justify-end h-full relative min-h-[360px] pb-1">

            {/* 2. Isolated Mascot Layer overlapping between the containers */}
            <div className="absolute left-[-230px] lg:left-[-190px] bottom-[159px] w-60 h-60 lg:w-[320px] lg:h-[320px] z-20 pointer-events-none">
              <img
                src="JungleFowlBird.png"
                alt="Sri Lankan Junglefowl Character Asset"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
              />
            </div>

            {/* Ayubowan text box overlay segment aligned flush to right grid edge column border layout */}
            <div className="bg-white text-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.05)] border border-slate-100 rounded-2xl p-5 w-[250px] max-w-[250px] lg:max-w-[290px] flex flex-col justify-between h-[350px] relative z-10 pointer-events-auto mb-[90px] right-6.5">

              <div className="space-y-3">
                <div className="space-y-0.5">
                  <span className="font-extrabold text-[#0C1E3E] text-[13px] block">Ayubowan!</span>
                  <span className="font-extrabold text-[#0C1E3E] text-[13px] flex items-center gap-1">
                    I'm Junglefowl    🐓
                  </span>
                </div>

                <p className="text-[12px] font-bold leading-relaxed text-slate-400 mb-5">
                  Welcome to <span className="font-extrabold text-slate-500">SeaHomeNet.co.lk</span><br />I'm here to help you find the perfect rental property or list your property with ease.
                </p>

                <ul className="text-[11px] text-slate-600 space-y-1.5 font-bold pt-1.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#0066FF] stroke-[3.5]" /> List Your Property
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#0066FF] stroke-[3.5]" /> Find Rentals
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#0066FF] stroke-[3.5]" /> Trusted Support
                  </li>
                </ul>
              </div>

              {/* Support button element component interface */}
              <button className="w-full bg-[#F4F8FF] hover:bg-[#EBF3FF] text-[#0066FF] text-xs font-bold py-2 rounded-xl border border-blue-300/70 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
                <HelpCircle className="w-3.5 h-3.5 text-[#0066FF]" /> How Can I Help You?
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* QUICK ACTIONS RIBBON */}
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto mt-10 relative z-20 px-6 2xl:px-10">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-300 p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            { label: 'Rent Properties', sub: 'With Easy Search', icon: <Search className="w-5 h-5 text-blue-600" /> },
            { label: 'List Your Property', sub: 'Free & Quick', icon: <Home className="w-5 h-5 text-blue-600" /> },
            { label: 'Verified Listings', sub: '100% Trusted', icon: <ShieldCheck className="w-5 h-5 text-blue-600" /> },
            { label: 'Find Restaurants', sub: 'Best in Sri Lanka', icon: <Utensils className="w-5 h-5 text-blue-600" /> },
            { label: 'Hotels for Functions', sub: 'Weddings & Events', icon: <Building className="w-5 h-5 text-blue-600" /> },
            { label: 'Property Support', sub: "We're Here to Help", icon: <LifeBuoy className="w-5 h-5 text-blue-600" /> },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-200 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="text-xs font-bold text-slate-800">{item.label}</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BROWSE PROPERTY CATEGORIES */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 py-16">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-blue-950">Browse Rental Properties</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1 transition">
            View All Properties <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {propertyCategories.map((cat) => (
            <div key={cat.id} className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition">
              <div className="h-28 overflow-hidden bg-slate-300">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-bold text-slate-800">{cat.name}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED RENTAL PROPERTIES */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 pb-16 relative">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-blue-950">Featured Rental Properties</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1 transition">
            View All Properties <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Carousel Sliders Navigation */}
        <button className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-300 rounded-full flex items-center justify-center shadow-md hover:bg-slate-50">
          <ChevronLeft className="w-4 h-4 text-slate-600" />
        </button>
        <button className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-400 rounded-full flex items-center justify-center shadow-md hover:bg-slate-50">
          <ChevronRight className="w-4 h-4 text-slate-600" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4">
          {featuredProperties.map((prop) => (
            <div key={prop.id} className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-sm relative group hover:shadow-md transition">
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${prop.tag === 'Featured' ? 'bg-emerald-600' : 'bg-blue-600'}`}>
                  {prop.tag}
                </span>
              </div>
              <div className="absolute top-2.5 right-2.5 z-10 flex gap-1.5">
                <button className="w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-rose-600 transition">
                  <Heart className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="h-36 overflow-hidden bg-slate-200 relative">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Info
                </div>
              </div>

              <div className="p-3">
                <p className="text-xs font-black text-blue-600">{prop.price}</p>
                <h3 className="text-xs font-bold text-slate-800 mt-1 line-clamp-1">{prop.title}</h3>
                <p className="text-[11px] text-slate-500 flex items-center gap-0.5 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-500" /> {prop.location}
                </p>

                <div className="grid grid-cols-3 gap-2 border-t border-slate-300 mt-3 pt-2 text-[10px] text-slate-500 text-center font-medium">
                  <div><span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-slate-400" /> {prop.beds} Beds</span></div>
                  <div><span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-slate-400" /> {prop.baths} Baths</span></div>
                  <div><span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-slate-400" /> {prop.sqft}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES & PROMOTION BLOCK AREA */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Services Block */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-blue-950 mb-6">More Services for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {moreServices.map((service) => (
              <div key={service.id} className="bg-white border border-slate-300 p-5 rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <IconMapper name={service.iconName} className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-800">{service.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{service.description}</p>
                </div>
                <button className="mt-4 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold py-1.5 px-4 rounded-lg self-start transition-colors duration-200">
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Right Promotional Box Layout */}
        <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-sky-100 to-sky-200 p-5 sm:p-6 flex flex-col justify-between min-h-[420px] lg:min-h-[470px]">

          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">

            <h2 className="mt-2 lg:mt-6 text-2xl lg:text-3xl font-extrabold leading-tight text-blue-700">
              List Your Property
              <br />
              for Free!
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 font-medium max-w-sm mx-auto lg:mx-0">
              Reach thousands of genuine renters across Sri Lanka and connect with verified tenants quickly.
            </p>

            <ul className="mt-8 space-y-4 text-sm font-semibold">

              <li className="flex items-center justify-center lg:justify-start gap-2 text-emerald-600">
                <span className="text-lg">✓</span>
                <span>100% Free Listing</span>
              </li>

              <li className="flex items-center justify-center lg:justify-start gap-2 text-emerald-600">
                <span className="text-lg">✓</span>
                <span>Verified Tenants</span>
              </li>

              <li className="flex items-center justify-center lg:justify-start gap-2 text-emerald-600">
                <span className="text-lg">✓</span>
                <span>Quick Responses</span>
              </li>

            </ul>

          </div>

          {/* CTA */}
          <div className="relative z-10 mt-8 flex justify-center lg:justify-start z-0">

            <button className="w-full sm:w-64 lg:w-56 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95 cursor-pointer">
              List My Property
            </button>

          </div>

          {/* Character Image */}
          <div className="pointer-events-none mt-8 flex justify-center lg:absolute lg:right-[-25px] lg:bottom-10 z-30">

            <img
              src="JungleFowlBird.png"
              alt="Promotion Character Placeholder"
              className="w-48 sm:w-56 lg:w-52 h-auto object-contain select-none"
            />

          </div>

        </div>

      </section>

      {/* WHY CHOOSE & TESTIMONIALS SECTION */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Banner Grid Area */}
        <div className="lg:col-span-7 bg-blue-900 rounded-2xl overflow-hidden relative min-h-[240px] flex flex-col justify-end p-6 text-white bg-cover bg-center" style={{ backgroundImage: `url('/TrainSL.jpg')` }}>
          <h2 className="text-2xl font-extrabold mb-12">Why Choose <span className="text-sky-400">SeaHomeNet.co.lk?</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: "Sri Lanka's Trusted Platform", icon: <Building2 className="w-4 h-4 mx-auto mb-1 text-sky-400" /> },
              { label: '100% Verified Properties', icon: <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-sky-400" /> },
              { label: 'Fast & Easy Search', icon: <Search className="w-4 h-4 mx-auto mb-1 text-sky-400" /> },
              { label: 'Local Support in Sri Lanka', icon: <LifeBuoy className="w-4 h-4 mx-auto mb-1 text-sky-400" /> },
            ].map((box, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                {box.icon}
                <p className="text-[11px] font-semibold leading-tight">{box.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Say Testimonials */}
        <div className="lg:col-span-5 bg-white border border-slate-300 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold text-blue-950">What Our Users Say</h2>
            <button className="text-blue-600 text-xs font-bold flex items-center gap-0.5">
              View All Reviews <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {testimonials.map((t) => (
            <div key={t.id} className="my-auto">
              <span className="text-3xl text-blue-200 block font-serif -mb-2">“</span>
              <p className="text-xs text-slate-600 italic leading-relaxed pl-2">{t.quote}</p>

              <div className="flex items-center gap-3 mt-4 pl-2">
                <img src={t.avatar} alt={t.author} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{t.author}</h4>
                  <p className="text-[10px] text-slate-400">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* POPULAR LOCATIONS SECTION */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 pb-16">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-blue-950">Popular Locations</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1 transition">
            View All Locations <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularLocations.map((loc) => (
            <div key={loc.id} className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition relative group">
              <div className="h-32 overflow-hidden bg-slate-300">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-3 bg-white absolute bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/95 to-white/80">
                <h3 className="text-xs font-bold text-slate-800">{loc.name}</h3>
                <p className="text-[10px] text-slate-400 font-medium">{loc.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM NEWSLETTER & CONTACT CTA BAR */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 pb-16 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Support CTA Callout Box */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-sm">

          <div className="flex flex-col sm:flex-row items-center gap-6 p-5 sm:p-6">

            {/* Character */}
            <div className="flex-shrink-0">

              <img
                src="jungleFowlSL.png"
                alt="Support Agent Illustration"
                className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 object-contain sm:-mb-6"
              />

            </div>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">

              <h3 className="text-lg sm:text-xl font-extrabold text-blue-950">
                Need Help Finding the Right Property?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 max-w-lg">
                Our experienced team is ready to help you discover the perfect
                property, answer your questions, and guide you through every
                step of your real estate journey.
              </p>

              <button className="mt-5 w-full sm:w-auto rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-md active:scale-95 cursor-pointer">
                Contact Support
              </button>

            </div>

          </div>

        </div>

        {/* Newsletter Bar */}
        <div className="bg-blue-950 rounded-2xl p-6 flex flex-col justify-between text-white lg:h-[200px] relative overflow-hidden">
          <div>
            <h3 className="text-sm font-bold">Stay Updated!</h3>
            <p className="text-xs text-slate-400 mt-1">Subscribe to get the latest rental listings, offers and updates.</p>
          </div>
          <div className="mt-4 flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input type="email" placeholder="Enter your email address" className="w-full bg-white text-slate-800 text-xs rounded-xl pl-9 pr-3 py-2.5 focus:outline-none" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition">
              Subscribe
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}