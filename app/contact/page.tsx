'use client'

import '../styles/pages.css'

export default function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      
      <section className="page-section">
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-content">
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="form-input" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="form-textarea" 
                rows={5} 
                required 
              />
            </div>
            
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Other Ways to Reach Us</h2>
        <div className="section-content">
          <p>WhatsApp: +1 234 567 890</p>
          <p>Email: support@unlimitedbeats.com</p>
          <p>Business Hours: Monday - Friday, 9AM - 6PM EST</p>
        </div>
      </section>
    </div>
  )
}

