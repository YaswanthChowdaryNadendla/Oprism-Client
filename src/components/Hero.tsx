import React from "react";
import { ArrowRight, Sparkles, Gem, Compass, ShieldCheck } from "lucide-react";
import prismImg from "../assets/prism-crystal.png";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300/60 bg-white/60 backdrop-blur-md shadow-sm mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#323192]" />
          <span className="text-xs font-bold text-[#323192] tracking-wider uppercase">
            Master Curators of Architectural Minerals
          </span>
        </div>

        {/* Floating Prism Visual Highlight */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-2xl group-hover:bg-sky-400/30 transition-all pointer-events-none" />
            <img
              src={prismImg}
              alt="Oprism Crystal"
              className="w-28 sm:w-36 md:w-44 h-auto object-contain relative z-10 drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{ fontFamily: "'Comfortaa', sans-serif" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-[1.1] mb-6"
        >
          Pure Natural Elegance.{" "}
          <span className="text-[#323192] block sm:inline">
            Refracted in Stone.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Transforming rare geological formations and crystal minerals into extraordinary architectural surfaces, bespoke private residences, and landmark spaces.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#collection"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#323192] text-white font-bold text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Explore Product Collection
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#enquiry"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-sky-300/80 bg-white/70 backdrop-blur-md text-[#323192] font-bold text-sm hover:bg-white hover:border-[#323192]/40 transition-all flex items-center justify-center gap-2"
          >
            Request Private Consultation
          </a>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
          {[
            { label: "100% Genuine Minerals", desc: "Ethically quarried globally", icon: <Gem className="w-4 h-4 text-[#323192]" /> },
            { label: "Bespoke Fabrication", desc: "Sub-millimeter precision", icon: <Compass className="w-4 h-4 text-[#323192]" /> },
            { label: "Refractive Quality", desc: "Certified light transmission", icon: <Sparkles className="w-4 h-4 text-[#323192]" /> },
            { label: "Lifetime Durability", desc: "Sealed geological warranty", icon: <ShieldCheck className="w-4 h-4 text-[#323192]" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm text-left flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-sky-100/60 mt-0.5">{item.icon}</div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
