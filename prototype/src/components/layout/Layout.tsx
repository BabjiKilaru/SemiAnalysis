"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/shared/Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { navLinks, SITE } from "@/lib/site";

export function Header() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0.85, 0.97]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0.5, 1]);
  const backgroundColor = useTransform(bgOpacity, (v) => `rgba(10, 10, 10, ${v})`);
  const borderBottomColor = useTransform(borderOpacity, (v) => `rgba(42, 42, 42, ${v})`);

  return (
    <motion.header
      ref={ref}
      style={{ backgroundColor, borderBottomColor }}
      className="relative sticky top-0 z-50 w-full border-b backdrop-blur-md"
    >
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[auto_1fr_auto]">
        <Logo />
        <nav
          className="hidden items-center justify-center gap-8 md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-sm text-[var(--sa-text-muted)] transition hover:text-[var(--sa-text)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--sa-amber)] after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-[var(--sa-text-muted)] transition hover:text-[var(--sa-text)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--sa-amber)] after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <a
            href={SITE.loginUrl}
            className="sa-btn-lift inline-flex rounded-full border border-[var(--sa-border)] px-3 py-1.5 text-xs font-semibold text-[var(--sa-text)] transition hover:border-[var(--sa-amber)] hover:bg-[var(--sa-amber)]/5 sm:px-4 sm:py-2 sm:text-sm"
          >
            Log in
          </a>
          <a
            href={SITE.newsletterSubscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sa-btn-lift inline-flex rounded-full border border-[var(--sa-border)] px-3 py-1.5 text-xs font-semibold text-[var(--sa-text)] transition hover:border-[var(--sa-cobalt)] hover:bg-[var(--sa-cobalt)]/5 sm:px-4 sm:py-2 sm:text-sm"
          >
            Subscribe
          </a>
          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]">
      <Container className="py-12">
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="shrink-0">
            <Logo className="mb-2" />
            <p className="mt-2 max-w-sm text-sm text-[var(--sa-text-muted)]">
              With a SemiAnalysis subscription you get full access to all
              articles, article discussions, and further insight into deep
              dives.
            </p>
            <a
              href={SITE.newsletterSubscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[var(--sa-cobalt)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Subscribe to Newsletter
            </a>
          </div>
          <div className="flex gap-12 md:ml-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-metal)]">
                Products
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/products/chipbook" className="text-[var(--sa-text-muted)] hover:text-[var(--sa-amber)]">
                    ChipBook
                  </Link>
                </li>
                <li>
                  <Link href="/models" className="text-[var(--sa-text-muted)] hover:text-[var(--sa-amber)]">
                    Industry Models
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-metal)]">
                Company
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={SITE.newsletterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--sa-text-muted)] hover:text-[var(--sa-cobalt)]"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.newsletterArchiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--sa-text-muted)] hover:text-[var(--sa-cobalt)]"
                  >
                    Archives
                  </a>
                </li>
                <li>
                  <Link href="/about" className="text-[var(--sa-text-muted)] hover:text-[var(--sa-cobalt)]">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href={SITE.careersUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--sa-text-muted)] hover:text-[var(--sa-cobalt)]"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.loginUrl}
                    className="text-[var(--sa-text-muted)] hover:text-[var(--sa-cobalt)]"
                  >
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
