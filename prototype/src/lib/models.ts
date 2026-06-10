export type ModelCategory = "compute" | "infrastructure" | "supply-chain" | "research";

export type IndustryModelEntry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  featured?: boolean;
  category: ModelCategory;
};
export type ModelAccessLevel = "Free" | "Institutional" | "Subscription";

export type ModelSpecs = {
  dateRange: string;
  granularity: string;
  accessLevel: ModelAccessLevel;
  updateCadence: string;
  coverage: string;
  entities: string;
};

export type IndustryModel = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ModelCategory;
  featured?: boolean;
  specs: ModelSpecs;
  includes: string[];
  overview: string;
  audience?: { investors: string; executives: string };
};

const DEFAULT_INCLUDES = [
  "Lorem ipsum dataset coverage across tracked suppliers and end markets",
  "Historical time series with exportable charts and tables",
  "Forecast scenarios with quarterly and annual roll-ups",
  "Analyst commentary distilled from proprietary SemiAnalysis models",
];

const DEFAULT_OVERVIEW =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.";

const INSTITUTIONAL_SPECS: Omit<ModelSpecs, "coverage" | "entities"> = {
  dateRange: "2018 – 2028E",
  granularity: "Quarterly",
  accessLevel: "Institutional",
  updateCadence: "Monthly",
};

function model(
  entry: Omit<IndustryModel, "includes" | "overview" | "specs"> & {
    specs?: Partial<ModelSpecs>;
    includes?: string[];
    overview?: string;
  },
): IndustryModel {
  const { specs: specsOverride, includes, overview, ...rest } = entry;

  const specs: ModelSpecs = {
    ...INSTITUTIONAL_SPECS,
    ...specsOverride,
    coverage:
      specsOverride?.coverage ??
      "Lorem ipsum coverage spanning OEMs, suppliers, and hyperscale operators.",
    entities:
      specsOverride?.entities ??
      "Lorem ipsum — 100+ tracked entities across the value chain.",
  };

  return {
    ...rest,
    includes: includes ?? DEFAULT_INCLUDES,
    overview: overview ?? DEFAULT_OVERVIEW,
    specs,
  };
}

export const industryModels: IndustryModel[] = [
  model({
    slug: "accelerator-model",
    name: "Accelerator & HBM",
    tagline: "Historical and forecast accelerator production",
    description:
      "Gauge historical and future accelerator production by company and type, including HBM supply chain and customer shipments.",
    category: "compute",
    featured: true,
    specs: {
      dateRange: "2019 – 2030E",
      granularity: "Quarterly",
      entities: "Nvidia, AMD, Google TPU, custom ASIC programs, and HBM suppliers.",
    },
    audience: {
      investors:
        "Model accelerator supply/demand dynamics to validate investment theses across Nvidia, AMD, Google, and custom silicon.",
      executives:
        "Inform capacity planning, partnership strategy, and product roadmap decisions with bottoms-up production forecasts.",
    },
  }),
  model({
    slug: "tco-model",
    name: "AI Cloud TCO",
    tagline: "Ownership economics of AI Cloud infrastructure",
    description:
      "Examine the ownership economics of AI Clouds that purchase accelerators and sell bare metal or cloud GPU compute.",
    category: "compute",
    featured: true,
    specs: {
      granularity: "Quarterly & annual",
      entities: "Neocloud operators, hyperscalers, and bare-metal GPU providers.",
    },
    audience: {
      investors:
        "Evaluate neocloud and hyperscaler unit economics, capex intensity, and margin structures across GPU cloud providers.",
      executives:
        "Optimize build-vs-buy decisions, pricing strategy, and infrastructure investments for AI cloud operations.",
    },
  }),
  model({
    slug: "ai-networking-model",
    name: "AI Networking",
    tagline: "Networking layer of AI infrastructure",
    description:
      "Granular visibility into switches, transceivers, cables, and scale-up/out networks for AI infrastructure.",
    category: "compute",
    specs: {
      entities: "Switches, transceivers, DAC/AEC vendors, and rack-scale network topologies.",
    },
  }),
  model({
    slug: "chipbook",
    name: "ChipBook",
    tagline: "Monthly AI & semiconductor industry tracker",
    description:
      "Thousands of unique data points distilled into clear, actionable insights for investors and company decision makers.",
    category: "research",
    featured: true,
    specs: {
      dateRange: "Rolling 36 months",
      granularity: "Monthly",
      accessLevel: "Subscription",
      updateCadence: "Monthly",
      coverage: "Cross-sector semiconductor and AI industry trackers in a single deliverable.",
      entities: "125+ actively tracked datasets across memory, logic, equipment, and end markets.",
    },
    audience: {
      investors:
        "Idea generation tool, investment thesis validation, and portfolio position tracking.",
      executives:
        "Resource allocation optimization, strategic R&D investments, and capacity planning.",
    },
  }),
  model({
    slug: "core-research",
    name: "Core Research",
    tagline: "Institutional semiconductor & AI research",
    description:
      "Deep-dive analysis and subscription research across the semiconductor and AI supply chain.",
    category: "research",
    specs: {
      accessLevel: "Subscription",
      updateCadence: "Weekly",
      granularity: "Article-level",
    },
  }),
  model({
    slug: "datacenter-model",
    name: "Datacenter Industry",
    tagline: "Critical IT power capacity forecasting",
    description:
      "Understand current and forecast datacenter critical IT power capacity for colocation and hyperscale datacenters.",
    category: "infrastructure",
    specs: {
      entities: "Colocation, hyperscale, and neocloud critical IT power buildouts.",
    },
  }),
  model({
    slug: "energy-model",
    name: "Energy Model",
    tagline: "Power and energy demand forecasting",
    description:
      "Model energy requirements driven by AI accelerator deployments and datacenter buildouts.",
    category: "infrastructure",
    specs: {
      granularity: "Annual",
      entities: "Grid interconnects, on-site generation, and regional power constraints.",
    },
  }),
  model({
    slug: "foundry-industry-model",
    name: "Foundry Industry",
    tagline: "Foundry capacity and node transitions",
    description:
      "Bottoms-up visibility into foundry capacity, process nodes, and wafer supply across leading manufacturers.",
    category: "supply-chain",
    specs: {
      entities: "TSMC, Samsung, Intel Foundry, and advanced node transition timelines.",
    },
  }),
  model({
    slug: "industrials-model",
    name: "Industrials Model",
    tagline: "Industrial semiconductor demand",
    description:
      "Track semiconductor content and demand across industrial end markets and applications.",
    category: "supply-chain",
  }),
  model({
    slug: "memory-model",
    name: "Memory Model",
    tagline: "Memory market supply and demand",
    description:
      "Forecast memory bit demand, pricing, and supply across DRAM, NAND, and HBM.",
    category: "supply-chain",
    specs: {
      entities: "DRAM, NAND, and HBM suppliers with bit supply/demand balances.",
    },
  }),
  model({
    slug: "space-dc-tco-model",
    name: "Space DC TCO Model",
    tagline: "Space datacenter economics",
    description:
      "Analyze total cost of ownership for space-based and next-generation datacenter concepts.",
    category: "infrastructure",
    specs: {
      dateRange: "2026 – 2040E",
      granularity: "Annual",
    },
  }),
  model({
    slug: "tokenomics-model",
    name: "Tokenomics Model",
    tagline: "AI inference economics",
    description:
      "Model token economics, inference costs, and unit economics across AI deployment scenarios.",
    category: "compute",
    specs: {
      granularity: "Monthly",
      entities: "Frontier model providers, inference APIs, and GPU-hour economics.",
    },
  }),
  model({
    slug: "vr-nvl72-model",
    name: "VR NVL72 BoM & Power Model",
    tagline: "Rack-level bill of materials and power",
    description:
      "Detailed bill of materials and power analysis for next-generation AI rack architectures.",
    category: "compute",
    specs: {
      granularity: "SKU-level",
      updateCadence: "Quarterly",
    },
  }),
  model({
    slug: "wafer-fab-model",
    name: "Wafer Fab Equipment",
    tagline: "Semiconductor equipment sales forecasting",
    description:
      "Bottoms-up layer-by-layer flow to accurately forecast semiconductor equipment sales.",
    category: "supply-chain",
    specs: {
      entities: "Lithography, etch, deposition, and inspection tool demand by fab layer.",
    },
  }),
];

export function getModelHref(slug: string): string {
  if (slug === "chipbook") return "/products/chipbook";
  return `/models?model=${slug}`;
}

export function getModelBySlug(slug: string): IndustryModel | undefined {
  return industryModels.find((m) => m.slug === slug);
}

export function toCatalogEntry(m: IndustryModel): IndustryModelEntry {
  return {
    slug: m.slug,
    name: m.name,
    tagline: m.tagline,
    description: m.description,
    href: getModelHref(m.slug),
    featured: m.featured,
    category: m.category,
  };
}

export const industryModelsCatalog: IndustryModelEntry[] =
  industryModels.map(toCatalogEntry);

export const CATEGORY_LABELS: Record<ModelCategory, string> = {
  compute: "AI compute",
  infrastructure: "Infrastructure",
  "supply-chain": "Supply chain",
  research: "Research",
};
