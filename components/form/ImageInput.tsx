import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function ImageInput({name='image'}:{name?:string}) {
  return (
    <div className=' mb-2'>

        <Label htmlFor={name} className=' mb-4 capitalize'>
            image
        </Label>
            <Input 
            id={name}
            name={name}
            type='file'
            required
            accept='image/*'
            />
    </div>
  )
}

export default ImageInput