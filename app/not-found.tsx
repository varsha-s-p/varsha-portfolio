import Link from "next/link";
import profile from "@/data/profile";

export const metadata = {
  title: "404 — Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center text-ink">
      <p className="eyebrow">Error 404</p>
      <h1 className="font-display text-6xl font-bold tracking-tight sm:text-8xl">
        Not forged yet
      </h1>
      <p className="max-w-md text-ink-muted">
        This page hasn&apos;t been hammered into shape. It may have moved, or never existed.
      </p>
      <Link
        href="/"
        className="border border-ember px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ember transition-colors hover:bg-ember hover:text-bg"
      >
        Back to {profile.name.split(" ")[0]}&apos;s portfolio
      </Link>
    </main>
  );
}
