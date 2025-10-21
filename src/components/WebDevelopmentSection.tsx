import { useEffect } from 'react'

export default function WebDevelopmentSection() {
  // Google Analytics page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ZBZ0ZEECM3', {
        page_title: 'Web Development Services',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 px-4 flex flex-col items-center relative overflow-hidden flex-grow" id="webdevelopment">
      <div className="w-full max-w-4xl professional-card p-8 z-20 mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text text-center">Web Development Services</h2>
        <p className="text-center text-[#3498db] text-lg md:text-xl">
          Transform your online presence with professional web development that drives results and grows your business.
        </p>
      </div>
      
      <div className="max-w-4xl w-full text-lg md:text-xl space-y-8 text-left z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="professional-card p-6 rounded-lg">
            <h3 className="font-bold text-[#3498db] mb-4 text-xl">SEO Optimization</h3>
            <p className="text-sm mb-4">
              Get found online with professional SEO. Increase your search rankings and drive more organic traffic to your website.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Higher search rankings</li>
              <li>• More organic traffic</li>
              <li>• Beat your competitors</li>
              <li>• Long-term growth</li>
            </ul>
          </div>

          <div className="professional-card p-6 rounded-lg">
            <h3 className="font-bold text-[#3498db] mb-4 text-xl">Custom Web Design</h3>
            <p className="text-sm mb-4">
              Stand out with a custom website designed for your business. Professional, fast, and optimized for conversions.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Unique brand identity</li>
              <li>• Mobile-responsive design</li>
              <li>• Fast loading speeds</li>
              <li>• Higher conversion rates</li>
            </ul>
          </div>

          <div className="professional-card p-6 rounded-lg">
            <h3 className="font-bold text-[#3498db] mb-4 text-xl">Website Administration</h3>
            <p className="text-sm mb-4">
              Keep your website secure and running smoothly. Regular updates, backups, and monitoring so you can focus on business.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Security updates</li>
              <li>• Regular backups</li>
              <li>• Performance monitoring</li>
              <li>• 24/7 support</li>
            </ul>
          </div>
        </div>

        <div className="professional-card p-6 rounded-lg bg-gradient-to-r from-[#1a2332] to-[#2c3e50] mt-8">
          <h3 className="font-bold text-[#3498db] mb-4 text-xl text-center">The Power of Integration</h3>
          <p className="text-sm text-center mb-4">
            We're the only team that handles your entire digital ecosystem. From building your website to driving traffic with marketing to tracking results with accounting.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-[#2980b9] mb-2">Web Development</h4>
              <p className="text-sm">Professional website that converts</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2980b9] mb-2">Marketing</h4>
              <p className="text-sm">Drive traffic with targeted campaigns</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2980b9] mb-2">Accounting</h4>
              <p className="text-sm">Track ROI and optimize spend</p>
            </div>
          </div>
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
