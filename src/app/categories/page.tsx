import Image from "next/image";
import Link from "next/link";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";

interface CategoryShowcase {
  id: string;
  name: string;
  tagline: string;
  description: string;
  itemsCount: string;
  image: string;
  subcategories: string[];
}

const CATEGORIES_DATA: CategoryShowcase[] = [
  {
    id: "living",
    name: "Living Room Collection",
    tagline: "The Center of Warmth & Conversation",
    description:
      "Designed for slowing down and gathering. Every sofa and accent chair is anatomically shaped around how people sit, lounge, and socialize.",
    itemsCount: "120+ Pieces",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1600&auto=format&fit=crop",
    subcategories: ["Modular Sectionals", "Bouclé Accent Chairs", "Fluted Coffee Tables", "Solid Teak TV Consoles", "Display Shelving"],
  },
  {
    id: "bedroom",
    name: "Bedroom Suites",
    tagline: "Serene Sanctuaries for Rest",
    description:
      "Quiet, considered, and intimately personal. Platform beds with integrated floating nightstands, seamless wardrobes, and dressing tables.",
    itemsCount: "85+ Pieces",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    subcategories: ["Platform Bed Frames", "Upholstered Headboards", "Nightstands", "Walk-in Wardrobe Systems", "Dressing Mirrors"],
  },
  {
    id: "dining",
    name: "Dining & Hosting",
    tagline: "Tables Sized for Feasts and Memories",
    description:
      "A dining table cut for your specific dining room dimensions, not showroom floor presets. Solid hardwood tops that age gracefully across generations.",
    itemsCount: "64+ Pieces",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop",
    subcategories: ["Live-Edge Tables", "Modern Dining Chairs", "Fluted Credenzas", "Bar Counters & Stools", "Sideboards"],
  },
  {
    id: "office",
    name: "Executive & Study",
    tagline: "Focus, Elegance & Ergonomics",
    description:
      "Desks and modular shelving built with hidden cable routing and natural wood grain finishes to enhance productivity and calm.",
    itemsCount: "48+ Pieces",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    subcategories: ["Executive Desks", "Minimalist Study Tables", "Wall-to-Wall Bookshelves", "Ergonomic Desk Chairs"],
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-800 flex flex-col">
      <NavBar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-[#F3EFE8] border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B] bg-[#EAF2ED] px-3.5 py-1 rounded-full border border-[#D2E6DA]">
            Room Collections
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111815] font-normal mt-3 tracking-tight">
            Explore by Room
          </h1>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            From expansive family living spaces to quiet personal study nooks, explore our comprehensive collection of handmade furniture.
          </p>
        </div>
      </section>

      {/* Categories Showcase List */}
      <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {CATEGORIES_DATA.map((cat, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={cat.id}
              id={cat.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container */}
              <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-100 group">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#163A2B] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                    {cat.itemsCount}
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B]">
                  {cat.tagline}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#111815] font-normal mt-2 tracking-tight">
                  {cat.name}
                </h2>
                <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {cat.description}
                </p>

                {/* Subcategory Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.subcategories.map((sub) => (
                    <span
                      key={sub}
                      className="text-xs font-medium bg-white border border-neutral-200 px-3.5 py-1.5 rounded-full text-neutral-700"
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href={`/shop?category=${cat.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md"
                  >
                    <span>Browse {cat.name}</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
