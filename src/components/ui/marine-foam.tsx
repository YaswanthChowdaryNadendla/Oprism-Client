import React from "react";

export interface GradientBackgroundProps {
  /** Optional custom class names */
  className?: string;
  /** Optional inner children to render inside the container */
  children?: React.ReactNode;
  /** Optional style override */
  style?: React.CSSProperties;
}

/**
 * GradientBackground (Marine Foam)
 *
 * Exact 21st.dev component by @serafimcloud:
 * - Pure CSS gradient background in the Silk Blend style
 * - 4-color palette:
 *   #0F5C63 (Deep teal, 0%)
 *   #3F9EA8 (Ocean teal, 33%)
 *   #A9E2D9 (Soft aqua, 67%)
 *   #EAF7F2 (Light mint, 100%)
 * - Soft blur finish using CSS container queries (inset -0.8cqmin, blur 0.4cqmin)
 * - Film-grain texture with dual SVG turbulence noise filters
 */
export function GradientBackground({
  className = "",
  children,
  style = {},
}: GradientBackgroundProps) {
  return (
    <div
      aria-hidden={!children}
      className={`gradient-background-container ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        containerType: "size",
        ...style,
      }}
    >
      {/* Layer 1: Blurred Silk Blend Gradient with inline noise pattern */}
      <div
        style={{
          position: "absolute",
          inset: "-0.8cqmin",
          filter: "blur(0.4cqmin)",
          backgroundColor: "#0F5C63",
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.060'/></svg>"), linear-gradient(145deg, #0F5C63 0%, #3F9EA8 33%, #A9E2D9 67%, #EAF7F2 100%)`,
          backgroundSize: "120px 120px, auto",
          backgroundBlendMode: "overlay, normal",
        }}
      />

      {/* Layer 2: Film Grain SVG Overlay */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.06,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      >
        <filter id="grain-06587a57">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-06587a57)" />
      </svg>

      {/* Optional Children */}
      {children}
    </div>
  );
}

export default GradientBackground;
