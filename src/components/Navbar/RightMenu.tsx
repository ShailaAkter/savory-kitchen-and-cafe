"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';
import { usePathname } from 'next/navigation'


const RightMenu = () => 
{
    const [open, setOpen] = useState(false);
    const currentRoute = usePathname();
    const orderUrl = '/orders';
    const loginUrl = '/login';


    const user = true;


  return (
    <div className='flex justify-between items-center gap-12'>
        {
            !user?
            (
                <Link href="/login" onClick={()=>setOpen(false)} className={`${currentRoute === loginUrl? 'border-2 p-2 rounded  border-zinc-200 text-rose-600': 'p-2 border-white border-2 rounded'} hover:border-2  hover:p-2 hover:border-rose-600 hover:rounded  hover:text-rose-600`}
                >Login</Link>
            ):
            (
                <Link href="/orders" onClick={()=>setOpen(false)}  className={`${currentRoute === orderUrl? 'border-2 p-2 rounded  border-zinc-200 text-rose-600': 'p-2 border-white border-2 rounded'} hover:border-2  hover:p-2 hover:border-rose-600 hover:rounded  hover:text-rose-600`}
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