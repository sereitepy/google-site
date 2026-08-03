'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface TeamMember {
  name: string
  role: string
  contribution: string
  avatar: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Lead Architect',
    role: 'Full Stack & Vector Engine',
    contribution:
      'Designed Cosine Similarity algorithms and Next.js full-stack manuscript architecture.',
    avatar: '👨‍💻',
  },
  {
    name: 'Data Researcher',
    role: 'Higher Ed Data Analyst',
    contribution:
      'Curated Cambodian university matrices, tuition structures, and RIASEC Holland profiles.',
    avatar: '📊',
  },
  {
    name: 'UI/UX Specialist',
    role: 'Interactive Design',
    contribution:
      'Crafted the dark/light dynamic design tokens, wireframe layouts, and responsive components.',
    avatar: '🎨',
  },
]

export function TeamStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
      if (!cards.length || !containerRef.current) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      })

      // Set initial stacked position
      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: (i - 1) * 15,
          scale: 1 - Math.abs(i - 1) * 0.1,
          zIndex: 10 - Math.abs(i - 1),
          rotationY: (i - 1) * 25,
          opacity: 0.7,
        })
      })

      // Unfold team cards into horizontal formation
      tl.to(cards, {
        xPercent: i => (i - 1) * 105,
        scale: 1,
        rotationY: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      })
        // Fold them back towards the opposite direction when scrolling further down
        .to(cards, {
          xPercent: i => (1 - i) * 20,
          scale: 0.85,
          rotationY: i => (1 - i) * 30,
          opacity: 0.2,
          duration: 1.5,
          ease: 'power2.in',
        })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className='relative h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12'
    >
      <div className='text-center max-w-xl mx-auto mb-12 px-4'>
        <span className='text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20'>
          Project Contributors
        </span>
        <h2 className='text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mt-3'>
          The Team Behind Sakol Life
        </h2>
      </div>

      <div className='relative w-full max-w-xs sm:max-w-md h-[320px] px-4 [perspective:1000px] flex items-center justify-center'>
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            ref={el => {
              cardsRef.current[idx] = el
            }}
            className='absolute w-full rounded-2xl border border-border bg-card p-6 shadow-xl backdrop-blur-lg flex flex-col justify-between transition-colors duration-300'
          >
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <div className='text-4xl p-3 rounded-2xl bg-muted border border-border'>
                  {member.avatar}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-card-foreground'>
                    {member.name}
                  </h3>
                  <p className='text-xs font-mono text-primary font-medium'>
                    {member.role}
                  </p>
                </div>
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {member.contribution}
              </p>
            </div>

            <div className='pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground'>
              <span>MEMBER 0{idx + 1}</span>
              <span className='text-primary'>MIS FINAL YEAR</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
