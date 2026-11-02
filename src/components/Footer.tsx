import React from "react";
import prismImg from "../assets/prism-crystal.png";

export function Footer() {
  return (
    <footer className="border-t border-sky-200/50 bg-white/40 backdrop-blur-md py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={prismImg}
              alt="Oprism"
              className="w-8 h-8 object-contain drop-shadow-sm"
            />
            <div className="flex items-center">
              <span
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
                className="font-bold text-xl tracking-tight text-[#323192]"
              >
                OPRISM
              </span>
              
            </div>
            <span className="text-xs text-slate-500 font-mono ml-2 border-l border-sky-300 pl-3">
              Architectural Minerals & Surfaces
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-700">
            <a href="#collection" className="hover:text-[#323192] transition-colors">
              Product Collection
            </a>
            <a href="#services-occasions" className="hover:text-[#323192] transition-colors">
              Services & Occasions
            </a>
            <a href="#about" className="hover:text-[#323192] transition-colors">
              About Oprism
            </a>
            <a href="#enquiry" className="hover:text-[#323192] transition-colors">
              Enquiry & Contact
            </a>
            <a href="#" className="hover:text-[#323192] transition-colors">
              Slab Catalog (PDF)
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-sky-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Oprism Minerals & Engineered Surfaces. All rights reserved.
          </div>
          <div className="text-slate-500 text-[11px] font-mono">
            Elegance crafted with gradient-21st &bull; Motion 21st.dev
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
