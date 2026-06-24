import About from '@/components/About'
import Header from '@/components/Header'
// import Skills from '@/components/Skills' // Unmounted - keeping code
import Recommendations from '@/components/Recommendations'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import FeaturedWork from '@/components/FeaturedWork'
import Hobbies from '@/components/Hobbies'
import Outcomes from '@/components/Outcomes'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* About section with black background */}
      <section id="about" className="bg-black py-20">
        <About />
      </section>

      {/* Outcomes section with white background */}
      <section id="outcomes" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Outcomes />
        </div>
      </section>

      {/* Featured Work section with light gray background */}
      <section id="featured-work" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <FeaturedWork />
        </div>
      </section>

      {/* Projects section with white background */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* Recommendations section with light gray background */}
      <section id="recommendations" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Recommendations />
        </div>
      </section>

      {/* Hobbies section with white background */}
      <section id="hobbies" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Hobbies />
        </div>
      </section>

      {/* Contact section with light gray background */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Contact />
        </div>
      </section>
    </main>
  )
}

