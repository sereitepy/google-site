import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, BookOpen, Compass, Layers3, MapPin, Sparkles } from 'lucide-react'

const features = [
  {
    number: '01',
    icon: Compass,
    title: 'Start with the student',
    text: 'A short interest quiz turns a broad question — “what should I study?” — into a more personal starting point.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Make options feel clearer',
    text: 'Recommendations connect student interests to technology majors, with room to explore why each path could fit.',
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Bring local details together',
    text: 'University profiles help students compare practical details like tuition, admissions, scholarships, and facilities.',
  },
]

const stages = [
  ['01', 'Discover', 'Understand the uncertainty students face when choosing a technology degree.'],
  ['02', 'Shape', 'Turn research into a focused quiz, major guide, and university discovery journey.'],
  ['03', 'Build', 'Create a responsive experience that makes information easier to find and compare.'],
  ['04', 'Reflect', 'Review what works today, what is still limited, and where the product can grow.'],
]

export default function Home() {
  return (
    <div className='bg-[#f6f7f1] text-[#26372f]'>
      <section className='relative overflow-hidden border-b border-[#dce3d9]'>
        <div className='pointer-events-none absolute -right-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-[#dfe9dc] blur-3xl' />
        <div className='relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.03fr_.97fr] lg:px-14 lg:py-28'>
          <div className='max-w-2xl'>
            <div className='mb-7 inline-flex items-center gap-2 rounded-full border border-[#cbd8ca] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[#5f765f]'>
              <span className='h-2 w-2 rounded-full bg-[#799477]' />
              A student-centered capstone project
            </div>
            <h1 className='max-w-xl font-serif text-5xl leading-[1.04] tracking-[-.045em] text-[#25362d] sm:text-6xl lg:text-7xl'>
              A clearer path to a future in tech.
            </h1>
            <p className='mt-7 max-w-xl text-lg leading-8 text-[#607066] sm:text-xl'>
              SakoLife helps Cambodian students explore technology majors and discover university information — all in one thoughtful place.
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link href='/process' className='inline-flex items-center justify-center gap-2 rounded-full bg-[#526d56] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#405c47]'>
                Explore the project <ArrowRight size={16} />
              </Link>
              <a href='https://www.sakollife.com/en' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-full border border-[#bdcdbd] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#415d48] transition-colors hover:bg-white'>
                Visit SakoLife ↗
              </a>
            </div>
            <a href='#project' className='mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#7c8c7d]'>
              Scroll to explore <ArrowDown size={14} />
            </a>
          </div>

          <div className='relative mx-auto w-full max-w-[610px]'>
            <div className='absolute -left-5 top-12 hidden h-28 w-28 rounded-full border border-[#cfdbcd] sm:block' />
            <div className='relative rounded-[2rem] border border-white bg-[#e8eee4] p-3 shadow-[0_28px_80px_-35px_rgba(45,72,51,.35)] sm:p-5'>
              <div className='overflow-hidden rounded-[1.35rem] border border-[#d8e0d5] bg-white'>
                <Image src='/images/sakol-life-homepage.png' alt='Preview of the SakoLife student guidance platform' width={1200} height={800} priority className='h-auto w-full object-cover' />
              </div>
              <div className='absolute -bottom-5 left-5 max-w-[250px] rounded-2xl border border-[#e0e6dc] bg-white p-4 shadow-xl sm:-left-8 sm:bottom-8'>
                <p className='text-[10px] font-bold uppercase tracking-[.18em] text-[#80917e]'>Built around a real question</p>
                <p className='mt-2 font-serif text-lg leading-snug text-[#33493a]'>“Which technology major is right for me?”</p>
              </div>
              <div className='absolute -right-3 -top-4 rounded-full border border-[#d6e1d1] bg-[#f8faf5] px-4 py-2 text-xs font-semibold text-[#59765d] shadow-md sm:-right-5 sm:top-8'>12-question quiz</div>
            </div>
          </div>
        </div>
      </section>

      <section id='project' className='mx-auto max-w-7xl scroll-mt-24 px-6 py-20 sm:px-10 lg:px-14 lg:py-28'>
        <div className='grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20'>
          <div>
            <p className='text-xs font-bold uppercase tracking-[.2em] text-[#758a76]'>The project, at a glance</p>
            <h2 className='mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-.03em] sm:text-5xl'>More than a list of universities.</h2>
          </div>
          <div className='max-w-2xl'>
            <p className='text-lg leading-8 text-[#66766b]'>Choosing a degree can feel overwhelming when useful information is scattered. SakoLife brings together a guided way to explore technology majors and Cambodian universities, so students can take their next step with more confidence.</p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <span className='rounded-full bg-[#e7ede3] px-4 py-2 text-sm font-medium text-[#536b57]'>Interest-led discovery</span>
              <span className='rounded-full bg-[#e7ede3] px-4 py-2 text-sm font-medium text-[#536b57]'>Technology majors</span>
              <span className='rounded-full bg-[#e7ede3] px-4 py-2 text-sm font-medium text-[#536b57]'>Cambodian universities</span>
            </div>
          </div>
        </div>

        <div className='mt-14 grid gap-4 md:grid-cols-3'>
          {features.map(({ number, icon: Icon, title, text }) => (
            <article key={number} className='rounded-3xl border border-[#dce4d9] bg-white/75 p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8'>
              <div className='flex items-center justify-between'>
                <span className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf0e7] text-[#66816a]'><Icon size={20} /></span>
                <span className='font-mono text-xs text-[#9aa99a]'>{number}</span>
              </div>
              <h3 className='mt-7 font-serif text-2xl text-[#35493a]'>{title}</h3>
              <p className='mt-3 leading-7 text-[#718075]'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='border-y border-[#dce3d9] bg-[#edf1e9]'>
        <div className='mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-14 lg:py-24'>
          <div>
            <p className='text-xs font-bold uppercase tracking-[.2em] text-[#758a76]'>Behind the build</p>
            <h2 className='mt-5 font-serif text-4xl leading-tight tracking-[-.03em] sm:text-5xl'>Every good product starts with a question.</h2>
            <p className='mt-5 max-w-md leading-7 text-[#68796d]'>Follow the decisions behind SakoLife — from understanding the student challenge to shaping, building, and reflecting on the experience.</p>
            <Link href='/process' className='mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4e6b53] hover:text-[#304a36]'>Read the project process <ArrowRight size={16} /></Link>
          </div>
          <div className='grid gap-3 sm:grid-cols-2'>
            {stages.map(([number, title, text]) => (
              <div key={number} className='rounded-2xl border border-[#d6dfd3] bg-[#f8faf5] p-6'>
                <div className='flex items-center gap-3'><span className='font-mono text-xs text-[#8a9b88]'>{number}</span><span className='h-px flex-1 bg-[#dce4d9]' /></div>
                <h3 className='mt-5 font-serif text-2xl text-[#3b5140]'>{title}</h3>
                <p className='mt-2 text-sm leading-6 text-[#738176]'>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-24'>
        <div className='flex flex-col justify-between gap-8 rounded-[2rem] bg-[#405b47] p-8 text-white sm:p-12 lg:flex-row lg:items-center'>
          <div className='max-w-2xl'>
            <div className='flex items-center gap-2 text-sm font-medium text-[#d4e1d2]'><Layers3 size={16} /> Learn how it came together</div>
            <h2 className='mt-4 font-serif text-3xl leading-tight sm:text-4xl'>Explore the thinking, tools, and lessons behind the project.</h2>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Link href='/build-notes' className='inline-flex items-center justify-center gap-2 rounded-full bg-[#f6f7f1] px-6 py-3.5 text-sm font-semibold text-[#3c5943] hover:bg-white'>
              <BookOpen size={16} /> Read build notes
            </Link>
            <Link href='/manuscript/chapter-1' className='inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10'>View manuscript</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
