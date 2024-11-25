import '../styles/pages.css'

export default function TermsOfService() {
  return (
    <div className="page-container">
      <h1 className="page-title">Terms of Service</h1>
      
      <section className="page-section">
        <h2 className="section-title">1. Service Agreement</h2>
        <div className="section-content">
          <p>By subscribing to our Unlimited Beats Service, you agree to these terms and conditions. Our service provides custom beat production with specific delivery timeframes and usage rights.</p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">2. Subscription Terms</h2>
        <div className="section-content">
          <p>Subscriptions are billed monthly at $55 for Essential Plan or $80 for Premium Plan. You may cancel at any time, but refunds are only available within the first 7 days of your initial subscription.</p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">3. Delivery Policy</h2>
        <div className="section-content">
          <p>We commit to delivering custom beats within 2-3 business days. One active request is allowed at a time, and new requests can be submitted immediately upon delivery of the previous beat.</p>
        </div>
      </section>
    </div>
  )
}

