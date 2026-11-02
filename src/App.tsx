import React, { useState, useCallback } from "react";
import { LoaderOverlay } from "./components/LoaderOverlay";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { InteractiveRouter } from "./components/InteractiveRouter";
import { Footer } from "./components/Footer";

export function App() {
  // Loading state: true on initial page load / refresh
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* ─── 1. Oprism Fullscreen Loading Screen (21st.dev motion-loading-fill-text) ─── */}
      {loading && <LoaderOverlay onComplete={handleLoadingComplete} />}

      {/* ─── 2. Homepage Content with smooth fade-in reveal ─── */}
      <div
        className={`site-content min-h-screen bg-[#020617] text-slate-100 ${
          !loading ? "visible" : ""
        }`}
        aria-hidden={loading}
      >
        <Navbar />
        <main>
          <Hero />
          <InteractiveRouter />
          <Features />
        </main>
        <Footer />

        {/* Floating Developer Control to preview/replay loader */}
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setLoading(true)}
            className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-sky-900/60 bg-slate-950/80 text-sky-400 hover:text-white hover:border-sky-500/50 backdrop-blur-md shadow-lg transition-all"
            title="Replay the Oprism loading animation"
          >
            ↺ Replay Loader
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
