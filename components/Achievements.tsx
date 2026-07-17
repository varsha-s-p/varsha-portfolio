import profile from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-20 relative z-10">
      <SectionHeading index="06 — Achievements" title="Achievements" description="Highlights of awards, competitions, and personal milestones." />

      <div className="grid gap-6 lg:grid-cols-2">
        {profile.achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="rounded-3xl border border-line bg-surface/50 p-6 shadow-sm transition duration-300 hover:border-ember/50 hover:bg-surface/70"
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {achievement.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{achievement.description}</p>
            {achievement.details && achievement.details.length > 0 && (
              <ul className="mt-5 space-y-2 text-sm text-ink-muted">
                {achievement.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-0.5 text-ember">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
