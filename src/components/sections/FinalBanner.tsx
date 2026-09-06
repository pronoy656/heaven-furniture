import { SITE } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function FinalBanner() {
  return (
    <section className="relative overflow-hidden bg-brass px-6 py-20 text-charcoal-deep lg:px-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ivory/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-2xl font-medium sm:text-3xl">
            Designed. Crafted. Delivered.
          </p>
          <p className="mt-1 font-body text-sm font-light text-charcoal-deep/75">
            Start your bespoke journey today.
          </p>
        </div>
        <Magnetic strength={0.25}>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-charcoal-deep px-8 py-4 font-body text-sm uppercase tracking-[0.14em] text-ivory transition-colors duration-300 hover:bg-charcoal-light"
          >
            WhatsApp Us
          </a>
        </Magnetic>
      </div>
    </section>
  );
}
