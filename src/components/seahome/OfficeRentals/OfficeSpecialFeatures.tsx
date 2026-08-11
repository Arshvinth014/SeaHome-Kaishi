import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, type LucideIcon } from 'lucide-react';
import {
    OFFICE_SPECIAL_FEATURES_DATA,
    type FeatureItem,
    type FeatureSection,
} from './officeSpecialFeaturesData';

interface OfficeSpecialFeaturesProps {
    onNavigate?: (path: string) => void;
}

export const OfficeSpecialFeatures: React.FC<OfficeSpecialFeaturesProps> = ({ onNavigate }) => {
    const [isCriteriaExpanded, setIsCriteriaExpanded] = useState(false);

    const handleCardClick = (link: string) => {
        if (onNavigate) {
            onNavigate(link);
        } else {
            window.location.href = link;
        }
    };

    const renderCard = (item: FeatureItem) => {
        const IconComponent: LucideIcon = item.icon;

        return (
            <div
                key={item.id}
                onClick={() => handleCardClick(item.link)}
                className="group relative flex cursor-pointer items-start gap-3.5 rounded-lg border border-gray-200/90 bg-white p-3 sm:p-3.5 shadow-xs transition-all duration-200 hover:border-blue-400 hover:shadow-md"
            >
                {/* Thumbnail Image */}
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-100 bg-gray-100 sm:h-24 sm:w-28">
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    {item.badge ? (
                        <span className="absolute bottom-1 left-1 rounded bg-blue-900/80 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
                            {item.badge}
                        </span>
                    ) : null}
                </div>

                {/* Card Text Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-start">
                    <h4 className="flex items-start gap-1.5 text-xs font-bold leading-snug text-blue-600 transition-colors group-hover:text-blue-700 sm:text-sm">
                        <IconComponent className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 group-hover:text-blue-700" />
                        <span className="underline decoration-blue-300 group-hover:no-underline">
                            {item.title}
                        </span>
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-600 line-clamp-3 sm:line-clamp-2">
                        {item.description}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section aria-label="Special Features on Office Space for Rent" className="mt-8 w-full">
            {/* Outer Container with Blue Theme Border & Styled Header */}
            <div className="overflow-hidden rounded-xl border border-blue-100/90 bg-white shadow-sm">
                
                {/* Header Banner */}
                <div className="flex flex-col justify-between gap-1 border-t-4 border-t-blue-600 border-b border-gray-100 bg-gradient-to-r from-blue-50/70 via-sky-50/40 to-white px-5 py-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-blue-600" />
                        <h2 className="text-lg font-extrabold text-blue-950 sm:text-xl">
                            Special Feature on Office Space for Rent
                        </h2>
                    </div>
                    <span className="text-xs font-medium text-gray-600 sm:text-sm">
                        Search by popular themes or specific criteria.
                    </span>
                </div>

                {/* Main Content Sections */}
                <div className="space-y-6 p-4 sm:p-6">
                    {OFFICE_SPECIAL_FEATURES_DATA.map((section: FeatureSection) => {
                        const isCriteriaSection = section.id === 'criteria';
                        const displayItems = isCriteriaSection && isCriteriaExpanded && section.extraItems
                            ? [...section.items, ...section.extraItems]
                            : section.items;

                        return (
                            <div key={section.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                                {/* Section Header */}
                                <div className="mb-3.5 flex items-center">
                                    <span className="mr-2.5 inline-block h-4 sm:h-5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                    <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                                        {section.title}
                                    </h3>
                                </div>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                                    {displayItems.map(renderCard)}
                                </div>

                                {/* See More Button for Criteria Section */}
                                {isCriteriaSection && section.hasSeeMore ? (
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setIsCriteriaExpanded(!isCriteriaExpanded)}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-2xs transition-colors hover:border-blue-300 hover:bg-blue-50"
                                        >
                                            {isCriteriaExpanded ? (
                                                <>
                                                    <ChevronUp className="h-4 w-4 text-blue-600" />
                                                    <span>See less</span>
                                                </>
                                            ) : (
                                                <>
                                                    <ChevronDown className="h-4 w-4 text-blue-600" />
                                                    <span>See more</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OfficeSpecialFeatures;
