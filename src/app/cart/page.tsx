import ContainerBox from "@/components/ContainerBox";
import Image from "next/image";
import React from "react";
import { MdDelete } from 'react-icons/md';

const Cart = () => {
  return (
    <ContainerBox>
      <div className="min:h-screen flex flex-col text-red-500 lg:flex-row md:flex-col py-4 md:py-8 lg:py-12">
        {/* PRODUCTS CONTAINER */}
        <div className="h-1/2 p-2 md:p-4 flex flex-col justify-center  lg:h-full lg:w-2/3 2xl:w-2/3 lg:px-8 xl:px-16">
          {/* SINGLE ITEM */}
          <div className="bg-white p-2 md:p-4 mb-4 flex items-center space-x-2 md:space-x-4 border rounded-lg hover:shadow-xl transition-transform hover:scale-105">
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <Image src="/temporary/p1.png" alt="" layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <div className="flex-1">
              <h1 className="text-sm md:text-lg font-semibold text-rose-600">Sicilian Pizza</h1>
              <span className="text-xs md:text-sm text-amber-950">Large</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-5">
              <h2 className="md:text-lg text-sm font-semibold text-rose-600">TK 79.90</h2>
              <button className="text-rose-600 hover:text-red-700 focus:outline-none text-md">
                <MdDelete/>
              </button>
            </div>
          </div>
          <div className="bg-white p-2 md:p-4 mb-4 flex items-center space-x-2 md:space-x-4 border rounded-lg hover:shadow-xl transition-transform hover:scale-105">
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <Image src="/temporary/p1.png" alt="" layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <div className="flex-1">
              <h1 className="text-sm md:text-lg font-semibold text-rose-600">Sicilian Pizza</h1>
              <span className="text-xs md:text-sm text-amber-950">Large</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-5">
              <h2 className="md:text-lg text-sm font-semibold text-rose-600">TK 79.90</h2>
              <button className="text-rose-600 hover:text-red-700 focus:outline-none text-md">
                <MdDelete/>
              </button>
            </div>
          </div>
          <div className="bg-white p-2 md:p-4 mb-4 flex items-center space-x-2 md:space-x-4 border rounded-lg hover:shadow-xl transition-transform hover:scale-105">
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <Image src="/temporary/p1.png" alt="" layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <div className="flex-1">
              <h1 className="text-sm md:text-lg font-semibold text-rose-600">Sicilian Pizza</h1>
              <span className="text-xs md:text-sm text-amber-950">Large</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-5">
              <h2 className="md:text-lg text-sm font-semibold text-rose-600">TK 79.90</h2>
              <button className="text-rose-600 hover:text-red-700 focus:outline-none text-md">
                <MdDelete/>
              </button>
            </div>
          </div>
          {/* Repeat this block for other items */}
        </div>
        

        {/* PAYMENT CONTAINER */}
        <div id="summary" className="w-full border-2 border-zinc-200 shadow-2xl rounded md:w-full lg:w-1/4 px-6 md:px-8 py-4 md:py-10">
          <h1 className="font-semibold text-lg md:text-2xl border-b pb-4 md:pb-8 text-rose-600">Order Summary</h1>
          <div className="flex flex-row justify-between mt-4 md:mt-10 mb-4 md:mb-5">
            <span className="font-semibold lg:text-lg  text-sm text-rose-600">Items 3</span>
            <span className="font-semibold lg:text-lg  text-sm text-rose-600">TK 239.7</span>
          </div>
          <div className="flex flex-row justify-between mt-4 md:mt-10">
            <span className="font-semibold text-xs text-rose-600">Delivery Fee</span>
            <span className="font-semibold text-xs text-rose-600">TK 30</span>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <span className="font-semibold text-xs text-rose-600">Platform Fee</span>
            <span className="font-semibold text-xs text-rose-600">TK 0.00</span>
          </div>
          <div className="flex flex-row justify-between mt-2 mb-4">
            <span className="font-semibold text-xs text-rose-600">Platform Fee</span>
            <span className="font-semibold text-xs text-rose-600">TK 0.00</span>
          </div>
          <div className="mt-6 md:mt-8">
            <label htmlFor="promo" className="font-semibold inline-block mb-1 md:mb-3 text-xs md:text-sm text-rose-600">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 md:p-2 text-xs md:text-sm w-full" />
          </div>
          <button className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 px-3 md:px-5 py-2 font-semibold text-xs md:text-sm hover:text-white mt-5 md:mt-8 rounded">Apply</button>
          <div className="border-t mt-8 md:mt-8">
            <div className="flex font-bold justify-between py-5 md:py-6 text-sm text-rose-600">
              <span>Total (incl. VAT)</span>
              <span>TK 600</span>
            </div>
            <button className="bg-rose-600 font-semibold hover:bg-rose-700 py-3 md:py-3 text-sm text-white w-full mb-4">Place Order</button>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
};

export default Cart;
