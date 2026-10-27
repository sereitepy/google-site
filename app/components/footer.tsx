import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='border-t border-[#dce3d9] bg-[#f6f7f1]'>
      <div className='mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14'>
        <div>
          <p className='font-semibold text-[#405746]'>SakoLife · Project showcase</p>
          <p className='mt-1 text-xs text-[#829083]'>A student-centered guide to exploring a future in technology.</p>
        </div>
        <nav className='flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#718075]'>
          <Link href='/process' className='hover:text-[#3d5e46]'>Process</Link>
          <Link href='/build-notes' className='hover:text-[#3d5e46]'>Build notes</Link>
          <a href='https://www.sakollife.com/en' target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 hover:text-[#3d5e46]'>Live project <ArrowUpRight size={13} /></a>
          <span className='text-xs text-[#98a498]'>© 2026 SakoLife</span>
        </nav>
      </div>
    </footer>
  )
}
