import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import prismImg from "../assets/prism-crystal.png";
import { OprismWordmark } from "./ui/oprism-wordmark";

/**
 * Official WhatsApp Icon (Lucide/Material compatible vector)
 */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Official Instagram Icon (Lucide-compatible stroke vector)
 */
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#070d24] text-white overflow-hidden border-t border-sky-400/15">
      {/* ─── Subtle Aqua-Blue Water-Wave Curves in Background ─── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-15"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 C320,260 480,60 760,170 C1040,280 1200,80 1440,140 L1440,320 L0,320 Z"
            fill="url(#footer-wave-grad-1)"
          />
          <path
            d="M0,90 C360,190 560,30 920,130 C1280,230 1340,90 1440,150 L1440,320 L0,320 Z"
            fill="url(#footer-wave-grad-2)"
          />
          <defs>
            <linearGradient id="footer-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="footer-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16">
        {/* ─── Three-Column Layout ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 items-start">
          {/* ─── 1. Left Column: Brand Identity ─── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              to="/"
              className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-start group min-w-0"
              aria-label="Oprism Home - The Signature of Purity"
            >
              {/* Logo: Original Oprism crystal + exact wordmark + ™ */}
              <div className="flex items-center shrink-0">
                <img
                  src={prismImg}
                  alt="Oprism Crystal"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm group-hover:scale-105 transition-transform shrink-0"
                />
                <div className="relative flex items-center shrink-0 -ml-0.5 sm:-ml-1">
                  <div className="w-[88px] sm:w-[98px] md:w-[108px] h-auto flex items-center">
                    <OprismWordmark color="#ffffff" />
                  </div>
                  <span
                    className="text-[9px] sm:text-[10px] font-bold text-sky-300 self-start -mt-0.5 ml-0.5 select-none leading-none shrink-0"
                    aria-label="trademark"
                  >
                    ™
                  </span>
                </div>
              </div>

              {/* Tagline separator × */}
              <span
                className="inline-block relative -translate-y-[1.5px] sm:-translate-y-[2px] text-sky-400/70 font-light text-xs sm:text-sm mx-1.5 sm:mx-2.5 select-none leading-none shrink-0"
                aria-hidden="true"
              >
                ×
              </span>

              {/* Tagline: The Signature of Purity */}
              <span className="inline-block text-[11px] sm:text-xs md:text-sm font-medium tracking-normal text-sky-100/90 group-hover:text-white transition-colors truncate whitespace-nowrap">
                The Signature of Purity
              </span>
            </Link>
          </div>

          {/* ─── 2. Middle Column: Navigation ─── */}
          <div className="flex flex-col items-center text-center">
            <nav
              aria-label="Footer Navigation"
              className="flex flex-col items-center space-y-3 sm:space-y-3.5 text-sm font-medium"
            >
              <Link
                to="/"
                className="text-sky-100/85 hover:text-sky-300 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sky-100/85 hover:text-sky-300 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-sky-100/85 hover:text-sky-300 transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-sky-100/85 hover:text-sky-300 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* ─── 3. Right Column: Get in Touch ─── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:pl-6 lg:pl-10">
            <h3
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 tracking-tight"
            >
              Get in Touch
            </h3>

            {/* Contact Details */}
            <div className="space-y-2 text-sm text-sky-100/85">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="tel:+918500788506"
                  className="hover:text-white transition-colors"
                >
                  +91 8500788506
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:oprismwater@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  oprismwater@gmail.com
                </a>
              </div>
            </div>

            {/* Social & Contact Icon Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4 sm:mt-5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918500788506?text=Hi%20Oprism!%20I%20am%20planning%20for%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp (+91 8500788506)"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-sky-400/20 text-sky-200 hover:text-sky-300 border border-sky-400/20 hover:border-sky-300/40 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/oprism.water/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Oprism on Instagram"
                title="Follow Oprism on Instagram"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-sky-400/20 text-sky-200 hover:text-sky-300 border border-sky-400/20 hover:border-sky-300/40 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <InstagramIcon className="w-5 h-5 stroke-current" />
              </a>
            </div>
          </div>
        </div>

        {/* ─── 4. Copyright & Bottom Divider ─── */}
        <div className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-sky-400/15 text-center">
          <p className="text-xs text-sky-200/60 font-normal">
            &copy; 2026 Oprism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
