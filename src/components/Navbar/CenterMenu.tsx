"use client"

import { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { menu } from "@/data";



const CenterMenu = () => 
{
    const links =
    [
      {id:1, title: "Home", url:"/"},
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
            className={`${currentRoute === item.url? 'border-b-2 border-rose-800 text-rose-800 py-1': ''} hover:text-rose-800 py-1`}
            onClick={()=>setOpen(false)}>
                {item.title}
            </Link>)
           
        }
        {
        menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className={`${currentRoute === `/menu/${category.slug}`? 'border-b-2 border-rose-800 text-rose-800 py-1': ''} hover:text-rose-800 py-1`}
          onClick={()=>setOpen(false)}>
              {category.slug}
          </Link>
      ))}

    </div>
  )
}

export default CenterMenu