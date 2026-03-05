"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Magnetic from "@/components/magnetic";
import TiltCard from "@/components/tilt-card";

type Category = "All" | "Web" | "Backend" | "UI";

const FEATURED_PROJECTS = [
  // ... (keeping same projects)
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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const stagger = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
} as const;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-20 sm:space-y-24 lg:space-y-28">
      {/* Hero */}
      <motion.section
        id="hero"
        className="pt-10 sm:pt-12 lg:pt-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-emerald-950 via-emerald-950 to-emerald-900 px-6 py-10 text-white shadow-2xl dark:from-black dark:via-emerald-950 dark:to-emerald-950 sm:px-10 sm:py-12">
          {/* Decorative background circle */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          
          <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <motion.div className="space-y-6" variants={stagger} initial="initial" animate="whileInView">
              <motion.p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70" variants={fadeInUp}>
                Full Stack Developer
              </motion.p>
              <motion.h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl" variants={fadeInUp}>
                Calm, reliable <span className="text-emerald-400">web experiences.</span>
              </motion.h1>
              <motion.p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base" variants={fadeInUp}>
                I design and build focused, production-grade products—from polished UIs
                to stable backend systems—so that teams can move quickly without the
                noise.
              </motion.p>
              <motion.div className="flex flex-wrap gap-3" variants={fadeInUp}>
                <Magnetic>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-emerald-950 transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    View my work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
                  >
                    Let&apos;s connect
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-4 rounded-2xl border border-white/20 bg-black/20 p-5 text-sm text-white/90 shadow-sm backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Snapshot
                </span>
                <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Available for work
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed">
                  I work best on products where the details matter: thoughtful
                  interactions, clear data, and infrastructure that doesn&apos;t fall
                  over.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["TypeScript", "React", "Next.js", "Node.js"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured projects */}
      <motion.section id="work" className="space-y-8" {...fadeInUp}>
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
                className={`rounded-full border px-3 py-1 transition-all ${
                  activeCategory === category
                    ? "border-foreground bg-accent text-foreground shadow-sm shadow-emerald-500/20"
                    : "border-border bg-background text-muted hover:border-border/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <TiltCard key={project.title}>
              <motion.div
                variants={fadeInUp}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-background/60 p-5 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-accent/60 px-3 py-1 text-muted group-hover:border-emerald-500/20 group-hover:text-foreground transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.section>

      {/* About + skills */}
      <motion.section 
        id="about" 
        className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        {...fadeInUp}
      >
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
            {EXPERIENCE.map((item, idx) => (
              <motion.div 
                key={item.period} 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-28 shrink-0 text-xs text-muted">{item.period}</div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {item.title} ·{" "}
                    <span className="text-muted">{item.company}</span>
                  </p>
                  <p className="text-sm text-muted">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              View more about me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <motion.div 
          className="space-y-4 rounded-2xl border border-border bg-background/60 p-5 shadow-sm hover:shadow-lg transition-shadow backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-accent/70 px-3 py-1 text-muted hover:border-emerald-500/40 hover:text-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
