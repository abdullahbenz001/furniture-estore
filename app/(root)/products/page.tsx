import ProductsContainer from "@/components/product/ProductsContainer";
import { SearchParams } from "next/dist/server/request/search-params";
import React from "react";

async function ProductsPage({ searchParams }: any) {
  const { layout = "grid", search = "" } = searchParams || {};

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
