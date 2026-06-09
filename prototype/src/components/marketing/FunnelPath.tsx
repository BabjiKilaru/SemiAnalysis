"use client";

import Link from "next/link";
import { FadeUp } from "@/components/shared";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui";
import { SITE } from "@/lib/site";

export const CONVERSION_BAND_ID = "sa-conversion-band";

const steps = [
  {
    step: "01",
    title: "Discover",
    body: "Read free research on Substack — high-signal analysis that builds credibility before you buy.",
    cta: { label: "Subscribe Free", href: SITE.newsletterSubscribeUrl, external: true },
    accent: "var(--sa-cobalt)",
  },
  {
    step: "02",
    title: "Explore",
    body: "Browse 14 industry models or dive into ChipBook — our monthly institutional tracker.",
    cta: { label: "Industry Models", href: "/models" },
    secondary: { label: "View ChipBook", href: "/products/chipbook" },
    accent: "var(--sa-amber)",
  },
  {
    step: "03",
    title: "Convert",
    body: "Contact sales for model subscriptions, demos, and institutional pricing.",
    cta: { label: "Contact Sales", href: `mailto:${SITE.salesEmail}` },
    secondary: { label: "Buy ChipBook", href: SITE.loginUrl },
    accent: "var(--sa-mint)",
  },
];

export function FunnelPath() {
  return (
    <section className="border-b border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] py-8 md:py-10">
      <Container>
        <FadeUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sa-metal)]">
            How it works
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold md:text-3xl">
            From free research to institutional access
          </h2>
        </FadeUp>

        <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
          {steps.map((item, i) => (
            <FadeUp key={item.step} delay={i * 0.08}>
              <div className="relative flex h-full flex-col rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-card)] p-5 md:p-6">
                {i < steps.length - 1 && (
                  <span
                    className="pointer-events-none absolute -right-3 top-1/2 hidden text-[var(--sa-metal)] md:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
                <span
                  className="font-mono text-xs font-semibold tracking-widest"
                  style={{ color: item.accent }}
                >
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--sa-text-muted)]">
                  {item.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.cta.external ? (
                    <Button href={item.cta.href} external className="!px-4 !py-2 !text-xs">
                      {item.cta.label}
                    </Button>
                  ) : item.cta.href.startsWith("mailto:") ? (
                    <Button href={item.cta.href} className="!px-4 !py-2 !text-xs">
                      {item.cta.label}
                    </Button>
                  ) : (
                    <Link
                      href={item.cta.href}
                      className="sa-btn-lift inline-flex items-center justify-center rounded-full bg-[var(--sa-amber)] px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90"
                    >
                      {item.cta.label}
                    </Link>
                  )}
                  {item.secondary &&
                    (item.secondary.href.startsWith("mailto:") ? (
                      <Button
                        href={item.secondary.href}
                        variant="secondary"
                        className="!px-4 !py-2 !text-xs"
                      >
                        {item.secondary.label}
                      </Button>
                    ) : item.secondary.href.startsWith("http") ? (
                      <Button
                        href={item.secondary.href}
                        variant="secondary"
                        external={false}
                        className="!px-4 !py-2 !text-xs"
                      >
                        {item.secondary.label}
                      </Button>
                    ) : (
                      <Link
                        href={item.secondary.href}
                        className="sa-btn-lift inline-flex items-center justify-center rounded-full border border-[var(--sa-border)] px-4 py-2 text-xs font-semibold text-[var(--sa-text)] transition hover:border-[var(--sa-amber)]"
                      >
                        {item.secondary.label}
                      </Link>
                    ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ConversionBand() {
  return (
    <section
      id={CONVERSION_BAND_ID}
      className="border-t border-[var(--sa-border)] bg-[var(--sa-bg)] py-8 md:py-10"
    >
      <Container>
        <FadeUp>
          <div className="sa-glow-border relative overflow-hidden rounded-2xl border border-[var(--sa-border)] bg-gradient-to-br from-[var(--sa-bg-card)] to-[var(--sa-bg-elevated)] px-6 py-8 md:px-10 md:py-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--sa-amber)]/10 blur-[60px]" />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sa-amber)]">
                  Institutional access
                </p>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                  Ready to subscribe?
                </h2>
                <p className="mt-3 max-w-xl text-[var(--sa-text-muted)]">
                  Get pricing, demos, and access to proprietary models — or start
                  with ChipBook, our monthly industry tracker trusted by leading
                  funds and semiconductor companies.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <Button href={`mailto:${SITE.salesEmail}`}>Contact Sales</Button>
                <Button href={SITE.loginUrl} variant="secondary" external={false}>
                  Buy ChipBook
                </Button>
                <Button href="/models" variant="secondary">
                  Browse Models
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
