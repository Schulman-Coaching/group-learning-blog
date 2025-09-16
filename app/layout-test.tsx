import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Group Learning Blog',
  description: 'Simple test version',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>TEST HEADER</div>
        <main>
          {children}
        </main>
        <div>TEST FOOTER</div>
      </body>
    </html>
  )
}