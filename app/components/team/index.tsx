'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TeamSection() {
  const data = [
    {
      id: 'sereitepy-or',
      name: 'Sereitepy Or',
      image: '/images/professional-tepy.png',
      role: 'Full-Stack Developer',
    },
    {
      id: 'visal',
      name: 'Ratanakvisal Chhouk',
      image: '/images/visal.jpg',
      role: 'Market Researcher',
    },
    {
      id: 'reaksmey',
      name: 'Reaksmey Meas',
      image: '/images/reaksmey.jpg',
      role: 'Project Researcher',
    },
  ]

  return (
    <div className='flex flex-col gap-10 items-center w-full'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 100, damping: 18 }}
        className='text-center max-w-md space-y-3 px-4'
      >
        <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground'>
          Our Team
        </h2>
        <p className='text-muted-foreground text-base'>
          The creative minds and researchers behind Sakol Life
        </p>
      </motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl'>
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 45, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.35 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 18,
              delay: index * 0.12,
            }}
            whileHover={{ y: -8 }}
            className='group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:border-primary/40'
          >
            <div className='relative w-32 h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-primary/30 via-border to-primary/50 mb-4 group-hover:scale-105 transition-transform duration-300'>
              <div className='relative w-full h-full rounded-full overflow-hidden'>
                <Image
                  src={item.image}
                  fill
                  alt={item.name}
                  className='object-cover object-top transition-transform duration-500 group-hover:scale-110'
                />
              </div>
            </div>

            <h3 className='font-bold text-lg text-foreground group-hover:text-primary transition-colors'>
              {item.name}
            </h3>
            <p className='text-xs font-medium text-muted-foreground mt-2 px-3 py-1 bg-muted rounded-full border border-border'>
              {item.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
