"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

interface TestimonialCard {
  id: string;
  name: string;
  roleOrLocation: string;
  avatar: string;
  rating: number;
  date: string;
  quote: string;
  productName: string;
  timberSpec: string;
  roomCategory: string;
  productImage: string;
  highlight: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    id: "t1",
    name: "Sarah Khan",
    roleOrLocation: "Nasirabad Housing, Chattogram",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop",
    rating: 5.0,
    date: "Aug 2026",
    quote:
      "The quality is outstanding! We commissioned a custom sectional for our penthouse and the solid teak grain with bouclé upholstery completely elevated our living space.",
    productName: "Haven Modular Sectional Sofa",
    timberSpec: "Kiln-Seasoned Chittagong Teak",
    roomCategory: "Living Sanctuary",
    productImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop",
    highlight: "Custom Penthouse Sectional",
  },
  {
    id: "t2",
    name: "Hasan Ahmed",
    roleOrLocation: "Khulshi Residential, Chattogram",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop",
    rating: 4.9,
    date: "Jul 2026",
    quote:
      "Absolutely love our 8-seater live-edge dining table! The natural grain patterns are magnificent, joints are rock-solid, and white-glove placement was completely seamless.",
    productName: "Verona Live-Edge Dining Table",
    timberSpec: "Single-Slab Seasoned Mahogany",
    roomCategory: "Dining Pavilion",
    productImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=400&auto=format&fit=crop",
    highlight: "8-Seater Live-Edge Suite",
  },
  {
    id: "t3",
    name: "Nusrat Jahan",
    roleOrLocation: "Gulshan-2, Dhaka",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=240&auto=format&fit=crop",
    rating: 5.0,
    date: "Aug 2026",
    quote:
      "I was searching for an authentic solid wood bed without hollow MDF. The Aura platform bed is an heirloom masterpiece with incredible structural stability and satin finish.",
    productName: "Aura King Platform Bed Frame",
    timberSpec: "100% Solid Burma Teak",
    roomCategory: "Master Bedroom",
    productImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop",
    highlight: "100% Solid Wood • Zero MDF",
  },
  {
    id: "t4",
    name: "Tanvir Hossain",
    roleOrLocation: "Agrabad Commercial, Chattogram",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=240&auto=format&fit=crop",
    rating: 4.8,
    date: "Jun 2026",
    quote:
      "Solid heavy teakwood and bespoke dimensions that fit my executive study room like a glove. The natural timber scent and precision mortise joinery are true luxury.",
    productName: "Executive Teak Atelier Desk",
    timberSpec: "Kiln-Dried Shegun Hardwood",
    roomCategory: "Executive Office",
    productImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop",
    highlight: "Custom Mortise Joinery",
  },
  {
    id: "t5",
    name: "Ayesha Siddiqua",
    roleOrLocation: "Banani Residential, Dhaka",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=240&auto=format&fit=crop",
    rating: 5.0,
    date: "Jul 2026",
    quote:
      "The fluted credenza woodwork is sculpted down to the millimeter. Delivered all the way from Chattogram in pristine condition with complete packaging unboxing.",
    productName: "Serenade Fluted Solid Credenza",
    timberSpec: "Natural Satin Oil Finish Teak",
    roomCategory: "Living Sanctuary",
    productImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=400&auto=format&fit=crop",
    highlight: "Hand-Sculpted Fluting",
  },
  {
    id: "t6",
    name: "Barrister Mahir Chowdhury",
    roleOrLocation: "Panchlaish Hills, Chattogram",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=240&auto=format&fit=crop",
    rating: 5.0,
    date: "Jun 2026",
    quote:
      "Heaven Furniture customized every detail of our villa interior. Uncompromising solid hardwood authenticity with a 10-year warranty certificate backed by the founder.",
    productName: "Bespoke Full-Villa Furniture Suite",
    timberSpec: "Chittagong Teak & Mahogany",
    roomCategory: "Full Residence",
    productImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=400&auto=format&fit=crop",
    highlight: "Complete Villa Commission",
  },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const translatePercent = -(currentIndex * (100 / itemsPerView));

  return (
    <section id="reviews" className="content-auto relative pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14 bg-[#FAF9F5] text-neutral-800 border-t border-neutral-200/80 overflow-hidden select-none">
      
      {/* Background Subtle Warm Radial Atmosphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[550px] pointer-events-none opacity-30 blur-3xl z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(229, 168, 59, 0.12) 0%, rgba(250, 249, 245, 0) 75%)"
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 z-10">
        
        {/* ================= SECTION HEADER WITH TRUST STATS ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14 pb-6 border-b border-neutral-200/70">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EE] border border-[#163A2B]/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.16em] mb-3.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#3C6D4F]" />
                <span>AUTHENTIC CLIENT EXPERIENCES</span>
                <span className="text-[#E5A83B]">✦</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111815] tracking-tight leading-[1.14]">
                Loved by Discerning <span className="text-[#163A2B]">Homeowners</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-3 text-xs sm:text-sm text-[#5D6B64] font-body leading-relaxed max-w-xl">
                Read authentic reviews from homeowners and interior architects across Bangladesh who commissioned handcrafted solid wood furniture from our atelier.
              </p>
            </Reveal>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center justify-end gap-3 w-full lg:w-auto pt-2 lg:pt-0">
            {/* Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#163A2B] active:scale-95 text-[#111815] hover:text-white flex items-center justify-center shadow-sm hover:shadow-md border border-neutral-200/90 transition-all duration-300 cursor-pointer group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#163A2B] active:scale-95 text-[#111815] hover:text-white flex items-center justify-center shadow-sm hover:shadow-md border border-neutral-200/90 transition-all duration-300 cursor-pointer group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ================= SLIDING CAROUSEL VIEWPORT ================= */}
        <div
          className="relative overflow-hidden -mx-3 px-3 py-3"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
                <div className="h-full flex flex-col justify-between bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 border border-neutral-200/85 shadow-[0_4px_20px_rgba(17,24,21,0.03)] hover:shadow-[0_20px_45px_rgba(22,58,43,0.09)] hover:border-[#163A2B]/25 transition-all duration-300 relative group overflow-hidden">
                  
                  {/* Elegant Watermark Quote Icon (Clean & Unobstructed) */}
                  <div className="absolute top-5 right-6 text-neutral-200/80 group-hover:text-[#163A2B]/10 transition-colors pointer-events-none select-none z-0">
                    <svg className="w-12 h-12 sm:w-14 sm:h-14 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div>
                    {/* Card Top: Room Category Badge */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-neutral-100 relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-neutral-200/80 text-[#163A2B] text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
                        <span>{card.roomCategory}</span>
                      </div>
                    </div>

                    {/* Client Identity Header with Stars Below Location */}
                    <div className="flex items-start gap-3.5 mb-4 relative z-10">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#163A2B]/10 ring-offset-2 ring-offset-white shadow-xs shrink-0 mt-0.5">
                        <Image
                          src={card.avatar}
                          alt={card.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-bold text-[15px] sm:text-base text-[#111815] leading-snug truncate group-hover:text-[#163A2B] transition-colors">
                            {card.name}
                          </h4>
                          <span className="inline-flex items-center text-[#3C6D4F] text-xs shrink-0" title="Verified Customer">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <p className="text-[11.5px] text-[#63736C] font-normal truncate mt-0.5">
                          {card.roleOrLocation}
                        </p>

                        {/* Rating score number with 1 single star */}
                        <div className="flex items-center gap-1 mt-1 text-[#111815]">
                          <svg className="w-3.5 h-3.5 fill-[#E5A83B] text-[#E5A83B] shrink-0" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs font-bold text-[#111815]">{card.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Customer Review Quote in Website Font */}
                    <div className="relative z-10 py-1">
                      <p className="font-body text-xs sm:text-[13.5px] text-[#2C3E35] leading-relaxed font-normal">
                        &ldquo;{card.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Bespoke Commissioned Piece Capsule */}
                  <div className="mt-5 pt-3.5 border-t border-neutral-100 relative z-10">
                    <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#FAF9F5]/90 border border-neutral-200/70 group-hover:border-[#163A2B]/20 group-hover:bg-[#F5F3EB] transition-all duration-300">
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-neutral-200/80 shadow-xs shrink-0 bg-neutral-100">
                        <Image
                          src={card.productImage}
                          alt={card.productName}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[9px] font-bold text-[#E5A83B] uppercase tracking-wider block truncate">
                            Commissioned Piece
                          </span>
                          <span className="text-[9.5px] text-neutral-400 font-medium">
                            {card.date}
                          </span>
                        </div>
                        <h5 className="font-display font-bold text-xs text-[#111815] leading-snug truncate mt-0.5">
                          {card.productName}
                        </h5>
                        <div className="flex items-center gap-1.5 text-[10.5px] text-[#55635B] mt-0.5 font-medium truncate">
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

        {/* ================= BOTTOM PAGINATION INDICATORS ================= */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className="py-2 px-1 flex items-center cursor-pointer focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`block transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-8 h-2 bg-[#163A2B]"
                      : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}


