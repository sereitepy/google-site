'use client'

import { SectionContent } from '@/lib/data/chapter1Content'
import { ManuscriptSubItem } from '@/lib/manuscript-data'

interface ChapterProp {
  chapter: {
    slug: string
    sections: SectionContent[]
  }
  chapterMeta:
    | {
        slug: string
        title: string
        page: number
        sections: ManuscriptSubItem[]
      }
    | undefined
}

export default function ChapterOne({ chapter, chapterMeta }: ChapterProp) {
  return (
    <div className='space-y-12'>
      {chapter.sections.map(section => {
        const sectionMeta = chapterMeta?.sections.find(
          s => s.anchor === section.anchor
        )

        return (
          <section
            key={section.anchor}
            id={section.anchor}
            className='scroll-mt-24 space-y-6 rounded-2xl border border-white/10 bg-slate-900/30 p-8 backdrop-blur-md shadow-xl'
          >
            {sectionMeta && (
              <h2 className='text-2xl font-bold tracking-tight text-cyan-400 border-b border-white/10 pb-3'>
                {sectionMeta.title}
              </h2>
            )}

            {section.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className='leading-relaxed text-justify text-slate-300 font-sans text-base'
              >
                {p}
              </p>
            ))}

            {section.subsections &&
              section.subsections.map(sub => (
                <div
                  key={sub.anchor}
                  id={sub.anchor}
                  className='scroll-mt-24 pl-5 border-l-2 border-cyan-500/40 space-y-3 mt-6 bg-cyan-950/10 p-4 rounded-r-xl'
                >
                  <h3 className='text-lg font-semibold text-slate-100'>
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

            {section.termsTable && (
              <div className='overflow-x-auto border border-white/10 rounded-xl mt-6 bg-slate-950/80 backdrop-blur-md'>
                <table className='w-full text-left border-collapse text-sm'>
                  <thead>
                    <tr className='bg-slate-900 border-b border-white/10 text-cyan-400'>
                      <th className='p-4 font-bold w-1/3'>Terms</th>
                      <th className='p-4 font-bold'>Definitions</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {section.termsTable.map((item, tIdx) => (
                      <tr
                        key={tIdx}
                        className='hover:bg-white/5 transition-colors'
                      >
                        <td className='p-4 font-semibold text-cyan-300'>
                          {item.term}
                        </td>
                        <td className='p-4 text-slate-300 leading-normal'>
                          {item.definition}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
