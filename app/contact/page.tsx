import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 space-y-12">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Contact
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Let&apos;s connect. I&apos;m open to discussing new projects, opportunities,
          or just having a conversation about technology and design.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Email
          </p>
          <a
            href="mailto:perumallakoteswara@gmail.com"
            className="block text-base text-foreground transition-colors hover:text-muted"
          >
            perumallakoteswara@gmail.com
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/perumallakoteswara"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base text-foreground transition-colors hover:text-muted"
          >
            linkedin.com/in/perumallakoteswara
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            GitHub
          </p>
          <a
            href="https://github.com/p-koteswara"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base text-foreground transition-colors hover:text-muted"
          >
            github.com/p-koteswara
          </a>
        </div>
      </div>
    </section>
  );
}
