import React from "react";
import { Sparkles, Compass, Lightbulb, Truck, Building2, Home, Landmark, Anchor } from "lucide-react";

export function ServicesOccasions() {
  const services = [
    {
      icon: <Compass className="w-5 h-5 text-[#323192]" />,
      title: "Precision Waterjet Fabrication",
      desc: "Sub-millimeter CNC cutting, mitred edge-banding, and bookmatch alignment tailored for complex architectural contours.",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#323192]" />,
      title: "Luminescence & Backlight Engineering",
      desc: "Custom ultra-slim LED light sheets calibrated to specific mineral color temperatures to unlock dynamic translucent glow.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#323192]" />,
      title: "Architectural Sourcing & Dry-Laying",
      desc: "Private quarry visits, batch lot inspections, and full warehouse dry-fits so you preview the continuous vein flow prior to delivery.",
    },
    {
      icon: <Truck className="w-5 h-5 text-[#323192]" />,
      title: "Global White-Glove Logistics",
      desc: "Custom-reinforced seismic timber crating and dedicated climate-controlled freight to installation sites worldwide.",
    },
  ];

  const occasions = [
    {
      icon: <Home className="w-5 h-5 text-sky-600" />,
      title: "Private Luxury Residences",
      desc: "Grand foyer feature walls, translucent kitchen island centerpieces, and spa-inspired master en-suites.",
    },
    {
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      title: "Haute Hospitality & Lounges",
      desc: "Backlit mineral reception desks, luxury hotel presidential suites, and high-energy luminescent cocktail bars.",
    },
    {
      icon: <Landmark className="w-5 h-5 text-blue-600" />,
      title: "Corporate Flagships & Atriums",
      desc: "Statuesque mineral accent facades, monumental boardroom tables, and gallery entrance statements.",
    },
    {
      icon: <Anchor className="w-5 h-5 text-teal-600" />,
      title: "Superyachts & Bespoke Commissions",
      desc: "Lightweight honeycomb-backed mineral installations engineered specifically for nautical marine standards.",
    },
  ];

  return (
    <section id="services-occasions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#323192] block mb-2">
            End-To-End Craftsmanship
          </span>
          <h2
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Services & Occasions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            From initial geological curation to specialized installation for milestone architectural occasions.
          </p>
        </div>

        {/* 1. Services Grid */}
        <div className="mb-16">
          <h3
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center sm:text-left"
          >
            Specialized Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-md shadow-sky-950/5 hover:bg-white/85 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-sky-100/70 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Occasions & Applications Grid */}
        <div>
          <h3
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center sm:text-left"
          >
            Architectural Occasions & Venues
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-md shadow-sky-950/5 hover:bg-white/85 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-indigo-100/70 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOccasions;
