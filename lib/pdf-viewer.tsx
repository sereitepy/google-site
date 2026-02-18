'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FileText,
  Maximize2,
  Minimize2,
  Expand,
  Download,
} from 'lucide-react'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  fileUrl: string
  title?: string
}

// ── Download helper ─────────────────────────────────────────────────────────
async function downloadPDF(fileUrl: string, title: string) {
  try {
    const response = await fetch(fileUrl)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = title.endsWith('.pdf') ? title : `${title}.pdf`
    a.click()
    URL.revokeObjectURL(url)
  } catch {
    window.open(fileUrl, '_blank')
  }
}

// ── Hook: measure container width ───────────────────────────────────────────
function useContainerWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(800)
  useEffect(() => {
    if (!ref.current) return
    const observer = new ResizeObserver(entries => {
      setWidth(entries[0].contentRect.width)
    })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return width
}

// ── Shared Toolbar ──────────────────────────────────────────────────────────
function Toolbar({
  title,
  fileUrl,
  scale,
  pageNumber,
  numPages,
  onZoomIn,
  onZoomOut,
  onRotate,
  onReset,
  onPrev,
  onNext,
  onPageInput,
  isFullscreen,
  onToggleFullscreen,
  onScrollToTop,
  scrollContainerId,
}: {
  title: string
  fileUrl: string
  scale: number
  pageNumber: number
  numPages: number | null
  onZoomIn: () => void
  onZoomOut: () => void
  onRotate: () => void
  onReset: () => void
  onPrev: () => void
  onNext: () => void
  onPageInput: (e: React.KeyboardEvent<HTMLInputElement>) => void
  isFullscreen: boolean
  onToggleFullscreen: () => void
  onScrollToTop: () => void
  scrollContainerId: string
}) {
  return (
    <div className='shrink-0 flex flex-row items-center justify-between px-5 py-3 border-b border-border bg-card gap-2 flex-wrap'>
      <div className='flex items-center gap-2 min-w-0'>
        <FileText size={16} className='text-muted-foreground shrink-0' />
        <span className='text-sm font-semibold text-card-foreground truncate max-w-[30vw]'>
          {title}
        </span>
      </div>

      <div className='flex items-center gap-1 flex-wrap'>
        {/* Zoom */}
        <button
          onClick={onZoomOut}
          className='p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-accent-foreground'
          title='Zoom out'
        >
          <ZoomOut size={16} />
        </button>
        <span className='text-xs text-muted-foreground w-10 text-center tabular-nums'>
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={onZoomIn}
          className='p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-accent-foreground'
          title='Zoom in'
        >
          <ZoomIn size={16} />
        </button>

        <div className='w-px h-5 bg-border mx-1' />

        {/* Rotate */}
        <button
          onClick={onRotate}
          className='p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-accent-foreground'
          title='Rotate 90°'
        >
          <RotateCw size={16} />
        </button>

        {/* Reset */}
        <button
          onClick={onReset}
          className='px-2 py-1 text-xs rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-accent-foreground'
        >
          Reset
        </button>

        <div className='w-px h-5 bg-border mx-1' />

        {/* Page navigation */}
        <button
          onClick={onPrev}
          disabled={pageNumber <= 1}
          className='p-1.5 rounded-lg hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-muted-foreground hover:text-accent-foreground'
        >
          <ChevronLeft size={16} />
        </button>
        <div className='flex items-center gap-1 text-xs text-card-foreground'>
          <input
            type='number'
            value={pageNumber}
            onChange={e => {
              const val = parseInt(e.target.value)
              if (!isNaN(val) && val >= 1 && val <= (numPages ?? 1)) {
                // scroll to page on change
                const el = document.querySelector(
                  `#${scrollContainerId} #page-${val}`
                )
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            onKeyDown={onPageInput}
            min={1}
            max={numPages ?? 1}
            className='w-10 text-center border border-input bg-background text-foreground rounded-md py-0.5 text-xs focus:outline-none focus:ring-1 focus:ring-ring'
          />
          <span className='text-muted-foreground'>/ {numPages ?? '—'}</span>
        </div>
        <button
          onClick={onNext}
          disabled={pageNumber >= (numPages ?? 1)}
          className='p-1.5 rounded-lg hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-muted-foreground hover:text-accent-foreground'
        >
          <ChevronRight size={16} />
        </button>

        <div className='w-px h-5 bg-border mx-1' />

        {/* Download */}
        <button
          onClick={() => downloadPDF(fileUrl, title)}
          className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border hover:bg-accent transition-colors text-muted-foreground hover:text-accent-foreground text-xs font-medium'
          title='Download PDF'
        >
          <Download size={13} />
          Download
        </button>

        {/* Fullscreen toggle */}
        <button
          onClick={onToggleFullscreen}
          className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-xs font-medium'
        >
          {isFullscreen ? <Minimize2 size={13} /> : <Expand size={13} />}
          {isFullscreen ? 'Exit Full Screen' : 'Full Screen'}
        </button>
      </div>
    </div>
  )
}

// ── Shared PDF Body ─────────────────────────────────────────────────────────
function PDFBody({
  scrollRef,
  containerId,
  fileUrl,
  numPages,
  setNumPages,
  scale,
  rotation,
  onScrollToTop,
  onPageChange,
}: {
  scrollRef: React.RefObject<HTMLDivElement>
  containerId: string
  fileUrl: string
  numPages: number | null
  setNumPages: (n: number) => void
  scale: number
  rotation: number
  onScrollToTop: () => void
  onPageChange: (page: number) => void
}) {
  const innerRef = useRef<HTMLDivElement>(null)
  const containerWidth = useContainerWidth(innerRef)
  const pageWidth = Math.max(100, (containerWidth - 64) * scale)

  // Track current visible page via IntersectionObserver
  useEffect(() => {
    if (!scrollRef.current || !numPages) return
    const container = scrollRef.current

    const observers: IntersectionObserver[] = []

    for (let i = 1; i <= numPages; i++) {
      const el = container.querySelector(`#page-${i}`)
      if (!el) continue

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              onPageChange(i)
            }
          })
        },
        {
          root: container,
          // Fire when page reaches at least 30% visible
          threshold: 0.3,
        }
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach(o => o.disconnect())
  }, [numPages, scrollRef, onPageChange])

  return (
    <>
      <div
        id={containerId}
        ref={scrollRef}
        className='flex-1 overflow-y-auto overflow-x-auto bg-muted'
      >
        <div
          ref={innerRef}
          className='min-h-full flex flex-col items-center py-6 gap-4'
        >
          <Document
            file={fileUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className='flex items-center justify-center h-64'>
                <div className='w-8 h-8 border-2 border-border border-t-foreground rounded-full animate-spin' />
              </div>
            }
            error={
              <div className='flex flex-col items-center justify-center h-64 gap-3 text-muted-foreground'>
                <FileText size={36} />
                <p className='text-sm'>Could not load PDF</p>
              </div>
            }
          >
            {Array.from({ length: numPages ?? 0 }, (_, i) => (
              <div
                key={i + 1}
                id={`page-${i + 1}`}
                className='shadow-lg rounded-sm overflow-hidden'
              >
                <Page
                  pageNumber={i + 1}
                  width={pageWidth}
                  rotate={rotation}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>

      <div className='shrink-0 flex items-center justify-center py-2 border-t border-border bg-card'>
        <button
          onClick={onScrollToTop}
          className='text-xs text-muted-foreground hover:text-foreground transition-colors'
        >
          ↑ Back to top
        </button>
      </div>
    </>
  )
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function PDFViewer({ fileUrl, title = '' }: PDFViewerProps) {
  const [open, setOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [rotation, setRotation] = useState(0)

  const dialogScrollRef = useRef<HTMLDivElement>(null)
  const fullscreenScrollRef = useRef<HTMLDivElement>(null)

  const activeContainerId = isFullscreen ? 'pdf-fullscreen' : 'pdf-dialog'
  const activeScrollRef = isFullscreen ? fullscreenScrollRef : dialogScrollRef

  // Scroll to a specific page inside the active container
  const scrollToPage = useCallback(
    (page: number) => {
      const container = activeScrollRef.current
      if (!container) return
      const el = container.querySelector(`#page-${page}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [activeScrollRef]
  )

  const goToPrev = () => {
    const prev = Math.max(1, pageNumber - 1)
    setPageNumber(prev)
    scrollToPage(prev)
  }

  const goToNext = () => {
    const next = Math.min(numPages ?? pageNumber, pageNumber + 1)
    setPageNumber(next)
    scrollToPage(next)
  }

  const zoomIn = () =>
    setScale(s => Math.min(3, parseFloat((s + 0.25).toFixed(2))))
  const zoomOut = () =>
    setScale(s => Math.max(0.5, parseFloat((s - 0.25).toFixed(2))))
  const rotate = () => setRotation(r => (r + 90) % 360)
  const resetView = () => {
    setScale(1.0)
    setRotation(0)
  }

  const handlePageInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = parseInt((e.target as HTMLInputElement).value)
      if (!isNaN(val) && val >= 1 && val <= (numPages ?? 1)) {
        setPageNumber(val)
        scrollToPage(val)
      }
    }
  }

  const scrollToTop = useCallback(() => {
    activeScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeScrollRef])

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setOpen(false)
      setIsFullscreen(true)
    } else {
      setIsFullscreen(false)
      setOpen(true)
    }
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isFullscreen])

  const toolbarProps = {
    title,
    fileUrl,
    scale,
    pageNumber,
    numPages,
    onZoomIn: zoomIn,
    onZoomOut: zoomOut,
    onRotate: rotate,
    onReset: resetView,
    onPrev: goToPrev,
    onNext: goToNext,
    onPageInput: handlePageInput,
    isFullscreen,
    onToggleFullscreen: toggleFullscreen,
    onScrollToTop: scrollToTop,
    scrollContainerId: activeContainerId,
  }

  const pdfBodyProps = {
    fileUrl,
    numPages,
    setNumPages,
    scale,
    rotation,
    onScrollToTop: scrollToTop,
    onPageChange: setPageNumber,
  }

  return (
    <>
      {/* ── CARD THUMBNAIL ── */}
      <div
        onClick={() => setOpen(true)}
        className='group relative w-48 cursor-pointer rounded-md overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card'
        title={`Open ${title}`}
      >
        <div className='pointer-events-none select-none overflow-hidden'>
          <Document
            file={fileUrl}
            loading={
              <div className='h-64 flex items-center justify-center bg-muted'>
                <div className='w-6 h-6 border-2 border-border border-t-foreground rounded-full animate-spin' />
              </div>
            }
            error={
              <div className='h-64 flex flex-col items-center justify-center bg-muted gap-2 text-muted-foreground'>
                <FileText size={28} />
                <span className='text-xs'>Failed to load</span>
              </div>
            }
          >
            <Page
              pageNumber={1}
              width={192}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center'>
          <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1 text-white'>
            <Maximize2 size={24} />
            <span className='text-xs font-medium tracking-wide'>Open</span>
          </div>
        </div>

        <div className='px-3 py-2 border-t border-border bg-card'>
          <p className='text-xs font-medium text-card-foreground truncate'>
            {title}
          </p>
          {numPages && (
            <p className='text-[10px] text-muted-foreground'>
              {numPages} pages
            </p>
          )}
        </div>
      </div>

      {/* ── DIALOG (95vw / 90vh) ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-[95vw] w-[95vw] h-[90vh] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl'>
          <DialogHeader className='p-0 space-y-0'>
            <DialogTitle className='sr-only'>{title}</DialogTitle>
            <Toolbar {...toolbarProps} scrollContainerId='pdf-dialog' />
          </DialogHeader>
          <PDFBody
            scrollRef={dialogScrollRef}
            containerId='pdf-dialog'
            {...pdfBodyProps}
          />
        </DialogContent>
      </Dialog>

      {/* ── FULLSCREEN OVERLAY ── */}
      {isFullscreen && (
        <div className='fixed inset-0 z-9999 flex flex-col bg-background'>
          <Toolbar {...toolbarProps} scrollContainerId='pdf-fullscreen' />
          <PDFBody
            scrollRef={fullscreenScrollRef}
            containerId='pdf-fullscreen'
            {...pdfBodyProps}
          />
        </div>
      )}
    </>
  )
}
