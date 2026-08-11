import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import {
    WHAT_S_NEW_LISTINGS,
    NOTABLE_CITIES_DISTRICTS,
    STATIONS_TO_WATCH,
    OTHER_PROPERTY_TYPES,
    SEARCH_TOOLS,
    RENTAL_OFFICE_TERMS,
    AFFILIATED_STORE_BANNER,
    FOOTER_DISCLAIMER_TEXT,
    type NewListingItem,
    type NamedLink,
} from './officeRentalDiscoveryData';

interface OfficeRentalDiscoveryProps {
    onNavigate?: (path: string) => void;
}

export const OfficeRentalDiscovery: React.FC<OfficeRentalDiscoveryProps> = ({ onNavigate }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleLinkClick = (path: string) => {
        if (onNavigate) {
            onNavigate(path);
        } else {
            window.location.href = path;
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-8 space-y-6 w-full">
            {/* 1. WHAT'S NEW CAROUSEL SECTION */}
            <section aria-label="What's New Rental Office Listings" className="overflow-hidden rounded-xl border border-blue-100/90 bg-white p-4 shadow-xs sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <h3 className="text-base font-extrabold text-gray-900 sm:text-lg">
                            what's new
                        </h3>
                    </div>
                </div>

                <div className="group relative">
                    {/* Scroll Navigation Controls */}
                    <button
                        type="button"
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-md bg-black/60 p-2 text-white shadow-md transition-all hover:bg-black/80 focus:outline-hidden"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-md bg-black/60 p-2 text-white shadow-md transition-all hover:bg-black/80 focus:outline-hidden"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-1 px-1"
                    >
                        {WHAT_S_NEW_LISTINGS.map((item: NewListingItem) => (
                            <div
                                key={item.id}
                                onClick={() => handleLinkClick(item.link)}
                                className="group/card flex w-44 shrink-0 flex-col cursor-pointer rounded-lg border border-gray-100 bg-white p-2.5 shadow-2xs transition-all duration-200 hover:border-blue-400 hover:shadow-md sm:w-48"
                            >
                                <span className="mb-1.5 text-xs font-bold text-gray-800 line-clamp-1">
                                    {item.category}
                                </span>
                                <div className="relative mb-2 h-28 w-full overflow-hidden rounded-xs border border-gray-100 bg-gray-100 sm:h-32">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.stationWalk}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <h4 className="text-xs font-bold leading-tight text-gray-900 line-clamp-2">
                                    {item.stationWalk}
                                </h4>
                                <p className="mt-1 text-xs text-gray-600">
                                    {item.price} / {item.size}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. NOTABLE CITIES & STATIONS (2 COLUMN GRID) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Notable Cities & Districts */}
                <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                    <div className="mb-2 flex items-center">
                        <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                            Notable cities and districts
                        </h3>
                    </div>
                    <p className="mb-4 text-xs text-gray-600">
                        You can search for office space by city/ward/county.
                    </p>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:grid-cols-3">
                        {NOTABLE_CITIES_DISTRICTS.map((item: NamedLink, idx: number) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => handleLinkClick(item.path)}
                                className="flex items-center text-left font-medium text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                <span className="mr-1 text-gray-400">•</span>
                                <span className="line-clamp-1">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Stations to Watch */}
                <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                    <div className="mb-2 flex items-center">
                        <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                            Stations to watch
                        </h3>
                    </div>
                    <p className="mb-4 text-xs text-gray-600">
                        You can search for office space near popular train stations.
                    </p>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:grid-cols-3">
                        {STATIONS_TO_WATCH.map((item: NamedLink, idx: number) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => handleLinkClick(item.path)}
                                className="flex items-center text-left font-medium text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                <span className="mr-1 text-gray-400">•</span>
                                <span className="line-clamp-1">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </section>
            </div>

            {/* 3. VIEW OTHER TYPES OF PROPERTIES */}
            <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                <div className="mb-3 flex items-center">
                    <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        View other types of properties
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium sm:text-sm">
                    {OTHER_PROPERTY_TYPES.map((item: NamedLink, idx: number) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleLinkClick(item.path)}
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* 4. USEFUL TOOLS FOR PROPERTY SEARCHING */}
            <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                <div className="mb-3 flex items-center">
                    <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        Useful tools for property searching
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-medium sm:text-sm">
                    {SEARCH_TOOLS.map((item: NamedLink, idx: number) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleLinkClick(item.path)}
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* 5. RENTAL OFFICE TERMINOLOGY & TERMS */}
            <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="flex items-center">
                        <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                            Rental office
                        </h3>
                        <span className="ml-3 hidden text-xs font-medium text-gray-700 md:inline">
                            Find out the meaning of terms commonly used in [this context].
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleLinkClick('/tools/glossary')}
                        className="text-xs font-medium text-blue-600 underline hover:text-blue-800"
                    >
                        Look up other real estate terms
                    </button>
                </div>

                <p className="mt-1 text-xs text-gray-700 md:hidden">
                    Find out the meaning of terms commonly used in [this context].
                </p>

                <div className="mt-3.5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium sm:text-sm">
                    {RENTAL_OFFICE_TERMS.map((item: NamedLink, idx: number) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleLinkClick(item.path)}
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* 6. AFFILIATED STORE BANNER */}
            <section
                onClick={() => handleLinkClick(AFFILIATED_STORE_BANNER.link)}
                className="group flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-blue-200/80 bg-gradient-to-r from-sky-50 via-blue-50/70 to-indigo-50/40 p-4 shadow-xs transition-all hover:border-blue-400 hover:shadow-md sm:flex-row sm:p-5"
            >
                <img
                    src={AFFILIATED_STORE_BANNER.imageUrl}
                    alt={AFFILIATED_STORE_BANNER.title}
                    className="h-20 w-32 shrink-0 rounded-md border border-gray-200 object-cover shadow-2xs"
                    loading="lazy"
                />
                <div className="flex-1 text-center sm:text-left">
                    <h4 className="flex items-center justify-center gap-1.5 text-sm font-bold text-blue-800 group-hover:text-blue-900 group-hover:underline sm:justify-start sm:text-base">
                        <Search className="h-4 w-4 text-blue-600" />
                        <span>{AFFILIATED_STORE_BANNER.title}</span>
                    </h4>
                    <p className="mt-1 text-xs text-gray-700 sm:text-sm">
                        {AFFILIATED_STORE_BANNER.description}
                    </p>
                </div>
            </section>

            {/* 7. FOOTER DISCLAIMER TEXT */}
            <p className="px-1 text-center text-[11px] leading-relaxed text-gray-500 sm:text-left sm:text-xs">
                {FOOTER_DISCLAIMER_TEXT}
            </p>
        </div>
    );
};

export default OfficeRentalDiscovery;
