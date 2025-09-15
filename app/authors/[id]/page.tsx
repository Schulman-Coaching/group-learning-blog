import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { Users, Calendar, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface AuthorPageProps {
  params: { id: string }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const author = await prisma.author.findUnique({
    where: { id: params.id },
    include: {
      writings: {
        orderBy: [
          { year: 'desc' },
          { title: 'asc' }
        ]
      }
    }
  })

  if (!author) {
    notFound()
  }

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/authors" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Authors
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Author Header */}
            <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center space-x-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
                  <p className="text-blue-100 text-lg">
                    {author.nationality}
                    {author.birthYear && (
                      <span> • {author.birthYear}{author.deathYear ? ` - ${author.deathYear}` : ''}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            {author.bio && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Biography</h2>
                <p className="text-gray-700 leading-relaxed">{author.bio}</p>
              </div>
            )}

            {/* Writings */}
            <div className="px-8 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Writings ({author.writings.length})
              </h2>

              {author.writings.length > 0 ? (
                <div className="space-y-6">
                  {author.writings.map((writing) => (
                    <article key={writing.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-4">
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {writing.title}
                        </h3>
                      </Link>

                      {writing.excerpt && (
                        <p className="text-gray-600 mb-4">{writing.excerpt}</p>
                      )}

                      {parseTags(writing.tags).length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {parseTags(writing.tags).slice(0, 5).map((tag: string) => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <Link
                        href={`/writings/${writing.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                      >
                        <span>Read Full Text</span>
                        <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No writings available for this author yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}