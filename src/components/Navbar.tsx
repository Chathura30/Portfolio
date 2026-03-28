import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Code2 className="text-accent" size={22} />
            <span className="text-text-primary font-bold text-lg tracking-tight">Chathura<span className="text-accent">.</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <a href="#contact" className="btn-primary py-2.5 px-5 text-sm">
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-text-primary">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-bg-main border-t border-border-light px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-cream transition-colors">
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full justify-center">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
