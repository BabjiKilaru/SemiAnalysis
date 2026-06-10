"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroReveal } from "@/components/shared";
import { Button } from "@/components/ui";
import { SITE } from "@/lib/site";

const rotatingWords = [
  { text: "semiconductors", className: "sa-text-gradient" },
  { text: "datacenters", className: "text-[var(--sa-cobalt)]" },
  { text: "AI infrastructure", className: "text-[var(--sa-mint)]" },
];

export function HeroShowcase() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((i) => (i + 1) % rotatingWords.length),
      3400,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl lg:max-w-none">
      <HeroReveal delay={0.1}>
        <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--sa-amber)]">
          <span className="sa-pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--sa-amber)]" />
          Independent Research
        </p>
      </HeroReveal>

      <HeroReveal delay={0.22}>
        <h1 className="mt-4 text-[clamp(2rem,4.8vw,3.75rem)] font-bold leading-[1.08] tracking-tight">
          Bridging{" "}
          <span className="relative inline-flex h-[1.12em] min-w-[10.5em] overflow-hidden align-bottom md:min-w-[11.5em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex].text}
                initial={
                  wordIndex === 0
                    ? false
                    : { y: "110%", opacity: 0, filter: "blur(4px)" }
                }
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-110%", opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`absolute left-0 top-0 whitespace-nowrap ${rotatingWords[wordIndex].className}`}
              >
                {rotatingWords[wordIndex].text}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span className="text-[var(--sa-text-muted)]">and </span>
          <span className="text-[var(--sa-amber)]">business</span>
        </h1>
      </HeroReveal>

      <HeroReveal delay={0.38}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--sa-text-muted)] md:mt-5 md:text-lg">
          Institutional-grade models and research for investors, AI infrastructure
          teams, enterprise buyers, and researchers navigating the semiconductor
          and AI landscape.
        </p>
      </HeroReveal>

      <HeroReveal delay={0.52}>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button href="/models">Explore Industry Models</Button>
          <Button href="/products/chipbook" variant="secondary">
            View ChipBook
          </Button>
        </div>
        <p className="mt-4 text-sm text-[var(--sa-text-muted)]">
          New here?{" "}
          <a
            href={SITE.newsletterSubscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--sa-cobalt)] underline-offset-2 hover:text-[var(--sa-amber)] hover:underline"
          >
            Subscribe free
          </a>{" "}
          to the newsletter first.
        </p>
      </HeroReveal>
    </div>
  );
}
