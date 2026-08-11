import { useState } from 'react';

import {
    ChevronDown,
    ChevronRight,
    Heart,
    MapPin,
    Search,
    Users,
    Calendar,
    Minus,
    Plus,
    ArrowRight,
} from 'lucide-react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import {
    JAPAN_RYOKAN_DESTINATION_FILTERS,
    FEATURED_RYOKAN_STAYS,
    TONIGHT_RYOKANS,
    WEEKEND_RYOKANS,
    POPULAR_ONSEN_DESTINATIONS,
    RYOKAN_EXPERIENCES,
    POPULAR_RYOKANS,
    JAPAN_ONSEN_REGIONS,
    ONSEN_TYPES,
    ONSEN_ETIQUETTE,
    RYOKAN_ONSEN_FAQS,
} from '../config/JapanRyokanOnsenPage';


/* =========================================================
   RATING
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

            <span
                className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[#0066FF]
                    px-1.5
                    py-0.5
                    text-[10px]
                    font-black
                    text-white
                "
            >
                {rating.toFixed(1)}
            </span>

            <span className="text-[10px] font-bold text-slate-500">
                {label}
            </span>

        </div>
    );
}


/* =========================================================
   FEATURED RYOKAN CARD
========================================================= */

function FeaturedRyokanCard({
    stay,
}: {
    stay: {
        id: string;
        name: string;
        location: string;
        image: string;
        rating: number;
        ratingLabel: string;
        reviews: number;
        price: string;
        feature: string;
        blurb: string;
        tags: readonly string[];
    };
}) {

    const [saved, setSaved] = useState(false);

    return (
        <article
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

            {/* IMAGE */}

            <div className="relative h-48 overflow-hidden bg-slate-300">

                <img
                    src={stay.image}
                    alt={stay.name}
                    className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-500
                    "
                    loading="lazy"
                />


                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950/50
                        via-transparent
                        to-transparent
                    "
                />


                {/* FEATURE */}

                <div
                    className="
                        absolute
                        left-3
                        bottom-3
                        bg-white/95
                        text-[#0C1E3E]
                        rounded-lg
                        px-2.5
                        py-1.5
                        text-[9px]
                        font-black
                        shadow-sm
                    "
                >
                    {stay.feature}
                </div>


                {/* HEART */}

                <button
                    type="button"
                    onClick={() => setSaved(!saved)}
                    aria-label={`Save ${stay.name}`}
                    className="
                        absolute
                        right-3
                        top-3
                        w-8
                        h-8
                        rounded-full
                        bg-white/90
                        flex
                        items-center
                        justify-center
                        text-slate-500
                        hover:text-red-500
                        transition-colors
                    "
                >
                    <Heart
                        size={14}
                        fill={saved ? 'currentColor' : 'none'}
                    />
                </button>

            </div>


            {/* CONTENT */}

            <div className="p-4 flex flex-col flex-1 gap-3">

                <div>

                    <h3
                        className="
                            text-sm
                            font-extrabold
                            text-[#0C1E3E]
                            group-hover:text-[#0066FF]
                            transition-colors
                        "
                    >
                        {stay.name}
                    </h3>


                    <p
                        className="
                            text-[10px]
                            text-slate-400
                            font-semibold
                            flex
                            items-center
                            gap-1
                            mt-1
                        "
                    >
                        <MapPin size={10} />
                        {stay.location}
                    </p>

                </div>


                <div className="flex items-center justify-between">

                    <RatingPill
                        rating={stay.rating}
                        label={stay.ratingLabel}
                    />

                    <span className="text-[9px] text-slate-400 font-semibold">
                        {stay.reviews.toLocaleString()} reviews
                    </span>

                </div>


                <p
                    className="
                        text-[10px]
                        leading-relaxed
                        text-slate-500
                        font-medium
                        line-clamp-2
                    "
                >
                    {stay.blurb}
                </p>


                <div className="flex flex-wrap gap-1.5">

                    {stay.tags.map((tag) => (

                        <span
                            key={tag}
                            className="
                                bg-slate-100
                                text-slate-500
                                rounded-md
                                px-2
                                py-1
                                text-[9px]
                                font-bold
                            "
                        >
                            {tag}
                        </span>

                    ))}

                </div>


                <div
                    className="
                        mt-auto
                        pt-3
                        border-t
                        border-slate-300
                        flex
                        items-end
                        justify-between
                    "
                >

                    <div>

                        <p className="text-[9px] text-slate-400 font-bold">
                            From
                        </p>

                        <p className="text-sm font-black text-[#0C1E3E]">
                            {stay.price}
                        </p>

                    </div>


                    <button
                        className="
                            text-[#0066FF]
                            text-[10px]
                            font-black
                            flex
                            items-center
                            gap-1
                            hover:underline
                        "
                    >
                        View stay
                        <ArrowRight size={12} />
                    </button>

                </div>

            </div>

        </article>
    );
}


/* =========================================================
   SMALL RYOKAN CARD
========================================================= */

function SmallRyokanCard({
    stay,
}: {
    stay: {
        id: string;
        name: string;
        location: string;
        image: string;
        rating: number;
        ratingLabel: string;
        reviews: number;
        price: string;
    };
}) {

    return (
        <article
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
            "
        >

            <div className="h-32 overflow-hidden bg-slate-300">

                <img
                    src={stay.image}
                    alt={stay.name}
                    className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-300
                    "
                    loading="lazy"
                />

            </div>


            <div className="p-3.5 space-y-2">

                <h3
                    className="
                        text-xs
                        font-extrabold
                        text-[#0C1E3E]
                        truncate
                        group-hover:text-[#0066FF]
                        transition-colors
                    "
                >
                    {stay.name}
                </h3>


                <p className="text-[10px] text-slate-400 font-semibold">
                    {stay.location}
                </p>


                <RatingPill
                    rating={stay.rating}
                    label={stay.ratingLabel}
                />


                <div
                    className="
                        pt-2
                        border-t
                        border-slate-300
                        flex
                        items-end
                        justify-between
                    "
                >

                    <span className="text-[9px] text-slate-400 font-bold">
                        From
                    </span>

                    <span className="text-xs font-black text-[#0C1E3E]">
                        {stay.price}
                    </span>

                </div>

            </div>

        </article>
    );
}


/* =========================================================
   DESTINATION CARD
========================================================= */

function VisualDestinationCard({
    item,
}: {
    item: {
        id: string;
        name: string;
        subtitle: string;
        image: string;
        count?: number;
    };
}) {

    return (
        <article
            className="
                relative
                h-52
                rounded-2xl
                overflow-hidden
                group
                cursor-pointer
                border
                border-slate-300
                shadow-2xs
            "
        >

            <img
                src={item.image}
                alt={item.name}
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                "
                loading="lazy"
            />


            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/85
                    via-slate-950/25
                    to-transparent
                "
            />


            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">

                <div className="flex items-end justify-between gap-3">

                    <div>

                        <h3 className="text-sm font-black">
                            {item.name}
                        </h3>

                        <p className="text-[10px] text-slate-300 font-medium mt-1">
                            {item.subtitle}
                        </p>

                    </div>


                    {item.count !== undefined && (

                        <span
                            className="
                                shrink-0
                                bg-white/15
                                backdrop-blur-sm
                                border
                                border-white/20
                                rounded-lg
                                px-2
                                py-1
                                text-[9px]
                                font-bold
                            "
                        >
                            {item.count} stays
                        </span>

                    )}

                </div>

            </div>

        </article>
    );
}


/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
    experience,
}: {
    experience: {
        id: string;
        title: string;
        subtitle: string;
        image: string;
    };
}) {

    return (
        <article
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
            "
        >

            <div className="h-40 overflow-hidden">

                <img
                    src={experience.image}
                    alt={experience.title}
                    className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-500
                    "
                    loading="lazy"
                />

            </div>


            <div className="p-4">

                <h3
                    className="
                        text-sm
                        font-extrabold
                        text-[#0C1E3E]
                        group-hover:text-[#0066FF]
                        transition-colors
                    "
                >
                    {experience.title}
                </h3>

                <p
                    className="
                        text-[10px]
                        text-slate-400
                        font-medium
                        leading-relaxed
                        mt-1
                    "
                >
                    {experience.subtitle}
                </p>


                <button
                    className="
                        mt-3
                        text-[#0066FF]
                        text-[10px]
                        font-black
                        flex
                        items-center
                        gap-1
                    "
                >
                    Explore
                    <ChevronRight size={12} />
                </button>

            </div>

        </article>
    );
}


/* =========================================================
   PAGE
========================================================= */

export default function JapanRyokanOnsenPage() {

    const [selectedDestination, setSelectedDestination] = useState('');

    const [dateRange, setDateRange] = useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: undefined,
        to: undefined,
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [showGuests, setShowGuests] = useState(false);

    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const [activeRegion, setActiveRegion] = useState('Hakone');

    const [occupancy, setOccupancy] = useState({
        adults: 2,
        children: 0,
        rooms: 1,
    });


    /* =========================================================
       OCCUPANCY
    ========================================================= */

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


    /* =========================================================
       DATE LABEL
    ========================================================= */

    const dateLabel = () => {

        if (!dateRange.from) {
            return 'Check-in — Check-out';
        }

        const from = dateRange.from.toLocaleDateString(
            'en-US',
            {
                month: 'short',
                day: 'numeric',
            }
        );

        if (!dateRange.to) {
            return `${from} — Check-out`;
        }

        const to = dateRange.to.toLocaleDateString(
            'en-US',
            {
                month: 'short',
                day: 'numeric',
            }
        );

        return `${from} — ${to}`;
    };


    /* =========================================================
       GUEST LABEL
    ========================================================= */

    const guestLabel =
        `${occupancy.adults} adult${occupancy.adults !== 1 ? 's' : ''
        } · ${occupancy.children} ${occupancy.children === 1
            ? 'child'
            : 'children'
        } · ${occupancy.rooms} room${occupancy.rooms !== 1 ? 's' : ''
        }`;


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

            {/* =====================================================
                HERO
            ===================================================== */}

            <section
                className="
                    relative
                    min-h-[440px]
                    flex
                    items-end
                    overflow-hidden
                    bg-[#0C1E3E]
                "
            >

                <img
                    src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1800&q=85"
                    alt="Japanese mountain and hot spring destination"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        opacity-45
                    "
                />


                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#0C1E3E]
                        via-[#0C1E3E]/65
                        to-[#0C1E3E]/10
                    "
                />


                <div
                    className="
                        relative
                        z-10
                        w-full
                        max-w-[1400px]
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                        xl:px-10
                        2xl:px-16
                        pt-20
                        pb-28
                    "
                >

                    <div
                        className="
                            text-[11px]
                            font-bold
                            text-slate-300
                            flex
                            items-center
                            gap-1.5
                            mb-4
                        "
                    >

                        <span>
                            Home
                        </span>

                        <ChevronRight
                            size={12}
                            className="text-slate-500"
                        />

                        <span className="text-white">
                            Ryokan & Onsen
                        </span>

                    </div>


                    <div className="max-w-2xl">

                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                font-black
                                text-blue-300
                                mb-2
                            "
                        >
                            Traditional Japan
                        </p>


                        <h1
                            className="
                                text-3xl
                                sm:text-4xl
                                lg:text-[44px]
                                font-semibold
                                text-white
                                tracking-tight
                                leading-tight
                            "
                        >
                            Slow down. Soak in.
                            <br />
                            Stay in a ryokan.
                        </h1>


                        <p
                            className="
                                text-slate-300
                                text-[13px]
                                sm:text-sm
                                font-medium
                                max-w-xl
                                mt-4
                                leading-relaxed
                            "
                        >
                            Discover traditional Japanese inns, natural
                            hot springs, private baths, tatami rooms,
                            and unforgettable stays across Japan.
                        </p>


                        <div
                            className="
                                flex
                                flex-wrap
                                gap-2
                                mt-5
                            "
                        >

                            <span
                                className="
                                    bg-white/10
                                    border
                                    border-white/15
                                    rounded-full
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                ♨ Onsen stays
                            </span>

                            <span
                                className="
                                    bg-white/10
                                    border
                                    border-white/15
                                    rounded-full
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                🍵 Traditional ryokan
                            </span>

                            <span
                                className="
                                    bg-white/10
                                    border
                                    border-white/15
                                    rounded-full
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                🗻 Mountain retreats
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SEARCH BAR
            ===================================================== */}

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

                        {/* DESTINATION */}

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
                                Destination
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
                                        Japan — All ryokans & onsens
                                    </option>

                                    {JAPAN_RYOKAN_DESTINATION_FILTERS.map(
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
                                    size={15}
                                    className="
                                        absolute
                                        right-3
                                        top-3.5
                                        text-slate-400
                                        pointer-events-none
                                    "
                                />

                            </div>

                        </div>


                        {/* DATES */}

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
                                    setShowDatePicker(
                                        !showDatePicker
                                    );
                                    setShowGuests(false);
                                }}
                                className="
                                    w-full
                                    border
                                    border-slate-300
                                    rounded-xl
                                    p-3
                                    text-left
                                    font-medium
                                    text-slate-500
                                    bg-white
                                    focus:outline-hidden
                                    focus:border-blue-500
                                "
                            >
                                {dateLabel()}
                            </button>


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
                                    />


                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowDatePicker(false)
                                        }
                                        className="
                                            w-full
                                            bg-[#0066FF]
                                            hover:bg-blue-700
                                            text-white
                                            font-bold
                                            text-xs
                                            py-2.5
                                            rounded-xl
                                        "
                                    >
                                        Done
                                    </button>

                                </div>

                            )}

                        </div>


                        {/* GUESTS */}

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
                                    setShowGuests(!showGuests);
                                    setShowDatePicker(false);
                                }}
                                className="
                                    w-full
                                    border
                                    border-slate-300
                                    rounded-xl
                                    p-3
                                    text-left
                                    font-medium
                                    text-slate-600
                                    bg-white
                                    focus:outline-hidden
                                    focus:border-blue-500
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <span>
                                    {guestLabel}
                                </span>

                                <ChevronDown
                                    size={14}
                                    className="text-slate-400"
                                />

                            </button>


                            {showGuests && (

                                <div
                                    className="
                                        absolute
                                        top-full
                                        right-0
                                        mt-2
                                        z-[100]
                                        w-full
                                        sm:w-[330px]
                                        bg-white
                                        border
                                        border-slate-200
                                        rounded-2xl
                                        shadow-2xl
                                        p-5
                                    "
                                >

                                    {[
                                        {
                                            key: 'adults' as const,
                                            title: 'Adults',
                                            subtitle: 'Ages 13+',
                                        },
                                        {
                                            key: 'children' as const,
                                            title: 'Children',
                                            subtitle: 'Ages 0–12',
                                        },
                                        {
                                            key: 'rooms' as const,
                                            title: 'Rooms',
                                            subtitle: 'Ryokan rooms',
                                        },
                                    ].map((item, index) => (

                                        <div
                                            key={item.key}
                                            className={`
                                                flex
                                                items-center
                                                justify-between
                                                py-3
                                                ${index !== 0
                                                    ? 'border-t border-slate-100'
                                                    : ''
                                                }
                                            `}
                                        >

                                            <div>

                                                <p className="text-sm font-bold text-slate-700">
                                                    {item.title}
                                                </p>

                                                <p className="text-[10px] text-slate-400">
                                                    {item.subtitle}
                                                </p>

                                            </div>


                                            <div className="flex items-center gap-3">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            item.key,
                                                            -1
                                                        )
                                                    }
                                                    disabled={
                                                        occupancy[
                                                        item.key
                                                        ] <=
                                                        (item.key ===
                                                            'children'
                                                            ? 0
                                                            : 1)
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
                                                        disabled:opacity-30
                                                    "
                                                >
                                                    <Minus size={13} />
                                                </button>


                                                <span className="w-5 text-center text-sm font-bold">
                                                    {occupancy[item.key]}
                                                </span>


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateOccupancy(
                                                            item.key,
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
                                                        hover:border-blue-500
                                                    "
                                                >
                                                    <Plus size={13} />
                                                </button>

                                            </div>

                                        </div>

                                    ))}


                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowGuests(false)
                                        }
                                        className="
                                            mt-3
                                            w-full
                                            bg-[#0066FF]
                                            hover:bg-blue-700
                                            text-white
                                            py-2.5
                                            rounded-xl
                                            font-bold
                                            text-xs
                                        "
                                    >
                                        Done
                                    </button>

                                </div>

                            )}

                        </div>


                        {/* SEARCH */}

                        <div className="lg:col-span-2">

                            <button
                                type="button"
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
                                    transition-colors
                                "
                            >

                                <Search size={15} />

                                Search

                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FEATURED STAYS
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    py-16
                    space-y-6
                "
            >

                <div
                    className="
                        flex
                        items-end
                        justify-between
                        gap-4
                    "
                >

                    <div>

                        <p
                            className="
                                text-[10px]
                                font-black
                                uppercase
                                tracking-[0.15em]
                                text-[#0066FF]
                            "
                        >
                            Handpicked stays
                        </p>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E] mt-1">
                            Ryokans worth slowing down for
                        </h2>

                        <p className="text-xs text-slate-400 font-semibold mt-1">
                            Traditional stays with beautiful baths,
                            peaceful surroundings, and Japanese hospitality.
                        </p>

                    </div>


                    <button
                        className="
                            hidden
                            sm:flex
                            items-center
                            gap-1
                            text-[#0066FF]
                            font-bold
                            text-xs
                            hover:underline
                        "
                    >
                        See all
                        <ChevronRight size={14} />
                    </button>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {FEATURED_RYOKAN_STAYS.map((stay) => (

                        <FeaturedRyokanCard
                            key={stay.id}
                            stay={stay}
                        />

                    ))}

                </div>

            </section>


            {/* =====================================================
                TONIGHT
            ===================================================== */}

            <section
                className="
                    py-16
                    px-4
                    lg:px-12
                    bg-slate-300/50
                    border-y
                    border-slate-300/80
                "
            >

                <div className="max-w-[1400px] mx-auto space-y-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                                Last-minute ryokans tonight
                            </h2>

                            <p className="text-xs text-slate-400 font-semibold mt-1">
                                Need a relaxing escape? These stays have
                                availability for tonight.
                            </p>

                        </div>


                        <button
                            className="
                                text-[#0066FF]
                                font-bold
                                text-xs
                                flex
                                items-center
                                gap-1
                            "
                        >
                            See all
                            <ChevronRight size={14} />
                        </button>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {TONIGHT_RYOKANS.map((stay) => (

                            <SmallRyokanCard
                                key={stay.id}
                                stay={stay}
                            />

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                ONSEN DESTINATIONS
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    py-16
                    space-y-6
                "
            >

                <div>

                    <p
                        className="
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.15em]
                            text-[#0066FF]
                        "
                    >
                        Japan's hot-spring towns
                    </p>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E] mt-1">
                        Where should you go for an onsen?
                    </h2>

                    <p className="text-xs text-slate-400 font-semibold mt-1">
                        Explore some of Japan's most loved hot-spring destinations.
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {POPULAR_ONSEN_DESTINATIONS.map((destination) => (

                        <button
                            key={destination.id}
                            type="button"
                            onClick={() =>
                                setSelectedDestination(
                                    destination.name
                                )
                            }
                            className="text-left"
                        >

                            <VisualDestinationCard
                                item={destination}
                            />

                        </button>

                    ))}

                </div>

            </section>


            {/* =====================================================
                EXPERIENCES
            ===================================================== */}

            <section
                className="
                    py-16
                    px-4
                    lg:px-12
                    bg-slate-300/50
                    border-y
                    border-slate-300/80
                "
            >

                <div className="max-w-[1400px] mx-auto space-y-6">

                    <div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            More than just a hot spring
                        </h2>

                        <p className="text-xs text-slate-400 font-semibold mt-1">
                            Make your ryokan stay a complete Japanese experience.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {RYOKAN_EXPERIENCES.map((experience) => (

                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                WEEKEND
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    py-16
                    space-y-6
                "
            >

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            Ryokan escapes for this weekend
                        </h2>

                        <p className="text-xs text-slate-400 font-semibold mt-1">
                            Shortlist a peaceful Japanese retreat.
                        </p>

                    </div>


                    <button
                        className="
                            text-[#0066FF]
                            font-bold
                            text-xs
                            flex
                            items-center
                            gap-1
                        "
                    >
                        See all
                        <ChevronRight size={14} />
                    </button>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {WEEKEND_RYOKANS.map((stay) => (

                        <SmallRyokanCard
                            key={stay.id}
                            stay={stay}
                        />

                    ))}

                </div>

            </section>


            {/* =====================================================
                POPULAR RYOKANS
            ===================================================== */}

            <section
                className="
                    py-16
                    px-4
                    lg:px-12
                    bg-slate-300/50
                    border-y
                    border-slate-300/80
                "
            >

                <div className="max-w-[1400px] mx-auto space-y-6">

                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-end
                            sm:justify-between
                            gap-4
                        "
                    >

                        <div>

                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                                Popular ryokans in Japan
                            </h2>

                            <p className="text-xs text-slate-400 font-semibold mt-1">
                                Highly rated traditional stays loved by travelers.
                            </p>

                        </div>


                        <div className="flex flex-wrap gap-1.5">

                            {['Hakone', 'Kyoto', 'Kurokawa', 'Yufuin'].map(
                                (region) => (

                                    <button
                                        key={region}
                                        type="button"
                                        onClick={() =>
                                            setActiveRegion(region)
                                        }
                                        className={`
                                            px-3.5
                                            py-1.5
                                            rounded-full
                                            text-[10px]
                                            font-bold
                                            border
                                            transition-all
                                            ${activeRegion === region
                                                ? 'bg-[#0066FF] text-white border-[#0066FF]'
                                                : 'bg-white text-slate-500 border-slate-300 hover:border-blue-400'
                                            }
                                        `}
                                    >
                                        {region}
                                    </button>

                                )
                            )}

                        </div>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {POPULAR_RYOKANS.map((stay) => (

                            <article
                                key={stay.id}
                                className="
                                    bg-white
                                    border
                                    border-slate-300
                                    rounded-2xl
                                    p-3
                                    flex
                                    gap-3
                                    shadow-2xs
                                    hover:shadow-md
                                    transition-all
                                    group
                                "
                            >

                                <img
                                    src={stay.image}
                                    alt={stay.name}
                                    className="
                                        w-24
                                        h-24
                                        rounded-xl
                                        object-cover
                                        shrink-0
                                    "
                                />


                                <div className="flex flex-col justify-between py-0.5 min-w-0 flex-1">

                                    <div>

                                        <h3
                                            className="
                                                text-xs
                                                font-extrabold
                                                text-[#0C1E3E]
                                                truncate
                                                group-hover:text-[#0066FF]
                                                transition-colors
                                            "
                                        >
                                            {stay.name}
                                        </h3>


                                        <p
                                            className="
                                                text-[10px]
                                                text-slate-400
                                                font-semibold
                                                mt-0.5
                                            "
                                        >
                                            {stay.location}
                                        </p>

                                    </div>


                                    <RatingPill
                                        rating={stay.rating}
                                        label={stay.ratingLabel}
                                    />


                                    <div className="flex items-center justify-between">

                                        <span className="text-[9px] text-slate-400 font-semibold">
                                            {stay.reviews.toLocaleString()} reviews
                                        </span>

                                        <span className="text-[10px] font-black text-[#0C1E3E]">
                                            {stay.price}
                                        </span>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                ONSEN TYPES
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    py-16
                    space-y-6
                "
            >

                <div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Choose your onsen experience
                    </h2>

                    <p className="text-xs text-slate-400 font-semibold mt-1">
                        Find the bathing experience that matches your trip.
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {ONSEN_TYPES.map((type) => (

                        <article
                            key={type.id}
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
                            "
                        >

                            <div className="h-36 overflow-hidden">

                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        group-hover:scale-105
                                        transition-transform
                                        duration-500
                                    "
                                />

                            </div>


                            <div className="p-4">

                                <h3 className="text-sm font-extrabold text-[#0C1E3E]">
                                    {type.title}
                                </h3>

                                <p className="text-[9px] font-bold text-[#0066FF] mt-1">
                                    {type.count}
                                </p>

                                <p className="text-[10px] text-slate-400 font-medium leading-relaxed mt-2">
                                    {type.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =====================================================
                REGIONS
            ===================================================== */}

            <section
                className="
                    py-16
                    px-4
                    lg:px-12
                    bg-slate-300/50
                    border-y
                    border-slate-300/80
                "
            >

                <div className="max-w-[1400px] mx-auto space-y-6">

                    <div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            Explore onsen regions
                        </h2>

                        <p className="text-xs text-slate-400 font-semibold mt-1">
                            Different regions offer completely different
                            landscapes and hot-spring experiences.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {JAPAN_ONSEN_REGIONS.map((region) => (

                            <button
                                key={region.id}
                                type="button"
                                onClick={() =>
                                    setSelectedDestination(
                                        region.name
                                    )
                                }
                                className="text-left"
                            >

                                <VisualDestinationCard
                                    item={region}
                                />

                            </button>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                ETIQUETTE GUIDE
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    py-16
                "
            >

                <div
                    className="
                        grid
                        lg:grid-cols-[0.9fr_1.1fr]
                        gap-8
                        items-center
                    "
                >

                    <div>

                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.15em]
                                font-black
                                text-[#0066FF]
                            "
                        >
                            First time at an onsen?
                        </p>


                        <h2
                            className="
                                text-xl
                                sm:text-2xl
                                font-extrabold
                                text-[#0C1E3E]
                                mt-1
                            "
                        >
                            A simple guide to
                            <br />
                            onsen etiquette
                        </h2>


                        <p
                            className="
                                text-xs
                                text-slate-400
                                font-medium
                                leading-relaxed
                                mt-3
                                max-w-md
                            "
                        >
                            Japanese onsens have a few simple customs.
                            Knowing them before you arrive makes the
                            experience more comfortable for everyone.
                        </p>


                        <button
                            type="button"
                            className="
                                mt-5
                                inline-flex
                                items-center
                                gap-1.5
                                bg-[#0066FF]
                                hover:bg-blue-700
                                text-white
                                px-5
                                py-2.5
                                rounded-xl
                                text-xs
                                font-bold
                                transition-colors
                            "
                        >
                            Read the full guide
                            <ArrowRight size={13} />
                        </button>

                    </div>


                    <div className="grid sm:grid-cols-2 gap-3">

                        {ONSEN_ETIQUETTE.map((item) => (

                            <article
                                key={item.id}
                                className="
                                    bg-white
                                    border
                                    border-slate-300
                                    rounded-2xl
                                    p-5
                                    shadow-2xs
                                    hover:shadow-md
                                    transition-all
                                "
                            >

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-7
                                        h-7
                                        rounded-lg
                                        bg-blue-50
                                        text-[#0066FF]
                                        text-[10px]
                                        font-black
                                    "
                                >
                                    {item.number}
                                </span>


                                <h3
                                    className="
                                        text-xs
                                        font-extrabold
                                        text-[#0C1E3E]
                                        mt-3
                                    "
                                >
                                    {item.title}
                                </h3>


                                <p
                                    className="
                                        text-[10px]
                                        text-slate-400
                                        font-medium
                                        leading-relaxed
                                        mt-1.5
                                    "
                                >
                                    {item.description}
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                FEATURE CTA
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    pb-16
                "
            >

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        bg-[#0C1E3E]
                        min-h-[260px]
                        flex
                        items-center
                    "
                >

                    <img
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=85"
                        alt="Traditional Japanese ryokan"
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            opacity-30
                        "
                    />


                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-[#0C1E3E]
                            via-[#0C1E3E]/85
                            to-[#0C1E3E]/20
                        "
                    />


                    <div
                        className="
                            relative
                            z-10
                            p-7
                            sm:p-10
                            max-w-2xl
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.18em]
                                font-black
                                text-blue-300
                            "
                        >
                            Your traditional Japan
                        </p>


                        <h2
                            className="
                                text-xl
                                sm:text-2xl
                                font-extrabold
                                text-white
                                mt-2
                            "
                        >
                            Wake up to mountains.
                            <br />
                            Soak beneath the stars.
                        </h2>


                        <p
                            className="
                                text-xs
                                text-slate-300
                                font-medium
                                leading-relaxed
                                mt-2
                                max-w-lg
                            "
                        >
                            Find a ryokan where the journey itself becomes
                            part of the Japanese experience.
                        </p>


                        <button
                            type="button"
                            className="
                                mt-5
                                bg-[#0066FF]
                                hover:bg-blue-700
                                text-white
                                px-5
                                py-2.5
                                rounded-xl
                                text-xs
                                font-bold
                                inline-flex
                                items-center
                                gap-1.5
                                transition-colors
                            "
                        >
                            Explore ryokans
                            <ArrowRight size={13} />
                        </button>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    py-16
                    space-y-6
                "
            >

                <div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        FAQs about ryokans & onsens
                    </h2>

                    <p className="text-xs text-slate-400 font-semibold mt-1">
                        Everything you need to know before your first stay.
                    </p>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                    {RYOKAN_ONSEN_FAQS.map((faq) => {

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
                                            isOpen
                                                ? null
                                                : faq.id
                                        )
                                    }
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        p-4
                                        text-left
                                    "
                                >

                                    <span
                                        className="
                                            text-xs
                                            font-bold
                                            text-[#0C1E3E]
                                            pr-5
                                        "
                                    >
                                        {faq.q}
                                    </span>


                                    <ChevronDown
                                        size={15}
                                        className={`
                                            shrink-0
                                            text-slate-400
                                            transition-transform
                                            ${isOpen
                                                ? 'rotate-180'
                                                : ''
                                            }
                                        `}
                                    />

                                </button>


                                {isOpen && (

                                    <div
                                        className="
                                            px-4
                                            pb-4
                                        "
                                    >

                                        <p
                                            className="
                                                text-[10px]
                                                text-slate-500
                                                font-medium
                                                leading-relaxed
                                            "
                                        >
                                            {faq.a}
                                        </p>

                                    </div>

                                )}

                            </div>

                        );

                    })}

                </div>

            </section>


            {/* =====================================================
                NEWSLETTER
            ===================================================== */}

            <section
                className="
                    max-w-[1400px]
                    mx-auto
                    px-4
                    lg:px-12
                    py-16
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
                        py-9
                        text-white
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        justify-between
                        gap-7
                        shadow-md
                    "
                >

                    <div>

                        <h3 className="text-lg sm:text-xl font-extrabold">
                            Get Japan's best ryokan escapes
                        </h3>

                        <p
                            className="
                                text-xs
                                text-slate-300
                                font-medium
                                mt-1
                                max-w-xl
                            "
                        >
                            Receive handpicked onsen stays, seasonal
                            offers, and peaceful Japanese retreats.
                        </p>

                    </div>


                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            gap-3
                            w-full
                            md:w-auto
                        "
                    >

                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="
                                bg-white/10
                                border
                                border-white/10
                                rounded-xl
                                px-4
                                py-3
                                text-xs
                                text-white
                                placeholder-slate-400
                                outline-hidden
                                md:min-w-[240px]
                            "
                        />


                        <button
                            type="submit"
                            className="
                                bg-[#0066FF]
                                hover:bg-blue-700
                                text-white
                                font-bold
                                text-xs
                                px-6
                                py-3
                                rounded-xl
                                transition-colors
                            "
                        >
                            Subscribe
                        </button>

                    </form>

                </div>

            </section>

        </div>
    );
}