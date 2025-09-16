import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { MessageSquare, Users, Eye, Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface ForumPostPageProps {
  params: { id: string }
}

export default async function ForumPostPage({ params }: ForumPostPageProps) {
  const post = await prisma.forumPost.findUnique({
    where: { id: params.id },
    include: {
      author: {
        select: { name: true, id: true }
      },
      comments: {
        include: {
          author: {
            select: { name: true, id: true }
          }
        },
        orderBy: { createdAt: 'asc' }
      },
      _count: {
        select: {
          userLikes: true
        }
      }
    }
  })

  if (!post) {
    notFound()
  }

  // Increment view count
  await prisma.forumPost.update({
    where: { id: params.id },
    data: { views: { increment: 1 } }
  })

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/forum" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Forum
          </Link>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Post Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments.length} replies</span>
                  </div>
                </div>
                <span>{formatDate(post.createdAt)}</span>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{post.content}</div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="p-8 bg-gray-50 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comments ({post.comments.length})
              </h2>

              <div className="space-y-6">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">{comment.author.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{formatDate(comment.createdAt)}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                  </div>
                ))}
              </div>

              {post.comments.length === 0 && (
                <p className="text-gray-600 text-center py-8">
                  No comments yet. Be the first to respond!
                </p>
              )}

              {/* Comment Form */}
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add a Comment</h3>
                <form className="space-y-4">
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Share your thoughts..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}