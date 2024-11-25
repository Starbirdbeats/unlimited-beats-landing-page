'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    photo: '/api/placeholder/100/100', // Changed to use a proper placeholder URL
    quote:
      'The beats I get are always fire! The turnaround time is incredibly fast.',
    achievement: '1M+ Spotify Streams',
  },
  {
    name: 'Jane Smith',
    photo: '/api/placeholder/100/100', // Changed to use a proper placeholder URL
    quote:
      'The quality and creativity of the beats are top-notch. Highly recommended!',
    achievement: 'Billboard Hot 100 Artist',
  },
  {
    name: 'Mike Johnson',
    photo: '/api/placeholder/100/100', // Changed to use a proper placeholder URL
    quote:
      "I love how they match my style perfectly. It's like they read my mind!",
    achievement: '500K+ YouTube Subscribers',
  },
];

const stats = [
  { label: 'Total Beats Delivered', value: '10,000+' },
  { label: 'Active Artists Served', value: '500+' },
  { label: 'Average Delivery Time', value: '2.5 Days' },
  { label: 'Client Satisfaction Rate', value: '99%' },
];

export default function SocialProof() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Artists Say
        </h2>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 96px) 100vw, 96px"
                    />
                  </div>
                  <p className="text-lg mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.achievement}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-[#00A3FF]">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
