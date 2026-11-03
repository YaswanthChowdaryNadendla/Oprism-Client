import React from "react";
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialItem {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: TestimonialItem[];
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  // Seamless loop by duplicating items
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className={cn("relative overflow-hidden py-10 sm:py-14", className)}>
      {/* Section Header */}
      {title && (
        <div className="max-w-3xl mx-auto px-4 text-center mb-8 sm:mb-12">
          <h3
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a] mb-3"
          >
            {title}
          </h3>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Marquee Container with Gradient Fade Edges via CSS Mask */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 py-4 px-2">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.author.handle}-${index}`}
              className="w-[280px] sm:w-[340px] md:w-[360px] shrink-0 rounded-2xl bg-white/90 backdrop-blur-md border border-sky-100/90 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300"
            >
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.author.avatar}
                  alt={item.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-sky-200/80 shadow-xs bg-sky-100"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to avatar placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author.name)}&background=323192&color=fff&size=128`;
                  }}
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 truncate">
                    {item.author.name}
                  </h4>
                  <span className="text-[11px] sm:text-xs text-[#323192] font-medium truncate block">
                    {item.author.handle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
