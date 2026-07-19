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
        className={`relative flex ${ratio} w-full items-end overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 ease-out hover:border-accent/40`}
      >
        {item.gif && (
          <img
            src={item.gif}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {describeOnly ? (
          <div className="absolute inset-x-0 top-0 flex items-start p-6">
            <p className="text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ) : (
          <>
            <figcaption className="w-full bg-background/80 p-6 backdrop-blur-sm opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </figcaption>
          </>
        )}
      </div>
    </figure>
  );
}
