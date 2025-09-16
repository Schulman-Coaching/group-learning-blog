'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleDropdownClose = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <div className="h-6 w-6 text-white text-lg">🧠</div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Group Learning Lab
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('blog')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'blog' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/blog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      All Posts
                    </Link>
                    <Link
                      href="/blog/categories/group-dynamics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Group Dynamics
                    </Link>
                    <Link
                      href="/blog/categories/metacognition"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Metacognition
                    </Link>
                    <Link
                      href="/blog/categories/facilitation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Facilitation
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Research Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('research')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Research
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'research' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/research"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Research Overview
                    </Link>
                    <Link
                      href="/research/case-studies"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/research/methodology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Methodology
                    </Link>
                    <Link
                      href="/research/publications"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Publications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('tools')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'tools' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/tools"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      All Tools
                    </Link>
                    <Link
                      href="/tools/assessment"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Assessment Tools
                    </Link>
                    <Link
                      href="/tools/facilitation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Facilitation Guides
                    </Link>
                    <Link
                      href="/tools/templates"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Templates
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => handleDropdownToggle('mobile')}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {activeDropdown === 'mobile' && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={handleDropdownClose}
              >
                Home
              </Link>

              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900">Blog</div>
                <Link
                  href="/blog"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  All Posts
                </Link>
                <Link
                  href="/blog/categories/group-dynamics"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Group Dynamics
                </Link>
                <Link
                  href="/blog/categories/metacognition"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Metacognition
                </Link>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900">Research</div>
                <Link
                  href="/research"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Research Overview
                </Link>
                <Link
                  href="/research/case-studies"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Case Studies
                </Link>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900">Tools</div>
                <Link
                  href="/tools"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  All Tools
                </Link>
                <Link
                  href="/tools/assessment"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Assessment Tools
                </Link>
              </div>

              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={handleDropdownClose}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={handleDropdownClose}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && activeDropdown !== 'mobile' && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleDropdownClose}
        />
      )}
    </nav>
  )
}

export default Navigation