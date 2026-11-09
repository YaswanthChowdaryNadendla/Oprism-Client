import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * BackToTop Component
 * Floating circular button with upward arrow that fades and slides into view
 * after scrolling down 300px. Smoothly scrolls the page to top on click.
 * Positioned above any floating bottom-right actions (such as WhatsApp).
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Check scroll position and toggle visibility (>300px threshold)
  const checkScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY > 300);
    }
  }, []);

  useEffect(() => {
    // Initial check
    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  // Re-check visibility on route change
  useEffect(() => {
    // Give ScrollToTop a tick to reset scroll
    const timer = setTimeout(() => {
      checkScroll();
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname, checkScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="Back to top"
          title="Back to top"
          className="group fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-8 z-40 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#1b2352] via-[#224996] to-[#0284c7] text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-400/40 border border-sky-300/30 hover:border-sky-200/60 backdrop-blur-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          <ArrowUp className="w-5 h-5 text-sky-100 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
