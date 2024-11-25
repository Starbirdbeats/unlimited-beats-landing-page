import { Music, Zap, Target, Lock } from 'lucide-react'

const benefits = [
  {
    icon: Music,
    title: 'Unlimited Beat Requests',
    description: 'Request as many beats as you need. No monthly caps or restrictions.'
  },
  {
    icon: Zap,
    title: 'Fast 2-3 Day Delivery',
    description: 'Get your beats while your creativity is hot. Keep your momentum going.'
  },
  {
    icon: Target,
    title: 'Precision-Matched Style',
    description: 'Reference track system ensures we match your vision. Detailed timestamp feedback for perfect matching.'
  },
  {
    icon: Lock,
    title: 'Quality Guaranteed',
    description: 'Professional mixing on every beat. Industry-standard -3dB headroom.'
  }
]

export default function ValueProposition() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <benefit.icon className="w-8 h-8 text-[#00A3FF] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

