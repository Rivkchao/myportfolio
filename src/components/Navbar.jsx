import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (window.scrollY > 100) {
        navbar.classList.add('bg-black', 'bg-opacity-90')
      } else {
        navbar.classList.remove('bg-black', 'bg-opacity-90')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 glass transition-all duration-300" id="navbar">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">RPS</div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-link hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="nav-link hover:text-blue-400 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="nav-link hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 mt-2 mb-3 space-y-4">
             <Link
            to="home"
            smooth={true}
            duration={500}
            className="block hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="block hover:text-blue-400 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}