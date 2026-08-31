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
  Building2,
  Sparkles,
  Send,
  Train,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';

export interface ChintaiDetailSpec {
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
  layout: string;
  floorLevel: string;
  structure: string;
  yearBuilt: string;
  balconyDirection: string;
  parkingStatus: string;
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

export function getRentalChintaiDetail(id: string): ChintaiDetailSpec {
  return {
    id: id || 'ch-1070852770',
    listingCode: `1070852770`,
    label: 'Rental Housing / Apartment (賃貸マンション)',
    title: 'Grand Residence Nishi-Shinjuku — 2LDK Modern Apartment',
    propertyName: 'Grand Residence Nishi-Shinjuku Unit 502',
    rentYen: 145000,
    rentDisplay: '145,000 yen / month',
    commonFeeDisplay: '8,000 yen / month',
    depositDisplay: '1 month rent',
    keyMoneyDisplay: '1 month rent',
    guaranteeFeeDisplay: '50% of 1st month rent',
    renewalFeeDisplay: '1 month new rent',
    usableAreaM2: '54.20 m²',
    usableAreaTsubo: '16.39 tsubo',
    layout: '2LDK (Living 12.5j, Bedroom 6.0j, Bedroom 5.2j)',
    floorLevel: '5th Floor / 10-Story Building',
    structure: 'Reinforced Concrete (RC Structure) Seismic-Resistant',
    yearBuilt: 'Built in 2022 (Modern Construction)',
    balconyDirection: 'South-Facing (Sunlit Balcony)',
    parkingStatus: 'Reserved Parking Available (22,000 yen/mo)',
    address: 'Nishi-Shinjuku 5-chome, Shinjuku Ward, Tokyo 160-0023',
    stationAccess: '4-min walk from Nishi-Shinjuku Station (Tokyo Metro Marunouchi Line)',
    currentStatus: 'Vacant & Immediate Handover Available',
    handoverDate: 'Immediate Handover Available',
    description:
      'High-grade modern 2LDK residential rental apartment situated in Nishi-Shinjuku. Features south-facing sunlit balcony, auto-lock security entrance, delivery boxes, system kitchen with 3-burner gas stove, independent washroom vanity, reheating bath, and high-speed fiber internet connection.',
    features: [
      'Auto-Lock Security Entrance & CCTV',
      'Parcel Delivery Box (宅配ボックス)',
      'System Kitchen with 3-Burner Gas Stove',
      'Reheating Bath & Bathroom Dryer',
      'Independent Washroom Vanity Desk',
      'South-Facing Sunlit Balcony',
      'High-Speed Fiber Internet Ready',
      'Air Conditioner Unit Installed',
      'Bicycle Parking & EV Charging Space',
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
        caption: 'Spacious 2LDK Living Room & Sunlit South Balcony',
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
        caption: 'Modern System Kitchen with 3-Burner Gas Stove',
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
        caption: 'Independent Washroom Vanity & Reheating Bath',
      },
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
        caption: 'Exterior Entrance & Auto-Lock Security Gate',
      },
    ],
    listingAgency: {
      name: 'SeaHome Housing & Residential Leasing Center',
      license: 'Governor of Tokyo License (4) No. 89432',
      phone: '03-5290-8800',
      address: '2-1-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-0023',
      hours: '9:00 AM - 6:00 PM (Closed Sundays)',
    },
  };
}

export const SeahomeRentalChintaiDetailPage: React.FC = () => {
  const { listingId = '1070852770' } = useParams<{ listingId: string }>();
  const property: ChintaiDetailSpec = useMemo(
    () => getRentalChintaiDetail(listingId),
    [listingId]
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Schedule On-Site Room Tour',
    message: '',
  });

  const activeImage = property.galleryImages[activeImageIndex] ?? property.galleryImages[0];

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
          <Link to="/seahome-real-estates/rental" className="transition hover:text-sky-600">
            Rental Housing (賃貸)
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">{property.propertyName}</span>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 font-extrabold">Listing Code: {property.listingCode}</span>
        </div>
      </nav>

      {/* 2. HERO HEADER BLOCK */}
      <div className={`${HUB_CONTAINER} pt-6 space-y-6`}>
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-400/30">
                  {property.label}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-400/30">
                  {property.currentStatus}
                </span>
                <span className="text-xs text-sky-200 font-extrabold ml-auto">
                  Listing Code: {property.listingCode}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {property.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-sky-100 font-semibold pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  {property.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <Train className="h-4 w-4 text-sky-400" />
                  {property.stationAccess}
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

        {/* 3. FINANCIAL & UNIT SUMMARY CARD */}
        <div className="rounded-2xl border border-sky-100 bg-white p-5 sm:p-6 shadow-md grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-100">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Monthly Rent</span>
            <span className="text-2xl font-black text-sky-950">{property.rentDisplay}</span>
            <span className="block text-xs text-slate-500 mt-1">Common Fee: {property.commonFeeDisplay}</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Deposit & Key Money</span>
            <span className="text-base font-extrabold text-slate-900 block mt-1">Deposit: {property.depositDisplay}</span>
            <span className="text-xs text-slate-600">Key Money: {property.keyMoneyDisplay}</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Floor Layout & Area</span>
            <span className="text-xl font-black text-slate-900 block">{property.layout.split('(')[0]}</span>
            <span className="block text-xs text-slate-500 font-semibold">{property.usableAreaM2} ({property.usableAreaTsubo})</span>
          </div>

          <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-100">
            <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider">Facing & Handover</span>
            <span className="text-sm font-extrabold text-emerald-950 block mt-1 leading-snug">{property.balconyDirection}</span>
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
                {property.galleryImages.map((img, idx) => (
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

            {/* Verified Residential Amenities Showcase */}
            <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
                <Sparkles className="w-5 h-5 text-sky-600" />
                <h2 className="text-lg font-black text-slate-900">Residential Features & Building Amenities</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-50/70 border border-sky-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="text-xs font-extrabold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* */}
            <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
                <FileText className="w-5 h-5 text-sky-600" />
                <h2 className="text-lg font-black text-slate-900">Full Property Specifications Table</h2>
              </div>

              <div className="overflow-hidden rounded-xl border border-sky-100">
                <table className="w-full text-xs text-left text-slate-700">
                  <tbody className="divide-y divide-sky-100">
                    <tr className="bg-sky-50/50">
                      <th className="w-1/3 p-3 font-extrabold text-slate-900 bg-sky-100/60">Property Title</th>
                      <td className="p-3 font-bold text-slate-800">{property.title}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Property Category</th>
                      <td className="p-3 font-semibold">{property.label}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Monthly Rent</th>
                      <td className="p-3 font-extrabold text-sky-950">{property.rentDisplay}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Common Service Fee</th>
                      <td className="p-3 font-semibold">{property.commonFeeDisplay}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Deposit / Key Money</th>
                      <td className="p-3 font-semibold">Deposit: {property.depositDisplay} · Key Money: {property.keyMoneyDisplay}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Floor Layout & Area</th>
                      <td className="p-3 font-extrabold text-slate-900">{property.layout} ({property.usableAreaM2})</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Floor Level & Location</th>
                      <td className="p-3 font-semibold">{property.floorLevel}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Building Structure</th>
                      <td className="p-3 font-semibold">{property.structure}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Year Built</th>
                      <td className="p-3 font-bold text-slate-900">{property.yearBuilt}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Balcony Facing Direction</th>
                      <td className="p-3 font-bold text-slate-900">{property.balconyDirection}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Parking Space Status</th>
                      <td className="p-3 font-semibold">{property.parkingStatus}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Address</th>
                      <td className="p-3 font-semibold">{property.address}</td>
                    </tr>
                    <tr className="bg-sky-50/50">
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Nearest Station Access</th>
                      <td className="p-3 font-semibold">{property.stationAccess}</td>
                    </tr>
                    <tr>
                      <th className="p-3 font-extrabold text-slate-900 bg-sky-100/60">Current Status & Handover</th>
                      <td className="p-3 font-bold text-emerald-700">{property.currentStatus} ({property.handoverDate})</td>
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
                <h3 className="text-sm font-extrabold text-slate-900">Managing Real Estate Agency</h3>
              </div>

              <div className="space-y-2 text-xs">
                <h4 className="text-base font-extrabold text-sky-950 leading-snug">{property.listingAgency.name}</h4>
                <p className="text-slate-500 font-bold">{property.listingAgency.license}</p>
                <p className="text-slate-600 font-medium">{property.listingAgency.address}</p>
                <p className="text-slate-600 font-medium">Hours: {property.listingAgency.hours}</p>
              </div>

              <a
                href={`tel:${property.listingAgency.phone}`}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-50 border border-sky-200 py-3 text-sm font-extrabold text-sky-800 hover:bg-sky-100 transition cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Agent: {property.listingAgency.phone}</span>
              </a>
            </div>

            {/* Interactive Room Tour & Inquiry Form */}
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-4">
              <div className="border-b border-sky-100 pb-3">
                <h3 className="text-base font-black text-slate-900">Inquire Residential Apartment</h3>
                <p className="text-xs text-slate-500 mt-0.5">Schedule an on-site room tour or request floor plans & vacancy details.</p>
              </div>

              {formSubmitted ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-extrabold text-emerald-900">Room Tour Request Received!</h4>
                  <p className="text-xs text-emerald-700">A housing advisor from {property.listingAgency.name} will contact you shortly.</p>
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
                      <option value="Schedule On-Site Room Tour">Schedule On-Site Room Tour</option>
                      <option value="Request Floor Plan PDF">Request Floor Plan PDF</option>
                      <option value="Check Parking Availability">Check Parking Availability</option>
                      <option value="Negotiate Rent / Key Money">Negotiate Rent / Key Money</option>
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
                      placeholder="Specify your target move-in timeline, preferred move date, or questions..."
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

export default SeahomeRentalChintaiDetailPage;
