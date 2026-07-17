"use client";

import profile from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const { email, phone, linkedin, github } = profile.contact;

  return (
    <section id="contact" className="w-full px-6 py-20 relative z-10 flex flex-col items-center">
      {/* Section heading centered */}
      <div className="w-full max-w-5xl">
        <SectionHeading
          index="07 — Contact"
          title="Let's talk"
          description="Reach out directly via email or find me on my professional networks."
        />
      </div>

      {/* Centered contact card */}
      <div className="mt-12 w-full max-w-2xl flex flex-col items-center text-center gap-8">
        {/* Decorative ember line */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-ember/40" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ember flex-shrink-0">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-ember/40" />
        </div>

        <p className="text-base text-ink-muted leading-relaxed max-w-xl">
          I am always open to discussing new opportunities, full-stack projects, creative collaborations, or just talking shop about code and algorithms.
        </p>

        {/* Contact links - stacked centered */}
        <div className="w-full flex flex-col gap-3">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-3 border border-line bg-surface/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-all hover:border-ember hover:text-ember hover:bg-surface/60 rounded-lg group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {email}
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-3 border border-line bg-surface/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-all hover:border-ember hover:text-ember hover:bg-surface/60 rounded-lg group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {phone}
            </a>
          )}

          {/* Social links in a row */}
          <div className="flex gap-3 mt-1">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-line bg-surface/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-all hover:border-ember hover:text-ember hover:bg-surface/60 rounded-lg group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-line bg-surface/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-all hover:border-ember hover:text-ember hover:bg-surface/60 rounded-lg group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center gap-4 w-full max-w-xs mt-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-line/50" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted/50">end</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-line/50" />
        </div>
      </div>
    </section>
  );
}
