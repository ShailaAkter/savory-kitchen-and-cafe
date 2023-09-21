"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import ContainerBox from './ContainerBox'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Line from './Line';
import { featuredProducts } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => 
{
    const [slidesPerView, setSlidesPerView] = useState(3); // Default number of slides for desktop

    // Update the number of slides based on screen size
    const handleResize = () => 
    {
        if (window.innerWidth < 768) 
        {
            setSlidesPerView(1); // Mobile view
        } 
        else if (window.innerWidth < 1024) 
        {
            setSlidesPerView(2); // Tablet view
        } 
        else 
        {
            setSlidesPerView(3); // Desktop view
        }
    };

    // Add a listener for window resize events
    useEffect(() => 
    {
        if (typeof window !== 'undefined') 
        {
          AOS.init();
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it once to set the initial value
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <ContainerBox>
        <div className='flex justify-center items-center'>
            <div className='text-center'>

                <div 
                data-aos="zoom-in"
                data-aos-duration="500">
                    <h1 className='text-rose-600 lg:text-4xl md:text-3xl text-2xl font-bold'>Our Popular Items</h1>
                </div>

                <Line/>

                <div
                className='lg:w-1/2 md:w-1/2 w-full mx-auto'
                data-aos="zoom-in"
                data-aos-duration="500">
                <p className='text-sm text-amber-950 mb-2'>The food of Savory kitchen & Cafe are bustling with creativity, offering artisanal creations that delight taste buds. From gourmet pizzas topped with truffle-infused magic to loaded fries dripping with cheesy indulgence, these dishes redefine comfort food.</p>
                </div>
          </div>
        </div>

        <div className="mx-auto text-center">
            <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={10}
            freeMode={true}
            pagination={{clickable: true,}}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            >
                <div className='flex justify-center items-center'>
                    {
                        featuredProducts.filter(item => item.type === 'popular').map(item=>

                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col">
                                <div className="flex-grow lg:max-w-md md:max-w-sm rounded overflow-hidden shadow-lg my-20 transition-transform transform hover:scale-105">
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
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
        
    </ContainerBox>
  )
}

export default Featured