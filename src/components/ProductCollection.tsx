import React, { useState } from "react";
import { Sparkles, ArrowUpRight, Eye } from "lucide-react";

export function ProductCollection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Collections" },
    { id: "quartz", label: "Prismatic Quartz" },
    { id: "gemstone", label: "Gemstone Surfaces" },
    { id: "slabs", label: "Architectural Slabs" },
  ];

  const products = [
    {
      id: 1,
      category: "quartz",
      name: "Azure Prismatic Quartz",
      origin: "Minas Gerais, Brazil",
      finish: "Bookmatched & Backlit",
      translucency: "High (Light Transmitting)",
      gradientClass: "from-sky-400/30 via-blue-600/40 to-indigo-900/50",
      description: "Naturally formed sky-blue quartz crystals exhibiting prismatic refraction when illuminated.",
    },
    {
      id: 2,
      category: "gemstone",
      name: "Celestial Indigo Sodalite",
      origin: "Outokumpu, Finland",
      finish: "High Gloss Polished",
      translucency: "Medium Spectral Hue",
      gradientClass: "from-blue-700/40 via-indigo-900/50 to-slate-950/60",
      description: "Deep royal blue mineral matrix enriched with naturally occurring calcite veining.",
    },
    {
      id: 3,
      category: "slabs",
      name: "Lumina Calacatta Prism",
      origin: "Carrara, Italy",
      finish: "Honed Architectural Slab",
      translucency: "Opaline Silk Glow",
      gradientClass: "from-slate-100/50 via-sky-200/40 to-blue-300/30",
      description: "Pure white marble substrate accented with shimmering iridescent crystal micro-veins.",
    },
    {
      id: 4,
      category: "quartz",
      name: "Optic Crystal Cluster Slab",
      origin: "Madagascar",
      finish: "Polished Diamond Seal",
      translucency: "Optically Clear",
      gradientClass: "from-white/60 via-sky-300/40 to-indigo-400/40",
      description: "Ultra-pure geological quartz displaying optical rainbow dispersion across slab seams.",
    },
    {
      id: 5,
      category: "gemstone",
      name: "Amethyst Prism Agate",
      origin: "Uruguay",
      finish: "Backlit Jewel Grade",
      translucency: "Deep Violet Spectrum",
      gradientClass: "from-purple-500/40 via-indigo-600/40 to-blue-900/50",
      description: "Hand-assembled mosaic of deep violet amethyst nodules set in transparent resin.",
    },
    {
      id: 6,
      category: "slabs",
      name: "Emerald Fluorite Matrix",
      origin: "Chihuahua, Mexico",
      finish: "Satin Honed",
      translucency: "Fluorescent Cyan-Green",
      gradientClass: "from-emerald-400/30 via-teal-500/40 to-blue-700/40",
      description: "Rare fluorite mineral aggregates displaying natural UV fluorescence and deep hue depth.",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#323192] block mb-2">
            Curated Geological Masterpieces
          </span>
          <h2
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Product Collection
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Discover our curated portfolio of rare mineral slabs, crystalline surfaces, and custom-cut architectural stone.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === c.id
                  ? "bg-[#323192] text-white shadow-md shadow-[#323192]/20"
                  : "bg-white/70 backdrop-blur-md border border-sky-100 text-slate-600 hover:text-slate-900 hover:bg-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 p-6 shadow-lg shadow-sky-950/5 hover:shadow-xl hover:bg-white/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Swatch */}
                <div
                  className={`w-full h-48 rounded-2xl bg-gradient-to-br ${item.gradientClass} relative overflow-hidden mb-5 border border-sky-200/50 flex items-center justify-center shadow-inner`}
                >
                  <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-transparent opacity-60" />
                  <div className="relative text-center px-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-900/80 font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      {item.finish}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="font-bold text-lg text-slate-900 group-hover:text-[#323192] transition-colors"
                  >
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">{item.origin}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-100/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  {item.translucency}
                </span>
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#323192] hover:text-[#1d1b70] transition-colors"
                >
                  Enquire Spec
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCollection;
