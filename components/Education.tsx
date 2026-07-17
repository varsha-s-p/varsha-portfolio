import profile from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 relative z-10">
      <SectionHeading index="05 — Education" title="Education" />

      <div className="max-w-3xl space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-line">
        {profile.education.map((ed) => (
          <div key={`${ed.school}-${ed.start}`} className="relative pl-10 group">
            {/* Timeline bullet indicator */}
            <div className="absolute left-2 top-2 h-3.5 w-3.5 rounded-full border-2 border-bg bg-ember transition-transform duration-300 group-hover:scale-125" />

            <div className="flex flex-col gap-1.5 p-5 rounded-xl border border-line bg-surface/40 backdrop-blur-sm transition-all hover:border-ember/40 hover:bg-surface/60">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="font-display text-lg font-bold text-ink">
                  {ed.degree}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-ember sm:text-right">
                  {ed.start} – {ed.end}
                </span>
              </div>
              <p className="text-sm text-ink-muted font-medium">{ed.school}</p>
              {ed.notes && (
                <p className="mt-2 text-xs text-ink-muted/80 leading-relaxed font-mono">
                  {ed.notes}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

