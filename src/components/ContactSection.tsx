import React from 'react'

export default function ContactSection() {
  return (
    <section className="py-16 px-4 flex flex-col items-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Contact Us</h2>
      <img src="/mobile-phone-1087845_640.webp" alt="Contact" className="w-32 h-32 object-cover rounded-lg border-2 border-[#00fff7] shadow-lg mb-6" />
      <div className="max-w-xl w-full bg-[#18132a] bg-opacity-80 p-8 rounded-lg cyberpunk-border mb-6">
        <p className="text-lg md:text-xl mb-2">Phone: <span className="cyberpunk-accent">(561) 618-1390</span></p>
        <p className="text-lg md:text-xl mb-4">Email: <span className="cyberpunk-accent">support@sitterlyfinancials.com</span> <span className="text-xs text-gray-400">(placeholder)</span></p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-[#24243e] text-white border border-[#00fff7] focus:outline-none" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-[#24243e] text-white border border-[#00fff7] focus:outline-none" />
          <textarea placeholder="Your Message" className="p-3 rounded bg-[#24243e] text-white border border-[#00fff7] focus:outline-none" rows={4} />
          <button type="submit" className="px-6 py-2 bg-[#ff00ea] text-white font-bold rounded-lg shadow-lg cyberpunk-btn hover:bg-[#00fff7] hover:text-black transition">Send Message</button>
        </form>
        <p className="mt-4 text-xs text-gray-400 text-center">We respect your privacy. Your information will only be used to respond to your inquiry. Typical response time: 1 business day.</p>
      </div>
    </section>
  )
} 