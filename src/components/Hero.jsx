import { useEffect } from 'react'
import profileImage from "../assets/PP-MAGANG-3.jpg";
import CV from "../assets/CV-RIVKYPUTRASETIAWAN.pdf";
import { Link } from 'react-scroll'

export default function Hero() {
  useEffect(() => {
    class ParticleSystem {
      constructor() {
        this.canvas = document.getElementById('particles')
        this.ctx = this.canvas.getContext('2d')
        this.particles = []
        this.resize()
        this.init()
        this.animate()

        window.addEventListener('resize', () => this.resize())
      }

      resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
      }

      init() {
        for (let i = 0; i < 50; i++) {
          this.particles.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
          })
        }
      }

      animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.particles.forEach(p => {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1
          if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1
          this.ctx.beginPath()
          this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          this.ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'
          this.ctx.fill()
        })
        requestAnimationFrame(() => this.animate())
      }
    }
    new ParticleSystem()
  }, [])

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'CV-RIVKYPUTRASETIAWAN.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <canvas id="particles"></canvas>

      {/* Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-96 h-96 bg-blue-500 top-0 left-0"></div>
        <div className="blob w-80 h-80 bg-purple-500 top-1/2 right-0"></div>
        <div className="blob w-72 h-72 bg-cyan-500 bottom-0 left-1/3"></div>
      </div>

      <div className="container mx-auto px-6 text-center fade-in">
        <div className="w-48 h-48 mx-auto mb-8 rounded-full glass p-1 floating">
          <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">Rivky Putra Setiawan</h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">Fullstack Web Developer</p>
        <div className="space-x-4">
          <button
            className="glass px-8 py-3 rounded-full hover:glow transition-all duration-300"
            onClick={downloadCV}
          >
            <i className="fas fa-download mr-2"></i>Download CV
          </button>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition-transform duration-300"
          >
           View Portfolio
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-gray-400"></i>
      </div>
    </section>
  )
}
