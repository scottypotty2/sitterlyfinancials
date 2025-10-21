import { useEffect } from 'react'

export default function MarketingSection() {
  // Google Analytics page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ZBZ0ZEECM3', {
        page_title: 'Marketing Services',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 px-4 flex flex-col items-center relative overflow-hidden flex-grow" id="marketing">
      {/* Full-page subtle blurred background image */}
      <img
        src="/cyber-3400789_1280.jpg"
        alt="Marketing Tech Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      <canvas
        ref={null}
        width={400}
        height={200}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-40 pointer-events-none"
        aria-hidden="true"
        style={{ display: 'none' }}
      />
      <div className="w-full max-w-4xl professional-card p-8 z-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text text-center">Marketing Services</h2>
        <img src="/mobile-1087845_1280.jpg" alt="Marketing" className="w-40 h-40 object-cover rounded-lg professional-border professional-shadow mb-6 mx-auto" />
        <p className="text-center text-[#3498db] mb-8 text-lg md:text-xl">
          Creative, data-driven marketing to help your business stand out and grow in a digital world.
        </p>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Web Design</h3>
          <p>
            We create modern, responsive websites that reflect your brand and engage your audience. Our web design services focus on usability, speed, and conversion—helping you turn visitors into loyal customers. Whether you need a new site or a redesign, we’ll make your online presence shine.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Video Editing</h3>
          <p>
            Capture attention with professional video content. We handle everything from editing promotional videos. Video is a powerful tool for marketing, training, and social media—let us help you tell your story visually.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Social Media Management</h3>
          <p>
            Grow your brand and connect with your audience on the platforms that matter. We manage your social media presence, create engaging content, and run targeted campaigns to boost your reach and engagement. Focus on your business while we handle your online community.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Custom Advertisement Campaigns</h3>
          <p>
            Reach your ideal customers with custom ad campaigns tailored to your goals and budget. We design, launch, and optimize ads across Google, Facebook, Instagram, and more—maximizing your ROI and driving real results for your business.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Branding & Logo Design</h3>
          <p>
            Build a memorable brand identity with our branding and logo design services. We help you define your brand’s voice, values, and visual style, ensuring consistency across all your marketing materials.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Email Marketing</h3>
          <p>
            Stay top-of-mind with your audience through targeted email campaigns. We design, write, and manage email marketing that nurtures leads, drives sales, and keeps your clients engaged.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">SEO & Content Strategy</h3>
          <p>
            Improve your search rankings and attract more visitors with our SEO and content strategy services. We optimize your website, create valuable content, and help you reach the right audience organically.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Analytics & Reporting</h3>
          <p>
            Make smarter marketing decisions with detailed analytics and reporting. We track your campaigns, measure results, and provide actionable insights to continually improve your marketing ROI.
          </p>
        </div>
      </div>
      </section>
      <footer className="w-full py-6 bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-center border-t border-[#3498db] relative z-10 professional-shadow">
        <span className="text-lg font-bold gradient-text">Sitterly Financial Design</span>
        <p className="text-xs text-[#3498db] mt-2">© {new Date().getFullYear()} Sitterly Financial Design. All rights reserved.</p>
      </footer>
    </div>
  )
} 