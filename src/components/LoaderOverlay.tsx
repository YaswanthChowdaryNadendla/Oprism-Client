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
 * - Unified Proportional Scaling: Crystal prism symbol & OPRISM wordmark scale together
 *   in locked proportion (~55% crystal:wordmark ratio) inside a single responsive container.
 * - Complete unclipped letter M visible across mobile (320px-430px), tablet, laptop, and desktop.
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-hidden min-h-[100dvh] w-full"
          style={{
            backgroundImage: `url(${gradient21st})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
          aria-live="polite"
          aria-label="Loading Oprism website"
        >
          {/* Unified Logo Composition: crystal symbol + wordmark in mathematical proportion */}
          <div
            className="relative z-10 flex flex-col items-center justify-center text-center mx-auto"
            style={{
              width: "clamp(200px, 70vw, 440px)",
              maxWidth: "calc(100vw - 32px)",
            }}
          >
            {/* 1. Faceted Crystal Prism Triangle directly from reference logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center mb-2 sm:mb-3 drop-shadow-md"
              style={{
                width: "55%",
                maxWidth: "240px",
              }}
            >
              <img
                src={prismImg}
                alt="Oprism Crystal Prism"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-md"
                draggable={false}
              />
            </motion.div>

            {/* 2. 21st.dev motion-loading-fill-text wordmark animation */}
            <div className="relative flex items-center justify-center w-full overflow-visible">
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
