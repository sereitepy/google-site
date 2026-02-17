import { Button } from '@/components/ui/button'

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
        education. We specialize in the technology sector, helping you bridge
        the gap between high school and a successful tech university decision.
      </p>
      <section className='flex items-center gap-5'>
        <Button className='w-fit bg-accent-foreground hover:bg-foreground dark:hover:bg-chart-4'>
          Explore Majors
        </Button>
        <Button variant='outline' className='w-fit hover:bg-chart-4'>
          Learn More
        </Button>
      </section>
    </div>
  )
}
