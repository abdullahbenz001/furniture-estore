import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import "../globals.css";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react";
import { LoadingContainer } from "@/components/global/LoadingContainer";
export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}