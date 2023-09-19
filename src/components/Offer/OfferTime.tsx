"use client"

import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const OfferTime = () => 
{
  const [countdownTime, setCountdownTime] = useState(Date.now() + 580000000); // Set the initial countdown time (30 minutes in the future)

  // Start the countdown timer on the client side
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime((prevTime) => prevTime - 1000);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Renderer function for the Countdown component
  const renderer = ({ days, hours, minutes, seconds, completed }: { days: number; hours: number; minutes: number; seconds: number; completed: boolean }) => 
  {
    if (completed) {
      return <div></div>;
    } else {
      return (
        <div>
          {days} days {hours}:{minutes}:{seconds} sec.
        </div>
      );
    }
  };

  return (
    <div className='font-bold lg:text-4xl text-3xl text-rose-600'>
      <Countdown date={countdownTime} renderer={renderer} />
    </div>
  );
}



export default OfferTime