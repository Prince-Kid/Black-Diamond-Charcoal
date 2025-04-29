"use client"

import { useState } from "react"
import { Facebook, Instagram, Twitter, Github, Dribbble, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  const [active, setActive] = useState("home")

  const handleSetActive = (section: string) => {
    setActive(section)
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Dribbble className="w-5 h-5" />, href: "#", label: "Dribbble" },
  ]

  const navLinks = [
    { name: "home", label: "Home", href: "#hero" },
    { name: "about", label: "About Us", href: "#about" },
    { name: "team", label: "Team", href: "#team" },
    { name: "contact", label: "Contact Us", href: "#contact" },
  ]

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: "Rubavu, Gisenyi", href: "#" },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "ericmunyaneza087@gmail.com",
      href: "mailto:ericmunyaneza087@gmail.com",
    },
    { icon: <Phone className="w-5 h-5" />, text: "+250 785 623 396", href: "tel:+250785623396" },
  ]

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a href="/" className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">BD</span>
                </div>
                <span className="self-center text-2xl font-bold text-gray-900 dark:text-white">BDCI</span>
              </a>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Black Diamond Charcoal Industries provides premium, eco-friendly charcoal solutions for homes and
                businesses across Rwanda.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-wider dark:text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-green-600">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => handleSetActive(link.name)}
                    className={`text-base ${
                      active === link.name
                        ? "text-green-600 dark:text-green-400 font-medium"
                        : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-wider dark:text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-green-600">
              Our Services
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                >
                  Premium Charcoal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                >
                  Bulk Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                >
                  Business Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                >
                  Eco-friendly Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-wider dark:text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-green-600">
              Contact Us
            </h2>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-green-600 dark:text-green-400">{item.icon}</div>
                  <a
                    href={item.href}
                    className="ml-3 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Stay updated with our latest news and offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-r-md hover:bg-green-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="font-medium">Black Diamond Charcoal</span>. All Rights
            Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
