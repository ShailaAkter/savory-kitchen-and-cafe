"use client"

import ContainerBox from '../ContainerBox';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import offer_burger from "../../../public/assets/backgrounds/offer.png"
import OfferTime from './OfferTime';



const Offer = () => 
{
    useEffect(() => 
    {
        if (typeof window !== 'undefined') 
        {
          AOS.init();
        }
    }, []);

    const targetDate = '2023-12-31T23:59:59';


  return (
    <ContainerBox>
        <div className='lg:bg-offer md:bg-offer bg-offer_mobile lg:h-[600px] md:h-[600px] h-screen flex flex-col md:flex-row lg:flex-row bg-contain'>

            <div   
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="linear"
            className='flex-1 flex flex-col justify-center items-center px-10 pt-16'>
                <h1 className='text-white lg:text-5xl md:text-4xl text-3xl text-center font-bold mb-4 p-2'>Get the ultimate<br /> Flavor Explosion<br />at <span className='text-amber-600'>450/- Tk </span> </h1>
                <p className='text-white text-sm text-center pb-10'>Delicious Double cheese juicy beef burger & <br /> Dairy Chocolate Cold Coffee with Icecream</p>

                <OfferTime/>

                <Link href="/category/burger" 
                className="inline-flex items-center mx-auto lg:mx-0 lg:text-xl text-lg justify-center py-8 h-11 px-8 font-semibold text-center hover:text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out rounded-lg cursor-pointer select-none bg-rose-600 hover:bg-white  text-white focus:shadow-xs focus:no-underline my-6">
                    Order Now
                </Link>
            </div>

            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="linear"
            className='flex-1 w-full relative'>
                <Image src={offer_burger} alt='' fill className='object-contain' />
            </div>
            
        </div>
    </ContainerBox>
  )
}

export default Offer