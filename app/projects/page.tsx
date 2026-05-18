"use client";

import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  category: string;
  year: string;
  tech: string;
  link?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Expense Tracker (Cashually)",
      description:
        "Full-stack web app handling 50+ test transactions with JWT auth. Designed 10 REST API endpoints (<150ms avg response), PostgreSQL schema with 4 tables, and a category system with 10+ expense types. Deployed live at Cashually.vercel.app.",
      category: "Full-Stack Web",
      year: "2025",
      tech: "FastAPI • Next.js • PostgreSQL • JWT",
      link: "https://cashually.vercel.app",
    },
    {
      title: "Smart Medical Box",
      description:
        "IoT medicine dispenser with 2 servo motors (~95% dispensing reliability), scheduled dispensing at 2 configurable times per day, YOLOv5 pill detection (~85% accuracy on 15+ samples), and a Flask dashboard for dispensing logs, schedule, and camera feed.",
      category: "IoT & Computer Vision",
      year: "2024",
      tech: "Python • Flask • Raspberry Pi • OpenCV • YOLOv5",
    },
    {
      title: "Customer Segmentation Engine",
      description:
        "A data analysis tool utilizing RFM analysis and K-Means clustering algorithms to segment customers and improve targeting accuracy.",
      category: "Data Science",
      year: "2024",
      tech: "Python • Scikit-learn • Pandas • Matplotlib",
    },
    {
      title: "AI Interview Assistant",
      description:
        "Analyzes 20+ sample responses with DistilBERT (~80% sentiment alignment), scoring across sentiment, keywords, and fluency. Generates bar charts and heatmaps in <3 seconds, with semantic similarity improving accuracy by ~15%.",
      category: "AI & NLP",
      year: "2024",
      tech: "Python • Hugging Face • Google Speech API • Tkinter • Matplotlib",
    },
    {
      title: "Trynocode Landing Page",
      description:
        "Built responsive landing pages with 4 core sections (navigation, hero, features, contact) using Next.js, achieving 90+ Lighthouse scores.",
      category: "Web Development",
      year: "2025",
      tech: "Next.js • React • Tailwind • Figma",
    },
    {
      title: "Mabani & K2K Applications",
      description:
        "Delivered UI modules for real estate and service-management client apps—converting Figma designs to React/Next.js screens and integrating REST APIs with Firebase auth and real-time updates.",
      category: "Web Development",
      year: "2025",
      tech: "React • Next.js • REST APIs • Figma • Firebase",
    },
    {
      title: "Lead Generation Database",
      description:
        "Built a lead database of 250+ potential clients and wrote 5 SEO-optimized articles, increasing estimated organic traffic by ~20% over 2 months.",
      category: "Data Management",
      year: "2024",
      tech: "SEO • Database • Data Analysis • Marketing",
    },
  ];

  return (
    <section className="space-y-8 py-6 sm:space-y-12 sm:py-14 lg:py-20">
      <div className="card-surface space-y-4 p-6 sm:space-y-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Selected <span className="text-emerald-500">work.</span>
        </h1>
        <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-lg">
          From IoT prototypes to full-stack web applications, I enjoy building
          systems that solve real problems. Here are some of the projects
          I&apos;ve worked on during my academic and professional journey.
        </p>
      </div>

      <div className="card-grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="uniform-card">
            <div className="uniform-card-body">
              <div className="flex w-full items-center justify-between gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-500">
                  {project.category}
                </span>
                <span className="tag-border px-2 py-0.5 text-[10px] text-muted">
                  {project.year}
                </span>
              </div>

              <div className="flex w-full items-start justify-between gap-2">
                <h3 className="text-lg font-semibold leading-tight text-foreground sm:text-xl">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted transition-colors hover:text-emerald-500"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="uniform-card-desc">{project.description}</p>
            </div>

            <div className="uniform-card-footer">
              {project.tech.split("•").map((tech) => (
                <span key={tech} className="tag-border px-2 py-1">
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
