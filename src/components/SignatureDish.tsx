"use client"

import dish1 from "../../public/assets/backgrounds/dish1.jpg"
import dish2 from "../../public/assets/backgrounds/dish2.jpg"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ContainerBox from "./ContainerBox";
import Image from "next/image";
import Line from "./Line";



const SignatureDish = () => 
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
        <div className='parallax bg-signature'>
            <div className='text-center pt-24 pb-10'>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1500">
                    <h1 className='text-rose-600 lg:text-4xl md:text-3xl text-2xl font-bold'>Savory Signature Dish</h1>
                </div>

                <Line/>

                <div
                className='lg:w-1/2 md:w-1/2 w-full mx-auto'
                data-aos="zoom-in"
                data-aos-duration="1500">
                    <p className='text-sm text-amber-950 mb-12'>Savor the exquisite flavors of our Chefs special signature dish, where culinary artistry meets the finest ingredients to create an unforgettable dining experience. You have to visit our restaurant to have our delicious signature dish.</p>
                </div>
            </div>


            <div className='flex justify-center items-center'>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-col-4 ">

                    {/* box 1 */}
                    <div 
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    className="w-full flex justify-center items-center">
                        <div className='flex justify-end items-center '>
                            <Image src={dish1} alt="Line" height={600}/>
                        </div>
                     </div>

                    {/* box 2 */}
                    <div className="w-full flex justify-center items-center">
                        <div className="flex-1 ">
                            <div 
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="p-8 lg:text-left md:text-left text-center">

                                <h2 className="lg:text-2xl text-xl text-rose-600 font-bold mb-6">
                                    Savory Herb-Infused Angus Sirloin Dteak Delight
                                </h2>
                                <p  
                                    className='text-sm text-amber-950 font-semibold'>
                                    A perfectly aged, prime sirloin steak is expertly seasoned with a secret blend of herbs and spices before being seared to a mouthwatering medium-rare perfection. The steak is then rested to allow its juices to redistribute, ensuring each bite is as tender as it is flavorful. Served with a side of garlic butter roasted asparagus and a loaded baked potato, this dish is the epitome of steakhouse elegance. The rich, savory flavors of the steak are enhanced by a drizzle of house-made steak sauce, making every bite a memorable culinary experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden md:hidden sm:block flex justify-center items-center pt-7 pb-2">
                    <Line/>
                    </div>


                {/* box 3 */}

                    <div className="w-full flex justify-center items-center">
                        <div className="flex-1 lg:w-2/3 md:w-full">
                            <div 
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="p-8 lg:text-right md:text-right text-center">
                                <h2 className="lg:text-2xl text-xl text-rose-600 font-bold mb-6 ">
                                    Grilled Steak Fillet with Fresh Vegetable Salad
                                </h2>
                                <p  
                                className='text-sm text-amber-950 font-semibold'>
                                Savor the extraordinary with our Grilled Steak Fillet, skillfully prepared by Chef Sarah Turner. This succulent steak fillet, grilled to perfection, boasts a smoky char on the outside and tender, savory goodness within. Paired with a colorful medley of fresh, farm-to-table vegetables and our house-made zesty vinaigrette, this dish offers a symphony of flavors that will elevate your dining experience to new heights. 
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* box 4 */}
                    <div className="w-full">
                        <div 
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="w-full flex justify-center items-center">
                            <div className='flex justify-end items-center'>
                                <Image src={dish2} alt="Line" height={800}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContainerBox>
  )
}

export default SignatureDish