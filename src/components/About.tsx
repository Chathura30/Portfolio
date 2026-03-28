import { MapPin, Briefcase, GraduationCap, Code, Award } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Completed', value: '5+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Code Commits', value: '500+' },
]

const infoCards = [
  { icon: MapPin,         label: 'Location',     value: 'Mirihana, Kotte, Sri Lanka',   color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Briefcase,      label: 'Current Role',  value: 'Trainee Software Engineer',    color: 'text-blue-400',   bg: 'bg-blue-500/10'   },
  { icon: GraduationCap,  label: 'Education',     value: 'BSc (Hons) SE — First Class',  color: 'text-green-400',  bg: 'bg-green-500/10'  },
  { icon: Code,           label: 'Experience',    value: '1+ Years Industry',             color: 'text-orange-400', bg: 'bg-orange-500/10' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="relative py-28 px-4 z-10">
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Full-Stack Engineer<br />based in Sri Lanka</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo */}
          <div className="reveal-left">
            <div className="relative">
              <div className="absolute top-6 left-6 w-full h-full rounded-2xl border border-accent/20"
                style={{ background: '#1a0a2e' }} />
              <div className="relative card p-6">
                <div className="relative aspect-square rounded-xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#1c2128,#2d333b)' }}>
                  <img src="/profile.jpg" alt="K.H. Chathura Jayasanka"
                    className="w-full h-full object-cover object-top grayscale"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const fb = e.currentTarget.nextElementSibling as HTMLElement | null
                      if (fb) fb.style.display = 'flex'
                    }} />
                  <div className="absolute inset-0 items-center justify-center hidden"
                    style={{ display: 'none' }}>
                    <span className="text-8xl font-black select-none" style={{ color: '#30363d' }}>CJ</span>
                  </div>
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(168,85,247,0.15) 0%, transparent 50%)' }} />
                </div>

                <div className="absolute -bottom-4 -right-4 glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: '#1a0a2e' }}>
                    <Award className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold text-sm">First Class</p>
                    <p className="text-text-secondary text-xs">BSc Software Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="reveal-right space-y-8">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                First-class honours graduate in Software Engineering (Kingston University of London)
                with hands-on industry experience building production-grade full-stack web and
                mobile applications.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Proven track record delivering enterprise-scale financial systems in a government
                environment, with deep expertise across the React ecosystem, Node.js, and
                cross-platform mobile development. Driven by a passion for clean architecture,
                agile collaboration, and continuous learning.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 stagger-children">
              {infoCards.map((card) => (
                <div key={card.label} className="card reveal-scale p-4 flex items-center gap-3">
                  <div className={`w-11 h-11 ${card.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <card.icon className={card.color} size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs">{card.label}</p>
                    <p className="text-text-primary font-semibold text-sm">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-border-color stagger-children">
              {stats.map((stat) => (
                <div key={stat.label} className="reveal text-center">
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-text-secondary text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
