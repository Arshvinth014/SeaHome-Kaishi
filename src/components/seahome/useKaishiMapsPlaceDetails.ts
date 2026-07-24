import { useEffect, useState } from 'react';
import type { MapSearchSuggestion } from './kaishiMapsPlaceSearch';
import {
  fetchKaishiMapsPlaceDetails,
  type KaishiMapsPlaceDetails,
} from './kaishiMapsPlaceDetails';
import type { KaishiMapsRailStation } from './seahomeKaishiMapsHubData';

export function useKaishiMapsPlaceDetails(
  place: MapSearchSuggestion | null,
  stations: KaishiMapsRailStation[]
) {
  const [details, setDetails] = useState<KaishiMapsPlaceDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!place) {
      setDetails(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchKaishiMapsPlaceDetails(place, stations)
      .then((result) => {
        if (!cancelled) setDetails(result);
      })
      .catch(() => {
        if (!cancelled) setDetails(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [place, stations]);

  return { details, loading };
}
