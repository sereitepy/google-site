'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
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
    <div className='px-6 lg:px-10 p-3 flex items-center justify-between bg-accent relative'>
      <h1
        className='text-primary font-bold text-xl cursor-pointer'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setMenuOpen(false)
        }}
      >
        Sakol Life
      </h1>

      {/* Desktop nav */}
      <div className='hidden md:flex items-center gap-7 font-medium'>
        <h3
          className='cursor-pointer'
          onClick={() => scrollTo('project-overview')}
        >
          Overview
        </h3>
        <h3 className='cursor-pointer' onClick={() => scrollTo('team-section')}>
          Team
        </h3>
        <h3
          className='cursor-pointer'
          onClick={() => scrollTo('project-resource')}
        >
          Resources
        </h3>
        <Button>Get Started</Button>
      </div>
      {/* Mobile hamburger */}
      <button className='md:hidden p-2' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className='absolute top-full left-0 right-0 bg-accent flex flex-col items-start gap-4 px-6 py-5 font-medium md:hidden z-50 shadow-md'>
          <h3
            className='cursor-pointer'
            onClick={() => {
              scrollTo('project-overview')
              setMenuOpen(false)
            }}
          >
            Overview
          </h3>
          <h3
            className='cursor-pointer'
            onClick={() => {
              scrollTo('team-section')
              setMenuOpen(false)
            }}
          >
            Team
          </h3>
          <h3
            className='cursor-pointer'
            onClick={() => {
              scrollTo('project-resource')
              setMenuOpen(false)
            }}
          >
            Resources
          </h3>
          <Button className='w-full'>Get Started</Button>
        </div>
      )}
    </div>
  )
}
