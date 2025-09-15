'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { forumPostSchema, categories, type ForumPostFormData } from '@/lib/validations'
import { MessageSquare, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewForumPost() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const data: ForumPostFormData = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      category: formData.get('category') as string,
      tags: formData.get('tags') as string
    }

    try {
      // Validate form data
      const validatedData = forumPostSchema.parse(data)
      
      // Here you would typically make an API call to create the post
      // For now, we'll simulate a successful submission
      console.log('Creating forum post:', validatedData)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to forum
      router.push('/forum')
      
    } catch (error) {
      if (error instanceof Error) {
        // Handle validation errors
        if (error.message.includes('Title')) {
          setErrors(prev => ({ ...prev, title: error.message }))
        } else if (error.message.includes('Content')) {
          setErrors(prev => ({ ...prev, content: error.message }))
        } else if (error.message.includes('category')) {
          setErrors(prev => ({ ...prev, category: 'Please select a category' }))
        }
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/forum" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Forum
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-8 w-8" />
                <h1 className="text-3xl font-bold">Create New Post</h1>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <!-- Title -->
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter a descriptive title for your post..."
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              <!-- Category -->
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *</label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a category...</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              <!-- Content -->
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content *</label>
                <textarea
                  id="content"
                  name="content"
                  rows={10}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Share your thoughts, questions, or insights..."
                ></textarea>
                {errors.content && (
                  <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                )}
              </div>

              <!-- Tags -->
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (optional)</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Add tags separated by commas..."
                />
                <p className="mt-1 text-sm text-gray-500">
                  Add relevant tags to help others find your post (e.g., group therapy, resistance, bridge technique)
                </p>
              </div>

              <!-- Submit Button -->
              <div className="flex justify-end space-x-4">
                <Link
                  href="/forum"
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </span>
                  ) : (
                    'Create Post'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}