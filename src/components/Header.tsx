import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="w-full max-w-full flex items-center justify-between px-2 sm:px-6 py-3 bg-[#18132a] shadow-lg cyberpunk-border relative box-border">
      <div className="flex items-center gap-4">
        <img src="/Logo.png" alt="Logo" className="h-12 drop-shadow-lg" />
        <span className="text-2xl font-extrabold tracking-widest">SF Design</span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-lg">
        <Link to="/" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Home</Link>
        <Link to="/accounting" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Accounting</Link>
        <Link to="/marketing" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Marketing</Link>
        <Link to="/about" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">About</Link>
        <Link to="/contact" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Contact</Link>
      </nav>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span className={`block w-7 h-1 bg-[#00fff7] mb-1 rounded transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#00fff7] mb-1 rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#00fff7] rounded transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full mt-2 bg-[#18132a] border-2 border-[#00fff7] rounded-b-lg shadow-lg flex flex-col z-50 md:hidden animate-fade-in">
          <Link to="/" className="px-6 py-3 border-b border-[#00fff7] hover:bg-[#232526]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/accounting" className="px-6 py-3 border-b border-[#00fff7] hover:bg-[#232526]" onClick={() => setMenuOpen(false)}>Accounting</Link>
          <Link to="/marketing" className="px-6 py-3 border-b border-[#00fff7] hover:bg-[#232526]" onClick={() => setMenuOpen(false)}>Marketing</Link>
          <Link to="/about" className="px-6 py-3 border-b border-[#00fff7] hover:bg-[#232526]" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="px-6 py-3 hover:bg-[#232526]" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
