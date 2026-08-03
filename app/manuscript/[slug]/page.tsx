// app/manuscript/[slug]/page.tsx
import ChapterOne from '@/app/components/chapters/chapter1'
import ChapterTwo from '@/app/components/chapters/chapter2'
import ChapterThree from '@/app/components/chapters/chapter3' // <-- Inject the new module hook cleanly here

import { chapter1Content } from '@/lib/data/chapter1Content'
import { chapter2Content } from '@/lib/data/chapter2Content'
import { chapter3Content } from '@/lib/data/chapter3Content' // <-- Inject the new schema definition payload reference
import { chapters } from '@/lib/manuscript-data'

//app/manuscript/[slug]/page.tsx
export default async function ManuscriptPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const chapterMeta = chapters.find(c => c.slug === slug)

  // ==========================================
  // RENDER LOGIC FOR CHAPTER 1
  // ==========================================
  if (slug === 'chapter-1') {
    return (
      <article className='max-w-4xl mx-auto p-6 md:p-12 flex flex-col gap-5 text-slate-800 dark:text-slate-200'>
        <header className='border-b pb-6 border-slate-200 dark:border-slate-800'>
          <h1 className='text-3xl font-extrabold tracking-tight'>
            {chapterMeta?.title}
          </h1>
          <p className='text-sm text-muted-foreground mt-2'>
            Manuscript Page: {chapterMeta?.page}
          </p>
        </header>
        <ChapterOne chapter={chapter1Content} chapterMeta={chapterMeta} />
      </article>
    )
  }

  // ==========================================
  // RENDER LOGIC FOR CHAPTER 2
  // ==========================================
  if (slug === 'chapter-2') {
    return (
      <article className='max-w-4xl mx-auto p-6 md:p-12 flex flex-col gap-5 text-slate-800 dark:text-slate-200'>
        <header className='border-b pb-6 border-slate-200 dark:border-slate-800'>
          <h1 className='text-3xl font-extrabold tracking-tight'>
            {chapterMeta?.title}
          </h1>
          <p className='text-sm text-muted-foreground mt-2'>
            Manuscript Page: {chapterMeta?.page}
          </p>
        </header>
        <ChapterTwo chapter={chapter2Content} />
      </article>
    )
  }

  // ==========================================
  // RENDER LOGIC FOR CHAPTER 3 (NEW STEP INCLUSION)
  // ==========================================
  if (slug === 'chapter-3') {
    return (
      <article className='max-w-4xl mx-auto p-6 md:p-12 flex flex-col gap-5 text-slate-800 dark:text-slate-200'>
        <header className='border-b pb-6 border-slate-200 dark:border-slate-800'>
          <h1 className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50'>
            {chapterMeta?.title || 'Chapter 3: Methodology and Design Layout'}
          </h1>
          <p className='text-sm text-muted-foreground mt-2 font-mono'>
            Manuscript Page Section Pointer: {chapterMeta?.page || 3}
          </p>
        </header>

        {/* Call your newly created ChapterThree renderer pass down hooks */}
        <ChapterThree chapter={chapter3Content} chapterMeta={chapterMeta} />
      </article>
    )
  }

  // Fallback state
  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>
        {chapterMeta?.title || 'Unknown Chapter'}
      </h1>
      <p className='mt-2 text-muted-foreground'>
        Content for this chapter is pending setup.
      </p>
    </div>
  )
}
