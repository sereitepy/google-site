'use client'

import Hero from './components/hero'
import OverviewSection from './components/overview'
import TeamSection from './components/team'
import { ScrollReveal } from './components/scroll-reveal'
import { TextMarquee } from './components/text-marquee'

export default function Home() {
  return (
    <div className='relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden'>
      {/* Background Lights */}
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]' />
        <div className='absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[150px]' />
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col gap-24'>
        <Hero />

        <TextMarquee text='MIS FINAL YEAR PROJECT 2026 • CAMBODIA HIGHER EDUCATION' />

        <div className='max-w-4xl mx-auto py-12'>
          <p className='text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4'>
            The Mission
          </p>
          <ScrollReveal
            text='Sakol Life bridges the gap between high school graduation and higher education by leveraging vector math engines and data-driven recommendations.'
            className='text-2xl sm:text-4xl font-extrabold text-slate-200'
          />
        </div>

        <div id='project-overview' className='relative'>
          <OverviewSection />
        </div>

        <div id='team-section' className='relative py-12'>
          <TeamSection />
        </div>
      </div>
    </div>
  )
}
