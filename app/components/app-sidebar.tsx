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
    return (
      <Collapsible className='group/sub-collapsible'>
        <SidebarMenuSubItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuSubButton className='cursor-pointer'>
              <span className='truncate'>{item.title}</span>
              <ChevronRight className='ml-auto size-3.5 shrink-0 transition-transform group-data-[state=open]/sub-collapsible:rotate-90' />
            </SidebarMenuSubButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub className='mr-0 border-l pl-2'>
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
          'transition-all duration-200 ease-in-out relative pl-3',
          isCurrentlyReading
            ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-1 before:rounded-r-full before:bg-primary'
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
      ch.sections.forEach(sec => {
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
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <GraduationCap className='size-4.5' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>Sakol Life</span>
                  <span className='truncate text-xs text-sidebar-foreground/60'>
                    Manuscript
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Front matter */}
        {/* <SidebarGroup>
          <SidebarGroupLabel>Front Matter</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {frontMatter.map(item => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === '/manuscript/front-matter'}
                  >
                    <Link href={item.href}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        {/* Chapters */}
        <SidebarGroup>
          <SidebarGroupLabel>Chapters</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chapters.map(chapter => {
                const chapterPath = `/manuscript/${chapter.slug}`
                const isActiveChapter = pathname === chapterPath

                return (
                  <Collapsible
                    key={chapter.slug}
                    defaultOpen={isActiveChapter}
                    className='group/collapsible'
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className='cursor-pointer'
                          isActive={isActiveChapter}
                        >
                          <span className='truncate'>{chapter.title}</span>
                          <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <Link href={chapterPath}>
                                <span className='font-medium'>
                                  Go to chapter
                                </span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          {chapter.sections.map(section => (
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

        {/* Back matter */}
        {/* <SidebarGroup>
          <SidebarGroupLabel>References & Appendices</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={backMatter[0].href}>
                    <span>{backMatter[0].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible className='group/collapsible'>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className='cursor-pointer'>
                      <span>Appendices</span>
                      <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {appendixItems.map(item => (
                        <SubItem
                          key={item.anchor}
                          item={item}
                          basePath='/manuscript/back-matter'
                          activeAnchor={activeAnchor}
                        />
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
