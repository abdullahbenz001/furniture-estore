import ProductRating from '@/components/single-products/ProductRating'
import AddToCard from '@/components/single-products/AddToCard';
import Image from 'next/image';
import React from 'react';
import { FetchSingleProduct } from '@/utilities/action';
import { formatCurrency } from '@/utilities/format';
import BreadCrumbs from '@/components/single-products/BreadCrumbs';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';


async function ProductDetailsPage({ params }:  any) {
  const { id } = await params;
  
  try {
    const product = await FetchSingleProduct(id);
    console.log(product)
    const dollarAmount = formatCurrency(product.price);
    return (
      <section>
        <BreadCrumbs name={product.name} />
        <section className="grid lg:grid-cols-2 mt-6 gap-y-6 lg:gap-x-12">
          {/* Image */}
          <div className="relative h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-x-8 items-center">
              <h2 className="capitalize text-3xl font-bold">{product.name}</h2>
              <FavoriteToggleButton productId={product.id} />
            </div>
            <ProductRating productID={product.id} />
            <h4 className="text-md p-2 mt-3 rounded-md bg-muted inline-block">{dollarAmount}</h4>
            <p className="mt-6 text-md leading-8">{product.description}</p>
            <AddToCard productID={product.id} />
          </div>
        </section>
      </section>
    );
  } catch (error) {
    // Handle the error (like redirecting or showing a 404 page)
    return (
      <section>
        <h1>Product Not Found</h1>
      </section>
    );
  }
}

export default ProductDetailsPage;
