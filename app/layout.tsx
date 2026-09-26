import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { ConditionalSidebar } from './components/conditional-sidebar'
import ConditionalHeader from './components/conditional-header'
import Footer from './components/footer'
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
  title: 'SakoLife — A clearer path to a future in tech',
  description: 'Explore the story, process, and lessons behind SakoLife, a student-centered guide to technology majors and Cambodian universities.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/20`}>
        <div className='relative flex min-h-screen flex-col overflow-x-hidden'>
          <div className='grow flex flex-col'>
            <div className='flex w-full grow items-stretch min-h-[calc(100vh-4rem)]'>
              <ConditionalSidebar />
              <main className='relative flex min-w-0 grow flex-col'>
                <ConditionalHeader />
                <div className='grow'>{children}</div>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
