"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const terminalLines = [
  { text: "$ python app.py", type: "command" as const },
  { text: "[AEGIS] Initializing ransomware defense system...", type: "info" as const },
  { text: "[AEGIS] Loading watchdog file monitor...", type: "info" as const },
  { text: "[AEGIS] Monitoring /home/user/documents", type: "success" as const },
  { text: "[ALERT] Suspicious encryption detected: doc_03.txt", type: "warning" as const },
  { text: "[ALERT] Rapid file modification: 12 files in 3 seconds", type: "warning" as const },
  { text: "[DEFENSE] Quarantining affected files to SafeZone/", type: "action" as const },
  { text: "[DEFENSE] Terminating malicious process (PID: 4829)", type: "action" as const },
  { text: "[VAULT] Restoring backups from .AegisVault/", type: "success" as const },
  { text: "[AEGIS] Threat neutralized. System secure.", type: "success" as const },
];

const typeColors: Record<string, string> = {
  command: "text-foreground",
  info: "text-muted-foreground",
  success: "text-primary",
  warning: "text-destructive",
  action: "text-gold-light",
};

export function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-primary/5"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-destructive/60" />
        <div className="h-3 w-3 rounded-full bg-primary/60" />
        <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">
          AEGIS@defense ~ terminal
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`${typeColors[line.type]} ${i > 0 ? "mt-1" : ""}`}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < terminalLines.length && isInView && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="mt-1 inline-block h-4 w-2 bg-primary"
          />
        )}
      </div>
    </div>
  );
}
