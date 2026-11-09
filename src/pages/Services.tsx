import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layers,
  FileText,
  Calculator,
  Truck,
  Droplets,
  Heart,
  Building2,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

import bottleImg from "../assets/herosection.png";
import celebrationsImg from "../assets/celebrations.png";
import specialOccasionsImg from "../assets/special-occasions.jpg";
import businessImg from "../assets/Business&Hospitality.png";
import bulkImg from "../assets/event-cta-banner.png";

/**
 * Services Page
 * Premium, modern SaaS-style visual experience with smooth layered parallax
 * scrolling, scroll-reveal interactions, and bespoke water services showcase.
 */
export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for layered parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms for hero visuals and floating water elements
  const yHeroBottle = useTransform(scrollYProgress, [0, 0.3], shouldReduceMotion ? [0, 0] : [0, -45]);
  const yFloatingOrb1 = useTransform(scrollYProgress, [0, 0.4], shouldReduceMotion ? [0, 0] : [-20, 60]);
  const yFloatingOrb2 = useTransform(scrollYProgress, [0, 0.4], shouldReduceMotion ? [0, 0] : [30, -50]);

  // Four primary service offerings
  const services = [
    {
      id: "customized-bottles",
      title: "Customized Bottles",
      description:
        "Personalized bottle labels with names, event details, logos and designs.",
      image: celebrationsImg,
      icon: Sparkles,
      badge: "Bespoke Personalization",
      highlights: ["Names & Event Details", "Corporate Logos", "Waterproof Matte/Gloss"],
    },
    {
      id: "wedding-celebrations",
      title: "Wedding & Celebration Supply",
      description:
        "Bottled-water arrangements for weddings, birthdays and celebrations.",
      image: specialOccasionsImg,
      icon: Heart,
      badge: "Milestone Occasions",
      highlights: ["Theme-Matched Styling", "Banquet Table Placement", "Event Timing Support"],
    },
    {
      id: "corporate-supply",
      title: "Corporate & Business Supply",
      description:
        "Professional bottled-water arrangements for offices, meetings and corporate events.",
      image: businessImg,
      icon: Building2,
      badge: "Executive Hospitality",
      highlights: ["Boardroom Presentation", "Brand Co-Marketing", "Scheduled Recurring Delivery"],
    },
    {
      id: "bulk-orders",
      title: "Bulk Bottled-Water Orders",
      description:
        "Convenient ordering arrangements for larger requirements.",
      image: bulkImg,
      icon: PackageCheck,
      badge: "High-Volume Logistics",
      highlights: ["Large Case Capacities", "Venue Doorstep Logistics", "Consistent Pure Quality"],
    },
  ];

  // How It Works Steps
  const steps = [
    {
      number: "01",
      title: "Choose Your Requirement",
      description: "Select bottle quantities, occasion type, and whether you need custom branding or standard pure supply.",
      icon: Layers,
    },
    {
      number: "02",
      title: "Share Your Details",
      description: "Provide your event schedule, venue location, names, logos, or bespoke design references.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Discuss Pricing & Availability",
      description: "Receive our transparent quotation, custom label previews, and delivery timeframe confirmation.",
      icon: Calculator,
    },
    {
      number: "04",
      title: "Confirm Your Order",
      description: "Finalize your order and enjoy seamless, white-glove delivery directly to your event venue.",
      icon: Truck,
    },
  ];

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("services-catalog");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative z-10 overflow-hidden">
      {/* ─── Layered Ambient Water Droplets & Floating Depth Orbs ─── */}
      <motion.div
        style={{ y: yFloatingOrb1 }}
        className="pointer-events-none absolute top-40 -left-20 w-80 h-80 rounded-full bg-sky-300/20 blur-3xl -z-10"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: yFloatingOrb2 }}
        className="pointer-events-none absolute top-[700px] -right-20 w-96 h-96 rounded-full bg-blue-300/15 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28">
        {/* ─── 1. Services Hero ─── */}
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-300/70 bg-white/70 backdrop-blur-md shadow-xs text-xs font-semibold text-[#323192]"
            >
              <Droplets className="w-3.5 h-3.5 text-[#323192]" />
              <span>Bespoke Mineral Hydration Solutions</span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.12]"
            >
              Refreshing Solutions <br className="hidden sm:inline" />
              <span className="text-[#323192]">for Every Occasion.</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              From personalized bottles to bulk bottled-water arrangements, Oprism brings a
              refreshing touch to every occasion.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <a
                href="#services-catalog"
                onClick={handleExploreClick}
                className="group inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Bottled-Water Visual (hidden on mobile, visible on tablet and desktop) */}
          <motion.div
            style={{ y: yHeroBottle }}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex lg:col-span-5 justify-center items-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center">
              {/* Radial glow and floating droplets */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-blue-500/15 to-transparent rounded-full blur-3xl -z-10 scale-95" />

              <img
                src={bottleImg}
                alt="Oprism Bottled Water Collection"
                className="w-full h-auto object-contain drop-shadow-2xl max-h-[380px] sm:max-h-[460px] select-none"
              />

              {/* Floating feature pill 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden sm:flex absolute -bottom-3 -left-4 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-200/80 shadow-lg text-xs font-semibold text-slate-800"
              >
                <Sparkles className="w-4 h-4 text-[#323192]" />
                <span>Custom Label Design</span>
              </motion.div>

              {/* Floating feature pill 2 */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden sm:flex absolute top-6 -right-4 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-200/80 shadow-lg text-xs font-semibold text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pristine Multi-Stage Purity</span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ─── 2. Our Services Cards ─── */}
        <section id="services-catalog" className="space-y-10 sm:space-y-12">
          {/* Section Header */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#323192] block">
              Tailored Hydration
            </span>
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Our Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our curated bottled-water options engineered for celebrations, business hospitality,
              and high-volume event catering.
            </p>
          </motion.div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isEven ? -40 : 40 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-3xl bg-white/80 backdrop-blur-md border border-sky-100/90 shadow-sm hover:shadow-xl hover:border-sky-300/60 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Image with Parallax Zoom Container */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-sky-50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#323192] shadow-xs">
                      <Icon className="w-3.5 h-3.5 text-[#323192]" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <h3
                        style={{ fontFamily: "'Comfortaa', sans-serif" }}
                        className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 group-hover:text-[#323192] transition-colors"
                      >
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Feature chips */}
                    <div className="pt-2 border-t border-sky-100/70 flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-sky-50/80 px-2.5 py-1 rounded-lg border border-sky-100/80"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#323192]" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ─── 3. How It Works (Modern Horizontal Step-Based Layout) ─── */}
        <section className="space-y-12">
          {/* Header */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#323192] block">
              Simple 4-Step Process
            </span>
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
            >
              How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From your initial request to doorstep event delivery, we make ordering effortless.
            </p>
          </motion.div>

          {/* 4 Steps in Horizontal Grid with Connectors */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Desktop connecting track line behind cards */}
            <div
              className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-sky-200 via-[#323192]/30 to-sky-200 -z-10"
              aria-hidden="true"
            />

            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.75,
                    delay: shouldReduceMotion ? 0 : index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 sm:p-7 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-100 shadow-sm hover:shadow-lg hover:border-sky-300/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-[#323192] flex items-center justify-center group-hover:bg-[#323192] group-hover:text-white transition-colors duration-300">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-extrabold font-mono text-sky-200 group-hover:text-[#323192] transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3
                      style={{ fontFamily: "'Comfortaa', sans-serif" }}
                      className="text-base sm:text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#323192] transition-colors"
                    >
                      {step.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ─── 4. Closing CTA ─── */}
        <section className="flex justify-center">
          <div className="w-full max-w-4xl rounded-3xl bg-gradient-to-br from-[#070d26] via-[#0d173d] to-[#1a255a] border border-sky-400/15 shadow-2xl shadow-indigo-950/20 px-6 sm:px-12 md:px-16 py-10 sm:py-12 md:py-14 text-center flex flex-col items-center justify-center relative overflow-hidden">
            {/* CTA Heading: reveal from left */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4"
            >
              Planning Something Special?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sky-100/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal"
            >
              Let's create a refreshing experience for your next celebration or business event.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-[#0a1128] hover:bg-sky-50 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a1128] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
