'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  text: string
  className?: string
}

export function ScrollReveal({ text, className = '' }: ScrollRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      // Split text manually into span wrapped characters
      const chars = containerRef.current.querySelectorAll('.char')

      gsap.fromTo(
        chars,
        { opacity: 0.15, y: 12, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1, // Smooth scrub enables reversing on scroll up
          },
        }
      )
    },
    { scope: containerRef }
  )

  const words = text.split(' ')

  return (
    <h2
      ref={containerRef}
      className={`flex flex-wrap gap-x-[0.25em] gap-y-2 leading-tight ${className}`}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className='inline-block whitespace-nowrap'>
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className='char inline-block transition-colors duration-75'
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h2>
  )
}
