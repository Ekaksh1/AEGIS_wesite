"use client";

import { Shield, Lock, Eye, Zap, FileWarning, Activity } from "lucide-react";

const items = [
  { icon: Shield, text: "Ransomware Defense" },
  { icon: Lock, text: "AegisVault Encryption" },
  { icon: Eye, text: "Real-time Monitoring" },
  { icon: Zap, text: "Instant Response" },
  { icon: FileWarning, text: "Anomaly Detection" },
  { icon: Activity, text: "Threat Containment" },
  { icon: Shield, text: "SafeZone Quarantine" },
  { icon: Lock, text: "Backup & Recovery" },
];

export function MarqueeBar() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/50 py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 px-8"
          >
            <item.icon className="h-4 w-4 text-primary/60" />
            <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
