"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

interface TestimonialCard {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  productName: string;
  timberSpec: string;
  roomCategory: string;
  productImage: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    id: "t1",
    name: "Sarah Khan",
    location: "Nasirabad Housing, Chattogram",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    quote:
      "The quality is outstanding! We commissioned a custom sectional for our penthouse and the solid teak grain with bouclé upholstery completely elevated our living room.",
    productName: "Haven Modular Sectional Sofa",
    timberSpec: "Kiln-Seasoned Chittagong Teak",
    roomCategory: "Living Sanctuary",
    productImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Hasan Ahmed",
    location: "Khulshi Residential, Chattogram",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    quote:
      "Absolutely love our 8-seater live-edge dining table! The natural grain patterns are magnificent, joints are rock-solid, and white-glove placement was flawless.",
    productName: "Verona Live-Edge Dining Table",
    timberSpec: "Single-Slab Seasoned Mahogany",
    roomCategory: "Dining Pavilion",
    productImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Nusrat Jahan",
    location: "Gulshan-2, Dhaka",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    quote:
      "I was searching for an authentic solid wood bed without hollow MDF. The Aura platform bed is an heirloom masterpiece with incredible stability and finish.",
    productName: "Aura King Platform Bed Frame",
    timberSpec: "100% Solid Burma Teak",
    roomCategory: "Master Bedroom",
    productImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t4",
    name: "Tanvir Hossain",
    location: "Agrabad Commercial, Chattogram",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    quote:
      "Solid heavy teakwood and bespoke dimensions that fit my executive study room like a glove. The natural timber scent and precision mortise joinery are true luxury.",
    productName: "Executive Teak Atelier Desk",
    timberSpec: "Kiln-Dried Shegun Hardwood",
    roomCategory: "Executive Office",
    productImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t5",
    name: "Ayesha Siddiqua",
    location: "Banani Residential, Dhaka",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    quote:
      "The fluted credenza woodwork is sculpted down to the millimeter. Delivered all the way from Chattogram in pristine condition with complete packaging disposal.",
    productName: "Serenade Fluted Solid Credenza",
    timberSpec: "Natural Satin Oil Finish Teak",
    roomCategory: "Living Sanctuary",
    productImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t6",
    name: "Barrister Mahir Chowdhury",
    location: "Panchlaish Hills, Chattogram",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    quote:
      "Heaven Furniture customized every detail of our villa interior. Uncompromising solid hardwood authenticity with a 10-year warranty certificate backed by the founder.",
    productName: "Bespoke Full-Villa Furniture Suite",
    timberSpec: "Chittagong Teak & Mahogany",
    roomCategory: "Full Residence",
    productImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=400&auto=format&fit=crop",
  },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateItemsPerView = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    }
  }, []);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [updateItemsPerView]);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  // Keep currentIndex clamped when itemsPerView changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 450);
  }, [isTransitioning, maxIndex]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 450);
  }, [isTransitioning, maxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Zero-gap exact viewport sliding translation
  const translatePercent = -(currentIndex * (100 / itemsPerView));

  return (
    <section id="reviews" className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF9F5] text-neutral-800 border-t border-neutral-200/80 overflow-hidden select-none">
      
      {/* Background Subtle Warm Radial Atmosphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[550px] pointer-events-none opacity-40 blur-3xl z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(229, 168, 59, 0.15) 0%, rgba(250, 249, 245, 0) 75%)"
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 pb-6 border-b border-neutral-200/70">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                <span className="text-[#E5A83B]">✦</span>
                <span>AUTHENTIC CLIENT EXPERIENCES</span>
                <span className="text-[#E5A83B]">✦</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111815] tracking-tight leading-[1.12]">
                What Our <span className="text-[#163A2B] font-medium">Clients Say</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-3 text-xs sm:text-sm text-[#5D6B64] leading-relaxed max-w-xl">
                Genuine feedback from homeowners and architects who commissioned bespoke solid wood furniture from our Chattogram atelier.
              </p>
            </Reveal>
          </div>

          {/* Navigation Controls in Header for Quick Access */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#163A2B] text-neutral-800 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg border border-neutral-200 transition-all duration-300 cursor-pointer group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#163A2B] text-neutral-800 hover:text-white flex items-center justify-center shadow-md hover:shadow-lg border border-neutral-200 transition-all duration-300 cursor-pointer group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* ================= ZERO-GAP SLIDING VIEWPORT STAGE ================= */}
        <div className="relative overflow-hidden -mx-3 px-3 py-2" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(${translatePercent}%)`,
            }}
          >
            {TESTIMONIALS.map((card) => (
              <div
                key={card.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <div className="h-full flex flex-col justify-between bg-gradient-to-b from-white via-[#FCFBF8] to-[#FAF8F3] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-[#E5A83B]/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_48px_rgba(22,58,43,0.12)] hover:border-[#E5A83B]/60 transition-all duration-500 relative group min-h-[420px] overflow-hidden">
                  
                  {/* Subtle Top-Right Ambient Gold Glow on Hover */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#E5A83B]/10 rounded-full blur-2xl group-hover:bg-[#E5A83B]/20 transition-all duration-500 pointer-events-none" />

                  {/* Top Status & Atelier Commission Header */}
                  <div>
                    {/* Atelier Commission Stamp & Star Rating */}
                    <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-neutral-200/60">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#163A2B]/5 border border-[#163A2B]/10 text-[#163A2B] text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
                        <span>{card.roomCategory}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <div className="flex text-[#E5A83B] text-xs">
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <svg key={starIdx} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-[#111815] ml-1">5.0</span>
                      </div>
                    </div>

                    {/* Client Identity Details */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#E5A83B]/30 ring-offset-2 ring-offset-white shadow-xs shrink-0">
                        <Image
                          src={card.avatar}
                          alt={card.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-base text-[#111815] leading-tight truncate group-hover:text-[#163A2B] transition-colors">
                          {card.name}
                        </h4>
                        <p className="text-xs text-[#6A7870] font-normal truncate mt-1">
                          {card.location}
                        </p>
                      </div>
                    </div>

                    {/* Customer Review Quote in Website Body Font */}
                    <div className="relative pt-1 pb-1">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-neutral-700 leading-relaxed font-normal">
                        &ldquo;{card.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bespoke Commissioned Piece Capsule */}
                  <div className="mt-5 pt-3.5 border-t border-neutral-200/70">
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80 group-hover:border-[#163A2B]/20 group-hover:bg-[#F4F1EA] transition-all duration-300">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-neutral-200 shadow-xs shrink-0 bg-neutral-100">
                        <Image
                          src={card.productImage}
                          alt={card.productName}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-[9px] font-bold text-[#E5A83B] uppercase tracking-wider block truncate">
                          Commissioned Piece
                        </span>
                        <h5 className="font-display font-semibold text-xs text-[#111815] leading-snug truncate">
                          {card.productName}
                        </h5>
                        <div className="flex items-center gap-1.5 text-[10px] text-[#55635B] mt-0.5 font-medium truncate">
                          <span className="truncate">{card.timberSpec}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM PAGINATION INDICATOR ================= */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-8 h-2.5 bg-[#163A2B] rounded-full"
                    : "w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

