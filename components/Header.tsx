"use client";

import { useState } from "react";
import profile from "@/data/profile";
import { navLinks } from "@/data/nav";
import ThemeToggle from "@/components/ThemeToggle";

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ember/60 bg-ember/10 font-display text-sm font-bold text-ember shadow-sm">
      {initials}
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Initials name={profile.name} />
          <span className="hidden font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted sm:inline">
            VP
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ember"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 border-l border-line pl-8">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              download
              className="border border-ember px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ember transition-colors hover:bg-ember hover:text-bg"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-line text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ember"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            onClick={() => setOpen(false)}
            className="mt-2 border border-ember px-3 py-2 text-center font-mono text-xs uppercase tracking-[0.15em] text-ember"
          >
            Download résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
