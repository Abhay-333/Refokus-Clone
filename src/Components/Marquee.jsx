import React from 'react'

const Marquee = ({images}) => {
  return (
    <div className='text-white flex w-full items-center justify-center gap-8 whitespace-nowrap overflow-hidden flex-shrink-0'>
      {images.map((url,index)=> <img key={index} className='invert w-[10%]' src={url} alt=''/>)}
    </div>
  )
}

export default Marquee