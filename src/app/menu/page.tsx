import ContainerBox from '@/components/ContainerBox'
import { featuredProducts, menu } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => 
{
  return (
    <ContainerBox>
      <div className="container mx-auto bg-gray-100 p-6 shadow-md rounded-lg bg-hero">
      <h1 className="text-4xl font-extrabold text-center text-rose-600 mt-10">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 py-20">
          {
             menu.map(category => (
              <div 
              key={category.id}
              className="bg-white bg-opacity-90 overflow-hidden shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-md 
              flex flex-col">
                <div className='p-1 flex-grow '>
                <h2 className="text-2xl font-bold text-rose-600 mb-4">{category.title}</h2>
                  {
                      featuredProducts.filter(item => item.category === category.slug).map(item=>
                        <ul 
                        key={item.id} 
                        className="list-disc pl-4">
                          <li className="flex justify-between mb-2">
                              <span className='text-amber-950 font-semibold'>{item.title}</span>
                              <span className='text-amber-950 font-bold'>TK. {item.price}</span>
                          </li>
                        </ul>)
                  }
                </div>
                <div>
                  <Link  href={`/menu/${category.slug}`}
                      className="inline-flex items-center mx-auto lg:mx-0 justify-center py-0 h-10 px-4 font-semibold text-center text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-rose-600 border-solid rounded-lg cursor-pointer select-none hover:bg-rose-600 hover:text-white focus:shadow-xs focus:no-underline my-6">
                          Order Now
                  </Link>
                </div>

            </div>)

          )}


            {/* signature dish */}

            <div className="bg-white bg-opacity-90 overflow-hidden shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-md 
              flex flex-col">
                <div className='p-1 flex-grow '>
                <h2 className="text-2xl font-bold text-rose-600 mb-4">Signature Dish</h2>
                  <ul 
                  className="list-disc pl-4">
                    <li className="flex justify-between mb-2">
                        <span className='text-amber-950 font-semibold'>Savory Herb-Infused Angus<br />  Sirloin Dteak Delight</span>
                        <span className='text-amber-950 font-bold'>TK. 1450</span>
                    </li>
                  </ul>
                  <ul 
                  className="list-disc pl-4">
                    <li className="flex justify-between mb-2">
                        <span className='text-amber-950 font-semibold'>Grilled Steak Fillet with Fresh<br /> Vegetable Salad</span>
                        <span className='text-amber-950 font-bold'>TK. 1200</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div
                      className="inline-flex items-center mx-auto lg:mx-0 justify-center py-0 h-10 px-4 font-semibold text-center text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 rounded-lg cursor-pointer select-none focus:shadow-xs focus:no-underline my-6 text-sm">
                          Only available at restaurant
                  </div>
                </div>
            </div>

            {/* Lunch Meal */}
            <div className="bg-white bg-opacity-90 overflow-hidden shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-md 
              flex flex-col">
                <div className='p-1 flex-grow '>
                <h2 className="text-2xl font-bold text-rose-600 mb-4">Lunch</h2>
                  <ul 
                  className="list-disc pl-4">
                    <li className="flex justify-between mb-2">
                        <span className='text-amber-950 font-semibold'>Handi Biriyani</span>
                        <span className='text-amber-950 font-bold'>TK. 350</span>
                    </li>
                  </ul>
                  <ul 
                  className="list-disc pl-4">
                    <li className="flex justify-between mb-2">
                        <span className='text-amber-950 font-semibold'>Hyderabadi Biriyani</span>
                        <span className='text-amber-950 font-bold'>TK. 380</span>
                    </li>
                  </ul>
                  <ul 
                  className="list-disc pl-4">
                    <li className="flex justify-between mb-2">
                        <span className='text-amber-950 font-semibold'>Basmati Mutton Kucchi</span>
                        <span className='text-amber-950 font-bold'>TK. 350</span>
                    </li>
                  </ul>
                </div>
                <div>
                <div
                      className="inline-flex items-center mx-auto lg:mx-0 justify-center py-0 h-10 px-4 font-semibold text-center text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 rounded-lg cursor-pointer select-none focus:shadow-xs focus:no-underline my-6 text-sm">
                          Only available at restaurant
                  </div>
                </div>

            </div>
        </div>
      </div>
    </ContainerBox>
  )
}

export default Menu


