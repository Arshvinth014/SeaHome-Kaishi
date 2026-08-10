import React, { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import SeahomeRentalLineAmenityFilterPanel from './SeahomeRentalLineAmenityFilterPanel';
import SeahomeRentalLineFeatureFilterPanel from './SeahomeRentalLineFeatureFilterPanel';
import { CheckboxGroup, FilterRow, FILTER_CRIMSON } from './seahomeRentalFilterLayout';
import {
  BATH_TOILET_OPTIONS,
  BUILDING_STRUCTURE_OPTIONS,
  HEATING_COOLING_OPTIONS,
  KITCHEN_OPTIONS,
  MEDIA_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  STORAGE_OPTIONS,
  TV_COMMUNICATION_OPTIONS,
  type LineSearchFilters,
} from './seahomeRentalLineStations';

type Props = {
  filters: LineSearchFilters;
  onChange: (next: LineSearchFilters) => void;
  onNext?: () => void;
};

const SeahomeRentalLineDetailedFilterPanel: React.FC<Props> = ({ filters, onChange, onNext }) => {
  const [open, setOpen] = useState(true);

  const patch = (partial: Partial<LineSearchFilters>) => {
    onChange({ ...filters, ...partial });
  };

  const toggleInList = (list: string[], id: string) =>
    list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

  return (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
          aria-expanded={open}
        >
          <span
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition"
            style={{ backgroundColor: FILTER_CRIMSON }}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? '' : '-rotate-90'}`}
              strokeWidth={2.5}
            />
          </span>
          <span className="text-sm font-bold sm:text-base">
            <span style={{ color: FILTER_CRIMSON }}>Specify more detailed</span>{' '}
            <span className="text-gray-900">search criteria</span>
          </span>
        </button>
        <a
          href="#detailed-search-criteria"
          className="inline-flex shrink-0 items-center gap-1 text-[11px] text-[#2563eb] hover:underline sm:text-xs"
          onClick={(e) => e.preventDefault()}
        >
          <HelpCircle className="h-3.5 w-3.5" strokeWidth={2} />
          About search criteria
        </a>
      </div>

      {open ? (
        <div className="mt-3">
        <div className="overflow-hidden border border-[#d4cfc4] bg-white shadow-sm">
          <FilterRow label="Property type">
            <CheckboxGroup
              options={PROPERTY_TYPE_OPTIONS}
              selected={filters.propertyTypes}
              onChange={(id) => patch({ propertyTypes: toggleInList(filters.propertyTypes, id) })}
            />
          </FilterRow>

          <FilterRow
            label="Building structure"
            showInfo
            infoTitle="Reinforced concrete includes RC and SRC structures"
          >
            <CheckboxGroup
              options={BUILDING_STRUCTURE_OPTIONS}
              selected={filters.buildingStructures}
              onChange={(id) =>
                patch({ buildingStructures: toggleInList(filters.buildingStructures, id) })
              }
            />
          </FilterRow>

          <FilterRow label="With images">
            <CheckboxGroup
              options={MEDIA_OPTIONS}
              selected={filters.media}
              onChange={(id) => patch({ media: toggleInList(filters.media, id) })}
            />
          </FilterRow>

          <FilterRow label="Kitchen">
            <CheckboxGroup
              options={KITCHEN_OPTIONS}
              selected={filters.kitchen}
              onChange={(id) => patch({ kitchen: toggleInList(filters.kitchen, id) })}
            />
          </FilterRow>

          <FilterRow label="Bath & toilet">
            <CheckboxGroup
              options={BATH_TOILET_OPTIONS}
              selected={filters.bathToilet}
              onChange={(id) => patch({ bathToilet: toggleInList(filters.bathToilet, id) })}
            />
          </FilterRow>

          <FilterRow label="Heating & cooling">
            <CheckboxGroup
              options={HEATING_COOLING_OPTIONS}
              selected={filters.heatingCooling}
              onChange={(id) =>
                patch({ heatingCooling: toggleInList(filters.heatingCooling, id) })
              }
            />
          </FilterRow>

          <FilterRow label="Storage">
            <CheckboxGroup
              options={STORAGE_OPTIONS}
              selected={filters.storage}
              onChange={(id) => patch({ storage: toggleInList(filters.storage, id) })}
            />
          </FilterRow>

          <FilterRow label="TV & communication">
            <CheckboxGroup
              options={TV_COMMUNICATION_OPTIONS}
              selected={filters.tvCommunication}
              onChange={(id) =>
                patch({ tvCommunication: toggleInList(filters.tvCommunication, id) })
              }
            />
          </FilterRow>
        </div>
        <SeahomeRentalLineAmenityFilterPanel filters={filters} onChange={onChange} />
        <div className="-mt-px overflow-hidden border border-t-0 border-[#d4cfc4] bg-white shadow-sm">
          <SeahomeRentalLineFeatureFilterPanel filters={filters} onChange={onChange} />
        </div>
        </div>
      ) : null}

      {onNext ? (
        <div className="mt-5 flex justify-center border-t border-gray-200 pt-4 sm:justify-end">
          <button
            type="button"
            onClick={onNext}
            className="inline-flex min-w-[10rem] items-center justify-center gap-2 rounded px-8 py-2.5 text-sm font-bold text-white shadow-md transition hover:brightness-110"
            style={{ backgroundColor: FILTER_CRIMSON }}
          >
            Next
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SeahomeRentalLineDetailedFilterPanel;
