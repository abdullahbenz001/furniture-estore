import ButtonsInput from "@/components/form/Buttons";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { CreateProducts } from "@/utilities/action";
import React from "react";
function CreateProductsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Products
      </h1>
      <div className=" border p-8 rounded-md">
        <FormContainer action={CreateProducts}>
          <div className=" grid gap-4 md:grid-cols-2 my-4">
            <FormInput name="name" type="text" label="Product Name" />
            <PriceInput />
            <ImageInput />
            <TextAreaInput name="description" labelText="description" />
            <div className="mt-6">
              <CheckBoxInput name="featured" label="featured" />
            </div>
            <ButtonsInput text="Create Product" className="mt-6" />
          </div>
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductsPage;
