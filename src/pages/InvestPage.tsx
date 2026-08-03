import { Play } from 'lucide-react';
import { BarChart3, ShieldCheck, Building2, Lock, Globe, Headphones, ArrowRight } from 'lucide-react';
import { INVESTMENT_OPPORTUNITIES, AGENCIES, TRUST_FEATURES_DATA, MARKET_CHART_DATA, HARU_STEPS_DATA, INVESTOR_RESOURCES_DATA, CTA_STATS_DATA } from '../config/investData';

export function InvestPage() {

    return (
        <div className="w-full bg-[#FAFCFF] text-slate-800 antialiased selection:bg-blue-600 selection:text-white">

            {/* SECTION 1: HERO CONTAINER - Full width on desktop, padded on mobile */}
            <section className="relative w-full bg-[#FAFCFF] pt-4 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-0 2xl:px-8 overflow-hidden">
                <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto lg:max-w-none lg:mx-0 2xl:mx-auto lg:px-8 2xl:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

                    {/* Left Column: Text & Left CTA blocks */}
                    <div className="lg:col-span-4 space-y-6 z-10">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15]">
                                Invest Global.<br />
                                <span className="text-[#0066FF]">Grow Confidently.</span>
                            </h1>
                            <p className="text-slate-500 text-[13.5px] font-medium leading-relaxed max-w-[420px]">
                                SeaHome Net connects you with verified opportunities, trusted agencies, and the insights you need to build wealth through real estate worldwide.
                            </p>
                        </div>

                        {/* Action Callout Button Strip */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                            <button className="bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-[13px] px-5 py-3 rounded-xl transition-colors shadow-xs cursor-pointer text-center">
                                Explore Investment Opportunities
                            </button>
                            <button className="border border-slate-300 text-[#0066FF] bg-white hover:bg-slate-150 font-bold text-[13px] px-5 py-3 rounded-xl transition-colors shadow-xs cursor-pointer text-center">
                                How It Works
                            </button>
                        </div>

                        {/* Core Feature Badge Elements with Lucide Icons */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-6 border-t border-slate-300/80 text-[11.5px] font-bold text-slate-600">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                                    <ShieldCheck size={14} />
                                </div>
                                <div>
                                    <p className="leading-tight text-slate-400 font-medium">Verified</p>
                                    <p className="leading-tight text-slate-700">Properties</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                                    <Building2 size={13} />
                                </div>
                                <div>
                                    <p className="leading-tight text-slate-400 font-medium">Trusted</p>
                                    <p className="leading-tight text-slate-700">Agencies</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                                    <Lock size={13} />
                                </div>
                                <div>
                                    <p className="leading-tight text-slate-400 font-medium">Secure</p>
                                    <p className="leading-tight text-slate-700">Transactions</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                                    <Globe size={13} />
                                </div>
                                <div>
                                    <p className="leading-tight text-slate-400 font-medium">Global</p>
                                    <p className="leading-tight text-slate-700">Support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: World Connectivity Map & Character Assist Cards */}
                    <div className="lg:col-span-8 relative flex flex-col md:flex-row lg:flex-col items-center justify-center lg:items-end lg:justify-end min-h-0 lg:min-h-[500px] gap-6 w-full mt-6 lg:mt-0">

                        {/* World Dot Grid Background Vector Image */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full lg:w-[80%] aspect-[1.4/1] pointer-events-none mix-blend-multiply opacity-40 lg:opacity-90 hidden sm:block">
                            <img src="Investmap.png" alt="Global Node Connectivity Map" className="w-full h-full object-contain" />

                            {/* Absolute Circular Node Overlay Frameworks over map paths */}
                            <div className="absolute top-[25%] left-[20%] w-10 h-10 md:w-15 md:h-15 rounded-full border-2 md:border-[3px] border-white shadow-md overflow-hidden bg-white">
                                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=120" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="absolute top-[25%] left-[65%] w-10 h-10 md:w-15 md:h-15 rounded-full border-2 md:border-[3px] border-white shadow-md overflow-hidden bg-white">
                                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=120" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="absolute top-[50%] left-[60%] w-12 h-12 md:w-17 md:h-17 rounded-full border-2 md:border-[3px] border-white shadow-md overflow-hidden bg-white">
                                <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=120" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="absolute bottom-[12%] left-[35%] w-12 h-12 md:w-18 md:h-18 rounded-full border-2 md:border-[3px] border-white shadow-md overflow-hidden bg-white">
                                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=120" className="w-full h-full object-cover" alt="" />
                            </div>
                        </div>

                        {/* Combined Side Character Panels stack aligned to the absolute right side */}
                        <div className="w-full sm:max-w-[340px] lg:w-[320px] flex flex-col gap-4 relative z-10">

                            {/* Top Card - Let Sora Guide You */}
                            <div className="bg-white border border-slate-300/80 shadow-md shadow-slate-500/10 lg:shadow-slate-500/50 rounded-2xl p-4 flex justify-between items-start gap-3">
                                <div className="space-y-1.5 text-[11px] leading-relaxed text-slate-500 font-medium">
                                    <h4 className="font-bold text-slate-900 text-[13px]">
                                        Let <span className="text-[#0066FF]">Sora</span> guide you.
                                    </h4>
                                    <p>I'll connect you with Haru, your personal investment manager, to handle everything on your behalf.</p>
                                </div>
                                <div className="w-24 h-24 sm:w-36 sm:h-36 shrink-0 bg-slate-150 rounded-xl overflow-hidden flex items-center justify-center">
                                    <img src="BlueBird&House.PNG" alt="Sora Character" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            {/* Middle Curved Context Connector Arrow Path Vector */}
                            <div className="absolute left-[35%] top-[100px] sm:top-[180px] w-6 h-8 pointer-events-none opacity-40 hidden sm:block">
                                <svg viewBox="0 0 24 32" fill="none" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="3 3" className="w-full h-full">
                                    <path d="M2,2 C12,2 22,12 22,30" strokeLinecap="round" />
                                    <path d="M18,26 L22,30 L26,26" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Bottom Card - Haru Assist Block */}
                            <div className="bg-[#FFFBF7] border border-orange-300/50 shadow-md shadow-orange-300/20 lg:shadow-orange-300/50 rounded-2xl p-4 flex justify-between items-end gap-2 sm:mt-4">
                                <div className="space-y-2 text-[10.5px] font-bold text-slate-600 w-full">
                                    <h4 className="text-[13px] font-extrabold text-slate-900">
                                        <span className="text-orange-500">Haru</span> will handle it for you.
                                    </h4>
                                    <div className="space-y-1 text-slate-500 font-medium">
                                        <p className="flex items-center gap-1.5"><span className="text-slate-400 font-bold text-[9px]">✓</span> Find the best opportunities</p>
                                        <p className="flex items-center gap-1.5"><span className="text-slate-400 font-bold text-[9px]">✓</span> Analyze & verify</p>
                                        <p className="flex items-center gap-1.5"><span className="text-slate-400 font-bold text-[9px]">✓</span> Manage & update you</p>
                                        <p className="flex items-center gap-1.5"><span className="text-slate-400 font-bold text-[9px]">✓</span> Support & grow together</p>
                                    </div>
                                </div>
                                <div className="w-24 h-24 sm:w-36 sm:h-36 shrink-0 overflow-hidden flex items-center justify-center">
                                    <img src="OrangeCat_investpage.PNG" alt="Haru Character" className="w-full h-full object-contain" />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* SECTION 2: WHY INVEST WITH SEAHOMENET */}
            <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 py-3 space-y-3">
                <div>
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        Why Invest with <span className="text-[#0066FF]">SeaHomeNet?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                    {/* Left Grid: 4 Feature Parameter Cards */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Card 1 */}
                        <div className="bg-white border border-slate-300 p-5 rounded-2xl shadow-xs flex flex-col justify-start space-y-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-50/70 flex items-center justify-center text-[#0066FF]">
                                <Globe size={18} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-slate-900 text-[13.5px]">Global Reach</h3>
                                <p className="text-[11.5px] text-slate-400 font-medium leading-relaxed">
                                    Access high-potential markets in 85+ countries.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-slate-300 p-5 rounded-2xl shadow-xs flex flex-col justify-start space-y-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-50/70 flex items-center justify-center text-[#0066FF]">
                                <ShieldCheck size={18} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-slate-900 text-[13.5px]">Vetted Opportunities</h3>
                                <p className="text-[11.5px] text-slate-400 font-medium leading-relaxed">
                                    Every property is strictly verified for your safety.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-slate-300 p-5 rounded-2xl shadow-xs flex flex-col justify-start space-y-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-50/70 flex items-center justify-center text-[#0066FF]">
                                <BarChart3 size={18} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-slate-900 text-[13.5px]">Data-Driven Insights</h3>
                                <p className="text-[11.5px] text-slate-400 font-medium leading-relaxed">
                                    Make smart decisions with market data & trends.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white border border-slate-300 p-5 rounded-2xl shadow-xs flex flex-col justify-start space-y-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-50/70 flex items-center justify-center text-[#0066FF]">
                                <Headphones size={18} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-slate-900 text-[13.5px]">End-to-End Support</h3>
                                <p className="text-[11.5px] text-slate-400 font-medium leading-relaxed">
                                    From selection to management, we're with you all the way.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Center Frame: Market Growth Dynamic Bar Chart */}
                    <div className="lg:col-span-4 bg-white border border-slate-300 p-5 rounded-2xl shadow-xs flex flex-col justify-between min-h-[260px]">
                        <div>
                            <h3 className="font-bold text-slate-900 text-[13.5px]">Global Real Estate Market Outlook</h3>
                            <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                                Strong growth projected in key markets over the next 5 years.
                            </p>
                        </div>
                        {/* Responsive Graph Workspace Container */}
                        <div className="flex items-end justify-between gap-3 pt-12 pb-1 h-36 border-b border-slate-300 px-2 relative">
                            {MARKET_CHART_DATA.map((item, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center gap-2 group relative h-full justify-end">

                                    {/* Visual Indicator Bar */}
                                    <div
                                        style={{ height: item.height }} /* E.g., '24%', '36%', etc. */
                                        className={`w-full transition-all duration-500 rounded-t-md relative flex justify-center ${item.projected
                                            ? 'bg-[#0066FF] opacity-100'
                                            : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                                            }`}
                                    >
                                        {item.projected && (
                                            <div className="absolute -top-8 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded-md shadow-xs flex items-center gap-1 whitespace-nowrap z-20">
                                                <span>+28.6% Projected Growth</span>
                                                <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-900 rotate-45"></div>
                                            </div>
                                        )}
                                    </div>

                                    <span className="text-[10px] font-bold text-slate-400/90 tracking-tight block mt-1 shrink-0">{item.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Frame: Region ROI Rankings List Wrapper */}
                    <div className="lg:col-span-3 bg-white border border-slate-300 p-5 rounded-2xl shadow-xs flex flex-col justify-between min-h-[260px]">
                        <div className="space-y-3.5">
                            <div>
                                <h3 className="font-bold text-slate-900 text-[13.5px]">Average ROI (2024)</h3>
                            </div>

                            {/* National Row Elements */}
                            <div className="space-y-2.5 text-[12px] font-semibold text-slate-600">
                                <div className="flex justify-between items-center py-0.5 border-b border-slate-300">
                                    <span className="flex items-center gap-1.5">🇯🇵 <span className="text-slate-700">Japan</span></span>
                                    <span className="font-black text-slate-900 text-[12.5px]">8.7%</span>
                                </div>
                                <div className="flex justify-between items-center py-0.5 border-b border-slate-300">
                                    <span className="flex items-center gap-1.5">🇱🇰 <span className="text-slate-700">Sri Lanka</span></span>
                                    <span className="font-black text-slate-900 text-[12.5px]">9.2%</span>
                                </div>
                                <div className="flex justify-between items-center py-0.5 border-b border-slate-300">
                                    <span className="flex items-center gap-1.5">🇦🇪 <span className="text-slate-700">UAE</span></span>
                                    <span className="font-black text-slate-900 text-[12.5px]">7.8%</span>
                                </div>
                                <div className="flex justify-between items-center py-0.5 border-b border-slate-300">
                                    <span className="flex items-center gap-1.5">🇺🇸 <span className="text-slate-700">USA</span></span>
                                    <span className="font-black text-slate-900 text-[12.5px]">6.9%</span>
                                </div>
                                <div className="flex justify-between items-center py-0.5">
                                    <span className="flex items-center gap-1.5">🇹🇭 <span className="text-slate-700">Thailand</span></span>
                                    <span className="font-black text-slate-900 text-[12.5px]">8.1%</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full text-center border border-slate-300 hover:border-slate-300 hover:bg-slate-150 text-[#0066FF] font-bold text-[11.5px] py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-4 shadow-2xs">
                            <span>View Market Reports</span>
                            <ArrowRight size={12} strokeWidth={2.5} />
                        </button>
                    </div>

                </div>
            </section>
            {/* SECTION 3: HOW IT WORKS */}
            <section className="max-w-8xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 py-10">
                <div className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xs relative overflow-hidden">

                    {/* Left Side Workflow Framework */}
                    <div className="flex-1 space-y-10 w-full">
                        <div>
                            <h2 className="text-xl font-black text-slate-900 tracking-tight">
                                How Investing with <span className="text-orange-500">Haru</span> Works
                            </h2>
                        </div>

                        {/* Stepper Row Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 relative">
                            {HARU_STEPS_DATA.map((step, idx) => {
                                const IconComponent = step.icon;

                                return (
                                    <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 relative group">

                                        {/* Horizontal dotted connector trace line */}
                                        {idx < HARU_STEPS_DATA.length - 1 && (
                                            <div className="hidden sm:block absolute top-7 left-14 right-[-24px] h-[1px] border-t border-dashed border-slate-500 pointer-events-none z-0" />
                                        )}

                                        {/* Concentric Step Icon Stacked Circles */}
                                        <div className="relative w-14 h-14 rounded-full bg-blue-50/40 flex items-center justify-center border border-blue-400/40 shrink-0 z-10">
                                            <span className="absolute -top-1 -left-1 bg-white border border-slate-400 shadow-2xs text-[#0066FF] text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                                                {step.num}
                                            </span>
                                            {IconComponent && <IconComponent size={21} className="text-[#0066FF]" />}
                                        </div>

                                        {/* Typography metadata card descriptors */}
                                        <div className="space-y-1 max-w-[160px] sm:max-w-none mx-auto sm:mx-0">
                                            <h4 className="text-[12.5px] font-bold text-slate-900 tracking-tight leading-snug">
                                                {step.hasOrangeTitle ? (
                                                    <>
                                                        <span className="text-orange-500 font-extrabold">Haru</span> {step.title}
                                                    </>
                                                ) : (
                                                    step.title
                                                )}
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side Workflow Mascot Frame */}
                    <div className="shrink-0 flex items-center justify-center lg:justify-end mt-4 lg:mt-0 z-10">
                        <div className="w-50 h-50 md:w-50 md:h-50 overflow-hidden rounded-2xl flex items-center justify-center">
                            <img
                                src="OrangeCat_Compass.PNG"
                                alt="Haru Workflow Companion Avatar"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 4: GLOBAL OPPORTUNITIES */}
            <section className="max-w-7xl mx-auto px-8 py-12 space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Global Investment Opportunities</h2>
                    </div>
                    <button className="text-xs font-bold text-[#0066FF] hover:underline cursor-pointer">View All Opportunities →</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                    {INVESTMENT_OPPORTUNITIES.map((opp) => (
                        <div key={opp.id} className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all group">
                            <div className="h-40 bg-slate-300 relative overflow-hidden">
                                <img src={opp.image} alt={opp.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-4 text-white space-y-0.5">
                                    <div className="flex items-center gap-1.5 font-bold text-sm">
                                        <span>{opp.flag}</span>
                                        <span>{opp.country}</span>
                                    </div>
                                    <p className="text-[11px] text-slate-300 font-medium">{opp.propertiesCount} Properties</p>
                                </div>
                            </div>
                            <div className="p-4 bg-white">
                                <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-500">
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Avg ROI</span>
                                        <span className="text-emerald-500 font-extrabold text-[13px]">{opp.avgRoi}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Starting from</span>
                                        <span className="text-slate-900 font-extrabold text-[12px]">{opp.startingPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 5: TRUSTED AGENCIES */}
            <section className="max-w-7xl mx-auto px-8 py-12 space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Connect with Trusted Agencies Worldwide</h2>
                    </div>
                    <button className="text-xs font-bold text-[#0066FF] hover:underline cursor-pointer">View All Agencies →</button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {AGENCIES.map((agency) => (
                        <div key={agency.id} className="bg-white border border-slate-300 rounded-2xl p-4 flex flex-col justify-between text-center space-y-4 shadow-xs hover:shadow-md transition-all">
                            <div className="h-12 w-full flex items-center justify-center font-bold text-xs uppercase bg-slate-50 border border-slate-300 rounded-xl px-2 text-slate-700">
                                {agency.logoText}
                            </div>
                            <div className="space-y-1 text-[12px]">
                                <p className="font-extrabold text-slate-900 flex items-center justify-center gap-1">
                                    <span>{agency.flag}</span> {agency.name}
                                </p>
                                <p className="text-slate-400 text-[11px]">⭐ {agency.rating} • {agency.propertiesCount} Properties</p>
                            </div>
                            <button className="w-full bg-blue-50 hover:bg-[#0066FF] text-[#0066FF] hover:text-white font-bold text-[12px] py-2 rounded-xl transition-all cursor-pointer">
                                Connect
                            </button>
                        </div>
                    ))}
                </div>

                {/* Value Assurances Row */}
                <div className="bg-blue-50/40 border border-blue-300 rounded-xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-[11px] font-bold text-[#0066FF] tracking-wide">
                    <span>✓ Verified & Licensed Agencies</span>
                    <span>✓ Transparent Communication</span>
                    <span>✓ Local Market Expertise</span>
                    <span>✓ Multi-language Support</span>
                </div>
            </section>

            {/* SECTION 6: RESOURCES */}
            <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 py-6 space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-black text-[#0B1B3D] tracking-tight">
                            Investor Resources Center
                        </h2>
                    </div>
                    <button className="text-[11px] font-bold text-slate-500 hover:text-slate-800 border border-slate-300/80 px-4 py-2 rounded-xl transition-all cursor-pointer bg-white shadow-3xs">
                        Explore All Resources &rarr;
                    </button>
                </div>

                {/* 5-Column Grid Matrix Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {INVESTOR_RESOURCES_DATA.map((item, i) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white border border-slate-300/70 p-5 rounded-2xl flex flex-col justify-between hover:shadow-sm transition-all cursor-pointer group min-h-[160px]"
                            >
                                <div className="space-y-4">
                                    {/* Icon Wrapper Circle */}
                                    <div className="w-11 h-11 rounded-xl bg-blue-50/40 flex items-center justify-center text-[#0066FF] border border-blue-100/20 shrink-0">
                                        <IconComponent size={20} strokeWidth={1.8} />
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-900 text-[13px] tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-[11px] text-slate-400 font-medium leading-normal line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                <span className="text-[#0066FF] font-bold text-[11px] tracking-tight mt-4 inline-flex items-center gap-1 group-hover:underline">
                                    {item.actionText} &rarr;
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 7: CTA RECRUITMENT BANNER */}
            <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 2xl:px-10 py-4">
                <div className="bg-white border border-slate-300 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-3xs">

                    {/* Left Side Copywriting Elements */}
                    <div className="lg:max-w-[32%] space-y-4 text-center lg:text-left z-10">
                        <h3 className="text-2xl font-black tracking-tight text-[#0B1B3D] leading-tight">
                            Ready to Start Your<br className="hidden lg:block" /> Investment Journey?
                        </h3>
                        <p className="text-[12px] text-slate-400 font-medium leading-relaxed">
                            Let Haru handle the hard work while you enjoy the growth.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                            <button className="bg-[#0066FF] hover:bg-blue-600 text-white font-extrabold text-[12.5px] px-6 py-3 rounded-xl shadow-xs shadow-blue-500/20 transition-colors w-full sm:w-auto cursor-pointer">
                                Start Investing Now
                            </button>
                            <button className="text-slate-500 font-bold text-[12px] flex items-center justify-center gap-1.5 hover:text-slate-800 transition-colors py-2 cursor-pointer group">
                                <span className="w-6 h-6 rounded-full bg-blue-50/50 flex items-center justify-center border border-blue-100/30 text-[#0066FF] group-hover:scale-105 transition-transform">
                                    <Play size={10} fill="currentColor" className="ml-0.5" />
                                </span>
                                Watch How It Works
                            </button>
                        </div>
                    </div>

                    {/* Center Mascot & Floating Infrastructure Canvas Panel */}
                    <div className="flex-1 min-h-[100px] relative w-full flex items-end justify-center lg:justify-start lg:pl-4">
                        <div className="relative w-70 h-70 max-w-full flex items-end justify-center">
                            <img
                                src="OrangeCatWithCity.PNG"
                                alt="Haru Assistant Close Frame"
                                className="w-full h-full object-contain z-10 select-none transform translate-y-1"
                            />
                        </div>
                    </div>

                    {/* Right Side Statistics Matrix Container Grid Frame */}
                    <div className="bg-[#FFFBF5] border border-orange-100/40 rounded-2xl p-6 md:p-8 w-full lg:w-[48%] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center z-10 relative">
                        {CTA_STATS_DATA.map((stat, idx) => {
                            const StatIcon = stat.icon;
                            return (
                                <div key={idx} className="space-y-1.5 flex flex-col items-center relative justify-center">

                                    {/* Custom circular frame icons using crisp Lucide vectors */}
                                    <div className="w-9 h-9 rounded-full bg-white border border-orange-100/50 shadow-3xs flex items-center justify-center text-[#0066FF] mb-1">
                                        <StatIcon size={16} strokeWidth={2} />
                                    </div>

                                    <span className="text-base font-black text-[#0066FF] block tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-400 tracking-tight block max-w-[85px] leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* SECTION 8: TRUST SECURITY COMPLIANCE FOOTER */}
            <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto mt-[10px] px-5 2xl:px-10 py-5">
                {/* Container Box: Uses dark royal midnight blue background with deep padding */}
                <div className="bg-[#001E4E] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden text-white shadow-xs">

                    {/* Left Side Content Workspace Frame */}
                    <div className="flex-1 space-y-6 w-full">
                        {/* Main Card Header Title */}
                        <div>
                            <h3 className="text-lg font-black tracking-tight text-white">
                                Your Trust is Our Top Priority
                            </h3>
                        </div>

                        {/* Features Grid Matrix (4-Column Layout Flow) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {TRUST_FEATURES_DATA.map((feature, idx) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={idx} className="flex items-start gap-3 group">

                                        {/* Glassmorphic Rounded Icon Frame Square */}
                                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center text-white/90 border border-white/5 shrink-0 transition-colors group-hover:bg-white/15">
                                            <IconComponent size={18} strokeWidth={2} />
                                        </div>

                                        {/* Feature Label Metadata Blocks */}
                                        <div className="space-y-0.5">
                                            <h4 className="text-[13px] font-black text-white/95 tracking-tight">
                                                {feature.title}
                                            </h4>
                                            <p className="text-[11px] text-slate-300/80 font-medium tracking-normal leading-tight whitespace-nowrap">
                                                {feature.desc}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side Bird Character Mascot Canvas Anchor */}
                    <div className="shrink-0 flex items-center justify-center md:justify-end mt-4 md:mt-0 relative z-10">
                        <div className="w-40 h-36 overflow-hidden flex items-end justify-center transform translate-y-2 translate-x-2">
                            <img
                                src="BlueBirdSmall.png"
                                alt="Sora Bottom Alignment Edge Anchor"
                                className="w-full h-full object-contain select-none"
                            />
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}