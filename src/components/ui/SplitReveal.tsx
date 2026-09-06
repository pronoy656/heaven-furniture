"use client";

import { motion } from "framer-motion";

export default function SplitReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "h1" | "h2" | "h3";
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.045, delayChildren: delay },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: "0.6em", rotate: 1.5 },
    show: {
      opacity: 1,
      y: "0em",
      rotate: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const Wrapper = motion.span;

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={`inline ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <Wrapper variants={wordVariant} className="inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </Wrapper>
        </span>
      ))}
    </motion.span>
  );
}
