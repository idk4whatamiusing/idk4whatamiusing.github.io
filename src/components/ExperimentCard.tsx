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
  const { ref, onEnter, onLeave, describeOnly, hovered } =
    useCardHover<HTMLDivElement>();

  return (
    <figure className="group">
      <div
        ref={ref}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`relative flex ${ratio} w-full items-end overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 ease-out hover:border-accent/40`}
      >
        {item.gif && (
          <img
            src={item.gif}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <figcaption
          className={`bg-background/85 backdrop-blur-sm ${
            describeOnly ? "absolute inset-x-0 top-0 m-6 p-0" : "w-full p-6"
          } transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <p className="rounded-lg bg-background/85 px-3 py-2 text-sm leading-relaxed text-foreground shadow-sm">
            {item.description}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
