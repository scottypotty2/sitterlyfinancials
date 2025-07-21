import React from 'react'

export default function MarketingSection() {
  return (
    <section className="py-16 px-4 flex flex-col items-center relative overflow-hidden min-h-screen" id="marketing">
      {/* Full-page subtle blurred background image */}
      <img
        src="/cyber-3400789_1280.jpg"
        alt="Marketing Tech Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Decorative accent image off to the right */}
      <img
        src="/monitor-1307227_640.jpg"
        alt="Monitors"
        className="hidden md:block absolute top-1/2 right-0 w-64 -translate-y-1/2 opacity-50 z-10 pointer-events-none select-none"
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
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 z-20">Marketing Services</h2>
      <img src="/mobile-1087845_1280.jpg" alt="Marketing" className="w-40 h-40 object-cover rounded-lg border-2 border-[#c471ed] shadow-lg mb-6 z-20" />
      <p className="max-w-xl text-center mb-4 cyberpunk-accent z-20">
        Creative, data-driven marketing to help your business stand out and grow in a digital world.
      </p>
      <div className="max-w-xl w-full text-lg md:text-xl space-y-8 text-left z-20">
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">Web Design</h3>
          <p>
            We create modern, responsive websites that reflect your brand and engage your audience. Our web design services focus on usability, speed, and conversion—helping you turn visitors into loyal customers. Whether you need a new site or a redesign, we’ll make your online presence shine.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">Video Editing</h3>
          <p>
            Capture attention with professional video content. We handle everything from editing promotional videos. Video is a powerful tool for marketing, training, and social media—let us help you tell your story visually.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">Social Media Management</h3>
          <p>
            Grow your brand and connect with your audience on the platforms that matter. We manage your social media presence, create engaging content, and run targeted campaigns to boost your reach and engagement. Focus on your business while we handle your online community.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">Custom Advertisement Campaigns</h3>
          <p>
            Reach your ideal customers with custom ad campaigns tailored to your goals and budget. We design, launch, and optimize ads across Google, Facebook, Instagram, and more—maximizing your ROI and driving real results for your business.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">Branding & Logo Design</h3>
          <p>
            Build a memorable brand identity with our branding and logo design services. We help you define your brand’s voice, values, and visual style, ensuring consistency across all your marketing materials.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">Email Marketing</h3>
          <p>
            Stay top-of-mind with your audience through targeted email campaigns. We design, write, and manage email marketing that nurtures leads, drives sales, and keeps your clients engaged.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">SEO & Content Strategy</h3>
          <p>
            Improve your search rankings and attract more visitors with our SEO and content strategy services. We optimize your website, create valuable content, and help you reach the right audience organically.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#c471ed] mb-2">Analytics & Reporting</h3>
          <p>
            Make smarter marketing decisions with detailed analytics and reporting. We track your campaigns, measure results, and provide actionable insights to continually improve your marketing ROI.
          </p>
        </div>
      </div>
    </section>
  )
} 