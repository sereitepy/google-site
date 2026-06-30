import {
  Chapter2DataType
} from '@/lib/data/chapter2Content'

interface Prop {
  chapter: Chapter2DataType
}

export default function ChapterTwo({ chapter }: Prop) {
  return (
    <div>
      {chapter.sections.map(section => (
        <section
          key={section.anchor}
          id={section.anchor}
          className='scroll-mt-20 space-y-4'
        >
          <h2 className='text-2xl font-bold border-b pb-2 tracking-tight mt-8 text-slate-900 dark:text-slate-100'>
            {section.title}
          </h2>

          {/* Core Paragraphs */}
          {section.paragraphs &&
            section.paragraphs.map((p, idx) => (
              <p key={idx} className='leading-relaxed text-justify text-base'>
                {p}
              </p>
            ))}

          {/* Subsections */}
          {section.subsections &&
            section.subsections.map(sub => (
              <div
                key={sub.anchor}
                id={sub.anchor}
                className='scroll-mt-20 space-y-3 mt-6 pl-4 border-l-2 border-slate-200 dark:border-slate-800'
              >
                <h3 className='text-xl font-bold text-slate-900 dark:text-slate-100'>
                  {sub.title}
                </h3>
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

          {/* Render RIASEC Types Table (Table II) */}
          {section.riasecTable && (
            <div className='overflow-x-auto border rounded-lg mt-6 bg-white dark:bg-slate-950'>
              <table className='w-full text-left border-collapse text-sm'>
                <thead>
                  <tr className='bg-slate-50 dark:bg-slate-900 border-b'>
                    <th className='p-3 font-bold w-1/4'>Type</th>
                    <th className='p-3 font-bold w-1/2'>Description</th>
                    <th className='p-3 font-bold'>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {section.riasecTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/50'
                    >
                      <td className='p-3 font-bold text-blue-600 dark:text-blue-400 vertical-top'>
                        {row.type}
                      </td>
                      <td className='p-3 text-slate-600 dark:text-slate-400 leading-relaxed'>
                        {row.description}
                      </td>
                      <td className='p-3'>
                        <div className='flex flex-wrap gap-1'>
                          {row.examples.map((ex, eIdx) => (
                            <span
                              key={eIdx}
                              className='px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300'
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

          {/* Render Recommender System Matrix (Table III) */}
          {section.recommenderTable && (
            <div className='overflow-x-auto border rounded-lg mt-6 bg-white dark:bg-slate-950'>
              <table className='w-full text-left border-collapse text-sm'>
                <thead>
                  <tr className='bg-slate-50 dark:bg-sidebar border-b'>
                    <th className='p-3 font-bold bg-slate-100/50 dark:bg-slate-900/50'>
                      Aspect
                    </th>
                    <th className='p-3 font-bold text-blue-600'>
                      Content-Based Filtering
                    </th>
                    <th className='p-3 font-bold text-purple-600'>
                      Collaborative Filtering
                    </th>
                    <th className='p-3 font-bold text-emerald-600'>Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  {section.recommenderTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/50'
                    >
                      <td className='p-3 font-bold bg-slate-50/30 dark:bg-slate-900/20'>
                        {row.aspect}
                      </td>
                      <td className='p-3 text-slate-600 dark:text-slate-400'>
                        {row.contentBased}
                      </td>
                      <td className='p-3 text-slate-600 dark:text-slate-400'>
                        {row.collaborative}
                      </td>
                      <td className='p-3 text-slate-600 dark:text-slate-400'>
                        {row.hybrid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Render Competitor Check Matrix (Table IV) */}
          {section.competitorTable && (
            <div className='overflow-x-auto border rounded-lg mt-6 bg-white dark:bg-slate-950'>
              <table className='w-full text-left border-collapse text-sm'>
                <thead>
                  <tr className='bg-slate-50 dark:bg-slate-900 border-b text-center'>
                    <th className='p-3 font-bold text-left'>Platform</th>
                    <th className='p-3 font-bold'>Guest Access</th>
                    <th className='p-3 font-bold'>Focus on Major</th>
                    <th className='p-3 font-bold'>UX Friendly</th>
                    <th className='p-3 font-bold'>Data Collected</th>
                  </tr>
                </thead>
                <tbody>
                  {section.competitorTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b last:border-0 text-center ${row.name === 'Sakol Life' ? 'bg-blue-50/40 dark:bg-blue-950/20 font-medium' : ''}`}
                    >
                      <td className='p-3 font-bold text-left text-slate-900 dark:text-slate-100'>
                        {row.name} {row.name === 'Sakol Life' && '⭐'}
                      </td>
                      <td className='p-3 text-lg'>
                        {row.guestAccess ? '✓' : '✗'}
                      </td>
                      <td className='p-3 text-lg'>
                        {row.focusMajor ? '✓' : '✗'}
                      </td>
                      <td className='p-3 text-lg'>
                        {row.uxFriendly ? '✓' : '✗'}
                      </td>
                      <td className='p-3 text-lg'>
                        {row.dataCollected ? '✓' : '✗'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Display Agile Development Graphic Placeholder */}
          {section.anchor === '2.4' && (
            <div className='my-8 p-6 border-2 border-dashed rounded-xl bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center text-center space-y-2'>
              <div className='p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-full font-bold text-xl'>
                🔄
              </div>
              <h4 className='font-bold text-slate-900 dark:text-slate-100'>
                Fig. 13. Agile Development Life Cycle Loop
              </h4>
              <p className='text-xs text-muted-foreground max-w-md'>
                [Interactive Flow Diagram Node: Planning → Design →
                Implementation → Testing → Evaluation → Improvement]
              </p>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
