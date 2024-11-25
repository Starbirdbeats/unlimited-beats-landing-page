"use client";

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto text-center">
      <div className="text-[#0D1B2A] text-sm font-medium mb-2">
        Only 5 Founding Member Spots Left
      </div>
      
      <h2 className="text-[#0D1B2A] text-2xl font-bold mb-6">
        Early Access Pricing Ends In:
      </h2>
      
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#1B263B] mb-1">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-[#415A77]">Days</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-[#1B263B] mb-1">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-[#415A77]">Hours</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-[#1B263B] mb-1">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-[#415A77]">Minutes</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-[#1B263B] mb-1">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-[#415A77]">Seconds</div>
        </div>
      </div>
      
      <p className="text-[#415A77] text-sm">
        Lock in your founding member price forever
      </p>
    </div>
  );
};

export default CountdownTimer;

