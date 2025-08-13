import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import db from "@/utilities/db";
async function HeroCarousel() {
  const products = await db.hero.findMany();
  return (
    <Carousel>
      <CarouselContent>
        {products.map((items) => (
          <CarouselItem key={items.id} className="w-full">
            <Image
              src={items.image}
              alt="product"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HeroCarousel;
