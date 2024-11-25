import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import TrustSignals from './components/TrustSignals'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <ValueProposition />
      <Pricing />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <TrustSignals />
      <CTA />
      <Footer />
    </div>
  )
}

