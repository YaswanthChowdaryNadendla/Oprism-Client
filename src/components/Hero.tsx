import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <section className="relative w-full min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-4.5rem)] lg:h-[calc(100svh-4.5rem)] mt-16 sm:mt-[4.5rem] flex flex-col justify-start lg:justify-center overflow-hidden">
      {/* ─── Edge-to-Edge Background Video Layer ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          autoPlay
          preload="auto"
          className={`w-full h-full object-cover object-[center_92%] sm:object-[center_85%] lg:object-[72%_center] transition-opacity duration-700 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Left-side subtle light aqua feathering on desktop to guarantee crisp text legibility without obscuring the bottles */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50/95 via-sky-50/70 to-transparent lg:w-[55%] pointer-events-none" />
        {/* Top-down soft gradient on mobile/tablet to keep text legible in the upper area and leave the bottles pristine */}
        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-sky-50/90 via-sky-50/60 to-transparent lg:hidden pointer-events-none" />
        {/* Seamless bottom fade blending into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-sky-100/60 to-transparent pointer-events-none" />
      </div>

      {/* ─── Hero Content Overlay (Above the Video, Left-Aligned on Desktop to reveal bottles) ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center lg:items-start text-center lg:text-left pt-5 pb-4 sm:pt-8 sm:pb-6 lg:py-0 lg:my-auto">
        <div className="w-full max-w-lg lg:max-w-[380px] xl:max-w-[450px]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-sky-300/70 bg-white/90 backdrop-blur-md shadow-sm mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#323192]" />
            <span className="text-[10px] sm:text-xs font-bold text-[#323192] tracking-wider uppercase">
              Master Curators of Architectural Minerals
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.2] sm:leading-[1.14] mb-3 sm:mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]"
          >
            Pure Natural Elegance.{" "}
            <span className="text-[#323192] block sm:inline">
              Refracted in Stone.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-700 max-w-md font-normal leading-relaxed mb-4 sm:mb-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Transforming rare geological formations and crystal minerals into extraordinary architectural surfaces, bespoke private residences, and landmark spaces.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5 w-full sm:w-auto">
            <a
              href="#collection"
              className="w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Explore Product Collection
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#enquiry"
              className="w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-3.5 rounded-full border border-sky-300/80 bg-white/90 backdrop-blur-md text-[#323192] font-bold text-xs sm:text-sm hover:bg-white hover:border-[#323192]/40 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              Request Private Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
