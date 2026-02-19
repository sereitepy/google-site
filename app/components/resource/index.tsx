import { capstoneUrl, presentation1Url, presentation2Url } from '@/lib/api'
import PDFWrapper from '@/lib/pdf-wrapper'
import GitHubProjectCard from '../github-card'
import GitHubRepoCard from '../github-card/github-repo-card'

export default function ProjectResource() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold text-center'>Project Resources</h1>

      <section className='flex flex-wrap gap-3 items-start justify-center'>
        <PDFWrapper
          fileUrl={capstoneUrl}
          title='Sakol Life Capstone Document'
        />
        <PDFWrapper
          fileUrl={presentation1Url}
          title='Project Proposal Presentation 1'
        />
        <PDFWrapper
          fileUrl={presentation2Url}
          title='Project Proposal Presentation 2'
        />
        <div className='flex flex-col gap-3'>
          <GitHubProjectCard
            href='https://github.com/users/sereitepy/projects/2/views/1?filterQuery='
            title='Sakol Life Team - Project Board'
            description='Task tracking for final year project'
          />
          <GitHubRepoCard />
        </div>
      </section>
    </div>
  )
}
