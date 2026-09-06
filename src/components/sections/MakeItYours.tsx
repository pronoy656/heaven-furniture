"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MATERIALS, FINISHES, CONFIGURATIONS, SITE } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function MakeItYours() {
  const [materialId, setMaterialId] = useState(MATERIALS[0].id);
  const [finish, setFinish] = useState(FINISHES[0]);
  const [config, setConfig] = useState(CONFIGURATIONS[0]);

  const material = MATERIALS.find((m) => m.id === materialId)!;

  const message = `Hi Heaven Furniture Mart, I'd like a piece in ${material.label}, ${finish} finish, ${config} configuration. Could we set up a free consultation?`;
  const waHref = `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-charcoal px-6 py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-3">Make It Yours</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-medium text-ivory sm:text-4xl">
            Start picturing it in your own home.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl font-body text-sm font-light text-ivory/55">
            This isn&apos;t the final order -- just a starting point for your
            consultation. Pick a direction and we&apos;ll take it from there.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Preview */}
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ivory/10">
              <AnimatePresence mode="sync">
                <motion.img
                  key={material.id}
                  src={material.image}
                  alt={`${material.label} preview`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/85 via-charcoal-deep/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="eyebrow mb-2 text-brass-light">Your Selection</p>
                <p className="font-display text-2xl text-ivory">
                  {material.label} &middot; {finish}
                </p>
                <p className="font-body text-sm font-light text-ivory/65">
                  {config} configuration
                </p>
              </div>
            </div>
          </Reveal>

          {/* Choices */}
          <div className="space-y-10">
            <Reveal delay={0.1}>
              <ChipGroup
                label="Choose Material"
                options={MATERIALS.map((m) => ({ id: m.id, label: m.label, swatch: m.swatch }))}
                value={materialId}
                onChange={setMaterialId}
              />
            </Reveal>
            <Reveal delay={0.15}>
              <ChipGroup
                label="Choose Finish"
                options={FINISHES.map((f) => ({ id: f, label: f }))}
                value={finish}
                onChange={setFinish}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ChipGroup
                label="Choose Configuration"
                options={CONFIGURATIONS.map((c) => ({ id: c, label: c }))}
                value={config}
                onChange={setConfig}
              />
            </Reveal>

            <Reveal delay={0.25}>
              <Magnetic strength={0.25}>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-4 font-body text-sm uppercase tracking-[0.14em] text-charcoal-deep transition-colors duration-300 hover:bg-brass-light"
                >
                  Discuss This Combination
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string; swatch?: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div>
      <p className="eyebrow mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const isActive = opt.id === value;
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2.5 font-body text-xs uppercase tracking-[0.08em] transition-colors ${
                isActive
                  ? "border-brass bg-brass text-charcoal-deep"
                  : "border-ivory/20 text-ivory/70 hover:border-ivory/40"
              }`}
            >
              {opt.swatch && (
                <span
                  className="h-3 w-3 rounded-full border border-black/10"
                  style={{ backgroundColor: opt.swatch }}
                />
              )}
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
