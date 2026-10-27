'use client'

import { usePathname } from 'next/navigation'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './app-sidebar'

export function ConditionalSidebar() {
  const pathname = usePathname()

  if (!pathname.startsWith('/manuscript')) return null

  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  )
}
