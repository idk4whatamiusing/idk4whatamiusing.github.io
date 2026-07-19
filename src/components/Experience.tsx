import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
        Experience
      </h2>
      <div className="mt-8 space-y-8">
        {profile.experience.map((item, i) => (
          <div key={i} className="border-l-2 border-border pl-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium">{item.role}</h3>
              <span className="shrink-0 text-sm text-muted">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{item.company}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
