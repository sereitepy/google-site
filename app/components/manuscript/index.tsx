'use client'

import { ScrollInView } from '@/app/components/scroll-in-view'

export default function ManuscriptIndex() {
  return (
    <ScrollInView index={1}>
      <div className='mx-auto max-w-4xl px-6 py-12'>
        <h1 className='text-3xl font-extrabold tracking-tight'>Chapter 1</h1>
      </div>
    </ScrollInView>
  )
}
