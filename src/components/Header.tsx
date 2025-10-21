import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="w-full max-w-full flex items-center justify-between px-2 sm:px-6 py-4 bg-gradient-to-r from-[#1a2332] to-[#2c3e50] professional-shadow professional-border relative box-border">
      <div className="flex items-center gap-4">
        <img src="/Logo.png" alt="Logo" className="h-12 drop-shadow-lg" />
        <span className="text-2xl font-extrabold tracking-widest gradient-text">SF Design</span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-lg">
        <Link to="/" className="text-white hover:text-[#3498db] transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-[#34495e]">Home</Link>
        <Link to="/accounting" className="text-white hover:text-[#3498db] transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-[#34495e]">Accounting</Link>
        <Link to="/marketing" className="text-white hover:text-[#3498db] transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-[#34495e]">Marketing</Link>
        <Link to="/webdevelopment" className="text-white hover:text-[#3498db] transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-[#34495e]">Web Dev</Link>
        <Link to="/consultation" className="text-white hover:text-[#3498db] transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-[#34495e]">Consultation</Link>
        <Link to="/about" className="text-white hover:text-[#3498db] transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-[#34495e]">About</Link>
        <Link to="/contact" className="text-white hover:text-[#3498db] transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-[#34495e]">Contact</Link>
      </nav>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span className={`block w-7 h-1 bg-white mb-1 rounded transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white mb-1 rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white rounded transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full mt-2 bg-gradient-to-b from-[#1a2332] to-[#2c3e50] border border-[#34495e] rounded-b-lg shadow-lg flex flex-col z-50 md:hidden animate-fade-in">
          <Link to="/" className="px-6 py-3 border-b border-[#34495e] hover:bg-[#34495e] hover:text-[#3498db] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/accounting" className="px-6 py-3 border-b border-[#34495e] hover:bg-[#34495e] hover:text-[#3498db] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Accounting</Link>
          <Link to="/marketing" className="px-6 py-3 border-b border-[#34495e] hover:bg-[#34495e] hover:text-[#3498db] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Marketing</Link>
          <Link to="/webdevelopment" className="px-6 py-3 border-b border-[#34495e] hover:bg-[#34495e] hover:text-[#3498db] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Web Development</Link>
          <Link to="/consultation" className="px-6 py-3 border-b border-[#34495e] hover:bg-[#34495e] hover:text-[#3498db] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Consultation</Link>
          <Link to="/about" className="px-6 py-3 border-b border-[#34495e] hover:bg-[#34495e] hover:text-[#3498db] transition-colors duration-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="px-6 py-3 hover:bg-[#34495e] hover:text-[#3498db] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
