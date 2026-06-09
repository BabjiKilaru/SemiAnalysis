import {
  SectionHeading,
  NewsletterSubscribeBand,
} from "@/components/ui";
import { ArticleCarousel } from "@/components/articles";
import {
  ChipBookFeature,
  HeroShowcase,
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
      {/* Hero — fills first screen; ticker pinned to bottom */}
      <section className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden border-b border-[var(--sa-border)]">
        <HeroBackground />
        <Container className="relative flex flex-1 flex-col justify-center pt-16 md:pt-20">
          <HeroShowcase />

          {/* Stats — spread row, sits above ticker */}
          <SpreadRow
            as="dl"
            className="mt-auto border-t border-[var(--sa-border)] pt-8 pb-6 md:pt-10"
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

        <IndustryTicker />
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
