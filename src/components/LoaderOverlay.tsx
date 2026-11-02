import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionLoadingFillText } from "./ui/motion-loading-fill-text";
import prismImg from "../assets/prism-crystal.png";

export interface LoaderOverlayProps {
  onComplete: () => void;
  text?: string;
}

/**
 * LoaderOverlay
 *
 * Reproduces the exact composition, colors, and visual appearance of the reference image:
 * - Background: Royal-to-sky blue gradient from the reference image (#224996 -> #5eaee0 -> #f8fcfe)
 * - Prism: Faceted crystalline triangle centered directly above the text
 * - Typography: Exact rounded brand wordmark (OPRISM) in #323192
 * - Animation: 21st.dev motion-loading-fill-text left-to-right fill animation
 * - Lifecycle: Smooth fade-out reveal of the homepage once complete
 */
export function LoaderOverlay({ onComplete, text = "OPRISM" }: LoaderOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleFillComplete = () => {
    setIsExiting(true);
    // Smooth transition into homepage
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.aside
          key="oprism-reference-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 select-none overflow-hidden"
          style={{
            // Exact background gradient sampled from reference image
            background: "linear-gradient(180deg, #224996 0%, #2858a4 25%, #2b7cb9 55%, #5eaee0 75%, #a8d5f0 88%, #f8fcfe 100%)",
          }}
          aria-live="polite"
          aria-label="Loading Oprism website"
        >
          {/* Main Logo Container matching reference composition */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto">
            {/* 1. Faceted Crystal Prism Triangle directly from reference */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center mb-3 sm:mb-5 drop-shadow-md"
            >
              <img
                src={prismImg}
                alt="Oprism Crystal Prism"
                className="w-32 sm:w-44 md:w-56 lg:w-64 h-auto object-contain select-none pointer-events-none"
                draggable={false}
              />
            </motion.div>

            {/* 2. 21st.dev motion-loading-fill-text wordmark animation */}
            <div className="relative flex items-center justify-center">
              <MotionLoadingFillText
                text={text}
                onComplete={handleFillComplete}
              />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default LoaderOverlay;
