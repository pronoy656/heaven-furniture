"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_PRODUCTS, Product } from "@/lib/products";

export default function DealsOfTheDay() {
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [cartToast, setCartToast] = useState<string | null>(null);

  // Dynamic Live Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19,
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
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = [
    ALL_PRODUCTS[1], // Boucle Chair
    ALL_PRODUCTS[2], // Verona Dining Table
    ALL_PRODUCTS[0], // Haven Modular Sofa
  ];

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
    <section id="deals" className="py-16 sm:py-20 lg:py-28 bg-[#FAF9F5] border-t border-neutral-200/70 relative overflow-hidden">
      
      {/* Background radial atmosphere */}
      <div 
        className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(229, 168, 59, 0.2) 0%, rgba(250, 249, 245, 0) 70%)"
        }}
      />

      {/* Floating Toast Notification */}
      {cartToast && (
        <div className="fixed bottom-8 right-6 z-50 bg-[#163A2B] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 border border-emerald-500/30">
          <span className="text-base text-[#E5A83B] font-bold">✓</span>
          <span className="text-sm font-semibold">{cartToast}</span>
        </div>
      )}

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* ================= SECTION HEADER WITH BESPOKE LUXURY COUNTDOWN ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-2.5">
              <span>✦</span>
              <span>LIMITED ARTISAN BATCH</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-[1.12]">
              Deals of the <span className="text-[#163A2B] font-medium">Day</span>
            </h2>
            
            <p className="mt-2 text-xs sm:text-sm text-[#5D6B64] leading-relaxed max-w-lg">
              Exclusive handcrafted showroom creations available at special promotional prices for a limited time.
            </p>
          </div>

          {/* Bespoke Horology-Inspired Atelier Countdown Pod */}
          <div className="inline-flex items-center gap-2.5 sm:gap-4 bg-[#163A2B] text-white px-3 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-[0_10px_28px_rgba(22,58,43,0.18)] border border-emerald-800/40 self-start lg:self-auto shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2 pr-2.5 sm:pr-4 border-r border-emerald-700/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5A83B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5A83B]"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-emerald-100/90 whitespace-nowrap">
                Ends In
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2.5 font-mono">
              {/* Hours */}
              <div className="flex items-baseline gap-0.5">
                <span className="text-sm sm:text-lg font-bold text-white tracking-tight">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-300/80 uppercase">h</span>
              </div>
              <span className="text-emerald-500/60 text-xs font-bold">:</span>

              {/* Mins */}
              <div className="flex items-baseline gap-0.5">
                <span className="text-sm sm:text-lg font-bold text-white tracking-tight">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-300/80 uppercase">m</span>
              </div>
              <span className="text-emerald-500/60 text-xs font-bold">:</span>

              {/* Secs */}
              <div className="flex items-baseline gap-0.5">
                <span className="text-sm sm:text-lg font-bold text-[#E5A83B] tracking-tight">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-[#E5A83B]/90 uppercase">s</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3 ULTRA-PREMIUM DEALS CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {dealProducts.map((deal) => {
            const isFav = wishlist[deal.id];
            return (
              <div
                key={deal.id}
                className="group relative bg-white rounded-[24px] sm:rounded-[28px] border border-neutral-200/90 p-3.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(22,58,43,0.12)] hover:border-[#163A2B]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image Container with Clean Separated Wishlist Button */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F5F7] border border-neutral-100">
                  <Link href={`/shop/${deal.id}`} className="absolute inset-0 z-0">
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  </Link>

                  {/* Discount Badge */}
                  <span className="absolute top-3 left-3 bg-[#163A2B] text-[#E5A83B] text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
                    {deal.discount}
                  </span>

                  {/* High-Visibility Favorite / Wishlist Action */}
                  <button
                    type="button"
                    onClick={(e) => toggleWishlist(e, deal.id)}
                    className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-90 cursor-pointer border border-neutral-200/80 ${
                      isFav
                        ? "text-red-500 bg-red-50 border-red-200"
                        : "text-neutral-700 hover:text-red-500 hover:bg-neutral-50"
                    }`}
                    aria-label="Save to wishlist"
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

                  {/* Solid Wood Guarantee Pill */}
                  <div className="absolute bottom-2.5 left-2.5 bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-medium flex items-center gap-1 z-10 pointer-events-none">
                    <span className="text-[#E5A83B]">✦</span>
                    <span>Solid Hardwood Frame</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="pt-3 sm:pt-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                      {deal.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-[#E5A83B]">★</span>
                      <span className="font-bold text-neutral-800">{deal.rating}</span>
                      <span className="text-neutral-400 text-[11px]">({deal.reviews})</span>
                    </div>
                  </div>

                  <Link href={`/shop/${deal.id}`}>
                    <h3 className="font-bold text-sm sm:text-base md:text-[1.1rem] text-neutral-900 leading-snug group-hover:text-[#163A2B] transition-colors line-clamp-1">
                      {deal.name}
                    </h3>
                  </Link>

                  {/* Subtitle hidden on mobile to keep cards compact & sleek */}
                  <p className="hidden sm:block text-xs text-neutral-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {deal.description}
                  </p>

                  {/* Stock Inventory Progress */}
                  <div className="mt-3 pt-3 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
                      <span>Limited Batch Allocation:</span>
                      <span className="font-bold text-[#163A2B]">Only 3 left</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-[#163A2B] to-[#E5A83B] rounded-full" />
                    </div>
                  </div>

                  {/* Pricing and Add to Cart Area */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-xl sm:text-2xl text-[#163A2B]">
                          ${deal.price.toLocaleString()}
                        </span>
                        {deal.originalPrice && (
                          <span className="text-xs sm:text-sm text-neutral-400 line-through">
                            ${deal.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-neutral-400">Free In-Home Setup</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/shop/${deal.id}`}
                        className="px-3.5 py-2 rounded-full border border-neutral-300 hover:border-neutral-400 active:scale-95 text-neutral-700 text-xs font-semibold transition-all"
                      >
                        Details
                      </Link>
                      
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(e, deal)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#163A2B] hover:bg-[#0f281e] active:scale-95 text-white text-xs font-bold transition-all shadow hover:-translate-y-0.5 cursor-pointer"
                        aria-label={`Add ${deal.name} to cart`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
