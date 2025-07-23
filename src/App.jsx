import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import '@sweetalert2/themes/dark/dark.css';

export default function App() {
  // IntersectionObserver + Skill Bars
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => {
      fadeObserver.observe(el)
    })

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-bar')
          skillBars.forEach(bar => {
            setTimeout(() => {
              bar.classList.add('animate')
            }, 300)
          })
        }
      })
    }, observerOptions)

    const aboutSection = document.getElementById('about')
    if (aboutSection) skillObserver.observe(aboutSection)

    return () => {
      fadeObserver.disconnect()
      skillObserver.disconnect()
    }
  }, [])

  // Cursor trail
  useEffect(() => {
    const handleMove = (e) => {
      const trail = document.createElement('div')
      trail.className = 'fixed w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-50 opacity-70'
      trail.style.left = `${e.clientX}px`
      trail.style.top = `${e.clientY}px`
      document.body.appendChild(trail)
      setTimeout(() => trail.remove(), 1000)
    }

    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
