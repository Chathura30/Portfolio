import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
]

const socialLinks = [
  { icon: Github,   href: 'https://github.com/Chathura30',                  label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chathura-jayasanka', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:chathurajayasnka30@gmail.com',             label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border-light" style={{ background: 'rgba(8,12,16,0.95)' }}>
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-5">
              <Code2 className="text-accent" size={22} />
              <span className="text-text-primary font-bold text-lg">Chathura<span className="text-accent">.</span></span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Full-Stack Software Engineer building clean, scalable, and production-ready web &amp; mobile applications.
            </p>
            <a href="mailto:chathurajayasnka30@gmail.com" className="text-accent hover:underline text-sm">
              chathurajayasnka30@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-text-primary font-semibold mb-5">Connect</h4>
            <div className="flex gap-3 mb-5">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="social-icon" aria-label={s.label}>
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-text-secondary text-sm">Colombo, Sri Lanka</p>
            <p className="text-text-secondary text-sm">+94 705 144 035</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border-light">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-sm">{year} © K.H. Chathura Jayasanka. All rights reserved.</p>
          <p className="text-text-muted text-sm">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
