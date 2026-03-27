import { useEffect, useState } from 'react'
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react'

const socialLinks = [
  { icon: Github,   href: 'https://github.com/Chathura30',                    label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chathura-jayasanka',   label: 'LinkedIn' },
  { icon: Twitter,  href: '#',                                                 label: 'Twitter' },
  { icon: Mail,     href: 'mailto:chathurajayasnka30@gmail.com',               label: 'Email' },
]

const skills = ['React', 'Node.js', 'TypeScript', 'Flutter', 'C#', 'Python', 'MySQL', 'Firebase']

export default function Hero() {
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 px-4 overflow-hidden z-10">

      {/* Vertical accent lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 5%, rgba(168,85,247,0.18) 40%, rgba(168,85,247,0.18) 60%, transparent 95%)' }} />
      <div className="absolute right-[8%] top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 5%, rgba(168,85,247,0.18) 40%, rgba(168,85,247,0.18) 60%, transparent 95%)' }} />

      <div className="max-w-6xl mx-auto w-full">

        {/* — Badge — */}
        <div className={`hero-label flex items-center justify-center gap-4 mb-12 ${!ready && 'opacity-0'}`}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent opacity-70" />
          <span className="text-accent text-xs font-semibold tracking-[0.35em] uppercase">
            Portfolio · 2025
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent opacity-70" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* — Left: text block — */}
          <div className={`relative ${!ready && 'opacity-0'}`}>
            {/* Purple left rail */}
            <div className="absolute -left-5 top-0 bottom-0 w-0.5 rounded-full animate-pulse-glow"
              style={{ background: 'linear-gradient(to bottom, #a855f7 0%, #7c3aed 60%, transparent 100%)' }} />

            <div className="pl-5 space-y-0">
              <div className="hero-text">
                <h1 className="font-black leading-[0.92] tracking-tight"
                  style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}>
                  <span className="shimmer-text">K.H.CHATHURA</span>
                </h1>
                <h1 className="font-black leading-[0.92] tracking-tight mb-7"
                  style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}>
                  <span className="text-text-primary">JAYASANKA</span>
                </h1>
              </div>

              <div className="hero-sub flex items-center gap-4 mb-6">
                <div className="h-0.5 w-10 rounded-full bg-accent shrink-0" />
                <p className="text-accent font-semibold tracking-widest text-sm uppercase">
                  Full-Stack Software Engineer
                </p>
              </div>

              <p className="hero-bio text-text-secondary leading-relaxed mb-8 max-w-[420px] text-[15px]">
                First-class honours graduate with industry experience delivering
                enterprise-grade financial systems for government institutions.
                Deep expertise in React, Node.js, TypeScript, and cross-platform
                mobile development with Flutter.
              </p>

              <div className="hero-social flex gap-3 mb-8">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href}
                    target="_blank" rel="noopener noreferrer"
                    className="social-icon" aria-label={s.label}>
                    <s.icon size={18} />
                  </a>
                ))}
              </div>

              <div className="hero-tags flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <span key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-border-color text-text-secondary hover:border-accent hover:text-accent transition-all duration-300"
                    style={{ background: 'rgba(13,17,23,0.8)' }}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="hero-cta flex gap-4">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-outline">Hire Me</a>
              </div>
            </div>
          </div>

          {/* — Right: photo — */}
          <div className="hero-photo relative flex justify-center lg:justify-end">
            {/* Spinning ring */}
            <div className="absolute rounded-full pointer-events-none animate-rotate-slow"
              style={{
                width: '108%', height: '108%',
                maxWidth: 430, maxHeight: 430,
                top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                border: '1px dashed rgba(168,85,247,0.22)',
              }} />
            {/* Static ring */}
            <div className="absolute rounded-full pointer-events-none"
              style={{
                width: '120%', height: '120%',
                maxWidth: 480, maxHeight: 480,
                top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                border: '1px solid rgba(168,85,247,0.08)',
              }} />

            <div className="animate-float relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px]">
              {/* Offset backdrop */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl"
                style={{ background: 'linear-gradient(135deg,#1a0a2e,#0d1117)', border: '1px solid rgba(168,85,247,0.25)' }} />

              {/* Photo frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border-color)' }}>
                <img src="/profile.jpg" alt="K.H. Chathura Jayasanka"
                  className="w-full h-full object-cover object-top grayscale"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fb = e.currentTarget.nextElementSibling as HTMLElement | null
                    if (fb) fb.style.display = 'flex'
                  }} />
                {/* Fallback */}
                <div className="absolute inset-0 items-center justify-center"
                  style={{ display: 'none', background: 'linear-gradient(135deg,#1c2128,#2d333b)' }}>
                  <span className="text-8xl font-black select-none" style={{ color: '#30363d' }}>CJ</span>
                </div>
                {/* Subtle purple tint */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(168,85,247,0.15) 0%, transparent 50%)' }} />
              </div>

              {/* Badge — projects */}
              <div className="absolute -bottom-5 -left-5 px-4 py-3 rounded-2xl flex items-center gap-3 animate-pulse-glow"
                style={{ background: '#1c2128', border: '1px solid rgba(168,85,247,0.3)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#1a0a2e' }}>
                  <span className="text-accent font-bold text-base">5+</span>
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm leading-none">Projects</p>
                  <p className="text-text-muted text-xs mt-0.5">Completed</p>
                </div>
              </div>

              {/* Badge — experience */}
              <div className="absolute -top-5 -right-5 px-4 py-3 rounded-2xl flex items-center gap-3"
                style={{ background: '#1c2128', border: '1px solid rgba(168,85,247,0.2)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#1a0a2e' }}>
                  <span className="text-accent font-bold text-base">1+</span>
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm leading-none">Year</p>
                  <p className="text-text-muted text-xs mt-0.5">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* — Scroll cue — */}
        <div className="hero-cta flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group">
            <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
