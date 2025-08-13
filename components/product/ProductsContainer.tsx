import { FetchAllProducts } from "@/utilities/action";
import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuLayoutList, LuList } from "react-icons/lu";
import Link from "next/link";
import { links } from "@/utilities/links";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

async function ProductsContainer({layout, search,}: {layout: string , search: string}) {
   const total_products = await FetchAllProducts({search});
  const length_Products = await total_products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          <h4>
            {length_Products} Product{length_Products > 1 && "s"}
          </h4>
          <div className="flex gap-2">
            <Button
              variant={layout === "grid" ? "default" : "outline"}
              size={"icon"}
              asChild
            >
              <Link href={`${links.PRODUCTS.href}?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "outline"}
              size={"icon"}
              asChild
            >
              <Link href={`${links.PRODUCTS.href}?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <section>
        {total_products.length === 0 ? (
          <h5>Sorry No products Matched Your Search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={total_products} />
        ) : (
          <ProductsList products={total_products} />
        )}
      </section>
    </>
  );
}

export default ProductsContainer;
