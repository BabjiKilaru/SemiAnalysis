"use client";

import { Button } from "@/components/ui";
import type { IndustryModel } from "@/lib/models";
import { CATEGORY_LABELS } from "@/lib/models";
import { SITE } from "@/lib/site";

const CATEGORY_ACCENT: Record<IndustryModel["category"], string> = {
  compute: "var(--sa-cobalt)",
  infrastructure: "var(--sa-mint)",
  "supply-chain": "var(--sa-amber)",
  research: "var(--sa-coral)",
};

const ACCESS_BADGE: Record<
  IndustryModel["specs"]["accessLevel"],
  { bg: string; text: string }
> = {
  Free: {
    bg: "color-mix(in srgb, var(--sa-mint) 18%, transparent)",
    text: "var(--sa-mint)",
  },
  Institutional: {
    bg: "color-mix(in srgb, var(--sa-amber) 18%, transparent)",
    text: "var(--sa-amber)",
  },
  Subscription: {
    bg: "color-mix(in srgb, var(--sa-cobalt) 18%, transparent)",
    text: "var(--sa-cobalt)",
  },
};

function ModelSpecsPanel({ model }: { model: IndustryModel }) {
  const accent = CATEGORY_ACCENT[model.category];
  const access = ACCESS_BADGE[model.specs.accessLevel];

  const rows: { label: string; value: string }[] = [
    { label: "Category", value: CATEGORY_LABELS[model.category] },
    { label: "Data range", value: model.specs.dateRange },
    { label: "Granularity", value: model.specs.granularity },
    { label: "Access level", value: model.specs.accessLevel },
    { label: "Update cadence", value: model.specs.updateCadence },
    { label: "Coverage", value: model.specs.coverage },
    { label: "Entities tracked", value: model.specs.entities },
  ];

  return (
    <aside className="overflow-hidden rounded-xl border-2 border-[var(--sa-border)] bg-[var(--sa-bg-card)]">
      <div className="border-b-[3px] px-4 py-3" style={{ borderColor: accent }}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--sa-metal)]">
          At a glance
        </p>
        <h2 className="mt-0.5 text-lg font-black uppercase tracking-tight text-[var(--sa-text)]">
          Model Specs
        </h2>
      </div>

      <dl className="divide-y divide-[var(--sa-border)]">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[8.5rem_1fr] gap-3 px-4 py-2.5">
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-[var(--sa-metal)]">
              {row.label}
            </dt>
            <dd className="text-sm leading-snug text-[var(--sa-text)]">
              {row.label === "Access level" ? (
                <span
                  className="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{ background: access.bg, color: access.text }}
                >
                  {row.value}
                </span>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function ModelDetailContent({ model }: { model: IndustryModel }) {
  const accent = CATEGORY_ACCENT[model.category];

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_minmax(240px,280px)] lg:items-start">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: accent }}
          >
            Industry Model
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{model.name}</h2>
          <p className="mt-1.5 text-lg font-medium text-[var(--sa-amber)]">{model.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-[var(--sa-text-muted)]">
            {model.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={SITE.contactSalesUrl}>Contact Sales</Button>
            {model.slug === "chipbook" && (
              <Button href="/products/chipbook" variant="secondary">
                View ChipBook page
              </Button>
            )}
          </div>
        </div>
        <ModelSpecsPanel model={model} />
      </div>

      <div className="border-t border-[var(--sa-border)] pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sa-cobalt)]">
          Overview
        </p>
        <h3 className="mt-1 text-xl font-bold">What this model covers</h3>
        <p className="mt-3 leading-relaxed text-[var(--sa-text-muted)]">{model.overview}</p>
      </div>

      {model.audience && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-amber)]">
              For Investors
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--sa-text-muted)]">
              {model.audience.investors}
            </p>
          </div>
          <div className="rounded-xl border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-mint)]">
              For Executives
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--sa-text-muted)]">
              {model.audience.executives}
            </p>
          </div>
        </div>
      )}

      <div className="border-t border-[var(--sa-border)] pt-6">
        <h3 className="text-xl font-bold">What&apos;s included</h3>
        <ul className="mt-4 space-y-2">
          {model.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-[var(--sa-border)] bg-[var(--sa-bg-elevated)] p-3 text-sm text-[var(--sa-text-muted)]"
            >
              <span className="shrink-0 text-[var(--sa-amber)]" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
