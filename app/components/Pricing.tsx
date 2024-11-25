'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essential Plan',
    price: '$55/month',
    features: [
      'Unlimited Beat Requests',
      '2-3 Day Delivery',
      'High-Quality WAV Files',
      'MP3 Files for Preview',
      'Commercial License',
      'One Active Request at a Time',
      'Reference Track System',
      '1 Free Revision per Beat',
    ],
    cta: 'Start Creating',
  },
  {
    name: 'Premium Plan',
    price: '$80/month',
    features: [
      'Everything in Essential Plan',
      'Full Stem Files',
      'Track-Out Files',
      'Enhanced Commercial Rights',
      'Priority Support',
      'Premium Sound Library Access',
    ],
    cta: 'Go Premium',
  },
];

export default function Pricing() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-800 rounded-lg p-8 shadow-lg min-h-[600px]"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <Check className="w-5 h-5 text-[#FFE162]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Button className="w-full bg-[#3C1F7B] hover:bg-[#2E1860] text-white">
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
