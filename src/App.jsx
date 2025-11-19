import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Footer />
    </div>
  )
}

export default App
