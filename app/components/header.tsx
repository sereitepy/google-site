'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, BookOpen, Menu, X } from 'lucide-react'

const links = [
  { href: '/#project', label: 'The project' },
  { href: '/process', label: 'Process' },
  { href: '/build-notes', label: 'Build notes' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='relative mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14'>
      <Link href='/' className='group flex items-center gap-3' onClick={() => setMenuOpen(false)}>
        <span className='flex h-10 w-10 items-center justify-center rounded-2xl bg-[#526d56] font-serif text-lg text-white transition-transform group-hover:-rotate-3'>S</span>
        <span className='flex flex-col leading-tight'>
          <span className='font-semibold tracking-tight text-[#32473a]'>SakoLife</span>
          <span className='mt-1 text-[10px] uppercase tracking-[.16em] text-[#829083]'>Project showcase</span>
        </span>
      </Link>

      <nav className='hidden items-center gap-7 md:flex'>
        {links.map((link) => <Link key={link.href} href={link.href} className='text-sm font-medium text-[#6a796e] transition-colors hover:text-[#3d5e46]'>{link.label}</Link>)}
        <Link href='/manuscript/chapter-1' className='inline-flex items-center gap-2 rounded-full border border-[#d5dfd2] bg-white/70 px-4 py-2 text-sm font-semibold text-[#4d6751] transition-colors hover:bg-white'><BookOpen size={15} /> Manuscript</Link>
        <a href='https://www.sakollife.com/en' target='_blank' rel='noreferrer' className='inline-flex items-center gap-1.5 rounded-full bg-[#526d56] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#405c47]'>Open SakoLife <ArrowUpRight size={15} /></a>
      </nav>

      <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#d6dfd3] bg-white text-[#4e6752] md:hidden' onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {menuOpen && <nav className='absolute left-4 right-4 top-[68px] z-50 flex flex-col gap-1 rounded-2xl border border-[#dce4d9] bg-[#fbfcf8] p-3 shadow-xl md:hidden'>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className='rounded-xl px-4 py-3 text-sm font-medium text-[#506653] hover:bg-[#edf2ea]'>{link.label}</Link>)}
        <Link href='/manuscript/chapter-1' onClick={() => setMenuOpen(false)} className='rounded-xl px-4 py-3 text-sm font-medium text-[#506653] hover:bg-[#edf2ea]'>Project manuscript</Link>
        <a href='https://www.sakollife.com/en' target='_blank' rel='noreferrer' onClick={() => setMenuOpen(false)} className='mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#526d56] px-4 py-3 text-sm font-semibold text-white'>Open SakoLife <ArrowUpRight size={15} /></a>
      </nav>}
    </div>
  )
}
