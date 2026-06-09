"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/shared";
import { Button } from "@/components/ui";
import { officialModelUrls } from "@/lib/content";
import { SITE } from "@/lib/site";

const supplyChain = [
  { label: "Fab & Equipment", detail: "Litho, etch, materials" },
  { label: "Chip Design", detail: "VLSI, EDA, packaging" },
  { label: "Systems & DC", detail: "Servers, power, colo" },
  { label: "AI & Software", detail: "Training, inference, cost" },
];

const pillars = [
  {
    title: "Product-first research",
    body: "We analyze technology and trends from a product lens — not firm-by-firm marketing narratives. Our analysts have hands-on industry experience across the stack.",
    accent: "var(--sa-amber)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path d="M4 18V6l8-3 8 3v12l-8 3-8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 9v12M4 6l8 3 8-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Field intelligence",
    body: "40+ industry conferences annually. Regular engagement with every layer of the abstraction stack — from fabs and equipment vendors to hyperscaler infra teams.",
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
    title: "Flywheel coverage",
    body: "Semiconductors and AI form the world's most intricate supply chain. Specialists in one layer need upstream and downstream context — we connect the full picture.",
    accent: "var(--sa-mint)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 8.5l2 2M13.5 13.5l2 2M15.5 8.5l-2 2M10.5 13.5l-2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
];

const modelLinks = [
  { name: "Accelerator", href: officialModelUrls["accelerator-model"] },
  { name: "AI Cloud TCO", href: officialModelUrls["tco-model"] },
  { name: "Datacenter", href: officialModelUrls["datacenter-model"] },
  { name: "Wafer Fab", href: officialModelUrls["wafer-fab-model"] },
  { name: "AI Networking", href: officialModelUrls["ai-networking-model"] },
];

const audiences = [
  "Hedge funds & PE",
  "Semiconductor C-suite",
  "Hyperscaler infra",
  "Neocloud operators",
  "Enterprise AI buyers",
  "Equipment vendors",
];

function SupplyChainFlow() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-5 md:p-6">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--sa-cobalt)]/10 blur-[40px]" />
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sa-metal)]">
        Full-stack coverage
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--sa-text-muted)]">
        From semiconductor fabrication essentials to cutting-edge AI models, software, and
        infrastructure — one unified view of the supply chain.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {supplyChain.map((node, i) => (
          <motion.div
            key={node.label}
            whileHover={{ y: -2 }}
            className="sa-card-glow group flex flex-col rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-card)] p-3 sm:min-h-[5.5rem]"
          >
            <span
              className="mb-2 inline-block h-0.5 w-6 rounded transition-all group-hover:w-10"
              style={{
                background: ["var(--sa-cobalt)", "var(--sa-amber)", "var(--sa-mint)", "var(--sa-coral)"][i],
              }}
            />
            <span className="text-xs font-semibold text-[var(--sa-text)]">{node.label}</span>
            <span className="mt-1 text-[10px] leading-snug text-[var(--sa-metal)]">
              {node.detail}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProprietaryModelsCard() {
  return (
    <div className="sa-glow-border relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--sa-amber)]/15 bg-gradient-to-br from-[var(--sa-bg-card)] to-[var(--sa-bg-elevated)] p-5">
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-[var(--sa-amber)]/10 blur-[50px]" />
      <div className="relative flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sa-amber)]">
          Proprietary models
        </p>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--sa-text-muted)]">
          Bottoms-up industry models covering accelerator production, AI cloud
          economics, datacenter power, wafer fab equipment, and AI networking —
          distilled into ChipBook and advisory deliverables.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {modelLinks.map((m) => (
            <a
              key={m.href}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--sa-border)] bg-[var(--sa-bg)] px-3 py-1.5 text-xs font-medium text-[var(--sa-text-muted)] transition hover:border-[var(--sa-amber)]/50 hover:text-[var(--sa-amber)]"
            >
              {m.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function PillarCard({
  title,
  body,
  accent,
  icon,
}: (typeof pillars)[number]) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="sa-card-glow group flex h-full flex-col rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-5"
    >
      <div
        className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--sa-border)]"
        style={{ color: accent, background: `color-mix(in srgb, ${accent} 12%, transparent)` }}
      >
        {icon}
      </div>
      <h3 className="text-sm font-semibold transition-colors group-hover:text-[var(--sa-amber)]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--sa-text-muted)]">{body}</p>
    </motion.article>
  );
}

export function WhySemiAnalysis() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[var(--sa-border)] bg-[var(--sa-bg)] py-10 md:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(247,176,65,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 50% at 80% 20%, black 10%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-10 xl:grid-cols-[minmax(0,26rem)_1fr]">
          {/* Left — narrative */}
          <FadeUp>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--sa-amber)]">
              <span className="inline-block h-px w-6 bg-[var(--sa-amber)]/60" />
              Why SemiAnalysis
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Research-grade,{" "}
              <span className="sa-text-gradient">not marketing-grade</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--sa-text-muted)]">
              Independent analysis built for investors, AI infrastructure teams, and
              enterprise buyers navigating the semiconductor and AI landscape — with
              proprietary models, curated datasets, and deep technical coverage.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--sa-metal)]">
              With a subscription you get full access to all articles, article
              discussions, and further insight into deep dives.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/models">Explore Models</Button>
              <Button href="/products/chipbook" variant="secondary">
                View ChipBook
              </Button>
              <Button href={SITE.newsletterSubscribeUrl} variant="ghost">
                Subscribe Free
              </Button>
            </div>

            <div className="mt-6 rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sa-metal)]">
                Trusted by
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {audiences.map((audience) => (
                  <span
                    key={audience}
                    className="rounded-md border border-[var(--sa-border)] bg-[var(--sa-bg-card)] px-2 py-0.5 text-[11px] text-[var(--sa-text-muted)]"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right — bento grid */}
          <StaggerGrid className="grid gap-4 md:grid-cols-2" stagger={0.08}>
            <StaggerItem className="md:col-span-2">
              <SupplyChainFlow />
            </StaggerItem>

            {pillars.slice(0, 2).map((pillar) => (
              <StaggerItem key={pillar.title}>
                <PillarCard {...pillar} />
              </StaggerItem>
            ))}

            <StaggerItem>
              <PillarCard {...pillars[2]} />
            </StaggerItem>

            <StaggerItem>
              <ProprietaryModelsCard />
            </StaggerItem>
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
