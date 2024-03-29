import { useEffect, useState } from "react";

export default function Timer()
{
  const [timer,setTimer] = useState("");
  
  useEffect(()=>{
    UpdateTimer();
    const intervalNum = setInterval(()=>{
      UpdateTimer();
    },1000);

    return ()=>{
      clearInterval(intervalNum);
    }

  },[])
  
  function UpdateTimer()
  {
    // Get current date and time
    const now:any = new Date();

    // Set the end of the day (23:59:59) for the current date
    const resetTime:any = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 30, 0);

    // If the current time is past the reset time, set the reset time for the next day
    if (now > resetTime) {
      resetTime.setDate(resetTime.getDate() + 1);
    }

    // Calculate the time remaining in milliseconds
    const timeRemaining = resetTime - now;

    // Calculate hours, minutes, and seconds from milliseconds
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Format the time as HH:MM:SS
    setTimer(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  }
  return (
    <div className="grid place-items-center">
        <div className="font-medium text-xl md:text-4xl clock">{timer}</div>
        <div className="text-xs text-text/70">Time Left <span className="hidden lg:inline">for Today</span></div>
    </div>
  )
}