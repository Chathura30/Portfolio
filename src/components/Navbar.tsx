import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg-main/95 backdrop-blur-sm border-b border-border-light' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <Code2 className="text-accent" size={22} />
            <span className="text-text-primary font-bold text-lg tracking-tight">
              Chathura<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200">
                {link.name}
              </a>
            ))}
          </div>

          {/* Hire Me CTA */}
          <a href="#contact" className="hidden md:flex btn-primary py-2.5 px-6 text-sm font-semibold">
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-text-primary rounded-lg hover:bg-white/5 transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-bg-main border-t border-border-light px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center py-3 px-4 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all">
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full justify-center text-sm font-semibold">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
