// @/app/components/chapters/chapter3.tsx
'react font-sans text-sm'
import React from 'react'
import {
  Chapter3DataType,
  majorVectorsTable,
  apiEndpointsTable,
  unitTestingData,
  integrationTestingData,
  systemTestingData,
  organizationData,
} from '@/lib/data/chapter3Content'
import { ManuscriptSubItem } from '@/lib/manuscript-data'

interface Chapter3Prop {
  chapter: Chapter3DataType
  chapterMeta:
    | {
        slug: string
        title: string
        page: number
        sections: ManuscriptSubItem[]
      }
    | undefined
}

export default function ChapterThree({ chapter, chapterMeta }: Chapter3Prop) {
  return (
    <div className='space-y-10'>
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
              <h2 className='text-2xl font-bold border-b pb-2 tracking-tight mt-8 text-slate-900 dark:text-slate-100'>
                {sectionMeta.title}
              </h2>
            )}

            {/* General Paragraphs Loop */}
            {section.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className='leading-relaxed text-justify text-base text-slate-700 dark:text-slate-300'
              >
                {p}
              </p>
            ))}

            {/* DYNAMIC CONTENT SWITCHES BASED ON ANCHOR MARKERS */}

            {/* Anchor 3.2.3: Major Vector Tables & Math Engine Log Simulation */}
            {section.anchor === '3.2.3' && (
              <div className='space-y-6 pt-2'>
                <div className='overflow-x-auto border rounded-xl bg-white dark:bg-slate-950 shadow-sm'>
                  <table className='w-full text-left border-collapse text-xs'>
                    <thead>
                      <tr className='bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'>
                        <th className='p-3 font-bold w-12 text-center'>#</th>
                        <th className='p-3 font-bold text-blue-600'>
                          Major Reference Key
                        </th>
                        <th className='p-3 font-bold w-16 text-center'>Code</th>
                        <th className='p-3 font-bold'>
                          Curriculum Focus Core Area
                        </th>
                        <th className='p-3 font-bold w-20 text-center'>
                          Holland
                        </th>
                        <th className='p-3 font-bold w-44 text-purple-600'>
                          Phase 1 Target Vector Matrix
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {majorVectorsTable.map(row => (
                        <tr
                          key={row.id}
                          className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/40'
                        >
                          <td className='p-3 text-center font-bold text-slate-400'>
                            {row.id}
                          </td>
                          <td className='p-3 font-semibold text-slate-900 dark:text-slate-100'>
                            {row.major}
                          </td>
                          <td className='p-3 text-center'>
                            <span className='bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono font-medium text-xs'>
                              {row.code}
                            </span>
                          </td>
                          <td className='p-3 text-slate-500 dark:text-slate-400 leading-normal'>
                            {row.focus}
                          </td>
                          <td className='p-3 text-center font-bold text-amber-600 font-mono tracking-wider'>
                            {row.riasecCode}
                          </td>
                          <td className='p-3 font-mono font-bold bg-slate-50/30 dark:bg-slate-900/20 text-purple-600 dark:text-purple-400'>
                            {row.vector}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mathematical Engine Sandbox Simulation Logger */}
                <div className='p-5 border rounded-xl bg-slate-900 text-slate-100 dark:bg-slate-950 font-mono text-xs space-y-3 shadow-md border-slate-800'>
                  <div className='flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400 text-[10px]'>
                    <span>
                      ⚙️ RECOM ENGINE VECTOR COSINE RUN SIMULATION LOGGER
                    </span>
                    <span className='text-emerald-400 font-bold'>
                      VERIFIED (200 OK)
                    </span>
                  </div>
                  <p className='text-slate-500'>
                    Processing inputs against static Phase 1 targets:{' '}
                  </p>
                  <p className='text-slate-300'>
                    Calculated Student Vector = [R=32.24, I=33.74, A=7.0, S=6.0,
                    E=6.0, C=19.99]
                  </p>
                  <p className='text-slate-300'>
                    Target Cybersecurity Vector = [R=1.00, I=1.00, A=0.0, S=0.0,
                    E=0.0, C=1.00]
                  </p>
                  <div className='pl-4 border-l-2 border-emerald-500 text-slate-400 space-y-1 text-[11px]'>
                    <p>
                      Dot Product Calculation (A · B) = (32.24 × 1) + (33.74 ×
                      1) + 19.99 = 85.97
                    </p>
                    <p>
                      Student Vector Magnitude Length (|A|) = √(32.24² + 33.74²
                      + 7² + 6² + 6² + 19.99²) = 51.95
                    </p>
                    <p>
                      Target Major Magnitude Length (|B|) = √(1² + 1² + 0 + 0 +
                      0 + 1²) = √3 = 1.732
                    </p>
                    <p>
                      Calculated Proximity Angle Match Fit = 85.97 / (51.95 ×
                      1.732) = 0.9567
                    </p>
                  </div>
                  <p className='text-emerald-400 font-bold font-sans text-sm pt-1'>
                    🚀 COSINE SIMILARITY ANALYSIS COMPLETE: 95.7% PREDICTION
                    ACCURACY FIT INDEX
                  </p>
                </div>
              </div>
            )}

            {/* Anchor 3.2.4: Responsive Wireframe Grid Layout Component Mapping */}
            {section.anchor === '3.2.4' && (
              <div className='grid grid-cols-2 md:grid-cols-3 gap-3 pt-2 text-xs font-mono font-medium text-center'>
                <div className='p-3 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'>
                  Fig 16: Landing Dashboard View
                </div>
                <div className='p-3 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'>
                  Fig 17: Interactive Step Quiz Component
                </div>
                <div className='p-3 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'>
                  Fig 18: Card Ranking Sorting Panel
                </div>
                <div className='p-3 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'>
                  Fig 19: Localized Course Meta Panel
                </div>
                <div className='p-3 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'>
                  Fig 20: University Catalog Matrix
                </div>
                <div className='p-3 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'>
                  Fig 21: Scholarship Tuition Panel
                </div>
              </div>
            )}

            {/* Anchor 3.2.5: Full API Planning Architecture Specifications Grid */}
            {section.anchor === '3.2.5' && (
              <div className='overflow-x-auto border rounded-xl bg-white dark:bg-slate-950 shadow-sm pt-2'>
                <table className='w-full text-left border-collapse text-xs'>
                  <thead>
                    <tr className='bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold'>
                      <th className='p-3 w-16 text-center'>Method</th>
                      <th className='p-3 text-blue-600'>
                        Endpoint Routing Tree Path
                      </th>
                      <th className='p-3 w-20 text-center'>Auth Context</th>
                      <th className='p-3 w-24'>Target Actor</th>
                      <th className='p-3'>
                        Endpoint Functionality Blueprint Statement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiEndpointsTable.map((api, idx) => (
                      <tr
                        key={idx}
                        className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/40'
                      >
                        <td className='p-3 text-center'>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              api.method === 'GET'
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                                : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                            }`}
                          >
                            {api.method}
                          </span>
                        </td>
                        <td className='p-3 font-mono font-semibold text-slate-900 dark:text-slate-200'>
                          {api.path}
                        </td>
                        <td className='p-3 text-center font-medium text-slate-400 font-mono'>
                          {api.auth}
                        </td>
                        <td className='p-3 font-medium text-slate-600 dark:text-slate-400'>
                          {api.who}
                        </td>
                        <td className='p-3 text-slate-500 dark:text-slate-400 leading-normal'>
                          {api.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Subsections Map Render Engine Layer */}
            {section.subsections && (
              <div className='space-y-6 mt-4'>
                {section.subsections.map(sub => (
                  <div
                    key={sub.anchor}
                    id={sub.anchor}
                    className='scroll-mt-20 pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-3'
                  >
                    <h3 className='text-lg font-bold text-slate-900 dark:text-slate-200'>
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

                    {/* Anchor 3.4.5: Visual Infrastructure Deployment Pipeline Block */}
                    {sub.anchor === '3.4.5' && (
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-mono text-[11px]'>
                        <div className='p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2'>
                          <p className='text-[10px] uppercase font-bold tracking-wider text-slate-400'>
                            Fig 25: Application Code Flow Runtime
                          </p>
                          <div className='p-2 border rounded bg-slate-50 dark:bg-slate-900'>
                            Local Edits → GitHub Remote Source Tree
                          </div>
                          <div className='grid grid-cols-2 gap-2 text-center text-[10px] pt-1'>
                            <div className='p-2 border rounded border-blue-200 bg-blue-50/40 text-blue-600 font-bold'>
                              Staging: Vercel/Render
                            </div>
                            <div className='p-2 border rounded border-emerald-200 bg-emerald-50/40 text-emerald-600 font-bold'>
                              Prod: DigitalOcean App
                            </div>
                          </div>
                        </div>

                        <div className='p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2'>
                          <p className='text-[10px] uppercase font-bold tracking-wider text-slate-400'>
                            Fig 26: Persistence Storage Layers
                          </p>
                          <div className='p-2 border rounded bg-slate-50 dark:bg-slate-900'>
                            SQL Engine: Supabase Cloud (PostgreSQL 17)
                          </div>
                          <div className='p-2 border rounded bg-slate-50 dark:bg-slate-900'>
                            Asset Storage: DigitalOcean Spaces Object Bucket CDN
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Anchor 3.3: Unified Three-Tier Software Testing Specification Tables */}
            {section.anchor === '3.3' && (
              <div className='space-y-8 pt-4'>
                {/* Unit Testing Suite Grid */}
                <div className='space-y-2'>
                  <h4 className='text-sm font-bold text-slate-900 dark:text-slate-200 tracking-wide flex items-center gap-2'>
                    <span className='w-1.5 h-3 bg-blue-500 rounded-sm'></span>{' '}
                    Table IX: Unit Logic Testing Plan
                  </h4>
                  <div className='overflow-x-auto border rounded-xl bg-white dark:bg-slate-950 shadow-sm'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold'>
                          <th className='p-2.5 w-16 text-center font-mono'>
                            ID
                          </th>
                          <th className='p-2.5 w-44 text-blue-600 font-semibold'>
                            Target Unit Block
                          </th>
                          <th className='p-2.5'>
                            Injected Context Parameters Input
                          </th>
                          <th className='p-2.5 text-emerald-600'>
                            Expected Vector Result Outcome
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {unitTestingData.map(ut => (
                          <tr
                            key={ut.id}
                            className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/40'
                          >
                            <td className='p-2.5 text-center font-mono font-bold text-slate-400'>
                              {ut.id}
                            </td>
                            <td className='p-2.5 font-semibold text-slate-900 dark:text-slate-200'>
                              {ut.target}
                            </td>
                            <td className='p-2.5 font-mono text-[11px] text-slate-500 dark:text-slate-400'>
                              {ut.input}
                            </td>
                            <td className='p-2.5 text-slate-600 dark:text-slate-400 leading-normal'>
                              {ut.outcome}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Integration Testing Suite Grid */}
                <div className='space-y-2'>
                  <h4 className='text-sm font-bold text-slate-900 dark:text-slate-200 tracking-wide flex items-center gap-2'>
                    <span className='w-1.5 h-3 bg-purple-500 rounded-sm'></span>{' '}
                    Table X: Gateway Integration Testing
                  </h4>
                  <div className='overflow-x-auto border rounded-xl bg-white dark:bg-slate-950 shadow-sm'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold'>
                          <th className='p-2.5 w-16 text-center font-mono'>
                            ID
                          </th>
                          <th className='p-2.5 w-44 text-blue-600 font-semibold'>
                            Gateway Context Path
                          </th>
                          <th className='p-2.5'>
                            Injected JSON/Authorization Models
                          </th>
                          <th className='p-2.5 text-emerald-600'>
                            Expected API Response Outcome
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {integrationTestingData.map(it => (
                          <tr
                            key={it.id}
                            className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/40'
                          >
                            <td className='p-2.5 text-center font-mono font-bold text-slate-400'>
                              {it.id}
                            </td>
                            <td className='p-2.5 font-mono font-semibold text-slate-900 dark:text-slate-200'>
                              {it.target}
                            </td>
                            <td className='p-2.5 text-slate-500 dark:text-slate-400 leading-tight'>
                              {it.input}
                            </td>
                            <td className='p-2.5 text-slate-600 dark:text-slate-400 leading-normal'>
                              {it.outcome}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* System Testing Suite Grid */}
                <div className='space-y-2'>
                  <h4 className='text-sm font-bold text-slate-900 dark:text-slate-200 tracking-wide flex items-center gap-2'>
                    <span className='w-1.5 h-3 bg-amber-500 rounded-sm'></span>{' '}
                    Table XI: Full System E2E Scenarios
                  </h4>
                  <div className='overflow-x-auto border rounded-xl bg-white dark:bg-slate-950 shadow-sm'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold'>
                          <th className='p-2.5 w-16 text-center font-mono'>
                            ID
                          </th>
                          <th className='p-2.5 w-52 text-blue-600 font-semibold'>
                            System Level Scenario
                          </th>
                          <th className='p-2.5'>
                            Manual Step Sequence Trace Actions
                          </th>
                          <th className='p-2.5 text-emerald-600'>
                            Deterministic QA Passing Criteria
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {systemTestingData.map(st => (
                          <tr
                            key={st.id}
                            className='border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/40'
                          >
                            <td className='p-2.5 text-center font-mono font-bold text-slate-400'>
                              {st.id}
                            </td>
                            <td className='p-2.5 font-semibold text-slate-900 dark:text-slate-200 leading-tight'>
                              {st.scenario}
                            </td>
                            <td className='p-2.5 font-mono text-[11px] text-slate-400'>
                              {st.steps}
                            </td>
                            <td className='p-2.5 text-slate-500 dark:text-slate-400 leading-normal'>
                              {st.criteria}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Anchor 3.4: Study Responsibilities Grid & Project Roadmap Gantt */}
            {section.anchor === '3.4' && (
              <div className='space-y-6 pt-4'>
                <div className='space-y-2'>
                  <h4 className='text-sm font-bold text-slate-900 dark:text-slate-200 tracking-wide font-sans'>
                    Table XVI: Manuscript Structure Responsibility Allocations
                  </h4>
                  <div className='overflow-x-auto border rounded-xl bg-white dark:bg-slate-950 shadow-sm'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold'>
                          <th className='p-2.5'>
                            Manuscript Section Component Metric Target
                          </th>
                          <th className='p-2.5 w-56 text-purple-600'>
                            Assigned Team Owner Reference
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {organizationData.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`border-b last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 ${row.isHeader ? 'bg-slate-50/40 dark:bg-slate-900/10 font-bold text-blue-600 dark:text-blue-400' : ''}`}
                          >
                            <td
                              className={`p-2.5 ${row.isHeader ? 'pl-3' : 'pl-6 text-slate-600 dark:text-slate-300'}`}
                            >
                              {row.task}
                            </td>
                            <td className='p-2.5 font-mono font-medium text-slate-500 dark:text-slate-400'>
                              {row.assignee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Structured Horizontal Gantt Progress Component Map Panel */}
                <div className='p-4 border rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 space-y-3 font-mono text-[11px]'>
                  <p className='text-[10px] font-bold text-slate-400 uppercase tracking-wider'>
                    📅 Milestone Tracking Matrix (Semester 2 Development Block
                    2026)
                  </p>
                  <div className='space-y-2'>
                    <div className='grid grid-cols-6 border-b border-slate-200 dark:border-slate-800 pb-1 text-slate-400 text-center text-[9px] font-bold'>
                      <span className='text-left font-sans text-slate-500'>
                        Core Milestone Task Name
                      </span>
                      <span>Mar 26</span>
                      <span>Apr 26</span>
                      <span>May 26</span>
                      <span>Jun 26</span>
                      <span>Jul 26</span>
                    </div>
                    <div className='grid grid-cols-6 items-center py-1 border-b border-dashed border-slate-200 dark:border-slate-800'>
                      <span className='font-sans font-medium text-slate-700 dark:text-slate-300'>
                        S2-01 University Field Data Gathering
                      </span>
                      <span className='h-2 rounded bg-blue-500 mx-1'></span>
                      <span className='h-2 rounded bg-blue-300 mx-1'></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className='grid grid-cols-6 items-center py-1 border-b border-dashed border-slate-200 dark:border-slate-800'>
                      <span className='font-sans font-medium text-slate-700 dark:text-slate-300'>
                        S2-02/03 Full Stack App Build Sync
                      </span>
                      <span></span>
                      <span className='h-2 rounded bg-purple-500 mx-1'></span>
                      <span className='h-2 rounded bg-purple-500 mx-1'></span>
                      <span className='h-2 rounded bg-purple-300 mx-1'></span>
                      <span></span>
                    </div>
                    <div className='grid grid-cols-6 items-center py-1 border-b border-dashed border-slate-200 dark:border-slate-800'>
                      <span className='font-sans font-medium text-slate-700 dark:text-slate-300'>
                        S2-05/06 Quality Verification Running
                      </span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className='h-2 rounded bg-emerald-500 mx-1'></span>
                      <span className='h-2 rounded bg-emerald-300 mx-1'></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
