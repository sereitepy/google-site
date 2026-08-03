'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, ExternalLink } from 'lucide-react'
import { Variants } from 'framer-motion'

export default function TitleSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const, // <-- Fix here
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='flex flex-col gap-6 max-w-2xl'
    >
      <motion.h1
        variants={itemVariants}
        className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]'
      >
        <span className='bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent'>
          Sakol Life
        </span>
        <span className='block text-xl sm:text-2xl lg:text-3xl font-normal italic text-muted-foreground mt-3'>
          Guiding Cambodian High School Graduates into Higher Education.
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className='text-base sm:text-lg text-muted-foreground leading-relaxed'
      >
        The ultimate digital navigation platform. Developed by MIS students to
        bridge the decision gap between high school completion and choosing the
        right tech university.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className='flex flex-wrap items-center gap-4 pt-2'
      >
        <Link
          href='https://www.sakollife.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            size='lg'
            className='group relative overflow-hidden rounded-full px-7 font-medium shadow-lg transition-all duration-300 hover:shadow-primary/25 hover:scale-[1.02]'
          >
            <span>Visit Website</span>
            <ExternalLink size={14} />
            {/* <ArrowUpRight className='ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' /> */}
          </Button>
        </Link>
        <Link href='/manuscript/chapter-1'>
          <Button
            size='lg'
            variant='outline'
            className='rounded-full px-7 font-medium backdrop-blur-md border-border/60 hover:bg-accent/50 hover:scale-[1.02] transition-all'
          >
            <BookOpen className=' h-4 w-4 text-muted-foreground' />
            Read Manuscript
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
