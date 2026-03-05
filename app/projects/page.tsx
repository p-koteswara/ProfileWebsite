"use client";

import TiltCard from "@/components/tilt-card";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Smart Medical Box",
      description: "An IoT-based medicine dispenser prototype that uses Computer Vision for pill verification. Features scheduled dispensing logic and a Flask web interface for monitoring.",
      category: "IoT & Computer Vision",
      year: "2024",
      tech: "Python • Raspberry Pi • OpenCV • Flask",
    },
    {
      title: "Customer Segmentation Engine",
      description: "A data analysis tool utilizing RFM analysis and K-Means clustering algorithms to segment customers and improve targeting accuracy.",
      category: "Data Science",
      year: "2024",
      tech: "Python • Scikit-learn • Pandas • Matplotlib",
    },
    {
      title: "AI Interview Assistant",
      description: "A prototype system that analyzes interview responses using voice and text input. Implements sentiment analysis to generate automated feedback reports.",
      category: "AI & NLP",
      year: "2024",
      tech: "Python • Google Speech API • NLP • Tkinter",
    },
    {
      title: "Trynocode Landing Page",
      description: "Designed and developed a complete landing page for Trynocode using Next.js. Focused on responsive layout, modern component structure, and navigation.",
      category: "Web Development",
      year: "2025",
      tech: "Next.js • React • Tailwind • Figma",
    },
    {
      title: "Mabani & K2K Applications",
      description: "Worked on client-facing applications, converting Figma UI/UX designs into functional FlutterFlow screens and integrating REST APIs for data handling.",
      category: "Mobile Development",
      year: "2025",
      tech: "FlutterFlow • REST APIs • Figma • Firebase",
    },
    {
      title: "Lead Generation Database",
      description: "Built a comprehensive database of 250+ potential clients to support business outreach. Combined with SEO-optimized technical writing to improve visibility.",
      category: "Data Management",
      year: "2024",
      tech: "SEO • Database • Data Analysis • Marketing",
    },
  ];

  return (
    <section className="py-6 sm:py-14 lg:py-20 space-y-8 sm:space-y-12">
      <motion.div 
        className="space-y-4 sm:space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Selected <span className="text-emerald-500">work.</span>
        </h1>
        <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-lg">
          From IoT prototypes to full-stack web applications, I enjoy building 
          systems that solve real problems. Here are some of the projects I&apos;ve 
          worked on during my academic and professional journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 hover:bg-card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-border/50 bg-accent/50 px-2 py-0.5 text-[10px] text-muted">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 mt-2 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 text-xs text-muted/80">
                    {project.tech.split("•").map((tech) => (
                      <span key={tech} className="bg-accent/50 px-2 py-1 rounded-md border border-border/50">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
