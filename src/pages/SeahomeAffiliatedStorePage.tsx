import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Phone,
  Search,
  Star,
  Clock,
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
  Mail,
  Send,
  X,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';

interface RealEstateAgencyStore {
  id: string;
  name: string;
  jpName?: string;
  license: string;
  rating: number;
  reviewsCount: number;
  category: 'warehouse' | 'shop' | 'office' | 'residential' | 'parking';
  categoryLabel: string;
  prefecture: string;
  city: string;
  address: string;
  stationAccess: string;
  phone: string;
  businessHours: string;
  regularHoliday: string;
  imageUrl: string;
  specialties: string[];
  description: string;
  isCertified: boolean;
}

const AFFILIATED_AGENCY_STORES: RealEstateAgencyStore[] = [
  {
    id: 'store-1',
    name: 'SeaHome Commercial Logistics Real Estate Co., Ltd.',
    license: 'Governor of Tokyo License (4) No. 89432',
    rating: 4.9,
    reviewsCount: 142,
    category: 'warehouse',
    categoryLabel: 'Rental Warehouse & Logistics Specialist',
    prefecture: 'Tokyo',
    city: 'Shinjuku Ward',
    address: '2-1-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-0023',
    stationAccess: '3-min walk from Shinjuku Station (JR / Tokyo Metro Lines)',
    phone: '03-5290-8800',
    businessHours: '9:00 AM - 6:00 PM',
    regularHoliday: 'Sundays & National Holidays',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    specialties: ['10-Ton Truck Access Warehouses', '3-Phase 200V High Voltage Power', 'Logistics Parks', 'Zero Key Money Deals'],
    description: 'Premier commercial agency specializing in high-ceiling warehouses, heavy logistics centers, cargo distribution yards, and industrial real estate across the Greater Tokyo Metropolitan area.',
    isCertified: true,
  },
  {
    id: 'store-2',
    name: 'SeaHome Kansai Freight & Industrial Estate Agency',
    license: 'Governor of Osaka License (5) No. 61209',
    rating: 4.8,
    reviewsCount: 98,
    category: 'warehouse',
    categoryLabel: 'Logistics & Cargo Storage Agency',
    prefecture: 'Osaka',
    city: 'Hirano Ward',
    address: '3-4-12 Hirano-Nishi, Hirano-ku, Osaka City, Osaka 547-0042',
    stationAccess: '5-min walk from Hirano Station (JR Yamatoji Line)',
    phone: '06-6790-4100',
    businessHours: '9:30 AM - 6:30 PM',
    regularHoliday: 'Wednesdays',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    specialties: ['Osaka Port Freight Bays', 'Container Truck Docks', 'Office Mezzanine Warehouses', 'Flexible Term Leases'],
    description: 'Leading industrial broker in Osaka servicing Hirano, Minato Ward, Amagasaki, and Yao logistics corridors with direct container access.',
    isCertified: true,
  },
  {
    id: 'store-3',
    name: 'SeaHome Prime Retail & Store Space Consultants',
    license: 'Governor of Tokyo License (3) No. 92104',
    rating: 4.9,
    reviewsCount: 165,
    category: 'shop',
    categoryLabel: 'Retail & Store Space Leasing Consultant',
    prefecture: 'Tokyo',
    city: 'Shibuya Ward',
    address: '1-14-8 Jinnan, Shibuya-ku, Tokyo 150-0041',
    stationAccess: '4-min walk from Shibuya Station (JR / Keio Lines)',
    phone: '03-5489-3310',
    businessHours: '10:00 AM - 7:00 PM',
    regularHoliday: 'Open Every Day',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    specialties: ['Ground Floor Retail Shops', 'Restaurant & Cafe Spaces', 'Skeleton Lease Handover', 'High Foot Traffic Zones'],
    description: 'Specialized store rental advisory firm focused on prime retail storefronts, boutique commercial spaces, and food beverage locations.',
    isCertified: true,
  },
  {
    id: 'store-4',
    name: 'SeaHome Corporate Office Advisory Group',
    license: 'Governor of Tokyo License (6) No. 54180',
    rating: 4.7,
    reviewsCount: 114,
    category: 'office',
    categoryLabel: 'Commercial Office & HQ Leasing Specialist',
    prefecture: 'Tokyo',
    city: 'Chiyoda Ward',
    address: '1-5-2 Marunouchi, Chiyoda-ku, Tokyo 100-0005',
    stationAccess: '2-min walk from Tokyo Station (Marunouchi North Exit)',
    phone: '03-3210-9900',
    businessHours: '9:00 AM - 6:00 PM',
    regularHoliday: 'Saturdays & Sundays',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    specialties: ['Corporate HQ Offices', 'High-Rise Tech Hubs', 'Flexible Co-Working Floors', 'Fully Furnished Suites'],
    description: 'Trusted executive broker managing corporate headquarter relocations, tech enterprise offices, and modern commercial office buildings.',
    isCertified: true,
  },
  {
    id: 'store-5',
    name: 'SeaHome Saitama Logistics & Storage Depot Brokerage',
    license: 'Governor of Saitama License (3) No. 44102',
    rating: 4.8,
    reviewsCount: 86,
    category: 'warehouse',
    categoryLabel: 'Industrial Warehouse & Depot Broker',
    prefecture: 'Saitama',
    city: 'Kawaguchi City',
    address: '2-8-15 Arai, Kawaguchi City, Saitama 332-0005',
    stationAccess: '8-min walk from Kawaguchi-Motogo Station (Saitama Railway Line)',
    phone: '048-220-7711',
    businessHours: '9:00 AM - 6:00 PM',
    regularHoliday: 'Tuesdays & Wednesdays',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    specialties: ['Kawaguchi Heavy Cargo Bays', 'Ceiling 6m+ Clearance', 'Expressway Ramp Access', 'Immediate Handover'],
    description: 'Dedicated regional real estate agency in Kawaguchi and Saitama specializing in commercial warehouses, storage yards, and distribution centers.',
    isCertified: true,
  },
  {
    id: 'store-6',
    name: 'SeaHome Monthly Parking & Land Management Agency',
    license: 'Governor of Kanagawa License (4) No. 71920',
    rating: 4.9,
    reviewsCount: 130,
    category: 'parking',
    categoryLabel: 'Monthly Parking & Leased Land Manager',
    prefecture: 'Kanagawa',
    city: 'Yokohama City',
    address: '2-12-6 Minatomirai, Nishi-ku, Yokohama City, Kanagawa 220-0012',
    stationAccess: '3-min walk from Minatomirai Station (Minatomirai Line)',
    phone: '045-682-1200',
    businessHours: '9:00 AM - 6:00 PM',
    regularHoliday: 'Sundays',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    specialties: ['Monthly Parking Lots', 'Covered Flat Vehicle Bays', 'Leased Industrial Land', 'EV Charging Parking'],
    description: 'Professional management agency overseeing monthly parking lots, commercial vehicle storage yards, and industrial leasehold land across Greater Yokohama.',
    isCertified: true,
  },
];

export const SeahomeAffiliatedStorePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStoreModal, setSelectedStoreModal] = useState<RealEstateAgencyStore | null>(null);

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Rental Warehouse',
    message: '',
  });
  const [formSuccess, setFormSuccess] = useState(false);

  const filteredStores = useMemo(() => {
    return AFFILIATED_AGENCY_STORES.filter((store) => {
      const matchesSearch =
        searchTerm === '' ||
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.prefecture.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesPref = selectedPrefecture === 'all' || store.prefecture.toLowerCase() === selectedPrefecture.toLowerCase();
      const matchesCat = selectedCategory === 'all' || store.category === selectedCategory;

      return matchesSearch && matchesPref && matchesCat;
    });
  }, [searchTerm, selectedPrefecture, selectedCategory]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 font-sans pb-16 selection:bg-sky-500 selection:text-white">
      {/* 1. BREADCRUMB NAVIGATION */}
      <nav className="border-b border-sky-100 bg-white/90 backdrop-blur-md py-2.5 shadow-2xs">
        <div className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold text-sky-900 ${HUB_CONTAINER}`}>
          <Link to="/seahome-real-estates" className="transition hover:text-sky-600">
            Real Estate Top
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 font-extrabold">Find Affiliated Real Estate Agencies & Stores</span>
        </div>
      </nav>

      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        {/* 2. HERO HEADER BLOCK */}
        <header className="rounded-3xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-10 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-sky-100 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>SeaHome Certified Real Estate Partner Network</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Find a{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  SeaHome Affiliated Real Estate Store & Agent
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
                Search trusted commercial real estate brokers, licensed agency partners, and property advisors across Japan. Directly entrust your warehouse, store, office, or parking search to top-rated local experts.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 shrink-0 self-start md:self-auto">
              <div className="bg-sky-50 p-3.5 rounded-2xl border border-sky-200/80 text-center">
                <span className="block text-2xl font-black text-sky-600">1,240+</span>
                <span className="text-[11px] font-bold text-slate-600">Certified Agencies</span>
              </div>
              <div className="bg-sky-50 p-3.5 rounded-2xl border border-sky-200/80 text-center">
                <span className="block text-2xl font-black text-emerald-600">4.9 ★</span>
                <span className="text-[11px] font-bold text-slate-600">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Search Toolbar */}
          <div className="grid gap-3 sm:grid-cols-12">
            <div className="relative sm:col-span-6">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search real estate agency by name, city, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-sky-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-xs font-semibold text-slate-800 focus:border-sky-500 focus:bg-white focus:outline-none shadow-2xs"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2.5 text-xs font-extrabold text-slate-800 focus:border-sky-500 focus:outline-none shadow-2xs cursor-pointer"
              >
                <option value="all">All Specialty Categories</option>
                <option value="warehouse">Rental Warehouse & Logistics</option>
                <option value="shop">Retail & Store Leasing</option>
                <option value="office">Corporate Office Advisory</option>
                <option value="parking">Monthly Parking & Land</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedPrefecture}
                onChange={(e) => setSelectedPrefecture(e.target.value)}
                className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2.5 text-xs font-extrabold text-slate-800 focus:border-sky-500 focus:outline-none shadow-2xs cursor-pointer"
              >
                <option value="all">All Prefectures</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Osaka">Osaka</option>
                <option value="Saitama">Saitama</option>
                <option value="Kanagawa">Kanagawa</option>
              </select>
            </div>
          </div>
        </header>

        {/* 3. MAIN AGENCY LISTINGS GRID */}
        <main className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sky-100 bg-white p-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Showing {filteredStores.length} certified real estate agency partners</span>
            </div>

            {(searchTerm || selectedCategory !== 'all' || selectedPrefecture !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPrefecture('all');
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Agency Store Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredStores.map((store) => (
              <article
                key={store.id}
                className="group rounded-2xl border border-sky-100 bg-white p-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Top Store Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-xl border border-sky-100 bg-slate-100">
                      <img src={store.imageUrl} alt={store.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      {store.isCertified && (
                        <span className="absolute top-1 left-1 rounded-full bg-sky-600 p-1 text-white shadow-xs" title="Certified Partner">
                          <CheckCircle2 className="w-3 h-3" />
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-900 text-[10px] font-extrabold border border-sky-200/60">
                          {store.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-black ml-auto">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{store.rating}</span>
                          <span className="text-[10px] text-slate-400 font-normal">({store.reviewsCount})</span>
                        </div>
                      </div>

                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug mt-1.5">
                        {store.name}
                      </h3>
                      <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                        {store.license}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
                    {store.description}
                  </p>

                  {/* Contact & Specs Box */}
                  <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-3 space-y-1.5 text-xs font-semibold text-slate-700">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="truncate">{store.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{store.businessHours} · {store.regularHoliday}</span>
                    </p>
                  </div>

                  {/* Specialties Tag Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {store.specialties.map((spec, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${store.phone}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50 px-3.5 py-2 text-xs font-extrabold text-sky-800 hover:bg-sky-100 transition cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>{store.phone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStoreModal(store);
                      setFormSuccess(false);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-extrabold text-white shadow-md hover:from-sky-700 hover:to-blue-800 transition cursor-pointer"
                  >
                    <span>Inquire Agency</span>
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      {/* INQUIRE AGENCY MODAL */}
      {selectedStoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="relative w-full max-w-lg rounded-3xl border border-sky-100 bg-white p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setSelectedStoreModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-sky-700 uppercase tracking-wider">Inquire Store Advisor</span>
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">{selectedStoreModal.name}</h3>
              </div>
            </div>

            {formSuccess ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-extrabold text-emerald-900">Inquiry Request Sent!</h4>
                <p className="text-xs text-emerald-700 font-medium">
                  Thank you! An expert agent from {selectedStoreModal.name} will contact you shortly regarding your property search requirements.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedStoreModal(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-extrabold shadow-sm hover:bg-emerald-700 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-extrabold text-slate-800 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe / Commercial Purchasing Officer"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full rounded-xl border border-sky-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-extrabold text-slate-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full rounded-xl border border-sky-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-extrabold text-slate-800 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="090-0000-0000"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full rounded-xl border border-sky-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-extrabold text-slate-800 mb-1">Target Property Category</label>
                  <select
                    value={inquiryForm.propertyType}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, propertyType: e.target.value })}
                    className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:outline-none"
                  >
                    <option value="Rental Warehouse">Rental Warehouse / Commercial Storage</option>
                    <option value="Store / Retail">Store for Rent / Retail Space</option>
                    <option value="Rental Office">Rental Office / Commercial Suite</option>
                    <option value="Rental Parking">Rental Parking / Vehicle Lot</option>
                    <option value="Leased Land">Leased Land / Industrial Ground</option>
                  </select>
                </div>

                <div>
                  <label className="block font-extrabold text-slate-800 mb-1">Inquiry Message / Desired Specs</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your desired location, ceiling clearance, budget, or move-in timeline..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full rounded-xl border border-sky-200 bg-slate-50/50 p-3 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 py-3 text-xs font-extrabold text-white shadow-md hover:from-sky-700 hover:to-blue-800 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Agency</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeahomeAffiliatedStorePage;
