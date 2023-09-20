import ContainerBox from '@/components/ContainerBox'
import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Category = () => 
{
  return (
    <ContainerBox>
          <div className="flex flex-wrap text-red-500">
            {pizzas.map((item) => (
              <Link className="w-full  sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group gap-4" href={`/product/${item.id}`} key={item.id}>
                {/* IMAGE CONTAINER */}
                {item.img && (
                            <div className="flex-grow">
                            <div className="lg:max-w-md md:max-w-sm rounded overflow-hidden shadow-lg my-20 lg:h-[560px]">
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
                                        <Link href="/about" 
                                        className="inline-flex items-center mx-auto lg:mx-0 justify-center py-0 h-11 px-4 font-semibold text-center text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-rose-600 border-solid rounded-lg cursor-pointer select-none hover:bg-rose-600 hover:text-white focus:shadow-xs focus:no-underline my-6">
                                            Add to Cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}

              </Link>
            ))}
    </div>
    </ContainerBox>
  )
}

export default Category