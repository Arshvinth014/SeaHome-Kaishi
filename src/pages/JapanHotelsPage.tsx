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
    JAPAN_CITY_FILTERS,
    TONIGHT_HOTELS,
    WEEKEND_HOTELS,
    TRENDING_DESTINATIONS,
    POPULAR_CITIES,
    POPULAR_HOTELS,
    ACCOMMODATION_TYPES,
    HOTEL_FAQS,
} from '../config/JapanHotelsPage';

// Shared rating pill used across hotel cards
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

function JapanHotelsPage() {
    const [activeCityTab, setActiveCityTab] = useState('Tokyo');
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    // Search state
    const [selectedCity, setSelectedCity] = useState('');

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

    // Update occupancy
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

    // Format selected dates
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

    // Occupancy label
    const occupancyLabel = `${occupancy.adults} adult${
        occupancy.adults !== 1 ? 's' : ''
    } · ${occupancy.children} ${
        occupancy.children === 1 ? 'child' : 'children'
    } · ${occupancy.rooms} room${occupancy.rooms !== 1 ? 's' : ''}`;

    // Search handler
    const handleSearch = () => {
        console.log('Hotel search:', {
            city: selectedCity,
            checkIn: dateRange.from,
            checkOut: dateRange.to,
            adults: occupancy.adults,
            children: occupancy.children,
            rooms: occupancy.rooms,
        });
    };

    return (
        <div className="w-full bg-[#FAFCFF] text-slate-800 antialiased font-sans">

            {/* HERO + SEARCH BAR */}
            <section className="relative w-full min-h-[380px] lg:min-h-[440px] bg-[#0C1E3E] overflow-hidden flex items-end z-20">

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522547902298-51566e4fb383?w=1600&q=80"
                        alt=""
                        className="w-full h-full object-cover object-center opacity-40 select-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E3E] via-[#0C1E3E]/70 to-[#0C1E3E]/20" />
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 pt-16 pb-24 lg:pb-28 max-w-[1400px] mx-auto z-10 relative space-y-3">

                    <div className="text-[11px] font-bold text-slate-300 flex flex-wrap items-center gap-1.5">
                        <span className="hover:text-white cursor-pointer transition-colors">
                            Home
                        </span>

                        <ChevronRight className="w-3 h-3 text-slate-500" />

                        <span className="text-white">
                            Hotels in Japan
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-[40px] font-semibold text-white tracking-tight leading-tight">
                        Find your stay in Japan
                    </h1>

                    <p className="text-slate-300 text-[13px] font-medium max-w-lg">
                        From city-center business hotels to countryside ryokans book verified stays across Japan's most-loved destinations.
                    </p>
                </div>
            </section>


            {/* ========================================================= */}
            {/* SEARCH BAR */}
            {/* ========================================================= */}

            <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 -mt-14 relative z-30">

                <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end text-xs">


                        {/* ================================================= */}
                        {/* CITY */}
                        {/* ================================================= */}

                        <div className="lg:col-span-4 space-y-1.5">

                            <label className="font-bold text-slate-400 flex items-center gap-1.5">
                                <MapPin size={12} />
                                City in Japan
                            </label>

                            <div className="relative">

                                <select
                                    value={selectedCity}
                                    onChange={(e) =>
                                        setSelectedCity(e.target.value)
                                    }
                                    className="w-full appearance-none border border-slate-300 rounded-xl p-3 pr-8 focus:outline-hidden focus:border-blue-500 text-slate-600 font-medium bg-white"
                                >
                                    <option value="">
                                        All of Japan
                                    </option>

                                    {JAPAN_CITY_FILTERS.map((city) => (
                                        <option
                                            key={city}
                                            value={city}
                                        >
                                            {city}
                                        </option>
                                    ))}
                                </select>

                                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />

                            </div>
                        </div>


                        {/* ================================================= */}
                        {/* DATES */}
                        {/* ================================================= */}

                        <div className="lg:col-span-3 space-y-1.5 relative">

                            <label className="font-bold text-slate-400 flex items-center gap-1.5">
                                <Calendar size={12} />
                                Dates
                            </label>

                            <button
                                type="button"
                                onClick={() => {
                                    setShowDatePicker((prev) => !prev);
                                    setShowOccupancy(false);
                                }}
                                className="w-full border border-slate-300 rounded-xl p-3 text-left focus:outline-hidden focus:border-blue-500 font-medium text-slate-500 bg-white transition-colors"
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
                                <div className="absolute top-full left-0 mt-2 z-[100] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4">

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

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-slate-100">

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
                                            className="bg-[#0066FF] hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-5 py-2 rounded-lg text-xs font-bold transition-colors"
                                        >
                                            Done
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>


                        {/* ================================================= */}
                        {/* GUESTS + ROOMS */}
                        {/* ================================================= */}

                        <div className="lg:col-span-3 space-y-1.5 relative">

                            <label className="font-bold text-slate-400 flex items-center gap-1.5">
                                <Users size={12} />
                                Guests & Rooms
                            </label>


                            <button
                                type="button"
                                onClick={() => {
                                    setShowOccupancy((prev) => !prev);
                                    setShowDatePicker(false);
                                }}
                                className="w-full border border-slate-300 rounded-xl p-3 pr-8 text-left focus:outline-hidden focus:border-blue-500 text-slate-600 font-medium bg-white relative"
                            >
                                {occupancyLabel}

                                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                            </button>


                            {/* OCCUPANCY DROPDOWN */}

                            {showOccupancy && (
                                <div className="absolute top-full right-0 mt-2 z-[100] w-full sm:w-[340px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-5">

                                    <div className="space-y-1">


                                        {/* ADULTS */}

                                        <div className="flex items-center justify-between py-3">

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
                                                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                                                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>

                                            </div>

                                        </div>


                                        {/* CHILDREN */}

                                        <div className="flex items-center justify-between py-3 border-t border-slate-100">

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
                                                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                                                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>

                                            </div>

                                        </div>


                                        {/* ROOMS */}

                                        <div className="flex items-center justify-between py-3 border-t border-slate-100">

                                            <div>
                                                <p className="font-bold text-slate-700 text-sm">
                                                    Rooms
                                                </p>

                                                <p className="text-[11px] text-slate-400">
                                                    Number of rooms
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
                                                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                                                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>

                                            </div>

                                        </div>

                                    </div>


                                    {/* OCCUPANCY DONE */}

                                    <div className="flex justify-end pt-4 mt-2 border-t border-slate-100">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowOccupancy(false)
                                            }
                                            className="bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
                                        >
                                            Done
                                        </button>

                                    </div>

                                </div>
                            )}
                        </div>


                        {/* ================================================= */}
                        {/* SEARCH BUTTON */}
                        {/* ================================================= */}

                        <div className="lg:col-span-2">

                            <button
                                type="button"
                                onClick={handleSearch}
                                className="w-full flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold p-3 rounded-xl shadow-xs transition-all cursor-pointer"
                            >
                                <Search className="w-4 h-4" />
                                Search
                            </button>

                        </div>

                    </div>
                </div>
            </section>


            {/* ========================================================= */}
            {/* LAST MINUTE HOTELS TONIGHT */}
            {/* ========================================================= */}

            <section className="w-full py-16 px-4 lg:px-12 max-w-[1400px] mx-auto space-y-6">

                <div className="flex items-center justify-between">

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Last-minute hotels near you tonight
                    </h2>

                    <button className="text-[#0066FF] font-bold text-xs flex items-center gap-0.5 hover:underline">
                        See all
                        <ChevronRight size={14} />
                    </button>

                </div>


                <div className="relative">

                    <button className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-700 z-10 transition-colors hidden lg:flex">
                        <ChevronLeft size={16} />
                    </button>

                    <button className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-700 z-10 transition-colors hidden lg:flex">
                        <ChevronRight size={16} />
                    </button>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {TONIGHT_HOTELS.map((hotel) => (

                            <div
                                key={hotel.id}
                                className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col"
                            >

                                <div className="w-full h-40 bg-slate-300 relative overflow-hidden">

                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                                    />

                                    <button className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-xs">
                                        <Heart size={12} />
                                    </button>

                                </div>


                                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">

                                    <div className="space-y-1">

                                        <h3 className="font-extrabold text-[#0C1E3E] text-sm group-hover:text-[#0066FF] transition-colors">
                                            {hotel.name}
                                        </h3>

                                        <p className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                                            <MapPin size={10} />
                                            {hotel.location}
                                        </p>

                                        <RatingPill
                                            rating={hotel.rating}
                                            label={hotel.ratingLabel}
                                        />

                                        <p className="text-[9px] text-slate-400 font-semibold">
                                            {hotel.reviews.toLocaleString()} reviews
                                        </p>

                                    </div>


                                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                                        {hotel.blurb}
                                    </p>


                                    <div className="border-t border-slate-300 pt-2.5 flex items-end justify-between">

                                        <span className="text-[9px] font-bold text-slate-400">
                                            From
                                        </span>

                                        <span className="text-sm font-black text-[#0C1E3E]">
                                            {hotel.price}
                                            <span className="text-[9px] font-bold text-slate-400">
                                                {' '}
                                                /night
                                            </span>
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* ========================================================= */}
            {/* LAST MINUTE HOTELS THIS WEEKEND */}
            {/* ========================================================= */}

            <section className="w-full py-16 px-4 lg:px-12 2xl:px-10 bg-slate-300/50 border-y border-slate-300/80">

                <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-6">

                    <div className="flex items-center justify-between">

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            Last-minute hotels near you this weekend
                        </h2>

                        <button className="text-[#0066FF] font-bold text-xs flex items-center gap-0.5 hover:underline">
                            See all
                            <ChevronRight size={14} />
                        </button>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {WEEKEND_HOTELS.map((hotel) => (

                            <div
                                key={hotel.id}
                                className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col"
                            >

                                <div className="w-full h-32 bg-slate-300 relative overflow-hidden">

                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                                    />

                                </div>


                                <div className="p-3.5 space-y-2">

                                    <h3 className="font-extrabold text-[#0C1E3E] text-xs truncate group-hover:text-[#0066FF] transition-colors">
                                        {hotel.name}
                                    </h3>

                                    <p className="text-[10px] text-slate-400 font-semibold">
                                        {hotel.location}
                                    </p>

                                    <RatingPill
                                        rating={hotel.rating}
                                        label={hotel.ratingLabel}
                                    />

                                    <div className="border-t border-slate-300 pt-2 flex items-end justify-between">

                                        <span className="text-[9px] font-bold text-slate-400">
                                            From
                                        </span>

                                        <span className="text-xs font-black text-[#0C1E3E]">
                                            {hotel.price}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* ========================================================= */}
            {/* TRENDING DESTINATIONS */}
            {/* ========================================================= */}

            <section className="w-full py-16 px-4 lg:px-12 max-w-[1400px] mx-auto space-y-6">

                <div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                        Trending hotel destinations
                    </h2>

                    <p className="text-xs text-slate-400 font-semibold mt-1">
                        Explore destinations currently popular with other travelers
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {TRENDING_DESTINATIONS.map((dest) => (

                        <div
                            key={dest.id}
                            className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group relative h-44 flex flex-col justify-end"
                        >

                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors z-10" />

                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                            />

                            <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent relative z-20 w-full text-white space-y-1">

                                <h3 className="font-black text-sm tracking-wide">
                                    {dest.name}
                                </h3>

                                <p className="text-[9px] text-slate-300 font-medium">
                                    Avg. price / night for a 3-star hotel
                                </p>

                                <span className="text-blue-400 font-black text-xs">
                                    {dest.avgPrice}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* ========================================================= */}
            {/* POPULAR CITIES + POPULAR HOTELS */}
            {/* ========================================================= */}

            <section className="w-full py-16 px-4 lg:px-12 2xl:px-10 bg-slate-300/50 border-y border-slate-300/80">

                <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-8">


                    {/* POPULAR CITIES */}

                    <div className="space-y-4">

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            Popular cities in Japan
                        </h2>


                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

                            {POPULAR_CITIES.map((city) => (

                                <div
                                    key={city.id}
                                    className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group flex items-center gap-3 p-3"
                                >

                                    <img
                                        src={city.image}
                                        alt={city.name}
                                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                                    />

                                    <div>

                                        <h4 className="font-extrabold text-xs text-[#0C1E3E] group-hover:text-[#0066FF] transition-colors">
                                            {city.name}
                                        </h4>

                                        <p className="text-[10px] text-slate-400 font-semibold">
                                            {city.count.toLocaleString()} hotels
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* POPULAR HOTELS */}

                    <div className="space-y-4">

                        <div className="flex items-center justify-between flex-wrap gap-3">

                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                                Popular hotels
                            </h2>


                            <div className="flex items-center gap-1.5 flex-wrap">

                                {POPULAR_CITIES.slice(0, 4).map((city) => (

                                    <button
                                        key={city.id}
                                        onClick={() =>
                                            setActiveCityTab(city.name)
                                        }
                                        className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                                            activeCityTab === city.name
                                                ? 'bg-[#0066FF] text-white border-[#0066FF]'
                                                : 'bg-white text-slate-500 border-slate-300 hover:border-blue-400'
                                        }`}
                                    >
                                        {city.name}
                                    </button>

                                ))}

                            </div>

                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {POPULAR_HOTELS.map((hotel) => (

                                <div
                                    key={hotel.id}
                                    className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group flex gap-3 p-3"
                                >

                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="w-20 h-20 rounded-xl object-cover shrink-0"
                                    />


                                    <div className="flex flex-col justify-between py-0.5 flex-1 min-w-0">

                                        <div className="space-y-0.5">

                                            <h4 className="font-extrabold text-xs text-[#0C1E3E] truncate group-hover:text-[#0066FF] transition-colors">
                                                {hotel.name}
                                            </h4>

                                            <p className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                                                <BedDouble size={10} />
                                                {hotel.location}
                                            </p>

                                        </div>

                                        <RatingPill
                                            rating={hotel.rating}
                                            label={hotel.ratingLabel}
                                        />

                                        <p className="text-[9px] text-slate-400 font-semibold">
                                            {hotel.reviews.toLocaleString()} reviews
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>


                        <button className="w-full flex items-center justify-center gap-1.5 border border-slate-300 text-slate-600 bg-white font-bold text-xs p-3 rounded-xl hover:bg-slate-50 transition-colors">

                            <SlidersHorizontal size={13} />

                            Show more hotels

                        </button>

                    </div>

                </div>

            </section>


            {/* ========================================================= */}
            {/* FAQS */}
            {/* ========================================================= */}

            <section className="w-full py-16 px-4 lg:px-12 max-w-[1400px] mx-auto space-y-6">

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                    FAQs about hotels on SeaHomeNet
                </h2>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                    {HOTEL_FAQS.map((faq) => {

                        const isOpen = openFaq === faq.id;

                        return (

                            <div
                                key={faq.id}
                                className="bg-white border border-slate-300 rounded-2xl shadow-3xs overflow-hidden"
                            >

                                <button
                                    onClick={() =>
                                        setOpenFaq(
                                            isOpen ? null : faq.id
                                        )
                                    }
                                    className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                                >

                                    <span className="font-bold text-xs text-[#0C1E3E] pr-4">
                                        {faq.q}
                                    </span>

                                    <ChevronDown
                                        size={16}
                                        className={`text-slate-400 shrink-0 transition-transform ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />

                                </button>


                                {isOpen && (

                                    <p className="px-4 pb-4 text-[11px] text-slate-500 font-medium leading-relaxed">
                                        {faq.a}
                                    </p>

                                )}

                            </div>

                        );
                    })}

                </div>

            </section>


            {/* ========================================================= */}
            {/* MORE ACCOMMODATION TYPES */}
            {/* ========================================================= */}

            <section className="w-full py-16 px-4 lg:px-12 2xl:px-10 bg-slate-300/50 border-y border-slate-300/80">

                <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto space-y-6">

                    <div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C1E3E]">
                            More accommodations in Japan
                        </h2>

                        <p className="text-xs text-slate-400 font-semibold mt-1">
                            Dive into apartments, ryokans, and other unique stays
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {ACCOMMODATION_TYPES.map((type) => (

                            <div
                                key={type.id}
                                className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group"
                            >

                                <div className="w-full h-32 bg-slate-300 relative overflow-hidden">

                                    <img
                                        src={type.image}
                                        alt={type.title}
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                                    />

                                </div>


                                <div className="p-3.5 space-y-0.5">

                                    <h4 className="font-extrabold text-xs text-[#0C1E3E] group-hover:text-[#0066FF] transition-colors">
                                        {type.title}
                                    </h4>

                                    <p className="text-[10px] text-slate-400 font-semibold">
                                        {type.count}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ========================================================= */}
            {/* NEWSLETTER */}
            {/* ========================================================= */}

            <section className="w-full px-4 lg:px-12 2xl:px-10 py-16 max-w-[1400px] 2xl:max-w-[1600px] mx-auto">

                <div className="bg-gradient-to-r from-[#0C1E3E] to-[#16366B] rounded-3xl px-6 lg:px-10 py-8 md:pt-20 md:pb-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 md:h-[150px] relative overflow-visible shadow-md">


                    <div className="absolute left-8 -top-10 hidden md:block z-30">

                        <img
                            src="/JapanAnimal.png"
                            alt="Mascot Helper"
                            className="w-44 h-44 object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                        />

                    </div>


                    <div className="space-y-2 md:pl-48 relative z-20 flex-1 text-center md:text-left">

                        <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                            Never miss a Japan hotel deal
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto md:mx-0">
                            Subscribe and get last-minute deals, seasonal offers, and new hotel openings across Japan straight to your inbox.
                        </p>

                    </div>


                    <div className="w-full md:w-auto relative z-20">

                        <form
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:max-w-md"
                            onSubmit={(e) =>
                                e.preventDefault()
                            }
                        >

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-xs font-medium text-white placeholder-slate-400 focus:outline-hidden focus:border-white/30 md:min-w-[240px]"
                            />

                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
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

export default JapanHotelsPage;