"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Download } from "lucide-react";

type Category = "All" | "Web" | "Backend" | "UI";

const FEATURED_PROJECTS = [
  {
    title: "Expense Tracker (Cashually)",
    description:
      "Full-stack expense tracking app with JWT auth, 10 REST endpoints, and PostgreSQL schema—deployed live at Cashually.vercel.app.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "JWT"],
    category: "Web" as Category,
    href: "https://cashually.vercel.app",
  },
  {
    title: "Smart Medical Box",
    description:
      "IoT medicine dispenser with YOLOv5 pill detection (~85% accuracy), scheduled dispensing, and a Flask dashboard for logs and camera feed.",
    tech: ["Python", "Flask", "Raspberry Pi", "YOLOv5"],
    category: "Backend" as Category,
  },
  {
    title: "Customer Segmentation",
    description:
      "Performed customer segmentation using RFM analysis and K-Means clustering algorithms to improve targeting accuracy.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    category: "Backend" as Category,
  },
  {
    title: "AI Interview Assistant",
    description:
      "Analyzes interview responses with DistilBERT sentiment scoring, fluency metrics, and visual summary reports in under 3 seconds.",
    tech: ["Python", "Hugging Face", "Google Speech API", "Tkinter"],
    category: "Backend" as Category,
  },
];

const SKILLS = [
  "Python",
  "JavaScript",
  "Next.js",
  "React",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "Firebase",
  "REST APIs",
  "Postman",
  "Figma",
  "PyTorch",
];

const EXPERIENCE = [
  {
    period: "Jul 2025 — Jan 2026",
    title: "Software Developer",
    company: "Trynocode",
    summary:
      "Delivered 5+ UI modules across real estate and service-management apps; converted 50+ Figma designs to React/Next.js and integrated 20+ REST APIs with Firebase auth and real-time features.",
  },
  {
    period: "Jun 2024 — Aug 2024",
    title: "Summer Intern (Remote)",
    company: "Whizkey",
    summary:
      "Built a lead database of 250+ potential clients and wrote 5 SEO-optimized articles, increasing estimated organic traffic by ~20% over two months.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-20 sm:space-y-24 lg:space-y-28">
      <div className="mt-7 space-y-5 sm:mt-2">
        <div className="flex justify-center">
          <div className="relative h-32 w-32 rounded-full border-2 border-dashed border-emerald-900 p-2 dark:border-emerald-600 sm:h-48 sm:w-48 md:h-64 md:w-64">
            <Image
              src="/hi image.png"
              alt="Hi"
              fill
              className="rounded-full object-cover p-1"
              priority
            />
          </div>
        </div>

        <section id="hero" className="flex min-h-[60vh] flex-col pt-0">
          <div className="relative overflow-hidden rounded-lg border-2 border-emerald-900 bg-gradient-to-br from-emerald-950 via-emerald-950 to-emerald-900 px-5 py-8 text-white dark:border-emerald-700 dark:from-black dark:via-emerald-950 dark:to-emerald-950 sm:px-10 sm:py-12">
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-stretch">
              <div className="space-y-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
                  Computer Science Student @ BITS Pilani
                </p>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                  Reliable <span className="text-emerald-300">web & backend systems.</span>
                </h1>
                <p className="max-w-3xl text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
                  I&apos;m Koteswara Rao Perumalla. I build production-grade products—from
                  responsive React/Next.js interfaces to robust Python backends—focusing
                  on performance and simple abstractions.
                </p>
                <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:flex sm:flex-wrap sm:gap-3">
                  <Link
                    href="/projects"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-white bg-white px-4 py-3 text-xs font-medium text-emerald-950 transition-colors hover:bg-white/90 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                  >
                    View my work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-md border border-white/80 bg-transparent px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                  >
                    Let&apos;s connect
                  </Link>
                  <a
                    href="https://github.com/p-koteswara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-white/80 bg-transparent px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sm:inline">GitHub</span>
                  </a>
                  <a
                    href="/Koteswara - Resume.pdf"
                    download
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-emerald-400/60 bg-emerald-500/20 px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-emerald-500/30 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </div>
              </div>

              <div className="hero-snapshot">
                <div className="flex items-center justify-between">
                  <span className="hero-snapshot-muted text-[10px] uppercase tracking-[0.2em] sm:text-xs">
                    Snapshot
                  </span>
                  <span className="flex items-center gap-2 rounded-md border-2 border-emerald-400/70 bg-emerald-800/50 px-2 py-0.5 text-[10px] text-emerald-100 sm:px-3 sm:py-1 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Available for work
                  </span>
                </div>
                <div className="space-y-3">
                  <p className="leading-relaxed text-emerald-50">
                    I work best at the intersection of performance and design,
                    building stable systems that solve real problems with
                    minimal noise.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs">
                    {["Python", "React", "FastAPI", "Next.js"].map((item) => (
                      <span
                        key={item}
                        className="hero-snapshot-tag"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="work" className="card-surface space-y-6 p-5 sm:space-y-8 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
              Featured projects
            </h2>
            <p className="max-w-4xl text-xs leading-relaxed text-muted sm:text-sm md:text-base">
              A few technical projects that highlight how I think about system design,
              performance, and user experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[10px] sm:gap-2 sm:text-xs">
            {["All", "Web", "Backend", "UI"].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category as Category)}
                className={`rounded-md border-2 px-2.5 py-1 sm:px-3 ${
                  activeCategory === category
                    ? "border-emerald-900 bg-emerald-100 text-emerald-950 dark:border-emerald-600 dark:bg-emerald-950 dark:text-emerald-100"
                    : "border-emerald-800 bg-card text-foreground/70 hover:border-emerald-900 hover:text-foreground dark:border-emerald-700 dark:bg-background dark:text-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="card-grid sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="uniform-card">
              <div className="uniform-card-body">
                <div className="flex w-full items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold leading-tight sm:text-base">
                    {project.title}
                  </h3>
                  {"href" in project && project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-muted transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
                <p className="uniform-card-desc">{project.description}</p>
              </div>
              <div className="uniform-card-footer">
                {project.tech.map((item) => (
                  <span key={item} className="tag-border px-2 py-0.5 text-muted sm:px-3 sm:py-1">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section
        id="about"
        className="section-split md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10"
      >
        <div className="uniform-card space-y-4">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            About
          </h2>
          <p className="max-w-4xl text-xs leading-relaxed text-muted sm:text-sm md:text-base">
            I&apos;m a Computer Science student at BITS Pilani Dubai with a
            passion for building resilient systems and thoughtful interfaces.
            I have experience in full-stack development, from React/Next.js
            frontends to Python/FastAPI backends, and I enjoy solving complex
            problems with clean code.
          </p>

          <div className="card-grid mt-6 text-xs sm:grid-cols-2 sm:text-sm">
            {EXPERIENCE.map((item) => (
              <div key={item.period} className="uniform-card flex-col gap-3">
                <p className="shrink-0 text-[10px] text-muted sm:text-xs">{item.period}</p>
                <div className="uniform-card-body gap-1">
                  <p className="font-medium">
                    {item.title} · <span className="text-muted">{item.company}</span>
                  </p>
                  <p className="uniform-card-desc line-clamp-4">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-foreground sm:text-sm"
            >
              View more about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="uniform-card space-y-4">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted sm:text-xs">
            Skills
          </h3>
          <div className="flex flex-wrap gap-1.5 text-[10px] sm:gap-2 sm:text-xs">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="tag-border px-2 py-0.5 text-muted sm:px-3 sm:py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
