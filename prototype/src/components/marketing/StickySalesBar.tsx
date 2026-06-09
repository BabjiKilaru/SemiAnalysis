"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CONVERSION_BAND_ID } from "@/components/marketing";
import { Button } from "@/components/ui";
import { SITE } from "@/lib/site";

const SCROLL_THRESHOLD = 480;

function shouldShowStickyBar() {
  const band = document.getElementById(CONVERSION_BAND_ID);
  const reachedConversionBand =
    band != null && band.getBoundingClientRect().top <= window.innerHeight;

  return window.scrollY > SCROLL_THRESHOLD && !reachedConversionBand;
}

export function StickySalesBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (dismissed) {
      document.body.classList.remove("sa-sticky-bar-visible");
      return;
    }

    const update = () => {
      const show = shouldShowStickyBar();
      setVisible(show);
      document.body.classList.toggle("sa-sticky-bar-visible", show);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.body.classList.remove("sa-sticky-bar-visible");
    };
  }, [dismissed, pathname]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Contact sales"
          initial={reduceMotion ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--sa-border)] bg-[var(--sa-bg)]/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <p className="hidden text-sm text-[var(--sa-text-muted)] sm:block">
              <span className="font-semibold text-[var(--sa-text)]">
                Institutional access
              </span>
              {" — "}
              models, ChipBook, and sales inquiries
            </p>
            <p className="text-sm font-semibold sm:hidden">Get institutional access</p>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                href={`mailto:${SITE.salesEmail}`}
                className="!px-4 !py-2 !text-xs sm:!text-sm"
              >
                Contact Sales
              </Button>
              <Button
                href={SITE.loginUrl}
                external={false}
                variant="secondary"
                className="hidden !px-4 !py-2 !text-xs sm:inline-flex sm:!text-sm"
              >
                Buy ChipBook
              </Button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-[var(--sa-metal)] transition hover:bg-[var(--sa-bg-elevated)] hover:text-[var(--sa-text)]"
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
