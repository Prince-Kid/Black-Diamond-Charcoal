import char1 from "../Assets/black diaminds charcoal innovations.jpg"
import char2 from "../Assets/prod-20210611-2141056507810589040688126-jpg-500x500.webp"
import { CheckCircle } from "lucide-react"

const About = () => {
  const benefits = [
    "Premium quality charcoal with longer burning time",
    "Eco-friendly production methods",
    "Less smoke and higher heat output",
    "Sustainable sourcing practices",
  ]

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-500 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-green-700 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
            Our Story
          </h2>
          <h3 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            About Black Charcoal Diamond
          </h3>
          <div className="mt-4 max-w-3xl mx-auto">
            <span className="inline-block w-40 h-1 bg-green-600 rounded-full"></span>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 mb-12 lg:mb-0">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At Black Charcoal Diamond, we are committed to producing premium, eco-friendly charcoal that fuels
                homes, businesses, and industries with efficiency and sustainability. Founded with a vision to provide
                high-quality charcoal while reducing the environmental impact, our mission is simple: to offer an energy
                solution that is both reliable and responsible.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                With years of expertise in charcoal production, we focus on using sustainable practices that minimize
                waste and carbon emissions. Our charcoal is carefully crafted to ensure it burns longer, generates more
                heat, and produces less smoke—making it the ideal choice for both domestic use and large-scale
                industrial applications.
              </p>

              {/* Benefits List */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Why Choose Our Charcoal?</h4>
                <ul className="space-y-3 mt-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>

          {/* Images Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[500px] md:h-[600px] w-full">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[75%] h-[75%] rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src={char1 || "/placeholder.svg"}
                  alt="Black Diamond Charcoal Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              {/* Secondary Image */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 z-10">
                <img
                  src={char2 || "/placeholder.svg"}
                  alt="Premium Charcoal Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-600 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-green-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">5+</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">1000+</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">50+</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">Business Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">100%</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">Eco-Friendly</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
