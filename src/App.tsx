import React, { useState, useCallback } from "react";
import { LoaderOverlay } from "./components/LoaderOverlay";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductCollection } from "./components/ProductCollection";
import { ServicesOccasions } from "./components/ServicesOccasions";
import { AboutSection } from "./components/AboutSection";
import { ContactEnquiry } from "./components/ContactEnquiry";
import { Footer } from "./components/Footer";
import gradient21st from "./assets/gradient-21st.png";

export function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-sky-200 selection:text-[#323192]">
      {/* ─── Global Fixed Background using gradient-21st.png ─── */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${gradient21st})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ─── 1. Full-Screen Loading Screen with identical gradient-21st background ─── */}
      {loading && (
        <LoaderOverlay
          text="OPRISM"
          onComplete={handleLoadingComplete}
        />
      )}

      {/* ─── 2. Entire Website Content with seamless reveal ─── */}
      <div
        className={`site-content relative z-10 ${!loading ? "visible" : ""}`}
        aria-hidden={loading}
      >
        <Navbar />
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Product Collection */}
          <ProductCollection />

          {/* Services and Occasions */}
          <ServicesOccasions />

          {/* About Section */}
          <AboutSection />

          {/* Contact / Enquiry Section */}
          <ContactEnquiry />
        </main>
        <Footer />

        {/* Floating Quick-Control to replay and test loader anytime */}
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setLoading(true)}
            className="px-4 py-2 rounded-full bg-white/80 border border-sky-300/80 text-[#323192] font-bold text-xs shadow-lg shadow-sky-950/10 hover:bg-white hover:scale-105 backdrop-blur-md transition-all flex items-center gap-1.5"
            title="Replay the loading animation"
          >
            ↺ Replay Loader
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
