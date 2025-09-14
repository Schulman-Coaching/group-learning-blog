import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllPosts() {
  const files = fs.readdirSync(contentDirectory)
  
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(contentDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      const stats = readingTime(content)
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        tags: data.tags || [],
        category: data.category,
        featured: data.featured || false,
        readingTime: stats.text,
        ...data
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  
  return posts
}

export async function getPostBySlug(slug) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)
  
  return {
    slug,
    content,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    tags: data.tags || [],
    category: data.category,
    featured: data.featured || false,
    readingTime: stats.text,
    ...data
  }
}