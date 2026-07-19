"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/data/profile";
import { Masonry } from "masonic";

if (typeof ResizeObserver === "undefined") {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

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

export default function Projects() {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!mounted) return null;
  return (
    <section id="projects" className="w-full px-0 pt-0 pb-24">
      <Masonry
        items={profile.projects}
        columnWidth={420}
        columnGutter={6}
        ssrWidth={1200}
        render={({ index, data: project }) => {
          const ratio = ratios[index % ratios.length];
          const animated = project.interactive;
          return (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex ${ratio} w-full items-end overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_var(--color-accent)]${animated ? " hover:-translate-y-1.5" : ""}`}
            >
              <div>
                <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed text-muted transition-opacity ${
                    animated
                      ? "opacity-0 duration-200 delay-0 group-hover:delay-200 group-hover:opacity-100"
                      : "opacity-0 duration-150 group-hover:opacity-100"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </a>
          );
        }}
      />
    </section>
  );
}
