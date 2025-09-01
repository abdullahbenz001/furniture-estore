import React from 'react'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
interface TextAreaProps{
  name:string
  labelText?:string
  defaultValue?:string
}
function TextAreaInput({name,labelText,defaultValue}:TextAreaProps) {
  return (
    <div className=' mb-2'>
      <Label htmlFor={name} className='mb-4 capitalize'>
        {labelText || name}
      </Label>
      <Textarea 
      id={name}
      name={name}
      defaultValue={defaultValue}
      required
      className=' leading-loose'
      rows={5}
      />
    </div>
  )
}

export default TextAreaInput