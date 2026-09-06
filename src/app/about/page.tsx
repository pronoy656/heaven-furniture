import Image from "next/image";
import Link from "next/link";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import { SITE } from "@/lib/content";

const TIMBER_STAGES = [
  {
    step: "01",
    title: "Selective Timber Sourcing",
    subtitle: "Chittagong Teak & Mahogany",
    description: "We source strictly mature, kiln-grade logs of genuine Chittagong Shegun (Teak), Seasoned Mahogany, and Gamari hardwood from sustainably managed plantations.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Precision Kiln Seasoning",
    subtitle: "10–12% Moisture Stabilization",
    description: "Every timber plank undergoes weeks in our vacuum-dehumidification kilns to achieve optimal moisture equilibrium. This guarantees zero warping, bending, or splitting.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Master Tenon Joinery",
    subtitle: "Traditional Interlocking Joinery",
    description: "Built without cheap metal brackets or superficial glue. Master woodwrights hand-chisel interlocking mortise-and-tenon joints that naturally absorb room humidity.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Organic Botanical Finishing",
    subtitle: "Silky Tactile Wood Patina",
    description: "Finished by hand using non-toxic natural oils and organic protective wax coats that highlight the natural grain patterns while protecting against daily spills.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
];

const QUALITY_PILLARS = [
  {
    number: "01",
    title: "Zero MDF & Zero Particle Board",
    desc: "We completely reject synthetic hollow boards, laminate stickers, and cheap fillers. Every square inch of Heaven furniture is solid, authentic hardwood.",
    icon: "🪵",
  },
  {
    number: "02",
    title: "Customized to Your Floor Plan",
    desc: "Whether you need a 10-seater dining banquet or a low-profile sectional fitted to an asymmetrical alcove, we tailor each piece to your exact centimeter.",
    icon: "📐",
  },
  {
    number: "03",
    title: "White-Glove In-Room Assembly",
    desc: "Our dedicated logistics team handles padded transport, placement inside your designated room, and complete setup with zero cleanup hassle.",
    icon: "🚚",
  },
  {
    number: "04",
    title: "10-Year Direct Atelier Warranty",
    desc: "Direct manufacturer backing from founder Abul Kalam Bhuiyan on internal timber stability, termite resistance, and joinery integrity.",
    icon: "🛡️",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-800 flex flex-col">
      <NavBar />

      {/* ================= REFINED LUXURY HERO BANNER ================= */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden">
        
        {/* Lifestyle Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop"
            alt="Heaven Furniture Master Atelier & Living Space"
            fill
            priority
            className="object-cover object-center scale-102"
          />
          {/* Gentle, balanced dark & emerald gradient overlay matching Shop hero */}
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
              <span className="text-[#E5A83B] font-bold">About Our Atelier</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#E5A83B] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-md">
              <span>✦</span>
              <span>SINCE 2020 • CHATTOGRAM ATELIER</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.14]">
              Sculpting Modern Heirlooms from <span className="text-[#E5A83B] italic font-serif">Solid Timber</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-2xl font-body">
              Founded in {SITE.founded} by {SITE.founder} in Chattogram, Heaven Furniture Mart combines generations of traditional joinery expertise with contemporary architectural living.
            </p>

          </div>

          {/* Floating Key Metrics Strip */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/20 max-w-4xl">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#E5A83B]">100%</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">Solid Seasoned Hardwood</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#E5A83B]">20+</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">Master Woodwrights</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#E5A83B]">10-Yr</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">Certified Timber Warranty</p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#E5A83B]">2,500+</span>
              <p className="text-xs text-neutral-300 mt-1 font-medium">Bespoke Homes Furnished</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT BODY ================= */}
      <main className="flex-grow mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 space-y-24 sm:space-y-32">
        
        {/* ================= 01: ELEVATED LUXURY FOUNDER & LEADERSHIP STORY ================= */}
        <section className="bg-gradient-to-br from-white via-[#FAF9F5] to-[#F4F1EA] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#163A2B]/15 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Gold Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#E5A83B]/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Founder Portrait (Uncropped Natural Aspect) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#163A2B]/20 bg-neutral-900 group ring-4 ring-[#163A2B]/5">
                <Image
                  src="/owner.png"
                  alt="Abul Kalam Bhuiyan, Managing Director of Heaven Furniture Mart"
                  width={1397}
                  height={1126}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-103"
                  priority
                />
                
                {/* Subtle bottom gradient & caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A83B] block mb-1">
                    Founder &amp; Managing Director
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    Abul Kalam Bhuiyan
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Heaven Furniture Mart • Agrabad, Chattogram
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Vision Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em]">
                <span className="text-[#E5A83B]">✦</span>
                <span>FOUNDER&apos;S DIRECT GUARANTEE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-tight">
                &ldquo;Furniture is not disposable decor. It is an heirloom that lives with your family.&rdquo;
              </h2>

              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-body">
                When I established Heaven Furniture Mart in Chattogram in 2020, I saw a market flooded with cheap particle board and imported hollow veneers that deteriorate within 3 years.
              </p>

              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-body">
                We made an unbreakable commitment: <strong>zero MDF, zero synthetic particle board</strong>. Every sofa frame, banquet dining table, and master suite platform is built from 100% seasoned solid Chittagong Teak and Mahogany, hand-jointed by master carpenters who treat woodworking as an art form.
              </p>

              {/* Verified Founder Badges */}
              <div className="pt-5 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-neutral-200/70">
                  <span className="text-[11px] font-bold uppercase text-neutral-400 block mb-0.5">Personal Backing</span>
                  <span className="font-display text-sm sm:text-base font-bold text-[#163A2B]">10-Year Warranty On Every Frame</span>
                </div>
                <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-neutral-200/70">
                  <span className="text-[11px] font-bold uppercase text-neutral-400 block mb-0.5">Direct Workshop</span>
                  <span className="font-display text-sm sm:text-base font-bold text-[#163A2B]">Agrabad Showroom &amp; Studio</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 02: THE 4-STAGE TIMBER CRAFT JOURNEY ================= */}
        <section className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                <span>✦</span>
                <span>FROM TIMBER TO HEIRLOOM</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111815] font-normal tracking-tight leading-tight">
                Our Artisanal <span className="text-[#163A2B] font-serif italic">Craft Journey</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5D6B64] leading-relaxed max-w-md">
              A transparent look into how we season, join, and hand-finish our solid wood creations in our Chattogram atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMBER_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="group bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/80 hover:border-[#163A2B]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden mb-5 bg-neutral-100">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      Stage {stage.step}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5A83B] block mb-1">
                    {stage.subtitle}
                  </span>

                  <h3 className="font-display text-lg font-bold text-[#111815] group-hover:text-[#163A2B] transition-colors leading-snug">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 font-body leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] font-semibold text-[#163A2B] flex items-center gap-1">
                  <span>Guaranteed 100% Solid</span>
                  <span>✓</span>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================= 03: THE 4 QUALITY PILLARS ================= */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-200/80 shadow-md">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2ED] border border-emerald-800/10 text-[#163A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span>✦</span>
              <span>UNCOMPROMISING PRINCIPLES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111815] font-normal tracking-tight">
              The Heaven <span className="text-[#163A2B] font-serif italic">Pledge</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every creation leaving our workshop adheres to these non-negotiable principles of structural purity and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {QUALITY_PILLARS.map((item) => (
              <div key={item.number} className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF2ED] text-[#163A2B] flex items-center justify-center font-display text-xl font-bold border border-[#D2E6DA]">
                  {item.number}
                </div>
                <h3 className="font-display font-bold text-lg text-[#111815] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 04: VISIT OUR SHOWROOM & STUDIO CTA ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#163A2B] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Background Light */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-[#E5A83B]/15 blur-3xl" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E5A83B] text-xs font-bold uppercase tracking-[0.2em]">
              <span>✦</span>
              <span>EXPERIENCE THE CRAFT IN PERSON</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
              Visit Our Agrabad <span className="text-[#E5A83B] font-serif italic">Showroom &amp; Atelier</span>
            </h2>

            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base max-w-xl font-body">
              Touch the seasoned timber, inspect the mortise joints, and explore custom fabric and polish samples. Our master design consultants are available for 1-on-1 consultations and 3D architectural space planning.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/8801819642289?text=Hello%20Heaven%20Furniture%2C%20I%20would%20like%20to%20schedule%20a%20private%20consultation%20at%20your%20Agrabad%20Showroom."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E5A83B] hover:bg-[#d4962a] text-[#111815] px-7 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-lg text-center"
              >
                <span>Book a Private Visit via WhatsApp</span>
                <span>→</span>
              </a>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 text-white px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all border border-white/20 text-center"
              >
                <span>Browse Full Catalog</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=1200&auto=format&fit=crop"
                alt="Heaven Furniture Agrabad Showroom Interior in Chattogram"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
