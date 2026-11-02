import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Wine, PartyPopper, Building2, Gem, ArrowRight, CheckCircle2 } from "lucide-react";
import prismImg from "../assets/prism-crystal.png";

export function Services() {
  const servicesList = [
    {
      id: "weddings",
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      badge: "Signature Occasion",
      title: "Weddings & Receptions",
      tagline: "Luminescent Romance Carved in Geological Wonder",
      desc: "Elevate your most memorable celebration with breathtaking mineral installations. From backlit crystal cocktail bars and bridal stage backdrop slabs to customized crystal quartz table centerpieces that glow under ambient candlelight.",
      highlights: [
        "Backlit translucent quartzite bridal and bar facades",
        "Personalized couple monograms engraved on natural stone",
        "Curated gemstone table runners and candle plinths",
        "Keepsake mineral favors for wedding party and guests",
      ],
      gradient: "from-pink-500/10 via-purple-500/10 to-indigo-500/10",
      accentColor: "border-pink-200",
    },
    {
      id: "custom-bottles",
      icon: <Wine className="w-6 h-6 text-[#323192]" />,
      badge: "Exclusive Craft",
      title: "Customized Bottles & Vessels",
      tagline: "Handcrafted Luxury Infusion Vessels & Water Bottles",
      desc: "Each custom Oprism bottle is carved and adorned with genuine crystal facets. Perfect for luxury hotels, private dining, executive gifts, and bespoke event gifting with custom crests, names, and metal trim.",
      highlights: [
        "Precision laser-etched monograms and company crests",
        "Natural quartz crystal infuser chambers",
        "Jewel-grade gold, silver, and titanium cap options",
        "Limited-edition numbered gift presentation boxes",
      ],
      gradient: "from-sky-500/10 via-blue-500/10 to-indigo-500/10",
      accentColor: "border-sky-200",
    },
    {
      id: "birthday-parties",
      icon: <PartyPopper className="w-6 h-6 text-amber-600" />,
      badge: "Private Festivities",
      title: "Birthday Parties & Celebrations",
      tagline: "Milestone Moments Illuminated with Radiance",
      desc: "Transform private anniversary dinners, milestone birthdays, and gala dinners into unforgettable sensory experiences with vibrant colored gemstone pedestals and radiant mineral decor.",
      highlights: [
        "Color-matched mineral themes (Amethyst, Rose, Azure, Emerald)",
        "Translucent dessert buffet displays and cake pedestals",
        "VIP lounge tables with dynamic LED lighting",
        "Bespoke engraved birthday gift sets",
      ],
      gradient: "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
      accentColor: "border-amber-200",
    },
    {
      id: "corporate-events",
      icon: <Building2 className="w-6 h-6 text-indigo-700" />,
      badge: "Executive Class",
      title: "Corporate Events & Galas",
      tagline: "Monumental Statements for Industry Leaders",
      desc: "Make an indelible impression at annual summits, prestigious awards galas, and VIP stakeholder receptions. Our architectural slabs and branded mineral installations communicate uncompromising prestige.",
      highlights: [
        "Monumental mineral keynote stages and podium facades",
        "Custom handcrafted mineral awards and trophies",
        "Branded luxury product launch plinths",
        "Turnkey white-glove setup and on-site event coordination",
      ],
      gradient: "from-indigo-500/10 via-blue-600/10 to-slate-900/10",
      accentColor: "border-indigo-200",
    },
  ];

  const processSteps = [
    { step: "01", title: "Vision Consultation", desc: "Share your event date, theme, and architectural specifications with our dedicated concierge." },
    { step: "02", title: "Mineral Selection", desc: "Select from our private reserve of translucent quartz, agate, and marble formations." },
    { step: "03", title: "Bespoke Fabrication", desc: "Sub-millimeter CNC cutting, custom engraving, and LED luminescence calibration." },
    { step: "04", title: "White-Glove Delivery", desc: "Seismic crating and flawless on-site installation overseen by our senior craftsmen." },
  ];

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300/60 bg-white/60 backdrop-blur-md shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#323192]" />
            <span className="text-xs font-bold text-[#323192] tracking-wider uppercase">
              Curated Occasions &amp; Bespoke Craft
            </span>
          </div>

          <h1
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
          >
            Services &amp; Occasions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From intimate weddings and milestone birthday celebrations to corporate galas and customized crystal vessels, Oprism brings the beauty of pure light to every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-28">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`p-8 sm:p-10 rounded-3xl bg-white/75 backdrop-blur-md border ${service.accentColor} shadow-xl shadow-sky-950/5 relative overflow-hidden flex flex-col justify-between`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-white/90 border border-sky-100 shadow-sm w-fit">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#323192] bg-sky-100/60 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <h3
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
                >
                  {service.title}
                </h3>
                <div className="text-xs font-medium text-[#323192] mb-4">
                  {service.tagline}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="space-y-2.5 mb-8">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#323192] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full py-3.5 rounded-full bg-[#323192] text-white font-bold text-xs shadow-md shadow-[#323192]/20 hover:bg-[#252478] transition-all flex items-center justify-center gap-2 mt-auto"
              >
                Inquire for {service.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* 4-Step Process Section */}
        <div className="p-10 sm:p-14 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xl mb-24">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#323192] block mb-2">
              Flawless Execution
            </span>
            <h3
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-2xl sm:text-4xl font-bold text-slate-900"
            >
              How We Bring Your Vision to Life
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, idx) => (
              <div key={idx} className="relative">
                <div className="font-mono text-3xl font-bold text-sky-400/80 mb-3">
                  {p.step}
                </div>
                <h4
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-lg font-bold text-slate-900 mb-2"
                >
                  {p.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Consultation CTA */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#323192] to-[#1e1e66] text-white shadow-2xl max-w-4xl mx-auto">
          <h3
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
          >
            Planning a Signature Celebration?
          </h3>
          <p className="text-sky-100 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Our event curators offer private sample previews and custom 3D lighting renderings for weddings, corporate summits, and customized bottles.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#323192] font-bold text-xs shadow-lg hover:bg-sky-50 transition-all"
          >
            Request Bespoke Event Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
