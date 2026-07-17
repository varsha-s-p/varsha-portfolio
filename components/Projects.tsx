"use client";

import { useEffect, useState } from "react";
import profile from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const projects = profile.projects;

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 relative z-10">
      <SectionHeading
        index="03 — Projects"
        title="Works"
        description=""
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {loading ? (
          Array.from({ length: 2 }).map((_, i) => <ProjectCardSkeleton key={i} />)
        ) : projects.length > 0 ? (
          projects.map((project) => <ProjectCard key={project.slug} project={project} />)
        ) : (
          <p className="col-span-full text-sm text-ink-muted">No projects to display yet.</p>
        )}
      </div>
    </section>
  );
}
