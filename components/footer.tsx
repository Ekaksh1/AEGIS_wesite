"use client";

import { FadeIn } from "./motion";
import { Globe } from "./globe";
import Image from "next/image";

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/Ekaksh1/Aegis-Ransomware-Defense" },
  { label: "LINKEDIN", href: "#" },
  { label: "X", href: "#" },
];

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "FEATURES", href: "#features" },
  { label: "ARCHITECTURE", href: "#architecture" },
  { label: "CONTACT", href: "#" },
];

export function Footer() {
  return (
    <FadeIn>
      <footer className="relative mx-4 mb-4 overflow-hidden rounded-2xl border border-border/50 bg-card md:mx-6">
        {/* Main content area */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Large AEGIS text + Globe */}
          <div className="relative flex flex-col justify-between border-b border-border/30 p-8 md:min-h-[420px] md:border-b-0 md:border-r md:p-12">
            {/* Large AEGIS text */}
            <div>
              <h2
                className="text-6xl font-bold uppercase leading-none tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AEGIS
              </h2>
            </div>

            {/* Globe positioned at bottom-right of left panel */}
            <div className="mt-8 flex items-end justify-end md:absolute md:bottom-0 md:right-0 md:mt-0">
              <div className="relative overflow-hidden">
                <Globe size={260} className="opacity-80" />
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 md:absolute md:bottom-12 md:left-12 md:mt-0">
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Socials
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, i) => (
                  <span key={link.label} className="flex items-center gap-3">
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                    {i < socialLinks.length - 1 && (
                      <span className="inline-block h-1.5 w-1.5 rounded-sm bg-muted-foreground/40" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - About + Nav */}
          <div className="flex flex-col justify-between p-8 md:p-12">
            {/* About section */}
            <div>
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                About
              </span>
              <p className="max-w-sm font-mono text-sm uppercase leading-relaxed tracking-wide text-muted-foreground">
                AEGIS: OUTSMARTING ATTACKERS.
                <br />
                SECURING TOMORROW WITH AEGIS,
                <br />
                {"WE DON'T JUST DEFEND\u2014WE OUTSMART"}
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12">
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Navigation
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {navLinks.map((link, i) => (
                  <span key={link.label} className="flex items-center gap-3">
                    <a
                      href={link.href}
                      className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                    {i < navLinks.length - 1 && (
                      <span className="inline-block h-1.5 w-1.5 rounded-sm bg-muted-foreground/40" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Section number */}
            <div className="mt-12 flex items-end justify-end">
              <span
                className="text-7xl font-bold leading-none tracking-tighter text-foreground/10 md:text-8xl"
              >
                04
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-border/30 px-8 py-4 md:px-12">
          <div className="flex items-center gap-2">
            <Image
              src="/images/aegis-logo.jpeg"
              alt="AEGIS logo"
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              AEGIS Defense Platform
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Built for cybersecurity
          </span>
        </div>
      </footer>
    </FadeIn>
  );
}
