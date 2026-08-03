'use client'

import * as React from 'react'
import { ChevronRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useActiveAnchor } from '@/hooks/use-active-anchor'
import { cn } from '@/lib/utils'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import {
  appendixItems,
  backMatter,
  chapters,
  frontMatter,
  type ManuscriptSubItem,
} from '@/lib/manuscript-data'

function SubItem({
  item,
  basePath,
  activeAnchor,
}: {
  item: ManuscriptSubItem
  basePath: string
  activeAnchor: string
}) {
  const isCurrentlyReading = activeAnchor === item.anchor

  if (item.children?.length) {
    const hasActiveChild = item.children.some(
      child => child.anchor === activeAnchor
    )

    return (
      <Collapsible
        defaultOpen={hasActiveChild}
        className='group/sub-collapsible'
      >
        <SidebarMenuSubItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuSubButton className='cursor-pointer text-sidebar-foreground/80 hover:text-sidebar-foreground'>
              <span className='truncate'>{item.title}</span>
              <ChevronRight className='ml-auto size-3.5 shrink-0 transition-transform group-data-[state=open]/sub-collapsible:rotate-90' />
            </SidebarMenuSubButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub className='mr-0 border-l border-sidebar-border/60 pl-2 my-1 space-y-0.5'>
              {item.children.map(child => (
                <SubItem
                  key={child.anchor}
                  item={child}
                  basePath={basePath}
                  activeAnchor={activeAnchor}
                />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuSubItem>
      </Collapsible>
    )
  }

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton
        asChild
        className={cn(
          'transition-all duration-200 ease-in-out relative pl-3 rounded-md text-xs',
          isCurrentlyReading
            ? 'bg-primary/15 text-primary font-semibold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-1 before:rounded-r-full before:bg-primary'
            : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
        )}
      >
        <Link href={`${basePath}#${item.anchor}`}>
          <span className='truncate'>{item.title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  )
}

export function AppSidebar() {
  const pathname = usePathname()

  // Gather all section anchors from chapters to monitor viewport presence
  const allAnchors = React.useMemo(() => {
    const anchors: string[] = []
    chapters.forEach(ch => {
      ch.sections?.forEach(sec => {
        anchors.push(sec.anchor)
        if (sec.children) {
          sec.children.forEach(sub => anchors.push(sub.anchor))
        }
      })
    })
    return anchors
  }, [])

  const activeAnchor = useActiveAnchor(allAnchors)

  return (
    <Sidebar className='border-r border-sidebar-border bg-sidebar'>
      <SidebarHeader className='border-b border-sidebar-border/50 p-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/' className='flex items-center gap-3'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shadow-xs'>
                  <GraduationCap className='size-5' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-bold text-foreground'>
                    Sakol Life
                  </span>
                  <span className='truncate text-xs text-muted-foreground'>
                    Interactive Manuscript
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className='px-2 py-4'>
        <SidebarGroup>
          <SidebarGroupLabel className='text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2'>
            Manuscript Chapters
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className='space-y-1'>
              {chapters.map(chapter => {
                const chapterPath = `/manuscript/${chapter.slug}`
                const isActiveChapter = pathname === chapterPath

                // Check if any section inside this chapter is currently active
                const containsActiveAnchor = chapter.sections?.some(
                  sec =>
                    sec.anchor === activeAnchor ||
                    sec.children?.some(sub => sub.anchor === activeAnchor)
                )

                return (
                  <Collapsible
                    key={chapter.slug}
                    defaultOpen={isActiveChapter || containsActiveAnchor}
                    className='group/collapsible'
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={cn(
                            'cursor-pointer w-full justify-between font-medium transition-colors',
                            isActiveChapter
                              ? 'bg-sidebar-accent text-primary font-semibold'
                              : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                          )}
                          isActive={isActiveChapter}
                        >
                          <span className='truncate'>{chapter.title}</span>
                          <ChevronRight className='ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className='mr-0 border-l border-sidebar-border/60 ml-3 pl-2 my-1 space-y-1'>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                              asChild
                              className={cn(
                                'text-xs font-semibold hover:text-primary',
                                isActiveChapter && !activeAnchor
                                  ? 'text-primary'
                                  : 'text-muted-foreground'
                              )}
                            >
                              <Link href={chapterPath}>
                                <span>Chapter Overview</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          {chapter.sections?.map(section => (
                            <SubItem
                              key={section.anchor}
                              item={section}
                              basePath={chapterPath}
                              activeAnchor={activeAnchor}
                            />
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className='border-t border-sidebar-border/50 p-4 text-xs text-muted-foreground text-center'>
        © Sakol Life Research
      </SidebarFooter>
    </Sidebar>
  )
}
