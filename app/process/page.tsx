import Link from 'next/link'
import { ArrowLeft, ArrowRight, Compass, DraftingCompass, Lightbulb, Search, Wrench } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover the student challenge',
    question: 'Where does the uncertainty begin?',
    body: 'The starting point is a familiar gap: students deciding what to study often have to search across disconnected sources. The project focuses on making technology study options easier to understand and compare in a Cambodian context.',
    outcome: 'A clear audience: students exploring a technology degree and their next education step.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Define a useful first version',
    question: 'What would help someone move forward?',
    body: 'Rather than trying to answer every career question, SakoLife centers on three connected tasks: reflect on interests, explore relevant technology majors, and find universities offering them.',
    outcome: 'A focused product journey: quiz → recommendations → university information.',
  },
  {
    number: '03',
    icon: DraftingCompass,
    title: 'Design the information journey',
    question: 'How can choices feel less intimidating?',
    body: 'The experience gives students a guided entry point, then lets them browse at their own pace. Major explanations and practical university details turn a recommendation into something students can investigate further.',
    outcome: 'A balance of guided discovery and open-ended browsing.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Build, test, and keep learning',
    question: 'What needs to work in the real world?',
    body: 'The web experience brings the quiz and education information together in one accessible platform. As coverage grows, recommendations and university details can become more useful through continued review and student feedback.',
    outcome: 'A working foundation with clear opportunities to expand data and coverage.',
  },
]

export default function ProcessPage() {
  return (
    <div className='min-h-screen bg-[#f6f7f1] text-[#26372f]'>
      <section className='border-b border-[#dce3d9] bg-[#edf1e9]'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 lg:px-14'>
          <Link href='/' className='inline-flex items-center gap-2 text-sm font-medium text-[#6e826f] hover:text-[#3e5c44]'><ArrowLeft size={16} /> Back to the overview</Link>
          <div className='mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end'>
            <div>
              <p className='text-xs font-bold uppercase tracking-[.2em] text-[#758a76]'>Project process · 01</p>
              <h1 className='mt-5 max-w-2xl font-serif text-5xl leading-[1.05] tracking-[-.04em] sm:text-6xl'>From a student question to a product journey.</h1>
            </div>
            <p className='max-w-xl text-lg leading-8 text-[#68796d]'>A look at how SakoLife’s scope and experience were shaped around a practical challenge: helping students explore technology majors and the universities where they can study them.</p>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:py-24'>
        <div className='mb-12 flex items-center gap-3 text-sm text-[#809080]'><Compass size={18} /><span>A guided path, with room to explore</span></div>
        <div className='space-y-5'>
          {steps.map(({ number, icon: Icon, title, question, body, outcome }) => (
            <article key={number} className='grid gap-6 rounded-3xl border border-[#dce4d9] bg-white/80 p-6 sm:p-9 md:grid-cols-[64px_1fr]'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf0e7] text-[#66816a]'><Icon size={21} /></div>
              <div>
                <div className='flex flex-wrap items-center gap-3'><span className='font-mono text-xs text-[#96a596]'>{number}</span><span className='h-px w-8 bg-[#d7e0d4]' /><p className='text-xs font-semibold uppercase tracking-[.14em] text-[#7b8e7c]'>The decision</p></div>
                <h2 className='mt-3 font-serif text-3xl text-[#33483a]'>{title}</h2>
                <p className='mt-4 font-medium text-[#546d59]'>{question}</p>
                <p className='mt-3 max-w-3xl leading-7 text-[#708075]'>{body}</p>
                <div className='mt-5 rounded-2xl bg-[#f0f4ed] px-5 py-4 text-sm leading-6 text-[#576d5a]'><span className='font-semibold'>What this shaped:</span> {outcome}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-14'>
        <div className='flex flex-col justify-between gap-6 rounded-3xl bg-[#405b47] p-8 text-white sm:flex-row sm:items-center sm:p-10'>
          <div><p className='text-xs font-bold uppercase tracking-[.18em] text-[#c5d6c4]'>Continue reading</p><h2 className='mt-3 font-serif text-3xl'>From decisions to implementation.</h2></div>
          <Link href='/build-notes' className='inline-flex items-center gap-2 self-start rounded-full bg-[#f6f7f1] px-5 py-3 text-sm font-semibold text-[#3c5943] sm:self-auto'>Explore build notes <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
