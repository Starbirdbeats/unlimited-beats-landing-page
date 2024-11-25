'use client';

import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-16 px-4 bg-[#3C1F7B] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Create Without Limits?
        </h2>
        <p className="text-xl mb-8">
          Join today and get your first beat within 72 hours
        </p>
        <Button
          size="lg"
          className="bg-[#FFE162] text-gray-900 hover:bg-[#FFD700]"
        >
          Start Your Journey - $55/month
        </Button>
        <p className="mt-4 text-sm">
          Try risk-free with our 7-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
