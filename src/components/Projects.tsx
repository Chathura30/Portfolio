import { Globe, Smartphone, Monitor, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    title: 'Fast Discount — E-Commerce App',
    description: 'Full-stack mobile commerce app with real-time deals, countdown offers, shopping cart, multiple payment methods, admin dashboard, push notifications, and an AI-powered health analysis feature.',
    category: 'Mobile App',
    icon: Smartphone,
    tech: ['React Native (Expo)', 'Node.js', 'MySQL', 'Firebase'],
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    title: 'Campus Management System',
    description: 'Full-stack university operations platform with a modern responsive frontend, robust RESTful backend, and structured database built with agile practices and Git version control.',
    category: 'Web App',
    icon: Globe,
    tech: ['React', 'Vite.js', 'Node.js', 'MySQL', 'REST API'],
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    title: 'Payroll System',
    description: 'Desktop application managing employee records, overtime, allowances, and customisable compensation structures. Generates complete payroll reports with automated calculations.',
    category: 'Desktop',
    icon: Monitor,
    tech: ['C#', '.NET', 'Windows Forms'],
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    title: 'Bus Ticket Reservation System',
    description: 'Route browsing, seat selection, and payment processing for passengers; schedule and seat availability management for administrators.',
    category: 'Desktop',
    icon: Monitor,
    tech: ['Java', 'OOP Design Patterns'],
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'Supermarket Networks System',
    description: 'Networked inventory and operations management system for supermarket chains, demonstrating Python proficiency and system design skills.',
    category: 'Networking',
    icon: Globe,
    tech: ['Python', 'Networking', 'OOP'],
    gradient: 'from-cyan-600 to-blue-600',
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} className="relative py-28 px-4 z-10"
      style={{ background: 'rgba(10,14,19,0.6)' }}>
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-label">My Work</p>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A selection of projects spanning mobile, web, desktop, and backend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {projects.map((project) => (
            <div key={project.title} className="project-card reveal group cursor-pointer">
              {/* Gradient header */}
              <div className={`project-card-image bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={56} className="text-white/20" strokeWidth={1.2} />
                </div>
                <span className="project-card-badge">{project.category}</span>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <ExternalLink size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-md border border-border-color text-text-muted"
                      style={{ background: '#0d1117' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
