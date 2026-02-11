"use client";

import { FolderTree, FileCode, Database, Terminal } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { GlowCard } from "./glow-card";
import { AnimatedTerminal } from "./animated-terminal";

const modules = [
  {
    icon: Terminal,
    name: "app.py",
    role: "Core Application",
    description:
      "The main entry point that orchestrates monitoring, detection, and defense modules in a unified pipeline.",
  },
  {
    icon: FileCode,
    name: "simulate_attack.py",
    role: "Attack Simulator",
    description:
      "Simulates ransomware attack scenarios including file encryption, process spawning, and system behavior modification.",
  },
  {
    icon: Database,
    name: ".AegisVault/",
    role: "Secure Backup",
    description:
      "Encrypted vault containing backup copies of critical documents, photos, financial records, and configuration files.",
  },
  {
    icon: FolderTree,
    name: "SafeZone/",
    role: "Quarantine Zone",
    description:
      "Isolated containment area where compromised files are moved to prevent ransomware spread across the system.",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              System Architecture
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
              Modular, extensible design
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Each component handles a distinct responsibility in the defense
              pipeline, from simulation to containment.
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-2">
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {modules.map((mod) => (
              <StaggerItem key={mod.name}>
                <GlowCard className="h-full">
                  <div className="p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <mod.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-mono text-sm font-bold text-foreground">
                        {mod.name}
                      </h3>
                      <span className="mt-1 inline-block rounded-full border border-border bg-muted px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {mod.role}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {mod.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2}>
            <AnimatedTerminal />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
