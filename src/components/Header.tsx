import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-[#18132a] shadow-lg cyberpunk-border">
      <div className="flex items-center gap-4">
        <img src="/Logo.png" alt="Logo" className="h-12 drop-shadow-lg" />
        <span className="text-2xl font-extrabold tracking-widest">Sitterly Financial Design</span>
      </div>
      <nav className="flex gap-8 text-lg">
        <Link to="/" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Home</Link>
        <Link to="/accounting" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Accounting</Link>
        <Link to="/marketing" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Marketing</Link>
        <Link to="/about" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">About</Link>
        <Link to="/contact" className="cyberpunk-glow-btn hover:cyberpunk-accent transition">Contact</Link>
      </nav>
    </header>
  )
}
