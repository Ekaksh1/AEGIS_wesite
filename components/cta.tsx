"use client";

import { ArrowRight, Github, Copy, Check } from "lucide-react";
import Image from "next/image";
import { FadeUp } from "./motion";
import { motion } from "framer-motion";
import { useState } from "react";

const commands = [
  "git clone https://github.com/Ekaksh1/Aegis-Ransomware-Defense.git",
  "cd Aegis-Ransomware-Defense && pip install -r requirements.txt",
  "python app.py",
];

export function CTA() {
  const [copied, setCopied] = useState(false);

  function copyAll() {
    navigator.clipboard.writeText(commands.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
              <div className="absolute bottom-0 left-1/4 h-32 w-96 rounded-full bg-primary/4 blur-[80px]" />
            </div>

            <div className="relative z-10 p-10 text-center md:p-16">
              {/* Animated shield icon */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-8 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-primary/10"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/aegis-logo.jpeg"
                    alt="AEGIS logo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Ready to defend against
                <br />
                <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
                  ransomware?
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                AEGIS is open source and free to use. Clone the repository, run
                the simulation, and experience proactive ransomware defense
                firsthand.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://github.com/Ekaksh1/Aegis-Ransomware-Defense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
                >
                  <Github className="h-4 w-4" />
                  Clone Repository
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#features"
                  className="rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  Learn More
                </a>
              </div>

              {/* Quick start terminal */}
              <div className="mx-auto mt-12 max-w-lg overflow-hidden rounded-xl border border-border bg-background text-left">
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <span className="font-mono text-[11px] font-medium text-muted-foreground">
                    Quick Start
                  </span>
                  <button
                    onClick={copyAll}
                    className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Copy commands"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-primary" />
                        <span className="text-primary">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 font-mono text-sm">
                  {commands.map((cmd, i) => (
                    <div
                      key={i}
                      className={`${i > 0 ? "mt-1.5" : ""} flex items-start gap-2`}
                    >
                      <span className="select-none text-primary/60">$</span>
                      <span
                        className={
                          i === 0 ? "text-foreground" : "text-muted-foreground"
                        }
                      >
                        {cmd}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
