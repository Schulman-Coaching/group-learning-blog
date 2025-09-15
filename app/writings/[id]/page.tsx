import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { BookOpen, Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'

interface WritingPageProps {
  params: { id: string }
}

export default async function WritingPage({ params }: WritingPageProps) {
  const writing = await prisma.writing.findUnique({
    where: { id: params.id },
    include: {
      author: true
    }
  })

  if (!writing) {
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

  const tags = parseTags(writing.tags)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/writings" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Writings Library
          </Link>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {getTypeLabel(writing.type)}
                  </span>
                  {writing.year && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      <Calendar className="h-4 w-4 mr-1" />
                      {writing.year}
                    </span>
                  )}
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {writing.title}
                </h1>

                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-5 w-5" />
                    <span>{writing.author.name}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span>Published {new Date(writing.createdAt).toLocaleDateString()}</span>
                </div>

                {writing.excerpt && (
                  <p className="text-lg text-gray-600 italic border-l-4 border-blue-200 pl-4 py-2">
                    {writing.excerpt}
                  </p>
                )}
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {writing.content}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About {writing.author.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {writing.author.bio || 'No biography available.'}
                </p>
                <Link 
                  href={`/authors/${writing.author.id}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  View all writings by {writing.author.name}
                  <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}