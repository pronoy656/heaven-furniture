"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import Reveal from "@/components/ui/Reveal";

interface DealProduct {
  id: string;
  name: string;
  category: "all" | "living" | "bedroom" | "dining" | "office";
  categoryLabel: string;
  originalPrice: number;
  salePrice: number;
  saveAmount: number;
  discountBadge: string;
  rating: number;
  reviews: number;
  woodType: string;
  image: string;
  stockLeft: number;
  totalStock: number;
  description: string;
  dimensions: string;
}

const DEALS_LIST: DealProduct[] = [
  {
    id: "haven-sofa",
    name: "Haven Modular Linen Lounge Sofa",
    category: "living",
    categoryLabel: "Living Sanctuary",
    originalPrice: 145000,
    salePrice: 119000,
    saveAmount: 26000,
    discountBadge: "Save ৳26,000",
    rating: 4.9,
    reviews: 142,
    woodType: "100% Solid Chittagong Teak",
    image: "/hero-living-room.jpg",
    stockLeft: 2,
    totalStock: 8,
    description: "Deep feather-blend cushioning wrapped in stain-resistant Belgian linen, anchored by a solid seasoned Shegun frame.",
    dimensions: "240cm (W) x 105cm (D) x 78cm (H)",
  },
  {
    id: "boucle-chair",
    name: "Modern Bouclé & Teak Lounge Chair",
    category: "living",
    categoryLabel: "Accent Seating",
    originalPrice: 68000,
    salePrice: 54000,
    saveAmount: 14000,
    discountBadge: "Save ৳14,000",
    rating: 4.9,
    reviews: 98,
    woodType: "Sculpted Solid Teak Frame",
    image: "/lounge-chair.jpg",
    stockLeft: 4,
    totalStock: 10,
    description: "Ergonomic floating silhouette with hand-tapered solid wood legs and heavyweight cream bouclé upholstery.",
    dimensions: "84cm (W) x 88cm (D) x 76cm (H)",
  },
  {
    id: "verona-dining",
    name: "Verona Live-Edge Solid Teak Dining Table",
    category: "dining",
    categoryLabel: "Banquet Dining",
    originalPrice: 185000,
    salePrice: 149000,
    saveAmount: 36000,
    discountBadge: "Save ৳36,000",
    rating: 5.0,
    reviews: 64,
    woodType: "2.5-Inch Single Slab Teak",
    image: "/style-classic.jpg",
    stockLeft: 2,
    totalStock: 6,
    description: "Monolithic single-slab seasoned Chittagong Shegun with natural organic live edges and butterfly joint reinforcements.",
    dimensions: "220cm (L) x 100cm (W) x 76cm (H)",
  },
  {
    id: "aura-bed",
    name: "Aura Minimalist Floating Platform Bed",
    category: "bedroom",
    categoryLabel: "Master Suite",
    originalPrice: 135000,
    salePrice: 108000,
    saveAmount: 27000,
    discountBadge: "Save ৳27,000",
    rating: 4.9,
    reviews: 82,
    woodType: "Solid Burma & Chittagong Teak",
    image: "/style-minimalist.jpg",
    stockLeft: 3,
    totalStock: 7,
    description: "Recessed cantilever base providing a serene floating aesthetic, equipped with interlocking zero-squeak wood slats.",
    dimensions: "King Size: 183cm x 203cm",
  },
  {
    id: "serenade-credenza",
    name: "Serenade Fluted Solid Teak Credenza",
    category: "living",
    categoryLabel: "Storage & Consoles",
    originalPrice: 95000,
    salePrice: 78000,
    saveAmount: 17000,
    discountBadge: "Save ৳17,000",
    rating: 4.9,
    reviews: 68,
    woodType: "Precision Fluted Solid Teak",
    image: "/style-modern.jpg",
    stockLeft: 3,
    totalStock: 8,
    description: "Hand-milled fluted tambour wave facade with soft-closing push hardware and discreet cable management ports.",
    dimensions: "200cm (W) x 48cm (D) x 58cm (H)",
  },
  {
    id: "apex-desk",
    name: "Apex Executive Architectural Atelier Desk",
    category: "office",
    categoryLabel: "Executive Office",
    originalPrice: 88000,
    salePrice: 72000,
    saveAmount: 16000,
    discountBadge: "Save ৳16,000",
    rating: 4.9,
    reviews: 47,
    woodType: "Solid Teak & Saddle Leather",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    stockLeft: 2,
    totalStock: 5,
    description: "Integrated Italian saddle leather writing pad, German soft-close dovetail drawers, and concealed wire routing.",
    dimensions: "160cm (W) x 75cm (D) x 76cm (H)",
  },
  {
    id: "elysian-canopy-bed",
    name: "Elysian Solid Burma Teak Canopy Bed",
    category: "bedroom",
    categoryLabel: "Master Suite",
    originalPrice: 195000,
    salePrice: 159000,
    saveAmount: 36000,
    discountBadge: "Save ৳36,000",
    rating: 5.0,
    reviews: 41,
    woodType: "Grade-A 100% Burma Teak",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    stockLeft: 1,
    totalStock: 4,
    description: "Four-poster architectural monument featuring mortise-and-tenon corner bracing and hand-sanded honey satin oil finish.",
    dimensions: "King Size: 190cm x 210cm x 215cm",
  },
  {
    id: "fluted-table",
    name: "Fluted Teak Round Pedestal Coffee Table",
    category: "living",
    categoryLabel: "Living Sanctuary",
    originalPrice: 52000,
    salePrice: 42000,
    saveAmount: 10000,
    discountBadge: "Save ৳10,000",
    rating: 4.8,
    reviews: 73,
    woodType: "Solid Seasoned Chittagong Teak",
    image: "/style-scandinavian-3.jpg",
    stockLeft: 5,
    totalStock: 12,
    description: "Individual hand-milled fluted tambour perimeter with water-resistant organic sealant and weighted tip-proof base.",
    dimensions: "90cm (Diameter) x 42cm (H)",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Studio Deals" },
  { id: "living", label: "Living Sanctuaries" },
  { id: "bedroom", label: "Master Suites" },
  { id: "dining", label: "Banquet Dining" },
  { id: "office", label: "Executive Workspaces" },
];

export default function DealsPage() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Live Horology Countdown State (Days, Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 38,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 4, hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
    const product = DEALS_LIST.find((p) => p.id === id);
    if (product) {
      const isNowSaved = !wishlist[id];
      setToastMessage(isNowSaved ? `Saved "${product.name}" to your wishlist!` : `Removed from wishlist.`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const copyVoucher = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setToastMessage(`Voucher code "${code}" copied to clipboard!`);
    setTimeout(() => {
      setCopiedCode(null);
      setToastMessage(null), 3500;
    }, 3000);
  };

  const filteredDeals = selectedCat === "all"
    ? DEALS_LIST
    : DEALS_LIST.filter((item) => item.category === selectedCat);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-800 flex flex-col selection:bg-[#163A2B] selection:text-white">
      <NavBar />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-6 z-50 bg-[#163A2B] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E5A83B]/30"
          >
            <span className="text-[#E5A83B] font-bold">✦</span>
            <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO HEADER: BESPOKE STUDIO DEALS ================= */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#0F291E] via-[#143628] to-[#163A2B] text-white overflow-hidden border-b border-[#E5A83B]/25">
        
        {/* Ambient Architectural Lighting & Radial Glows */}
        <div 
          className="absolute -top-32 left-1/4 w-[600px] h-[500px] pointer-events-none opacity-30 blur-[120px] z-0"
          style={{
            background: "radial-gradient(circle, rgba(229, 168, 59, 0.45) 0%, rgba(22, 58, 43, 0) 70%)"
          }}
        />
        <div 
          className="absolute -bottom-24 right-10 w-[500px] h-[400px] pointer-events-none opacity-20 blur-[100px] z-0"
          style={{
            background: "radial-gradient(circle, rgba(229, 168, 59, 0.35) 0%, rgba(15, 41, 30, 0) 70%)"
          }}
        />

        {/* Subtle Geometric Atelier Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Value Pillars & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Premium Atelier Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-[#E5A83B]/40 text-[#E5A83B] text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] mb-5 backdrop-blur-md shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B] animate-pulse" />
                <span>DIRECT ATELIER PROMOTIONS &amp; SUITES</span>
                <span className="text-white/40">•</span>
                <span className="text-white/80 font-medium tracking-wider">SEASON 2026</span>
              </div>

              {/* Master Display Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]">
                Uncompromising Craft. <br />
                <span className="text-[#E5A83B] italic font-serif font-light">Unrepeatable Studio Savings.</span>
              </h1>

              {/* Refined Description */}
              <p className="mt-5 text-sm sm:text-base text-neutral-200/90 font-body leading-relaxed max-w-2xl font-light">
                Curated room ensembles, bespoke living suites, and signature solid Shegun masterworks — offered directly from our Chattogram workshop at special seasonal allocations for discerning residences.
              </p>

              {/* Three Value Pillars */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-200">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-xs">
                  <span className="text-[#E5A83B] font-bold">✓</span>
                  <span>100% Solid Chittagong Teak</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-xs">
                  <span className="text-[#E5A83B] font-bold">✓</span>
                  <span>10-Year Direct Warranty</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-xs">
                  <span className="text-[#E5A83B] font-bold">✓</span>
                  <span>White-Glove Home Setup</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#deals-grid"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5A83B] hover:bg-[#d4972f] text-[#163A2B] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl group cursor-pointer"
                >
                  <span>Explore Studio Deals</span>
                  <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>

                <a
                  href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20would%20like%20to%20inquire%20about%20your%20current%20Exclusive%20Studio%20Deals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all backdrop-blur-sm"
                >
                  <span>WhatsApp Concierge</span>
                  <span className="text-[#E5A83B]">→</span>
                </a>
              </div>

            </div>

            {/* Right Column: Horology-Inspired Atelier Countdown Pod & Allocation Status */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-6 sm:p-8 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#E5A83B]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Top Status Banner */}
                <div className="flex items-center justify-between gap-2 pb-5 border-b border-white/15">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5A83B] block">
                      Limited Atelier Batch
                    </span>
                    <span className="text-xs text-neutral-300 font-medium">
                      Showroom &amp; Online Allocation
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5A83B]/20 border border-[#E5A83B]/40 text-[#E5A83B] text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B] animate-ping" />
                    <span>7 Sets Left</span>
                  </div>
                </div>

                {/* Horology Countdown Dials */}
                <div className="py-6">
                  <span className="text-[11px] uppercase tracking-widest text-neutral-300 block mb-3 font-semibold text-center sm:text-left">
                    Artisan Pricing Window Closes In:
                  </span>
                  
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                    
                    {/* Days */}
                    <div className="bg-[#0A1D15]/80 p-3 sm:p-3.5 rounded-2xl border border-white/10 shadow-inner">
                      <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white block leading-none tracking-tight">
                        {String(timeLeft.days).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2 block font-medium">
                        Days
                      </span>
                    </div>

                    {/* Hours */}
                    <div className="bg-[#0A1D15]/80 p-3 sm:p-3.5 rounded-2xl border border-white/10 shadow-inner">
                      <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white block leading-none tracking-tight">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2 block font-medium">
                        Hours
                      </span>
                    </div>

                    {/* Minutes */}
                    <div className="bg-[#0A1D15]/80 p-3 sm:p-3.5 rounded-2xl border border-white/10 shadow-inner">
                      <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white block leading-none tracking-tight">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2 block font-medium">
                        Mins
                      </span>
                    </div>

                    {/* Seconds */}
                    <div className="bg-[#0A1D15]/80 p-3 sm:p-3.5 rounded-2xl border border-[#E5A83B]/50 shadow-inner ring-1 ring-[#E5A83B]/30">
                      <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5A83B] block leading-none tracking-tight">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-[#E5A83B]/90 uppercase tracking-widest mt-2 block font-semibold">
                        Secs
                      </span>
                    </div>

                  </div>
                </div>

                {/* Micro Perks Feature */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-neutral-200">
                  <span className="text-neutral-300">Direct Workshop Savings</span>
                  <span className="text-[#E5A83B] font-bold">Up to ৳56,000 Off</span>
                </div>

              </div>
            </div>

          </div>

          {/* Quick Voucher Coupon Bar */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#E5A83B] text-[#163A2B] font-extrabold text-[11px] tracking-wider uppercase shadow-xs">
                EXTRA 10% OFF
              </span>
              <span className="text-neutral-200 font-medium">
                Apply voucher code <strong className="text-white font-mono bg-white/15 px-2.5 py-0.5 rounded-md border border-white/20 ml-1">HEAVEN10</strong> on qualifying studio orders above ৳1,00,000
              </span>
            </div>

            <button
              type="button"
              onClick={() => copyVoucher("HEAVEN10")}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E5A83B] hover:text-white transition-all cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 shadow-xs active:scale-95"
            >
              <span>{copiedCode === "HEAVEN10" ? "✓ Code Copied" : "Copy Voucher Code"}</span>
            </button>
          </div>

        </div>
      </section>

      {/* ================= MAIN DEALS CONTENT ================= */}
      <main className="flex-grow mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* ================= SPOTLIGHT DEAL OF THE MONTH: FULL ROOM BUNDLE ================= */}
        <Reveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FCFBF8] to-[#FAF8F3] rounded-[32px] p-6 sm:p-10 lg:p-12 mb-14 sm:mb-16 border border-[#E5A83B]/30 shadow-md">
            
            {/* Corner Decorative Amber Stamp */}
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#163A2B] text-[#E5A83B] text-[11px] font-bold uppercase tracking-wider">
              <span>✦</span>
              <span>ATELIER MASTER SUITE BUNDLE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#163A2B] bg-[#EAF2ED] px-3 py-1 rounded-full mb-3">
                  Curated Living Sanctuary
                </span>

                <h2 className="font-display text-2xl sm:text-4xl text-[#111815] font-bold tracking-tight leading-tight">
                  The Penthouse Suite (Full 4-Piece Living Room Ensemble)
                </h2>

                <p className="mt-3 text-xs sm:text-sm md:text-base text-[#5D6B64] font-body leading-relaxed">
                  Complete room transformation crafted from 100% seasoned Chittagong Teak: includes the Haven Modular Sofa (3-Seater), Fluted Teak Coffee Table, and 2 Handcrafted Bouclé Lounge Chairs.
                </p>

                {/* Included Pieces Chips */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  {["Haven Modular Sofa (Teak Frame)", "Fluted Round Teak Table", "2x Bouclé Armchairs", "Complimentary In-Home Setup"].map((feature) => (
                    <span key={feature} className="px-3 py-1.5 rounded-xl bg-white border border-neutral-200/90 text-[#163A2B] font-medium flex items-center gap-1.5 shadow-2xs">
                      <span className="text-[#E5A83B] font-bold">✓</span>
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                {/* Pricing & Savings */}
                <div className="mt-6 pt-5 border-t border-neutral-200/70 flex flex-wrap items-baseline gap-4">
                  <div>
                    <span className="text-xs text-neutral-400 block mb-0.5">Bundle Promotional Price</span>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-3xl sm:text-4xl font-bold text-[#163A2B]">
                        ৳1,89,000
                      </span>
                      <span className="text-sm sm:text-base text-neutral-400 line-through">
                        ৳2,45,000
                      </span>
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-[#9E6E16] bg-[#E5A83B]/20 border border-[#E5A83B]/40 px-3.5 py-1.5 rounded-full">
                    Instant Savings: ৳56,000
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3.5">
                  <a
                    href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20would%20like%20to%20reserve%20The%20Penthouse%20Suite%20Bundle%20(Special%20Price%20%E0%A7%B31,89,000)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#163A2B] hover:bg-[#1f4e3b] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg group cursor-pointer"
                  >
                    <span>Reserve Bundle on WhatsApp</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  <Link
                    href="/shop?category=living-room"
                    className="px-6 py-3.5 rounded-full border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Explore Individual Pieces
                  </Link>
                </div>
              </div>

              {/* Right Image Showcase */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-inner group">
                  <Image
                    src="/hero-living-room.jpg"
                    alt="The Complete Living Room Collection"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-white text-xs font-semibold">
                    <span>📍 Featured in Nasirabad Penthouse Suite</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div id="deals-grid" className="scroll-mt-24 flex items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200/80 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#163A2B] text-white shadow-md"
                      : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/80 hover:bg-neutral-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[#5D6B64] font-medium hidden sm:block">
            Showing <strong>{filteredDeals.length}</strong> Limited Deals
          </span>
        </div>

        {/* ================= INDIVIDUAL PRODUCTS DEALS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredDeals.map((deal) => {
            const isFav = wishlist[deal.id];
            const stockPercent = (deal.stockLeft / deal.totalStock) * 100;
            return (
              <div
                key={deal.id}
                className="group bg-white rounded-[28px] border border-neutral-200/90 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:border-[#163A2B]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image Area */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-100 mb-4">
                    <Link href={`/shop/${deal.id}`} className="absolute inset-0 z-0">
                      <Image
                        src={deal.image}
                        alt={deal.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                    </Link>

                    {/* Discount Pill */}
                    <span className="absolute top-3 left-3 bg-[#163A2B] text-[#E5A83B] font-bold text-[10px] sm:text-[11px] uppercase px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
                      {deal.discountBadge}
                    </span>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(e, deal.id)}
                      className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm flex items-center justify-center transition-all hover:scale-110 cursor-pointer border border-neutral-200 ${
                        isFav
                          ? "text-red-500 bg-red-50"
                          : "text-neutral-600 hover:text-red-500"
                      }`}
                      aria-label="Save to wishlist"
                    >
                      <svg className="w-3.5 h-3.5" fill={isFav ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </button>

                    {/* Timber Tag */}
                    <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg text-white text-[10px] font-medium flex items-center gap-1 z-10 pointer-events-none">
                      <span className="text-[#E5A83B]">🪵</span>
                      <span className="truncate max-w-[160px]">{deal.woodType}</span>
                    </div>
                  </div>

                  {/* Category & Ratings */}
                  <div className="flex items-center justify-between mb-1 text-[11px]">
                    <span className="uppercase font-bold tracking-wider text-[#163A2B]">
                      {deal.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-[#E5A83B]">★</span>
                      <span className="font-bold text-neutral-800">{deal.rating}</span>
                      <span className="text-neutral-400">({deal.reviews})</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <Link href={`/shop/${deal.id}`}>
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#111815] leading-snug group-hover:text-[#163A2B] transition-colors line-clamp-1 mt-1">
                      {deal.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#5D6B64] font-body line-clamp-2 mt-1.5 leading-relaxed">
                    {deal.description}
                  </p>

                  {/* Live Stock Inventory Bar */}
                  <div className="mt-3.5 pt-3 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
                      <span>Atelier Batch Allocation:</span>
                      <span className="font-bold text-[#163A2B]">
                        Only {deal.stockLeft} left
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#163A2B] to-[#E5A83B] rounded-full transition-all duration-500"
                        style={{ width: `${stockPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Price and Instant Order Bar */}
                <div className="mt-4 pt-3.5 border-t border-neutral-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-bold text-lg sm:text-xl text-[#163A2B]">
                          ৳{deal.salePrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-neutral-400 line-through">
                          ৳{deal.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-medium block">
                        Free White-Glove Setup
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/shop/${deal.id}`}
                      className="w-full text-center px-3 py-2 rounded-full border border-neutral-300 hover:border-neutral-400 text-neutral-700 text-xs font-semibold transition-colors"
                    >
                      View Specs
                    </Link>

                    <a
                      href={`https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20would%20like%20to%20book%20the%20"${encodeURIComponent(deal.name)}"%20at%20the%20special%20deal%20price%20of%20%E0%A7%B3${deal.salePrice.toLocaleString()}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-[#163A2B] hover:bg-[#1f4e3b] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <span>Book Deal</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ================= ATELIER TRUST & RISK-FREE GUARANTEES ================= */}
        <div className="mt-16 pt-12 border-t border-neutral-200/80">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="text-[#E5A83B]">✦</span>
              <span>CLIENT ASSURANCE CHARTER</span>
              <span className="text-[#E5A83B]">✦</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111815] tracking-tight">
              The Heaven <span className="font-serif italic text-[#163A2B] font-medium">Atelier Guarantee</span>
            </h3>
            
            <p className="text-xs sm:text-sm text-[#5D6B64] mt-2.5 leading-relaxed font-body">
              Every promotional and bespoke piece commissioned from our Chattogram workshop is safeguarded by four non-negotiable promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                number: "01",
                tag: "Lifetime Security",
                title: "10-Year Solid Timber Warranty",
                desc: "100% structural joint integrity, wood seasoning, and anti-termite guarantee backed directly by our founder.",
                icon: (
                  <svg className="w-5 h-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
              {
                number: "02",
                tag: "Zero-Hassle Logistics",
                title: "Complimentary White-Glove Setup",
                desc: "Multi-layer protective uncrating, room-of-choice placement, and packaging disposal in Chattogram & Dhaka.",
                icon: (
                  <svg className="w-5 h-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="13" x="1" y="3" rx="2" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                ),
              },
              {
                number: "03",
                tag: "Authentic Timber",
                title: "100% Kiln-Seasoned Hardwood",
                desc: "Seasoned Chittagong Teak (Shegun) & dense Mahogany. Strictly zero MDF, particle board, or hollow veneer.",
                icon: (
                  <svg className="w-5 h-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
              {
                number: "04",
                tag: "100% Risk-Free",
                title: "Doorstep Inspection Policy",
                desc: "Inspect every wood ray, joint, and fabric seam before final handover. Complete satisfaction guaranteed.",
                icon: (
                  <svg className="w-5 h-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <path d="m8 11 2 2 4-4" />
                  </svg>
                ),
              },
            ].map((guarantee) => (
              <div
                key={guarantee.title}
                className="h-full flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/90 shadow-2xs hover:border-[#E5A83B]/50 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-100">
                    <div className="w-9 h-9 rounded-xl bg-[#163A2B]/5 border border-[#163A2B]/10 flex items-center justify-center shrink-0 group-hover:bg-[#163A2B] group-hover:text-white transition-colors duration-300">
                      {guarantee.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-300 group-hover:text-[#E5A83B] transition-colors">
                      {guarantee.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#163A2B] bg-[#EAF2ED] px-2 py-0.5 rounded-full inline-block mb-2">
                    {guarantee.tag}
                  </span>

                  <h4 className="font-display text-sm sm:text-[15px] font-bold text-[#111815] group-hover:text-[#163A2B] transition-colors leading-snug">
                    {guarantee.title}
                  </h4>

                  <p className="text-xs text-[#5D6B64] mt-1.5 leading-relaxed font-body">
                    {guarantee.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-200/60 flex items-center justify-center gap-2 text-xs text-neutral-500 text-center">
            <span className="text-emerald-700 font-bold">✓</span>
            <span>All guarantees are certified and formally stamped on your signed Heaven Furniture Delivery Certificate.</span>
          </div>

        </div>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

