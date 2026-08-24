import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Search, Car, Building2, Wrench, BookOpen } from 'lucide-react';
import {
    WHAT_S_NEW_PARKING_LISTINGS,
    OTHER_PROPERTY_TYPES_PARKING,
    SEARCH_TOOLS_PARKING,
    PARKING_TERMS,
    AFFILIATED_STORE_BANNER_DATA,
    FOOTER_DISCLAIMER_PARKING_TEXT,
    type ParkingListingItem,
    type NamedLink,
} from './parkingDiscoveryData';

interface ParkingDiscoveryProps {
    onNavigate?: (path: string) => void;
}

export const ParkingDiscovery: React.FC<ParkingDiscoveryProps> = ({ onNavigate }) => {
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
            scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-8 space-y-6 w-full font-sans">
            {/* 1. WHAT'S NEW CAROUSEL SECTION (7 Parking Rental Items) */}
            <section aria-label="What's New Rental Parking Listings" className="overflow-hidden rounded-xl border border-blue-100/90 bg-white p-4 sm:p-5 shadow-xs">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <h3 className="text-base font-extrabold text-gray-900 sm:text-lg">
                            what's new
                        </h3>
                        <span className="ml-2 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200/60">
                            {WHAT_S_NEW_PARKING_LISTINGS.length} listings
                        </span>
                    </div>
                </div>

                <div className="group relative">
                    {/* Carousel Left Navigation Button */}
                    <button
                        type="button"
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="absolute left-0 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center rounded-r-lg bg-blue-600/90 text-white shadow-md backdrop-blur-xs transition-all hover:bg-blue-700 hover:w-9 focus:outline-hidden"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Carousel Right Navigation Button */}
                    <button
                        type="button"
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="absolute right-0 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center rounded-l-lg bg-blue-600/90 text-white shadow-md backdrop-blur-xs transition-all hover:bg-blue-700 hover:w-9 focus:outline-hidden"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Scrollable Container with 7 Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-1 px-1"
                    >
                        {WHAT_S_NEW_PARKING_LISTINGS.map((item: ParkingListingItem) => (
                            <div
                                key={item.id}
                                onClick={() => handleLinkClick(item.link)}
                                className="group/card flex w-44 shrink-0 flex-col cursor-pointer rounded-lg border border-gray-100 bg-white p-2.5 shadow-2xs transition-all duration-200 hover:border-blue-400 hover:shadow-md sm:w-48"
                            >
                                <div className="mb-1.5 flex items-center justify-between">
                                    <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                                        <Car className="h-3 w-3 text-blue-500" />
                                        {item.label}
                                    </span>
                                </div>

                                <div className="relative mb-2 h-28 w-full overflow-hidden rounded-xs border border-gray-100 bg-gray-100 sm:h-32">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                                        loading="lazy"
                                    />
                                    <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                                        Parking
                                    </span>
                                </div>

                                <h4 className="text-xs font-bold leading-snug text-gray-800 transition-colors group-hover/card:text-blue-600 line-clamp-2 min-h-[2.2rem]">
                                    {item.title}
                                </h4>

                                <p className="mt-1.5 text-xs font-bold text-blue-600">
                                    {item.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. VIEW OTHER TYPES OF PROPERTIES */}
            <section className="rounded-xl border border-blue-100/80 bg-white p-4 sm:p-5 shadow-xs">
                <div className="mb-3 flex items-center gap-2">
                    <span className="inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <Building2 className="h-4 w-4 text-blue-600 hidden sm:inline" />
                    <h3 className="text-base font-extrabold text-gray-900 sm:text-lg">
                        View other types of properties
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-medium">
                    {OTHER_PROPERTY_TYPES_PARKING.map((item: NamedLink, idx: number) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleLinkClick(item.path)}
                            className="text-blue-600 underline hover:text-blue-800 transition-colors hover:no-underline"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. USEFUL TOOLS FOR PROPERTY SEARCHING */}
            <section className="rounded-xl border border-blue-100/80 bg-white p-4 sm:p-5 shadow-xs">
                <div className="mb-3 flex items-center gap-2">
                    <span className="inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <Wrench className="h-4 w-4 text-blue-600 hidden sm:inline" />
                    <h3 className="text-base font-extrabold text-gray-900 sm:text-lg">
                        Useful tools for property searching
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-2.5 text-xs sm:text-sm font-medium">
                    {SEARCH_TOOLS_PARKING.map((item: NamedLink, idx: number) => (
                        <a
                            key={idx}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(item.path, '_blank', 'noopener,noreferrer');
                            }}
                            className="text-blue-600 underline hover:text-blue-800 transition-colors font-semibold cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </section>

            {/* 4. RENTAL PARKING TERMINOLOGY & GLOSSARY */}
            <section className="rounded-xl border border-blue-100/80 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <BookOpen className="h-4 w-4 text-blue-600 hidden sm:inline" />
                        <div className="flex flex-wrap items-baseline gap-x-2">
                            <span className="text-base font-extrabold text-blue-700 sm:text-lg">
                                Rental parking
                            </span>
                            <span className="text-xs font-medium text-gray-700 sm:text-sm">
                                Find out the meaning of terms commonly used in [this context].
                            </span>
                        </div>
                    </div>

                    <a
                        href="/seahome-real-estates/glossary"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('/seahome-real-estates/glossary', '_blank', 'noopener,noreferrer');
                        }}
                        className="shrink-0 text-xs font-semibold text-blue-600 underline hover:text-blue-800 transition-colors self-start sm:self-auto cursor-pointer"
                    >
                        Look up other real estate terms
                    </a>
                </div>

                <div className="mt-3.5 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-medium border-t border-gray-100 pt-3">
                    {PARKING_TERMS.map((item: NamedLink, idx: number) => (
                        <a
                            key={idx}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(item.path, '_blank', 'noopener,noreferrer');
                            }}
                            className="text-blue-600 underline hover:text-blue-800 transition-colors font-semibold cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </section>

            {/* 5. AFFILIATED STORE BANNER */}
            <section
                onClick={() => handleLinkClick(AFFILIATED_STORE_BANNER_DATA.link)}
                className="group flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-blue-200/80 bg-gradient-to-r from-sky-50 via-blue-50/70 to-indigo-50/40 p-4 shadow-xs transition-all duration-200 hover:border-blue-400 hover:shadow-md sm:flex-row sm:p-5"
            >
                <div className="h-20 w-32 shrink-0 overflow-hidden rounded-lg border border-blue-100 bg-white shadow-2xs">
                    <img
                        src={AFFILIATED_STORE_BANNER_DATA.imageUrl}
                        alt={AFFILIATED_STORE_BANNER_DATA.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <h4 className="flex items-center justify-center gap-2 text-sm font-extrabold text-blue-800 transition-colors group-hover:text-blue-900 sm:justify-start sm:text-base">
                        <Search className="h-4 w-4 shrink-0 text-blue-600" />
                        <span className="underline decoration-blue-300 group-hover:no-underline">
                            {AFFILIATED_STORE_BANNER_DATA.title}
                        </span>
                    </h4>
                    <p className="mt-1.5 text-xs text-gray-700 sm:text-sm leading-relaxed">
                        {AFFILIATED_STORE_BANNER_DATA.description}
                    </p>
                </div>
            </section>

            {/* 6. FOOTER DISCLAIMER TEXT */}
            <p className="px-1 text-center text-[11px] leading-relaxed text-gray-500 sm:text-left sm:text-xs">
                {FOOTER_DISCLAIMER_PARKING_TEXT}
            </p>
        </div>
    );
};

export default ParkingDiscovery;
