import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    <section className="relative w-full min-h-[85svh] sm:min-h-[90svh] lg:h-[100svh] flex flex-col justify-start sm:justify-center items-center overflow-hidden">
      {/* ─── Edge-to-Edge Background Video Layer (Begins behind transparent navbar) ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          autoPlay
          preload="auto"
          className={`w-full h-full object-cover object-[center_85%] sm:object-[center_75%] lg:object-center transition-opacity duration-700 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Subtle translucent aqua and frosted overlay ensuring crystal-clear centered text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white/50 to-sky-100/80 backdrop-blur-[1.5px]" />
        {/* Soft radial highlight centered behind typography for optimal readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/85 via-white/45 to-transparent pointer-events-none" />
        {/* Seamless bottom fade blending into the page background */}
        <div className="absolute inset-x-0 bottom-0 h-14 sm:h-24 bg-gradient-to-t from-sky-100/70 to-transparent pointer-events-none" />
      </div>

      {/* ─── Centered Hero Content Overlay (Above the Video) ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center pt-20 pb-8 sm:py-16 lg:py-0 my-auto">
        {/* 1. Main Headline */}
        <h1
          style={{ fontFamily: "'Comfortaa', sans-serif" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#0f172a] leading-[1.18] sm:leading-[1.14] mb-4 sm:mb-6 max-w-4xl drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]"
        >
          Pure by Nature.{" "}
          <span className="text-[#323192] block sm:inline">
            Premium by Choice.
          </span>
        </h1>

        {/* 2. Supporting Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 max-w-[560px] font-normal leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
          From everyday hydration to unforgettable celebrations, experience refreshment with Oprism.
        </p>

        {/* 3. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#collection"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#323192] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Explore Oprism
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-sky-300/80 bg-white/90 backdrop-blur-md text-[#323192] font-bold text-xs sm:text-sm hover:bg-white hover:border-[#323192]/40 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Plan Your Event
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
