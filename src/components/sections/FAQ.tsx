"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

const TOP_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    tag: "Customization",
    question: "Can I customize the exact size, wood type, and upholstery fabric?",
    answer:
      "Yes, absolutely. Every piece at Heaven Furniture Mart is made-to-order. You can customize dimensions down to the centimeter, select from Grade-A Chittagong Teak (Segun), Mahogany, or Oak, and choose from over 200+ imported Italian leathers, Belgian velvets, and performance fabrics.",
  },
  {
    id: "faq-2",
    tag: "Wood & Seasoning",
    question: "How do you season and treat your timber against termites and warping?",
    answer:
      "All our solid hardwoods undergo a rigorous multi-stage kiln-drying process to achieve an optimal 8-10% moisture equilibrium, followed by vacuum-pressure chemical treatment. This guarantees zero wood warping, bending, or termite attacks for decades.",
  },
  {
    id: "faq-3",
    tag: "10-Year Warranty",
    question: "What is covered under your 10-Year Structural Frame Warranty?",
    answer:
      "Our 10-Year Frame Warranty covers all solid hardwood joinery, inner structural integrity, and anti-termite protection. In the rare event of any structural defect under normal home use, our master artisans will repair or replace the frame with zero service charges.",
  },
  {
    id: "faq-4",
    tag: "Delivery & Setup",
    question: "How does nationwide White-Glove delivery and installation work?",
    answer:
      "Our dedicated logistics crew handles multi-layer protective uncrating, room-of-choice positioning, and complete professional assembly in your home. Full delivery and installation are 100% complimentary in Chattogram and Dhaka.",
  },
  {
    id: "faq-5",
    tag: "Trust & Policies",
    question: "What is your Doorstep Inspection & Rejection Policy upon delivery?",
    answer:
      "You have the full right to thoroughly inspect your finished furniture before final handover. If any piece deviates from your approved blueprint dimensions or material specifications, we will rectify it immediately or issue a full refund.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="content-auto pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:py-24 bg-[#FAF9F5] relative overflow-hidden border-b border-neutral-200/60">
      
      {/* Subtle atmospheric ambient glow */}
      <div 
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(22, 58, 43, 0.14) 0%, rgba(250, 249, 245, 0) 70%)"
        }}
      />
      <div 
        className="absolute bottom-10 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(229, 168, 59, 0.15) 0%, rgba(250, 249, 245, 0) 70%)"
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3.5 shadow-sm">
            <span>✦</span>
            <span>CLARITY &amp; TRUST</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-[1.15]">
            Frequently Asked <span className="text-[#163A2B] font-medium">Questions</span>
          </h2>

          <p className="mt-3.5 text-[#5D6B64] text-sm sm:text-base leading-relaxed">
            Clear, transparent answers about our solid wood seasoning, bespoke customizations, lifetime warranties, and white-glove delivery.
          </p>
        </div>

        {/* ================= MAIN 2-COLUMN GRID (LEFT: SHOWCASE, RIGHT: 5 FAQS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: CUSTOMER CONCIERGE & SUPPORT DESK (IDENTICAL TO REFERENCE DESIGN) ================= */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[34px] bg-white p-6 sm:p-8 lg:p-9 border border-neutral-200/80 shadow-[0_20px_60px_rgba(17,24,21,0.06)] overflow-hidden">
              
              {/* Top-Right Decorative Organic Curved Image */}
              <div className="absolute top-0 right-0 w-[52%] sm:w-[48%] h-[230px] sm:h-[260px] pointer-events-none z-0 select-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 260"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <clipPath id="faqCornerCurve" clipPathUnits="userSpaceOnUse">
                      <path d="M 0,0 C 20,55 45,110 90,150 C 140,190 215,220 300,240 L 300,0 Z" />
                    </clipPath>
                  </defs>
                  
                  {/* Subtle drop-shadow glow along the curve edge */}
                  <path
                    d="M 0,0 C 20,55 45,110 90,150 C 140,190 215,220 300,240"
                    fill="none"
                    stroke="rgba(22,58,43,0.06)"
                    strokeWidth="10"
                    className="blur-md"
                  />
                  <path
                    d="M 0,0 C 20,55 45,110 90,150 C 140,190 215,220 300,240"
                    fill="none"
                    stroke="rgba(255,255,255,0.95)"
                    strokeWidth="4"
                  />
                  
                  {/* Premium Solid Wood Table with Greenery Image */}
                  <image
                    href="/faq-concierge-table.jpg"
                    width="300"
                    height="260"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#faqCornerCurve)"
                  />
                </svg>
              </div>

              {/* Bottom Right Decorative Subtle Line Flourish */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 pointer-events-none opacity-40 z-0">
                <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                  <path
                    d="M10,110 C40,90 90,80 110,10 M30,110 C60,95 95,85 110,30"
                    stroke="#163A2B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Card Foreground Content */}
              <div className="relative z-10">
                
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EE] border border-[#163A2B]/10 text-[#1E4A35] text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#467A5C]" />
                  <span>LIVE CONCIERGE &amp; SUPPORT</span>
                </div>

                {/* Main Heading */}
                <h3 className="font-display text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-[#111815] leading-[1.2] tracking-tight">
                  Have a Question<br />Not Listed Here?
                </h3>

                {/* Subtitle Description */}
                <p className="mt-3 text-xs sm:text-[13.5px] text-[#5A6B63] font-body leading-relaxed max-w-[320px] sm:max-w-[360px]">
                  Our furniture specialists and master craftsmen in Chattogram are available every day to assist with custom dimensions, pricing, and timber advice.
                </p>

                {/* Direct Contact Channels / Cards */}
                <div className="mt-6 space-y-3">
                  
                  {/* 01: WhatsApp Live Consultation */}
                  <a
                    href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20have%20a%20question%20about%20your%20furniture."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-[18px] bg-[#FAF9F5]/80 hover:bg-[#F5F3EB] border border-neutral-200/60 hover:border-[#163A2B]/20 active:scale-[0.99] transition-all group cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.015)]"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#4A7659] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-[15px] sm:text-[16px] font-bold text-[#111815] group-hover:text-[#163A2B] transition-colors truncate">
                          WhatsApp Live Consultation
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6E7E76] font-body mt-0.5 truncate">
                          Direct reply within 15 minutes • 3D floor plan review
                        </p>
                      </div>
                    </div>
                    <div className="text-[#8A9690] group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all pl-2 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </a>

                  {/* 02: Direct Showroom Hotline */}
                  <a
                    href="tel:+8801819642289"
                    className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-[18px] bg-[#FAF9F5]/80 hover:bg-[#F5F3EB] border border-neutral-200/60 hover:border-[#163A2B]/20 active:scale-[0.99] transition-all group cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.015)]"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#D7E6DE] text-[#204A35] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-[15px] sm:text-[16px] font-bold text-[#111815] group-hover:text-[#163A2B] transition-colors truncate">
                          +880 1819-642289
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6E7E76] font-body mt-0.5 truncate">
                          Showroom Hotline • 10:00 AM – 9:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="text-[#8A9690] group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all pl-2 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </a>

                  {/* 03: Chattogram Showroom & Atelier */}
                  <a
                    href="https://maps.google.com/?q=Agrabad+Access+Road+Chattogram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-[18px] bg-[#FAF9F5]/80 hover:bg-[#F5F3EB] border border-neutral-200/60 hover:border-[#163A2B]/20 active:scale-[0.99] transition-all group cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.015)]"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EEDEC6] text-[#94631D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-[15px] sm:text-[16px] font-bold text-[#111815] group-hover:text-[#163A2B] transition-colors truncate">
                          Chattogram Showroom &amp; Atelier
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6E7E76] font-body mt-0.5 truncate">
                          Agrabad Access Road, Chattogram, Bangladesh
                        </p>
                      </div>
                    </div>
                    <div className="text-[#8A9690] group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all pl-2 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </a>

                </div>

                {/* Primary WhatsApp CTA Button */}
                <div className="mt-6">
                  <a
                    href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20have%20a%20custom%20inquiry%20regarding%20your%20furniture."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0C291D] via-[#163A2B] to-[#123627] hover:brightness-110 active:scale-[0.99] px-6 py-4 text-sm sm:text-base font-medium text-white shadow-[0_12px_28px_rgba(22,58,43,0.25)] hover:shadow-[0_16px_32px_rgba(22,58,43,0.35)] transition-all text-center group cursor-pointer"
                  >
                    {/* WhatsApp Icon */}
                    <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Ask a Specialist on WhatsApp</span>
                    <span className="text-white/80 group-hover:translate-x-1 transition-transform font-bold">→</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: 5 ZERO-LAG ACCORDION FAQS ================= */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-3.5">
            {TOP_FAQS.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-white border-[#163A2B]/35 shadow-[0_10px_32px_rgba(22,58,43,0.07)] ring-1 ring-[#163A2B]/10"
                      : "bg-white/80 border-neutral-200/90 hover:border-neutral-300 hover:bg-white shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span className={`text-xs font-mono font-bold transition-colors pt-0.5 sm:pt-0 ${
                        isOpen ? "text-[#E5A83B]" : "text-neutral-400"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col">
                        <span className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${
                          isOpen ? "text-[#163A2B]" : "text-neutral-400"
                        }`}>
                          {faq.tag}
                        </span>
                        <span className={`text-sm sm:text-base lg:text-[1.05rem] font-semibold tracking-tight transition-colors ${
                          isOpen ? "text-[#163A2B]" : "text-[#111815]"
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    {/* Smooth Rotating Plus Indicator */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#163A2B] text-white rotate-45 shadow-sm"
                          : "bg-neutral-100 text-neutral-600 rotate-0 group-hover:bg-neutral-200"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </button>

                  {/* GPU-Accelerated Zero-Lag CSS Grid Height Animation */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[#4E5953] leading-relaxed border-t border-neutral-100 font-normal">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
