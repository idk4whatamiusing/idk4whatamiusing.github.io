"use client";

import type { Experiment } from "@/data/profile";
import { useCardHover } from "@/components/useCardHover";

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
  const { ref, onEnter, onLeave, describeOnly } =
    useCardHover<HTMLDivElement>();

  return (
    <figure className="group">
      <div
        ref={ref}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`relative flex ${ratio} w-full items-end overflow-hidden rounded-2xl bg-card transition-all duration-200 ease-out hover:border-accent/40`}
      >
        {item.gif && (
          <img
            src={item.gif}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <figcaption
          className={`backdrop-blur ${
            describeOnly ? "absolute inset-x-0 top-0 m-6 p-0" : "w-full p-6"
          } transition-opacity duration-200 opacity-0 group-hover:opacity-100`}
        >
          <p className="rounded-lg bg-background/30 px-2.5 py-1 text-sm leading-snug text-foreground shadow-sm">
            {item.description}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
