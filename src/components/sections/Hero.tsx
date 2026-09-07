"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoModalOpen(false);
    };
    if (isVideoModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  return (
    <section
      id="top"
      className="relative text-neutral-800 overflow-hidden min-h-[100dvh] w-full pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 flex flex-col justify-between"
    >
      {/* Full Background Image for Desktop / Tablets (lg and up) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/hero-section-bg-image.png"
          alt="Heaven Furniture Luxury Showroom & Living Space"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle warm ambient vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-between">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-2 sm:pt-4">
          
          {/* ================= LEFT COLUMN: HEADLINE, CTAS, VALUE BADGES ================= */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start z-20">
            
            {/* Handcrafted Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-2xs">
              <span>✦</span>
              <span>HANDCRAFTED IN CHATTOGRAM</span>
            </div>

            {/* Headline with Custom Editorial Serif & Golden Underline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[4.2rem] xl:text-[4.8rem] text-[#111815] font-normal leading-[1.15] tracking-tight max-w-3xl">
              <span className="block">Make Your Home</span>
              <span className="block mt-1 sm:mt-1.5">
                More{" "}
                <span className="relative inline-block text-[#163A2B] font-medium">
                  Beautiful
                  {/* Organic curved gold/amber brush stroke */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3.5 sm:h-4 text-[#E5A83B] pointer-events-none"
                    viewBox="0 0 260 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 10C50 4.5 145 3 256 8C190 5 98 7 26 13"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Discover a world of modern, architectural solid-wood furniture tailored to your exact floor plan. Handcrafted from 100% seasoned Chittagong Teak and Shegun.
            </p>

            {/* Action Buttons with Zero-Jitter and Smooth Left-to-Right Green Fill */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
              <Link
                href="/shop"
                className="relative inline-flex items-center justify-center gap-2 rounded-full bg-[#163A2B] hover:bg-[#102a1f] text-white px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold shadow-[0_10px_25px_rgba(22,58,43,0.22)] hover:shadow-[0_14px_32px_rgba(22,58,43,0.3)] transition-all duration-300 group cursor-pointer flex-1 sm:flex-initial text-center"
              >
                <span>Explore Products</span>
                <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>

              {/* Watch Video Button with Left-to-Right Green Fill on Hover */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="relative inline-flex items-center justify-center rounded-full border border-neutral-300/90 bg-white/95 text-neutral-800 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold shadow-xs overflow-hidden group cursor-pointer transition-colors duration-300 hover:border-[#163A2B] flex-1 sm:flex-initial"
              >
                {/* Left to Right Green Background Sweep */}
                <span className="absolute inset-0 bg-[#163A2B] -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full" />
                
                <span className="relative z-10 flex items-center gap-2 text-neutral-800 group-hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Video</span>
                </span>
              </button>
            </div>

            {/* Feature Highlights Row (Clean & Responsive on all screens) */}
            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-5 border-t border-neutral-200/80 w-full max-w-xl">
              {/* Feature 1 */}
              <div className="flex items-center sm:items-start gap-2.5 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl border sm:border-0 border-neutral-200/60">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75m0 3.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-3.75h-3.75" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-[#111815] leading-tight">Free Delivery</h2>
                  <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5">Orders over ৳50,000</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center sm:items-start gap-2.5 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl border sm:border-0 border-neutral-200/60">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-[#111815] leading-tight">10-Yr Warranty</h2>
                  <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5">100% seasoned teak</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center sm:items-start gap-2.5 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl border sm:border-0 border-neutral-200/60">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-[#111815] leading-tight">Master Atelier</h2>
                  <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5">Bespoke custom fit</p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: DEDICATED VISUAL SHOWCASE ON MOBILE ================= */}
          <div className="lg:hidden w-full mt-2">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg border border-neutral-200/90 bg-neutral-100 group">
              <Image
                src="/hero-section-bg-image.png"
                alt="Heaven Furniture Luxury Living Room Showcase"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A83B] block">
                    Featured Collection
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">
                    Haven Living Sanctuary &amp; Teak Suite
                  </span>
                </div>
                <span className="text-[11px] font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  Chattogram
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ROW: STATS CARD & SCROLL CUE (LIFTED ~15PX) ================= */}
        <div className="mt-6 sm:mt-8 lg:mt-10 mb-3 sm:mb-4 -translate-y-3.5 sm:-translate-y-4 w-full grid grid-cols-1 md:grid-cols-3 items-end gap-6 pb-1">
          
          {/* Stats Card */}
          <div className="w-full md:col-span-2 lg:col-span-1 lg:max-w-max">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-400/40">
              
              {/* Stat 1 */}
              <div className="pt-2 sm:pt-0 sm:pr-4 flex flex-col">
                <span className="font-body font-bold text-xl sm:text-2xl text-[#111815] tracking-tight">
                  12K+
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">
                  Homes Styled
                </span>
              </div>

              {/* Stat 2 */}
              <div className="pt-3 sm:pt-0 sm:px-6 flex flex-col">
                <span className="font-body font-bold text-xl sm:text-2xl text-[#111815] tracking-tight">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">
                  Solid Hardwood
                </span>
              </div>

              {/* Stat 3 */}
              <div className="pt-3 sm:pt-0 sm:px-6 flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-body font-bold text-xl sm:text-2xl text-[#111815] tracking-tight">
                    4.9
                  </span>
                  <span className="text-[#E5A83B] text-lg leading-none">★</span>
                </div>
                <span className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">
                  Client Rating
                </span>
              </div>

              {/* Stat 4 */}
              <div className="pt-3 sm:pt-0 sm:pl-6 flex flex-col">
                <span className="font-body font-bold text-xl sm:text-2xl text-[#111815] tracking-tight">
                  25+
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">
                  Years Heritage
                </span>
              </div>

            </div>
          </div>

          {/* Scroll Down Indicator (Default Green Theme) */}
          <div className="hidden lg:flex md:col-span-1 lg:col-span-1 justify-center pb-2">
            <a
              href="#featured-categories"
              className="flex flex-col items-center gap-1.5 text-[#163A2B] hover:text-[#0f281e] transition-colors group cursor-pointer"
              aria-label="Scroll to featured categories"
            >
              <div className="w-5 h-8 rounded-full border-2 border-[#163A2B] group-hover:border-[#0f281e] flex justify-center pt-1.5 transition-colors">
                <div className="w-1 h-2 rounded-full bg-[#163A2B] group-hover:bg-[#0f281e] animate-pulse" />
              </div>
              <span className="text-[11px] font-semibold tracking-wide text-[#163A2B] group-hover:text-[#0f281e] transition-colors">
                Scroll Down
              </span>
              <svg
                className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.2] animate-bounce text-[#163A2B] group-hover:text-[#0f281e]"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

        </div>

      </div>

      {/* BUTTERY SMOOTH FRAMER MOTION VIDEO MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.6)] border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                className="absolute top-4 right-4 z-20 w-11 h-11 bg-black/60 hover:bg-[#163A2B] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer border border-white/20 hover:scale-105"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close Video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* YouTube Embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&rel=0&modestbranding=1"
                title="Heaven Furniture Atelier & Solid Wood Craftsmanship"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


