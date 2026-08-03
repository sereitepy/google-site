'use client'

import { usePathname } from 'next/navigation'
import Header from './header'

export default function ConditionalHeader() {
  const pathname = usePathname()

  if (pathname.includes('manuscript')) return null

  return (
    <header className='sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl transition-colors duration-300'>
      <Header />
    </header>
  )
}
