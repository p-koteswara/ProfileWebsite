"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Download } from "lucide-react";
import Magnetic from "@/components/magnetic";
import TiltCard from "@/components/tilt-card";

type Category = "All" | "Web" | "Backend" | "UI";

const FEATURED_PROJECTS = [
  {
    title: "Smart Medical Box",
    description: "Designed a smart medicine dispenser prototype using Raspberry Pi and Servo Motors with a Flask web interface.",
    tech: ["Python", "Flask", "Raspberry Pi", "OpenCV"],
    category: "Backend" as Category,
  },
  {
    title: "Customer Segmentation",
    description: "Performed customer segmentation using RFM analysis and K-Means clustering algorithms to improve targeting accuracy.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    category: "Backend" as Category,
  },
  {
    title: "AI Interview Assistant",
    description: "Developed a prototype system to analyze interview responses using text and voice input with sentiment analysis.",
    tech: ["Python", "Google Speech API", "Sentiment Analysis"],
    category: "Backend" as Category,
  },
];

const SKILLS = [
  "Python",
  "React JS",
  "Next JS",
  "FastAPI",
  "Flask",
  "MySQL",
  "Firebase",
  "Rest APIs",
  "Postman",
  "Figma",
];

const EXPERIENCE = [
  {
    period: "Jul 2025 — Jan 2026",
    title: "Software Developer",
    company: "Trynocode",
    summary: "Worked on client-facing apps (Mabani, K2K). Converted Figma designs to functional React/Next.js screens and integrated REST APIs.",
  },
  {
    period: "Jun 2024 — Aug 2024",
    title: "Summer Intern",
    company: "Whizkey",
    summary: "Built lead-generation databases and wrote SEO-optimized technical articles. Participated in company-wide hackathons.",
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
      <div className="mt-7 space-y-5 sm:mt-2">
        {/* Hi Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative rounded-full p-2 border-2 border-dashed border-emerald-500 shadow-2xl dark:border-emerald-400 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64">
            <Image
              src="/hi image.png"
              alt="Hi"
              fill
              className="rounded-full object-cover p-1"
              priority
            />
          </div>
        </motion.div>

        {/* Hero */}
        <motion.section
          id="hero"
          className="pt-0 min-h-[60vh] flex flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hover-gradient-shift relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-emerald-950 via-emerald-950 to-emerald-900 px-5 py-8 text-white shadow-2xl dark:from-black dark:via-emerald-950 dark:to-emerald-950 sm:px-10 sm:py-12">
            {/* Decorative background circle */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
              <motion.div className="space-y-6" variants={stagger} initial="initial" animate="whileInView">
                <motion.p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-xs" variants={fadeInUp}>
                  Computer Science Student @ BITS Pilani
                </motion.p>
                <motion.h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl" variants={fadeInUp}>
                  Reliable <span className="text-emerald-400">web & backend systems.</span>
                </motion.h1>
                <motion.p className="max-w-3xl text-xs leading-relaxed text-white/80 sm:text-sm md:text-base" variants={fadeInUp}>
                  I&apos;m Koteswara Rao Perumalla. I build production-grade products—from 
                  responsive React/Next.js interfaces to robust Python backends—focusing 
                  on performance and simple abstractions.
                </motion.p>
                <motion.div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3" variants={fadeInUp}>
                  <Magnetic>
                    <Link
                      href="/projects"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-medium text-emerald-950 transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-emerald-500/20 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                    >
                      View my work
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center rounded-full border border-white/60 bg-transparent px-4 py-3 text-xs font-medium text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                    >
                      Let&apos;s connect
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="https://github.com/p-koteswara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-transparent px-4 py-3 text-xs font-medium text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sm:inline">GitHub</span>
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="/Koteswara - Resume.pdf"
                      download
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-3 text-xs font-medium text-white transition-all hover:bg-emerald-500/30 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                    >
                      <Download className="h-4 w-4" />
                      Resume
                    </a>
                  </Magnetic>
                </motion.div>
              </motion.div>

              <motion.div 
                className="hover-gradient-shift space-y-4 rounded-2xl border border-white/20 bg-gradient-to-br from-black/20 via-black/20 to-emerald-500/10 p-4 text-xs text-white/90 shadow-sm backdrop-blur-md sm:p-5 sm:text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                    Snapshot
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300 sm:px-3 sm:py-1 sm:text-xs">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Available for work
                  </span>
                </div>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    I work best at the intersection of performance and design, 
                    building stable systems that solve real problems with 
                    minimal noise.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs">
                    {["Python", "React", "FastAPI", "Next.js"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-white/90 sm:px-3 sm:py-1"
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
      </div>

      {/* Featured projects */}
      <motion.section id="work" className="space-y-6 sm:space-y-8" {...fadeInUp}>
        <div className="flex flex-wrap items-end justify-between gap-4">
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
                className={`rounded-full border px-2.5 py-1 transition-all sm:px-3 ${
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
          className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <TiltCard key={project.title}>
              <motion.div
                variants={fadeInUp}
                className="hover-gradient-shift group flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-gradient-to-br from-background/60 via-background/60 to-emerald-500/5 p-4 sm:p-5 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 backdrop-blur-sm"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors sm:text-base">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-3.5 w-3.5 text-muted opacity-0 transition-opacity group-hover:opacity-100 sm:h-4 sm:w-4" />
                  </div>
                  <p className="text-xs leading-relaxed text-muted sm:text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] sm:mt-5 sm:gap-2 sm:text-xs">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-accent/60 px-2 py-0.5 text-muted group-hover:border-emerald-500/20 group-hover:text-foreground transition-colors sm:px-3 sm:py-1"
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
        className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10"
        {...fadeInUp}
      >
        <div className="space-y-4">
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

          <div className="mt-6 space-y-4 text-xs sm:text-sm">
            {EXPERIENCE.map((item, idx) => (
              <motion.div 
                key={item.period} 
                className="flex flex-col gap-1 sm:flex-row sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full shrink-0 text-[10px] text-muted sm:w-28 sm:text-xs">{item.period}</div>
                <div className="space-y-1">
                  <p className="font-medium">
                    {item.title} ·{" "}
                    <span className="text-muted">{item.company}</span>
                  </p>
                  <p className="text-muted">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-foreground sm:text-sm"
            >
              View more about me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <motion.div 
          className="hover-gradient-shift space-y-4 rounded-2xl border border-border bg-gradient-to-br from-background/60 via-background/60 to-emerald-500/5 p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted sm:text-xs">
            Skills
          </h3>
          <div className="flex flex-wrap gap-1.5 text-[10px] sm:gap-2 sm:text-xs">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-accent/70 px-2 py-0.5 text-muted hover:border-emerald-500/40 hover:text-foreground transition-colors cursor-default sm:px-3 sm:py-1"
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
