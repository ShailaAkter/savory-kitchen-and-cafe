import ContainerBox from '@/components/ContainerBox'
import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import order from "../../../../public/assets/backgrounds/order.gif"



const Category = () => 
{
  return (
    <ContainerBox>
        <div className='bg-gradient-to-r from-amber-600 to-rose-600'>
            <Marquee direction="right" speed={100} className="py-1">
                <p className='text-white font-semibold text-sm'>Now get <span className='font-bold text-lg'>50% OFF</span> on 3rd Order. This offer is for limited time. Grab the offer.</p>
            </Marquee>
        </div>

        <div className="flex flex-wrap py-4 text-red-500 justify-center items-center mx-auto">
            {
                pizzas.map((item) => (
                    <div className="w-full  sm:w-1/2 lg:w-1/3 py-5 justify-between group gap-1" key={item.id}>
                        {/* IMAGE CONTAINER */}
                        {item.img && (
                            <div className="flex-grow">
                                <div className="lg:max-w-md md:max-w-sm rounded overflow-hidden shadow-lg lg:h-[560px] transition-transform transform hover:scale-105">
                                    {
                                        item.img && 
                                        <Image
                                        src={item.img}
                                            alt="Course"
                                            width={200}
                                            height={200}
                                            className="w-full lg:h-60 md:h-60 h-72 object-contain hover:rotate-45 transition-all duration-500"/>
                                    }

                                    <div className="p-4">
                                            <h3 className="text-rose-600 font-bold text-lg lg:text-xl pb-4">
                                                {item.title}
                                            </h3>

                                            <p className="text-amber-950 text-sm mb-4">
                                                {item.desc}
                                            </p>

                                            <div className="flex items-center justify-between mb-4 px-4">
                                                <span className="text-amber-950 font-bold">
                                                <span className="text-sm text-amber-950">
                                                    Category:{" "}
                                                </span>
                                                {item.title}
                                                </span>
                                                <span className="text-amber-900 font-bold">
                                                TK {item.price}
                                                </span>
                                            </div>

                                            <div className="flex justify-end">
                                                <Link href={`/product/${item.id}`}
                                                className="inline-flex items-center mx-auto lg:mx-0 justify-center py-0 h-11 px-4 font-semibold text-center text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-rose-600 border-solid rounded-lg cursor-pointer select-none hover:bg-rose-600 hover:text-white focus:shadow-xs focus:no-underline my-6">
                                                    View Details
                                                </Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
            ))}
        </div>
    </ContainerBox>
  )
}

export default Category