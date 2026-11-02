import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionLoadingFillText } from "./ui/motion-loading-fill-text";

export interface LoaderOverlayProps {
  onComplete: () => void;
}

/**
 * LoaderOverlay
 *
 * Full-screen loading screen for Oprism.
 * - Background: Deep navy blue / almost black (#020617).
 * - Component: 21st.dev motion-loading-fill-text.
 * - Text: OPRISM with custom rounded typography & crystal-blue fill animation.
 * - Clean, elegant, and cinematic — zero clutter.
 * - Smooth fade-out exit transition revealing the homepage.
 */
export function LoaderOverlay({ onComplete }: LoaderOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleFillComplete = () => {
    setIsExiting(true);
    // Smooth fade out duration before unmounting
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.aside
          key="oprism-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] px-6 select-none"
          aria-live="polite"
          aria-label="Loading Oprism website"
        >
          {/* Subtle ambient crystal-blue radial glow in the center */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40"
            aria-hidden="true"
          >
            <div className="h-[280px] w-[280px] sm:h-[450px] sm:w-[450px] rounded-full bg-radial from-sky-500/15 via-blue-600/5 to-transparent blur-3xl" />
          </div>

          {/* Centered OPRISM 21st.dev Loading Fill Text Component */}
          <div className="relative z-10 flex flex-col items-center">
            <MotionLoadingFillText
              text="OPRISM"
              useSvgWordmark={true}
              onComplete={handleFillComplete}
            />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default LoaderOverlay;
