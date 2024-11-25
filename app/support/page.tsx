import '../styles/pages.css'

export default function Support() {
  return (
    <div className="page-container">
      <h1 className="page-title">Support</h1>
      
      <section className="page-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="section-content">
          <h3>How do I submit a beat request?</h3>
          <p>Log into your account, navigate to the dashboard, and click &quot;New Request&quot;. Follow the prompts to submit your reference tracks and requirements.</p>
          
          <h3>What if I need revisions?</h3>
          <p>Each beat comes with one free revision. Submit your revision request within 48 hours of delivery for fastest processing.</p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Technical Requirements</h2>
        <div className="section-content">
          <p>Our beats are delivered in the following formats:</p>
          <ul>
            <li>WAV Files (44.1kHz / 24-bit)</li>
            <li>MP3 Files (320kbps)</li>
            <li>Stem Files (Premium Plan)</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

