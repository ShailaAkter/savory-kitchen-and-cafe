import React from 'react'
import ContainerBox from './ContainerBox'
import {FaEnvelope, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import Link from 'next/link'
import Line from './Line'

const Footer = () => 
{
  return (
    <ContainerBox>
        <footer className="bg-gradient-to-t from-black to-rose-600 text-gray-200 py-28 lg:text-left md:text-left text-center px-8 bottom-0">

            <div className="container mx-auto flex flex-wrap justify-between">

                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-4">Savory Kitchen & Cafe </h3>
                    <p className="text-sm leading-relaxed">
                        We are dedicated to providing high-quality food and services.
                    </p>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <Link href="/" className="hover:text-blue-400">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/about" className="hover:text-blue-400">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/Menu" className="hover:text-blue-400">Menu</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className="hover:text-blue-400">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                    <p className="text-sm leading-relaxed">
                        123 Gulshan, Dhaka<br />
                        Dhaka City, Bangladesh<br />
                        Email: info@savory.com<br />
                        Phone: +880 123 456-7890
                    </p>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4">
                    <h3 className="text-2xl font-bold text-white mb-4 ">Follow Us</h3>
                    <div className="flex space-x-4 text-3xl lg:justify-start md:justify-start  justify-center items-center">

                        <Link href="https://www.gmail.com/" className=" hover:text-rose-600">
                          <FaEnvelope/>
                        </Link>
                        <Link href="https://www.facebook.com/" className=" hover:text-rose-600">
                          <FaFacebook/>
                        </Link>
                        <Link href="https://www.instagram.com/" className=" hover:text-rose-600">
                          <FaInstagram/>
                        </Link>
                        <Link href="https://www.twitter.com/" className="hover:text-rose-600">
                          <FaTwitter/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>

            <Line/>
        </footer>
    </ContainerBox>
  )
}

export default Footer