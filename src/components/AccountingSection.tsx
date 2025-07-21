export default function AccountingSection() {
  return (
    <section className="py-16 px-4 flex flex-col items-center relative overflow-hidden min-h-screen" id="accounting">
      {/* Full-page subtle blurred background image */}
      <img
        src="/computer-8589003_640.png"
        alt="Accounting Tech Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Accounting Services</h2>
      <img src="/robot-8458438_640.png" alt="Accounting" className="w-40 h-40 object-cover rounded-lg border-2 border-[#00fff7] shadow-lg mb-6 relative z-10" />
      {/* Fun accent image bottom right */}
      <img
        src="/Crazyguy.png"
        alt="Accounting is Fun!"
        className="hidden md:block absolute bottom-0 right-0 w-48 opacity-70 z-10 pointer-events-none select-none"
        aria-hidden="true"
      />
      <p className="max-w-xl text-center mb-4 cyberpunk-accent relative z-10">
        Trust your books to experienced professionals. We offer a full range of accounting solutions tailored to your business needs.
      </p>
      <div className="max-w-xl w-full text-lg md:text-xl space-y-8 text-left relative z-10">
        <div>
          <h3 className="font-bold text-[#00fff7] mb-2">Bookkeeping (Book to Tax Solutions)</h3>
          <p>
            We handle your day-to-day bookkeeping, ensuring every transaction is accurately recorded and categorized. Our book-to-tax solutions mean your books are always tax-ready, minimizing surprises and making tax season stress-free. We help you stay organized, compliant, and focused on growing your business.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#00fff7] mb-2">Fractional CFO Services</h3>
          <p>
            Get executive-level financial guidance without the full-time cost. Our Fractional CFO services provide strategic planning, cash flow management, budgeting, and financial analysis. We help you make informed decisions, secure funding, and drive profitability—so you can scale with confidence.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#00fff7] mb-2">Tax Compliance Forms</h3>
          <p>
            We recommend, prepare, and maintain tax compliance worksheets for your business, to maximize savings. Our team keeps up with the latest regulations. We make compliance simple and worry-free.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#00fff7] mb-2">Payroll Management</h3>
          <p>
            Let us handle your payroll processing, tax withholdings, and direct deposits. We ensure your employees are paid accurately and on time, and that all payroll taxes and filings are managed for you.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#00fff7] mb-2">Financial Planning & Analysis</h3>
          <p>
            We help you plan for the future with detailed financial forecasts, budgeting, and scenario analysis. Our insights empower you to make strategic decisions and achieve your business goals.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#00fff7] mb-2">New Business Formation</h3>
          <p>
            Starting a new business? We’ll guide you through entity selection, registration, and setup, ensuring you start on the right foot with a solid financial foundation.
          </p>
        </div>
      </div>
    </section>
  )
} 