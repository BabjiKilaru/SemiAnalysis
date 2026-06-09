"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FadeUp,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared";
import { Container } from "@/components/shared";
import { ConversionBand } from "@/components/marketing";
import { Button } from "@/components/ui";
import { SITE } from "@/lib/site";

const heroStats = [
  { label: "Pages", value: "35–50", accent: "var(--sa-amber)" },
  { label: "Datasets", value: "125+", accent: "var(--sa-cobalt)" },
  { label: "Cadence", value: "Monthly", accent: "var(--sa-mint)" },
  { label: "Calls", value: "Included", accent: "var(--sa-coral)" },
];

function ChipBookPageBackground() {
  const reduceMotion = useReducedMotion();
  const ease = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, ease }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(247,176,65,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(247,176,65,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 select-none px-4"
      >
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--sa-amber) 40%, transparent) 0%, color-mix(in srgb, var(--sa-cobalt) 22%, transparent) 50%, transparent 72%)",
          }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
          animate={
            reduceMotion
              ? { opacity: 0.32, scale: 1 }
              : { opacity: [0, 0.55, 0.32], scale: [0.88, 1.1, 1] }
          }
          transition={
            reduceMotion
              ? { duration: 0.01 }
              : { duration: 2.8, ease, times: [0, 0.6, 1] }
          }
        />
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(ellipse at center, color-mix(in srgb, var(--sa-amber) 40%, transparent) 0%, color-mix(in srgb, var(--sa-cobalt) 22%, transparent) 50%, transparent 72%)",
            }}
            animate={{ opacity: [0.24, 0.4, 0.24], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
          />
        )}
        <div className="relative text-center">
          <motion.span
            className="block text-[clamp(2rem,5.5vw,3.75rem)] font-semibold uppercase tracking-[0.3em] text-[var(--sa-cobalt)]/25"
            style={{ WebkitTextStroke: "1px color-mix(in srgb, var(--sa-cobalt) 55%, transparent)" }}
            initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.15, ease }}
          >
            SemiAnalysis
          </motion.span>
          <motion.span
            className="-mt-2 block text-[clamp(5.5rem,20vw,14rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[var(--sa-metal)]/20 md:-mt-3"
            style={{ WebkitTextStroke: "1px color-mix(in srgb, var(--sa-amber) 45%, transparent)" }}
            initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.94, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: reduceMotion ? 0 : 0.45, ease }}
          >
            ChipBook
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

function ChipBookHero() {
  return (
    <section className="relative w-full border-b border-[var(--sa-border)]">
      <Container className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-end pb-5 pt-16 md:pb-6 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="sa-glow-border relative shrink-0 overflow-hidden rounded-2xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]/80 backdrop-blur-md"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--sa-amber)]/50 to-transparent" />
          <div className="p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="sa-shimmer rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--sa-amber)]">
                    Institutional Product
                  </span>
                  <span className="text-[10px] text-[var(--sa-metal)]">Vol. monthly · SemiAnalysis</span>
                </div>
                <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  The industry&apos;s{" "}
                  <span className="sa-text-gradient">monthly intelligence</span> report
                </h1>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-2 md:items-end md:pt-1">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button href={SITE.loginUrl} external={false}>
                      Buy ChipBook
                    </Button>
                    <Button href={SITE.chipbookSampleUrl} variant="secondary" external>
                      Download Sample
                    </Button>
                  </div>
                  <p className="text-center text-xs leading-relaxed text-[var(--sa-text-muted)]">
                    Questions? Reach out to
                    <br />
                    <a
                      href={`mailto:${SITE.chipbookSalesEmail}`}
                      className="font-medium text-[var(--sa-cobalt)] transition hover:text-[var(--sa-amber)]"
                    >
                      {SITE.chipbookSalesEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto] md:items-end md:gap-6">
              <p className="text-sm leading-relaxed text-[var(--sa-text-muted)]">
                The SemiAnalysis ChipBook is a monthly AI and semiconductor industry tracker
                which provides both timely and targeted insights into the overall state of
                the industry, as well as detailed information about specific sectors and
                trends. ChipBook contains thousands of unique data points, carefully
                selected to distill clear and actionable insights for investors and company
                decision makers.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2 md:gap-2 lg:grid-cols-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-card)] px-3 py-2.5 text-center"
                  >
                    <p
                      className="text-lg font-bold tabular-nums md:text-xl"
                      style={{ color: stat.accent }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--sa-metal)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

const coreTrackers = [
  "Memory Trackers",
  "Smartphone & PC imports (USD & Units)",
  "WFE imports/exports from key geographies",
  "Auto exports from key geographies",
  "Bare wafer and Boule Imports/Exports",
  "PCB sales and Imports/Exports",
];

const timelyDatasets = [
  "China, Taiwan & Korea WFE imports by type (Litho, Etch & Deposition)",
  "Auto exports by type (ICE, Hybrid, PHEV & EV)",
  "Taiwan CoWoS supplier revenue Index",
  "Nvidia server component supplier index",
  "Semiconductor inspection equipment imports/exports from key geographies",
];

const subscriptionBenefits = [
  {
    title: "Proprietary model insights",
    body: "Distilled datasets from the AI Accelerator Model, Datacenter Model, and broader SemiAnalysis offering.",
    accent: "var(--sa-amber)",
  },
  {
    title: "Monthly analyst calls",
    body: "Personalized insight sessions with ChipBook analysts included with every subscription.",
    accent: "var(--sa-cobalt)",
  },
  {
    title: "Full archive access",
    body: "35–50 page monthly deliverable with charts, equity references, and all previous editions.",
    accent: "var(--sa-mint)",
  },
];

function TrackerPanel({
  title,
  subtitle,
  items,
  accent,
  active,
  onSelect,
}: {
  title: string;
  subtitle: string;
  items: string[];
  accent: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`sa-card-glow group relative w-full overflow-hidden rounded-xl border p-3 text-left transition-colors md:p-4 ${
        active
          ? "border-[var(--sa-amber)]/40 bg-[var(--sa-bg-card)]"
          : "border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl transition-opacity"
        style={{
          background: accent,
          opacity: active ? 0.15 : 0.06,
        }}
      />
      <span
        className="inline-block h-0.5 w-10 rounded-full transition-all group-hover:w-14"
        style={{ background: accent }}
      />
      <h3 className="mt-2 text-sm font-bold text-[var(--sa-text)] group-hover:text-[var(--sa-amber)]">
        {title}
      </h3>
      <p className="mt-1 text-xs leading-relaxed text-[var(--sa-text-muted)]">{subtitle}</p>
      <ul className={`mt-3 space-y-1.5 ${active ? "block" : "hidden sm:block"}`}>
        {items.map((item, i) => (
          <li
            key={item}
            className="flex gap-2 text-xs leading-snug text-[var(--sa-text-muted)]"
          >
            <span className="shrink-0 font-semibold tabular-nums" style={{ color: accent }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.button>
  );
}

export function ChipBookPageClient() {
  const [activeTracker, setActiveTracker] = useState<"core" | "timely">("core");

  return (
    <div className="relative">
      <ChipBookPageBackground />

      <div className="relative z-10">
        <ChipBookHero />

      {/* Audience + trackers */}
      <section className="w-full border-b border-[var(--sa-border)] py-6 md:py-8">
        <Container className="space-y-6 md:space-y-8">
          <div>
            <FadeUp>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-cobalt)]">
                Built for decision-makers
              </p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                Value across the ecosystem
              </h2>
            </FadeUp>
            <StaggerGrid className="mt-4 grid gap-3 md:grid-cols-2" stagger={0.06}>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="sa-card-glow h-full rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--sa-border)] bg-[var(--sa-amber)]/10 text-[var(--sa-amber)]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path d="M4 18V6l8-3 8 3v12l-8 3-8-3Z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold">For investors</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sa-text-muted)]">
                    Idea generation tool, investment thesis validation, and portfolio
                    position tracking across the semiconductor and AI cycle.
                  </p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="sa-card-glow h-full rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--sa-border)] bg-[var(--sa-mint)]/10 text-[var(--sa-mint)]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path d="M10 38V18L24 10L38 18V38H10Z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold">For executives</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sa-text-muted)]">
                    Resource allocation optimization, strategic R&amp;D investments, and
                    knowing when to adapt capacity as the industry shifts.
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerGrid>
          </div>

          <div className="border-t border-[var(--sa-border)] pt-6 md:pt-8">
            <FadeUp>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-amber)]">
                Inside every issue
              </p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                Core trackers &amp; timely datasets
              </h2>
            </FadeUp>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <FadeUp delay={0.04}>
                <TrackerPanel
                  title="Core industry trackers"
                  subtitle="Consistent slides updated each month — monitor the overall semiconductor value chain and broader semi-cycle."
                  items={coreTrackers}
                  accent="var(--sa-amber)"
                  active={activeTracker === "core"}
                  onSelect={() => setActiveTracker("core")}
                />
              </FadeUp>
              <FadeUp delay={0.08}>
                <TrackerPanel
                  title="Timely datasets"
                  subtitle="Rotating slides selected for timeliness and actionability from our 125+ dataset library."
                  items={timelyDatasets}
                  accent="var(--sa-cobalt)"
                  active={activeTracker === "timely"}
                  onSelect={() => setActiveTracker("timely")}
                />
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* Subscription benefits */}
      <section className="w-full border-b border-[var(--sa-border)] py-6 md:py-8">
        <Container>
          <FadeUp>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-mint)]">
              Subscription
            </p>
            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              What&apos;s included
            </h2>
          </FadeUp>

          <StaggerGrid className="mt-4 grid gap-3 md:grid-cols-3" stagger={0.05}>
            {subscriptionBenefits.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="sa-card-glow relative h-full overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-card)] p-3.5"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ background: item.accent }}
                  />
                  <h3 className="text-sm font-semibold text-[var(--sa-text)]">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--sa-text-muted)]">
                    {item.body}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </section>

      <ConversionBand />
      </div>
    </div>
  );
}
