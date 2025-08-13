import { Product } from "@prisma/client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/utilities/links";
import { formatCurrency } from "@/utilities/format";
import FavoriteToggleButton from "./FavoriteToggleButton";
function ProductsList({ products }: { products: Product[] }) {
  return (
    <section className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const productID = product.id;
        const price = formatCurrency(product.price);

        return (
          <div className="relative group" key={productID}>
            <Link href={`${links.PRODUCTS.href}/${productID}`}>
              <Card className="transform group-hover:shadow-lg transition-shadow duration-500">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64 md:w-48 rounded">
                    <Image
                      src={product.image}
                      alt="Product_image"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold capitalize">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mt-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="text-center text-xl flex justify-between items-center md:flex-col">
                    <p>{price}</p>
                    <div>
                      <FavoriteToggleButton productId={productID} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default ProductsList;
