import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)

  // Google Analytics page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ZBZ0ZEECM3', {
        page_title: 'Contact',
        page_location: window.location.href,
      });
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const res = await fetch('https://formspree.io/f/mldljrzp', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
    setLoading(false)
    if (res.ok) {
      form.reset()
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 3000)
    } else {
      // Optionally handle error
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 px-4 flex flex-col items-center flex-grow" id="contact">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">Contact Us</h2>
      <img src="/mobile-phone-1087845_640.webp" alt="Contact" className="w-32 h-32 object-cover rounded-lg professional-border professional-shadow mb-6" />
      <div className="max-w-xl w-full professional-card p-8 rounded-lg professional-border mb-6 relative">
        <p className="text-lg md:text-xl mb-2">Phone: <span className="text-[#3498db]">(561) 618-1390</span></p>
        <p className="text-lg md:text-xl mb-4">Email: <span className="text-[#3498db]">admin@sitterlyfinancials.com</span></p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-3 rounded bg-[#34495e] text-white border border-[#3498db] focus:outline-none focus:border-[#2980b9] transition-colors duration-300" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 rounded bg-[#34495e] text-white border border-[#3498db] focus:outline-none focus:border-[#2980b9] transition-colors duration-300" required />
          <input type="tel" name="phone" placeholder="Your Phone (optional)" className="p-3 rounded bg-[#34495e] text-white border border-[#3498db] focus:outline-none focus:border-[#2980b9] transition-colors duration-300" />
          <textarea name="message" placeholder="Your Message" className="p-3 rounded bg-[#34495e] text-white border border-[#3498db] focus:outline-none focus:border-[#2980b9] transition-colors duration-300" rows={4} required />
          <button type="submit" className="px-6 py-2 professional-btn font-bold rounded-lg professional-shadow hover:transform hover:scale-105 transition-all duration-300" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        </form>
        {showPopup && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3498db] text-white px-6 py-3 rounded-lg professional-shadow font-bold text-lg z-50 animate-fade-in">
            Got it! We'll reach out to you shortly
          </div>
        )}
        <p className="mt-4 text-xs text-gray-400 text-center">We respect your privacy. Your information will only be used to respond to your inquiry. Typical response time: 1 business day.</p>
      </div>
      </section>
      <footer className="w-full py-6 bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-center border-t border-[#3498db] relative z-10 professional-shadow">
        <span className="text-lg font-bold gradient-text">Sitterly Financial Design</span>
        <p className="text-xs text-[#3498db] mt-2">© {new Date().getFullYear()} Sitterly Financial Design. All rights reserved.</p>
      </footer>
    </div>
  )
} 