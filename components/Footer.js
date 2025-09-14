import Link from 'next/link'
import { Brain, Mail, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Group Learning Lab
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Exploring the fascinating intersection of group dynamics and metacognition. 
              Helping groups become more aware of their collective learning processes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <nav className="space-y-2">
              <Link href="/blog" className="text-gray-300 hover:text-white block">
                Blog
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-white block">
                Resources
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-white block">
                Case Studies
              </Link>
              <Link href="/tools" className="text-gray-300 hover:text-white block">
                Tools
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <nav className="space-y-2">
              <Link href="/about" className="text-gray-300 hover:text-white block">
                About
              </Link>
              <Link href="/newsletter" className="text-gray-300 hover:text-white block">
                Newsletter
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white block">
                Contact
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-white block">
                Community
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Group Learning Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}