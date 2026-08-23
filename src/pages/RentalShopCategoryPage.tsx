import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Store,
  MapPin,
  Building2,
  Sparkles,
  Search,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Heart,
  Mail,
  SlidersHorizontal,
  Home,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import { getRentalShopCategory, slugifyCategoryItem } from '../config/rentalShopCategories';
import { PrefectureMapModal } from '../components/seahome/ShopRentals/PrefectureMapModal';
import { rentalListingsUrl } from '../components/seahome/seahomeRentalLineSearchData';

export const RentalShopCategoryPage: React.FC = () => {
  const { categorySlug = 'clinic-medical' } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const [isPrefectureModalOpen, setIsPrefectureModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const category = useMemo(
    () => getRentalShopCategory(categorySlug),
    [categorySlug]
  );

  const handleInquire = (listingTitle: string) => {
    navigate(rentalListingsUrl(`/properties?q=${encodeURIComponent(category.title)}`));
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
          <Link to="/seahome-real-estates/rental-shop" className="hover:text-sky-700 transition-colors">
            Store for Rent
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
                <Store className="w-4 h-4 text-sky-600" />
                <span>{category.groupTitle}</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Search for{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {category.title}
                </span>{' '}
                commercial rental properties
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {category.japaneseTitle} • SeaHome Net Business Property Portal
              </p>
            </div>

            {/* Total Available Listings Badge */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Available Listings Today</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{category.totalCount.toLocaleString()}</span>
                <span className="text-xs font-bold text-slate-600">units</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            {category.description}
          </p>

          {/* Quick Region Picker Action Banner */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 p-4 rounded-xl border border-sky-200">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
              <span className="text-xs sm:text-sm font-extrabold text-sky-950">
                Filter {category.title} rental stores by prefecture or city
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

        {/* 3. POPULAR CRITERIA FILTER CHIPS */}
        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
            <SlidersHorizontal className="w-4 h-4 text-sky-600" />
            <h2 className="text-sm font-extrabold text-sky-950">
              Popular Filter Criteria for {category.title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.criteriaTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(isSelected ? null : tag)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20 border border-sky-500'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900'
                  }`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-sky-500'}`} />
                  <span>{tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. PROPERTY LISTINGS GRID */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-sky-600" />
              Featured {category.title} Properties for Rent
            </h2>
            <span className="text-xs text-slate-500 font-medium">Updated today</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {category.sampleListings.map((listing) => (
              <div
                key={listing.id}
                className="rounded-2xl border border-sky-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={listing.img}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-sky-600/90 backdrop-blur-md text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                    {listing.approvedTag}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1 rounded-lg">
                    {listing.floor}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                      {listing.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{listing.location}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Rent</span>
                      <span className="text-sm font-extrabold text-sky-700">{listing.rent}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Floor Area</span>
                      <span className="text-xs font-bold text-slate-800">{listing.area}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Deposit / Key</span>
                      <span className="text-xs font-medium text-slate-700">{listing.deposit}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Station Access</span>
                      <span className="text-xs font-medium text-slate-700 truncate">{listing.stationAccess}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleInquire(listing.title)}
                      className="flex-1 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Inquire Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInquire(listing.title)}
                      className="px-4 py-2.5 rounded-xl border border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100 font-bold text-xs transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. STORE OPENING TIPS & GUIDELINES */}
        {category.openingTips.length > 0 && (
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
              <Sparkles className="w-5 h-5 text-sky-600" />
              <h2 className="text-base sm:text-lg font-extrabold text-sky-950">
                Key Considerations for Opening a {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.openingTips.map((tip, idx) => (
                <div key={idx} className="bg-sky-50/60 p-4 rounded-xl border border-sky-100 space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-sky-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium pl-6">
                    {tip.text}
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

        {/* 7. RELATED BUSINESS CATEGORIES BAR */}
        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm space-y-3">
          <h3 className="text-xs sm:text-sm font-extrabold text-sky-950">
            Explore Other Related Commercial Shop Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.relatedSlugs.map((relSlug) => {
              const relCat = getRentalShopCategory(relSlug);
              return (
                <Link
                  key={relSlug}
                  to={`/seahome-real-estates/rental-shop/category/${relSlug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-bold text-sky-900 transition-all"
                >
                  <Store className="w-3.5 h-3.5 text-sky-600" />
                  <span>{relCat.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* BACK TO RENTAL SHOP TOP BUTTON */}
        <div className="pt-4 text-center">
          <Link
            to="/seahome-real-estates/rental-shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-sky-200 bg-white text-sky-800 font-bold text-xs sm:text-sm shadow-xs hover:bg-sky-50 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Rental Shop Main Page</span>
          </Link>
        </div>
      </div>

      {/* PREFECTURE MAP SELECTION MODAL */}
      <PrefectureMapModal
        isOpen={isPrefectureModalOpen}
        onClose={() => setIsPrefectureModalOpen(false)}
      />
    </div>
  );
};

export default RentalShopCategoryPage;
