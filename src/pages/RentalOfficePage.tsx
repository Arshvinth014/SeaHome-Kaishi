import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageHeader } from '../components/seahome/OfficeRentals/PageHeader';
import { OfficeSpecialFeatures } from '../components/seahome/OfficeRentals/OfficeSpecialFeatures';
import { OfficeRentalDiscovery } from '../components/seahome/OfficeRentals/OfficeRentalDiscovery';
import { MapPin, Building2, CircleDollarSign, Clock, LayoutGrid, TrendingUp, GraduationCap, ShoppingCart, Sparkles, type LucideIcon } from 'lucide-react';
import SeahomeRentalRegionList from '../components/seahome/SeahomeRentalRegionList';
import SeahomeJapanMap, { type JapanMapSelection } from '../components/seahome/SeahomeJapanMap';
import SeahomeRentalCityPanel from '../components/seahome/SeahomeRentalCityPanel';
import SeahomeRentalCitySearchModal, { type RentalSearchModalContext } from '../components/seahome/SeahomeRentalCitySearchModal';
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

    const openListings = useCallback(
        (path = '/properties') => {
            const normalized = path.startsWith('/') ? path : `/${path}`;
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
        <div className="bg-gray-50/40 min-h-screen py-6">
            {/* Main Container - Spans full width without ads */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* Modified Page Header Section */}
                <PageHeader totalListings="77,775" />

                {/* Map search panel */}
                <div className="mt-5 rounded-lg border-2 border-sky-200/80 bg-sky-50/40 p-3 sm:p-4">
                    <div className="mb-3 flex items-center gap-2 border-b border-sky-200/60 pb-2">
                        <MapPin className="h-4 w-4 text-sky-700" />
                        <h2 className="text-sm font-bold text-sky-950 sm:text-base">
                            Select the prefecture you are looking for
                        </h2>
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

                    {/* In-panel quick filters (desktop: beside map on wide screens — stacked on mobile) */}
                    <div className="mt-4 grid gap-1.5 border-t border-sky-200/60 pt-3 sm:grid-cols-2 lg:hidden">
                        {RENTAL_SIDE_FILTERS.slice(0, 6).map((item) => {
                            const Icon = FILTER_ICONS[item.id];
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => openListings('/properties')}
                                    className="flex items-center gap-2 rounded-md border border-sky-100 bg-white px-2.5 py-2 text-left text-xs transition hover:border-sky-300 hover:bg-sky-50"
                                >
                                    <Icon className="h-4 w-4 shrink-0 text-sky-600" />
                                    <span className="font-semibold text-sky-950">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Office Special Features Component */}
                <OfficeSpecialFeatures onNavigate={openListings} />

                {/* Office Rental Discovery & Listings Component */}
                <OfficeRentalDiscovery onNavigate={openListings} />

                {citySearchModal ? (
                    <SeahomeRentalCitySearchModal
                        context={citySearchModal}
                        onClose={closeCitySearchModal}
                        onSearch={() => openListings('/properties')}
                        onViewPrefecture={() => openListings('/properties')}
                    />
                ) : null}

            </main>
        </div>
    );
};

export default RentalOfficePage;