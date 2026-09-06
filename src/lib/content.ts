import type {
  SiteConfig,
  CollectionItem,
  BespokeStep,
  TrustItem,
  RealWorkItem,
  SocialProofItem,
  MilestoneItem,
} from "@/types";

export const SITE: SiteConfig = {
  name: "Heaven Furniture Mart",
  tagline: "Designed. Crafted. Customized.",
  phone: "+880 1960-481983",
  phoneHref: "tel:+8801960481983",
  whatsappHref: "https://wa.me/8801960481983",
  email: "heavenfurnituremart@gmail.com",
  address: "Agrabad Access Road, Chattogram, Bangladesh",
  founded: "2020",
  founder: "Abul Kalam Bhuiyan",
  social: {
    facebook: "https://facebook.com/HeavenFurnitureMart",
    instagram: "https://instagram.com/heaven_furniture_ltd",
    youtube: "https://youtube.com/@HeavenFurnitureMart",
  },
};

// 03 -- Explore the Spaces: interactive collection categories
export const COLLECTIONS: CollectionItem[] = [
  {
    id: "living",
    label: "Living Room",
    detail: "Sofas, coffee tables, TV units, consoles",
    copy:
      "A room built for slowing down. Every sofa is shaped around how you actually sit, gather, and host.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    detail: "Beds, wardrobes, dressing tables, bedside tables",
    copy:
      "Quiet, considered, and yours. Storage that disappears into the wall, and a bed frame built to your mattress.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "dining",
    label: "Dining",
    detail: "Dining tables, dining chairs, cabinets",
    copy:
      "A table sized for your family, not the showroom floor. Built to outlast every dinner it hosts.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "office",
    label: "Office & Study",
    detail: "Executive tables, bookshelves, workstations",
    copy:
      "A workspace that earns its keep. Executive tables and shelving cut to the centimetre of your room.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "bespoke",
    label: "Bespoke",
    detail: "Built to your own space, size, and taste",
    copy:
      "No category, no catalogue. Just your space, your taste, and a piece built to match it exactly.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
  },
];

// 04 -- The Bespoke Journey: Your Space -> Your Design -> Your Materials -> Our Craftsmanship -> Your Finished Space
export const BESPOKE_STAGES = [
  {
    id: "space",
    stage: "Your Space",
    title: "We understand your room, dimensions and lifestyle",
    detail:
      "A free consultation, measured against your actual walls, light, and layout.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "design",
    stage: "Your Design",
    title: "Our team turns your ideas into a tailored concept",
    detail:
      "Sketches and drawings built to your dimensions -- not a catalogue guess resized to fit.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "material",
    stage: "Your Materials",
    title: "Choose wood, fabric, leather, finishes and details",
    detail:
      "We select every plank and panel ourselves -- grain, grade, and finish, before a single cut is made.",
    image:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "craft",
    stage: "Our Craftsmanship",
    title: "Skilled craftsmen bring the design to life",
    detail:
      "Every joint and edge shaped in our own workshop -- no outsourcing, no shortcuts.",
    image:
      "https://images.unsplash.com/photo-1622150162490-3d907c15d3e7?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "result",
    stage: "Your Finished Space",
    title: "Your furniture arrives and transforms your interior",
    detail:
      "Delivered and installed in your home -- a piece that couldn't belong anywhere else.",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1800&auto=format&fit=crop",
  },
];

// 05 -- Why Heaven: trust journey
export const TRUST_JOURNEY = [
  {
    title: "Free Consultation",
    detail: "Sit with our designers before you commit to anything.",
  },
  {
    title: "Custom Design",
    detail: "Fully bespoke -- built to your space, not mass-produced.",
  },
  {
    title: "Premium Materials",
    detail: "Premium wood and materials, chosen piece by piece.",
  },
  {
    title: "Expert Craftsmanship",
    detail: "Skilled in-house craftsmanship, from frame to finish.",
  },
  {
    title: "Delivery & Installation",
    detail: "It arrives finished -- nothing left for you to figure out.",
  },
  {
    title: "Easy Payment",
    detail: "Flexible, easy payment options for every project size.",
  },
  {
    title: "Trusted by Hundreds",
    detail: "Hundreds of happy homeowners across Chattogram, and counting.",
  },
];

// 06 -- Our Real Work: showroom & work gallery
export const GALLERY = [
  {
    caption: "Agrabad Showroom",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
  },
  {
    caption: "Custom Living Set",
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1800&auto=format&fit=crop",
  },
  {
    caption: "Bespoke Bedroom Suite",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1800&auto=format&fit=crop",
  },
  {
    caption: "In the Workshop",
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1800&auto=format&fit=crop",
  },
  {
    caption: "Dining, Delivered",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1800&auto=format&fit=crop",
  },
  {
    caption: "Material Selection",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1800&auto=format&fit=crop",
  },
];

export const MILESTONES = [
  { year: "2020", event: "Founded by Abul Kalam Bhuiyan" },
  { year: "2021", event: "Opened the Agrabad showroom" },
  { year: "2024-25", event: "Exhibited at the International Furniture Fair, Chattogram" },
  { year: "2025", event: "Became a member of the Chamber of Commerce" },
  { year: "2026", event: "Received nationwide BFIOA recognition" },
];

// "Make It Yours" configurator
export const MATERIALS = [
  { id: "teak", label: "Solid Teak", swatch: "#8A6238", image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1600&auto=format&fit=crop" },
  { id: "leather", label: "Italian Leather", swatch: "#5C3A28", image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1600&auto=format&fit=crop" },
  { id: "fabric", label: "Premium Fabric", swatch: "#B7A78E", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1600&auto=format&fit=crop" },
  { id: "marble", label: "Marble", swatch: "#D8D3C8", image: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=1600&auto=format&fit=crop" },
  { id: "brass", label: "Aged Brass", swatch: "#B08D57", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop" },
];

export const FINISHES = ["Natural", "Walnut", "Dark Wood", "Custom"];

export const CONFIGURATIONS = ["2-Seater", "3-Seater", "L-Shape", "Custom"];

// Before -> After transformation slider
export const TRANSFORMATION = {
  before: {
    label: "Empty Space",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop",
  },
  after: {
    label: "Heaven Interior",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
  },
};

// Consultation flow
export const DESIGN_TYPES = ["Living Room", "Bedroom", "Dining", "Office", "Full Interior"];
export const DESIGN_STYLES = ["Modern", "Classic", "Minimal", "Luxury", "Custom"];
export const BUDGET_RANGES = ["Under ৳1 Lakh", "৳1–3 Lakh", "৳3–6 Lakh", "৳6 Lakh+", "Not sure yet"];
