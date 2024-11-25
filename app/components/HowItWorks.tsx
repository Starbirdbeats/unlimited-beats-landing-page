const steps = [
  {
    title: 'Submit Your Request',
    description: 'Choose your style and tempo. Share reference tracks with timestamps. Describe your vision.'
  },
  {
    title: 'Production Magic',
    description: 'Professional production. Industry-standard mixing. Quality assurance.'
  },
  {
    title: 'Fast Delivery',
    description: 'Receive your beat in 2-3 days. Download in your preferred format. Request revisions if needed.'
  },
  {
    title: 'Repeat!',
    description: 'Submit your next request. No monthly limits. Keep the hits coming.'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#3C1F7B] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

