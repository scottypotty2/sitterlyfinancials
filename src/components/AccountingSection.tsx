import { useEffect } from 'react'

export default function AccountingSection() {
  // Google Analytics page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ZBZ0ZEECM3', {
        page_title: 'Accounting Services',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 px-4 flex flex-col items-center relative overflow-hidden flex-grow" id="accounting">
      {/* Full-page subtle blurred background image */}
      <img
        src="/computer-8589003_640.png"
        alt="Accounting Tech Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="w-full max-w-4xl professional-card p-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text text-center">Accounting Services</h2>
        <img src="/robot-8458438_640.png" alt="Accounting" className="w-40 h-40 object-cover rounded-lg professional-border professional-shadow mb-6 mx-auto" />
        <p className="text-center text-[#3498db] mb-8 text-lg md:text-xl">
          Trust your books to experienced professionals. We offer full accounting solutions tailored to your business needs.
        </p>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Bookkeeping</h3>
          <p>
            Accurate day-to-day bookkeeping with tax-ready records. Stay organized, compliant, and focused on growing your business.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Fractional CFO Services</h3>
          <p>
            Executive-level financial guidance without full-time cost. Strategic planning, cash flow management, and financial analysis to help you scale with confidence.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Tax Compliance</h3>
          <p>
            Tax compliance worksheets and forms to maximize savings. We keep up with the latest regulations and make compliance simple.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Payroll Management</h3>
          <p>
            Complete payroll processing, tax withholdings, and direct deposits. Your employees are paid accurately and on time.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">Financial Planning</h3>
          <p>
            Detailed financial forecasts, budgeting, and scenario analysis to help you make strategic decisions and achieve your goals.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#3498db] mb-2">New Business Formation</h3>
          <p>
            Entity selection, registration, and setup guidance. Start your business with a solid financial foundation.
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