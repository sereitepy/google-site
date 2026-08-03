'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const VIDEO_PUBLIC_ID =
  'Screen_Recording_2026-06-29_at_8.38.11_in_the_evening_atzxkc'

export default function LaptopMockup() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // 3D Tilt Effect Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    videoRef.current?.pause()
    if (videoRef.current) videoRef.current.currentTime = 0
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className='w-full max-w-xl mx-auto select-none perspective-1000'
    >
      <div className='relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800 to-neutral-950 p-2 shadow-2xl backdrop-blur-xl'>
        <div className='relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-black group'>
          <Link
            href='https://www.sakollife.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-full'
          >
            <video
              ref={videoRef}
              src={`https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${VIDEO_PUBLIC_ID}.mp4`}
              poster={`https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${VIDEO_PUBLIC_ID}.jpg`}
              muted
              loop
              playsInline
              className='absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]'
            />
          </Link>
        </div>
      </div>

      {/* Laptop Base */}
      <div className='relative h-3 rounded-b-xl bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-md'>
        <div className='absolute left-1/2 top-0 h-1.5 w-1/5 -translate-x-1/2 rounded-b-md bg-neutral-950/60' />
      </div>
      <div className='mx-auto h-2 w-[55%] rounded-b-2xl bg-neutral-950/40 blur-xs' />
    </motion.div>
  )
}
