"use client"
import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utilities/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
function SidebarComponents() {
  const path_url = usePathname();
  return (
    <aside>
      {adminLinks.map(function (value) {
        const active_page = value.href === path_url;
        return (
          <Button
            className="w-full mb-2 capitalize font-semibold justify-start"
            key={value.name}
            variant={active_page ? "default" : "ghost"}
            asChild
          >
            <Link href={value.href}>{value.name}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default SidebarComponents;
