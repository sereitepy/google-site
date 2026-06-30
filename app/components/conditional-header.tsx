'use client'

import { usePathname } from 'next/navigation'
import Header from './header'

export default function ConditionalHeader() {
  const pathname = usePathname()

  if (pathname.includes('manuscript')) return null

  return (
    <div className='sticky top-0 shadow-xs shadow-sidebar-ring z-10'>
      <Header />
    </div>
  )
}
