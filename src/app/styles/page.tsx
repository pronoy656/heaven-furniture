"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import { ALL_PRODUCTS, Product } from "@/lib/products";

// ================= LUXURY SVG ICONS =================
function IconModern({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.8" />
      <path d="M3 9h18M9 21V9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMinimalist({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 11a9 9 0 0 1 9-9z" />
      <path d="M12 6v12M8 10l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClassic({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19h16M4 5h16M7 5v14M17 5v14M12 5v14" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 5h20M2 19h20" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconScandinavian({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
    </svg>
  );
}

function IconIndustrial({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 20h20M5 20V8l7-5 7 5v12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13h6M9 17h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWoodGrain({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M6 8c4 1 8-1 12 0M6 12c3-1 9 1 12 0M6 16c5 1 7-1 12 0" strokeLinecap="round" />
    </svg>
  );
}

function IconColorPalette({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSparkle({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" strokeLinejoin="round" />
    </svg>
  );
}

// ================= DATA TYPES =================
interface ColorSwatch {
  name: string;
  hex: string;
  border?: boolean;
}

interface DesignShowcase {
  id: string;
  title: string;
  roomType: "living" | "bedroom" | "dining" | "details";
  roomLabel: string;
  description: string;
  image: string;
  timberSpecies: string;
  keyFurniture: string[];
  dimensionsEstimated: string;
  productionTime: string;
}

interface StyleDetail {
  id: string;
  num: string;
  name: string;
  tagline: string;
  philosophy: string;
  heroImage: string;
  materials: {
    wood: string;
    fabrics: string;
    metals: string;
    finishes: string;
  };
  colorPalette: ColorSwatch[];
  keyTraits: string[];
  stylingTips: {
    title: string;
    tip: string;
  }[];
  gallery: DesignShowcase[];
  matchingProductIds: string[];
}

const STYLE_DETAILS: Record<string, StyleDetail> = {
  modern: {
    id: "modern",
    num: "01",
    name: "Modern Architectural",
    tagline: "Sleek Silhouettes, Clean Geometry & Warm Earth Tones",
    philosophy:
      "Modern style balances crisp architectural lines with tactile organic warmth. It rejects ornate clutter in favor of purposeful form, low-slung seating, floating profiles, and subtle contrasting textures like fluted teak, matte metal, and Belgian bouclé.",
    heroImage: "/style-modern.jpg",
    materials: {
      wood: "Kiln-Dried Chittagong Teak & Deep Walnut",
      fabrics: "Heavy Belgian Bouclé & Natural Textured Linen",
      metals: "Matte Black Powder-Coated Steel & Satin Brass",
      finishes: "Ultra-Matte Natural Polyurethane Sealant",
    },
    colorPalette: [
      { name: "Chalk Cream", hex: "#F5F2EB", border: true },
      { name: "Deep Forest", hex: "#163A2B" },
      { name: "Warm Walnut", hex: "#4A3326" },
      { name: "Brushed Brass", hex: "#D4AF37" },
      { name: "Charcoal Slate", hex: "#222524" },
    ],
    keyTraits: [
      "Low-profile silhouettes with generous horizontal proportions",
      "Rhythmic fluted woodwork and geometric shadow lines",
      "Seamless hidden hardware with soft-close push mechanisms",
      "Balance of plush textured bouclé against solid timber framework",
    ],
    stylingTips: [
      {
        title: "Lighting Scheme",
        tip: "Incorporate 2700K warm diffused architectural lighting and slim floor arc lamps to cast soft glow over horizontal timber surfaces.",
      },
      {
        title: "Rug & Textiles",
        tip: "Layer high-pile wool or hand-knotted organic neutral rugs to ground the low-profile seating without visual noise.",
      },
      {
        title: "Decor Accents",
        tip: "Use monolithic stoneware ceramics, sculptural smoked glass vases, and oversized framed line art.",
      },
    ],
    gallery: [
      {
        id: "mod-1",
        title: "The Horizon Penthouse Living Lounge",
        roomType: "living",
        roomLabel: "Main Living Space",
        description: "An expansive open-concept lounge featuring our Haven modular sectional, fluted teak coffee table, and sculptural bouclé chairs with brass base detailing.",
        image: "/hero-living-room.jpg",
        timberSpecies: "Seasoned Chittagong Teak",
        keyFurniture: ["Haven Modular Sectional", "Fluted Center Table", "Bouclé Accent Chair"],
        dimensionsEstimated: "24 ft x 18 ft Living Zone",
        productionTime: "18-21 Days Handcrafted",
      },
      {
        id: "mod-2",
        title: "Floating Low-Platform Master Bedroom",
        roomType: "bedroom",
        roomLabel: "Master Bedroom Suite",
        description: "A cantilevered Shegun king bed with integrated ambient LED backlighting, matching floating nightstands, and seamless flush wardrobe panels.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "100% Solid Burma & CTG Shegun",
        keyFurniture: ["Aura King Platform Bed", "Twin Floating Pedestals", "Concealed LED Slat Board"],
        dimensionsEstimated: "16 ft x 14 ft Suite",
        productionTime: "14-16 Days Commissioning",
      },
      {
        id: "mod-3",
        title: "Architectural Minimalist Banquet Hall",
        roomType: "dining",
        roomLabel: "Dining Pavilion",
        description: "Floating solid teak 8-seater dining table with tapered aerodynamic legs, paired with ergonomic leather-backed dining chairs and fluted credenza.",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "Seasoned Chittagong Teak & Brass",
        keyFurniture: ["Verona 8-Seater Table", "Solano Ergonomic Chairs", "Fluted Buffet Credenza"],
        dimensionsEstimated: "18 ft x 14 ft Dining Hall",
        productionTime: "16-18 Days Handcrafted",
      },
      {
        id: "mod-4",
        title: "Geometric Fluted Teak Detail & Slat Craft",
        roomType: "details",
        roomLabel: "Woodcraft Detail",
        description: "Macro look at precision CNC and hand-chiseled fluted timber panels with organic matte oil curing, highlighting natural wood ray patterns.",
        image: "/style-modern.jpg",
        timberSpecies: "Chittagong Teak (10-12% MC)",
        keyFurniture: ["Custom Fluted Media Console", "Geometric Timber Partition"],
        dimensionsEstimated: "Custom Millwork",
        productionTime: "7-10 Days Precision Millwork",
      },
    ],
    matchingProductIds: ["haven-sofa", "boucle-chair", "verona-table", "aura-bed"],
  },

  minimalist: {
    id: "minimalist",
    num: "02",
    name: "Pure Minimalist",
    tagline: "Intentional Spaces, Honest Joinery & Serene Simplicity",
    philosophy:
      "Minimalism is not the absence of design, but the mastery of restraint. We celebrate the raw, uninterrupted beauty of natural solid timber grains, concealed joinery, and peaceful negative spaces that allow mind and body to relax completely.",
    heroImage: "/style-minimalist.jpg",
    materials: {
      wood: "Chittagong Teak & Light Honed Segun",
      fabrics: "Raw Oatmeal Canvas & Breathable Organic Cotton",
      metals: "Subtle Brushed Nickel & Concealed Internal Iron",
      finishes: "Hand-Rubbed Organic Satin Wax & Natural Oils",
    },
    colorPalette: [
      { name: "Alabaster White", hex: "#FAF8F5", border: true },
      { name: "Oatmeal Warmth", hex: "#E8DFC8" },
      { name: "Honey Teak", hex: "#9E6D38" },
      { name: "Muted Olive", hex: "#5C6B5E" },
      { name: "Soft Clay", hex: "#C7B299" },
    ],
    keyTraits: [
      "Zero superfluous ornaments—every edge has structural purpose",
      "Japanese-Scandinavian (Japandi) inspired mortise joinery",
      "Monochromatic, calm neutral palettes that maximize natural daylight",
      "Hidden storage to keep room surfaces completely clutter-free",
    ],
    stylingTips: [
      {
        title: "Natural Daylight",
        tip: "Maximize sheer linen curtains to filter sunlight softly onto natural wood grain without harsh reflections.",
      },
      {
        title: "Negative Space",
        tip: "Leave at least 40% of room floor and wall space open to allow the statement timber pieces room to breathe.",
      },
      {
        title: "Botanical Elements",
        tip: "A single sculptural branch or bonsai in a raw ceramic vessel completes the serene aesthetic.",
      },
    ],
    gallery: [
      {
        id: "min-1",
        title: "Zen Minimalist Platform Bedroom",
        roomType: "bedroom",
        roomLabel: "Tranquil Sleep Sanctuary",
        description: "Low-height bed frame built with zero-squeak interlocking timber joints, paired with integrated headboard ledge and unadorned organic linens.",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "Light Honed Chittagong Teak",
        keyFurniture: ["Aura Low Platform Bed", "Zen Slatted Headboard", "Duo Teak Stools"],
        dimensionsEstimated: "14 ft x 14 ft Room",
        productionTime: "12-14 Days Handcrafted",
      },
      {
        id: "min-2",
        title: "Sunlit Japandi Living Space",
        roomType: "living",
        roomLabel: "Minimalist Lounge",
        description: "Clean horizontal lines with low-slung oatmeal linen sofa, slim round coffee table, and an uninterrupted hardwood floor layout.",
        image: "/style-minimalist.jpg",
        timberSpecies: "Selected Teak with Satin Oil",
        keyFurniture: ["Kanso Low Sofa", "Minimalist Disc Center Table"],
        dimensionsEstimated: "16 ft x 12 ft Space",
        productionTime: "14-16 Days Commissioning",
      },
      {
        id: "min-3",
        title: "Cantilevered Architectural Study Studio",
        roomType: "details",
        roomLabel: "Focus Study Space",
        description: "Seamless solid Shegun wall-mounted desk with concealed cable passages and an ergonomic timber stool.",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "Solid Shegun Hardwood",
        keyFurniture: ["Kanso Floating Desk", "Ergonomic Timber Stool"],
        dimensionsEstimated: "10 ft x 8 ft Study Nook",
        productionTime: "10-12 Days Commissioning",
      },
    ],
    matchingProductIds: ["aura-bed", "haven-sofa", "boucle-chair"],
  },

  classic: {
    id: "classic",
    num: "03",
    name: "Heritage & Classic",
    tagline: "Heirloom Craftsmanship, Rich Patina & Timeless Grandeur",
    philosophy:
      "Heritage Classic celebrates Chattogram's centuries-old woodcarving legacy. Using generational single-slab Burma and Chittagong Shegun timber, these pieces feature hand-turned pillars, deep bevels, and lustrous amber patinas built to last for generations.",
    heroImage: "/style-classic.jpg",
    materials: {
      wood: "100% Century-Old Seasoned Burma & CTG Shegun",
      fabrics: "Full-Grain Italian Leather & Royal Damask Velvet",
      metals: "Antiqued Cast Brass & Polished Bronze Hardware",
      finishes: "Deep Multi-Layered Lacquer & Warm Amber Wax",
    },
    colorPalette: [
      { name: "Royal Amber", hex: "#8A4B1D" },
      { name: "Deep Cognac", hex: "#5C2C16" },
      { name: "Imperial Emerald", hex: "#113B29" },
      { name: "Burnished Gold", hex: "#C59B27" },
      { name: "Warm Parchment", hex: "#EDE4D3", border: true },
    ],
    keyTraits: [
      "Master artisan hand-carved floral cornices and fluted pillars",
      "Generous, stately proportions with heavy solid timber mass",
      "Single-slab continuous grain table tops with heirloom durability",
      "Warm, rich wood tones that deepen in character over decades",
    ],
    stylingTips: [
      {
        title: "Grand Focal Point",
        tip: "Anchor the dining or living area around a massive 8-seater heirloom table or an ornate carved wardrobe.",
      },
      {
        title: "Rich Warm Drapery",
        tip: "Pair with double-pleated heavy velvet or jacquard drapes in jewel tones to enhance acoustic luxury.",
      },
      {
        title: "Warm Lighting",
        tip: "Use crystal chandeliers and vintage brass sconces with warm amber filament bulbs.",
      },
    ],
    gallery: [
      {
        id: "cla-1",
        title: "The Statesman Heritage Living Room",
        roomType: "living",
        roomLabel: "Grand Reception Salon",
        description: "Carved Shegun sofa set with tufted deep buttoning, hand-turned corner pillars, and deep luster amber hand-rubbed wax finish.",
        image: "/style-classic.jpg",
        timberSpecies: "100% Seasoned Chittagong Shegun",
        keyFurniture: ["Statesman 3-Piece Carved Sofa", "Heirloom Coffee Table", "Pedestal Display Stands"],
        dimensionsEstimated: "22 ft x 16 ft Formal Parlor",
        productionTime: "24-28 Days Hand Carving",
      },
      {
        id: "cla-2",
        title: "Royal Single-Slab Banquet Dining Room",
        roomType: "dining",
        roomLabel: "Banquet Hall",
        description: "An imposing 10-seater single-slab continuous grain Shegun dining table flanked by ornate hand-carved high-back dining chairs.",
        image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "2.5-Inch Single Slab Burma Shegun",
        keyFurniture: ["Monolithic 10-Seater Banquet Table", "10 High-Back Carved Chairs", "Glass-Front Display Buffet"],
        dimensionsEstimated: "24 ft x 16 ft Banquet Room",
        productionTime: "25-30 Days Master Commission",
      },
      {
        id: "cla-3",
        title: "Heirloom Four-Poster Canopy Suite",
        roomType: "bedroom",
        roomLabel: "Heritage Master Bedroom",
        description: "Monumental four-poster solid Shegun bed with hand-turned spiral posts, carved crest rail, and matching 3-door ornate wardrobe.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "Solid Chittagong Shegun",
        keyFurniture: ["Four-Poster Canopy Bed", "Hand-Carved 3-Door Wardrobe", "Vanity Dressing Table"],
        dimensionsEstimated: "18 ft x 16 ft Master Bedroom",
        productionTime: "21-25 Days Artisan Crafting",
      },
    ],
    matchingProductIds: ["verona-table", "haven-sofa"],
  },

  scandinavian: {
    id: "scandinavian",
    num: "04",
    name: "Scandinavian Nordic",
    tagline: "Organic Curves, Light Wood & Hygge Comfort",
    philosophy:
      "Nordic design brings the spirit of 'Hygge' into the home. Characterized by blonde wood tones, curved ergonomic profiles, woven natural cane, and inviting tactile fabrics that bring cozy warmth to every everyday ritual.",
    heroImage: "/style-scandinavian-3.jpg",
    materials: {
      wood: "White Oak, Light Ash & Honey Teak",
      fabrics: "Woven Wool Melange, Bouclé & Natural Cotton",
      metals: "Matte White & Warm Champagne Steel",
      finishes: "Natural Satin Clear Sealer (Zero Yellowing)",
    },
    colorPalette: [
      { name: "Nordic Snow", hex: "#FFFFFF", border: true },
      { name: "Blonde Oak", hex: "#D6C29E" },
      { name: "Sage Mist", hex: "#9AA899" },
      { name: "Sky Glaze", hex: "#C5D3D6" },
      { name: "Warm Taupe", hex: "#8A7E72" },
    ],
    keyTraits: [
      "Soft rounded edges and organically curved timber armrests",
      "Woven cane rattan inserts on cabinet doors and backrests",
      "Tapered dowel legs that give furniture an airy, floating feel",
      "Bright, light-reflecting wood tones that brighten compact spaces",
    ],
    stylingTips: [
      {
        title: "Layered Hygge Textures",
        tip: "Combine chunky knit throws, plush sheepskin rugs, and linen cushions for an instantly cozy ambiance.",
      },
      {
        title: "Curved Silhouette Balance",
        tip: "Pair straight-lined walls with round dining tables or pebble-shaped coffee tables to soften room angles.",
      },
      {
        title: "Indoor Greenery",
        tip: "Place potted fiddle-leaf figs and cascading pothos in woven natural fiber planters.",
      },
    ],
    gallery: [
      {
        id: "sca-1",
        title: "The Hygge Sunlit Living Lounge",
        roomType: "living",
        roomLabel: "Warm Family Lounge",
        description: "Curved blonde-wood sofa framed with woven natural cane inserts, accompanied by pebble nesting tables and soft textured textiles.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "Light Ash & Honey Teak",
        keyFurniture: ["Nordic Curved Sofa", "Cane Lounge Chair", "Pebble Nesting Coffee Tables"],
        dimensionsEstimated: "18 ft x 14 ft Living Room",
        productionTime: "14-16 Days Commissioning",
      },
      {
        id: "sca-2",
        title: "Airy Nordic Dining & Sunroom",
        roomType: "dining",
        roomLabel: "Dining Sunroom",
        description: "Round solid teak dining table with wishbone-inspired ergonomic curved chairs and an airy slatted sideboard.",
        image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "Honey Tone Chittagong Teak",
        keyFurniture: ["Round Nordic Dining Table", "6 Wishbone Timber Chairs", "Cane Fluted Sideboard"],
        dimensionsEstimated: "14 ft x 14 ft Sunroom",
        productionTime: "14-18 Days Handcrafted",
      },
      {
        id: "sca-3",
        title: "Minimalist Nordic Rest Bedroom",
        roomType: "bedroom",
        roomLabel: "Breezy Bedroom Suite",
        description: "Lightweight tapered-leg platform bed with woven cane headboard that lets daylight flow freely across the room.",
        image: "/style-scandinavian-3.jpg",
        timberSpecies: "Natural Ash & Cane Rattan",
        keyFurniture: ["Nordic Cane Headboard Bed", "Tapered Side Tables", "Linen Dressing Bench"],
        dimensionsEstimated: "15 ft x 13 ft Suite",
        productionTime: "12-15 Days Handcrafted",
      },
    ],
    matchingProductIds: ["boucle-chair", "haven-sofa", "verona-table"],
  },

  industrial: {
    id: "industrial",
    num: "05",
    name: "Modern Industrial & Loft",
    tagline: "Exposed Elements, Heavy Timber & Architectural Metal",
    philosophy:
      "Born from urban loft living, Industrial style celebrates raw honesty. We fuse thick 2-inch live-edge timber slabs with structural steel framing, visible bolt joinery, and distress-waxed surfaces for a bold, masculine, and sophisticated space.",
    heroImage: "/style-industrial-brick.jpg",
    materials: {
      wood: "Heavy Chittagong Teak Slabs & Reclaimed Mahogany",
      fabrics: "Distressed Pull-Up Leather & Raw Canvas",
      metals: "Heavy Architectural Steel, Cast Iron & Raw Brass",
      finishes: "Matte Black Epoxy Coating & Wax-Sealed Timber",
    },
    colorPalette: [
      { name: "Exposed Brick", hex: "#8D4433" },
      { name: "Gunmetal Steel", hex: "#2B2E32" },
      { name: "Aged Leather", hex: "#633B1E" },
      { name: "Distressed Concrete", hex: "#8A8D8F" },
      { name: "Raw Timber", hex: "#B88349" },
    ],
    keyTraits: [
      "Thick single-slab live-edge tops with natural grain fissures",
      "Welded geometric black metal trestle legs and steel frames",
      "Vintage bolt detailing, open shelving, and wire-mesh inserts",
      "Rugged durability that withstands intense everyday use",
    ],
    stylingTips: [
      {
        title: "Wall Finishes",
        tip: "Pair with exposed red brick walls, polished concrete screed, or dark textured Venetian plaster.",
      },
      {
        title: "Architectural Lighting",
        tip: "Install matte black track spotlights, exposed Edison bulb fixtures, or metal cage pendants.",
      },
      {
        title: "Metallic Accents",
        tip: "Incorporate matte black metal shelving, brass bar carts, and industrial hardware.",
      },
    ],
    gallery: [
      {
        id: "ind-1",
        title: "The Industrial Loft Gathering Space",
        roomType: "living",
        roomLabel: "Urban Loft Lounge",
        description: "Oversized caramel cognac leather sofa resting on black iron framework, complemented by a massive single-slab teak coffee table.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "2-Inch Live-Edge Chittagong Teak & Steel",
        keyFurniture: ["Industrial Leather Sectional", "Live-Edge Slab Center Table", "Iron Bookcase"],
        dimensionsEstimated: "24 ft x 18 ft Open Loft",
        productionTime: "18-22 Days Handcrafted",
      },
      {
        id: "ind-2",
        title: "The Warehouse Commission Dining Suite",
        roomType: "dining",
        roomLabel: "Loft Dining & Bar",
        description: "Monolithic live-edge slab table featuring natural butterfly joints and heavy black steel X-frame legs.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
        timberSpecies: "Single-Slab Chittagong Teak",
        keyFurniture: ["Trestle Live-Edge Dining Table", "Iron Frame Dining Chairs", "Loft Bar Cart"],
        dimensionsEstimated: "20 ft x 14 ft Dining Zone",
        productionTime: "20-24 Days Commissioning",
      },
      {
        id: "ind-3",
        title: "Exposed Brick Executive Studio",
        roomType: "details",
        roomLabel: "Architectural Workspace",
        description: "Heavy timber executive desk resting on black steel trestles against exposed brickwork with open steel pipe shelving.",
        image: "/style-industrial-brick.jpg",
        timberSpecies: "Seasoned Teak & Architectural Steel",
        keyFurniture: ["Industrial Executive Desk", "Iron Pipe Bookshelf", "Distressed Leather Task Chair"],
        dimensionsEstimated: "16 ft x 12 ft Workspace",
        productionTime: "14-18 Days Commissioning",
      },
    ],
    matchingProductIds: ["verona-table", "haven-sofa"],
  },
};

const STYLES_LIST = [
  { id: "modern", name: "Modern", icon: IconModern, subtitle: "Sleek & Architectural" },
  { id: "minimalist", name: "Minimalist", icon: IconMinimalist, subtitle: "Clean & Zen" },
  { id: "classic", name: "Classic", icon: IconClassic, subtitle: "Heritage & Grandeur" },
  { id: "scandinavian", name: "Scandinavian", icon: IconScandinavian, subtitle: "Light & Hygge" },
  { id: "industrial", name: "Industrial", icon: IconIndustrial, subtitle: "Raw Timber & Steel" },
];

function StylesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialStyle = searchParams.get("style") || "modern";
  const [selectedStyleId, setSelectedStyleId] = useState<string>(
    STYLE_DETAILS[initialStyle] ? initialStyle : "modern"
  );

  // Gallery room filter tab: 'all' | 'living' | 'bedroom' | 'dining' | 'details'
  const [galleryFilter, setGalleryFilter] = useState<string>("all");

  // Selected design inspection modal
  const [inspectedDesign, setInspectedDesign] = useState<DesignShowcase | null>(null);

  // Style Quiz State
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // Sync with URL query parameter
  useEffect(() => {
    const styleParam = searchParams.get("style");
    if (styleParam && STYLE_DETAILS[styleParam]) {
      setSelectedStyleId(styleParam);
      setGalleryFilter("all");
    }
  }, [searchParams]);

  const handleSelectStyle = (id: string) => {
    setSelectedStyleId(id);
    setGalleryFilter("all");
    router.replace(`/styles?style=${id}`, { scroll: false });
  };

  const currentStyle = STYLE_DETAILS[selectedStyleId] || STYLE_DETAILS.modern;

  // Filtered gallery items
  const filteredGallery = useMemo(() => {
    if (galleryFilter === "all") return currentStyle.gallery;
    return currentStyle.gallery.filter((g) => g.roomType === galleryFilter);
  }, [currentStyle, galleryFilter]);

  // Filter products for this style
  const matchingProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((p) =>
      currentStyle.matchingProductIds.includes(p.id)
    );
  }, [currentStyle]);

  // Quiz questions
  const quizQuestions = [
    {
      question: "1. What mood do you want your home to evoke when you step inside?",
      options: [
        { label: "Crisp, contemporary, and architectural with sleek lines", styleId: "modern" },
        { label: "Quiet, clutter-free zen with organic negative spaces", styleId: "minimalist" },
        { label: "Regal, grand, and timeless with rich solid wood carvings", styleId: "classic" },
        { label: "Warm, cozy, and bright with soft natural curves (Hygge)", styleId: "scandinavian" },
        { label: "Bold, masculine, and urban with raw wood and iron accents", styleId: "industrial" },
      ],
    },
    {
      question: "2. Which timber shade and texture speaks to your taste?",
      options: [
        { label: "Deep walnut and fluted teak with satin brass accents", styleId: "modern" },
        { label: "Natural honey teak with invisible matte finish", styleId: "minimalist" },
        { label: "Rich antique amber Shegun with polished patina", styleId: "classic" },
        { label: "Blonde light ash and natural cane rattan weaving", styleId: "scandinavian" },
        { label: "Heavy dark live-edge slabs paired with black steel", styleId: "industrial" },
      ],
    },
    {
      question: "3. What type of space are you primarily styling?",
      options: [
        { label: "Modern Luxury Apartment / High-rise Penthouse", styleId: "modern" },
        { label: "Calm Minimalist Studio or Zen Master Bedroom", styleId: "minimalist" },
        { label: "Spacious Duplex, Bungalow or Family Banquet Hall", styleId: "classic" },
        { label: "Cozy Family Flat with lots of natural daylight", styleId: "scandinavian" },
        { label: "Open-Plan Loft, Creative Office or Villa Lounge", styleId: "industrial" },
      ],
    },
  ];

  const handleQuizOption = (styleId: string) => {
    const nextAnswers = [...quizAnswers, styleId];
    setQuizAnswers(nextAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const counts: Record<string, number> = {};
      nextAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
      });
      let highest = "modern";
      let maxCount = 0;
      Object.entries(counts).forEach(([sId, count]) => {
        if (count > maxCount) {
          maxCount = count;
          highest = sId;
        }
      });
      setQuizResult(highest);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111815] selection:bg-[#163A2B] selection:text-white flex flex-col">
      <NavBar />

      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 bg-gradient-to-b from-[#EAEFEA] via-[#FAF9F5] to-[#FAF9F5] border-b border-neutral-200/80 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[320px] bg-[#163A2B]/5 blur-3xl" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Editorial Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-900/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] shadow-xs mb-4">
            <span className="text-[#E5A83B]">✦</span>
            <span>DESIGN AESTHETICS &amp; MOODBOARDS</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#111815] font-normal tracking-tight leading-[1.14] max-w-4xl mx-auto">
            Find the Style That Defines Your{" "}
            <span className="text-[#163A2B] font-serif italic">Sanctuary</span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#5D6B64] max-w-2xl mx-auto leading-relaxed">
            Every home tells a story. Explore our 5 signature interior aesthetics—from warm minimalism to timeless heritage teak. Discover material palettes, living inspirations, and handcrafted furniture tailored to your lifestyle.
          </p>

          {/* Quick Quiz Trigger CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                resetQuiz();
                setQuizOpen(true);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <IconSparkle className="w-4 h-4 text-[#E5A83B]" />
              <span>Take 1-Min Style Matcher Quiz</span>
            </button>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-medium border border-neutral-300 shadow-xs transition-all"
            >
              <span>Browse All Furniture</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE STYLE SWITCHER TABS WITH CRISP VECTOR ICONS ================= */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-xs">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {STYLES_LIST.map((st) => {
              const isActive = selectedStyleId === st.id;
              const IconComponent = st.icon;
              return (
                <button
                  key={st.id}
                  onClick={() => handleSelectStyle(st.id)}
                  className={`relative shrink-0 flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#163A2B] text-white shadow-md"
                      : "bg-neutral-100/80 hover:bg-neutral-200/70 text-neutral-700 border border-neutral-200/60"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? "text-[#E5A83B]" : "text-[#163A2B]"}`} />
                  <span>{st.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
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

      {/* ================= ACTIVE STYLE DETAIL SHOWCASE ================= */}
      <main className="flex-1 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStyle.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-16 sm:space-y-20 lg:space-y-24 mt-8 sm:mt-12"
          >
            {/* 1. HERO MOODBOARD & PHILOSOPHY BANNER */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-900 text-white min-h-[440px] sm:min-h-[500px] flex flex-col justify-end p-6 sm:p-10 lg:p-14 shadow-2xl">
                {/* Background Image */}
                <Image
                  src={currentStyle.heroImage}
                  alt={currentStyle.name}
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-45 mix-blend-luminosity scale-105 transition-transform duration-1000"
                  priority
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                {/* Floating Index Tag */}
                <div className="relative z-10 mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#E5A83B] text-xs font-bold uppercase tracking-widest w-fit">
                  <span>{currentStyle.num}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white">SIGNATURE AESTHETIC</span>
                </div>

                <div className="relative z-10 max-w-3xl">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                    {currentStyle.name}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base lg:text-lg text-[#E5A83B] font-serif italic">
                    {currentStyle.tagline}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-body">
                    {currentStyle.philosophy}
                  </p>
                </div>
              </div>
            </section>

            {/* 2. STYLE DNA: MATERIALS, COLOR PALETTE & TRAITS (Crisp Vector Icons) */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#627768] block mb-1">
                  MATERIALITY &amp; DNA
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#111815] font-normal">
                  The Anatomical Blueprint of <span className="text-[#163A2B] font-serif italic">{currentStyle.name}</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Materials Spec Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center mb-5">
                      <IconWoodGrain className="w-5 h-5 text-[#163A2B]" />
                    </div>
                    <h4 className="text-base font-bold text-[#111815] mb-4">Core Materials &amp; Joinery</h4>
                    
                    <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
                      <li>
                        <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wider text-emerald-900">Primary Timber:</span>
                        <p className="mt-0.5">{currentStyle.materials.wood}</p>
                      </li>
                      <li>
                        <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wider text-emerald-900">Textiles:</span>
                        <p className="mt-0.5">{currentStyle.materials.fabrics}</p>
                      </li>
                      <li>
                        <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wider text-emerald-900">Metals &amp; Accents:</span>
                        <p className="mt-0.5">{currentStyle.materials.metals}</p>
                      </li>
                      <li>
                        <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wider text-emerald-900">Protective Finish:</span>
                        <p className="mt-0.5">{currentStyle.materials.finishes}</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Color Swatches Palette Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center mb-5">
                      <IconColorPalette className="w-5 h-5 text-[#163A2B]" />
                    </div>
                    <h4 className="text-base font-bold text-[#111815] mb-2">Curated Color Palette</h4>
                    <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
                      Harmonious natural tones engineered to pair seamlessly with our seasoned timber finishes.
                    </p>

                    <div className="space-y-3">
                      {currentStyle.colorPalette.map((swatch, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-xl shrink-0 shadow-2xs ${
                              swatch.border ? "border border-neutral-300" : ""
                            }`}
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <div className="flex items-center justify-between flex-1 text-xs">
                            <span className="font-semibold text-neutral-800">{swatch.name}</span>
                            <span className="font-mono text-neutral-400 uppercase text-[11px]">{swatch.hex}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signature Traits Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center mb-5">
                      <IconSparkle className="w-5 h-5 text-[#163A2B]" />
                    </div>
                    <h4 className="text-base font-bold text-[#111815] mb-4">Aesthetic Signatures</h4>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                      {currentStyle.keyTraits.map((trait, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#163A2B] font-bold text-sm leading-none mt-0.5">✔</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. EXTENSIVE DESIGN INSPIRATION & ROOM GALLERY WITH FILTERING */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-4 border-b border-neutral-200/70">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#627768] block mb-1">
                    DESIGN GALLERY &amp; LOOKBOOK
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#111815] font-normal">
                    Explore Specific Room Designs in <span className="text-[#163A2B] font-serif italic">{currentStyle.name}</span>
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#5D6B64]">
                    Click any design below to inspect the timber specs, room dimensions, and pieces used.
                  </p>
                </div>

                {/* Gallery Room Filters */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
                  {[
                    { id: "all", label: "All Designs" },
                    { id: "living", label: "Living Rooms" },
                    { id: "bedroom", label: "Master Bedrooms" },
                    { id: "dining", label: "Dining & Banquets" },
                    { id: "details", label: "Craft Details" },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setGalleryFilter(filter.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        galleryFilter === filter.id
                          ? "bg-[#163A2B] text-white shadow-xs"
                          : "text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setInspectedDesign(item)}
                    className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[16/11] bg-neutral-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Room tag */}
                      <span className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[#163A2B] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {item.roomLabel}
                      </span>

                      {/* Action hover icon */}
                      <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#163A2B] group-hover:text-white transition-all">
                        <span className="text-sm font-bold">&rarr;</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display text-lg font-normal text-neutral-900 group-hover:text-[#163A2B] transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                        <span className="font-semibold text-emerald-900">{item.timberSpecies}</span>
                        <span className="text-[#163A2B] font-bold text-[11px] group-hover:underline">Inspect Design ↗</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. MATCHING FURNITURE COLLECTION & SHOPPING PIECES */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#627768] block mb-1">
                    HANDCRAFTED COMMISSIONS
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#111815] font-normal">
                    Featured Furniture in <span className="text-[#163A2B] font-serif italic">{currentStyle.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6B64] mt-1">
                    Explore individual solid-wood pieces tailored to this design aesthetic.
                  </p>
                </div>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#163A2B] hover:text-[#0f281e] group"
                >
                  <span>View All {ALL_PRODUCTS.length}+ Catalog Pieces</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {matchingProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative aspect-[4/3.5] bg-neutral-100 overflow-hidden">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {prod.badge && (
                        <span className="absolute top-3 left-3 bg-[#163A2B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                          {prod.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#163A2B]">
                          {prod.woodType}
                        </span>
                        <h4 className="text-sm font-bold text-neutral-900 mt-1 line-clamp-1 group-hover:text-[#163A2B] transition-colors">
                          {prod.name}
                        </h4>
                        <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                          {prod.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-neutral-400 block font-normal">Commission Price</span>
                          <span className="text-sm font-bold text-neutral-900">
                            ${prod.price.toLocaleString()}
                          </span>
                        </div>

                        <Link
                          href={`/shop/${prod.id}`}
                          className="px-3.5 py-1.5 rounded-full bg-[#FAF9F5] hover:bg-[#163A2B] hover:text-white text-[#163A2B] border border-neutral-200 text-xs font-semibold transition-all"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. DESIGNER STYLING ADVICE */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
              <div className="bg-[#EAF2ED] rounded-3xl p-8 sm:p-12 border border-emerald-900/10">
                <div className="max-w-3xl mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#163A2B] block mb-1">
                    ARCHITECTURAL GUIDELINES
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#111815] font-normal">
                    How to Style <span className="text-[#163A2B] font-serif italic">{currentStyle.name}</span> in Your Home
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5D6B64]">
                    Our Chattogram woodwrights and interior architects share recommendations for harmonizing lighting, textures, and timber proportions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentStyle.stylingTips.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-xs border border-neutral-200/60">
                      <div className="text-[#E5A83B] font-bold text-sm mb-2">0{idx + 1}.</div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-2">{item.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>

        {/* ================= DESIGN INSPECTION MODAL ================= */}
        <AnimatePresence>
          {inspectedDesign && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                className="bg-white rounded-[28px] max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-200 relative flex flex-col max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setInspectedDesign(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center text-sm font-bold transition-all"
                >
                  ✕
                </button>

                {/* Modal Image Header */}
                <div className="relative h-64 sm:h-80 w-full shrink-0 bg-neutral-900">
                  <Image
                    src={inspectedDesign.image}
                    alt={inspectedDesign.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#163A2B] text-white inline-block mb-2">
                      {inspectedDesign.roomLabel}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-normal leading-tight">
                      {inspectedDesign.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  <p className="text-sm text-neutral-600 leading-relaxed font-body">
                    {inspectedDesign.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                        Timber Species
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 mt-0.5 block">
                        {inspectedDesign.timberSpecies}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                        Commission Timeline
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 mt-0.5 block">
                        {inspectedDesign.productionTime}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                        Target Dimensions
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 mt-0.5 block">
                        {inspectedDesign.dimensionsEstimated}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                        Aesthetic Match
                      </span>
                      <span className="text-sm font-semibold text-[#163A2B] mt-0.5 block">
                        {currentStyle.name}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Key Handcrafted Pieces in this Setup:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {inspectedDesign.keyFurniture.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EAF2ED] text-[#163A2B] text-xs font-semibold"
                        >
                          <span>✦</span>
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <a
                      href={`https://wa.me/8801819382098?text=Hi%20Heaven%20Furniture%20Mart,%20I%20am%20interested%20in%20commissioning%20the%20${encodeURIComponent(inspectedDesign.title)}%20(${encodeURIComponent(currentStyle.name)}%20style).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                    >
                      <span>💬 Inquire This Design via WhatsApp</span>
                    </a>
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs sm:text-sm font-semibold transition-all"
                    >
                      <span>Request 3D CAD Mockup</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ================= STYLE QUIZ MODAL ================= */}
        <AnimatePresence>
          {quizOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setQuizOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 text-sm font-bold transition-all"
                >
                  ✕
                </button>

                {!quizResult ? (
                  <div>
                    {/* Progress indicator */}
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-semibold mb-4">
                      <span>INTERIOR STYLE FINDER</span>
                      <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                    </div>

                    <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden mb-6">
                      <div
                        className="bg-[#163A2B] h-full transition-all duration-300"
                        style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6 leading-snug">
                      {quizQuestions[quizStep].question}
                    </h3>

                    <div className="space-y-3">
                      {quizQuestions[quizStep].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuizOption(opt.styleId)}
                          className="w-full text-left p-4 rounded-2xl border border-neutral-200 hover:border-[#163A2B] hover:bg-[#EAF2ED]/40 transition-all text-xs sm:text-sm text-neutral-800 font-medium flex items-center justify-between group active:scale-[0.99]"
                        >
                          <span>{opt.label}</span>
                          <span className="text-neutral-400 group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all">
                            &rarr;
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center mx-auto mb-4">
                      <IconSparkle className="w-8 h-8 text-[#163A2B]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B] block mb-1">
                      YOUR PERFECT DESIGN MATCH IS
                    </span>
                    <h3 className="font-display text-3xl text-neutral-900 font-normal mb-3">
                      {STYLE_DETAILS[quizResult]?.name || "Modern Architectural"}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                      {STYLE_DETAILS[quizResult]?.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          handleSelectStyle(quizResult);
                          setQuizOpen(false);
                        }}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
                      >
                        Explore {STYLE_DETAILS[quizResult]?.name} Now
                      </button>
                      <button
                        onClick={resetQuiz}
                        className="w-full sm:w-auto px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs sm:text-sm font-semibold transition-all"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ================= BOTTOM DESIGN CONSULTATION CTA ================= */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="bg-[#163A2B] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A83B] block mb-2">
                PERSONALIZED WOODWRIGHTING
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white font-normal leading-tight">
                Not Sure Which Style Fits Your Floor Plan?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
                Bring your floor plan or room dimensions to our Chattogram showroom. Our senior furniture architects will generate a 3D moodboard and timber recommendation free of charge.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
              <a
                href="https://wa.me/8801819382098?text=Hi%20Heaven%20Furniture,%20I%20would%20like%20to%20schedule%20a%20free%20design%20consultation%20for%20my%20home."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
              >
                <span>💬 WhatsApp Us</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#163A2B] text-xs sm:text-sm font-bold shadow-lg transition-all"
              >
                <span>Book Showroom Visit</span>
              </Link>
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
