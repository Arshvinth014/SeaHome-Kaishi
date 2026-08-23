import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  Building2,
  Store,
  MapPin,
  Sparkles,
  Search,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Mail,
  SlidersHorizontal,
  LayoutGrid,
  Network,
  Map,
  TrendingUp,
  Filter,
  CheckSquare,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import { getPrefectureCityData, type PrefectureCityData } from '../components/seahome/seahomePrefectureCityData';
import { rentalListingsUrl } from '../components/seahome/seahomeRentalLineSearchData';

export const PrefectureCityPage: React.FC = () => {
  const { prefectureSlug = 'iwate' } = useParams<{ prefectureSlug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const isOfficeMode = location.pathname.includes('/rental-office');
  const propertyTypeLabel = isOfficeMode ? 'Rental Office' : 'Rental Shop';
  const parentPath = isOfficeMode ? '/seahome-real-estates/rental-office' : '/seahome-real-estates/rental-shop';

  // Get prefecture city database
  const prefData: PrefectureCityData = useMemo(() => {
    const capitalizedName = prefectureSlug.charAt(0).toUpperCase() + prefectureSlug.slice(1);
    return getPrefectureCityData(prefectureSlug, capitalizedName);
  }, [prefectureSlug]);

  const [selectedCitySlugs, setSelectedCitySlugs] = useState<string[]>([]);
  const [keywordQuery, setKeywordQuery] = useState('');

  const toggleCitySlug = (slug: string) => {
    setSelectedCitySlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const selectAllCities = () => {
    setSelectedCitySlugs(prefData.cities.map((c) => c.slug));
  };

  const clearCitySelection = () => {
    setSelectedCitySlugs([]);
  };

  const handleSearchSelected = () => {
    const citiesQuery = selectedCitySlugs.join(',');
    navigate(rentalListingsUrl(`/properties?pref=${prefData.prefectureSlug}&cities=${citiesQuery}`));
  };

  const handleInquire = (listingTitle: string) => {
    navigate(rentalListingsUrl(`/properties?q=${encodeURIComponent(listingTitle)}`));
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
          <Link to={parentPath} className="hover:text-sky-700 transition-colors">
            {propertyTypeLabel}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-sky-900 font-bold">{prefData.prefectureName} Prefecture City Search</span>
        </div>
      </div>

      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        {/* 2. HERO HEADER BLOCK (Matching athome rent_office/iwate/city flow) */}
        <div className="rounded-2xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
                {isOfficeMode ? <Building2 className="w-4 h-4 text-sky-600" /> : <Store className="w-4 h-4 text-sky-600" />}
                <span>{prefData.prefectureName} Prefecture ({prefData.japaneseName})</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Search for{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {prefData.prefectureName} Prefecture {propertyTypeLabel} Properties
                </span>{' '}
                by City & District
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Select your target city, ward, or county below to find ideal {propertyTypeLabel.toLowerCase()} spaces.
              </p>
            </div>

            {/* Total Available Counter Badge */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Available Properties</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{prefData.totalListings.toLocaleString()}</span>
                <span className="text-xs font-bold text-slate-600">units</span>
              </div>
            </div>
          </div>

          {/* 3. ATHOME MATCHING SEARCH METHOD NAVIGATION TABS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-sky-50/60 p-2 rounded-xl border border-sky-100">
            <button
              type="button"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white text-sky-900 font-extrabold text-xs shadow-xs border border-sky-300 ring-2 ring-sky-500/20 cursor-default"
            >
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Search by City & Area</span>
            </button>
            <button
              type="button"
              onClick={() => navigate(`/seahome-real-estates/rental/search-by-line-station/${prefData.prefectureSlug}`)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/70 text-slate-700 font-bold text-xs hover:bg-white hover:text-sky-900 transition-all cursor-pointer"
            >
              <Network className="w-4 h-4 text-sky-500" />
              <span>Search by Railway Line & Station</span>
            </button>
            <button
              type="button"
              onClick={() => navigate(`/seahome-real-estates/rental/search-by-map/${prefData.prefectureSlug}`)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/70 text-slate-700 font-bold text-xs hover:bg-white hover:text-sky-900 transition-all cursor-pointer"
            >
              <Map className="w-4 h-4 text-sky-500" />
              <span>Search on Interactive Map</span>
            </button>
          </div>
        </div>

        {/* 4. CITY & DISTRICT CHECKBOX SELECTION GRID (athome rent_office/iwate/city flow) */}
        <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-100 pb-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-sky-950">
                Select Cities & Districts in {prefData.prefectureName} Prefecture
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={selectAllCities}
                className="px-3 py-1.5 rounded-lg border border-sky-200 bg-sky-50 text-sky-800 font-bold hover:bg-sky-100 transition-all cursor-pointer"
              >
                Select All
              </button>
              <button
                type="button"
                onClick={clearCitySelection}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 font-medium hover:bg-slate-100 transition-all cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Cities Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {prefData.cities.map((city) => {
              const isChecked = selectedCitySlugs.includes(city.slug);
              const hasListings = city.count > 0;
              return (
                <div
                  key={city.slug}
                  onClick={() => toggleCitySlug(city.slug)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isChecked
                      ? 'border-sky-500 bg-sky-50/80 text-sky-950 font-bold shadow-xs ring-1 ring-sky-400'
                      : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 shrink-0 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm font-semibold truncate group-hover:text-sky-700">
                      {city.name}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold shrink-0 ${
                      isChecked
                        ? 'bg-sky-600 text-white'
                        : hasListings
                        ? 'bg-sky-100 text-sky-800'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {city.count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Search Button Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700">
              Selected: <strong className="text-sky-700 font-extrabold text-sm">{selectedCitySlugs.length}</strong> cities / districts
            </span>

            <button
              type="button"
              onClick={handleSearchSelected}
              disabled={selectedCitySlugs.length === 0}
              className={`px-8 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                selectedCitySlugs.length > 0
                  ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white hover:from-sky-700 hover:to-blue-800 shadow-sky-600/20'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Search Selected Cities ({selectedCitySlugs.length})</span>
            </button>
          </div>
        </div>

        {/* 5. PROPERTY LISTINGS GRID FOR THIS PREFECTURE */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-sky-600" />
              Featured {propertyTypeLabel} Listings in {prefData.prefectureName}
            </h2>
            <span className="text-xs text-slate-500 font-medium">Updated today</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                id: 'p-1',
                title: `${prefData.cities[0]?.name || prefData.prefectureName} Station Front Commercial Building`,
                rent: '$2,600/month',
                tsuboPrice: '$165/tsubo',
                deposit: 'Deposit 4 mo / Key 1 mo',
                area: '62.50 m² (18.90 tsubo)',
                location: `${prefData.cities[0]?.name || prefData.prefectureName}, ${prefData.prefectureName} Prefecture`,
                stationAccess: `3-min walk from ${prefData.cities[0]?.name || 'Central'} Station`,
                floor: '2nd Floor',
                badge: 'Verified Property',
                imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
              },
              {
                id: 'p-2',
                title: `${prefData.cities[1]?.name || prefData.prefectureName} Business Plaza Floor`,
                rent: '$1,950/month',
                tsuboPrice: '$130/tsubo',
                deposit: 'Deposit 3 mo / Key 0 mo',
                area: '54.10 m² (16.36 tsubo)',
                location: `${prefData.cities[1]?.name || prefData.prefectureName}, ${prefData.prefectureName} Prefecture`,
                stationAccess: `5-min walk from Main Line Station`,
                floor: '4th Floor (Elevator)',
                badge: 'OA Floor Included',
                imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
              },
            ].map((property) => (
              <div
                key={property.id}
                className="rounded-2xl border border-sky-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
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
                      {property.title}
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
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Station Access</span>
                      <span className="text-xs font-medium text-slate-700 truncate">{property.stationAccess}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleInquire(property.title)}
                      className="flex-1 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Inquire Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInquire(property.title)}
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

        {/* 6. AVERAGE RENT RATE SUMMARY PER CITY TABLE */}
        <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-sky-100 pb-3">
            <TrendingUp className="w-5 h-5 text-sky-600" />
            <h2 className="text-base sm:text-lg font-extrabold text-sky-950">
              Average Office Tsubo Rent Rates in {prefData.prefectureName} Prefecture
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-sky-50 text-sky-950 uppercase font-extrabold border-b border-sky-100">
                <tr>
                  <th className="px-4 py-3">City / District</th>
                  <th className="px-4 py-3">Average Monthly Rent / Tsubo</th>
                  <th className="px-4 py-3">Average Floor Area</th>
                  <th className="px-4 py-3">Listings Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {prefData.cities.slice(0, 5).map((city, idx) => (
                  <tr key={city.slug} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900">{city.name}</td>
                    <td className="px-4 py-3 text-sky-700 font-extrabold">${120 + idx * 15} / tsubo</td>
                    <td className="px-4 py-3 text-slate-600">65 - 120 m²</td>
                    <td className="px-4 py-3 text-slate-600">{city.count} units</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BACK TO MAIN PAGE BUTTON */}
        <div className="pt-4 text-center">
          <Link
            to={parentPath}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-sky-200 bg-white text-sky-800 font-bold text-xs sm:text-sm shadow-xs hover:bg-sky-50 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {propertyTypeLabel} Main Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrefectureCityPage;
