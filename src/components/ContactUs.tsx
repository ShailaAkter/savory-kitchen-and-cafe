"use client"
import React, { useEffect, useState } from 'react';
import ContainerBox from './ContainerBox';
import address from "../../public/assets/icons/location.png"
import email from "../../public/assets/icons/email.png"
import phone from "../../public/assets/icons/phone.png"
import time from "../../public/assets/icons/time.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


const ContactUs = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Send the form data (e.g., via API) and handle success
      setMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <ContainerBox>
      <div className="min-h-screen flex justify-center items-center">
        <div
          className="container mx-auto p-6  rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Contact Form */}
          <div 
          data-aos="fade-down"
          data-aos-duration="800"
          className="px-6 rounded-lg">
            <h2 className="text-3xl font-bold text-rose-600 mb-6">Contact Us</h2>
            {message && (
              <p
                className={`${
                  message.includes('successfully') ? 'text-green-600' : 'text-red-600'
                } font-semibold mb-4`}
              >
                {message}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold text-amber-950 mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-rose-600 focus:border-rose-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-amber-950 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-rose-600 focus:border-rose-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-amber-950 mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleTextareaChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-rose-600 focus:border-rose-600"
                ></textarea>
              </div>
              <button
                className="bg-rose-600 hover:bg-rose-800 text-white py-2 px-6 rounded-md font-semibold transition duration-300 ease-in-out"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div
          data-aos="fade-up"
          data-aos-duration="800" 
          className='flex justify-center items-center p-6'>
              <div className="w-full">
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">

                    <div className="mb-12">
                        <div className="">
                          <span className="mb-2 font-bold dark:text-amber-950 flex items-center">
                              <Image src={address} alt='' width={20} />
                              <p className='px-2'>Address</p>
                          </span>
                          <p className="text-amber-950 text-sm">
                            123 Gulshan, Gulshan Tower
                          </p>
                          <p className="text-amber-950 text-sm">
                            Dhaka City, Bangladesh
                          </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="">
                        <span className="mb-2 font-bold dark:text-amber-950 flex items-center">
                              <Image src={email} alt='' width={20} />
                              <p className='px-2'>Email</p>
                          </span>
                          <p className="text-amber-950 text-sm">
                            info@savorykitchenandcafe.com
                          </p>
                          <p className="text-amber-950 text-sm">
                            career@savorykitchenandcafe.com
                          </p>
                        </div>
                    </div>
                    
                  </div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">

                    <div className="mb-12">
                        <div className="">
                          <span className="mb-2 font-bold dark:text-amber-950 flex items-center">
                              <Image src={phone} alt='' width={20} />
                              <p className='px-2'>Phone</p>
                          </span>
                          <p className="text-amber-950 text-sm">
                            +880 123 456 789
                          </p>
                          <p className="text-amber-950 text-sm">
                            +880 171 234 567
                          </p>
                        </div>
                    </div>


                    <div className="mb-12 ">
                        <div className="">
                          <span className="mb-2 font-bold dark:text-amber-950 flex items-center">
                              <Image src={time} alt='' width={20} />
                              <p className='px-2'>Time</p>
                          </span>
                          <p className="text-amber-950 text-sm ">
                            Friday-Saturday: 10AM - 01AM
                          </p>
                          <p className="text-amber-950 text-sm">
                            Sunday-Thursday: 10AM - 11PM
                          </p>
                      </div>
                    </div>

                  </div>
                  
              </div>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
};

export default ContactUs;