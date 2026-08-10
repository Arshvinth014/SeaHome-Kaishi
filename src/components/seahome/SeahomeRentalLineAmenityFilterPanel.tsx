import React from 'react';
import { CheckboxGrid, FilterRow } from './seahomeRentalFilterLayout';
import {
  COMMON_FACILITY_OPTIONS,
  EQUIPMENT_OPTIONS,
  POSITION_OPTIONS,
  SECURITY_OPTIONS,
  TENANCY_CONDITION_OPTIONS,
  type LineSearchFilters,
} from './seahomeRentalLineStations';

type Props = {
  filters: LineSearchFilters;
  onChange: (next: LineSearchFilters) => void;
};

const SeahomeRentalLineAmenityFilterPanel: React.FC<Props> = ({ filters, onChange }) => {
  const patch = (partial: Partial<LineSearchFilters>) => {
    onChange({ ...filters, ...partial });
  };

  const toggleInList = (list: string[], id: string) =>
    list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

  return (
    <div className="-mt-px overflow-hidden border border-t-0 border-[#d4cfc4] bg-white shadow-sm">
      <FilterRow label="Security">
        <CheckboxGrid
          options={SECURITY_OPTIONS}
          selected={filters.security}
          onChange={(id) => patch({ security: toggleInList(filters.security, id) })}
        />
      </FilterRow>

      <FilterRow label="Position">
        <CheckboxGrid
          options={POSITION_OPTIONS}
          selected={filters.position}
          onChange={(id) => patch({ position: toggleInList(filters.position, id) })}
        />
      </FilterRow>

      <FilterRow label="Conditions">
        <CheckboxGrid
          options={TENANCY_CONDITION_OPTIONS}
          selected={filters.tenancyConditions}
          onChange={(id) =>
            patch({ tenancyConditions: toggleInList(filters.tenancyConditions, id) })
          }
        />
      </FilterRow>

      <FilterRow label="Common facilities">
        <CheckboxGrid
          options={COMMON_FACILITY_OPTIONS}
          selected={filters.commonFacilities}
          onChange={(id) =>
            patch({ commonFacilities: toggleInList(filters.commonFacilities, id) })
          }
        />
      </FilterRow>

      <FilterRow label="Equipment">
        <CheckboxGrid
          options={EQUIPMENT_OPTIONS}
          selected={filters.equipment}
          onChange={(id) => patch({ equipment: toggleInList(filters.equipment, id) })}
        />
      </FilterRow>
    </div>
  );
};

export default SeahomeRentalLineAmenityFilterPanel;
