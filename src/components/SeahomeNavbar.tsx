import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Building2,
  Sofa,
  CalendarCheck,
  Users,
  ChevronDown,
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = { label: string; path: string };

type NavMenu = {
  id: string;
  label: string;
  icon: LucideIcon;
  items: MenuItem[];
};

const NAV_MENUS: NavMenu[] = [
  {
    id: 'properties',
    label: 'Properties',
    icon: Building2,
    items: [
      { label: 'Residential rentals', path: '/seahome-real-estates/rental' },
      { label: 'Apartments & houses for sale', path: '/seahome-real-estates' },
      { label: 'Share apartments', path: '/seahome-real-estates' },
      { label: 'Commercial properties', path: '/seahome-real-estates' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture',
    icon: Sofa,
    items: [
      { label: 'Browse furniture catalog', path: '/seahome-real-estates' },
      { label: 'Home staging packages', path: '/seahome-real-estates' },
      { label: 'Appliances & essentials', path: '/seahome-real-estates' },
      { label: 'Moving & delivery support', path: '/seahome-real-estates' },
    ],
  },
  {
    id: 'bookings',
    label: 'Bookings',
    icon: CalendarCheck,
    items: [
      { label: 'Schedule a property viewing', path: '/seahome-real-estates/rental' },
      { label: 'Short-term & monthly stays', path: '/seahome-real-estates/rental' },
      { label: 'Rental application support', path: '/seahome-real-estates/rental' },
      { label: 'Purchase consultation', path: '/seahome-real-estates' },
    ],
  },
  {
    id: 'agents',
    label: 'Find Specialized Agents',
    icon: Users,
    items: [
      { label: 'All specialized agents', path: '/seahome-real-estates' },
      { label: 'Student housing specialists', path: '/seahome-real-estates' },
      { label: 'Commercial property agents', path: '/seahome-real-estates' },
      { label: 'English-speaking agents', path: '/seahome-real-estates' },
    ],
  },
];

const SeahomeNavbar: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenId(null);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const handleGo = (path: string) => {
    setOpenId(null);
    setMobileOpen(false);
    navigate(path);
  };

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Get Started Button & Brand Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Get Started Button */}
          <button
            type="button"
            onClick={() => handleGo('/home')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-purple-500/20 transition-all hover:scale-[1.02] hover:from-purple-700 hover:to-indigo-700 focus:outline-hidden sm:px-4 sm:text-sm"
          >
            <img src="/BlueBirdBuyPage.png" alt="Sora" className="h-8 w-8 shrink-0" />
            <span>Home</span>
          </button>

          {/* Seahome Real Estates Logo & Title */}
          <Link
            to="/seahome-real-estates"
            className="flex items-center gap-3 group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-sky-900 text-white shadow-md shadow-sky-500/25 transition-transform group-hover:scale-105">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="min-w-0 leading-tight">
              <h1 className="truncate text-base font-bold bg-gradient-to-r from-sky-700 to-sky-900 bg-clip-text text-transparent sm:text-lg">
                Seahome Japan Rentals
              </h1>
              <p className="hidden truncate text-xs font-medium text-gray-500 sm:block">
                Properties.Buy.Sell.Lend.Bookings with Kaishi
              </p>
            </div>
          </Link>
        </div>

        {/* Right Section: Navigation Menu Items (Desktop) */}
        <div ref={navRef} className="hidden items-center gap-2 lg:flex">
          {NAV_MENUS.map((menu) => {
            const Icon = menu.icon;
            const isOpen = openId === menu.id;
            return (
              <div key={menu.id} className="relative">
                <button
                  type="button"
                  onClick={() => toggle(menu.id)}
                  aria-expanded={isOpen}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200/90 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-950 transition hover:border-sky-300 hover:bg-sky-100 sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-sky-700" />
                  <span className="whitespace-nowrap">{menu.label}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 text-sky-700 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 top-full z-50 mt-1.5 w-60 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                    {menu.items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleGo(item.path)}
                        className="block w-full px-4 py-2.5 text-left text-xs font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-900 transition-colors sm:text-sm"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pt-2 pb-4 space-y-2 lg:hidden">
          {NAV_MENUS.map((menu) => {
            const Icon = menu.icon;
            const isOpen = openId === menu.id;
            return (
              <div key={menu.id} className="rounded-lg border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(menu.id)}
                  className="flex w-full items-center justify-between bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-950"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-sky-700" />
                    {menu.label}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 bg-white divide-y divide-gray-50">
                    {menu.items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleGo(item.path)}
                        className="block w-full px-4 py-2 text-left text-xs font-medium text-gray-700 hover:bg-sky-50"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default SeahomeNavbar;
