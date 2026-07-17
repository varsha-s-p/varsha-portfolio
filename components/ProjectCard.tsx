"use client";

import type { Project } from "@/data/profile";
import Tilt from "react-parallax-tilt";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.15} glareColor="white" glarePosition="all">
      <article className="group flex flex-col gap-4 rounded-xl border border-line bg-surface/50 p-6 backdrop-blur-md transition-colors hover:border-ember/60 h-full">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold tracking-tight text-ink">{project.title}</h3>
        {project.featured && (
          <span className="shrink-0 border border-ember/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ember">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

      <ul className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-4 pt-2 font-mono text-xs uppercase tracking-[0.15em]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ember transition-opacity hover:opacity-80"
          >
            Live demo ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
    </Tilt>
  );
}
