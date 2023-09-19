import React from 'react'
import ContainerBox from '../ContainerBox'
import logo from "../../../public/assets/icons/logo.png"
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import RightMenu from './RightMenu'
import CenterMenu from './CenterMenu'

const Navbar = () => 
{
  return (
    <ContainerBox>
        <div className='h-24 fixed top-0 left-0 w-full z-50 bg-white text-rose-600 flex justify-between items-center text-sm font-semibold xl:px-24 md:px-10 sm:px-2 px-4 '>

            {/* logo */}
            <div className=''>
                <Link href={"/"}>
                    <Image 
                    src={logo} 
                    alt='logo' 
                    height={150} 
                    width={150} 
                    className='hidden md:block' />
                </Link>
                <Link href={"/"} className='md:hidden text-rose-700 font-bold text-2xl'>
                    Savory 
                </Link>
            </div>

            
            {/* desktop menu for center */}
            <div className='hidden md:block'>
                <CenterMenu/>
            </div>


            {/* desktop menu for right */}
            <div className='hidden md:block'>
                <RightMenu/>
            </div>


            {/* mobile menue */}
            <div className='md:hidden'>
                <MobileMenu/>
            </div>
        </div>
    </ContainerBox>
  )
}

export default Navbar