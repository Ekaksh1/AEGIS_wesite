"use client";

import { Search, AlertTriangle, ShieldOff, ShieldCheck } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Monitor",
    description:
      "AEGIS continuously scans your file system in real-time, watching for suspicious patterns like rapid file encryption or unusual process activity.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    step: "02",
    icon: AlertTriangle,
    title: "Detect",
    description:
      "Advanced detection logic identifies ransomware signatures and abnormal behaviors. The system flags threats and logs every suspicious event.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    step: "03",
    icon: ShieldOff,
    title: "Contain",
    description:
      "Infected files are instantly quarantined in the SafeZone. Malicious processes are terminated and tracked via malware.pid to prevent further spread.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Recover",
    description:
      "Clean backups from AegisVault are restored automatically. Complete incident reports are generated for analysis and future prevention.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="noise-overlay relative overflow-hidden border-y border-border bg-card/30 px-6 py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(46_65%_52%/0.02),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
              Four stages of
              <br className="hidden sm:block" />
              ransomware defense
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              From detection to recovery, AEGIS handles every phase of a
              ransomware incident automatically.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <StaggerItem key={item.step}>
              <div className="group relative h-full">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-12 hidden h-px w-6 bg-border lg:block" />
                )}

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`flex h-full flex-col rounded-xl border ${item.borderColor} bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary/60">
                      STEP {item.step}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bgColor} border ${item.borderColor}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </motion.div>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  {/* Step progress */}
                  <div className="mt-5 flex gap-1">
                    {[0, 1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`h-1 flex-1 rounded-full ${
                          dot <= index
                            ? "bg-primary/40"
                            : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
