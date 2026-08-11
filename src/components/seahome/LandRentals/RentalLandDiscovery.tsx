import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import {
    WHAT_S_NEW_LAND_LISTINGS,
    OTHER_PROPERTY_TYPES_LAND,
    SEARCH_TOOLS_LAND,
    LEASED_LAND_TERMS,
    AFFILIATED_STORE_BANNER_LAND,
    FOOTER_DISCLAIMER_LAND_TEXT,
    type LandListingItem,
    type NamedLink,
} from './rentalLandDiscoveryData';

interface RentalLandDiscoveryProps {
    onNavigate?: (path: string) => void;
}

export const RentalLandDiscovery: React.FC<RentalLandDiscoveryProps> = ({ onNavigate }) => {
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
            {/* 1. WHAT'S NEW CAROUSEL SECTION FOR LAND */}
            <section aria-label="What's New Land Listings" className="overflow-hidden rounded-xl border border-blue-100/90 bg-white p-4 shadow-xs sm:p-5">
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
                        {WHAT_S_NEW_LAND_LISTINGS.map((item: LandListingItem) => (
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

            {/* 2. VIEW OTHER TYPES OF PROPERTIES */}
            <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                <div className="mb-3 flex items-center">
                    <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        View other types of properties
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium sm:text-sm">
                    {OTHER_PROPERTY_TYPES_LAND.map((item: NamedLink, idx: number) => (
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

            {/* 3. USEFUL TOOLS FOR PROPERTY SEARCHING */}
            <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                <div className="mb-3 flex items-center">
                    <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        Useful tools for property searching
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-medium sm:text-sm">
                    {SEARCH_TOOLS_LAND.map((item: NamedLink, idx: number) => (
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

            {/* 4. LEASED LAND TERMINOLOGY & TERMS */}
            <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="flex items-center">
                        <span className="mr-2.5 inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <h3 className="text-base font-extrabold text-blue-700 sm:text-lg">
                            leased land
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
                    {LEASED_LAND_TERMS.map((item: NamedLink, idx: number) => (
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

            {/* 5. AFFILIATED STORE BANNER */}
            <section
                onClick={() => handleLinkClick(AFFILIATED_STORE_BANNER_LAND.link)}
                className="group flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-blue-200/80 bg-gradient-to-r from-sky-50 via-blue-50/70 to-indigo-50/40 p-4 shadow-xs transition-all hover:border-blue-400 hover:shadow-md sm:flex-row sm:p-5"
            >
                <img
                    src={AFFILIATED_STORE_BANNER_LAND.imageUrl}
                    alt={AFFILIATED_STORE_BANNER_LAND.title}
                    className="h-20 w-32 shrink-0 rounded-md border border-gray-200 object-cover shadow-2xs"
                    loading="lazy"
                />
                <div className="flex-1 text-center sm:text-left">
                    <h4 className="flex items-center justify-center gap-1.5 text-sm font-bold text-blue-800 group-hover:text-blue-900 group-hover:underline sm:justify-start sm:text-base">
                        <Search className="h-4 w-4 text-blue-600" />
                        <span>{AFFILIATED_STORE_BANNER_LAND.title}</span>
                    </h4>
                    <p className="mt-1 text-xs text-gray-700 sm:text-sm">
                        {AFFILIATED_STORE_BANNER_LAND.description}
                    </p>
                </div>
            </section>

            {/* 6. FOOTER DISCLAIMER TEXT */}
            <p className="px-1 text-center text-[11px] leading-relaxed text-gray-500 sm:text-left sm:text-xs">
                {FOOTER_DISCLAIMER_LAND_TEXT}
            </p>
        </div>
    );
};

export default RentalLandDiscovery;
