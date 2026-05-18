export default function Contact() {
  const contactItems = [
    {
      label: "Phone",
      content: (
        <a
          href="tel:+971505440321"
          className="block text-sm text-foreground transition-colors hover:text-muted sm:text-base"
        >
          +971 50 544 0321
        </a>
      ),
    },
    {
      label: "Email",
      content: (
        <a
          href="mailto:perumallakoteswara@gmail.com"
          className="block break-words text-sm text-foreground transition-colors hover:text-muted sm:text-base"
        >
          perumallakoteswara@gmail.com
        </a>
      ),
    },
    {
      label: "Location",
      content: (
        <p className="text-sm text-foreground sm:text-base">
          BITS Pilani Dubai Campus, Dubai
        </p>
      ),
    },
    {
      label: "LinkedIn",
      content: (
        <a
          href="https://linkedin.com/in/perumallakoteswara"
          target="_blank"
          rel="noopener noreferrer"
          className="block break-all text-sm text-foreground transition-colors hover:text-muted sm:break-normal sm:text-base"
        >
          linkedin.com/in/perumallakoteswara
        </a>
      ),
    },
    {
      label: "GitHub",
      content: (
        <a
          href="https://github.com/p-koteswara"
          target="_blank"
          rel="noopener noreferrer"
          className="block break-all text-sm text-foreground transition-colors hover:text-muted sm:break-normal sm:text-base"
        >
          github.com/p-koteswara
        </a>
      ),
    },
  ];

  return (
    <section className="space-y-8 py-6 sm:space-y-12 sm:py-14 lg:py-20">
      <div className="card-surface space-y-4 p-6 sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Contact
        </h1>
        <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-lg">
          Let&apos;s connect. I&apos;m open to discussing new projects, opportunities,
          or just having a conversation about technology and design.
        </p>
      </div>

      <div className="card-grid sm:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-card">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-xs">
              {item.label}
            </p>
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
}
