"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

interface OptionItem {
  id: string;
  label: string;
  subtitle: string;
  badge?: string;
  iconSvg: React.ReactNode;
}

const ROOM_OPTIONS: OptionItem[] = [
  {
    id: "Living Room",
    label: "Living Sanctuary",
    subtitle: "Sectional sofas, center tables, TV consoles & lounge chairs",
    badge: "Popular",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/>
        <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/>
        <path d="M4 18v2"/>
        <path d="M20 18v2"/>
      </svg>
    ),
  },
  {
    id: "Master Bedroom",
    label: "Master Bedroom Suite",
    subtitle: "King platform beds, wardrobes, dressing tables & nightstands",
    badge: "Bestseller",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16"/>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
        <path d="M2 17h20"/>
        <path d="M6 8v9"/>
      </svg>
    ),
  },
  {
    id: "Dining Room",
    label: "Banquet Dining",
    subtitle: "6–8 seater solid wood dining sets, sideboards & bar cabinets",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v20"/>
        <path d="M16 2v20"/>
        <path d="M3 7h18"/>
        <path d="M3 17h18"/>
      </svg>
    ),
  },
  {
    id: "Executive Studio",
    label: "Executive Workspace",
    subtitle: "Solid timber desks, ergonomic chairs, bookshelves & credenzas",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    id: "Full Home Interior",
    label: "Full Home Woodcraft",
    subtitle: "Complete bespoke architectural interior woodworking package",
    badge: "Turnkey",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

const STYLE_OPTIONS: OptionItem[] = [
  {
    id: "Japandi & Organic Warmth",
    label: "Japandi & Organic Warmth",
    subtitle: "Low-profile silhouettes, raw teak textures & wabi-sabi balance",
    badge: "Trending",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    id: "Mid-Century Modern",
    label: "Mid-Century Modern",
    subtitle: "Tapered legs, warm amber stains & brushed brass accents",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: "Royal Heritage & Fluted",
    label: "Royal Heritage & Fluted",
    subtitle: "Ornate fluting, deep mahogany tones & lavish velvet upholstery",
    badge: "Classic",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
      </svg>
    ),
  },
  {
    id: "Contemporary Minimalist",
    label: "Contemporary Minimalist",
    subtitle: "Clean architectural geometry, matte finishes & seamless storage",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
  },
];

const TIMBER_OPTIONS: OptionItem[] = [
  {
    id: "Chittagong Teak (Shegun)",
    label: "Chittagong Teak (Shegun)",
    subtitle: "100% seasoned solid timber with royal golden grain & heirloom longevity",
    badge: "Master Grade",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: "Kiln-Dried Mahogany",
    label: "Kiln-Dried Mahogany",
    subtitle: "Deep reddish-brown elegance with high structural density",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
      </svg>
    ),
  },
  {
    id: "Gamari Hardwood",
    label: "Gamari Hardwood",
    subtitle: "Modern blonde finish, lightweight durability & smooth uniform grain",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 10v.01"/>
        <path d="M14 10v.01"/>
        <path d="M10 14v.01"/>
        <path d="M14 14v.01"/>
        <rect width="18" height="18" x="3" y="3" rx="2"/>
      </svg>
    ),
  },
  {
    id: "Recommend for My Space",
    label: "Recommend for My Space",
    subtitle: "Our master woodwrights will suggest the optimal timber for your budget",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    ),
  },
];

const BUDGET_OPTIONS: OptionItem[] = [
  {
    id: "Under ৳1,00,000",
    label: "Under ৳1,00,000",
    subtitle: "Individual signature furniture piece (e.g. Sofa or King Bed)",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
        <path d="M12 18V6"/>
      </svg>
    ),
  },
  {
    id: "৳1,00,000 – ৳3,00,000",
    label: "৳1,00,000 – ৳3,00,000",
    subtitle: "Full room transformation (e.g. Complete Living or Bedroom Suite)",
    badge: "Most Selected",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" x2="12" y1="22.08" y2="12"/>
      </svg>
    ),
  },
  {
    id: "৳3,00,000 – ৳7,00,000+",
    label: "৳3,00,000 – ৳7,00,000+",
    subtitle: "Multi-room architectural furniture or whole-apartment interior",
    badge: "Architectural Suite",
    iconSvg: (
      <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9z"/>
        <path d="M11 3 8 9l4 12 4-12-3-6"/>
        <path d="M2 9h20"/>
      </svg>
    ),
  },
];

const STEPS = [
  { key: "room", title: "Space", stepNumber: "01" },
  { key: "style", title: "Aesthetic", stepNumber: "02" },
  { key: "timber", title: "Timber", stepNumber: "03" },
  { key: "budget", title: "Investment", stepNumber: "04" },
  { key: "done", title: "Brief", stepNumber: "05" },
] as const;

export default function ConsultationFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedTimber, setSelectedTimber] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const handleSelect = (key: string, value: string) => {
    if (key === "room") setSelectedRoom(value);
    if (key === "style") setSelectedStyle(value);
    if (key === "timber") setSelectedTimber(value);
    if (key === "budget") setSelectedBudget(value);
    setStepIndex((prev) => Math.min(prev + 1, 4));
  };

  const goBack = () => setStepIndex((prev) => Math.max(prev - 1, 0));
  
  const resetAll = () => {
    setStepIndex(0);
    setSelectedRoom(null);
    setSelectedStyle(null);
    setSelectedTimber(null);
    setSelectedBudget(null);
  };

  const formattedMessage = `Hello Heaven Furniture Mart Atelier,\n\n` +
    `I have configured a Bespoke 3D Project Brief:\n` +
    `• Target Space: ${selectedRoom || "Not specified"}\n` +
    `• Design Aesthetic: ${selectedStyle || "Not specified"}\n` +
    `• Timber Core: ${selectedTimber || "Not specified"}\n` +
    `• Investment Scope: ${selectedBudget || "Not specified"}\n\n` +
    `Please share your 3D spatial layout simulation and master craftsman quotation.`;

  const waHref = `${SITE.whatsappHref}?text=${encodeURIComponent(formattedMessage)}`;

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#FAF9F5] via-[#F4F1EA] to-[#FAF9F5] border-t border-[#163A2B]/10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#163A2B]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#E5A83B]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#163A2B]/20 bg-[#163A2B]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#163A2B] backdrop-blur-sm">
              <svg className="h-3.5 w-3.5 text-[#E5A83B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              </svg>
              <span>Complimentary 3D Interior & Bespoke Studio</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111815] leading-tight">
              Design Your <span className="text-[#163A2B] italic font-serif">Dream Furniture</span> With Master Architects
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-3 text-sm text-neutral-600 max-w-xl mx-auto font-body leading-relaxed">
              Configure your room, preferred timber, and design style below to receive a customized 3D spatial layout and direct master-craftsman quotation.
            </p>
          </Reveal>
        </div>

        {/* Main 2-Column Split Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Step Cards (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 shadow-xl border border-[#163A2B]/10">
            
            {/* Step Progress Tracker */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                {STEPS.slice(0, 4).map((s, idx) => {
                  const isActive = stepIndex === idx;
                  const isCompleted = stepIndex > idx;
                  return (
                    <div key={s.key} className="flex items-center gap-2">
                      <div
                        className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isCompleted
                            ? "bg-[#163A2B] text-white"
                            : isActive
                            ? "bg-[#E5A83B] text-[#163A2B] ring-4 ring-[#E5A83B]/20"
                            : "bg-[#FAF9F5] text-neutral-400 border border-neutral-200"
                        }`}
                      >
                        {isCompleted ? "✓" : s.stepNumber}
                      </div>
                      <span className={`text-xs font-semibold hidden sm:inline ${
                        isActive ? "text-[#163A2B]" : isCompleted ? "text-neutral-700" : "text-neutral-400"
                      }`}>
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Steps Content with Animation */}
            <AnimatePresence mode="wait">
              {stepIndex === 0 && (
                <motion.div key="step-room" {...fadeIn}>
                  <div className="mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E5A83B]">Step 01</span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111815] mt-1">
                      What room space are you creating?
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {ROOM_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect("room", opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                          selectedRoom === opt.id
                            ? "border-[#163A2B] bg-[#163A2B]/5 shadow-sm"
                            : "border-neutral-200/80 bg-[#FAF9F5] hover:bg-white hover:border-[#163A2B]/40 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="h-10 w-10 rounded-xl bg-white shadow-xs border border-neutral-100 flex items-center justify-center shrink-0">
                            {opt.iconSvg}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-display text-sm sm:text-base font-bold text-[#111815] group-hover:text-[#163A2B]">
                                {opt.label}
                              </h4>
                              {opt.badge && (
                                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#E5A83B]/15 text-[#9E6E16]">
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 font-body mt-0.5">
                              {opt.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className="text-neutral-300 group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {stepIndex === 1 && (
                <motion.div key="step-style" {...fadeIn}>
                  <div className="mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E5A83B]">Step 02</span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111815] mt-1">
                      What interior aesthetic speaks to you?
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {STYLE_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect("style", opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                          selectedStyle === opt.id
                            ? "border-[#163A2B] bg-[#163A2B]/5 shadow-sm"
                            : "border-neutral-200/80 bg-[#FAF9F5] hover:bg-white hover:border-[#163A2B]/40 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="h-10 w-10 rounded-xl bg-white shadow-xs border border-neutral-100 flex items-center justify-center shrink-0">
                            {opt.iconSvg}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-display text-sm sm:text-base font-bold text-[#111815] group-hover:text-[#163A2B]">
                                {opt.label}
                              </h4>
                              {opt.badge && (
                                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#E5A83B]/15 text-[#9E6E16]">
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 font-body mt-0.5">
                              {opt.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className="text-neutral-300 group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-6 text-xs font-bold text-neutral-500 hover:text-[#163A2B] flex items-center gap-1.5 cursor-pointer"
                  >
                    ← Back to Space Selection
                  </button>
                </motion.div>
              )}

              {stepIndex === 2 && (
                <motion.div key="step-timber" {...fadeIn}>
                  <div className="mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E5A83B]">Step 03</span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111815] mt-1">
                      Choose your preferred solid timber
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {TIMBER_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect("timber", opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                          selectedTimber === opt.id
                            ? "border-[#163A2B] bg-[#163A2B]/5 shadow-sm"
                            : "border-neutral-200/80 bg-[#FAF9F5] hover:bg-white hover:border-[#163A2B]/40 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="h-10 w-10 rounded-xl bg-white shadow-xs border border-neutral-100 flex items-center justify-center shrink-0">
                            {opt.iconSvg}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-display text-sm sm:text-base font-bold text-[#111815] group-hover:text-[#163A2B]">
                                {opt.label}
                              </h4>
                              {opt.badge && (
                                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#163A2B] text-[#E5A83B]">
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 font-body mt-0.5">
                              {opt.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className="text-neutral-300 group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-6 text-xs font-bold text-neutral-500 hover:text-[#163A2B] flex items-center gap-1.5 cursor-pointer"
                  >
                    ← Back to Aesthetic Selection
                  </button>
                </motion.div>
              )}

              {stepIndex === 3 && (
                <motion.div key="step-budget" {...fadeIn}>
                  <div className="mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E5A83B]">Step 04</span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111815] mt-1">
                      What is your estimated investment scope?
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect("budget", opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                          selectedBudget === opt.id
                            ? "border-[#163A2B] bg-[#163A2B]/5 shadow-sm"
                            : "border-neutral-200/80 bg-[#FAF9F5] hover:bg-white hover:border-[#163A2B]/40 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="h-10 w-10 rounded-xl bg-white shadow-xs border border-neutral-100 flex items-center justify-center shrink-0">
                            {opt.iconSvg}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-display text-sm sm:text-base font-bold text-[#111815] group-hover:text-[#163A2B]">
                                {opt.label}
                              </h4>
                              {opt.badge && (
                                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#E5A83B]/15 text-[#9E6E16]">
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 font-body mt-0.5">
                              {opt.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className="text-neutral-300 group-hover:text-[#163A2B] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-6 text-xs font-bold text-neutral-500 hover:text-[#163A2B] flex items-center gap-1.5 cursor-pointer"
                  >
                    ← Back to Timber Selection
                  </button>
                </motion.div>
              )}

              {/* Step 5: Redesigned Luxury Atelier Commission Certificate */}
              {stepIndex === 4 && (
                <motion.div key="step-done" {...fadeIn} className="py-2">
                  
                  {/* Top Seal Badge */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="h-12 w-12 rounded-full bg-[#163A2B] text-[#E5A83B] flex items-center justify-center mb-3 shadow-md border border-[#E5A83B]/30">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6"/>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    </div>
                    
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A83B] bg-[#163A2B] px-3.5 py-1 rounded-full">
                      ✦ Studio Project Brief Formatted ✦
                    </span>
                    
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111815] mt-3">
                      Your Bespoke Commission Voucher
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-600 max-w-md font-body">
                      Our senior architectural designers will simulate your room dimensions and assemble a tailored 3D package.
                    </p>
                  </div>

                  {/* Bespoke Specification Sheet (Architectural Card) */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#FAF9F5] via-white to-[#F4F1EA] p-5 sm:p-6 border border-[#163A2B]/15 shadow-sm mb-6 relative overflow-hidden">
                    {/* Watermark logo */}
                    <div className="pointer-events-none absolute right-2 bottom-2 text-7xl font-serif font-black text-[#163A2B]/5 select-none">
                      HEAVEN
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-neutral-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                          Target Space
                        </span>
                        <span className="font-display text-sm font-bold text-[#111815]">
                          {selectedRoom || "Custom Space"}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-neutral-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                          Aesthetic Language
                        </span>
                        <span className="font-display text-sm font-bold text-[#111815]">
                          {selectedStyle || "Custom Aesthetic"}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-neutral-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                          Timber Core
                        </span>
                        <span className="font-display text-sm font-bold text-[#163A2B]">
                          {selectedTimber || "Solid Timber"}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-neutral-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                          Investment Scope
                        </span>
                        <span className="font-display text-sm font-bold text-[#111815]">
                          {selectedBudget || "Flexible Scope"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-neutral-500">
                      <span className="flex items-center gap-1.5 font-medium text-[#163A2B]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Includes Complimentary 3D CAD & Material Samples
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400">
                        REF: #HMB-{Math.floor(1000 + Math.random() * 9000)}
                      </span>
                    </div>
                  </div>

                  {/* Refined Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 rounded-full bg-[#163A2B] hover:bg-[#1f4e3b] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#163A2B]/20 border border-[#E5A83B]/30 transition-all hover:scale-102 active:scale-98"
                    >
                      <svg className="h-4 w-4 text-[#E5A83B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                      </svg>
                      <span>Transmit Brief to WhatsApp Studio</span>
                      <svg className="h-4 w-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7h10v10"/>
                        <path d="M7 17 17 7"/>
                      </svg>
                    </a>

                    <button
                      type="button"
                      onClick={resetAll}
                      className="px-6 py-3.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                    >
                      Reconfigure
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Redesigned Atelier Perquisites (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real-time Configurator Card */}
            <div className="rounded-3xl bg-[#163A2B] text-white p-7 shadow-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E5A83B]/20 blur-2xl" />

              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A83B]">
                  Live Blueprint
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              <h4 className="font-display text-xl font-bold text-white mb-2">
                Your Custom Commission
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-body">
                Our architectural team converts your selections into an accurate 3D CAD visualization with millimeter-precision wood joints.
              </p>

              {/* Dynamic Selections List */}
              <div className="mt-5 space-y-2.5 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center text-white/80">
                  <span className="text-white/50">Space:</span>
                  <span className="font-bold text-white">{selectedRoom || "Selecting..."}</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span className="text-white/50">Aesthetic:</span>
                  <span className="font-bold text-white">{selectedStyle || "Selecting..."}</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span className="text-white/50">Timber:</span>
                  <span className="font-bold text-[#E5A83B]">{selectedTimber || "Selecting..."}</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span className="text-white/50">Budget:</span>
                  <span className="font-bold text-white">{selectedBudget || "Selecting..."}</span>
                </div>
              </div>
            </div>

            {/* Redesigned Architectural Atelier Assurance (Replacing generic emojis) */}
            <div className="rounded-3xl bg-white p-7 shadow-sm border border-[#163A2B]/10 space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B]">
                  Atelier Consultation Standard
                </span>
                <span className="text-[10px] font-bold text-[#E5A83B] uppercase tracking-wider">
                  Complimentary
                </span>
              </div>

              {[
                {
                  number: "01",
                  title: "Photorealistic 3D Spatial CAD Layout",
                  desc: "Precision CAD simulation tailored to your floor plan dimensions, walkways, and lighting angles.",
                  icon: (
                    <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .98 1.72l6.05 4.07a2 2 0 0 0 2.17.05l9.93-6.12a2 2 0 0 0 .95-1.7V8.12a2 2 0 0 0-.98-1.72Z"/>
                      <path d="m10 22v-8L2 9"/>
                      <path d="M10 14 22 7"/>
                    </svg>
                  ),
                },
                {
                  number: "02",
                  title: "Seasoned Solid Timber & Fabric Kit",
                  desc: "Experience physical samples of Chittagong Teak, Mahogany, and imported stain-resistant bouclé.",
                  icon: (
                    <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  ),
                },
                {
                  number: "03",
                  title: "Direct Master-Craftsman Workshop Pricing",
                  desc: "Transparent material and labor calculation with zero retail middlemen margin or hidden surcharges.",
                  icon: (
                    <svg className="h-5 w-5 text-[#163A2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  ),
                },
              ].map((perk) => (
                <div key={perk.title} className="flex items-start gap-3.5 group">
                  <div className="h-10 w-10 rounded-xl bg-[#163A2B]/5 border border-[#163A2B]/10 flex items-center justify-center shrink-0 group-hover:bg-[#163A2B] group-hover:text-white transition-all duration-300">
                    {perk.icon}
                  </div>
                  <div>
                    <h5 className="font-display text-xs sm:text-sm font-bold text-[#111815] leading-snug">
                      {perk.title}
                    </h5>
                    <p className="text-neutral-500 text-[11px] leading-relaxed mt-0.5 font-body">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: "easeInOut" as const },
};
