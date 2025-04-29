"use client"

import { useState, useEffect } from "react"
import charcoal from "../Assets/prod-20210611-2141056507810589040688126-jpg-500x500.webp"
import { ArrowRight, Leaf, Flame, Recycle } from "lucide-react"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Flame className="w-5 h-5" />,
      text: "Higher Heat Output",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      text: "Eco-Friendly",
    },
    {
      icon: <Recycle className="w-5 h-5" />,
      text: "Sustainable",
    },
  ]

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-10 dark:opacity-5" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" className="text-green-800" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-500 blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-700 blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`max-w-xl transition-all duration-1000 ease-out transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400 mr-2"></span>
              <span className="text-sm font-medium text-green-800 dark:text-green-300">Premium Charcoal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              <span className="block">Sustainable Charcoal,</span>
              <span className="block mt-1 text-green-600 dark:text-green-400">Crafted for a Greener Tomorrow</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              At Black Charcoal Diamond, we produce high-quality, eco-friendly charcoal that powers homes and businesses
              while preserving the environment. Discover the clean energy solution you've been waiting for.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md"
                >
                  <div className="text-green-600 dark:text-green-400 mr-2">{feature.icon}</div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 border border-green-600 dark:border-green-400 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-40 h-40 border-4 border-green-600 rounded-full opacity-20 dark:opacity-10"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-600 rounded-full opacity-20 dark:opacity-10"></div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-gray-800 p-4 rounded-2xl shadow-2xl overflow-hidden z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,0,0.1),transparent_70%)]"></div>

                {/* Image */}
                <div className="relative rounded-xl overflow-hidden shadow-inner transition-transform duration-500 hover:scale-[1.02] transform-gpu">
                  <img
                    src={charcoal || "/placeholder.svg"}
                    alt="Premium Eco-friendly Charcoal"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50">
                        <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="ml-2 text-sm font-bold text-gray-900 dark:text-white">100% Eco-Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1.5 bg-white dark:bg-gray-800 shadow-md rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                Premium quality for high-performance cooking & heating
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white dark:fill-gray-800"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-white dark:fill-gray-800"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white dark:fill-gray-800"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
