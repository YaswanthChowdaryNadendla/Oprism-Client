import React from 'react';

export interface OprismWordmarkProps {
  variant?: 'track' | 'fill';
  text?: string;
  className?: string;
  showTrademark?: boolean;
}

/**
 * OprismWordmark
 *
 * Matches the typography, proportions, and character of the reference Oprism logo:
 * - Font: Comfortaa (geometric rounded grotesque with circular O, rounded terminals)
 * - Color: #323192 (exact royal indigo from the reference logo)
 * - Trademark badge (TM) matching the reference logo
 * - Layered for 21st.dev motion-loading-fill-text (track vs fill)
 */
export function OprismWordmark({
  variant = 'fill',
  text = 'OPRISM',
  className = '',
  showTrademark = true,
}: OprismWordmarkProps) {
  const isFill = variant === 'fill';

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      aria-label={text}
    >
      <span
        style={{
          fontFamily: "'Comfortaa', ui-sans-serif, system-ui, sans-serif",
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: isFill ? '#323192' : 'rgba(50, 49, 146, 0.22)',
          filter: isFill ? 'drop-shadow(0 2px 8px rgba(50, 49, 146, 0.25))' : undefined,
          display: 'inline-block',
          lineHeight: 1,
        }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight transition-colors duration-200"
      >
        {text}
      </span>

      {showTrademark && (
        <span
          style={{
            fontFamily: "'Comfortaa', sans-serif",
            fontWeight: 700,
            color: isFill ? '#323192' : 'rgba(50, 49, 146, 0.22)',
            verticalAlign: 'super',
          }}
          className="text-[10px] sm:text-xs md:text-sm font-semibold ml-1 self-start -mt-1 sm:-mt-2"
        >
          &trade;
        </span>
      )}
    </div>
  );
}

export default OprismWordmark;
