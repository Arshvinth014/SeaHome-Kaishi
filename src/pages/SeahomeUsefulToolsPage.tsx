import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookMarked,
  BookOpen,
  Calculator,
  ChevronRight,
  Compass,
  Home,
  KeyRound,
  Landmark,
  Layers,
  Truck,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';

export const SeahomeUsefulToolsPage: React.FC = () => {
  // Rent Affordability Calculator State
  const [monthlyIncome, setMonthlyIncome] = useState<number>(350000);
  // Mortgage Estimator State
  const [propertyPrice, setPropertyPrice] = useState<number>(45000000);
  const [downPayment, setDownPayment] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(1.2);
  const [loanYears, setLoanYears] = useState<number>(35);

  // Calculated Rent Budget (Max 30% of income)
  const maxRentBudget = Math.round(monthlyIncome * 0.3);
  const estInitialCosts = Math.round(maxRentBudget * 4.5); // ~4.5 months rent initial

  // Calculated Mortgage Payment
  const loanPrincipal = Math.max(0, propertyPrice - downPayment);
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = loanYears * 12;

  const monthlyMortgage =
    monthlyInterestRate > 0 && totalMonths > 0
      ? Math.round(
        (loanPrincipal *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths))) /
        (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
      )
      : 0;

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 pb-16 animate-fade-in-up">
      {/* Top Breadcrumb Navigation */}
      <nav className="border-b border-sky-100 bg-white/90 backdrop-blur-md py-2.5 shadow-2xs">
        <div className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold text-sky-900 ${HUB_CONTAINER}`}>
          <Link to="/seahome-real-estates" className="transition hover:text-sky-600">
            SeaHome
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/seahome-real-estates/rental-land" className="transition hover:text-sky-600">
            Rental Land
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sky-700 font-bold">Useful Information & Tools</span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-sky-950 to-indigo-950 py-8 sm:py-12 text-white shadow-md">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center pointer-events-none" />
        <div className={`relative z-10 text-center ${HUB_CONTAINER}`}>
          <span className="inline-block rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-300 ring-1 ring-sky-400/40 shadow-inner">
            SeaHome Real Estate Knowledge & Tools
          </span>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl text-white drop-shadow-xs">
            Useful Information & Tools for Housing in Japan
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-sky-100/90 sm:text-sm font-medium leading-relaxed">
            Your essential guide to renting, buying, land leasing, mortgage calculation, and moving smoothly across Japan — operated by SeaHome Real Estates.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className={`mt-8 space-y-10 ${HUB_CONTAINER}`}>
        {/* Category Jumps Section */}
        <section aria-label="Knowledge Categories">
          <div className="mb-4">
            <h2 className="text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
              <Compass className="h-5 w-5 text-sky-600" />
              Explore Housing Guides & Tools
            </h2>
            <div className="mt-1 h-0.5 w-20 rounded-full bg-sky-600" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {[
              {
                title: 'Rental Property Manual',
                desc: 'Step-by-step room search, deposit & key money rules, guarantor requirements.',
                icon: KeyRound,
                badge: 'For Renters',
              },
              {
                title: 'Land & Commercial Guide',
                desc: 'Zoning laws, floor ratio, surface rights, and commercial land leasing tips.',
                icon: Layers,
                badge: 'For Business',
              },
              {
                title: 'Home Buyer Manual',
                desc: 'Budget planning, resale condo inspection, custom houses vs mansions.',
                icon: Home,
                badge: 'For Buyers',
              },
              {
                title: 'Moving & Utility Planner',
                desc: 'Utility connection checklist, ward office registration, furniture setup.',
                icon: Truck,
                badge: 'Relocation',
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-sky-100 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 ring-1 ring-sky-200/70 shadow-2xs group-hover:scale-110 transition-transform">
                      <cat.icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-md bg-sky-50 px-2.5 py-0.5 text-[10px] font-extrabold text-sky-800 border border-sky-200/60">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-sky-950 group-hover:text-sky-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-sky-700 group-hover:text-sky-900">
                  Read guide <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Calculators Section (Blue Theme Widget) */}
        <section aria-label="Interactive Calculators" className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-sky-100 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
                <Calculator className="h-5 w-5 text-sky-600" />
                SeaHome Financial Calculators
              </h2>
              <p className="mt-1 text-xs text-slate-600 font-medium">
                Estimate monthly rent limits or calculate mortgage payments instantly with English guidance.
              </p>
            </div>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-extrabold text-sky-800 border border-sky-200">
              Free Financial Tools
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Rent Budget Calculator */}
            <div className="rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <KeyRound className="h-5 w-5 text-sky-700" />
                <h3 className="text-base font-extrabold text-sky-950">Rent Affordability Calculator</h3>
              </div>

              <div className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Monthly Gross Income: <span className="text-sky-800 font-extrabold text-sm">¥{monthlyIncome.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="150000"
                    max="1500000"
                    step="10000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-bold">
                    <span>¥150,000</span>
                    <span>¥750,000</span>
                    <span>¥1,500,000+</span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-sky-900 p-4 text-white shadow-xs">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-sky-300">Recommended Max Monthly Rent</p>
                  <p className="mt-1 text-2xl font-black text-white">¥{maxRentBudget.toLocaleString()} <span className="text-xs font-semibold text-sky-200">/ month (30% max)</span></p>
                  <div className="mt-2 border-t border-sky-800 pt-2 flex justify-between text-xs text-sky-100">
                    <span>Est. Move-In Costs (4.5x):</span>
                    <strong className="text-white">¥{estInitialCosts.toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <Landmark className="h-5 w-5 text-sky-700" />
                <h3 className="text-base font-extrabold text-sky-950">Mortgage Repayment Estimator</h3>
              </div>

              <div className="space-y-3 text-xs font-medium">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Property Price</label>
                    <input
                      type="number"
                      step="1000000"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2.5 py-1.5 font-bold text-sky-950 focus:border-sky-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Down Payment</label>
                    <input
                      type="number"
                      step="500000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2.5 py-1.5 font-bold text-sky-950 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Interest Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2.5 py-1.5 font-bold text-sky-950 focus:border-sky-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Loan Term (Years)</label>
                    <input
                      type="number"
                      value={loanYears}
                      onChange={(e) => setLoanYears(Number(e.target.value))}
                      className="w-full rounded-lg border border-sky-200 bg-white px-2.5 py-1.5 font-bold text-sky-950 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-indigo-950 p-4 text-white shadow-xs">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">Estimated Monthly Mortgage Payment</p>
                  <p className="mt-1 text-2xl font-black text-white">¥{monthlyMortgage.toLocaleString()} <span className="text-xs font-semibold text-indigo-200">/ month</span></p>
                  <div className="mt-2 border-t border-indigo-900 pt-2 flex justify-between text-xs text-indigo-100">
                    <span>Loan Principal:</span>
                    <strong className="text-white">¥{loanPrincipal.toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides & Knowledge Base */}
        <section aria-label="Featured Articles & Guides">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-sky-950 sm:text-xl flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-sky-600" />
                Featured Real Estate Articles & Guides
              </h2>
              <div className="mt-1 h-0.5 w-20 rounded-full bg-sky-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Complete Guide to Renting an Apartment in Japan',
                category: 'Rental Basics',
                readTime: '6 min read',
                imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
                snippet: 'Understand room layouts, key money, deposit refunds, and essential documents required by landlords in Japan.',
              },
              {
                title: 'Renting Commercial Land & Warehouses: Zoning Rules',
                category: 'Land & Business',
                readTime: '8 min read',
                imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
                snippet: 'Learn about Building Coverage Ratios, Floor Area Ratios, industrial zoning, and road frontage requirements.',
              },
              {
                title: 'Understanding Deposit (Shikikin) & Key Money (Reikin)',
                category: 'Initial Costs',
                readTime: '5 min read',
                imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
                snippet: 'Breakdown of typical upfront costs when signing a lease contract and how to negotiate lower key money fees.',
              },
              {
                title: 'How to Read Japanese Floor Plans (1K, 1DK, 2LDK)',
                category: 'Layout Guide',
                readTime: '4 min read',
                imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
                snippet: 'De-code Japanese room acronyms, jo (tatami mat sizes), storage spaces, and balcony orientations.',
              },
              {
                title: 'Step-by-Step Moving Checklist & Utility Setup',
                category: 'Relocation',
                readTime: '7 min read',
                imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
                snippet: 'Setting up electricity, gas, water, internet, and registering your change of address at city hall.',
              },
              {
                title: 'First-Time Buyer Guide: Resale Condos vs Houses',
                category: 'Buying & Investment',
                readTime: '9 min read',
                imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
                snippet: 'Pros and cons of purchasing second-hand tower mansions versus suburban single-family detached homes.',
              },
            ].map((art) => (
              <article
                key={art.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-sky-900/90 px-2.5 py-1 text-[10px] font-extrabold text-white backdrop-blur-xs">
                    {art.category}
                  </span>
                  <span className="absolute right-3 bottom-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white">
                    {art.readTime}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-extrabold leading-snug text-sky-950 group-hover:text-sky-700 transition-colors">
                      {art.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600 line-clamp-3">
                      {art.snippet}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-extrabold text-sky-700">
                    <span>Read Full Article</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Real Estate Glossary Quick Look Up */}
        <section aria-label="Real Estate Glossary" className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-900 via-sky-950 to-indigo-950 p-6 text-white shadow-md">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="inline-block rounded-md bg-sky-500/20 px-2.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-300 ring-1 ring-sky-400/40">
                SeaHome Property Glossary
              </span>
              <h2 className="mt-2 text-xl font-extrabold text-white">
                Japanese Real Estate Terminology Explained
              </h2>
              <p className="mt-1 text-xs text-sky-100/90 font-medium">
                Lookup common Japanese legal, rental, and land terms in simple English.
              </p>
            </div>
            <Link
              to="/seahome-real-estates/rental-land"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-extrabold text-sky-950 shadow-sm transition hover:bg-sky-50 active:scale-95"
            >
              <BookMarked className="h-4 w-4 text-sky-700" />
              Browse Glossary
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { term: 'Shikikin (敷金)', def: 'Security Deposit (Refundable)' },
              { term: 'Reikin (礼金)', def: 'Key Money (Gift to Landlord)' },
              { term: 'Chinto (賃料)', def: 'Monthly Rent Fee' },
              { term: 'Jigyo-yo Tochi', def: 'Commercial Leasehold Land' },
              { term: 'Kenpei-ritsu', def: 'Building Coverage Ratio (%)' },
              { term: 'Yoseki-ritsu', def: 'Floor Area Ratio (%)' },
              { term: 'Chimoku (地目)', def: 'Registered Land Category' },
              { term: 'Tsubo (坪)', def: 'Japanese Area Unit (~3.3 m²)' },
            ].map((item) => (
              <div key={item.term} className="rounded-xl border border-sky-800/80 bg-white/10 p-3 backdrop-blur-xs">
                <p className="text-xs font-extrabold text-sky-300">{item.term}</p>
                <p className="mt-1 text-[11px] font-semibold text-sky-100">{item.def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link
            to="/seahome-real-estates/rental-land"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-800 underline transition hover:text-sky-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rental Land Search Top
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeahomeUsefulToolsPage;
