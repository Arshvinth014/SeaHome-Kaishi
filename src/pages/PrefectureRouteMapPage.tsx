import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  Building2,
  Store,
  MapPin,
  Search,
  ArrowLeft,
  Mail,
  Network,
  Map,
  CheckSquare,
  TrainFront,
  Info,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  getPrefectureRouteData,
  type PrefectureRouteMapData,
} from '../components/seahome/seahomePrefectureRouteData';
import { rentalListingsUrl } from '../components/seahome/seahomeRentalLineSearchData';

export const PrefectureRouteMapPage: React.FC = () => {
  const { prefectureSlug = 'nagano' } = useParams<{ prefectureSlug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const isOfficeMode = location.pathname.includes('/rental-office');
  const propertyTypeLabel = isOfficeMode ? 'Rental Office' : 'Rental Shop';
  const parentPath = isOfficeMode ? '/seahome-real-estates/rental-office' : '/seahome-real-estates/rental-shop';

  // Fetch route map data
  const routeData: PrefectureRouteMapData = useMemo(() => {
    const capitalizedName = prefectureSlug.charAt(0).toUpperCase() + prefectureSlug.slice(1);
    return getPrefectureRouteData(prefectureSlug, capitalizedName);
  }, [prefectureSlug]);

  const [selectedLineIds, setSelectedLineIds] = useState<string[]>([]);
  const [activeLineId, setActiveLineId] = useState<string | null>(null);

  const toggleLineId = (lineId: string) => {
    setSelectedLineIds((prev) =>
      prev.includes(lineId) ? prev.filter((id) => id !== lineId) : [...prev, lineId]
    );
  };

  const selectAllLines = () => {
    setSelectedLineIds(routeData.lines.map((l) => l.id));
  };

  const clearLineSelection = () => {
    setSelectedLineIds([]);
  };

  const handleSearchSelectedLines = () => {
    const linesQuery = selectedLineIds.join(',');
    navigate(rentalListingsUrl(`/properties?pref=${routeData.prefectureSlug}&lines=${linesQuery}`));
  };

  const handleInquire = (listingTitle: string) => {
    navigate(rentalListingsUrl(`/properties?q=${encodeURIComponent(listingTitle)}`));
  };

  // Determine active displayed lines for the visual diagram
  const displayedLines = useMemo(() => {
    if (activeLineId) {
      return routeData.lines.filter((l) => l.id === activeLineId);
    }
    if (selectedLineIds.length > 0) {
      return routeData.lines.filter((l) => selectedLineIds.includes(l.id));
    }
    return routeData.lines;
  }, [routeData.lines, activeLineId, selectedLineIds]);

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
          <span className="text-sky-900 font-bold">{routeData.prefectureName} Railway Route Diagram</span>
        </div>
      </div>

      <div className={`${HUB_CONTAINER} pt-6 pb-12 space-y-6`}>
        {/* 2. HERO HEADER BLOCK (Matching athome chintai/nagano/rosen_map flow) */}
        <div className="rounded-2xl border-t-4 border-t-sky-600 border-x border-b border-sky-100 bg-white p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold mb-3">
                {isOfficeMode ? <Building2 className="w-4 h-4 text-sky-600" /> : <Store className="w-4 h-4 text-sky-600" />}
                <span>{routeData.prefectureName} Prefecture ({routeData.japaneseName})</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Search for{' '}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {routeData.prefectureName} Prefecture {propertyTypeLabel} Properties
                </span>{' '}
                by Railway Route Diagram
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Click railway lines and station nodes on the route map below to find properties along transit lines.
              </p>
            </div>

            {/* Total Available Counter Badge */}
            <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0 self-start md:self-auto shadow-xs">
              <span className="text-xs text-sky-900 font-extrabold">Available Properties</span>
              <div className="bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs flex items-baseline gap-1">
                <span className="text-2xl font-black text-sky-600">{routeData.totalListings.toLocaleString()}</span>
                <span className="text-xs font-bold text-slate-600">units</span>
              </div>
            </div>
          </div>

          {/* 3. ATHOME MATCHING SEARCH METHOD NAVIGATION TABS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-sky-50/60 p-2 rounded-xl border border-sky-100">
            <button
              type="button"
              onClick={() => navigate(`${parentPath}/${routeData.prefectureSlug}/city`)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/70 text-slate-700 font-bold text-xs hover:bg-white hover:text-sky-900 transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-sky-500" />
              <span>Search by City & Area</span>
            </button>

            <button
              type="button"
              onClick={() => navigate(`/seahome-real-estates/rental/search-by-line-station/${routeData.prefectureSlug}`)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/70 text-slate-700 font-bold text-xs hover:bg-white hover:text-sky-900 transition-all cursor-pointer"
            >
              <TrainFront className="w-4 h-4 text-sky-500" />
              <span>Search by Line & Station</span>
            </button>

            <button
              type="button"
              onClick={() => navigate(`/seahome-real-estates/rental/search-by-map/${routeData.prefectureSlug}`)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/70 text-slate-700 font-bold text-xs hover:bg-white hover:text-sky-900 transition-all cursor-pointer"
            >
              <Map className="w-4 h-4 text-sky-500" />
              <span>Search on Interactive Map</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white text-sky-900 font-extrabold text-xs shadow-xs border border-sky-300 ring-2 ring-sky-500/20 cursor-default"
            >
              <Network className="w-4 h-4 text-sky-600" />
              <span>Search by Route Diagram</span>
            </button>
          </div>
        </div>

        {/* 4. INTERACTIVE RAILWAY ROUTE DIAGRAM VISUALIZER */}
        <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-md space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-100 pb-4">
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-sky-950">
                Interactive Railway Route Diagram ({routeData.prefectureName} Transit Network)
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-sky-500" />
              Click any station node to view listings near that station
            </span>
          </div>

          {/* Line Filter Chips */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveLineId(null)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeLineId === null
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-900'
                }`}
            >
              All Railway Lines ({routeData.lines.length})
            </button>

            {routeData.lines.map((line) => {
              const isActive = activeLineId === line.id;
              return (
                <button
                  key={line.id}
                  type="button"
                  onClick={() => setActiveLineId(isActive ? null : line.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer flex items-center gap-2 ${isActive
                      ? 'bg-sky-900 text-white border-sky-700 shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-sky-50'
                    }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: line.hexColor }}
                  />
                  <span>{line.lineName}</span>
                </button>
              );
            })}
          </div>

          {/* Visual Route Track Map Canvas Diagram */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-inner space-y-6 overflow-x-auto relative min-h-[300px]">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
              <span className="font-bold flex items-center gap-2">
                <TrainFront className="w-4 h-4 text-sky-400" />
                {routeData.prefectureName} Prefecture Railway Transit Diagram Map
              </span>
              <span className="text-[11px] bg-slate-800 px-3 py-1 rounded-full text-sky-300">
                Ocean Blue Network View
              </span>
            </div>

            <div className="space-y-6 pt-2">
              {displayedLines.map((line) => (
                <div key={line.id} className="space-y-2 group">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: line.hexColor }}
                    />
                    <h3 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-sky-300 transition-colors">
                      {line.lineName}
                    </h3>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {line.company}
                    </span>
                  </div>

                  {/* Track line & station nodes */}
                  <div className="relative flex items-center gap-4 sm:gap-6 pt-3 pb-2 overflow-x-auto no-scrollbar">
                    {/* Track background line */}
                    <div
                      className="absolute top-6 left-0 right-0 h-1.5 rounded-full z-0 opacity-80"
                      style={{ backgroundColor: line.hexColor }}
                    />

                    {line.stations.map((station) => (
                      <button
                        key={station.slug}
                        type="button"
                        onClick={() =>
                          navigate(
                            rentalListingsUrl(
                              `/properties?station=${station.slug}&pref=${routeData.prefectureSlug}`
                            )
                          )
                        }
                        className="relative z-10 flex flex-col items-center group/node shrink-0 cursor-pointer"
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center shadow-md transition-transform duration-200 group-hover/node:scale-125 ${station.isHub ? 'ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-900' : ''
                            }`}
                          style={{ borderColor: line.hexColor }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: line.hexColor }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-200 group-hover/node:text-sky-300 mt-2 transition-colors whitespace-nowrap">
                          {station.name}
                        </span>
                        <span className="text-[10px] text-sky-400 font-extrabold bg-slate-800 px-2 py-0.5 rounded-full mt-0.5 border border-slate-700">
                          {station.count} units
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. RAILWAY LINES CHECKLIST (athome rosen_map flow) */}
        <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-100 pb-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-sky-600" />
              <h2 className="text-base font-extrabold text-sky-950">
                Select Railway Lines in {routeData.prefectureName} Prefecture
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={selectAllLines}
                className="px-3 py-1.5 rounded-lg border border-sky-200 bg-sky-50 text-sky-800 font-bold hover:bg-sky-100 transition-all cursor-pointer"
              >
                Select All Lines
              </button>
              <button
                type="button"
                onClick={clearLineSelection}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 font-medium hover:bg-slate-100 transition-all cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Railway Lines Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {routeData.lines.map((line) => {
              const isChecked = selectedLineIds.includes(line.id);
              return (
                <div
                  key={line.id}
                  onClick={() => toggleLineId(line.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${isChecked
                      ? 'border-sky-500 bg-sky-50/80 text-sky-950 font-bold shadow-xs ring-1 ring-sky-400'
                      : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50'
                    }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => { }}
                      className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 shrink-0 cursor-pointer"
                    />
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: line.hexColor }}
                    />
                    <span className="text-xs sm:text-sm font-semibold truncate group-hover:text-sky-700">
                      {line.lineName}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold shrink-0 ${isChecked
                        ? 'bg-sky-600 text-white'
                        : 'bg-sky-100 text-sky-800'
                      }`}
                  >
                    {line.totalListings}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Search Button Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700">
              Selected: <strong className="text-sky-700 font-extrabold text-sm">{selectedLineIds.length}</strong> railway lines
            </span>

            <button
              type="button"
              onClick={handleSearchSelectedLines}
              disabled={selectedLineIds.length === 0}
              className={`px-8 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${selectedLineIds.length > 0
                  ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white hover:from-sky-700 hover:to-blue-800 shadow-sky-600/20'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                }`}
            >
              <Search className="w-4 h-4" />
              <span>Search Selected Lines ({selectedLineIds.length})</span>
            </button>
          </div>
        </div>

        {/* 6. FEATURED PROPERTY LISTINGS GRID ALONG TRANSIT LINES */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-sky-600" />
              Featured {propertyTypeLabel} Listings along Transit Routes
            </h2>
            <span className="text-xs text-slate-500 font-medium">Updated today</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                id: 'rm-1',
                title: `${routeData.lines[0]?.stations[0]?.name || 'Nagano Central Station'} Front Commercial Property`,
                rent: '$2,400/month',
                tsuboPrice: '$150/tsubo',
                deposit: 'Deposit 4 mo / Key 1 mo',
                area: '65.20 m² (19.72 tsubo)',
                location: `${routeData.lines[0]?.stations[0]?.name || 'Nagano Station'}, ${routeData.prefectureName} Prefecture`,
                stationAccess: `2-min walk from ${routeData.lines[0]?.stations[0]?.name || 'Central Station'} (${routeData.lines[0]?.lineName || 'JR Line'})`,
                floor: '1st Floor Roadside',
                badge: 'Transit Front',
                imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
              },
              {
                id: 'rm-2',
                title: `${routeData.lines[0]?.stations[2]?.name || 'Ueda Station'} Business Hub Unit`,
                rent: '$1,800/month',
                tsuboPrice: '$125/tsubo',
                deposit: 'Deposit 3 mo / Key 0 mo',
                area: '52.40 m² (15.85 tsubo)',
                location: `${routeData.lines[0]?.stations[2]?.name || 'Ueda Station'}, ${routeData.prefectureName} Prefecture`,
                stationAccess: `4-min walk from station (${routeData.lines[0]?.lineName || 'Shinkansen Line'})`,
                floor: '3rd Floor (Elevator)',
                badge: 'OA Floor Ready',
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
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Transit Access</span>
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

export default PrefectureRouteMapPage;
