import { getModelHref } from "./models";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  featured?: boolean;
  audience?: { investors: string; executives: string };
  includes?: string[];
  ctaLabel?: string;
  ctaEmail?: string;
};

export const products: Product[] = [
  {
    slug: "chipbook",
    name: "ChipBook",
    tagline: "Monthly AI & semiconductor industry tracker",
    description:
      "Thousands of unique data points distilled into clear, actionable insights for investors and company decision makers.",
    href: "/products/chipbook",
    featured: true,
    audience: {
      investors:
        "Idea generation tool, investment thesis validation, and portfolio position tracking.",
      executives:
        "Resource allocation optimization, strategic R&D investments, and capacity planning.",
    },
    includes: [
      "35–50 page monthly deliverable with semiconductor charts and equity references",
      "Core industry trackers updated each month",
      "Timely datasets from 125+ actively-tracked datasets",
      "Distilled insights from SemiAnalysis proprietary models",
      "Monthly analyst calls for personalized insight",
    ],
    ctaLabel: "Buy ChipBook",
    ctaEmail: "ChipBookSales@SemiAnalysis.com",
  },
  {
    slug: "accelerator-model",
    name: "Accelerator & HBM",
    tagline: "Historical and forecast accelerator production",
    description:
      "Gauge historical and future accelerator production by company and type across the AI hardware ecosystem.",
    href: getModelHref("accelerator-model"),
    featured: true,
    audience: {
      investors:
        "Model accelerator supply/demand dynamics to validate investment theses across Nvidia, AMD, Google, and custom silicon.",
      executives:
        "Inform capacity planning, partnership strategy, and product roadmap decisions with bottoms-up production forecasts.",
    },
    includes: [
      "Historical and forecast accelerator production by company and type",
      "Distilled insights from proprietary SemiAnalysis datasets",
      "Integration with broader industry model ecosystem",
      "Retained advisory and bespoke project options available",
    ],
    ctaLabel: "Contact Sales",
    ctaEmail: "sales@semianalysis.com",
  },
  {
    slug: "tco-model",
    name: "AI Cloud TCO",
    tagline: "Ownership economics of AI Cloud infrastructure",
    description:
      "Examine the ownership economics of AI Clouds that purchase accelerators and sell bare metal or cloud GPU compute.",
    href: getModelHref("tco-model"),
    featured: true,
    audience: {
      investors:
        "Evaluate neocloud and hyperscaler unit economics, capex intensity, and margin structures across GPU cloud providers.",
      executives:
        "Optimize build-vs-buy decisions, pricing strategy, and infrastructure investments for AI cloud operations.",
    },
    includes: [
      "Total cost of ownership analysis for AI cloud operators",
      "Bare metal vs. cloud GPU compute economics",
      "Cross-provider benchmarking capabilities",
      "Retained advisory and bespoke project options available",
    ],
    ctaLabel: "Contact Sales",
    ctaEmail: "sales@semianalysis.com",
  },
  {
    slug: "datacenter-model",
    name: "Datacenter Industry",
    tagline: "Critical IT power capacity forecasting",
    description:
      "Understand current and forecast datacenter critical IT power capacity for colocation and hyperscale datacenters.",
    href: getModelHref("datacenter-model"),
    includes: [
      "Current and forecast critical IT power capacity",
      "Colocation and hyperscale datacenter coverage",
      "AI accelerator deployment demand modeling",
    ],
    ctaLabel: "Contact Sales",
    ctaEmail: "sales@semianalysis.com",
  },
  {
    slug: "wafer-fab-model",
    name: "Wafer Fab Equipment",
    tagline: "Semiconductor equipment sales forecasting",
    description:
      "Utilizes a bottoms-up layer-by-layer flow to accurately forecast semiconductor equipment sales.",
    href: getModelHref("wafer-fab-model"),
    includes: [
      "Bottoms-up wafer capacity modeling",
      "Process node requirements and equipment sales forecasts",
      "Detailed layer-by-layer flow for advanced logic",
    ],
    ctaLabel: "Contact Sales",
    ctaEmail: "sales@semianalysis.com",
  },
  {
    slug: "ai-networking-model",
    name: "AI Networking Model",
    tagline: "Networking layer of AI infrastructure",
    description:
      "Granular visibility into switches, transceivers, cables, and scale-up/out networks for AI infrastructure.",
    href: getModelHref("ai-networking-model"),
    includes: [
      "Switches, transceivers, cables, AEC/DACs coverage",
      "Scale-up, scale-out, front-end, and out-of-band networks",
      "Vendor dynamics and scaling limit analysis",
    ],
    ctaLabel: "Contact Sales",
    ctaEmail: "sales@semianalysis.com",
  },
];

export type { IndustryModelEntry } from "./models";
export { industryModelsCatalog } from "./models";

export type Article = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  imageUrl?: string;
  author?: string;
};

export const articles: Article[] = [
  {
    title: "Deep Dive: AI Accelerator Supply Chain",
    excerpt:
      "Analysis of production capacity, lead times, and vendor dynamics across the accelerator ecosystem.",
    date: "May 2026",
    url: "https://www.semianalysis.com",
  },
  {
    title: "Datacenter Power: The Next Bottleneck",
    excerpt:
      "How critical IT power capacity constraints are reshaping AI infrastructure buildouts.",
    date: "Apr 2026",
    url: "https://www.semianalysis.com",
  },
  {
    title: "GPU Cloud Benchmarks: ClusterMAX Update",
    excerpt:
      "Latest benchmark results across leading neocloud providers and AI chip platforms.",
    date: "Apr 2026",
    url: "https://www.semianalysis.com",
  },
  {
    title: "CoWoS and Advanced Packaging Trends",
    excerpt:
      "Tracking supplier revenue indices and capacity expansion across the packaging supply chain.",
    date: "Mar 2026",
    url: "https://www.semianalysis.com",
  },
];

export const chipbookProduct = products.find((p) => p.slug === "chipbook")!;

/** Homepage industry models grid — order matches semianalysis.com layout (3 left / 2 right). */
export const homepageIndustryModels = [
  "accelerator-model",
  "tco-model",
  "datacenter-model",
  "wafer-fab-model",
  "ai-networking-model",
] as const;

export function getHomepageIndustryModels(): Product[] {
  return homepageIndustryModels
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}
