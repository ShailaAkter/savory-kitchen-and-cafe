import ContainerBox from '@/components/ContainerBox'
import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => 
{
  return (
    <ContainerBox>
      <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around items-center text-rose-600 md:flex-row '>
        {
          singleProduct.img &&
          (
            <div className='relative w-full h-1/2'>
              <Image src={singleProduct.img} alt='' className='object-contain'fill/>
            </div>
          )
        }

        <div className='h-1/2 flex flex-col gap-4 lg:px-24 py-2 md:px-4 text-sm'>
          <h1 className='lg:text-2xl md:text-2x text-xl font-bold uppercase pb-2'>{singleProduct.title}</h1>
          <p className='text-amber-950'>{singleProduct.desc}</p>
          <Price price= {singleProduct.price}
                 id = {singleProduct.id}
                 options = {singleProduct.options}
          />
        </div>
      </div>
    </ContainerBox>
  )
}

export default SingleProduct