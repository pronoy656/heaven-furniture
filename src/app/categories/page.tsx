"use client";

import Image from "next/image";
import Link from "next/link";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import Reveal from "@/components/ui/Reveal";

interface CategoryShowcase {
  id: string;
  romanNumeral: string;
  name: string;
  tagline: string;
  description: string;
  itemsCount: string;
  primaryWood: string;
  image: string;
  subcategories: string[];
  keyFeatures: string[];
  shopUrl: string;
}

const CATEGORIES_DATA: CategoryShowcase[] = [
  {
    id: "living-room",
    romanNumeral: "I",
    name: "Living Room Sanctuaries",
    tagline: "The Center of Warmth, Gathering & Prestige",
    description:
      "Designed for slowing down and meaningful conversation. Every modular sofa, bouclé accent chair, and fluted media console is anatomically proportioned and hand-built around 100% seasoned solid timber.",
    itemsCount: "120+ Bespoke Designs",
    primaryWood: "Seasoned Chittagong Teak & Belgian Linen",
    image: "/hero-living-room.jpg",
    subcategories: [
      "Modular Linen Sofas",
      "Bouclé Accent Chairs",
      "Fluted Coffee Tables",
      "Solid Teak TV Consoles",
      "Architectural Bookshelves",
      "Side Tables & Pedestals",
    ],
    keyFeatures: [
      "Heavy-duty kiln-seasoned Shegun inner framing",
      "High-density feather-blend resilient cushioning",
      "Stain-resistant imported luxury upholstery",
      "Concealed soft-closing German hardware",
    ],
    shopUrl: "/shop?category=living-room",
  },
  {
    id: "bedroom",
    romanNumeral: "II",
    name: "Master Bedroom Suites",
    tagline: "Serene Sanctuaries for Deep Restorative Sleep",
    description:
      "Quiet, minimalist, and intimately personal. Platform beds with recessed floating joinery, zero-squeak interlocking timber slats, seamless fluted wardrobes, and ergonomic dressing tables.",
    itemsCount: "85+ Bespoke Designs",
    primaryWood: "100% Solid Burma & Chittagong Shegun",
    image: "/style-minimalist.jpg",
    subcategories: [
      "Floating Platform Beds",
      "Four-Poster Canopy Beds",
      "Integrated Floating Nightstands",
      "Walk-In Wardrobe Systems",
      "Full-Length Dressing Mirrors",
      "Upholstered Bed Benches",
    ],
    keyFeatures: [
      "Precision mortise-and-tenon zero-squeak frame joinery",
      "Acoustically warm solid timber headboards",
      "Concealed LED ambient lighting provisions",
      "Hand-rubbed organic satin oil protective finish",
    ],
    shopUrl: "/shop?category=bedroom",
  },
  {
    id: "dining",
    romanNumeral: "III",
    name: "Banquet Dining & Hosting",
    tagline: "Heirloom Tables Sized for Feasts & Memories",
    description:
      "A dining table scaled to your specific room proportions, not generic showroom molds. Monolithic single-slab tops, organic live edges, and sculpted dining chairs that age with graceful patina.",
    itemsCount: "64+ Bespoke Designs",
    primaryWood: "2.5-Inch Single Slab Teak & Polished Brass",
    image: "/style-classic.jpg",
    subcategories: [
      "Monolithic Live-Edge Tables",
      "Sculpted Teak Dining Chairs",
      "Tambour Fluted Credenzas",
      "Bar Counters & High Stools",
      "Glass-Front Display Buffets",
      "Expandable Hosting Tables",
    ],
    keyFeatures: [
      "Single-slab continuous grain Shegun timber",
      "Natural butterfly joint stress reinforcements",
      "Moisture and heat-resistant organic wax barrier",
      "Ergonomically curved lumbar-supporting seating",
    ],
    shopUrl: "/shop?category=dining",
  },
  {
    id: "office",
    romanNumeral: "IV",
    name: "Executive Study & Workspaces",
    tagline: "Focus, Architectural Elegance & Ergonomics",
    description:
      "Atelier executive desks and floor-to-ceiling modular library shelving built with concealed cable routing, dovetail drawers, and Italian saddle leather accents to cultivate absolute clarity and workflow.",
    itemsCount: "48+ Bespoke Designs",
    primaryWood: "Solid Teak & Top-Grain Saddle Leather",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    subcategories: [
      "Executive Atelier Desks",
      "Minimalist Study Tables",
      "Wall-to-Wall Modular Bookshelves",
      "Concealed Storage Credenzas",
      "Solid Wood Conference Tables",
      "Filing Drawers with Locks",
    ],
    keyFeatures: [
      "Discreet subterranean cable channel ports",
      "Hand-stitched Italian leather writing blotters",
      "Smooth glide soft-close dovetail joinery",
      "Load-bearing reinforced timber shelving spans",
    ],
    shopUrl: "/shop?category=office",
  },
  {
    id: "bathroom",
    romanNumeral: "V",
    name: "Spa & Luxury Bathroom Vanities",
    tagline: "Resort-Grade Tranquility for Daily Rituals",
    description:
      "Moisture-sealed seasoned teak cabinetry, floating washstands, and organic stone vessel tops that bring five-star boutique hotel serenity into your personal morning wellness sanctuary.",
    itemsCount: "32+ Bespoke Designs",
    primaryWood: "Hydro-Sealed Marine Grade Chittagong Teak",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    subcategories: [
      "Floating Double Vanities",
      "Freestanding Linen Towers",
      "Teak Slatted Shower Benches",
      "Backlit Teak Vanity Mirrors",
      "Concealed Plumbing Washstands",
      "Under-Counter Organizers",
    ],
    keyFeatures: [
      "Tri-stage waterproofing & fungal barrier sealant",
      "Natural stone and quartz undermount compatibility",
      "Rust-proof marine grade stainless steel fittings",
      "Ventilated solid slatted drawer bases",
    ],
    shopUrl: "/shop?category=bathroom",
  },
  {
    id: "accents",
    romanNumeral: "VI",
    name: "Architectural Accents & Sculptural Pieces",
    tagline: "Signature Statements that Define the Space",
    description:
      "Statement sculptural lounge chairs, live-edge hallway consoles, fluted pedestals, and room dividers that act as functional works of contemporary art in penthouses and luxury residences.",
    itemsCount: "40+ Bespoke Designs",
    primaryWood: "Sculpted Solid Teak, Bouclé & Cast Iron",
    image: "/lounge-chair.jpg",
    subcategories: [
      "Sculptural Lounge Armchairs",
      "Live-Edge Entryway Consoles",
      "Fluted Pedestals & Columns",
      "Timber & Cane Room Dividers",
      "Floating Foyer Wall Units",
      "Handcrafted Teak Benches",
    ],
    keyFeatures: [
      "Organic hand-sanded curved wood silhouettes",
      "Museum-grade visual focal points",
      "Heavyweight premium fabric and leather wraps",
      "Custom sizing available for exact architectural nooks",
    ],
    shopUrl: "/shop?category=living-room",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-800 flex flex-col selection:bg-[#163A2B] selection:text-white">
      <NavBar />

      {/* ================= HERO HEADER: BESPOKE ROOM TAXONOMY (UNIQUE EDITORIAL GRID) ================= */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#F3EFE8] via-[#FAF9F5] to-[#FAF9F5] border-b border-neutral-200/80 overflow-hidden">
        
        {/* Subtle Ambient Radial Lighting */}
        <div 
          className="absolute -top-32 right-1/4 w-[600px] h-[400px] pointer-events-none opacity-40 blur-[100px] z-0"
          style={{
            background: "radial-gradient(circle, rgba(22, 58, 43, 0.08) 0%, rgba(250, 249, 245, 0) 70%)"
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Typography & Room Anchors */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#D2E6DA] text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-5 shadow-2xs">
                <span>✦</span>
                <span>CURATED SPACES &amp; TAXONOMY</span>
                <span>✦</span>
              </div>

              {/* Master Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#111815] tracking-tight leading-[1.12]">
                Explore Furniture, <br />
                <span className="text-[#163A2B] font-serif italic">Room by Living Room.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-sm sm:text-base text-[#5D6B64] font-body leading-relaxed max-w-xl">
                Discover bespoke collections organized by living environment. From expansive family living sanctuaries to quiet executive study nooks, every piece is built from 100% seasoned Chittagong Teak.
              </p>

              {/* Key Quick Stats */}
              <div className="mt-7 grid grid-cols-3 gap-3 w-full max-w-md">
                <div className="bg-white p-3.5 rounded-2xl border border-neutral-200/80 shadow-2xs">
                  <span className="font-display text-2xl font-bold text-[#163A2B] block">6+</span>
                  <span className="text-[11px] text-neutral-500 font-medium">Room Suites</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-neutral-200/80 shadow-2xs">
                  <span className="font-display text-2xl font-bold text-[#163A2B] block">300+</span>
                  <span className="text-[11px] text-neutral-500 font-medium">Designs</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-neutral-200/80 shadow-2xs">
                  <span className="font-display text-2xl font-bold text-[#9E6E16] block">10-Yr</span>
                  <span className="text-[11px] text-neutral-500 font-medium">Warranty</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#living-room"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#163A2B] hover:bg-[#122E22] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg group cursor-pointer"
                >
                  <span>Browse Room Suites</span>
                  <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>

                <a
                  href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20would%20like%20to%20consult%20regarding%20custom%20room%20suites%20and%20dimensions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-[#163A2B] border border-neutral-300 text-xs sm:text-sm font-medium transition-colors shadow-2xs"
                >
                  <span>WhatsApp Concierge</span>
                  <span className="text-[#E5A83B]">→</span>
                </a>
              </div>

            </div>

            {/* Right Column: Unique Multi-Image Architectural Visual Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4 sm:gap-5 items-center">
                
                {/* Main Featured Image Card (Spans 7 cols) */}
                <div className="col-span-7">
                  <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-lg group">
                    <Image
                      src="/hero-living-room.jpg"
                      alt="Living Sanctuary Showcase"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 60vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#163A2B] text-[#E5A83B] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        Living Sanctuary
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-semibold block">The Haven Modular Suite</span>
                      <span className="text-[11px] text-white/80">100% Seasoned Chittagong Teak</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Stacked Images (Spans 5 cols) */}
                <div className="col-span-5 flex flex-col gap-4 sm:gap-5">
                  
                  {/* Top Small Card: Bedroom */}
                  <div className="relative aspect-square rounded-[24px] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md group">
                    <Image
                      src="/style-minimalist.jpg"
                      alt="Master Suite Showcase"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 40vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5A83B] block">Master Suite</span>
                      <span className="text-xs font-medium text-white">Platform Beds</span>
                    </div>
                  </div>

                  {/* Bottom Small Card: Dining */}
                  <div className="relative aspect-square rounded-[24px] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md group">
                    <Image
                      src="/style-classic.jpg"
                      alt="Banquet Dining Showcase"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 40vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5A83B] block">Dining</span>
                      <span className="text-xs font-medium text-white">Solid Shegun Tables</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Quick Room Jump Navigator Pills */}
          <div className="mt-10 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="text-xs text-neutral-500 font-semibold mr-1">Direct Room Jump:</span>
            {CATEGORIES_DATA.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#163A2B] hover:text-white border border-neutral-200/90 text-xs text-neutral-700 font-medium transition-all shadow-2xs cursor-pointer"
              >
                {cat.name.split(" ")[0]} Suite ↓
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES SHOWCASE LIST ================= */}
      <main className="flex-grow mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {CATEGORIES_DATA.map((cat, index) => {
          const isReversed = index % 2 === 1;
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-28"
            >
              <Reveal>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`}
                >
                  {/* Visual Showcase Card */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[16/11] rounded-[32px] overflow-hidden shadow-xl border border-neutral-200/90 bg-white group">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                        <span className="bg-[#163A2B]/90 backdrop-blur-md text-[#E5A83B] text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#E5A83B]/30 shadow-md">
                          {cat.itemsCount}
                        </span>

                        <span className="bg-white/90 backdrop-blur-md text-[#111815] text-[11px] font-bold px-3.5 py-1.5 rounded-full border border-neutral-200 shadow-sm">
                          Suite {cat.romanNumeral}
                        </span>
                      </div>

                      {/* Bottom Material Overlay Tag */}
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5A83B] block mb-1">
                          Signature Material Specification
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-white/95 truncate">
                          ✦ {cat.primaryWood}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Craft Details */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Index & Tag */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-serif text-lg text-[#E5A83B] font-bold">
                        [{cat.romanNumeral}]
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B] bg-[#EAF2ED] px-3.5 py-1 rounded-full border border-[#D2E6DA]">
                        {cat.tagline}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-[#111815] font-normal tracking-tight leading-tight">
                      {cat.name}
                    </h2>

                    {/* Philosophy Description */}
                    <p className="mt-4 text-neutral-600 font-body text-sm sm:text-base leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Key Craftsmanship Standards */}
                    <div className="mt-6 pt-5 border-t border-neutral-200/80">
                      <span className="text-[11px] uppercase font-bold tracking-widest text-neutral-400 block mb-3">
                        Master Atelier Standards:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#163A2B]">
                        {cat.keyFeatures.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 bg-[#FAF8F3] p-2.5 rounded-xl border border-neutral-200/60">
                            <span className="text-[#E5A83B] font-bold shrink-0 mt-0.5">✓</span>
                            <span className="font-medium text-neutral-700">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subcategory Silhouettes */}
                    <div className="mt-6">
                      <span className="text-[11px] uppercase font-bold tracking-widest text-neutral-400 block mb-2.5">
                        Available Silhouettes:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.subcategories.map((sub) => (
                          <span
                            key={sub}
                            className="text-xs font-medium bg-white border border-neutral-200 hover:border-[#163A2B]/40 px-3.5 py-1.5 rounded-full text-neutral-700 transition-colors shadow-2xs"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={cat.shopUrl}
                        className="inline-flex items-center gap-2 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white px-7 py-3.5 text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg group"
                      >
                        <span>Explore {cat.name.split(" ")[0]} Collection</span>
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </Link>

                      <a
                        href={`https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20would%20like%20to%20inquire%20about%20bespoke%20custom%20designs%20for%20the%20${encodeURIComponent(cat.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-neutral-50 text-[#163A2B] border border-neutral-300 px-5 py-3.5 text-xs sm:text-sm font-medium transition-colors"
                      >
                        <span>Custom Sizing Request</span>
                        <span className="text-[#E5A83B]">✦</span>
                      </a>
                    </div>

                  </div>
                </div>
              </Reveal>
            </section>
          );
        })}

        {/* ================= FULL RESIDENCE INTERIOR HARMONIZATION BANNER ================= */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] min-h-[460px] sm:min-h-[500px] flex items-center p-8 sm:p-12 lg:p-16 border border-[#E5A83B]/30 shadow-2xl text-white">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury Penthouse Architectural Transformation"
                fill
                className="object-cover object-center filter brightness-[0.95]"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
              {/* Subtle Natural Green & Vignette Overlay with balanced clarity */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#06140D]/80 via-[#0F291E]/50 to-[#06140D]/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06140D]/85 via-black/20 to-black/40" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-[#E5A83B]/60 text-[#E5A83B] text-xs font-bold uppercase tracking-[0.2em] mb-5 backdrop-blur-md shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B] animate-pulse" />
                <span>BESPOKE RESIDENTIAL COMMISSIONING</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Furnishing an Entire Penthouse, Residence, or Villa?
              </h2>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-200/95 font-body leading-relaxed max-w-2xl font-light">
                Our master architects and woodcraft artisans work directly with discerning homeowners and interior designers. We provide comprehensive room-by-room wood harmonization, 3D spatial layout drafting, and on-site measurements in Chattogram &amp; Dhaka.
              </p>

              {/* Trust Checkmarks */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-200">
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 backdrop-blur-xs">
                  <span className="text-[#E5A83B] font-bold">✓</span>
                  <span>Complimentary Site Measurements</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 backdrop-blur-xs">
                  <span className="text-[#E5A83B] font-bold">✓</span>
                  <span>Custom Timber Sourcing</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 backdrop-blur-xs">
                  <span className="text-[#E5A83B] font-bold">✓</span>
                  <span>Turnkey White-Glove Setup</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20am%20furnishing%20a%20full%20residence/penthouse%20and%20would%20like%20to%20consult%20with%20your%20design%20architects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E5A83B] hover:bg-[#d4972f] text-[#163A2B] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl group cursor-pointer"
                >
                  <span>Book Atelier Residence Consultation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="tel:+8801819642289"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-semibold transition-all backdrop-blur-md"
                >
                  <span>Direct Hotline: +880 1819-642289</span>
                </a>
              </div>
            </div>

          </div>
        </Reveal>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
