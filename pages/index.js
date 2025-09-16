// pages/index.js
export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '1.5rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              padding: '0.5rem',
              borderRadius: '0.5rem'
            }}>
              <span style={{ fontSize: '2rem' }}>🧠</span>
            </div>
            <div>
              <h1 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0
              }}>
                Group Learning Lab
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Exploring group processes & learning about learning
              </p>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Blog</a>
            <a href="#" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>About</a>
            <a href="#" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Resources</a>
            <a href="#" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Newsletter</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: 'bold', 
            color: '#111827',
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            Understanding How Groups
            <span style={{ 
              display: 'block',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Learn Together
            </span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Insights into group dynamics, metacognition, and the art of facilitating collective learning. 
            Explore research, case studies, and practical tools for creating more effective learning communities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              fontSize: '1rem'
            }}>
              Start Reading
            </button>
            <button style={{
              border: '1px solid #d1d5db',
              color: '#374151',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              background: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ 
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #f0f9ff, #e0e7ff)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🧠</div>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            color: '#111827',
            marginBottom: '1.5rem'
          }}>
            About Group Learning Lab
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280',
            lineHeight: 1.6
          }}>
            This blog explores the fascinating intersection of group dynamics and metacognition. 
            How do groups learn collectively? What makes some teams more intelligent than others? 
            How can we help people become more aware of their thinking processes in group settings?
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: '#111827', 
        color: 'white', 
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <p>&copy; 2025 Group Learning Lab. Built with Next.js and deployed on Vercel.</p>
      </footer>
    </div>
  )
}
