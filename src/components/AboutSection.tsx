import { useEffect } from 'react'

export default function AboutSection() {
  // Google Analytics page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ZBZ0ZEECM3', {
        page_title: 'About',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <>
      <section className="py-16 px-4 flex flex-col items-center relative overflow-hidden min-h-screen" id="about">
        {/* Full-page subtle blurred background image */}
        <img
          src="/heart-1164739_1280.jpg"
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0 pointer-events-none select-none"
          aria-hidden="true"
        />
        <div className="w-full max-w-4xl professional-card p-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text text-center">About Sitterly Financial Design</h2>
          <img src="/About.jpg" alt="About Scott & Mara" className="w-40 h-40 object-cover rounded-lg professional-border professional-shadow mb-6 mx-auto" />
          <p className="text-lg md:text-xl text-center mb-8">
            Sitterly Financial Design is passionate about helping businesses succeed. With over 15 years of experience in accounting and marketing, we provide expert advice and personal service. You'll always speak to a real person who cares about your business.
          </p>
          <h3 className="text-2xl font-bold mb-4 gradient-text">Frequently Asked Questions</h3>
          <div className="mb-4 p-4 rounded-lg border-l-4 border-[#3498db] bg-[#34495e] bg-opacity-50">
            <p className="font-semibold text-[#3498db]">What services do you offer?</p>
            <p>We offer a full range of accounting services (bookkeeping, tax compliance, fractional CFO) and marketing services (web design, video editing, social media management, custom ad campaigns).</p>
          </div>
          <div className="mb-4 p-4 rounded-lg border-l-4 border-[#2980b9] bg-[#34495e] bg-opacity-50">
            <p className="font-semibold text-[#3498db]">How much experience do you have?</p>
            <p>We have over 15 years of experience helping businesses grow through expert accounting and creative marketing solutions.</p>
          </div>
          <div className="mb-4 p-4 rounded-lg border-l-4 border-[#2980b9] bg-[#34495e] bg-opacity-50">
            <p className="font-semibold text-[#3498db]">How do I get started?</p>
            <p>Just use the contact form or call/email us directly. We'll respond within one business day to discuss your needs.</p>
          </div>
          <div className="mb-4 p-4 rounded-lg border-l-4 border-[#3498db] bg-[#34495e] bg-opacity-50">
            <p className="font-semibold text-[#3498db]">Do you guys want to talk about chickens?</p>
            <p>Yes! We love our chickens, huskies and kids!</p>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 mt-8 bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-center border-t border-[#3498db] relative z-10 professional-shadow">
        <span className="text-lg font-bold gradient-text">Sitterly Financial Design</span>
        <p className="text-xs text-[#3498db] mt-2">© {new Date().getFullYear()} Sitterly Financial Design. All rights reserved.</p>
      </footer>
    </>
  )
} 