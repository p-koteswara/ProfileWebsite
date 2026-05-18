import {
  GraduationCap,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Layout,
  Sparkles,
} from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "Trynocode",
      role: "Software Developer",
      period: "Jul 2025 — Jan 2026",
      description:
        "Delivered 5+ UI modules across 2 client-facing applications (real estate and service management). Converted 50+ Figma designs into production-ready components, integrated 20+ REST APIs via Postman, and implemented Firebase auth, real-time updates, and data storage. Built responsive landing pages with 90+ Lighthouse scores and co-developed 10+ reusable React/Next.js components for faster MVP delivery.",
      tech: ["Next.js", "React", "Firebase", "REST APIs", "Postman", "Figma"],
    },
    {
      company: "Whizkey",
      role: "Summer Intern (Remote)",
      period: "Jun 2024 — Aug 2024",
      description:
        "Built a lead database of 250+ potential clients and wrote 5 SEO-optimized articles, increasing organic traffic by an estimated 20% over 2 months.",
      tech: ["Lead Generation", "SEO", "Technical Writing"],
    },
  ];

  const education = [
    {
      school: "Bits Pilani Dubai Campus",
      degree: "B.E. Computer Science",
      period: "2022 — 2026",
      details: "CGPA: 8.0",
      location: "Dubai",
    },
    {
      school: "Bright Riders School",
      degree: "Grade 4 — Grade 12",
      period: "2014 — 2022",
      location: "Abu Dhabi",
    },
  ];

  const skillCategories = [
    {
      name: "Languages",
      icon: <Code2 className="h-4 w-4" />,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      name: "Frameworks & Tech",
      icon: <Layout className="h-4 w-4" />,
      skills: ["Next.js", "FastAPI", "Flask", "PyTorch", "RAG"],
    },
    {
      name: "Tools & Databases",
      icon: <Database className="h-4 w-4" />,
      skills: [
        "MySQL",
        "SQLite",
        "PostgreSQL",
        "Firebase",
        "ChromaDB",
        "Postman",
        "Figma",
        "Git",
        "GitHub",
      ],
    },
    {
      name: "Libraries & Concepts",
      icon: <Cpu className="h-4 w-4" />,
      skills: [
        "Scikit-learn",
        "NumPy",
        "SciPy",
        "Matplotlib",
        "REST APIs",
        "System Design",
        "DSA",
        "OOP",
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="card-surface space-y-6 p-6 pt-6 sm:p-8 sm:pt-14">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Building with <span className="text-emerald-500">purpose.</span>
        </h1>
        <div className="max-w-3xl space-y-4">
          <p className="text-sm leading-relaxed text-muted sm:text-lg">
            I&apos;m Koteswara Rao Perumalla, a Computer Science student at BITS
            Pilani Dubai. I specialize in bridging the gap between design and
            functionality, creating seamless digital experiences that are both
            robust and intuitive.
          </p>
          <p className="text-sm leading-relaxed text-muted sm:text-lg">
            My approach is rooted in simplicity and performance. Whether I&apos;m
            architecting a backend with FastAPI or crafting a frontend with
            Next.js, I focus on delivering clean, maintainable code that solves
            real-world problems.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="section-divider flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-emerald-500" />
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Experience
          </h2>
        </div>
        <div className="card-grid sm:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.company} className="uniform-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-muted">@</span>
                    <span className="text-lg font-medium text-emerald-500">
                      {exp.company}
                    </span>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="tag-border px-2.5 py-0.5 text-[10px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 text-xs font-medium text-muted">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="section-divider flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-500" />
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Technical Toolkit
          </h2>
        </div>
        <div className="card-grid sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.name} className="uniform-card">
              <div className="flex items-center gap-2 text-emerald-500">
                {category.icon}
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
              <div className="uniform-card-body flex-1">
                <div className="flex flex-wrap content-start gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-sm text-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-split lg:grid-cols-2 lg:gap-16">
        <section className="flex flex-col space-y-8">
          <div className="section-divider flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Education
            </h2>
          </div>
          <div className="card-grid sm:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.school} className="uniform-card justify-start gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-foreground">{edu.school}</h3>
                  <span className="shrink-0 text-xs text-muted">{edu.period}</span>
                </div>
                <p className="text-sm text-emerald-500">{edu.degree}</p>
                {edu.details && (
                  <p className="text-sm text-muted">{edu.details}</p>
                )}
                <p className="text-xs text-muted/60">{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex h-full flex-col space-y-8">
          <div className="section-divider flex items-center gap-2">
            <Layout className="h-5 w-5 text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Beyond Code
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted">
              Outside of technical development, I am deeply interested in system
              design principles and optimizing development workflows. I enjoy
              participating in hackathons and exploring the intersection of AI
              and human productivity.
            </p>
            <div className="uniform-card mt-auto flex-1 bg-emerald-500/5">
              <h4 className="mb-2 text-sm font-medium text-emerald-500">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3 text-xs text-muted">
                <span>Communication</span>
                <span>•</span>
                <span>Creativity</span>
                <span>•</span>
                <span>Problem Solving</span>
                <span>•</span>
                <span>Quick Learner</span>
                <span>•</span>
                <span>Adaptable</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
