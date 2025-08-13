import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function LoadingContainer() {
  return (
    <div className="grid pt-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <LoadingProducts />
      <LoadingProducts />
      <LoadingProducts />
    </div>
  );
}
export function LoadingHero() {
  return (
    <div className="grid pt-12 gap-4">
      <LoadingProducts />
    </div>
  );
}


function LoadingProducts() {
  return (
    <Card>
      <CardContent>
        <Skeleton className="h-48 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mt-2" />
        <Skeleton className="h-4 w-3/4 mt-2" />
      </CardContent>
    </Card>
  );
}
