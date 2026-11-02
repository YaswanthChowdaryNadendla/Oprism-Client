import React, { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { OprismWordmark } from "./oprism-wordmark";

export interface MotionLoadingFillTextProps {
  /** Optional text prop for compatibility (defaults to OPRISM) */
  text?: string;
  /** Optional callback fired once fill animation reaches 100% */
  onComplete?: () => void;
  /** Optional container class */
  className?: string;
}

/**
 * useFillProgress
 * Faithfully preserves the original 21st.dev motion-loading-fill-text progress hook
 * using spring physics to drive the fill smoothly from 0 to 1.
 */
function useFillProgress(onComplete?: () => void) {
  const progress = useSpring(0, { stiffness: 90, damping: 20 });
  const hasTriggeredComplete = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = progress.get();
      const delta = Math.random() * 0.16 + 0.08;
      const next = Math.min(1, current + delta);
      progress.set(next);

      if (next >= 1) {
        clearInterval(interval);
        if (onComplete && !hasTriggeredComplete.current) {
          hasTriggeredComplete.current = true;
          // Hold the fully illuminated 100% state briefly before transitioning
          setTimeout(() => {
            onComplete();
          }, 450);
        }
      }
    }, 280);

    return () => clearInterval(interval);
  }, [progress, onComplete]);

  return progress;
}

/**
 * MotionLoadingFillText
 * Exact 21st.dev motion-loading-fill-text component (authored by motiondotdev)
 *
 * Core animation structure preserved:
 * - Two stacked layers: background track + foreground fill
 * - Motion-driven `clipPath` inset: `inset(0 100% 0 0)` -> `inset(0 0% 0 0)`
 * - Authentic OPRISM brand wordmark extracted directly from the reference logo
 * - Completely removes any trademark symbol
 */
export function MotionLoadingFillText({
  onComplete,
  className = "",
}: MotionLoadingFillTextProps) {
  const progress = useFillProgress(onComplete);

  // Exact 21st.dev clip-path transform mapping 0..1 to horizontal reveal
  const clipPath = useTransform(
    progress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <div className={`fill-text-container ${className}`}>
      <div className="fill-text-stack relative flex items-center justify-center">
        {/* Layer 1: Background Layer (Faded track) */}
        <div className="fill-text fill-text-bg" aria-hidden={true}>
          <OprismWordmark variant="track" />
        </div>

        {/* Layer 2: Foreground Layer (Filled with Motion clipPath left-to-right) */}
        <motion.div
          className="fill-text fill-text-fill"
          style={{ clipPath }}
          aria-label="OPRISM"
        >
          <OprismWordmark variant="fill" />
        </motion.div>
      </div>
    </div>
  );
}

export default MotionLoadingFillText;
