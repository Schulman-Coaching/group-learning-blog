import prisma from '@/lib/prisma'
import { BookOpen, Calendar, User, Filter, Search } from 'lucide-react'
import Link from 'next/link'

interface WritingWithAuthor {
  id: string
  title: string
  excerpt: string | null
  type: string
  year: number | null
  tags: string | null
  author: {
    name: string
  }
  createdAt: Date
}

interface SearchParams {
  q?: string
  type?: string
  author?: string
  year?: string
}

export default async function WritingsPage({ 
  searchParams 
}: { 
  searchParams: SearchParams 
}) {
  const { q, type, author, year } = searchParams

  // Build where clause based on search parameters
  const whereClause: any = {}
  
  if (q) {
    whereClause.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { content: { contains: q, mode: 'insensitive' } },
      { excerpt: { contains: q, mode: 'insensitive' } }
    ]
  }
  
  if (type) {
    whereClause.type = type
  }
  
  if (year) {
    whereClause.year = parseInt(year)
  }

  const writings = await prisma.writing.findMany({
    where: whereClause,
    include: {
      author: {
        select: { name: true }
      }
    },
    orderBy: [
      { year: 'desc' },
      { title: 'asc' }
    ]
  })

  // Get unique authors and years for filters
  const authors = await prisma.author.findMany({
    select: { id: true, name: true }
  })

  const writingTypes = ['BOOK', 'ESSAY', 'RESEARCH_PAPER', 'ARTICLE', 'BOOK_CHAPTER', 'LECTURE', 'INTERVIEW', 'CASE_STUDY']
  const years = [...new Set(writings.map(w => w.year).filter(Boolean))].sort((a, b) => (b || 0) - (a || 0))

  function getTypeLabel(type: string): string {
    return type.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
  }

  function parseTags(tags: string | null): string[] {
    if (!tags) return []
    try {
      return JSON.parse(tags)
    } catch {
      return []
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Writings Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the complete works of Louis Ormont and other pioneering group psychoanalysts. 
            Search, filter, and access rare texts and research papers.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Writings
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="search"
                    name="q"
                    defaultValue={q || ''}
                    placeholder="Search by title, content, or keywords..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="md:w-48">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  defaultValue={type || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  {writingTypes.map((t) => (
                    <option key={t} value={t}>{getTypeLabel(t)}</option>
                  ))}
                </select>
              </div>

              <div className="md:w-32">
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <select
                  id="year"
                  name="year"
                  defaultValue={year || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Years</option>
                  {years.map((y) => (
                    <option key={y} value={y?.toString() || ''}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Apply Filters</span>
              </button>
            </div>
          </form>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{writings.length}</span> writings
            {q && (
              <span> matching "<span className="font-semibold">{q}</span>"</span>
            )}
          </p>
        </div>

        {/* Writings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writings.map((writing) => (
            <article key={writing.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {getTypeLabel(writing.type)}
                  </span>
                  {writing.year && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <Calendar className="h-3 w-3 mr-1" />
                      {writing.year}
                    </span>
                  )}
                </div>

                <Link href={`/writings/${writing.id}`} className="block">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {writing.title}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {writing.excerpt || 'No excerpt available'}
                </p>

                <div className="flex items-center space-x-1 mb-4">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{writing.author.name}</span>
                </div>

                {parseTags(writing.tags).length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {parseTags(writing.tags).slice(0, 3).map((tag: string) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={`/writings/${writing.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {writings.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No writings found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your search or filter options.</p>
          </div>
        )}
      </div>
    </div>
  )
}