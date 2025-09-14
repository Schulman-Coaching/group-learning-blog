export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Understanding How Groups
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learn Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Insights into group dynamics, metacognition, and the art of facilitating collective learning. 
            Explore research, case studies, and practical tools for creating more effective learning communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Reading
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Group Learning Lab</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This blog explores the fascinating intersection of group dynamics and metacognition. 
            How do groups learn collectively? What makes some teams more intelligent than others? 
            How can we help people become more aware of their thinking processes in group settings?
          </p>
        </div>
      </section>
    </div>
  )
}
