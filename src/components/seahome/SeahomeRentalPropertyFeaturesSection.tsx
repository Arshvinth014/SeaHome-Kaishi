import React from 'react';
import {
  Bath,
  Car,
  Dog,
  Flame,
  Heart,
  Layers,
  LayoutGrid,
  Lock,
  Sparkles,
  Star,
  Sun,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import type { PropertyFeatures } from './seahomeRentalPropertyDetailData';

const CRIMSON = '#b3002d';

const TAG_ICONS: Record<string, LucideIcon> = {
  'sep-bath': Bath,
  reheating: Flame,
  'floor-2plus': Layers,
  vanity: Sparkles,
  flooring: LayoutGrid,
  ac: Wind,
  autolock: Lock,
  parking: Car,
  pet: Dog,
  south: Sun,
};

type Props = {
  features: PropertyFeatures;
};

const SeahomeRentalPropertyFeaturesSection: React.FC<Props> = ({ features }) => {
  return (
    <section id="features" className="mt-6 border border-gray-300 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-300 px-3 py-2.5 sm:px-4">
        <h2 className="flex items-center gap-1.5 text-sm font-bold text-gray-900 sm:text-base">
          <Star className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: CRIMSON }} fill={CRIMSON} strokeWidth={0} />
          Equipment &amp; features
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-1 border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 sm:text-xs"
        >
          <Heart className="h-3.5 w-3.5" strokeWidth={2} />
          Add to favorites
        </button>
      </div>

      <div className="border-b border-gray-200 bg-[#fafafa] px-3 py-2.5 sm:px-4">
        <p className="text-xs leading-relaxed text-gray-800 sm:text-sm">
          <span
            className="mr-2 inline-block rounded-sm px-1.5 py-0.5 text-[10px] font-bold text-white sm:text-[11px]"
            style={{ backgroundColor: CRIMSON }}
          >
            Point!
          </span>
          {features.highlights.join(' · ')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 border-b border-gray-200 p-3 sm:grid-cols-3 sm:p-4 md:grid-cols-5">
        {features.tags.map((tag) => {
          const Icon = TAG_ICONS[tag.id] ?? LayoutGrid;
          const active = tag.active;
          return (
            <div
              key={tag.id}
              className={`flex flex-col items-center justify-center gap-1 border px-1 py-2 text-center ${
                active ? 'border-[#e8a0b0] bg-[#fff8fa]' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <Icon
                className={`h-5 w-5 sm:h-6 sm:w-6 ${active ? '' : 'text-gray-300'}`}
                style={active ? { color: CRIMSON } : undefined}
                strokeWidth={1.75}
              />
              <span
                className={`text-[9px] font-semibold leading-tight sm:text-[10px] ${
                  active ? 'text-gray-900' : 'text-gray-400'
                }`}
                style={active ? { color: CRIMSON } : undefined}
              >
                {tag.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="divide-y divide-gray-200">
        {features.categories.map((cat) => (
          <div
            key={cat.label}
            className="grid grid-cols-[minmax(5.5rem,7.5rem)_1fr] text-xs sm:text-sm"
          >
            <div className="bg-[#ececec] px-2.5 py-2.5 font-bold text-gray-800 sm:px-3">
              {cat.label}
            </div>
            <p className="bg-white px-2.5 py-2.5 leading-relaxed text-gray-800 sm:px-3">
              {cat.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeahomeRentalPropertyFeaturesSection;
