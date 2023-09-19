"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const RightMenu = () => 
{
    const [open, setOpen] = useState(false);

    const user = true;


  return (
    <div className='flex justify-between items-center gap-12'>
        {
            !user?
            (
                <Link href="/login" onClick={()=>setOpen(false)} className='hover:text-rose-800'
                >Login</Link>
            ):
            (
                <Link href="/orders" onClick={()=>setOpen(false)} className='hover:text-rose-800'
                >Orders</Link>
            )
        }

        <Link href="/cart" onClick={()=>setOpen(false)}>
            <CartIcon/>
        </Link>
    </div>
  )
}

export default RightMenu