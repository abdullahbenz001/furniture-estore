import { createClient } from '@supabase/supabase-js'

const bucket = "default-bucket";


const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string,
)
export const uploadImage = async (image:File) => {

        const timestamp = Date.now();
        const newName = `${timestamp} - ${image.name}`; //create unique file name

        const {data,error} = await supabase.storage.from(bucket).upload(newName,image,{cacheControl:'3600'});

    if(!data) throw new Error("Image Upload File");
    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;

}

export const DeleteImage = async (url:string) =>{
const imageName = decodeURIComponent(url.split('/').pop() as string);

if(!imageName) throw new Error("Invalid url");

return supabase.storage.from(bucket).remove([imageName]);
}