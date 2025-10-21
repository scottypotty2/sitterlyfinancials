import { useEffect } from 'react'

export default function ConsultationSection() {
  // Google Analytics page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ZBZ0ZEECM3', {
        page_title: 'Business Consultation Services',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 px-4 flex flex-col items-center relative overflow-hidden flex-grow" id="consultation">
      <div className="w-full max-w-4xl professional-card p-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text text-center">Business Consultation & Growth Strategy</h2>
        <p className="text-center text-[#3498db] mb-8 text-lg md:text-xl">
          We've built successful businesses and helped others do the same. We know the legal requirements, protect you from scams, and lay solid foundations for your success.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#3498db] mb-4">Foundation & Protection</h3>
            <ul className="space-y-2 text-sm">
              <li>• Navigate legal requirements and avoid costly mistakes</li>
              <li>• Protect you from fraudulent services and bad actors</li>
              <li>• Establish proper business structure and processes</li>
              <li>• Identify and mitigate potential business risks</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#3498db] mb-4">Growth & Scale</h3>
            <ul className="space-y-2 text-sm">
              <li>• Take successful companies to the next level</li>
              <li>• Strategic growth into new markets</li>
              <li>• Streamline operations for maximum efficiency</li>
              <li>• Scale your workforce strategically</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#3498db] mb-4">Why Choose Us?</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="font-semibold text-[#3498db] mb-2">We've Been There</h4>
            <p className="text-sm mb-4">Built successful businesses from the ground up. We know the challenges and what it takes to succeed.</p>
            
            <h4 className="font-semibold text-[#3498db] mb-2">Scam Protection</h4>
            <p className="text-sm mb-4">We've seen every scam in the book. We'll help you avoid costly mistakes.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#3498db] mb-2">Legal Expertise</h4>
            <p className="text-sm mb-4">We understand the legal requirements that can make or break your business.</p>
            
            <h4 className="font-semibold text-[#3498db] mb-2">Growth Focus</h4>
            <p className="text-sm mb-4">We help you break through to the next level of success.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#3498db] mb-4 text-center">Our Services</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-[#3498db] mb-2">Business Foundation</h4>
            <ul className="text-sm space-y-1">
              <li>• Entity selection and formation</li>
              <li>• Legal compliance setup</li>
              <li>• Financial system implementation</li>
              <li>• Risk assessment and mitigation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#3498db] mb-2">Growth Strategy</h4>
            <ul className="text-sm space-y-1">
              <li>• Market expansion planning</li>
              <li>• Process optimization</li>
              <li>• Technology integration</li>
              <li>• Team scaling strategies</li>
            </ul>
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
