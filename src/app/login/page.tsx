import ContainerBox from '@/components/ContainerBox'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import login from "../../../public/assets/backgrounds/login.png"
import google from "../../../public/assets/icons/google.png"
import facebook from "../../../public/assets/icons/facebook.png"
import { FaFacebook, FaGoogle, FaGooglePlusG } from 'react-icons/fa';


const Login = () => 
{
  return (
    <ContainerBox>
      <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center text-center">
          {/* BOX */}
          <div className=" h-full  flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
            {/* IMAGE CONTAINER */}
            <div className="relative h-1/3 w-full md:h-full md:w-1/2">
              <Image src={login} alt="" fill className="object-contain"/>
            </div>
            {/* FORM CONTAINER */}
            <div className="shadow-2xl rounded-md p-10 flex flex-col gap-8 md:w-1/2">
              <h1 className="font-bold text-rose-600 text-xl xl:text-3xl">Welcome</h1>
              <p className='text-amber-950 text-sm'>Log into your account or create a new one using social buttons</p>
              <button className="flex justify-center items-center gap-2 p-4  rounded-md bg-rose-600 text-white font-semibold hover:bg-rose-700">
                <span>
                  <Image src={google} alt='' width={30}/>
                </span>
                <span>Sign in with Google</span>
              </button>
              <button className="flex justify-center items-center gap-2 p-4 rounded-md bg-rose-600 text-white font-semibold hover:bg-rose-700">
                <span>
                  <Image src={facebook} alt='' width={30}/>
                </span>
                <span>Sign in with Facebook</span>
              </button>
              <p className="text-sm text-amber-950">
                Having a problem?<Link className="underline text-zinc-600" href="/contact"> Contact us</Link>
              </p>
            </div>
          </div>
    </div>
    </ContainerBox>
  )
}

export default Login