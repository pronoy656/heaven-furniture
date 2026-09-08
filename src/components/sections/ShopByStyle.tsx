"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface StyleCategory {
  id: string;
  name: string;
  items: string;
  image: string;
  href: string;
}

const STYLES: StyleCategory[] = [
  {
    id: "modern",
    name: "Modern",
    items: "1,200+ Items",
    image: "/style-modern.jpg",
    href: "/styles?style=modern",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    items: "950+ Items",
    image: "/style-minimalist.jpg",
    href: "/styles?style=minimalist",
  },
  {
    id: "classic",
    name: "Classic",
    items: "870+ Items",
    image: "/style-classic.jpg",
    href: "/styles?style=classic",
  },
  {
    id: "scandinavian",
    name: "Scandinavian",
    items: "760+ Items",
    image: "/style-scandinavian-3.jpg",
    href: "/styles?style=scandinavian",
  },
  {
    id: "industrial",
    name: "Industrial",
    items: "650+ Items",
    image: "/style-industrial-brick.jpg",
    href: "/styles?style=industrial",
  },
];

export default function ShopByStyle() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured-categories" className="pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-18 lg:pb-24 bg-[#FAF9F5] overflow-hidden border-b border-neutral-200/60 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-6 xl:gap-8">
          
          {/* ================= LEFT CONTENT AREA ================= */}
          <div className="w-full lg:w-[260px] xl:w-[300px] shrink-0 flex flex-col items-start text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#627768] mb-2 block">
              SHOP BY STYLE
            </span>

            {/* Clean 2-line headline with comfortable breathing room */}
            <h2 className="font-display text-3xl sm:text-3xl lg:text-[1.95rem] xl:text-[2.25rem] text-[#111815] font-normal leading-[1.16] tracking-tight">
              <span className="block">Find the Style</span>
              <span className="block mt-1">
                That Inspires{" "}
                <span className="text-[#163A2B] font-semibold">You</span>
              </span>
            </h2>

            <p className="mt-3 sm:mt-3.5 text-[#5D6B64] text-xs sm:text-[13px] xl:text-sm leading-relaxed max-w-xs">
              From modern minimalism to timeless classics, explore designs made for every lifestyle.
            </p>

            <div className="mt-5 sm:mt-6 flex items-center gap-3 w-full">
              <Link
                href="/styles"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#163A2B] hover:bg-[#0f281e] active:scale-95 text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-[13px] font-semibold shadow-[0_6px_18px_rgba(22,58,43,0.18)] hover:shadow-[0_10px_22px_rgba(22,58,43,0.25)] transition-all group"
              >
                <span>View All Styles</span>
                <span className="text-sm leading-none transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>

              {/* Navigation arrows for small screens */}
              <div className="flex items-center gap-2 lg:hidden ml-auto">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 active:scale-90 text-neutral-700 flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 active:scale-90 text-neutral-700 flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT 5 STYLES CARDS ================= */}
          <div className="w-full lg:flex-1 min-w-0">
            <div
              ref={scrollContainerRef}
              className="flex lg:grid lg:grid-cols-5 gap-3 sm:gap-3.5 xl:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 pt-1 snap-x snap-mandatory scroll-smooth hide-scrollbar px-1 sm:px-0"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {STYLES.map((style) => (
                <Link
                  key={style.id}
                  href={style.href}
                  className="group relative shrink-0 w-[180px] sm:w-[200px] lg:w-auto aspect-[3/4.2] rounded-[22px] sm:rounded-[24px] overflow-hidden snap-start shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] active:scale-[0.98] transition-all duration-300"
                >
                  {/* Background Image */}
                  <Image
                    src={style.image}
                    alt={`${style.name} furniture style`}
                    fill
                    sizes="(max-width: 640px) 190px, (max-width: 1024px) 210px, 250px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    priority
                  />

                  {/* Soft bottom-only gradient for crisp text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Card Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-end justify-between z-10">
                    <div className="pr-1">
                      <h3 className="text-white text-sm sm:text-base xl:text-[1.05rem] font-bold tracking-tight leading-tight group-hover:text-[#F3EFE6] transition-colors">
                        {style.name}
                      </h3>
                      <p className="text-neutral-200/90 text-[10px] sm:text-[11px] font-normal mt-0.5 tracking-wide">
                        {style.items}
                      </p>
                    </div>

                    {/* Circular Action Arrow Button */}
                    <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#163A2B] group-hover:text-white">
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
