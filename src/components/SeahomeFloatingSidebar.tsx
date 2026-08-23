import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building2,
  KeyRound,
  Store,
  Briefcase,
  Trees,
  Car,
  Warehouse,
  Landmark,
  Hotel,
  Palmtree,
  Bath,
  Map,
  Globe,
  ShoppingBag,
  TrendingUp,
  Compass,
  MapPin,
  Sparkles,
  Search,
  X,
  PanelLeftOpen,
  Pin,
  PinOff,
  Tv,
  Home,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface NavRouteItem {
  title: string;
  subtitle?: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

interface NavCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  items: NavRouteItem[];
}

const CATEGORIES: NavCategory[] = [
  {
    id: 'real-estates',
    name: 'SeaHome Real Estates',
    icon: Building2,
    items: [
      {
        title: 'Real Estate Hub',
        subtitle: 'Overview & Main Portal',
        path: '/seahome-real-estates',
        icon: Home,
        badge: 'Main',
        badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      },
      {
        title: 'Residential Rentals',
        subtitle: 'Apartments, Houses & Stays',
        path: '/seahome-real-estates/rental',
        icon: KeyRound,
        badge: 'Popular',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      },
      {
        title: 'Shop Rentals',
        subtitle: 'Retail & Store Fronts',
        path: '/seahome-real-estates/rental-shop',
        icon: Store,
      },
      {
        title: 'Office Rentals',
        subtitle: 'Commercial & Workspaces',
        path: '/seahome-real-estates/rental-office',
        icon: Briefcase,
      },
      {
        title: 'Land & Plots',
        subtitle: 'Development Land',
        path: '/seahome-real-estates/rental-land',
        icon: Trees,
      },
      {
        title: 'Parking Rentals',
        subtitle: 'Monthly & Dedicated Slots',
        path: '/seahome-real-estates/parking',
        icon: Car,
      },
      {
        title: 'Warehouse & Storage',
        subtitle: 'Logistics Facilities',
        path: '/seahome-real-estates/warehouse',
        icon: Warehouse,
      },
      {
        title: 'Building & Others',
        subtitle: 'Whole Buildings & Unique Estates',
        path: '/seahome-real-estates/rental-building-other',
        icon: Landmark,
      },
      {
        title: 'Japan Hotels',
        subtitle: 'Boutique & Luxury Hotels',
        path: '/seahome-real-estates/JapanHotelsPage',
        icon: Hotel,
        badge: 'Stays',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      },
      {
        title: 'Japan Resort Villas',
        subtitle: 'Private Stays & Vacation Homes',
        path: '/seahome-real-estates/JapanVillasPage',
        icon: Palmtree,
      },
      {
        title: 'Ryokan & Onsen Stays',
        subtitle: 'Traditional Hot Spring Inns',
        path: '/seahome-real-estates/JapanRyokanOnsenPage',
        icon: Bath,
      },
      {
        title: 'Interactive Rental Map',
        subtitle: 'Geographic Map View',
        path: '/seahome-real-estates/rental/map',
        icon: Map,
        badge: 'Map',
        badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      },
    ],
  },
  {
    id: 'public-main',
    name: 'Global Site Pages',
    icon: Globe,
    items: [
      {
        title: 'Global Home',
        subtitle: 'SeaHome Public Homepage',
        path: '/',
        icon: Globe,
      },
      {
        title: 'Buy Properties',
        subtitle: 'Global Real Estate Sales',
        path: '/buy',
        icon: ShoppingBag,
      },
      {
        title: 'Invest in Real Estate',
        subtitle: 'High Yield Opportunities',
        path: '/invest',
        icon: TrendingUp,
        badge: 'Yield',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      },
      {
        title: 'Country Directory',
        subtitle: 'Global Regions & Countries',
        path: '/country/japan',
        icon: Compass,
      },
      {
        title: 'Sri Lanka Gateway',
        subtitle: 'Sri Lanka Real Estate Hub',
        path: '/sl-homepage',
        icon: MapPin,
      },
      {
        title: 'Japan Rental Hub',
        subtitle: 'Japan Public Portal',
        path: '/japan-rental',
        icon: Sparkles,
      },
    ],
  },
];

export const SeahomeFloatingSidebar: React.FC = () => {
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPinned, setIsPinned] = useState<boolean>(() => {
    return localStorage.getItem('seahome_sidebar_pinned') === 'true';
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  // Auto expand on mount if pinned
  useEffect(() => {
    if (isPinned) {
      setIsOpen(true);
    }
  }, [isPinned]);

  // Handle outside click to collapse if not pinned
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isPinned && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isPinned]);

  // Handle Keyboard Navigation (TV Remote & Desktop Accessibility)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle sidebar on Ctrl+B or Alt+S
      if ((e.ctrlKey && e.key.toLowerCase() === 'b') || (e.altKey && e.key.toLowerCase() === 's')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Escape key to close if open and not pinned
      if (e.key === 'Escape' && isOpen && !isPinned) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPinned]);

  // Focus search input when sidebar expands
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const togglePin = () => {
    const nextPinned = !isPinned;
    setIsPinned(nextPinned);
    localStorage.setItem('seahome_sidebar_pinned', String(nextPinned));
    if (nextPinned) setIsOpen(true);
  };

  const toggleCategory = (catId: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  // Helper to check active path
  const isPathActive = (path: string) => {
    if (path === '/seahome-real-estates') {
      return location.pathname === '/seahome-real-estates' || location.pathname === '/seahome-real-estates/';
    }
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  // Filter items based on search query
  const filteredCategories = CATEGORIES.map((category) => {
    if (!searchQuery.trim()) return category;
    const query = searchQuery.toLowerCase();
    const matchingItems = category.items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(query)) ||
        item.path.toLowerCase().includes(query)
    );
    return { ...category, items: matchingItems };
  }).filter((category) => category.items.length > 0);

  return (
    <>
      {/* FLOATING COLLAPSED TOGGLE BUTTON (Sticks to left corner, rendered when sidebar is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Navigation Sidebar"
          title="Open Pages Menu (Ctrl+B)"
          className="fixed left-0 top-32 z-40 group flex items-center gap-2.5 bg-slate-900/95 hover:bg-blue-600 text-white pl-3.5 pr-4 py-3 rounded-r-2xl border-y border-r border-slate-700/80 shadow-2xl shadow-blue-900/50 backdrop-blur-xl transition-all duration-300 hover:pl-5 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <PanelLeftOpen className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full ring-2 ring-slate-900 animate-pulse" />
          </div>
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-200 group-hover:text-white transition-colors">
            Pages Menu
          </span>
        </button>
      )}

      {/* MOBILE & TV BACKDROP OVERLAY */}
      {isOpen && !isPinned && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* EXPANDED SIDEBAR DRAWER PANEL */}
      <aside
        ref={sidebarRef}
        aria-label="SeaHome Route Navigation Sidebar"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-50 w-80 sm:w-84 max-w-[88vw] bg-slate-900 text-slate-100 border-r border-slate-800 shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'
          }`}
      >
        {/* HEADER SECTION */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex flex-col gap-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white tracking-wide leading-tight">
                  SeaHome Navigation
                </h2>
                <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  All Pages & Portals
                </p>
              </div>
            </div>

            {/* HEADER CONTROLS (PIN & CLOSE) */}
            <div className="flex items-center gap-1">
              <button
                onClick={togglePin}
                title={isPinned ? 'Unpin Sidebar (Auto-collapse)' : 'Pin Sidebar (Keep expanded)'}
                className={`p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${isPinned
                  ? 'bg-blue-600/30 text-blue-400 border border-blue-500/40'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
              >
                {isPinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Collapse Sidebar (Esc)"
                aria-label="Collapse Navigation Sidebar"
                className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* SEARCH INPUT */}
          <div className="relative mt-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter pages or routes..."
              className="w-full bg-slate-950 border border-slate-700/80 focus:border-blue-500 text-slate-100 placeholder-slate-500 text-xs rounded-xl pl-9 pr-8 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* SCROLLABLE CATEGORIES LIST */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 custom-scrollbar">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-500" />
              No matching pages found for "{searchQuery}"
            </div>
          ) : (
            filteredCategories.map((category) => {
              const CategoryIcon = category.icon;
              const isCollapsed = collapsedCategories[category.id];

              return (
                <div key={category.id} className="space-y-1.5">
                  {/* CATEGORY HEADER */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      <span>{category.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                        {category.items.length}
                      </span>
                    </div>
                    {isCollapsed ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                    ) : (
                      <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </button>

                  {/* ROUTE LINKS */}
                  {!isCollapsed && (
                    <div className="space-y-1 pl-1">
                      {category.items.map((item) => {
                        const ItemIcon = item.icon;
                        const active = isPathActive(item.path);

                        return (
                          <Link
                            key={item.path + item.title}
                            to={item.path}
                            onClick={() => {
                              if (!isPinned) setIsOpen(false);
                            }}
                            className={`group relative flex items-center justify-between p-2.5 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:bg-slate-800 ${active
                              ? 'bg-gradient-to-r from-blue-600/90 to-indigo-600/80 text-white shadow-md shadow-blue-600/30 font-semibold'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                              }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`p-1.5 rounded-lg flex items-center justify-center transition-colors shrink-0 ${active
                                  ? 'bg-white/20 text-white'
                                  : 'bg-slate-800/80 text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-700/80'
                                  }`}
                              >
                                <ItemIcon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0 truncate">
                                <div className="truncate text-slate-100 font-medium group-hover:text-white">
                                  {item.title}
                                </div>
                                {item.subtitle && (
                                  <div
                                    className={`text-[10px] truncate ${active ? 'text-blue-100/80' : 'text-slate-400 group-hover:text-slate-300'
                                      }`}
                                  >
                                    {item.subtitle}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* BADGES & ACTIVE INDICATOR */}
                            <div className="flex items-center gap-1.5 shrink-0 ml-2">
                              {item.badge && (
                                <span
                                  className={`text-[9px] px-2 py-0.5 rounded-md font-semibold border ${item.badgeColor || 'bg-slate-800 text-slate-300 border-slate-700'
                                    }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                              {active && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* FOOTER & KEYBOARD / DEVICE INFO */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-950/90 text-[11px] text-slate-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-slate-400">
            <Tv className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>TV & Mobile Ready</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px]">
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">
              Ctrl+B
            </kbd>
            <span>toggle</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SeahomeFloatingSidebar;
