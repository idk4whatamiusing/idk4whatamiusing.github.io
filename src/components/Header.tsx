"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import Link from "next/link";
import InfoPanel from "@/components/InfoPanel";
import { useTab } from "@/components/TabContext";

export default function Header() {
  const [infoOpen, setInfoOpen] = useState(false);
  const { setTab } = useTab();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          {profile.name}
        </Link>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setTab("work")}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => setTab("exp")}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Exp
          </button>
        </div>
        <div className="relative flex items-center gap-6">
          <button
            type="button"
            onClick={() => setInfoOpen((o) => !o)}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Info
          </button>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Résumé
          </a>
          <InfoPanel open={infoOpen} onClose={() => setInfoOpen(false)} />
        </div>
      </nav>
    </header>
  );
}
