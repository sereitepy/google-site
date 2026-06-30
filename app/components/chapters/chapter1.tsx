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
    <div>
      {chapter.sections.map(section => {
        const sectionMeta = chapterMeta?.sections.find(
          s => s.anchor === section.anchor
        )

        return (
          <section
            key={section.anchor}
            id={section.anchor}
            className='scroll-mt-20 space-y-4'
          >
            {sectionMeta && (
              <h2 className='text-2xl font-bold border-b pb-2 tracking-tight mt-8'>
                {sectionMeta.title}
              </h2>
            )}

            {/* Core Paragraphs */}
            {section.paragraphs.map((p, idx) => (
              <p key={idx} className='leading-relaxed text-justify text-base'>
                {p}
              </p>
            ))}

            {/* Subsections (like 1.5.1 and 1.5.2) */}
            {section.subsections &&
              section.subsections.map(sub => (
                <div
                  key={sub.anchor}
                  id={sub.anchor}
                  className='scroll-mt-20 pl-4 border-l-2 border-slate-300 dark:border-slate-700 space-y-2 mt-4'
                >
                  <h3 className='text-xl font-semibold'>{sub.title}</h3>
                  {sub.paragraphs.map((subP, sIdx) => (
                    <p
                      key={sIdx}
                      className='leading-relaxed text-justify text-sm text-slate-600 dark:text-slate-400'
                    >
                      {subP}
                    </p>
                  ))}
                </div>
              ))}

            {/* Render Terms Table (Section 1.7) */}
            {section.termsTable && (
              <div className='overflow-x-auto border rounded-lg mt-6 bg-white dark:bg-slate-950'>
                <table className='w-full text-left border-collapse text-sm'>
                  <thead>
                    <tr className='bg-slate-50 dark:bg-slate-900 border-b'>
                      <th className='p-3 font-bold w-1/3'>Terms</th>
                      <th className='p-3 font-bold'>Definitions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.termsTable.map((item, tIdx) => (
                      <tr
                        key={tIdx}
                        className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/50'
                      >
                        <td className='p-3 font-semibold text-blue-600 dark:text-blue-400'>
                          {item.term}
                        </td>
                        <td className='p-3 text-slate-600 dark:text-slate-400 leading-normal'>
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
