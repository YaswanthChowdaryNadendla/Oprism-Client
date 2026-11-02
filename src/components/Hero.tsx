import React from "react";
import { ArrowRight, Sparkles, Gem, Compass, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import bottleImg from "../assets/herosection.png";

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Headline, Description & Desktop Actions */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-sky-300/60 bg-white/60 backdrop-blur-md shadow-sm mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#323192]" />
              <span className="text-[10px] sm:text-xs font-bold text-[#323192] tracking-wider uppercase">
                Master Curators of Architectural Minerals
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#0f172a] leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6"
            >
              Pure Natural Elegance.{" "}
              <span className="text-[#323192] block sm:inline">
                Refracted in Stone.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8">
              Transforming rare geological formations and crystal minerals into extraordinary architectural surfaces, bespoke private residences, and landmark spaces.
            </p>

            {/* Desktop Action Buttons (lg and up) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#collection"
                className="px-8 py-4 rounded-full bg-[#323192] text-white font-bold text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Explore Product Collection
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#enquiry"
                className="px-8 py-4 rounded-full border border-sky-300/80 bg-white/70 backdrop-blur-md text-[#323192] font-bold text-sm hover:bg-white hover:border-[#323192]/40 transition-all flex items-center justify-center gap-2"
              >
                Request Private Consultation
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Bottle Visual with Floating Animation */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center w-full my-2 lg:my-0">
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-none flex justify-center items-center"
            >
              {/* Soft ambient glow behind the bottle */}
              <div
                className="absolute inset-4 sm:inset-8 bg-sky-400/25 rounded-full blur-3xl pointer-events-none -z-10 scale-95"
                aria-hidden="true"
              />
              <img
                src={bottleImg}
                alt="Oprism Pure Mineral Water Bottles"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto max-h-[280px] sm:max-h-[380px] md:max-h-[460px] lg:max-h-[560px] xl:max-h-[620px] object-contain drop-shadow-[0_20px_35px_rgba(34,73,150,0.18)] select-none"
              />
            </motion.div>
          </div>

          {/* Mobile / Tablet Action Buttons (visible below bottle on mobile) */}
          <div className="col-span-1 lg:hidden flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto mt-2">
            <a
              href="#collection"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              Explore Product Collection
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#enquiry"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-sky-300/80 bg-white/70 backdrop-blur-md text-[#323192] font-bold text-xs sm:text-sm hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              Request Private Consultation
            </a>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-7xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-sky-200/50">
          {[
            { label: "100% Genuine Minerals", desc: "Ethically quarried globally", icon: <Gem className="w-4 h-4 text-[#323192]" /> },
            { label: "Bespoke Fabrication", desc: "Sub-millimeter precision", icon: <Compass className="w-4 h-4 text-[#323192]" /> },
            { label: "Refractive Quality", desc: "Certified light transmission", icon: <Sparkles className="w-4 h-4 text-[#323192]" /> },
            { label: "Lifetime Durability", desc: "Sealed geological warranty", icon: <ShieldCheck className="w-4 h-4 text-[#323192]" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm text-left flex items-start gap-3"
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
