"use client";

import { profile } from "@/data/profile";

type InfoPanelProps = {
  open: boolean;
  onClose: () => void;
};

export default function InfoPanel({ open, onClose }: InfoPanelProps) {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} aria-hidden />
      <div className="absolute right-6 top-full z-50 mt-2 w-80 rounded-xl border border-border bg-card p-5 shadow-lg backdrop-blur-md">
        <p className="text-sm leading-relaxed text-muted">{profile.about}</p>
        <div className="my-5 h-px w-full bg-border" />
        <div className="relative space-y-5 border-l border-border pl-4">
          {profile.experience.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-medium">{item.role}</h3>
                <span className="font-mono text-xs text-muted">{item.period}</span>
              </div>
              <p className="mt-0.5 text-xs text-accent">{item.company}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
