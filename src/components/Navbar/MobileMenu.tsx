"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import menuOpenBar from "../../../public/assets/icons/menuOpenBar.png"
import menuCloseBar from "../../../public/assets/icons/menuCloseBar.png"
import Link from 'next/link';
import {motion} from 'framer-motion'
import CartIcon from './CartIcon';

const MobileMenu = () => 
{
    
    const links =
    [
    {id:1, title: "Home", url:"/"},
    {id:2, title: "Menu", url:"/menu"},
    {id:3, title: "Contact", url:"/contact"},
    {id:4, title: "About", url:"/about"}
    ];

    const [open, setOpen] = useState(false);
    const user = false;

  return (
    <div>
        {
            !open?
            (
            <Image src = {menuOpenBar} alt='menu open bar' width={35} height={35} onClick={()=>setOpen(true)} />
            ):
            (
            <Image src = {menuCloseBar} alt='menu close bar' width={35} height={35} onClick={()=>setOpen(false)}/>
            )
        }
        {
            open && 
            (
            <div className='bg-rose-700 absolute left-0 right-0 w-full text-white text-lg top-24 h-screen flex flex-col gap-10 justify-center items-center z-50'>
                {
                    links.map(item=> 
                    <Link 
                    href={item.url} 
                    key={item.id}
                    onClick={()=>setOpen(false)}
                    className='hover:text-rose-200'>
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                        {item.title}
                    </motion.div>
                    </Link>)
                }

                {
                    !user?
                    (
                        <Link href="/login" onClick={()=>setOpen(false)} className='hover:text-rose-200'
                        >            
                        <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}>
                        
                        Login
            
                        </motion.div>
                        </Link>
                    ):
                    (
                        <Link href="/orders" onClick={()=>setOpen(false)} className='hover:text-rose-200'
                        >Orders</Link>
                    )
                }

                <Link href="/cart" onClick={()=>setOpen(false)}>
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                        <CartIcon/>
                    </motion.div>
                </Link>
    
    
            </div>
            )
        }
    </div>
  )
}

export default MobileMenu