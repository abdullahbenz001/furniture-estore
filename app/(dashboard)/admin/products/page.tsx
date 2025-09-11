import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { DeleteProduct, FetchAdminPosts } from "@/utilities/action";
import { formatCurrency } from "@/utilities/format";
import { Edit2 } from "lucide-react";
import { links } from "@/utilities/links";
import IconButton from "@/components/admin/products/iconButton";
import FormContainer from "@/components/form/FormContainer";
async function ProductsPage() {
  const getPosts = await FetchAdminPosts();
  const total_Products = getPosts.length;
    
  return (
    <section>
      <Table>
        <TableCaption>Total Products {total_Products}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         {getPosts.map((product) =>{
          const {id,name,price} = product;
          const priceFormat = formatCurrency(price);
          return(
            <TableRow key={id}>
            <TableCell>
              <Link href={`${links.PRODUCTS.href}/${id}`} className=" underline text-muted-foreground tracking-wide capitalize hover:text-white">
                  {name}
              </Link>
            </TableCell>
            <TableCell>{priceFormat}</TableCell>
            <TableCell className=" flex gap-1 items-center"> 
              <Link href={`${links.AdminProducts.href}/${id}/edit`}>
              <IconButton actionType="edit" />
              </Link>
              <DeleteFunction productID = {id}/>
            </TableCell>
          </TableRow>
          )
         })}
        </TableBody>
      </Table>
    </section>
  );
}

export default ProductsPage;

function DeleteFunction({productID}:{productID:string}){
  const delete_product = DeleteProduct.bind(null,{productID});
  return(
    <FormContainer action={delete_product}>
      <IconButton actionType="delete" />
  </FormContainer>
  )
}