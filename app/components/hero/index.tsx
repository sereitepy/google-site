// hero.tsx
import { GraduationCap } from 'lucide-react'
import Image from 'next/image'
import TitleSection from './title'

export default function Hero() {
  return (
    <div className='flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:items-center'>
      <section className='w-full lg:flex-6 lg:min-w-0'>
        <div className='flex flex-col gap-7'>
          <p className='rounded-full bg-primary w-fit px-3 py-1 text-sm font-medium text-secondary flex items-center gap-2 hover:ring-primary hover:ring-2 hover:ring-offset-2'>
            <GraduationCap size='20px' /> FINAL YEAR PROJECT 2025-2026
          </p>
          <TitleSection />
        </div>
      </section>

      <section className='hidden w-full lg:flex-4 lg:flex justify-center lg:justify-end hover:shadow-[0px_10px_1px_rgba(221,221,221,1),0_10px_20px_rgba(204,204,204,1)] shadow-primary/20 dark:shadow-accent rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <Image
          src='/images/hero2.webp'
          alt='hero'
          width={450}
          height={1000}
          className='w-full max-w-sm lg:max-w-none h-auto object-cover'
        />
      </section>
    </div>
  )
}
