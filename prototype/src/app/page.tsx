import {
  SectionHeading,
  NewsletterSubscribeBand,
} from "@/components/ui";
import { ArticleCarousel } from "@/components/articles";
import {
  ChipBookFeature,
  HeroShowcase,
  HeroVisual,
  IndustryModelsShowcase,
} from "@/components/home";
import { ConversionBand, FunnelPath, WhySemiAnalysis } from "@/components/marketing";
import { Container, SpreadRow, HeroBackground, IndustryTicker, AnimatedStat, FadeUp } from "@/components/shared";
import { getHomepageIndustryModels, chipbookProduct } from "@/lib/content";
import { fetchSubstackArticles } from "@/lib/substack";
import { SITE } from "@/lib/site";

export default async function HomePage() {
  const articles = await fetchSubstackArticles(8);
  const industryModels = getHomepageIndustryModels();
  const chipbook = chipbookProduct;

  return (
    <>
      {/* Hero — one viewport: headline, visual, stats, ticker */}
      <section className="relative flex h-[calc(100dvh-4rem)] w-full min-h-0 flex-col overflow-hidden border-b border-[var(--sa-border)]">
        <HeroBackground />
        <HeroVisual />
        <Container className="relative z-10 grid min-h-0 flex-1 grid-rows-[1fr_auto] pt-6 md:pt-8 lg:pt-10">
          <div className="flex h-full min-h-0 items-center">
            <HeroShowcase />
          </div>

          {/* Stats — pinned above ticker */}
          <SpreadRow
            as="dl"
            className="shrink-0 border-t border-[var(--sa-border)] pt-5 pb-4 md:pt-6"
          >
            {[
              { label: "Industry Models", value: "14" },
              { label: "Tracked Datasets", value: "125+" },
              { label: "Monthly ChipBook", value: "50 pg" },
              { label: "Reader Audience", value: "200K+" },
            ].map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </SpreadRow>
        </Container>

        <div className="relative z-10">
          <IndustryTicker />
        </div>
      </section>

      <FunnelPath />

      {/* Industry Models */}
      <section className="w-full border-b border-[var(--sa-border)] py-10 md:py-12">
        <Container>
          <IndustryModelsShowcase models={industryModels} />
        </Container>
      </section>

      {/* ChipBook */}
      <ChipBookFeature product={chipbook} />

      {/* Latest Research */}
      <section className="relative w-full border-y border-[var(--sa-border)] bg-[var(--sa-bg-elevated)]">
        <Container className="relative py-10 md:py-12">
          <FadeUp>
            <SectionHeading
              eyebrow="Free Research"
              title="Latest from the newsletter"
              description="High-quality analysis on Substack — your entry point into SemiAnalysis research."
            />
          </FadeUp>
          <ArticleCarousel articles={articles} viewMoreHref={SITE.newsletterArchiveUrl} />
          <FadeUp delay={0.2}>
            <NewsletterSubscribeBand subscribeHref={SITE.newsletterSubscribeUrl} />
          </FadeUp>
        </Container>
      </section>

      <WhySemiAnalysis />

      <ConversionBand />
    </>
  );
}
