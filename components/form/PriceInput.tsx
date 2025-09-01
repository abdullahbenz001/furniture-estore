import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface PriceFormatProps{
  name?:string
  defaultValue?:number
}

function PriceInput({name,defaultValue}:PriceFormatProps) {
  return (
    <div className="mb-2">
      <Label htmlFor="price" className=" capitalize mb-4">
        Price ($)
      </Label>
      <Input 
      type="number"
      name={name || 'price'}
      id={name || 'price'}
      min={0}
      defaultValue={defaultValue || 30}
      required
      />
    </div>
  );
}

export default PriceInput;
