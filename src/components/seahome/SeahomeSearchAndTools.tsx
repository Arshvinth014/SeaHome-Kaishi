import React from 'react';
import {
  BarChart3,
  BookMarked,
  BookOpen,
  ChevronRight,
  ClipboardCheck,
  Home,
  KeyRound,
  Search,
  Trophy,
  Truck,
} from 'lucide-react';

type Props = {
  onNavigate: (path: string) => void;
  containerClass: string;
};

type HorizontalCard = {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  iconClassName?: string;
};

const cardBase =
  'group flex w-full gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:border-sky-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 sm:p-5';

const HorizontalFeatureCard: React.FC<{
  card: HorizontalCard;
  onNavigate: (path: string) => void;
  large?: boolean;
}> = ({ card, onNavigate, large }) => (
  <button type="button" onClick={() => onNavigate(card.path)} className={cardBase}>
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl ${
        large ? 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]' : 'h-14 w-14'
      } ${card.iconClassName ?? 'bg-sky-50 text-sky-600'}`}
    >
      {card.icon}
    </div>
    <div className="min-w-0 flex-1">
      <h3
        className={`font-bold leading-snug text-sky-700 ${
          large ? 'text-sm sm:text-base' : 'text-sm'
        }`}
      >
        {card.title}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-gray-600 sm:text-sm">{card.description}</p>
    </div>
  </button>
);

const OTHER_WAYS_PRIMARY: HorizontalCard = {
  title: 'Used homes with inspection, warranty & insurance information',
  description:
    'Browse resale listings that include building inspections, defect guarantees, and optional insurance coverage.',
  path: '/buy-properties',
  icon: <ClipboardCheck className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.75} />,
  iconClassName: 'bg-emerald-600 text-white',
};

const OTHER_WAYS_SECONDARY: HorizontalCard[] = [
  {
    title: 'Rent & price market data',
    description: 'Check average rents and sale prices by station, city, and prefecture.',
    path: '/properties',
    icon: <BarChart3 className="h-7 w-7" strokeWidth={1.75} />,
  },
  {
    title: 'Nationwide popular property ranking',
    description: 'See trending listings by prefecture, based on saves and views from renters and buyers.',
    path: '/properties',
    icon: <Trophy className="h-7 w-7" strokeWidth={1.75} />,
  },
];

const USEFUL_TOOLS: HorizontalCard[] = [
  {
    title: 'Complete rental manual',
    description:
      'Choosing a property, signing a lease, moving in, and everyday maintenance — all in one guide.',
    path: '/blog',
    icon: <BookOpen className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    title: 'How to find a used home with confidence',
    description: 'Key terms and checkpoints explained clearly before you make an offer.',
    path: '/blog',
    icon: <Home className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    title: 'Room search manual for renters',
    description: 'Essential knowledge for first-time renters in Japan, in plain English.',
    path: '/properties',
    icon: <KeyRound className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    title: 'Home search manual for buyers',
    description: 'Step-by-step guidance from budgeting to handover when purchasing property.',
    path: '/buy-properties',
    icon: <Search className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    title: 'Complete moving manual',
    description: 'Planning, packing, utilities, and settling in — tips for a smooth relocation.',
    path: '/furniture',
    icon: <Truck className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    title: 'Real estate glossary',
    description: 'Look up common Japanese property terms with simple English explanations.',
    path: '/blog',
    icon: <BookMarked className="h-6 w-6" strokeWidth={1.75} />,
  },
];

const SeahomeSearchAndTools: React.FC<Props> = ({ onNavigate, containerClass }) => (
  <div className="w-full border-t border-gray-100 bg-[#f9f8f2]">
    {/* Other ways to search */}
    <section className="py-8 sm:py-10" aria-labelledby="other-ways-heading">
      <div className={containerClass}>
        <h2
          id="other-ways-heading"
          className="mb-6 text-center text-lg font-bold text-gray-900 sm:mb-8 sm:text-xl"
        >
          There are many other ways to search!
        </h2>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:gap-4">
          <HorizontalFeatureCard card={OTHER_WAYS_PRIMARY} onNavigate={onNavigate} large />
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {OTHER_WAYS_SECONDARY.map((card) => (
              <HorizontalFeatureCard key={card.title} card={card} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Useful information & tools */}
    <section
      className="border-t border-gray-200/80 py-8 sm:py-10"
      aria-labelledby="useful-tools-heading"
    >
      <div className={containerClass}>
        <div className="relative mb-6 sm:mb-8">
          <h2
            id="useful-tools-heading"
            className="text-center text-lg font-bold text-gray-900 sm:text-xl"
          >
            Useful information & tools for housing and real estate
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className="absolute right-0 top-0 hidden items-center gap-0.5 text-xs font-semibold text-sky-600 hover:text-sky-800 hover:underline sm:inline-flex sm:text-sm"
          >
            To tools & guides top
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className="mx-auto mt-3 flex items-center gap-0.5 text-xs font-semibold text-sky-600 hover:text-sky-800 hover:underline sm:hidden"
          >
            To tools & guides top
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {USEFUL_TOOLS.map((card) => (
            <HorizontalFeatureCard key={card.title} card={card} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default SeahomeSearchAndTools;
