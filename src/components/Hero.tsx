import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, Gem, Compass, ShieldCheck } from "lucide-react";
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
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      {/* ─── Edge-to-Edge Background Video Layer ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          autoPlay
          preload="auto"
          className={`w-full h-full object-cover object-center sm:object-[center_35%] transition-opacity duration-700 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Subtle translucent aqua overlay for crystal clarity and premium readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/75 via-white/45 to-sky-100/75 backdrop-blur-[1.5px]" />
        {/* Soft radial highlight behind center typography */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none" />
        {/* Seamless bottom fade blending into the page background */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-sky-100/80 to-transparent pointer-events-none" />
      </div>

      {/* ─── Hero Content Overlay (Above the Video) ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto py-6 sm:py-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full border border-sky-300/70 bg-white/85 backdrop-blur-md shadow-sm mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#323192]" />
          <span className="text-[10px] sm:text-xs font-bold text-[#323192] tracking-wider uppercase">
            Master Curators of Architectural Minerals
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{ fontFamily: "'Comfortaa', sans-serif" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0f172a] leading-[1.18] sm:leading-[1.12] mb-4 sm:mb-6 max-w-4xl"
        >
          Pure Natural Elegance.{" "}
          <span className="text-[#323192] block sm:inline">
            Refracted in Stone.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8">
          Transforming rare geological formations and crystal minerals into extraordinary architectural surfaces, bespoke private residences, and landmark spaces.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#collection"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Explore Product Collection
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#enquiry"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-sky-300/80 bg-white/85 backdrop-blur-md text-[#323192] font-bold text-xs sm:text-sm hover:bg-white hover:border-[#323192]/40 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Request Private Consultation
          </a>
        </div>
      </div>

      {/* ─── Highlights Row (Docked at Bottom of Hero) ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-6 sm:pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 border-t border-sky-200/60 pt-6 sm:pt-8">
          {[
            { label: "100% Genuine Minerals", desc: "Ethically quarried globally", icon: <Gem className="w-4 h-4 text-[#323192]" /> },
            { label: "Bespoke Fabrication", desc: "Sub-millimeter precision", icon: <Compass className="w-4 h-4 text-[#323192]" /> },
            { label: "Refractive Quality", desc: "Certified light transmission", icon: <Sparkles className="w-4 h-4 text-[#323192]" /> },
            { label: "Lifetime Durability", desc: "Sealed geological warranty", icon: <ShieldCheck className="w-4 h-4 text-[#323192]" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm text-left flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-sky-100/70 mt-0.5">{item.icon}</div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</div>
                <div className="text-[11px] text-slate-600 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
