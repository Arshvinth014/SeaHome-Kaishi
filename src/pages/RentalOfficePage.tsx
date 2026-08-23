import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageHeader } from '../components/seahome/OfficeRentals/PageHeader';
import { OfficeTypeSearch } from '../components/seahome/OfficeRentals/OfficeTypeSearch';
import { OfficeSpecialFeatures } from '../components/seahome/OfficeRentals/OfficeSpecialFeatures';
import { OfficeRentalDiscovery } from '../components/seahome/OfficeRentals/OfficeRentalDiscovery';
import { MapPin, Building2, CircleDollarSign, Clock, LayoutGrid, TrendingUp, GraduationCap, ShoppingCart, Sparkles, type LucideIcon } from 'lucide-react';
import SeahomeRentalRegionList from '../components/seahome/SeahomeRentalRegionList';
import SeahomeJapanMap, { type JapanMapSelection } from '../components/seahome/SeahomeJapanMap';
import SeahomeRentalCityPanel from '../components/seahome/SeahomeRentalCityPanel';
import SeahomeRentalCitySearchModal, { type RentalSearchModalContext } from '../components/seahome/SeahomeRentalCitySearchModal';
import { PrefectureMapModal } from '../components/seahome/ShopRentals/PrefectureMapModal';
import type { RentalCity } from '../components/seahome/seahomeRentalCities';
import { RENTAL_REGIONS, RENTAL_SIDE_FILTERS } from '../components/seahome/seahomeRentalData';
import { rentalListingsUrl } from '../components/seahome/seahomeRentalLineSearchData';

const FILTER_ICONS: Record<(typeof RENTAL_SIDE_FILTERS)[number]['id'], LucideIcon> = {
  rent: CircleDollarSign,
  layout: LayoutGrid,
  market: TrendingUp,
  commute: Clock,
  schools: GraduationCap,
  company: Building2,
  university: GraduationCap,
  shopping: ShoppingCart,
  features: Sparkles,
};

const RentalOfficePage: React.FC = () => {
  const navigate = useNavigate();
  const [mapSelection, setMapSelection] = useState<JapanMapSelection | null>(null);
  const [hoveredPrefectureSlug, setHoveredPrefectureSlug] = useState<string | null>(null);
  const [citySearchModal, setCitySearchModal] = useState<RentalSearchModalContext | null>(null);
  const [isPrefectureModalOpen, setIsPrefectureModalOpen] = useState(false);

  const openListings = useCallback(
    (path = '/properties') => {
      if (!path) return;
      const normalized = path.startsWith('/') ? path : `/${path}`;
      if (
        normalized.startsWith('/seahome-real-estates') ||
        normalized.startsWith('/rental-') ||
        normalized.startsWith('/parking') ||
        normalized.startsWith('/warehouse')
      ) {
        const target = normalized.startsWith('/seahome-real-estates')
          ? normalized
          : `/seahome-real-estates${normalized}`;
        navigate(target);
        return;
      }
      navigate(rentalListingsUrl(normalized));
    },
    [navigate]
  );

  const openSearchModal = useCallback((ctx: RentalSearchModalContext) => {
    setCitySearchModal(ctx);
  }, []);

  const selectPrefecture = useCallback(
    (slug: string, name: string) => {
      setMapSelection({ prefectureSlug: slug, prefectureName: name });
      openSearchModal({ prefectureSlug: slug, prefectureName: name });
    },
    [openSearchModal]
  );

  const selectCity = useCallback(
    (city: RentalCity, selection: JapanMapSelection) => {
      setMapSelection({ ...selection, city });
      openSearchModal({ prefectureSlug: selection.prefectureSlug, prefectureName: selection.prefectureName, city });
    },
    [openSearchModal]
  );

  const searchSelectedPrefecture = useCallback(() => {
    if (!mapSelection) return;
    openSearchModal({ prefectureSlug: mapSelection.prefectureSlug, prefectureName: mapSelection.prefectureName, city: mapSelection.city });
  }, [mapSelection, openSearchModal]);

  const closeCitySearchModal = useCallback(() => setCitySearchModal(null), []);

  return (
    <div className="bg-slate-50/70 min-h-screen py-6 font-sans">
      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6">

        {/* 1. Page Header Section */}
        <PageHeader
          totalListings="77,775"
          titlePrefix="Search for"
          titleHighlight="rental office space, vacant offices, and commercial building properties."
          breadcrumbCurrent="Office for Rent"
        />

        {/* 2. ATHOME ALIGNED 5-TAB OFFICE SEARCH NAVIGATION SYSTEM */}
        <OfficeTypeSearch onOpenPrefectureModal={() => setIsPrefectureModalOpen(true)} />

        {/* 3. Interactive Japan Map Search Panel */}
        <div className="rounded-2xl border-2 border-sky-200 bg-white p-4 sm:p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between border-b border-sky-100 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-sky-950 sm:text-lg">
                Select the prefecture for your office search
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsPrefectureModalOpen(true)}
              className="text-xs font-bold text-sky-700 hover:text-sky-900 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200"
            >
              Open Full Region Selector
            </button>
          </div>

          <div
            className="grid gap-3 xl:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)_minmax(0,13.5rem)] xl:items-start xl:gap-4"
            onMouseLeave={() => setHoveredPrefectureSlug(null)}
          >
            <div className="hidden xl:block">
              <SeahomeRentalRegionList
                regions={RENTAL_REGIONS.slice(0, 4)}
                activeSlug={mapSelection?.prefectureSlug ?? null}
                hoveredSlug={hoveredPrefectureSlug}
                onPrefectureClick={selectPrefecture}
                onPrefectureHover={setHoveredPrefectureSlug}
              />
            </div>
            <SeahomeJapanMap
              activeSlug={mapSelection?.prefectureSlug ?? null}
              hoveredSlug={hoveredPrefectureSlug}
              onPrefectureSelect={selectPrefecture}
              onPrefectureHover={setHoveredPrefectureSlug}
            />
            <div className="hidden xl:block">
              <SeahomeRentalRegionList
                regions={RENTAL_REGIONS.slice(4)}
                activeSlug={mapSelection?.prefectureSlug ?? null}
                hoveredSlug={hoveredPrefectureSlug}
                onPrefectureClick={selectPrefecture}
                onPrefectureHover={setHoveredPrefectureSlug}
              />
            </div>
          </div>

          <div className="mt-3 xl:hidden">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-sky-800">
              Or choose a prefecture
            </p>
            <SeahomeRentalRegionList
              regions={RENTAL_REGIONS}
              activeSlug={mapSelection?.prefectureSlug ?? null}
              hoveredSlug={hoveredPrefectureSlug}
              onPrefectureClick={selectPrefecture}
              onPrefectureHover={setHoveredPrefectureSlug}
            />
          </div>

          {mapSelection ? (
            <SeahomeRentalCityPanel
              selection={mapSelection}
              onCitySelect={selectCity}
              onSearchPrefecture={searchSelectedPrefecture}
            />
          ) : null}

          {/* Quick filters */}
          <div className="mt-4 grid gap-1.5 border-t border-sky-100 pt-3 sm:grid-cols-2 lg:hidden">
            {RENTAL_SIDE_FILTERS.slice(0, 6).map((item) => {
              const Icon = FILTER_ICONS[item.id];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openListings('/properties')}
                  className="flex items-center gap-2 rounded-xl border border-sky-100 bg-slate-50 px-3 py-2 text-left text-xs font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900"
                >
                  <Icon className="h-4 w-4 shrink-0 text-sky-600" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Office Special Features Component */}
        <OfficeSpecialFeatures onNavigate={openListings} />

        {/* 5. Office Rental Discovery & Listings Component */}
        <OfficeRentalDiscovery onNavigate={openListings} />

        {/* City Search Modal */}
        {citySearchModal ? (
          <SeahomeRentalCitySearchModal
            context={citySearchModal}
            onClose={closeCitySearchModal}
            onSearch={() => openListings('/properties')}
            onViewPrefecture={() => openListings('/properties')}
          />
        ) : null}

        {/* Full Prefecture Map Modal */}
        <PrefectureMapModal
          isOpen={isPrefectureModalOpen}
          onClose={() => setIsPrefectureModalOpen(false)}
        />

      </main>
    </div>
  );
};

export default RentalOfficePage;