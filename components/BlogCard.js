import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { format } from 'date-fns'

export default function BlogCard({ post, featured = false }) {
  return (
    <article className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'md:col-span-1' : ''}`}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {featured && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Featured
            </span>
          )}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="h-3 w-3" />
            {format(new Date(post.date), 'MMM d, yyyy')}
          </div>
          <span className="text-sm text-gray-500">•</span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </div>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}