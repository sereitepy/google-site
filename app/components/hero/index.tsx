import { GraduationCap } from 'lucide-react'
import LaptopMockup from './laptop-mockup'
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
      
      <LaptopMockup />
    </div>
  )
}
