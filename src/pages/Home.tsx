import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Award, Layers, Truck } from "lucide-react";
import { Hero } from "../components/Hero";
import { TestimonialsSection, type TestimonialItem } from "../components/ui/testimonials-with-marquee";
import celebrationsImg from "../assets/celebrations.png";
import businessImg from "../assets/Business&Hospitality.png";
import specialOccasionsImg from "../assets/special-occasions.jpg";
import bottlesImg from "../assets/herosection.png";

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

  const benefits = [
    {
      number: "01",
      title: "Premium Presentation",
      description:
        "Elegant bottled-water presentation that complements every setting.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Customized Branding",
      description:
        "Personalized bottle labels tailored to your event or business.",
      icon: Award,
    },
    {
      number: "03",
      title: "Solutions for Every Occasion",
      description:
        "Bottled-water solutions for celebrations, corporate events and hospitality.",
      icon: Layers,
    },
    {
      number: "04",
      title: "Reliable Service",
      description:
        "Convenient ordering and coordinated delivery for your requirements.",
      icon: Truck,
    },
  ];

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
              Events We <span className="text-[#323192]">Serve</span>
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
              Why Choose <span className="text-[#323192]">Oprism?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              More than hydration. A premium touch for every occasion.
            </p>
          </div>

          {/* Two-Column Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative p-6 sm:p-8 flex items-center justify-center">
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-sky-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
                <img
                  src={bottlesImg}
                  alt="Oprism Premium Water Bottles"
                  className="w-full max-w-[280px] sm:max-w-sm lg:max-w-md h-auto object-contain drop-shadow-xl select-none transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Benefits Column */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.number}
                    className="p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-[#323192] bg-sky-100/70 px-2.5 py-1 rounded-full">
                          {benefit.number}
                        </span>
                        <benefit.icon className="w-4 h-4 text-[#323192]" />
                      </div>
                      <h3
                        style={{ fontFamily: "'Comfortaa', sans-serif" }}
                        className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight"
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discover Oprism CTA Button */}
              <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <span>Discover Oprism</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials with Marquee */}
          <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-sky-100/70">
            <TestimonialsSection
              title="What People Say About Oprism"
              description="Discover how Oprism brings a refreshing touch to celebrations, businesses and special occasions."
              testimonials={sampleTestimonials}
            />
          </div>
        </div>
      </section>

      {/* 4. Bottom Gateway Banner */}
      <section className="pt-6 sm:pt-10 pb-20 relative z-10">
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
