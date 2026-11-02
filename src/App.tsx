import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LoaderOverlay } from "./components/LoaderOverlay";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import gradient21st from "./assets/gradient-21st.png";

/**
 * ScrollToTop
 * Automatically resets window scroll position to the top upon route changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Oprism - The Signature of Purity";
  }, [pathname]);

  return null;
}

export function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen text-slate-900 selection:bg-sky-200 selection:text-[#323192] bg-transparent">
        {/* ─── Global Fixed Background using gradient-21st.png ─── */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${gradient21st})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* ─── 1. Full-Screen Loading Screen on initial entry ─── */}
        {loading && (
          <LoaderOverlay
            text="OPRISM"
            onComplete={handleLoadingComplete}
          />
        )}

        {/* ─── 2. Entire Website Content with seamless reveal ─── */}
        <div
          className={`site-content relative z-10 flex flex-col min-h-screen bg-transparent ${!loading ? "visible" : ""}`}
          aria-hidden={loading}
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
