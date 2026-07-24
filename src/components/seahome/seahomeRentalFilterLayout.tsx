import React from 'react';
import { Info } from 'lucide-react';

export const FILTER_SIDEBAR_BG = '#f5f0e6';
export const FILTER_LABEL_COLOR = '#5c4a3a';
export const FILTER_CRIMSON = '#c80032';

type FilterRowProps = {
  label: string;
  showInfo?: boolean;
  infoTitle?: string;
  children: React.ReactNode;
};

export function FilterRow({ label, showInfo, infoTitle, children }: FilterRowProps) {
  return (
    <div className="flex flex-col border-b border-gray-200 last:border-b-0 sm:flex-row">
      <div
        className="flex shrink-0 items-center gap-1 border-b border-gray-200 px-3 py-3 sm:w-[7.5rem] sm:border-b-0 sm:border-r md:w-[8.5rem]"
        style={{ backgroundColor: FILTER_SIDEBAR_BG }}
      >
        <span className="text-xs font-bold leading-snug sm:text-sm" style={{ color: FILTER_LABEL_COLOR }}>
          {label}
        </span>
        {showInfo ? (
          <span
            className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: FILTER_CRIMSON }}
            title={infoTitle ?? 'More information'}
            aria-label="More information"
          >
            <Info className="h-2.5 w-2.5" strokeWidth={2.5} />
          </span>
        ) : null}
      </div>
      <div className="min-w-0 flex-1 bg-white px-3 py-3 sm:px-4">{children}</div>
    </div>
  );
}

type CheckboxGroupProps = {
  options: readonly { id?: string; label: string }[] | readonly string[];
  selected: string[];
  onChange: (id: string) => void;
  columns?: string;
};

export function CheckboxGrid({ options, selected, onChange }: CheckboxGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((opt) => {
        const id = typeof opt === 'string' ? opt : opt.id ?? opt.label;
        const label = typeof opt === 'string' ? opt : opt.label;
        return (
          <label key={id} className="flex cursor-pointer items-center gap-1.5">
            <input
              type="checkbox"
              checked={selected.includes(id)}
              onChange={() => onChange(id)}
              className="h-3.5 w-3.5 shrink-0 accent-[#c80032] sm:h-4 sm:w-4"
            />
            <span className="text-[11px] text-gray-800 sm:text-xs">{label}</span>
          </label>
        );
      })}
    </div>
  );
}

type RadioGridProps = {
  name: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

export function RadioGrid({ name, options, value, onChange }: RadioGridProps) {
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

export function CheckboxGroup({
  options,
  selected,
  onChange,
  columns = 'flex-wrap',
}: CheckboxGroupProps) {
  return (
    <div className={`flex gap-x-4 gap-y-2 ${columns}`}>
      {options.map((opt) => {
        const id = typeof opt === 'string' ? opt : opt.id ?? opt.label;
        const label = typeof opt === 'string' ? opt : opt.label;
        return (
          <label key={id} className="flex cursor-pointer items-center gap-1.5">
            <input
              type="checkbox"
              checked={selected.includes(id)}
              onChange={() => onChange(id)}
              className="h-3.5 w-3.5 shrink-0 accent-[#c80032] sm:h-4 sm:w-4"
            />
            <span className="text-[11px] text-gray-800 sm:text-xs">{label}</span>
          </label>
        );
      })}
    </div>
  );
}
