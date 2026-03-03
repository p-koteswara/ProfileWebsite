"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "All" | "Web" | "Backend" | "UI";

const FEATURED_PROJECTS = [
  {
    title: "Commerce Studio",
    description: "Modular storefront and dashboard built with Next.js and a headless backend.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    category: "Web" as Category,
  },
  {
    title: "Realtime Collab Board",
    description: "Low-latency collaborative whiteboard with presence indicators and comments.",
    tech: ["React", "WebSockets", "Node.js"],
    category: "Web" as Category,
  },
  {
    title: "Analytics Console",
    description: "Executive dashboard for product metrics with custom charting and alerts.",
    tech: ["React", "PostgreSQL", "D3.js"],
    category: "Backend" as Category,
  },
];

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "REST / GraphQL",
  "Testing",
];

const EXPERIENCE = [
  {
    period: "2023 — Present",
    title: "Full Stack Developer",
    company: "Independent",
    summary: "Building calm, production-grade web products for startups and small teams.",
  },
  {
    period: "2021 — 2023",
    title: "Software Engineer",
    company: "Product Teams",
    summary: "Worked across the stack on dashboards, APIs, and internal tools.",
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
      {/* Hero */}
      <section id="hero" className="pt-10 sm:pt-12 lg:pt-16">
        <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 px-6 py-10 text-zinc-50 shadow-sm dark:from-zinc-900 dark:via-zinc-950 dark:to-black sm:px-10 sm:py-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Full Stack Developer
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Calm, reliable web experiences.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                I design and build focused, production-grade products—from polished UIs
                to stable backend systems—so that teams can move quickly without the
                noise.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-3 text-sm font-medium text-zinc-900 transition-transform transition-colors hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  View my work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-500/60 bg-transparent px-6 py-3 text-sm font-medium text-zinc-50 transition-colors hover:border-zinc-300 hover:bg-zinc-900/60"
                >
                  Let&apos;s connect
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-5 text-sm text-zinc-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Snapshot
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  Available for work
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-sm">
                  I work best on products where the details matter: thoughtful
                  interactions, clear data, and infrastructure that doesn&apos;t fall
                  over.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["TypeScript", "React", "Next.js", "Node.js"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-zinc-200"
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

      {/* Featured projects */}
      <section id="work" className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Featured projects
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              A few recent pieces of work that highlight how I think about structure,
              UX, and long-term maintainability.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {["All", "Web", "Backend", "UI"].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category as Category)}
                className={`rounded-full border px-3 py-1 transition-colors ${
                  activeCategory === category
                    ? "border-foreground bg-accent text-foreground"
                    : "border-border bg-background text-muted hover:border-border/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-background/60 p-5 shadow-sm transition-transform transition-shadow hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                <h3 className="text-base font-semibold leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-accent/60 px-3 py-1 text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-muted transition-colors hover:text-foreground"
          >
            View all projects
          </Link>
        </div>
      </section>

      {/* About + skills */}
      <section id="about" className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            About
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m a full stack developer who enjoys designing simple, resilient
            systems. I care about clear abstractions, small details, and building
            interfaces that feel calm and predictable rather than loud or overdesigned.
          </p>

          <div className="mt-6 space-y-4 text-sm">
            {EXPERIENCE.map((item) => (
              <div key={item.period} className="flex gap-4">
                <div className="w-28 shrink-0 text-xs text-muted">{item.period}</div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {item.title} ·{" "}
                    <span className="text-muted">{item.company}</span>
                  </p>
                  <p className="text-sm text-muted">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-border bg-background/60 p-5 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-accent/70 px-3 py-1 text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="space-y-6 border-t border-border/60 pt-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s work together
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Whether you need a new product built or an existing system cleaned up,
            I&apos;m happy to talk through the details.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform transition-colors hover:-translate-y-0.5 hover:bg-foreground/90"
          >
            Hire me
          </Link>
          <a
            href="mailto:perumallakoteswara@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border/80 hover:bg-accent"
          >
            Email me
          </a>
        </div>
      </section>
    </div>
  );
}
