import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

interface CheckBoxProps{
  name:string
  defaultChecked?:boolean
  label:string
}

function CheckBoxInput({name,defaultChecked,label}:CheckBoxProps) {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox 
      id={name}
      name={name}
      defaultChecked={defaultChecked}
      />
      <Label htmlFor={name} className=' text-sm leading-none capitalize'>
        {label}
      </Label>


    </div>
  )
}

export default CheckBoxInput