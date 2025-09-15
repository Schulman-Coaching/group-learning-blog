import prisma from '@/lib/prisma'
import { MessageSquare, Users, Eye, Plus, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default async function ForumPage() {
  const forumPosts = await prisma.forumPost.findMany({
    include: {
      author: {
        select: { name: true, id: true }
      },
      _count: {
        select: {
          comments: true,
          userLikes: true
        }
      }
    },
    orderBy: [
      { createdAt: 'desc' }
    ]
  })

  const categories = [
    'General Discussion',
    'Group Therapy Techniques',
    'Case Studies',
    'Theory Discussion',
    'Supervision',
    'Research',
    'Training',
    'Louis Ormont',
    'Other Authors'
  ]

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Community Forum
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join discussions about group psychoanalysis, share insights, ask questions, and connect with practitioners worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Recent Discussions ({forumPosts.length})
              </h2>
              <Link 
                href="/forum/new"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Post</span>
              </Link>
            </div>

            <div className="space-y-6">
              {forumPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Link href={`/forum/${post.id}`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-4">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
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
                          <MessageCircle className="h-4 w-4" />
                          <span>{post._count.comments} replies</span>
                        </div>
                      </div>
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {forumPosts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg mb-2">No discussions yet.</p>
                <p className="text-gray-500">Be the first to start a conversation!</p>
                <Link 
                  href="/forum/new"
                  className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Start Discussion</span>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link 
                        href={`/forum?category=${encodeURIComponent(category)}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Forum Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Forum Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Posts:</span>
                    <span className="font-semibold">{forumPosts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Views:</span>
                    <span className="font-semibold">{forumPosts.reduce((sum, post) => sum + post.views, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Comments:</span>
                    <span className="font-semibold">{forumPosts.reduce((sum, post) => sum + post._count.comments, 0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}