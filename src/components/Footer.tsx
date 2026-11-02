import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#020510] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-4 h-4 fill-none">
                <polygon points="50,14 84,34 50,54 16,34" fill="#38bdf8" />
                <polygon points="16,34 50,54 50,88 16,68" fill="#0284c7" opacity="0.8" />
                <polygon points="84,34 50,54 50,88 84,68" fill="#60a5fa" opacity="0.7" />
              </svg>
            </div>
            <span className="font-['Unbounded'] font-black text-sm tracking-tight text-white">
              OPRISM
            </span>
            <span className="text-xs text-slate-500 font-mono ml-2">
              Next-Gen AI Routing Fabric
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#features" className="hover:text-sky-300 transition-colors">
              Features
            </a>
            <a href="#routing" className="hover:text-sky-300 transition-colors">
              Smart Routing
            </a>
            <a href="#code" className="hover:text-sky-300 transition-colors">
              SDK & Docs
            </a>
            <a href="#" className="hover:text-sky-300 transition-colors">
              Status (99.99%)
            </a>
            <a href="#" className="hover:text-sky-300 transition-colors">
              Privacy & Security
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Oprism Technologies Inc. All rights reserved.
          </div>
          <div className="text-slate-500">
            Designed with crystal-blue precision &bull; Powered by Motion
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
