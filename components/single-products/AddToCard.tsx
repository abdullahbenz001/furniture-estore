import React from "react";
import { Button } from "../ui/button";

function AddToCard({ productID }: { productID: string }) {
  return (
    <Button className="capitalize mt-8 cursor-pointer" size={"lg"}>
      Add to Card
    </Button>
  );
}

export default AddToCard;
