import React from "react";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";
import { FetchFeaturedProducts } from "@/utilities/action";
import Emptylist from "../global/Emptylist";

async function FeaturedProducts() {
  const FP = await FetchFeaturedProducts();
  if (FP.length === 0) return <Emptylist title="Add New Products" />;
  return (
    <section className="py-24 px-4 lg:px-0">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={FP} />
    </section>
  );
}
export default FeaturedProducts;