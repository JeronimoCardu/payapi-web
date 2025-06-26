import { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/Header'
import { dmSerifDisplay } from '@/lib/fonts'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PayAPI',
  description: 'Pay API web page',
  icons: '/assets/favicon-32x32.png',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        cz-shortcut-listen='true'
        className={`${dmSerifDisplay.className} bg-[#EDF3F8] relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
