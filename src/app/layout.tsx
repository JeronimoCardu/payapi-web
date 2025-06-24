import { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/Header'
import { dmSerifDisplay } from '@/lib/fonts'

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
        className={`${dmSerifDisplay.className} relative p-[3rem_2rem]`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
