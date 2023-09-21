"use client"

import ContainerBox from '../ContainerBox';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import offer from "../../../public/assets/backgrounds/foodDelivery.png"



const HomePageDelivery = () => 
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
        <div className='bg-white py-10 h-[calc(100vh-30%)] flex flex-col md:flex-row lg:flex-row justify-around items center'>

            <div className='flex justify-center items-center'>
                <div 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="linear"
                className='lg:w-[600px] md:w-80'>
                    <Image src={offer} alt='' className='' />
                </div>
            </div>
            
            <div className='py-10 flex justify-center items-center'> 
                <div   
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-easing="linear"
                className='text-2xl font-semibold text-rose-600'>
                <h1 className='text-sm'>Tired to visit our restaurant? Enjoy</h1>
                <h1 className='font-bold lg:text-6xl md:text-5xl text-4xl'> Our Delivery <br /> Service</h1>

                <div className='flex flex-col py-5'>
                        <div>
                            <ul className="list-disc pl-1 text-lg ml-5">
                                <li className="flex items-center mb-2">
                                    <span className='text-green-600 font-semibold'><FaCheckCircle/></span>
                                    <span className='text-amber-950 font-semibold pl-2 text-sm'>Fast and safe delivery</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-disc pl-1 text-lg ml-5">
                                <li className="flex items-center mb-2">
                                    <span className='text-green-600 font-semibold'><FaCheckCircle/></span>
                                    <span className='text-amber-950 font-semibold pl-2 text-sm'>Fresh and Healthy food</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-disc pl-1 text-lg ml-5">
                                <li className="flex items-center mb-2">
                                    <span className='text-green-600 font-semibold'><FaCheckCircle/></span>
                                    <span className='text-amber-950 font-semibold pl-2 text-sm'>Available from long distance</span>
                                </li>
                            </ul>
                        </div>

                    
                </div>

                <div className='py-4 px-6 border-4 border-rose-600 flex lg:w-1/2 justify-center items-center text-center'>
                        <div>
                            <p className='text-sm text-amber-950'>Now Get</p>
                            <h1 className='text-5xl'>50% OFF</h1>
                            <p className='text-sm text-amber-950'>On 3rd Order</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </ContainerBox>
  )
}

export default HomePageDelivery