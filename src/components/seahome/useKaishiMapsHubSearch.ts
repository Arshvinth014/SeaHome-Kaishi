import { useCallback, useEffect, useRef, useState } from 'react';
import { searchGeocodePhoton } from '../../utils/searchGeocodePhoton';
import type { KaishiMapsRailStation } from './seahomeKaishiMapsHubData';
import {
  buildLocalSearchSuggestions,
  mergeSearchSuggestions,
  pickBestSearchMatch,
  type MapSearchSuggestion,
} from './kaishiMapsPlaceSearch';

type Options = {
  stations: KaishiMapsRailStation[];
  onSelect: (suggestion: MapSearchSuggestion) => void;
  initialQuery?: string;
};

export function useKaishiMapsHubSearch({ stations, onSelect, initialQuery = '' }: Options) {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<MapSearchSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const requestIdRef = useRef(0);

  const trimmedQuery = query.trim();

  useEffect(() => {
    if (!trimmedQuery) {
      setSuggestions([]);
      setLoading(false);
      setError(null);
      return;
    }

    const local = buildLocalSearchSuggestions(trimmedQuery, stations);
    setSuggestions(local);

    const requestId = ++requestIdRef.current;
    setLoading(true);
    setError(null);

    const timer = window.setTimeout(async () => {
      const remote = await searchGeocodePhoton(trimmedQuery, { limit: 6 });
      if (requestId !== requestIdRef.current) return;
      const merged = mergeSearchSuggestions(local, remote);
      setSuggestions(merged);
      setLoading(false);
    }, 320);

    return () => {
      window.clearTimeout(timer);
    };
  }, [trimmedQuery, stations]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const el = searchRef.current;
      if (!el || el.contains(event.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const applySuggestion = useCallback(
    (suggestion: MapSearchSuggestion) => {
      setQuery(suggestion.label);
      setOpen(false);
      setError(null);
      onSelect(suggestion);
    },
    [onSelect]
  );

  const resolveSearch = useCallback(
    async (overrideQuery?: string): Promise<boolean> => {
      const text = (overrideQuery ?? query).trim();
      if (!text) return false;

      const local = buildLocalSearchSuggestions(text, stations);
      const cached = suggestions.length > 0 ? suggestions : local;
      const bestCached = pickBestSearchMatch(text, cached);
      if (bestCached) {
        applySuggestion(bestCached);
        return true;
      }

      setLoading(true);
      setError(null);
      try {
        const remote = await searchGeocodePhoton(text, { limit: 5 });
        const merged = mergeSearchSuggestions(local, remote);
        const best = pickBestSearchMatch(text, merged);
        if (best) {
          applySuggestion(best);
          return true;
        }
        setError('No places found. Try a city, station, or address in Japan.');
        setOpen(true);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [query, stations, suggestions, applySuggestion]
  );

  const clearSearch = useCallback(() => {
    requestIdRef.current += 1;
    setQuery('');
    setOpen(false);
    setSuggestions([]);
    setLoading(false);
    setError(null);
  }, []);

  return {
    query,
    setQuery,
    open,
    setOpen,
    suggestions,
    loading,
    error,
    setError,
    searchRef,
    applySuggestion,
    resolveSearch,
    clearSearch,
    trimmedQuery,
  };
}
