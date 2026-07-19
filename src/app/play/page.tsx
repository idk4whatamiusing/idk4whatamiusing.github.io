import { profile } from "@/data/profile";

export default function PlayPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-sm font-medium uppercase tracking-widest text-muted">
        Experiments
      </h1>
      <div className="mt-8 space-y-6">
        {profile.experiments.map((item) => (
          <div
            key={item.number}
            className="flex items-start gap-4 border-b border-border pb-6"
          >
            <span className="font-mono text-2xl font-semibold text-muted">
              {item.number}
            </span>
            <div>
              <h2 className="font-medium">{item.title}</h2>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
