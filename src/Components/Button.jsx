import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = 'Start a Project'}) => {
  return (
    <div className='max-w-[10vw] text-black bg-zinc-300 px-3 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-1'>
        <span className='inline-block'>{title}</span>
        <IoIosReturnRight className='text-lg'/>
    </div>
  )
}

export default Button