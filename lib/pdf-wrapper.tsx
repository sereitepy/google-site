'use client'

import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('@/lib/pdf-viewer'), { ssr: false })

export default function PDFWrapper({
  fileUrl,
  title,
}: {
  fileUrl: string
  title: string
}) {
  return <PDFViewer fileUrl={fileUrl} title={title} />
}
