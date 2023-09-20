"use client"

import React, { useEffect, useState } from 'react'

import team from "../../public/assets/backgrounds/team.png"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import ContainerBox from './ContainerBox'
import Link from 'next/link'
import Line from './Line'

const Reservation = () => 
{


    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null); // New state for the number of people
    const [bookingStatus, setBookingStatus] = useState<string>('');

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTime(e.target.value);
    };

    const handleNumberOfPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Ensure the input value is a valid number (you can add more validation if needed)
        const value = parseInt(e.target.value);
        if(value > 0)
        {
            setNumberOfPeople(isNaN(value) ? null : value);
        }
        
    };

    const handleBooking = () => 
    {
        if (selectedDate && selectedTime && numberOfPeople !== null) 
        {
            setBookingStatus('Booking successful!');
        } else 
        {
            setBookingStatus('Please select a date, time, and enter the number of people!');
        }
    };

  return (
    <ContainerBox>
        <div id='book-table' className="container h-screen mx-auto p-4 flex flex-col justify-center items-center text-center">
            <div>
                <h1 className='text-rose-600 lg:text-4xl md:text-3xl text-2xl font-bold'>Book a Table</h1>
            </div>

            <Line/>

            <div
            className='lg:w-1/2 md:w-1/2 w-full mx-auto'>
              <p className='text-sm text-amber-950 mb-12'>We invites you to reserve a table at this beloved eatery. Discover their rich menu, from appetizers to desserts, through vibrant descriptions and stunning photos. Experience the warm and welcoming ambiance that makes dining here a memorable experience. Whether you are a foodie or seeking a great meal, this book will inspire you to savor the flavors, stories, and moments that await you at Savory Kitchen and Cafe. <br /> <span className='font-semibold'> Book your table today!</span></p>
            </div>

            {bookingStatus && (
                <p
                  className={`${
                    bookingStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'
                  } font-semibold`}
                >
                  {bookingStatus}
                </p>
              )}
          
            <div className='flex justify-center items-center'>
                <div className='flex  lg:lex-row md:flex-row flex-col'>
                    <div className="m-4">
                        <label htmlFor="datepicker" className="block font-semibold text-amber-950 mb-2">
                            Select Date:
                        </label>
                        <DatePicker
                        id="datepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className="w-full p-2 border-2 hover:border-rose-600  rounded text-amber-950"
                        placeholderText='00/00/2023'/>
                    </div>

                    <div className="m-4">                    
                        <label htmlFor="time" className="block font-semibold text-amber-950 mb-2">
                            Select Time:
                        </label>
                        <select
                            id="time"
                            value={selectedTime}
                            onChange={handleTimeChange}
                            className="w-full p-2 border border-gray-300 rounded hover:border-rose-600 hover:border-2  text-amber-950">
                            <option value="">00 : 00</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="12:00 PM">2:00 PM</option>
                            <option value="2:00 PM">8:00 PM</option>
                        </select>
                    </div>

                    <div className="m-4">
                        <label htmlFor="numberOfPeople" className="block font-semibold text-amber-950 mb-2 ">
                            Number of People:
                        </label>
                        <input
                            type="number"
                            id="numberOfPeople"
                            value={numberOfPeople !== null ? numberOfPeople.toString() : ''}
                            onChange={handleNumberOfPeopleChange}
                            className="w-full p-2 border-2 hover:border-rose-600 rounded text-amber-950"
                            placeholder='0'
                        />
                    </div>
                </div>
            </div>
                


            <button
                onClick={handleBooking}
                className="inline-flex items-center mx-auto lg:mx-0 justify-center py-4 h-14 px-8 font-semibold text-center text-rose-600 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-rose-600 border-solid rounded-lg cursor-pointer select-none hover:bg-rose-600 hover:text-white focus:shadow-xs focus:no-underline my-6 text-lg">
                Book Now
            </button>
        </div>
    </ContainerBox>
  )
}

export default Reservation