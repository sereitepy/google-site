import Image from 'next/image'

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
    <div className='flex flex-col gap-10'>
      <section className='flex flex-wrap justify-center gap-6'>
        {data.map(item => (
          <div key={item.id} className='flex flex-col gap-3 w-50'>
            <div className='overflow-hidden rounded-lg'>
              <Image
                src={item.image}
                width={200}
                height={200}
                alt={item.role}
                className='w-full h-50 object-cover object-top rounded-lg hover:scale-110 transform transition-all duration-200 ease-in-out'
              />
            </div>
            <span>
              <h1 className='font-bold'>{item.name}</h1>
              <p className='text-sidebar-accent-foreground text-sm'>
                {item.role}
              </p>
            </span>
          </div>
        ))}
      </section>

      <section className='order-first text-center'>
        <h1 className='text-2xl font-bold'>Our Team</h1>
        <p className='text-sidebar-accent-foreground'>
          The creative minds behind Sakol Life
        </p>
      </section>
    </div>
  )
}
