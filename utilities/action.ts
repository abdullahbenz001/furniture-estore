"use server";
import { redirect } from "next/navigation";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { imageScheme, proudctSchema, validateSchema } from "./schema";
import { DeleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";
import { links } from "./links";
export async function FetchFeaturedProducts() {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
}
export async function FetchAllProducts({ search = "" }: { search: string }) {
  const products = await db.product.findMany({
    where: {
      OR: [
        {
          name: { contains: search, mode: "insensitive" },
        },
        {},
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
}
export async function FetchSingleProduct(productID: string) {
  const product = await db.product.findUnique({
    where: {
      id: productID,
    },
  });
  if (!product) {
    redirect("products");
  }
  return product;
}

const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "Unknown Error",
  };
};

export const CreateProducts = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rowData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validateData = validateSchema(proudctSchema, rowData);
    const validateImage = validateSchema(imageScheme, { image: file });
    const fullImagePath = await uploadImage(validateImage.image);

    await db.product.create({
      data: {
        ...validateData,
        image: fullImagePath,
        clerkId: user.id,
      },
    });
    return { message: "Prodcut Created !" };
  } catch (error) {
    return renderError(error);
  }
};

//admin

const GetAdminUser = async () => {
  const user = await getAuthUser();

  if (user.id !== process.env.ADMIN_USER_ID) redirect("/");
  return user;
};

export const FetchAdminPosts = async () => {
  await GetAdminUser();

  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};
export const DeleteProduct = async (prevState: { productID: string }) => {
  const { productID } = prevState;
  await GetAdminUser();
  try {
    const product = await db.product.delete({
      where: {
        id: productID,
      },
    });
    await DeleteImage(product.image);
    // revalidatePath('/admin/prodcuts');
    return { message: "Product Removed" };
  } catch (e) {
    return renderError(e);
  }
};

export const UpdateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  await GetAdminUser();

  try {
    const productID = formData.get("id") as string;
    const rowData = Object.fromEntries(formData);
    const validateData = validateSchema(proudctSchema, rowData);

    await db.product.update({
      where: {
        id: productID,
      },
      data: {
        ...validateData,
      },
    });
    revalidatePath(`${links.AdminProducts.href}`);
    return { message: "Updated Successfully !" };
  } catch (e) {
    return renderError(e);
  }
};

export const UpdateProductImageAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser();

    try{
          const image = formData.get('image') as File;
          const ProductID = formData.get('id') as string;
          const OldimageUrl = formData.get('url') as string;
          const ValidateFile = validateSchema(imageScheme,{image});

          const fullImagePath = await uploadImage(ValidateFile.image);

          await DeleteImage(OldimageUrl);

          await db.product.update({
            where:{
              id:ProductID,
            },
            data:{
              image:fullImagePath
            }
          });
          revalidatePath(`${links.AdminProducts.href}/${ProductID}/edit`);
          return{message:"Image Updated Successfully!"}
    }
    catch(e){
        return renderError(e)
    }
};
