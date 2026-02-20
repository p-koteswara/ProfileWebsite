import Link from "next/link";

export default function Home() {
  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Full Stack Developer
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Koteswara Perumalla
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I build thoughtful, production-grade web experiences with a focus on
          clean architecture, performance, and a calm, minimal aesthetic.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border/80 hover:bg-accent"
          >
            Hire me
          </Link>
        </div>
      </div>
    </section>
  );
}
