import React from 'react';
import { CheckboxGroup, FilterRow } from './seahomeRentalFilterLayout';
import {
  AREA_OPTIONS,
  BUILDING_AGE_OPTIONS,
  LAYOUT_OPTIONS,
  RENT_EXTRA_OPTIONS,
  RENT_MAX_OPTIONS,
  RENT_MIN_OPTIONS,
  SURROUNDING_OPTIONS,
  WALK_FROM_STATION_OPTIONS,
  type LineSearchFilters,
} from './seahomeRentalLineStations';

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {options.map((opt) => (
        <label key={opt.value || 'none'} className="flex cursor-pointer items-center gap-1.5">
          <input
            type="radio"
            name={name}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="h-3.5 w-3.5 accent-[#c80032] sm:h-4 sm:w-4"
          />
          <span className="text-[11px] text-gray-800 sm:text-xs">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

type Props = {
  filters: LineSearchFilters;
  onChange: (next: LineSearchFilters) => void;
};

const SeahomeRentalLineFilterPanel: React.FC<Props> = ({ filters, onChange }) => {
  const patch = (partial: Partial<LineSearchFilters>) => {
    onChange({ ...filters, ...partial });
  };

  const toggleInList = (list: string[], id: string) =>
    list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

  return (
    <div className="overflow-hidden border border-[#d4cfc4] bg-white shadow-sm">
      <FilterRow label="Monthly rent">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={filters.rentMin}
              onChange={(e) => patch({ rentMin: e.target.value })}
              className="min-w-[6.5rem] border border-gray-300 bg-white px-2 py-1.5 text-xs sm:text-sm"
            >
              {RENT_MIN_OPTIONS.map((o) => (
                <option key={`min-${o.value}`} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <span className="text-xs text-gray-500">~</span>
            <select
              value={filters.rentMax}
              onChange={(e) => patch({ rentMax: e.target.value })}
              className="min-w-[6.5rem] border border-gray-300 bg-white px-2 py-1.5 text-xs sm:text-sm"
            >
              {RENT_MAX_OPTIONS.map((o) => (
                <option key={`max-${o.value}`} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <CheckboxGroup
            options={RENT_EXTRA_OPTIONS}
            selected={filters.rentExtras}
            onChange={(id) => patch({ rentExtras: toggleInList(filters.rentExtras, id) })}
          />
        </div>
      </FilterRow>

      <FilterRow label="Layout">
        <CheckboxGroup
          options={LAYOUT_OPTIONS}
          selected={filters.layouts}
          onChange={(id) => patch({ layouts: toggleInList(filters.layouts, id) })}
        />
      </FilterRow>

      <FilterRow label="Floor area">
        <select
          value={filters.areaMin}
          onChange={(e) => patch({ areaMin: e.target.value })}
          className="w-full max-w-xs border border-gray-300 bg-white px-2 py-1.5 text-xs sm:text-sm"
        >
          {AREA_OPTIONS.map((o) => (
            <option key={o.value || 'area'} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FilterRow>

      <FilterRow label="Walk from station">
        <RadioGroup
          name="walk-from-station"
          options={WALK_FROM_STATION_OPTIONS}
          value={filters.walkMinutes}
          onChange={(walkMinutes) => patch({ walkMinutes })}
        />
      </FilterRow>

      <FilterRow label="Building age">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {BUILDING_AGE_OPTIONS.map((opt) => (
            <label key={opt.value || 'age-none'} className="flex cursor-pointer items-center gap-1.5">
              <input
                type="radio"
                name="building-age"
                checked={filters.buildingAge === opt.value}
                onChange={() => patch({ buildingAge: opt.value })}
                className="h-3.5 w-3.5 accent-[#c80032] sm:h-4 sm:w-4"
              />
              <span className="text-[11px] text-gray-800 sm:text-xs">{opt.label}</span>
            </label>
          ))}
        </div>
      </FilterRow>

      <FilterRow label="Surroundings" showInfo infoTitle="Based on map data around each property">
        <div className="flex flex-col gap-2">
          {SURROUNDING_OPTIONS.map((opt) => (
            <label key={opt.id} className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                checked={filters.surroundings.includes(opt.id)}
                onChange={() =>
                  patch({ surroundings: toggleInList(filters.surroundings, opt.id) })
                }
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#c80032] sm:h-4 sm:w-4"
              />
              <span className="text-[11px] leading-snug text-gray-800 sm:text-xs">{opt.label}</span>
            </label>
          ))}
        </div>
      </FilterRow>
    </div>
  );
};

export default SeahomeRentalLineFilterPanel;
