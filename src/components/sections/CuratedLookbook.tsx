"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

interface Hotspot {
  id: string;
  name: string;
  category: string;
  material: string;
  price: string;
  link: string;
  image: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

interface RoomScene {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  idealSize: string;
  woodType: string;
  leadTime: string;
  swatches: { name: string; color: string; border?: boolean }[];
  hotspots: Hotspot[];
}

const ROOM_SCENES: RoomScene[] = [
  {
    id: "living",
    tabLabel: "Living Sanctuary",
    title: "The Royal Haven Living Suite",
    subtitle: "Airy architectural balance meets deep, tactile comfort.",
    description: "Designed for grand family gatherings and serene evenings. Featuring seasoned solid teak framework wrapped in premium spill-resistant bouclé weave.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    idealSize: "200 – 350 sq.ft",
    woodType: "100% Seasoned Chittagong Teak",
    leadTime: "12 – 16 Working Days",
    swatches: [
      { name: "Chittagong Teak", color: "#8C5835" },
      { name: "Forest Bouclé", color: "#2B4C3F" },
      { name: "Champagne Brass", color: "#D4AF37" },
      { name: "Warm Alabaster", color: "#F4F1EA", border: true },
    ],
    hotspots: [
      {
        id: "sofa",
        name: "Haven Modular Sectional",
        category: "Living Room",
        material: "Solid Teak Base • Italian Bouclé",
        price: "৳ 85,000",
        link: "/shop/sofa-haven-modular",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop",
        x: 48,
        y: 65,
      },
      {
        id: "coffee-table",
        name: "Verona Fluted Coffee Table",
        category: "Tables",
        material: "Hand-Carved Solid Shegun",
        price: "৳ 26,500",
        link: "/shop/verona-coffee-table",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop",
        x: 52,
        y: 82,
      },
      {
        id: "chair",
        name: "Aura Sculpted Accent Chair",
        category: "Armchairs",
        material: "Steam-Bent Teak • Textured Wool",
        price: "৳ 24,000",
        link: "/shop/chair-aura-lounge",
        image: "https://images.unsplash.com/photo-1580481077195-c3a8a30f5299?q=80&w=600&auto=format&fit=crop",
        x: 18,
        y: 68,
      },
    ],
  },
  {
    id: "bedroom",
    tabLabel: "Master Sanctuary",
    title: "The Aurelia Master Bed Suite",
    subtitle: "Serene acoustic warmth with seamless floating joinery.",
    description: "A sanctuary crafted for deep restoration. Hand-fluted headboard crafted from seasoned Mahogany with integrated concealed ambient warm illumination.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop",
    idealSize: "160 – 280 sq.ft",
    woodType: "Kiln-Dried Natural Mahogany",
    leadTime: "14 – 18 Working Days",
    swatches: [
      { name: "Deep Mahogany", color: "#5C2C16" },
      { name: "Raw Linen", color: "#E8DFD8" },
      { name: "Warm Amber", color: "#D99B26" },
      { name: "Oatmeal Velvet", color: "#D1C7BD" },
    ],
    hotspots: [
      {
        id: "bed",
        name: "Aurelia King Platform Bed",
        category: "Bedroom",
        material: "Solid Mahogany • Fluted Panels",
        price: "৳ 78,000",
        link: "/shop/aurelia-king-bed",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
        x: 50,
        y: 58,
      },
      {
        id: "nightstand",
        name: "Sylvan Floating Nightstand",
        category: "Bedroom",
        material: "Solid Teak • Blum Soft-Close",
        price: "৳ 14,500",
        link: "/shop/sylvan-nightstand",
        image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=600&auto=format&fit=crop",
        x: 20,
        y: 70,
      },
    ],
  },
  {
    id: "dining",
    tabLabel: "Banquet Dining",
    title: "The Heritage 8-Seater Dining Pavilion",
    subtitle: "Artisanal joinery built for generations of shared hospitality.",
    description: "The centerpiece of memorable dinner conversations. 2-inch thick solid live-edge Teak tabletop sustained by architectural trestle pedestals.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop",
    idealSize: "180 – 300 sq.ft",
    woodType: "100% Solid Chittagong Shegun",
    leadTime: "12 – 15 Working Days",
    swatches: [
      { name: "Shegun Gold", color: "#A8703E" },
      { name: "Emerald Velvet", color: "#163A2B" },
      { name: "Matte Black Steel", color: "#222222" },
      { name: "Travertine Stone", color: "#ECE5D8" },
    ],
    hotspots: [
      {
        id: "dining-table",
        name: "Heritage 8-Seater Dining Table",
        category: "Dining",
        material: "2-Inch Solid Shegun Slab",
        price: "৳ 92,000",
        link: "/shop/heritage-dining-table",
        image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=600&auto=format&fit=crop",
        x: 52,
        y: 66,
      },
      {
        id: "dining-chair",
        name: "Nordic Curved Dining Chair (Set of 6)",
        category: "Dining Chairs",
        material: "Steam-Bent Teak • High-Density Foam",
        price: "৳ 48,000",
        link: "/shop/nordic-dining-chair",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop",
        x: 26,
        y: 62,
      },
    ],
  },
  {
    id: "studio",
    tabLabel: "Executive Studio",
    title: "The Connoisseur Private Office & Library",
    subtitle: "Distinguished timber architecture that inspires peak focus.",
    description: "Tailored for business leaders, architects, and thinkers. Solid wood credenza and expansive executive desk with invisible magnetic cable routing.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    idealSize: "140 – 240 sq.ft",
    woodType: "Seasoned Teak & Gamari Hardwood",
    leadTime: "10 – 14 Working Days",
    swatches: [
      { name: "Aged Teak", color: "#7A4A28" },
      { name: "Cognac Leather", color: "#9E4714" },
      { name: "Forest Green", color: "#183B2B" },
      { name: "Smoked Oak", color: "#3B332A" },
    ],
    hotspots: [
      {
        id: "executive-desk",
        name: "Connoisseur Executive Desk",
        category: "Office",
        material: "Solid Teak • Leather Inlay",
        price: "৳ 64,000",
        link: "/shop/connoisseur-desk",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop",
        x: 55,
        y: 70,
      },
    ],
  },
];

export default function CuratedLookbook() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const currentRoom = ROOM_SCENES[activeRoomIndex];

  const whatsappRoomUrl = (roomTitle: string) =>
    "https://wa.me/8801819642289?text=" +
    encodeURIComponent(
      `Hello Heaven Furniture Mart, I am interested in customizing the "${roomTitle}" set for my home floor plan. Can you provide custom dimensions and quotation?`
    );

  return (
    <section className="relative bg-[#FAF9F5] py-20 lg:py-32 border-t border-[#163A2B]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#163A2B]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#E5A83B]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#163A2B]/20 bg-[#163A2B]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#163A2B]">
                <svg className="h-3.5 w-3.5 text-[#E5A83B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
                <span>Curated Living Lookbook</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111815]">
                Experience Crafted Spaces in <span className="italic font-medium text-[#163A2B]">Harmonious Living</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="text-sm text-neutral-600 max-w-md font-body leading-relaxed">
              Explore complete interior room sets styled with 100% solid wood, bespoke upholstery, and timeless architectural aesthetics.
            </p>
          </Reveal>
        </div>

        {/* Room Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {ROOM_SCENES.map((room, idx) => {
            const isActive = activeRoomIndex === idx;
            return (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomIndex(idx);
                  setActiveHotspot(null);
                }}
                className={`relative px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-[#163A2B] text-white shadow-lg shadow-[#163A2B]/20"
                    : "bg-white text-neutral-600 hover:text-[#163A2B] border border-neutral-200/80 hover:border-[#163A2B]/30"
                }`}
              >
                {room.tabLabel}
                {isActive && (
                  <motion.span
                    layoutId="activeRoomTab"
                    className="absolute inset-0 rounded-full border-2 border-[#E5A83B]/40 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Lookbook Card with Interactive Hotspots (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-[#163A2B]/15 shadow-2xl bg-neutral-900 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoom.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentRoom.image}
                    alt={currentRoom.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Top-Left Live Label */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-[#E5A83B] animate-ping" />
                    <span className="text-xs font-semibold text-white tracking-wider uppercase">
                      Interactive Studio Look
                    </span>
                  </div>

                  {/* Hotspots layer */}
                  {currentRoom.hotspots.map((spot) => {
                    const isSelected = activeHotspot?.id === spot.id;
                    return (
                      <div
                        key={spot.id}
                        style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                      >
                        {/* Interactive Plus Pin */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveHotspot(isSelected ? null : spot);
                          }}
                          className={`relative h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isSelected
                              ? "bg-[#E5A83B] text-[#163A2B] scale-110 shadow-lg ring-4 ring-white"
                              : "bg-white/90 hover:bg-[#E5A83B] text-[#163A2B] shadow-md hover:scale-110"
                          }`}
                          aria-label={`View ${spot.name}`}
                        >
                          <span className="absolute inset-0 rounded-full bg-[#E5A83B]/40 animate-ping" />
                          <svg className="h-4 w-4 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </button>

                        {/* Popover Product Floating Card */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              onClick={(e) => e.stopPropagation()}
                              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-white/95 p-3.5 shadow-2xl backdrop-blur-md border border-neutral-200 z-30"
                            >
                              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-2.5 bg-neutral-100">
                                <Image
                                  src={spot.image}
                                  alt={spot.name}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-[10px] font-semibold text-white backdrop-blur-sm uppercase">
                                  {spot.category}
                                </div>
                              </div>

                              <h4 className="font-display text-sm font-bold text-neutral-900 leading-snug">
                                {spot.name}
                              </h4>
                              <p className="text-[11px] text-neutral-500 mt-0.5">
                                {spot.material}
                              </p>
                              
                              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-neutral-100">
                                <span className="text-xs font-bold text-[#163A2B]">
                                  {spot.price}
                                </span>
                                <Link
                                  href={spot.link}
                                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E5A83B] hover:text-[#c48d28] uppercase tracking-wider"
                                >
                                  <span>View Piece</span>
                                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                  </svg>
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* Bottom Room Title Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#E5A83B] mb-1 block">
                        Complete Living Composition
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {currentRoom.title}
                      </h3>
                    </div>

                    <div className="text-xs text-white/80 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/15">
                      💡 Click any <span className="font-bold text-[#E5A83B]">(+) pin</span> to inspect featured pieces
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Architectural Spec & Material Palette Card (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 shadow-xl border border-[#163A2B]/10">
            <div>
              {/* Room Tagline */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#163A2B]/10 text-xs font-bold uppercase tracking-wider text-[#163A2B] mb-4">
                <span>Room Specification</span>
              </div>

              <h4 className="font-display text-xl font-bold text-[#111815]">
                {currentRoom.subtitle}
              </h4>

              <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-body">
                {currentRoom.description}
              </p>

              {/* Timber & Fabric Swatches */}
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#163A2B] block mb-3">
                  Curated Material & Color Palette
                </span>
                
                <div className="grid grid-cols-2 gap-2.5">
                  {currentRoom.swatches.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-[#FAF9F5] border border-neutral-100"
                    >
                      <span
                        style={{ backgroundColor: swatch.color }}
                        className={`h-5 w-5 rounded-full shrink-0 shadow-sm ${
                          swatch.border ? "border border-neutral-300" : ""
                        }`}
                      />
                      <span className="text-xs font-medium text-neutral-700 truncate">
                        {swatch.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Blueprint Specs */}
              <div className="mt-6 space-y-2.5 pt-4 border-t border-neutral-100 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span className="text-neutral-400">Recommended Space:</span>
                  <span className="font-semibold text-neutral-900">{currentRoom.idealSize}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span className="text-neutral-400">Core Woodwork:</span>
                  <span className="font-semibold text-[#163A2B]">{currentRoom.woodType}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span className="text-neutral-400">Production Lead:</span>
                  <span className="font-semibold text-neutral-900">{currentRoom.leadTime}</span>
                </div>
              </div>
            </div>

            {/* Customization Action */}
            <div className="mt-8 pt-6 border-t border-neutral-100">
              <a
                href={whatsappRoomUrl(currentRoom.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#163A2B] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#163A2B]/15 transition-all duration-300 hover:bg-[#1f4e3b] hover:shadow-xl active:scale-95 text-center"
              >
                <svg className="h-4 w-4 text-[#E5A83B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                </svg>
                <span>Customize This Full Room Set</span>
              </a>

              <p className="text-[11px] text-center text-neutral-400 mt-2">
                ⚡ Direct factory pricing & complimentary space measurement
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
