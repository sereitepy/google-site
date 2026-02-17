import Hero from './components/hero'
import OverviewSection from './components/overview'
import TeamSection from './components/team'

export default function Home() {
  return (
    <div className='relative py-10 md:py-15 flex flex-col gap-10 md:gap-15'>
      <div className='px-10 md:px-20'>
        <Hero />
      </div>
      <div id='project-overview' className='bg-secondary px-10 md:px-20 py-10'>
        <OverviewSection />
      </div>
      <div id='team-section' className='px-10 md:px-20'>
        <TeamSection />
      </div>
    </div>
  )
}
