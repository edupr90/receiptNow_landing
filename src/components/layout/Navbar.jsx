import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/reciboLogo.png" alt="ReceiptNow" className="h-9 w-9 rounded-lg" />
            <span className="text-xl font-extrabold text-secondary">ReceiptNow</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-text-secondary hover:text-primary font-semibold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/terms"
              className="text-text-secondary hover:text-primary font-semibold transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-text-secondary hover:text-primary font-semibold transition-colors"
            >
              Privacy
            </Link>
            <a
              href="#download"
              className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-lg transition-colors"
            >
              Download
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-md`}
      >
        <div className="px-4 py-4 space-y-3">
          <Link to="/" className="block text-text-secondary hover:text-primary font-semibold transition-colors">
            Home
          </Link>
          <Link to="/terms" className="block text-text-secondary hover:text-primary font-semibold transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="block text-text-secondary hover:text-primary font-semibold transition-colors">
            Privacy
          </Link>
          <a
            href="#download"
            className="block bg-primary text-white font-bold px-5 py-2.5 rounded-lg text-center"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}
