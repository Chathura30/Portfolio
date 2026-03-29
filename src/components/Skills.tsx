import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const skillCategories = [
  { title: 'Frontend',           dot: '#a855f7', skills: ['React', 'React Native', 'Flutter', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend',            dot: '#3b82f6', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'PHP'] },
  { title: 'Databases',          dot: '#22c55e', skills: ['MySQL', 'Firebase', 'MongoDB', 'SQL Server'] },
  { title: 'Languages & Tools',  dot: '#f97316', skills: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'Git', 'Docker', 'Figma', 'Postman', 'VS Code', 'Agile / Scrum'] },
]

const proficiency = [
  { name: 'React / React Native', level: 90 },
  { name: 'JavaScript / TypeScript', level: 88 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'C# / .NET', level: 80 },
  { name: 'Flutter', level: 78 },
  { name: 'Python', level: 72 },
]

export default function Skills() {
  const ref = useReveal()
  const barsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = barsRef.current
    if (!container) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        container.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach(el => {
          el.style.transform = 'scaleX(1)'
        })
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="relative py-28 px-4 z-10">
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-label">My Abilities</p>
          <h2 className="section-title mb-4">Technical Skills</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Categories */}
          <div className="space-y-4 stagger-children">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="card reveal-left p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full" style={{ background: cat.dot }} />
                  <h3 className="text-base font-semibold text-text-primary">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border-color text-text-secondary hover:border-accent hover:text-accent transition-all cursor-default"
                      style={{ background: '#0d1117' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency bars */}
          <div className="reveal-right" ref={barsRef}>
            <div className="card p-8 h-full">
              <h3 className="text-xl font-semibold text-text-primary mb-8">Proficiency Level</h3>
              <div className="space-y-6">
                {proficiency.map((tech, i) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-primary text-sm font-medium">{tech.name}</span>
                      <span className="text-accent text-sm font-semibold">{tech.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: '#1a0a2e' }}>
                      <div className="skill-bar-fill h-full rounded-full"
                        style={{
                          width: `${tech.level}%`,
                          background: 'linear-gradient(to right, #a855f7, #7c3aed)',
                          transform: 'scaleX(0)',
                          transformOrigin: 'left',
                          transition: `transform 1.1s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                        }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
