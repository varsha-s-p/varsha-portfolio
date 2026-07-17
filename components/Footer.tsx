import profile from "@/data/profile";

// DO NOT EDIT the surrounding attribution text in this component.
// Only {name} is pulled dynamically from data/profile.ts — every fork of
// this template must keep this line, unedited, per the FORGE program
// terms. See README.md "Non-negotiable rule".
export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
        Built under Zephvion&apos;s FORGE apprenticeship program, maintained by{" "}
        {profile.name}, FORGE Apprentice.
      </p>
    </footer>
  );
}
