import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import bottleImg from "../assets/herosection.png";
import storyImg from "../assets/Business&Hospitality.png";

/**
 * About Page
 * Compact, premium single-page brand introduction with smooth scroll-reveal animations.
 */
export function About() {
  const shouldReduceMotion = useReducedMotion();

  // Three core values
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality & Safety",
      description:
        "Rigorous multi-stage purification and balanced essential minerals, ensuring every drop meets uncompromised standards of health and safety.",
    },
    {
      icon: Sparkles,
      title: "Thoughtful Presentation",
      description:
        "Pristine bottle silhouettes and personalized bespoke labels crafted to elevate your event tables and reflect your unique style.",
    },
    {
      icon: CheckCircle2,
      title: "Customer Trust",
      description:
        "Reliable on-time delivery, dedicated concierge support, and consistent excellence you can depend on for every milestone.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
        {/* ─── 1. About Hero ─── */}
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & Button */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Heading: slide in from the left */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.15]"
            >
              More Than Water. <br className="hidden sm:inline" />
              <span className="text-[#323192]">A Promise of Purity.</span>
            </motion.h1>

            {/* Description & Button: reveal from the right */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Oprism brings together quality-focused hydration, thoughtful presentation and
                personalized bottled-water solutions for everyday needs and special occasions.
              </p>

              <div>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Bottle Visual (hidden on mobile, visible on tablet and desktop) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex lg:col-span-5 justify-center items-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center">
              <div className="absolute inset-0 bg-sky-200/40 rounded-full blur-3xl -z-10 pointer-events-none transform scale-90" />
              <img
                src={bottleImg}
                alt="Oprism Premium Water Bottles"
                className="w-full h-auto object-contain drop-shadow-2xl max-h-[380px] sm:max-h-[440px]"
              />
            </div>
          </motion.div>
        </section>

        {/* ─── 2. Our Story ─── */}
        <section className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-xl shadow-sky-950/5">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story Text: slide in from the left */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-4 text-center lg:text-left"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#323192] block">
                Our Story
              </span>
              <h2
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug"
              >
                A Refreshing Idea. <br />
                <span className="text-[#323192]">A Distinctive Experience.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Founded with a purpose to redefine how hydration is experienced at gatherings, Oprism
                was created to unite pristine mineral quality with refined presentation. We believe
                bottled water should be more than an afterthought—it should complement the elegance of
                your celebrations, reflect genuine hospitality, and inspire total customer
                satisfaction. From everyday wellness to signature corporate events and memorable
                weddings, we ensure every bottle embodies our unyielding commitment to purity.
              </p>
            </motion.div>

            {/* Story Visual: slide in from the right */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-sky-100 shadow-md">
                <img
                  src={storyImg}
                  alt="Oprism Hospitality Setup"
                  className="w-full h-auto object-cover max-h-[300px] sm:max-h-[340px] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 3. Our Values ─── */}
        <section className="space-y-8">
          {/* Values Heading: reveal from the left */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-xl mx-auto space-y-2"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#323192] block">
              Core Principles
            </span>
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
            >
              Our Values
            </h2>
          </motion.div>

          {/* Three Value Items: appear sequentially with subtle upward fade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.75,
                    delay: shouldReduceMotion ? 0 : index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 sm:p-7 rounded-2xl bg-white/80 backdrop-blur-md border border-sky-100/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-100/70 text-[#323192] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3
                      style={{ fontFamily: "'Comfortaa', sans-serif" }}
                      className="text-base sm:text-lg font-bold text-slate-900 mb-2 tracking-tight"
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.description}
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
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6 sm:mb-8"
            >
              Make Every Moment Refreshing.
            </motion.h2>

            {/* CTA Button: reveal from right */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-[#0a1128] hover:bg-sky-50 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a1128] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
