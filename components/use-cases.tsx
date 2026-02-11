"use client";

import {
  GraduationCap,
  Trophy,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: Trophy,
    title: "Hackathons",
    description:
      "Deploy AEGIS as a demonstration project in cybersecurity hackathons. Showcase real-time attack simulation and automated defense in a controlled environment.",
    tags: ["Competition", "Demo", "Live Defense"],
  },
  {
    icon: GraduationCap,
    title: "Academic Research",
    description:
      "Use AEGIS as a teaching tool for cybersecurity courses. Students can study ransomware behavior, file encryption patterns, and incident response strategies.",
    tags: ["Education", "Lab Work", "Curriculum"],
  },
  {
    icon: FlaskConical,
    title: "Security Research",
    description:
      "Leverage the modular architecture for advanced security experiments. Extend detection logic, test new containment strategies, and analyze ransomware behaviors.",
    tags: ["R&D", "Extensible", "Analysis"],
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="noise-overlay relative overflow-hidden border-y border-border bg-card/30 px-6 py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Use Cases
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
              Built for learning and research
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              AEGIS is ideal for hackathons, academic demonstrations, and security
              research experiments.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {useCases.map((uc) => (
            <StaggerItem key={uc.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Gold accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <uc.icon className="h-5 w-5 text-primary" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {uc.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {uc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
