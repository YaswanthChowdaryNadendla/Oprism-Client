import React, { useState, useCallback } from "react";
import { LoaderOverlay } from "./components/LoaderOverlay";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { InteractiveRouter } from "./components/InteractiveRouter";
import { Footer } from "./components/Footer";

export function App() {
  const [loading, setLoading] = useState(true);
  const [textCase, setTextCase] = useState<"OPRISM" | "oprism">("OPRISM");

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* ─── 1. Oprism Reference Loading Animation (21st.dev motion-loading-fill-text) ─── */}
      {loading && (
        <LoaderOverlay
          text={textCase}
          onComplete={handleLoadingComplete}
        />
      )}

      {/* ─── 2. Homepage Content with smooth reveal ─── */}
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

        {/* Floating Quick-Control to replay and test loader anytime */}
        <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-slate-950/85 p-1.5 rounded-full border border-sky-900/60 backdrop-blur-md shadow-xl text-xs font-mono">
          <button
            onClick={() => setLoading(true)}
            className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 hover:text-white transition-colors"
            title="Replay the loading animation"
          >
            ↺ Replay Loader
          </button>
          <button
            onClick={() => {
              setTextCase((prev) => (prev === "OPRISM" ? "oprism" : "OPRISM"));
              setLoading(true);
            }}
            className="px-2.5 py-1 rounded-full text-slate-400 hover:text-white transition-colors"
            title="Toggle between OPRISM and oprism"
          >
            Case: <span className="text-sky-400 font-bold">{textCase}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
