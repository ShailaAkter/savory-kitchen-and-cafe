import Image from 'next/image'
import React from 'react'
import cart from "../../../public/assets/icons/cart.png"


const CartIcon = () => 
{
  return (
    <div className='relative'>
        <Image src={cart} alt='cart' width={25} height={25}/>

        <div className="absolute -top-2 left-6 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold bg-rose-600 ">
            {/* item number */}
            3
        </div>
    </div>
  )
}

export default CartIcon