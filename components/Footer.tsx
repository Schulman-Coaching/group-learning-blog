import Link from 'next/link'
import { BookOpen, Users, MessageSquare, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Group Psychoanalysis Archive</h3>
                <p className="text-sm text-gray-400">Louis Ormont & Beyond</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A comprehensive digital archive dedicated to preserving and sharing the writings of Louis Ormont and other pioneering group psychoanalysts. Explore their groundbreaking work and join our community of practitioners and scholars.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/writings" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Writings Library</span>
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Authors</span>
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Community Forum</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@grouppsychoanalysis.org" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About This Archive
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-gray-300 hover:text-white transition-colors">
                  Contribute Materials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Group Psychoanalysis Archive. Dedicated to preserving the legacy of Louis Ormont and pioneering group psychoanalysts.
          </p>
        </div>
      </div>
    </footer>
  )
}