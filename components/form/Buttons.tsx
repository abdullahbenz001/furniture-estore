"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { VscLoading } from "react-icons/vsc";

type btnSize = "lg" | "default" | "sm" | "icon";

interface ButtonProps {
  className?: string;
  text?: string;
  size?: btnSize;
}

function ButtonsInput({
  className = "",
  text = "submit",
  size = "lg",
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size={size}
      className={cn("capitalize", className)}
      disabled={false}
    >
      {pending ? (
        <>
          Please Wait
          <VscLoading className=" mr-2 h-4 w-4 animate-spin" />
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default ButtonsInput;
