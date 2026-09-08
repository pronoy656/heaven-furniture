"use client";

import { useState, useMemo, Suspense, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import { ALL_PRODUCTS, Product } from "@/lib/products";

// Category Definitions
const CATEGORY_FILTERS = [
  { id: "all", label: "All Collections", count: ALL_PRODUCTS.length },
  { id: "sofas", label: "Sofas", count: ALL_PRODUCTS.filter((p) => p.itemType === "sofas").length },
  { id: "beds", label: "Beds", count: ALL_PRODUCTS.filter((p) => p.itemType === "beds").length },
  { id: "dining", label: "Dining Sets", count: ALL_PRODUCTS.filter((p) => p.itemType === "dining").length },
  { id: "chairs", label: "Chairs", count: ALL_PRODUCTS.filter((p) => p.itemType === "chairs").length },
  { id: "tables", label: "Tables", count: ALL_PRODUCTS.filter((p) => p.itemType === "tables").length },
  { id: "storage", label: "Storage", count: ALL_PRODUCTS.filter((p) => p.itemType === "storage").length },
  { id: "outdoor", label: "Outdoor", count: ALL_PRODUCTS.filter((p) => p.itemType === "outdoor").length },
  { id: "office", label: "Office", count: ALL_PRODUCTS.filter((p) => p.itemType === "office").length },
];

// Material Filters
const MATERIAL_FILTERS = [
  { id: "wood", label: "Solid Hardwood", count: ALL_PRODUCTS.filter((p) => p.materialCategory === "wood").length },
  { id: "fabric", label: "Performance Fabric", count: ALL_PRODUCTS.filter((p) => p.materialCategory === "fabric").length },
  { id: "leather", label: "Italian Leather", count: ALL_PRODUCTS.filter((p) => p.materialCategory === "leather").length },
  { id: "metal", label: "Architectural Steel", count: ALL_PRODUCTS.filter((p) => p.materialCategory === "metal").length },
  { id: "rattan", label: "Natural Cane Rattan", count: ALL_PRODUCTS.filter((p) => p.materialCategory === "rattan").length },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured Pieces" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "name-asc", label: "Alphabetical: A to Z" },
];

// 12 products per page
const ITEMS_PER_PAGE = 12;

function ShopInnerContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  // Multi-select filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory && initialCategory !== "all" ? [initialCategory] : []
  );
  const [maxPrice, setMaxPrice] = useState<number>(3500);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("featured");

  // Filter Popover Dropdown States (for the horizontal row)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);

  // User feedback
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [cartToast, setCartToast] = useState<string | null>(null);

  const categoryRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const catalogTopRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
        setIsPriceOpen(false);
      }
      if (materialRef.current && !materialRef.current.contains(event.target as Node)) {
        setIsMaterialOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset to page 1 on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, maxPrice, selectedMaterials, sortBy]);

  const toggleCategory = (catId: string) => {
    if (catId === "all") {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  const toggleMaterial = (matId: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(matId) ? prev.filter((id) => id !== matId) : [...prev, matId]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(3500);
    setSelectedMaterials([]);
    setSortBy("featured");
    setCurrentPage(1);
  };

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

  const scrollToCatalog = () => {
    if (catalogTopRef.current) {
      catalogTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToCatalog();
  };

  const activeFilterCount =
    selectedCategories.length +
    (maxPrice < 3500 ? 1 : 0) +
    selectedMaterials.length;

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(prod.itemType)) {
        return false;
      }
      // Price filter
      if (prod.price > maxPrice) {
        return false;
      }
      // Material filter
      if (
        selectedMaterials.length > 0 &&
        prod.materialCategory &&
        !selectedMaterials.includes(prod.materialCategory)
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [selectedCategories, maxPrice, selectedMaterials, sortBy]);

  // Pagination calculation with 12 items per page
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const paginatedProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const currentSortLabel = SORT_OPTIONS.find((s) => s.id === sortBy)?.label || "Featured Pieces";

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-800 flex flex-col">
      <NavBar />

      {/* Floating Toast Notification */}
      {cartToast && (
        <div className="fixed bottom-8 right-6 z-50 bg-[#163A2B] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 border border-emerald-500/30">
          <span className="text-base text-[#E5A83B] font-bold">✓</span>
          <span className="text-sm font-semibold">{cartToast}</span>
        </div>
      )}

      {/* ================= REFINED HERO SECTION WITH SOFT BALANCED OVERLAY ================= */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-22 overflow-hidden">
        
        {/* Lifestyle Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop"
            alt="Handcrafted Solid Wood Living Space"
            fill
            priority
            className="object-cover object-center scale-102"
          />
          {/* Gentle, soft transparent gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-[#163A2B]/20 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300/90 mb-3.5 tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#E5A83B] font-bold">Handcrafted Catalog</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#E5A83B] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-md">
              <span>✦</span>
              <span>CHATTOGRAM HEIRLOOM WORKSHOP</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.14]">
              Handcrafted Solid Wood <span className="text-[#E5A83B] italic font-serif">Furniture</span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-neutral-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-light">
              Every creation is built from seasoned Grade-A Chittagong Teak, Burma Teak & White Oak by master craftsmen. Custom-dimensioned and guaranteed for generations.
            </p>

            {/* Key Feature Badges */}
            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/95">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/30 backdrop-blur-md border border-white/20">
                <span className="text-[#E5A83B] font-bold">✦</span>
                <span className="font-medium">100% Solid Seasoned Timber</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/30 backdrop-blur-md border border-white/20">
                <span className="text-[#E5A83B] font-bold">✦</span>
                <span className="font-medium">10-Year Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/30 backdrop-blur-md border border-white/20">
                <span className="text-[#E5A83B] font-bold">✦</span>
                <span className="font-medium">Free White-Glove Delivery</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HORIZONTAL FILTER BAR DIRECTLY UNDER HERO (NATURAL SCROLL) ================= */}
      <section ref={catalogTopRef} className="bg-white border-b border-neutral-200/90 transition-all">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            
            {/* Left Controls: Horizontal Filter Dropdowns Row */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              
              {/* Filter Label with Active Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-neutral-200/80 text-xs font-bold text-neutral-800">
                <svg className="w-3.5 h-3.5 text-[#163A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#163A2B] text-white text-[9px] font-bold flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </div>

              {/* 1. Category Filter Dropdown */}
              <div className="relative" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsCategoryOpen(!isCategoryOpen);
                    setIsPriceOpen(false);
                    setIsMaterialOpen(false);
                    setIsSortOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
                    selectedCategories.length > 0 || isCategoryOpen
                      ? "bg-[#EAF2ED] border-[#163A2B] text-[#163A2B]"
                      : "bg-[#FAF9F5] hover:bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                  }`}
                >
                  <span>Category</span>
                  {selectedCategories.length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-[#163A2B] text-white text-[9px] font-bold flex items-center justify-center">
                      {selectedCategories.length}
                    </span>
                  )}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Category Dropdown Popover */}
                {isCategoryOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl border border-neutral-200 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100">
                      <span className="text-xs font-bold text-neutral-900">Select Category</span>
                      {selectedCategories.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedCategories([])}
                          className="text-[11px] text-[#163A2B] font-semibold hover:underline"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                    <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                      {CATEGORY_FILTERS.filter((c) => c.id !== "all").map((cat) => {
                        const isChecked = selectedCategories.includes(cat.id);
                        return (
                          <label
                            key={cat.id}
                            onClick={() => toggleCategory(cat.id)}
                            className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-colors ${
                              isChecked ? "bg-[#EAF2ED] text-[#163A2B]" : "hover:bg-neutral-50 text-neutral-700"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
                                   isChecked
                                    ? "bg-[#163A2B] border border-[#163A2B] text-white shadow-xs"
                                    : "border border-neutral-300 bg-white"
                                }`}
                              >
                                {isChecked && (
                                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-xs font-medium">{cat.label}</span>
                            </div>
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                              isChecked ? "bg-[#163A2B] text-white" : "bg-neutral-100 text-neutral-400"
                            }`}>
                              {cat.count}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Price Range Filter Dropdown */}
              <div className="relative" ref={priceRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsPriceOpen(!isPriceOpen);
                    setIsCategoryOpen(false);
                    setIsMaterialOpen(false);
                    setIsSortOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
                    maxPrice < 3500 || isPriceOpen
                      ? "bg-[#EAF2ED] border-[#163A2B] text-[#163A2B]"
                      : "bg-[#FAF9F5] hover:bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                  }`}
                >
                  <span>{maxPrice < 3500 ? `Up to $${maxPrice}` : "Price Range"}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isPriceOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Price Dropdown Popover */}
                {isPriceOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl border border-neutral-200 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-neutral-100">
                      <span className="text-xs font-bold text-neutral-900">Budget Limit</span>
                      <span className="text-xs font-bold text-[#163A2B] bg-[#EAF2ED] px-2 py-0.5 rounded-full">
                        ${maxPrice.toLocaleString()}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="500"
                      max="3500"
                      step="50"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#163A2B]"
                    />

                    <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-400 mt-2">
                      <span>$500</span>
                      <span>$3,500+</span>
                    </div>

                    {/* Quick Budget Presets */}
                    <div className="grid grid-cols-3 gap-1.5 mt-3 pt-3 border-t border-neutral-100">
                      {[1000, 2000, 3500].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setMaxPrice(preset)}
                          className={`py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                            maxPrice === preset
                              ? "bg-[#163A2B] text-white border-[#163A2B]"
                              : "bg-[#FAF9F5] text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                          }`}
                        >
                          {preset === 3500 ? "Any Price" : `< $${preset}`}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Material Filter Dropdown */}
              <div className="relative" ref={materialRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsMaterialOpen(!isMaterialOpen);
                    setIsCategoryOpen(false);
                    setIsPriceOpen(false);
                    setIsSortOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
                    selectedMaterials.length > 0 || isMaterialOpen
                      ? "bg-[#EAF2ED] border-[#163A2B] text-[#163A2B]"
                      : "bg-[#FAF9F5] hover:bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                  }`}
                >
                  <span>Material</span>
                  {selectedMaterials.length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-[#163A2B] text-white text-[9px] font-bold flex items-center justify-center">
                      {selectedMaterials.length}
                    </span>
                  )}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isMaterialOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Material Dropdown Popover */}
                {isMaterialOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl border border-neutral-200 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100">
                      <span className="text-xs font-bold text-neutral-900">Select Timber & Finish</span>
                      {selectedMaterials.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedMaterials([])}
                          className="text-[11px] text-[#163A2B] font-semibold hover:underline"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                    <div className="space-y-1">
                      {MATERIAL_FILTERS.map((mat) => {
                        const isChecked = selectedMaterials.includes(mat.id);
                        return (
                          <label
                            key={mat.id}
                            onClick={() => toggleMaterial(mat.id)}
                            className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-colors ${
                              isChecked ? "bg-[#EAF2ED] text-[#163A2B]" : "hover:bg-neutral-50 text-neutral-700"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
                                  isChecked
                                    ? "bg-[#163A2B] border border-[#163A2B] text-white shadow-xs"
                                    : "border border-neutral-300 bg-white"
                                }`}
                              >
                                {isChecked && (
                                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-xs font-medium">{mat.label}</span>
                            </div>
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                              isChecked ? "bg-[#163A2B] text-white" : "bg-neutral-100 text-neutral-400"
                            }`}>
                              {mat.count}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Clear All Action */}
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-neutral-500 hover:text-[#163A2B] hover:underline px-2 py-1 cursor-pointer transition-colors"
                >
                  Clear All ({activeFilterCount})
                </button>
              )}

            </div>

            {/* Right Controls: Item Count + Custom Sort Dropdown */}
            <div className="flex items-center gap-3 justify-between lg:justify-end">
              
              <span className="text-xs text-neutral-500 font-medium">
                <strong>{paginatedProducts.length}</strong> of <strong>{filteredProducts.length}</strong> Pieces
              </span>

              {/* Sort Dropdown */}
              <div className="relative" ref={sortRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsSortOpen(!isSortOpen);
                    setIsCategoryOpen(false);
                    setIsPriceOpen(false);
                    setIsMaterialOpen(false);
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF9F5] hover:bg-white border border-neutral-200 hover:border-neutral-300 text-xs font-semibold text-neutral-800 transition-all shadow-2xs cursor-pointer"
                >
                  <span className="text-neutral-400 font-normal">Sort:</span>
                  <span className="text-[#163A2B] font-bold">{currentSortLabel}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 ${isSortOpen ? "rotate-180 text-[#163A2B]" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-neutral-200 shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setSortBy(opt.id);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          sortBy === opt.id
                            ? "bg-[#EAF2ED] text-[#163A2B] font-bold"
                            : "text-neutral-700 hover:bg-neutral-50"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {sortBy === opt.id && <span className="text-[#163A2B] font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Active Filter Chips (if any) */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 text-xs pt-3 mt-3 border-t border-neutral-100">
              <span className="text-neutral-400 text-[11px] font-medium">Active:</span>
              {selectedCategories.map((catId) => (
                <span
                  key={catId}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF2ED] text-[#163A2B] font-semibold text-[11px]"
                >
                  {CATEGORY_FILTERS.find((c) => c.id === catId)?.label}
                  <button onClick={() => toggleCategory(catId)} className="hover:text-red-600 font-bold ml-0.5 cursor-pointer">✕</button>
                </span>
              ))}
              {maxPrice < 3500 && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF2ED] text-[#163A2B] font-semibold text-[11px]">
                  Up to ${maxPrice}
                  <button onClick={() => setMaxPrice(3500)} className="hover:text-red-600 font-bold ml-0.5 cursor-pointer">✕</button>
                </span>
              )}
              {selectedMaterials.map((matId) => (
                <span
                  key={matId}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF2ED] text-[#163A2B] font-semibold text-[11px]">
                  {MATERIAL_FILTERS.find((m) => m.id === matId)?.label}
                  <button onClick={() => toggleMaterial(matId)} className="hover:text-red-600 font-bold ml-0.5 cursor-pointer">✕</button>
                </span>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= FULL-WIDTH PRODUCT CATALOG (4 COLS / 12 PER PAGE) ================= */}
      <main className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-10 sm:py-12 flex-grow w-full">
        
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200 p-8 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="font-display text-xl text-neutral-900 font-semibold">No furniture matching your criteria</h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
              Try adjusting your category, price range, or material filter to discover available pieces.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#163A2B] hover:bg-[#0f281e] text-white text-xs font-semibold transition-all shadow cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            {/* 4-Column Full Width Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
              {paginatedProducts.map((prod) => {
                const isFav = wishlist[prod.id];
                return (
                  <div
                    key={prod.id}
                    className="group flex flex-col bg-white rounded-[26px] p-4 border border-neutral-200/80 hover:shadow-xl hover:border-[#163A2B]/30 transition-all duration-300 justify-between"
                  >
                    {/* Product Thumbnail Container -> Links to Product Details */}
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF9F5] mb-4 shadow-inner border border-neutral-100">
                        <Link href={`/shop/${prod.id}`} className="absolute inset-0 z-0">
                          <Image
                            src={prod.image}
                            alt={prod.name}
                            fill
                            className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          />
                        </Link>

                        {/* Badge if available */}
                        {prod.badge && (
                          <span className="absolute top-3 left-3 bg-[#163A2B] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-xs z-10 pointer-events-none">
                            {prod.badge}
                          </span>
                        )}

                        {/* Favorite / Wishlist Action Button */}
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
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between px-1">
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
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#163A2B] hover:bg-[#0f281e] active:scale-95 text-white text-xs font-semibold transition-all hover:shadow-md cursor-pointer"
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

            {/* ================= PAGINATION CONTROLS (12 PER PAGE) ================= */}
            {totalPages > 1 && (
              <div className="mt-12 pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <span className="text-xs text-neutral-500 font-medium order-2 sm:order-1">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of{" "}
                  {filteredProducts.length} pieces (Page {currentPage} of {totalPages})
                </span>

                <div className="flex items-center gap-1.5 order-1 sm:order-2">
                  {/* Previous Page Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-all cursor-pointer ${
                      currentPage === 1
                        ? "border-neutral-200 text-neutral-300 pointer-events-none"
                        : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 shadow-xs"
                    }`}
                  >
                    <span>&larr;</span>
                    <span>Previous</span>
                  </button>

                  {/* Numbered Page Buttons */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center border ${
                        currentPage === pageNum
                          ? "bg-[#163A2B] text-white border-[#163A2B] shadow-sm"
                          : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  {/* Next Page Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-all cursor-pointer ${
                      currentPage === totalPages
                        ? "border-neutral-200 text-neutral-300 pointer-events-none"
                        : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 shadow-xs"
                    }`}
                  >
                    <span>Next</span>
                    <span>&rarr;</span>
                  </button>
                </div>

              </div>
            )}
          </>
        )}

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF9F5] pt-36 text-center">Loading Handcrafted Catalog...</div>}>
      <ShopInnerContent />
    </Suspense>
  );
}
