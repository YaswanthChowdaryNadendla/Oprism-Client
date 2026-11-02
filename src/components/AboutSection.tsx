import React from "react";
import { Award, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import prismImg from "../assets/prism-crystal.png";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="relative">
            <div className="rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 p-8 sm:p-12 shadow-xl shadow-sky-950/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <img
                  src={prismImg}
                  alt="Oprism Faceted Prism"
                  className="w-16 h-16 object-contain drop-shadow-md"
                />
                <div>
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-2xl font-bold text-slate-900"
                  >
                    The Oprism Legacy
                  </h3>
                  <span className="text-xs font-mono text-[#323192] font-bold">
                    Natural Mineral Innovations
                  </span>
                </div>
              </div>

              <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic border-l-2 border-[#323192] pl-4 mb-8">
                "We view every mineral block as a billion-year-old architectural tapestry. Our duty is simply to unveil the light hidden within."
              </blockquote>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/60 border border-sky-100">
                  <div className="text-2xl font-extrabold text-[#323192] font-['Comfortaa']">
                    28+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Quarry Nations
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 border border-sky-100">
                  <div className="text-2xl font-extrabold text-[#323192] font-['Comfortaa']">
                    15k+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Curated Slabs
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 border border-sky-100">
                  <div className="text-2xl font-extrabold text-[#323192] font-['Comfortaa']">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Traceability
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 border border-sky-100">
                  <div className="text-2xl font-extrabold text-[#323192] font-['Comfortaa']">
                    45+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Design Awards
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#323192] block mb-2">
              Our Heritage & Philosophy
            </span>
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            >
              Artistry Born from the Heart of Earth.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              At Oprism, we bridge deep geological science and contemporary luxury architecture. We specialize in identifying, extracting, and finishing the world's most breathtaking crystal minerals, quartzites, and semi-precious stone matrices.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Every slab is treated with proprietary lapidary precision: hand-inspected under calibrated prismatic light sources to preserve intrinsic optical clarity, depth of hue, and structural integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/60 border border-sky-100">
                <Globe2 className="w-5 h-5 text-[#323192]" />
                <span className="text-xs font-semibold text-slate-800">
                  Ethical Sustainable Extraction
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/60 border border-sky-100">
                <Award className="w-5 h-5 text-[#323192]" />
                <span className="text-xs font-semibold text-slate-800">
                  Certified Master Lapidaries
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
