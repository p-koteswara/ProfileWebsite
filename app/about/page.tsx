import {
  GraduationCap,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Layout,
  Sparkles,
  Download,
} from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "Trynocode",
      role: "Software Developer",
      period: "Jul 2025 — Jan 2026",
      description:
        "Engineered full-stack features for Mabani (live PropTech app on Play Store), integrated 20+ REST APIs to feed real-time user data into backend AI automation workflows. Architected Firebase real-time sync listeners to handle event-driven triggers, cutting response latencies for active users. Implemented unit and API integration test suites, reducing system production bugs by ~25% ensuring high reliability. Contributed to development of an AI-powered notetaker app now listed on Amazon, engineering core features during early-stage product MVP builds.",
      tech: [
        "FastAPI",
        "Next.js",
        "React",
        "Firebase",
        "REST APIs",
        "AI Workflows",
        "Play Store",
        "Unit & API Testing",
      ],
    },
    {
      company: "Whizkey",
      role: "Summer Intern (Remote)",
      period: "Jun 2024 — Aug 2024",
      description:
        "Built lead database of 250+ clients; wrote SEO-optimized content increasing organic traffic by ~20% over 2 months.",
      tech: ["Lead Generation", "SEO Content", "Database Management", "Content Optimization"],
    },
  ];

  const education = [
    {
      school: "Bits Pilani, Dubai Campus",
      degree: "B.E, Computer Science",
      period: "Sep 2022 — Sep 2026",
      details: "India (Open to Relocation)",
      location: "Dubai Campus",
    },
  ];

  const skillCategories = [
    {
      name: "Languages & Frameworks",
      icon: <Code2 className="h-4 w-4" />,
      skills: [
        "Python",
        "SQL",
        "Java",
        "C++",
        "TypeScript",
        "JavaScript",
        "FastAPI",
        "Flask",
        "REST APIs",
        "LangChain",
        "LangGraph",
      ],
    },
    {
      name: "AI/ML & Gen AI",
      icon: <Cpu className="h-4 w-4" />,
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-Learn",
        "Hugging Face (Transformers)",
        "LLMs",
        "RAG Pipelines",
        "ReAct Agent Pattern",
        "Tool Orchestration",
        "LoRA / PEFT",
        "Prompt Engineering",
        "Semantic Search",
        "OpenRouter",
        "Model Evaluation",
        "YOLOv5",
        "OpenCV",
        "Sentiment Analysis",
      ],
    },
    {
      name: "Data, DBs & Infra",
      icon: <Database className="h-4 w-4" />,
      skills: [
        "PostgreSQL",
        "ChromaDB (Vector DB)",
        "Supabase",
        "Firebase",
        "Vector Search",
        "Pandas",
        "NumPy",
        "ETL Pipelines",
        "Docker",
        "Docker Compose",
        "Git",
        "CI/CD (basics)",
      ],
    },
    {
      name: "Core Competencies",
      icon: <Sparkles className="h-4 w-4" />,
      skills: [
        "End-to-End AI System Development",
        "Multi-Document RAG",
        "Agentic AI Workflows",
        "API Integration",
        "Data-Driven Decision Making",
        "Model Monitoring",
        "A/B Testing (basics)",
        "Experiment Tracking",
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="card-surface space-y-6 p-6 pt-6 sm:p-8 sm:pt-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400 sm:text-xs">
              Applied AI Engineer • Backend &amp; Full-Stack Systems
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Building with <span className="text-emerald-700 dark:text-emerald-500">purpose &amp; precision.</span>
            </h1>
          </div>
          <a
            href="/Koteswara - Resume.pdf"
            download="Koteswara_Rao_Perumalla_Resume.pdf"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-medium text-emerald-900 transition-colors hover:bg-emerald-500/20 dark:text-emerald-200 sm:text-sm"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="text-sm leading-relaxed text-muted sm:text-lg">
            I&apos;m Koteswara Rao Perumalla, an Applied AI Engineer and Backend Engineer
            studying Computer Science at BITS Pilani Dubai Campus (Sep 2022 – Sep 2026),
            open to relocation. I design and engineer scalable AI workflows, production RAG pipelines,
            and robust full-stack software architectures.
          </p>
          <p className="text-sm leading-relaxed text-muted sm:text-lg">
            My engineering work bridges the gap between state-of-the-art AI systems and real-world software
            reliability. Whether architecting autonomous ReAct agents with LangGraph, building streaming SSE
            endpoints for real-time interactions, or structuring transactional PostgreSQL layers with FastAPI,
            I focus on performance, clean abstractions, and measurable impact.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="section-divider flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
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
                    <span className="text-lg font-medium text-emerald-700 dark:text-emerald-500">
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
          <Sparkles className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Technical Toolkit
          </h2>
        </div>
        <div className="card-grid sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.name} className="uniform-card">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-500">
                {category.icon}
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
              <div className="uniform-card-body flex-1">
                <div className="flex flex-wrap content-start gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-xs text-muted">
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
            <GraduationCap className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Education
            </h2>
          </div>
          <div className="card-grid sm:grid-cols-1">
            {education.map((edu) => (
              <div key={edu.school} className="uniform-card justify-start gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-foreground">{edu.school}</h3>
                  <span className="shrink-0 text-xs text-muted">{edu.period}</span>
                </div>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-500">{edu.degree}</p>
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
            <Layout className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Core Competencies &amp; Practices
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted">
              Passionate about building production-ready AI systems from the ground up:
              crafting evaluation frameworks (faithfulness, relevance, completeness),
              streamlining data pipelines, and architecting fault-tolerant microservices.
            </p>
            <div className="uniform-card mt-auto flex-1 bg-emerald-100 dark:bg-emerald-500/5">
              <h4 className="mb-2 text-sm font-medium text-emerald-800 dark:text-emerald-500">
                Key Strengths
              </h4>
              <div className="flex flex-wrap gap-3 text-xs text-muted">
                <span>Multi-Doc RAG Architectures</span>
                <span>•</span>
                <span>Autonomous Agentic Workflows</span>
                <span>•</span>
                <span>API Integration &amp; Testing</span>
                <span>•</span>
                <span>Data-Driven Decision Making</span>
                <span>•</span>
                <span>Model Monitoring &amp; Evaluation</span>
                <span>•</span>
                <span>Docker &amp; Containerization</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
