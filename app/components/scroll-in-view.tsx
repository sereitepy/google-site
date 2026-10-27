'use client'

import type { ReactNode } from 'react'
import { useReducedMotion } from 'motion/react'
import { Effect, type SlideDirection } from '@/components/animate-ui/primitives/effects/effect'

const directions: SlideDirection[] = ['up', 'left', 'right', 'down']

export function ScrollInView({
  children,
  index = 0,
  className,
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Effect
      inView
      inViewOnce={false}
      inViewMargin='0px 0px -8% 0px'
      slide={prefersReducedMotion ? false : { direction: directions[index % directions.length], offset: 48 }}
      fade={!prefersReducedMotion}
      transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Effect>
  )
}
