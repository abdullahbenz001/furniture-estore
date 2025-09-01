import React, { Suspense } from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";
import { LoadingHero } from "../global/LoadingContainer";
import { links } from "@/utilities/links";
function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-5xl tracking-tight sm:text-7xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam
          quia sunt nostrum. Tenetur voluptatum dicta temporibus commodi itaque
          ipsa?
        </p>
        <Button asChild className="mt-10 bg-blue-500 text-white" size={"lg"}>
          <Link href={links.PRODUCTS.href}>Our products</Link>
        </Button>
      </div>
      <Suspense fallback={<LoadingHero />}>
        <HeroCarousel />
      </Suspense>
    </section>
  );
}

export default Hero;
