"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Download, Send } from "lucide-react";

type Category = "All" | "AI Systems" | "Full-Stack" | "Backend";

const FEATURED_PROJECTS = [
  {
    title: "Clarity — Multi-Doc RAG + LangGraph Agent",
    description:
      "Production RAG pipeline supporting multi-doc ingestion (PDF, DOCX, TXT, MD) with Gemini embeddings & ChromaDB. Features LangGraph ReAct agent with autonomous tool orchestration, session memory, SSE streaming, and RAG evaluation pipeline.",
    tech: ["FastAPI", "LangGraph", "ChromaDB", "Gemini", "Next.js", "Docker"],
    category: "AI Systems" as Category,
    href: "https://clarrity.vercel.app/",
  },
  {
    title: "Expense Tracker (Cashually + AI Chatbot)",
    description:
      "Full-stack financial application using FastAPI, Next.js, and PostgreSQL. Integrated an LLM-powered AI chatbot allowing users to query financial data via natural language, with 10+ REST APIs (<150ms) and JWT auth.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "JWT", "LLMs"],
    category: "Full-Stack" as Category,
    href: "https://cashually.vercel.app/",
  },
  {
    title: "AI Based Interview Assistant",
    description:
      "Automated evaluation engine using fine-tuned Hugging Face transformers (DistilBERT) and vector-based semantic search, processing inputs in <3s with 80% sentiment alignment and visual heatmaps.",
    tech: ["Python", "Hugging Face", "DistilBERT", "Tkinter", "Google Speech API"],
    category: "AI Systems" as Category,
  },
  {
    title: "Mabani (PropTech on Play Store)",
    description:
      "Engineered full-stack features for live PropTech app, integrated 20+ REST APIs feeding real-time user data into backend AI automation workflows, and architected Firebase real-time sync listeners.",
    tech: ["React", "Next.js", "Firebase", "REST APIs", "AI Workflows"],
    category: "Full-Stack" as Category,
  },
];

const SKILLS = [
  "Python",
  "LangGraph",
  "LangChain",
  "FastAPI",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "ChromaDB",
  "Docker",
  "PyTorch",
  "Hugging Face",
  "LLMs",
  "RAG Pipelines",
  "Firebase",
  "REST APIs",
  "SQL",
  "Git",
];

const EXPERIENCE = [
  {
    period: "Jul 2025 — Jan 2026",
    title: "Software Developer",
    company: "Trynocode",
    summary:
      "Engineered full-stack features for Mabani (live PropTech app on Play Store), integrated 20+ REST APIs into backend AI automation workflows, architected Firebase real-time sync listeners, implemented test suites reducing production bugs by ~25%, and engineered MVP core features for an AI notetaker app listed on Amazon.",
  },
  {
    period: "Jun 2024 — Aug 2024",
    title: "Summer Intern (Remote)",
    company: "Whizkey",
    summary:
      "Built lead database of 250+ clients and wrote SEO-optimized content, increasing organic traffic by ~20% over 2 months.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    window.location.href = `mailto:perumallakoteswara@gmail.com?body=${encodeURIComponent(message)}`;
    setMessage("");
  };

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
                  Applied AI Engineer • Full-Stack & ML Systems • BITS Pilani (2022–2026)
                </p>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                  Applied AI & <span className="text-emerald-300">Scalable Systems.</span>
                </h1>
                <p className="max-w-3xl text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
                  I&apos;m Koteswara Rao Perumalla. I build production AI pipelines—from
                  multi-document RAG and autonomous LangGraph agents to high-performance
                  FastAPI backends and full-stack web applications.
                </p>
                <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:flex sm:flex-wrap sm:gap-3">
                  <Link
                    href="/projects"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs font-medium text-emerald-950 transition-colors hover:bg-white sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
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
                    download="Koteswara_Rao_Perumalla_Resume.pdf"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-emerald-400/60 bg-emerald-500/20 px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-emerald-500/30 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>

                  {/* Direct Message Input */}
                  <div className="flex w-full items-center gap-2 rounded-md bg-white/5 border border-white/10 px-4 py-2 transition-all focus-within:border-emerald-500/50 focus-within:bg-white/10 sm:w-auto sm:min-w-[260px]">
                    <input
                      type="text"
                      placeholder="Msg me directly..."
                      className="w-full bg-transparent text-xs outline-none text-white placeholder:text-white/40 sm:text-sm"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                      onClick={handleSendMessage}
                      className="group/send flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-emerald-950 transition-all hover:bg-emerald-400 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Send message to perumallakoteswara@gmail.com"
                      disabled={!message.trim()}
                    >
                      <Send className="h-3.5 w-3.5 transition-transform group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="hero-snapshot">
                <div className="flex items-center justify-between">
                  <span className="hero-snapshot-muted text-[10px] uppercase tracking-[0.2em] sm:text-xs">
                    Snapshot
                  </span>
                  <span className="flex items-center gap-2 rounded-md border-2 border-emerald-400/70 bg-emerald-800/50 px-2 py-0.5 text-[10px] text-emerald-100 sm:px-3 sm:py-1 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Open to Relocation
                  </span>
                </div>
                <div className="space-y-3">
                  <p className="leading-relaxed text-emerald-50">
                    Focused on multi-document RAG, agentic ReAct workflows,
                    real-time streaming, and reliable backend engineering with
                    FastAPI, Next.js, and Docker.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs">
                    {["FastAPI", "LangGraph", "RAG", "Next.js", "Docker", "PostgreSQL"].map((item) => (
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
              Production systems highlighting multi-document RAG, agentic tool orchestration,
              full-stack architectures, and AI evaluation pipelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[10px] sm:gap-2 sm:text-xs">
            {["All", "AI Systems", "Full-Stack", "Backend"].map((category) => (
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
            I&apos;m an Applied AI and Backend Engineer studying Computer Science at
            BITS Pilani Dubai Campus (B.E., Sep 2022 – Sep 2026), open to relocation.
            I specialize in end-to-end AI system development, multi-document RAG pipelines,
            agentic workflows (LangGraph ReAct), and high-reliability FastAPI &amp; Next.js architectures.
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
