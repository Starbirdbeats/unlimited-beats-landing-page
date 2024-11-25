import '../styles/pages.css'

export default function LicensingDetails() {
  return (
    <div className="page-container">
      <h1 className="page-title">Licensing Details</h1>
      
      <section className="page-section">
        <h2 className="section-title">Commercial License</h2>
        <div className="section-content">
          <p>All beats come with a commercial license that allows you to:</p>
          <ul>
            <li>Use the beat in commercial recordings</li>
            <li>Distribute up to 10,000 copies</li>
            <li>Monetize streaming revenue</li>
            <li>Use in music videos</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Premium Rights</h2>
        <div className="section-content">
          <p>Premium plan subscribers receive enhanced rights including:</p>
          <ul>
            <li>Unlimited distribution</li>
            <li>Full stem access</li>
            <li>Track-out files</li>
            <li>Broadcasting rights</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

