"use client";

import { profile } from "@/data/profile";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium tracking-tight">
          {profile.name}
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted">
          {isHome ? (
            <>
              <a href="#experience" className="transition-colors hover:text-foreground">
                Experience
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground">
                Projects
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </>
          ) : (
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          )}
          <Link
            href="/play"
            className="transition-colors hover:text-foreground"
          >
            Play
          </Link>
          <Link
            href="/info"
            className="transition-colors hover:text-foreground"
          >
            Info
          </Link>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
