"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ModelDetailContent } from "./ModelDetailContent";
import type { IndustryModel } from "@/lib/models";

type ModelDetailOverlayProps = {
  model: IndustryModel | null;
  onClose: () => void;
};

export function ModelDetailOverlay({ model, onClose }: ModelDetailOverlayProps) {
  const reduceMotion = useReducedMotion();
  const open = model !== null;

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && model && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="model-detail-title"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[var(--sa-bg)]/80 backdrop-blur-md"
            aria-label="Close model details"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-[var(--sa-border)] bg-[var(--sa-bg)] shadow-2xl sm:max-h-[88dvh] sm:rounded-2xl lg:max-w-4xl"
            initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[var(--sa-border)] bg-[var(--sa-bg)]/95 px-4 py-3 backdrop-blur-md sm:px-6">
              <p
                id="model-detail-title"
                className="truncate text-sm font-semibold text-[var(--sa-text)]"
              >
                {model.name}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--sa-border)] text-lg leading-none text-[var(--sa-text-muted)] transition hover:border-[var(--sa-amber)] hover:bg-[var(--sa-bg-elevated)] hover:text-[var(--sa-text)]"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
              <ModelDetailContent model={model} />
            </div>

            <div className="sticky bottom-0 border-t border-[var(--sa-border)] bg-[var(--sa-bg)]/95 px-4 py-3 backdrop-blur-md sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-full border border-[var(--sa-border)] py-2.5 text-sm font-semibold text-[var(--sa-text-muted)] transition hover:border-[var(--sa-metal)] hover:text-[var(--sa-text)] sm:w-auto sm:px-6"
              >
                Back to Industry Models
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
