import { useState } from 'react';
import Signup from '../components/Signup';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Menu, X, Bell, Clock, CheckCheck, ArrowRight, Info, AlertCircle, CheckCircle, XCircle } from 'lucide-react'; 
import { mockNotifications } from '../config/Notifications';
import type { Notification } from '../config/Notifications';

const notificationIcons: Record<string, React.ReactNode> = {
  info: <Info size={18} className="text-blue-600" />,
  alert: <AlertCircle size={18} className="text-amber-600" />,
  success: <CheckCircle size={18} className="text-emerald-600" />,
  error: <XCircle size={18} className="text-rose-600" />,
};

const notificationBg: Record<string, string> = {
  info: 'bg-blue-50',
  alert: 'bg-amber-50',
  success: 'bg-emerald-50',
  error: 'bg-rose-50',
};

export function Navbar() {
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [signupOpen, setSignupOpen] = useState(false);
  const [isNewUser] = useState(true);
  
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  
  const unreadCount = notifications.filter((n) => !n.read).length;
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    return isActive(path)
      ? "text-[#0066FF] border-b-2 border-[#0066FF] lg:pb-1 font-semibold"
      : "text-slate-700 hover:text-slate-900";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCountriesOpen(false);
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <>
    <nav className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="w-full max-w-[1920px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 py-3.5 lg:px-8 xl:px-10 2xl:px-10 3xl:px-16">
        <div className="w-full flex items-center justify-between">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-2">
            <Link to="/" className="cursor-pointer" aria-label="Go to homepage">
              <img src="/logo.png" alt="SeaHome Net" className="h-10 sm:h-12 w-auto max-w-[150px] sm:max-w-[200px]" />
            </Link>
          </div>

          {/* Desktop Links Matrix */}
          <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold text-slate-700">
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/buy" className={getLinkClass("/buy")}>Buy</Link>
            <Link to="/invest" className={getLinkClass("/invest")}>Invest</Link>
            
            {/* Countries Dropdown (Desktop) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCountriesOpen((open) => !open)}
                className="flex items-center gap-1 hover:text-slate-900 transition-colors focus:outline-none"
                aria-expanded={countriesOpen}
                aria-controls="countries-dropdown"
              >
                <span>Countries</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </button>
              <div
                id="countries-dropdown"
                className={`absolute left-0 top-full mt-2 min-w-[160px] rounded-2xl border border-slate-200 bg-white py-2 shadow-lg ${countriesOpen ? 'block' : 'hidden'}`}
              >
                <Link to="/country/sri-lanka" onClick={() => setCountriesOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Sri Lanka</Link>
                <Link to="/japan-rental" onClick={() => setCountriesOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Japan</Link>
              </div>
            </div>

            <Link to="/#agencies" className="hover:text-slate-900 transition-colors">Agencies</Link>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900">
              <span>Resources</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </div>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900">
              <span>About Us</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </div>
          </div>

          {/* Localized Interaction Elements Wrapper */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg px-2.5 py-1.5 hover:bg-slate-50">
              <Globe className="w-3.5 h-3.5 text-slate-400" /> <span>EN</span> <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            
            <button className="text-slate-400 hover:text-rose-500 p-2 border border-slate-100 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>
            
            {/* Notification Icon */}
            <div className="relative flex items-center sm:block">
              <button
                type="button"
                onClick={() => setNotificationsOpen((open) => !open)}
                className="flex items-center gap-1 relative hover:text-slate-900 transition-colors focus:outline-none p-1.5 rounded-lg hover:bg-slate-50"
                aria-expanded={notificationsOpen}
                aria-controls="notifications-dropdown"
              >
                <span className="relative">
                  <Bell className="w-5 h-5 text-slate-600" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-sm shadow-red-500/30">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </span>
              </button>
              <div
                id="notifications-dropdown"
                className={`absolute right-[-10px] top-full mt-3 w-[min(92vw,340px)] max-h-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 ${notificationsOpen ? 'block' : 'hidden'} sm:w-[340px] sm:max-w-[340px] sm:right-0`}
              >
                {/* Dropdown Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Bell size={14} />
                    </div>
                    <span className="text-sm font-bold text-slate-800">Notifications</span>
                    {unreadCount > 0 && (
                      <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{unreadCount} new</span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                {/* Dropdown Body */}
                <div className="max-h-[320px] overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 px-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 mb-3">
                        <CheckCheck size={22} />
                      </div>
                      <p className="text-sm font-semibold text-slate-700">All caught up!</p>
                      <p className="text-xs text-slate-500 mt-1">No new notifications.</p>
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-4 py-3.5 cursor-pointer border-b border-slate-50 last:border-0 transition-all duration-150 hover:bg-slate-50/80 active:bg-slate-100/50 ${!n.read ? 'bg-blue-50/40' : ''}`}
                        onClick={() => {
                          if (!n.read) {
                            setNotifications((prev) =>
                              prev.map((item) =>
                                item.id === n.id ? { ...item, read: true } : item
                              )
                            );
                          }
                          setSelectedNotification(n);
                          setNotificationsOpen(false);
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-xl shrink-0 ${notificationBg[n.type] || 'bg-slate-100'}`}>
                            {notificationIcons[n.type] || <Info size={18} className="text-blue-600" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <strong className={`block text-sm leading-snug ${!n.read ? 'text-slate-900' : 'text-slate-700'}`}>
                                {n.title}
                              </strong>
                              {!n.read && (
                                <span className="shrink-0 mt-1.5 h-2 w-2 rounded-full bg-blue-600 shadow-sm shadow-blue-600/30" />
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{n.message}</p>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <Clock size={11} className="text-slate-400" />
                              <span className="text-[11px] text-slate-400">{formatTime(n.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Dropdown Footer */}
                {notifications.length > 0 && (
                  <div className="border-t border-slate-100 px-4 py-2.5">
                    <button
                      onClick={() => { setNotificationsOpen(false); }}
                      className="w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors py-1"
                    >
                      View all notifications
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {isNewUser ? (
              <button className="hidden sm:block text-xs font-bold bg-[#0066FF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all" onClick={() => setSignupOpen(true)}>
                Sign Up
              </button>
            ) : (
              <button className="hidden sm:block text-xs font-bold text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors" onClick={() => setSignupOpen(true)}>
                Log In
              </button>
            )}

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* --- Mobile Dropdown Menu Matrix --- */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-4 text-[14px] font-semibold text-slate-700 animate-in fade-in duration-200">
            <Link to="/" onClick={closeMobileMenu} className={`${getLinkClass("/")} py-1`}>Home</Link>
            <Link to="/buy" onClick={closeMobileMenu} className={`${getLinkClass("/buy")} py-1`}>Buy</Link>
            <Link to="/invest" onClick={closeMobileMenu} className={`${getLinkClass("/invest")} py-1`}>Invest</Link>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setCountriesOpen(!countriesOpen)} 
                className="flex items-center justify-between py-1 text-slate-700 font-semibold"
              >
                <span>Countries</span>
                <span className={`text-[10px] text-slate-400 transition-transform ${countriesOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {countriesOpen && (
                <div className="pl-4 flex flex-col gap-3 border-l border-slate-100 ml-1">
                  <Link to="/country/sri-lanka" onClick={closeMobileMenu} className="text-slate-600 hover:text-[#0066FF]">Sri Lanka</Link>
                  <Link to="/japan-rental" onClick={closeMobileMenu} className="text-slate-600 hover:text-[#0066FF]">Japan</Link>
                </div>
              )}
            </div>

            <Link to="/#agencies" onClick={closeMobileMenu} className="py-1">Agencies</Link>
            <div className="py-1 cursor-pointer flex items-center justify-between">
              <span>Resources</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </div>
            <div className="py-1 cursor-pointer flex items-center justify-between">
              <span>About Us</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </div>

            <hr className="border-slate-100 my-1" />

            <div className="flex sm:hidden flex-col gap-3 pt-2">
              <button className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg py-2.5 hover:bg-slate-50 w-full">
                <Globe className="w-3.5 h-3.5 text-slate-400" /> <span>EN</span> <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {isNewUser ? (
                <button className="block text-xs font-bold bg-[#0066FF] text-white py-2.5 rounded-lg shadow-sm transition-all w-full" onClick={() => setSignupOpen(true)}>
                  Sign Up
                </button>
              ) : (
                <button className="text-xs font-bold text-slate-700 border border-slate-200 py-2.5 rounded-lg transition-colors w-full" onClick={() => setSignupOpen(true)}>
                  Log In
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>

    <Signup open={signupOpen} onClose={() => setSignupOpen(false)} isNewUser={isNewUser} />

    {/* Custom Notification Modal / Popup Window */}
    {selectedNotification && (
      <>
        {/* Blurred Background Overlay */}
        <div 
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[100] transition-opacity duration-300"
          onClick={() => setSelectedNotification(null)}
          aria-hidden="true"
        />
        
        {/* Popup Box */}
        <div 
          className="fixed left-1/2 top-1/2 z-[101] w-[92%] sm:w-full max-w-sm bg-white rounded-[28px] shadow-2xl shadow-slate-900/20 border border-white/70 overflow-hidden"
          style={{
            animation: 'popup-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Gradient top accent */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-blue-600/10 via-cyan-400/10 to-indigo-500/10" />

          <div className="relative p-5 sm:p-6">
            {/* Close button */}
            <button 
              onClick={() => setSelectedNotification(null)}
              className="absolute right-3 top-3 rounded-full border border-slate-200 bg-white/80 p-1.5 text-slate-400 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${notificationBg[selectedNotification.type] || 'bg-blue-50'} shadow-sm`}>
                {notificationIcons[selectedNotification.type] || <Bell size={20} className="text-blue-600" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {selectedNotification.type ? selectedNotification.type.charAt(0).toUpperCase() + selectedNotification.type.slice(1) : 'Notification'}
                </p>
                <h3 className="text-lg font-bold text-slate-900 leading-tight mt-0.5">
                  {selectedNotification.title}
                </h3>
              </div>
            </div>

            {/* Timestamp */}
            <div className="flex items-center gap-1.5 mb-3">
              <Clock size={12} className="text-slate-400" />
              <span className="text-[11px] text-slate-400 font-medium">
                {formatTime(selectedNotification.createdAt)}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 my-3" />

            {/* Content */}
            <div className="py-1">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedNotification.message}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 my-4" />

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setSelectedNotification(null)}
                className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-colors"
              >
                Dismiss
              </button>
              <button 
                onClick={() => setSelectedNotification(null)}
                className="flex-1 px-4 py-2.5 bg-[#0066FF] hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                View Details
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Inline styles for the specific bottom-to-center animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes popup-slide-up {
            0% { 
              transform: translate(-50%, 100%); 
              opacity: 0; 
            }
            100% { 
              transform: translate(-50%, -50%); 
              opacity: 1; 
            }
          }
        `}} />
      </>
    )}
    </>
  );
}