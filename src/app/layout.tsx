import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import localFont from 'next/font/local'

const cygre = localFont({ src: './Cygre-Medium.ttf' })

export const metadata: Metadata = {
  title: 'slshptt',
  description: 'slashpotato\'s website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cygre.className + ' mocha'}>
        <main className='bg-ctp-base min-h-screen text-ctp-subtext0'>
          <header className='h-max p-4 w-full'>
            <div className='bg-ctp-mantle outline-ctp-lavender outline outline-2 w-full h-10 rounded-full flex justify-center items-center'>
              <Link href={'/'} className='fixed text-ctp-subtext1'>slshptt</Link>
            </div>
          </header>

          {children}
        </main>
      </body>
    </html>
  )
}
