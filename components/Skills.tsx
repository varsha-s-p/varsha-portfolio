import SectionHeading from "@/components/SectionHeading";

const skillGroups = [
  {
    title: "💻 Programming Languages",
    items: ["Python", "C++", "Java"],
  },
  {
    title: "🌐 Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "🗄️ Databases & Tools",
    items: ["MongoDB", "SQL", "NoSQL", "Database Management Systems", "GitHub", "RESTful APIs"],
  },
  {
    title: "🤖 Machine Learning & Data Science",
    items: ["Machine Learning", "Data Analysis", "Pandas", "NumPy"],
  },
  {
    title: "📚 CS Fundamentals",
    items: ["Data Structures & Algorithms", "Problem-Solving", "Operating Systems", "System Design", "Linux", "Networking", "Object-Oriented Programming"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="02 — Skills" title="Tools & technologies" />

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="group rounded-[32px] border border-line bg-surface/80 p-6 shadow-[0_24px_80px_rgb(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-ember">
              {group.title}
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-bg px-3 py-2 text-xs font-medium text-ink shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
