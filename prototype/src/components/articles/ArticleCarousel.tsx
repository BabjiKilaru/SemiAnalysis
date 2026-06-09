"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArticleCard, Button } from "@/components/ui";
import type { Article } from "@/lib/content";

const AUTOPLAY_MS = 5000;
const CARD_WIDTH = 320;
const CARD_GAP = 24;
const CARD_HEIGHT = 420;
const STRIDE = CARD_WIDTH + CARD_GAP;

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
      className="sa-btn-lift flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--sa-border)] bg-[var(--sa-bg-card)]/90 text-[var(--sa-text)] backdrop-blur-sm transition hover:border-[var(--sa-amber)] hover:text-[var(--sa-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sa-amber)]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className={direction === "prev" ? "mr-0.5" : "ml-0.5"}
      >
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

export function ArticleCarousel({
  articles,
  viewMoreHref,
}: {
  articles: Article[];
  viewMoreHref: string;
}) {
  const count = articles.length;
  const loopedArticles = useMemo(
    () => (count > 0 ? [...articles, ...articles, ...articles] : []),
    [articles, count],
  );

  const [positionIndex, setPositionIndex] = useState(count);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [animate, setAnimate] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const activeIndex = count > 0 ? ((positionIndex % count) + count) % count : 0;

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      setAnimate(true);
      setPositionIndex(count + index);
    },
    [count],
  );

  const goNext = useCallback(() => {
    if (count === 0) return;
    setAnimate(true);
    setPositionIndex((i) => i + 1);
  }, [count]);

  const goPrev = useCallback(() => {
    if (count === 0) return;
    setAnimate(true);
    setPositionIndex((i) => i - 1);
  }, [count]);

  const normalizePosition = useCallback(() => {
    if (count === 0) return;

    if (positionIndex >= count * 2) {
      setAnimate(false);
      setPositionIndex(positionIndex - count);
    } else if (positionIndex < count) {
      setAnimate(false);
      setPositionIndex(positionIndex + count);
    }
  }, [count, positionIndex]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const updateWidth = () => setContainerWidth(node.offsetWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count === 0) return;
    setPositionIndex(count);
    setAnimate(false);
  }, [count]);

  useEffect(() => {
    if (reduceMotion || isPaused || count <= 1) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, isPaused, count, goNext]);

  if (count === 0) return null;

  const trackX =
    containerWidth > 0
      ? containerWidth / 2 - CARD_WIDTH / 2 - positionIndex * STRIDE
      : 0;

  return (
    <div
      className="relative mt-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsPaused(false);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Latest newsletter articles"
    >
      <div className="flex items-center gap-4 md:gap-6">
        <CarouselArrow direction="prev" onClick={goPrev} label="Previous article" />

        <div
          ref={viewportRef}
          className="relative flex-1 overflow-hidden py-2"
          style={{ height: CARD_HEIGHT + 16 }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[var(--sa-bg-elevated)] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[var(--sa-bg-elevated)] to-transparent sm:w-16" />

          <motion.div
            className="flex items-stretch gap-6"
            initial={false}
            animate={{ x: trackX }}
            transition={
              animate
                ? { type: "spring", stiffness: 260, damping: 28 }
                : { duration: 0 }
            }
            onAnimationComplete={normalizePosition}
          >
            {loopedArticles.map((article, index) => {
              const isActive = index === positionIndex;

              return (
                <div
                  key={`${article.url}-${index}`}
                  className="w-80 shrink-0"
                  style={{ height: CARD_HEIGHT }}
                  aria-hidden={!isActive}
                >
                  <div
                    className={`h-full transition-shadow duration-300 ${
                      isActive
                        ? "rounded-xl shadow-[0_0_0_1px_rgba(247,176,65,0.35),0_20px_50px_-20px_rgba(11,134,209,0.35)]"
                        : ""
                    }`}
                  >
                    <ArticleCard {...article} />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <CarouselArrow direction="next" onClick={goNext} label="Next article" />
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {articles.map((article, index) => (
          <button
            key={article.url}
            type="button"
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-[var(--sa-amber)]"
                : "w-1.5 bg-[var(--sa-border)] hover:bg-[var(--sa-metal)]"
            }`}
            aria-label={`Go to article ${index + 1}: ${article.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <Button href={viewMoreHref} variant="secondary">
          View More
        </Button>
      </div>
    </div>
  );
}
