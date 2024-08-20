import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='text-white mt-[8vw] min-h-[90vh] flex items-center justify-center w-full px-[5vw] gap-5'>
        <Card width={"30%"}  contact={false} margin1={"90%"} para={true} margin2={"13%"} subHead1={"Project &"} subHead2={"Case Studies"} hov={"#46289A"}/>
        <Card width={"70%"} contact={true} margin1={"34%"} para={false} margin2={"5%"} subHead1={"Let's get to it."} subHead2={"Together."} hov={"#7542ff"}/>
    </div>
  )
}

export default Cards