"use client";

import {
  ShieldCheck,
  Radar,
  Zap,
  FileWarning,
  Lock,
  Activity,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { GlowCard } from "./glow-card";

const features = [
  {
    icon: Radar,
    title: "Attack Simulation",
    description:
      "Simulate real-world ransomware attack scenarios in a controlled sandbox environment using simulate_attack.py to test your defenses.",
    tag: "Simulation",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Continuously monitor file system activity and detect suspicious encryption patterns before ransomware can spread.",
    tag: "Monitoring",
  },
  {
    icon: FileWarning,
    title: "Anomaly Detection",
    description:
      "Identify abnormal system behaviors and file modifications indicative of ransomware activity using intelligent detection logic.",
    tag: "Detection",
  },
  {
    icon: ShieldCheck,
    title: "Automated Defense",
    description:
      "Trigger automated containment mechanisms the moment a threat is identified, isolating infected files in the SafeZone.",
    tag: "Defense",
  },
  {
    icon: Lock,
    title: "AegisVault Backup",
    description:
      "Secure critical files in the AegisVault, an encrypted backup zone that protects your data even during active ransomware attacks.",
    tag: "Backup",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "Automated response triggers activate within seconds of detection, minimizing dwell time and reducing potential damage.",
    tag: "Response",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(46_65%_52%/0.02),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Core Capabilities
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
              Built for proactive
              <br className="hidden sm:block" />
              ransomware defense
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              AEGIS combines simulation, monitoring, and automated response into a
              single cohesive defense platform.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <StaggerItem key={feature.title}>
              <GlowCard className="h-full">
                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 animate-glow-pulse">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  {/* Decorative bottom bar */}
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
