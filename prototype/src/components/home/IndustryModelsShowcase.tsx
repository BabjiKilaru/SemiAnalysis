"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/shared";
import { Button } from "@/components/ui";
import type { Product } from "@/lib/content";
import { SITE } from "@/lib/site";

const CARD_W = 290;
const CARD_H = 430;

const modelIcons: Record<string, ReactNode> = {
  "accelerator-model": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M8 36L16 12L24 28L32 8L40 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 24H40M12 18H36M10 30H38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.45" />
    </svg>
  ),
  "tco-model": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 14V10H32V14M20 24H28M20 28H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="34" r="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "datacenter-model": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M10 38V18L24 10L38 18V38H10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 38V26H30V38M20 22H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "wafer-fab-model": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M24 10V38M10 24H38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
    </svg>
  ),
  "ai-networking-model": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 16L12 30M24 16L36 30M12 34H36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const cardThemes: Record<string, { gradient: string; accent: string; iconColor: string }> = {
  "accelerator-model": {
    gradient: "from-[var(--sa-cobalt)]/55 via-[var(--sa-bg-card)] to-[var(--sa-bg)]",
    accent: "var(--sa-cobalt)",
    iconColor: "text-[var(--sa-cobalt)]",
  },
  "tco-model": {
    gradient: "from-[var(--sa-amber)]/45 via-[var(--sa-bg-card)] to-[var(--sa-bg)]",
    accent: "var(--sa-amber)",
    iconColor: "text-[var(--sa-amber)]",
  },
  "datacenter-model": {
    gradient: "from-[var(--sa-mint)]/40 via-[var(--sa-bg-card)] to-[var(--sa-bg)]",
    accent: "var(--sa-mint)",
    iconColor: "text-[var(--sa-mint)]",
  },
  "wafer-fab-model": {
    gradient: "from-[var(--sa-cobalt)]/35 via-[var(--sa-bg-elevated)] to-[var(--sa-bg)]",
    accent: "var(--sa-cobalt)",
    iconColor: "text-[var(--sa-cobalt)]",
  },
  "ai-networking-model": {
    gradient: "from-[var(--sa-amber)]/30 via-[var(--sa-bg-elevated)] to-[var(--sa-bg)]",
    accent: "var(--sa-amber)",
    iconColor: "text-[var(--sa-amber)]",
  },
};

const AUTOPLAY_MS = 4500;

function wrapOffset(index: number, activeIndex: number, count: number): number {
  let diff = index - activeIndex;
  if (diff > count / 2) diff -= count;
  if (diff < -count / 2) diff += count;
  return diff;
}

function cardTransform(offset: number) {
  const abs = Math.abs(offset);
  return {
    rotateY: offset * -34,
    x: offset * 104,
    z: -abs * 88,
    scale: 1 - abs * 0.05,
    opacity: abs > 2 ? 0 : 1,
    zIndex: 20 - abs,
  };
}

function CarouselArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="sa-btn-lift flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sa-border)] bg-[var(--sa-bg-card)]/90 text-[var(--sa-text)] backdrop-blur-sm transition hover:border-[var(--sa-amber)] hover:text-[var(--sa-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sa-amber)]"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d={direction === "prev" ? "M11 4L6 9L11 14" : "M7 4L12 9L7 14"}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function ModelCoverCard({
  product,
  offset,
  isActive,
  onSelect,
}: {
  product: Product;
  offset: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const theme = cardThemes[product.slug] ?? cardThemes["accelerator-model"];
  const transform = cardTransform(offset);

  const inner = (
    <>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${theme.gradient}`}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-30"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${theme.accent} 40%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative flex h-full min-h-0 flex-col p-5">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/20 p-2.5 backdrop-blur-sm ${theme.iconColor}`}
        >
          {modelIcons[product.slug]}
        </div>
        <h3 className="mt-4 text-base font-semibold leading-snug text-[var(--sa-text)]">
          {product.name}
        </h3>
        <p className="mt-1.5 text-xs font-medium leading-snug text-[var(--sa-amber)]">
          {product.tagline}
        </p>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[var(--sa-text-muted)]">
          {product.description}
        </p>
        {product.includes && product.includes.length > 0 && (
          <ul className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
            {product.includes.slice(0, 2).map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[11px] leading-snug text-[var(--sa-text-muted)]"
              >
                <span className="mt-0.5 shrink-0 text-[var(--sa-amber)]" aria-hidden="true">
                  ✓
                </span>
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        )}
        {isActive && (
          <p className="mt-auto pt-3 text-xs font-semibold text-[var(--sa-amber)]">
            View model →
          </p>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 cursor-pointer [transform-style:preserve-3d] [backface-visibility:hidden]"
      style={{
        width: CARD_W,
        height: CARD_H,
        marginLeft: -CARD_W / 2,
        marginTop: -CARD_H / 2,
        zIndex: transform.zIndex,
      }}
      initial={false}
      animate={{
        rotateY: transform.rotateY,
        x: transform.x,
        z: transform.z,
        scale: transform.scale,
        opacity: transform.opacity,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      onClick={isActive ? undefined : onSelect}
    >
      {isActive ? (
        <Link
          href={product.href}
          className="sa-card-glow relative block h-full overflow-hidden rounded-xl border border-white/15 bg-[var(--sa-bg-card)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] [backface-visibility:hidden]"
        >
          {inner}
        </Link>
      ) : (
        <div
          className={`relative h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--sa-bg-card)] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.7)] [backface-visibility:hidden] ${!isActive ? "brightness-[0.82]" : ""}`}
        >
          {inner}
        </div>
      )}
    </motion.div>
  );
}

export function IndustryModelsShowcase({ models }: { models: Product[] }) {
  const count = models.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      setActiveIndex(((index % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (isPaused || count <= 1) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [isPaused, count, goNext]);

  if (count === 0) return null;

  return (
    <div
      className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,22rem)_1fr] xl:gap-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <FadeUp>
        <div className="lg:sticky lg:top-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Industry Models
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--sa-text-muted)]">
            Proprietary models for investors and hyperscalers — click a card to
            view details on SemiAnalysis, or contact sales for institutional access.
          </p>
          <div className="mt-6 hidden flex-col gap-2 lg:flex">
            <Button href="/models">Explore All Models</Button>
            <Button href={SITE.contactSalesUrl} variant="secondary">
              Contact Sales
            </Button>
          </div>
        </div>
      </FadeUp>

      <div className="min-w-0">
        <div className="flex w-full items-center">
          <div className="shrink-0 translate-x-1">
            <CarouselArrow direction="prev" onClick={goPrev} label="Previous model" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center -mx-1">
            <div
              className="relative w-full overflow-hidden"
              style={{ height: CARD_H + 32, perspective: 1200 }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Industry models"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(247,176,65,0.05)_0%,_transparent_60%)]" />

              <div className="relative h-full [transform-style:preserve-3d]">
                {models
                  .map((product, index) => ({
                    product,
                    index,
                    offset: wrapOffset(index, activeIndex, count),
                  }))
                  .filter(({ offset }) => Math.abs(offset) <= 2)
                  .sort((a, b) => Math.abs(b.offset) - Math.abs(a.offset))
                  .map(({ product, index, offset }) => (
                    <ModelCoverCard
                      key={product.slug}
                      product={product}
                      offset={offset}
                      isActive={offset === 0}
                      onSelect={() => goTo(index)}
                    />
                  ))}
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {models.map((product, index) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 bg-[var(--sa-amber)]"
                      : "w-1.5 bg-[var(--sa-border)] hover:bg-[var(--sa-metal)]"
                  }`}
                  aria-label={`Go to ${product.name}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          <div className="shrink-0 -translate-x-1">
            <CarouselArrow direction="next" onClick={goNext} label="Next model" />
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          <Button href="/models">Explore All Models</Button>
        </div>
      </div>
    </div>
  );
}
