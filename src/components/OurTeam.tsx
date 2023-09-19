"use client"

import React, { useEffect } from 'react'
import ceo from "../../public/assets/backgrounds/ceo.png"
import chef1 from "../../public/assets/backgrounds/chef1.png"
import chef2 from "../../public/assets/backgrounds/chef2.png"
import team from "../../public/assets/backgrounds/team.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ContainerBox from './ContainerBox';
import Image from 'next/image'


const OurTeam = () => 
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
        <div className="flex flex-col justify-center items-center lg:flex-row lg:text-left md:text-center text-center lg:w-2/3 md:w-full mx-auto overflow-hidden py-20">
        
            <div 
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            className='flex-1 w-full relative'>
                <Image src={ceo} alt='' className='object-contain' />
            </div>

            <div className="flex-1 lg:w-2/3 md:w-full">
                <div className='flex flex-col '>
                    <div className="lg:p-8">
                        <h2 className="lg:text-4xl text-3xl text-rose-600 font-bold my-8"
                        data-aos="zoom-in"
                        data-aos-duration="1500">
                            Our Team
                        </h2>
                        <p  
                        className='text-sm text-amber-950'
                        data-aos="zoom-in-up"
                        data-aos-duration="1500">
                            At Savory Kitchen and Cafe, our team, led by CEO Emily Rose, operates with a strong commitment to culinary excellence and customer satisfaction. Our collaborative staff, including chefs, servers, and support personnel, harmoniously work together, infusing creativity and precision into every dish. We prioritize the use of fresh, locally-sourced ingredients to ensure that each offering bursts with authentic flavors. Our kitchen is a hub of innovation, where culinary traditions meet modern techniques, resulting in a dynamic and ever-evolving menu. Beyond serving exceptional food, we are an integral part of the community, hosting events, supporting local causes, and creating a warm, inclusive atmosphere. Sustainability is a core value, and we actively reduce food waste and adopt eco-friendly practices to minimize our environmental impact. Our team has genuine passion for food is at the heart of everything we do, setting us apart as a beloved culinary destination. 
                        </p>
                    </div>

                    <div className='flex flex-row '>
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        className='flex-1 w-24 relative m-2 shadow-md shadow-gray-600'>
                            <Image src={chef1} alt='' className='object-contain' />
                        </div>
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        className='flex-1 w-24 relative m-2 shadow-md shadow-gray-600'>
                            <Image src={chef2} alt='' className='object-contain' />
                        </div>
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        className='flex-1 w-24 relative m-2 shadow-md shadow-gray-600'>
                            <Image src={team} alt='' className='object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContainerBox>
  )
}

export default OurTeam