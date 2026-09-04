import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Heart,
  Layers,
  MapPin,
  Phone,
  Printer,
  Send,
  ShieldCheck,
  Sparkles,
  Wifi,
  Zap,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';

export interface OfficeDetailSpec {
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
  access24h: string;
  oaFloor: string;
  airConditioning: string;
  elevator: string;
  parking: string;
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

export function getRentalOfficeDetail(id: string): OfficeDetailSpec {
  const officeId = id || '1082505888';

  const mockOffices: Record<string, Partial<OfficeDetailSpec>> = {
    '1082505888': {
      listingCode: 'OFF-1082505888',
      label: 'Rental Office Space & Executive Suite',
      title: 'Shimo-Ochiai Station Front Prime Executive Office Building 3F',
      propertyName: 'Shimo-Ochiai Financial Tower & Office Center',
      rentYen: 165000,
      rentDisplay: '165,000 yen / month',
      commonFeeDisplay: '15,000 yen / month',
      depositDisplay: '3 months rent',
      keyMoneyDisplay: '1 month rent',
      guaranteeFeeDisplay: '50% of 1st month rent',
      renewalFeeDisplay: '1 month new rent',
      usableAreaM2: '20.00 m²',
      usableAreaTsubo: '6.05 tsubo',
      floorLevel: '3rd Floor (3F of 8-Storey Commercial Building)',
      structure: 'Steel Reinforced Concrete (SRC Structure)',
      yearBuilt: 'Built in 2020 (Modern Earthquake-Resistant Structure)',
      stationAccess: '3-minute walk from Shimo-Ochiai Station (Seibu Shinjuku Line)',
      address: 'Shinjuku Ward, Tokyo 161-0033',
    },
    '1082505889': {
      listingCode: 'OFF-1082505889',
      label: 'Large Floorplate Commercial Office',
      title: 'Kamikitadai Station Roadside Commercial Headquarters 2F',
      propertyName: 'Kamikitadai Business Gateway Plaza',
      rentYen: 924000,
      rentDisplay: '924,000 yen / month',
      commonFeeDisplay: '60,000 yen / month',
      depositDisplay: '6 months rent',
      keyMoneyDisplay: '1 month rent',
      usableAreaM2: '502.64 m²',
      usableAreaTsubo: '152.05 tsubo',
      floorLevel: '2nd Floor (2F of 5-Storey Building)',
      structure: 'Steel Frame (S Structure)',
      yearBuilt: 'Built in 2018',
      stationAccess: '8-minute walk from Kamikitadai Station (Tama Monorail)',
      address: 'Higashiyamato City, Tokyo 207-0023',
    },
    '1082505890': {
      listingCode: 'OFF-1082505890',
      label: 'Shops & Offices for Rent',
      title: 'Akaike Station Avenue Boutique Office & Showroom Space',
      propertyName: 'Akaike Stationfront Corporate Suites',
      rentYen: 159500,
      rentDisplay: '159,500 yen / month',
      commonFeeDisplay: '12,000 yen / month',
      usableAreaM2: '52.00 m²',
      usableAreaTsubo: '15.73 tsubo',
      stationAccess: '3-minute walk from Akaike Station (Tsurumai Line)',
      address: 'Nisshin City, Aichi 470-0125',
    },
  };

  const base = mockOffices[officeId] || {};

  return {
    id: officeId,
    listingCode: base.listingCode || `OFF-${officeId}`,
    label: base.label || 'Rental Office Space',
    title: base.title || 'Shinjuku Prime Central Business District Office 4F',
    propertyName: base.propertyName || 'SeaHome Center Building Shinjuku',
    rentYen: base.rentYen || 245000,
    rentDisplay: base.rentDisplay || '245,000 yen / month',
    commonFeeDisplay: base.commonFeeDisplay || '20,000 yen / month',
    depositDisplay: base.depositDisplay || '4 months rent',
    keyMoneyDisplay: base.keyMoneyDisplay || '1 month rent',
    guaranteeFeeDisplay: base.guaranteeFeeDisplay || '50% of 1st month rent',
    renewalFeeDisplay: base.renewalFeeDisplay || '1 month new rent',
    usableAreaM2: base.usableAreaM2 || '45.00 m²',
    usableAreaTsubo: base.usableAreaTsubo || '13.61 tsubo',
    floorLevel: base.floorLevel || '4th Floor (4F of 10-Storey Building)',
    structure: base.structure || 'Reinforced Concrete (RC Structure)',
    yearBuilt: base.yearBuilt || 'Built in 2019 (High Earthquake Safety Rating)',
    access24h: '24-Hour Unlimited Smart Access Card Entry',
    oaFloor: '50mm OA Raised Flooring Installed (Cable Management Ready)',
    airConditioning: 'Individual Multi-Zone HVAC Climate Control',
    elevator: '2 High-Speed Passenger Elevators + 1 Freight Service Elevator',
    parking: 'Underground Mechanical Parking Space Available (Fee applies)',
    address: base.address || 'Shinjuku Ward, Tokyo 160-0022',
    stationAccess: base.stationAccess || '4-minute walk from Shinjuku Station',
    currentStatus: 'Vacant & Ready for Immediate Occupancy',
    handoverDate: 'Immediate Handover Available',
    description:
      'High-grade executive office space located in prime corporate business corridor. Features 50mm OA raised flooring, 24-hour smart access security system, high-speed fiber internet infrastructure, and energy-efficient individual air conditioning. Ideal for corporate branch offices, tech startups, law firms, and consulting agencies.',
    features: [
      '24/7 Unlimited Access Card Security',
      '50mm OA Raised Floor (Wiring Harness Ready)',
      'Individual Air Conditioning & Heating',
      'Optical Fiber High-Speed Internet Infrastructure',
      'Dual Passenger Elevators & Service Access',
      'Separate Male & Female Restroom Facilities',
      'Auto-Lock Entrance Security & Intercom',
      'Emergency Back-up Generator Connection',
      'Prime Business District Street Access',
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        caption: 'Office Open Floorplan & Natural Daylighting',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Modern Executive Workspace & Desk Arrangement',
      },
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
        caption: 'Glass Conference Room & Meeting Suite',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        caption: 'Building Exterior Façade & Entrance Lobby',
      },
    ],
    listingAgency: {
      name: 'SeaHome Corporate Office Real Estate Partners',
      license: 'Governor of Tokyo License (4) No. 88201',
      phone: '03-5290-8800',
      address: '2-4-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-0023',
      hours: '9:00 AM - 6:30 PM (Mon - Sat)',
    },
  };
}

export const SeahomeRentalOfficeDetailPage: React.FC = () => {
  const { officeId = '1082505888' } = useParams<{ officeId: string }>();
  const office = useMemo(() => getRentalOfficeDetail(officeId), [officeId]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    phone: '',
    inquiryType: 'Schedule On-Site Office Tour',
    message: '',
  });

  const activeImage = office.galleryImages[activeImageIndex] ?? office.galleryImages[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-16">
      {/* 1. TOP NAVBAR / BREADCRUMB STRIP */}
      <div className="border-b border-sky-100 bg-white shadow-2xs">
        <div className={HUB_CONTAINER}>
          <div className="flex flex-wrap items-center justify-between gap-3 py-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link to="/seahome-real-estates" className="text-sky-600 hover:underline">
                SeaHome Net Top
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link to="/seahome-real-estates/rental-office" className="text-sky-600 hover:underline">
                Rental Office Search
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800 line-clamp-1 max-w-xs sm:max-w-md">
                {office.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFavorite(!favorite)}
                className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition ${favorite
                  ? 'border-rose-300 bg-rose-50 text-rose-600'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <Heart className={`h-4 w-4 ${favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{favorite ? 'Saved to Favorites' : 'Save Office'}</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:flex"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print Spec</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className={`${HUB_CONTAINER} mt-6 space-y-6`}>
        {/* 2. TITLE & LISTING HEADER BANNER */}
        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-sky-600 px-2.5 py-1 text-xs font-bold text-white shadow-2xs">
                {office.label}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Listing Code: <strong className="text-slate-800">{office.listingCode}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
              <ShieldCheck className="h-4 w-4 text-sky-600" />
              <span>Verified SeaHome Office Partner</span>
            </div>
          </div>

          <h1 className="mt-3 text-xl font-black text-slate-900 sm:text-2xl lg:text-3xl leading-snug">
            {office.title}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-sky-600 shrink-0" />
              <span className="font-semibold text-slate-800">{office.propertyName}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-sky-600 shrink-0" />
              <span>{office.address}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-sky-600 shrink-0" />
              <span className="font-medium text-sky-800">{office.stationAccess}</span>
            </div>
          </div>
        </div>

        {/* 3. HERO GALLERY & QUICK FINANCIAL OVERVIEW GRID */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Photo Showcase */}
          <div className="space-y-3 lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md">
              <img
                src={activeImage.url}
                alt={activeImage.caption}
                className="h-80 w-full object-cover sm:h-[400px] transition-all duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                <p className="text-xs font-bold">{activeImage.caption}</p>
                <p className="text-[11px] text-slate-300">
                  Image {activeImageIndex + 1} of {office.galleryImages.length}
                </p>
              </div>
            </div>

            {/* Thumbnail Selector Carousel */}
            <div className="grid grid-cols-4 gap-2">
              {office.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative overflow-hidden rounded-xl border-2 transition ${activeImageIndex === idx
                    ? 'border-sky-600 ring-2 ring-sky-300'
                    : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                >
                  <img src={img.url} alt={img.caption} className="h-20 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Financial & Key Features Box */}
          <div className="space-y-4 lg:col-span-5">
            {/* Rent & Deposit Box */}
            <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-white via-sky-50/40 to-indigo-50/30 p-5 shadow-xs">
              <div className="border-b border-sky-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Monthly Rental Rate
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-sky-900 sm:text-3xl">
                    {office.rentDisplay}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-600">
                  Common Fee / Service Charge:{' '}
                  <strong className="text-slate-900">{office.commonFeeDisplay}</strong>
                </p>
              </div>

              {/* Deposit & Terms Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-sky-100 bg-white p-3 shadow-2xs">
                  <span className="text-slate-500 block">Security Deposit</span>
                  <strong className="text-slate-900 text-sm">{office.depositDisplay}</strong>
                </div>
                <div className="rounded-xl border border-sky-100 bg-white p-3 shadow-2xs">
                  <span className="text-slate-500 block">Key Money (Rei-kin)</span>
                  <strong className="text-slate-900 text-sm">{office.keyMoneyDisplay}</strong>
                </div>
                <div className="rounded-xl border border-sky-100 bg-white p-3 shadow-2xs">
                  <span className="text-slate-500 block">Guarantee Company Fee</span>
                  <strong className="text-slate-800 font-semibold">{office.guaranteeFeeDisplay}</strong>
                </div>
                <div className="rounded-xl border border-sky-100 bg-white p-3 shadow-2xs">
                  <span className="text-slate-500 block">Renewal Fee</span>
                  <strong className="text-slate-800 font-semibold">{office.renewalFeeDisplay}</strong>
                </div>
              </div>

              {/* Usable Space Stats */}
              <div className="mt-4 rounded-xl border border-sky-200 bg-sky-600 p-3 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-medium opacity-90 block">Usable Floor Area</span>
                    <span className="text-lg font-black">{office.usableAreaM2}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-medium opacity-90 block">Tsubo Equivalent</span>
                    <span className="text-lg font-black">{office.usableAreaTsubo}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 space-y-2">
                <a
                  href="#office-inquiry-form"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-center text-sm font-bold text-white shadow-md hover:bg-sky-700 transition"
                >
                  <Send className="h-4 w-4" />
                  <span>Request Office Tour / Inquiry</span>
                </a>
                <a
                  href={`tel:${office.listingAgency.phone.replace(/-/g, '')}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-sky-300 bg-white py-3 text-center text-sm font-bold text-sky-800 hover:bg-sky-50 transition"
                >
                  <Phone className="h-4 w-4 text-sky-600" />
                  <span>Call Agent: {office.listingAgency.phone}</span>
                </a>
              </div>
            </div>

            {/* Technical Highlights Chips */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Technical Features
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 text-slate-700">
                  <Zap className="h-4 w-4 text-sky-600 shrink-0" />
                  <span className="line-clamp-1 font-medium">{office.oaFloor}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 text-slate-700">
                  <Clock className="h-4 w-4 text-sky-600 shrink-0" />
                  <span className="line-clamp-1 font-medium">{office.access24h}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 text-slate-700">
                  <Wifi className="h-4 w-4 text-sky-600 shrink-0" />
                  <span className="line-clamp-1 font-medium">Fiber Optical Ready</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 text-slate-700">
                  <Layers className="h-4 w-4 text-sky-600 shrink-0" />
                  <span className="line-clamp-1 font-medium">{office.floorLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. OFFICE FEATURES & AMENITIES */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Sparkles className="h-5 w-5 text-sky-600" />
            <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
              Office Amenities & Infrastructure Checklist
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {office.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-sky-100 bg-sky-50/50 px-3 py-2.5 text-xs font-semibold text-slate-800"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DETAILED SPECIFICATION TABLE */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileText className="h-5 w-5 text-sky-600" />
            <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
              Full Property Details & Leasing Specifications
            </h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 text-xs">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="w-1/4 p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Property Name
                  </th>
                  <td className="p-3 font-semibold text-slate-900">{office.propertyName}</td>
                  <th className="w-1/4 p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-l border-slate-200">
                    Listing Code
                  </th>
                  <td className="p-3 font-semibold text-slate-900">{office.listingCode}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Monthly Rent
                  </th>
                  <td className="p-3 font-bold text-sky-900">{office.rentDisplay}</td>
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-l border-slate-200">
                    Common Maintenance Fee
                  </th>
                  <td className="p-3 font-semibold text-slate-900">{office.commonFeeDisplay}</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Security Deposit
                  </th>
                  <td className="p-3 text-slate-900">{office.depositDisplay}</td>
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-l border-slate-200">
                    Key Money (Rei-kin)
                  </th>
                  <td className="p-3 text-slate-900">{office.keyMoneyDisplay}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Usable Floor Area
                  </th>
                  <td className="p-3 font-semibold text-slate-900">
                    {office.usableAreaM2} ({office.usableAreaTsubo})
                  </td>
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-l border-slate-200">
                    Floor Level
                  </th>
                  <td className="p-3 text-slate-900">{office.floorLevel}</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Building Structure
                  </th>
                  <td className="p-3 text-slate-900">{office.structure}</td>
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-l border-slate-200">
                    Year Built / Age
                  </th>
                  <td className="p-3 text-slate-900">{office.yearBuilt}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Station & Transit Access
                  </th>
                  <td colSpan={3} className="p-3 font-medium text-slate-900">
                    {office.stationAccess}
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Location Address
                  </th>
                  <td colSpan={3} className="p-3 text-slate-900">
                    {office.address}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Current Status & Handover
                  </th>
                  <td className="p-3 font-semibold text-emerald-700">{office.currentStatus}</td>
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-l border-slate-200">
                    Elevator & Parking
                  </th>
                  <td className="p-3 text-slate-900">
                    {office.elevator} / {office.parking}
                  </td>
                </tr>
                <tr>
                  <th className="p-3 font-bold text-slate-700 bg-sky-50/70 border-r border-slate-200">
                    Property Remarks
                  </th>
                  <td colSpan={3} className="p-3 text-slate-700 leading-relaxed">
                    {office.description}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. MANAGING AGENT & INQUIRY FORM */}
        <div id="office-inquiry-form" className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Managing Agency Card */}
          <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-2xs lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 border-b border-sky-100 pb-2">
                <Building2 className="h-5 w-5 text-sky-600" />
                <h3 className="text-base font-extrabold text-slate-900">Listing Managing Broker</h3>
              </div>

              <h4 className="text-sm font-bold text-sky-900">{office.listingAgency.name}</h4>
              <p className="mt-1 text-xs text-slate-500">{office.listingAgency.license}</p>

              <div className="mt-4 space-y-2 text-xs text-slate-700">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sky-600 shrink-0" />
                  <span>{office.listingAgency.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-sky-600 shrink-0" />
                  <span>{office.listingAgency.hours}</span>
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50 p-4 text-center">
              <span className="text-xs font-bold text-sky-900 block">
                Direct Telephone Inquiries
              </span>
              <a
                href={`tel:${office.listingAgency.phone.replace(/-/g, '')}`}
                className="mt-1 inline-flex items-center gap-2 text-xl font-black text-sky-700 hover:underline"
              >
                <Phone className="h-5 w-5" />
                <span>{office.listingAgency.phone}</span>
              </a>
              <p className="mt-1 text-[11px] text-slate-500">
                Mention listing code <strong>{office.listingCode}</strong> when calling.
              </p>
            </div>
          </div>

          {/* Interactive Tour Inquiry Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs lg:col-span-7 sm:p-6">
            <h3 className="text-base font-extrabold text-slate-900 mb-1">
              Inquire about this Office Space
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Schedule a viewing tour or request lease proposal details from our office specialists.
            </p>

            {formSubmitted ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 mb-2" />
                <h4 className="text-base font-bold text-emerald-900">Inquiry Received!</h4>
                <p className="mt-1 text-xs text-emerald-700">
                  Thank you! A SeaHome office leasing consultant will contact you within 1 business hour.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 p-2.5 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Horizon Tech Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 p-2.5 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 p-2.5 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 03-5290-8800"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 p-2.5 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 p-2.5 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none bg-white"
                  >
                    <option>Schedule On-Site Office Tour</option>
                    <option>Request Floor Plan & Lease Proposal</option>
                    <option>Check Vacancy Status & Handover Schedule</option>
                    <option>Inquire About Fit-Out & OA Options</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Additional Notes / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Enter desired move-in timeline, space headcount, or technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 p-2.5 text-xs focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-sm font-bold text-white shadow-md hover:bg-sky-700 transition"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Office Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeahomeRentalOfficeDetailPage;
