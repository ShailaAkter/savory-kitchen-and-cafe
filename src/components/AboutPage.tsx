"use client"
import React, { useEffect, useState } from 'react'
import { motion  } from 'framer-motion';
import about from "../../public/assets/backgrounds/about.png"
import { FaUtensils, FaWineGlassAlt, FaClock } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ContainerBox from './ContainerBox';
import Image from 'next/image';
import OurTeam from './OurTeam';
import Line from './Line';

const AboutPage = () => 
{
    const serviceCategories = [
        {
          category: 'Environment',
          icon: <FaUtensils size={40} />,
          lists: [
            'Cozy and elegant dining area',
            'Outdoor patio seating with a view',
            'Warm and welcoming atmosphere',
          ],
        },
        {
          category: 'Fine Dining Experience',
          icon: <FaWineGlassAlt size={40} />,
          lists: [
            'Exquisite gourmet menu',
            'Wine pairings for every course',
            'Attentive and knowledgeable staff',
          ],
        },
        {
          category: 'Fast Delivery',
          icon: <FaClock size={40} />,
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
        <div className="flex flex-col justify-center items-center lg:flex-row lg:text-left md:text-center text-center lg:w-2/3 md:w-full mx-auto">
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="h-[screen] flex-1"
            style={{ position: "relative" }}>
                <div
                className=" absolute inset-0 m-auto lg:w-full lg:h-full md:w-60 md:h-60"
                style={{ position: "relative" }}>

                    <Image src={about} alt="About Us" className="rounded-full" />
                </div>
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

                        At Savory Kitchen Cafe, our carefully curated team of culinary and hospitality experts shares a collective dedication to...
                    </p>
                </div>
            </div>
      </div>
      <p 
        data-aos="fade-down"
        data-aos-duration="500"
        className='text-center lg:px-24 text-sm text-amber-950 py-10'>
        At Savory Kitchen Cafe, our carefully curated team of culinary and hospitality experts shares a collective dedication to creating an unforgettable dining experience that transcends the ordinary and embraces the extraordinary. Our journey commenced with the culinary aspirations of our founder, Emily, who has always been driven by her unwavering passion for exceptional cuisine. <br />

        Emily is vision was simple yet profound: to establish a haven where patrons could indulge in exquisite dishes within an inviting and warm atmosphere. Her commitment to culinary excellence and her quest to redefine the art of dining set the foundation for what Savory Kitchen Cafe has become today—a gastronomic sanctuary. <br />

        Savory Kitchen Cafe, born from visionm of our CEO, offers an exquisite dining experience. Our artisan chefs craft dishes that nourish both the palate and soul, while our welcoming front-of-house team ensures memorable visits. <br />

        Our inviting ambiance, coupled with a commitment to sustainability, creates the ideal setting for celebrations and more. We engage all your senses, from tantalizing aromas to pleasing aesthetics. <br />

        Beyond our walls, we support our community through responsible sourcing and charitable initiatives. Savory Kitchen Cafe is where culinary excellence and a dedication to raising the bar converge. <br />

        Join us on this extraordinary culinary journey. Savory Kitchen Cafe: Exceptional dining redefined.
    </p>
    <OurTeam/>

    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-rose-600 mb-2">
          Our Services
        </h2>
        <Line/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 border-2 border-zinc-300 flex flex-col items-center text-rose-600"
            >
              {category.icon}
              <h3 className="text-2xl font-semibold mb-4 text-rose-600">
                {category.category}
              </h3>
              <ul className="text-amber-950 text-left">
                {category.lists.map((list, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="text-green-500 mr-2">&#10003;</span>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ContainerBox>
  )
}

export default AboutPage