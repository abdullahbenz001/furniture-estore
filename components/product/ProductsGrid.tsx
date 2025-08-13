import React from "react";
import { Product } from "@prisma/client";
import Link from "next/link";
import { links } from "@/utilities/links";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { formatCurrency } from "@/utilities/format";
import { Card, CardContent } from "../ui/card";
function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <section className="pb-14 pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {products.map((product) => {
        const productId = product.id;
        const dollarAmout = formatCurrency(product.price);
        return (
          <div className="group relative" key={productId}>
            <Link href={`${links.PRODUCTS.href}/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent>
                  <div className="h-64 md:h-48 rounded overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt="product"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg capitalize">{product.name}</h3>
                    <p className="text-muted-foreground mt-2">{dollarAmout}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute right-8 top-10 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ProductsGrid;
