"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeToggle } from "../components/theme-toggle";
import { ThemeProvider } from "../components/theme-provider";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Mouse Spotlight */}
            <motion.div
              className="pointer-events-none fixed inset-0 z-30 opacity-40 dark:opacity-20"
              style={{
                background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, var(--color-accent), transparent 80%)`,
              }}
            />

            <header className="sticky top-0 z-50 border-b border-border/10 bg-header-bg/95 text-header-text shadow-md backdrop-blur-sm">
              <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                <Link href="/#hero" className="group text-base font-semibold tracking-tight">
                  <span className="opacity-80 transition-opacity group-hover:opacity-100">Koteswara</span>{" "}
                  <span className="transition-transform group-hover:translate-x-1 inline-block">Perumalla</span>
                </Link>
                <nav className="flex items-center gap-6 text-base text-header-text/70">
                  {[
                    { name: "Home", href: "/#hero" },
                    { name: "About", href: "/#about" },
                    { name: "Projects", href: "/projects" },
                    { name: "Contact", href: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative transition-colors hover:text-header-text group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))}
                  <ThemeToggle />
                </nav>
              </div>
            </header>

            <main className="relative z-10 mx-auto max-w-[1100px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
  