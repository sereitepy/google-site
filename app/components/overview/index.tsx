import CardFeature from './card-feature'

export default function OverviewSection() {
  return (
    <div className='flex items-center flex-col gap-10 justify-center'>
      <div className='flex items-center flex-col gap-3 justify-center md:px-4'>
        <h1 className='text-2xl font-bold text-center'>Project Overview</h1>
        <p className='w-full md:text-center text-sidebar-accent-foreground'>
          Empowering students to figure out their best matched technology major,
          and picking the right university for their Bachelor&apos;s Degree
          through our &quot;Personal Package&quot; survey.
        </p>
      </div>
      <CardFeature />
    </div>
  )
}
