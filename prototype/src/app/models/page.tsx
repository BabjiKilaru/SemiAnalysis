import { ModelsPageClient } from "@/components/pages";
import { industryModelsCatalog } from "@/lib/content";

export const metadata = {
  title: "Industry Models | SemiAnalysis",
  description:
    "Proprietary industry models for semiconductors, AI infrastructure, and datacenters.",
};

export default function ModelsPage() {
  return <ModelsPageClient models={industryModelsCatalog} />;
}
