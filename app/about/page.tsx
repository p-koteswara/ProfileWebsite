"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Cpu, Database, Layout, Sparkles } from "lucide-react";
import TiltCard from "@/components/tilt-card";

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
};

export default function About() {
  const experiences = [
    {
      company: "Trynocode",
      role: "Software Developer",
      period: "Jul 2025 — Jan 2026",
      description: "Developed client-facing applications including Mabani and K2K. Specialized in converting Figma designs to responsive React/Next.js interfaces and integrating robust REST APIs.",
      tech: ["Next.js", "React", "Firebase", "Postman", "Figma"],
    },
    {
      company: "Whizkey",
      role: "Summer Intern",
      period: "Jun 2024 — Aug 2024",
      description: "Built a comprehensive lead-generation database of 250+ clients and authored technical SEO articles. Actively participated in company-wide hackathons.",
      tech: ["Database Management", "Technical Writing", "SEO"],
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
      degree: "Grade 4 - Grade 12",
      period: "2014 — 2022",
      location: "Dubai",
    },
  ];

  const skillCategories = [
    {
      name: "Languages",
      icon: <Code2 className="h-4 w-4" />,
      skills: ["Python", "Java", "C/C++", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      name: "Frameworks & Tech",
      icon: <Layout className="h-4 w-4" />,
      skills: ["Next.js", "React JS", "FastAPI", "Flask"],
    },
    {
      name: "Tools & Databases",
      icon: <Database className="h-4 w-4" />,
      skills: ["MySQL", "Firebase", "Git/GitHub", "Postman", "Figma"],
    },
    {
      name: "Data Science",
      icon: <Cpu className="h-4 w-4" />,
      skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "OpenCV"],
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Intro Section */}
      <motion.section 
        className="space-y-6 pt-6 sm:pt-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Building with <span className="text-emerald-500">purpose.</span>
        </h1>
        <div className="max-w-3xl space-y-4">
          <p className="text-sm leading-relaxed text-muted sm:text-lg">
            I&apos;m Koteswara Rao Perumalla, a Computer Science student at BITS Pilani Dubai. 
            I specialize in bridging the gap between design and functionality, creating 
            seamless digital experiences that are both robust and intuitive.
          </p>
          <p className="text-sm leading-relaxed text-muted sm:text-lg">
            My approach is rooted in simplicity and performance. Whether I&apos;m architecting 
            a backend with FastAPI or crafting a frontend with Next.js, I focus on 
            delivering clean, maintainable code that solves real-world problems.
          </p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="space-y-8" {...fadeInUp}>
        <div className="flex items-center gap-2 border-b border-border/50 pb-2">
          <Briefcase className="h-5 w-5 text-emerald-500" />
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Experience</h2>
        </div>
        <div className="grid gap-6">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-emerald-500/30 hover:bg-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-foreground">{exp.role}</h3>
                    <span className="text-xs text-muted">@</span>
                    <span className="text-lg font-medium text-emerald-500">{exp.company}</span>
                  </div>
                  <p className="max-w-2xl text-sm text-muted leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-accent/50 px-2.5 py-0.5 text-[10px] text-muted group-hover:text-foreground transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-medium text-muted shrink-0">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Grid */}
      <motion.section className="space-y-8" {...fadeInUp}>
        <div className="flex items-center gap-2 border-b border-border/50 pb-2">
          <Sparkles className="h-5 w-5 text-emerald-500" />
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Technical Toolkit</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <TiltCard key={category.name} className="h-full">
              <div className="flex h-full flex-col space-y-4 rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-emerald-500/30 hover:bg-card">
                <div className="flex items-center gap-2 text-emerald-500">
                  {category.icon}
                  <h3 className="text-sm font-semibold uppercase tracking-wider">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-sm text-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </motion.section>

      {/* Education & More */}
      <div className="grid gap-16 lg:grid-cols-2">
        <motion.section className="space-y-8" {...fadeInUp}>
          <div className="flex items-center gap-2 border-b border-border/50 pb-2">
            <GraduationCap className="h-5 w-5 text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.school} className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-foreground">{edu.school}</h3>
                  <span className="text-xs text-muted">{edu.period}</span>
                </div>
                <p className="text-sm text-emerald-500">{edu.degree}</p>
                {edu.details && <p className="text-sm text-muted">{edu.details}</p>}
                <p className="text-xs text-muted/60">{edu.location}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="space-y-8" {...fadeInUp}>
          <div className="flex items-center gap-2 border-b border-border/50 pb-2">
            <Layout className="h-5 w-5 text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Beyond Code</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted">
              Outside of technical development, I am deeply interested in system design principles 
              and optimizing development workflows. I enjoy participating in hackathons and 
              exploring the intersection of AI and human productivity.
            </p>
            <div className="rounded-2xl border border-border/50 bg-emerald-500/5 p-6">
              <h4 className="text-sm font-medium text-emerald-500 mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-3 text-xs text-muted">
                <span>Problem Solving</span>
                <span>•</span>
                <span>Quick Learning</span>
                <span>•</span>
                <span>Adaptability</span>
                <span>•</span>
                <span>Creative Thinking</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
