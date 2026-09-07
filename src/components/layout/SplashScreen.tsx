"use client";

import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock body scroll while splash is active
    document.body.style.overflow = "hidden";

    // Trigger curtain split exit animation after 850ms
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = "";
    }, 850);

    // Unmount completely after exit animation completes (850ms + 650ms = 1500ms)
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
    }, 1500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    if (!isExiting) {
      setIsExiting(true);
      document.body.style.overflow = "";
      setTimeout(() => setIsFinished(true), 650);
    }
  };

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] select-none overflow-hidden transition-opacity duration-500 ${
        isExiting ? "pointer-events-none" : "pointer-events-auto cursor-pointer"
      }`}
      onClick={handleSkip}
      aria-hidden="true"
    >
      {/* ================= LEFT SPLIT CURTAIN PANEL ================= */}
      <div
        className={`absolute inset-y-0 left-0 w-[calc(50%+1px)] bg-[#0A1D15] border-r border-[#E5A83B]/20 z-20 flex items-center justify-end overflow-hidden transition-transform duration-[650ms] ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
          isExiting ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          transform: isExiting ? "translate3d(-100%, 0, 0)" : "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Soft Ambient Radial Light on Left */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-l from-[#E5A83B]/10 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* ================= RIGHT SPLIT CURTAIN PANEL ================= */}
      <div
        className={`absolute inset-y-0 right-0 w-[calc(50%+1px)] bg-[#0A1D15] border-l border-[#E5A83B]/20 z-20 flex items-center justify-start overflow-hidden transition-transform duration-[650ms] ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
          isExiting ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          transform: isExiting ? "translate3d(100%, 0, 0)" : "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Soft Ambient Radial Light on Right */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-r from-[#E5A83B]/10 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* ================= CENTER BRAND HERO CONTENT ================= */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-4 transition-all duration-350 ease-out will-change-transform ${
          isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      >
        {/* Top Brand Subtitle & Monogram */}
        <div className="animate-splash-content flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#E5A83B]/60" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.32em] text-[#E5A83B]">
            EST. 2020 • CHATTOGRAM
          </span>
          <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#E5A83B]/60" />
        </div>

        {/* GRAND ARCHITECTURAL "HEAVEN" WORDMARK */}
        <div className="animate-splash-content relative select-none text-center">
          <h1 className="font-display font-black text-[18vw] sm:text-[16vw] lg:text-[14vw] tracking-[0.04em] uppercase bg-gradient-to-b from-white via-[#F5F2EA] to-white/60 bg-clip-text text-transparent leading-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            HEAVEN
          </h1>
        </div>

        {/* Bottom Atelier Descriptor & Progress Bar */}
        <div className="animate-splash-content flex flex-col items-center gap-3 mt-1 sm:mt-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-300 uppercase">
            <span>FURNITURE MART</span>
            <span className="text-[#E5A83B]">✦</span>
            <span className="text-neutral-400">HANDCRAFTED ATELIER</span>
          </div>

          {/* Ultra-Fine Gold Progress Fill Line */}
          <div className="w-36 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
            <div className="h-full bg-gradient-to-r from-[#163A2B] via-[#E5A83B] to-white rounded-full shadow-[0_0_10px_rgba(229,168,59,0.8)] animate-splash-progress" />
          </div>
        </div>
      </div>
    </div>
  );
}
