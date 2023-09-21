"use client"
import React, { useEffect, useState } from 'react'

type Props = 
{
    price:number;
    id:number;
    options?:{title:string, additionalPrice: number}[];
}

const Price = ({price, id, options}:Props) => 
{
    const [totalPrice, setTotalPrice] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() =>
    {
        setTotalPrice(
            quantity * (options ? price + options[selected].additionalPrice : price)
        );
    },[quantity, selected, options, price])

  return (
    <div className='flex flex-col gap-4 py-10'>
        <h2 className='text-2xl font-bold'>TK {totalPrice.toFixed(2)}</h2>

        <div className='flex gap-4'>
            {
                options?.map((option, index) =>
                    (
                        <button 
                        className='min-w-[6rem] p-2 ring-2 font-semibold ring-rose-600 rounded hover:bg-rose-600 hover:text-white'
                        style={{
                            background: selected === index? "#e11d48" : "white",
                            color: selected === index? "white" :"#e11d48"
                        }}
                        onClick={() => setSelected(index)}
                        key={option.title}>
                            {option.title}
                        </button>
                    ))
            }
        </div>

        <div className='flex justify-between items-center'>
            <div className='flex justify-between w-full p-3 ring-2 ring-rose-600 rounded-s my-2'>
                <span className='text-zinc-400'>Quantity</span>
                <div className='font-semibold'>
                    <button   onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))} className='px-1'>{'-'}</button>
                    <span className='px-1'>{quantity}</span>
                    <button  onClick={() => setQuantity((prev) => (prev < 15 ? prev + 1 : 15))} className='px-1 '>{'+'}</button>
                </div>
            </div>
            <button className='w-48 font-semibold bg-rose-600 text-white p-3 ring-2 ring-rose-600 rounded-e hover:bg-gradient-to-r from-amber-600 to-rose-600'>Add to Cart</button>
        </div>



    </div>
    )
}

export default Price