'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export function TextMarquee({ text }: { text: string }) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.to(marqueeRef.current, {
        xPercent: -50, // Smooth continuous shift across duplicated blocks
        ease: 'none',
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    },
    { scope: marqueeRef }
  )

  return (
    <div className='w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-8 my-12 border-y border-border bg-muted/30 backdrop-blur-lg select-none'>
      <div
        ref={marqueeRef}
        className='flex whitespace-nowrap text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground/20 gap-8 w-max'
      >
        <span>{text}</span>
        <span className='text-primary/40'>•</span>
        <span>{text}</span>
        <span className='text-primary/40'>•</span>
        <span>{text}</span>
        <span className='text-primary/40'>•</span>
        <span>{text}</span>
      </div>
    </div>
  )
}
