'use client'

import { usePathname } from 'next/navigation'
import { AppSidebar } from './app-sidebar'

export function ConditionalSidebar() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return <AppSidebar />
}
