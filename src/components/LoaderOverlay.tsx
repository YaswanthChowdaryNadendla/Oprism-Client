import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionLoadingFillText } from "./ui/motion-loading-fill-text";
import prismImg from "../assets/prism-crystal.png";
import gradient21st from "../assets/gradient-21st.png";

export interface LoaderOverlayProps {
  onComplete: () => void;
  text?: string;
}

/**
 * LoaderOverlay
 *
 * Full-screen loading screen powered by gradient-21st.png:
 * - Background: Exact gradient-21st.png asset with background-size: cover & center positioning.
 * - Responsive: Full-viewport container (min-h-[100dvh]) with fluid proportional scaling.
 * - Prism: Faceted crystalline triangle scaled proportionally with CSS clamp().
 * - Typography: Exact brand wordmark (OPRISM) scaled with CSS clamp() (200px - 480px).
 * - Complete unclipped letter M visible across mobile, tablet, laptop, and desktop.
 * - Animation: Faithful 21st.dev motion-loading-fill-text animation.
 * - Trademark: Completely removed.
 * - Transition: Smooth fade-out reveal seamlessly transitioning into the homepage.
 */
export function LoaderOverlay({ onComplete, text = "OPRISM" }: LoaderOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleFillComplete = () => {
    setIsExiting(true);
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4 sm:px-6 select-none overflow-hidden min-h-[100dvh] w-screen"
          style={{
            backgroundImage: `url(${gradient21st})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
          aria-live="polite"
          aria-label="Loading Oprism website"
        >
          {/* Main Logo Composition matching reference */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-full mx-auto overflow-visible px-2 sm:px-4">
            {/* 1. Faceted Crystal Prism Triangle directly from reference */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center mb-2 sm:mb-3 drop-shadow-md"
            >
              <img
                src={prismImg}
                alt="Oprism Crystal Prism"
                className="h-auto object-contain select-none pointer-events-none drop-shadow-md"
                style={{
                  width: "clamp(110px, 40vw, 250px)",
                  maxWidth: "calc(55vw)",
                }}
                draggable={false}
              />
            </motion.div>

            {/* 2. 21st.dev motion-loading-fill-text wordmark animation */}
            <div className="relative flex items-center justify-center w-full max-w-full overflow-visible">
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
