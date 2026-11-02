import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, Gem, Compass, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "../assets/Herosectionvideo.mp4";

const LOOP_START_TIME = 10.0;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isMounted = true;

    // 1. When metadata loads, seek immediately to 10.0s before playing
    const handleLoadedMetadata = () => {
      if (!isMounted || !video) return;
      if (video.duration > LOOP_START_TIME) {
        video.currentTime = LOOP_START_TIME;
      } else {
        // Fallback if video is <= 10 seconds
        video.currentTime = 0;
        setIsVideoReady(true);
        video.play().catch(() => {});
      }
    };

    // 2. Only reveal and start playback once the video has seeked to 10.0s
    const handleSeeked = () => {
      if (!isMounted || !video) return;
      if (video.currentTime >= LOOP_START_TIME - 0.15) {
        setIsVideoReady(true);
        video.play().catch(() => {});
      }
    };

    // 3. Continuously monitor playback: loop back to 10.0s at video end
    const handleTimeUpdate = () => {
      if (!video) return;
      if (video.duration > LOOP_START_TIME) {
        // When approaching the end of the video, seek back to 10s
        if (video.currentTime >= video.duration - 0.2 || video.ended) {
          video.currentTime = LOOP_START_TIME;
          video.play().catch(() => {});
        } else if (video.currentTime < LOOP_START_TIME - 0.3) {
          // Guard: prevent any playback before 10.0s
          video.currentTime = LOOP_START_TIME;
        }
      }
    };

    // 4. Fallback on ended event: seek back to 10.0s
    const handleEnded = () => {
      if (!video) return;
      if (video.duration > LOOP_START_TIME) {
        video.currentTime = LOOP_START_TIME;
      } else {
        video.currentTime = 0;
      }
      video.play().catch(() => {});
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    // If metadata was already cached / loaded
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      isMounted = false;
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      video.pause();
    };
  }, []);

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Headline, Description & Desktop Actions */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-sky-300/60 bg-white/60 backdrop-blur-md shadow-sm mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#323192]" />
              <span className="text-[10px] sm:text-xs font-bold text-[#323192] tracking-wider uppercase">
                Master Curators of Architectural Minerals
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#0f172a] leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6"
            >
              Pure Natural Elegance.{" "}
              <span className="text-[#323192] block sm:inline">
                Refracted in Stone.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8">
              Transforming rare geological formations and crystal minerals into extraordinary architectural surfaces, bespoke private residences, and landmark spaces.
            </p>

            {/* Desktop Action Buttons (lg and up) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#collection"
                className="px-8 py-4 rounded-full bg-[#323192] text-white font-bold text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Explore Product Collection
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#enquiry"
                className="px-8 py-4 rounded-full border border-sky-300/80 bg-white/70 backdrop-blur-md text-[#323192] font-bold text-sm hover:bg-white hover:border-[#323192]/40 transition-all flex items-center justify-center gap-2"
              >
                Request Private Consultation
              </a>
            </div>
          </div>

          {/* Right Column: Cinematic Video Visual with Seamless Aqua Glow */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center w-full my-2 lg:my-0">
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[340px] sm:max-w-md lg:max-w-none flex justify-center items-center"
            >
              {/* Soft ambient radial glow behind the video */}
              <div
                className="absolute inset-4 sm:inset-8 bg-sky-400/25 rounded-full blur-3xl pointer-events-none -z-10 scale-95"
                aria-hidden="true"
              />
              <video
                ref={videoRef}
                src={heroVideo}
                muted
                playsInline
                autoPlay
                preload="auto"
                className={`w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[480px] lg:max-h-[560px] xl:max-h-[620px] object-contain drop-shadow-[0_20px_35px_rgba(34,73,150,0.18)] select-none rounded-2xl transition-opacity duration-500 ${
                  isVideoReady ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          </div>

          {/* Mobile / Tablet Action Buttons (visible below video on mobile) */}
          <div className="col-span-1 lg:hidden flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto mt-2">
            <a
              href="#collection"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              Explore Product Collection
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#enquiry"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-sky-300/80 bg-white/70 backdrop-blur-md text-[#323192] font-bold text-xs sm:text-sm hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              Request Private Consultation
            </a>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-7xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-sky-200/50">
          {[
            { label: "100% Genuine Minerals", desc: "Ethically quarried globally", icon: <Gem className="w-4 h-4 text-[#323192]" /> },
            { label: "Bespoke Fabrication", desc: "Sub-millimeter precision", icon: <Compass className="w-4 h-4 text-[#323192]" /> },
            { label: "Refractive Quality", desc: "Certified light transmission", icon: <Sparkles className="w-4 h-4 text-[#323192]" /> },
            { label: "Lifetime Durability", desc: "Sealed geological warranty", icon: <ShieldCheck className="w-4 h-4 text-[#323192]" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm text-left flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-sky-100/60 mt-0.5">{item.icon}</div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
