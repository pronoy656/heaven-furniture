import { MILESTONES } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Milestones() {
  return (
    <section className="bg-[#FAF9F5] border-t border-neutral-200/80 py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#163A2B] bg-[#EAF2ED] px-3.5 py-1 rounded-full border border-[#D2E6DA] inline-block">
              Since 2020 • Chattogram
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-balance text-center font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111815]">
            Our Artisanal Journey &amp; Milestones
          </h2>
        </Reveal>

        <div className="relative mt-12 hidden md:block">
          <div className="absolute left-0 right-0 top-3 h-0.5 bg-neutral-200" />
          <div className="grid grid-cols-5 gap-4">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <span className="mb-3 h-3 w-3 rounded-full bg-[#163A2B] ring-4 ring-[#EAF2ED]" />
                  <span className="font-display font-bold text-lg text-[#163A2B]">
                    {m.year}
                  </span>
                  <p className="mt-2 text-xs font-normal leading-relaxed text-neutral-600 max-w-[180px]">
                    {m.event}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4 md:hidden">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.06}>
              <div className="flex gap-4 border-l-2 border-[#163A2B] pl-4 py-1">
                <span className="font-display font-bold text-base text-[#163A2B]">
                  {m.year}
                </span>
                <p className="text-xs font-normal leading-relaxed text-neutral-600">
                  {m.event}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
