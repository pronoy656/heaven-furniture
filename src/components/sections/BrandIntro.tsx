"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const craftsmanshipPillars = [
  {
    title: "100% Seasoned Hardwood",
    desc: "Strictly kiln-dried Chittagong Teak (Shegun) and premium Mahogany. Zero hollow MDF, particle board, or synthetic fillers.",
    tag: "Authentic Timber",
  },
  {
    title: "Generational Mortise Joinery",
    desc: "Every frame and joint is interlocked by master woodwrights with decades of experience, guaranteeing 50+ years of structural stability.",
    tag: "Artisanal Mastery",
  },
  {
    title: "Architectural Custom Fit",
    desc: "Every commission is customized down to the millimeter, wood stain tone, and stain-resistant fabric to harmonize with your floor plan.",
    tag: "Bespoke Precision",
  },
];

export default function BrandIntro() {
  return (
    <section
      id="studio"
      className="bg-[#FAF9F5] py-20 sm:py-24 lg:py-28 select-none"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span>✦</span>
              <span>FOUNDER & HERITAGE</span>
              <span>✦</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111815] tracking-tight leading-[1.15]">
              Every Piece Carries a <span className="text-[#163A2B] font-medium">Personal Promise</span> of Master Craftsmanship
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-3.5 text-xs sm:text-sm text-[#5D6B64] max-w-xl mx-auto leading-relaxed">
              Founded in 2020 in Chattogram, Heaven Furniture Mart was established with a singular standard: building heirloom solid-wood furniture crafted to endure for generations.
            </p>
          </Reveal>
        </div>

        {/* ================= MAIN EDITORIAL ATELIER GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Clean Founder Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex">
            <Reveal delay={0.15} className="w-full flex">
              <div className="w-full h-full flex flex-col justify-between bg-white rounded-3xl border border-neutral-200/90 shadow-sm overflow-hidden">
                
                {/* Clean Photo Container */}
                <div className="relative aspect-[1397/1150] w-full bg-[#F3F0E8] overflow-hidden flex-1 min-h-[280px]">
                  <Image
                    src="/owner.png"
                    alt="Abul Kalam Bhuiyan - Founder & Managing Director of Heaven Furniture Mart"
                    fill
                    priority
                    className="object-contain sm:object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  
                  {/* Subtle Founder Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-sm border border-neutral-200">
                    <span className="w-2 h-2 rounded-full bg-[#163A2B]" />
                    <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider">
                      Est. 2020 • Chattogram
                    </span>
                  </div>
                </div>

                {/* Founder Info Card */}
                <div className="p-6 bg-white shrink-0">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#163A2B] block mb-1">
                    Managing Director & Founder
                  </span>
                  
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111815]">
                    Abul Kalam Bhuiyan
                  </h3>

                  <p className="text-xs text-[#5D6B64] mt-1 flex items-center gap-1.5">
                    <span>📍</span>
                    <span>Agrabad Access Road Atelier & Showroom, Chattogram</span>
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-700 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#163A2B]" />
                      10-Year Direct Structural Warranty
                    </span>
                    <span className="text-[11px] text-[#163A2B] font-bold bg-[#EAF2ED] px-2.5 py-0.5 rounded-full">
                      Founder Certified
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Unified Story & 3 Craftsmanship Standards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5 h-full">
            
            {/* Top Founder Manifesto Box with High-Contrast Typography */}
            <Reveal delay={0.2} className="flex-1 flex">
              <div className="w-full flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm relative hover:border-[#163A2B]/30 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B]">
                      Founder&apos;s Craftsmanship Philosophy
                    </span>
                    <span className="text-3xl text-[#E5A83B] font-serif leading-none select-none">
                      &ldquo;
                    </span>
                  </div>

                  <p className="font-body text-[15px] sm:text-[16px] text-[#111815] font-medium leading-[1.75]">
                    &ldquo;When you welcome a piece of Heaven Furniture into your home, you aren&apos;t just buying timber and fabric — you are investing in seasoned solid wood, time-honored artisanal joinery, and a bespoke design sculpted to outlive generations. We do not build disposable furniture; we craft family heirlooms.&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-base text-[#111815] block">
                      Abul Kalam Bhuiyan
                    </span>
                    <span className="text-xs text-[#5D6B64] font-medium">
                      Founder & Master Craftsman
                    </span>
                  </div>

                  <div className="font-serif italic text-sm text-[#163A2B] font-bold px-3.5 py-1.5 bg-[#FAF9F5] rounded-xl border border-neutral-200/80 shadow-2xs">
                    A. K. Bhuiyan
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Bottom: 3 Core Woodworking Standards with Left-to-Right Ease-in Brand Green Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 shrink-0">
              {craftsmanshipPillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={0.25 + idx * 0.06} className="h-full">
                  <div className="relative overflow-hidden h-full flex flex-col justify-between bg-white rounded-2xl p-5 border border-neutral-200/90 hover:border-[#163A2B] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default">
                    
                    {/* Left-Corner Directional Ease-in Green Backdrop Fill */}
                    <div className="absolute inset-0 bg-[#163A2B] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0" />

                    {/* Card Content Layer */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#163A2B] bg-[#EAF2ED] group-hover:bg-[#E5A83B] group-hover:text-[#163A2B] px-2.5 py-0.5 rounded-full inline-block mb-3 transition-colors duration-400">
                          {pillar.tag}
                        </span>
                        <h4 className="font-display text-sm font-bold text-[#111815] group-hover:text-white mb-2 leading-snug transition-colors duration-400">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-[#5D6B64] group-hover:text-white/90 leading-relaxed font-body transition-colors duration-400">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}




