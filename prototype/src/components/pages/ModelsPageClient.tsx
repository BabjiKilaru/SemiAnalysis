"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  AnimatedStat,
  FadeUp,
  HeroReveal,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared";
import { Container } from "@/components/shared";
import { HeroBackground, IndustryTicker } from "@/components/shared";
import { ConversionBand } from "@/components/marketing";
import { ModelDetailOverlay } from "@/components/models";
import type { IndustryModelEntry } from "@/lib/content";
import { getModelBySlug } from "@/lib/models";
import { SITE } from "@/lib/site";

type Category = IndustryModelEntry["category"] | "all";

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "All models" },
  { id: "compute", label: "AI compute" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "supply-chain", label: "Supply chain" },
  { id: "research", label: "Research" },
];

const CATEGORY_META: Record<
  IndustryModelEntry["category"],
  { label: string; accent: string; gradient: string; icon: string }
> = {
  compute: {
    label: "AI compute",
    accent: "var(--sa-cobalt)",
    gradient: "from-[var(--sa-cobalt)]/30 via-[var(--sa-bg-card)] to-[var(--sa-bg)]",
    icon: "M8 36L16 12L24 28L32 8L40 32",
  },
  infrastructure: {
    label: "Infrastructure",
    accent: "var(--sa-mint)",
    gradient: "from-[var(--sa-mint)]/25 via-[var(--sa-bg-card)] to-[var(--sa-bg)]",
    icon: "M10 38V18L24 10L38 18V38H10Z",
  },
  "supply-chain": {
    label: "Supply chain",
    accent: "var(--sa-amber)",
    gradient: "from-[var(--sa-amber)]/25 via-[var(--sa-bg-card)] to-[var(--sa-bg)]",
    icon: "M24 10V38M10 24H38",
  },
  research: {
    label: "Research",
    accent: "var(--sa-coral)",
    gradient: "from-[var(--sa-coral)]/25 via-[var(--sa-bg-card)] to-[var(--sa-bg)]",
    icon: "M12 34L24 14L36 34",
  },
};

const STACK_LAYERS = [
  { label: "Silicon & memory", color: "var(--sa-amber)" },
  { label: "Packaging & networking", color: "var(--sa-cobalt)" },
  { label: "Datacenter & power", color: "var(--sa-mint)" },
  { label: "Economics & tokens", color: "var(--sa-coral)" },
];

function ModelCardButton({
  model,
  children,
  className = "",
  onOpen,
}: {
  model: IndustryModelEntry;
  children: ReactNode;
  className?: string;
  onOpen: (slug: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(model.slug)}
      className={`w-full cursor-pointer text-left ${className}`}
    >
      {children}
    </button>
  );
}

function CategoryIcon({ category }: { category: IndustryModelEntry["category"] }) {
  const meta = CATEGORY_META[category];
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d={meta.icon}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeaturedSpotlight({
  model,
  onOpen,
}: {
  model: IndustryModelEntry;
  onOpen: (slug: string) => void;
}) {
  const meta = CATEGORY_META[model.category];
  const isChipBook = model.name === "ChipBook";

  return (
    <StaggerItem>
      <ModelCardButton
        model={model}
        onOpen={onOpen}
        className={`sa-card-glow group relative flex h-full flex-col overflow-hidden rounded-xl border p-5 ${
          isChipBook
            ? "sa-glow-border border-[var(--sa-amber)]/30 bg-[var(--sa-bg-card)]"
            : "border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]"
        }`}
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.gradient}`} />
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-20 blur-3xl"
          style={{ background: meta.accent }}
        />

        <div className="relative flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/25 p-2 backdrop-blur-sm"
                style={{ color: meta.accent }}
              >
                <CategoryIcon category={model.category} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-[var(--sa-amber)]">
                  {model.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium" style={{ color: meta.accent }}>
                  {model.tagline}
                </p>
              </div>
            </div>
            {isChipBook && (
              <span className="sa-shimmer shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium text-[var(--sa-amber)]">
                Flagship
              </span>
            )}
          </div>

          <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--sa-text-muted)]">
            {model.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sa-amber)] transition-all group-hover:gap-2">
            Learn more
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </ModelCardButton>
    </StaggerItem>
  );
}

function ModelCard({
  model,
  index,
  onOpen,
}: {
  model: IndustryModelEntry;
  index: number;
  onOpen: (slug: string) => void;
}) {
  const meta = CATEGORY_META[model.category];
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
    >
      <ModelCardButton
        model={model}
        onOpen={onOpen}
        className="sa-card-glow group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-4"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-80 transition-opacity group-hover:opacity-100"
          style={{ background: meta.accent }}
        />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

        <div className="relative flex flex-1 flex-col pl-3">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs tracking-widest text-[var(--sa-metal)]">{num}</span>
            <span
              className="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                borderColor: `color-mix(in srgb, ${meta.accent} 35%, transparent)`,
                color: meta.accent,
              }}
            >
              {meta.label}
            </span>
          </div>

          <div className="flex gap-3">
            <div
              className="mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 p-1.5"
              style={{ color: meta.accent }}
            >
              <CategoryIcon category={model.category} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mt-2 text-base font-semibold leading-snug transition-colors group-hover:text-[var(--sa-amber)]">
                {model.name}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-[var(--sa-cobalt)]">{model.tagline}</p>
            </div>
          </div>

          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--sa-text-muted)]">
            {model.description}
          </p>

          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--sa-amber)] transition-all group-hover:gap-2">
            Learn more
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </ModelCardButton>
    </motion.div>
  );
}

export function ModelsPageClient({ models }: { models: IndustryModelEntry[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const selectedSlug = searchParams.get("model");
  const selectedModel = selectedSlug ? getModelBySlug(selectedSlug) ?? null : null;

  const openModel = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("model", slug);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const closeModel = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("model");
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const featured = useMemo(() => models.filter((m) => m.featured), [models]);
  const catalog = useMemo(() => models.filter((m) => !m.featured), [models]);
  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? catalog
        : catalog.filter((m) => m.category === activeFilter),
    [catalog, activeFilter],
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--sa-border)]">
        <HeroBackground />
        <Container className="relative py-8 md:py-10">
          <HeroReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--sa-amber)]">
              Institutional offerings
            </p>
          </HeroReveal>
          <HeroReveal delay={0.08}>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl md:leading-tight">
              Proprietary models for{" "}
              <span className="bg-gradient-to-r from-[var(--sa-amber)] via-[var(--sa-cobalt)] to-[var(--sa-mint)] bg-clip-text text-transparent">
                the full AI stack
              </span>
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.16}>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--sa-text-muted)]">
              From wafer starts to token economics — fourteen institutional models
              built for investors, hyperscalers, and industry leaders.{" "}
              <a
                href={SITE.modelsResearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--sa-amber)] underline-offset-2 hover:underline"
              >
                Learn more on semianalysis.com
              </a>
            </p>
          </HeroReveal>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--sa-border)] pt-5">
            <AnimatedStat value="14" label="Industry models" />
            <AnimatedStat value="4" label="Coverage layers" />
            <AnimatedStat value="125+" label="Tracked datasets" />
            <AnimatedStat value="60+" label="Accelerator customers" />
          </dl>

          <div className="mt-4 flex flex-wrap gap-2">
            {STACK_LAYERS.map((layer, i) => (
              <motion.span
                key={layer.label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--sa-border)] bg-[var(--sa-bg-card)]/80 px-3 py-1.5 text-xs font-medium"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: layer.color }}
                />
                {layer.label}
              </motion.span>
            ))}
          </div>
        </Container>
        <IndustryTicker />
      </section>

      {/* Featured + catalog */}
      <section className="border-b border-[var(--sa-border)] py-7 md:py-9">
        <Container>
          <FadeUp>
            <h2 className="text-xl font-bold md:text-2xl">Featured models</h2>
            <p className="mt-1 text-sm text-[var(--sa-text-muted)]">
              Our most-requested institutional offerings.
            </p>
          </FadeUp>
          <StaggerGrid className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {featured.map((model) => (
              <FeaturedSpotlight key={model.slug} model={model} onOpen={openModel} />
            ))}
          </StaggerGrid>

          <div className="mt-7 border-t border-[var(--sa-border)] pt-7 md:mt-8 md:pt-8">
            <FadeUp>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-bold md:text-2xl">Full catalog</h2>
                  <p className="mt-1 text-sm text-[var(--sa-text-muted)]">
                    Browse {catalog.length} additional models by coverage area.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {FILTERS.map((filter) => {
                    const pool =
                      filter.id === "all"
                        ? catalog
                        : catalog.filter((m) => m.category === filter.id);
                    const count = pool.length;
                    if (filter.id !== "all" && count === 0) return null;
                    const active = activeFilter === filter.id;
                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        aria-pressed={active}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                          active
                            ? "border-[var(--sa-amber)] bg-[var(--sa-amber)]/10 text-[var(--sa-amber)]"
                            : "border-[var(--sa-border)] text-[var(--sa-text-muted)] hover:border-[var(--sa-metal)] hover:text-[var(--sa-text)]"
                        }`}
                      >
                        {filter.label}
                        <span className="ml-1 text-xs opacity-70">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeUp>

            <motion.div layout className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((model, index) => (
                  <ModelCard key={model.slug} model={model} index={index} onOpen={openModel} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </Container>
      </section>

      <ConversionBand />

      <ModelDetailOverlay model={selectedModel} onClose={closeModel} />
    </>
  );
}
