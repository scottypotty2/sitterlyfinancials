import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)

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
    <section className="py-16 px-4 flex flex-col items-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Contact Us</h2>
      <img src="/mobile-phone-1087845_640.webp" alt="Contact" className="w-32 h-32 object-cover rounded-lg border-2 border-[#00fff7] shadow-lg mb-6" />
      <div className="max-w-xl w-full bg-[#18132a] bg-opacity-80 p-8 rounded-lg cyberpunk-border mb-6 relative">
        <p className="text-lg md:text-xl mb-2">Phone: <span className="cyberpunk-accent">(561) 618-1390</span></p>
        <p className="text-lg md:text-xl mb-4">Email: <span className="cyberpunk-accent">support@sitterlyfinancials.com</span></p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-3 rounded bg-[#24243e] text-white border border-[#00fff7] focus:outline-none" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 rounded bg-[#24243e] text-white border border-[#00fff7] focus:outline-none" required />
          <input type="tel" name="phone" placeholder="Your Phone (optional)" className="p-3 rounded bg-[#24243e] text-white border border-[#00fff7] focus:outline-none" />
          <textarea name="message" placeholder="Your Message" className="p-3 rounded bg-[#24243e] text-white border border-[#00fff7] focus:outline-none" rows={4} required />
          <button type="submit" className="px-6 py-2 bg-[#ff00ea] text-white font-bold rounded-lg shadow-lg cyberpunk-btn hover:bg-[#00fff7] hover:text-black transition" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        </form>
        {showPopup && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00fff7] text-[#18132a] px-6 py-3 rounded-lg shadow-lg font-bold text-lg z-50 animate-fade-in">
            Got it! We'll reach out to you shortly
          </div>
        )}
        <p className="mt-4 text-xs text-gray-400 text-center">We respect your privacy. Your information will only be used to respond to your inquiry. Typical response time: 1 business day.</p>
      </div>
    </section>
  )
} 