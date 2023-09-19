"use client"

import { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";



const CenterMenu = () => 
{
    const links =
    [
      {id:1, title: "Home", url:"/"},
      {id:2, title: "Menu", url:"/menu"},
      {id:3, title: "Contact", url:"/contact"},
      {id:4, title: "About", url:"/about"}
    ];

    const [open, setOpen] = useState(false);
    const currentRoute = usePathname();

    const user = true;

  

  return (
    <div className="flex justify-between items-center gap-4">
        {
            links.map(item=> 
            <Link 
            href={item.url} 
            key={item.id}
            className={`${currentRoute === item.url? 'border-b-2 border-rose-800 text-rose-800': ''} hover:text-rose-800`}
            onClick={()=>setOpen(false)}>
                {item.title}
            </Link>)
        }

    </div>
  )
}

export default CenterMenu