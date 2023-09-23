"use client"
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUtensils, FaWineGlassAlt, FaClock } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import ContainerBox from './ContainerBox';


const Service = () => 
{

    const serviceCategories = [
        {
          category: 'Environment',
          icon: <FaUtensils size={30} />,
          lists: [
            'Cozy and elegant dining area',
            'Outdoor patio seating with a view',
            'Warm and welcoming atmosphere',
          ],
        },
        {
          category: 'Food Quality',
          icon: <IoFastFoodSharp size={30} />,
          lists: [
            'Healthy and fresh food',
            'High quality and organic food',
            'Maintain calory level',
          ],
        },
        {
          category: 'Fine Dining Experience',
          icon: <FaWineGlassAlt  size={30} />,
          lists: [
            'Exquisite gourmet menu',
            'Wine pairings for every course',
            'Attentive and knowledgeable staff',
          ],
        },
        {
          category: 'Fast Delivery',
          icon: <FaClock size={30} />,
          lists: [
            'Quick and reliable delivery service',
            'Freshly prepared meals',
            'Online ordering for convenience',
          ],
        },
      ];
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
        <div className='flex flex-col justify-center items-center lg:flex-row lg:text-left md:text-center text-center mx-auto bg-contact bg-cover parallax'>
            <div 
            data-aos="zoom-in"
            data-aos-duration="800"
            className="container my-24 mx-auto lg:px-6 md:px-8 px-2 ">
                <section className="py-20 bg-zinc-800 bg-opacity-80 rounded-lg border-2 border-zinc-600 shadow-xl ">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-semibold text-white mb-2">
                        Our Services
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row gap-8 py-10 text justify-center items-center">
                        {serviceCategories.map((category, index) => (
                            <div
                            key={index}
                            className="p-6 rounded-lg transition-transform transform hover:scale-105 flex flex-col items-center text-white"
                            >
                            {category.icon}
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                {category.category}
                            </h3>
                            <ul className="text-gray-200 text-left text-sm">
                                {category.lists.map((list, idx) => (
                                <li key={idx} className="mb-2">
                                    <span className="text-green-600 mr-2">&#10003;</span>
                                    {list}
                                </li>
                                ))}
                            </ul>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </ContainerBox>
  )
}

export default Service