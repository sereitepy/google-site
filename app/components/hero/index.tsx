'use client'

import { GraduationCap } from 'lucide-react'
import LaptopMockup from './laptop-mockup'
import TitleSection from './title'
import { motion } from 'framer-motion'
import { ScrollInView } from '@/app/components/scroll-in-view'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
      <ScrollInView index={1} className='lg:col-span-7'>
      <div className='flex flex-col gap-6'>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm hover:bg-primary/20 transition-colors cursor-default'>
            <GraduationCap className='h-4 w-4' />
            FINAL YEAR PROJECT 2025–2026
          </span>
        </motion.div>

        <TitleSection />
      </div>
      </ScrollInView>

      <ScrollInView index={2} className='lg:col-span-5 w-full'>
        <div className='w-full'>
          <LaptopMockup />
        </div>
      </ScrollInView>
    </div>
  )
}
