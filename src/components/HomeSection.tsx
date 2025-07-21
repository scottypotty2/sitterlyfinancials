import React, { useState, useEffect } from 'react'

const dropdowns = [
  {
    title: 'Current Business News',
    content: null // Will be handled with API call
  },
  // Removed 'Stocks to Check Out'
  {
    title: 'Client Networking',
    content: `Connect with other business owners and professionals. Networking can lead to new partnerships, referrals, and shared marketing or accounting insights that help everyone grow.`
  },
  {
    title: 'Data Analytics',
    content: `Learn how to use data analytics to track business performance, optimize marketing campaigns, and improve accounting accuracy. Data-driven decisions lead to better outcomes and higher ROI.`
  },
  {
    title: 'Custom Code Programs',
    content: `Discover how custom software solutions can automate repetitive tasks, streamline accounting processes, or create unique marketing tools tailored to your business needs.`
  },
  {
    title: 'Customize AI Training',
    content: `Explore ways to train AI models for your business—whether for automating bookkeeping, analyzing customer data, or personalizing marketing. Custom AI can give you a competitive edge.`
  }
]

export default function HomeSection() {
  const [open, setOpen] = useState<number | null>(null)
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (open === 0 && news.length === 0 && !loading) {
      setLoading(true)
      setError(null)
      const apiKey = import.meta.env.VITE_NEWSAPI_KEY
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          setNews(data.articles || [])
          setLoading(false)
        })
        .catch(() => {
          setError('Failed to load news. Please try again later.')
          setLoading(false)
        })
    }
  }, [open, news.length, loading])

  return (
    <div className="flex flex-col min-h-screen w-full relative overflow-hidden">
      {/* Full-page subtle blurred background image */}
      <img
        src="/background.jpg"
        alt="Tech grid background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      <section className="flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden flex-1 z-10">
        {/* Subtle off-center accent image */}
        <img
          src="/ai-generated-8775232_640.png"
          alt="Subtle coder"
          className="hidden md:block absolute bottom-0 right-0 w-72 opacity-20 z-10 pointer-events-none select-none"
          aria-hidden="true"
        />
        <div className="w-full max-w-2xl border-t-2 border-b-2 border-[#00fff7] bg-[#181a1b] bg-opacity-80 py-8 px-4 relative z-20 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Welcome to Sitterly Financial Design</h2>
          {/* Removed the experience and always available paragraph */}
          <p className="text-lg md:text-xl text-center mb-6">
            We believe in building lasting relationships with our clients, providing expert guidance and creative solutions tailored to your business needs. Let us help you achieve your financial and marketing goals with a personal touch and a modern approach.
          </p>
          <p className="text-lg md:text-xl text-center mb-6">
            We offer customized subscription plans to suit your business needs—choose the services and support that fit your goals and budget.
          </p>
          <a href="/contact" className="px-8 py-3 bg-[#232526] text-[#00fff7] font-bold rounded-lg shadow-lg cyberpunk-btn hover:bg-[#00fff7] hover:text-[#232526] transition mb-8">Contact Us</a>
        </div>
        <div className="w-full max-w-2xl space-y-4 mb-8 z-20">
          {dropdowns.map((item, idx) => (
            <div key={item.title} className="border border-[#c471ed] rounded-lg bg-[#232526] bg-opacity-80">
              <button
                className="w-full text-left px-4 py-3 font-semibold text-[#00fff7] focus:outline-none flex justify-between items-center"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`dropdown-content-${idx}`}
              >
                {item.title}
                <span className="ml-2">{open === idx ? '▲' : '▼'}</span>
              </button>
              {open === idx && (
                <div id={`dropdown-content-${idx}`} className="px-4 pb-4 text-[#e0e0e0] text-base">
                  {idx === 0 ? (
                    loading ? (
                      <div>Loading news...</div>
                    ) : error ? (
                      <div className="text-red-400">{error}</div>
                    ) : news.length > 0 ? (
                      <ul className="list-disc pl-5">
                        {news.map((n, i) => (
                          <li key={n.url || i} className="mb-2">
                            <a href={n.url} target="_blank" rel="noopener noreferrer" className="underline text-[#00fff7] hover:text-[#c471ed]">{n.title}</a>
                            {n.source && n.source.name && <span className="ml-2 text-xs text-gray-400">({n.source.name})</span>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>No news found.</div>
                    )
                  ) : (
                    item.content
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <blockquote className="max-w-xl text-lg md:text-xl text-center italic border-l-4 border-[#c471ed] pl-4 mb-6 relative z-20">
          “Scott & Mara helped us take our business to the next level. Their expertise and personal touch are unmatched!”
        </blockquote>
        <blockquote className="max-w-xl text-lg md:text-xl text-center italic border-l-4 border-[#00fff7] pl-4 relative z-20">
          “The marketing campaign they created brought in more leads than we ever expected. Highly recommended!”
        </blockquote>
      </section>
      <footer className="w-full py-6 bg-[#18132a] text-center border-t border-[#00fff7] relative z-20 mt-auto">
        <span className="text-lg font-bold">Sitterly Financial Design</span>
        <p className="text-xs text-[#c471ed] mt-2">© {new Date().getFullYear()} Sitterly Financial Design. All rights reserved.</p>
      </footer>
    </div>
  )
} 