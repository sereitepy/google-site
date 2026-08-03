'use client'

import { Button } from '@/components/ui/button'
import { Menu, X, ExternalLink, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const offset = 80
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between w-full'>
      {/* Brand Logo */}
      <div
        className='flex items-center gap-2 cursor-pointer group'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setMenuOpen(false)
        }}
      >
        <div className='w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
          S
        </div>
        <span className='font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors'>
          Sakol Life
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground'>
        <button
          onClick={() => scrollTo('project-overview')}
          className='px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-muted/60 transition-all cursor-pointer'
        >
          Overview
        </button>
        <button
          onClick={() => scrollTo('team-section')}
          className='px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-muted/60 transition-all cursor-pointer'
        >
          Team
        </button>

        <div className='h-4 w-px bg-border mx-2' />

        <Link href='/manuscript/chapter-1'>
          <Button
            variant='ghost'
            size='sm'
            className='gap-2 text-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 cursor-pointer'
          >
            <BookOpen size={15} />
            Manuscript
          </Button>
        </Link>

        <Link
          href='https://www.sakollife.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            size='sm'
            className='gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-xs cursor-pointer'
          >
            Visit Website
            <ExternalLink size={14} />
          </Button>
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className='md:hidden p-2 rounded-lg text-foreground hover:bg-muted border border-border/50'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle Menu'
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='absolute top-full left-0 right-0 bg-card border-b border-border flex flex-col gap-3 p-6 md:hidden shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200'>
          <button
            className='text-left px-3 py-2 rounded-md font-medium text-foreground hover:bg-muted'
            onClick={() => {
              scrollTo('project-overview')
              setMenuOpen(false)
            }}
          >
            Overview
          </button>
          <button
            className='text-left px-3 py-2 rounded-md font-medium text-foreground hover:bg-muted'
            onClick={() => {
              scrollTo('team-section')
              setMenuOpen(false)
            }}
          >
            Team
          </button>

          <div className='h-px bg-border my-1' />

          <Link href='/manuscript/chapter-1' onClick={() => setMenuOpen(false)}>
            <Button variant='outline' className='w-full justify-start gap-2'>
              <BookOpen size={16} />
              View Manuscript
            </Button>
          </Link>
          <Link
            href='https://www.sakollife.com/'
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => setMenuOpen(false)}
          >
            <Button className='w-full justify-start gap-2 bg-primary text-primary-foreground'>
              <ExternalLink size={16} />
              Visit Website
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
