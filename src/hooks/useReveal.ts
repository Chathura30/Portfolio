import { useEffect, useRef } from 'react'

export function useReveal(rootMargin = '0px 0px -60px 0px') {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // animate once
          }
        })
      },
      { rootMargin, threshold: 0.12 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [rootMargin])

  return ref
}
