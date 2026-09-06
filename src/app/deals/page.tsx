import Image from "next/image";
import Link from "next/link";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";

interface DealItem {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  salePrice: number;
  discount: string;
  image: string;
  leftInStock: number;
}

const DEALS: DealItem[] = [
  {
    id: "deal-sofa",
    name: "Haven Modular Linen Sofa (Olive Edition)",
    category: "Living Room",
    originalPrice: 2800,
    salePrice: 2190,
    discount: "Save $610",
    image: "/hero-living-room.jpg",
    leftInStock: 3,
  },
  {
    id: "deal-chair",
    name: "Modern Bouclé Lounge Chair",
    category: "Accent Seating",
    originalPrice: 1500,
    salePrice: 1250,
    discount: "Save $250",
    image: "/lounge-chair.jpg",
    leftInStock: 5,
  },
  {
    id: "deal-dining",
    name: "Verona Live-Edge Solid Teak Dining Set",
    category: "Dining",
    originalPrice: 3100,
    salePrice: 2450,
    discount: "Save $650",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
    leftInStock: 2,
  },
  {
    id: "deal-bed",
    name: "Aura Minimalist Platform Bed with Side Tables",
    category: "Bedroom",
    originalPrice: 2450,
    salePrice: 1890,
    discount: "Save $560",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop",
    leftInStock: 4,
  },
];

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-800 flex flex-col">
      <NavBar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-[#163A2B] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A83B] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Limited Time Seasonal Event
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal mt-3 tracking-tight">
              Exclusive Studio Deals
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
              Enjoy limited-run discounts on our most cherished showroom models and workshop floor creations.
            </p>
          </div>

          {/* Countdown Pill Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 flex items-center gap-4 text-center">
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold">04</span>
              <span className="block text-[10px] text-white/70 uppercase">Days</span>
            </div>
            <span className="text-xl font-light text-white/40">:</span>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold">18</span>
              <span className="block text-[10px] text-white/70 uppercase">Hours</span>
            </div>
            <span className="text-xl font-light text-white/40">:</span>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold">42</span>
              <span className="block text-[10px] text-white/70 uppercase">Mins</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Curated Bundles Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 mb-16 border border-neutral-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B] bg-[#EAF2ED] px-3 py-1 rounded-full">
              Full Suite Bundle
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#111815] font-normal mt-3 tracking-tight">
              The Complete Living Room Collection
            </h2>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              Includes the Haven Modular Sofa, Fluted Oak Round Table, and Bouclé Lounge Chair with matching velvet cushions.
            </p>
            <div className="flex items-baseline gap-3 mt-4">
              <span className="font-display text-3xl font-bold text-[#163A2B]">$4,190</span>
              <span className="text-sm text-neutral-400 line-through">$4,840</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                Save $650
              </span>
            </div>
          </div>

          <Link
            href="/contact?bundle=living-room"
            className="px-8 py-4 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md flex-shrink-0"
          >
            Claim Complete Bundle
          </Link>
        </div>

        {/* Individual Deals Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {DEALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-4 border border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute top-3 left-3 bg-[#E5A83B] text-neutral-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">
                  {item.discount}
                </span>
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-neutral-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                  Only {item.leftInStock} left
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-grow">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  {item.category}
                </span>
                <h3 className="font-body font-semibold text-base text-[#111815] mt-1 leading-snug">
                  {item.name}
                </h3>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 line-through">
                      ${item.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-lg font-bold text-[#163A2B]">
                      ${item.salePrice.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    href={`/shop?deal=${item.id}`}
                    className="px-4 py-2 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs font-semibold transition-colors"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
