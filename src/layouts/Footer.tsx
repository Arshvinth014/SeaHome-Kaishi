export function Footer() {
  return (
    <footer className="w-full bg-[#030914] text-slate-400 text-xs border-t border-slate-900">
      {/*  Structured Link Columns Grid System */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

        {/* Identity Block Info Column */}
        <div className="space-y-4 col-span-1 sm:col-span-2 md:col-span-1">
          <div>
            <span className="text-lg font-black tracking-tight text-white block">
              Sea<span className="text-[#0090D8]">Home</span> Net
            </span>
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block mt-0.5">
              Global Brokerage Platform
            </span>
          </div>
          <p className="leading-relaxed text-slate-500 text-[11px] max-w-sm">
            A global real estate platform connecting investors, buyers, and trusted real estate agencies seamlessly across world markets.
          </p>
        </div>

        <div>
          <h5 className="text-white font-bold mb-3.5 text-[12px]">Quick Links</h5>
          <ul className="space-y-2.5 font-medium text-slate-500">
            <li><a href="#buy" className="hover:text-white transition-colors">Buy Properties</a></li>
            <li><a href="#invest" className="hover:text-white transition-colors">Invest Opportunities</a></li>
            <li><a href="#countries" className="hover:text-white transition-colors">Browse Countries</a></li>
            <li><a href="#agencies" className="hover:text-white transition-colors">Find Agencies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-3.5 text-[12px]">Resources</h5>
          <ul className="space-y-2.5 font-medium text-slate-500">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-3.5 text-[12px]">For Agencies</h5>
          <ul className="space-y-2.5 font-medium text-slate-500">
            <li><a href="#" className="hover:text-white transition-colors">List Your Agency</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Agency Dashboard</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partnership Program</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Agent Resources</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-3.5 text-[12px]">Contact Us</h5>
          <ul className="space-y-2 leading-relaxed text-[11px] text-slate-500 font-medium">
            <li className="flex items-center gap-1.5 text-slate-400 break-all">✉️ support@seahomenet.com</li>
            <li className="flex items-center gap-1.5 text-slate-400">📞 +1 234 567 8900</li>
            <li className="pt-1">📍 123 Ocean Drive, Suite 1000<br />Miami, FL 33139, USA</li>
          </ul>
        </div>

      </div>

      {/* 3. Lower Privacy Policy Distribution Strip */}
      <div className="border-t border-slate-900/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-slate-600 text-[10.5px] font-medium gap-3 text-center sm:text-left">
        <span>© 2026 SeaHomeNet. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
        </div>
      </div>

    </footer>
  );
}
