"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_PRODUCTS, Product } from "@/lib/products";

export default function PopularProducts() {
  const [cartToast, setCartToast] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (e: React.MouseEvent, prod: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setCartToast(`Added "${prod.name}" to your shopping bag!`);
    setTimeout(() => setCartToast(null), 3000);
  };

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-28 bg-white border-t border-neutral-200/60 relative overflow-hidden">
      
      {/* Floating Toast Notification */}
      {cartToast && (
        <div className="fixed bottom-8 right-6 z-50 bg-[#163A2B] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 border border-emerald-500/30">
          <span className="text-base text-[#E5A83B] font-bold">✓</span>
          <span className="text-sm font-semibold">{cartToast}</span>
        </div>
      )}

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        {/* ================= SECTION HEADER WITH HELPER SUBTITLE ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span>✦</span>
              <span>SIGNATURE CREATIONS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-tight">
              Featured Handcrafted <span className="text-[#163A2B] font-medium">Furniture</span>
            </h2>

            {/* Helper Subtitle */}
            <p className="mt-3 text-xs sm:text-sm text-[#5D6B64] leading-relaxed max-w-xl">
              Discover our most-loved heirloom pieces, individually crafted from 100% seasoned hardwoods, precision mortise-and-tenon joinery, and tailored for modern spaces.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#163A2B] hover:text-[#0f281e] group self-start md:self-auto border border-neutral-200 hover:border-[#163A2B] px-5 py-2.5 rounded-full transition-all hover:bg-[#EAF2ED]/50"
          >
            <span>Explore Complete Catalog</span>
            <span className="group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
          </Link>
        </div>

        {/* ================= PRODUCTS GRID (Exactly 8 Handcrafted Pieces) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {ALL_PRODUCTS.slice(0, 8).map((prod) => {
            const isFav = wishlist[prod.id];
            return (
              <div
                key={prod.id}
                className="group flex flex-col bg-[#FAF9F5] rounded-[26px] p-4 border border-neutral-200/80 hover:shadow-xl hover:border-[#163A2B]/30 hover:bg-white transition-all duration-300 justify-between"
              >
                {/* Product Thumbnail Container -> Links to Product Details */}
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-4 shadow-inner border border-neutral-100">
                    <Link href={`/shop/${prod.id}`} className="absolute inset-0 z-0">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </Link>

                    {/* Badge if available */}
                    {prod.badge && (
                      <span className="absolute top-3 left-3 bg-[#163A2B] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm z-10 pointer-events-none">
                        {prod.badge}
                      </span>
                    )}

                    {/* High-Visibility Favorite / Wishlist Action Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(e, prod.id)}
                      className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer border border-neutral-200/80 ${
                        isFav
                          ? "text-red-500 bg-red-50 border-red-200"
                          : "text-neutral-700 hover:text-red-500 hover:bg-neutral-50"
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <svg
                        className="w-4 h-4"
                        fill={isFav ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Product Metadata */}
                  <div className="flex flex-col px-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      {prod.categoryLabel}
                    </span>

                    <Link href={`/shop/${prod.id}`}>
                      <h3 className="font-semibold text-sm sm:text-base text-[#111815] group-hover:text-[#163A2B] transition-colors leading-snug line-clamp-1">
                        {prod.name}
                      </h3>
                    </Link>

                    {/* Wood/Material Tag */}
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                      {prod.woodType}
                    </p>
                  </div>
                </div>

                {/* Price and Action Area with Add to Cart */}
                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between px-1">
                  <div>
                    <span className="text-base sm:text-lg font-bold text-[#163A2B]">
                      ${prod.price.toLocaleString()}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through block -mt-1">
                        ${prod.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(e, prod)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    aria-label={`Add ${prod.name} to cart`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
