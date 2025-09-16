import { z } from 'zod'

export const forumPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200, 'Title must be less than 200 characters'),
  content: z.string().min(20, 'Content must be at least 20 characters').max(5000, 'Content must be less than 5000 characters'),
  category: z.string().min(1, 'Please select a category'),
  tags: z.string().optional()
})

export const commentSchema = z.object({
  content: z.string().min(2, 'Comment must be at least 2 characters').max(1000, 'Comment must be less than 1000 characters')
})

export const categories = [
  'General Discussion',
  'Group Therapy Techniques',
  'Case Studies',
  'Theory Discussion',
  'Supervision',
  'Research',
  'Training',
  'Louis Ormont',
  'Other Authors'
] as const

export type ForumPostFormData = z.infer<typeof forumPostSchema>
export type CommentFormData = z.infer<typeof commentSchema>