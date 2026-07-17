import Image from "next/image";
import profile from "@/data/profile";
import WavingHand from "./WavingHand";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:py-28 relative z-10"
    >
      {/* Left Side: Content */}
      <div className="flex w-full flex-col items-start text-left lg:w-1/2 lg:pr-10">
        <p className="eyebrow flex items-center gap-2 mb-4">
          Developer • Builder • Learner <WavingHand />
        </p>

        <h1 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl xl:text-7xl">
          {profile.name}
        </h1>
        
        <h2 className="mt-3 font-mono text-lg font-medium text-ember">
          {profile.role}
        </h2>

        <p className="mt-6 max-w-xl text-balance text-lg text-ink-muted leading-relaxed">
          {profile.shortBio}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="bg-ember px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-bg transition-opacity hover:opacity-90 shadow-lg shadow-ember/20"
          >
            View projects
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="border border-line bg-surface/50 backdrop-blur-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-ember hover:text-ember shadow-sm"
          >
            Download résumé
          </a>
        </div>
      </div>

      {/* Right Side: Minimal showcase */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-10 lg:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 border-2 border-ember/30 shadow-[0_0_40px_rgba(255,100,50,0.15)] backdrop-blur-sm group">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
            <Image
              src={profile.realPhoto}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
