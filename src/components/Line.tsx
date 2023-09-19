import Image from 'next/image'
import React from 'react'
import line from "../../public/assets/backgrounds/line.png"


const Line = () => 
{
  return (
    <div className="flex justify-center items-center mb-6">
        <Image src={line} alt="Line" width={250}/>
   </div>
  )
}

export default Line