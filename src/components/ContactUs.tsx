"use client"
import React, { useEffect, useState } from 'react'
import ContainerBox from './ContainerBox'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Link from 'next/link';

const ContactUs = () => 
{
    useEffect(() => 
    {
        if (typeof window !== 'undefined') 
        {
          AOS.init();
        }
    }, []);

    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            message: '',
        });
      const [message, setMessage] = useState<string | null>(null);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => 
      {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => 
      {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent) => 
      {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) 
        {
          // Send the form data (e.g., via API) and handle success
          setMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else 
        {
          setMessage('Please fill in all fields.');
        }
      };
  return (
    <ContainerBox>
      <div className='parallax bg-contact_mobile lg:bg-contact md:bg-contact h-screen bg-contain'>
          <div 
            data-aos="zoom-in"
            data-aos-duration="1500"
          className="container my-24 mx-auto lg:px-6 md:px-8 px-2">

            <section className="mb-32 text-center ">
              <div className="py-10 md:px-10">
                <div className="container mx-auto xl:px-32">
                  <div className="grid items-center lg:grid-cols-2">
                    <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 ">
                    <div className="relative z-[1] block rounded-lg opacity-75 bg-gray-50 shadow-sm shadow-zinc-800 md:px-12 lg:-mr-14 py-12">
              <h2 className="text-3xl font-bold text-rose-600 mb-4">Contact Us</h2>
              {message && (
                <p
                  className={`${
                    message.includes('successfully') ? 'text-green-600' : 'text-red-600'
                  } font-semibold`}
                >
                  {message}
                </p>
              )}
              <form onSubmit={handleSubmit} className='text-left p-8 text-amber-950'>
                <div className="mb-4 ">
                  <label htmlFor="name" className="block  font-semibold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border-2 border-gray-300 rounded hover:border-rose-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block  font-semibold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border-2 border-gray-300 rounded hover:border-rose-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block  font-semibold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleTextareaChange}
                    rows={4}
                    className="w-full p-2 border-2 border-gray-300 rounded hover:border-rose-600"
                  ></textarea>
                </div>
                <Link href="/" 
                  className="inline-flex items-center mx-auto lg:mx-0 justify-center py-4 h-14 px-8 font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out rounded-lg cursor-pointer bg-rose-600 select-none hover:bg-rose-800 hover:text-white focus:shadow-xs focus:no-underline my-6 text-lg">
                      Book Now
                </Link>
              </form>
            </div>
                    </div>
                    <div className=" md:mb-12 lg:block md:hidden hidden">
                      <div
                        className="relative lg:h-[700px] md:h-[600px] h-[200px] rounded-lg shadow-lg dark:shadow-black/20">
                        <iframe
                          src="https://maps.google.com/maps?q=Dhaka, Bangladesh&z=13&ie=UTF8&iwloc=&output=embed"
                          className="absolute left-0 top-0 h-full w-full rounded-lg"
                          frameBorder="0"
                          allowFullScreen
                          title="Google Maps Embed">
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </div>

      
          <div 
              data-aos="zoom-in"
              data-aos-duration="1500"className=" py-10 md:mb-12 lg:hidden md:block sm:block">
              <div
                className="lg:h-[700px] md:h-[400px] h-[200px] rounded-lg shadow-lg dark:shadow-black/20">
                <iframe
                  src="https://maps.google.com/maps?q=Dhaka, Bangladesh&z=13&ie=UTF8&iwloc=&output=embed"
                  className=" h-full w-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  title="Google Maps Embed">
                </iframe>
              </div>
          </div>

    </ContainerBox>
  )
}

export default ContactUs