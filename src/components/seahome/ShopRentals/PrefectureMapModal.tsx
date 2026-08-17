import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, X } from 'lucide-react';
import SeahomeRentalRegionList from '../SeahomeRentalRegionList';
import SeahomeJapanMap, { type JapanMapSelection } from '../SeahomeJapanMap';
import SeahomeRentalCityPanel from '../SeahomeRentalCityPanel';
import SeahomeRentalCitySearchModal, { type RentalSearchModalContext } from '../SeahomeRentalCitySearchModal';
import type { RentalCity } from '../seahomeRentalCities';
import { RENTAL_REGIONS } from '../seahomeRentalData';
import { rentalListingsUrl } from '../seahomeRentalLineSearchData';

interface PrefectureMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrefectureMapModal: React.FC<PrefectureMapModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [mapSelection, setMapSelection] = useState<JapanMapSelection | null>(null);
  const [hoveredPrefectureSlug, setHoveredPrefectureSlug] = useState<string | null>(null);
  const [citySearchModal, setCitySearchModal] = useState<RentalSearchModalContext | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openListings = useCallback(
    (path = '/properties') => {
      if (!path) return;
      const normalized = path.startsWith('/') ? path : `/${path}`;
      if (
        normalized.startsWith('/seahome-real-estates') ||
        normalized.startsWith('/rental-') ||
        normalized.startsWith('/parking') ||
        normalized.startsWith('/warehouse')
      ) {
        const target = normalized.startsWith('/seahome-real-estates')
          ? normalized
          : `/seahome-real-estates${normalized}`;
        navigate(target);
        return;
      }
      navigate(rentalListingsUrl(normalized));
      onClose();
    },
    [navigate, onClose]
  );

  const openSearchModal = useCallback((ctx: RentalSearchModalContext) => {
    setCitySearchModal(ctx);
  }, []);

  const selectPrefecture = useCallback(
    (slug: string, name: string) => {
      setMapSelection({ prefectureSlug: slug, prefectureName: name });
      openSearchModal({ prefectureSlug: slug, prefectureName: name });
    },
    [openSearchModal]
  );

  const selectCity = useCallback(
    (city: RentalCity, selection: JapanMapSelection) => {
      setMapSelection({ ...selection, city });
      openSearchModal({ prefectureSlug: selection.prefectureSlug, prefectureName: selection.prefectureName, city });
    },
    [openSearchModal]
  );

  const searchSelectedPrefecture = useCallback(() => {
    if (!mapSelection) return;
    openSearchModal({ prefectureSlug: mapSelection.prefectureSlug, prefectureName: mapSelection.prefectureName, city: mapSelection.city });
  }, [mapSelection, openSearchModal]);

  const closeCitySearchModal = useCallback(() => setCitySearchModal(null), []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/65 p-3 sm:p-4 md:p-6 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-3xl border border-sky-100 bg-white p-4 sm:p-6 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-sky-100 pb-3 mb-4 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-sky-600 text-white rounded-xl shadow-sm">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-sky-950">
                Select the prefecture you are looking for
              </h2>
              <p className="text-xs text-gray-500 hidden sm:block">
                Click a region on the map or choose a prefecture to see available cities and options
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable Map & Region Content */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          <div
            className="grid gap-3 xl:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)_minmax(0,13.5rem)] xl:items-start xl:gap-4 rounded-2xl border border-sky-200/60 bg-sky-50/40 p-3 sm:p-4"
            onMouseLeave={() => setHoveredPrefectureSlug(null)}
          >
            <div className="hidden xl:block">
              <SeahomeRentalRegionList
                regions={RENTAL_REGIONS.slice(0, 4)}
                activeSlug={mapSelection?.prefectureSlug ?? null}
                hoveredSlug={hoveredPrefectureSlug}
                onPrefectureClick={selectPrefecture}
                onPrefectureHover={setHoveredPrefectureSlug}
              />
            </div>

            <SeahomeJapanMap
              activeSlug={mapSelection?.prefectureSlug ?? null}
              hoveredSlug={hoveredPrefectureSlug}
              onPrefectureSelect={selectPrefecture}
              onPrefectureHover={setHoveredPrefectureSlug}
            />

            <div className="hidden xl:block">
              <SeahomeRentalRegionList
                regions={RENTAL_REGIONS.slice(4)}
                activeSlug={mapSelection?.prefectureSlug ?? null}
                hoveredSlug={hoveredPrefectureSlug}
                onPrefectureClick={selectPrefecture}
                onPrefectureHover={setHoveredPrefectureSlug}
              />
            </div>
          </div>

          {/* Mobile Region List */}
          <div className="xl:hidden rounded-2xl border border-sky-200/60 bg-sky-50/40 p-3 sm:p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-sky-800">
              Or choose a prefecture
            </p>
            <SeahomeRentalRegionList
              regions={RENTAL_REGIONS}
              activeSlug={mapSelection?.prefectureSlug ?? null}
              hoveredSlug={hoveredPrefectureSlug}
              onPrefectureClick={selectPrefecture}
              onPrefectureHover={setHoveredPrefectureSlug}
            />
          </div>

          {/* Selected City Panel */}
          {mapSelection ? (
            <SeahomeRentalCityPanel
              selection={mapSelection}
              onCitySelect={selectCity}
              onSearchPrefecture={searchSelectedPrefecture}
            />
          ) : null}
        </div>

        {/* City Search Inner Modal */}
        {citySearchModal ? (
          <SeahomeRentalCitySearchModal
            context={citySearchModal}
            onClose={closeCitySearchModal}
            onSearch={() => openListings('/properties')}
            onViewPrefecture={() => openListings('/properties')}
          />
        ) : null}

      </div>
    </div>
  );
};

export default PrefectureMapModal;
