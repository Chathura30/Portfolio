import { Mail, ArrowRight, MapPin, Phone } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" ref={ref} className="relative py-28 px-4 z-10">
      <div className="section-divider mb-20" />

      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
            style={{ background: '#1a0a2e', border: '1px solid rgba(168,85,247,0.35)' }}>
            <Mail className="text-accent" size={28} />
          </div>
          <p className="section-label">Get In Touch</p>
          <h2 className="text-3xl font-semibold text-text-primary mb-4">Let&apos;s Build Something Great</h2>
          <p className="text-text-secondary mb-10 leading-relaxed max-w-xl mx-auto">
            Open to Full-Stack Software Engineer opportunities. Whether you have a project in mind
            or want to connect — my inbox is always open.
          </p>
          <a href="mailto:chathurajayasnka30@gmail.com" className="btn-primary inline-flex mb-16">
            Send an Email <ArrowRight size={18} />
          </a>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-3 gap-5 stagger-children">
          {[
            { icon: Mail,   label: 'Email',    value: 'chathurajayasnka30@gmail.com', href: 'mailto:chathurajayasnka30@gmail.com' },
            { icon: Phone,  label: 'Phone',    value: '+94 705 144 035',               href: 'tel:+94705144035' },
            { icon: MapPin, label: 'Location', value: 'Mirihana, Kotte, Sri Lanka',    href: undefined },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label}
              className="reveal-scale card p-5 flex flex-col items-center gap-3 text-center hover:border-accent/40 transition-colors">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: '#1a0a2e', border: '1px solid rgba(168,85,247,0.2)' }}>
                <Icon size={18} className="text-accent" />
              </div>
              <p className="text-text-muted text-xs uppercase tracking-wider">{label}</p>
              {href
                ? <a href={href} className="text-text-primary text-sm font-medium hover:text-accent transition-colors">{value}</a>
                : <p className="text-text-primary text-sm font-medium">{value}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
