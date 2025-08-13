import { cn } from "@/lib/utils";
import React from "react";

type EmptyListProps = {
  title: string;
  className?: string;
};

function Emptylist({ title, className }: EmptyListProps) {
  return <h2 className={cn("text-xl", className)}>{title}</h2>;
}

export default Emptylist;
