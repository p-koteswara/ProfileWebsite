import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      icon: <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      content: (
        <a
          href="mailto:perumallakoteswara@gmail.com"
          className="block break-words text-sm text-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 sm:text-base font-medium"
        >
          perumallakoteswara@gmail.com
        </a>
      ),
    },
    {
      label: "Location",
      icon: <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      content: (
        <div className="space-y-0.5">
          <p className="text-sm font-medium text-foreground sm:text-base">
            India <span className="text-emerald-600 dark:text-emerald-400">(Open to Relocation)</span>
          </p>
          <p className="text-xs text-muted">
            BITS Pilani, Dubai Campus (Sep 2022 – Sep 2026)
          </p>
        </div>
      ),
    },
    {
      label: "LinkedIn",
      icon: <Linkedin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      content: (
        <a
          href="https://www.linkedin.com/in/perumallakoteswara/"
          target="_blank"
          rel="noopener noreferrer"
          className="block break-all text-sm font-medium text-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 sm:break-normal sm:text-base"
        >
          linkedin.com/in/perumallakoteswara
        </a>
      ),
    },
    {
      label: "GitHub",
      icon: <Github className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      content: (
        <a
          href="https://github.com/p-koteswara"
          target="_blank"
          rel="noopener noreferrer"
          className="block break-all text-sm font-medium text-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 sm:break-normal sm:text-base"
        >
          github.com/p-koteswara
        </a>
      ),
    },
    {
      label: "Resume",
      icon: <Download className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      content: (
        <a
          href="/Koteswara - Resume.pdf"
          download="Koteswara_Rao_Perumalla_Resume.pdf"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors sm:text-base"
        >
          <span>Download Latest Resume (PDF)</span>
        </a>
      ),
    },
  ];

  return (
    <section className="space-y-8 py-6 sm:space-y-12 sm:py-14 lg:py-20">
      <div className="card-surface space-y-4 p-6 sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Get in <span className="text-emerald-700 dark:text-emerald-500">touch.</span>
        </h1>
        <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-lg">
          Whether you&apos;re looking to collaborate on production AI systems, discuss an
          engineering opportunity, or explore multi-document RAG and backend architectures,
          I&apos;d love to connect.
        </p>
      </div>

      <div className="card-grid sm:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-card space-y-2">
            <div className="flex items-center gap-2">
              {item.icon}
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-xs">
                {item.label}
              </p>
            </div>
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
}
