import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { ConditionalSidebar } from './components/conditional-sidebar'
import ConditionalHeader from './components/conditional-header'
import Footer from './components/footer'
import SettingsSection from './components/setting'
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
          <ConditionalHeader />

          {/* Standard main body container layout */}
          <div className='grow bg-primary-foreground flex flex-col'>
            <SidebarProvider>
              <div className='flex w-full grow items-stretch min-h-[calc(100vh-4rem)]'>
                {/* Left Side: Your regular, steady sidebar wrapper */}
                <ConditionalSidebar />

                {/* Right Side: The standard manuscript core text area container */}
                <main className='grow w-full relative'>
                  <div className='mb-6 flex items-center'>
                    <SidebarTrigger className='cursor-pointer' />
                  </div>
                  {children}
                </main>
              </div>
            </SidebarProvider>
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
