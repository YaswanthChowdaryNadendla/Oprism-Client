import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Menu, X } from "lucide-react";

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
          ? "bg-[#020617]/80 backdrop-blur-md border-b border-sky-950/40 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-sky-500/10 border border-sky-400/20 group-hover:border-sky-400/40 transition-colors">
            <svg viewBox="0 0 100 100" className="w-5 h-5 fill-none">
              <polygon points="50,14 84,34 50,54 16,34" fill="#38bdf8" />
              <polygon points="16,34 50,54 50,88 16,68" fill="#0284c7" opacity="0.8" />
              <polygon points="84,34 50,54 50,88 84,68" fill="#60a5fa" opacity="0.7" />
            </svg>
          </div>
          <span className="font-['Unbounded'] font-black text-lg tracking-tight text-white group-hover:text-sky-300 transition-colors">
            OPRISM
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-sky-400 transition-colors">
            Features
          </a>
          <a href="#routing" className="hover:text-sky-400 transition-colors">
            Smart Routing
          </a>
          <a href="#code" className="hover:text-sky-400 transition-colors">
            API Quickstart
          </a>
          <a href="#pricing" className="hover:text-sky-400 transition-colors">
            Pricing
          </a>
          <a href="#docs" className="hover:text-sky-400 transition-colors">
            Documentation
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#code"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            Console
          </a>
          <a
            href="#get-started"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20 hover:from-sky-400 hover:to-blue-500 transition-all"
          >
            Get API Key
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020617]/95 border-b border-sky-950/40 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-300">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-sky-400 py-1"
          >
            Features
          </a>
          <a
            href="#routing"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-sky-400 py-1"
          >
            Smart Routing
          </a>
          <a
            href="#code"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-sky-400 py-1"
          >
            API Quickstart
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-sky-400 py-1"
          >
            Pricing
          </a>
          <a
            href="#get-started"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold"
          >
            Get API Key
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
