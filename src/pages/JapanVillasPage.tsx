import { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Search,
    Users,
    Calendar,
    MapPin,
    Heart,
    SlidersHorizontal,
    BedDouble,
    Minus,
    Plus,
} from 'lucide-react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import {
    JAPAN_VILLA_DESTINATION_FILTERS,
    FEATURED_VILLA_DESTINATIONS,
    TONIGHT_VILLAS,
    WEEKEND_VILLAS,
    VILLA_EXPERIENCES,
    POPULAR_VILLA_DESTINATIONS,
    POPULAR_VILLAS,
    VILLA_STYLES,
    JAPAN_VILLA_REGIONS,
    VILLA_FAQS,
} from '../config/JapanVillasPage';


/* =========================================================
   SHARED RATING PILL
========================================================= */

function RatingPill({
    rating,
    label,
}: {
    rating: number;
    label: string;
}) {
    return (
        <div className="inline-flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center rounded-md bg-[#0066FF] px-1.5 py-0.5 text-[10px] font-black text-white">
                {rating.toFixed(1)}
            </span>

            <span className="text-[10px] font-bold text-slate-500">
                {label}
            </span>
        </div>
    );
}


/* =========================================================
   VILLA CARD
========================================================= */

function VillaCard({
    villa,
}: {
    villa: {
        id: string;
        name: string;
        location: string;
        rating: number;
        ratingLabel: string;
        reviews: number;
        image: string;
        price: string;
        feature?: string;
        blurb?: string;
        features?: readonly string[];
    };
}) {
    const [saved, setSaved] = useState(false);

    return (
        <div
            className="
                bg-white
                border border-slate-300
                rounded-2xl
                overflow-hidden
                shadow-2xs
                hover:shadow-md
                transition-all
                group
                flex flex-col
            "
        >
            {/* IMAGE */}
            <div className="w-full h-40 bg-slate-300 relative overflow-hidden">
                <img
                    src={villa.image}
                    alt={villa.name}
                    className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-102
                        transition-transform
                        duration-300
                    "
                    loading="lazy"
                />

                {/* HEART */}
                <button
                    type="button"
                    onClick={() => setSaved(!saved)}
                    aria-label={
                        saved
                            ? `Remove ${villa.name} from saved villas`
                            : `Save ${villa.name}`
                    }
                    className="
                        absolute
                        top-2.5
                        right-2.5
                        w-7
                        h-7
                        rounded-full
                        bg-white/90
                        flex
                        items-center
                        justify-center
                        text-slate-400
                        hover:text-red-500
                        transition-colors
                        shadow-xs
                    "
                >
                    <Heart
                        size={13}
                        fill={saved ? 'currentColor' : 'none'}
                    />
                </button>

                {/* FEATURE */}
                {villa.feature && (
                    <div
                        className="
                            absolute
                            bottom-2.5
                            left-2.5
                            bg-white/95
                            px-2.5
                            py-1
                            rounded-lg
                            text-[9px]
                            font-bold
                            text-[#0C1E3E]
                            shadow-sm
                        "
                    >
                        {villa.feature}
                    </div>
                )}
            </div>


            {/* CONTENT */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">

                <div className="space-y-1">

                    <h3
                        className="
                            font-extrabold
                            text-[#0C1E3E]
                            text-sm
                            group-hover:text-[#0066FF]
                            transition-colors
                        "
                    >
                        {villa.name}
                    </h3>

                    <p
                        className="
                            text-[10px]
                            text-slate-400
                            font-semibold
                            flex
                            items-center
                            gap-1
                        "
                    >
                        <MapPin size={10} />
                        {villa.location}
                    </p>

                    <RatingPill
                        rating={villa.rating}
                        label={villa.ratingLabel}
                    />

                    <p className="text-[9px] text-slate-400 font-semibold">
                        {villa.reviews.toLocaleString()} reviews
                    </p>

                </div>


                {/* DESCRIPTION */}
                {villa.blurb && (
                    <p
                        className="
                            text-[10px]
                            text-slate-500
                            font-medium
                            leading-relaxed
                            line-clamp-2
                        "
                    >
                        {villa.blurb}
                    </p>
                )}


                {/* FEATURES */}
                {villa.features && villa.features.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {villa.features.map((feature) => (
                            <span
                                key={feature}
                                className="
                                    rounded-md
                                    bg-slate-100
                                    px-2
                                    py-1
                                    text-[9px]
                                    font-bold
                                    text-slate-500
                                "
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                )}


                {/* PRICE */}
                <div
                    className="
                        border-t
                        border-slate-300
                        pt-2.5
                        flex
                        items-end
                        justify-between
                    "
                >
                    <span className="text-[9px] font-bold text-slate-400">
                        From
                    </span>

                    <span className="text-sm font-black text-[#0C1E3E]">
                        {villa.price}

                        <span className="text-[9px] font-bold text-slate-400">
                            {' '}
                            /night
                        </span>
                    </span>
                </div>

            </div>
        </div>
    );
}


/* =========================================================
   DESTINATION CARD
========================================================= */

function DestinationCard({
    destination,
}: {
    destination: {
        id: string;
        name: string;
        subtitle?: string;
        image: string;
    };
}) {
    return (
        <div
            className="
                bg-white
                border border-slate-300
                rounded-2xl
                overflow-hidden
                shadow-2xs
                hover:shadow-md
                transition-all
                group
                relative
                h-44
                flex
                flex-col
                justify-end
            "
        >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors z-10" />

            <img
                src={destination.image}
                alt={destination.name}
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-102
                    transition-transform
                    duration-500
                "
                loading="lazy"
            />

            <div
                className="
                    p-4
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/70
                    to-transparent
                    relative
                    z-20
                    w-full
                    text-white
                    space-y-1
                "
            >
                <h3 className="font-black text-sm tracking-wide">
                    {destination.name}
                </h3>

                {destination.subtitle && (
                    <p className="text-[9px] text-slate-300 font-medium leading-relaxed line-clamp-2">
                        {destination.subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}


/* =========================================================
   POPULAR VILLA MINI CARD
========================================================= */

function PopularVillaCard({
    villa,
}: {
    villa: {
        id: string;
        name: string;
        location: string;
        rating: number;
        ratingLabel: string;
        reviews: number;
        image: string;
        price: string;
        feature?: string;
    };
}) {
    return (
        <div
            className="
                bg-white
                border border-slate-300
                rounded-2xl
                overflow-hidden
                shadow-2xs
                hover:shadow-md
                transition-all
                group
                flex
                gap-3
                p-3
            "
        >
            <img
                src={villa.image}
                alt={villa.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
            />

            <div className="flex flex-col justify-between py-0.5 flex-1 min-w-0">

                <div className="space-y-0.5">

                    <h4
                        className="
                            font-extrabold
                            text-xs
                            text-[#0C1E3E]
                            truncate
                            group-hover:text-[#0066FF]
                            transition-colors
                        "
                    >
                        {villa.name}
                    </h4>

                    <p
                        className="
                            text-[10px]
                            text-slate-400
                            font-semibold
                            flex
                            items-center
                            gap-1
                        "
                    >
                        <BedDouble size={10} />
                        {villa.location}
                    </p>

                </div>

                <RatingPill
                    rating={villa.rating}
                    label={villa.ratingLabel}
                />

                <p className="text-[9px] text-slate-400 font-semibold">
                    {villa.reviews.toLocaleString()} reviews
                </p>

            </div>
        </div>
    );
}


/* =========================================================
   PAGE
========================================================= */

function JapanVillasPage() {

    const [activeDestination, setActiveDestination] = useState('Hakone');

    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const [selectedDestination, setSelectedDestination] = useState('');

    const [dateRange, setDateRange] = useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: undefined,
        to: undefined,
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [showOccupancy, setShowOccupancy] = useState(false);

    const [occupancy, setOccupancy] = useState({
        adults: 2,
        children: 0,
        rooms: 1,
    });


    /* =====================================================
       OCCUPANCY
    ===================================================== */

    const updateOccupancy = (
        type: 'adults' | 'children' | 'rooms',
        amount: number
    ) => {
        setOccupancy((prev) => ({
            ...prev,
            [type]: Math.max(
                type === 'adults' || type === 'rooms' ? 1 : 0,
                prev[type] + amount
            ),
        }));
    };


    /* =====================================================
       DATE FORMAT
    ===================================================== */

    const formatDateRange = () => {

        if (!dateRange.from) {
            return 'Check-in — Check-out';
        }

        const checkIn = dateRange.from.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });

        if (!dateRange.to) {
            return `${checkIn} — Check-out`;
        }

        const checkOut = dateRange.to.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });

        return `${checkIn} — ${checkOut}`;
    };


    /* =====================================================
       OCCUPANCY LABEL
    ===================================================== */

    const occupancyLabel = `${occupancy.adults} adult${
        occupancy.adults !== 1 ? 's' : ''
    } · ${occupancy.children} ${
        occupancy.children === 1 ? 'child' : 'children'
    } · ${occupancy.rooms} room${
        occupancy.rooms !== 1 ? 's' : ''
    }`;


    /* =====================================================
       SEARCH
    ===================================================== */

    const handleSearch = () => {

        console.log('Villa search:', {
            destination: selectedDestination,
            checkIn: dateRange.from,
            checkOut: dateRange.to,
            adults: occupancy.adults,
            children: occupancy.children,
            rooms: occupancy.rooms,
        });

    };


    return (
        <div
            className="
                w-full
                bg-[#FAFCFF]
                text-slate-800
                antialiased
                font-sans
            "
        >


            {/* =========================================================
                HERO
            ========================================================= */}

            <section
                className="
                    relative
                    w-full
                    min-h-[380px]
                    lg:min-h-[440px]
                    bg-[#0C1E3E]
                    overflow-hidden
                    flex
                    items-end
                    z-20
                "
            >

                <div className="absolute inset-0 z-0">

                    <img
                        src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1600&q=80"
                        alt="Mount Fuji and Lake Kawaguchi"
                        className="
                            w-full
                            h-full
                            object-cover
                            object-center
                            opacity-40
                            select-none
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#0C1E3E]
                            via-[#0C1E3E]/70
                            to-[#0C1E3E]/20
                        "
                    />

                </div>


                <div
                    className="
                        w-full
                        px-4
                        sm:px-6
                        lg:px-8
                        xl:px-10
                        2xl:px-16
                        pt-16
                        pb-24
                        lg:pb-28
                        max-w-[1400px]
                        mx-auto
                        z-10
                        relative
                        space-y-3
                    "
                >

                    {/* BREADCRUMB */}

                    <div
                        className="
                            text-[11px]
                            font-bold
                            text-slate-300
                            flex
                            flex-wrap
                            items-center
                            gap-1.5
                        "
                    >

                        <span className="hover:text-white cursor-pointer transition-colors">
                            Home
                        </span>

                        <ChevronRight className="w-3 h-3 text-slate-500" />

                        <span className="text-white">
                            Villas in Japan
                        </span>

                    </div>


                    <h1
                        className="
                            text-3xl
                            sm:text-[40px]
                            font-semibold
                            text-white
                            tracking-tight
                            leading-tight
                        "
                    >
                        Find your private villa in Japan
                    </h1>


                    <p
                        className="
                            text-slate-300
                            text-[13px]
                            font-medium
                            max-w-lg
                        "
                    >
                        Discover private villas, traditional retreats,
                        mountain escapes, and beachfront stays across
                        Japan's most beautiful destinations.
                    </p>

                </div>

            </section>


            {/* =========================================================
                SEARCH BAR
            ========================================================= */}

            <section
                className="
                    max-w-7xl
                    2xl:max-w-[1600px]
                    mx-auto
                    px-6
                    2xl:px-10
                    -mt-14
                    relative
                    z-30
                "
            >

                <div
                    className="
                        bg-white
                        border
                        border-slate-300
                        shadow-lg
                        rounded-2xl
                        p-4
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-12
                            gap-3
                            items-end
                            text-xs
                        "
                    >

                        {/* =================================================
                            DESTINATION
                        ================================================= */}

                        <div className="lg:col-span-4 space-y-1.5">

                            <label
                                className="
                                    font-bold
                                    text-slate-400
                                    flex
                                    items-center
                                    gap-1.5
                                "
                            >
                                <MapPin size={12} />
                                Villa destination
                            </label>


                            <div className="relative">

                                <select
                                    value={selectedDestination}
                                    onChange={(e) =>
                                        setSelectedDestination(
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        appearance-none
                                        border
                                        border-slate-300
                                        rounded-xl
                                        p-3
                                        pr-8
                                        focus:outline-hidden
                                        focus:border-blue-500
                                        text-slate-600
                                        font-medium
                                        bg-white
                                    "
                                >

                                    <option value="">
                                        All of Japan
                                    </option>

                                    {JAPAN_VILLA_DESTINATION_FILTERS.map(
                                        (destination) => (
                                            <option
                                                key={destination}
                                                value={destination}
                                            >
                                                {destination}
                                            </option>
                                        )
                                    )}

                                </select>

                                <ChevronDown
                                    className="
                                        w-4
                                        h-4
                                        text-slate-400
                                        absolute
                                        right-3
                                        top-3.5
                                        pointer-events-none
                                    "
                                />

                            </div>

                        </div>


                        {/* =================================================
                            DATES
                        ================================================= */}

                        <div className="lg:col-span-3 space-y-1.5 relative">

                            <label
                                className="
                                    font-bold
                                    text-slate-400
                                    flex
                                    items-center
                                    gap-1.5
                                "
                            >
                                <Calendar size={12} />
                                Dates
                            </label>


                            <button
                                type="button"
                                onClick={() => {
                                    setShowDatePicker((prev) => !prev);
                                    setShowOccupancy(false);
                                }}
                                className="
                                    w-full
                                    border
                                    border-slate-300
                                    rounded-xl
                                    p-3
                                    text-left
                                    focus:outline-hidden
                                    focus:border-blue-500
                                    font-medium
                                    text-slate-500
                                    bg-white
                                    transition-colors
                                "
                            >

                                <span
                                    className={
                                        dateRange.from
                                            ? 'text-slate-700'
                                            : 'text-slate-400'
                                    }
                                >
                                    {formatDateRange()}
                                </span>

                            </button>


                            {/* DATE PICKER */}

                            {showDatePicker && (

                                <div
                                    className="
                                        absolute
                                        top-full
                                        left-0
                                        mt-2
                                        z-[100]
                                        bg-white
                                        border
                                        border-slate-200
                                        rounded-2xl
                                        shadow-2xl
                                        p-4
                                    "
                                >

                                    <DayPicker
                                        mode="range"
                                        selected={dateRange}
                                        onSelect={(range) => {
                                            setDateRange({
                                                from: range?.from,
                                                to: range?.to,
                                            });
                                        }}
                                        numberOfMonths={2}
                                        disabled={{
                                            before: new Date(),
                                        }}
                                        className="text-sm"
                                    />


                                    <div
                                        className="
                                            flex
                                            flex-col
                                            sm:flex-row
                                            sm:items-center
                                            sm:justify-between
                                            gap-3
                                            pt-3
                                            border-t
                                            border-slate-100
                                        "
                                    >

                                        <div className="text-[11px] text-slate-500">

                                            {dateRange.from ? (

                                                <span>

                                                    <span className="font-bold text-slate-700">
                                                        Check-in:
                                                    </span>{' '}

                                                    {dateRange.from.toLocaleDateString(
                                                        'en-US',
                                                        {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric',
                                                        }
                                                    )}

                                                    {dateRange.to && (
                                                        <>

                                                            <span className="mx-1.5 text-slate-300">
                                                                →
                                                            </span>

                                                            <span className="font-bold text-slate-700">
                                                                Check-out:
                                                            </span>{' '}

                                                            {dateRange.to.toLocaleDateString(
                                                                'en-US',
                                                                {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric',
                                                                }
                                                            )}

                                                        </>
                                                    )}

                                                </span>

                                            ) : (
                                                'Select your check-in date'
                                            )}

                                        </div>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowDatePicker(false)
                                            }
                                            disabled={
                                                !dateRange.from ||
                                                !dateRange.to
                                            }
                                            className="
                                                bg-[#0066FF]
                                                hover:bg-blue-700
                                                disabled:bg-slate-300
                                                disabled:cursor-not-allowed
                                                text-white
                                                px-5
                                                py-2
                                                rounded-lg
                                                text-xs
                                                font-bold
                                                transition-colors
                                            "
                                        >
                                            Done
                                        </button>

                                    </div>

                                </div>

                            )}

                        </div>


                        {/* =================================================
                            GUESTS
                        ================================================= */}

                        <div className="lg:col-span-3 space-y-1.5 relative">

                            <label
                                className="
                                    font-bold
                                    text-slate-400
                                    flex
                                    items-center
                                    gap-1.5
                                "
                            >
                                <Users size={12} />
                                Guests & Rooms
                            </label>


                            <button
                                type="button"
                                onClick={() => {
                                    setShowOccupancy((prev) => !prev);
                                    setShowDatePicker(false);
                                }}
                                className="
                                    w-full
                                    border
                                    border-slate-300
                                    rounded-xl
                                    p-3
                                    pr-8
                                    text-left
                                    focus:outline-hidden
                                    focus:border-blue-500
                                    text-slate-600
                                    font-medium
                                    bg-white
                                    relative
                                "
                            >

                                {occupancyLabel}

                                <ChevronDown
                                    className="
                                        w-4
                                        h-4
                                        text-slate-400
                                        absolute
                                        right-3
                                        top-3.5
                                        pointer-events-none
                                    "
                                />

                            </button>


                            {/* OCCUPANCY */}

                            {showOccupancy && (

                                <div
                                    className="
                                        absolute
                                        top-full
                                        right-0
                                        mt-2
                                        z-[100]
                                        w-full
                                        sm:w-[340px]
                                        bg-white
                                        border
                                        border-slate-200
                                        rounded-2xl
                                        shadow-2xl
                                        p-5
                                    "
                                >

                                    <div className="space-y-1">

                                        {/* ADULTS */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                py-3
                                            "
                                        >

                                            <div>

                                                <p className="font-bold text-slate-700 text-sm">
                                                    Adults
                                                </p>

                                                <p className="text-[11px] text-slate-400">
                                                    Ages 13+
                                                </p>

                                            </div>


                                            <div className="flex items-center gap-3">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            'adults',
                                                            -1
                                                        )
                                                    }
                                                    disabled={
                                                        occupancy.adults <= 1
                                                    }
                                                    className="
                                                        w-8
                                                        h-8
                                                        rounded-full
                                                        border
                                                        border-slate-300
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-slate-600
                                                        hover:border-blue-500
                                                        hover:text-blue-600
                                                        disabled:opacity-40
                                                        disabled:cursor-not-allowed
                                                        transition-colors
                                                    "
                                                >
                                                    <Minus size={14} />
                                                </button>


                                                <span className="w-5 text-center font-bold text-slate-700">
                                                    {occupancy.adults}
                                                </span>


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            'adults',
                                                            1
                                                        )
                                                    }
                                                    className="
                                                        w-8
                                                        h-8
                                                        rounded-full
                                                        border
                                                        border-slate-300
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-slate-600
                                                        hover:border-blue-500
                                                        hover:text-blue-600
                                                        transition-colors
                                                    "
                                                >
                                                    <Plus size={14} />
                                                </button>

                                            </div>

                                        </div>


                                        {/* CHILDREN */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                py-3
                                                border-t
                                                border-slate-100
                                            "
                                        >

                                            <div>

                                                <p className="font-bold text-slate-700 text-sm">
                                                    Children
                                                </p>

                                                <p className="text-[11px] text-slate-400">
                                                    Ages 0–12
                                                </p>

                                            </div>


                                            <div className="flex items-center gap-3">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            'children',
                                                            -1
                                                        )
                                                    }
                                                    disabled={
                                                        occupancy.children <= 0
                                                    }
                                                    className="
                                                        w-8
                                                        h-8
                                                        rounded-full
                                                        border
                                                        border-slate-300
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-slate-600
                                                        hover:border-blue-500
                                                        hover:text-blue-600
                                                        disabled:opacity-40
                                                        disabled:cursor-not-allowed
                                                        transition-colors
                                                    "
                                                >
                                                    <Minus size={14} />
                                                </button>


                                                <span className="w-5 text-center font-bold text-slate-700">
                                                    {occupancy.children}
                                                </span>


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            'children',
                                                            1
                                                        )
                                                    }
                                                    className="
                                                        w-8
                                                        h-8
                                                        rounded-full
                                                        border
                                                        border-slate-300
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-slate-600
                                                        hover:border-blue-500
                                                        hover:text-blue-600
                                                        transition-colors
                                                    "
                                                >
                                                    <Plus size={14} />
                                                </button>

                                            </div>

                                        </div>


                                        {/* ROOMS */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                py-3
                                                border-t
                                                border-slate-100
                                            "
                                        >

                                            <div>

                                                <p className="font-bold text-slate-700 text-sm">
                                                    Villas
                                                </p>

                                                <p className="text-[11px] text-slate-400">
                                                    Number of villas
                                                </p>

                                            </div>


                                            <div className="flex items-center gap-3">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            'rooms',
                                                            -1
                                                        )
                                                    }
                                                    disabled={
                                                        occupancy.rooms <= 1
                                                    }
                                                    className="
                                                        w-8
                                                        h-8
                                                        rounded-full
                                                        border
                                                        border-slate-300
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-slate-600
                                                        hover:border-blue-500
                                                        hover:text-blue-600
                                                        disabled:opacity-40
                                                        disabled:cursor-not-allowed
                                                        transition-colors
                                                    "
                                                >
                                                    <Minus size={14} />
                                                </button>


                                                <span className="w-5 text-center font-bold text-slate-700">
                                                    {occupancy.rooms}
                                                </span>


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            'rooms',
                                                            1
                                                        )
                                                    }
                                                    className="
                                                        w-8
                                                        h-8
                                                        rounded-full
                                                        border
                                                        border-slate-300
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-slate-600
                                                        hover:border-blue-500
                                                        hover:text-blue-600
                                                        transition-colors
                                                    "
                                                >
                                                    <Plus size={14} />
                                                </button>

                                            </div>

                                        </div>

                                    </div>


                                    <div
                                        className="
                                            flex
                                            justify-end
                                            pt-4
                                            mt-2
                                            border-t
                                            border-slate-100
                                        "
                                    >

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowOccupancy(false)
                                            }
                                            className="
                                                bg-[#0066FF]
                                                hover:bg-blue-700
                                                text-white
                                                font-bold
                                                text-xs
                                                px-5
                                                py-2.5
                                                rounded-xl
                                                transition-colors
                                            "
                                        >
                                            Done
                                        </button>

                                    </div>

                                </div>

                            )}

                        </div>


                        {/* =================================================
                            SEARCH BUTTON
                        ================================================= */}

                        <div className="lg:col-span-2">

                            <button
                                type="button"
                                onClick={handleSearch}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-[#0066FF]
                                    hover:bg-blue-700
                                    text-white
                                    font-bold
                                    p-3
                                    rounded-xl
                                    shadow-xs
                                    transition-all
                                    cursor-pointer
                                "
                            >
                                <Search className="w-4 h-4" />
                                Search
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                TONIGHT VILLAS
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    max-w-[1400px]
                    mx-auto
                    space-y-6
                "
            >

                <div className="flex items-center justify-between">

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Last-minute villas near you tonight
                    </h2>

                    <button
                        className="
                            text-[#0066FF]
                            font-bold
                            text-xs
                            flex
                            items-center
                            gap-0.5
                            hover:underline
                        "
                    >
                        See all
                        <ChevronRight size={14} />
                    </button>

                </div>


                <div className="relative">

                    <button
                        className="
                            absolute
                            left-[-16px]
                            top-1/2
                            -translate-y-1/2
                            w-8
                            h-8
                            rounded-full
                            bg-white
                            border
                            border-slate-300
                            shadow-sm
                            flex
                            items-center
                            justify-center
                            text-slate-400
                            hover:text-slate-700
                            z-10
                            transition-colors
                            hidden
                            lg:flex
                        "
                    >
                        <ChevronLeft size={16} />
                    </button>


                    <button
                        className="
                            absolute
                            right-[-16px]
                            top-1/2
                            -translate-y-1/2
                            w-8
                            h-8
                            rounded-full
                            bg-white
                            border
                            border-slate-300
                            shadow-sm
                            flex
                            items-center
                            justify-center
                            text-slate-400
                            hover:text-slate-700
                            z-10
                            transition-colors
                            hidden
                            lg:flex
                        "
                    >
                        <ChevronRight size={16} />
                    </button>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {TONIGHT_VILLAS.map((villa) => (
                            <VillaCard
                                key={villa.id}
                                villa={villa}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                WEEKEND VILLAS
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    2xl:px-10
                    bg-slate-300/50
                    border-y
                    border-slate-300/80
                "
            >

                <div
                    className="
                        max-w-[1400px]
                        2xl:max-w-[1600px]
                        mx-auto
                        space-y-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            Last-minute villas this weekend
                        </h2>

                        <button
                            className="
                                text-[#0066FF]
                                font-bold
                                text-xs
                                flex
                                items-center
                                gap-0.5
                                hover:underline
                            "
                        >
                            See all
                            <ChevronRight size={14} />
                        </button>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {WEEKEND_VILLAS.map((villa) => (

                            <div
                                key={villa.id}
                                className="
                                    bg-white
                                    border
                                    border-slate-300
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-2xs
                                    hover:shadow-md
                                    transition-all
                                    group
                                    flex
                                    flex-col
                                "
                            >

                                <div className="w-full h-32 bg-slate-300 relative overflow-hidden">

                                    <img
                                        src={villa.image}
                                        alt={villa.name}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            group-hover:scale-102
                                            transition-transform
                                            duration-300
                                        "
                                        loading="lazy"
                                    />

                                </div>


                                <div className="p-3.5 space-y-2">

                                    <h3
                                        className="
                                            font-extrabold
                                            text-[#0C1E3E]
                                            text-xs
                                            truncate
                                            group-hover:text-[#0066FF]
                                            transition-colors
                                        "
                                    >
                                        {villa.name}
                                    </h3>

                                    <p className="text-[10px] text-slate-400 font-semibold">
                                        {villa.location}
                                    </p>

                                    <RatingPill
                                        rating={villa.rating}
                                        label={villa.ratingLabel}
                                    />

                                    <div
                                        className="
                                            border-t
                                            border-slate-300
                                            pt-2
                                            flex
                                            items-end
                                            justify-between
                                        "
                                    >

                                        <span className="text-[9px] font-bold text-slate-400">
                                            From
                                        </span>

                                        <span className="text-xs font-black text-[#0C1E3E]">
                                            {villa.price}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                FEATURED DESTINATIONS
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    max-w-[1400px]
                    mx-auto
                    space-y-6
                "
            >

                <div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Trending villa destinations
                    </h2>

                    <p className="text-xs text-slate-400 font-semibold mt-1">
                        Explore destinations currently popular with villa travelers
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {FEATURED_VILLA_DESTINATIONS.map((destination) => (

                        <button
                            key={destination.id}
                            type="button"
                            onClick={() =>
                                setSelectedDestination(destination.name)
                            }
                            className="text-left"
                        >
                            <DestinationCard
                                destination={destination}
                            />
                        </button>

                    ))}

                </div>

            </section>


            {/* =========================================================
                POPULAR DESTINATIONS + POPULAR VILLAS
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    2xl:px-10
                    bg-slate-300/50
                    border-y
                    border-slate-300/80
                "
            >

                <div
                    className="
                        max-w-[1400px]
                        2xl:max-w-[1600px]
                        mx-auto
                        space-y-8
                    "
                >

                    {/* POPULAR DESTINATIONS */}

                    <div className="space-y-4">

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            Popular villa destinations in Japan
                        </h2>


                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

                            {POPULAR_VILLA_DESTINATIONS.map(
                                (destination) => (

                                    <button
                                        key={destination.id}
                                        type="button"
                                        onClick={() =>
                                            setSelectedDestination(
                                                destination.name
                                            )
                                        }
                                        className="
                                            bg-white
                                            border
                                            border-slate-300
                                            rounded-2xl
                                            overflow-hidden
                                            shadow-2xs
                                            hover:shadow-md
                                            transition-all
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            p-3
                                            text-left
                                        "
                                    >

                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="
                                                w-12
                                                h-12
                                                rounded-xl
                                                object-cover
                                                shrink-0
                                            "
                                        />

                                        <div>

                                            <h4
                                                className="
                                                    font-extrabold
                                                    text-xs
                                                    text-[#0C1E3E]
                                                    group-hover:text-[#0066FF]
                                                    transition-colors
                                                "
                                            >
                                                {destination.name}
                                            </h4>

                                            <p className="text-[10px] text-slate-400 font-semibold">
                                                {destination.count.toLocaleString()} villas
                                            </p>

                                        </div>

                                    </button>

                                )
                            )}

                        </div>

                    </div>


                    {/* POPULAR VILLAS */}

                    <div className="space-y-4">

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                flex-wrap
                                gap-3
                            "
                        >

                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                                Popular villas
                            </h2>


                            <div className="flex items-center gap-1.5 flex-wrap">

                                {POPULAR_VILLA_DESTINATIONS
                                    .slice(0, 4)
                                    .map((destination) => (

                                        <button
                                            key={destination.id}
                                            onClick={() =>
                                                setActiveDestination(
                                                    destination.name
                                                )
                                            }
                                            className={`
                                                px-3.5
                                                py-1.5
                                                rounded-full
                                                text-[11px]
                                                font-bold
                                                border
                                                transition-all
                                                cursor-pointer
                                                ${
                                                    activeDestination ===
                                                    destination.name
                                                        ? 'bg-[#0066FF] text-white border-[#0066FF]'
                                                        : 'bg-white text-slate-500 border-slate-300 hover:border-blue-400'
                                                }
                                            `}
                                        >
                                            {destination.name}
                                        </button>

                                    ))}

                            </div>

                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {POPULAR_VILLAS.map((villa) => (
                                <PopularVillaCard
                                    key={villa.id}
                                    villa={villa}
                                />
                            ))}

                        </div>


                        <button
                            className="
                                w-full
                                flex
                                items-center
                                justify-center
                                gap-1.5
                                border
                                border-slate-300
                                text-slate-600
                                bg-white
                                font-bold
                                text-xs
                                p-3
                                rounded-xl
                                hover:bg-slate-50
                                transition-colors
                            "
                        >
                            <SlidersHorizontal size={13} />
                            Show more villas
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================================================
                VILLA EXPERIENCES
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    max-w-[1400px]
                    mx-auto
                    space-y-6
                "
            >

                <div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Find a villa that fits your escape
                    </h2>

                    <p className="text-xs text-slate-400 font-semibold mt-1">
                        From private onsens to oceanfront pools, choose the
                        experience that suits your trip.
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {VILLA_EXPERIENCES.map((experience) => (

                        <button
                            key={experience.id}
                            type="button"
                            className="text-left"
                        >
                            <DestinationCard
                                destination={experience}
                            />
                        </button>

                    ))}

                </div>

            </section>


            {/* =========================================================
                REGIONS
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    2xl:px-10
                    bg-slate-300/50
                    border-y
                    border-slate-300/80
                "
            >

                <div
                    className="
                        max-w-[1400px]
                        2xl:max-w-[1600px]
                        mx-auto
                        space-y-6
                    "
                >

                    <div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            Villa escapes by region
                        </h2>

                        <p className="text-xs text-slate-400 font-semibold mt-1">
                            Explore different sides of Japan, from hot spring
                            towns to tropical islands.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {JAPAN_VILLA_REGIONS.map((region) => (

                            <DestinationCard
                                key={region.id}
                                destination={{
                                    ...region,
                                    subtitle: region.description,
                                }}
                            />

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                VILLA STYLES
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    max-w-[1400px]
                    mx-auto
                    space-y-6
                "
            >

                <div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Explore villa styles
                    </h2>

                    <p className="text-xs text-slate-400 font-semibold mt-1">
                        Choose the kind of Japanese villa that suits your trip.
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {VILLA_STYLES.map((style) => (

                        <button
                            key={style.id}
                            type="button"
                            className="
                                bg-white
                                border
                                border-slate-300
                                rounded-2xl
                                overflow-hidden
                                shadow-2xs
                                hover:shadow-md
                                transition-all
                                group
                                text-left
                            "
                        >

                            <div className="w-full h-40 bg-slate-300 overflow-hidden">

                                <img
                                    src={style.image}
                                    alt={style.title}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        group-hover:scale-102
                                        transition-transform
                                        duration-300
                                    "
                                    loading="lazy"
                                />

                            </div>


                            <div className="p-4">

                                <h3
                                    className="
                                        font-extrabold
                                        text-sm
                                        text-[#0C1E3E]
                                        group-hover:text-[#0066FF]
                                        transition-colors
                                    "
                                >
                                    {style.title}
                                </h3>

                                <p className="text-[10px] text-slate-400 font-semibold mt-1">
                                    {style.count}
                                </p>

                                <span
                                    className="
                                        mt-3
                                        inline-flex
                                        items-center
                                        gap-1
                                        text-[10px]
                                        font-bold
                                        text-[#0066FF]
                                    "
                                >
                                    Explore
                                    <ChevronRight size={13} />
                                </span>

                            </div>

                        </button>

                    ))}

                </div>

            </section>


            {/* =========================================================
                JAPAN VILLA GUIDE
            ========================================================= */}

            <section
                className="
                    w-full
                    px-4
                    lg:px-12
                    2xl:px-10
                    py-16
                    max-w-[1400px]
                    2xl:max-w-[1600px]
                    mx-auto
                "
            >

                <div
                    className="
                        bg-gradient-to-r
                        from-[#0C1E3E]
                        to-[#16366B]
                        rounded-3xl
                        px-6
                        lg:px-10
                        py-8
                        md:py-10
                        text-white
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        justify-between
                        gap-8
                        shadow-md
                        overflow-hidden
                    "
                >

                    <div className="space-y-2 flex-1">

                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-300">
                            Your Japan villa guide
                        </p>

                        <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                            More space. More privacy. More Japan.
                        </h3>

                        <p
                            className="
                                text-xs
                                sm:text-sm
                                text-slate-300
                                font-medium
                                max-w-xl
                            "
                        >
                            Whether you want a private onsen in Hakone,
                            a Mount Fuji view in Kawaguchiko, or a poolside
                            escape in Okinawa, discover Japan at your own pace.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="
                            bg-[#0066FF]
                            hover:bg-blue-700
                            text-white
                            font-bold
                            text-xs
                            px-6
                            py-3
                            rounded-xl
                            shadow-xs
                            transition-colors
                            whitespace-nowrap
                        "
                    >
                        Explore Japan villas
                    </button>

                </div>

            </section>


            {/* =========================================================
                FAQ
            ========================================================= */}

            <section
                className="
                    w-full
                    py-16
                    px-4
                    lg:px-12
                    max-w-[1400px]
                    mx-auto
                    space-y-6
                "
            >

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                    FAQs about villas on SeaHomeNet
                </h2>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                    {VILLA_FAQS.map((faq) => {

                        const isOpen = openFaq === faq.id;

                        return (

                            <div
                                key={faq.id}
                                className="
                                    bg-white
                                    border
                                    border-slate-300
                                    rounded-2xl
                                    shadow-3xs
                                    overflow-hidden
                                "
                            >

                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFaq(
                                            isOpen ? null : faq.id
                                        )
                                    }
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        p-4
                                        text-left
                                        cursor-pointer
                                    "
                                >

                                    <span
                                        className="
                                            font-bold
                                            text-xs
                                            text-[#0C1E3E]
                                            pr-4
                                        "
                                    >
                                        {faq.q}
                                    </span>


                                    <ChevronDown
                                        size={16}
                                        className={`
                                            text-slate-400
                                            shrink-0
                                            transition-transform
                                            ${
                                                isOpen
                                                    ? 'rotate-180'
                                                    : ''
                                            }
                                        `}
                                    />

                                </button>


                                {isOpen && (

                                    <p
                                        className="
                                            px-4
                                            pb-4
                                            text-[11px]
                                            text-slate-500
                                            font-medium
                                            leading-relaxed
                                        "
                                    >
                                        {faq.a}
                                    </p>

                                )}

                            </div>

                        );

                    })}

                </div>

            </section>


            {/* =========================================================
                NEWSLETTER
            ========================================================= */}

            <section
                className="
                    w-full
                    px-4
                    lg:px-12
                    2xl:px-10
                    py-16
                    max-w-[1400px]
                    2xl:max-w-[1600px]
                    mx-auto
                "
            >

                <div
                    className="
                        bg-gradient-to-r
                        from-[#0C1E3E]
                        to-[#16366B]
                        rounded-3xl
                        px-6
                        lg:px-10
                        py-8
                        md:pt-10
                        md:pb-10
                        text-white
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        justify-between
                        gap-8
                        shadow-md
                        relative
                        overflow-hidden
                    "
                >

                    <div className="space-y-2 relative z-20 flex-1">

                        <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                            Never miss a Japan villa deal
                        </h3>

                        <p
                            className="
                                text-xs
                                sm:text-sm
                                text-slate-300
                                font-medium
                                max-w-xl
                            "
                        >
                            Subscribe and get last-minute villa deals,
                            seasonal offers, and new private stays across Japan.
                        </p>

                    </div>


                    <div className="w-full md:w-auto relative z-20">

                        <form
                            className="
                                flex
                                flex-col
                                sm:flex-row
                                items-stretch
                                sm:items-center
                                gap-3
                                w-full
                                md:max-w-md
                            "
                            onSubmit={(e) => e.preventDefault()}
                        >

                            <input
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="
                                    w-full
                                    bg-white/10
                                    border
                                    border-white/10
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-xs
                                    font-medium
                                    text-white
                                    placeholder-slate-400
                                    focus:outline-hidden
                                    focus:border-white/30
                                    md:min-w-[240px]
                                "
                            />

                            <button
                                type="submit"
                                className="
                                    w-full
                                    sm:w-auto
                                    bg-[#0066FF]
                                    hover:bg-blue-700
                                    text-white
                                    font-bold
                                    text-xs
                                    px-6
                                    py-3
                                    rounded-xl
                                    shadow-xs
                                    transition-colors
                                    whitespace-nowrap
                                    cursor-pointer
                                "
                            >
                                Subscribe
                            </button>

                        </form>

                    </div>

                </div>

            </section>


        </div>
    );
}

export default JapanVillasPage;