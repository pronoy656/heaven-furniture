"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TRUST_JOURNEY } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function TrustJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="border-y border-ivory/10 bg-charcoal-deep px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-3 text-center">Why Heaven</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-balance text-center font-display text-3xl font-medium text-ivory sm:text-4xl">
            From first sketch to the last homeowner.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* center rail */}
          <div className="absolute left-[7px] top-0 h-full w-px bg-ivory/10 sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-px bg-gradient-to-b from-brass-light to-brass/40"
            />
          </div>

          <ol className="space-y-14">
            {TRUST_JOURNEY.map((point, i) => {
              const isRight = i % 2 === 1;
              return (
                <li key={point.title} className="relative">
                  <Reveal delay={i * 0.04}>
                    <div
                      className={`flex flex-col gap-4 pl-10 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0 ${
                        isRight ? "" : ""
                      }`}
                    >
                      <div
                        className={`hidden sm:block ${
                          isRight ? "order-2 text-left" : "order-1 text-right"
                        }`}
                      >
                        {!isRight && <StepCopy point={point} align="right" />}
                      </div>
                      <div
                        className={`hidden sm:block ${
                          isRight ? "order-1 text-left" : "order-2"
                        }`}
                      >
                        {isRight && <StepCopy point={point} align="left" />}
                      </div>

                      <div className="sm:hidden">
                        <StepCopy point={point} align="left" />
                      </div>
                    </div>
                  </Reveal>

                  {/* dot */}
                  <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-charcoal-deep sm:left-1/2 sm:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-brass-light" />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepCopy({
  point,
  align,
}: {
  point: { title: string; detail: string };
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "sm:pr-10" : "sm:pl-10"}>
      <h3 className="font-body text-lg font-medium text-ivory">
        {point.title}
      </h3>
      <p className="mt-1 font-body text-sm font-light leading-relaxed text-ivory/55">
        {point.detail}
      </p>
    </div>
  );
}
