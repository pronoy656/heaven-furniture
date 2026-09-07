"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

interface RoomCardData {
  title: string;
  tag: string;
  copy: string;
  href: string;
  image: string;
  exploreText: string;
}

const ROOMS_DATA: Record<string, RoomCardData> = {
  living: {
    title: "Living Room",
    tag: "✦ Living Sanctuary",
    copy: "Crafted with 100% seasoned solid timber to transform your home's centerpiece into a haven of architectural warmth, prestige, and timeless luxury.",
    href: "/shop?category=living-room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    exploreText: "Explore Living Collection",
  },
  bedroom: {
    title: "Bed Room",
    tag: "✦ Master Suite",
    copy: "Serene floating joinery and acoustically warm woods crafted for deep restorative sleep and uncluttered modern elegance.",
    href: "/shop?category=bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
    exploreText: "Explore Bedroom Sets",
  },
  bathroom: {
    title: "Bathroom",
    tag: "✦ Spa & Vanity",
    copy: "Moisture-sealed seasoned teak cabinetry and organic stone accents that bring boutique 5-star resort tranquility into your daily rituals.",
    href: "/shop?category=bathroom",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    exploreText: "Explore Vanity Storage",
  },
  dining: {
    title: "Dining Room",
    tag: "✦ Banquet Pavilion",
    copy: "Heirloom solid live-edge Shegun tables and ergonomic curved chairs designed to anchor your family's most memorable shared feasts.",
    href: "/shop?category=dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    exploreText: "Explore Dining Suites",
  },
};

export default function ShopByRoom() {
  const { living, bedroom, bathroom, dining } = ROOMS_DATA;

  return (
    <section className="bg-white py-20 lg:py-32 border-t border-neutral-200/80">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header with Luxury Typography & Signature Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span>✦</span>
              <span>CURATED SPACES</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-tight">
              Shop by <span className="text-[#163A2B] font-serif italic">Room</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.14}>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#5D6B64] font-body leading-relaxed max-w-xl mx-auto">
              Find handcrafted solid-wood furniture tailored to every living space in your home.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric Grid Layout with Grand Proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Large Living Room Card (Spans 6 Cols, full height) */}
          <div className="lg:col-span-6 flex">
            <Reveal className="w-full h-full flex">
              <Link
                href={living.href}
                className="group relative w-full min-h-[420px] sm:min-h-[540px] lg:min-h-[700px] rounded-3xl overflow-hidden block shadow-sm hover:shadow-2xl active:scale-[0.99] transition-all duration-500"
              >
                <Image
                  src={living.image}
                  alt={living.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.98]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Default subtle base shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:from-black/50 lg:via-transparent lg:group-hover:opacity-0 transition-opacity duration-500" />

                {/* Rich Linear Gradient Sheet on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent opacity-0 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8 z-10 flex flex-col justify-end">
                  
                  {/* Default State Pill Button */}
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-white/95 px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg backdrop-blur-md border border-white/40 w-fit transition-all duration-300 group-hover:bg-[#163A2B] group-hover:border-[#E5A83B]/30 group-hover:shadow-xl active:scale-95">
                    <span className="font-display text-xs sm:text-sm lg:text-base font-bold text-neutral-900 group-hover:text-white transition-colors">
                      {living.title}
                    </span>
                    <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] sm:text-xs group-hover:bg-[#E5A83B] group-hover:text-[#163A2B] transition-colors">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </div>

                  {/* Information block: Visible on mobile, expands smoothly on desktop hover */}
                  <div className="lg:grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <div className="pt-3 sm:pt-4 space-y-1.5 sm:space-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 delay-75">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E5A83B] block">
                          {living.tag}
                        </span>
                        
                        <p className="text-xs sm:text-sm text-neutral-200 font-body leading-relaxed max-w-lg line-clamp-2 sm:line-clamp-none">
                          {living.copy}
                        </p>

                        <div className="pt-1 sm:pt-2 flex items-center gap-2 text-xs font-bold text-[#E5A83B] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                          <span>{living.exploreText}</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </Reveal>
          </div>

          {/* Right Column Stack (Spans 6 Cols: Top 2 cards + Bottom 1 wide card) */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            
            {/* Top Row: Bed Room & Bathroom (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
              
              {/* Bed Room Card */}
              <Reveal delay={0.1} className="h-full">
                <Link
                  href={bedroom.href}
                  className="group relative w-full h-[280px] sm:h-full min-h-[280px] lg:min-h-[320px] rounded-3xl overflow-hidden block shadow-sm hover:shadow-2xl active:scale-[0.99] transition-all duration-500"
                >
                  <Image
                    src={bedroom.image}
                    alt={bedroom.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.98]"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:from-black/50 lg:via-transparent lg:group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent opacity-0 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                  {/* Bottom Content Area */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 z-10 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-md backdrop-blur-md border border-white/40 w-fit transition-all duration-300 group-hover:bg-[#163A2B] group-hover:border-[#E5A83B]/30 active:scale-95">
                      <span className="font-display text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-white transition-colors">
                        {bedroom.title}
                      </span>
                      <span className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded-full bg-black text-white flex items-center justify-center text-[9px] sm:text-[10px] group-hover:bg-[#E5A83B] group-hover:text-[#163A2B] transition-colors">
                        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>

                    {/* Info Block */}
                    <div className="lg:grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                      <div className="overflow-hidden">
                        <div className="pt-2 sm:pt-3 space-y-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-3 lg:group-hover:translate-y-0 transition-all duration-500 delay-75">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#E5A83B] block">
                            {bedroom.tag}
                          </span>
                          <p className="text-[11px] sm:text-xs text-neutral-200 font-body leading-relaxed line-clamp-2">
                            {bedroom.copy}
                          </p>
                          <div className="pt-0.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#E5A83B] uppercase tracking-wider">
                            <span>{bedroom.exploreText}</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </Reveal>

              {/* Bathroom Card */}
              <Reveal delay={0.15} className="h-full">
                <Link
                  href={bathroom.href}
                  className="group relative w-full h-[280px] sm:h-full min-h-[280px] lg:min-h-[320px] rounded-3xl overflow-hidden block shadow-sm hover:shadow-2xl active:scale-[0.99] transition-all duration-500"
                >
                  <Image
                    src={bathroom.image}
                    alt={bathroom.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.98]"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:from-black/50 lg:via-transparent lg:group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent opacity-0 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                  {/* Bottom Content Area */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 z-10 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-md backdrop-blur-md border border-white/40 w-fit transition-all duration-300 group-hover:bg-[#163A2B] group-hover:border-[#E5A83B]/30 active:scale-95">
                      <span className="font-display text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-white transition-colors">
                        {bathroom.title}
                      </span>
                      <span className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded-full bg-black text-white flex items-center justify-center text-[9px] sm:text-[10px] group-hover:bg-[#E5A83B] group-hover:text-[#163A2B] transition-colors">
                        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>

                    {/* Info Block */}
                    <div className="lg:grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                      <div className="overflow-hidden">
                        <div className="pt-2 sm:pt-3 space-y-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-3 lg:group-hover:translate-y-0 transition-all duration-500 delay-75">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#E5A83B] block">
                            {bathroom.tag}
                          </span>
                          <p className="text-[11px] sm:text-xs text-neutral-200 font-body leading-relaxed line-clamp-2">
                            {bathroom.copy}
                          </p>
                          <div className="pt-0.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#E5A83B] uppercase tracking-wider">
                            <span>{bathroom.exploreText}</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </Reveal>

            </div>

            {/* Bottom Row: Dining Room (Wide Card) */}
            <Reveal delay={0.2} className="flex-1">
              <Link
                href={dining.href}
                className="group relative w-full h-[300px] sm:h-full min-h-[300px] lg:min-h-[340px] rounded-3xl overflow-hidden block shadow-sm hover:shadow-2xl active:scale-[0.99] transition-all duration-500"
              >
                <Image
                  src={dining.image}
                  alt={dining.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.98]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:from-black/50 lg:via-transparent lg:group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent opacity-0 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8 z-10 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-white/95 px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg backdrop-blur-md border border-white/40 w-fit transition-all duration-300 group-hover:bg-[#163A2B] group-hover:border-[#E5A83B]/30 group-hover:shadow-xl active:scale-95">
                    <span className="font-display text-xs sm:text-sm lg:text-base font-bold text-neutral-900 group-hover:text-white transition-colors">
                      {dining.title}
                    </span>
                    <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] sm:text-xs group-hover:bg-[#E5A83B] group-hover:text-[#163A2B] transition-colors">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </div>

                  {/* Expanded Hover Information Slide-up */}
                  <div className="lg:grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <div className="pt-2.5 sm:pt-3.5 space-y-1 sm:space-y-1.5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-3 lg:group-hover:translate-y-0 transition-all duration-500 delay-75">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E5A83B] block">
                          {dining.tag}
                        </span>
                        
                        <p className="text-xs sm:text-sm text-neutral-200 font-body leading-relaxed max-w-xl line-clamp-2">
                          {dining.copy}
                        </p>

                        <div className="pt-1 sm:pt-1.5 flex items-center gap-2 text-xs font-bold text-[#E5A83B] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                          <span>{dining.exploreText}</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}
