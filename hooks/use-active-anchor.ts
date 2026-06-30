'use client'

import { useEffect, useState } from 'react'

export function useActiveAnchor(anchors: string[]) {
  const [activeAnchor, setActiveAnchor] = useState<string>('')

  useEffect(() => {
    if (anchors.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // If the section hits the top 25% of the viewport, activate it
          if (entry.isIntersecting) {
            setActiveAnchor(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -70% 0px', // Focuses on the top-middle tracking sweet spot
        threshold: 0,
      }
    )

    // Watch every element matching our anchor keys
    anchors.forEach(anchor => {
      const el = document.getElementById(anchor)
      if (el) observer.observe(el)
    })

    return () => {
      anchors.forEach(anchor => {
        const el = document.getElementById(anchor)
        if (el) observer.unobserve(el)
      })
    }
  }, [anchors])

  return activeAnchor
}
