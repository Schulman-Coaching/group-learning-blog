import Link from 'next/link'
import { ArrowLeft, Users } from 'lucide-react'

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Authors</h1>
          <p className="text-lg text-gray-600">
            Learn about the lives and contributions of key figures in group psychoanalysis.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Database Connection Required</h2>
            </div>
            <p className="text-gray-600">
              The authors section requires a database connection to display author profiles and information.
              This feature will be available once the database is properly configured.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}