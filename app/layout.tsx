import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ConditionalSidebar } from './components/conditional-sidebar'
import ConditionalHeader from './components/conditional-header'
import Footer from './components/footer'
import { SmoothScrollProvider } from './components/smooth-scroll'
import 'lenis/dist/lenis.css'
import './globals.css'

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sakol Life - Navigating Higher Education',
  description:
    'An interactive digital guide for Cambodian students transitioning into tech university majors.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary`}
      >
        <SmoothScrollProvider>
          <div className='flex flex-col justify-between min-h-screen relative overflow-x-hidden'>
            <div className='grow flex flex-col'>
              <SidebarProvider>
                <div className='flex w-full grow items-stretch min-h-[calc(100vh-4rem)]'>
                  <ConditionalSidebar />

                  <main className='grow w-full relative min-w-0 flex flex-col'>
                    <ConditionalHeader />
                    <div className='grow'>{children}</div>
                  </main>
                </div>
              </SidebarProvider>
            </div>

            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
