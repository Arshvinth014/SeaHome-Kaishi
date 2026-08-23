import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Building2,
  MapPin,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Mail,
  SlidersHorizontal,
  LayoutGrid,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import { PrefectureMapModal } from '../components/seahome/ShopRentals/PrefectureMapModal';
import { rentalListingsUrl } from '../components/seahome/seahomeRentalLineSearchData';

export type OfficeCategoryMeta = {
  id: string;
  title: string;
  subTitle: string;
  tsuboRange: string;
  areaRange: string;
  capacity: string;
  totalListings: number;
  description: string;
  features: string[];
  sampleProperties: {
    id: string;
    buildingName: string;
    rent: string;
    tsuboPrice: string;
    deposit: string;
    area: string;
    location: string;
    stationAccess: string;
    floor: string;
    badge: string;
    approvedTag?: string;
    imageUrl: string;
  }[];
  layoutGuide: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const OFFICE_CATEGORY_DATABASE: Record<string, OfficeCategoryMeta> = {
  under_10: {
    id: 'under_10',
    title: 'Small Offices Under 10 Tsubo',
    subTitle: 'Compact Business Suites & Startup Spaces (Up to 33 m²)',
    tsuboRange: 'Under 10 Tsubo',
    areaRange: 'Up to 33 m²',
    capacity: '1 - 5 People',
    totalListings: 14200,
    description: 'Explore compact office spaces and private business rooms under 10 tsubo. Perfect for freelancers, satellite branch offices, IT startups, and consulting firms looking to minimize overhead costs.',
    features: [
      'Immediate Occupancy Available',
      'No Key Money Required',
      'High-Speed Fiber Optic Ready',
      'Shared Meeting Rooms Access',
      'Near Station (Within 5-min walk)',
      'Individual Air Conditioning'
    ],
    sampleProperties: [
      {
        id: 'off-101',
        buildingName: 'Shibuya Executive Innovation Hub 3rd Floor',
        rent: '$1,800/month',
        tsuboPrice: '$195/tsubo',
        deposit: 'Deposit 2 mo / Key 0 mo',
        area: '28.50 m² (8.62 tsubo)',
        location: 'Dogenzaka, Shibuya-ku, Tokyo',
        stationAccess: '3-min walk from Shibuya Station',
        floor: '3rd Floor',
        badge: 'SOHO / Startup',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'off-102',
        buildingName: 'Niigata Station Plaza Small Office',
        rent: '$950/month',
        tsuboPrice: '$110/tsubo',
        deposit: 'Deposit 2 mo / Key 0 mo',
        area: '30.20 m² (9.13 tsubo)',
        location: 'Chuo-ku, Niigata City',
        stationAccess: '2-min walk from Niigata Station',
        floor: '4th Floor (Elevator)',
        approvedTag: 'Compact Suite',
        badge: 'Ready to Occupy',
        imageUrl: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=600&q=80',
      },
    ],
    layoutGuide: [
      {
        title: 'Optimizing Small Office Space',
        text: 'Use modular desk benches and wall-mounted whiteboards. A compact 8-10 tsubo layout comfortably accommodates 3-4 workstations plus a small visitor table.',
      },
    ],
    faqs: [
      {
        q: 'Can I register my corporate address at a small office under 10 tsubo?',
        a: 'Yes! All commercial office properties listed on SeaHome Net permit legal corporate registration.',
      },
    ],
  },

  '10_30': {
    id: '10_30',
    title: 'Mid-Sized Offices 10 to 30 Tsubo',
    subTitle: 'Standard Professional Workspaces (33 to 100 m²)',
    tsuboRange: '10 - 30 Tsubo',
    areaRange: '33 - 100 m²',
    capacity: '5 - 15 People',
    totalListings: 22800,
    description: 'Find versatile mid-sized office floors from 10 to 30 tsubo. Ideal for growing agencies, tech companies, accounting offices, and design studios seeking dedicated conference rooms and reception desks.',
    features: [
      'OA Floor Underfloor Wiring',
      'Dedicated Meeting Room Divider',
      '24-Hour Access & Electronic Keycard',
      'Elevator (2+ Units)',
      'Station Front Location',
      'Individual Air Conditioning Control'
    ],
    sampleProperties: [
      {
        id: 'off-201',
        buildingName: 'Shinjuku Center Building Office Floor',
        rent: '$3,800/month',
        tsuboPrice: '$172/tsubo',
        deposit: 'Deposit 4 mo / Key 1 mo',
        area: '73.10 m² (22.11 tsubo)',
        location: 'Nishi-Shinjuku, Shinjuku-ku, Tokyo',
        stationAccess: '4-min walk from Shinjuku Station',
        floor: '6th Floor',
        badge: 'OA Floor Included',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'off-202',
        buildingName: 'Osaka Umeda Business Tower 8th Floor',
        rent: '$3,200/month',
        tsuboPrice: '$150/tsubo',
        deposit: 'Deposit 3 mo / Key 1 mo',
        area: '68.50 m² (20.72 tsubo)',
        location: 'Kita-ku, Osaka City',
        stationAccess: '3-min walk from Umeda Station',
        floor: '8th Floor',
        badge: 'High Security',
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
      },
    ],
    layoutGuide: [
      {
        title: 'Zoning Conference & Team Areas',
        text: 'A 20-tsubo office allows a separate 6-person glass-walled meeting room, reception booth, and open-plan workspace for 8-12 employees.',
      },
    ],
    faqs: [
      {
        q: 'What is an OA floor (OAフロア)?',
        a: 'An OA floor is a raised floor system allowing electrical power cables and network ethernet wiring to run cleanly underneath the floor surface.',
      },
    ],
  },
};

/** Dynamic generator for any office category size or feature ID */
export function getOfficeCategoryDetail(id: string): OfficeCategoryMeta {
  const normalized = (id || '10_30').toLowerCase().trim();
  if (OFFICE_CATEGORY_DATABASE[normalized]) {
    return OFFICE_CATEGORY_DATABASE[normalized];
  }

  const titleName = id.replace(/[-_]/g, ' ').toUpperCase();

  return {
    id: normalized,
    title: `Rental Office Space (${titleName})`,
    subTitle: 'Commercial Building Office Properties in Japan',
    tsuboRange: `${titleName} Tsubo`,
    areaRange: 'Custom Size',
    capacity: '10 - 30+ People',
    totalListings: 18500,
    description: `Discover verified commercial office spaces for rent in prime corporate districts. Search properties equipped with high-grade security, transit convenience, and flexible office floor plans.`,
    features: [
      'OA Floor Underfloor Wiring',
      '24-Hour Access & Security',
      'Individual Air Conditioning',
      'Elevator Access',
      'Near Transit / Station Front',
      'Parking Space Available'
    ],
    sampleProperties: [
      {
        id: 'off-301',
        buildingName: `Prime Corporate Tower Unit (${titleName})`,
        rent: '$4,500/month',
        tsuboPrice: '$180/tsubo',
        deposit: 'Deposit 4 mo / Key 1 mo',
        area: '85.40 m² (25.83 tsubo)',
        location: 'Marunouchi, Chiyoda-ku, Tokyo',
        stationAccess: '2-min walk from Tokyo Station',
        floor: '12th Floor Landmark View',
        badge: 'Landmark Tower',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'off-302',
        buildingName: `Yokohama Landmark Office Suite`,
        rent: '$3,100/month',
        tsuboPrice: '$145/tsubo',
        deposit: 'Deposit 3 mo / Key 1 mo',
        area: '70.20 m² (21.23 tsubo)',
        location: 'Nishi-ku, Yokohama City',
        stationAccess: '4-min walk from Yokohama Station',
        floor: '7th Floor',
        badge: 'Furnished Office',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      },
    ],
    layoutGuide: [
      {
        title: 'Workplace Strategy & Employee Comfort',
        text: 'Plan layout based on 2.5–3.5 tsubo per employee to ensure healthy ergonomics, meeting room accessibility, and collaborative break spaces.',
      },
    ],
    faqs: [
      {
        q: 'How do I schedule an in-person office tour?',
        a: 'Click "Inquire Now" on any property card to connect directly with a licensed SeaHome Net commercial property specialist.',
      },
    ],
  };
}

export const RentalOfficeCategoryPage: React.FC = () => {
  const { sizeId, categorySlug } = useParams<{ sizeId?: string; categorySlug?: string }>();
  const navigate = useNavigate();
  const [isPrefectureModalOpen, setIsPrefectureModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const targetId = sizeId || categorySlug || '10_30';
  const category = useMemo(() => getOfficeCategoryDetail(targetId), [targetId]);

  const handleInquire = (buildingName: string) => {
    navigate(rentalListingsUrl(`/properties?q=${encodeURIComponent(buildingName)}`));
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-16 text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. BREADCRUMB TRAIL */}
      <div className="bg-white border-b border-sky-100 py-2.5 px-4 text-xs font-medium text-slate-500 shadow-xs">
        <div className={`${HUB_CONTAINER} flex flex-wrap items-center gap-1.5`}>
          <Link to="/" className="hover:text-sky-700 transition-colors">
            Real Estate & Housing Top
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/seahome-real-estates/rental" className="hover:text-sky-700 transition-colors">
            Rental
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/seahome-real-estates/rental-office" className="hover:text-sky-700 transition-colors">
            Office for Rent
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-sky-900 font-bold">{category.title}</span>
        </div>
      </div>

      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        {/* 2. HERO HEADER BLOCK */}
        <div className="rounded-2xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
                <Building2 className="w-4 h-4 text-sky-600" />
                <span>Commercial Office Portal</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Search for{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {category.subTitle} • SeaHome Net Commercial Real Estate
              </p>
            </div>

            {/* Total Available Listings Counter */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Available Offices</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{category.totalListings.toLocaleString()}</span>
                <span className="text-xs font-bold text-slate-600">units</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            {category.description}
          </p>

          {/* Region Picker Banner */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 p-4 rounded-xl border border-sky-200">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
              <span className="text-xs sm:text-sm font-extrabold text-sky-950">
                Filter {category.title} by prefecture or corporate district
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsPrefectureModalOpen(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span>Select a prefecture</span>
            </button>
          </div>
        </div>

        {/* 3. KEY SPECIFICATIONS & FEATURES */}
        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
            <SlidersHorizontal className="w-4 h-4 text-sky-600" />
            <h2 className="text-sm font-extrabold text-sky-950">
              Popular Building Features for {category.title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.features.map((feature) => {
              const isSelected = selectedFeature === feature;
              return (
                <button
                  key={feature}
                  type="button"
                  onClick={() => setSelectedFeature(isSelected ? null : feature)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${isSelected
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20 border border-sky-500'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900'
                    }`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-sky-500'}`} />
                  <span>{feature}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. OFFICE PROPERTY LISTINGS GRID */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-sky-600" />
              Featured {category.title} Property Listings
            </h2>
            <span className="text-xs text-slate-500 font-medium">Updated today</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {category.sampleProperties.map((property) => (
              <div
                key={property.id}
                className="rounded-2xl border border-sky-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={property.imageUrl}
                    alt={property.buildingName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-sky-600/90 backdrop-blur-md text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                    {property.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1 rounded-lg">
                    {property.floor}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                      {property.buildingName}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{property.location}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Monthly Rent</span>
                      <span className="text-sm font-extrabold text-sky-700">{property.rent}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Floor Area</span>
                      <span className="text-xs font-bold text-slate-800">{property.area}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Tsubo Rate</span>
                      <span className="text-xs font-medium text-slate-700">{property.tsuboPrice}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Station Walk</span>
                      <span className="text-xs font-medium text-slate-700 truncate">{property.stationAccess}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleInquire(property.buildingName)}
                      className="flex-1 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Inquire Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInquire(property.buildingName)}
                      className="px-4 py-2.5 rounded-xl border border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100 font-bold text-xs transition-all cursor-pointer"
                    >
                      View Property
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. OFFICE LAYOUT & WORKPLACE SETUP TIPS */}
        {category.layoutGuide.length > 0 && (
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
              <Sparkles className="w-5 h-5 text-sky-600" />
              <h2 className="text-base sm:text-lg font-extrabold text-sky-950">
                Workplace Layout Guide for {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.layoutGuide.map((guide, idx) => (
                <div key={idx} className="bg-sky-50/60 p-4 rounded-xl border border-sky-100 space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-sky-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium pl-6">
                    {guide.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. FAQS SECTION */}
        {category.faqs.length > 0 && (
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
              <HelpCircle className="w-5 h-5 text-sky-600" />
              <h2 className="text-base sm:text-lg font-extrabold text-sky-950">
                Frequently Asked Questions ({category.title})
              </h2>
            </div>
            <div className="space-y-3">
              {category.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-start gap-2">
                    <span className="text-sky-600 font-black shrink-0">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium pl-5 flex items-start gap-2">
                    <span className="text-emerald-600 font-black shrink-0">A.</span>
                    <span>{faq.a}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. OTHER OFFICE SIZES NAVIGATION */}
        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
          <h3 className="text-xs sm:text-sm font-extrabold text-sky-950">
            Browse Other Office Sizes & Floor Area Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'under_10', title: 'Under 10 Tsubo (< 33 m²)' },
              { id: '10_30', title: '10 - 30 Tsubo (33-100 m²)' },
              { id: '30_50', title: '30 - 50 Tsubo (100-165 m²)' },
              { id: '50_100', title: '50 - 100 Tsubo (165-330 m²)' },
              { id: 'over_100', title: 'Over 100 Tsubo (330 m²+)' },
            ].map((sizeItem) => (
              <Link
                key={sizeItem.id}
                to={`/seahome-real-estates/rental-office/size/${sizeItem.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-bold text-sky-900 transition-all"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-sky-600" />
                <span>{sizeItem.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* BACK TO RENTAL OFFICE MAIN BUTTON */}
        <div className="pt-4 text-center">
          <Link
            to="/seahome-real-estates/rental-office"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-sky-200 bg-white text-sky-800 font-bold text-xs sm:text-sm shadow-xs hover:bg-sky-50 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Rental Office Main Page</span>
          </Link>
        </div>
      </div>

      {/* PREFECTURE MAP MODAL */}
      <PrefectureMapModal
        isOpen={isPrefectureModalOpen}
        onClose={() => setIsPrefectureModalOpen(false)}
      />
    </div>
  );
};

export default RentalOfficeCategoryPage;
