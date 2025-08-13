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
    <Carousel className="w-full">
      <CarouselContent>
        {products.map((items) => (
          <CarouselItem key={items.id} className="w-full">
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src={items.image}
                alt={items.title || "product"}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HeroCarousel;