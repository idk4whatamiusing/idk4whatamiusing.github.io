import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
        Contact
      </h2>
      <div className="mt-8 flex gap-6">
        <a
          href={`mailto:${profile.socials.email}`}
          className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Email
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          GitHub
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Résumé
        </a>
      </div>
    </section>
  );
}
