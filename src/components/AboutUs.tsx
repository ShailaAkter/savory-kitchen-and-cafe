"use client"
import React, { useEffect, useState } from 'react'
import { motion  } from 'framer-motion';
import about from "../../public/assets/backgrounds/about.png"
import { FaArrowRightLong } from 'react-icons/fa6';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ContainerBox from './ContainerBox';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => 
{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => 
    {
        if (typeof window !== 'undefined') 
        {
          AOS.init();
        }

        const handleScroll = () => 
        {
            const scrollY = window.scrollY;
            const animationContainer = document.getElementById("animation-container");

            if (animationContainer) 
            {
            const containerTop = animationContainer.getBoundingClientRect().top;

            // Adjust the threshold value to control when the animation triggers
            const threshold = window.innerHeight * 0.6;

            setIsVisible(containerTop < threshold);
            }
        };

    window.addEventListener("scroll", handleScroll);

  // Clean up the event listener when the component unmounts
    return () => 
    {
         window.removeEventListener("scroll", handleScroll);
    };
    }, []);

  return (
    <ContainerBox>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:text-left md:text-center text-center lg:w-2/3 md:w-full mx-auto">
            <div
            id="animation-container"
            className="h-[screen] flex-1"
            style={{ position: "relative" }}>
                <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={isVisible ? { opacity: 1, y: 0, rotate: 360 } : {}}
                transition={{ type: "spring", duration: 0.5 }}
                className=" absolute inset-0 m-auto lg:w-full lg:h-full md:w-60 md:h-60"
                style={{ position: "relative" }}>

                    <Image src={about} alt="About Us" className="rounded-full" />
                </motion.div>
            </div>

            <div className="flex-1 lg:w-2/3 md:w-full">
                <div className="lg:p-8">

                    <h2 className="text-sm text-amber-900 italic"
                        data-aos="fade-down"
                        data-aos-duration="500">
                        Our Story
                    </h2>
                    <h2 className="lg:text-4xl text-3xl text-rose-600 font-bold mb-6"
                    data-aos="fade-down"
                    data-aos-duration="500">
                        Who We Are
                    </h2>
                    <p  
                        className='text-sm text-amber-950'
                        data-aos="fade-down"
                        data-aos-duration="500">
                        Established with a singular vision of culinary excellence, Savory Kitchen Cafe has evolved into a gastronomic sanctuary renowned for its exceptional dining experience. Our journey commenced with the culinary aspirations of our founder, Emily. Inspired by her passion for exceptional cuisine, Emily envisioned a haven where patrons could indulge in exquisite dishes within an inviting atmosphere. <br /><br />

                        At Savory Kitchen Cafe, our carefully curated team of culinary and hospitality experts shares a collective dedication to creating an unforgettable dining experience that transcends the ordinary and embraces the extraordinary.
                    </p>

                    <Link href="#about" 
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="inline-flex items-center mx-auto lg:mx-0 justify-center lg:h-14 lg:px-7 py-0 h-11 px-5 font-semibold text-center text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-rose-600 border-solid lg:rounded-2xl rounded-lg cursor-pointer select-none hover:bg-rose-600 hover:text-white focus:shadow-xs focus:no-underline my-6">
                        <span className='pr-2 lg:text-lg md:text-sm'>Find Out More</span><FaArrowRightLong /> 
                    </Link>

                </div>
            </div>
      </div>
    </ContainerBox>
  )
}

export default AboutUs