import React from 'react';
import { CheckboxGrid, FilterRow, RadioGrid } from './seahomeRentalFilterLayout';
import {
  CONSTRUCTION_METHOD_OPTIONS,
  CONTRACT_CONDITION_OPTIONS,
  DISCLOSURE_DATE_OPTIONS,
  FEATURE_CHARACTERISTIC_OPTIONS,
  OTHER_PROPERTY_OPTIONS,
  type LineSearchFilters,
} from './seahomeRentalLineStations';

type Props = {
  filters: LineSearchFilters;
  onChange: (next: LineSearchFilters) => void;
};

const SeahomeRentalLineFeatureFilterPanel: React.FC<Props> = ({ filters, onChange }) => {
  const patch = (partial: Partial<LineSearchFilters>) => {
    onChange({ ...filters, ...partial });
  };

  const toggleInList = (list: string[], id: string) =>
    list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

  return (
    <>
      <FilterRow label="Features">
        <CheckboxGrid
          options={FEATURE_CHARACTERISTIC_OPTIONS}
          selected={filters.features}
          onChange={(id) => patch({ features: toggleInList(filters.features, id) })}
        />
      </FilterRow>

      <FilterRow label="Construction">
        <CheckboxGrid
          options={CONSTRUCTION_METHOD_OPTIONS}
          selected={filters.construction}
          onChange={(id) => patch({ construction: toggleInList(filters.construction, id) })}
        />
      </FilterRow>

      <FilterRow label="Other">
        <CheckboxGrid
          options={OTHER_PROPERTY_OPTIONS}
          selected={filters.otherProperty}
          onChange={(id) => patch({ otherProperty: toggleInList(filters.otherProperty, id) })}
        />
      </FilterRow>

      <FilterRow label="Listed within">
        <RadioGrid
          name="disclosure-date"
          options={DISCLOSURE_DATE_OPTIONS}
          value={filters.disclosureDate}
          onChange={(disclosureDate) => patch({ disclosureDate })}
        />
      </FilterRow>

      <FilterRow
        label="Contract"
        showInfo
        infoTitle="Filter by standard vs fixed-term lease contracts"
      >
        <select
          value={filters.contractCondition}
          onChange={(e) => patch({ contractCondition: e.target.value })}
          className="w-full max-w-md border border-gray-300 bg-white px-2 py-1.5 text-xs sm:text-sm"
        >
          {CONTRACT_CONDITION_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FilterRow>

      <FilterRow label="Appeal">
        <label className="flex cursor-pointer items-center gap-1.5">
          <input
            type="checkbox"
            checked={filters.appealRecommended}
            onChange={(e) => patch({ appealRecommended: e.target.checked })}
            className="h-3.5 w-3.5 shrink-0 accent-[#c80032] sm:h-4 sm:w-4"
          />
          <span className="text-[11px] text-gray-800 sm:text-xs">
            With &quot;Recommended&quot; comment
          </span>
        </label>
      </FilterRow>
    </>
  );
};

export default SeahomeRentalLineFeatureFilterPanel;
