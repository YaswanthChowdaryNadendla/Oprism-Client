import React from "react";
import { Link } from "react-router-dom";
import prismImg from "../assets/prism-crystal.png";

export function Footer() {
  return (
    <footer className="border-t border-sky-200/50 bg-white/40 backdrop-blur-md py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={prismImg}
              alt="Oprism"
              className="w-8 h-8 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
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
              Architectural Minerals &amp; Surfaces
            </span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-700">
            <Link to="/" className="hover:text-[#323192] transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#323192] transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-[#323192] transition-colors">
              Services
            </Link>
            <Link to="/contact" className="hover:text-[#323192] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-sky-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Oprism Minerals &amp; Engineered Surfaces. All rights reserved.
          </div>
          <div className="text-slate-500 text-[11px] font-mono">
            The Signature of Purity &bull; gradient-21st
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
