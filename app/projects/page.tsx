"use client";

import { ExternalLink, Sparkles } from "lucide-react";

type Project = {
  title: string;
  description: string;
  category: string;
  year: string;
  tech: string;
  link?: string;
  bullets?: string[];
  featured?: boolean;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Clarity — Multi-Document RAG System + LangGraph Agent",
      description:
        "Production multi-document RAG pipeline with Gemini embeddings and ChromaDB vector store, coupled with an autonomous LangGraph ReAct agent.",
      category: "AI & Agentic Systems",
      year: "2025",
      tech: "FastAPI • LangGraph • LangChain • ChromaDB • Gemini • Next.js • TypeScript • Docker",
      link: "https://clarrity.vercel.app/",
      featured: true,
      bullets: [
        "Architected a production RAG pipeline supporting multi-document ingestion (PDF, DOCX, TXT, MD) with Gemini embeddings and ChromaDB vector store, enabling semantic search across multiple knowledge bases simultaneously.",
        "Built a LangGraph ReAct agent with autonomous tool orchestration — document search, web search (DuckDuckGo), calculator, and datetime — dynamically deciding tool usage by query context.",
        "Implemented conversation memory via LangGraph MemorySaver with thread-based session management, enabling context-aware multi-turn conversations.",
        "Implemented SSE streaming endpoint for real-time token-by-token agent responses, enabling a ChatGPT-like typing experience.",
        "Built LLM-based RAG evaluation pipeline scoring responses on faithfulness, relevance, and completeness for automated quality assessment.",
        "Designed RESTful document management APIs (upload, list, delete by doc_id) with unique UUID tracking and chunk metadata per document.",
        "Containerized full stack application with Docker and Docker Compose for reproducible local and production deployment.",
      ],
    },
    {
      title: "Expense Tracker (Cashually — Full-Stack Web App + AI Chatbot)",
      description:
        "Full-stack financial application using FastAPI, Next.js, and PostgreSQL to process secure, real-time user transactions with an integrated LLM-powered chatbot.",
      category: "Full-Stack Web & AI",
      year: "2025",
      tech: "FastAPI • Next.js • PostgreSQL • JWT • Authentication • LLMs",
      link: "https://cashually.vercel.app/",
      featured: true,
      bullets: [
        "Integrated an LLM-powered AI chatbot enabling users to query and interact with their financial data through natural language, built on top of FastAPI and PostgreSQL.",
        "Architected a full-stack financial application using FastAPI, Next.js, and PostgreSQL to process secure, real-time user transactions.",
        "Designed 10+ RESTful API endpoints maintaining low-latency responses (<150ms), secured with JWT authentication and session controls.",
      ],
    },
    {
      title: "AI Based Interview Assistant",
      description:
        "Automated candidate response evaluation engine combining fine-tuned transformer sentiment analysis with vector semantic search and telemetry reporting.",
      category: "AI & NLP Systems",
      year: "2024",
      tech: "Python • Matplotlib • Hugging Face Transformers • Tkinter • Google Speech API • Language Tool",
      bullets: [
        "Engineered an automated response evaluation engine using fine-tuned Hugging Face transformers (DistilBERT) and vector-based semantic search, processing user inputs in <3 seconds with 80% sentiment alignment.",
        "Integrated semantic similarity algorithms (cosine distance) alongside keyword matching, improving candidate scoring accuracy by 15%.",
        "Architected automated performance reporting pipelines (visual heatmaps and telemetry), reducing manual evaluation overhead by an estimated 40%.",
      ],
    },
    {
      title: "Mabani — Live PropTech Application",
      description:
        "Engineered full-stack features for a live PropTech app listed on the Google Play Store, integrating 20+ REST APIs to feed real-time user data into backend AI automation workflows.",
      category: "Full-Stack & Mobile (Trynocode)",
      year: "2025",
      tech: "Next.js • React • Firebase • REST APIs • Play Store • AI Workflows",
      bullets: [
        "Engineered full-stack features for Mabani (live PropTech app on Google Play Store), integrating 20+ REST APIs into backend AI automation workflows.",
        "Architected Firebase real-time sync listeners to handle event-driven triggers, cutting response latencies for active users.",
        "Implemented unit and API integration test suites, reducing system production bugs by ~25% ensuring high reliability.",
      ],
    },
    {
      title: "AI-Powered Notetaker App",
      description:
        "Contributed to early-stage development of an AI-powered notetaker application now listed on Amazon, engineering core features, transcription workflows, and backend endpoints.",
      category: "AI Product Engineering (Trynocode)",
      year: "2025",
      tech: "Python • FastAPI • React • LLMs • Amazon Appstore",
      bullets: [
        "Contributed to the development of an AI-powered notetaker app now listed on Amazon, engineering core MVP features.",
        "Built responsive UI and backend endpoints integrating AI models for audio transcription and summaries.",
      ],
    },
    {
      title: "Smart Medical Box",
      description:
        "IoT medicine dispenser with automated servo mechanics, scheduled dispensing routines, and YOLOv5 pill detection via Raspberry Pi and a Flask telemetry dashboard.",
      category: "IoT & Computer Vision",
      year: "2024",
      tech: "Python • Flask • Raspberry Pi • OpenCV • YOLOv5",
      bullets: [
        "Engineered automated dispensing with servo actuators (~95% mechanical dispensing reliability) and scheduled daily dispensing routines.",
        "Implemented YOLOv5 computer vision pill verification (~85% accuracy on sample sets) with camera feed streaming to a Flask web dashboard.",
      ],
    },
  ];

  return (
    <section className="space-y-8 py-6 sm:space-y-12 sm:py-14 lg:py-20">
      <div className="card-surface space-y-4 p-6 sm:space-y-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Selected <span className="text-emerald-700 dark:text-emerald-500">work &amp; systems.</span>
        </h1>
        <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-lg">
          From production multi-document RAG pipelines and autonomous LangGraph agents to
          transactional full-stack applications and low-latency APIs. Here are the core
          systems I&apos;ve built and deployed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`uniform-card flex flex-col justify-between ${
              project.featured
                ? "border-emerald-600/60 dark:border-emerald-500/50 shadow-sm"
                : ""
            }`}
          >
            <div className="uniform-card-body space-y-3">
              <div className="flex w-full items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {project.featured && <Sparkles className="h-3.5 w-3.5" />}
                  {project.category}
                </span>
                <span className="tag-border px-2 py-0.5 text-[10px] text-muted">
                  {project.year}
                </span>
              </div>

              <div className="flex w-full items-start justify-between gap-2">
                <h2 className="text-lg font-semibold leading-tight text-foreground sm:text-xl">
                  {project.title}
                </h2>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <span>Live</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="uniform-card-desc">{project.description}</p>

              {project.bullets && project.bullets.length > 0 && (
                <ul className="mt-2 space-y-1.5 border-t border-emerald-950/10 pt-3 dark:border-emerald-500/20">
                  {project.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="uniform-card-footer mt-4">
              {project.tech.split("•").map((tech) => (
                <span key={tech} className="tag-border px-2 py-1 text-[11px]">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
