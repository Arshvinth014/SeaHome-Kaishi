import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookMarked,
  CheckCircle2,
  Filter,
  HelpCircle,
  Search,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Rental Terms' | 'Land & Commercial' | 'Zoning & Construction' | 'Financial & Tax';
  definition: string;
  practicalTip: string;
  relatedTerms: string[];
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'security-deposit',
    term: 'Security Deposit',
    category: 'Rental Terms',
    definition:
      'A refundable sum of money paid upfront to the property owner upon signing a lease agreement to cover potential property damage, unpaid rent, or restoration costs upon moving out.',
    practicalTip:
      'Inspect and document property conditions thoroughly at move-in to ensure a smooth and full deposit refund when ending the lease.',
    relatedTerms: ['Key Money', 'Management Fee', 'Guarantor Company'],
  },
  {
    id: 'key-money',
    term: 'Key Money',
    category: 'Rental Terms',
    definition:
      'A non-refundable monetary gratitude fee paid to the landlord at contract signing. Unlike the security deposit, key money is not returned at move-out.',
    practicalTip:
      'Look for Zero Key Money promotional listings on SeaHome to significantly reduce your initial move-in costs.',
    relatedTerms: ['Security Deposit', 'Initial Move-In Costs'],
  },
  {
    id: 'land-lease-rights',
    term: 'Land Lease Rights',
    category: 'Land & Commercial',
    definition:
      'The legal entitlement of a lessee to construct, maintain, or operate structures on land owned by another party for a contractually agreed duration.',
    practicalTip:
      'Verify whether the lease is a Standard Renewable Leasehold or a Fixed-Term Leasehold before investing in permanent building structures.',
    relatedTerms: ['Surface Rights', 'Fixed-Term Lease', 'Vacant Land Plot'],
  },
  {
    id: 'surface-rights',
    term: 'Surface Rights',
    category: 'Land & Commercial',
    definition:
      'A transferable real estate property right granting permission to utilize the surface of another owner land for building construction, utility installations, or outdoor storage.',
    practicalTip:
      'Surface rights are commonly utilized for commercial material storage yards, industrial equipment staging, and solar power facilities.',
    relatedTerms: ['Land Lease Rights', 'Miscellaneous Land'],
  },
  {
    id: 'building-coverage-ratio',
    term: 'Building Coverage Ratio',
    category: 'Zoning & Construction',
    definition:
      'The maximum percentage of total land plot area that can be covered by the ground-level footprint of a building structure.',
    practicalTip:
      'On a 1,000 m² plot with a 60% coverage ratio, the maximum allowable building footprint is 600 m².',
    relatedTerms: ['Floor Area Ratio', 'Zoning District'],
  },
  {
    id: 'floor-area-ratio',
    term: 'Floor Area Ratio',
    category: 'Zoning & Construction',
    definition:
      'The ratio of a building total combined indoor floor space across all stories relative to the total area of the land lot.',
    practicalTip:
      'High-density commercial zones feature floor area ratios of 300% to 500%, permitting multi-story commercial developments.',
    relatedTerms: ['Building Coverage Ratio', 'Zoning District'],
  },
  {
    id: 'tsubo-unit',
    term: 'Tsubo Unit',
    category: 'Land & Commercial',
    definition:
      'A traditional real estate area measurement unit equal to approximately 3.3057 square meters (or roughly 35.58 square feet).',
    practicalTip:
      'To convert square meters to tsubo, multiply the m² value by 0.3025. For example, 100 m² is approximately 30.25 tsubo.',
    relatedTerms: ['Land Footprint Area', 'Price Per Tsubo'],
  },
  {
    id: 'commercial-land-lease',
    term: 'Commercial Land Lease',
    category: 'Land & Commercial',
    definition:
      'A specialized contractual agreement for renting vacant land plots for business operations, retail storefronts, contractor yards, or logistics hubs.',
    practicalTip:
      'Commercial land leases offer long-term stability with contract durations ranging from 5 to 20 years.',
    relatedTerms: ['Fixed-Term Lease', 'Miscellaneous Land'],
  },
  {
    id: 'zoning-district',
    term: 'Zoning District',
    category: 'Zoning & Construction',
    definition:
      'Municipal land-use designations establishing legal boundaries for allowed commercial activities, building height limits, noise levels, and environmental rules.',
    practicalTip:
      'Ensure your business activity (such as heavy truck staging or retail dining) aligns with municipal zoning classifications like Quasi-Industrial or Commercial.',
    relatedTerms: ['Building Coverage Ratio', 'Floor Area Ratio'],
  },
  {
    id: 'guarantor-company',
    term: 'Guarantor Company',
    category: 'Rental Terms',
    definition:
      'An institutional financial guarantee agency that co-signs the lease agreement to guarantee monthly rent payments on behalf of the tenant.',
    practicalTip:
      'Most corporate and international lease agreements utilize approved guarantor companies for seamless application approval.',
    relatedTerms: ['Security Deposit', 'Management Fee'],
  },
  {
    id: 'management-fee',
    term: 'Management Fee',
    category: 'Rental Terms',
    definition:
      'A recurring monthly charge collected alongside rent to cover shared area maintenance, security personnel, exterior lighting, and common utility upkeep.',
    practicalTip:
      'Always combine monthly rent and management fees when calculating your total monthly operating budget.',
    relatedTerms: ['Security Deposit', 'Guarantor Company'],
  },
  {
    id: 'miscellaneous-land',
    term: 'Miscellaneous Land',
    category: 'Land & Commercial',
    definition:
      'A land registry classification for plots not officially categorized as residential building land, farmland, or forest, making it highly versatile for commercial yards.',
    practicalTip:
      'Miscellaneous land offers lower rental rates, making it ideal for contractor equipment yards, vehicle fleets, and material depots.',
    relatedTerms: ['Vacant Land Plot', 'Surface Rights'],
  },
  {
    id: 'fixed-term-lease',
    term: 'Fixed-Term Lease',
    category: 'Land & Commercial',
    definition:
      'A non-renewable land or building lease contract that automatically concludes upon reaching the designated expiration date without automatic renewal.',
    practicalTip:
      'Fixed-term leases are advantageous for temporary projects, pop-up commercial venues, and short-term logistics operations.',
    relatedTerms: ['Commercial Land Lease', 'Land Lease Rights'],
  },
  {
    id: 'property-tax',
    term: 'Property Tax',
    category: 'Financial & Tax',
    definition:
      'An annual municipal tax levied on registered owners of real estate assets based on official assessed valuation figures for land and buildings.',
    practicalTip:
      'In commercial land lease contracts, verify whether property taxes are covered by the landowner or shared under lease terms.',
    relatedTerms: ['Land Lease Rights', 'Commercial Land Lease'],
  },
  {
    id: 'vacant-land-plot',
    term: 'Vacant Land Plot',
    category: 'Land & Commercial',
    definition:
      'Unoccupied land free of existing permanent building structures, ready for immediate handover, layout fencing, parking setup, or construction.',
    practicalTip:
      'Vacant plots allow rapid move-in schedules and complete flexibility in site layout planning.',
    relatedTerms: ['Miscellaneous Land', 'Commercial Land Lease'],
  },
];

const CATEGORIES = ['All Categories', 'Rental Terms', 'Land & Commercial', 'Zoning & Construction', 'Financial & Tax'] as const;

export const SeahomeRealEstateGlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((t) => {
      const matchesCategory = selectedCategory === 'All Categories' || t.category === selectedCategory;
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        t.term.toLowerCase().includes(query) ||
        t.definition.toLowerCase().includes(query) ||
        t.practicalTip.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

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
          <span className="text-sky-700 font-bold">Real Estate Glossary</span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-sky-950 to-indigo-950 py-8 sm:py-12 text-white shadow-md">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center pointer-events-none" />
        <div className={`relative z-10 text-center ${HUB_CONTAINER}`}>
          <span className="inline-block rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-300 ring-1 ring-sky-400/40 shadow-inner">
            SeaHome Knowledge & Terminology Center
          </span>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl text-white drop-shadow-xs">
            SeaHome Real Estate Glossary
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-sky-100/90 sm:text-sm font-medium leading-relaxed">
            Look up legal real estate terms, land lease rules, zoning ratios, and rental concepts in clear English.
          </p>

          {/* Interactive Search Bar in Hero */}
          <div className="mx-auto mt-6 max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-sky-400" />
              <input
                type="text"
                placeholder="Search real estate terms (e.g. Deposit, Key Money, Zoning, Tsubo)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-sky-300/40 bg-white/10 pl-12 pr-4 py-3.5 text-sm font-semibold text-white placeholder-sky-200/70 backdrop-blur-md outline-none focus:bg-white/20 focus:ring-2 focus:ring-sky-400 shadow-lg"
              />
              {searchTerm ? (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 text-xs font-bold text-sky-200 hover:text-white"
                >
                  Clear
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* Main Glossary Section */}
      <div className={`mt-8 space-y-8 ${HUB_CONTAINER}`}>
        {/* Category Filter Pills */}
        <section aria-label="Category Filter">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-100 pb-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-sky-600" />
              <h2 className="text-sm font-extrabold text-sky-950 sm:text-base">Filter by Category:</h2>
            </div>
            <p className="text-xs font-bold text-slate-500">
              Showing <span className="text-sky-800 font-extrabold">{filteredTerms.length}</span> of {GLOSSARY_TERMS.length} terms
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-extrabold transition-all duration-200 cursor-pointer ${selectedCategory === cat
                  ? 'bg-gradient-to-r from-sky-600 to-indigo-800 text-white shadow-sm ring-1 ring-sky-400/50 scale-105'
                  : 'bg-white text-sky-900 border border-sky-100 hover:border-sky-300 hover:bg-sky-50/80 shadow-2xs'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Quick Popular Term Badges */}
        <section className="rounded-2xl border border-sky-100 bg-white p-4 shadow-2xs sm:p-5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-sky-700 mb-2.5 flex items-center gap-1.5">
            Frequently Searched Terms
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Security Deposit',
              'Key Money',
              'Land Lease Rights',
              'Surface Rights',
              'Building Coverage Ratio',
              'Floor Area Ratio',
              'Tsubo Unit',
              'Guarantor Company',
            ].map((termName) => (
              <button
                key={termName}
                type="button"
                onClick={() => setSearchTerm(termName)}
                className="rounded-lg bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-900 border border-sky-200/70 transition hover:bg-sky-600 hover:text-white hover:border-sky-600 cursor-pointer"
              >
                {termName}
              </button>
            ))}
          </div>
        </section>

        {/* Glossary Terms Cards Grid */}
        <section aria-label="Glossary List">
          {filteredTerms.length === 0 ? (
            <div className="rounded-2xl border border-sky-100 bg-white p-8 text-center shadow-xs">
              <HelpCircle className="mx-auto h-10 w-10 text-sky-400" />
              <h3 className="mt-2 text-base font-extrabold text-slate-800">No terms match your search</h3>
              <p className="mt-1 text-xs text-slate-600 font-medium">
                Try searching for another keyword like "Deposit", "Zoning", or "Lease".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Categories');
                }}
                className="mt-4 rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-sky-700"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTerms.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-sky-100/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-sky-50 px-2.5 py-0.5 text-[10px] font-extrabold text-sky-800 border border-sky-200/60">
                        {item.category}
                      </span>
                      <BookMarked className="h-4 w-4 text-sky-400 group-hover:text-sky-600 transition-colors" />
                    </div>

                    <h3 className="mt-3 text-lg font-extrabold text-sky-950 group-hover:text-sky-700 transition-colors">
                      {item.term}
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-700">
                      {item.definition}
                    </p>

                    <div className="mt-3.5 rounded-xl border border-sky-100 bg-gradient-to-r from-sky-50/80 to-sky-100/40 p-3 text-xs">
                      <p className="font-extrabold text-sky-950 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                        Practical Advice:
                      </p>
                      <p className="mt-1 text-[11px] font-medium leading-relaxed text-slate-700">
                        {item.practicalTip}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sky-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Related Terms:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.relatedTerms.map((rel) => (
                        <button
                          key={rel}
                          type="button"
                          onClick={() => setSearchTerm(rel)}
                          className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 hover:bg-sky-100 hover:text-sky-900 cursor-pointer"
                        >
                          {rel}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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

export default SeahomeRealEstateGlossaryPage;
