import React from 'react';

export function OprismWordmark({
  variant = 'fill',
  className = '',
}: {
  variant?: 'track' | 'fill';
  className?: string;
}) {
  const isFill = variant === 'fill';

  return (
    <svg
      viewBox="0 0 780 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[320px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-[760px] h-auto select-none ${className}`}
      aria-label="OPRISM"
    >
      <defs>
        {/* Crystal-Blue Premium Gradient for the Fill Layer */}
        <linearGradient id="oprismCrystalFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />     {/* Bright Sky / Cyan */}
          <stop offset="35%" stopColor="#60a5fa" />    {/* Crystal Blue */}
          <stop offset="70%" stopColor="#93c5fd" />    {/* Ice Blue Accent */}
          <stop offset="100%" stopColor="#c084fc" />   {/* Soft Violet Prismatic Refraction */}
        </linearGradient>

        {/* Ambient Subtle Glow Filter for Foreground Fill */}
        <filter id="crystalGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Wordmark typography */}
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        dominantBaseline="central"
        fill={isFill ? "url(#oprismCrystalFill)" : "rgba(56, 189, 248, 0.16)"}
        style={{
          fontFamily: "'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 900,
          fontSize: '92px',
          letterSpacing: '-0.035em',
        }}
        filter={isFill ? "url(#crystalGlow)" : undefined}
      >
        OPRISM
      </text>

      {/* Subtle bottom brand accent line in crystal-blue */}
      {isFill && (
        <rect
          x="35%"
          y="114"
          width="30%"
          height="3"
          rx="1.5"
          fill="url(#oprismCrystalFill)"
          opacity="0.85"
        />
      )}
    </svg>
  );
}
