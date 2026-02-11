"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "Python",
    description: "Core application logic and orchestration",
    icon: "Py",
  },
  {
    name: "Watchdog",
    description: "Real-time file system monitoring",
    icon: "Wd",
  },
  {
    name: "Cryptography",
    description: "Fernet encryption for AegisVault",
    icon: "Cr",
  },
  {
    name: "Psutil",
    description: "Process monitoring and termination",
    icon: "Ps",
  },
  {
    name: "Logging",
    description: "Comprehensive incident reporting",
    icon: "Lg",
  },
  {
    name: "Hashlib",
    description: "File integrity verification",
    icon: "Hs",
  },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(46_65%_52%/0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Technology
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
              Built on proven technologies
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              AEGIS leverages battle-tested Python libraries to deliver reliable,
              performant ransomware defense.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-muted font-mono text-lg font-bold text-primary transition-all group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {tech.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {tech.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {tech.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
