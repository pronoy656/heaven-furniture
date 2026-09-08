"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import { ALL_PRODUCTS, Product } from "@/lib/products";
import { SITE } from "@/lib/content";

const FINISHES = [
  { name: "Natural Honey Teak", color: "#B88746" },
  { name: "Rich Walnut", color: "#5C3A21" },
  { name: "Smoked Dark Oak", color: "#2B2118" },
  { name: "Raw Nordic Matte", color: "#D1B894" },
];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const product = ALL_PRODUCTS.find((p) => p.id === resolvedParams.id);

  const [activeImage, setActiveImage] = useState<string>(product?.image || "");
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0].name);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "craft" | "delivery" | "warranty">("specs");
  const [cartToast, setCartToast] = useState<string | null>(null);

  if (!product) {
    notFound();
  }

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const relatedProducts = ALL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    setCartToast(`Added ${quantity}x "${product.name}" (${selectedFinish}) to your shopping bag!`);
    setTimeout(() => setCartToast(null), 3500);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-neutral-800">
      <NavBar />

      {/* Floating Toast Notification */}
      {cartToast && (
        <div className="fixed bottom-8 right-6 z-50 bg-[#163A2B] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3.5 animate-in fade-in slide-in-from-bottom-4 border border-emerald-500/30">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-[#E5A83B] flex items-center justify-center font-bold">
            ✓
          </div>
          <div>
            <p className="text-sm font-semibold">{cartToast}</p>
            <p className="text-xs text-neutral-300">Proceed to checkout or chat with us for custom sizing.</p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-36 pb-20">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#163A2B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#163A2B] transition-colors">Shop</Link>
          <span>/</span>
          <span className="capitalize">{product.categoryLabel}</span>
          <span>/</span>
          <span className="font-semibold text-neutral-900">{product.name}</span>
        </nav>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* ================= LEFT: IMAGE GALLERY (7 Cols) ================= */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Featured Image Box */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-white border border-neutral-200/80 shadow-md group">
              <Image
                src={activeImage || product.image}
                alt={product.name}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 700px"
              />

              {/* Discount / Badge */}
              {product.discount && (
                <span className="absolute top-4 left-4 bg-[#163A2B] text-[#E5A83B] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                  {product.discount}
                </span>
              )}

              {/* 100% Solid Wood Seal */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 shadow">
                <span className="text-[#E5A83B]">✦</span>
                <span>100% Seasoned Hardwood</span>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => {
                const isCurrent = (activeImage || product.image) === img;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      isCurrent
                        ? "border-[#163A2B] ring-2 ring-[#163A2B]/20 shadow-md"
                        : "border-neutral-200/90 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} angle ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT: PRODUCT DETAILS & PURCHASE (5 Cols) ================= */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Category & Rating */}
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#163A2B] bg-[#EAF2ED] px-3 py-1 rounded-full border border-emerald-800/10">
                {product.categoryLabel}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                <span className="text-[#E5A83B] text-sm">★★★★★</span>
                <span className="font-bold text-neutral-900">{product.rating}</span>
                <span className="text-neutral-400">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#111815] font-normal tracking-tight leading-tight mt-1">
              {product.name}
            </h1>

            {/* Wood & Material Subtitle */}
            <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-2">
              {product.woodType} • {product.material}
            </p>

            {/* Pricing Area */}
            <div className="flex items-baseline gap-3 mt-4 pt-3 border-t border-neutral-200/70 w-full">
              <span className="font-body font-bold text-3xl sm:text-4xl text-[#163A2B] tracking-tight">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-neutral-400 line-through font-normal">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.discount && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full ml-auto">
                  Save ${(product.originalPrice! - product.price).toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Finish Selection */}
            <div className="mt-6 w-full">
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Select Hardwood Finish:
                </label>
                <span className="text-xs font-semibold text-[#163A2B]">{selectedFinish}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {FINISHES.map((f) => {
                  const isSelected = selectedFinish === f.name;
                  return (
                    <button
                      key={f.name}
                      type="button"
                      onClick={() => setSelectedFinish(f.name)}
                      className={`group relative flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl border text-xs font-medium transition-all ${
                        isSelected
                          ? "border-[#163A2B] bg-[#EAF2ED] text-[#163A2B] shadow-sm font-semibold"
                          : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: f.color }}
                      />
                      <span>{f.name.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
              {/* Quantity Counter */}
              <div className="flex items-center justify-between border border-neutral-300 bg-white rounded-full px-4 py-2.5 sm:w-36 flex-shrink-0 shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-neutral-500 hover:text-neutral-900 font-bold text-base px-2"
                >
                  -
                </button>
                <span className="font-bold text-sm text-neutral-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-neutral-500 hover:text-neutral-900 font-bold text-base px-2"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-grow inline-flex items-center justify-center gap-2.5 rounded-full bg-[#163A2B] hover:bg-[#0f281e] active:scale-98 text-white py-3.5 px-6 text-sm font-bold shadow-lg shadow-[#163A2B]/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span>Add to Shopping Bag</span>
              </button>
            </div>

            {/* Custom Consultation Direct WhatsApp */}
            <div className="mt-3.5 w-full">
              <a
                href={`${SITE.whatsappHref}?text=${encodeURIComponent(
                  `Hi Heaven Furniture! I want to inquire about custom dimensions and order for "${product.name}".`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white border border-neutral-300 hover:border-[#25D366] text-neutral-800 hover:text-[#128C7E] text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Request Custom Dimensions via WhatsApp</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="mt-8 pt-6 border-t border-neutral-200/70 w-full space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-neutral-600">
                <span className="text-[#163A2B] font-bold">✔</span>
                <span><strong>10-Year Structural Warranty:</strong> 100% Solid Teak frame protection.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600">
                <span className="text-[#163A2B] font-bold">✔</span>
                <span><strong>Complimentary White-Glove Setup:</strong> Free in Chattogram &amp; Dhaka.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600">
                <span className="text-[#163A2B] font-bold">✔</span>
                <span><strong>Doorstep Inspection Guarantee:</strong> 100% satisfaction before handover.</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= TABS: SPECS, CRAFTSMANSHIP, DELIVERY ================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200/80">
          <div className="flex items-center gap-4 sm:gap-8 border-b border-neutral-200/80 overflow-x-auto pb-4">
            <button
              onClick={() => setActiveTab("specs")}
              className={`text-sm sm:text-base font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === "specs"
                  ? "border-[#163A2B] text-[#163A2B]"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Specifications &amp; Dimensions
            </button>
            <button
              onClick={() => setActiveTab("craft")}
              className={`text-sm sm:text-base font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === "craft"
                  ? "border-[#163A2B] text-[#163A2B]"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Artisan Craftsmanship
            </button>
            <button
              onClick={() => setActiveTab("delivery")}
              className={`text-sm sm:text-base font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === "delivery"
                  ? "border-[#163A2B] text-[#163A2B]"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              White-Glove Delivery
            </button>
            <button
              onClick={() => setActiveTab("warranty")}
              className={`text-sm sm:text-base font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === "warranty"
                  ? "border-[#163A2B] text-[#163A2B]"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              10-Year Warranty
            </button>
          </div>

          <div className="py-8">
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl text-sm">
                <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Dimensions:</span>
                    <span className="font-semibold text-neutral-900">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Primary Hardwood:</span>
                    <span className="font-semibold text-neutral-900">{product.woodType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Moisture Content:</span>
                    <span className="font-semibold text-neutral-900">8-10% Kiln-Dried</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Upholstery:</span>
                    <span className="font-semibold text-neutral-900">{product.material}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Production Lead Time:</span>
                    <span className="font-semibold text-neutral-900">{product.leadTime}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Customization:</span>
                    <span className="font-semibold text-[#163A2B]">Full Bespoke Available</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "craft" && (
              <div className="max-w-3xl space-y-4 text-sm text-neutral-600 leading-relaxed">
                <p>
                  Every piece is built from start to finish inside our Agrabad workshop. Our seasoned master carpenters utilize time-honored mortise-and-tenon wood joinery — avoiding quick fasteners or cheap composite cores.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                  {product.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "delivery" && (
              <div className="max-w-3xl space-y-3 text-sm text-neutral-600 leading-relaxed">
                <p>
                  We provide White-Glove delivery throughout Bangladesh. Our logistics team handles uncrating, room-of-choice placement, and complete professional assembly.
                </p>
                <p>
                  Free delivery and home assembly apply to all orders across Chattogram and Dhaka metro areas.
                </p>
              </div>
            )}

            {activeTab === "warranty" && (
              <div className="max-w-3xl space-y-3 text-sm text-neutral-600 leading-relaxed">
                <p>
                  Your investment is protected by our comprehensive 10-Year Structural Frame Guarantee. We cover any internal wood joinery or structural integrity issues under domestic use with complimentary in-home repair or replacement.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ================= RELATED HANDCRAFTED PIECES ================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#163A2B]">Complete The Look</span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#111815] font-normal tracking-tight mt-1">
                Complementary Handcrafted Pieces
              </h3>
            </div>
            <Link
              href="/shop"
              className="text-xs sm:text-sm font-semibold text-[#163A2B] hover:underline"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/shop/${rel.id}`}
                className="group bg-white rounded-3xl p-4 border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-[#163A2B]/30 transition-all"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF9F5] mb-4">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="350px"
                  />
                  {rel.discount && (
                    <span className="absolute top-3 left-3 bg-[#163A2B] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {rel.discount}
                    </span>
                  )}
                </div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                  {rel.categoryLabel}
                </span>
                <h4 className="font-semibold text-neutral-900 group-hover:text-[#163A2B] transition-colors leading-snug">
                  {rel.name}
                </h4>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-100">
                  <span className="font-bold text-[#163A2B] text-base">
                    ${rel.price.toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-[#163A2B] group-hover:translate-x-1 transition-transform">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
