"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Smooth, high-performance scroll detection with requestAnimationFrame & hysteresis
  useEffect(() => {
    let ticking = false;
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          // If the user starts scrolling while menu is expanded, collapse it smoothly
          if (Math.abs(currentY - lastScrollY) > 6) {
            setExpanded(false);
          }
          lastScrollY = currentY;

          setScrolled((prev) => {
            // Hysteresis: collapse past 50px, expand to full top view when near top (< 20px)
            if (!prev && currentY > 50) return true;
            if (prev && currentY < 20) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close expanded navbar on route change
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  // Click outside to collapse expanded navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded]);

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "Deals", href: "/deals" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Curated Luxury Collection Mega Menu
  const megaMenuCategories = [
    {
      id: "living",
      title: "Living Sanctuary",
      href: "/shop?category=sofas",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop",
      links: [
        { label: "Modular Sectional Sofas", href: "/shop?category=sofas" },
        { label: "Bouclé Accent Chairs", href: "/shop?category=chairs" },
        { label: "Fluted Center Tables", href: "/shop?category=tables" },
        { label: "Solid Wood TV Consoles", href: "/shop?category=storage" },
      ],
    },
    {
      id: "bedroom",
      title: "Master Bedroom",
      href: "/shop?category=beds",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=400&auto=format&fit=crop",
      links: [
        { label: "King Platform Beds", href: "/shop?category=beds" },
        { label: "Floating Nightstands", href: "/shop?category=storage" },
        { label: "Fluted Shegun Wardrobes", href: "/shop?category=storage" },
        { label: "Vanity Dressing Units", href: "/shop?category=tables" },
      ],
    },
    {
      id: "dining",
      title: "Dining & Banquets",
      href: "/shop?category=dining",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=400&auto=format&fit=crop",
      links: [
        { label: "Live-Edge Dining Tables", href: "/shop?category=dining" },
        { label: "Ergonomic Teak Chairs", href: "/shop?category=chairs" },
        { label: "Kitchen Island Barstools", href: "/shop?category=chairs" },
        { label: "Buffet Credenzas", href: "/shop?category=storage" },
      ],
    },
    {
      id: "bespoke",
      title: "Executive & Bespoke",
      href: "/shop?category=office",
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400&auto=format&fit=crop",
      links: [
        { label: "Executive Teak Desks", href: "/shop?category=office" },
        { label: "Acoustic Bookshelves", href: "/shop?category=storage" },
        { label: "Commercial & Restaurant", href: "/categories" },
        { label: "3D Custom Consultation", href: "/contact" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
      <div
        ref={navContainerRef}
        className={`mx-auto pointer-events-auto transform-gpu transition-[max-width,padding,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/95 backdrop-blur-md rounded-[24px] sm:rounded-[32px] border border-neutral-200/85 overflow-hidden ${
          expanded
            ? "max-w-[1400px] shadow-[0_24px_60px_rgba(0,0,0,0.14)] bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5"
            : scrolled
            ? "max-w-xl shadow-[0_16px_36px_rgba(0,0,0,0.11)] bg-white/98 px-3.5 sm:px-5 py-2 sm:py-2.5"
            : "max-w-[1400px] shadow-[0_6px_24px_rgba(0,0,0,0.03)] px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5"
        }`}
      >
        {/* Top Navbar Row */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo - Using Meta Icon */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Heaven Furniture Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0 border border-neutral-200/60 bg-[#163A2B]">
              <Image
                src="/icon.svg"
                alt="Heaven Furniture Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-body font-bold text-base sm:text-lg tracking-tight text-[#111815] whitespace-nowrap">
                Heaven Furniture
              </span>
              <span
                className={`font-body text-[9px] sm:text-[10px] tracking-wider text-neutral-400 uppercase font-medium whitespace-nowrap overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  scrolled && !expanded ? "h-0 opacity-0" : "h-3.5 opacity-100"
                }`}
              >
                Atelier • Chattogram
              </span>
            </div>
          </Link>

          {/* Center Links (Luxury Navigation Pill Bar) */}
          <div
            className={`hidden lg:flex items-center transition-[max-width,opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
              scrolled && !expanded
                ? "max-w-0 opacity-0 scale-95 pointer-events-none -mx-2"
                : "max-w-[620px] opacity-100 scale-100"
            }`}
          >
            <nav className="flex items-center gap-1.5 p-1 rounded-full bg-[#FAF9F5]/90 border border-neutral-200/70 shadow-xs shrink-0">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full font-body text-[13px] transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#163A2B] text-white shadow-xs font-semibold"
                        : "text-neutral-600 hover:text-[#163A2B] hover:bg-[#EAF2ED]/80 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.label === "Deals" && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                        isActive ? "bg-[#E5A83B] text-[#111815]" : "bg-amber-100 text-amber-900 border border-amber-300/60"
                      }`}>
                        Sale
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* SEAMLESS 3-LINE TO X MORPHING MENU BUTTON */}
            <button
              type="button"
              onClick={toggleExpanded}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
                expanded
                  ? "bg-[#163A2B] text-white shadow-md"
                  : scrolled
                  ? "bg-[#163A2B] text-white hover:bg-[#102a1f] shadow-sm hover:shadow-md"
                  : "bg-neutral-100 hover:bg-[#EAF2ED] text-neutral-800 hover:text-[#163A2B] border border-neutral-200/80"
              }`}
              aria-label={expanded ? "Collapse menu" : "Expand categories menu"}
              aria-expanded={expanded}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-[4.5px] pointer-events-none">
                {/* Top line -> Top cross arm */}
                <span
                  className={`h-[1.75px] w-[18px] rounded-full bg-current transform-gpu transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    expanded ? "translate-y-[6.25px] rotate-45" : ""
                  }`}
                />
                {/* Middle line -> Fades out cleanly */}
                <span
                  className={`h-[1.75px] w-[18px] rounded-full bg-current transform-gpu transition-all duration-200 ease-out origin-center ${
                    expanded ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                {/* Bottom line -> Bottom cross arm */}
                <span
                  className={`h-[1.75px] w-[18px] rounded-full bg-current transform-gpu transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    expanded ? "-translate-y-[6.25px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* 
          LUXURY ARCHITECTURAL MEGA MENU & MOBILE NAVIGATION DRAWER:
          - Responsive scroll container (max-h-[82vh] overflow-y-auto)
          - Dedicated Primary Page Links on Mobile
          - Real photography for each room space
          - Direct sub-category deep links
        */}
        <div
          className={`grid transition-[grid-template-rows,opacity,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            expanded
              ? "grid-rows-[1fr] opacity-100 visible"
              : "grid-rows-[0fr] opacity-0 invisible"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-4 mt-3 border-t border-neutral-200/80 space-y-4 max-h-[72vh] sm:max-h-[80vh] overflow-y-auto pr-1">
              
              {/* Mobile Primary Page Links Grid (Shown on mobile screens < lg) */}
              <div className="lg:hidden pb-3 border-b border-neutral-200/80">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#163A2B] block mb-2.5">
                  Navigation Pages
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setExpanded(false)}
                        className={`px-3.5 py-2.5 rounded-xl font-body text-xs flex items-center justify-between transition-all ${
                          isActive
                            ? "bg-[#163A2B] text-white font-semibold shadow-xs"
                            : "bg-[#FAF9F5] text-neutral-800 border border-neutral-200/80 hover:bg-[#EAF2ED]"
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.label === "Deals" ? (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                            isActive ? "bg-[#E5A83B] text-[#111815]" : "bg-amber-100 text-amber-900"
                          }`}>
                            Sale
                          </span>
                        ) : (
                          <span className={isActive ? "text-white/60" : "text-neutral-400"}>→</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Header Row */}
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-neutral-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#163A2B] block">
                    Curated Atelier Catalog
                  </span>
                  <h4 className="font-display text-base sm:text-lg text-[#111815] font-bold tracking-tight">
                    Explore Handcrafted Spaces &amp; Collections
                  </h4>
                </div>

                <Link
                  href="/shop"
                  onClick={() => setExpanded(false)}
                  className="text-xs font-bold text-[#163A2B] hover:text-[#1f4e3b] flex items-center gap-1 shrink-0"
                >
                  <span>Browse All</span>
                  <span>→</span>
                </Link>
              </div>

              {/* 4-Column Luxury Category Grid with Real Photos & Deep Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {megaMenuCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-[#FAF9F5] rounded-2xl p-3 sm:p-4 border border-neutral-200/70 hover:border-[#163A2B]/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Photo Header */}
                      <Link
                        href={cat.href}
                        onClick={() => setExpanded(false)}
                        className="group block relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-neutral-200"
                      >
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover group-hover:scale-106 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <span className="absolute bottom-2 left-2.5 text-xs font-bold text-white drop-shadow-sm">
                          {cat.title}
                        </span>
                      </Link>

                      {/* Direct Links List */}
                      <ul className="space-y-1.5">
                        {cat.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setExpanded(false)}
                              className="text-xs text-neutral-600 hover:text-[#163A2B] hover:translate-x-0.5 font-medium transition-all block py-1"
                            >
                              • {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 pt-2 border-t border-neutral-200/60">
                      <Link
                        href={cat.href}
                        onClick={() => setExpanded(false)}
                        className="text-[11px] font-bold text-[#163A2B] hover:text-[#1f4e3b] flex items-center justify-between py-1"
                      >
                        <span>View Collection</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Trust & Contact Banner */}
              <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  <span className="font-semibold text-neutral-700">100% Solid Kiln-Seasoned Shegun &amp; Mahogany</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/8801819642289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-neutral-700 hover:text-[#163A2B] px-3 py-1 rounded-full border border-neutral-200 bg-white"
                  >
                    💬 WhatsApp Concierge
                  </a>
                  <Link
                    href="/deals"
                    onClick={() => setExpanded(false)}
                    className="font-bold text-[#E5A83B] bg-[#163A2B] px-3.5 py-1.5 rounded-full text-xs hover:bg-[#1f4e3b] transition-colors"
                  >
                    Flash Deals →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
