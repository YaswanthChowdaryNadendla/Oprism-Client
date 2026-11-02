import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Target, Compass, ShieldCheck, Gem, Award, Globe2, ArrowRight } from "lucide-react";
import prismImg from "../assets/prism-crystal.png";

export function About() {
  const whyOprism = [
    {
      icon: <Gem className="w-6 h-6 text-[#323192]" />,
      title: "Optical Clarity & Translucency",
      desc: "Our crystal formations are curated for exceptional refractive purity, allowing ambient and LED backlighting to radiate with natural spectral fire.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#323192]" />,
      title: "Geological Provenance",
      desc: "Direct relationships with exclusive high-altitude quarries across Brazil, Finland, Italy, and Madagascar guarantee authentic single-source mineral blocks.",
    },
    {
      icon: <Compass className="w-6 h-6 text-[#323192]" />,
      title: "Sub-Millimeter Engineering",
      desc: "Advanced multi-axis CNC wire-sawing and diamond-edge honing ensure seamless vein alignment and flawless bookmatched junctions.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#323192]" />,
      title: "100% Traceability & Ethics",
      desc: "Every slab and bespoke vessel comes with a registered geological certificate, confirming ecological extraction standards and chain of custody.",
    },
  ];

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300/60 bg-white/60 backdrop-blur-md shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#323192]" />
            <span className="text-xs font-bold text-[#323192] tracking-wider uppercase">
              Brand Story &bull; Vision &bull; Mission
            </span>
          </div>

          <h1
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
          >
            The Signature of Purity.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded on the belief that natural crystal minerals are Earth's most enduring art form, Oprism transforms pristine geological wonders into bespoke architectural surfaces and signature centerpieces.
          </p>
        </div>

        {/* 1. Brand Story */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6 relative">
            <div className="p-8 sm:p-12 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-xl shadow-sky-950/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={prismImg}
                  alt="Oprism Crystal Prism"
                  className="w-16 h-16 object-contain drop-shadow-md"
                />
                <div>
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-2xl font-bold text-slate-900"
                  >
                    The Oprism Story
                  </h3>
                  <span className="text-xs font-mono text-[#323192] font-bold">
                    Born from Geological Light
                  </span>
                </div>
              </div>

              <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic border-l-2 border-[#323192] pl-4 mb-8">
                "We view every mineral block as a billion-year-old architectural tapestry. Our duty is simply to unveil the light hidden within."
              </blockquote>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/60 border border-sky-100 text-center">
                  <div className="text-2xl font-extrabold text-[#323192] font-['Comfortaa']">
                    28+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Quarry Nations
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 border border-sky-100 text-center">
                  <div className="text-2xl font-extrabold text-[#323192] font-['Comfortaa']">
                    15k+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Curated Slabs
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 border border-sky-100 text-center">
                  <div className="text-2xl font-extrabold text-[#323192] font-['Comfortaa']">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Traceability
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#323192] block">
              A Decade of Refinement
            </span>
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            >
              Unveiling Nature's Billion-Year Masterpieces
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For over a decade, Oprism has traveled to the world’s most remote quarries to identify crystalline mineral deposits with extraordinary optical properties. Where traditional stonemasons saw raw hardness, we recognized refraction, translucency, and natural luminescent depth.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              By pairing master stone artisans with state-of-the-art waterjet cutting and bespoke lighting calibration, we bring monumental stone surfaces and jewel-grade vessels to discerning collectors, architects, and designers worldwide.
            </p>
          </div>
        </div>

        {/* 2. Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-28">
          {/* Vision */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-lg shadow-sky-950/5 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#323192]/10 text-[#323192] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#323192] block mb-2">
              Our Vision
            </span>
            <h3
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-2xl font-bold text-slate-900 mb-4"
            >
              The Global Standard of Mineral Purity
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To establish Oprism as the international standard of translucent mineral luxury, connecting the world's most breathtaking geological discoveries with iconic contemporary architecture.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-lg shadow-sky-950/5 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-700 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 block mb-2">
              Our Mission
            </span>
            <h3
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-2xl font-bold text-slate-900 mb-4"
            >
              Crafting Enduring Natural Elegance
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To ethically source, rigorously curate, and flawlessly fabricate earth's rarest crystal minerals—transforming raw geological formations into radiant architectural statements that inspire for generations.
            </p>
          </div>
        </div>

        {/* 3. Why Oprism */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#323192] block mb-2">
              The Oprism Advantage
            </span>
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Why Choose Oprism
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Every stage of our process—from quarry selection to climate-controlled white-glove installation—is held to uncompromising standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOprism.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-md shadow-sky-950/5 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="p-3 rounded-2xl bg-sky-100/70 w-fit mb-6">
                  {item.icon}
                </div>
                <h4
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-lg font-bold text-slate-900 mb-2.5"
                >
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-white/80 backdrop-blur-md border border-white shadow-xl max-w-4xl mx-auto">
          <h3
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
          >
            Experience The Signature of Purity
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Explore our bespoke occasion services or schedule a private consultation with our lead geological curators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-full bg-[#323192] text-white font-bold text-xs shadow-md shadow-[#323192]/20 hover:bg-[#252478] transition-all flex items-center gap-2"
            >
              View Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full border border-sky-300 bg-white/80 text-[#323192] font-bold text-xs hover:bg-white transition-all"
            >
              Contact Our Studio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
