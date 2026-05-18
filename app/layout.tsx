"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeToggle } from "../components/theme-toggle";
import { ThemeProvider } from "../components/theme-provider";
import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
            <header className="sticky top-0 z-50 border-b-2 border-emerald-900 bg-header-bg/95 text-header-text backdrop-blur-sm dark:border-emerald-700">
              <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                <Link href="/" className="text-base font-semibold tracking-tight shrink-0">
                  Koteswara Perumalla
                </Link>

                <nav className="flex items-center gap-3 sm:gap-6">
                  <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-header-text/80 transition-colors hover:text-header-text"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4">
                    <ThemeToggle />
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 transition-colors hover:bg-white/10 md:hidden"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      aria-label="Toggle menu"
                    >
                      {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                  </div>
                </nav>
              </div>

              {isMenuOpen && (
                <nav className="border-t border-white/20 bg-header-bg px-4 py-2 md:hidden">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-sm font-medium text-header-text/80 transition-colors hover:text-header-text border-b border-white/10 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              )}
            </header>

            <main className="relative z-10 mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
              {children}
            </main>

            <footer className="relative z-10 border-t-2 border-emerald-900 bg-background py-8 dark:border-emerald-700">
              <div className="mx-auto flex max-w-[1400px] justify-center px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/p-koteswara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/perumallakoteswara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:perumallakoteswara@gmail.com"
                    className="text-muted transition-colors hover:text-foreground"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
