"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: ButtonProps) {
  const base =
    "sa-btn-lift inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sa-amber)]";
  const variants = {
    primary: "bg-[var(--sa-amber)] text-black hover:opacity-90",
    secondary:
      "border border-[var(--sa-border)] bg-transparent text-[var(--sa-text)] hover:border-[var(--sa-amber)] hover:bg-[var(--sa-amber)]/5",
    ghost: "text-[var(--sa-cobalt)] hover:underline px-0 py-0 rounded-none",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/");
  const isMailto = href.startsWith("mailto:");
  const isHashLink = href === "#";
  const openInNewTab =
    !isInternal && !isMailto && !isHashLink && external !== false;

  const inner = (
    <motion.span whileTap={{ scale: 0.97 }} className="inline-flex items-center">
      {children}
    </motion.span>
  );

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {inner}
    </a>
  );
}

type ArticleCardProps = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  imageUrl?: string;
  author?: string;
  className?: string;
};

export function ArticleCard({
  title,
  excerpt,
  date,
  url,
  imageUrl,
  author,
  className = "",
}: ArticleCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`sa-card-glow group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] ${className}`}
    >
      {imageUrl ? (
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-[var(--sa-bg-card)]">
          <Image
            src={imageUrl}
            alt=""
            fill
            unoptimized={
              imageUrl.includes("substack") || imageUrl.includes("amazonaws.com")
            }
            sizes="320px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--sa-bg-elevated)]/80 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative flex h-[10.5rem] shrink-0 items-center justify-center overflow-hidden bg-[var(--sa-bg-card)]">
          <div className="pointer-events-none h-24 w-24 rounded-full bg-[var(--sa-cobalt)]/10 blur-2xl" />
        </div>
      )}
      <div className="relative flex min-h-0 flex-1 flex-col p-6">
        <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--sa-cobalt)]">
          <span className="sa-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--sa-cobalt)]" />
          Free Research
        </span>
        <h3 className="mt-2 line-clamp-2 text-base font-semibold transition-colors duration-300 group-hover:text-[var(--sa-cobalt)]">
          {title}
        </h3>
        {author && (
          <p className="mt-1 truncate text-xs text-[var(--sa-metal)]">{author}</p>
        )}
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--sa-text-muted)]">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-[var(--sa-metal)]">
          <span className="shrink-0">{date}</span>
          <span className="font-medium text-[var(--sa-cobalt)] transition-transform duration-300 group-hover:translate-x-1">
            Read on Substack →
          </span>
        </div>
      </div>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--sa-amber)]">
          <span className="inline-block h-px w-6 bg-[var(--sa-amber)]/60" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--sa-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}

export function CTABand({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="sa-glow-border relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--sa-bg-card)] to-[var(--sa-bg-elevated)] px-8 py-12 md:px-12">
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--sa-amber)]/10 blur-[60px]" />
      <div className="relative">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mt-3 max-w-xl text-[var(--sa-text-muted)]">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryHref && secondaryLabel && (
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function NewsletterSubscribeBand({
  subscribeHref,
}: {
  subscribeHref: string;
}) {
  return (
    <div className="sa-glow-border relative mt-8 overflow-hidden rounded-xl border border-[var(--sa-cobalt)]/20 bg-gradient-to-br from-[var(--sa-cobalt)]/10 to-[var(--sa-bg-card)] px-5 py-5 md:flex md:items-center md:justify-between md:gap-6 md:px-8 md:py-6">
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[var(--sa-cobalt)]/10 blur-[50px]" />
      <div className="relative max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sa-cobalt)]">
          200K+ readers
        </p>
        <h3 className="mt-1 text-lg font-bold md:text-xl">
          Get free semiconductor &amp; AI analysis weekly
        </h3>
        <p className="mt-1 text-sm leading-snug text-[var(--sa-text-muted)]">
          Join the newsletter for research-grade insights — your entry point into SemiAnalysis.
        </p>
      </div>
      <div className="relative mt-4 shrink-0 md:mt-0">
        <Button href={subscribeHref}>Subscribe Free</Button>
      </div>
    </div>
  );
}

export function ValueCard({
  title,
  body,
  accent,
  delay = 0,
}: {
  title: string;
  body: string;
  accent: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4 }}
      className="sa-card-glow group rounded-xl border border-[var(--sa-border)] p-6"
    >
      <div
        className="sa-accent-line mb-4 h-1 rounded"
        style={{ background: accent, animationDelay: `${delay}s` }}
      />
      <h3 className="text-lg font-semibold transition-colors group-hover:text-[var(--sa-amber)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--sa-text-muted)]">{body}</p>
    </motion.div>
  );
}
