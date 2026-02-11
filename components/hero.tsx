"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { GridBackground } from "./grid-background";
import { AnimatedCounter } from "./animated-counter";

export function Hero() {
  return (
    <section className="noise-overlay relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <GridBackground />

      {/* Radial glow - gold-tinted */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Detect. Simulate.
          <br />
          <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
            Neutralize.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          AEGIS is a proactive cybersecurity platform that simulates ransomware
          attack scenarios, monitors suspicious file encryption patterns, and
          provides automated defense and containment mechanisms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          <a
            href="#features"
            className="group flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
          >
            Explore Features
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 gap-8 border-t border-border/40 pt-10 md:grid-cols-4"
        >
          {[
            { value: 6, suffix: "+", label: "Defense Modules" },
            { prefix: "<", value: 3, suffix: "s", label: "Response Time" },
            { value: 100, suffix: "%", label: "Open Source" },
            { label: "File Monitoring", text: "Real-time" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <p className="text-3xl font-bold text-foreground md:text-4xl">
                {stat.text ? (
                  stat.text
                ) : (
                  <>
                    {stat.prefix}
                    <AnimatedCounter
                      value={stat.value!}
                      suffix={stat.suffix}
                    />
                  </>
                )}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
