import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Group Learning Lab - Exploring Group Processes & Learning',
  description: 'Insights into group dynamics, metacognition, and the art of facilitating collective learning.',
  keywords: 'group learning, metacognition, facilitation, group dynamics, collective intelligence',
}

export default function RootLayout({ 
  children 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <div className="h-8 w-8 text-white">🧠</div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Group Learning Lab
                  </h1>
                  <p className="text-sm text-gray-600">Exploring group processes & learning about learning</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Resources</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Newsletter</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025 Group Learning Lab. Built with Next.js and deployed on Vercel.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
