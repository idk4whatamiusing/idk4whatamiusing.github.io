import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="flex items-center justify-between px-6">
        <a
          href={`mailto:${profile.socials.email}`}
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          Contact
        </a>
        <span className="text-sm text-muted transition-colors hover:text-accent">0705</span>
      </div>
    </footer>
  );
}
