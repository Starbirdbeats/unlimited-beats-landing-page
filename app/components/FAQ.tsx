'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How many beats can I request per month?',
    answer:
      'Truly unlimited! While you can only have one active request at a time, as soon as one beat is delivered, you can request another. With our 2-3 day turnaround, you could potentially receive 10+ custom beats per month!',
  },
  {
    question: "What happens if I don't like the beat?",
    answer:
      'Each beat comes with one free revision. We use a detailed reference track system to ensure we match your vision from the start, minimizing the need for revisions.',
  },
  {
    question: 'Can I use the beats commercially?',
    answer:
      'Yes! All plans come with commercial rights. The Premium plan includes full stems for enhanced creative control.',
  },
  {
    question: 'How does the request system work?',
    answer:
      'Our streamlined form lets you submit reference tracks with specific timestamps of elements you like. This helps us nail your vision quickly and accurately.',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
