"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Experiment } from "@/data/profile";

const ratios = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
];

export default function ExperimentCard({
  item,
  index,
}: {
  item: Experiment;
  index: number;
}) {
  const ratio = ratios[index % ratios.length];
  const animated = item.interactive;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.figure
      className="group relative"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={animated ? { y: -6 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className={`relative flex ${ratio} w-full items-end overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-200 group-hover:border-accent/40 group-hover:shadow-[0_20px_50px_-20px_var(--color-accent)]`}
      >
        <span className="absolute left-6 top-6 font-mono text-4xl font-semibold text-muted/60 transition-colors duration-200 group-hover:text-accent">
          {item.number}
        </span>
        <motion.figcaption
          className="w-full bg-background/80 p-6 backdrop-blur-sm"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{
            duration: animated ? 0.2 : 0.15,
            delay: hovered && animated ? 0.2 : 0,
          }}
        >
          <h3 className="text-base font-medium tracking-tight text-muted transition-colors duration-200 group-hover:text-accent">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </motion.figcaption>
      </div>
    </motion.figure>
  );
}
