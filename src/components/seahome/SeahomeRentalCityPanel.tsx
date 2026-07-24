import React from 'react';
import { citiesForPrefecture, type RentalCity } from './seahomeRentalCities';
import type { JapanMapSelection } from './SeahomeJapanMap';

type Props = {
  selection: JapanMapSelection;
  onCitySelect: (city: RentalCity, selection: JapanMapSelection) => void;
  onSearchPrefecture: () => void;
};

const SeahomeRentalCityPanel: React.FC<Props> = ({ selection, onCitySelect, onSearchPrefecture }) => {
  const cities = citiesForPrefecture(selection.prefectureSlug, selection.prefectureName);

  return (
    <div
      id="rental-city-panel"
      className="rounded-lg border border-sky-200 bg-white p-3 shadow-sm sm:p-4"
    >
      <p className="text-xs font-bold text-sky-950 sm:text-sm">
        Cities & areas in <span className="text-sky-700">{selection.prefectureName}</span>
      </p>
      <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">
        Choose a city or search the whole prefecture
      </p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {cities.map((city) => (
          <button
            key={city.slug}
            type="button"
            onClick={() => onCitySelect(city, selection)}
            className={`rounded-md border px-2.5 py-1 text-[11px] font-semibold transition sm:text-xs ${
              selection.city?.slug === city.slug
                ? 'border-sky-600 bg-sky-600 text-white'
                : 'border-sky-200 bg-sky-50 text-sky-900 hover:border-sky-400 hover:bg-sky-100'
            }`}
          >
            {city.name}
          </button>
        ))}
        <button
          type="button"
          onClick={onSearchPrefecture}
          className="rounded-md border border-dashed border-sky-400 bg-sky-50/50 px-2.5 py-1 text-[11px] font-semibold text-sky-800 transition hover:bg-sky-100 sm:text-xs"
        >
          Search all {selection.prefectureName}
        </button>
      </div>
    </div>
  );
};

export default SeahomeRentalCityPanel;
