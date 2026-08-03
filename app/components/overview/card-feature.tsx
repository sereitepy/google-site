'use client'

import { BookCopy, Brain, School } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CardFeature() {
  const data = [
    {
      id: 'personal-package',
      icon: Brain,
      title: 'Personal Package Quiz',
      desc: 'Find the right tech focus tailored to your strengths and interests using our data-driven quiz.',
    },
    {
      id: 'major-information',
      icon: BookCopy,
      title: 'Technology Majors',
      desc: 'Understand what each technology major teaches and the career paths each degree unlocks.',
    },
    {
      id: 'university-information',
      icon: School,
      title: 'University Information',
      desc: 'Access verified university details on tuition fees, scholarships, and campus facilities across Cambodia.',
    },
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4'>
      {data.map((item, index) => {
        const Icon = item.icon

        return (
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
            className='group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-xl'
          >
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300'>
                  <Icon size={22} />
                </div>
                <span className='text-xs font-mono text-muted-foreground font-semibold uppercase tracking-wider'>
                  0{index + 1}
                </span>
              </div>

              <h3 className='font-bold text-xl tracking-tight text-foreground'>
                {item.title}
              </h3>

              <p className='text-sm text-muted-foreground leading-relaxed'>
                {item.desc}
              </p>
            </div>

            <div className='mt-6 h-0.5 w-12 bg-primary/30 group-hover:w-full transition-all duration-300' />
          </motion.div>
        )
      })}
    </div>
  )
}
