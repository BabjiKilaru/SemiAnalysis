"use client";

import { ChipBookSpotlight } from "@/components/chipbook";
import { ProductPageClient } from "@/components/pages";
import type { Product } from "@/lib/content";

export function ProductPageWithSpotlight({ product }: { product: Product }) {
  const isChipbook = product.slug === "chipbook";

  return (
    <>
      {isChipbook && <ChipBookSpotlight />}
      <ProductPageClient product={product} />
    </>
  );
}
