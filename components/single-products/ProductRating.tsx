import React from "react";
import { FaStar } from "react-icons/fa";

function ProductRating({ productID }: { productID: string }) {
  const rating = 4.2;
  const review = 42;

  const ReviewsText = `(${review}) Reviews`;

  return (
    <span className=" flex gap-1 items-center text-md mt-1 mb-4">
      <FaStar className=" w-3 h-3" />
      {rating} {ReviewsText} Reviews
    </span>
  );
}

export default ProductRating;
