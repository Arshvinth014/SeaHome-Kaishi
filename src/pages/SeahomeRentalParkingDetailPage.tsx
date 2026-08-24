import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Car,
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
  Zap,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  getParkingDetail,
  type ParkingDetailSpec,
} from '../components/seahome/ParkingRentals/parkingDiscoveryData';

export const SeahomeRentalParkingDetailPage: React.FC = () => {
  const { parkingId = 'p1' } = useParams<{ parkingId: string }>();
  const parking: ParkingDetailSpec = useMemo(() => getParkingDetail(parkingId), [parkingId]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleModel: '',
    inquiryType: 'Reserve Parking Spot',
    message: '',
  });

  const activeImage = parking.galleryImages[activeImageIndex] ?? parking.galleryImages[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 pb-16 animate-fade-in-up">
      {/* Top Navigation Breadcrumb */}
      <nav className="border-b border-sky-100 bg-white/90 backdrop-blur-md py-2.5 shadow-2xs">
        <div className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold text-sky-900 ${HUB_CONTAINER}`}>
          <Link to="/seahome-real-estates" className="transition hover:text-sky-600">
            SeaHome
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/seahome-real-estates/parking" className="transition hover:text-sky-600">
            Rental Parking
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">{parking.label}</span>
          <span className="text-gray-400">/</span>
          <span className="text-slate-600 line-clamp-1 max-w-[200px] sm:max-w-xs">{parking.title}</span>
        </div>
      </nav>

      {/* Main Header Banner */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-sky-950 to-indigo-950 py-6 sm:py-8 text-white shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center pointer-events-none" />
        <div className={`relative z-10 ${HUB_CONTAINER}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-sky-500/20 px-2.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-300 ring-1 ring-sky-400/40 flex items-center gap-1.5">
                <Car className="h-3.5 w-3.5 text-sky-400" />
                {parking.label}
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-sky-100">
                Listing ID: {parking.listingCode}
              </span>
            </div>

            {/* Quick Actions */}
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
                Print Details
              </button>
              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: parking.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Property link copied to clipboard!');
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
            {parking.title}
          </h1>

          <p className="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-sky-100/90 sm:text-sm">
            <MapPin className="h-4 w-4 shrink-0 text-sky-400" />
            <span>{parking.address}</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-sky-200">{parking.accessStation}</span>
          </p>
        </div>
      </header>

      {/* Main Content Body */}
      <div className={`mt-6 space-y-8 ${HUB_CONTAINER}`}>
        {/* Top Highlight Summary Card */}
        <section className="grid grid-cols-1 gap-4 rounded-2xl border border-sky-100/90 bg-white p-5 shadow-sm sm:p-6 md:grid-cols-4 md:gap-6">
          <div className="md:col-span-2 border-b border-sky-100 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Monthly Rent</p>
            <p className="mt-1 text-2xl font-black text-sky-950 sm:text-3xl">
              ¥{parking.rentYen.toLocaleString()}{' '}
              <span className="text-sm font-semibold text-slate-500">/ month</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="rounded-md bg-sky-50 px-2.5 py-1 border border-sky-200/60">
                Deposit: <strong className="text-sky-900">{parking.depositDisplay}</strong>
              </span>
              <span className="rounded-md bg-sky-50 px-2.5 py-1 border border-sky-200/60">
                Key Money: <strong className="text-sky-900">{parking.keyMoneyDisplay}</strong>
              </span>
              <span className="rounded-md bg-sky-50 px-2.5 py-1 border border-sky-200/60">
                Guarantee Fee: <strong className="text-sky-900">{parking.guaranteeFeeDisplay}</strong>
              </span>
            </div>
          </div>

          <div className="border-b border-sky-100 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Parking Space Type</p>
            <p className="mt-1 text-base font-extrabold text-sky-950">{parking.parkingType}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">Renewal Fee: {parking.renewalFeeDisplay}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Handover Status</p>
            <p className="mt-1 text-base font-extrabold text-slate-800">{parking.handoverDate}</p>
            <div className="mt-2 inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {parking.currentStatus}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
            <Maximize2 className="h-5 w-5 text-sky-600" />
            Parking Spot Photos & Access Layout
          </h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_260px]">
            <div className="relative overflow-hidden rounded-xl border border-sky-100 bg-slate-100">
              <img
                src={activeImage.url}
                alt={activeImage.caption}
                className="aspect-[16/10] w-full object-cover transition-all duration-300"
              />
              <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-xs">
                Photo {activeImageIndex + 1} of {parking.galleryImages.length}
              </span>
              <p className="border-t border-sky-100 bg-sky-50/80 px-4 py-2 text-center text-xs font-bold text-sky-950">
                {activeImage.caption}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
                {parking.galleryImages.map((img, idx) => (
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
                <p className="text-xs font-bold text-sky-900">Vehicle Size Test Available</p>
                <p className="mt-0.5 text-[11px] text-slate-600">Test park your vehicle prior to signing lease contract.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Dimensions & Limits Card */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-sky-600" />
            Vehicle Size & Weight Restrictions
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3 text-center">
              <p className="text-[10px] font-extrabold uppercase text-sky-700">Max Length</p>
              <p className="mt-1 text-sm font-extrabold text-sky-950">{parking.vehicleLimits.maxLength}</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3 text-center">
              <p className="text-[10px] font-extrabold uppercase text-sky-700">Max Width</p>
              <p className="mt-1 text-sm font-extrabold text-sky-950">{parking.vehicleLimits.maxWidth}</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3 text-center">
              <p className="text-[10px] font-extrabold uppercase text-sky-700">Max Height</p>
              <p className="mt-1 text-sm font-extrabold text-sky-950">{parking.vehicleLimits.maxHeight}</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3 text-center">
              <p className="text-[10px] font-extrabold uppercase text-sky-700">Max Weight</p>
              <p className="mt-1 text-sm font-extrabold text-sky-950">{parking.vehicleLimits.maxWeight}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-xl border border-sky-100 bg-sky-50/70 p-3 text-center">
              <p className="text-[10px] font-extrabold uppercase text-sky-700">Min Clearance</p>
              <p className="mt-1 text-sm font-extrabold text-sky-950">{parking.vehicleLimits.groundClearance}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold text-sky-950 mb-2">Allowed Vehicle Types:</p>
            <div className="flex flex-wrap gap-2">
              {parking.allowedVehicleTypes.map((vType) => (
                <span
                  key={vType}
                  className="rounded-lg bg-sky-100/80 px-3 py-1 text-xs font-extrabold text-sky-900 border border-sky-200"
                >
                  {vType}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Features Badges */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-sky-600" />
            Security & Parking Spot Amenities
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {parking.securityFeatures.map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100/80 px-3.5 py-2 text-xs font-extrabold text-sky-900 border border-sky-200/70 shadow-2xs"
              >
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                {feat}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-sky-100 bg-gradient-to-r from-sky-50/80 via-white to-sky-50/40 p-4 text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
            <p className="font-bold text-sky-950 mb-1">Property Description</p>
            {parking.description}
          </div>
        </section>

        {/* Comprehensive Parking Specs Table */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
            <FileText className="h-5 w-5 text-sky-600" />
            Full Parking Specifications & Contract Terms
          </h2>

          <div className="overflow-hidden rounded-xl border border-sky-100">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-sky-100">
                <tr className="bg-sky-50/50">
                  <th className="w-1/3 bg-sky-100/60 p-3 font-extrabold text-sky-950 sm:w-1/4">Listing Title</th>
                  <td className="p-3 font-bold text-slate-900">{parking.title}</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Property Category</th>
                  <td className="p-3 text-slate-800">{parking.label}</td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Monthly Rent</th>
                  <td className="p-3 font-extrabold text-sky-700 text-base">¥{parking.rentYen.toLocaleString()} / month</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Deposit / Key Money</th>
                  <td className="p-3 text-slate-800">
                    Deposit: <strong className="text-slate-900">{parking.depositDisplay}</strong> · Key Money:{' '}
                    <strong className="text-slate-900">{parking.keyMoneyDisplay}</strong>
                  </td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Guarantee Fee</th>
                  <td className="p-3 text-slate-800">{parking.guaranteeFeeDisplay}</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Renewal Fee</th>
                  <td className="p-3 text-slate-800">{parking.renewalFeeDisplay}</td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Parking Type</th>
                  <td className="p-3 font-extrabold text-slate-900">{parking.parkingType}</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Address / Location</th>
                  <td className="p-3 text-slate-800">{parking.address}</td>
                </tr>
                <tr className="bg-sky-50/50">
                  <th className="bg-sky-100/60 p-3 font-extrabold text-sky-950">Station Access</th>
                  <td className="p-3 text-slate-800">{parking.accessStation}</td>
                </tr>
                <tr>
                  <th className="bg-sky-50/70 p-3 font-extrabold text-sky-950">Current Status & Handover</th>
                  <td className="p-3 text-slate-800">
                    Status: <strong className="text-emerald-700">{parking.currentStatus}</strong> · Handover:{' '}
                    <strong className="text-slate-900">{parking.handoverDate}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Managing Agency Card & Inquiry Form */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-1 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-800 border border-sky-200">
                <ShieldCheck className="h-4 w-4 text-sky-600" />
                SeaHome Verified Managing Agency
              </span>

              <h3 className="mt-3 text-lg font-extrabold text-sky-950">{parking.listingAgency.name}</h3>

              <div className="mt-3 space-y-2 text-xs text-slate-700 font-medium">
                <p>
                  <strong className="text-slate-900">License:</strong> {parking.listingAgency.license}
                </p>
                <p>
                  <strong className="text-slate-900">Address:</strong> {parking.listingAgency.address}
                </p>
                <p>
                  <strong className="text-slate-900">Hours:</strong> {parking.listingAgency.hours}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-sky-100 pt-4">
              <a
                href={`tel:${parking.listingAgency.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-700 to-indigo-800 py-3 text-sm font-extrabold text-white shadow-sm transition hover:from-sky-800 hover:to-indigo-900 hover:shadow-md"
              >
                <Phone className="h-4 w-4" />
                Call Agent: {parking.listingAgency.phone}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
            <h3 className="text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
              <FileText className="h-5 w-5 text-sky-600" />
              Inquire About Parking Listing #{parking.listingCode}
            </h3>

            {formSubmitted ? (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                <h4 className="mt-2 text-base font-extrabold text-emerald-950">Inquiry Sent Successfully!</h4>
                <p className="mt-1 text-xs text-emerald-800">
                  Thank you for reaching out to SeaHome. An advisor will contact you shortly regarding parking space{' '}
                  <strong>{parking.listingCode}</strong>.
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
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+81 90-1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Vehicle Make / Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Toyota RAV4 / Honda Civic"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
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
                    <option value="Reserve Parking Spot">Reserve Monthly Parking Spot</option>
                    <option value="Schedule Vehicle Fit Test">Schedule Vehicle Size Test Fit</option>
                    <option value="Lease Term Negotiation">Negotiate Lease Term & Conditions</option>
                    <option value="General Information">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Specify preferred lease start date or vehicle roof rack / modification details."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-300 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-800 py-3 text-sm font-extrabold text-white shadow-md transition hover:from-sky-700 hover:to-indigo-900 hover:shadow-lg cursor-pointer"
                >
                  Send Inquiry for Parking Space #{parking.listingCode}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link
            to="/seahome-real-estates/parking"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-800 underline transition hover:text-sky-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rental Parking Search Top
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalParkingDetailPage;
