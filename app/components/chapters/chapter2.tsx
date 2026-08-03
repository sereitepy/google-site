'use client'

import { Chapter2DataType } from '@/lib/data/chapter2Content'
import { ManuscriptSubItem } from '@/lib/manuscript-data'

interface Prop {
  chapter: Chapter2DataType
  chapterMeta?: {
    slug: string
    title: string
    page: number
    sections: ManuscriptSubItem[]
  }
}

export default function ChapterTwo({ chapter, chapterMeta }: Prop) {
  return (
    <div className='space-y-12'>
      {chapter.sections.map(section => {
        const sectionMeta = chapterMeta?.sections.find(
          s => s.anchor === section.anchor
        )
        const displayTitle = sectionMeta?.title || section.title

        return (
          <section
            key={section.anchor}
            id={section.anchor}
            className='scroll-mt-24 space-y-6 rounded-2xl border border-white/10 bg-slate-900/30 p-8 backdrop-blur-md shadow-xl'
          >
            <h2 className='text-2xl font-bold border-b border-white/10 pb-3 tracking-tight text-indigo-400'>
              {displayTitle}
            </h2>

            {section.paragraphs?.map((p, idx) => (
              <p
                key={idx}
                className='leading-relaxed text-justify text-slate-300 text-base'
              >
                {p}
              </p>
            ))}

            {section.subsections?.map(sub => (
              <div
                key={sub.anchor}
                id={sub.anchor}
                className='scroll-mt-24 space-y-3 mt-6 pl-5 border-l-2 border-indigo-500/40 bg-indigo-950/10 p-4 rounded-r-xl'
              >
                <h3 className='text-lg font-bold text-slate-100'>
                  {sub.title}
                </h3>
                {sub.paragraphs.map((subP, sIdx) => (
                  <p
                    key={sIdx}
                    className='leading-relaxed text-justify text-sm text-slate-400'
                  >
                    {subP}
                  </p>
                ))}
              </div>
            ))}

            {section.riasecTable && (
              <div className='overflow-x-auto border border-white/10 rounded-xl mt-6 bg-slate-950/80'>
                <table className='w-full text-left border-collapse text-sm'>
                  <thead>
                    <tr className='bg-slate-900 border-b border-white/10 text-indigo-400'>
                      <th className='p-4 font-bold w-1/4'>Type</th>
                      <th className='p-4 font-bold w-1/2'>Description</th>
                      <th className='p-4 font-bold'>Examples</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {section.riasecTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className='hover:bg-white/5 transition-colors'
                      >
                        <td className='p-4 font-bold text-indigo-300 align-top'>
                          {row.type}
                        </td>
                        <td className='p-4 text-slate-300 leading-relaxed'>
                          {row.description}
                        </td>
                        <td className='p-4'>
                          <div className='flex flex-wrap gap-1.5'>
                            {row.examples.map((ex, eIdx) => (
                              <span
                                key={eIdx}
                                className='px-2.5 py-1 bg-slate-800/80 rounded-md text-xs text-slate-300 border border-white/5'
                              >
                                {ex}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.anchor === '2.4' && (
              <div className='my-8 p-8 border border-indigo-500/30 rounded-2xl bg-indigo-950/20 backdrop-blur-md flex flex-col items-center justify-center text-center space-y-3'>
                <div className='p-4 bg-indigo-500/20 text-indigo-400 rounded-full font-bold text-2xl border border-indigo-500/30'>
                  🔄
                </div>
                <h4 className='font-bold text-slate-100 text-lg'>
                  Fig. 13. Agile Development Life Cycle Loop
                </h4>
                <p className='text-xs text-slate-400 max-w-md font-mono'>
                  [Planning → Design → Implementation → Testing → Evaluation →
                  Improvement]
                </p>
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
