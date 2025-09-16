'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, BookOpen } from 'lucide-react'

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleDropdownClose = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Group Psychoanalysis Archive
                </h1>
                <p className="text-xs text-gray-600">Louis Ormont & Beyond</p>
              </div>
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

            {/* Writings Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('writings')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Writings
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'writings' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/writings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      All Writings
                    </Link>
                    <Link
                      href="/writings?author=louis-ormont"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Louis Ormont
                    </Link>
                    <Link
                      href="/writings?type=book"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Books
                    </Link>
                    <Link
                      href="/writings?type=essay"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Essays & Papers
                    </Link>
                    <Link
                      href="/writings?type=lecture"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Lectures
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Authors Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('authors')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Authors
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'authors' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/authors"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      All Authors
                    </Link>
                    <Link
                      href="/authors/louis-ormont"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Louis Ormont
                    </Link>
                    <Link
                      href="/authors?era=pioneers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Early Pioneers
                    </Link>
                    <Link
                      href="/authors?era=contemporary"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Contemporary
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Forum Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('forum')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Forum
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'forum' && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/forum"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      All Discussions
                    </Link>
                    <Link
                      href="/forum/new"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Start Discussion
                    </Link>
                    <Link
                      href="/forum?category=theory"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Theory & Practice
                    </Link>
                    <Link
                      href="/forum?category=case-study"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/forum?category=questions"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={handleDropdownClose}
                    >
                      Q&A
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/search"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Search
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
                <div className="px-3 py-2 text-base font-medium text-gray-900">Writings</div>
                <Link
                  href="/writings"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  All Writings
                </Link>
                <Link
                  href="/writings?author=louis-ormont"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Louis Ormont
                </Link>
                <Link
                  href="/writings?type=book"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Books
                </Link>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900">Authors</div>
                <Link
                  href="/authors"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  All Authors
                </Link>
                <Link
                  href="/authors/louis-ormont"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Louis Ormont
                </Link>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900">Forum</div>
                <Link
                  href="/forum"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  All Discussions
                </Link>
                <Link
                  href="/forum/new"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={handleDropdownClose}
                >
                  Start Discussion
                </Link>
              </div>

              <Link
                href="/search"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={handleDropdownClose}
              >
                Search
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