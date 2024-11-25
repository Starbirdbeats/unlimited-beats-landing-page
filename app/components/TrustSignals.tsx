import { Shield, Award, CreditCard, Headphones } from 'lucide-react'

const guarantees = [
  { icon: Shield, title: 'Professional Grade', description: '-3dB Headroom' },
  { icon: Award, title: 'Commercial License', description: 'Included with all plans' },
  { icon: CreditCard, title: 'Money-Back Guarantee', description: '7-day risk-free trial' },
  { icon: Headphones, title: 'Technical Specifications', description: '44.1kHz / 24-bit WAV Files' }
]

export default function TrustSignals() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2
className="text-3xl md:text-4xl font-bold text-center mb-12">Our Guarantees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center">
              <guarantee.icon className="w-12 h-12 mx-auto mb-4 text-[#FFE162]" />
              <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-gray-300">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

