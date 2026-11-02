import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Gem, ShieldCheck, Compass } from "lucide-react";
import { Hero } from "../components/Hero";
import { ProductCollection } from "../components/ProductCollection";
import prismImg from "../assets/prism-crystal.png";

export function Home() {
  return (
    <div className="relative">
      {/* 1. Hero Section with floating Oprism crystal bottle visual & call to actions */}
      <Hero />

      {/* 2. Brand Introduction */}
      <section className="pt-10 pb-16 sm:py-16 lg:py-20 relative z-10 border-t border-sky-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Brand Showcase Card */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xl shadow-sky-950/5 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-200/50 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#323192] block mb-2">
                  The Oprism Essence
                </span>
                <h3
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight"
                >
                  Pure Light Meets Rare Geology.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Every Oprism mineral surface and vessel begins billions of years ago. Selected from the world's most pristine geological formations, our crystal quartz and mineral slabs undergo sub-millimeter fabrication to unveil translucent internal refractions.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-sky-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-[#323192]" />
                    <span>100% Trace Origin</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Gem className="w-4 h-4 text-sky-600" />
                    <span>Optical Refraction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Highlights & Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-200 bg-white/60 text-xs font-bold text-[#323192]">
                <Sparkles className="w-3.5 h-3.5 text-[#323192]" />
                <span>The Signature of Purity</span>
              </div>
              <h2
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              >
                Engineered for Landmark Architecture &amp; Bespoke Luxury.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether creating monumental backlit reception features, custom crystal centerpieces, or bespoke private villa surfaces, Oprism provides unmatched optical clarity, durability, and natural luminescence.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#323192] text-white font-bold text-xs shadow-md shadow-[#323192]/20 hover:bg-[#252478] hover:shadow-lg transition-all"
                >
                  Discover Our Story
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-300 bg-white/70 text-[#323192] font-bold text-xs hover:bg-white transition-all"
                >
                  Explore Bespoke Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Product Collection */}
      <ProductCollection />

      {/* 4. Bottom Gateway Banner */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#323192] to-[#1e1e66] text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-200">
                Bespoke Mineral Curation
              </span>
              <h3
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Ready to Commission Your Signature Surface?
              </h3>
              <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
                Our mineral consultants and structural engineers assist with private lot reservations, 3D luminescence simulations, and direct white-glove delivery.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#323192] font-bold text-xs shadow-lg hover:bg-sky-50 transition-all flex items-center gap-2"
                >
                  Schedule Private Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3.5 rounded-full border border-sky-300/40 text-white font-bold text-xs hover:bg-white/10 transition-all"
                >
                  View Occasion Portfolios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
