import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TitleSection() {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-medium text-3xl space-y-3'>
        <p className='font-extrabold text-5xl'>Sakol Life: </p>
        <p className='italic'>
          Web Platform Guiding High School Graduates into Higher Education in
          Cambodia
        </p>
      </h1>

      <p className='text-sidebar-accent-foreground'>
        The digital guide for Cambodian Students transitioning to higher
        education. We are MIS students, we can help you bridge the gap between
        high school and a successful tech university decision.
      </p>
      <section className='flex items-center gap-5'>
        <Link
          href='https://www.sakollife.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button className='w-fit bg-accent-foreground hover:bg-foreground dark:hover:bg-chart-4'>
            View Website
          </Button>
        </Link>
        <Link href='/manuscript/chapter-1'>
          <Button
            variant='outline'
            className='w-fit hover:bg-primary/30 cursor-pointer'
          >
            View Manuscript
          </Button>
        </Link>
      </section>
    </div>
  )
}
