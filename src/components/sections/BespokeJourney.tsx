"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BESPOKE_STAGES } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function BespokeJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = BESPOKE_STAGES[activeIndex];

  return (
    <section id="bespoke" className="relative bg-[#FAF9F5] border-t border-neutral-200/80 py-20 sm:py-24 lg:py-28 overflow-hidden">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[450px] pointer-events-none opacity-25 blur-3xl z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(34, 94, 66, 0.25) 0%, rgba(250, 249, 245, 0) 70%)"
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-neutral-200/80">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#163A2B]/15 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <span>✦</span>
                <span>THE BESPOKE COMMISSION JOURNEY</span>
                <span>✦</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111815] tracking-tight leading-[1.18]">
                From Raw Timber to <span className="text-[#163A2B] italic font-serif">Heirloom Perfection</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Every custom commission moves through five transparent artisanal stages — built to your exact wall dimensions, selected wood grains, and tailored finishes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <Link
              href="/contact#consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-md cursor-pointer self-start lg:self-auto"
            >
              <span>Commission Custom Piece</span>
              <span>&rarr;</span>
            </Link>
          </Reveal>
        </div>

        {/* 5-Stage Interactive Tabs Bar */}
        <div className="pt-8 pb-8 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {BESPOKE_STAGES.map((s, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border text-xs transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-white border-[#163A2B] text-[#163A2B] shadow-md scale-102 font-bold"
                    : "bg-[#FAF9F5] hover:bg-white border-neutral-200/90 text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    isCurrent
                      ? "bg-[#163A2B] text-white"
                      : "bg-neutral-200/80 text-neutral-600"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold whitespace-nowrap">{s.stage}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Stage Visual & Stage Badge */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-[#FAF9F5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Stage Counter Overlay */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                  <span className="text-[#E5A83B]">Stage {String(activeIndex + 1).padStart(2, "0")} / 05</span>
                  <span className="text-neutral-400">•</span>
                  <span>{active.stage}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <span className="text-neutral-300 font-medium">{active.detail}</span>
                </div>
              </div>
            </div>

            {/* Right: Stage Details & Step Navigator */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#163A2B] bg-[#EAF2ED] px-3 py-1 rounded-full">
                    Step {activeIndex + 1} of {BESPOKE_STAGES.length}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">• Chattogram Workshop</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-text"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-display text-2xl sm:text-3xl text-[#111815] font-normal leading-snug mb-4">
                      {active.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
                      {active.detail}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Feature Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>100% Seasoned Hardwood (No MDF / Particle Board)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>Custom Millimeter Dimensions tailored to your room</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>Direct WhatsApp photo updates during handcrafting</span>
                  </div>
                </div>
              </div>

              {/* Prev / Next Stage Buttons */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeIndex === 0}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeIndex === 0
                      ? "text-neutral-300 pointer-events-none"
                      : "text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  <span>&larr;</span>
                  <span>Previous Stage</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => Math.min(BESPOKE_STAGES.length - 1, prev + 1))}
                  disabled={activeIndex === BESPOKE_STAGES.length - 1}
                  className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeIndex === BESPOKE_STAGES.length - 1
                      ? "text-neutral-300 pointer-events-none"
                      : "bg-[#163A2B] hover:bg-[#0f281e] text-white shadow-xs"
                  }`}
                >
                  <span>Next Stage</span>
                  <span>&rarr;</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
