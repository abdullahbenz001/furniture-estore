import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { AlignLeft } from "lucide-react";
import { dropDownMenuLinks } from "@/utilities/links";
import { Button } from "../ui/button";
function LinksDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <AlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={15}>
        {dropDownMenuLinks.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className="w-full">
              {link.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropDown;
