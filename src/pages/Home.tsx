import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "../components/Hero";
import { ProductCollection } from "../components/ProductCollection";
import eventsWeServeImg from "../assets/Eventsweserve.png";

export function Home() {
  return (
    <div className="relative">
      {/* 1. Hero Section with floating Oprism crystal bottle visual & call to actions */}
      <Hero />

      {/* 2. Events We Serve Introduction Image */}
      <section className="py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex justify-center items-center">
          <img
            src={eventsWeServeImg}
            alt="Events We Serve"
            className="w-full h-auto object-contain max-w-4xl mx-auto select-none rounded-2xl drop-shadow-sm"
          />
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
