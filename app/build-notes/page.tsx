import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Check, Code2, Database, LayoutTemplate, SearchCheck } from 'lucide-react'

const notes = [
  {
    number: '01',
    icon: LayoutTemplate,
    title: 'Design around a decision, not a feature list',
    summary: 'Start with the student’s next question and make each screen help answer it.',
    detail: 'A quiz is only useful when it leads somewhere. Connect the result to an explanation of the major, then let students move into university details without losing context.',
    takeaway: 'Make the next step obvious, but leave room for students to compare on their own.',
  },
  {
    number: '02',
    icon: Database,
    title: 'Treat education information as product content',
    summary: 'Useful university data needs clear labels, consistent structure, and regular review.',
    detail: 'Tuition, entry requirements, scholarships, and facilities are different kinds of information. Organizing them consistently helps students compare options and helps the project identify what still needs to be collected.',
    takeaway: 'Good data structure is part of the student experience, not just a backend concern.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build a web experience that can grow',
    summary: 'Keep the interface responsive and the content easy to extend as coverage expands.',
    detail: 'SakoLife is presented as a web platform, so the experience should work across screen sizes and make exploration feel straightforward. New majors and university profiles should fit the same understandable patterns.',
    takeaway: 'Consistency makes future content easier to browse and maintain.',
  },
  {
    number: '04',
    icon: SearchCheck,
    title: 'Be honest about limits and next steps',
    summary: 'A helpful recommendation should be a starting point, not a promise of certainty.',
    detail: 'Coverage can be limited while a project is growing. Showing what information is available, and where more breadth is needed, builds trust and gives future iterations a clear direction.',
    takeaway: 'Clarity about what the product knows is as important as the recommendation itself.',
  },
]

export default function BuildNotesPage() {
  return (
    <div className='min-h-screen bg-[#f6f7f1] text-[#26372f]'>
      <section className='border-b border-[#dce3d9] bg-[#edf1e9]'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 lg:px-14'>
          <Link href='/' className='inline-flex items-center gap-2 text-sm font-medium text-[#6e826f] hover:text-[#3e5c44]'><ArrowLeft size={16} /> Back to the overview</Link>
          <div className='mt-12 max-w-3xl'>
            <p className='text-xs font-bold uppercase tracking-[.2em] text-[#758a76]'>Build notes · 02</p>
            <h1 className='mt-5 font-serif text-5xl leading-[1.05] tracking-[-.04em] sm:text-6xl'>The thinking behind a student-first web project.</h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-[#68796d]'>Practical lessons from shaping a guided discovery experience — from presenting recommendations responsibly to organizing information students can actually use.</p>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14 lg:py-24'>
        <div className='grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:gap-16'>
          <aside className='lg:sticky lg:top-28 lg:self-start'>
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6ede2] text-[#66816a]'><BookOpen size={21} /></div>
            <h2 className='mt-5 font-serif text-3xl text-[#354b3b]'>A small field guide</h2>
            <p className='mt-3 leading-7 text-[#748176]'>These notes focus on choices that make educational tools more useful, explainable, and easier to keep improving.</p>
            <Link href='/manuscript/chapter-1' className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4e6b53] hover:text-[#304a36]'>Read the full manuscript <ArrowRight size={16} /></Link>
          </aside>
          <div className='space-y-4'>
            {notes.map(({ number, icon: Icon, title, summary, detail, takeaway }) => (
              <article key={number} className='rounded-3xl border border-[#dce4d9] bg-white/80 p-6 sm:p-8'>
                <div className='flex items-start gap-4'>
                  <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf0e7] text-[#66816a]'><Icon size={19} /></div>
                  <div className='min-w-0 flex-1'>
                    <div className='flex items-center gap-3'><span className='font-mono text-xs text-[#96a596]'>{number}</span><span className='h-px w-8 bg-[#d7e0d4]' /></div>
                    <h3 className='mt-3 font-serif text-2xl leading-snug text-[#354b3b] sm:text-3xl'>{title}</h3>
                    <p className='mt-3 font-medium leading-7 text-[#5c705f]'>{summary}</p>
                    <p className='mt-4 leading-7 text-[#748176]'>{detail}</p>
                    <div className='mt-5 flex gap-3 rounded-2xl bg-[#f0f4ed] px-4 py-4 text-sm leading-6 text-[#576d5a]'><Check size={17} className='mt-0.5 shrink-0' /><span><strong>Takeaway:</strong> {takeaway}</span></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
