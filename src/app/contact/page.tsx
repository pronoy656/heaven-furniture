"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import { SITE } from "@/lib/content";

const ROOM_OPTIONS = [
  { id: "living", label: "Living Room" },
  { id: "bedroom", label: "Master Bedroom" },
  { id: "dining", label: "Dining Suite" },
  { id: "restaurant", label: "Restaurant / Commercial" },
  { id: "full-home", label: "Full Residence Interior" },
];

const TIMBER_OPTIONS = [
  { id: "shegun", label: "Chittagong Shegun (Teak)" },
  { id: "mahogany", label: "Seasoned Mahogany" },
  { id: "gamari", label: "Gamari Hardwood" },
  { id: "undecided", label: "Recommend for My Space" },
];

const FAQS = [
  {
    q: "How long does a bespoke handcrafted piece take to craft?",
    a: "Standard bespoke orders typically take 10 to 18 working days. Every piece is kiln-dried, hand-jointed with mortise-and-tenon construction, and finished with non-toxic botanical oils in our Chattogram atelier.",
  },
  {
    q: "Do you deliver to Dhaka and other divisions across Bangladesh?",
    a: "Yes. While our primary workshop and flagship showroom are located in Agrabad, Chattogram, we provide white-glove padded transit, room placement, and professional assembly across Dhaka, Sylhet, Cumilla, and nationwide.",
  },
  {
    q: "Can I customize the wood species, dimensions, and upholstery?",
    a: "Absolutely. We specialize in 100% tailor-made commissions. You can specify exact millimeter dimensions, wood species (Chittagong Teak, Mahogany, Gamari), and choose from over 120+ imported bouclé, velvet, and top-grain leather swatches.",
  },
  {
    q: "What warranty coverage is included with my furniture?",
    a: "Every solid hardwood piece is backed by our 10-Year Direct Structural Warranty on internal timber stability, termite resistance, and joinery integrity, directly endorsed by founder Abul Kalam Bhuiyan.",
  },
  {
    q: "Can I visit the showroom to see wood and fabric samples in person?",
    a: "Yes, our Agrabad showroom is open 7 days a week (10:00 AM – 9:00 PM). You can touch real wood slabs, test cushion firmness, and consult with our interior specialists with zero obligation.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "living",
    timberType: "shegun",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Heaven Furniture! I would like to inquire about a bespoke commission:
- Name: ${formData.name || "Client"}
- Room: ${formData.roomType}
- Preferred Timber: ${formData.timberType}
- Details: ${formData.notes || "Looking for custom consultation"}`;
    window.open(`https://wa.me/8801819642289?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-800 flex flex-col">
      <NavBar />

      {/* ================= REFINED LUXURY HERO BANNER ================= */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden">
        
        {/* Lifestyle Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop"
            alt="Heaven Furniture Atelier & Showroom Consultation"
            fill
            priority
            className="object-cover object-center scale-102"
          />
          {/* Balanced soft emerald & charcoal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-[#163A2B]/25 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300/90 mb-3.5 tracking-wider uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#E5A83B] font-bold">Contact &amp; Atelier Concierge</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#E5A83B] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-md">
              <span>✦</span>
              <span>BESPOKE 1-ON-1 CONSULTATIONS • CHATTOGRAM</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.14]">
              Connect With Our <span className="text-[#E5A83B] italic font-serif">Master Designers</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-2xl font-body">
              Whether you have an architectural floor plan, custom dimensions, or wish to schedule a private visit to our Agrabad showroom, our atelier team is dedicated to bringing your vision to life.
            </p>

          </div>

          {/* Floating Key Metrics Strip */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/20 max-w-4xl">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#E5A83B]">Agrabad C/A</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">Flagship Showroom &amp; Studio</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#E5A83B]">10–18 Days</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">Custom Commission Turnaround</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#E5A83B]">100% Solid</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">Kiln-Dried Hardwood Guarantee</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#E5A83B]">Nationwide</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">White-Glove In-Room Delivery</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MAIN INTERACTIVE BODY ================= */}
      <main className="flex-grow mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 space-y-24">
        
        {/* ================= SECTION 01: FORM + CONCIERGE CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: BESPOKE COMMISSION INQUIRY FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-200/90 shadow-xl relative overflow-hidden">
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2ED] text-[#163A2B] text-xs font-bold uppercase tracking-wider mb-3">
                <span className="text-[#E5A83B]">✦</span>
                <span>Direct Workshop Request</span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl text-[#111815] font-bold tracking-tight">
                Request a Design Consultation
              </h2>
              
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                Provide your project requirements below. Our senior woodwright and interior team will review your specs and respond within 2 working hours with estimates and timber options.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#EAF2ED] border border-[#D2E6DA] rounded-3xl p-8 text-center animate-in fade-in space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#163A2B] text-[#E5A83B] flex items-center justify-center text-2xl mx-auto font-bold shadow-md">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-[#163A2B]">
                  Consultation Request Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our Agrabad studio team has received your inquiry for <strong>{formData.roomType}</strong> space. An artisan specialist will contact you on <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 rounded-full bg-[#163A2B] hover:bg-[#1F4E3B] text-white px-6 py-3 text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <span>Connect Immediately on WhatsApp</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
                      Full Name <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80 text-sm focus:outline-none focus:border-[#163A2B] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
                      WhatsApp / Phone Number <span className="text-emerald-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 1819..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80 text-sm focus:outline-none focus:border-[#163A2B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
                    Email Address <span className="text-neutral-400">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tanvir@example.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80 text-sm focus:outline-none focus:border-[#163A2B] focus:bg-white transition-all"
                  />
                </div>

                {/* Room Type Selector Pills */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-2.5">
                    Select Target Space
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ROOM_OPTIONS.map((room) => (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, roomType: room.id })}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          formData.roomType === room.id
                            ? "bg-[#163A2B] text-white shadow-sm"
                            : "bg-[#FAF9F5] text-neutral-600 border border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        {room.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timber Preference */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-2.5">
                    Preferred Hardwood Species
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TIMBER_OPTIONS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, timberType: t.id })}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          formData.timberType === t.id
                            ? "bg-[#163A2B] text-white shadow-sm"
                            : "bg-[#FAF9F5] text-neutral-600 border border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details & Notes */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
                    Custom Dimensions / Floor Plan Notes / Reference Ideas
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about the size of your room, preferred sofa configuration, dining seat count, or custom polish shade..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80 text-sm focus:outline-none focus:border-[#163A2B] focus:bg-white transition-all"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-full bg-[#163A2B] hover:bg-[#1F4E3B] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
                  >
                    Submit Consultation Request →
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-4 px-6 rounded-full bg-[#EAF2ED] hover:bg-[#d8eadd] text-[#163A2B] text-xs sm:text-sm font-bold transition-all border border-[#D2E6DA] cursor-pointer text-center"
                  >
                    Chat on WhatsApp Directly
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT: SHOWROOM & DIRECT CONCIERGE (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom Visual Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-md">
              
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=800&auto=format&fit=crop"
                  alt="Heaven Furniture Agrabad Showroom & Atelier"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">
                  Flagship Atelier &amp; Showroom
                </div>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A83B] block mb-1">
                Chattogram Showroom
              </span>

              <h3 className="font-display text-xl font-bold text-[#111815]">
                Heaven Furniture Mart
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                {SITE.address}
              </p>

              <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500 font-medium">Operating Hours:</span>
                <span className="font-bold text-[#163A2B]">Saturday – Friday • 10 AM – 9 PM</span>
              </div>
            </div>

            {/* Direct Connect Channels (Bespoke Atelier Concierge) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A83B] block">
                    Direct Atelier Access
                  </span>
                  <h4 className="font-display text-lg font-bold text-[#111815]">
                    Private Client Concierge
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online Now</span>
                </span>
              </div>

              {/* Featured Primary Channel: WhatsApp Specialist */}
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group block p-4 sm:p-5 rounded-2xl bg-[#163A2B] hover:bg-[#1f4e3b] text-white transition-all shadow-md hover:shadow-xl border border-emerald-800/40 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                      <svg className="w-5 h-5 text-[#E5A83B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#E5A83B] block">
                        Instant Atelier Specialist
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-neutral-100 block">
                        Chat with Master Woodwright
                      </span>
                      <span className="text-[11px] text-neutral-300">
                        {SITE.phone} • Typical reply &lt; 5 mins
                      </span>
                    </div>
                  </div>
                  <span className="text-white text-lg font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </a>

              {/* Secondary Channels: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                
                {/* Phone Hotline */}
                <a
                  href={SITE.phoneHref}
                  className="group p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-white border border-neutral-200/80 hover:border-[#163A2B]/40 transition-all block"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-neutral-400">Showroom Hotline</span>
                  </div>
                  <span className="text-xs font-bold text-[#111815] group-hover:text-[#163A2B] transition-colors block">
                    {SITE.phone}
                  </span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Sat–Fri, 10 AM – 9 PM</span>
                </a>

                {/* Email Desk */}
                <a
                  href={`mailto:${SITE.email}`}
                  className="group p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-white border border-neutral-200/80 hover:border-[#163A2B]/40 transition-all block"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-neutral-400">Blueprint &amp; Files</span>
                  </div>
                  <span className="text-xs font-bold text-[#111815] group-hover:text-[#163A2B] transition-colors block truncate">
                    {SITE.email}
                  </span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Response &lt; 2 hours</span>
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* ================= SECTION 02: FAQ ACCORDION ================= */}
        <div className="max-w-4xl mx-auto pt-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-[#D2E6DA] text-[#163A2B] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="text-[#E5A83B]">✦</span>
              <span>Client Inquiries &amp; Transparency</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl text-[#111815] font-normal tracking-tight">
              Frequently Asked <span className="text-[#163A2B] font-medium">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-lg mx-auto">
              Everything you need to know about our bespoke commission process, timber seasoning, and nationwide delivery.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "bg-white border-[#163A2B]/40 shadow-md ring-1 ring-[#163A2B]/10" : "bg-white/70 border-neutral-200/80 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#111815]">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isOpen ? "bg-[#163A2B] text-white shadow-sm" : "bg-neutral-100 text-neutral-500 border border-neutral-200"
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-neutral-600 font-body leading-relaxed border-t border-neutral-100/80 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
