'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/beat-making-process.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 max-w-4xl mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Unlimited Custom Beats. Zero Limits on Creativity.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Professional beats delivered in 2-3 days. No monthly limits. No
          creativity constraints.
        </p>
        <Button
          size="lg"
          className="bg-[#3C1F7B] hover:bg-[#2E1860] text-white"
        >
          Start Making Hits - $55/month
        </Button>
      </div>
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <CountdownTimer />
      </div>
    </section>
  );
}
