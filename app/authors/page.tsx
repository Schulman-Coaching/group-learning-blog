import prisma from '@/lib/prisma'
import { Users, Calendar, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function AuthorsPage() {
  const authors = await prisma.author.findMany({
    include: {
      _count: {
        select: {
          writings: true
        }
      }
    },
    orderBy: [
      { name: 'asc' }
    ]
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Authors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the pioneering group psychoanalysts whose work has shaped the field. 
            Explore their biographies, writings, and contributions to group therapy and psychoanalysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <article key={author.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{author.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {author.nationality}
                      {author.birthYear && (
                        <span> • {author.birthYear}{author.deathYear ? ` - ${author.deathYear}` : ''}</span>
                      )}
                    </p>
                  </div>
                </div>

                {author.bio && (
                  <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                    {author.bio}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm">{author._count.writings} writings</span>
                  </div>

                  <Link
                    href={`/authors/${author.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {authors.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No authors found.</p>
          </div>
        )}
      </div>
    </div>
  )
}