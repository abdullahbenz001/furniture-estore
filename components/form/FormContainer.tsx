"use client";
import { actionFunction } from "@/utilities/types";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useTransition } from "react";
import { toast } from "sonner";

interface FormProps {
  children: React.ReactNode;
  action: actionFunction;
}

const initialState = {
  message: "",
};

function FormContainer({ children, action }: FormProps) {
  const [state, formAction] = useActionState(action, initialState);

    const [isPending,startTransition] = useTransition();
    const router = useRouter();

  useEffect(()=>{
    if (state.message) toast(state.message)

        startTransition(()=>{
          setTimeout(()=>{
            router.refresh();
          },0)
        })


  },[state])

  return (
    <form action={formAction}>
      {children}
    </form>
  );
}

export default FormContainer;
