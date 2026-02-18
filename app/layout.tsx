import { Effect } from '@/components/animate-ui/primitives/effects/effect'
import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import Header from './components/header'
import './globals.css'
import SettingsSection from './components/setting'
import Footer from './components/footer'

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sakol Life',
  description: 'Navigating to your future',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <div className='flex flex-col justify-between min-h-screen relative'>
          <div className='sticky top-0 shadow-xs shadow-sidebar-ring z-10'>
            <Header />
          </div>
          <div className='grow bg-primary-foreground'>
            {/* <Effect slide> */}
            <div className=''>{children}</div>
            {/* </Effect> */}
          </div>

          <div className='fixed bottom-10 right-10 z-50'>
            <SettingsSection />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
