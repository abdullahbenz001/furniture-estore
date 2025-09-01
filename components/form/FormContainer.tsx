"use client";
import { actionFunction } from "@/utilities/types";
import React, { useActionState, useEffect } from "react";
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
  useEffect(()=>{
    if (state.message) {
      toast("Successfully",{
        description:state.message
      })
    }
  },[state])

  return (
    <form action={formAction}>
      {children}
    </form>
  );
}

export default FormContainer;
