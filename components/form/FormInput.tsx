import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
interface FormInputProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeHolder?: string;
}
function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeHolder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-4">
        {label || name}
      </Label>
      <Input
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        type={type}
        required
      />
    </div>
  );
}

export default FormInput;
