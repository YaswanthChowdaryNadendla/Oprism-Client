import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Truck } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Hero } from "../components/Hero";
import { SlidingNumber } from "../components/ui/sliding-number";
import { MarkerHighlight } from "../components/ui/marker-highlight";
import { TestimonialsSection, type TestimonialItem } from "../components/ui/testimonials-with-marquee";
import celebrationsImg from "../assets/celebrations.png";
import businessImg from "../assets/Business&Hospitality.png";
import specialOccasionsImg from "../assets/special-occasions.jpg";
import eventCtaBannerImg from "../assets/event-cta-banner.png";

// Sample testimonials with Telugu names in English
const sampleTestimonials: TestimonialItem[] = [
  {
    author: {
      name: "Sai Kiran",
      handle: "@saikiran",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    text: "Ordered customized Oprism bottles for our family celebration. The presentation added a beautiful touch to the occasion.",
  },
  {
    author: {
      name: "Lakshmi Priya",
      handle: "@lakshmipriya",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    text: "The personalized Oprism bottles looked elegant at our event. A lovely way to make the occasion feel special.",
  },
  {
    author: {
      name: "Venkata Krishna",
      handle: "@venkatakrishna",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    text: "We arranged Oprism bottled water for a business gathering. The presentation was professional and convenient.",
  },
  {
    author: {
      name: "Sravani",
      handle: "@sravani",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    },
    text: "The customized bottles made our celebration feel more personal. Loved the overall presentation.",
  },
  {
    author: {
      name: "Pavan Kumar",
      handle: "@pavankumar",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    },
    text: "An elegant bottled-water presentation for our event. Oprism gave us a convenient way to arrange refreshments.",
  },
  {
    author: {
      name: "Harika",
      handle: "@harika",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    },
    text: "Beautifully presented bottles that complemented our special occasion. The customized branding was a nice touch.",
  },
];

export function Home() {
  const eventCards = [
    {
      title: "Celebrations",
      description:
        "Thoughtfully customized bottled water for weddings, birthdays and memorable celebrations.",
      image: celebrationsImg,
    },
    {
      title: "Business & Hospitality",
      description:
        "Premium bottled-water arrangements for corporate gatherings, hotels and hospitality spaces.",
      image: businessImg,
    },
    {
      title: "Special Occasions",
      description:
        "Personalized bottles and beverage solutions that make your important moments stand out.",
      image: specialOccasionsImg,
    },
  ];

  const featureCards = [
    {
      title: "FSSAI Licensed",
      description: "Operating with the applicable FSSAI food safety licence.",
      icon: ShieldCheck,
    },
    {
      title: "Quality & Safety Standards",
      description: "Committed to maintaining food safety and quality standards.",
      icon: CheckCircle2,
    },
    {
      title: "Customized Bottle Branding",
      description: "Personalized labels for events, businesses and special occasions.",
      icon: Sparkles,
    },
    {
      title: "Reliable Bulk Supply",
      description: "Convenient bulk ordering for celebrations, corporate events and hospitality.",
      icon: Truck,
    },
  ];

  const shouldReduceMotion = useReducedMotion();
  const [stat1, setStat1] = React.useState(100);
  const [stat2, setStat2] = React.useState(100);
  const [stat3, setStat3] = React.useState(99.9);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setStat1(100);
      setStat2(100);
      setStat3(99.9);
      return;
    }

    let isMounted = true;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let animFrameId: number | null = null;

    const animateCount = () => {
      const startTime = performance.now();
      const duration = 700; // 700ms smooth count-up slide

      const tick = (now: number) => {
        if (!isMounted) return;
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);

        // Smooth cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);

        const current1 = Math.round(ease * 100);
        const current2 = Math.round(ease * 100);
        const current3 =
          progress >= 1
            ? 99.9
            : Math.max(0.1, Number((ease * 99.9).toFixed(1)));

        setStat1(current1);
        setStat2(current2);
        setStat3(current3);

        if (progress < 1) {
          animFrameId = requestAnimationFrame(tick);
        } else {
          // Exactly at target
          setStat1(100);
          setStat2(100);
          setStat3(99.9);

          // Hold target for 3 seconds before next cycle
          timeoutId = setTimeout(() => {
            if (isMounted) {
              animateCount();
            }
          }, 3000);
        }
      };

      // Start count-up animation cycle
      setStat1(0);
      setStat2(0);
      setStat3(0.1);
      animFrameId = requestAnimationFrame(tick);
    };

    // Initial run on mount
    animateCount();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative">
      {/* 1. Hero Section with floating Oprism crystal bottle visual & call to actions */}
      <Hero />

      {/* 2. Events We Serve Section */}
      <section className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          {/* Section Heading */}
          <div className="mb-6 sm:mb-8">
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] text-left"
            >
              <MarkerHighlight
                before="Events We "
                highlight="Serve"
                markerColor="#38bdf8"
                baseColor="#0f172a"
                highlightedTextColor="#0f172a"
              />
            </h2>
          </div>

          {/* 3 Compact Responsive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {eventCards.map((card, idx) => (
              <div
                key={idx}
                className="group flex flex-col h-full bg-white/80 backdrop-blur-md rounded-2xl border border-white/80 shadow-md shadow-sky-950/5 hover:shadow-xl hover:shadow-[#323192]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Compact Image Container with subtle zoom on hover */}
                <div className="relative h-44 sm:h-48 md:h-44 lg:h-48 w-full overflow-hidden bg-sky-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Compact Content Area */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#323192] transition-colors"
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Oprism? Section */}
      <section className="py-14 sm:py-18 lg:py-24 relative z-10 border-t border-sky-100/60">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/40 via-white/50 to-sky-50/30 pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          {/* Section Heading & Supporting Description */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] mb-3"
            >
              <MarkerHighlight
                before="Why Choose "
                highlight="Oprism"
                after="?"
                markerColor="#38bdf8"
                baseColor="#0f172a"
                highlightedTextColor="#0f172a"
              />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              More than hydration. A premium touch for every occasion.
            </p>
          </div>

          {/* 1. Four Feature Cards: Desktop: 4 in row, Tablet: 2 per row, Mobile: 1 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-100/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-100/70 text-[#323192] flex items-center justify-center mb-4 group-hover:bg-[#323192] group-hover:text-white transition-colors duration-300">
                    <card.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-base sm:text-lg font-bold text-slate-900 mb-2 tracking-tight"
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Responsive Animated Statistics Row (Transparent, Card-Free) */}
          <div className="my-12 sm:my-16 max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-baseline justify-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#323192] tracking-tight mb-2 select-none">
                  <SlidingNumber value={stat1} />
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#323192] ml-1">%</span>
                </div>
                <p className="text-slate-800 font-semibold text-sm sm:text-base tracking-wide">
                  Quality Assurance
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-baseline justify-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#323192] tracking-tight mb-2 select-none">
                  <SlidingNumber value={stat2} />
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#323192] ml-1">%</span>
                </div>
                <p className="text-slate-800 font-semibold text-sm sm:text-base tracking-wide">
                  Customer Focus
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-baseline justify-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#323192] tracking-tight mb-2 select-none">
                  <SlidingNumber value={stat3} decimalSeparator="." />
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#323192] ml-1">%</span>
                </div>
                <p className="text-slate-800 font-semibold text-sm sm:text-base tracking-wide">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* 3. Centered Discover Oprism CTA */}
          <div className="flex justify-center mt-10 sm:mt-12 mb-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Discover Oprism</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Testimonials with Marquee */}
          <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-sky-100/70">
            <TestimonialsSection
              title="Voices of Trust, Stories of Oprism."
              description="Discover how Oprism brings a refreshing touch to celebrations, businesses and special occasions."
              testimonials={sampleTestimonials}
            />
          </div>
        </div>
      </section>

      {/* 4. Cinematic Event CTA Banner */}
      <section className="pt-6 sm:pt-10 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-900/40 bg-[#070B19]">
            {/* Desktop & Tablet Layout (md:flex): Cinematic Wide Composition with Left-side Text and Right-side Bottle */}
            <div className="hidden md:flex relative min-h-[500px] lg:min-h-[540px] items-center">
              {/* Cinematic Background Banner Image */}
              <img
                src={eventCtaBannerImg}
                alt="Planning for an Event with Oprism"
                className="absolute inset-0 w-full h-full object-cover object-[80%_center] lg:object-right select-none"
              />

              {/* Gradient Overlays: Ensure Left Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070B19] via-[#070B19]/90 to-transparent w-[58%] lg:w-[50%] pointer-events-none" />

              {/* Ambient Aqua/Blue Glow */}
              <div className="absolute top-1/2 -translate-y-1/2 left-10 lg:left-16 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Left-Aligned Heading and Glowing CTA */}
              <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 py-12 md:py-16">
                <div className="max-w-[340px] lg:max-w-xl text-left">
                  {/* Two-Line Exact Heading */}
                  <h2
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-6 md:mb-8"
                  >
                    <span className="block">Planning for an Event?</span>
                    <span className="block mt-2 sm:mt-3 text-sky-200">
                      Let's Make It Special with Oprism.
                    </span>
                  </h2>

                  {/* Prominent Glowing Blue CTA Button */}
                  <div>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2.5 sm:gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(59,130,246,0.55)] hover:shadow-[0_0_35px_rgba(59,130,246,0.85)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      <span>Plan Your Event</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Cleanly Stacked Layout (< md) */}
            <div className="md:hidden flex flex-col bg-[#070B19]">
              {/* Top Text Block */}
              <div className="p-7 sm:p-9 text-left relative z-10">
                <div className="absolute top-0 left-0 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
                <h2
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.2] mb-6"
                >
                  <span className="block">Planning for an Event?</span>
                  <span className="block mt-2 text-sky-200">
                    Let's Make It Special with Oprism.
                  </span>
                </h2>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95 transition-all"
                >
                  <span>Plan Your Event</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Bottom Image Block: Shows the chilled bottle with splash & luxury event clearly */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={eventCtaBannerImg}
                  alt="Chilled Oprism Bottle for Events"
                  className="w-full h-full object-cover object-[80%_center] select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#070B19] via-transparent to-transparent h-12 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
