"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "living" | "bedroom" | "restaurant" | "dining" | "bathroom";
  categoryLabel: string;
  location: string;
  timber: string;
  description: string;
  image: string;
  includes: string[];
}

const ROW_1_PROJECTS: ProjectItem[] = [
  {
    id: "rest-01",
    title: "The Glasshouse Bistro & Fine Dining",
    category: "restaurant",
    categoryLabel: "Commercial & Hospitality",
    location: "GEC Circle, Chattogram",
    timber: "100% Solid Chittagong Teak",
    description: "Complete custom dining setup including 28 bespoke solid teak tables, curved brass-accented chairs, and acoustic timber wall paneling.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    includes: ["28 Solid Teak Tables", "Bespoke Bar Counter", "Acoustic Slat Walls"],
  },
  {
    id: "living-01",
    title: "Khulshi Hills Penthouse Sanctuary",
    category: "living",
    categoryLabel: "Living Sanctuary",
    location: "Khulshi, Chattogram",
    timber: "Kiln-Dried Chittagong Shegun",
    description: "Modular low-profile sectional sofa wrapped in imported water-resistant bouclé, paired with fluted Shegun coffee table.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    includes: ["Modular Sectional", "Fluted Center Table", "TV Console Credenza"],
  },
  {
    id: "bed-01",
    title: "Aurelia Royal Master Suite",
    category: "bedroom",
    categoryLabel: "Master Bedroom",
    location: "Nasirabad Residence, CTG",
    timber: "Solid Seasoned Shegun",
    description: "Architectural king platform bed with integrated floating nightstands, concealed warm ambient lighting, and matching fluted wardrobe.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
    includes: ["King Bed Platform", "Floating Nightstands", "6-Door Wardrobe"],
  },
  {
    id: "dining-01",
    title: "The Heritage Live-Edge Banquet",
    category: "dining",
    categoryLabel: "Banquet Dining",
    location: "Agrabad Access Road Villa",
    timber: "2.5-Inch Solid Live-Edge Teak",
    description: "Monolithic single-slab solid teak table with mortise-and-tenon pedestals, accompanied by 10 ergonomic cushioned dining chairs.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    includes: ["10-Seater Teak Table", "10 Cushioned Chairs", "Buffet Credenza"],
  },
  {
    id: "living-03",
    title: "Minimalist Japandi Sunlit Lounge",
    category: "living",
    categoryLabel: "Living Sanctuary",
    location: "Panchlaish Residential Area",
    timber: "Natural Blonde Teak",
    description: "Low-profile aesthetic featuring steam-bent accent lounge chairs, minimal media console, and slatted room divider screen.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    includes: ["2 Accent Armchairs", "Low Media Console", "Slatted Wood Screen"],
  },
  {
    id: "study-01",
    title: "Artisan Executive Library & Study",
    category: "living",
    categoryLabel: "Executive Suite",
    location: "Sugandha R/A Villa, CTG",
    timber: "Seasoned Burma Teak",
    description: "Floor-to-ceiling geometric acoustic bookshelf unit with leather-inlaid solid wood executive writing desk and hidden cable routing.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1200&auto=format&fit=crop",
    includes: ["Library Wall Unit", "Executive Teak Desk", "Leather Reading Chair"],
  },
];

const ROW_2_PROJECTS: ProjectItem[] = [
  {
    id: "bath-01",
    title: "Spa Wellness Natural Teak Vanity",
    category: "bathroom",
    categoryLabel: "Bespoke Bath & Vanity",
    location: "South Khulshi Residence",
    timber: "Moisture-Sealed Natural Teak",
    description: "Waterproof natural oil-sealed solid teak vanity unit with black stone undermount basin and slatted linen tower.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    includes: ["Double Vanity Unit", "Linen Tower Cabinet", "Backlit Mirror Frame"],
  },
  {
    id: "rest-02",
    title: "Bay View Botanical Coffee Lounge",
    category: "restaurant",
    categoryLabel: "Commercial & Hospitality",
    location: "Halishahar, Chattogram",
    timber: "Gamari Hardwood & Teak",
    description: "Organic aesthetic cafe fit-out featuring communal high-top tables, curved cane-back chairs, and espresso bar frontage.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    includes: ["Communal High Tables", "Cane-Back Chairs", "Espresso Bar Facade"],
  },
  {
    id: "bed-02",
    title: "Nordic Haven Master Retreat",
    category: "bedroom",
    categoryLabel: "Master Bedroom",
    location: "South Khulshi Villa",
    timber: "Kiln-Dried White Ash & Teak",
    description: "Minimalist spindle bed frame with hand-turned tapered legs, matching linen armoire, and woven cane reading corner.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    includes: ["Spindle King Bed", "Cane Reading Chair", "Floating Nightstands"],
  },
  {
    id: "dining-02",
    title: "Contemporary Open Kitchen & Dining",
    category: "dining",
    categoryLabel: "Dining & Cabinetry",
    location: "O.R. Nizam Road Apartment",
    timber: "Solid Teak & Matte Brass",
    description: "Integrated kitchen island dining bar with upholstered barstools and solid wood overhead pendant suspension rail.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    includes: ["Island Dining Table", "4 Upholstered Stools", "Pendant Light Rail"],
  },
  {
    id: "living-04",
    title: "Nasirabad Villa Formal Majlis",
    category: "living",
    categoryLabel: "Living Sanctuary",
    location: "Nasirabad Housing, CTG",
    timber: "Premium Chittagong Shegun",
    description: "Curved velvet modular sofa arrangement framed with hand-carved solid Shegun wood accents and nested travertine tables.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    includes: ["Curved Sectional", "Nested Travertine Tables", "Fluted Credenza"],
  },
  {
    id: "terrace-01",
    title: "Rooftop Conservatory & Teak Deck",
    category: "living",
    categoryLabel: "Outdoor & Terrace",
    location: "Khulshi Skyline Penthouse",
    timber: "Marine-Grade Seasoned Teak",
    description: "All-weather outdoor teak lounge setting with deep cushions, slatted daybed, and integrated planter boxes.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    includes: ["Outdoor Daybed", "Teak Coffee Table", "Planter Partitions"],
  },
];

const ALL_PROJECTS = [...ROW_1_PROJECTS, ...ROW_2_PROJECTS];

export default function RealWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="content-auto relative bg-[#FAF9F5] border-t border-neutral-200/80 py-24 lg:py-32 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#163A2B]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 h-[500px] w-[500px] rounded-full bg-[#E5A83B]/10 blur-3xl" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Centered with Subtitle stacked underneath Title) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-[#D2E6DA] text-[#163A2B] text-xs font-bold uppercase tracking-[0.18em] mb-4">
              <span className="text-[#E5A83B]">✦</span>
              <span>REAL HOMES & LIVING SPACES</span>
              <span className="text-[#E5A83B]">✦</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-bold tracking-tight leading-[1.15]">
              Heaven in <span className="text-[#163A2B]">Real Homes</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-[#5D6B64] font-body max-w-xl mx-auto leading-relaxed">
              See how our handcrafted solid-wood furniture elevates living rooms, bedrooms, and dining spaces in real homes and boutique venues across Bangladesh.
            </p>
          </Reveal>
        </div>

      </div>

      {/* 45-Degree Angled Animated 3D Marquee Track */}
      <div className="relative w-full overflow-hidden py-10 my-4">
        
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-20" />

        {/* 45-degree Angled Perspective Transformation Wrapper */}
        <div className="transform -rotate-2 sm:-rotate-3 scale-[1.03] space-y-6 sm:space-y-8">
          
          {/* Marquee Row 1: Sliding Left (Smooth Infinite Loop) */}
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...ROW_1_PROJECTS, ...ROW_1_PROJECTS].map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                onClick={() => setSelectedProject(item)}
                className="group relative w-[320px] sm:w-[420px] h-[260px] sm:h-[300px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/50 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 420px"
                />

                {/* Refined Subtle Bottom Linear Gradient (Much clearer & brighter) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Top Location & Category Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-semibold text-white uppercase tracking-wider border border-white/20">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] text-[#E5A83B] bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md font-medium border border-white/10">
                    {item.location}
                  </span>
                </div>

                {/* Bottom Project Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#E5A83B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-200 mt-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-sm" />
                    {item.timber}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Marquee Row 2: Sliding Right (Smooth Infinite Loop) */}
          <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...ROW_2_PROJECTS, ...ROW_2_PROJECTS].map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                onClick={() => setSelectedProject(item)}
                className="group relative w-[320px] sm:w-[420px] h-[260px] sm:h-[300px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/50 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 420px"
                />

                {/* Refined Subtle Bottom Linear Gradient (Much clearer & brighter) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Top Location & Category Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-semibold text-white uppercase tracking-wider border border-white/20">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] text-[#E5A83B] bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md font-medium border border-white/10">
                    {item.location}
                  </span>
                </div>

                {/* Bottom Project Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#E5A83B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-200 mt-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-sm" />
                    {item.timber}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Project Detail Modal Popover */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-neutral-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3.5 right-3.5 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-md hover:bg-black active:scale-90 transition-all cursor-pointer text-xs sm:text-sm"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Modal Photo */}
                <div className="relative aspect-video sm:aspect-auto sm:h-full min-h-[220px] sm:min-h-[280px] bg-neutral-900">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 text-[11px] font-semibold text-white backdrop-blur-md">
                    {selectedProject.categoryLabel}
                  </div>
                </div>

                {/* Modal Info */}
                <div className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A83B] block mb-1">
                      {selectedProject.location}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111815] leading-tight">
                      {selectedProject.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-body leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3.5 border-t border-neutral-100 text-xs">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Timber Spec:</span>
                        <span className="font-bold text-[#163A2B]">{selectedProject.timber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Execution:</span>
                        <span className="font-semibold text-neutral-900">Bespoke Workshop Tailoring</span>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-neutral-100">
                      <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1.5">
                        Included Pieces:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.includes.map((inc) => (
                          <span
                            key={inc}
                            className="px-2.5 py-1 rounded-full bg-[#EAF2ED] text-[#163A2B] text-[11px] font-medium"
                          >
                            ✓ {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-neutral-100">
                    <a
                      href={`https://wa.me/8801819642289?text=${encodeURIComponent(`Hello Heaven Furniture, I saw your "${selectedProject.title}" setup in ${selectedProject.location} and would like to order similar handcrafted furniture for my home.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#163A2B] hover:bg-[#1f4e3b] active:scale-95 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all text-center"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm0 18.05h-.01a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.02-.2-.31a8.12 8.12 0 0 1-1.25-4.3c0-4.49 3.66-8.15 8.17-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.49-3.66 8.12-8.16 8.12Zm4.47-6.1c-.24-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
                      </svg>
                      <span>Inquire About Setup on WhatsApp</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
