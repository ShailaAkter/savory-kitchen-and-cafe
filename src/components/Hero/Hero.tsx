"use client"

import React, { useEffect } from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { motion  } from 'framer-motion';
import ContainerBox from '../ContainerBox'
import pizza from "../../../public/assets/icons/pizza.png"
import pasta from "../../../public/assets/icons/pasta.png"
import burger from "../../../public/assets/icons/burger.png"
import coffee from "../../../public/assets/icons/coffee.png"
import book from "../../../public/assets/icons/book.png"
import Line from '../Line'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';
import Image from 'next/image';



const Hero = () => 
{
    useEffect(() => 
    {
        if (typeof window !== 'undefined') 
        {
          AOS.init();
        }
    }, []);

  return (
    <ContainerBox>
        <section className='min-h-screen bg-cover md:bg-hero bg-hero_mobile flex justify-center items-center'>
            <div className='text-center'>

                <div 
                data-aos="zoom-in"
                data-aos-duration="1000">
                    <h1 className='text-white lg:text-6xl md:text-5xl text-4xl  font-bold '>Savory <br /> Kitchen & Cafe</h1>
                </div>
                
                <div
                data-aos="zoom-in"
                data-aos-duration="1000">
                <p className='text-gray-300 md:font-semibold italic  text-sm lg:text-lg '>Where Taste Meets Tradition, <br /> Innovation and Emotion</p>
                </div>

                <div
                data-aos="zoom-in"
                data-aos-duration="1000">
                <Line/>
                </div>

                <div className='flex justify-center items-center'>
                    <Link href="/menu/pizza" 
                    data-aos="fade-down"
                    data-aos-duration="800" 
                    className='p-1 m-1 border-2 border-transparent hover:border-rose-600 rounded-md tooltip'>
                        <span className='tooltiptext'>Delicious Pizza</span> 
                        <Image src={pizza} alt='' className=''  width={40} height={40}/>
                    </Link>
                    <Link href="/menu/pasta" 
                    data-aos="fade-up"
                    data-aos-duration="800" 
                    className='p-1 m-1 border-2 border-transparent hover:border-rose-600 rounded-md tooltip'>
                        <span className='tooltiptext'>Juicy Burger</span>
                        <Image src={burger} alt='' className=''  width={40} height={40}/>
                    </Link>
                    <Link href="/menu/burger" 
                    data-aos="fade-down"
                    data-aos-duration="800" 
                    className='p-1 m-1 border-2 border-transparent hover:border-rose-600 rounded-md tooltip'>
                        <span className='tooltiptext'>Cheesy Pasta</span>                  
                        <Image src={pasta} alt='' className=''  width={40} height={40}/>
                    </Link>
                    <Link href="/menu/coffee" 
                    data-aos="fade-up"
                    data-aos-duration="800" 
                    className='p-1 m-1 border-2 border-transparent hover:border-rose-600 rounded-md tooltip'>
                        <span className='tooltiptext'>Cold Coffee</span>                  
                        <Image src={coffee} alt='' className=''  width={40} height={40}/>
                    </Link>

                    <Link href="#book-table"
                    data-aos="fade-down"
                    data-aos-duration="800" 
                    className='p-1 m-1 border-2 border-transparent hover:border-rose-600 rounded-md tooltip'>
                        <span className='tooltiptext'>Book Table</span>                  
                        <Image src={book} alt='' className=''  width={40} height={40}/>
                    </Link>



                </div>

                <motion.div 
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.5 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}>
                    
                    <div 
                    className='flex justify-center items-center text-amber-500 mt-10'
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <BsTelephoneFill/>
                    <p className='p-1 text-xl font-bold '>+880 1783 875008</p>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}>
                    
                    <div 
                    className='flex justify-center items-center text-amber-500'
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <p className=' text-sm font-semibold '>10:00AM-11:00PM</p>
                    </div>
                </motion.div>
            </div>
        </section>
    </ContainerBox>
  )
}

export default Hero