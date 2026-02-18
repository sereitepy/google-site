'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function GitHubRepoCard() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'default'

  return (
    <a
      href='https://github.com/sereitepy/university-life'
      target='_blank'
      rel='noopener noreferrer'
      className='inline-block hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
    >
      <Image
        src={`https://github-readme-stats-three-delta-12.vercel.app/api/pin/?username=sereitepy&repo=university-life&theme=${theme}`}
        alt='university-life GitHub repo'
        width={400}
        height={120}
        unoptimized
        className=''
      />
    </a>
  )
}
