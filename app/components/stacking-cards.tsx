'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface CardData {
  title: string
  subtitle: string
  description: string
  tag: string
  icon: string
}

const OVERVIEW_CARDS: CardData[] = [
  {
    title: 'Vector Recommendations',
    subtitle: 'Cosine Similarity Matching',
    description:
      'Maps student RIASEC holland codes directly into 6D curriculum target matrices to deliver precise university major fits.',
    tag: 'Core Engine',
    icon: '🎯',
  },
  {
    title: 'Interactive Quiz Suite',
    subtitle: 'Step-by-step Assessment',
    description:
      'Dynamic drag-and-sort card panels that capture student academic strengths, interests, and budget constraints.',
    tag: 'Student Interface',
    icon: '⚡',
  },
  {
    title: 'Localized Major Catalog',
    subtitle: 'Cambodia Higher Ed Database',
    description:
      'Comprehensive directory mapping local tech universities, tuition ranges, scholarship options, and career pathways.',
    tag: 'Database Matrix',
    icon: '🏛️',
  },
]

export function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
      if (!cards.length || !containerRef.current) return

      // Create a master timeline locked to the scrollbar
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%', // Extends scroll space to make pinning feel smooth
          scrub: 1, // Bi-directional scrubbing (reverses on scroll up)
          pin: true, // Locks cards in screen center during phase
          anticipatePin: 1,
        },
      })

      // Initial state: Cards are stacked underneath with offset depth
      cards.forEach((card, i) => {
        if (i !== 0) {
          gsap.set(card, {
            yPercent: 120,
            scale: 0.9 - i * 0.05,
            rotationX: -15,
            opacity: 0,
          })
        }
      })

      // Animate card stack entrance & fold-out progression
      cards.forEach((card, index) => {
        if (index === 0) {
          // Card 0 folds away upward as Card 1 arrives
          tl.to(
            card,
            {
              scale: 0.9,
              yPercent: -15,
              rotationX: 10,
              opacity: 0.4,
              duration: 1,
              ease: 'power2.inOut',
            },
            'phase-1'
          )
        } else if (index === 1) {
          // Card 1 enters center
          tl.to(
            card,
            {
              yPercent: 0,
              scale: 1,
              rotationX: 0,
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
            },
            'phase-1'
          )
            // Card 1 folds away as Card 2 arrives
            .to(
              card,
              {
                scale: 0.92,
                yPercent: -12,
                rotationX: 10,
                opacity: 0.5,
                duration: 1,
                ease: 'power2.inOut',
              },
              'phase-2'
            )
        } else if (index === 2) {
          // Card 2 enters center
          tl.to(
            card,
            {
              yPercent: 0,
              scale: 1,
              rotationX: 0,
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
            },
            'phase-2'
          )
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className='relative h-screen w-full flex flex-col items-center justify-center overflow-hidden py-10'
    >
      <div className='text-center max-w-xl mx-auto mb-8 px-4'>
        <span className='text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20'>
          System Platform Highlights
        </span>
        <h2 className='text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mt-3'>
          Architected for Discovery
        </h2>
      </div>

      {/* 3D Perspective Container */}
      <div className='relative w-full max-w-xl h-[380px] sm:h-[340px] px-4 [perspective:1200px]'>
        {OVERVIEW_CARDS.map((card, idx) => (
          <div
            key={idx}
            ref={el => {
              cardsRef.current[idx] = el
            }}
            className='absolute inset-x-4 top-0 h-full rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between transition-colors duration-300'
          >
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-3xl'>{card.icon}</span>
                <span className='text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full'>
                  {card.tag}
                </span>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-card-foreground tracking-tight'>
                  {card.title}
                </h3>
                <p className='text-xs font-mono text-primary/80 mt-1'>
                  {card.subtitle}
                </p>
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {card.description}
              </p>
            </div>

            <div className='pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground'>
              <span>FEATURED MODULE 0{idx + 1}</span>
              <span className='text-primary font-bold'>SAKOL LIFE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
