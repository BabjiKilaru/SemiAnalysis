"use client";

import { Button, CTABand } from "@/components/ui";
import { Container } from "@/components/shared";
import { GlowOrb } from "@/components/shared";
import { FadeUp, HeroReveal, StaggerGrid, StaggerItem } from "@/components/shared";
import type { Product } from "@/lib/content";
import { SITE } from "@/lib/site";

export function ProductPageClient({ product }: { product: Product }) {
  return (
    <>
      <section className="relative w-full overflow-hidden border-b border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]">
        <GlowOrb className="right-0 top-0 h-72 w-72 bg-[var(--sa-amber)]/15" />
        <GlowOrb className="bottom-0 left-0 h-56 w-56 bg-[var(--sa-cobalt)]/10" />
        <Container className="relative py-16 md:py-24">
          <HeroReveal>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--sa-cobalt)]">
              Institutional Product
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-[var(--sa-amber)]">
              {product.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--sa-text-muted)]">
              {product.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {product.ctaEmail ? (
                <Button href={`mailto:${product.ctaEmail}`}>
                  {product.ctaLabel ?? "Contact Sales"}
                </Button>
              ) : (
                <Button href="/models">Explore Models</Button>
              )}
              {product.slug === "chipbook" && (
                <Button href={SITE.chipbookSampleUrl} variant="secondary" external>
                  Download Sample ChipBook
                </Button>
              )}
              <Button href="/models" variant="secondary">
                All Industry Models
              </Button>
            </div>
          </HeroReveal>
        </Container>
      </section>

      {product.audience && (
        <section className="w-full py-16">
          <Container>
            <FadeUp>
              <h2 className="text-2xl font-bold md:text-3xl">Built for your team</h2>
            </FadeUp>
            <StaggerGrid className="mt-8 grid gap-6 md:grid-cols-2">
              <StaggerItem>
                <div className="sa-card-glow rounded-xl border border-[var(--sa-border)] p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-amber)]">
                    For Investors
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--sa-text-muted)]">
                    {product.audience.investors}
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="sa-card-glow rounded-xl border border-[var(--sa-border)] p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-mint)]">
                    For Executives
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--sa-text-muted)]">
                    {product.audience.executives}
                  </p>
                </div>
              </StaggerItem>
            </StaggerGrid>
          </Container>
        </section>
      )}

      {product.includes && (
        <section className="w-full border-y border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]">
          <Container className="py-16">
            <FadeUp>
              <h2 className="text-2xl font-bold md:text-3xl">What&apos;s included</h2>
            </FadeUp>
            <StaggerGrid className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-2" stagger={0.06}>
              {product.includes.map((item) => (
                <StaggerItem key={item}>
                  <div className="sa-card-glow flex gap-3 rounded-lg border border-transparent p-3 text-[var(--sa-text-muted)] transition hover:border-[var(--sa-border)] hover:bg-[var(--sa-bg-card)]">
                    <span className="mt-0.5 text-[var(--sa-amber)]" aria-hidden="true">✓</span>
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>
      )}

      <section className="w-full py-12 md:py-14">
        <Container>
          <FadeUp>
            <CTABand
              title={`Get started with ${product.name}`}
              description={
                product.ctaEmail
                  ? `Reach out to ${product.ctaEmail} for pricing and subscription options — or explore our full models catalog.`
                  : "Contact our team to learn more."
              }
              primaryHref={
                product.ctaEmail ? `mailto:${product.ctaEmail}` : "/models"
              }
              primaryLabel={product.ctaLabel ?? "Contact Sales"}
              secondaryHref="/models"
              secondaryLabel="Browse All Models"
            />
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
