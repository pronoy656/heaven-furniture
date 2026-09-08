"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";

// ================= TYPES =================
type LightingMode = "daylight" | "goldenhour" | "evening";

interface StyleDNA {
  warmth: number;
  minimalism: number;
  textureContrast: number;
  longevity: number;
  acousticSoftness: number;
}

interface MaterialSwatch {
  id: string;
  name: string;
  category: string;
  image: string;
  origin: string;
  hardnessOrWeight: string;
  moistureOrFinish: string;
  description: string;
  tactileFeel: string;
}

interface BlueprintPillar {
  title: string;
  subtitle: string;
  desc: string;
  joinery: string;
  iconKey: string;
  detailImage: string;
}

interface SignatureElement {
  num: string;
  title: string;
  desc: string;
  spec: string;
}

interface MoodboardTile {
  title: string;
  category: string;
  image: string;
}

interface HotspotItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  woodType: string;
  dimensions: string;
  x: number; // %
  y: number; // %
  productId?: string;
}

interface StyleProduct {
  id: string;
  name: string;
  category: "all" | "sofas" | "chairs" | "tables" | "beds" | "decor";
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  woodType: string;
  badge?: string;
  image: string;
  description: string;
  dimensions?: string;
}

interface StyleDetail {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  heroImages: Record<LightingMode, string>;
  dna: StyleDNA;
  attributes: string[];
  visualDirection: string;
  accentColor: string;
  accentBg: string;
  materials: MaterialSwatch[];
  blueprint: BlueprintPillar[];
  signature: {
    title: string;
    image: string;
    elements: SignatureElement[];
  };
  moodboard: {
    title: string;
    description: string;
    palette: { name: string; hex: string; border?: boolean }[];
    tiles: MoodboardTile[];
  };
  getTheLook: {
    title: string;
    subtitle: string;
    roomImage: string;
    bundleDiscountPercent: number;
    hotspots: HotspotItem[];
  };
  personality: {
    headline: string;
    description: string;
    quote: string;
    idealFor: string[];
  };
  products: StyleProduct[];
}

// ================= BESPOKE LUXURY ARCHITECTURAL ICONS =================
function LuxuryIcon({ iconKey, className = "w-6 h-6" }: { iconKey: string; className?: string }) {
  switch (iconKey) {
    case "scandi-materials":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L12 22" />
          <path d="M12 7C16 7 20 9 20 13C20 17 16 19 12 19" />
          <path d="M12 11C8 11 4 13 4 16C4 18.5 7 20 12 20" />
          <path d="M12 3C7 4 4 7.5 4 11" />
        </svg>
      );
    case "scandi-colors":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 11L12 17L5 11L12 5L19 11Z" />
          <path d="M19 15L12 21L5 15" />
          <circle cx="12" cy="11" r="2" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "scandi-silhouettes":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 17C4 13 7 11 11 11H15C18 11 20 9 20 6" />
          <path d="M5 21L7 16" />
          <path d="M19 21L17 15" />
          <path d="M8 11L9 6C9.5 4.5 11 3.5 12.5 3.5H15" />
        </svg>
      );
    case "scandi-functional":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="8" height="8" rx="2" />
          <rect x="13" y="3" width="8" height="8" rx="2" />
          <rect x="3" y="13" width="8" height="8" rx="2" />
          <circle cx="17" cy="17" r="4" />
        </svg>
      );
    case "modern-geometry":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3L21 8.5V15.5L12 21L3 15.5V8.5L12 3Z" />
          <path d="M12 3V21" />
          <path d="M12 12L21 7.5" />
          <path d="M12 12L3 7.5" />
        </svg>
      );
    case "modern-fluted":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7" y1="4" x2="7" y2="20" />
          <line x1="11" y1="4" x2="11" y2="20" />
          <line x1="15" y1="4" x2="15" y2="20" />
          <line x1="19" y1="4" x2="19" y2="20" />
        </svg>
      );
    case "modern-contrast":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M4 14L14 4" />
          <path d="M8 20L20 8" />
          <circle cx="15" cy="15" r="2.5" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "modern-technology":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7V12L15 15" />
          <path d="M9 3H15" />
        </svg>
      );
    case "minimal-restraint":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3C6.5 3 2.5 7.5 3 13C3.5 18 7.5 21.5 12.5 21C17.5 20.5 21.5 16.5 21 11.5C20.7 8.5 19 6.2 16.5 4.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "minimal-joinery":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="3" width="10" height="7" rx="1" />
          <path d="M4 10H20V20C20 20.5 19.5 21 19 21H5C4.5 21 4 20.5 4 20V10Z" />
          <line x1="12" y1="10" x2="12" y2="21" strokeDasharray="2 2" />
        </svg>
      );
    case "minimal-space":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9V4H9" />
          <path d="M15 4H20V9" />
          <path d="M20 15V20H15" />
          <path d="M9 20H4V15" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "minimal-curing":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5C12 2.5 6 9.5 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 9.5 12 2.5 12 2.5Z" />
          <path d="M10 13C10 15.2 11.8 17 14 17" strokeWidth="1.3" />
        </svg>
      );
    case "classic-carving":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V14" />
          <path d="M12 14C8 14 5 11 5 7C9 7 12 10 12 14Z" />
          <path d="M12 14C16 14 19 11 19 7C15 7 12 10 12 14Z" />
          <path d="M12 8C10.5 5 10.5 3 12 2C13.5 3 13.5 5 12 8Z" />
        </svg>
      );
    case "classic-timber":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="0.75" fill="currentColor" />
        </svg>
      );
    case "classic-patina":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3H18L21 9L12 22L3 9L6 3Z" />
          <path d="M3 9H21" />
          <path d="M12 22L8 9L10 3" />
          <path d="M12 22L16 9L14 3" />
        </svg>
      );
    case "classic-proportions":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4H20" />
          <path d="M5 7H19" />
          <path d="M7 7V19" />
          <path d="M11 7V19" />
          <path d="M13 7V19" />
          <path d="M17 7V19" />
          <path d="M4 21H20" />
          <path d="M5 19H19" />
        </svg>
      );
    case "industrial-live-edge":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6C5 7 5 9 3 11C1 13 2 15 4 18H20C22 15 23 13 21 11C19 9 19 7 21 6H3Z" />
          <path d="M8 10C10 11 11 13 10 15" strokeDasharray="2 2" />
          <path d="M14 9C15 11 15 13 14 15" strokeDasharray="2 2" />
        </svg>
      );
    case "industrial-steel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4H20" strokeWidth="2.2" />
          <path d="M4 20H20" strokeWidth="2.2" />
          <path d="M12 4V20" strokeWidth="2.2" />
          <path d="M6 4L18 20" strokeWidth="1.2" strokeOpacity="0.5" />
          <path d="M18 4L6 20" strokeWidth="1.2" strokeOpacity="0.5" />
        </svg>
      );
    case "industrial-leather":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3L4 7V17L8 21H16L20 17V7L16 3H8Z" />
          <path d="M8 6V18" strokeDasharray="1.5 1.5" />
          <path d="M16 6V18" strokeDasharray="1.5 1.5" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "industrial-hardware":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 3 19 7 19 15 12 19 5 15 5 7" />
          <circle cx="12" cy="11" r="3" />
          <line x1="12" y1="8" x2="12" y2="14" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8V12L15 15" />
        </svg>
      );
  }
}

// ================= COMPREHENSIVE LUXURY DATA =================
const STYLES_DATA: Record<string, StyleDetail> = {
  scandinavian: {
    id: "scandinavian",
    name: "Scandinavian Nordic",
    shortName: "Scandinavian",
    tagline: "Light. Natural. Effortlessly beautiful.",
    heroHeadline: "SCANDINAVIAN",
    heroSubtext: "A master balance of simplicity, tactile warmth, and organic materials engineered for calm, sun-drenched living.",
    heroImages: {
      daylight: "/style-scandinavian-3.jpg",
      goldenhour: "/hero-living-room.jpg",
      evening: "/hero-mobile-luxury.jpg",
    },
    dna: { warmth: 88, minimalism: 92, textureContrast: 75, longevity: 96, acousticSoftness: 90 },
    attributes: ["Natural Teak & Oak", "Woven Cane Rattan", "Organic Belgian Linen", "Hygge Comfort"],
    visualDirection: "Light blonde ash, honey teak, tactile cane weaving, sunlit sanctuary",
    accentColor: "#D6C29E",
    accentBg: "#FAF6EE",
    materials: [
      {
        id: "mat-scandi-teak",
        name: "Honey-Cured Teak",
        category: "Primary Timber",
        image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=600&auto=format&fit=crop",
        origin: "Chattogram Hill Tracts",
        hardnessOrWeight: "1,155 lbf (Janka Scale)",
        moistureOrFinish: "Kiln-Seasoned 10–12% / Natural Matte Wax",
        description: "Dense, golden-brown heartwood rich in natural botanical teak oils, resistant to moisture, termite, and warping.",
        tactileFeel: "Silky, warm grain with subtle organic open-pore texture.",
      },
      {
        id: "mat-scandi-cane",
        name: "Hand-Woven Natural Rattan",
        category: "Tactile Woven Craft",
        image: "/style-scandinavian-3.jpg",
        origin: "Sylhet Artisan Guilds",
        hardnessOrWeight: "Flexible Tensile Strength",
        moistureOrFinish: "Sun-Bleached & Botanical Oil Sealed",
        description: "Eight-way hand-woven octagonal cane weave allowing natural light and airflow to pass effortlessly through seating backrests.",
        tactileFeel: "Pliant, flexible woven texture that contours comfortably to body pressure.",
      },
      {
        id: "mat-scandi-linen",
        name: "Unbleached Belgian Linen",
        category: "Upholstery Textile",
        image: "/hero-living-room.jpg",
        origin: "Flanders Organic Flax",
        hardnessOrWeight: "480 GSM Heavy Weave",
        moistureOrFinish: "Stain-Resistant Nano-Shield Treated",
        description: "Breathable, temperature-regulating natural linen with rich slub texture that softens gracefully with everyday living.",
        tactileFeel: "Crisp, airy, and deeply comforting against the skin.",
      },
    ],
    blueprint: [
      {
        title: "Natural Materials",
        subtitle: "Authentic Raw Materiality",
        desc: "Solid blonde ash, kiln-dried Chittagong teak, natural cane rattan, and breathable organic textured linen.",
        joinery: "Exposed Dowel & Finger Joints",
        iconKey: "scandi-materials",
        detailImage: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Soft & Neutral Colors",
        subtitle: "Luminosity Maximization",
        desc: "Chalk whites, warm oatmeals, pale sage, and soft taupes that reflect and multiply natural daylight.",
        joinery: "Non-Yellowing Matte Wax Curing",
        iconKey: "scandi-colors",
        detailImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Clean Silhouettes",
        subtitle: "Ergonomic Sculptural Contours",
        desc: "Soft curved contours, tapered dowel legs, and rounded beveled edges that feel weightless and approachable.",
        joinery: "Compound Curved Mortise & Tenon",
        iconKey: "scandi-silhouettes",
        detailImage: "/style-scandinavian-3.jpg",
      },
      {
        title: "Functional Design",
        subtitle: "Purposeful Daily Living",
        desc: "Every piece serves daily purpose with concealed soft-close storage, lightweight modularity, and cozy hygge comfort.",
        joinery: "Concealed Mechanical Friction Slides",
        iconKey: "scandi-functional",
        detailImage: "/hero-mobile-luxury.jpg",
      },
    ],
    signature: {
      title: "The Signature of Scandinavian",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
      elements: [
        { num: "01", title: "Light Wood", desc: "Warm oak and natural honey teak finishes create an inviting, open atmosphere in any room.", spec: "Solid Kiln-Dried Timber · FSC Certified" },
        { num: "02", title: "Soft Textures", desc: "Unprocessed linen, wool melange, and organic tactile fabrics add layered comfort.", spec: "480 GSM Heavy Flax · Natural Dye" },
        { num: "03", title: "Minimal Forms", desc: "Every piece has a distinct purpose; silhouettes remain airy and nothing feels cluttered.", spec: "Chamfered 45° Edges · Zero Heavy Plinths" },
      ],
    },
    moodboard: {
      title: "The Scandinavian Mood",
      description: "Organic tactile swatches, architectural lighting, and raw timber textures curated for peaceful modern living.",
      palette: [
        { name: "Nordic Snow", hex: "#F5F2EC", border: true },
        { name: "Oatmeal Warmth", hex: "#D8CBB8" },
        { name: "Blonde Honey", hex: "#A8947A" },
        { name: "Pale Sage", hex: "#9AA899" },
        { name: "Nordic Slate", hex: "#2E302D" },
      ],
      tiles: [
        { title: "Sunlit Living Space", category: "Interior", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
        { title: "Woven Cane Rattan", category: "Material", image: "/style-scandinavian-3.jpg" },
        { title: "Light Blonde Ash", category: "Wood Detail", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop" },
        { title: "Tactile Wool Melange", category: "Texture", image: "/hero-living-room.jpg" },
        { title: "Airy Window Architecture", category: "Architecture", image: "/hero-mobile-luxury.jpg" },
      ],
    },
    getTheLook: {
      title: "Get the Scandinavian Look",
      subtitle: "Everything you need to recreate this serene, sun-drenched sanctuary in your home.",
      roomImage: "/hero-mobile-luxury.jpg",
      bundleDiscountPercent: 12,
      hotspots: [
        { id: "nordic-sofa", name: "Haven Modular Linen Sectional", category: "Lounge Sofa", price: 119000, image: "/hero-living-room.jpg", woodType: "Solid Chittagong Teak Internal Frame", dimensions: "108\" W x 40\" D x 31\" H", x: 32, y: 65, productId: "haven-sofa" },
        { id: "fluted-table", name: "Nordic Fluted Teak Coffee Table", category: "Center Table", price: 36500, image: "/hero-mobile-luxury.jpg", woodType: "Solid Seasoned Shegun", dimensions: "44\" Dia x 16\" H", x: 52, y: 72, productId: "fluted-table" },
        { id: "cane-chair", name: "Woven Leather & Teak Accent Chair", category: "Accent Seating", price: 44000, image: "/lounge-chair.jpg", woodType: "Solid Teak & Saddle Leather", dimensions: "28\" W x 32\" D x 30\" H", x: 82, y: 75, productId: "boucle-chair" },
        { id: "linen-rug", name: "Hand-Knotted Organic Wool Rug", category: "Textiles", price: 22000, image: "/style-minimalist.jpg", woodType: "100% Belgian Wool Weave", dimensions: "8' x 10' Area", x: 50, y: 88 },
      ],
    },
    personality: {
      headline: "Is Scandinavian Your Style?",
      description: "Calm spaces. Natural materials. Thoughtful design. If you love simplicity without sacrificing warmth, you've found your style.",
      quote: "“Simplicity is not about having less; it is about creating room for what truly matters.”",
      idealFor: ["Sunlit open floorplans", "Mindful minimalist families", "Lovers of natural wood grain & daylight", "Homes seeking serene, calm acoustics"],
    },
    products: [
      { id: "haven-sofa", name: "Haven Modular Linen Lounge Sofa", category: "sofas", categoryLabel: "Living Sanctuary", price: 119000, originalPrice: 145000, rating: 4.9, reviews: 142, woodType: "Solid Chittagong Teak", badge: "Best Seller", image: "/hero-living-room.jpg", description: "Deep feather-blend cushioning wrapped in stain-resistant Belgian linen, anchored by a solid seasoned Shegun frame.", dimensions: "108\" W x 40\" D x 31\" H" },
      { id: "boucle-chair", name: "Modern Bouclé & Teak Lounge Chair", category: "chairs", categoryLabel: "Accent Seating", price: 54000, originalPrice: 68000, rating: 4.9, reviews: 98, woodType: "Sculpted Solid Teak", badge: "Deal of Day", image: "/lounge-chair.jpg", description: "Sculptural floating curves with tapered solid teak legs and ultra-plush high-density bouclé upholstery.", dimensions: "32\" W x 34\" D x 31\" H" },
      { id: "nordic-table", name: "Round Nordic Honey Teak Dining Table", category: "tables", categoryLabel: "Dining Suite", price: 78000, originalPrice: 92000, rating: 5.0, reviews: 47, woodType: "Solid Kiln-Dried Teak", badge: "Curated", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop", description: "Airy circular dining table with tapered legs and hand-beveled edges engineered for joyful family meals.", dimensions: "54\" Dia x 30\" H (Seats 6)" },
      { id: "cane-bed", name: "Nordic Cane Rattan Platform Bed", category: "beds", categoryLabel: "Bedroom Sanctuary", price: 86000, originalPrice: 105000, rating: 4.8, reviews: 62, woodType: "Light Ash & Natural Cane", badge: "New Arrival", image: "/style-scandinavian-3.jpg", description: "Floating low-profile bed frame featuring hand-woven cane rattan backrest that allows natural daylight to flow freely.", dimensions: "King 78\" W x 84\" L x 42\" H" },
    ],
  },

  modern: {
    id: "modern",
    name: "Modern Architectural",
    shortName: "Modern",
    tagline: "Bold. Geometric. Architectural sophistication.",
    heroHeadline: "MODERN",
    heroSubtext: "Crisp low-slung lines, rhythmic fluted millwork, and satin brass accents sculpted for contemporary penthouse living.",
    heroImages: {
      daylight: "/style-modern.jpg",
      goldenhour: "/hero-living-room.jpg",
      evening: "/hero-mobile-luxury.jpg",
    },
    dna: { warmth: 82, minimalism: 85, textureContrast: 92, longevity: 98, acousticSoftness: 86 },
    attributes: ["Low-Slung Proportions", "Vertical Fluted Millwork", "Solid Walnut & Brass", "Precision Joinery"],
    visualDirection: "Bold geometry, high-contrast wood & brass, structured shadow lines",
    accentColor: "#E5A83B",
    accentBg: "#EAF2ED",
    materials: [
      {
        id: "mat-mod-walnut",
        name: "Seasoned Dark Walnut Teak",
        category: "Primary Timber",
        image: "/style-modern.jpg",
        origin: "Chattogram Kiln Facility",
        hardnessOrWeight: "1,220 lbf (Janka Scale)",
        moistureOrFinish: "Deep Smoked Organic Oil & Satin Curing",
        description: "Rich espresso-toned seasoned teak with deep linear grain contrast and acoustic dampening qualities.",
        tactileFeel: "Dense, ultra-smooth satin surface with precision shadow edges.",
      },
      {
        id: "mat-mod-brass",
        name: "Brushed Satin Architectural Brass",
        category: "Metallic Inlay",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=600&auto=format&fit=crop",
        origin: "Precision Atelier Foundry",
        hardnessOrWeight: "Solid 3mm Heavy Gauge",
        moistureOrFinish: "Electro-Passivated Anti-Tarnish Finish",
        description: "Warm brushed metallic inlays that catch 2700K ambient lighting without harsh reflective glare.",
        tactileFeel: "Cool, heavyweight, micro-brushed metallic grain.",
      },
      {
        id: "mat-mod-boucle",
        name: "Textured Heavy Bouclé",
        category: "Upholstery Textile",
        image: "/lounge-chair.jpg",
        origin: "Italian Milan Mills",
        hardnessOrWeight: "620 GSM Heavy-Loop",
        moistureOrFinish: "Commercial Grade 60,000 Rub Martindale",
        description: "Dense, looped tactile yarn providing deep 3D sculptural shadow relief across geometric sofas and accent chairs.",
        tactileFeel: "Plush, nubby, and luxuriously soft with deep spring recovery.",
      },
    ],
    blueprint: [
      {
        title: "Clean Geometry",
        subtitle: "Architectural Proportions",
        desc: "Low-profile silhouettes with generous horizontal proportions, sharp shadow gaps, and floating cantilever plinths.",
        joinery: "Mitred 45° Waterfall Corners",
        iconKey: "modern-geometry",
        detailImage: "/style-modern.jpg",
      },
      {
        title: "Fluted Woodwork",
        subtitle: "Acoustic Millwork Relief",
        desc: "Rhythmic CNC and hand-chiseled vertical timber slats that add acoustic warmth and sculptural depth.",
        joinery: "Interlocking Tongued Ribs",
        iconKey: "modern-fluted",
        detailImage: "/hero-living-room.jpg",
      },
      {
        title: "High-Contrast Materials",
        subtitle: "Layered Material Contrast",
        desc: "Deep walnut and seasoned teak paired with textured Belgian bouclé, matte black steel, and satin brass.",
        joinery: "Recessed Brass Inlay Channeling",
        iconKey: "modern-contrast",
        detailImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Concealed Technology",
        subtitle: "Zero Clutter Integration",
        desc: "Hidden cable routing, soft-close German hardware, and push-to-open flush doors for an uncluttered lifestyle.",
        joinery: "Soft-Close Push-Latch Mechanisms",
        iconKey: "modern-technology",
        detailImage: "/hero-mobile-luxury.jpg",
      },
    ],
    signature: {
      title: "The Signature of Modern Architectural",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      elements: [
        { num: "01", title: "Fluted Timber", desc: "Rhythmic vertical wood slats catch ambient light and create an unmistakable high-end architectural presence.", spec: "18mm CNC Chiseled Ribs · Seasoned Hardwood" },
        { num: "02", title: "Satin Brass Accents", desc: "Warm brushed metallic inlays reflect soft 2700K lighting across dark timber surfaces.", spec: "Solid Extruded Brass · Brushed 320 Grit" },
        { num: "03", title: "Floating Bases", desc: "Cantilevered silhouettes and recessed plinths make substantial solid wood furniture feel effortlessly weightless.", spec: "Recessed 4-Inch Shadow Plinth" },
      ],
    },
    moodboard: {
      title: "The Modern Architectural Mood",
      description: "Deep forest greens, rich dark walnut, tactile cream bouclé, and brushed gold hardware.",
      palette: [
        { name: "Chalk Cream", hex: "#F5F2EB", border: true },
        { name: "Deep Forest", hex: "#163A2B" },
        { name: "Warm Walnut", hex: "#4A3326" },
        { name: "Brushed Brass", hex: "#D4AF37" },
        { name: "Charcoal Slate", hex: "#222524" },
      ],
      tiles: [
        { title: "High-Ceiling Penthouse", category: "Interior", image: "/hero-living-room.jpg" },
        { title: "Geometric Fluted Teak", category: "Millwork", image: "/style-modern.jpg" },
        { title: "Heavy Belgian Bouclé", category: "Fabric", image: "/lounge-chair.jpg" },
        { title: "Brushed Satin Brass", category: "Hardware", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop" },
        { title: "Linear Lighting Sconce", category: "Lighting", image: "/hero-mobile-luxury.jpg" },
      ],
    },
    getTheLook: {
      title: "Get the Modern Architectural Look",
      subtitle: "Recreate this sleek, high-contrast penthouse living sanctuary in your home.",
      roomImage: "/hero-living-room.jpg",
      bundleDiscountPercent: 12,
      hotspots: [
        { id: "haven-sectional", name: "Haven Deep Lounge Sectional", category: "Modular Sofa", price: 119000, image: "/hero-living-room.jpg", woodType: "Kiln-Seasoned Teak Frame", dimensions: "112\" W x 42\" D x 30\" H", x: 45, y: 60, productId: "haven-sofa" },
        { id: "fluted-center", name: "Fluted Sculptural Coffee Table", category: "Center Table", price: 38500, image: "/style-modern.jpg", woodType: "Solid Chittagong Teak & Brass", dimensions: "48\" L x 28\" W x 15\" H", x: 28, y: 78, productId: "fluted-table" },
        { id: "boucle-lounge", name: "Modern Bouclé Accent Chair", category: "Lounge Seating", price: 54000, image: "/lounge-chair.jpg", woodType: "Sculpted Teak & Heavy Bouclé", dimensions: "34\" W x 32\" D x 31\" H", x: 80, y: 68, productId: "boucle-chair" },
      ],
    },
    personality: {
      headline: "Is Modern Your Style?",
      description: "Crisp geometry. Tactile contrasts. Confident presence. If you love clean architectural lines with rich timber warmth, this is your style.",
      quote: "“Good architecture does not shout; it establishes harmonious rhythm throughout the home.”",
      idealFor: ["Modern luxury apartments & penthouses", "Art collectors and design enthusiasts", "Lovers of fluted millwork & satin metallic details", "High-ceiling expansive spaces"],
    },
    products: [
      { id: "haven-sofa", name: "Haven Modular Linen Lounge Sofa", category: "sofas", categoryLabel: "Living Room", price: 119000, originalPrice: 145000, rating: 4.9, reviews: 142, woodType: "Solid Chittagong Teak", badge: "Architectural Pick", image: "/hero-living-room.jpg", description: "Low-slung modular sofa with deep feather-blend cushions and seasoned Shegun structural frame.", dimensions: "112\" W x 42\" D x 30\" H" },
      { id: "boucle-chair", name: "Modern Bouclé & Teak Lounge Chair", category: "chairs", categoryLabel: "Living Room", price: 54000, originalPrice: 68000, rating: 4.9, reviews: 98, woodType: "Sculpted Solid Teak", badge: "Popular", image: "/lounge-chair.jpg", description: "Sculptural floating silhouette with tapered teak legs and heavy-duty textured cream bouclé upholstery.", dimensions: "34\" W x 32\" D x 31\" H" },
      { id: "verona-dining", name: "Verona Architectural Dining Table", category: "tables", categoryLabel: "Dining Suite", price: 94000, originalPrice: 115000, rating: 5.0, reviews: 58, woodType: "Chittagong Teak & Brass", badge: "Master Atelier", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop", description: "8-seater dining table with aerodynamic tapered legs and fluted apron detailing.", dimensions: "84\" L x 38\" W x 30\" H" },
      { id: "aura-bed", name: "Aura Cantilevered King Platform Bed", category: "beds", categoryLabel: "Master Suite", price: 112000, originalPrice: 135000, rating: 4.9, reviews: 73, woodType: "Solid Seasoned Shegun", badge: "Signature", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop", description: "Floating platform bed with integrated ambient LED headboard channels and twin floating nightstands.", dimensions: "King 86\" W x 88\" L x 38\" H" },
    ],
  },

  minimalist: {
    id: "minimalist",
    name: "Pure Minimalist",
    shortName: "Minimalist",
    tagline: "Quiet. Intentional. Serene simplicity.",
    heroHeadline: "MINIMALIST",
    heroSubtext: "The mastery of restraint—celebrating continuous solid wood grain, honest mortise joinery, and peaceful negative spaces.",
    heroImages: {
      daylight: "/style-minimalist.jpg",
      goldenhour: "/hero-living-room.jpg",
      evening: "/style-scandinavian-3.jpg",
    },
    dna: { warmth: 85, minimalism: 98, textureContrast: 65, longevity: 99, acousticSoftness: 94 },
    attributes: ["Interlocking Mortise Joinery", "Zero Handleless Visuals", "Continuous Grain Matching", "Matte Botanical Oil"],
    visualDirection: "Japandi serenity, wide negative spaces, low grounding heights",
    accentColor: "#9E6D38",
    accentBg: "#F6F3ED",
    materials: [
      {
        id: "mat-min-teak",
        name: "Honest Chittagong Teak",
        category: "Solid Timber",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop",
        origin: "Sustainably Harvested Reserve",
        hardnessOrWeight: "1,155 lbf (Janka Scale)",
        moistureOrFinish: "Hand-Rubbed Organic Tung Oil (0% VOC)",
        description: "Hand-matched grain boards joined with zero visible metal fasteners, preserving the continuous flow of natural growth rings.",
        tactileFeel: "Completely organic matte grain that feels warm and alive under fingers.",
      },
      {
        id: "mat-min-linen",
        name: "Raw Oatmeal Flax Linen",
        category: "Natural Fiber",
        image: "/style-minimalist.jpg",
        origin: "Unprocessed Eco-Flax",
        hardnessOrWeight: "450 GSM Raw Loom",
        moistureOrFinish: "Untreated Natural Coloration",
        description: "Zero synthetic dyes or harsh chemical bleaching, celebrating the earthy natural oatmeal undertones of raw flax.",
        tactileFeel: "Subtle textural slub that grows softer and more comfortable with age.",
      },
    ],
    blueprint: [
      {
        title: "Mastery of Restraint",
        subtitle: "Eliminating the Superfluous",
        desc: "Zero superfluous ornament—every timber edge, bevel, and joint has structural and functional purpose.",
        joinery: "Beveled Chamfer Edge Profile",
        iconKey: "minimal-restraint",
        detailImage: "/style-minimalist.jpg",
      },
      {
        title: "Honest Wood Joinery",
        subtitle: "Traditional Woodcraft",
        desc: "Traditional interlocking mortise-and-tenon craftsmanship with zero visible screws or synthetic adhesives.",
        joinery: "Japanese Interlocking Mortise & Tenon",
        iconKey: "minimal-joinery",
        detailImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Negative Space",
        subtitle: "Spatial Breathing Room",
        desc: "Generous open room proportions that allow statement solid timber pieces room to breathe.",
        joinery: "Low-Profile Shadow Reveal",
        iconKey: "minimal-space",
        detailImage: "/hero-living-room.jpg",
      },
      {
        title: "Matte Organic Curing",
        subtitle: "Chemical-Free Surface",
        desc: "Hand-rubbed botanical oils and satin waxes that preserve the authentic tactile grain of Chittagong Teak.",
        joinery: "Multi-Coat Hand-Rubbed Tung Wax",
        iconKey: "minimal-curing",
        detailImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
      },
    ],
    signature: {
      title: "The Signature of Pure Minimalist",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
      elements: [
        { num: "01", title: "Continuous Grain", desc: "Wood boards are hand-matched so natural grain patterns flow uninterrupted across tabletops and bed frames.", spec: "Sequential Single-Log Timber Matching" },
        { num: "02", title: "Handle-Free Storage", desc: "Concealed finger-pull bevels and precision push-mechanisms replace protruding metal hardware.", spec: "Precision 35° Integrated Finger-Pulls" },
        { num: "03", title: "Grounding Low Heights", desc: "Low-profile platforms keep sightlines wide and bring an instant zen tranquility into the room.", spec: "10-Inch Low Platform Elevation" },
      ],
    },
    moodboard: {
      title: "The Pure Minimalist Mood",
      description: "Alabaster whites, raw oatmeal linen, honey teak, and muted olive accents.",
      palette: [
        { name: "Alabaster White", hex: "#FAF8F5", border: true },
        { name: "Oatmeal Warmth", hex: "#E8DFC8" },
        { name: "Honey Teak", hex: "#9E6D38" },
        { name: "Muted Olive", hex: "#5C6B5E" },
        { name: "Soft Clay", hex: "#C7B299" },
      ],
      tiles: [
        { title: "Zen Master Bedroom", category: "Interior", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop" },
        { title: "Low-Slung Oatmeal Sofa", category: "Furniture", image: "/style-minimalist.jpg" },
        { title: "Raw Stoneware Ceramic", category: "Decor", image: "/hero-mobile-luxury.jpg" },
        { title: "Continuous Teak Grain", category: "Material", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop" },
        { title: "Filtered Paper Screen", category: "Light", image: "/hero-living-room.jpg" },
      ],
    },
    getTheLook: {
      title: "Get the Minimalist Look",
      subtitle: "Cleanse your living space with honest timber joinery and quiet neutral tones.",
      roomImage: "/style-minimalist.jpg",
      bundleDiscountPercent: 12,
      hotspots: [
        { id: "kanso-sofa", name: "Kanso Low-Profile Linen Sofa", category: "Living", price: 92000, image: "/style-minimalist.jpg", woodType: "Solid Chittagong Teak", dimensions: "96\" W x 38\" D x 28\" H", x: 48, y: 62 },
        { id: "minimal-table", name: "Disc Sculpted Teak Table", category: "Center Table", price: 28000, image: "/lounge-chair.jpg", woodType: "Kiln-Seasoned Teak", dimensions: "36\" Dia x 14\" H", x: 25, y: 78 },
        { id: "zen-stool", name: "Curved Mortise Timber Stool", category: "Accent", price: 16500, image: "/style-scandinavian-3.jpg", woodType: "Solid Shegun", dimensions: "18\" W x 14\" D x 18\" H", x: 75, y: 80 },
      ],
    },
    personality: {
      headline: "Is Minimalist Your Style?",
      description: "Clutter-free tranquility. Honest woodwork. Breathing spaces. If you believe your home should be an oasis of quiet calm, this is your style.",
      quote: "“Eliminate the unnecessary so that the necessary may speak with clarity.”",
      idealFor: ["Zen & Japandi architecture", "Meditation and wellness rooms", "Lovers of uninterrupted natural wood grain", "Homes designed with natural stone & clay"],
    },
    products: [
      { id: "aura-bed", name: "Aura Low-Height Zen Bed Frame", category: "beds", categoryLabel: "Bedroom Sanctuary", price: 88000, originalPrice: 104000, rating: 4.9, reviews: 51, woodType: "Solid Chittagong Teak", badge: "Zen Choice", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop", description: "Zero-squeak interlocking timber joints with an integrated headboard ledge and natural matte oil finish.", dimensions: "King 80\" W x 86\" L x 30\" H" },
      { id: "haven-sofa", name: "Haven Modular Linen Lounge Sofa", category: "sofas", categoryLabel: "Living Room", price: 119000, originalPrice: 145000, rating: 4.9, reviews: 142, woodType: "Solid Chittagong Teak", badge: "Best Seller", image: "/hero-living-room.jpg", description: "Deep feather-blend cushioning wrapped in stain-resistant Belgian linen with solid Shegun internal frame.", dimensions: "108\" W x 40\" D x 31\" H" },
      { id: "boucle-chair", name: "Modern Bouclé & Teak Lounge Chair", category: "chairs", categoryLabel: "Accent Seating", price: 54000, originalPrice: 68000, rating: 4.9, reviews: 98, woodType: "Sculpted Solid Teak", badge: "Essential", image: "/lounge-chair.jpg", description: "Ergonomic floating silhouette with tapered teak legs and ultra-plush textured bouclé.", dimensions: "32\" W x 34\" D x 31\" H" },
    ],
  },

  classic: {
    id: "classic",
    name: "Heritage & Classic",
    shortName: "Classic",
    tagline: "Heirloom craftsmanship. Rich patina. Timeless grandeur.",
    heroHeadline: "CLASSIC",
    heroSubtext: "Centuries-old Chattogram woodcarving legacy. Massive single-slab Shegun timber, hand-turned pillars, and lustrous amber patinas.",
    heroImages: {
      daylight: "/style-classic.jpg",
      goldenhour: "/hero-living-room.jpg",
      evening: "/hero-mobile-luxury.jpg",
    },
    dna: { warmth: 96, minimalism: 60, textureContrast: 88, longevity: 100, acousticSoftness: 92 },
    attributes: ["100% Solid Chittagong Shegun", "Master Hand-Carved Crests", "Lustrous Amber Patina", "Heirloom Longevity (50+ Yrs)"],
    visualDirection: "Grand royal salons, hand-carved acanthus reliefs, deep amber wax",
    accentColor: "#C59B27",
    accentBg: "#F9F4EB",
    materials: [
      {
        id: "mat-cls-shegun",
        name: "Mature Chittagong Shegun",
        category: "Generational Hardwood",
        image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=600&auto=format&fit=crop",
        origin: "40+ Year Matured Forest",
        hardnessOrWeight: "1,250 lbf (Dense Heartwood)",
        moistureOrFinish: "Multi-Coat Hand-Rubbed Amber Wax",
        description: "Massive solid hardwood logs hand-selected for high natural oil density, rich golden-amber tone, and generational durability.",
        tactileFeel: "Substantial, lustrous, mirror-waxed timber with deep carved reliefs.",
      },
      {
        id: "mat-cls-velvet",
        name: "Royal Deep-Buttoned Velvet",
        category: "Regal Textile",
        image: "/hero-living-room.jpg",
        origin: "Heavyweight Silk Blend",
        hardnessOrWeight: "540 GSM Plush Pile",
        moistureOrFinish: "Antiqued Solid Brass Stud Tufting",
        description: "Lustrous jewel-tone velvet hand-tufted with traditional diamond creases and solid antiqued brass nailhead trim.",
        tactileFeel: "Decadently plush, deep, and regal under hand.",
      },
    ],
    blueprint: [
      {
        title: "Master Hand-Carving",
        subtitle: "30+ Year Master Woodwrights",
        desc: "Intricate floral crests and classical fluted pillars hand-chiseled by master woodwrights with decades of atelier experience.",
        joinery: "Hand-Relief Chiseled Crests",
        iconKey: "classic-carving",
        detailImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Generational Timber",
        subtitle: "Mature Chittagong Shegun",
        desc: "100% mature kiln-dried Chittagong Shegun with natural oil richness that outlasts 50+ years of family life.",
        joinery: "Heavy Tusk Tenon Joints",
        iconKey: "classic-timber",
        detailImage: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Deep Amber Patina",
        subtitle: "Aged Wax Lacquer",
        desc: "Multi-layered hand-rubbed wax lacquer that deepens in luster, character, and warmth with each passing decade.",
        joinery: "French Polish Hand Waxing",
        iconKey: "classic-patina",
        detailImage: "/style-classic.jpg",
      },
      {
        title: "Stately Proportions",
        subtitle: "Regal Heirloom Presence",
        desc: "Substantial, heavy solid timber mass engineered as regal focal points and cherished family heirlooms.",
        joinery: "Turned Spiral Column Carvings",
        iconKey: "classic-proportions",
        detailImage: "/hero-mobile-luxury.jpg",
      },
    ],
    signature: {
      title: "The Signature of Heritage Classic",
      image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200&auto=format&fit=crop",
      elements: [
        { num: "01", title: "Hand-Turned Pillars", desc: "Classical spiral and fluted columns sculpted directly from single solid hardwood logs.", spec: "Solid 4-Inch Turned Timber Columns" },
        { num: "02", title: "Deep Button Tufting", desc: "Royal velvet and Italian top-grain leather hand-tufted with antiqued solid brass studs.", spec: "Hand-Tied Diamond Deep-Tufting" },
        { num: "03", title: "Single-Slab Tops", desc: "Continuous 2.5-inch thick solid Shegun slabs with uninterrupted natural grain character.", spec: "2.5-Inch Thickness · Continuous Heartwood" },
      ],
    },
    moodboard: {
      title: "The Heritage Classic Mood",
      description: "Regal amber, deep cognac, imperial emerald, burnished gold, and warm parchment.",
      palette: [
        { name: "Royal Amber", hex: "#8A4B1D" },
        { name: "Deep Cognac", hex: "#5C2C16" },
        { name: "Imperial Emerald", hex: "#113B29" },
        { name: "Burnished Gold", hex: "#C59B27" },
        { name: "Warm Parchment", hex: "#EDE4D3", border: true },
      ],
      tiles: [
        { title: "Grand Reception Salon", category: "Interior", image: "/style-classic.jpg" },
        { title: "Hand-Carved Acanthus Crest", category: "Carving Detail", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" },
        { title: "Tufted Royal Velvet", category: "Textile", image: "/hero-living-room.jpg" },
        { title: "Single-Slab Shegun Top", category: "Wood", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop" },
        { title: "Antiqued Cast Brass", category: "Hardware", image: "/hero-mobile-luxury.jpg" },
      ],
    },
    getTheLook: {
      title: "Get the Heritage Classic Look",
      subtitle: "Transform your salon into a stately sanctuary of heirloom craftsmanship.",
      roomImage: "/style-classic.jpg",
      bundleDiscountPercent: 12,
      hotspots: [
        { id: "statesman-sofa", name: "Statesman 3-Piece Carved Shegun Sofa", category: "Living Suite", price: 135000, image: "/style-classic.jpg", woodType: "100% Seasoned Chittagong Shegun", dimensions: "88\" W x 38\" D x 39\" H", x: 48, y: 58 },
        { id: "heirloom-table", name: "Heirloom Carved Coffee Table", category: "Center Table", price: 45000, image: "/hero-living-room.jpg", woodType: "Solid Chittagong Shegun", dimensions: "48\" L x 30\" W x 18\" H", x: 32, y: 78 },
        { id: "pedestal-stand", name: "Turned Timber Display Pedestal", category: "Accent", price: 22000, image: "/style-modern.jpg", woodType: "Solid Shegun Hardwood", dimensions: "16\" Dia x 36\" H", x: 82, y: 70 },
      ],
    },
    personality: {
      headline: "Is Heritage Classic Your Style?",
      description: "Timeless grandeur. Master wood carving. Generational heirlooms. If you appreciate heritage, stately proportions, and authentic craftsmanship, this is your style.",
      quote: "“We do not craft disposable furniture; we build heirlooms to outlive generations.”",
      idealFor: ["Stately heritage homes & formal salons", "Generational family estates", "Lovers of intricate hand-woodcarving", "Those who value heirloom longevity over trends"],
    },
    products: [
      { id: "classic-sofa", name: "Statesman Royal Carved Sofa Set", category: "sofas", categoryLabel: "Living Suite", price: 135000, originalPrice: 160000, rating: 5.0, reviews: 42, woodType: "100% Seasoned Chittagong Shegun", badge: "Heirloom Piece", image: "/style-classic.jpg", description: "Tufted deep-buttoning, hand-turned corner pillars, and deep luster amber hand-rubbed wax finish.", dimensions: "88\" W x 38\" D x 39\" H" },
      { id: "classic-table", name: "Royal Single-Slab 8-Seater Dining Table", category: "tables", categoryLabel: "Dining Suite", price: 148000, originalPrice: 175000, rating: 5.0, reviews: 38, woodType: "2.5-Inch Single Slab Shegun", badge: "Master Atelier", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop", description: "Massive continuous grain Shegun dining table accompanied by hand-carved high-back chairs.", dimensions: "96\" L x 42\" W x 30\" H" },
      { id: "classic-bed", name: "Heritage Four-Poster Canopy Bed", category: "beds", categoryLabel: "Master Suite", price: 165000, originalPrice: 195000, rating: 4.9, reviews: 29, woodType: "Solid Chittagong Shegun", badge: "Royal Edition", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop", description: "Hand-turned spiral posts with carved crest rail and matching bedside pedestals.", dimensions: "King 82\" W x 88\" L x 84\" Canopy H" },
    ],
  },

  industrial: {
    id: "industrial",
    name: "Modern Industrial & Loft",
    shortName: "Industrial",
    tagline: "Raw. Architectural. Heavy timber & steel.",
    heroHeadline: "INDUSTRIAL",
    heroSubtext: "Urban loft living fusing 2-inch live-edge hardwood slabs with structural black steel, exposed bolts, and distressed cognac leather.",
    heroImages: {
      daylight: "/style-industrial-brick.jpg",
      goldenhour: "/hero-living-room.jpg",
      evening: "/hero-mobile-luxury.jpg",
    },
    dna: { warmth: 80, minimalism: 78, textureContrast: 98, longevity: 99, acousticSoftness: 72 },
    attributes: ["2-Inch Live-Edge Teak Slabs", "Architectural Black Steel", "Top-Grain Cognac Leather", "Artisanal Butterfly Jointing"],
    visualDirection: "Exposed brick, raw live-edge slabs, welded blackened iron, aged patina",
    accentColor: "#8D4433",
    accentBg: "#F6F1ED",
    materials: [
      {
        id: "mat-ind-slab",
        name: "2-Inch Live-Edge Single Slab",
        category: "Primary Timber",
        image: "/style-industrial-brick.jpg",
        origin: "Chittagong Mountain Timber",
        hardnessOrWeight: "Heavyweight Natural Edge",
        moistureOrFinish: "Raw Matte Botanical Polyurethane Sealed",
        description: "Massive solid wood slabs maintaining the organic undulating contour of the tree trunk with hand-inlaid butterfly key stabilization.",
        tactileFeel: "Rugged organic tree bark edge contour with mirror-smooth tabletop face.",
      },
      {
        id: "mat-ind-steel",
        name: "Architectural Blackened Steel",
        category: "Structural Metalwork",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop",
        origin: "Precision Welded Trestles",
        hardnessOrWeight: "5mm Structural Iron Plate",
        moistureOrFinish: "Matte Black Epoxy Powder-Coat",
        description: "Heavy structural steel frames with visible structural welds and solid industrial strength.",
        tactileFeel: "Rock-solid, matte-textured structural iron.",
      },
      {
        id: "mat-ind-leather",
        name: "Distressed Pull-Up Cognac Leather",
        category: "Upholstery",
        image: "/hero-living-room.jpg",
        origin: "Full-Grain Saddle Hide",
        hardnessOrWeight: "2.0mm Heavy Substance",
        moistureOrFinish: "Wax Infused / Natural Patina Curing",
        description: "Full-grain leather rich in natural waxes that lighten in tone when stretched and develop a vintage patina over decades of lounging.",
        tactileFeel: "Supple, buttery, and richly aromatic natural leather.",
      },
    ],
    blueprint: [
      {
        title: "Live-Edge Timber Slabs",
        subtitle: "Undulating Natural Contours",
        desc: "Thick 2-inch solid timber slabs preserving the natural undulating tree bark contours and unique grain fissures.",
        joinery: "Artisanal Bowtie Butterfly Keys",
        iconKey: "industrial-live-edge",
        detailImage: "/style-industrial-brick.jpg",
      },
      {
        title: "Structural Black Steel",
        subtitle: "Architectural Ironwork",
        desc: "Heavy-gauge architectural iron and welded trestle frames engineered for uncompromising structural durability.",
        joinery: "TIG Welded Structural Trusses",
        iconKey: "industrial-steel",
        detailImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Distressed Pull-Up Leather",
        subtitle: "Aged Caramel Patina",
        desc: "Top-grain cognac leather that softens and develops a rich personal patina with everyday use.",
        joinery: "Heavy Saddle Box Stitching",
        iconKey: "industrial-leather",
        detailImage: "/hero-living-room.jpg",
      },
      {
        title: "Exposed Hardware Honesty",
        subtitle: "Visible Construction Details",
        desc: "Visible bolt joinery, butterfly timber inlays, and steel corner brackets celebrated as core design accents.",
        joinery: "Exposed Black Hex Bolt Fasteners",
        iconKey: "industrial-hardware",
        detailImage: "/hero-mobile-luxury.jpg",
      },
    ],
    signature: {
      title: "The Signature of Industrial Loft",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
      elements: [
        { num: "01", title: "Butterfly Key Joints", desc: "Hand-inlaid bowtie timber joints structurally stabilize natural wood splits with artisanal beauty.", spec: "Solid Teak Bowtie Hand-Inlays" },
        { num: "02", title: "Blackened Iron Bases", desc: "Matte black epoxy powder-coated trestles contrast against warm golden-brown timber.", spec: "50x50mm Heavy Tube Steel Frames" },
        { num: "03", title: "Cognac Leather Upholstery", desc: "Supple pull-up leather cushions that age gracefully and become softer over time.", spec: "Full-Grain Waxed Caramel Hide" },
      ],
    },
    moodboard: {
      title: "The Industrial Loft Mood",
      description: "Exposed brick, gunmetal steel, aged cognac leather, distressed concrete, and raw live-edge timber.",
      palette: [
        { name: "Exposed Brick", hex: "#8D4433" },
        { name: "Gunmetal Steel", hex: "#2B2E32" },
        { name: "Aged Leather", hex: "#633B1E" },
        { name: "Distressed Concrete", hex: "#8A8D8F" },
        { name: "Raw Timber", hex: "#B88349" },
      ],
      tiles: [
        { title: "Open Loft Gathering Area", category: "Interior", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop" },
        { title: "2-Inch Live-Edge Teak", category: "Material", image: "/style-industrial-brick.jpg" },
        { title: "Black Steel Trestle Leg", category: "Metalwork", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop" },
        { title: "Distressed Pull-Up Leather", category: "Upholstery", image: "/hero-living-room.jpg" },
        { title: "Edison Filament Light", category: "Lighting", image: "/hero-mobile-luxury.jpg" },
      ],
    },
    getTheLook: {
      title: "Get the Industrial Loft Look",
      subtitle: "Bring urban loft energy into your space with raw timber slabs and architectural metal.",
      roomImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
      bundleDiscountPercent: 12,
      hotspots: [
        { id: "industrial-sofa", name: "Cognac Leather & Iron Loft Sofa", category: "Living Lounge", price: 128000, image: "/hero-living-room.jpg", woodType: "Steel Frame & Top-Grain Leather", dimensions: "102\" W x 40\" D x 32\" H", x: 46, y: 60 },
        { id: "live-edge-table", name: "2-Inch Live-Edge Teak Coffee Table", category: "Center Table", price: 46000, image: "/style-industrial-brick.jpg", woodType: "Single-Slab Chittagong Teak & Steel", dimensions: "52\" L x 26\" W x 16\" H", x: 35, y: 78 },
        { id: "iron-shelf", name: "Industrial Steel & Teak Bookcase", category: "Storage", price: 38000, image: "/style-modern.jpg", woodType: "Heavy Solid Teak Shelves & Iron", dimensions: "42\" W x 16\" D x 78\" H", x: 85, y: 50 },
      ],
    },
    personality: {
      headline: "Is Industrial Your Style?",
      description: "Raw honesty. Architectural steel. Natural timber live-edges. If you love bold character, urban energy, and rugged durability, you've found your style.",
      quote: "“There is deep beauty in raw materials that reveal how they were constructed.”",
      idealFor: ["Open-concept lofts & exposed brick walls", "Creative studios and modern duplexes", "Those who love bold raw timber slabs & black metal", "High-traffic everyday spaces that gain character with wear"],
    },
    products: [
      { id: "industrial-sofa", name: "Warehouse Cognac Leather Sectional", category: "sofas", categoryLabel: "Living Lounge", price: 128000, originalPrice: 155000, rating: 4.9, reviews: 36, woodType: "Blackened Steel & Seasoned Teak", badge: "Loft Edition", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop", description: "Oversized caramel cognac leather sofa resting on black iron framework, paired with massive single-slab teak accents.", dimensions: "102\" W x 40\" D x 32\" H" },
      { id: "live-edge-table", name: "Verona Live-Edge Slab Dining Table", category: "tables", categoryLabel: "Dining Suite", price: 115000, originalPrice: 138000, rating: 5.0, reviews: 49, woodType: "Single-Slab Natural Edge Teak", badge: "Master Craft", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop", description: "Monolithic live-edge slab table featuring natural butterfly joints and heavy black steel X-frame legs.", dimensions: "90\" L x 38\" W x 30\" H" },
      { id: "industrial-desk", name: "Architectural Executive Loft Desk", category: "tables", categoryLabel: "Office & Study", price: 68000, originalPrice: 82000, rating: 4.8, reviews: 24, woodType: "Seasoned Teak & Steel Trestles", badge: "Studio Essential", image: "/style-industrial-brick.jpg", description: "Heavy timber executive desk resting on black steel trestles with concealed drawer compartments.", dimensions: "66\" W x 32\" D x 30\" H" },
    ],
  },
};

const STYLES_LIST = [
  { id: "scandinavian", name: "Scandinavian", visual: "Warm wood & soft tones", thumb: "/style-scandinavian-3.jpg", badge: "Hygge Living" },
  { id: "modern", name: "Modern", visual: "Bold & architectural", thumb: "/style-modern.jpg", badge: "Contemporary" },
  { id: "minimalist", name: "Minimalist", visual: "Zen & white space", thumb: "/style-minimalist.jpg", badge: "Japandi Calm" },
  { id: "classic", name: "Classic", visual: "Rich heritage & carving", thumb: "/style-classic.jpg", badge: "Heirloom" },
  { id: "industrial", name: "Industrial", visual: "Raw timber & steel", thumb: "/style-industrial-brick.jpg", badge: "Loft Studio" },
];

// ================= MAIN COMPONENT =================
function StylesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialStyle = searchParams.get("style") || "scandinavian";
  const [selectedStyleId, setSelectedStyleId] = useState<string>(
    STYLES_DATA[initialStyle] ? initialStyle : "scandinavian"
  );

  const [lightingMode, setLightingMode] = useState<LightingMode>("daylight");
  const [activeMaterialId, setActiveMaterialId] = useState<string>("");
  const [activeBlueprintIdx, setActiveBlueprintIdx] = useState<number>(0);
  const [shopFilter, setShopFilter] = useState<string>("all");
  const [activeHotspot, setActiveHotspot] = useState<HotspotItem | null>(null);

  // Sync with URL query parameter
  useEffect(() => {
    const styleParam = searchParams.get("style");
    if (styleParam && STYLES_DATA[styleParam]) {
      setSelectedStyleId(styleParam);
      setShopFilter("all");
      setActiveBlueprintIdx(0);
      setActiveHotspot(STYLES_DATA[styleParam].getTheLook.hotspots[0] || null);
      setActiveMaterialId(STYLES_DATA[styleParam].materials[0]?.id || "");
    }
  }, [searchParams]);

  const handleSelectStyle = (id: string) => {
    setSelectedStyleId(id);
    setShopFilter("all");
    setActiveBlueprintIdx(0);
    setActiveHotspot(STYLES_DATA[id].getTheLook.hotspots[0] || null);
    setActiveMaterialId(STYLES_DATA[id].materials[0]?.id || "");
    router.replace(`/styles?style=${id}`, { scroll: false });
  };

  const currentStyle = STYLES_DATA[selectedStyleId] || STYLES_DATA.scandinavian;

  useEffect(() => {
    if (currentStyle.materials.length > 0 && !activeMaterialId) {
      setActiveMaterialId(currentStyle.materials[0].id);
    }
    if (currentStyle.getTheLook.hotspots.length > 0 && !activeHotspot) {
      setActiveHotspot(currentStyle.getTheLook.hotspots[0]);
    }
  }, [currentStyle, activeMaterialId, activeHotspot]);

  const activeMaterial = useMemo(() => {
    return currentStyle.materials.find((m) => m.id === activeMaterialId) || currentStyle.materials[0];
  }, [currentStyle, activeMaterialId]);

  const filteredProducts = useMemo(() => {
    if (shopFilter === "all") return currentStyle.products;
    return currentStyle.products.filter((p) => p.category === shopFilter);
  }, [currentStyle, shopFilter]);

  const roomBundleTotal = useMemo(() => {
    const original = currentStyle.getTheLook.hotspots.reduce((acc, h) => acc + h.price, 0);
    const discounted = Math.round(original * (1 - currentStyle.getTheLook.bundleDiscountPercent / 100));
    return { original, discounted, savings: original - discounted };
  }, [currentStyle]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111815] selection:bg-[#163A2B] selection:text-white flex flex-col font-sans antialiased overflow-x-hidden">
      <NavBar />

      {/* ================= 1. HERO WITH BALANCED FOREST GREEN & WHITE ATMOSPHERE ================= */}
      <section className="relative min-h-[640px] sm:min-h-[720px] pt-28 sm:pt-32 pb-14 bg-[#163A2B] text-white flex flex-col justify-between overflow-hidden">
        
        {/* Lifestyle Viewport */}
        <div className="absolute inset-0 z-0">
          <Image
            src={currentStyle.heroImages.daylight || "/hero-living-room.jpg"}
            alt={currentStyle.name}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Forest Green Gradient Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#163A2B] via-[#163A2B]/75 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#163A2B_90%)]" />
        </div>

        {/* Hero Content Layer */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
          
          {/* Top Bar Badge */}
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-[#E5A83B] text-xs font-bold uppercase tracking-[0.22em] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#E5A83B] animate-pulse" />
              <span>THE LIVING ATELIER ✦ STYLE PAVILION</span>
            </div>
          </div>

          {/* Grand Headline & Narrative */}
          <div className="my-8 sm:my-12 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#E5A83B] mb-2.5">
              <span>EDITION 0{STYLES_LIST.findIndex((s) => s.id === selectedStyleId) + 1}</span>
              <span className="text-white/30">•</span>
              <span className="text-neutral-200 font-sans tracking-wide">{currentStyle.visualDirection}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-[0.03em] uppercase text-white leading-none drop-shadow-xl">
              {currentStyle.heroHeadline}
            </h1>

            <p className="mt-3.5 text-base sm:text-xl lg:text-2xl text-[#E5A83B] font-serif italic tracking-wide">
              &ldquo;{currentStyle.tagline}&rdquo;
            </p>

            <p className="mt-3.5 text-xs sm:text-sm sm:max-w-xl text-neutral-200 leading-relaxed font-body">
              {currentStyle.heroSubtext}
            </p>

            {/* Quick Action CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#shop-the-style"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#E5A83B] hover:bg-[#d89728] active:scale-95 text-[#111815] text-xs sm:text-sm font-bold shadow-[0_8px_20px_rgba(229,168,59,0.3)] transition-all cursor-pointer"
              >
                <span>Shop {currentStyle.shortName} Furniture</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#get-the-look"
                className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white text-xs sm:text-sm font-semibold border border-white/25 backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Inspect &ldquo;Get the Look&rdquo;</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Hero Attribute Badges */}
          <div className="pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {currentStyle.attributes.map((attr, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-neutral-100 text-[11px] sm:text-xs font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
                  <span>{attr}</span>
                </span>
              ))}
            </div>

            <span className="text-[11px] text-neutral-300 font-mono tracking-wider">
              100% Solid Chittagong Teak · Zero MDF
            </span>
          </div>

        </div>
      </section>

      {/* ================= 2. STICKY VISUAL RUNWAY STYLE SWITCHER ================= */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/90 py-3 shadow-xs">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {STYLES_LIST.map((st) => {
              const isActive = selectedStyleId === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => handleSelectStyle(st.id)}
                  className={`relative shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#163A2B] text-white shadow-md"
                      : "bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#E5A83B]" : "bg-neutral-400"}`} />
                  <span>{st.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeStylePill"
                      className="absolute inset-0 rounded-full border-2 border-[#163A2B] pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT FLOW WITH WHITE & FOREST GREEN HARMONY ================= */}
      <main className="flex-1 pb-24 space-y-20 sm:space-y-28 lg:space-y-32 mt-12 sm:mt-16">
        
        {/* ================= 3. ANATOMY & ARCHITECTURAL DNA (WHITE CARD ON CREAM) ================= */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 border border-neutral-200/90 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Style DNA Metrics */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#163A2B] block mb-2">
                  ARCHITECTURAL DNA
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111815] mb-3">
                  Spatial Balance of <span className="font-serif italic text-[#163A2B]">{currentStyle.shortName}</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#5D6B64] leading-relaxed mb-6">
                  Every aesthetic at Heaven is calculated using architectural balance metrics to ensure high comfort, acoustic dampening, and lifetime generational value.
                </p>

                <div className="space-y-4">
                  {[
                    { label: "Tactile Warmth", value: currentStyle.dna.warmth },
                    { label: "Visual Restraint", value: currentStyle.dna.minimalism },
                    { label: "Material Contrast", value: currentStyle.dna.textureContrast },
                    { label: "Generational Longevity", value: currentStyle.dna.longevity },
                    { label: "Acoustic Softness", value: currentStyle.dna.acousticSoftness },
                  ].map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-neutral-700">{metric.label}</span>
                        <span className="font-mono text-[#163A2B]">{metric.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#163A2B] to-[#E5A83B]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Blueprint Tabs (Forest Green Accent Sub-panel) */}
              <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-neutral-200">
                <div className="flex items-center justify-between pb-3.5 border-b border-neutral-200 mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B]">
                    ANATOMY BLUEPRINT
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    Pillar 0{activeBlueprintIdx + 1} of 0{currentStyle.blueprint.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {currentStyle.blueprint.map((bp, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveBlueprintIdx(idx)}
                      className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
                        activeBlueprintIdx === idx
                          ? "bg-[#163A2B] text-white shadow-md scale-102"
                          : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                      }`}
                    >
                      <div className="mb-2">
                        <LuxuryIcon
                          iconKey={bp.iconKey}
                          className={`w-5 h-5 ${activeBlueprintIdx === idx ? "text-[#E5A83B]" : "text-[#163A2B]"}`}
                        />
                      </div>
                      <h4 className="text-xs font-bold truncate">{bp.title}</h4>
                    </button>
                  ))}
                </div>

                {/* Detail View */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBlueprintIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center"
                  >
                    <div className="sm:col-span-7">
                      <span className="text-[10px] font-bold uppercase text-[#163A2B] bg-[#EAF2ED] px-2.5 py-0.5 rounded-full inline-block mb-2">
                        {currentStyle.blueprint[activeBlueprintIdx].subtitle}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#111815] mb-2">
                        {currentStyle.blueprint[activeBlueprintIdx].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5D6B64] leading-relaxed mb-4 font-body">
                        {currentStyle.blueprint[activeBlueprintIdx].desc}
                      </p>
                      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                        <span className="text-neutral-500 font-medium">Joinery Craft:</span>
                        <span className="font-mono text-[#163A2B] font-bold">
                          {currentStyle.blueprint[activeBlueprintIdx].joinery}
                        </span>
                      </div>
                    </div>

                    <div className="sm:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
                      <Image
                        src={currentStyle.blueprint[activeBlueprintIdx].detailImage}
                        alt={currentStyle.blueprint[activeBlueprintIdx].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>

            </div>
          </div>
        </section>

        {/* ================= 4. TACTILE MATERIAL WORKBENCH ================= */}
        <section id="tactile-studio" className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#163A2B] block mb-2">
                TACTILE MATERIAL WORKBENCH
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111815] font-normal">
                Inspect Raw Materials &amp; Finishes
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
              {currentStyle.materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterialId(mat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeMaterial?.id === mat.id
                      ? "bg-[#163A2B] text-white shadow-md"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {mat.name}
                </button>
              ))}
            </div>
          </div>

          {activeMaterial && (
            <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-neutral-200/90 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 relative aspect-[16/11] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-inner group">
                  <Image
                    src={activeMaterial.image}
                    alt={activeMaterial.name}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out cursor-crosshair"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-white border border-white/10">
                    ✦ Hover image to inspect macro texture
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-neutral-200 shadow-md">
                    <span className="text-[10px] uppercase font-bold text-[#163A2B] block">Tactile Feel:</span>
                    <p className="text-xs text-neutral-800 mt-0.5 italic">
                      &ldquo;{activeMaterial.tactileFeel}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#163A2B] bg-[#EAF2ED] px-3 py-1 rounded-full inline-block mb-3">
                      {activeMaterial.category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111815] mb-2.5">
                      {activeMaterial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D6B64] leading-relaxed mb-6 font-body">
                      {activeMaterial.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-100">
                    <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-neutral-200">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Origin</span>
                      <span className="text-xs font-bold text-[#111815] mt-1 block">{activeMaterial.origin}</span>
                    </div>

                    <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-neutral-200">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Hardness / Weight</span>
                      <span className="text-xs font-bold text-[#111815] mt-1 block">{activeMaterial.hardnessOrWeight}</span>
                    </div>

                    <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-neutral-200 col-span-2 sm:col-span-1">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Curing / Finish</span>
                      <span className="text-xs font-bold text-[#163A2B] mt-1 block">{activeMaterial.moistureOrFinish}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </section>

        {/* ================= 5. GET THE LOOK: COMPLETE ROOM STUDIO ================= */}
        <section id="get-the-look" className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#163A2B] block mb-2">
              COMPLETE LIVING ROOM COMMISSION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal">
              {currentStyle.getTheLook.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5D6B64]">
              {currentStyle.getTheLook.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left 8 Cols: Interactive Living Room Canvas */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-xl">
              <Image
                src={currentStyle.getTheLook.roomImage}
                alt={currentStyle.getTheLook.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Pulsating Radar Pins */}
              {currentStyle.getTheLook.hotspots.map((spot) => {
                const isSelected = activeHotspot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot)}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group focus:outline-none"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    aria-label={`Inspect ${spot.name}`}
                  >
                    <span className={`absolute -inset-2.5 rounded-full animate-ping opacity-75 ${
                      isSelected ? "bg-[#E5A83B]" : "bg-white/80"
                    }`} />
                    
                    <div className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-300 ${
                      isSelected
                        ? "bg-[#163A2B] text-white ring-4 ring-white scale-110"
                        : "bg-white text-[#111815] hover:scale-110"
                    }`}>
                      <span className="text-sm font-bold">+</span>
                    </div>

                    <div className={`hidden sm:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-bold shadow-xl transition-all ${
                      isSelected
                        ? "bg-[#163A2B] text-white opacity-100"
                        : "bg-black/80 text-white opacity-0 group-hover:opacity-100"
                    }`}>
                      <span>{spot.name}</span>
                      <span className="font-mono text-[#E5A83B]">৳{spot.price.toLocaleString()}</span>
                    </div>
                  </button>
                );
              })}

              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/90 border border-white/20 flex items-center gap-2">
                <span className="text-[#E5A83B]">✦</span>
                <span>Click any radar pin (+) to inspect piece &amp; dimensions</span>
              </div>
            </div>

            {/* Right 4 Cols: Live Inspector & Bundle Offer (Clean White Card) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-md">
              {activeHotspot ? (
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#163A2B] bg-[#EAF2ED] px-3 py-1 rounded-full">
                        {activeHotspot.category}
                      </span>
                      <span className="text-xs text-neutral-400 font-semibold">
                        In Room Setup
                      </span>
                    </div>

                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 mb-4">
                      <Image
                        src={activeHotspot.image}
                        alt={activeHotspot.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#111815] mb-1">
                      {activeHotspot.name}
                    </h3>
                    <p className="text-xs text-[#5D6B64] mb-1">
                      {activeHotspot.woodType}
                    </p>
                    <p className="text-[11px] font-mono text-[#163A2B] font-semibold mb-3">
                      Dim: {activeHotspot.dimensions}
                    </p>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-neutral-400 uppercase font-bold block">Piece Price</span>
                        <span className="font-display text-xl font-bold text-[#163A2B]">
                          ৳{activeHotspot.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        10-Yr Warranty
                      </span>
                    </div>
                  </div>

                  {/* Room Bundle Offer Box */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 bg-[#FAF9F5] p-3.5 rounded-2xl border border-neutral-200">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-[#163A2B]">Complete Room Set (4 Pcs):</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Save {currentStyle.getTheLook.bundleDiscountPercent}%
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-lg font-bold text-[#111815]">
                        ৳{roomBundleTotal.discounted.toLocaleString()}
                      </span>
                      <span className="text-xs text-neutral-400 line-through">
                        ৳{roomBundleTotal.original.toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-3">
                      <a
                        href={`https://wa.me/8801960481983?text=Hi%20Heaven%20Furniture,%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(currentStyle.name)}%20Room%20Bundle%20(৳${roomBundleTotal.discounted.toLocaleString()}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-xs font-bold shadow-xs transition-all"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm0 18.05h-.01a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.02-.2-.31a8.12 8.12 0 0 1-1.25-4.3c0-4.49 3.66-8.15 8.17-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.49-3.66 8.12-8.16 8.12Zm4.47-6.1c-.24-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
                        </svg>
                        <span>Inquire on Complete Room Set</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-center text-neutral-400 text-xs">
                  Click any hotspot on the room to inspect the furniture piece.
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ================= 6. MOODBOARD COLLAGE & COLOR PALETTE ================= */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#163A2B] block mb-2">
                EDITORIAL COLLAGE &amp; PALETTE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111815] font-normal">
                {currentStyle.moodboard.title}
              </h2>
            </div>

            {/* Color Palette Swatches */}
            <div className="bg-white p-3.5 rounded-2xl border border-neutral-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider block mb-2">
                Color Swatches:
              </span>
              <div className="flex items-center gap-2">
                {currentStyle.moodboard.palette.map((color, idx) => (
                  <div key={idx} className="group relative flex flex-col items-center">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl shadow-xs cursor-pointer transition-transform group-hover:scale-110 ${
                        color.border ? "border border-neutral-300" : ""
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={`${color.name} (${color.hex})`}
                    />
                    <span className="text-[9px] font-mono text-neutral-400 mt-1 uppercase hidden sm:block">
                      {color.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {currentStyle.moodboard.tiles.map((tile, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xs group ${
                  idx === 0 ? "col-span-2 aspect-[16/10] md:aspect-auto md:row-span-2" : "aspect-square sm:aspect-[4/3]"
                }`}
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#E5A83B] block">
                    {tile.category}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold truncate block">
                    {tile.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 7. CURATED E-COMMERCE CATALOG ================= */}
        <section id="shop-the-style" className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#163A2B] block mb-2">
                CURATED PIECES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111815] font-normal">
                Shop <span className="text-[#163A2B] font-serif italic">{currentStyle.shortName}</span>
              </h2>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
              {[
                { id: "all", label: "All Pieces" },
                { id: "sofas", label: "Sofas & Lounges" },
                { id: "chairs", label: "Chairs" },
                { id: "tables", label: "Tables & Dining" },
                { id: "beds", label: "Beds & Bedroom" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setShopFilter(filter.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    shopFilter === filter.id
                      ? "bg-[#163A2B] text-white shadow-xs"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-xl hover:border-[#163A2B]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3.2] bg-neutral-100 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    {prod.badge && (
                      <span className="absolute top-3 left-3 bg-[#163A2B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                        {prod.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#111815] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                      <svg className="w-3 h-3 fill-[#E5A83B] text-[#E5A83B]" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span>{prod.rating}</span>
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#163A2B] block mb-1">
                      {prod.woodType}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#111815] line-clamp-1 group-hover:text-[#163A2B] transition-colors">
                      {prod.name}
                    </h3>
                    {prod.dimensions && (
                      <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                        {prod.dimensions}
                      </p>
                    )}
                    <p className="text-xs text-[#5D6B64] mt-1 line-clamp-2 leading-relaxed font-body">
                      {prod.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase font-bold block">Price (BDT)</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-lg font-bold text-[#111815]">
                          ৳{prod.price.toLocaleString()}
                        </span>
                        {prod.originalPrice && (
                          <span className="text-xs text-neutral-400 line-through">
                            ৳{prod.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                    <div className="flex items-center gap-2">
                    <Link
                      href={`/shop/${prod.id}`}
                      className="flex-1 text-center py-2.5 rounded-xl bg-[#163A2B] hover:bg-[#102a1f] text-white text-xs font-semibold shadow-xs transition-all"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/8801960481983?text=Hi%20Heaven%20Furniture,%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(prod.name)}%20(৳${prod.price.toLocaleString()}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 flex items-center justify-center transition-all shrink-0 group/wa"
                      title="Inquire via WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm0 18.05h-.01a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.02-.2-.31a8.12 8.12 0 0 1-1.25-4.3c0-4.49 3.66-8.15 8.17-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.49-3.66 8.12-8.16 8.12Zm4.47-6.1c-.24-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ================= 8. BESPOKE 3D VIP ROOM CONSULTATION ================= */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="bg-[#163A2B] rounded-[36px] p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#E5A83B]/20 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A83B] block mb-3">
                BESPOKE LIVING CONSULTATION
              </span>
              
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-white leading-tight">
                {currentStyle.personality.headline}
              </h2>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed font-body">
                {currentStyle.personality.description}
              </p>

              <blockquote className="mt-4 text-sm sm:text-base text-[#E5A83B] font-serif italic border-l-2 border-[#E5A83B] pl-4">
                {currentStyle.personality.quote}
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E5A83B] hover:bg-[#d89728] active:scale-95 text-[#111815] text-xs sm:text-sm font-bold shadow-lg transition-all"
                >
                  <span>Book Free 3D Room Concept</span>
                  <span>&rarr;</span>
                </Link>

                <a
                  href="https://wa.me/8801960481983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-lg transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm0 18.05h-.01a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.02-.2-.31a8.12 8.12 0 0 1-1.25-4.3c0-4.49 3.66-8.15 8.17-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.49-3.66 8.12-8.16 8.12Zm4.47-6.1c-.24-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
                  </svg>
                  <span>Chat with Interior Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function StylesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF9F5] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#163A2B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <StylesPageContent />
    </Suspense>
  );
}
