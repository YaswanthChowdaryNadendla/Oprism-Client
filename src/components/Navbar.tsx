import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import prismImg from "../assets/prism-crystal.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-sky-200/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
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
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#collection" className="hover:text-[#323192] transition-colors">
            Product Collection
          </a>
          <a href="#services-occasions" className="hover:text-[#323192] transition-colors">
            Services & Occasions
          </a>
          <a href="#about" className="hover:text-[#323192] transition-colors">
            About Us
          </a>
          <a href="#enquiry" className="hover:text-[#323192] transition-colors">
            Enquiry & Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#enquiry"
            className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full bg-[#323192] text-white shadow-md shadow-[#323192]/20 hover:bg-[#252478] hover:shadow-lg transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-200" />
            Request Consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-[#323192]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-sky-100 px-6 py-5 flex flex-col gap-4 text-sm font-semibold text-slate-700 shadow-xl">
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#323192] py-1"
          >
            Product Collection
          </a>
          <a
            href="#services-occasions"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#323192] py-1"
          >
            Services & Occasions
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#323192] py-1"
          >
            About Us
          </a>
          <a
            href="#enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#323192] py-1"
          >
            Enquiry & Contact
          </a>
          <a
            href="#enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#323192] text-white font-bold"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
