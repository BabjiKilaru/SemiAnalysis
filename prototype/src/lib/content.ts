export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  audience?: { investors: string; executives: string };
  includes?: string[];
  ctaLabel?: string;
  ctaEmail?: string;
};

/** Official SemiAnalysis URLs for industry models (homepage carousel + chips). */
export const officialModelUrls = {
  "accelerator-model": "https://semianalysis.com/accelerator-hbm-model/",
  "tco-model": "https://semianalysis.com/ai-cloud-tco-model/",
  "datacenter-model": "https://semianalysis.com/datacenter-industry-model/",
  "wafer-fab-model": "https://semianalysis.com/wafer-fab-model/",
  "ai-networking-model": "https://semianalysis.com/ai-networking-model/",
} as const;

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
    href: officialModelUrls["accelerator-model"],
    external: true,
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
    href: officialModelUrls["tco-model"],
    external: true,
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
    href: officialModelUrls["datacenter-model"],
    external: true,
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
    href: officialModelUrls["wafer-fab-model"],
    external: true,
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
    href: officialModelUrls["ai-networking-model"],
    external: true,
    includes: [
      "Switches, transceivers, cables, AEC/DACs coverage",
      "Scale-up, scale-out, front-end, and out-of-band networks",
      "Vendor dynamics and scaling limit analysis",
    ],
    ctaLabel: "Contact Sales",
    ctaEmail: "sales@semianalysis.com",
  },
];

export type IndustryModelEntry = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  category: "compute" | "infrastructure" | "supply-chain" | "research";
};

/** Full industry models catalog — order matches SemiAnalysis institutional offerings. */
export const industryModelsCatalog: IndustryModelEntry[] = [
  {
    name: "Accelerator & HBM",
    tagline: "Historical and forecast accelerator production",
    description:
      "Gauge historical and future accelerator production by company and type, including HBM supply chain and customer shipments.",
    href: "https://semianalysis.com/accelerator-hbm-model/",
    external: true,
    featured: true,
    category: "compute",
  },
  {
    name: "AI Cloud TCO",
    tagline: "Ownership economics of AI Cloud infrastructure",
    description:
      "Examine the ownership economics of AI Clouds that purchase accelerators and sell bare metal or cloud GPU compute.",
    href: "https://semianalysis.com/ai-cloud-tco-model/",
    external: true,
    featured: true,
    category: "compute",
  },
  {
    name: "AI Networking",
    tagline: "Networking layer of AI infrastructure",
    description:
      "Granular visibility into switches, transceivers, cables, and scale-up/out networks for AI infrastructure.",
    href: "https://semianalysis.com/ai-networking-model/",
    external: true,
    category: "compute",
  },
  {
    name: "ChipBook",
    tagline: "Monthly AI & semiconductor industry tracker",
    description:
      "Thousands of unique data points distilled into clear, actionable insights for investors and company decision makers.",
    href: "/products/chipbook",
    featured: true,
    category: "research",
  },
  {
    name: "Core Research",
    tagline: "Institutional semiconductor & AI research",
    description:
      "Deep-dive analysis and subscription research across the semiconductor and AI supply chain.",
    href: "https://semianalysis.com/core-research/",
    external: true,
    category: "research",
  },
  {
    name: "Datacenter Industry",
    tagline: "Critical IT power capacity forecasting",
    description:
      "Understand current and forecast datacenter critical IT power capacity for colocation and hyperscale datacenters.",
    href: "https://semianalysis.com/datacenter-industry-model/",
    external: true,
    category: "infrastructure",
  },
  {
    name: "Energy Model",
    tagline: "Power and energy demand forecasting",
    description:
      "Model energy requirements driven by AI accelerator deployments and datacenter buildouts.",
    href: "https://semianalysis.com/energy-model/",
    external: true,
    category: "infrastructure",
  },
  {
    name: "Foundry Industry",
    tagline: "Foundry capacity and node transitions",
    description:
      "Bottoms-up visibility into foundry capacity, process nodes, and wafer supply across leading manufacturers.",
    href: "https://semianalysis.com/foundry-industry-model/",
    external: true,
    category: "supply-chain",
  },
  {
    name: "Industrials Model",
    tagline: "Industrial semiconductor demand",
    description:
      "Track semiconductor content and demand across industrial end markets and applications.",
    href: "https://semianalysis.com/industrials-model/",
    external: true,
    category: "supply-chain",
  },
  {
    name: "Memory Model",
    tagline: "Memory market supply and demand",
    description:
      "Forecast memory bit demand, pricing, and supply across DRAM, NAND, and HBM.",
    href: "https://semianalysis.com/memory-model/",
    external: true,
    category: "supply-chain",
  },
  {
    name: "Space DC TCO Model",
    tagline: "Space datacenter economics",
    description:
      "Analyze total cost of ownership for space-based and next-generation datacenter concepts.",
    href: "https://semianalysis.com/space-dc-tco/",
    external: true,
    category: "infrastructure",
  },
  {
    name: "Tokenomics Model",
    tagline: "AI inference economics",
    description:
      "Model token economics, inference costs, and unit economics across AI deployment scenarios.",
    href: "https://semianalysis.com/tokenomics-model/",
    external: true,
    category: "compute",
  },
  {
    name: "VR NVL72 BoM & Power Model",
    tagline: "Rack-level bill of materials and power",
    description:
      "Detailed bill of materials and power analysis for next-generation AI rack architectures.",
    href: "https://semianalysis.com/vr-nvl72-model/",
    external: true,
    category: "compute",
  },
  {
    name: "Wafer Fab Equipment",
    tagline: "Semiconductor equipment sales forecasting",
    description:
      "Bottoms-up layer-by-layer flow to accurately forecast semiconductor equipment sales.",
    href: "https://semianalysis.com/wafer-fab-model/",
    external: true,
    category: "supply-chain",
  },
];

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
