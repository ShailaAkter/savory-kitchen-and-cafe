import React from 'react'

const ContainerBox = ({children}: {children: React.ReactNode}) => 
{
  return (
    //container box to margin the website
    <div className="max-w-[2530px] mx-auto xl:px-24 md:px-10 sm:px-2 px-4 py-8">
      {children}
    </div>
  )
}

export default ContainerBox
