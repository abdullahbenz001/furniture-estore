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
  try {
    const products = await db.hero.findMany();
    
    // Debug: Log the number of products found
    console.log("Hero products found:", products.length);
    console.log("Hero products:", products);
    
    if (products.length === 0) {
      // Fallback with placeholder images for testing
      const placeholderImages = [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ];
      
      return (
        <Carousel className="w-full">
          <CarouselContent>
            {placeholderImages.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="relative w-full h-96 md:h-[500px]">
                  <Image
                    src={image}
                    alt={`Placeholder ${index + 1}`}
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
  } catch (error) {
    console.error("Error loading hero carousel:", error);
    return (
      <div className="w-full h-96 md:h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Error loading hero images</p>
      </div>
    );
  }
}

export default HeroCarousel;
