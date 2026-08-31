import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  CheckCircle2,
  FileText,
  Heart,
  MapPin,
  Phone,
  Printer,
  Share2,
  Utensils,
  Building2,
  Sparkles,
  Send,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';

export interface StoreDetailSpec {
  id: string;
  listingCode: string;
  label: string;
  title: string;
  propertyName: string;
  rentYen: number;
  rentDisplay: string;
  commonFeeDisplay: string;
  depositDisplay: string;
  keyMoneyDisplay: string;
  guaranteeFeeDisplay: string;
  renewalFeeDisplay: string;
  usableAreaM2: string;
  usableAreaTsubo: string;
  floorLevel: string;
  structure: string;
  yearBuilt: string;
  previousTenant: string;
  handoverCondition: string;
  operatingHoursLicense: string;
  frontageWidth: string;
  utilitiesPower: string;
  address: string;
  stationAccess: string;
  currentStatus: string;
  handoverDate: string;
  description: string;
  features: string[];
  galleryImages: { url: string; caption: string }[];
  listingAgency: {
    name: string;
    license: string;
    phone: string;
    address: string;
    hours: string;
  };
}

export function getRentalShopDetail(id: string): StoreDetailSpec {
  return {
    id: id || 'st-1',
    listingCode: `ST-SUS-${id ? id.toUpperCase() : 'ST1'}-6990333869`,
    label: 'Rental Store & Commercial Dining Space',
    title: 'Susukino Main Avenue Ground-Floor Restaurant & Izakaya Space',
    propertyName: 'Susukino Central Commercial Plaza Bay A',
    rentYen: 380000,
    rentDisplay: '380,000 yen / month',
    commonFeeDisplay: '25,000 yen / month',
    depositDisplay: '3 months rent',
    keyMoneyDisplay: '1 month rent',
    guaranteeFeeDisplay: '50% of 1st month rent',
    renewalFeeDisplay: '1 month new rent',
    usableAreaM2: '65.50 m²',
    usableAreaTsubo: '19.81 tsubo',
    floorLevel: '1st Ground Floor Storefront (Roadside)',
    structure: 'Reinforced Concrete (RC Structure) Fire-Resistant',
    yearBuilt: 'Built in 2021 (Modern Reinforced Construction)',
    previousTenant: 'Japanese Izakaya & Charcoal Grill Dining',
    handoverCondition: 'Existing Kitchen Fixtures Included (Turnkey Ready)',
    operatingHoursLicense: '24-Hour Late Night Operating Approved',
    frontageWidth: '5.8m Wide Full-Glass Display Frontage',
    utilitiesPower: '3-Phase 200V / High-Capacity Water Meter 25mm / City Gas',
    address: 'Chuo Ward, Sapporo City, Hokkaido 064-0805',
    stationAccess: '2-min walk from Susukino Station (Sapporo Subway Namboku Line)',
    currentStatus: 'Vacant & Immediate Handover Available',
    handoverDate: 'Immediate Handover Available',
    description:
      'Prime commercial ground-floor storefront located in Susukino entertainment district. Features full glass display frontage, existing kitchen exhaust hood, grease trap, 3-phase 200V high-voltage power, and 24-hour late night operating license. Ideal for restaurants, izakayas, bars, or specialty cafes.',
    features: [
      '1st Ground Floor Storefront Access',
      'Existing Kitchen Fixtures & Exhaust Hood',
      'Grease Trap & High-Capacity Drainage',
      '3-Phase 200V Heavy Commercial Power',
      '24-Hour Operating Approved',
      '5.8m Full-Glass Display Frontage',
      'Separate Men & Women Restroom Facilities',
      'Fire Sprinkler & Alarm System',
      'High Foot-Traffic Commercial Corridor',
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
        caption: 'Storefront Display Frontage & Main Street Entrance',
      },
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
        caption: 'Dining Hall Seating & Customer Interior Area',
      },
      {
        url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
        caption: 'Commercial Kitchen Area & Hood Exhaust System',
      },
      {
        url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
        caption: 'Bar Counter & Ambient Nightlife Lighting',
      },
    ],
    listingAgency: {
      name: 'SeaHome Prime Retail & Store Space Consultants',
      license: 'Governor of Tokyo License (3) No. 92104',
      phone: '03-5489-3310',
      address: '1-14-8 Jinnan, Shibuya-ku, Tokyo 150-0041',
      hours: '10:00 AM - 7:00 PM (Open Every Day)',
    },
  };
}

export const SeahomeRentalShopDetailPage: React.FC = () => {
  const { storeId = 'st-1' } = useParams<{ storeId: string }>();
  const store: StoreDetailSpec = useMemo(
    () => getRentalShopDetail(storeId),
    [storeId]
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    phone: '',
    inquiryType: 'Schedule On-Site Store Tour',
    message: '',
  });

  const activeImage = store.galleryImages[activeImageIndex] ?? store.galleryImages[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 pb-16 font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. TOP BREADCRUMB NAVIGATION */}
      <nav className="border-b border-sky-100 bg-white/90 backdrop-blur-md py-2.5 shadow-2xs">
        <div className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold text-sky-900 ${HUB_CONTAINER}`}>
          <Link to="/seahome-real-estates" className="transition hover:text-sky-600">
            Real Estate Top
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/seahome-real-estates/rental-shop" className="transition hover:text-sky-600">
            Store for Rent (店舗賃貸)
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">{store.propertyName}</span>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 font-extrabold">{store.listingCode}</span>
        </div>
      </nav>

      {/* 2. HERO STORE HEADER BLOCK */}
      <div className={`${HUB_CONTAINER} pt-6 space-y-6`}>
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-400/30">
                  {store.label}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-400/30">
                  {store.currentStatus}
                </span>
                <span className="text-xs text-sky-200 font-extrabold ml-auto">
                  Listing Code: {store.listingCode}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {store.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-sky-100 font-semibold pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  {store.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <Utensils className="h-4 w-4 text-sky-400" />
                  {store.stationAccess}
                </span>
              </div>
            </div>

            {/* Quick Action Toolbar */}
            <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setFavorite((v) => !v)}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${favorite
                  ? 'border-red-400 bg-red-500 text-white shadow-sm'
                  : 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                <Heart className={`h-4 w-4 ${favorite ? 'fill-current' : ''}`} />
                {favorite ? 'Saved' : 'Save Property'}
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-white/20 transition cursor-pointer"
              >
                <Printer className="h-4 w-4" />
                <span>Print</span>
              </button>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-white/20 transition cursor-pointer"
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. FINANCIAL & SPACE SUMMARY CARD */}
        <div className="rounded-2xl border border-sky-100 bg-white p-5 sm:p-6 shadow-md grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-100">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Monthly Rent</span>
            <span className="text-2xl font-black text-sky-950">{store.rentDisplay}</span>
            <span className="block text-xs text-slate-500 mt-1">Common Fee: {store.commonFeeDisplay}</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Deposit & Key Money</span>
            <span className="text-base font-extrabold text-slate-900 block mt-1">Deposit: {store.depositDisplay}</span>
            <span className="text-xs text-slate-600">Key Money: {store.keyMoneyDisplay}</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Usable Floor Area</span>
            <span className="text-2xl font-black text-slate-900">{store.usableAreaM2}</span>
            <span className="block text-xs text-slate-500 mt-1">({store.usableAreaTsubo})</span>
          </div>

          <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-100">
            <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider">Handover Condition</span>
            <span className="text-sm font-extrabold text-emerald-950 block mt-1 leading-snug">{store.handoverCondition}</span>
            <span className="block text-xs text-emerald-700 mt-1 font-semibold">Immediate Handover</span>
          </div>
        </div>

        {/* 4. MAIN LAYOUT (Photos + Detailed Specs + Inquiry Form) */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          {/* Main Specs Column */}
          <div className="space-y-8">
            {/* Gallery Viewer */}
            <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-md space-y-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-200">
                <img
                  src={activeImage.url}
                  alt={activeImage.caption}
                  className="h-full w-full object-cover transition-opacity duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <span className="text-xs font-extrabold">{activeImage.caption}</span>
                </div>
              </div>

              {/* Thumbnails Bar */}
              <div className="grid grid-cols-4 gap-3">
                {store.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${idx === activeImageIndex
                      ? 'border-sky-600 ring-2 ring-sky-300 scale-105 shadow-sm'
                      : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                  >
                    <img src={img.url} alt={img.caption} className="aspect-[4/3] w-full object-cover" />
                  </button>
                ))}
              </div>
            </section>

            {/* Technical Retail Features Showcase */}
            <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
                <Sparkles className="w-5 h-5 text-sky-600" />
                <h2 className="text-lg font-black text-slate-900">Commercial Store Amenities & Equipment</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {store.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-50/70 border border-sky-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="text-xs font-extrabold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
                <FileText className="w-5 h-5 text-sky-600" />
                <h2 className="text-lg font-black text-slate-900">Full Store Specifications Table</h2>
              </div>

              <div className="overflow-hidden rounded-xl border border-sky-100">
                <table className="w-full text-xs text-left text-slate-700">
                  <tbody className="divide-y divide-sky-100">
                    <tr className="bg-sky-50/50">
                      <th className="w-1/3 p-3 font-extrabold text-slate-900 bg-sky-100/60">Property Title</th>
                      <td className="p-3 font-bold text-slate-800">{store.title}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Property Category</th>
                      <td className="p-3 font-semibold">{store.label}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Monthly Rent</th>
                      <td className="p-3 font-extrabold text-sky-950">{store.rentDisplay}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Common Service Fee</th>
                      <td className="p-3 font-semibold">{store.commonFeeDisplay}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Deposit / Key Money</th>
                      <td className="p-3 font-semibold">Deposit: {store.depositDisplay} · Key Money: {store.keyMoneyDisplay}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Usable Floor Area</th>
                      <td className="p-3 font-extrabold text-slate-900">{store.usableAreaM2} ({store.usableAreaTsubo})</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Floor Level & Location</th>
                      <td className="p-3 font-semibold">{store.floorLevel}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Building Structure</th>
                      <td className="p-3 font-semibold">{store.structure}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Previous Tenant</th>
                      <td className="p-3 font-bold text-slate-900">{store.previousTenant}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Handover Condition</th>
                      <td className="p-3 font-bold text-emerald-700">{store.handoverCondition}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Display Frontage Width</th>
                      <td className="p-3 font-semibold">{store.frontageWidth}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Utilities & Heavy Power</th>
                      <td className="p-3 font-semibold">{store.utilitiesPower}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Operating License</th>
                      <td className="p-3 font-bold text-slate-900">{store.operatingHoursLicense}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Address</th>
                      <td className="p-3 font-semibold">{store.address}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Nearest Station Access</th>
                      <td className="p-3 font-semibold">{store.stationAccess}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Current Status & Handover</th>
                      <td className="p-3 font-bold text-emerald-700">{store.currentStatus} ({store.handoverDate})</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR: BROKER CARD & INTERACTIVE INQUIRY FORM */}
          <aside className="space-y-6">
            {/* Managing Agency Card */}
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
                <Building2 className="w-5 h-5 text-sky-600" />
                <h3 className="text-sm font-extrabold text-slate-900">Managing Commercial Broker</h3>
              </div>

              <div className="space-y-2 text-xs">
                <h4 className="text-base font-extrabold text-sky-950 leading-snug">{store.listingAgency.name}</h4>
                <p className="text-slate-500 font-bold">{store.listingAgency.license}</p>
                <p className="text-slate-600 font-medium">{store.listingAgency.address}</p>
                <p className="text-slate-600 font-medium">Hours: {store.listingAgency.hours}</p>
              </div>

              <a
                href={`tel:${store.listingAgency.phone}`}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-50 border border-sky-200 py-3 text-sm font-extrabold text-sky-800 hover:bg-sky-100 transition cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Agent: {store.listingAgency.phone}</span>
              </a>
            </div>

            {/* Interactive Store Tour & Inquiry Form */}
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-4">
              <div className="border-b border-sky-100 pb-3">
                <h3 className="text-base font-black text-slate-900">Inquire Store Property</h3>
                <p className="text-xs text-slate-500 mt-0.5">Schedule an on-site tour or request floor plans & equipment details.</p>
              </div>

              {formSubmitted ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-extrabold text-emerald-900">Tour Request Received!</h4>
                  <p className="text-xs text-emerald-700">A commercial store advisor from {store.listingAgency.name} will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Inquiry Purpose</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:outline-none"
                    >
                      <option value="Schedule On-Site Store Tour">Schedule On-Site Store Tour</option>
                      <option value="Request Floor Plan PDF & Equipment List">Request Floor Plan PDF & Equipment List</option>
                      <option value="Check Commercial Lease Terms">Check Commercial Lease Terms</option>
                      <option value="Negotiate Key Money / Deposit">Negotiate Key Money / Deposit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-sky-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-sky-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="090-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-sky-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Message / Desired Move-in Date</label>
                    <textarea
                      rows={3}
                      placeholder="Specify your business type (restaurant, cafe, salon) or target opening timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-sky-200 bg-slate-50/50 p-3 text-xs font-semibold focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 py-3 text-xs font-extrabold text-white shadow-md hover:from-sky-700 hover:to-blue-800 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Agency</span>
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalShopDetailPage;
