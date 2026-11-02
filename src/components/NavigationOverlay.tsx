import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TextRoll } from "./ui/text-roll";
import gradient21st from "../assets/gradient-21st.png";

export interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/about" },
  { id: "services", label: "Services", to: "/services" },
  { id: "contact", label: "Contact", to: "/contact" },
];

/**
 * NavigationOverlay
 *
 * Immersive full-screen navigation overlay for Oprism:
 * - Powered by gradient-21st.png with frosted glass backdrop-blur
 * - Features the four primary routes: Home (/), About (/about), Services (/services), Contact (/contact)
 * - Uses exact 21st.dev Text Roll component for each navigation item
 * - Uniform deep navy color (#0B1F3B) for all items in active, inactive, and hovered states
 * - Staggered entrance animation when opening
 * - Automatically closes upon route selection
 * - Accessible: Escape key handler, background scroll lock, ARIA modal attributes
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="nav-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-40 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 overflow-y-auto"
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
          {/* Frosted glass overlay for high text contrast */}
          <div
            className="absolute inset-0 bg-white/60 backdrop-blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Main Navigation List */}
          <nav className="relative z-10 flex flex-col justify-center max-w-4xl mx-auto w-full">
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
                  <NavLink
                    to={item.to}
                    onClick={onClose}
                    className="inline-block text-[#0B1F3B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F3B] rounded-lg"
                  >
                    <TextRoll
                      className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0B1F3B]"
                    >
                      {item.label}
                    </TextRoll>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavigationOverlay;
