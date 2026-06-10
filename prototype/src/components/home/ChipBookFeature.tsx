"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, FadeUp, StaggerGrid, StaggerItem } from "@/components/shared";
import { Button, SectionHeading } from "@/components/ui";
import { SITE } from "@/lib/site";
import type { Product } from "@/lib/content";

const metrics = [
  { value: "35–50 pg", label: "Monthly deliverable" },
  { value: "125+", label: "Active datasets" },
  { value: "Monthly", label: "Analyst calls" },
];

function ReportMockup() {
  return (
    <div className="relative mx-auto flex h-[22rem] w-full max-w-[15rem] items-center justify-center [perspective:900px] sm:h-[24rem] lg:mx-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,176,65,0.12)_0%,transparent_65%)]" />

      <motion.div
        className="absolute h-[17rem] w-[12.5rem] rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] shadow-xl sm:h-[18rem] sm:w-[13rem]"
        style={{ rotateY: -18, rotateZ: -6, translateZ: -40 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[17.5rem] w-[12.75rem] rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-card)] shadow-xl sm:h-[18.5rem] sm:w-[13.25rem]"
        style={{ rotateY: -10, rotateZ: -3, translateZ: -20 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />

      <motion.div
        className="relative h-[18rem] w-[13rem] overflow-hidden rounded-xl border border-[var(--sa-amber)]/30 bg-gradient-to-br from-[var(--sa-bg-card)] via-[#1f1a14] to-[var(--sa-bg)] shadow-[0_24px_50px_-20px_rgba(247,176,65,0.2)] sm:h-[19rem] sm:w-[13.5rem]"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ y: [0, -8, 0], rotateY: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.03, rotateY: 0 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(247,176,65,0.15)_0%,transparent_45%)]" />
        <div className="relative flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <span className="sa-shimmer rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--sa-amber)]">
              May 2026
            </span>
            <span className="text-[10px] font-medium text-[var(--sa-metal)]">Vol. 24</span>
          </div>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sa-cobalt)]">
            SemiAnalysis
          </p>
          <h3 className="mt-2 text-2xl font-bold leading-tight">
            Chip<span className="text-[var(--sa-amber)]">Book</span>
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[var(--sa-text-muted)]">
            AI & semiconductor industry tracker
          </p>
          <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
            <div className="flex h-12 items-end gap-1.5">
              {[40, 65, 48, 80, 55, 72, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[var(--sa-cobalt)]/80 to-[var(--sa-amber)]/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-[9px] uppercase tracking-wider text-[var(--sa-metal)]">
              Accelerator shipments · Foundry mix · Power demand
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ChipBookFeature({ product }: { product: Product }) {
  return (
    <section className="w-full border-y border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] py-10 md:py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_1fr] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,17rem)_1fr]">
          <FadeUp>
            <ReportMockup />
          </FadeUp>

          <div>
            <FadeUp>
              <SectionHeading
                eyebrow="Featured Product"
                title="ChipBook"
                description={product.tagline}
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--sa-text-muted)]">
                {product.description}
              </p>
            </FadeUp>

            <StaggerGrid
              className="mt-6 grid gap-3 sm:grid-cols-3"
              stagger={0.06}
            >
              {metrics.map((m) => (
                <StaggerItem key={m.label}>
                  <div className="rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-card)] px-4 py-3">
                    <p className="text-lg font-bold text-[var(--sa-amber)]">{m.value}</p>
                    <p className="mt-0.5 text-xs text-[var(--sa-metal)]">{m.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            {product.includes && (
              <FadeUp delay={0.15}>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {product.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 rounded-lg border border-transparent px-1 py-1 text-sm text-[var(--sa-text-muted)]"
                    >
                      <span className="shrink-0 text-[var(--sa-amber)]" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            )}

            {product.audience && (
              <FadeUp delay={0.2}>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-card)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-cobalt)]">
                      For investors
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--sa-text-muted)]">
                      {product.audience.investors}
                    </p>
                  </div>
                  <div className="rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-card)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-cobalt)]">
                      For executives
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--sa-text-muted)]">
                      {product.audience.executives}
                    </p>
                  </div>
                </div>
              </FadeUp>
            )}

            <FadeUp delay={0.25}>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button href={SITE.loginUrl} external={false}>
                  {product.ctaLabel ?? "Buy ChipBook"}
                </Button>
                <Button href={SITE.chipbookSampleUrl} variant="secondary">
                  Download Sample ChipBook
                </Button>
                <Link
                  href={product.href}
                  className="text-sm font-semibold text-[var(--sa-cobalt)] transition hover:text-[var(--sa-amber)]"
                >
                  See full product details →
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
