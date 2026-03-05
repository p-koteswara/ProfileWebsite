export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform with Next.js",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      views: "12.5K",
      date: "2 months ago",
      tech: "Next.js • TypeScript • Tailwind",
    },
    {
      title: "Real-Time Chat Application",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop",
      views: "8.3K",
      date: "4 months ago",
      tech: "React • Socket.io • Node.js",
    },
    {
      title: "Task Management Dashboard",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
      views: "15.2K",
      date: "1 month ago",
      tech: "Vue.js • PostgreSQL • Express",
    },
    {
      title: "Weather Forecast API Service",
      thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=225&fit=crop",
      views: "6.7K",
      date: "5 months ago",
      tech: "Python • FastAPI • Redis",
    },
    {
      title: "Mobile Banking App UI",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
      views: "22.1K",
      date: "3 weeks ago",
      tech: "React Native • TypeScript",
    },
    {
      title: "Analytics Dashboard with Charts",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      views: "9.8K",
      date: "2 months ago",
      tech: "Next.js • D3.js • MongoDB",
    },
    {
      title: "Social Media Clone",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=225&fit=crop",
      views: "18.4K",
      date: "1 week ago",
      tech: "React • GraphQL • Apollo",
    },
    {
      title: "File Storage System",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
      views: "5.2K",
      date: "6 months ago",
      tech: "Node.js • AWS S3 • Express",
    },
  ];

  return (
    <section className="py-6 sm:py-10 lg:py-20 space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="max-w-4xl text-xs leading-relaxed text-muted sm:text-base md:text-lg">
          A selection of work I&apos;ve built, focusing on clean code, thoughtful
          design, and reliable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer space-y-2 sm:space-y-3"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-accent">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 px-1">
              <h3 className="line-clamp-2 text-xs font-medium leading-tight text-foreground group-hover:text-muted sm:text-sm">
                {project.title}
              </h3>
              <p className="text-[10px] text-muted sm:text-xs">{project.tech}</p>
              <div className="flex items-center gap-2 text-[10px] text-muted sm:text-xs">
                <span>{project.views} views</span>
                <span>•</span>
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
