// laptop-mockup.tsx
'use client'

import Link from 'next/link'
import { useRef } from 'react'

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const VIDEO_PUBLIC_ID =
  'Screen_Recording_2026-06-29_at_8.38.11_in_the_evening_atzxkc'

export default function LaptopMockup() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div
      className='w-full max-w-lg mx-auto select-none'
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause()
        if (videoRef.current) videoRef.current.currentTime = 0
      }}
    >
      <div className='relative rounded-t-xl border-10 border-foreground bg-foreground p-1 shadow-2xl'>
        <div className='relative aspect-16/10 w-full overflow-hidden rounded-sm bg-background'>
          <Link
            href='https://www.sakollife.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <video
              ref={videoRef}
              src={`https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${VIDEO_PUBLIC_ID}.mp4`}
              poster={`https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${VIDEO_PUBLIC_ID}.jpg`}
              muted
              loop
              playsInline
              className='absolute inset-0 h-full w-full object-cover object-top'
            />
          </Link>
        </div>
      </div>

      <div className='relative h-3 rounded-b-lg bg-foreground'>
        <div className='absolute left-1/2 top-0 h-1.5 w-1/4 -translate-x-1/2 rounded-b-md bg-background/20' />
      </div>
      <div className='mx-auto h-1.5 w-[60%] rounded-b-xl bg-muted-foreground/40' />
    </div>
  )
}
