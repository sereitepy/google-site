'use client'

import Image from 'next/image'
import { useEffect, useRef, type ReactNode } from 'react'
import { motion, useReducedMotion, useSpring } from 'framer-motion'

const SWAY_DEGREES = 1.2 // how far the big image tilts left/right

type FloatItemProps = {
  /** Positioning classes, e.g. "-left-8 bottom-8". "absolute" is added for you. */
  className?: string
  children: ReactNode
  /** Max px the item slides away from the cursor */
  strength?: number
  /** Extra px beyond the item's own size that still triggers the dodge */
  reach?: number
  /** Idle up/down float in px */
  bob?: number
  bobDuration?: number
  bobDelay?: number
}

/**
 * A floating element that gently bobs while idle and slides away from the cursor.
 * The outer wrapper never moves, so the cursor distance stays stable (no flicker).
 */
function FloatItem({
  className = '',
  children,
  strength = 70,
  reach = 60,
  bob = 6,
  bobDuration = 5,
  bobDelay = 0,
}: FloatItemProps) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 120, damping: 15, mass: 0.7 })
  const y = useSpring(0, { stiffness: 120, damping: 15, mass: 0.7 })

  useEffect(() => {
    if (reduceMotion) return
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      const dist = Math.hypot(dx, dy) || 1
      const radius = Math.max(rect.width, rect.height) / 2 + reach

      if (dist >= radius) {
        x.set(0)
        y.set(0)
        return
      }
      // Closer cursor = stronger push, directly away from the cursor
      const push = (1 - dist / radius) * strength * 1.6
      const capped = Math.min(push, strength)
      x.set((-dx / dist) * capped)
      y.set((-dy / dist) * capped)
    }
    const reset = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener('pointermove', onMove)
    document.documentElement.addEventListener('pointerleave', reset)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', reset)
    }
  }, [reduceMotion, reach, strength, x, y])

  return (
    <div ref={ref} className={`absolute ${className}`}>
      <motion.div style={{ x, y }}>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -bob, 0] }}
          transition={{
            duration: bobDuration,
            delay: bobDelay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

function Bubble({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-11 w-11 items-center justify-center rounded-full border border-[#d6e1d1] bg-white text-[#59765d] shadow-lg'>
      {children}
    </div>
  )
}

function PreviewCollage() {
  const reduceMotion = useReducedMotion()

  return (
    <div className='mx-auto flex w-full max-w-[700px] items-center justify-center p-6 sm:p-14'>
      <div className='relative mx-auto w-full max-w-[610px]'>
        <div className='absolute -left-5 top-12 hidden h-28 w-28 rounded-full border border-[#cfdbcd] sm:block' />

        {/* Big image card: only a tiny, slow sway */}
        <motion.div
          initial={{ rotate: -SWAY_DEGREES }}
          animate={
            reduceMotion ? undefined : { rotate: [-SWAY_DEGREES, SWAY_DEGREES] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className='relative rounded-[2rem] border border-white bg-[#e8eee4] p-3 shadow-[0_28px_80px_-35px_rgba(45,72,51,.35)] sm:p-5'
        >
          <div className='overflow-hidden rounded-[1.35rem] border border-[#d8e0d5] bg-white'>
            <Image
              src='/images/sakol-life-homepage.png'
              alt='Preview of the SakoLife student guidance platform'
              width={1200}
              height={800}
              priority
              className='h-auto w-full object-cover'
            />
          </div>
        </motion.div>

        {/* Floating pieces: these slide away from the cursor */}
        <FloatItem
          className='-bottom-6 left-3 sm:-bottom-10 sm:-left-16'
          strength={80}
          bobDuration={6}
        >
          <div className='max-w-[250px] rounded-2xl border border-[#e0e6dc] bg-white p-4 shadow-xl'>
            <p className='text-[10px] font-bold uppercase tracking-[.18em] text-[#80917e]'>
              Built around a real question
            </p>
            <p className='mt-2 font-serif text-lg leading-snug text-[#33493a]'>
              “Which technology major is right for me?”
            </p>
          </div>
        </FloatItem>

        <FloatItem
          className='-right-3 -top-4 sm:-right-14 sm:top-3'
          strength={70}
          bobDuration={4.5}
          bobDelay={0.6}
        >
          <div className='rounded-full border border-[#d6e1d1] bg-[#f8faf5] px-4 py-2 text-xs font-semibold text-[#59765d] shadow-md'>
            12-question quiz
          </div>
        </FloatItem>

        <FloatItem
          className='hidden sm:-left-14 sm:-top-12 sm:block'
          strength={90}
          bobDuration={5.5}
          bobDelay={1.2}
        >
          <div className='w-[190px] rounded-2xl border border-[#e0e6dc] bg-white p-3.5 shadow-xl'>
            <p className='text-xs font-semibold text-[#80917e]'>Top match</p>
            <p className='mt-1 font-serif text-base leading-tight text-[#33493a]'>
              Management Information Systems
            </p>
            <div className='mt-2.5 h-1.5 rounded-full bg-[#e8eee4]'>
              <div className='h-full w-[86%] rounded-full bg-[#7fa383]' />
            </div>
            <p className='mt-1.5 text-[11px] text-[#80917e]'>86% fit</p>
          </div>
        </FloatItem>

        <FloatItem
          className='hidden sm:-right-16 sm:bottom-28 sm:block'
          strength={85}
          bobDuration={6.5}
          bobDelay={0.3}
        >
          <div className='rounded-2xl border border-[#d6e1d1] bg-[#f8faf5] px-4 py-3 shadow-lg'>
            <p className='text-xs font-semibold text-[#59765d]'>
              Question 7 of 12
            </p>
            <div className='mt-2 h-1 w-28 rounded-full bg-[#dfe8da]'>
              <div className='h-full w-[58%] rounded-full bg-[#59765d]' />
            </div>
          </div>
        </FloatItem>

        {/* Small icon bubbles */}
        <FloatItem
          className='left-[6%] top-[84%] sm:left-[3%] sm:top-[76%]'
          strength={110}
          reach={50}
          bob={9}
          bobDuration={4}
          bobDelay={0.9}
        >
          <Bubble>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <polyline points='16 18 22 12 16 6' />
              <polyline points='8 6 2 12 8 18' />
            </svg>
          </Bubble>
        </FloatItem>

        <FloatItem
          className='right-[8%] top-[52%] sm:right-[2%] sm:top-[56%]'
          strength={110}
          reach={50}
          bob={8}
          bobDuration={4.8}
          bobDelay={0.2}
        >
          <Bubble>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <path d='M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z' />
              <path d='M19 17l.7 1.8L21.5 19.5l-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7L19 17z' />
            </svg>
          </Bubble>
        </FloatItem>

        <FloatItem
          className='hidden sm:right-[6%] sm:-top-9 sm:block'
          strength={100}
          reach={50}
          bob={7}
          bobDuration={5.2}
          bobDelay={1.5}
        >
          <Bubble>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <circle cx='12' cy='12' r='9' />
              <polygon points='15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5' />
            </svg>
          </Bubble>
        </FloatItem>
      </div>
    </div>
  )
}

export default function MaintenancePage() {
  return (
    <main className='fixed inset-0 z-[9999] overflow-hidden p-10 bg-[#f4f7f1] text-[#33493a]'>
      {/* Soft background rings, same language as the preview card */}
      <div className='pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#dbe5d8]' />
      <div className='pointer-events-none absolute -bottom-52 -right-40 h-[560px] w-[560px] rounded-full border border-[#dbe5d8]' />

      <div className='relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-6 overflow-y-auto px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10 lg:overflow-visible'>
        <section className='max-w-xl lg:justify-self-start'>
          {/* Ribbon flag with a swallowtail end */}
          <div className='inline-block drop-shadow-[0_6px_10px_rgba(45,72,51,.2)]'>
            <div
              className='inline-flex items-center gap-2.5 bg-[#4d6b53] py-2.5 pl-4 pr-9 text-xs font-semibold text-white'
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 0 100%)',
              }}
            >
              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
                <line x1='4' y1='22' x2='4' y2='15' />
              </svg>
              Under maintenance
            </div>
          </div>

          <h1 className='mt-6 font-serif text-4xl leading-[1.1] text-[#2d4833] sm:text-5xl lg:text-6xl'>
            This Google Site is currently under maintenance.
          </h1>

          <p className='mt-5 max-w-md text-base leading-relaxed text-[#5f7364] sm:text-lg'>
            Everything you need is on our project website. Head over there to
            explore and know what our project is all about.
          </p>

          <a
            href='https://www.sakollife.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#33493a] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(45,72,51,.7)] transition hover:bg-[#246532] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#59765d]'
          >
            Visit sakollife.com
          </a>
        </section>

        <PreviewCollage />
      </div>
    </main>
  )
}
