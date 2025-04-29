"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X, Leaf } from "lucide-react"

const NavBar = () => {
  const [active, setActive] = useState("home")
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle toggling dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    const theme = newMode ? "dark" : "light"
    localStorage.setItem("theme", theme)
    document.documentElement.classList.toggle("dark", newMode)
  }

  // Initialize theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSetActive = (section: string) => {
    setActive(section)
    setIsMobileMenuOpen(false) // Close menu on link click
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  // Navigation links
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "team", label: "Our Team" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-full bg-green-600 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Black <span className="text-green-600 dark:text-green-400">Charcoal</span> Diamond
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleSetActive(link.id)}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 dark:bg-green-400 rounded-full transform origin-left"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Order Button (Desktop) */}
            <a
              href="/order"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              Order Now
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleSetActive(link.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                active === link.id
                  ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/order"
            className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700 transition-colors mt-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default NavBar
