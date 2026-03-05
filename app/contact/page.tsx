import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-6 sm:py-14 lg:py-20 space-y-8 sm:space-y-12">
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Contact
        </h1>
        <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-lg">
          Let&apos;s connect. I&apos;m open to discussing new projects, opportunities,
          or just having a conversation about technology and design.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-1 sm:space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-xs">
            Email
          </p>
          <a
            href="mailto:perumallakoteswara@gmail.com"
            className="block text-sm text-foreground transition-colors hover:text-muted sm:text-base break-words"
          >
            perumallakoteswara@gmail.com
          </a>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-xs">
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/perumallakoteswara"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-foreground transition-colors hover:text-muted sm:text-base break-all sm:break-normal"
          >
            linkedin.com/in/perumallakoteswara
          </a>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-xs">
            GitHub
          </p>
          <a
            href="https://github.com/p-koteswara"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-foreground transition-colors hover:text-muted sm:text-base break-all sm:break-normal"
          >
            github.com/p-koteswara
          </a>
        </div>
      </div>
    </section>
  );
}
