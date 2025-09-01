import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { dropDownMenuLinks } from "@/utilities/links";
import { Button } from "../ui/button";
import { LuAlignLeft } from "react-icons/lu";
import UserIcon from "./UserIcon";
import SignOutLink from "./SignOutLink";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
async function LinksDropDown() {
 const {userId} = await auth();
 const is_admin = userId ===process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          className=" flex gap-4 max-w-[100px] cursor-pointer"
        >
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={15}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <Button className="w-full">Sign In</Button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <Button className="w-full" variant={"outline"}>
                Sign Up
              </Button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {dropDownMenuLinks.map((link) => {
            if(link.name === 'Dashboard' && !is_admin) return null;
            return(
              (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className="w-full">
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              )
            )
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropDown;
