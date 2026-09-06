"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COLLECTIONS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function CollectionsInteractive() {
  const [activeId, setActiveId] = useState(COLLECTIONS[0].id);
  const active = COLLECTIONS.find((c) => c.id === activeId) ?? COLLECTIONS[0];

  return (
    <section id="spaces" className="bg-charcoal-deep px-6 py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-3">Explore the Spaces</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance font-display text-3xl font-medium text-ivory sm:text-4xl">
                Every room, its own world.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-body text-sm font-light text-ivory/55">
              Choose a space below and step inside -- this is a glimpse, not
              the full catalogue.
            </p>
          </Reveal>
        </div>

        {/* Desktop / tablet: split interactive explorer */}
        <Reveal delay={0.1}>
          <div className="hidden overflow-hidden rounded-2xl border border-ivory/10 lg:grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Category list */}
            <div className="flex flex-col justify-center gap-1 bg-charcoal-light px-10 py-16">
              {COLLECTIONS.map((c, i) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onMouseEnter={() => setActiveId(c.id)}
                    onFocus={() => setActiveId(c.id)}
                    onClick={() => setActiveId(c.id)}
                    className="group relative flex items-baseline gap-4 py-4 text-left"
                  >
                    <span
                      className={`font-body text-xs transition-colors duration-300 ${
                        isActive ? "text-brass-light" : "text-ivory/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-3xl transition-all duration-300 ${
                        isActive
                          ? "translate-x-2 text-ivory"
                          : "text-ivory/35 group-hover:text-ivory/60"
                      }`}
                    >
                      {c.label}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-9 h-px bg-brass/60 transition-all duration-500 ${
                        isActive ? "w-16 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + "-copy"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 max-w-xs"
                >
                  <p className="font-body text-xs uppercase tracking-[0.14em] text-brass-light/80">
                    {active.detail}
                  </p>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-ivory/55">
                    {active.copy}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual */}
            <div className="relative h-[520px] overflow-hidden bg-charcoal">
              <AnimatePresence mode="sync">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <motion.img
                    src={active.image}
                    alt={`${active.label} furniture by Heaven Furniture Mart`}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
                <span className="font-display text-2xl text-ivory drop-shadow">
                  {active.label}
                </span>
                <a
                  href="#contact"
                  className="pointer-events-auto rounded-full border border-ivory/30 px-4 py-2 font-body text-[11px] uppercase tracking-[0.12em] text-ivory backdrop-blur-sm transition-colors hover:border-brass-light hover:text-brass-light"
                >
                  Ask About This
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile: tap tabs + stacked visual */}
        <div className="lg:hidden">
          <div className="-mx-6 mb-6 flex gap-2 overflow-x-auto px-6 pb-2">
            {COLLECTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`shrink-0 rounded-full border px-4 py-2 font-body text-xs uppercase tracking-[0.1em] transition-colors ${
                  c.id === activeId
                    ? "border-brass bg-brass text-charcoal-deep"
                    : "border-ivory/20 text-ivory/60"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <AnimatePresence mode="sync">
              <motion.img
                key={active.id}
                src={active.image}
                alt={`${active.label} furniture by Heaven Furniture Mart`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-2xl text-ivory">{active.label}</h3>
              <p className="mt-1 font-body text-xs font-light text-ivory/65">
                {active.detail}
              </p>
              <p className="mt-3 max-w-sm font-body text-sm font-light leading-relaxed text-ivory/60">
                {active.copy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
