"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Fast, crisp timing: after 1.5s the curtains gracefully split open
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <div
          className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden"
          onClick={() => setShowSplash(false)}
        >
          {/* ================= LEFT SPLIT CURTAIN PANEL ================= */}
          <motion.div
            key="curtain-left"
            initial={{ x: "0%" }}
            exit={{
              x: "-100%",
              transition: {
                duration: 0.9,
                ease: [0.77, 0, 0.175, 1], // Luxury cubic-bezier curtain split
              },
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-[#0A1D15] border-r border-[#E5A83B]/15 z-20 flex items-center justify-end overflow-hidden"
          >
            {/* Ambient Lighting on Left */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-radial from-[#E5A83B]/10 to-transparent blur-3xl pointer-events-none" />
          </motion.div>

          {/* ================= RIGHT SPLIT CURTAIN PANEL ================= */}
          <motion.div
            key="curtain-right"
            initial={{ x: "0%" }}
            exit={{
              x: "100%",
              transition: {
                duration: 0.9,
                ease: [0.77, 0, 0.175, 1],
              },
            }}
            className="absolute inset-y-0 right-0 w-1/2 bg-[#0A1D15] border-l border-[#E5A83B]/15 z-20 flex items-center justify-start overflow-hidden"
          >
            {/* Ambient Lighting on Right */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-radial from-[#E5A83B]/10 to-transparent blur-3xl pointer-events-none" />
          </motion.div>

          {/* ================= CENTER BRAND HERO CONTENT (Fades & Scales subtly before split) ================= */}
          <motion.div
            key="splash-content"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.06,
              transition: { duration: 0.45, ease: "easeInOut" },
            }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-4"
          >
            {/* Top Brand Subtitle & Monogram */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3"
            >
              <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#E5A83B]/60" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.32em] text-[#E5A83B]">
                EST. 2020 • CHATTOGRAM
              </span>
              <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#E5A83B]/60" />
            </motion.div>

            {/* GRAND ARCHITECTURAL "HEAVEN" WORDMARK (Matching Footer Big Typography) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.04em" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative select-none text-center"
            >
              <h1 className="font-display font-black text-[18vw] sm:text-[16vw] lg:text-[14vw] tracking-[0.04em] uppercase bg-gradient-to-b from-white via-[#F5F2EA] to-white/60 bg-clip-text text-transparent leading-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                HEAVEN
              </h1>
            </motion.div>

            {/* Bottom Atelier Descriptor & Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-3 mt-1 sm:mt-2"
            >
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-300 uppercase">
                <span>FURNITURE MART</span>
                <span className="text-[#E5A83B]">✦</span>
                <span className="text-neutral-400">HANDCRAFTED ATELIER</span>
              </div>

              {/* Ultra-Fine Gold Progress Fill Line */}
              <div className="w-36 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-[#163A2B] via-[#E5A83B] to-white rounded-full shadow-[0_0_10px_rgba(229,168,59,0.8)]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
