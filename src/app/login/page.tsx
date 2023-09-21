import ContainerBox from '@/components/ContainerBox'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import login from "../../../public/assets/backgrounds/login.png"
import { FaFacebook, FaGoogle, FaGooglePlusG } from 'react-icons/fa';


const Login = () => 
{
  return (
    <ContainerBox>
            <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src={login} alt="" fill className="object-contain"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-rose-600 text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex justify-center items-center gap-2 p-4 ring-1 ring-amber-400 rounded-md">
            <span><FaGoogle/></span>
            <span>Sign in with Google</span>
          </button>
          <button className="flex justify-center items-center gap-2 p-4 ring-1 ring-blue-400 rounded-md">
          <span><FaFacebook/></span>
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline text-zinc-600" href="/contact"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
    </ContainerBox>
  )
}

export default Login