'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface MarkerHighlightProps {
  before?: string;
  highlight: string;
  after?: string;
  markerColor?: string;
  baseColor?: string;
  highlightedTextColor?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Remotion-compatible spring solver
function calculateSpring({
  frame,
  fps = 30,
  damping = 14,
  stiffness = 100,
  mass = 1,
}: {
  frame: number;
  fps?: number;
  damping?: number;
  stiffness?: number;
  mass?: number;
}) {
  if (frame <= 0) return 0;
  const t = frame / fps;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const w0 = Math.sqrt(stiffness / mass);
  const wd = w0 * Math.sqrt(1 - dampingRatio * dampingRatio);
  const decay = Math.exp(-w0 * dampingRatio * t);
  const value =
    1 - decay * (Math.cos(wd * t) + ((w0 * dampingRatio) / wd) * Math.sin(wd * t));
  return Math.max(0, value);
}

// Helper to parse hex or rgb to RGB tuple
function parseColor(color: string): [number, number, number] {
  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    const num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    return [parseInt(rgbMatch[1], 10), parseInt(rgbMatch[2], 10), parseInt(rgbMatch[3], 10)];
  }
  return [15, 23, 42]; // default fallback
}

// Color interpolation matching Remotion interpolateColors
function interpolateColor(ratio: number, color1: string, color2: string) {
  const clamped = Math.max(0, Math.min(1, ratio));
  if (color1 === color2) return color1;
  const [r1, g1, b1] = parseColor(color1);
  const [r2, g2, b2] = parseColor(color2);
  const r = Math.round(r1 + (r2 - r1) * clamped);
  const g = Math.round(g1 + (g2 - g1) * clamped);
  const b = Math.round(b1 + (b2 - b1) * clamped);
  return `rgb(${r}, ${g}, ${b})`;
}

export function MarkerHighlight({
  before = '',
  highlight,
  after = '',
  markerColor = '#38bdf8',
  baseColor = '#0f172a',
  highlightedTextColor = '#0f172a',
  fontSize,
  fontWeight,
  speed = 1,
  className,
  style,
}: MarkerHighlightProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [markerScale, setMarkerScale] = useState(0);
  const [textColor, setTextColor] = useState(baseColor);
  const [isInView, setIsInView] = useState(false);

  // Trigger on intersection with viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Frame animation loop replicating Remotion useCurrentFrame & spring
  useEffect(() => {
    if (!isInView) return;

    let animId: number;
    const startTime = performance.now();
    const fps = 60;

    const tick = (now: number) => {
      const elapsedSeconds = (now - startTime) / 1000;
      // Remotion runs at 30 fps frame baseline, adjusted by speed
      const frame = elapsedSeconds * 30 * speed;

      // Original component: frame - 15 delay, damping: 14
      const scale = calculateSpring({
        frame: frame - 15,
        fps: 30,
        damping: 14,
      });

      setMarkerScale(scale);

      // Color interpolation: interpolate(markerScale, [0.5, 0.8], [0, 1])
      const colorRatio = (scale - 0.5) / 0.3;
      const currentTextColor = interpolateColor(
        colorRatio,
        baseColor,
        highlightedTextColor
      );
      setTextColor(currentTextColor);

      // Continue until spring fully settles (approx frame 45)
      if (frame < 55) {
        animId = requestAnimationFrame(tick);
      } else {
        setMarkerScale(1);
        setTextColor(highlightedTextColor);
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isInView, speed, baseColor, highlightedTextColor]);

  return (
    <span
      ref={containerRef}
      className={cn('inline-block whitespace-nowrap', className)}
      style={{
        fontSize,
        fontWeight,
        color: baseColor,
        ...style,
      }}
    >
      {before && <span>{before}</span>}
      <span className="relative inline-block px-2.5 py-0.5 align-baseline">
        {/* The Marker Stroke sweeping behind the word */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-0.18em -0.44em -0.16em -0.20em',
            background: markerColor,
            clipPath:
              'polygon(0% 0%, 100% 0%, calc(100% - 0.10em) 14%, calc(100% - 0.22em) 28%, calc(100% - 0.34em) 42%, calc(100% - 0.40em) 52%, calc(100% - 0.40em) 100%, 0% 100%)',
            opacity: 0.9,
            transformOrigin: 'left center',
            transform: `scaleX(${markerScale})`,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        {/* Highlighted text with color transition */}
        <span
          style={{
            position: 'relative',
            zIndex: 1,
            color: textColor,
          }}
        >
          {highlight}
        </span>
      </span>
      {after && (
        <span style={{ marginLeft: after.startsWith('?') ? '0.35em' : undefined }}>
          {after}
        </span>
      )}
    </span>
  );
}

export default MarkerHighlight;
