import { BookCopy, Brain, School } from 'lucide-react'

export default function CardFeature() {
  const data = [
    {
      id: 'personal-package',
      icon: Brain,
      title: 'Personal Package Quiz',
      desc: 'Find the right tech focus tailored to your strengths and interests using our data-driven quiz',
    },
    {
      id: 'major-information',
      icon: BookCopy,
      title: 'Technology Majors',
      desc: 'Understand what each Technology majors will teach you and what future each degree will lead you to',
    },
    {
      id: 'university-information',
      icon: School,
      title: 'University Information',
      desc: 'Access to university details on tuition fees, scholarships, and campus facilities across Cambodia',
    },
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data.map(item => {
        const Icon = item.icon
        return (
          <section
            key={item.id}
            className='p-7 rounded-lg bg-background flex flex-col gap-3 hover:shadow-md'
          >
            <p className='bg-accent p-2 w-fit rounded-md'>
              <Icon size='18px' />
            </p>
            <h1 className='font-bold text-lg'>{item.title}</h1>
            <p className='text-sm pb-2'>{item.desc}</p>
            <p className='border-2 w-20 border-primary'></p>
          </section>
        )
      })}
    </div>
  )
}
