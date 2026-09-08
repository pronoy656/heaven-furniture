"use client";

import Link from "next/link";
import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative bg-[#091710] text-neutral-300 overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-30 blur-3xl z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(34, 94, 66, 0.45) 0%, rgba(9, 23, 16, 0) 70%)"
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10 z-10">

        {/* ================= MAIN LINKS & INFO GRID (Elevated with compact, clean spacing) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-white/[0.10]">
          
          {/* Brand & Story Column (Col 1-4) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 group mb-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#163A2B] to-[#25573E] border border-emerald-500/30 flex items-center justify-center text-[#E5A83B] shadow-md group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19 10V7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v2a1 1 0 0 0 2 0v-2h12v2a1 1 0 0 0 2 0v-2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1zm-12-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3H7V7zm13 9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-[#E5A83B] transition-colors">
                  HEAVEN
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A2B8AC] font-semibold mt-1">
                  Furniture Mart
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed mb-5 max-w-sm font-light">
              Crafting heirloom-grade, bespoke solid wood furniture tailored to your dimensions, taste, and lifestyle. Handcrafted in Chattogram with timeless excellence.
            </p>

            {/* Live Showroom Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-neutral-300 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-400">Agrabad Showroom Open</span>
              <span className="text-neutral-500">• 10 AM – 9 PM</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.06] hover:bg-[#E5A83B] text-neutral-300 hover:text-[#0A1A12] flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3.5a4.5 4.5 0 0 0-4.5 4.5v2.51h-3v3.98h3v8.01z" />
                </svg>
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.06] hover:bg-[#E5A83B] text-neutral-300 hover:text-[#0A1A12] flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.06] hover:bg-[#E5A83B] text-neutral-300 hover:text-[#0A1A12] flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Concierge"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.06] hover:bg-[#25D366] text-neutral-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Collections Column (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] mb-3.5 sm:mb-4">
              Collections
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/shop?category=living" className="hover:text-[#E5A83B] transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="/shop?category=bedroom" className="hover:text-[#E5A83B] transition-colors">
                  Bedroom Suites
                </Link>
              </li>
              <li>
                <Link href="/shop?category=dining" className="hover:text-[#E5A83B] transition-colors">
                  Solid Wood Dining
                </Link>
              </li>
              <li>
                <Link href="/shop?category=office" className="hover:text-[#E5A83B] transition-colors">
                  Executive Workspaces
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-[#E5A83B] font-semibold hover:underline inline-flex items-center gap-1">
                  <span>Special Deals</span>
                  <span className="text-xs">✦</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column (Col 7-8) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] mb-3.5 sm:mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/contact#consultation" className="hover:text-[#E5A83B] transition-colors">
                  Free 3D Consultation
                </Link>
              </li>
              <li>
                <Link href="/styles" className="hover:text-[#E5A83B] transition-colors">
                  Design Styles &amp; Moodboards
                </Link>
              </li>
              <li>
                <Link href="/about#craftsmanship" className="hover:text-[#E5A83B] transition-colors">
                  Custom Wood Selection
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E5A83B] transition-colors">
                  Workshop &amp; Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5A83B] transition-colors">
                  White Glove Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Care & Policies Column (Col 9-10) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] mb-3.5 sm:mb-4">
              Client Care &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/contact" className="hover:text-[#E5A83B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5A83B] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5A83B] transition-colors">
                  10-Year Warranty Info
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5A83B] transition-colors">
                  Payment &amp; EMI Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5A83B] transition-colors">
                  Rejection &amp; Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom & Contact Info (Col 11-12) */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] mb-3.5 sm:mb-4">
              Flagship Studio
            </h4>
            <div className="space-y-2.5 text-sm text-neutral-400">
              <p className="text-neutral-300 font-medium leading-snug">
                {SITE.address}
              </p>
              
              <p>
                <a href={SITE.phoneHref} className="text-[#E5A83B] hover:underline font-medium block">
                  {SITE.phone}
                </a>
              </p>

              <p className="text-xs text-neutral-400">
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </p>

              <div className="pt-1.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] px-3.5 py-1.5 rounded-full border border-white/10 transition-colors"
                >
                  <span>Book Studio Visit</span>
                  <span className="text-[11px]">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ================= DEDICATED PROMINENT "HEAVEN" WATERMARK ZONE ================= */}
        <div className="relative pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 flex flex-col items-center justify-center text-center overflow-visible">
          
          {/* Big Architectural Brand Watermark - Massive & Fully Visible */}
          <div 
            className="w-full select-none pointer-events-none flex items-center justify-center overflow-visible"
            aria-hidden="true"
          >
            <span className="font-display font-black text-[19vw] sm:text-[18vw] lg:text-[16.5vw] tracking-[0.03em] uppercase bg-gradient-to-b from-white/[0.22] via-white/[0.12] to-white/[0.03] bg-clip-text text-transparent block select-none whitespace-nowrap leading-none transition-all drop-shadow-sm text-center">
              HEAVEN
            </span>
          </div>

          {/* Centered Copyright Bar */}
          <div className="mt-4 sm:mt-6">
            <p className="text-xs sm:text-[13px] text-neutral-400 font-normal tracking-wider">
              © {new Date().getFullYear()} Heaven Furniture Mart. Handcrafted with passion in Bangladesh. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
