'use client'

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
  chapterMeta?: {
    slug: string
    title: string
    page: number
    sections: ManuscriptSubItem[]
  }
}

export default function ChapterThree({ chapter, chapterMeta }: Chapter3Prop) {
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
            {displayTitle && (
              <h2 className='text-2xl font-bold border-b border-white/10 pb-3 tracking-tight text-emerald-400'>
                {displayTitle}
              </h2>
            )}

            {/* General Paragraphs Loop */}
            {section.paragraphs?.map((p, idx) => (
              <p
                key={idx}
                className='leading-relaxed text-justify text-base text-slate-300 font-sans'
              >
                {p}
              </p>
            ))}

            {/* Anchor 3.2.3: Major Vector Tables & Math Engine Log Simulation */}
            {section.anchor === '3.2.3' && (
              <div className='space-y-6 pt-2'>
                <div className='overflow-x-auto border border-white/10 rounded-xl bg-slate-950/80 shadow-md'>
                  <table className='w-full text-left border-collapse text-xs'>
                    <thead>
                      <tr className='bg-slate-900 border-b border-white/10 text-emerald-400 font-bold'>
                        <th className='p-3 text-center w-12'>#</th>
                        <th className='p-3'>Major Reference Key</th>
                        <th className='p-3 text-center w-16'>Code</th>
                        <th className='p-3'>Curriculum Focus Core Area</th>
                        <th className='p-3 text-center w-20'>Holland</th>
                        <th className='p-3 text-purple-400 w-44'>
                          Phase 1 Target Vector
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-white/5'>
                      {majorVectorsTable.map(row => (
                        <tr
                          key={row.id}
                          className='hover:bg-white/5 transition-colors'
                        >
                          <td className='p-3 text-center font-bold text-slate-500'>
                            {row.id}
                          </td>
                          <td className='p-3 font-semibold text-slate-200'>
                            {row.major}
                          </td>
                          <td className='p-3 text-center'>
                            <span className='bg-slate-800 px-2 py-0.5 rounded font-mono text-xs text-slate-300'>
                              {row.code}
                            </span>
                          </td>
                          <td className='p-3 text-slate-400 leading-normal'>
                            {row.focus}
                          </td>
                          <td className='p-3 text-center font-bold text-amber-400 font-mono'>
                            {row.riasecCode}
                          </td>
                          <td className='p-3 font-mono font-bold text-purple-400'>
                            {row.vector}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mathematical Engine Sandbox Simulation Logger */}
                <div className='p-5 border border-emerald-500/30 rounded-xl bg-slate-950 font-mono text-xs space-y-3 shadow-lg'>
                  <div className='flex items-center justify-between border-b border-white/10 pb-2 text-slate-400 text-[10px]'>
                    <span>
                      ⚙️ RECOM ENGINE VECTOR COSINE RUN SIMULATION LOGGER
                    </span>
                    <span className='text-emerald-400 font-bold'>
                      VERIFIED (200 OK)
                    </span>
                  </div>
                  <p className='text-slate-400'>
                    Processing inputs against static Phase 1 targets:
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

            {/* Anchor 3.2.4: Wireframe Component Mapping */}
            {section.anchor === '3.2.4' && (
              <div className='grid grid-cols-2 md:grid-cols-3 gap-3 pt-2 text-xs font-mono font-medium text-center'>
                {[
                  'Fig 16: Landing Dashboard View',
                  'Fig 17: Interactive Step Quiz Component',
                  'Fig 18: Card Ranking Sorting Panel',
                  'Fig 19: Localized Course Meta Panel',
                  'Fig 20: University Catalog Matrix',
                  'Fig 21: Scholarship Tuition Panel',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className='p-4 border border-white/10 rounded-xl bg-slate-950/60 text-slate-300 backdrop-blur-sm'
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}

            {/* Anchor 3.2.5: API Specifications Table */}
            {section.anchor === '3.2.5' && (
              <div className='overflow-x-auto border border-white/10 rounded-xl bg-slate-950/80 shadow-md pt-2'>
                <table className='w-full text-left border-collapse text-xs'>
                  <thead>
                    <tr className='bg-slate-900 border-b border-white/10 text-emerald-400 font-bold'>
                      <th className='p-3 text-center w-16'>Method</th>
                      <th className='p-3'>Endpoint Path</th>
                      <th className='p-3 text-center w-20'>Auth</th>
                      <th className='p-3 w-24'>Target Actor</th>
                      <th className='p-3'>Blueprint Statement</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {apiEndpointsTable.map((api, idx) => (
                      <tr
                        key={idx}
                        className='hover:bg-white/5 transition-colors'
                      >
                        <td className='p-3 text-center'>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              api.method === 'GET'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                                : 'bg-blue-950 text-blue-300 border border-blue-500/30'
                            }`}
                          >
                            {api.method}
                          </span>
                        </td>
                        <td className='p-3 font-mono font-semibold text-slate-200'>
                          {api.path}
                        </td>
                        <td className='p-3 text-center text-slate-400 font-mono'>
                          {api.auth}
                        </td>
                        <td className='p-3 text-slate-300'>{api.who}</td>
                        <td className='p-3 text-slate-400 leading-normal'>
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
                    className='scroll-mt-24 pl-5 border-l-2 border-emerald-500/40 space-y-3 bg-emerald-950/10 p-4 rounded-r-xl'
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

                    {/* Anchor 3.4.5: Visual Infrastructure Deployment Pipeline Block */}
                    {sub.anchor === '3.4.5' && (
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-mono text-[11px]'>
                        <div className='p-4 rounded-xl border border-white/10 bg-slate-950 space-y-2'>
                          <p className='text-[10px] uppercase font-bold text-slate-400'>
                            Fig 25: Application Code Flow Runtime
                          </p>
                          <div className='p-2 border border-white/10 rounded bg-slate-900 text-slate-200'>
                            Local Edits → GitHub Remote Source Tree
                          </div>
                          <div className='grid grid-cols-2 gap-2 text-center text-[10px] pt-1'>
                            <div className='p-2 border border-blue-500/30 bg-blue-950/40 text-blue-400 font-bold rounded'>
                              Staging: Vercel/Render
                            </div>
                            <div className='p-2 border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 font-bold rounded'>
                              Prod: DigitalOcean App
                            </div>
                          </div>
                        </div>

                        <div className='p-4 rounded-xl border border-white/10 bg-slate-950 space-y-2'>
                          <p className='text-[10px] uppercase font-bold text-slate-400'>
                            Fig 26: Persistence Storage Layers
                          </p>
                          <div className='p-2 border border-white/10 rounded bg-slate-900 text-slate-300'>
                            SQL Engine: Supabase Cloud (PostgreSQL 17)
                          </div>
                          <div className='p-2 border border-white/10 rounded bg-slate-900 text-slate-300'>
                            Asset Storage: DigitalOcean Spaces Object Bucket CDN
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Anchor 3.3: Software Testing Specification Tables */}
            {section.anchor === '3.3' && (
              <div className='space-y-8 pt-4'>
                {/* Unit Testing Grid */}
                <div className='space-y-3'>
                  <h4 className='text-sm font-bold text-slate-200 flex items-center gap-2'>
                    <span className='w-1.5 h-3 bg-blue-500 rounded-sm' />
                    Table IX: Unit Logic Testing Plan
                  </h4>
                  <div className='overflow-x-auto border border-white/10 rounded-xl bg-slate-950/80 shadow-md'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-900 border-b border-white/10 text-emerald-400 font-bold'>
                          <th className='p-2.5 w-16 text-center font-mono'>
                            ID
                          </th>
                          <th className='p-2.5 w-44 text-blue-400'>
                            Target Unit
                          </th>
                          <th className='p-2.5'>Injected Context Parameters</th>
                          <th className='p-2.5 text-emerald-400'>
                            Expected Outcome
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-white/5'>
                        {unitTestingData.map(ut => (
                          <tr
                            key={ut.id}
                            className='hover:bg-white/5 transition-colors'
                          >
                            <td className='p-2.5 text-center font-mono font-bold text-slate-500'>
                              {ut.id}
                            </td>
                            <td className='p-2.5 font-semibold text-slate-200'>
                              {ut.target}
                            </td>
                            <td className='p-2.5 font-mono text-[11px] text-slate-400'>
                              {ut.input}
                            </td>
                            <td className='p-2.5 text-slate-300 leading-normal'>
                              {ut.outcome}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Integration Testing Grid */}
                <div className='space-y-3'>
                  <h4 className='text-sm font-bold text-slate-200 flex items-center gap-2'>
                    <span className='w-1.5 h-3 bg-purple-500 rounded-sm' />
                    Table X: Gateway Integration Testing
                  </h4>
                  <div className='overflow-x-auto border border-white/10 rounded-xl bg-slate-950/80 shadow-md'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-900 border-b border-white/10 text-emerald-400 font-bold'>
                          <th className='p-2.5 w-16 text-center font-mono'>
                            ID
                          </th>
                          <th className='p-2.5 w-44 text-purple-400'>
                            Gateway Path
                          </th>
                          <th className='p-2.5'>Injected JSON Models</th>
                          <th className='p-2.5 text-emerald-400'>
                            Expected API Response
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-white/5'>
                        {integrationTestingData.map(it => (
                          <tr
                            key={it.id}
                            className='hover:bg-white/5 transition-colors'
                          >
                            <td className='p-2.5 text-center font-mono font-bold text-slate-500'>
                              {it.id}
                            </td>
                            <td className='p-2.5 font-mono font-semibold text-slate-200'>
                              {it.target}
                            </td>
                            <td className='p-2.5 text-slate-400 leading-tight'>
                              {it.input}
                            </td>
                            <td className='p-2.5 text-slate-300 leading-normal'>
                              {it.outcome}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* System Testing Grid */}
                <div className='space-y-3'>
                  <h4 className='text-sm font-bold text-slate-200 flex items-center gap-2'>
                    <span className='w-1.5 h-3 bg-amber-500 rounded-sm' />
                    Table XI: Full System E2E Scenarios
                  </h4>
                  <div className='overflow-x-auto border border-white/10 rounded-xl bg-slate-950/80 shadow-md'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-900 border-b border-white/10 text-emerald-400 font-bold'>
                          <th className='p-2.5 w-16 text-center font-mono'>
                            ID
                          </th>
                          <th className='p-2.5 w-52 text-amber-400'>
                            System Scenario
                          </th>
                          <th className='p-2.5'>Manual Step Sequence</th>
                          <th className='p-2.5 text-emerald-400'>
                            QA Criteria
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-white/5'>
                        {systemTestingData.map(st => (
                          <tr
                            key={st.id}
                            className='hover:bg-white/5 transition-colors'
                          >
                            <td className='p-2.5 text-center font-mono font-bold text-slate-500'>
                              {st.id}
                            </td>
                            <td className='p-2.5 font-semibold text-slate-200 leading-tight'>
                              {st.scenario}
                            </td>
                            <td className='p-2.5 font-mono text-[11px] text-slate-400'>
                              {st.steps}
                            </td>
                            <td className='p-2.5 text-slate-300 leading-normal'>
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

            {/* Anchor 3.4: Responsibilities Allocation & Gantt Roadmap */}
            {section.anchor === '3.4' && (
              <div className='space-y-6 pt-4'>
                <div className='space-y-3'>
                  <h4 className='text-sm font-bold text-slate-200'>
                    Table XVI: Manuscript Structure Responsibility Allocations
                  </h4>
                  <div className='overflow-x-auto border border-white/10 rounded-xl bg-slate-950/80 shadow-md'>
                    <table className='w-full text-left border-collapse text-xs'>
                      <thead>
                        <tr className='bg-slate-900 border-b border-white/10 text-emerald-400 font-bold'>
                          <th className='p-2.5'>Manuscript Section Metric</th>
                          <th className='p-2.5 w-56 text-purple-400'>
                            Assigned Owner
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-white/5'>
                        {organizationData.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`hover:bg-white/5 transition-colors ${
                              row.isHeader
                                ? 'bg-slate-900/60 font-bold text-blue-400'
                                : ''
                            }`}
                          >
                            <td
                              className={`p-2.5 ${row.isHeader ? 'pl-3' : 'pl-6 text-slate-300'}`}
                            >
                              {row.task}
                            </td>
                            <td className='p-2.5 font-mono text-slate-400'>
                              {row.assignee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Horizontal Gantt Milestone Panel */}
                <div className='p-5 border border-white/10 rounded-xl bg-slate-950/90 space-y-3 font-mono text-[11px] shadow-lg'>
                  <p className='text-[10px] font-bold text-slate-400 uppercase tracking-wider'>
                    📅 Milestone Tracking Matrix (Semester 2 Development Block
                    2026)
                  </p>
                  <div className='space-y-2'>
                    <div className='grid grid-cols-6 border-b border-white/10 pb-2 text-slate-400 text-center text-[9px] font-bold'>
                      <span className='text-left font-sans text-slate-400'>
                        Milestone Task
                      </span>
                      <span>Mar 26</span>
                      <span>Apr 26</span>
                      <span>May 26</span>
                      <span>Jun 26</span>
                      <span>Jul 26</span>
                    </div>
                    <div className='grid grid-cols-6 items-center py-1.5 border-b border-dashed border-white/5'>
                      <span className='font-sans text-slate-300'>
                        S2-01 University Data Gathering
                      </span>
                      <span className='h-2 rounded bg-blue-500 mx-1' />
                      <span className='h-2 rounded bg-blue-400/50 mx-1' />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className='grid grid-cols-6 items-center py-1.5 border-b border-dashed border-white/5'>
                      <span className='font-sans text-slate-300'>
                        S2-02/03 Full Stack App Build Sync
                      </span>
                      <span />
                      <span className='h-2 rounded bg-purple-500 mx-1' />
                      <span className='h-2 rounded bg-purple-500 mx-1' />
                      <span className='h-2 rounded bg-purple-400/50 mx-1' />
                      <span />
                    </div>
                    <div className='grid grid-cols-6 items-center py-1.5 border-b border-dashed border-white/5'>
                      <span className='font-sans text-slate-300'>
                        S2-05/06 Quality Verification Running
                      </span>
                      <span />
                      <span />
                      <span />
                      <span className='h-2 rounded bg-emerald-500 mx-1' />
                      <span className='h-2 rounded bg-emerald-400/50 mx-1' />
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
