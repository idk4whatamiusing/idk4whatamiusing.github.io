"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/data/profile";
import { Masonry } from "masonic";
import { useCardHover } from "@/components/useCardHover";

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

function ProjectCard({
  project,
  ratio,
}: {
  project: (typeof profile.projects)[number];
  ratio: string;
}) {
  const animated = project.interactive;
  const { ref, onEnter, onLeave, describeOnly } =
    useCardHover<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
        className={`group relative flex ${ratio} w-full items-end overflow-hidden rounded-2xl bg-card transition-all duration-500 ease-out hover:border-accent/50 hover:shadow-[0_10px_30px_-15px_var(--color-accent)]${animated ? " hover:scale-[0.97]" : ""}`}
      >
        {project.gif && (
          <img
            src={project.gif}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <figcaption
          className={`backdrop-blur-xl ${
            describeOnly ? "absolute inset-x-0 top-0 m-6 p-0" : "w-full p-6"
          } transition-opacity duration-200 opacity-0 group-hover:opacity-100`}
        >
          <p className="rounded-lg bg-background/85 px-3 py-2 text-sm leading-relaxed text-foreground shadow-sm">
            {project.description}
          </p>
        </figcaption>
    </a>
  );
}

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
        render={({ index, data: project }) => (
          <ProjectCard
            key={project.name}
            project={project}
            ratio={ratios[index % ratios.length]}
          />
        )}
      />
    </section>
  );
}
