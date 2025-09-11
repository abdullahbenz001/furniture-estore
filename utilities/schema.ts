import {z, ZodSchema} from 'zod';

// KEY :VALUE
export const proudctSchema = z.object({
    name:z.string()
            .min(3, {
                message: "name must be at least 3 characters."
            })
            .max(50, {
                message:"name must be less than 50 characters"
            }),
    description: z
            .string().refine((description)=>{       
                const wordCont = description.split(" ").length;
                return wordCont >= 10 && wordCont <= 500
            }, {
                message: "description must be between 10 and 500 words"
            } ),
    price:z.coerce.number().int().min(0,{
        message: "price must be a positive number ."
    }),
    featured:z.coerce.boolean(),
});
export function validateSchema<T>(scheme:ZodSchema<T>,data:unknown):T{
        const result = scheme.safeParse(data)
    if(!result.success){
        const error = result.error.issues.map((e)=> e.message)
        throw new Error(error.join(','));
      }
      return result.data
}
export const imageScheme = z.object({
    image:validateImageFile()
})
function validateImageFile(){
    const imageSize = 1024 * 1024; //1MB
    const acceptedFileType = ['image/'];
    return z.instanceof(File)
    .refine((file)=>{
        return !file || file.size <= imageSize
    },"File must be less than 1 MB")
    .refine((file)=>{
        return !file || acceptedFileType.some((type) => file.type.startsWith(type))
    },"File must be an image");
}