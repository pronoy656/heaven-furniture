"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const TIMBER_TYPES = [
  {
    id: "shegun",
    name: "Chittagong Shegun (Teak)",
    origin: "Chittagong Hill Tracts",
    moisture: "10–12% Kiln-Balanced",
    grain: "Rich Golden-Amber with Deep Dark Ribbons",
    lifespan: "50+ Years (Generational)",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop",
    quote: "Dense natural oils resist moisture, termites, and fungal decay for decades.",
  },
  {
    id: "mahogany",
    name: "Seasoned Mahogany",
    origin: "Mature Plantation Timber",
    moisture: "10–11% Vacuum-Dried",
    grain: "Silky Crimson-Brown with Fine Lustrous Grain",
    lifespan: "35+ Years",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    quote: "Remarkable structural stability, ideal for grand dining tables and sculpted bed frames.",
  },
  {
    id: "gamari",
    name: "Gamari Hardwood",
    origin: "Sustainably Harvested",
    moisture: "11–12% Seasoned",
    grain: "Warm Honey-Blonde with Smooth Satin Texture",
    lifespan: "25+ Years",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    quote: "Lightweight yet exceptionally resilient against daily wear and temperature shifts.",
  },
];

export default function WhyChooseUs() {
  const [selectedTimber, setSelectedTimber] = useState(0);
  const timber = TIMBER_TYPES[selectedTimber];

  return (
    <section className="bg-[#FAF9F5] py-16 sm:py-20 lg:py-28 border-t border-neutral-200/80 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#163A2B]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#E5A83B]/10 blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ================= EDITORIAL SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-neutral-200/70">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                <span className="text-[#E5A83B]">✦</span>
                <span>THE HEAVEN STANDARD</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-tight">
                Why Choose <span className="text-[#163A2B] font-medium">Heaven Furniture</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-3 text-xs sm:text-sm text-[#5D6B64] leading-relaxed max-w-xl">
                We reject mass-market compromises. Every commission is defined by 100% seasoned solid timber purity, master interlocking joinery, and lifelong atelier stewardship.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ================= BALANCED CRAFTSMANSHIP BENTO (50/50 SPLIT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* ----------------- LEFT COLUMN: 100% SOLID TIMBER (PILLAR 01) ----------------- */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-md flex flex-col justify-between h-full group">
            
            <div>
              {/* Card Tag & Pillar Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#163A2B]/10 text-[#163A2B] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                  <span>Pillar 01</span>
                  <span>•</span>
                  <span>Material Purity</span>
                </div>

                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-200 whitespace-nowrap">
                  Zero MDF / Zero Hollow Board
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[#111815] font-bold tracking-tight mb-2.5">
                100% Kiln-Seasoned Solid Hardwood
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 font-body leading-relaxed mb-5">
                We dry every timber beam down to <strong>10–12% equilibrium moisture</strong> in our Chattogram kilns, ensuring dimensional stability and zero warping for generations.
              </p>

              {/* Interactive Timber Species Selector */}
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider block mb-2">
                  Select Hardwood Species:
                </span>
                <div className="flex flex-wrap gap-2">
                  {TIMBER_TYPES.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTimber(idx)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedTimber === idx
                          ? "bg-[#163A2B] text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80"
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Timber Showcase Visual Container */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 mt-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={timber.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={timber.image}
                    alt={timber.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Glass overlay banner at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold text-[#E5A83B] uppercase tracking-wider block">
                          {timber.origin} • {timber.moisture}
                        </span>
                        <p className="text-xs text-neutral-200 mt-0.5 line-clamp-1">
                          {timber.grain}
                        </p>
                      </div>
                      <div className="shrink-0 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-white/30 text-white">
                        {timber.lifespan}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* ----------------- RIGHT COLUMN: PILLARS 02, 03 & 04 (BALANCED STACK) ----------------- */}
          <div className="flex flex-col justify-between gap-5 sm:gap-6 h-full">
            
            {/* CARD 02: Heritage Tenon Joinery (Top Half) */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/90 shadow-md group hover:border-[#163A2B]/40 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#EAF2ED] text-[#163A2B] text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                  <span>Pillar 02</span>
                  <span>•</span>
                  <span>Handcrafted Joinery</span>
                </div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase whitespace-nowrap">
                  Generational Stability
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold text-[#111815] leading-snug group-hover:text-[#163A2B] transition-colors mb-1.5">
                    Mortise &amp; Tenon Architecture
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-body">
                    We never use staples or plastic corner brackets. Master woodwrights hand-chisel interlocking tenon joints that naturally endure climate expansion.
                  </p>
                </div>

                <div className="relative w-full sm:w-32 h-28 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop"
                    alt="Master woodwright mortise and tenon joinery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 150px"
                  />
                </div>
              </div>
            </div>

            {/* 2-COLUMN SPLIT: PILLAR 03 & PILLAR 04 (Bottom Half - Richly detailed to eliminate empty white space) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1 items-stretch">
              
              {/* CARD 03: White-Glove In-Room Delivery */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/90 shadow-md flex flex-col justify-between group hover:border-[#163A2B]/40 hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-3.5 bg-neutral-100 border border-neutral-200/60">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                      alt="White Glove Room Placement"
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-wider">
                      Pillar 03
                    </div>
                  </div>

                  <h4 className="font-display text-base sm:text-lg font-bold text-[#111815] leading-snug group-hover:text-[#163A2B] transition-colors mb-1.5">
                    White-Glove Placement
                  </h4>

                  <p className="text-xs text-neutral-600 leading-relaxed font-body mb-3">
                    Multi-layer velvet blanket packaging, zero-scuff climate transit, direct in-room assembly, and debris removal.
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-1.5 text-[11px] text-neutral-600 font-medium">
                    <li className="flex items-center gap-1.5 text-emerald-800">
                      <span className="text-xs font-bold text-emerald-600">✓</span>
                      <span>Zero-Scuff Padded Transit</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-800">
                      <span className="text-xs font-bold text-emerald-600">✓</span>
                      <span>Complimentary In-Room Assembly</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-800">
                      <span className="text-xs font-bold text-emerald-600">✓</span>
                      <span>100% Debris &amp; Box Removal</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-[#163A2B]">
                  <span>Nationwide Safe Delivery</span>
                  <span className="text-[10px] text-neutral-400 font-normal">All 64 Districts</span>
                </div>
              </div>

              {/* CARD 04: 10-Year Direct Atelier Warranty */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/90 shadow-md flex flex-col justify-between group hover:border-[#163A2B]/40 hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-3.5 bg-neutral-100 border border-neutral-200/60">
                    <Image
                      src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop"
                      alt="10 Year Timber Warranty Guarantee"
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-wider">
                      Pillar 04
                    </div>
                  </div>

                  <h4 className="font-display text-base sm:text-lg font-bold text-[#111815] leading-snug group-hover:text-[#163A2B] transition-colors mb-1.5">
                    10-Year Timber Warranty
                  </h4>

                  <p className="text-xs text-neutral-600 leading-relaxed font-body mb-3">
                    Direct certified warranty covering timber structural integrity, termite resistance, and lifelong care.
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-1.5 text-[11px] text-neutral-600 font-medium">
                    <li className="flex items-center gap-1.5 text-[#B87A18]">
                      <span className="text-xs font-bold text-[#E5A83B]">★</span>
                      <span>10-Yr Kiln Hardwood Guarantee</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[#B87A18]">
                      <span className="text-xs font-bold text-[#E5A83B]">★</span>
                      <span>Lifetime Anti-Termite Protection</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-[#B87A18]">
                      <span className="text-xs font-bold text-[#E5A83B]">★</span>
                      <span>Signed Atelier Certificate</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-[#E5A83B]">
                  <span>Founder Backed</span>
                  <span className="text-[10px] text-neutral-400 font-normal">Heirloom Quality</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
