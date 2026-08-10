import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bookmark,
  Clock,
  Globe,
  HelpCircle,
  History,
  Link2,
  MapPin,
  MessageSquare,
  Printer,
  Radio,
  Route,
  Settings,
  Shield,
  Star,
  X,
} from 'lucide-react';

type NavItem = {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href?: string;
  onClick?: () => void;
};

type NavSection = {
  items: NavItem[];
};

const NAV_SECTIONS: NavSection[] = [
  {
    items: [
      { id: 'saved', label: 'Saved', icon: Bookmark },
      { id: 'recents', label: 'Recents', icon: Clock },
      { id: 'contributions', label: 'Your contributions', icon: MessageSquare },
      { id: 'sharing', label: 'Location sharing', icon: Radio },
      { id: 'timeline', label: 'Your timeline', icon: Route },
      { id: 'data', label: 'Your data in Maps', icon: Shield },
    ],
  },
  {
    items: [
      { id: 'share', label: 'Share or embed map', icon: Link2 },
      { id: 'print', label: 'Print', icon: Printer },
    ],
  },
  {
    items: [
      { id: 'missing-place', label: 'Add a missing place' },
      { id: 'business', label: 'Add your business', href: '/seahome-real-estates/rental' },
      { id: 'edit-map', label: 'Edit the map' },
    ],
  },
  {
    items: [
      { id: 'tips', label: 'Tips and tricks', href: '/contact' },
      { id: 'help', label: 'Get help', icon: HelpCircle, href: '/contact' },
      { id: 'consumer', label: 'Consumer information', href: '/privacy' },
    ],
  },
  {
    items: [
      { id: 'language', label: 'Language', icon: Globe },
      { id: 'search-settings', label: 'Search settings', icon: Settings },
      { id: 'history', label: 'Maps history', icon: History },
    ],
  },
];

type Props = {
  open: boolean;
  showSidebar: boolean;
  onShowSidebarChange: (value: boolean) => void;
  onClose: () => void;
  className?: string;
};

function NavRow({ item }: { item: NavItem }) {
  const Icon = item.icon;
  const className =
    'flex w-full items-center gap-4 rounded-lg px-3 py-2.5 text-left text-sm text-[#3c4043] hover:bg-[#f1f3f4]';

  const content = (
    <>
      {Icon ? (
        <Icon className="h-5 w-5 shrink-0 text-[#5f6368]" strokeWidth={1.75} />
      ) : (
        <span className="w-5 shrink-0" aria-hidden />
      )}
      <span className="leading-snug">{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <Link to={item.href} className={className} onClick={item.onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={item.onClick}>
      {content}
    </button>
  );
}

const KaishiMapsSidebar: React.FC<Props> = ({
  open,
  showSidebar,
  onShowSidebarChange,
  onClose,
  className = '',
}) => {
  if (!open) return null;

  return (
    <aside
      className={`kaishi-maps-sidebar flex h-full w-full flex-col border-r border-[#dadce0] bg-white ${className}`}
      aria-label="Kaishi Maps menu"
    >
      <div className="flex items-center justify-between gap-2 border-b border-[#e8eaed] px-4 py-3">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 text-[#202124] hover:opacity-90"
        >
          <MapPin className="h-6 w-6 shrink-0 text-emerald-700" strokeWidth={2.25} />
          <span className="truncate text-base font-medium">
            <span className="text-[#4285f4]">Kaishi</span>{' '}
            <span className="text-[#ea4335]">Maps</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#5f6368] hover:bg-[#f1f3f4]"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <label className="flex cursor-pointer items-center justify-between gap-3 border-b border-[#e8eaed] px-4 py-3 text-sm text-[#3c4043]">
        <span>Show side bar</span>
        <input
          type="checkbox"
          checked={showSidebar}
          onChange={(e) => onShowSidebarChange(e.target.checked)}
          className="h-4 w-4 accent-[#1a73e8]"
        />
      </label>

      <nav className="flex-1 overflow-y-auto py-2">
        {NAV_SECTIONS.map((section, index) => (
          <div key={index}>
            {index > 0 ? <div className="my-2 border-t border-[#e8eaed]" role="separator" /> : null}
            <ul className="space-y-0.5 px-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <NavRow
                    item={{
                      ...item,
                      onClick:
                        item.id === 'contributions'
                          ? undefined
                          : item.onClick,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-[#e8eaed] px-4 py-3 text-[11px] text-[#5f6368]">
        <p className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 text-[#fbbc04]" fill="#fbbc04" />
          Kaishi Nihon · Seahome rentals
        </p>
      </div>
    </aside>
  );
};

export default KaishiMapsSidebar;
