import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextRoll } from "./ui/text-roll";
import prismImg from "../assets/prism-crystal.png";
import gradient21st from "../assets/gradient-21st.png";

export interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#" },
  { id: "collection", label: "Product Collection", href: "#collection" },
  { id: "services", label: "Services & Occasions", href: "#services-occasions" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "enquiry", label: "Enquiry & Contact", href: "#enquiry" },
];

/**
 * NavigationOverlay
 *
 * Immersive full-screen navigation overlay for Oprism:
 * - Powered by gradient-21st.png with backdrop-blur
 * - Clean, minimal display featuring solely the five large animated text links
 * - Uses exact 21st.dev Text Roll component for each navigation item
 * - Staggered entrance animation when opening
 * - Smooth-scrolls to page sections and closes on selection
 * - Accessible: Escape key handler, background scroll lock, ARIA labels
 */
export function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  // Prevent background scrolling while the overlay is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="nav-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-40 flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-24 pb-8 overflow-y-auto"
          style={{
            backgroundImage: `url(${gradient21st})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Subtle frosted glass overlay for high text contrast */}
          <div
            className="absolute inset-0 bg-white/60 backdrop-blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Main Navigation List */}
          <nav className="relative z-10 flex flex-col justify-center my-auto py-8 max-w-4xl mx-auto w-full">
            <ul className="flex flex-col gap-6 sm:gap-8 md:gap-10">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.12 + index * 0.07,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 12,
                    transition: { duration: 0.2 },
                  }}
                  className="group"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="inline-block text-slate-800 hover:text-[#323192] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#323192] rounded-lg"
                  >
                    <TextRoll
                      className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0f172a] group-hover:text-[#323192] transition-colors"
                    >
                      {item.label}
                    </TextRoll>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Brand Identity Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4 } }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-sky-300/40 text-xs text-slate-600 max-w-4xl mx-auto w-full"
          >
            <div className="flex items-center gap-2.5">
              <img src={prismImg} alt="Oprism" className="w-5 h-5 object-contain drop-shadow-sm" />
              <span className="font-bold text-[#323192] tracking-wide">OPRISM</span>
              <span className="text-slate-400">&bull;</span>
              <span className="text-slate-700 font-medium">The Signature of Purity</span>
            </div>
            <div className="text-slate-500 font-mono text-[11px]">
              Architectural Minerals &amp; Surfaces
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavigationOverlay;
