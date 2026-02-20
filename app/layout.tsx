import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeToggle } from "../components/theme-toggle";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koteswara Perumalla",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <header className="border-b border-border/60 bg-background/80 backdrop-blur">
              <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                <Link href="/" className="text-base font-semibold tracking-tight">
                  <span className="text-muted">Koteswara</span>{" "}
                  <span className="text-foreground">Perumalla</span>
                </Link>
                <div className="flex items-center gap-6 text-base text-muted">
                  <Link
                    href="/"
                    className="transition-colors hover:text-foreground"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="transition-colors hover:text-foreground"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </header>

            <main className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
  