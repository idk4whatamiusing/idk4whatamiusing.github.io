import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="w-full px-0 pt-0 pb-24">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {profile.projects.map((project, i) => (
          <Reveal key={i} delay={i * 80}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_var(--color-accent)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-medium transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
