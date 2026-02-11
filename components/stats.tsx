"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { AnimatedCounter } from "./animated-counter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedRing({
  percentage,
  label,
  sublabel,
  delay = 0,
}: {
  percentage: number;
  label: string;
  sublabel: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const circumference = 2 * Math.PI * 44;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="hsl(152 25% 20%)"
            strokeWidth="4"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="hsl(46 65% 52%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{
              duration: 1.8,
              delay: delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-foreground">
            <AnimatedCounter value={percentage} suffix="%" duration={1800} />
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{sublabel}</p>
      </div>
    </div>
  );
}

const stats = [
  {
    percentage: 99,
    label: "Detection Rate",
    sublabel: "Ransomware patterns identified",
  },
  {
    percentage: 100,
    label: "Open Source",
    sublabel: "Fully transparent codebase",
  },
  {
    percentage: 95,
    label: "File Recovery",
    sublabel: "AegisVault backup success",
  },
  {
    percentage: 97,
    label: "Containment",
    sublabel: "Threats isolated in SafeZone",
  },
];

export function Stats() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              By the Numbers
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
              Battle-tested defense metrics
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <AnimatedRing
                percentage={stat.percentage}
                label={stat.label}
                sublabel={stat.sublabel}
                delay={i * 0.15}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
