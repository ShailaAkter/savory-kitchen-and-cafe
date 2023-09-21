import ContainerBox from "@/components/ContainerBox";
import Image from "next/image";
import React from "react";
import { MdDelete } from 'react-icons/md';

const Cart = () => {
  return (
    <ContainerBox>
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row py-12">
        {/* PRODUCTS CONTAINER */}
        <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-2/3 lg:px-20 xl:px-40">
          {/* SINGLE ITEM */}
          <div className="bg-white p-4 mb-4 flex items-center space-x-4 border rounded-lg hover:shadow-xl transition-transform hover:scale-105">
            <div className="relative w-24 h-24">
              <Image src="/temporary/p1.png" alt="" layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-rose-600">Sicilian Pizza</h1>
              <span className="text-sm text-amber-950">Large</span>
            </div>
            <div className="flex items-center space-x-5">
              <h2 className="lg:text-lg  md:text-lg text-sm font-semibold text-rose-600">TK 79.90</h2>
              <button className="text-rose-600 hover:text-red-700 focus:outline-none text-lg">
                <MdDelete/>
              </button>
            </div>
          </div>
          {/* Repeat this block for other items */}
        </div>

        {/* PAYMENT CONTAINER */}
        <div className="h-1/2 p-4 bg-white border-4 border-zinc-200 shadow-lg rounded-lg flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
          <div className="bg-rose-600 text-white rounded-t-lg py-2 text-center my-3">
            <h2 className="text-xl font-semibold p-3">Order Summary</h2>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="px-4 font-semibold">Subtotal (3 items)</span>
              <span className="px-4 font-semibold">TK 81.70</span>
            </div>
            <div className="flex justify-between">
              <span className="px-4 font-semibold">Service Cost</span>
              <span className="px-4 font-semibold">TK 0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="px-4 font-semibold">Delivery Cost</span>
              <span className="text-green-500 px-4 font-semibold">FREE!</span>
            </div>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between">
            <span className="text-lg font-semibold px-4">TOTAL (Incl. VAT)</span>
            <span className="font-bold text-lg text-red-500 px-4">TK 81.70</span>
          </div>
          <button className="bg-rose-600 text-white hover:bg-gradient-to-r from-amber-600 to-rose-600 py-3 rounded-md w-1/2 self-center hover:bg-red-600 transform hover:scale-105 transition-all mb-10">
            CHECKOUT
          </button>
        </div>
      </div>
    </ContainerBox>
  );
};

export default Cart;
