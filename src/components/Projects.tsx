import { profile } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
        Projects
      </h2>
      <div className="mt-8 space-y-6">
        {profile.projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-border p-4 transition-colors hover:bg-card"
          >
            <h3 className="font-medium">{project.name}</h3>
            <p className="mt-1 text-sm text-muted">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
