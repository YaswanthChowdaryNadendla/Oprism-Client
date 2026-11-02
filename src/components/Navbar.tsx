import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import prismImg from "../assets/prism-crystal.png";
import { OprismWordmark } from "./ui/oprism-wordmark";
import { MenuToggleIcon } from "./ui/menu-toggle";
import { NavigationOverlay } from "./NavigationOverlay";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "bg-white/80 backdrop-blur-md border-b border-sky-200/50 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Left Side: [Original Oprism Logo™] × The Signature of Purity */}
          <div className="flex items-center min-w-0">
            <Link
              to="/"
              onClick={() => {
                if (isMenuOpen) setIsMenuOpen(false);
              }}
              className="flex items-center group min-w-0"
              aria-label="Oprism Home - The Signature of Purity"
            >
              {/* 1. Original Oprism crystal + wordmark + ™ with unified 6-8px optical spacing */}
              <div className="flex items-center shrink-0">
                <img
                  src={prismImg}
                  alt="Oprism Crystal"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm group-hover:scale-105 transition-transform shrink-0"
                />
                <div className="relative flex items-center shrink-0 -ml-0.5 sm:-ml-1">
                  <div className="w-[82px] sm:w-[96px] md:w-[108px] h-auto flex items-center">
                    <OprismWordmark variant="fill" />
                  </div>
                  <span
                    className="text-[9px] sm:text-[10px] font-bold text-[#323192] self-start -mt-0.5 ml-0.5 select-none leading-none shrink-0"
                    aria-label="trademark"
                  >
                    ™
                  </span>
                </div>
              </div>

              {/* 2. A subtle multiplication symbol × vertically aligned to the optical center */}
              <span
                className="inline-block relative -translate-y-[1.5px] sm:-translate-y-[2px] text-slate-400 font-light text-xs sm:text-sm mx-1.5 sm:mx-2.5 select-none leading-none shrink-0"
                aria-hidden="true"
              >
                ×
              </span>

              {/* 3. Text: The Signature of Purity */}
              <span className="inline-block text-[10px] sm:text-xs md:text-sm font-medium tracking-normal text-slate-600 group-hover:text-slate-800 transition-colors truncate whitespace-nowrap">
                The Signature of Purity
              </span>
            </Link>
          </div>

          {/* Extreme Right: Animated Hamburger Menu Toggle (21st.dev by Efferd) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-2 sm:p-2.5 -mr-1 rounded-full text-[#323192] hover:bg-sky-100/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#323192] transition-colors cursor-pointer select-none"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <MenuToggleIcon
              open={isMenuOpen}
              className="w-6 h-6 sm:w-7 sm:h-7 stroke-[#323192]"
              strokeWidth={2.2}
              duration={450}
            />
          </button>
        </div>
      </header>

      {/* Immersive 21st.dev Text Roll Full-Screen Navigation Overlay */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
