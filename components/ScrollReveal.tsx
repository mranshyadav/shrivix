'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()
  const ioRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (ioRef.current) {
      ioRef.current.disconnect()
      ioRef.current = null
    }

    const run = () => {
      const els = Array.from(document.querySelectorAll<Element>('.rv'))
      if (!els.length) return

      const io = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('on')
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px 60px 0px' }
      )

      ioRef.current = io
      els.forEach(el => io.observe(el))
    }

    // Run on next frame to ensure DOM is fully painted after navigation
    const raf = requestAnimationFrame(() => {
      run()
    })

    return () => {
      cancelAnimationFrame(raf)
      ioRef.current?.disconnect()
    }
  }, [pathname])

  return null
}
