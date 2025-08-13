import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { links } from "@/utilities/links";
import { LuShoppingCart } from "react-icons/lu";
function Cart_Button() {
  const cartCount = 0; // Replace with actual cart count logic
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="flex items-center justify-center relative"
      asChild
    >
      <Link href={links.CART.href}>
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-blue-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs">
          {cartCount}
        </span>
      </Link>
    </Button>
  );
}

export default Cart_Button;
