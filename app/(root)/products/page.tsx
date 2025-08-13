import ProductsContainer from "@/components/product/ProductsContainer";
import React from "react";

interface ProductsPageProps {
  searchParams: {
    layout?: string
    search?: string,
  };
}
async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { layout = "grid" } = (await searchParams) || {};
  const { search } = (await searchParams) || '';
  return <ProductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
