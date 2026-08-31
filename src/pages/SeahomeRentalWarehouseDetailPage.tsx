import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Warehouse,
  CheckCircle2,
  FileText,
  Heart,
  MapPin,
  Maximize2,
  Phone,
  Printer,
  Share2,
  ShieldCheck,
  ShieldAlert,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  getWarehouseDetail,
  type WarehouseDetailSpec,
} from '../components/seahome/WarehouseRentals/warehouseDiscoveryData';

export const SeahomeRentalWarehouseDetailPage: React.FC = () => {
  const { warehouseId = 'w1' } = useParams<{ warehouseId: string }>();
  const warehouse: WarehouseDetailSpec = useMemo(
    () => getWarehouseDetail(warehouseId),
    [warehouseId]
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    phone: '',
    inquiryType: 'Schedule On-Site Warehouse Tour',
    message: '',
  });

  const activeImage = warehouse.galleryImages[activeImageIndex] ?? warehouse.galleryImages[0];

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
          <Link to="/seahome-real-estates/warehouse" className="transition hover:text-sky-600">
            Rental Warehouse (賃貸倉庫)
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">{warehouse.label}</span>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 line-clamp-1 max-w-[200px] sm:max-w-xs">{warehouse.title}</span>
        </div>
      </nav>

      {/* 2. HERO PROPERTY HEADER BANNER */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-sky-950 to-blue-950 py-6 sm:py-8 text-white shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center pointer-events-none" />
        <div className={`relative z-10 ${HUB_CONTAINER}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-sky-500/20 px-2.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-300 ring-1 ring-sky-400/40 flex items-center gap-1.5">
                <Warehouse className="h-3.5 w-3.5 text-sky-400" />
                {warehouse.label}
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-sky-100">
                Listing ID: {warehouse.listingCode}
              </span>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFavorite((v) => !v)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${favorite
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/20 cursor-pointer"
              >
                <Printer className="h-4 w-4" />
                Print Brochure
              </button>
              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: warehouse.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Warehouse property link copied to clipboard!');
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/20 cursor-pointer"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>

          <h1 className="mt-3 text-xl font-extrabold sm:text-2xl lg:text-3xl text-white tracking-tight drop-shadow-xs">
            {warehouse.title}
          </h1>

          <p className="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-sky-100/90 sm:text-sm">
            <MapPin className="h-4 w-4 shrink-0 text-sky-400" />
            <span>{warehouse.address}</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-sky-200">{warehouse.stationAccess}</span>
          </p>
        </div>
      </header>

      {/* 3. MAIN CONTENT BODY */}
      <div className={`mt-6 space-y-8 ${HUB_CONTAINER}`}>
        {/* Key Metrics Highlight Card */}
        <section className="grid grid-cols-1 gap-4 rounded-2xl border border-sky-100/90 bg-white p-5 shadow-sm sm:p-6 md:grid-cols-4 md:gap-6">
          <div className="md:col-span-2 border-b border-sky-100 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Monthly Rent & Common Fee</p>
            <p className="mt-1 text-2xl font-black text-sky-950 sm:text-3xl">
              {warehouse.rentDisplay}{' '}
              <span className="text-sm font-semibold text-slate-500">/ month</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="rounded-md bg-sky-50 px-2.5 py-1 border border-sky-200/60">
                Common Fee: <strong className="text-sky-900">{warehouse.commonFeeDisplay}</strong>
              </span>
              <span className="rounded-md bg-sky-50 px-2.5 py-1 border border-sky-200/60">
                Deposit: <strong className="text-sky-900">{warehouse.depositDisplay}</strong>
              </span>
              <span className="rounded-md bg-sky-50 px-2.5 py-1 border border-sky-200/60">
                Key Money: <strong className="text-sky-900">{warehouse.keyMoneyDisplay}</strong>
              </span>
            </div>
          </div>

          <div className="border-b border-sky-100 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Usable Warehouse Area</p>
            <p className="mt-1 text-xl font-extrabold text-sky-950">{warehouse.usableAreaM2}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">({warehouse.usableAreaTsubo})</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Status & Handover</p>
            <p className="mt-1 text-base font-extrabold text-slate-800">{warehouse.handoverDate}</p>
            <div className="mt-2 inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {warehouse.currentStatus}
            </div>
          </div>
        </section>

        {/* Warehouse Photo Gallery */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
            <Maximize2 className="h-5 w-5 text-sky-600" />
            Warehouse Facility & Loading Dock Gallery
          </h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_260px]">
            <div className="relative overflow-hidden rounded-xl border border-sky-100 bg-slate-100">
              <img
                src={activeImage.url}
                alt={activeImage.caption}
                className="aspect-[16/10] w-full object-cover transition-all duration-300"
              />
              <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-xs">
                Photo {activeImageIndex + 1} of {warehouse.galleryImages.length}
              </span>
              <p className="border-t border-sky-100 bg-sky-50/80 px-4 py-2 text-center text-xs font-bold text-sky-950">
                {activeImage.caption}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
                {warehouse.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${idx === activeImageIndex
                        ? 'border-sky-600 ring-2 ring-sky-300 scale-105 shadow-sm'
                        : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                  >
                    <img src={img.url} alt={img.caption} className="aspect-[4/3] w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-3 text-center">
                <p className="text-xs font-bold text-sky-900">On-Site Inspection Available</p>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  Inspect truck access, shutter dimensions & floor load with our logistics advisor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Warehouse Specifications Cards */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-sky-600" />
            Key Warehouse Specs & Logistics Features
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3.5 text-center">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700">Ceiling Clearance</p>
              <p className="mt-1 text-sm font-extrabold text-sky-950">{warehouse.ceilingHeight}</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3.5 text-center">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700">Floor Load Capacity</p>
              <p className="mt-1 text-sm font-extrabold text-sky-950">{warehouse.floorLoadCapacity}</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3.5 text-center">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700">Shutter Gate Size</p>
              <p className="mt-1 text-xs font-extrabold text-sky-950">{warehouse.shutterDimensions}</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3.5 text-center">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700">Power Supply</p>
              <p className="mt-1 text-xs font-extrabold text-sky-950">{warehouse.powerSupply}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold text-sky-950 mb-2">Verified Facility Amenities & Equipment:</p>
            <div className="flex flex-wrap gap-2">
              {warehouse.features.map((feat) => (
                <span
                  key={feat}
                  className="inline-flex items-center gap-1 rounded-lg bg-sky-100/80 px-3 py-1.5 text-xs font-extrabold text-sky-900 border border-sky-200 shadow-2xs"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Warehouse Specifications Table (athome rent_souko standard table) */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
            <FileText className="h-5 w-5 text-sky-600" />
            Full Property Specifications & Lease Agreement Terms
          </h2>

          <div className="overflow-hidden rounded-xl border border-sky-100">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-sky-100">
                <tr className="bg-sky-50/50">
                  <th className="w-1/3 bg-sky-100/60 p-3 font-extrabold text-sky-950 sm:w-1/4">Listing Title</th>
                  <td className="p-3 font-bold text-slate-900">{warehouse.title}</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Property Category</th>
                  <td className="p-3 text-slate-800">{warehouse.label}</td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Monthly Rent</th>
                  <td className="p-3 font-extrabold text-sky-700 text-base">{warehouse.rentDisplay} / month</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Common Service Fee</th>
                  <td className="p-3 text-slate-800">{warehouse.commonFeeDisplay}</td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Deposit / Key Money</th>
                  <td className="p-3 text-slate-800">
                    Deposit: <strong className="text-slate-900">{warehouse.depositDisplay}</strong> · Key Money:{' '}
                    <strong className="text-slate-900">{warehouse.keyMoneyDisplay}</strong>
                  </td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Usable Floor Area</th>
                  <td className="p-3 font-bold text-slate-900">
                    {warehouse.usableAreaM2} ({warehouse.usableAreaTsubo})
                  </td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Floor Level / Building Structure</th>
                  <td className="p-3 text-slate-800">
                    {warehouse.floorLevel} · {warehouse.structure} ({warehouse.yearBuilt})
                  </td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Ceiling Height & Floor Load</th>
                  <td className="p-3 text-slate-800">
                    Clearance: <strong className="text-slate-900">{warehouse.ceilingHeight}</strong> · Load Capacity:{' '}
                    <strong className="text-slate-900">{warehouse.floorLoadCapacity}</strong>
                  </td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Truck Dock & Shutter Access</th>
                  <td className="p-3 text-slate-800">
                    Gate: <strong className="text-slate-900">{warehouse.shutterDimensions}</strong> · Loading Dock:{' '}
                    <strong className="text-slate-900">{warehouse.truckAccess}</strong>
                  </td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Address / Location</th>
                  <td className="p-3 text-slate-800">{warehouse.address}</td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Nearest Railway Station</th>
                  <td className="p-3 text-slate-800">{warehouse.stationAccess}</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Handover Status</th>
                  <td className="p-3 text-slate-800">
                    Status: <strong className="text-emerald-700">{warehouse.currentStatus}</strong> · Date:{' '}
                    <strong className="text-slate-900">{warehouse.handoverDate}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Agency Information & Contact Form */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-1 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-800 border border-sky-200">
                <ShieldCheck className="h-4 w-4 text-sky-600" />
                SeaHome Verified Commercial Broker
              </span>

              <h3 className="mt-3 text-lg font-extrabold text-sky-950">{warehouse.listingAgency.name}</h3>

              <div className="mt-3 space-y-2 text-xs text-slate-700 font-medium">
                <p>
                  <strong className="text-slate-900">License:</strong> {warehouse.listingAgency.license}
                </p>
                <p>
                  <strong className="text-slate-900">Address:</strong> {warehouse.listingAgency.address}
                </p>
                <p>
                  <strong className="text-slate-900">Hours:</strong> {warehouse.listingAgency.hours}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-sky-100 pt-4">
              <a
                href={`tel:${warehouse.listingAgency.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-700 to-blue-800 py-3 text-sm font-extrabold text-white shadow-sm transition hover:from-sky-800 hover:to-blue-900 hover:shadow-md"
              >
                <Phone className="h-4 w-4" />
                Call Agent: {warehouse.listingAgency.phone}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
            <h3 className="text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
              <FileText className="h-5 w-5 text-sky-600" />
              Inquire About Warehouse Property #{warehouse.listingCode}
            </h3>

            {formSubmitted ? (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                <h4 className="mt-2 text-base font-extrabold text-emerald-950">Inquiry Sent Successfully!</h4>
                <p className="mt-1 text-xs text-emerald-800">
                  Thank you for reaching out to SeaHome Commercial Logistics. An advisor will contact you shortly regarding warehouse{' '}
                  <strong>{warehouse.listingCode}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="mt-4 space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Vance Global Logistics LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="m.vance@vancelogistics.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+81 3-5290-8800"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                  >
                    <option value="Schedule On-Site Warehouse Tour">Schedule On-Site Warehouse Tour</option>
                    <option value="Request Architectural Floor Plan PDF">Request Architectural Floor Plan PDF</option>
                    <option value="Check Container Truck Loading Clearance">Check Container Truck Loading Clearance</option>
                    <option value="Negotiate Lease Term & Handover Date">Negotiate Lease Term & Handover Date</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Warehouse Use Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Specify target lease start date, stored goods type, or truck size requirements."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 py-3 text-sm font-extrabold text-white shadow-md transition hover:from-sky-700 hover:to-blue-900 hover:shadow-lg cursor-pointer"
                >
                  Send Warehouse Inquiry #{warehouse.listingCode}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link
            to="/seahome-real-estates/warehouse"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-800 underline transition hover:text-sky-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rental Warehouse Search Top
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalWarehouseDetailPage;
