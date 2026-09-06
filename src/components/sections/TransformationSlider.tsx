"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

interface TransformationRoom {
  id: string;
  tabLabel: string;
  location: string;
  roomName: string;
  before: {
    label: string;
    image: string;
    description: string;
  };
  after: {
    label: string;
    image: string;
    description: string;
  };
  specs: {
    ensemble: string;
    timber: string;
    timeline: string;
    location: string;
  };
}

const ROOM_PROJECTS: TransformationRoom[] = [
  {
    id: "living",
    tabLabel: "01. Living Sanctuary",
    location: "Nasirabad Housing Society, Chattogram",
    roomName: "Penthouse Main Living Lounge",
    before: {
      label: "Raw Construction Shell",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2000&auto=format&fit=crop",
      description: "Under-construction raw concrete space with exposed masonry and zero acoustics.",
    },
    after: {
      label: "Bespoke Heaven Interior",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
      description: "Custom modular sofa, fluted teak coffee table, and warm ambient styling.",
    },
    specs: {
      ensemble: "Haven Modular Sectional + Fluted Console + Accent Chairs",
      timber: "100% Kiln-Seasoned Chittagong Teak (10–12% MC)",
      timeline: "18 Days from 3D CAD to In-Room Placement",
      location: "Nasirabad, Chattogram",
    },
  },
  {
    id: "bedroom",
    tabLabel: "02. Master Suite",
    location: "Khulshi Residential Area, Chattogram",
    roomName: "Executive Master Bedroom Suite",
    before: {
      label: "Unfinished Bare Room",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
      description: "Unpainted raw walls and vacant unfinished floors awaiting bespoke fit-out.",
    },
    after: {
      label: "Heirloom Bedroom Suite",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop",
      description: "Solid Shegun king platform bed, floating nightstands, and fluted vanity.",
    },
    specs: {
      ensemble: "Aura King Bed Frame + Twin Nightstands + Fluted Wardrobe",
      timber: "Selected Burma Teak with Natural Satin Oil Finish",
      timeline: "14 Days Handcrafted in Chattogram Workshop",
      location: "Khulshi, Chattogram",
    },
  },
  {
    id: "dining",
    tabLabel: "03. Grand Dining Pavilion",
    location: "Agrabad Commercial Zone, Chattogram",
    roomName: "Villa Dining & Banquet Hall",
    before: {
      label: "Bare Structural Shell",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
      description: "Bare structural columns and raw space prior to timber furniture commission.",
    },
    after: {
      label: "Artisanal Dining Suite",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop",
      description: "8-seater live-edge dining table with ergonomic timber dining chairs.",
    },
    specs: {
      ensemble: "Verona 8-Seater Live-Edge Table + 8 Hand-Carved Teak Chairs",
      timber: "Single-Slab Seasoned Chittagong Mahogany & Teak",
      timeline: "21 Days Precision Woodwrighting & Curing",
      location: "Agrabad, Chattogram",
    },
  },
];

export default function TransformationSlider() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const activeRoom = ROOM_PROJECTS[activeRoomIndex];

  return (
    <section className="bg-[#FAF9F5] border-t border-neutral-200/80 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      
      {/* Ambient background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#163A2B]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= EDITORIAL SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-neutral-200/70">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                <span className="text-[#E5A83B]">✦</span>
                <span>BEFORE &amp; AFTER SHOWCASE</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-[1.12]">
                From Empty Shell to <span className="text-[#163A2B] font-medium">Dream Interior</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 text-xs sm:text-sm text-[#5D6B64] leading-relaxed max-w-xl">
                Slide horizontally across our actual Chattogram client residences to witness how raw spaces evolve into cohesive, handcrafted living sanctuaries.
              </p>
            </Reveal>
          </div>

          {/* Interactive Room Project Switcher Tabs */}
          <Reveal delay={0.15}>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 rounded-2xl bg-white border border-neutral-200 shadow-xs w-full sm:w-auto">
              {ROOM_PROJECTS.map((room, idx) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setActiveRoomIndex(idx);
                    setSliderPos(50);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap active:scale-95 transition-all cursor-pointer ${
                    activeRoomIndex === idx
                      ? "bg-[#163A2B] text-white shadow-sm"
                      : "text-neutral-600 hover:text-[#163A2B] hover:bg-neutral-100"
                  }`}
                >
                  {room.tabLabel}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ================= INTERACTIVE BEFORE/AFTER SLIDER STAGE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Drag Slider Frame (Left 7 Cols) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full select-none overflow-hidden rounded-[24px] sm:rounded-[32px] border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-neutral-900 group flex-1">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoom.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* AFTER IMAGE (Base Layer) */}
                  <Image
                    src={activeRoom.after.image}
                    alt={activeRoom.after.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center pointer-events-none"
                    priority
                  />

                  {/* BEFORE IMAGE (Clipped Overlay Layer) */}
                  <div
                    className="absolute inset-0 h-full w-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <Image
                      src={activeRoom.before.image}
                      alt={activeRoom.before.label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center pointer-events-none filter brightness-95 contrast-95"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* FLOATING LUXURY PILL LABELS */}
              <div className="pointer-events-none absolute left-3 sm:left-6 top-3 sm:top-6 z-20 flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/75 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-md">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-neutral-400" />
                <span>{activeRoom.before.label}</span>
              </div>

              <div className="pointer-events-none absolute right-3 sm:right-6 top-3 sm:top-6 z-20 flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#163A2B]/95 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-emerald-400/30 shadow-md">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#E5A83B] animate-pulse" />
                <span>{activeRoom.after.label}</span>
              </div>

              {/* VERTICAL DIVIDER LINE & DRAG HANDLE */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 w-1 -translate-x-1/2 bg-white z-30 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Circular Grip Badge */}
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 sm:h-13 sm:w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#163A2B] text-white shadow-2xl border-[2.5px] sm:border-[3px] border-white transition-transform group-hover:scale-105">
                  <span className="absolute -inset-1 rounded-full border border-white/40 animate-ping opacity-30" />
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                  </svg>
                </div>
              </div>

              {/* INTERACTIVE RANGE INPUT FOR SEAMLESS DRAG & TOUCH */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Before and after transformation slider"
                className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 z-40"
              />

              {/* Drag Hint Banner on Bottom */}
              <div className="pointer-events-none absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md px-3.5 sm:px-4 py-1 rounded-full text-[9px] sm:text-[11px] font-semibold text-neutral-200 border border-white/10 flex items-center gap-1.5 whitespace-nowrap">
                <span>◀ Slide horizontally to compare ▶</span>
              </div>
            </div>
          </div>

          {/* HIGH-CONVERTING CUSTOMER GATHERING & PROJECT SUITE (Right 5 Cols) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Top Card: Active Case Study Context */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/90 shadow-md">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF2ED] text-[#163A2B] text-[10px] font-bold uppercase tracking-wider">
                  <span>Residence Case Study</span>
                </div>
                <span className="text-[11px] font-bold text-neutral-500">
                  📍 {activeRoom.location}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111815] mb-2 leading-tight">
                {activeRoom.roomName}
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed font-body mb-4">
                {activeRoom.after.description}
              </p>

              {/* Commission Specs */}
              <div className="grid grid-cols-2 gap-3 pt-3.5 border-t border-neutral-100 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block tracking-wider mb-0.5">
                    Wood &amp; Curing:
                  </span>
                  <span className="font-semibold text-emerald-800 text-[11px] leading-snug block">
                    {activeRoom.specs.timber}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block tracking-wider mb-0.5">
                    Turnaround:
                  </span>
                  <span className="font-bold text-[#111815] text-[11px] block">
                    {activeRoom.specs.timeline}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom High-Converting Customer Gathering CTA Pod */}
            <div className="bg-gradient-to-br from-[#163A2B] via-[#102B20] to-[#0A1D15] text-white rounded-3xl p-5 sm:p-6 shadow-lg border border-emerald-800/50 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A83B] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5A83B] animate-ping" />
                    <span>Free Atelier Service</span>
                  </span>
                  <span className="text-[11px] font-bold text-emerald-200/90">
                    ★ 4.9 (240+ Homes)
                  </span>
                </div>

                <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  Book Free In-Home Measurement &amp; 3D Plan
                </h4>
                
                <p className="text-xs text-emerald-100/80 mb-4 leading-relaxed font-normal">
                  Our interior design architects will visit your location in Chattogram, take laser room measurements, and prepare a custom 3D timber concept.
                </p>

                {/* 3 Customer Value Badges */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-2 sm:px-2.5 py-1.5 border border-white/10 text-center">
                    <span className="text-[10px] font-bold text-[#E5A83B] block">100% Free</span>
                    <span className="text-[9px] text-emerald-100/70 block leading-tight">3D Render</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-2 sm:px-2.5 py-1.5 border border-white/10 text-center">
                    <span className="text-[10px] font-bold text-[#E5A83B] block">No Obligation</span>
                    <span className="text-[9px] text-emerald-100/70 block leading-tight">Zero Cost Visit</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-2 sm:px-2.5 py-1.5 border border-white/10 text-center">
                    <span className="text-[10px] font-bold text-[#E5A83B] block">Swatches</span>
                    <span className="text-[9px] text-emerald-100/70 block leading-tight">Delivered</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:flex-1 rounded-2xl bg-[#E5A83B] hover:bg-[#d89728] active:scale-95 text-[#111815] font-bold py-3 text-xs sm:text-[13px] shadow-md transition-all group cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>

                <a
                  href="https://wa.me/8801960481983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-semibold text-xs border border-white/20 transition-colors shrink-0"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

