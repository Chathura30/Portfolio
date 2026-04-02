import { Calendar, MapPin, CheckCircle2, Building2, GraduationCap } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const workExperience = [
  {
    title: 'Trainee Software Engineer',
    company: 'Sri Lanka Port Authority',
    division: 'Information Systems Division',
    location: 'Colombo, Sri Lanka',
    period: 'Dec 2024 – Jun 2025',
    type: 'Internship',
    responsibilities: [
      "Contributed to an enterprise-grade Financial Management System serving one of Sri Lanka's largest government institutions",
      'Built responsive, accessible UIs using React (Vite.js) and Tailwind CSS',
      'Collaborated within an agile team to integrate RESTful APIs and handle financial data workflows in a high-compliance environment',
      'Followed industry best practices for code quality, version control, and team collaboration',
    ],
  },
]

const education = [
  { degree: 'BSc (Hons) Computing Science in Software Engineering (TOP UP)', institution: 'Kingston University of London', via: 'Esoft Metro Campus', period: '2025 – 2026', grade: 'First Class', gradeColor: 'text-purple-400', gradeBg: 'bg-purple-500/10' },
  { degree: 'Pearson BTEC Level 5 HND in Computing', institution: 'Esoft Metro Campus', via: 'Specialize in Software Engineering', period: '2022 – 2024', grade: 'Merit', gradeColor: 'text-blue-400', gradeBg: 'bg-blue-500/10' },
  { degree: 'G.C.E Advanced Level', institution: 'Mahanama College Colombo 3', via: '', period: '2020', grade: 'Passed', gradeColor: 'text-green-400', gradeBg: 'bg-green-500/10' },
  { degree: 'G.C.E Ordinary Level', institution: 'Ananda Sastralaya Kotte', via: '', period: '2017' },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="relative py-28 px-4 z-10">
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-label">My Journey</p>
          <h2 className="section-title mb-4">Experience & Education</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Work Experience */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#1a0a2e' }}>
                <Building2 className="text-accent" size={18} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">Work Experience</h3>
            </div>

            {workExperience.map((exp) => (
              <div key={exp.title} className="card p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#1a0a2e' }}>
                    <Building2 className="text-accent" size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text-primary">{exp.title}</h4>
                    <p className="text-accent font-medium text-sm">{exp.company}</p>
                    <p className="text-text-muted text-xs">{exp.division}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary border border-border-color" style={{ background: '#0d1117' }}>
                    <Calendar size={12} className="text-accent" />{exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary border border-border-color" style={{ background: '#0d1117' }}>
                    <MapPin size={12} className="text-accent" />{exp.location}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium text-accent border border-accent/30" style={{ background: '#1a0a2e' }}>
                    {exp.type}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                      <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#1a0a2e' }}>
                <GraduationCap className="text-accent" size={18} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">Education</h3>
            </div>
            <div className="space-y-4 stagger-children">
              {education.map((edu) => (
                <div key={edu.degree} className="card reveal-scale p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-text-primary leading-snug">{edu.degree}</h4>
                      <p className="text-accent text-xs font-medium mt-1">{edu.institution}</p>
                      {edu.via && <p className="text-text-muted text-xs">{edu.via}</p>}
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 ${edu.gradeColor} ${edu.gradeBg}`}>
                      {edu.grade}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3">
                    <Calendar size={12} className="text-text-muted" />
                    <span className="text-text-muted text-xs">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
