import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-24 pb-16">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-muted">{profile.title}</p>
      <p className="mt-6 max-w-lg leading-relaxed text-muted">{profile.bio}</p>
    </section>
  );
}
