"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Container } from "@/components/shared";
import { SITE } from "@/lib/site";

const highlights = [
  { label: "Pages per issue", value: "35–50" },
  { label: "Active datasets", value: "125+" },
  { label: "Delivery", value: "Monthly" },
  { label: "Analyst calls", value: "Included" },
];

export function ChipBookSpotlight() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[var(--sa-border)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(247,176,65,0.12)_0%,transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 80px, var(--sa-border) 80px, var(--sa-border) 81px)`,
        }}
        aria-hidden="true"
      />
      <Container>
      <div className="relative grid w-full gap-10 py-12 md:grid-cols-[1.2fr_1fr] md:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sa-amber)]">
            Flagship Product
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            The industry&apos;s{" "}
            <span className="sa-text-gradient">monthly intelligence</span>{" "}
            report
          </h2>
          <p className="mt-4 max-w-lg text-[var(--sa-text-muted)]">
            ChipBook distills thousands of semiconductor data points into a
            35–50 page deliverable trusted by investment funds and executives
            across the ecosystem.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={SITE.loginUrl} external={false}>Buy ChipBook</Button>
            <Button href={SITE.chipbookSampleUrl} variant="secondary" external>
              Download Sample
            </Button>
            <Button href="/models" variant="secondary">
              Explore Models
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="sa-card-glow rounded-xl border border-[var(--sa-amber)]/20 bg-[var(--sa-bg-card)] p-5"
            >
              <p className="text-xs uppercase tracking-wider text-[var(--sa-metal)]">
                {item.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-[var(--sa-amber)]">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </Container>
    </section>
  );
}
