"use client";

import profile from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import Tilt from "react-parallax-tilt";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 relative z-10">
      <SectionHeading index="04 — Experience" title="Experience" />
      <div className="space-y-8">
        {profile.experience.map((job) => (
          <Tilt key={`${job.org}-${job.start}`} tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all">
            <div className="border-l-2 border-ember pl-6 py-6 pr-6 rounded-r-xl bg-surface/40 backdrop-blur-md shadow-lg transition-all hover:bg-surface/60">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-bold text-ink">
                {job.role} <span className="text-ink-muted">— {job.org}</span>
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
                {job.start} – {job.end}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{job.summary}</p>
            {job.highlights && job.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-ink-muted">
                    <span className="text-ember">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
            {job.certificateImageUrl && (
              <a
                href={job.certificateImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ember transition-colors hover:bg-ember hover:text-bg"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                {job.certificateLabel || "Open certificate"}
              </a>
            )}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
