import React from "react";
import ButtonsInput from "@/components/form/Buttons";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import {
  CreateProducts,
  FetchSingleProduct,
  UpdateProductAction,
  UpdateProductImageAction,
} from "@/utilities/action";
import ImageInputContainer from "@/components/admin/products/ImageInputContainer";
async function EditProducts({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await FetchSingleProduct(id);

  const { name, description, price, featured, image } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Update Products
      </h1>
      <div className=" border p-8 rounded-md">
        <ImageInputContainer
          action={UpdateProductImageAction}
          name={name}
          image={image}
          text="Update image"
        >
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="url" value={image} />

        </ImageInputContainer>
        <FormContainer action={UpdateProductAction}>
          <div className=" grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              name="name"
              type="text"
              label="Product Name"
              defaultValue={name}
            />
            <PriceInput defaultValue={price} />
            <TextAreaInput
              name="description"
              labelText="description"
              defaultValue={description}
            />
            <div className="mt-6">
              <CheckBoxInput
                name="featured"
                label="featured"
                defaultChecked={featured}
              />
            </div>
            <ButtonsInput
              text="Update Product"
              className="mt-6 hover:cursor-pointer"
            />
          </div>
        </FormContainer>
      </div>
    </section>
  );
}

export default EditProducts;
