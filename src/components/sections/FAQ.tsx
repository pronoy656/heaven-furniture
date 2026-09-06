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
    <section id="faq" className="py-16 sm:py-20 lg:py-28 bg-[#FAF9F5] relative overflow-hidden border-b border-neutral-200/60">
      
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
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
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
          
          {/* ================= LEFT COLUMN: CUSTOMER CONCIERGE & SUPPORT DESK ================= */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="h-full flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 border border-neutral-200/90 shadow-sm">
              
              <div>
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Live Concierge & Support</span>
                </div>

                <h3 className="font-display text-2xl sm:text-[1.7rem] font-bold text-[#111815] leading-tight">
                  Have a Question Not Listed Here?
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#5D6B64] font-body leading-relaxed">
                  Our furniture specialists and master craftsmen in Chattogram are available everyday to assist with custom dimensions, pricing, and timber advice.
                </p>

                {/* Direct Contact Channels */}
                <div className="mt-6 space-y-3.5 pt-5 border-t border-neutral-100">
                  
                  {/* WhatsApp Help */}
                  <a
                    href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20have%20a%20question%20about%20your%20furniture."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80 hover:border-[#163A2B]/40 hover:bg-white transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#163A2B] flex items-center justify-center shrink-0 group-hover:bg-[#163A2B] group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#111815] group-hover:text-[#163A2B]">
                        WhatsApp Live Consultation
                      </h4>
                      <p className="text-[11px] text-[#5D6B64] mt-0.5 font-body">
                        Direct reply within 15 minutes • 3D floor plan review
                      </p>
                    </div>
                  </a>

                  {/* Phone Hotline */}
                  <a
                    href="tel:+8801819642289"
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80 hover:border-[#163A2B]/40 hover:bg-white transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center shrink-0 group-hover:bg-[#163A2B] group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#111815] group-hover:text-[#163A2B]">
                        +880 1819-642289
                      </h4>
                      <p className="text-[11px] text-[#5D6B64] mt-0.5 font-body">
                        Direct Showroom Hotline • 10:00 AM – 9:00 PM
                      </p>
                    </div>
                  </a>

                  {/* Showroom Visit */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#9E6E16] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#111815]">
                        Chattogram Showroom & Atelier
                      </h4>
                      <p className="text-[11px] text-[#5D6B64] mt-0.5 font-body">
                        Agrabad Access Road, Chattogram, Bangladesh
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom WhatsApp CTA Button */}
              <div className="mt-6 pt-5 border-t border-neutral-100">
                <a
                  href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture,%20I%20have%20a%20custom%20inquiry%20regarding%20your%20furniture."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#163A2B] hover:bg-[#1f4e3b] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all text-center group cursor-pointer"
                >
                  <span>Ask a Specialist on WhatsApp</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
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
