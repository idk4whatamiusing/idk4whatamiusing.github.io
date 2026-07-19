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
        className={`relative flex ${ratio} w-full items-end overflow-hidden rounded-[10px] transition-all duration-200 ease-out hover:scale-[0.99] hover:border-accent/40`}
      >
        {item.poster && !item.gif && (
          <img
            src={item.poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {item.gif && (
          <img
            src={item.gif}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <figcaption
          className={`backdrop-blur ${
            describeOnly ? "absolute inset-x-0 top-0" : "w-full"
          } transition-opacity duration-200 opacity-0 group-hover:opacity-100`}
        >
          <p className={`rounded-lg bg-background/70 ${item.description.includes(".") ? "p-0" : "px-2.5 py-1"} text-base leading-snug text-foreground shadow-sm`}>
            {item.description}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
