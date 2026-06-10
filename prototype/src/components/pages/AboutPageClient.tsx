"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FadeUp,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared";
import { Container } from "@/components/shared";
import { ConversionBand } from "@/components/marketing";
import { Button } from "@/components/ui";
import { SITE } from "@/lib/site";

const stats = [
  { label: "Newsletter Readers", value: "200K+" },
  { label: "Articles Published", value: "100+" },
  { label: "Conferences / Year", value: "40+" },
  { label: "Institutional Products", value: "4" },
];

const stackLayers = [
  {
    label: "AI Models & Inference",
    detail: "Training infra, performance, cost",
    accent: "var(--sa-coral)",
  },
  {
    label: "Software & EDA",
    detail: "Frameworks, tooling, stacks",
    accent: "var(--sa-mint)",
  },
  {
    label: "Datacenters & Systems",
    detail: "Server architecture, power, colo",
    accent: "var(--sa-cobalt)",
  },
  {
    label: "Networking & Optics",
    detail: "Scale-up, scale-out, transceivers",
    accent: "var(--sa-amber)",
  },
  {
    label: "Chip Design & VLSI",
    detail: "Architectures, packaging, yields",
    accent: "var(--sa-cobalt)",
  },
  {
    label: "Foundries & Process",
    detail: "Nodes, wafer costs, capacity",
    accent: "var(--sa-mint)",
  },
  {
    label: "Fab & Equipment",
    detail: "Litho, etch, materials, packaging",
    accent: "var(--sa-amber)",
  },
];

const coverageAreas = [
  "Semiconductor Capital Equipment & Materials",
  "Fabrication and Packaging",
  "Foundries, Process Nodes, Wafer Yields, and Costs",
  "Chip Design & VLSI",
  "Networking & Optics",
  "Server-Level System Architecture, Datacenters",
  "Software and EDA",
  "AI Model Frameworks, Training & Inference Infrastructure, Performance, and Cost",
];

const methodology = [
  {
    title: "Supply chain forensics",
    body: "Wafer-level cost modeling, fab tooling lead times, and cross-border logistics mapping — ground truth from silicon to shipment.",
    accent: "var(--sa-amber)",
  },
  {
    title: "Technical due diligence",
    body: "Architectural teardowns of GPUs, TPUs, and ASICs. Reverse-engineered yield analytics and hyperscale ROI forecasts.",
    accent: "var(--sa-cobalt)",
  },
  {
    title: "Market signal extraction",
    body: "AI cluster deployment tracking, hyperscaler procurement patterns, and pre-consensus catalysts for public markets.",
    accent: "var(--sa-mint)",
  },
];

const sellingPoints = [
  {
    title: "Product first",
    body: "We focus on technology, trends, and look at it from a tech/product first perspective as opposed to viewing firms in isolation.",
    accent: "var(--sa-amber)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path d="M4 18V6l8-3 8 3v12l-8 3-8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 9v12M4 6l8 3 8-3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Conferences",
    body: "We attend 40+ industry conferences and engage with every layer of the abstraction stack regularly.",
    accent: "var(--sa-cobalt)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 13v8M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Flywheel approach",
    body: "Semiconductors and AI are the most intricate supply chain and nobody knows every step — many specialists in one part of the supply chain would like to gain perspective on many other parts — leading to a mutually beneficial engagements. They need understand the context of what's going on upstream and downstream.",
    accent: "var(--sa-mint)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 8.5l2 2M13.5 13.5l2 2M15.5 8.5l-2 2M10.5 13.5l-2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    wide: true,
  },
];

const serviceBlocks = [
  {
    label: "Strategic consulting",
    body: "Strategic and technical consulting and analysis services for organizations in semiconductor industry and institutional.",
    tags: ["Technical due diligence", "Institutional"],
    accent: "var(--sa-amber)",
  },
  {
    label: "Tailored engagements",
    body: "Tailored solutions to match our clients' needs with options such as retained advisory engagements, bespoke project work, offering industry and product models for sale and hourly consulting.",
    tags: ["Retained advisory", "Bespoke projects", "Industry models"],
    accent: "var(--sa-cobalt)",
  },
];

const audiences = [
  "Hedge funds & PE",
  "Semiconductor C-suite",
  "Hyperscaler infra",
  "Neocloud operators",
  "Enterprise AI buyers",
  "Equipment vendors",
  "Governments",
];

function SupplyChainStack() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-4">
      <div className="pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-[var(--sa-cobalt)]/10 blur-[60px]" />
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-metal)]">
        Abstraction stack
      </p>
      <p className="mt-1 text-xs leading-relaxed text-[var(--sa-text-muted)]">
        One unified view from transistor to training cluster.
      </p>

      <div className="mt-3 space-y-1">
        {stackLayers.map((layer, i) => {
          const isActive = active === i;
          return (
            <motion.button
              key={layer.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={isActive}
              className="group relative flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sa-amber)]"
              style={{
                borderColor: isActive
                  ? `color-mix(in srgb, ${layer.accent} 45%, var(--sa-border))`
                  : "var(--sa-border)",
                background: isActive
                  ? `color-mix(in srgb, ${layer.accent} 8%, var(--sa-bg-card))`
                  : "var(--sa-bg-card)",
              }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="h-8 w-1 shrink-0 rounded-full transition-all"
                style={{
                  background: layer.accent,
                  opacity: isActive ? 1 : 0.35,
                  boxShadow: isActive
                    ? `0 0 12px color-mix(in srgb, ${layer.accent} 50%, transparent)`
                    : "none",
                }}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold text-[var(--sa-text)]">
                  {layer.label}
                </span>
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="block overflow-hidden text-[10px] text-[var(--sa-metal)]"
                    >
                      {layer.detail}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <span
                className="text-[10px] font-medium tabular-nums text-[var(--sa-metal)] transition-opacity"
                style={{ opacity: isActive ? 1 : 0.5 }}
              >
                L{i + 1}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

const heroPillars = [
  { label: "Product-first research", accent: "var(--sa-amber)" },
  { label: "40+ conferences annually", accent: "var(--sa-cobalt)" },
  { label: "Full-stack coverage", accent: "var(--sa-mint)" },
];

function AboutHero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden border-b border-[var(--sa-border)]">
      {/* Diagonal color wash — not the homepage orb field */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--sa-amber) 6%, transparent) 0%, transparent 45%, color-mix(in srgb, var(--sa-cobalt) 5%, transparent) 100%)",
        }}
      />

      {/* Outline watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <span
          className="block text-[clamp(4rem,14vw,9rem)] font-bold leading-none tracking-[-0.04em] text-transparent opacity-80"
          style={{ WebkitTextStroke: "1px color-mix(in srgb, var(--sa-amber) 16%, transparent)" }}
        >
          SemiAnalysis
        </span>
      </div>

      <Container className="relative flex flex-1 flex-col justify-center py-6 md:py-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--sa-metal)] backdrop-blur-sm">
              About us
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="mt-4 text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
              Bridging the gap between{" "}
              <span className="sa-text-gradient">business</span>
              <br className="hidden sm:block" />
              <span className="text-[var(--sa-text-muted)]"> and the </span>
              world&apos;s most important industry
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--sa-text-muted)] md:text-base">
              Independent research on semiconductors and AI — from fabrication and
              packaging to datacenters, models, and infrastructure. Built for investors,
              enterprises, and governments who need clarity, not noise.
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <Button href={SITE.contactSalesUrl}>Contact Sales</Button>
              <Button href={SITE.careersUrl} variant="secondary" external>
                Careers
              </Button>
              <Button href={SITE.newsletterSubscribeUrl} variant="ghost" external>
                Subscribe free →
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.32}>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              {heroPillars.map((pillar) => (
                <span
                  key={pillar.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]/70 px-3 py-1 text-[11px] text-[var(--sa-text-muted)] backdrop-blur-sm"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: pillar.accent }}
                  />
                  {pillar.label}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Glass stats panel */}
        <FadeUp delay={0.4}>
          <dl className="mx-auto mt-6 grid w-full max-w-4xl grid-cols-2 divide-x divide-y divide-[var(--sa-border)] overflow-hidden rounded-2xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]/60 backdrop-blur-md md:mt-8 md:grid-cols-4 md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-3.5 text-center md:px-5 md:py-4">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-metal)]">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-xl font-bold tabular-nums text-[var(--sa-text)] md:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </Container>
    </section>
  );
}

function CoverageList() {
  return (
    <ol className="grid gap-2 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-2">
      {coverageAreas.map((area, i) => (
        <li
          key={area}
          className="flex gap-3 rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg)] px-3 py-2.5 text-sm leading-snug text-[var(--sa-text)]"
        >
          <span className="shrink-0 font-semibold tabular-nums text-[var(--sa-amber)]">
            {i + 1}.
          </span>
          <span>{area}</span>
        </li>
      ))}
    </ol>
  );
}

function ServicesAndPointsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--sa-bg-elevated)] py-8 md:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(247,176,65,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-[var(--sa-amber)]/8 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-[var(--sa-cobalt)]/8 blur-[80px]"
        aria-hidden="true"
      />

      <Container className="relative space-y-5">
        <FadeUp>
          <div className="sa-glow-border relative overflow-hidden rounded-2xl border border-[var(--sa-border)] bg-[var(--sa-bg-card)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--sa-amber)]/60 to-transparent" />
            <div className="grid lg:grid-cols-[minmax(0,11rem)_1fr]">
              <div className="relative border-b border-[var(--sa-border)] p-5 lg:border-b-0 lg:border-r lg:p-6">
                <div
                  className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full blur-3xl"
                  style={{ background: "color-mix(in srgb, var(--sa-amber) 15%, transparent)" }}
                />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sa-amber)]">
                  For clients
                </p>
                <h2 className="relative mt-2 text-xl font-bold md:text-2xl">Services we offer</h2>
                <div className="relative mt-3 h-1 w-10 rounded-full bg-[var(--sa-amber)]" />
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5 md:gap-4 md:p-6">
                {serviceBlocks.map((block) => (
                  <motion.div
                    key={block.label}
                    whileHover={{ y: -2 }}
                    className="sa-card-glow group relative overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-4"
                  >
                    <div
                      className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl transition-opacity group-hover:opacity-100"
                      style={{
                        background: block.accent,
                        opacity: 0.1,
                      }}
                    />
                    <span
                      className="inline-block h-0.5 w-8 rounded-full"
                      style={{ background: block.accent }}
                    />
                    <h3 className="mt-3 text-sm font-semibold text-[var(--sa-text)] group-hover:text-[var(--sa-amber)]">
                      {block.label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--sa-text-muted)]">
                      {block.body}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {block.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--sa-border)] bg-[var(--sa-bg)] px-2 py-0.5 text-[10px] text-[var(--sa-metal)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="relative overflow-hidden rounded-2xl border border-[var(--sa-border)] bg-[var(--sa-bg-card)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--sa-mint)]/50 to-transparent" />
            <div className="grid lg:grid-cols-[minmax(0,11rem)_1fr]">
              <div className="border-b border-[var(--sa-border)] p-5 lg:border-b-0 lg:border-r lg:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sa-mint)]">
                  Why us
                </p>
                <h2 className="mt-2 text-xl font-bold md:text-2xl">Unique selling points</h2>
                <div className="mt-3 h-1 w-10 rounded-full bg-[var(--sa-mint)]" />
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5 md:gap-4 md:p-6">
                {sellingPoints.map((point) => (
                  <motion.article
                    key={point.title}
                    whileHover={{ y: -2 }}
                    className={`sa-card-glow group relative overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-4 ${
                      point.wide ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                      style={{ background: point.accent }}
                    />
                    <div className="flex gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--sa-border)]"
                        style={{
                          color: point.accent,
                          background: `color-mix(in srgb, ${point.accent} 12%, transparent)`,
                        }}
                      >
                        {point.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-[var(--sa-text)] group-hover:text-[var(--sa-amber)]">
                          {point.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-[var(--sa-text-muted)]">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

export function AboutPageClient() {
  return (
    <>
      <AboutHero />

      {/* Mission + stack + differentiators */}
      <section className="w-full border-b border-[var(--sa-border)] py-8 md:py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <FadeUp>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-amber)]">
                <span className="inline-block h-px w-5 bg-[var(--sa-amber)]/60" />
                Our mission
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Research-grade intelligence for the{" "}
                <span className="sa-text-gradient">semiconductor & AI</span> ecosystem
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--sa-text-muted)]">
                SemiAnalysis is a boutique intelligence platform — proprietary datasets,
                strategic advisory, and deep technical coverage across the full stack. What
                began as a newsletter is now essential reading for multi-million dollar
                decisions in silicon and AI.
              </p>
              <div className="mt-4 rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] px-3 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-metal)]">
                  Trusted by
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {audiences.map((audience) => (
                    <span
                      key={audience}
                      className="rounded-md border border-[var(--sa-border)] bg-[var(--sa-bg-card)] px-2 py-0.5 text-[10px] text-[var(--sa-text-muted)]"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <SupplyChainStack />
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Coverage mosaic */}
      <section className="relative w-full overflow-hidden border-b border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] py-8 md:py-10">
        <Container className="relative">
          <FadeUp>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-cobalt)]">
              What we cover
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight md:text-3xl">
              Every layer. One coherent narrative.
            </h2>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="mt-4">
              <CoverageList />
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Methodology */}
      <section className="w-full border-b border-[var(--sa-border)] py-8 md:py-10">
        <Container>
          <FadeUp>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--sa-mint)]">
              How we work
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight md:text-3xl">
              Analysis, models, and advisory
            </h2>
          </FadeUp>

          <StaggerGrid className="mt-5 grid gap-3 md:grid-cols-3" stagger={0.06}>
            {methodology.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.article
                  whileHover={{ y: -2 }}
                  className="sa-card-glow group relative h-full overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-4"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-0.5"
                    style={{ background: item.accent }}
                  />
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold"
                    style={{
                      color: item.accent,
                      background: `color-mix(in srgb, ${item.accent} 12%, transparent)`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold group-hover:text-[var(--sa-amber)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--sa-text-muted)]">
                    {item.body}
                  </p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </section>

      <ServicesAndPointsSection />

      <ConversionBand />
    </>
  );
}
