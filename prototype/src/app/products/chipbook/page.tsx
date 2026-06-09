import { ChipBookPageClient } from "@/components/pages";
import { chipbookProduct } from "@/lib/content";

export const metadata = {
  title: "ChipBook — SemiAnalysis",
  description: chipbookProduct.description,
};

export default function ChipBookPage() {
  return <ChipBookPageClient />;
}
