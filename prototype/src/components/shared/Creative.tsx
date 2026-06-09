"use client";

import { motion } from "framer-motion";

const terms = [
  "CUDA",
  "CoWoS",
  "HBM3e",
  "Blackwell",
  "TPU v7",
  "NVL72",
  "Datacenter",
  "Wafer Fab",
  "Trainium",
  "ROCm",
  "InfiniBand",
  "ClusterMAX",
  "3nm",
  "AI Accelerator",
  "Neocloud",
];

export function IndustryTicker() {
  const items = [...terms, ...terms];

  return (
    <div
      className="relative shrink-0 overflow-hidden border-t border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] py-3"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--sa-bg-elevated)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--sa-bg-elevated)] to-transparent" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((term, i) => (
          <span
            key={`${term}-${i}`}
            className="flex items-center gap-10 text-xs font-medium uppercase tracking-[0.2em] text-[var(--sa-metal)]"
          >
            {term}
            <span className="inline-block h-1 w-1 rounded-full bg-[var(--sa-amber)]/60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247,176,65,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[var(--sa-amber)]/10 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-[var(--sa-cobalt)]/10 blur-[90px]"
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[var(--sa-mint)]/5 blur-[80px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan line */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--sa-amber)]/40 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      {/* Corner brackets at viewport edges */}
      <svg className="absolute left-4 top-24 h-16 w-16 text-[var(--sa-amber)]/20 lg:left-16 xl:left-24" viewBox="0 0 64 64" fill="none">
        <path d="M4 20V4h16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 44v16h16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute right-4 top-32 h-16 w-16 text-[var(--sa-cobalt)]/20 lg:right-16 xl:right-24" viewBox="0 0 64 64" fill="none">
        <path d="M60 20V4H44" stroke="currentColor" strokeWidth="1.5" />
        <path d="M60 44v16H44" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
