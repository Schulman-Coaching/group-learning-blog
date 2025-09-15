import Link from 'next/link'
import { BookOpen, Users, MessageSquare, Search, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Louis Ormont
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Archive
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the groundbreaking writings of Louis Ormont and other pioneering group psychoanalysts. 
              Access rare texts, join discussions, and connect with a community of practitioners and scholars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/writings" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2">
                <span>Explore Writings</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/forum" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Join Discussion</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover & Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access rare writings, engage with fellow practitioners, and contribute to preserving the legacy of group psychoanalysis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="bg-blue-600 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Writings Library</h3>
              <p className="text-gray-600 mb-4">
                Access Louis Ormont's complete works plus writings from other influential group psychoanalysts. Search, filter, and read rare texts.
              </p>
              <Link href="/writings" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-1">
                <span>Browse Library</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="bg-purple-600 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Forum</h3>
              <p className="text-gray-600 mb-4">
                Join discussions about group psychoanalysis, share insights, ask questions, and connect with practitioners worldwide.
              </p>
              <Link href="/forum" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center space-x-1">
                <span>Join Discussion</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="bg-green-600 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Tools</h3>
              <p className="text-gray-600 mb-4">
                Advanced search and filtering tools help you find specific concepts, techniques, and writings across the entire archive.
              </p>
              <Link href="/search" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center space-x-1">
                <span>Start Research</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Louis Ormont Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Louis Ormont
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Louis Ormont (1918-2008) was a pioneering group psychoanalyst known for his innovative work on group process, 
            resistance, and the "bridge" technique. A founding member of the American Group Psychotherapy Association, 
            Ormont made significant contributions to understanding group dynamics and therapeutic interventions.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            His approach emphasized the therapist's active engagement in the group process while maintaining professional boundaries, 
            and his writings continue to influence group therapists worldwide. This archive preserves his legacy and makes his work 
            accessible to new generations of practitioners.
          </p>
          <Link href="/authors/louis-ormont" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of group psychoanalysis practitioners, scholars, and students.
          </p>
          <Link href="/writings" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Start Exploring</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}