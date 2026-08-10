import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Bookmark,
  Clock,
  Globe,
  MapPin,
  Menu,
  Navigation,
  Search,
  Share2,
  Smartphone,
  Star,
  Tag,
  X,
  Accessibility,
} from 'lucide-react';
import type { KaishiMapsPlaceDetails } from './kaishiMapsPlaceDetails';
import type { MapSearchSuggestion } from './kaishiMapsPlaceSearch';

type TabId = 'overview' | 'reviews' | 'about';

type Props = {
  details: KaishiMapsPlaceDetails | null;
  loading: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  onOpenMenu: () => void;
  onDirections: () => void;
  onNearby: () => void;
  backLink?: { href: string; label: string };
  suggestionsOpen?: boolean;
  suggestions?: MapSearchSuggestion[];
  suggestionsLoading?: boolean;
  searchError?: string | null;
  onSelectSuggestion?: (suggestion: MapSearchSuggestion) => void;
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.35;
  return (
    <span className="inline-flex items-center gap-0.5 text-[#f9ab00]" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${filled ? 'fill-[#f9ab00] text-[#f9ab00]' : 'fill-transparent text-[#dadce0]'}`}
            strokeWidth={1.5}
          />
        );
      })}
    </span>
  );
}

const QUICK_ACTIONS = [
  { id: 'directions', label: 'Directions', icon: Navigation, primary: true },
  { id: 'save', label: 'Save', icon: Bookmark, primary: false },
  { id: 'nearby', label: 'Nearby', icon: Search, primary: false },
  { id: 'phone', label: 'Send to phone', icon: Smartphone, primary: false },
  { id: 'share', label: 'Share', icon: Share2, primary: false },
] as const;

const KaishiMapsPlacePanel: React.FC<Props> = ({
  details,
  loading,
  query,
  onQueryChange,
  onSearchSubmit,
  onClose,
  onOpenMenu,
  onDirections,
  onNearby,
  backLink,
  suggestionsOpen = false,
  suggestions = [],
  suggestionsLoading = false,
  searchError = null,
  onSelectSuggestion,
}) => {
  const [tab, setTab] = useState<TabId>('overview');

  const handleShare = async () => {
    if (!details) return;
    let url = '/map';
    if (typeof window !== 'undefined') {
      url = window.location.href.split('#')[0] || window.location.href;
    }
    try {
      if (navigator.share) {
        await navigator.share({ title: details.name, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      /* user cancelled */
    }
  };

  const tabs: { id: TabId; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
  ];

  return (
    <aside className="kaishi-maps-place-panel flex h-full w-full flex-col bg-white shadow-[2px_0_8px_rgba(0,0,0,.12)]">
      {/* Header search bar */}
      <div className="z-10 shrink-0 border-b border-[#e8eaed] bg-white px-3 py-2.5">
        {backLink ? (
          <Link
            to={backLink.href}
            className="mb-2 inline-flex items-center gap-1 text-xs font-semibold text-[#1967d2] hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.25} />
            {backLink.label}
          </Link>
        ) : null}
        <form onSubmit={onSearchSubmit} className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenMenu}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-[#f1f3f4]"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-[#5f6368]" strokeWidth={2} />
          </button>
          <div className="flex min-w-0 flex-1 items-center rounded-full border border-[#dadce0] bg-white py-1.5 pl-3 pr-1 shadow-sm focus-within:border-[#1a73e8] focus-within:shadow-[0_1px_6px_rgba(26,115,232,.3)]">
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[#202124] outline-none"
              aria-label="Search"
            />
            <button
              type="submit"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-[#f1f3f4]"
              aria-label="Search"
            >
              <Search className="h-4 w-4 text-[#5f6368]" />
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-[#f1f3f4]"
            aria-label="Close place"
          >
            <X className="h-5 w-5 text-[#5f6368]" strokeWidth={2} />
          </button>
        </form>
        {suggestionsOpen && query.trim() ? (
          <ul
            className="mt-2 max-h-48 overflow-y-auto rounded-lg border border-[#e8eaed] bg-white py-1 shadow-md"
            role="listbox"
          >
            {suggestionsLoading && suggestions.length === 0 ? (
              <li className="px-3 py-2 text-sm text-[#5f6368]">Searching…</li>
            ) : null}
            {suggestions.map((place) => (
              <li key={place.id} role="option">
                <button
                  type="button"
                  className="flex w-full flex-col px-3 py-2 text-left hover:bg-[#f1f3f4]"
                  onClick={() => onSelectSuggestion?.(place)}
                >
                  <span className="text-sm font-medium text-[#202124]">{place.label}</span>
                  {place.subtitle ? (
                    <span className="text-xs text-[#5f6368]">{place.subtitle}</span>
                  ) : null}
                </button>
              </li>
            ))}
            {searchError ? (
              <li className="border-t border-[#e8eaed] px-3 py-2 text-xs text-red-600">{searchError}</li>
            ) : null}
          </ul>
        ) : null}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* Hero image */}
        <div className="relative h-44 w-full shrink-0 overflow-hidden bg-[#e8eaed]">
          {details?.heroImageUrl ? (
            <img
              src={details.heroImageUrl}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-[#5f6368]">
              {loading ? 'Loading…' : ''}
            </div>
          )}
        </div>

        <div className="px-4 pb-6 pt-3">
          {loading && !details ? (
            <div className="space-y-3 py-4">
              <div className="h-7 w-3/4 animate-pulse rounded bg-[#e8eaed]" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-[#e8eaed]" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-[#e8eaed]" />
            </div>
          ) : details ? (
            <>
              <h1 className="text-[1.375rem] font-normal leading-tight text-[#202124]">{details.name}</h1>
              {details.nameJa ? (
                <p className="mt-0.5 text-sm text-[#5f6368]">{details.nameJa}</p>
              ) : null}

              {details.rating != null ? (
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-sm">
                  <span className="font-medium text-[#202124]">{details.rating}</span>
                  <StarRating rating={details.rating} />
                  {details.reviewCount != null ? (
                    <span className="text-[#1a73e8]">({details.reviewCount.toLocaleString()})</span>
                  ) : null}
                </div>
              ) : null}

              <p className="mt-1 flex items-center gap-1.5 text-sm text-[#5f6368]">
                <span>{details.category}</span>
                {details.wheelchairAccessible ? (
                  <Accessibility className="h-4 w-4 text-[#1a73e8]" aria-label="Wheelchair accessible" />
                ) : null}
              </p>
              {details.lineName ? (
                <p className="mt-0.5 text-xs text-[#5f6368]">{details.lineName}</p>
              ) : null}

              {/* Tabs */}
              <div className="mt-4 flex border-b border-[#e8eaed]" role="tablist">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative px-4 pb-2.5 text-sm font-medium transition ${
                      tab === t.id ? 'text-[#1a73e8]' : 'text-[#5f6368] hover:text-[#202124]'
                    }`}
                  >
                    {t.label}
                    {tab === t.id ? (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a73e8]" />
                    ) : null}
                  </button>
                ))}
              </div>

              {tab === 'overview' ? (
                <>
                  {/* Quick actions */}
                  <div className="mt-4 flex justify-between gap-1 overflow-x-auto pb-1">
                    {QUICK_ACTIONS.map((action) => {
                      const Icon = action.icon;
                      const onClick =
                        action.id === 'directions'
                          ? onDirections
                          : action.id === 'nearby'
                            ? onNearby
                            : action.id === 'share'
                              ? () => void handleShare()
                              : undefined;
                      return (
                        <button
                          key={action.id}
                          type="button"
                          onClick={onClick}
                          className="flex min-w-[4.25rem] flex-col items-center gap-1.5"
                        >
                          <span
                            className={`flex h-11 w-11 items-center justify-center rounded-full ${
                              action.primary
                                ? 'bg-[#c2e7ff] text-[#001d35]'
                                : 'bg-[#e8f0fe] text-[#1967d2]'
                            }`}
                          >
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </span>
                          <span className="max-w-[4.5rem] text-center text-[11px] leading-tight text-[#1967d2]">
                            {action.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detail rows */}
                  <ul className="mt-5 space-y-0 divide-y divide-[#e8eaed] border-t border-[#e8eaed]">
                    <li className="flex gap-4 py-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#5f6368]" strokeWidth={1.75} />
                      <span className="text-sm leading-snug text-[#202124]">{details.address}</span>
                    </li>
                    {details.website ? (
                      <li className="flex gap-4 py-3">
                        <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#5f6368]" strokeWidth={1.75} />
                        <a
                          href={details.website.startsWith('http') ? details.website : `https://${details.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#1a73e8] hover:underline"
                        >
                          {details.website.replace(/^https?:\/\//, '')}
                        </a>
                      </li>
                    ) : null}
                    <li className="flex gap-4 py-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[10px] font-bold text-[#5f6368]">
                        ⊞
                      </span>
                      <span className="text-sm text-[#202124]">{details.coordinatesLabel}</span>
                    </li>
                    <li className="flex gap-4 py-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#5f6368]" strokeWidth={1.75} />
                      <button type="button" className="text-left text-sm text-[#1a73e8] hover:underline">
                        Your Maps history
                      </button>
                    </li>
                    <li className="flex gap-4 py-3">
                      <Tag className="mt-0.5 h-5 w-5 shrink-0 text-[#5f6368]" strokeWidth={1.75} />
                      <button type="button" className="text-left text-sm text-[#1a73e8] hover:underline">
                        Add a label
                      </button>
                    </li>
                  </ul>
                </>
              ) : null}

              {tab === 'reviews' ? (
                <p className="py-8 text-center text-sm text-[#5f6368]">
                  Reviews are not available for this place yet.
                </p>
              ) : null}

              {tab === 'about' ? (
                <div className="space-y-3 py-4 text-sm text-[#5f6368]">
                  <p>Place data from OpenStreetMap contributors.</p>
                  <p>
                    Coordinates: {details.lat.toFixed(6)}, {details.lng.toFixed(6)}
                  </p>
                  {details.isTransit ? (
                    <p>This location is shown as a transit stop on Kaishi Maps.</p>
                  ) : null}
                </div>
              ) : null}
            </>
          ) : (
            <p className="py-8 text-sm text-[#5f6368]">Could not load place details.</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default KaishiMapsPlacePanel;
